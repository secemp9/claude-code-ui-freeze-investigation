// Module: avK
// Dependencies: z7, Ba2, U, ovK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var avK = k(() => {
  __$.z7();
  __$.Ba2 = __$.U.object({
    allowedDomains: __$.U.array(__$.U.string()).optional(),
    allowUnixSockets: __$.U.array(__$.U.string()).optional().describe("macOS only: Unix socket paths to allow. Ignored on Linux (seccomp cannot filter by path)."),
    allowAllUnixSockets: __$.U.boolean().optional().describe("If true, allow all Unix sockets (disables blocking on both platforms)."),
    allowLocalBinding: __$.U.boolean().optional(),
    httpProxyPort: __$.U.number().optional(),
    socksProxyPort: __$.U.number().optional()
  }).optional(), __$.ovK = __$.U.object({
    enabled: __$.U.boolean().optional(),
    autoAllowBashIfSandboxed: __$.U.boolean().optional(),
    allowUnsandboxedCommands: __$.U.boolean().optional().describe("Allow commands to run outside the sandbox via the dangerouslyDisableSandbox parameter. When false, the dangerouslyDisableSandbox parameter is completely ignored and all commands must run sandboxed. Default: true."),
    network: __$.Ba2,
    ignoreViolations: __$.U.record(__$.U.string(), __$.U.array(__$.U.string())).optional(),
    enableWeakerNestedSandbox: __$.U.boolean().optional(),
    excludedCommands: __$.U.array(__$.U.string()).optional(),
    ripgrep: __$.U.object({
      command: __$.U.string(),
      args: __$.U.array(__$.U.string()).optional()
    }).optional().describe("Custom ripgrep configuration for bundled ripgrep support")
  }).passthrough();
});

// Register to shared state
__$.avK = avK;
