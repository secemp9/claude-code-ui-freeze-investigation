// Module: ID
// Dependencies: z7, WY1, H7A, O7A, LT9, RT9, tQ, U, M$A, Wh4
//   ... and 36 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ID = k(() => {
  __$.z7();
  __$.WY1();
  __$.H7A();
  __$.O7A = new Set(["claude-code-marketplace", "claude-code-plugins", "claude-plugins-official", "anthropic-marketplace", "anthropic-plugins", "agent-skills", "life-sciences"]);
  __$.LT9 = /(?:official[^a-z0-9]*(anthropic|claude)|(?:anthropic|claude)[^a-z0-9]*official|^(?:anthropic|claude)[^a-z0-9]*(marketplace|plugins|official))/i, __$.RT9 = /[^\u0020-\u007E]/;
  __$.tQ = __$.U.string().startsWith("./"), __$.M$A = __$.tQ.endsWith(".json"), __$.Wh4 = __$.U.union([__$.tQ.refine(A => A.endsWith(".mcpb") || A.endsWith(".dxt"), {
    message: "MCPB file path must end with .mcpb or .dxt"
  }).describe("Path to MCPB file relative to plugin root"), __$.U.string().url().refine(A => A.endsWith(".mcpb") || A.endsWith(".dxt"), {
    message: "MCPB URL must end with .mcpb or .dxt"
  }).describe("URL to MCPB file")]), __$.OY6 = __$.tQ.endsWith(".md"), __$.XY6 = __$.U.union([__$.OY6, __$.tQ]), __$.Ph4 = __$.U.object({
    name: __$.U.string().min(1, "Author name cannot be empty").describe("Display name of the plugin author or organization"),
    email: __$.U.string().optional().describe("Contact email for support or feedback"),
    url: __$.U.string().optional().describe("Website, GitHub profile, or organization URL")
  }), __$.IT9 = __$.U.object({
    name: __$.U.string().min(1, "Plugin name cannot be empty").refine(A => !A.includes(" "), {
      message: 'Plugin name cannot contain spaces. Use kebab-case (e.g., "my-plugin")'
    }).describe("Unique identifier for the plugin, used for namespacing (prefer kebab-case)"),
    version: __$.U.string().optional().describe("Semantic version (e.g., 1.2.3) following semver.org specification"),
    description: __$.U.string().optional().describe("Brief, user-facing explanation of what the plugin provides"),
    author: __$.Ph4.optional().describe("Information about the plugin creator or maintainer"),
    homepage: __$.U.string().url().optional().describe("Plugin homepage or documentation URL"),
    repository: __$.U.string().optional().describe("Source code repository URL"),
    license: __$.U.string().optional().describe("SPDX license identifier (e.g., MIT, Apache-2.0)"),
    keywords: __$.U.array(__$.U.string()).optional().describe("Tags for plugin discovery and categorization")
  }), __$.Vh4 = __$.U.object({
    description: __$.U.string().optional().describe("Brief, user-facing explanation of what these hooks provide"),
    hooks: __$.U.lazy(() => __$.ek).describe("The hooks provided by the plugin, in the same format as the one used for settings")
  }), __$.ST9 = __$.U.object({
    hooks: __$.U.union([__$.M$A.describe("Path to file with additional hooks (in addition to those in hooks/hooks.json, if it exists), relative to the plugin root"), __$.U.lazy(() => __$.ek).describe("Additional hooks (in addition to those in hooks/hooks.json, if it exists)"), __$.U.array(__$.U.union([__$.M$A.describe("Path to file with additional hooks (in addition to those in hooks/hooks.json, if it exists), relative to the plugin root"), __$.U.lazy(() => __$.ek).describe("Additional hooks (in addition to those in hooks/hooks.json, if it exists)")]))])
  }), __$.hT9 = __$.U.object({
    source: __$.XY6.optional().describe("Path to command markdown file, relative to plugin root"),
    content: __$.U.string().optional().describe("Inline markdown content for the command"),
    description: __$.U.string().optional().describe("Command description override"),
    argumentHint: __$.U.string().optional().describe('Hint for command arguments (e.g., "[file]")'),
    model: __$.U.string().optional().describe("Default model for this command"),
    allowedTools: __$.U.array(__$.U.string()).optional().describe("Tools allowed when command runs")
  }).refine(A => A.source && !A.content || !A.source && A.content, {
    message: 'Command must have either "source" (file path) or "content" (inline markdown), but not both'
  }), __$.bT9 = __$.U.object({
    commands: __$.U.union([__$.XY6.describe("Path to additional command file or skill directory (in addition to those in the commands/ directory, if it exists), relative to the plugin root"), __$.U.array(__$.XY6.describe("Path to additional command file or skill directory (in addition to those in the commands/ directory, if it exists), relative to the plugin root")).describe("List of paths to additional command files or skill directories"), __$.U.record(__$.U.string(), __$.hT9).describe('Object mapping of command names to their metadata and source files. Command name becomes the slash command name (e.g., "about" → "/plugin:about")')])
  }), __$.xT9 = __$.U.object({
    agents: __$.U.union([__$.OY6.describe("Path to additional agent file (in addition to those in the agents/ directory, if it exists), relative to the plugin root"), __$.U.array(__$.OY6.describe("Path to additional agent file (in addition to those in the agents/ directory, if it exists), relative to the plugin root")).describe("List of paths to additional agent files")])
  }), __$.uT9 = __$.U.object({
    skills: __$.U.union([__$.tQ.describe("Path to additional skill directory (in addition to those in the skills/ directory, if it exists), relative to the plugin root"), __$.U.array(__$.tQ.describe("Path to additional skill directory (in addition to those in the skills/ directory, if it exists), relative to the plugin root")).describe("List of paths to additional skill directories")])
  }), __$.BT9 = __$.U.object({
    outputStyles: __$.U.union([__$.tQ.describe("Path to additional output styles directory or file (in addition to those in the output-styles/ directory, if it exists), relative to the plugin root"), __$.U.array(__$.tQ.describe("Path to additional output styles directory or file (in addition to those in the output-styles/ directory, if it exists), relative to the plugin root")).describe("List of paths to additional output styles directories or files")])
  }), __$.mT9 = __$.U.object({
    mcpServers: __$.U.union([__$.M$A.describe("MCP servers to include in the plugin (in addition to those in the .mcp.json file, if it exists)"), __$.Wh4.describe("Path or URL to MCPB file containing MCP server configuration"), __$.U.record(__$.U.string(), __$.dx).describe("MCP server configurations keyed by server name"), __$.U.array(__$.U.union([__$.M$A.describe("Path to MCP servers configuration file"), __$.Wh4.describe("Path or URL to MCPB file"), __$.U.record(__$.U.string(), __$.dx).describe("Inline MCP server configurations")])).describe("Array of MCP server configurations (paths, MCPB files, or inline definitions)")])
  }), __$.Dh4 = __$.U.string().min(1), __$.gT9 = __$.U.string().min(2).refine(A => A.startsWith("."), {
    message: 'File extensions must start with dot (e.g., ".ts", not "ts")'
  }), __$.P$A = __$.U.strictObject({
    command: __$.U.string().min(1).refine(A => {
      if (A.includes(" ") && !A.startsWith("/")) return !1;
      return !0;
    }, {
      message: "Command should not contain spaces. Use args array for arguments."
    }).describe('Command to execute the LSP server (e.g., "typescript-language-server")'),
    args: __$.U.array(__$.Dh4).optional().describe("Command-line arguments to pass to the server"),
    extensionToLanguage: __$.U.record(__$.gT9, __$.Dh4).refine(A => Object.keys(A).length > 0, {
      message: "extensionToLanguage must have at least one mapping"
    }).describe("Mapping from file extension to LSP language ID. File extensions and languages are derived from this mapping."),
    transport: __$.U.enum(["stdio", "socket"]).default("stdio").describe("Communication transport mechanism"),
    env: __$.U.record(__$.U.string(), __$.U.string()).optional().describe("Environment variables to set when starting the server"),
    initializationOptions: __$.U.unknown().optional().describe("Initialization options passed to the server during initialization"),
    settings: __$.U.unknown().optional().describe("Settings passed to the server via workspace/didChangeConfiguration"),
    workspaceFolder: __$.U.string().optional().describe("Workspace folder path to use for the server"),
    startupTimeout: __$.U.number().int().positive().optional().describe("Maximum time to wait for server startup (milliseconds)"),
    shutdownTimeout: __$.U.number().int().positive().optional().describe("Maximum time to wait for graceful shutdown (milliseconds)"),
    restartOnCrash: __$.U.boolean().optional().describe("Whether to restart the server if it crashes"),
    maxRestarts: __$.U.number().int().nonnegative().optional().describe("Maximum number of restart attempts before giving up")
  }), __$.FT9 = __$.U.object({
    lspServers: __$.U.union([__$.M$A.describe("Path to .lsp.json configuration file relative to plugin root"), __$.U.record(__$.U.string(), __$.P$A).describe("LSP server configurations keyed by server name"), __$.U.array(__$.U.union([__$.M$A.describe("Path to LSP configuration file"), __$.U.record(__$.U.string(), __$.P$A).describe("Inline LSP server configurations")])).describe("Array of LSP server configurations (paths or inline definitions)")])
  }), __$.X7A = __$.U.object({
    ...__$.IT9.shape,
    ...__$.ST9.partial().shape,
    ...__$.bT9.partial().shape,
    ...__$.xT9.partial().shape,
    ...__$.uT9.partial().shape,
    ...__$.BT9.partial().shape,
    ...__$.mT9.partial().shape,
    ...__$.FT9.partial().shape
  }).strict(), __$.fh4 = __$.U.string().refine(A => !A.includes("..") && !A.includes("//"), "Package name cannot contain path traversal patterns").refine(A => {
    let K = /^@[a-z0-9][a-z0-9-._]*\/[a-z0-9][a-z0-9-._]*$/,
      q = /^[a-z0-9][a-z0-9-._]*$/;
    return K.test(A) || q.test(A);
  }, "Invalid npm package name format"), __$.JSA = __$.U.discriminatedUnion("source", [__$.U.object({
    source: __$.U.literal("url"),
    url: __$.U.string().url().describe("Direct URL to marketplace.json file"),
    headers: __$.U.record(__$.U.string(), __$.U.string()).optional().describe("Custom HTTP headers (e.g., for authentication)")
  }), __$.U.object({
    source: __$.U.literal("github"),
    repo: __$.U.string().describe("GitHub repository in owner/repo format"),
    ref: __$.U.string().optional().describe('Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'),
    path: __$.U.string().optional().describe("Path to marketplace.json within repo (defaults to .claude-plugin/marketplace.json)")
  }), __$.U.object({
    source: __$.U.literal("git"),
    url: __$.U.string().endsWith(".git").describe("Full git repository URL"),
    ref: __$.U.string().optional().describe('Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'),
    path: __$.U.string().optional().describe("Path to marketplace.json within repo (defaults to .claude-plugin/marketplace.json)")
  }), __$.U.object({
    source: __$.U.literal("npm"),
    package: __$.fh4.describe("NPM package containing marketplace.json")
  }), __$.U.object({
    source: __$.U.literal("file"),
    path: __$.U.string().describe("Local file path to marketplace.json")
  }), __$.U.object({
    source: __$.U.literal("directory"),
    path: __$.U.string().describe("Local directory containing .claude-plugin/marketplace.json")
  }), __$.U.object({
    source: __$.U.literal("hostPattern"),
    hostPattern: __$.U.string().describe('Regex pattern to match the host/domain extracted from any marketplace source type. For github sources, matches against "github.com". For git sources (SSH or HTTPS), extracts the hostname from the URL. Use in strictKnownMarketplaces to allow all marketplaces from a specific host (e.g., "^github\\.mycompany\\.com$").')
  })]), __$.jh4 = __$.U.string().length(40).regex(/^[a-f0-9]{40}$/, "Must be a full 40-character lowercase git commit SHA"), __$.QT9 = __$.U.union([__$.tQ.describe("Path to the plugin root, relative to the marketplace directory"), __$.U.object({
    source: __$.U.literal("npm"),
    package: __$.fh4.or(__$.U.string()).describe("Package name (or url, or local path, or anything else that can be passed to `npm` as a package)"),
    version: __$.U.string().optional().describe("Specific version or version range (e.g., ^1.0.0, ~2.1.0)"),
    registry: __$.U.string().url().optional().describe("Custom NPM registry URL (defaults to using system default, likely npmjs.org)")
  }).describe("NPM package as plugin source"), __$.U.object({
    source: __$.U.literal("pip"),
    package: __$.U.string().describe("Python package name as it appears on PyPI"),
    version: __$.U.string().optional().describe("Version specifier (e.g., ==1.0.0, >=2.0.0, <3.0.0)"),
    registry: __$.U.string().url().optional().describe("Custom PyPI registry URL (defaults to using system default, likely pypi.org)")
  }).describe("Python package as plugin source"), __$.U.object({
    source: __$.U.literal("url"),
    url: __$.U.string().endsWith(".git").describe("Full git repository URL (https:// or git@)"),
    ref: __$.U.string().optional().describe('Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'),
    sha: __$.jh4.optional().describe("Specific commit SHA to use")
  }), __$.U.object({
    source: __$.U.literal("github"),
    repo: __$.U.string().describe("GitHub repository in owner/repo format"),
    ref: __$.U.string().optional().describe('Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'),
    sha: __$.jh4.optional().describe("Specific commit SHA to use")
  })]);
  __$.UT9 = __$.X7A.partial().extend({
    name: __$.U.string().min(1, "Plugin name cannot be empty").refine(A => !A.includes(" "), {
      message: 'Plugin name cannot contain spaces. Use kebab-case (e.g., "my-plugin")'
    }).describe("Unique identifier matching the plugin name"),
    source: __$.QT9.describe("Where to fetch the plugin from"),
    category: __$.U.string().optional().describe('Category for organizing plugins (e.g., "productivity", "development")'),
    tags: __$.U.array(__$.U.string()).optional().describe("Tags for searchability and discovery"),
    strict: __$.U.boolean().optional().default(!0).describe("Require the plugin manifest to be present in the plugin folder. If false, the marketplace entry provides the manifest.")
  }).strict(), __$.V$A = __$.U.object({
    name: __$.U.string().min(1, "Marketplace must have a name").refine(A => !A.includes(" "), {
      message: 'Marketplace name cannot contain spaces. Use kebab-case (e.g., "my-marketplace")'
    }).refine(A => !__$.yT9(A), {
      message: 'Marketplace name cannot impersonate official Anthropic/Claude marketplaces. Names containing "official", "anthropic", or "claude" in official-sounding combinations are reserved.'
    }),
    owner: __$.Ph4.describe("Marketplace maintainer or curator information"),
    plugins: __$.U.array(__$.UT9).describe("Collection of available plugins in this marketplace"),
    metadata: __$.U.object({
      pluginRoot: __$.U.string().optional().describe("Base path for relative plugin sources"),
      version: __$.U.string().optional().describe("Marketplace version"),
      description: __$.U.string().optional().describe("Marketplace description")
    }).optional().describe("Optional marketplace metadata")
  }), __$.J7A = __$.U.string().regex(/^[a-z0-9][-a-z0-9._]*@[a-z0-9][-a-z0-9._]*$/i, "Plugin ID must be in format: plugin@marketplace"), __$.RDw = __$.U.union([__$.J7A, __$.U.object({
    id: __$.J7A.describe('Plugin identifier (e.g., "formatter@tools")'),
    version: __$.U.string().optional().describe('Version constraint (e.g., "^2.0.0")'),
    required: __$.U.boolean().optional().describe("If true, cannot be disabled"),
    config: __$.U.record(__$.U.string(), __$.U.unknown()).optional().describe("Plugin-specific configuration")
  })]), __$.pT9 = __$.U.object({
    version: __$.U.string().describe("Currently installed version"),
    installedAt: __$.U.string().describe("ISO 8601 timestamp of installation"),
    lastUpdated: __$.U.string().optional().describe("ISO 8601 timestamp of last update"),
    installPath: __$.U.string().describe("Absolute path to the installed plugin directory"),
    gitCommitSha: __$.U.string().optional().describe("Git commit SHA for git-based plugins (for version tracking)")
  }), __$.OSA = __$.U.object({
    version: __$.U.literal(1).describe("Schema version 1"),
    plugins: __$.U.record(__$.J7A, __$.pT9).describe("Map of plugin IDs to their installation metadata")
  }), __$.dT9 = __$.U.enum(["managed", "user", "project", "local"]), __$.cT9 = __$.U.object({
    scope: __$.dT9.describe("Installation scope"),
    projectPath: __$.U.string().optional().describe("Project path (required for project/local scopes)"),
    installPath: __$.U.string().describe("Absolute path to the versioned plugin directory"),
    version: __$.U.string().optional().describe("Currently installed version"),
    installedAt: __$.U.string().optional().describe("ISO 8601 timestamp of installation"),
    lastUpdated: __$.U.string().optional().describe("ISO 8601 timestamp of last update"),
    gitCommitSha: __$.U.string().optional().describe("Git commit SHA for git-based plugins")
  }), __$.XSA = __$.U.object({
    version: __$.U.literal(2).describe("Schema version 2"),
    plugins: __$.U.record(__$.J7A, __$.U.array(__$.cT9)).describe("Map of plugin IDs to arrays of installation entries")
  }), __$.yDw = __$.U.union([__$.OSA, __$.XSA]), __$.lT9 = __$.U.object({
    source: __$.JSA.describe("Where to fetch the marketplace from"),
    installLocation: __$.U.string().describe("Local cache path where marketplace manifest is stored"),
    lastUpdated: __$.U.string().describe("ISO 8601 timestamp of last marketplace refresh"),
    autoUpdate: __$.U.boolean().optional().describe("Whether to automatically update this marketplace and its installed plugins on startup")
  }), __$.$Y6 = __$.U.record(__$.U.string(), __$.lT9);
});

// Register to shared state
__$.ID = ID;
