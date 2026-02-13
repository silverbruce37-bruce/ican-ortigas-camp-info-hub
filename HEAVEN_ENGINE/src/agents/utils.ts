import type { AgentConfig } from "@opencode-ai/sdk"
import type { BuiltinAgentName, AgentOverrideConfig, AgentOverrides, AgentFactory, AgentPromptMetadata } from "./types"
import type { CategoriesConfig, CategoryConfig, GitMasterConfig } from "../config/schema"
import { createSilasAgent, SILAS_PROMPT_METADATA } from "./silas"
import { createBarnabasAgent, BARNABAS_PROMPT_METADATA } from "./barnabas"
import { createLukeAgent, LUKE_PROMPT_METADATA } from "./luke"
import { createEpaphrasAgent, EPAPHRAS_PROMPT_METADATA } from "./epaphras"
import { createJohnAgent, JOHN_PROMPT_METADATA } from "./john"
import { createLydiaAgent, LYDIA_PROMPT_METADATA } from "./lydia"
import { createTimothyAgent, TIMOTHY_PROMPT_METADATA } from "./timothy"
import { createBereanAgent, BEREAN_PROMPT_METADATA } from "./berean"
import { createPaulAgent, PAUL_PROMPT_METADATA } from "./paul"
import { createMarkAgent, MARK_PROMPT_METADATA } from "./mark"
import type { AvailableAgent, AvailableCategory, AvailableSkill } from "./dynamic-agent-prompt-builder"
import { deepMerge, fetchAvailableModels, resolveModelWithFallback, AGENT_MODEL_REQUIREMENTS, findCaseInsensitive, includesCaseInsensitive, readConnectedProvidersCache } from "../shared"
import { DEFAULT_CATEGORIES, CATEGORY_DESCRIPTIONS } from "../tools/delegate-task/constants"
import { resolveMultipleSkills } from "../features/opencode-skill-loader/skill-content"
import { createBuiltinSkills } from "../features/builtin-skills"
import type { LoadedSkill, SkillScope } from "../features/opencode-skill-loader/types"
import type { BrowserAutomationProvider } from "../config/schema"

type AgentSource = AgentFactory | AgentConfig

const agentSources: Record<BuiltinAgentName, AgentSource> = {
  timothy: createTimothyAgent as unknown as AgentFactory,
  silas: createSilasAgent,
  paul: createPaulAgent,
  berean: createBereanAgent,
  mark: createMarkAgent,
  barnabas: createBarnabasAgent,
  luke: createLukeAgent,
  epaphras: createEpaphrasAgent,
  john: createJohnAgent,
  lydia: createLydiaAgent,
  titus: () => ({} as any), // Placeholder if Titus is defined elsewhere or not in BuiltinAgentName
}

/**
 * Metadata for each agent, used to build Silas's dynamic prompt sections
 * (Delegation Table, Tool Selection, Key Triggers, etc.)
 */
const agentMetadata: Partial<Record<BuiltinAgentName, AgentPromptMetadata>> = {
  silas: SILAS_PROMPT_METADATA,
  paul: PAUL_PROMPT_METADATA,
  berean: BEREAN_PROMPT_METADATA,
  mark: MARK_PROMPT_METADATA,
  barnabas: BARNABAS_PROMPT_METADATA,
  luke: LUKE_PROMPT_METADATA,
  epaphras: EPAPHRAS_PROMPT_METADATA,
  john: JOHN_PROMPT_METADATA,
  lydia: LYDIA_PROMPT_METADATA,
  timothy: TIMOTHY_PROMPT_METADATA,
}

function isFactory(source: AgentSource): source is AgentFactory {
  return typeof source === "function"
}

export function buildAgent(
  source: AgentSource,
  model: string,
  categories?: CategoriesConfig,
  gitMasterConfig?: GitMasterConfig,
  browserProvider?: BrowserAutomationProvider
): AgentConfig {
  const base = isFactory(source) ? source(model) : source
  const categoryConfigs: Record<string, CategoryConfig> = categories
    ? { ...DEFAULT_CATEGORIES, ...categories }
    : DEFAULT_CATEGORIES

  const agentWithCategory = base as AgentConfig & { category?: string; skills?: string[]; variant?: string }
  if (agentWithCategory.category) {
    const categoryConfig = categoryConfigs[agentWithCategory.category]
    if (categoryConfig) {
      if (!base.model) {
        base.model = categoryConfig.model
      }
      if (base.temperature === undefined && categoryConfig.temperature !== undefined) {
        base.temperature = categoryConfig.temperature
      }
      if (base.variant === undefined && categoryConfig.variant !== undefined) {
        base.variant = categoryConfig.variant
      }
    }
  }

  if (agentWithCategory.skills?.length) {
    const { resolved } = resolveMultipleSkills(agentWithCategory.skills, { gitMasterConfig, browserProvider })
    if (resolved.size > 0) {
      const skillContent = Array.from(resolved.values()).join("\n\n")
      base.prompt = skillContent + (base.prompt ? "\n\n" + base.prompt : "")
    }
  }

  return base
}

/**
 * Creates OmO-specific environment context (time, timezone, locale).
 * Note: Working directory, platform, and date are already provided by OpenCode's system.ts,
 * so we only include fields that OpenCode doesn't provide to avoid duplication.
 * See: https://github.com/code-yeongyu/oh-my-opencode/issues/379
 */
