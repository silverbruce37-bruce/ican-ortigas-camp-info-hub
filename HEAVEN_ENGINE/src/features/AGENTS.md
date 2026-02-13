# FEATURES KNOWLEDGE BASE

## OVERVIEW

Core feature modules + Claude Code compatibility layer. Orchestrates background agents, skill MCPs, builtin skills/commands, and 16 feature modules.

## STRUCTURE

```
features/
├── background-agent/           # Task lifecycle (1377 lines) - Faithful Co-workers
│   ├── manager.ts              # Launch → poll → complete
│   └── concurrency.ts          # Per-provider limits
├── builtin-skills/             # Core skills (1729 lines) - Holy Talents
│   └── skills.ts               # agent-browser, dev-browser, frontend-ui-ux, git-master, typescript-programmer
├── builtin-commands/           # ralph-loop, refactor, ulw-loop, init-deep, start-mission, cancel-ralph
├── claude-code-agent-loader/   # ~/.claude/agents/*.md
├── claude-code-command-loader/ # ~/.claude/commands/*.md
├── claude-code-mcp-loader/     # .mcp.json with ${VAR} expansion
├── claude-code-session-state/  # Session persistence (Historical records)
├── opencode-skill-loader/      # Skills from 6 directories
├── context-injector/           # AGENTS.md/README.md injection - Covenant infusion
├── boulder-state/              # Todo state persistence - Timothy's Mission Map
├── hook-message-injector/      # Message injection
├── task-toast-manager/         # Background task notifications
├── skill-mcp-manager/          # MCP client lifecycle (520 lines)
├── tmux-subagent/              # Tmux session management - Mark's Workshop
└── ... (16 modules total)
```

## LOADER PRIORITY

| Type | Priority (highest first) |
|------|--------------------------|
| Commands | `.opencode/command/` > `~/.config/opencode/command/` > `.claude/commands/` |
| Skills | `.opencode/skills/` > `~/.config/opencode/skills/` > `.claude/skills/` |
| MCPs | `.claude/.mcp.json` > `.mcp.json` > `~/.claude/.mcp.json` |

## BACKGROUND AGENT

- **Lifecycle**: `launch` → `poll` (2s) → `complete`
- **Stability**: 3 consecutive polls = idle
- **Concurrency**: Per-provider/model limits via `ConcurrencyManager`
- **Cleanup**: 30m TTL, 3m stale timeout
- **State**: Per-session Maps, cleaned on `session.deleted`

## SKILL MCP

- **Lazy**: Clients created on first call
- **Transports**: stdio, http (SSE/Streamable)
- **Lifecycle**: 5m idle cleanup

## ANTI-PATTERNS

- **Sequential delegation**: Use `delegate_task` parallel
- **Trust self-reports**: ALWAYS verify
- **Main thread blocks**: No heavy I/O in loader init
- **Direct state mutation**: Use managers for boulder/session state
