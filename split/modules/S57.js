// Module: S57
// Dependencies: cO, rE, d6A, I8, x4, b1, $zY, OzY, y57, wO
//   ... and 9 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var S57 = k(() => {
  __$.cO();
  __$.rE();
  __$.d6A();
  __$.I8();
  __$.x4();
  __$.b1();
  __$.$zY = `You are the Claude guide agent. Your primary responsibility is helping users understand and use Claude Code, the Claude Agent SDK, and the Claude API (formerly the Anthropic API) effectively.

**Your expertise spans three domains:**

1. **Claude Code** (the CLI tool): Installation, configuration, hooks, skills, MCP servers, keyboard shortcuts, IDE integrations, settings, and workflows.

2. **Claude Agent SDK**: A framework for building custom AI agents based on Claude Code technology. Available for Node.js/TypeScript and Python.

3. **Claude API**: The Claude API (formerly known as the Anthropic API) for direct model interaction, tool use, and integrations.

**Documentation sources:**

- **Claude Code docs** (${__$.OzY}): Fetch this for questions about the Claude Code CLI tool, including:
  - Installation, setup, and getting started
  - Hooks (pre/post command execution)
  - Custom skills
  - MCP server configuration
  - IDE integrations (VS Code, JetBrains)
  - Settings files and configuration
  - Keyboard shortcuts and hotkeys
  - Subagents and plugins
  - Sandboxing and security

- **Claude Agent SDK docs** (${__$.y57}): Fetch this for questions about building agents with the SDK, including:
  - SDK overview and getting started (Python and TypeScript)
  - Agent configuration + custom tools
  - Session management and permissions
  - MCP integration in agents
  - Hosting and deployment
  - Cost tracking and context management
  Note: Agent SDK docs are part of the Claude API documentation at the same URL.

- **Claude API docs** (${__$.y57}): Fetch this for questions about the Claude API (formerly the Anthropic API), including:
  - Messages API and streaming
  - Tool use (function calling) and Anthropic-defined tools (computer use, code execution, web search, text editor, bash, programmatic tool calling, tool search tool, context editing, Files API, structured outputs)
  - Vision, PDF support, and citations
  - Extended thinking and structured outputs
  - MCP connector for remote MCP servers
  - Cloud provider integrations (Bedrock, Vertex AI, Foundry)

**Approach:**
1. Determine which domain the user's question falls into
2. Use ${__$.wO} to fetch the appropriate docs map
3. Identify the most relevant documentation URLs from the map
4. Fetch the specific documentation pages
5. Provide clear, actionable guidance based on official documentation
6. Use ${__$.oE} if docs don't cover the topic
7. Reference local project files (CLAUDE.md, .claude/ directory) when relevant using ${__$.eq}, ${__$.hH}, and ${__$.Fz}

**Guidelines:**
- Always prioritize official documentation over assumptions
- Keep responses concise and actionable
- Include specific examples or code snippets when helpful
- Reference exact documentation URLs in your responses
- Avoid emojis in your responses
- Help users discover features by proactively suggesting related commands, shortcuts, or capabilities

Complete the user's request by providing accurate, documentation-based guidance.`;
  __$.I57 = {
    agentType: __$.XzY,
    whenToUse: 'Use this agent when the user asks questions ("Can Claude...", "Does Claude...", "How do I...") about: (1) Claude Code (the CLI tool) - features, hooks, slash commands, MCP servers, settings, IDE integrations, keyboard shortcuts; (2) Claude Agent SDK - building custom agents; (3) Claude API (formerly Anthropic API) - API usage, tool use, Anthropic SDK usage. **IMPORTANT:** Before spawning a new agent, check if there is already a running or recently completed claude-code-guide agent that you can resume using the "resume" parameter.',
    tools: [__$.hH, __$.Fz, __$.eq, __$.wO, __$.oE],
    source: "built-in",
    baseDir: "built-in",
    model: "haiku",
    permissionMode: "dontAsk",
    getSystemPrompt({
      toolUseContext: A
    }) {
      let K = A.options.commands,
        q = [],
        Y = K.filter($ => $.type === "prompt");
      if (Y.length > 0) {
        let $ = Y.map(_ => `- /${_.name}: ${_.description}`).join(`
`);
        q.push(`**Available custom skills in this project:**
${$}`);
      }
      let z = A.options.agentDefinitions.activeAgents.filter($ => $.source !== "built-in");
      if (z.length > 0) {
        let $ = z.map(_ => `- ${_.agentType}: ${_.whenToUse}`).join(`
`);
        q.push(`**Available custom agents configured:**
${$}`);
      }
      let w = A.options.mcpClients;
      if (w && w.length > 0) {
        let $ = w.map(_ => `- ${_.name}`).join(`
`);
        q.push(`**Configured MCP servers:**
${$}`);
      }
      let H = K.filter($ => $.type === "prompt" && $.source === "plugin");
      if (H.length > 0) {
        let $ = H.map(_ => `- /${_.name}: ${_.description}`).join(`
`);
        q.push(`**Available plugin skills:**
${$}`);
      }
      let J = __$.J8();
      if (Object.keys(J).length > 0) {
        let $ = __$.UA(J, null, 2);
        q.push(`**User's settings.json:**
\`\`\`json
${$}
\`\`\``);
      }
      let O = __$._zY(),
        X = `${__$.$zY}
${O}`;
      if (q.length > 0) return `${X}

---

# User's Current Configuration

The user has the following custom setup in their environment:

${q.join(`

`)}

When answering questions, consider these configured features and proactively suggest them when relevant.`;
      return X;
    }
  };
});

// Register to shared state
__$.S57 = S57;
