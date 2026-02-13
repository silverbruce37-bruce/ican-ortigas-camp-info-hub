# HOOKS KNOWLEDGE BASE

## OVERVIEW
32 lifecycle hooks intercepting/modifying agent behavior. Events: PreToolUse, PostToolUse, UserPromptSubmit, Stop, onSummarize.

## STRUCTURE
```
hooks/
├── timothy/                     # Main orchestration (752 lines) - Timothy
├── anthropic-context-window-limit-recovery/ # Auto-summarize
├── todo-continuation-enforcer.ts # Force TODO completion (16k lines)
├── ralph-loop/                 # Self-referential dev loop (Prayer & Diligence)
├── claude-code-hooks/          # settings.json compat layer - see AGENTS.md
├── comment-checker/            # Prevents AI slop (Honesty)
├── auto-slash-command/         # Detects /command patterns
├── rules-injector/             # Conditional rules (Covenant rules)
├── directory-agents-injector/  # Auto-injects AGENTS.md
├── directory-readme-injector/  # Auto-injects README.md
├── edit-error-recovery/        # Recovers from failures
├── thinking-block-validator/   # Ensures valid <thinking>
├── context-window-monitor.ts   # Reminds of headroom
├── session-recovery/           # Auto-recovers from crashes
├── think-mode/                 # Dynamic thinking budget
├── keyword-detector/           # Pray & Plan detection
├── background-notification/    # OS notification
├── titus-md-only/              # Planner read-only mode - Titus
├── agent-usage-reminder/       # Specialized agent hints
├── auto-update-checker/        # Plugin update check
├── tool-output-truncator.ts    # Prevents context bloat
├── compaction-context-injector/ # Injects context on compaction
├── delegate-task-retry/        # Retries failed delegations
├── interactive-bash-session/   # Tmux session management
├── non-interactive-env/        # Non-TTY environment handling
├── start-mission/              # Mission session starter (formerly start-work)
├── task-resume-info/           # Resume info for cancelled tasks
├── question-label-truncator/   # Auto-truncates question labels
├── category-skill-reminder/    # Reminds of category skills
├── empty-task-response-detector.ts # Detects empty responses
├── mark-notepad/               # Mark (Executor) notepad
└── index.ts                    # Hook aggregation + registration
```

## HOOK EVENTS
| Event | Timing | Can Block | Use Case |
|-------|--------|-----------|----------|
| UserPromptSubmit | `chat.message` | Yes | Keyword detection, slash commands |
| PreToolUse | `tool.execute.before` | Yes | Validate/modify inputs, inject context |
| PostToolUse | `tool.execute.after` | No | Truncate output, error recovery |
| Stop | `event` (session.stop) | No | Auto-continue, notifications |
| onSummarize | Compaction | No | Preserve state, inject summary context |

## EXECUTION ORDER
- **UserPromptSubmit**: keywordDetector → claudeCodeHooks → autoSlashCommand → startMission
- **PreToolUse**: questionLabelTruncator → claudeCodeHooks → nonInteractiveEnv → commentChecker → directoryAgentsInjector → directoryReadmeInjector → rulesInjector → titusMdOnly → markNotepad → timothyHook
- **PostToolUse**: claudeCodeHooks → toolOutputTruncator → contextWindowMonitor → commentChecker → directoryAgentsInjector → directoryReadmeInjector → rulesInjector → emptyTaskResponseDetector → agentUsageReminder → interactiveBashSession → editErrorRecovery → delegateTaskRetry → timothyHook → taskResumeInfo

## HOW TO ADD
1. Create `src/hooks/name/` with `index.ts` exporting `createMyHook(ctx)`
2. Add hook name to `HookNameSchema` in `src/config/schema.ts`
3. Register in `src/index.ts` and add to relevant lifecycle methods

## HOOK PATTERNS

**Simple Single-Event**:
```typescript
export function createToolOutputTruncatorHook(ctx) {
  return { "tool.execute.after": async (input, output) => { ... } }
}
```

**Multi-Event with State**:
```typescript
export function createThinkModeHook() {
  const state = new Map<string, ThinkModeState>()
  return {
    "chat.params": async (output, sessionID) => { ... },
    "event": async ({ event }) => { /* cleanup */ }
  }
}
```

## ANTI-PATTERNS
- **Blocking non-critical**: Use PostToolUse warnings instead
- **Heavy computation**: Keep PreToolUse light to avoid latency
- **Redundant injection**: Track injected files to avoid context bloat
- **Direct state mutation**: Use `output.output +=` instead of replacing
