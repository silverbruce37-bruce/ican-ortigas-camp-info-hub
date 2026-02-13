/**
 * Agent config keys to display names mapping with biblical personas.
 */
export const AGENT_DISPLAY_NAMES: Record<string, string> = {
  timothy: "Timothy (Main Prompt Orchestrator)",
  paul: "Paul (Master Orchestrator)",
  silas: "Silas (Plan Review & Truth Verification)",
  berean: "Berean (Senior Developer)",
  mark: "Mark (Faithful Executor)",
  titus: "Titus (Organizing Overseer)",
  barnabas: "Barnabas (Strategic Encourager)",
  luke: "Luke (Faithful Historian)",
  epaphras: "Epaphras (Diligent Searcher)",
  john: "John (The Visionary)",
  lydia: "Lydia (Discernment Giver)",
  // Backward compatibility aliases if needed
  sisyphus: "Silas (Plan Review)",
  atlas: "Timothy (Main Prompt)",
  prometheus: "Titus (Planner)",
  "sisyphus-junior": "Mark (Executor)",
}

/**
 * Get display name for an agent config key.
 */
export function getAgentDisplayName(configKey: string): string {
  const lowerKey = configKey.toLowerCase()
  const exactMatch = AGENT_DISPLAY_NAMES[lowerKey]
  if (exactMatch !== undefined) return exactMatch

  // Unknown agent: return original key
  return configKey
}