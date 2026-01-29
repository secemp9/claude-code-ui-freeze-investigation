// Module: Ub6
// Dependencies: z7, d6A, sz, $8, K7, B7, IH, C1, l2K, b1
//   ... and 24 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ub6 = k(() => {
  __$.z7();
  __$.d6A();
  __$.sz();
  __$.$8();
  __$.K7();
  __$.B7();
  __$.IH();
  __$.C1();
  __$.l2K();
  __$.b1();
  __$.VE2 = __$.U.strictObject({
    query: __$.U.string().min(2).describe("The search query to use"),
    allowed_domains: __$.U.array(__$.U.string()).optional().describe("Only include search results from these domains"),
    blocked_domains: __$.U.array(__$.U.string()).optional().describe("Never include search results from these domains")
  }), __$.fE2 = __$.U.object({
    title: __$.U.string().describe("The title of the search result"),
    url: __$.U.string().describe("The URL of the search result")
  }), __$.NE2 = __$.U.object({
    tool_use_id: __$.U.string().describe("ID of the tool use"),
    content: __$.U.array(__$.fE2).describe("Array of search hits")
  }), __$.TE2 = __$.U.object({
    query: __$.U.string().describe("The search query that was executed"),
    results: __$.U.array(__$.U.union([__$.NE2, __$.U.string()])).describe("Search results and/or text commentary from the model"),
    durationSeconds: __$.U.number().describe("Time taken to complete the search operation")
  });
  __$.ff1 = {
    name: __$.oE,
    maxResultSizeChars: 1e5,
    async description(A) {
      return `Claude wants to search the web for: ${A.query}`;
    },
    userFacingName() {
      return "Web Search";
    },
    getToolUseSummary: __$.Qb6,
    getActivityDescription(A) {
      let K = __$.Qb6(A);
      return K ? `Searching for ${K}` : "Searching the web";
    },
    isEnabled() {
      let A = __$.c7(),
        K = __$.J3();
      if (A === "firstParty") return !0;
      if (A === "vertex") return K.includes("claude-opus-4") || K.includes("claude-sonnet-4") || K.includes("claude-haiku-4");
      if (A === "foundry") return !0;
      return !1;
    },
    inputSchema: __$.VE2,
    outputSchema: __$.TE2,
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    async checkPermissions(A) {
      return {
        behavior: "passthrough",
        message: "WebSearchTool requires permission."
      };
    },
    async prompt() {
      return __$.Bx8();
    },
    renderToolUseMessage: __$.Q2K,
    renderToolUseRejectedMessage: __$.U2K,
    renderToolUseErrorMessage: __$.p2K,
    renderToolUseProgressMessage: __$.d2K,
    renderToolResultMessage: __$.c2K,
    async validateInput(A) {
      let {
        query: K,
        allowed_domains: q,
        blocked_domains: Y
      } = A;
      if (!K.length) return {
        result: !1,
        message: "Error: Missing query",
        errorCode: 1
      };
      if (q?.length && Y?.length) return {
        result: !1,
        message: "Error: Cannot specify both allowed_domains and blocked_domains in the same request",
        errorCode: 2
      };
      return {
        result: !0
      };
    },
    async call(A, K, q, Y, z) {
      let w = performance.now(),
        {
          query: H
        } = A,
        J = __$.t1({
          content: "Perform a web search for the query: " + H
        }),
        O = __$.vE2(A),
        X = __$.G4("tengu_plum_vx3", !1),
        $ = __$.aMA({
          messages: [J],
          systemPrompt: ["You are an assistant for performing a web search tool use"],
          maxThinkingTokens: X ? 0 : K.options.maxThinkingTokens,
          tools: [],
          signal: K.abortController.signal,
          options: {
            getToolPermissionContext: async () => {
              return (await K.getAppState()).toolPermissionContext;
            },
            model: X ? __$._O() : K.options.mainLoopModel,
            toolChoice: X ? {
              type: "tool",
              name: "web_search"
            } : void 0,
            isNonInteractiveSession: K.options.isNonInteractiveSession,
            hasAppendSystemPrompt: !!K.options.appendSystemPrompt,
            extraToolSchemas: [O],
            querySource: "web_search_tool",
            agents: K.options.agentDefinitions.activeAgents,
            mcpTools: [],
            agentId: K.agentId
          }
        }),
        _ = [],
        G = null,
        Z = "",
        W = 0,
        D = new Map();
      for await (let T of $) {
        if (_.push(T), T.type === "stream_event" && T.event?.type === "content_block_start") {
          let C = T.event.content_block;
          if (C && C.type === "server_tool_use") {
            G = C.id, Z = "";
            continue;
          }
        }
        if (G && T.type === "stream_event" && T.event?.type === "content_block_delta") {
          let C = T.event.delta;
          if (C?.type === "input_json_delta" && C.partial_json) {
            Z += C.partial_json;
            try {
              let R = Z.match(/"query"\s*:\s*"((?:[^"\\]|\\.)*)"/);
              if (R && R[1]) {
                let x = __$.G6('"' + R[1] + '"');
                if (!D.has(G) || D.get(G) !== x) {
                  if (D.set(G, x), W++, z) z({
                    toolUseID: `search-progress-${W}`,
                    data: {
                      type: "query_update",
                      query: x
                    }
                  });
                }
              }
            } catch {}
          }
        }
        if (T.type === "stream_event" && T.event?.type === "content_block_start") {
          let C = T.event.content_block;
          if (C && C.type === "web_search_tool_result") {
            let R = C.tool_use_id,
              x = D.get(R) || H,
              y = C.content;
            if (W++, z) z({
              toolUseID: R || `search-progress-${W}`,
              data: {
                type: "search_results_received",
                resultCount: Array.isArray(y) ? y.length : 0,
                query: x
              }
            });
          }
        }
      }
      let M = _.filter(T => T.type === "assistant").flatMap(T => T.message.content),
        f = (performance.now() - w) / 1000;
      return {
        data: __$.EE2(M, H, f)
      };
    },
    mapToolResultToToolResultBlockParam(A, K) {
      let {
          query: q,
          results: Y
        } = A,
        z = `Web search results for query: "${q}"

`;
      return Y.forEach(w => {
        if (typeof w === "string") z += w + `

`;else if (w.content.length > 0) z += `Links: ${__$.UA(w.content)}

`;else z += `No links found.

`;
      }), z += `
REMINDER: You MUST include the sources above in your response to the user using markdown hyperlinks.`, {
        tool_use_id: K,
        type: "tool_result",
        content: z.trim()
      };
    }
  };
});

// Register to shared state
__$.Ub6 = Ub6;
