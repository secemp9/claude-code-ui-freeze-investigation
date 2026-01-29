// Module: rU
// Dependencies: z7, n_, rvK, GJ, ID, avK, WY1, ma2, U, ga2
//   ... and 10 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rU = k(() => {
  __$.z7();
  __$.n_();
  __$.rvK();
  __$.GJ();
  __$.ID();
  __$.avK();
  __$.WY1();
  __$.WY1();
  __$.ma2 = __$.U.record(__$.U.string(), __$.U.coerce.string()), __$.ga2 = __$.U.object({
    allow: __$.U.array(__$.SE1).optional().describe("List of permission rules for allowed operations"),
    deny: __$.U.array(__$.SE1).optional().describe("List of permission rules for denied operations"),
    ask: __$.U.array(__$.SE1).optional().describe("List of permission rules that should always prompt for confirmation"),
    defaultMode: __$.U.enum(__$.T6A).optional().describe("Default permission mode when Claude Code needs access"),
    disableBypassPermissionsMode: __$.U.enum(["disable"]).optional().describe("Disable the ability to bypass permission prompts"),
    additionalDirectories: __$.U.array(__$.U.string()).optional().describe("Additional directories to include in the permission scope")
  }).passthrough(), __$.Fa2 = __$.U.object({
    source: __$.JSA.describe("Where to fetch the marketplace from"),
    installLocation: __$.U.string().optional().describe("Local cache path where marketplace manifest is stored (auto-generated if not provided)")
  }), __$.Qa2 = __$.U.object({
    serverName: __$.U.string().regex(/^[a-zA-Z0-9_-]+$/, "Server name can only contain letters, numbers, hyphens, and underscores").optional().describe("Name of the MCP server that users are allowed to configure"),
    serverCommand: __$.U.array(__$.U.string()).min(1, "Server command must have at least one element (the command)").optional().describe("Command array [command, ...args] to match exactly for allowed stdio servers"),
    serverUrl: __$.U.string().optional().describe('URL pattern with wildcard support (e.g., "https://*.example.com/*") for allowed remote MCP servers')
  }).refine(A => {
    return [A.serverName !== void 0, A.serverCommand !== void 0, A.serverUrl !== void 0].filter(Boolean).length === 1;
  }, {
    message: 'Entry must have exactly one of "serverName", "serverCommand", or "serverUrl"'
  }), __$.Ua2 = __$.U.object({
    serverName: __$.U.string().regex(/^[a-zA-Z0-9_-]+$/, "Server name can only contain letters, numbers, hyphens, and underscores").optional().describe("Name of the MCP server that is explicitly blocked"),
    serverCommand: __$.U.array(__$.U.string()).min(1, "Server command must have at least one element (the command)").optional().describe("Command array [command, ...args] to match exactly for blocked stdio servers"),
    serverUrl: __$.U.string().optional().describe('URL pattern with wildcard support (e.g., "https://*.example.com/*") for blocked remote MCP servers')
  }).refine(A => {
    return [A.serverName !== void 0, A.serverCommand !== void 0, A.serverUrl !== void 0].filter(Boolean).length === 1;
  }, {
    message: 'Entry must have exactly one of "serverName", "serverCommand", or "serverUrl"'
  }), __$.tI = __$.U.object({
    $schema: __$.U.literal(__$.QC8).optional().describe("JSON Schema reference for Claude Code settings"),
    apiKeyHelper: __$.U.string().optional().describe("Path to a script that outputs authentication values"),
    awsCredentialExport: __$.U.string().optional().describe("Path to a script that exports AWS credentials"),
    awsAuthRefresh: __$.U.string().optional().describe("Path to a script that refreshes AWS authentication"),
    fileSuggestion: __$.U.object({
      type: __$.U.literal("command"),
      command: __$.U.string()
    }).optional().describe("Custom file suggestion configuration for @ mentions"),
    respectGitignore: __$.U.boolean().optional().describe("Whether file picker should respect .gitignore files (default: true). Note: .ignore files are always respected."),
    cleanupPeriodDays: __$.U.number().nonnegative().int().optional().describe("Number of days to retain chat transcripts (0 to disable cleanup)"),
    env: __$.ma2.optional().describe("Environment variables to set for Claude Code sessions"),
    attribution: __$.U.object({
      commit: __$.U.string().optional().describe("Attribution text for git commits, including any trailers. Empty string hides attribution."),
      pr: __$.U.string().optional().describe("Attribution text for pull request descriptions. Empty string hides attribution.")
    }).optional().describe("Customize attribution text for commits and PRs. Each field defaults to the standard Claude Code attribution if not set."),
    includeCoAuthoredBy: __$.U.boolean().optional().describe("Deprecated: Use attribution instead. Whether to include Claude's co-authored by attribution in commits and PRs (defaults to true)"),
    permissions: __$.ga2.optional().describe("Tool usage permissions configuration"),
    model: __$.U.string().optional().describe("Override the default model used by Claude Code"),
    enableAllProjectMcpServers: __$.U.boolean().optional().describe("Whether to automatically approve all MCP servers in the project"),
    enabledMcpjsonServers: __$.U.array(__$.U.string()).optional().describe("List of approved MCP servers from .mcp.json"),
    disabledMcpjsonServers: __$.U.array(__$.U.string()).optional().describe("List of rejected MCP servers from .mcp.json"),
    allowedMcpServers: __$.U.array(__$.Qa2).optional().describe("Enterprise allowlist of MCP servers that can be used. Applies to all scopes including enterprise servers from managed-mcp.json. If undefined, all servers are allowed. If empty array, no servers are allowed. Denylist takes precedence - if a server is on both lists, it is denied."),
    deniedMcpServers: __$.U.array(__$.Ua2).optional().describe("Enterprise denylist of MCP servers that are explicitly blocked. If a server is on the denylist, it will be blocked across all scopes including enterprise. Denylist takes precedence over allowlist - if a server is on both lists, it is denied."),
    hooks: __$.ek.optional().describe("Custom commands to run before/after tool executions"),
    disableAllHooks: __$.U.boolean().optional().describe("Disable all hooks and statusLine execution"),
    allowManagedHooksOnly: __$.U.boolean().optional().describe("When true (and set in managed settings), only hooks from managed settings run. User, project, and local hooks are ignored."),
    allowManagedPermissionRulesOnly: __$.U.boolean().optional().describe("When true (and set in managed settings), only permission rules (allow/deny/ask) from managed settings are respected. User, project, local, and CLI argument permission rules are ignored."),
    statusLine: __$.U.object({
      type: __$.U.literal("command"),
      command: __$.U.string(),
      padding: __$.U.number().optional()
    }).optional().describe("Custom status line display configuration"),
    enabledPlugins: __$.U.record(__$.U.string(), __$.U.union([__$.U.array(__$.U.string()), __$.U.boolean(), __$.U.undefined()])).optional().describe('Enabled plugins using plugin-id@marketplace-id format. Example: { "formatter@anthropic-tools": true }. Also supports extended format with version constraints.'),
    extraKnownMarketplaces: __$.U.record(__$.U.string(), __$.Fa2).optional().describe("Additional marketplaces to make available for this repository. Typically used in repository .claude/settings.json to ensure team members have required plugin sources."),
    skippedMarketplaces: __$.U.array(__$.U.string()).optional().describe("List of marketplace names the user has chosen not to install when prompted"),
    skippedPlugins: __$.U.array(__$.U.string()).optional().describe("List of plugin IDs (plugin@marketplace format) the user has chosen not to install when prompted"),
    strictKnownMarketplaces: __$.U.array(__$.JSA).optional().describe("Enterprise strict list of allowed marketplace sources. When set in managed settings, ONLY these exact sources can be added as marketplaces. The check happens BEFORE downloading, so blocked sources never touch the filesystem."),
    blockedMarketplaces: __$.U.array(__$.JSA).optional().describe("Enterprise blocklist of marketplace sources. When set in managed settings, these exact sources are blocked from being added as marketplaces. The check happens BEFORE downloading, so blocked sources never touch the filesystem."),
    forceLoginMethod: __$.U.enum(["claudeai", "console"]).optional().describe('Force a specific login method: "claudeai" for Claude Pro/Max, "console" for Console billing'),
    forceLoginOrgUUID: __$.U.string().optional().describe("Organization UUID to use for OAuth login"),
    otelHeadersHelper: __$.U.string().optional().describe("Path to a script that outputs OpenTelemetry headers"),
    outputStyle: __$.U.string().optional().describe("Controls the output style for assistant responses"),
    language: __$.U.string().optional().describe('Preferred language for Claude responses (e.g., "japanese", "spanish")'),
    skipWebFetchPreflight: __$.U.boolean().optional().describe("Skip the WebFetch blocklist check for enterprise environments with restrictive security policies"),
    sandbox: __$.ovK.optional(),
    spinnerTipsEnabled: __$.U.boolean().optional().describe("Whether to show tips in the spinner"),
    spinnerVerbs: __$.U.object({
      mode: __$.U.enum(["append", "replace"]),
      verbs: __$.U.array(__$.U.string())
    }).optional().describe('Customize spinner verbs. mode: "append" adds verbs to defaults, "replace" uses only your verbs.'),
    syntaxHighlightingDisabled: __$.U.boolean().optional().describe("Whether to disable syntax highlighting in diffs"),
    alwaysThinkingEnabled: __$.U.boolean().optional().describe("When false, thinking is disabled. When absent or true, thinking is enabled automatically for supported models."),
    promptSuggestionEnabled: __$.U.boolean().optional().describe("When false, prompt suggestions are disabled. When absent or true, prompt suggestions are enabled."),
    agent: __$.U.string().optional().describe("Name of an agent (built-in or custom) to use for the main thread. Applies the agent's system prompt, tool restrictions, and model."),
    companyAnnouncements: __$.U.array(__$.U.string()).optional().describe("Company announcements to display at startup (one will be randomly selected if multiple are provided)"),
    pluginConfigs: __$.U.record(__$.U.string(), __$.U.object({
      mcpServers: __$.U.record(__$.U.string(), __$.U.record(__$.U.string(), __$.U.union([__$.U.string(), __$.U.number(), __$.U.boolean(), __$.U.array(__$.U.string())]))).optional().describe("User configuration values for MCP servers keyed by server name")
    })).optional().describe("Per-plugin configuration including MCP server user configs, keyed by plugin ID (plugin@marketplace format)"),
    remote: __$.U.object({
      defaultEnvironmentId: __$.U.string().optional().describe("Default environment ID to use for remote sessions")
    }).optional().describe("Remote session configuration"),
    autoUpdatesChannel: __$.U.enum(["latest", "stable"]).optional().describe("Release channel for auto-updates (latest or stable)"),
    minimumVersion: __$.U.string().optional().describe("Minimum version to stay on - prevents downgrades when switching to stable channel"),
    plansDirectory: __$.U.string().optional().describe("Custom directory for plan files, relative to project root. If not set, defaults to ~/.claude/plans/"),
    ...{}
  }).passthrough();
});

// Register to shared state
__$.rU = rU;
