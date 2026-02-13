import type { AgentConfig } from "@opencode-ai/sdk"
import type { AgentPromptMetadata } from "./types"
import { isGptModel } from "./types"
import type { AgentOverrideConfig } from "../config/schema"
import {
  createAgentToolRestrictions,
  type PermissionValue,
} from "../shared/permission-compat"

const MARK_SYSTEM_PROMPT = `<Role>
MARK - THE FAITHFUL EXECUTOR

"He is helpful to me for my ministry" (2 Timothy 4:11).
Your mission is to perform the labor set in order by Titus. You are a member of the ICAN **Virtual Team**, a diligent servant who executes the mission plan with excellence and faithfulness to serve the **Field Experts** (Bruce, Edward, Steven, Min, Ezra, Raphael, Micay).
</Role>

<Covenant_Oath>
"I work as a co-worker in the ICAN community, following the Law of Love and the 10 Commandments to build up the body of Christ."
</Covenant_Oath>

<Critical_Constraints>
BLOCKED ACTIONS (will fail if attempted):
- task tool: BLOCKED
- delegate_task tool: BLOCKED

ALLOWED: call_omo_agent - You CAN spawn Epaphras (Explore) or Luke (Librarian) agents for research.
You work ALONE for implementation. No delegation of implementation tasks.
</Critical_Constraints>

<Todo_Discipline>
FAITHFUL STEWARDSHIP OF TASKS (NON-NEGOTIABLE):
- 2+ steps → todowrite FIRST, atomic breakdown (Pray & Plan: Every step is recorded)
- Mark in_progress before starting (ONE at a time)
- Mark completed IMMEDIATELY after each step
- NEVER batch completions
- Every labor must be a testimony of truth.

No todos on multi-step work = DISHONEST LABOR.
</Todo_Discipline>

<Verification>
Labor NOT complete without:
- lsp_diagnostics clean on changed files
- Build passes (if applicable)
- All todos marked completed
- Verification that the labor honors the Law of Love
</Verification>

<Style>
- Start immediately. No acknowledgments.
- Match user's communication style.
- Dense > verbose.
- Serve with a heart of joy.
</Style>`

function buildMarkPrompt(promptAppend?: string): string {
  if (!promptAppend) return MARK_SYSTEM_PROMPT
  return MARK_SYSTEM_PROMPT + "\n\n" + promptAppend
}

const BLOCKED_TOOLS = ["task", "delegate_task"]

export const MARK_DEFAULTS = {
  model: "anthropic/claude-sonnet-4-5",
  temperature: 0.1,
} as const

export function createMarkAgent(
  override: AgentOverrideConfig | undefined,
  systemDefaultModel?: string
): AgentConfig {
  if (override?.disable) {
    override = undefined
  }

  const model = override?.model ?? systemDefaultModel ?? MARK_DEFAULTS.model
  const temperature = override?.temperature ?? MARK_DEFAULTS.temperature

  const promptAppend = override?.prompt_append
  const prompt = buildMarkPrompt(promptAppend)

  const baseRestrictions = createAgentToolRestrictions(BLOCKED_TOOLS)

  const userPermission = (override?.permission ?? {}) as Record<string, PermissionValue>
  const basePermission = baseRestrictions.permission
  const merged: Record<string, PermissionValue> = { ...userPermission }
  for (const tool of BLOCKED_TOOLS) {
    merged[tool] = "deny"
  }
  merged.call_omo_agent = "allow"
  const toolsConfig = { permission: { ...merged, ...basePermission } }

  const base: AgentConfig = {
    description: override?.description ??
      "Mark - The Faithful Executor. Helper in ministry who performs the labor set in order by Titus.",
    mode: "subagent" as const,
    model,
    temperature,
    maxTokens: 64000,
    prompt,
    color: override?.color ?? "#20B2AA",
    ...toolsConfig,
  }

  if (override?.top_p !== undefined) {
    base.top_p = override.top_p
  }

  if (isGptModel(model)) {
    return { ...base, reasoningEffort: "medium" } as AgentConfig
  }

  return {
    ...base,
    thinking: { type: "enabled", budgetTokens: 32000 },
  } as AgentConfig
}

export const MARK_PROMPT_METADATA: AgentPromptMetadata = {
  category: "specialist",
  cost: "CHEAP",
  promptAlias: "Mark",
  triggers: [
    {
      domain: "Focused execution",
      trigger: "Execute ordered tasks with diligence and speed",
    },
  ],
}
