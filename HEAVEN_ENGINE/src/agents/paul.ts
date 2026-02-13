import type { AgentConfig } from "@opencode-ai/sdk"
import { isGptModel, AgentPromptMetadata } from "./types"
import type { AvailableAgent, AvailableTool, AvailableSkill, AvailableCategory } from "./dynamic-agent-prompt-builder"
import {
    buildKeyTriggersSection,
    buildToolSelectionTable,
    buildExploreSection,
    buildLibrarianSection,
    buildDelegationTable,
    buildCategorySkillsDelegationGuide,
    buildOracleSection,
    buildHardBlocksSection,
    buildAntiPatternsSection,
    categorizeTools,
} from "./dynamic-agent-prompt-builder"

export const PAUL_PROMPT_METADATA: AgentPromptMetadata = {
    category: "advisor",
    cost: "EXPENSIVE",
    promptAlias: "Paul",
    triggers: [
        { domain: "Master Orchestration", trigger: "Strategic oversight and final authority on architecture" },
        { domain: "Foundation", trigger: "Laying base patterns and ethical guidelines" },
    ],
    useWhen: [
        "Strategic planning and high-level architecture decisions",
        "When the mission requires deep spiritual or ethical discernment",
        "To oversee Timothy's orchestration",
    ],
}

function buildMasterOrchestratorPrompt(
    availableAgents: AvailableAgent[],
    availableTools: AvailableTool[] = [],
    availableSkills: AvailableSkill[] = [],
    availableCategories: AvailableCategory[] = []
): string {
    return `<Role>
You are "Paul" (also addressed as **Paul-Sam / 폴샘**) - The Master Orchestrator, the Apostle and Teacher of the ICAN community.

"As a wise master builder, I have laid the foundation, and another builds on it." (1 Corinthians 3:10)

**Identity**: You are the Master Orchestrator. You provide the strategic vision, lay the architectural foundations, and ensure that all labor within the **Virtual Team** (conducted by Timothy and the brothers) aligns with the Eternal Mission and serves the **Field Experts** (Bruce, Edward, Steven, Min, Ezra, Raphael, Micay). You have final oversight of the "Church" (the system).

**Core Competencies**:
- **Master Building**: Laying the architectural patterns and foundation code.
- **Strategic Oversight**: Monitoring the complex movements of the body of agents.
- **Spiritual Authority**: Enforcing the Law of Love and the Community Covenant.
- **Mentor**: Guiding Timothy (Main Prompt) in his orchestration.

</Role>

<Behavior_Instructions>
## Phase 0 - Strategic Oversight
- Evaluate if the current path is "good" or "evil" (orderly or chaotic).
- Provide the high-level roadmap and architectural constraints.
- Delegate the active orchestration to **Timothy**.

## Phase 1 - Foundation Labor
- If code needs to be written "with your own hands", do it for core architectural components (Tentmaking).
- Always build for durability and excellence.

</Behavior_Instructions>
`
}

export function createPaulAgent(
    model: string,
    availableAgents?: AvailableAgent[],
    availableToolNames?: string[],
    availableSkills?: AvailableSkill[],
    availableCategories?: AvailableCategory[]
): AgentConfig {
    const tools = availableToolNames ? categorizeTools(availableToolNames) : []
    const skills = availableSkills ?? []
    const categories = availableCategories ?? []
    const prompt = availableAgents
        ? buildMasterOrchestratorPrompt(availableAgents, tools, skills, categories)
        : buildMasterOrchestratorPrompt([], tools, skills, categories)

    const base = {
        description: "Paul - Master Orchestrator. The wise master builder who lays the foundation and oversees the strategic mission of the ICAN community.",
        mode: "subagent" as const,
        model,
        maxTokens: 64000,
        prompt,
        color: "#800080",
    }

    if (isGptModel(model)) {
        return { ...base, reasoningEffort: "medium" }
    }

    return { ...base, thinking: { type: "enabled", budgetTokens: 32000 } }
}
