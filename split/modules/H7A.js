// Module: H7A
// Dependencies: z7, HY6, U, vDw, JY6, fT9, NT9, TT9, vT9, ET9
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var H7A = k(() => {
  __$.z7();
  __$.HY6 = __$.U.enum(["local", "user", "project", "dynamic", "enterprise", "claudeai", "managed"]), __$.vDw = __$.U.enum(["stdio", "sse", "sse-ide", "http", "ws", "sdk"]), __$.JY6 = __$.U.object({
    type: __$.U.literal("stdio").optional(),
    command: __$.U.string().min(1, "Command cannot be empty"),
    args: __$.U.array(__$.U.string()).default([]),
    env: __$.U.record(__$.U.string(), __$.U.string()).optional()
  }), __$.fT9 = __$.U.object({
    type: __$.U.literal("sse"),
    url: __$.U.string(),
    headers: __$.U.record(__$.U.string(), __$.U.string()).optional(),
    headersHelper: __$.U.string().optional()
  }), __$.NT9 = __$.U.object({
    type: __$.U.literal("sse-ide"),
    url: __$.U.string(),
    ideName: __$.U.string(),
    ideRunningInWindows: __$.U.boolean().optional()
  }), __$.TT9 = __$.U.object({
    type: __$.U.literal("ws-ide"),
    url: __$.U.string(),
    ideName: __$.U.string(),
    authToken: __$.U.string().optional(),
    ideRunningInWindows: __$.U.boolean().optional()
  }), __$.vT9 = __$.U.object({
    type: __$.U.literal("http"),
    url: __$.U.string(),
    headers: __$.U.record(__$.U.string(), __$.U.string()).optional(),
    headersHelper: __$.U.string().optional()
  }), __$.ET9 = __$.U.object({
    type: __$.U.literal("ws"),
    url: __$.U.string(),
    headers: __$.U.record(__$.U.string(), __$.U.string()).optional(),
    headersHelper: __$.U.string().optional()
  }), __$.kT9 = __$.U.object({
    type: __$.U.literal("sdk"),
    name: __$.U.string()
  }), __$.CT9 = __$.U.object({
    type: __$.U.literal("claudeai-proxy"),
    url: __$.U.string(),
    id: __$.U.string()
  }), __$.dx = __$.U.union([__$.JY6, __$.fT9, __$.NT9, __$.TT9, __$.vT9, __$.ET9, __$.kT9, __$.CT9]), __$.Zh4 = __$.U.object({
    mcpServers: __$.U.record(__$.U.string(), __$.dx)
  });
});

// Register to shared state
__$.H7A = H7A;
