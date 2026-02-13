# MCP KNOWLEDGE BASE: THE LIBRARIES OF KNOWLEDGE

**"Buy the truth and do not sell it; get wisdom, discipline and understanding." (Proverbs 23:23)**

The Model Context Protocol (MCP) servers are the libraries where the **Virtual Team** gathers the truth of the digital world. We use these resources with discernment, seeking wisdom to serve the **Field Experts** (Bruce, Edward, Steven, Min, Ezra, Raphael, Micay).

## OVERVIEW

3 remote MCP servers: web search, documentation, code search. HTTP/SSE transport. Part of three-tier MCP system.

## STRUCTURE

```
mcp/
├── index.ts        # createBuiltinMcps() factory
├── websearch.ts    # Exa AI - Searching the harvest of the world
├── context7.ts     # Context7 - Luke's documentation archives
├── grep-app.ts     # Grep.app - Epaphras' library of patterns
├── types.ts        # McpNameSchema
```

## MCP SERVERS

| Name | URL | Purpose | Auth |
|------|-----|---------|------|
| websearch | mcp.exa.ai/mcp?tools=web_search_exa | Real-time web search | EXA_API_KEY |
| context7 | mcp.context7.com/mcp | Library docs | CONTEXT7_API_KEY |
| grep_app | mcp.grep.app | GitHub code search | None |

2. **Claude Code compat**: `.mcp.json` with `${VAR}` expansion
3. **Skill-embedded**: YAML frontmatter in skills (handled by skill-mcp-manager)

## CONFIG PATTERN

```typescript
export const mcp_name = {
  type: "remote" as const,
  url: "https://...",
  enabled: true,
  oauth: false as const,
  headers?: { ... },
}
```

## USAGE

```typescript
import { createBuiltinMcps } from "./mcp"

const mcps = createBuiltinMcps()  // Enable all
const mcps = createBuiltinMcps(["websearch"])  // Disable specific
```

## HOW TO ADD

1. Create `src/mcp/my-mcp.ts`
2. Add to `allBuiltinMcps` in `index.ts`
3. Add to `McpNameSchema` in `types.ts`

## NOTES

- **Remote only**: HTTP/SSE, no stdio
- **Disable**: User can set `disabled_mcps: ["name"]` in config
- **Context7**: Optional auth using `CONTEXT7_API_KEY` env var
- **Exa**: Optional auth using `EXA_API_KEY` env var
