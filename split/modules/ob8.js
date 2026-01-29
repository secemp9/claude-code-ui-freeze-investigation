// Module: ob8
// Dependencies: akA, Mc1, tq, jc1, JJ5, cb8, lb8, ib8, nb8, OJ5
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ob8 = k(() => {
  __$.akA();
  __$.Mc1 = __$.tq.string().refine(A => {
    if (A.includes("://") || A.includes("/") || A.includes(":")) return !1;
    if (A === "localhost") return !0;
    if (A.startsWith("*.")) {
      let K = A.slice(2);
      if (!K.includes(".") || K.startsWith(".") || K.endsWith(".")) return !1;
      let q = K.split(".");
      return q.length >= 2 && q.every(Y => Y.length > 0);
    }
    if (A.includes("*")) return !1;
    return A.includes(".") && !A.startsWith(".") && !A.endsWith(".");
  }, {
    message: 'Invalid domain pattern. Must be a valid domain (e.g., "example.com") or wildcard (e.g., "*.example.com"). Overly broad patterns like "*.com" or "*" are not allowed for security reasons.'
  }), __$.jc1 = __$.tq.string().min(1, "Path cannot be empty"), __$.JJ5 = __$.tq.object({
    socketPath: __$.tq.string().min(1).describe("Unix socket path to the MITM proxy"),
    domains: __$.tq.array(__$.Mc1).min(1).describe('Domains to route through the MITM proxy (e.g., ["api.example.com", "*.internal.org"])')
  }), __$.cb8 = __$.tq.object({
    allowedDomains: __$.tq.array(__$.Mc1).describe('List of allowed domains (e.g., ["github.com", "*.npmjs.org"])'),
    deniedDomains: __$.tq.array(__$.Mc1).describe("List of denied domains"),
    allowUnixSockets: __$.tq.array(__$.tq.string()).optional().describe("macOS only: Unix socket paths to allow. Ignored on Linux (seccomp cannot filter by path)."),
    allowAllUnixSockets: __$.tq.boolean().optional().describe("If true, allow all Unix sockets (disables blocking on both platforms)."),
    allowLocalBinding: __$.tq.boolean().optional().describe("Whether to allow binding to local ports (default: false)"),
    httpProxyPort: __$.tq.number().int().min(1).max(65535).optional().describe("Port of an external HTTP proxy to use instead of starting a local one. When provided, the library will skip starting its own HTTP proxy and use this port. The external proxy must handle domain filtering."),
    socksProxyPort: __$.tq.number().int().min(1).max(65535).optional().describe("Port of an external SOCKS proxy to use instead of starting a local one. When provided, the library will skip starting its own SOCKS proxy and use this port. The external proxy must handle domain filtering."),
    mitmProxy: __$.JJ5.optional().describe("Optional MITM proxy configuration. Routes matching domains through an upstream proxy via Unix socket while SRT still handles allow/deny filtering.")
  }), __$.lb8 = __$.tq.object({
    denyRead: __$.tq.array(__$.jc1).describe("Paths denied for reading"),
    allowWrite: __$.tq.array(__$.jc1).describe("Paths allowed for writing"),
    denyWrite: __$.tq.array(__$.jc1).describe("Paths denied for writing (takes precedence over allowWrite)"),
    allowGitConfig: __$.tq.boolean().optional().describe("Allow writes to .git/config files (default: false). Enables git remote URL updates while keeping .git/hooks protected.")
  }), __$.ib8 = __$.tq.record(__$.tq.string(), __$.tq.array(__$.tq.string())).describe('Map of command patterns to filesystem paths to ignore violations for. Use "*" to match all commands'), __$.nb8 = __$.tq.object({
    command: __$.tq.string().describe('The ripgrep command to execute (e.g., "rg", "claude")'),
    args: __$.tq.array(__$.tq.string()).optional().describe('Additional arguments to pass before ripgrep args (e.g., ["--ripgrep"])')
  }), __$.OJ5 = __$.tq.object({
    bpfPath: __$.tq.string().optional().describe("Path to the unix-block.bpf filter file"),
    applyPath: __$.tq.string().optional().describe("Path to the apply-seccomp binary")
  }), __$.rb8 = __$.tq.object({
    network: __$.cb8.describe("Network restrictions configuration"),
    filesystem: __$.lb8.describe("Filesystem restrictions configuration"),
    ignoreViolations: __$.ib8.optional().describe("Optional configuration for ignoring specific violations"),
    enableWeakerNestedSandbox: __$.tq.boolean().optional().describe("Enable weaker nested sandbox mode (for Docker environments)"),
    ripgrep: __$.nb8.optional().describe('Custom ripgrep configuration (default: { command: "rg" })'),
    mandatoryDenySearchDepth: __$.tq.number().int().min(1).max(10).optional().describe("Maximum directory depth to search for dangerous files on Linux (default: 3). Higher values provide more protection but slower performance."),
    allowPty: __$.tq.boolean().optional().describe("Allow pseudo-terminal (pty) operations (macOS only)"),
    seccomp: __$.OJ5.optional().describe("Custom seccomp binary paths (Linux only).")
  });
});

// Register to shared state
__$.ob8 = ob8;
