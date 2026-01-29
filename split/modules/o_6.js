// Module: o_6
// Dependencies: z7, ao, f37, vC, Z1, l1, p7, nzY, U, rzY
//   ... and 18 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var o_6 = k(() => {
  __$.z7();
  __$.ao();
  __$.f37();
  __$.vC();
  __$.Z1();
  __$.l1();
  __$.p7();
  __$.nzY = __$.U.object({
    query: __$.U.string().describe('Query to find deferred tools. Use "select:<tool_name>" for direct selection, or keywords to search.'),
    max_results: __$.U.number().optional().default(5).describe("Maximum number of results to return (default: 5)")
  }), __$.rzY = __$.U.object({
    matches: __$.U.array(__$.U.string()),
    query: __$.U.string(),
    total_deferred_tools: __$.U.number()
  });
  __$.r_6 = __$.z6(async (A, K) => {
    let q = K.find(Y => Y.name === A);
    if (!q) return "";
    return q.prompt({
      getToolPermissionContext: async () => ({
        mode: "default",
        additionalWorkingDirectories: new Map(),
        alwaysAllowRules: {},
        alwaysDenyRules: {},
        alwaysAskRules: {},
        isBypassPermissionsModeAvailable: !1
      }),
      tools: K,
      agents: []
    });
  }, A => A);
  __$.ZO1 = {
    isEnabled() {
      return __$.iU();
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    name: __$.sZ,
    maxResultSizeChars: 1e5,
    async description(A, {
      tools: K
    }) {
      return __$.aJ1(K);
    },
    async prompt({
      tools: A
    }) {
      return __$.aJ1(A);
    },
    inputSchema: __$.nzY,
    outputSchema: __$.rzY,
    async call(A, {
      options: {
        tools: K
      },
      addNotification: q
    }) {
      let {
          query: Y,
          max_results: z = 5
        } = A,
        w = K.filter(__$.xM);
      __$.azY(w);
      function H($) {
        if ($.length === 0) return;
        q?.({
          key: `tool-search-${Date.now()}`,
          jsx: __$.V37($.length),
          priority: "immediate",
          timeoutMs: 3000
        });
      }
      function J($, _) {
        __$.n("tengu_tool_search_outcome", {
          query: Y,
          queryType: _,
          matchCount: $.length,
          totalDeferredTools: w.length,
          maxResults: z,
          hasMatches: $.length > 0
        });
      }
      let O = Y.match(/^select:(.+)$/i);
      if (O) {
        let $ = O[1].trim(),
          _ = w.find(G => G.name === $);
        if (!_) return __$.h(`ToolSearchTool: select failed - tool not found: ${$}`), J([], "select"), __$.n_6([], Y, w.length);
        return __$.h(`ToolSearchTool: selected "${$}"`), J([_.name], "select"), H([_.name]), __$.n_6([_.name], Y, w.length);
      }
      let X = await __$.szY(Y, w, K, z);
      return __$.h(`ToolSearchTool: keyword search for "${Y}", found ${X.length} matches`), J(X, "keyword"), H(X), __$.n_6(X, Y, w.length);
    },
    async checkPermissions(A) {
      return {
        behavior: "allow",
        updatedInput: A
      };
    },
    renderToolUseMessage: __$.W37,
    userFacingName: () => "",
    renderToolUseRejectedMessage: __$.D37,
    renderToolUseErrorMessage: __$.j37,
    renderToolUseProgressMessage: __$.M37,
    renderToolResultMessage: __$.P37,
    mapToolResultToToolResultBlockParam(A, K) {
      if (A.matches.length === 0) return {
        type: "tool_result",
        tool_use_id: K,
        content: "No matching deferred tools found"
      };
      return {
        type: "tool_result",
        tool_use_id: K,
        content: A.matches.map(q => ({
          type: "tool_reference",
          tool_name: q
        }))
      };
    }
  };
});

// Register to shared state
__$.o_6 = o_6;
