// Module: pU6
// Dependencies: z7, ut2, U, PkK, Bt2, VkK, mt2, fkK, gt2, Ft2
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pU6 = k(() => {
  __$.z7();
  __$.ut2 = __$.U.object({
    command: __$.U.literal("servers")
  }), __$.PkK = __$.U.array(__$.U.object({
    name: __$.U.string(),
    type: __$.U.string(),
    hasTools: __$.U.boolean().optional(),
    hasResources: __$.U.boolean().optional(),
    hasPrompts: __$.U.boolean().optional(),
    serverInfo: __$.U.object({
      name: __$.U.string(),
      version: __$.U.string()
    }).optional()
  })), __$.Bt2 = __$.U.object({
    command: __$.U.literal("tools"),
    params: __$.U.object({
      server: __$.U.string().optional()
    }).optional()
  }), __$.VkK = __$.U.array(__$.U.object({
    server: __$.U.string(),
    name: __$.U.string(),
    description: __$.U.string().optional(),
    fullName: __$.U.string()
  })), __$.mt2 = __$.U.object({
    command: __$.U.literal("info"),
    params: __$.U.object({
      server: __$.U.string(),
      toolName: __$.U.string()
    })
  }), __$.fkK = __$.U.object({
    server: __$.U.string(),
    name: __$.U.string(),
    fullName: __$.U.string(),
    description: __$.U.string(),
    inputSchema: __$.U.record(__$.U.string(), __$.U.unknown())
  }).or(__$.U.null()), __$.gt2 = __$.U.object({
    command: __$.U.literal("call"),
    params: __$.U.object({
      server: __$.U.string(),
      tool: __$.U.string(),
      args: __$.U.record(__$.U.string(), __$.U.unknown()),
      timeoutMs: __$.U.number().optional()
    })
  }), __$.Ft2 = __$.U.object({
    command: __$.U.literal("grep"),
    params: __$.U.object({
      pattern: __$.U.string(),
      ignoreCase: __$.U.boolean().optional()
    })
  }), __$.NkK = __$.U.array(__$.U.object({
    server: __$.U.string(),
    name: __$.U.string(),
    fullName: __$.U.string(),
    description: __$.U.string()
  })), __$.Qt2 = __$.U.object({
    command: __$.U.literal("resources"),
    params: __$.U.object({
      server: __$.U.string().optional()
    }).optional()
  }), __$.TkK = __$.U.array(__$.U.object({
    uri: __$.U.string(),
    name: __$.U.string().optional(),
    description: __$.U.string().optional(),
    mimeType: __$.U.string().optional(),
    server: __$.U.string()
  })), __$.Ut2 = __$.U.object({
    command: __$.U.literal("read"),
    params: __$.U.object({
      server: __$.U.string(),
      uri: __$.U.string(),
      timeoutMs: __$.U.number().optional()
    })
  }), __$.vkK = __$.U.discriminatedUnion("command", [__$.ut2, __$.Bt2, __$.mt2, __$.gt2, __$.Ft2, __$.Qt2, __$.Ut2]);
});

// Register to shared state
__$.pU6 = pU6;
