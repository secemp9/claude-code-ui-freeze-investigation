// Module: h$1
// Dependencies: z7, G_, C1, Vf, DW7, b1, ckY, U, lkY, Mp
//   ... and 11 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var h$1 = k(() => {
  __$.z7();
  __$.G_();
  __$.C1();
  __$.Vf();
  __$.DW7();
  __$.b1();
  __$.ckY = __$.U.object({
    server: __$.U.string().optional().describe("Optional server name to filter resources by")
  }), __$.lkY = __$.U.array(__$.U.object({
    uri: __$.U.string().describe("Resource URI"),
    name: __$.U.string().describe("Resource name"),
    mimeType: __$.U.string().optional().describe("MIME type of the resource"),
    description: __$.U.string().optional().describe("Resource description"),
    server: __$.U.string().describe("Server that provides this resource")
  })), __$.Mp = {
    isEnabled() {
      return !0;
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    shouldDefer: !0,
    name: "ListMcpResourcesTool",
    maxResultSizeChars: 1e5,
    async description() {
      return __$.OW7;
    },
    async prompt() {
      return __$.XW7;
    },
    inputSchema: __$.ckY,
    outputSchema: __$.lkY,
    async call(A, {
      options: {
        mcpClients: K
      }
    }) {
      let q = [],
        {
          server: Y
        } = A,
        z = Y ? K.filter(w => w.name === Y) : K;
      if (Y && z.length === 0) throw Error(`Server "${Y}" not found. Available servers: ${K.map(w => w.name).join(", ")}`);
      for (let w of z) {
        if (w.type !== "connected") continue;
        try {
          if (!w.capabilities?.resources) continue;
          let J = await (await __$.oZA(w)).client.request({
            method: "resources/list"
          }, __$.zqA);
          if (!J.resources) continue;
          let O = J.resources.map(X => ({
            ...X,
            server: w.name
          }));
          q.push(...O);
        } catch (H) {
          __$.O2(w.name, `Failed to fetch resources: ${H instanceof Error ? H.message : String(H)}`);
        }
      }
      return {
        data: q
      };
    },
    async checkPermissions(A) {
      return {
        behavior: "allow",
        updatedInput: A
      };
    },
    renderToolUseMessage: __$.$W7,
    userFacingName: () => "listMcpResources",
    renderToolUseRejectedMessage: __$._W7,
    renderToolUseErrorMessage: __$.GW7,
    renderToolUseProgressMessage: __$.ZW7,
    renderToolResultMessage: __$.WW7,
    mapToolResultToToolResultBlockParam(A, K) {
      if (!A || A.length === 0) return {
        tool_use_id: K,
        type: "tool_result",
        content: "No resources found. MCP servers may still provide tools even if they have no resources."
      };
      return {
        tool_use_id: K,
        type: "tool_result",
        content: __$.UA(A)
      };
    }
  };
});

// Register to shared state
__$.h$1 = h$1;
