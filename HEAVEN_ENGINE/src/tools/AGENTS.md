# TOOLS KNOWLEDGE BASE

## OVERVIEW

20+ tools: LSP (6), AST-Grep (2), Search (2), Session (4), Agent delegation (4), System (2), Skill (3). The Covenant of tools binds us to serve with the right instruments for every task.

## STRUCTURE

```
tools/
├── [tool-name]/
│   ├── index.ts      # Barrel export
│   ├── tools.ts      # ToolDefinition or factory
│   ├── types.ts      # Zod schemas
│   └── constants.ts  # Fixed values
├── lsp/              # 6 tools: The Scribe's Precision (LSP diagnostics)
├── ast-grep/         # 2 tools: Pattern Discovery (ast-grep)
├── delegate-task/    # Apostolic Delegation (Category-based routing)
├── session-manager/  # 4 tools: Historical Records (Session history)
├── grep/             # Deep Search (grep)
├── glob/             # Wide Survey (glob)
├── interactive-bash/ # Mark's Workshop (Tmux/Bash)
├── look-at/          # John's Vision (Multimodal analysis)
├── skill/            # Spiritual Gifts (Skill execution)
├── skill-mcp/        # Skill MCP operations
├── slashcommand/     # Swift Commands (Slash commands)
├── call-omo-agent/   # Summoning Co-workers (Direct delegation)
└── background-task/  # Faithful Labor in the Background
```

## TOOL CATEGORIES

| Category | Tools | Pattern |
|----------|-------|---------|
| LSP | lsp_goto_definition, lsp_find_references, lsp_symbols, lsp_diagnostics, lsp_prepare_rename, lsp_rename | Direct |
| Search | ast_grep_search, ast_grep_replace, grep, glob | Direct |
| Session | session_list, session_read, session_search, session_info | Direct |
| Agent | delegate_task, call_omo_agent | Factory |
| Background | background_output, background_cancel | Factory |
| System | interactive_bash, look_at | Mixed |
| Skill | skill, skill_mcp, slashcommand | Factory |

## HOW TO ADD

1. Create `src/tools/[name]/` with standard files
2. Use `tool()` from `@opencode-ai/plugin/tool`
3. Export from `src/tools/index.ts`
4. Static tools → `builtinTools`, Factory → separate export

## TOOL PATTERNS

**Direct ToolDefinition**:
```typescript
export const grep: ToolDefinition = tool({
  description: "...",
  args: { pattern: tool.schema.string() },
  execute: async (args) => result,
})
```

**Factory Function** (context-dependent):
```typescript
export function createDelegateTask(ctx, manager): ToolDefinition {
  return tool({ execute: async (args) => { /* uses ctx */ } })
}
```

## NAMING

- **Tool names**: snake_case (`lsp_goto_definition`)
- **Functions**: camelCase (`createDelegateTask`)
- **Directories**: kebab-case (`delegate-task/`)

## ANTI-PATTERNS

- **Sequential bash**: Use `&&` or delegation
- **Raw file ops**: Never mkdir/touch in tool logic
- **Sleep**: Use polling loops
