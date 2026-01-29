// Module: b$1
// Dependencies: z7, G_, Vf, EW7, b1, ikY, U, nkY, Pp, jW7
//   ... and 10 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var b$1 = k(() => {
  __$.z7();
  __$.G_();
  __$.Vf();
  __$.EW7();
  __$.b1();
  __$.ikY = __$.U.object({
    server: __$.U.string().describe("The MCP server name"),
    uri: __$.U.string().describe("The resource URI to read")
  }), __$.nkY = __$.U.object({
    contents: __$.U.array(__$.U.object({
      uri: __$.U.string().describe("Resource URI"),
      mimeType: __$.U.string().optional().describe("MIME type of the content"),
      text: __$.U.string().optional().describe("Text content of the resource")
    }))
  }), __$.Pp = {
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
    name: "ReadMcpResourceTool",
    maxResultSizeChars: 1e5,
    async description() {
      return __$.jW7;
    },
    async prompt() {
      return __$.MW7;
    },
    inputSchema: __$.ikY,
    outputSchema: __$.nkY,
    async call(A, {
      options: {
        mcpClients: K
      }
    }) {
      let {
          server: q,
          uri: Y
        } = A,
        z = K.find(J => J.name === q);
      if (!z) throw Error(`Server "${q}" not found. Available servers: ${K.map(J => J.name).join(", ")}`);
      if (z.type !== "connected") throw Error(`Server "${q}" is not connected`);
      if (!z.capabilities?.resources) throw Error(`Server "${q}" does not support resources`);
      return {
        data: await (await __$.oZA(z)).client.request({
          method: "resources/read",
          params: {
            uri: Y
          }
        }, __$.wqA)
      };
    },
    async checkPermissions(A) {
      return {
        behavior: "allow",
        updatedInput: A
      };
    },
    renderToolUseMessage: __$.PW7,
    userFacingName: __$.VW7,
    renderToolUseRejectedMessage: __$.fW7,
    renderToolUseErrorMessage: __$.NW7,
    renderToolUseProgressMessage: __$.TW7,
    renderToolResultMessage: __$.vW7,
    mapToolResultToToolResultBlockParam(A, K) {
      return {
        tool_use_id: K,
        type: "tool_result",
        content: __$.UA(A)
      };
    }
  };
});

// Register to shared state
__$.b$1 = b$1;