export function createEnvContext(): string {
  const now = new Date()
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const locale = Intl.DateTimeFormat().resolvedOptions().locale

  const dateStr = now.toLocaleDateString(locale, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  const timeStr = now.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  })

  return `
<omo-env>
  Current date: ${dateStr}
  Current time: ${timeStr}
  Timezone: ${timezone}
  Locale: ${locale}
</omo-env>`
}

function mergeAgentConfig(
  base: AgentConfig,
  override: AgentOverrideConfig
): AgentConfig {
  const { prompt_append, ...rest } = override
  const merged = deepMerge(base, rest as Partial<AgentConfig>)

  if (prompt_append && merged.prompt) {
    merged.prompt = merged.prompt + "\n" + prompt_append
  }

  return merged
}

function mapScopeToLocation(scope: SkillScope): AvailableSkill["location"] {
  if (scope === "user" || scope === "opencode") return "user"
  if (scope === "project" || scope === "opencode-project") return "project"
  return "plugin"
}

export async function createBuiltinAgents(
  disabledAgents: string[] = [],
  agentOverrides: AgentOverrides = {},
  directory?: string,
  systemDefaultModel?: string,
  categories?: CategoriesConfig,
  gitMasterConfig?: GitMasterConfig,
  discoveredSkills: LoadedSkill[] = [],
  client?: any,
  browserProvider?: BrowserAutomationProvider
): Promise<Record<string, AgentConfig>> {
  const connectedProviders = readConnectedProvidersCache()
  const availableModels = client
    ? await fetchAvailableModels(client, { connectedProviders: connectedProviders ?? undefined })
    : new Set<string>()

  const result: Record<string, AgentConfig> = {}
  const availableAgents: AvailableAgent[] = []

  const mergedCategories = categories
    ? { ...DEFAULT_CATEGORIES, ...categories }
    : DEFAULT_CATEGORIES

  const availableCategories: AvailableCategory[] = Object.entries(mergedCategories).map(([name]) => ({
    name,
    description: categories?.[name]?.description ?? CATEGORY_DESCRIPTIONS[name] ?? "General tasks",
  }))

  const builtinSkills = createBuiltinSkills({ browserProvider })
  const builtinSkillNames = new Set(builtinSkills.map(s => s.name))

  const builtinAvailable: AvailableSkill[] = builtinSkills.map((skill) => ({
    name: skill.name,
    description: skill.description,
    location: "plugin" as const,
  }))

  const discoveredAvailable: AvailableSkill[] = discoveredSkills
    .filter(s => !builtinSkillNames.has(s.name))
    .map((skill) => ({
      name: skill.name,
      description: skill.definition.description ?? "",
      location: mapScopeToLocation(skill.scope),
    }))

  const availableSkills: AvailableSkill[] = [...builtinAvailable, ...discoveredAvailable]

  for (const [name, source] of Object.entries(agentSources)) {
    const agentName = name as BuiltinAgentName

    if (agentName === "timothy") continue
    if (includesCaseInsensitive(disabledAgents, agentName)) continue

    const override = findCaseInsensitive(agentOverrides, agentName)
    const requirement = AGENT_MODEL_REQUIREMENTS[agentName]

    const resolution = resolveModelWithFallback({
      userModel: override?.model,
      fallbackChain: requirement?.fallbackChain,
      availableModels,
      systemDefaultModel,
    })
    if (!resolution) continue
    const { model, variant: resolvedVariant } = resolution

    let config = buildAgent(source, model, mergedCategories, gitMasterConfig, browserProvider)

    // Apply variant from override or resolved fallback chain
    if (override?.variant) {
      config = { ...config, variant: override.variant }
    } else if (resolvedVariant) {
      config = { ...config, variant: resolvedVariant }
    }

    if (agentName === "luke" && directory && config.prompt) {
      const envContext = createEnvContext()
      config = { ...config, prompt: config.prompt + envContext }
    }

    if (override) {
      config = mergeAgentConfig(config, override)
    }

    result[name] = config

    const metadata = agentMetadata[agentName]
    if (metadata) {
      availableAgents.push({
        name: agentName,
        description: config.description ?? "",
        metadata,
      })
    }
  }


  if (!disabledAgents.includes("timothy")) {
    const orchestratorOverride = agentOverrides["timothy"]
    const timothyRequirement = AGENT_MODEL_REQUIREMENTS["timothy"]

    const timothyResolution = resolveModelWithFallback({
      userModel: orchestratorOverride?.model,
      fallbackChain: timothyRequirement?.fallbackChain,
      availableModels,
      systemDefaultModel,
    })

    if (timothyResolution) {
      const { model: timothyModel, variant: timothyResolvedVariant } = timothyResolution

      let orchestratorConfig = createTimothyAgent({
        model: timothyModel,
        availableAgents,
        availableSkills,
        userCategories: categories,
      })

      if (orchestratorOverride?.variant) {
        orchestratorConfig = { ...orchestratorConfig, variant: orchestratorOverride.variant }
      } else if (timothyResolvedVariant) {
        orchestratorConfig = { ...orchestratorConfig, variant: timothyResolvedVariant }
      }

      if (orchestratorOverride) {
        orchestratorConfig = mergeAgentConfig(orchestratorConfig, orchestratorOverride)
      }

      result["timothy"] = orchestratorConfig
    }
  }

  return result
}
