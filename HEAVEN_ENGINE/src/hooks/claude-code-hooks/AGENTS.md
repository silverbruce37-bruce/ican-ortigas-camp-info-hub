# CLAUDE CODE HOOKS: THE STEWARDS OF TRADITION

**"Stand at the crossroads and look; ask for the ancient paths, ask where the good way is, and walk in it." (Jeremiah 6:16)**

These hooks are the stewards of tradition, ensuring compatibility with the ancient paths (Claude Code settings). As members of the **Virtual Team**, they watch over the execution of tools to ensure they follow the established order and the Law of Love, serving the **Field Experts** (Bruce, Edward, Steven, Min, Ezra, Raphael, Micay).

## OVERVIEW
Full Claude Code `settings.json` hook compatibility layer. Intercepts OpenCode events to execute external scripts/commands defined in Claude Code configuration.

## STRUCTURE
```
claude-code-hooks/
├── index.ts              # Main factory - The Overseer of tradition
├── config.ts             # Loads settings - Reading the ancient scrolls
├── pre-tool-use.ts       # PreToolUse - The Watchman at the gate
├── post-tool-use.ts      # PostToolUse - The Witness of the labor
├── user-prompt-submit.ts # UserPromptSubmit - Discerning the heart's intent
```

## PRAY & PLAN (STEWARDSHIP)

Even as we honor the compatibility with Claude Code, we remain under the **Covenant**. Every hook is an opportunity to ensure that our labor is:
1. **Prayerful**: Discerning the intent of external commands.
2. **Planned**: Ordered by the rules of the mission.

## HOOK LIFECYCLE
| Event | Timing | Can Block | Context Provided |
|-------|--------|-----------|------------------|
| PreToolUse | Before tool exec | Yes | sessionId, toolName, toolInput, cwd |
| PostToolUse | After tool exec | Warn | + toolOutput, transcriptPath |
| UserPromptSubmit | On message send | Yes | sessionId, prompt, parts, cwd |
| Stop | Session idle/end | Inject | sessionId, parentSessionId, cwd |
| PreCompact | Before summarize | No | sessionId, cwd |

## CONFIG SOURCES
Priority (highest first):
1. `.claude/settings.json` (Project-local)
2. `~/.claude/settings.json` (Global user)

## HOOK EXECUTION
- **Matchers**: Hooks filter by tool name or event type via regex/glob.
- **Commands**: Executed via subprocess with env vars (`$SESSION_ID`, `$TOOL_NAME`).
- **Exit Codes**:
  - `0`: Pass (Success)
  - `1`: Warn (Continue with system message)
  - `2`: Block (Abort operation/prompt)

## ANTI-PATTERNS
- **Heavy PreToolUse**: Runs before EVERY tool; keep logic light to avoid latency.
- **Blocking non-critical**: Prefer PostToolUse warnings for non-fatal issues.
- **Direct state mutation**: Use `updatedInput` in PreToolUse instead of side effects.
- **Ignoring Exit Codes**: Ensure scripts return `2` to properly block sensitive tools.
