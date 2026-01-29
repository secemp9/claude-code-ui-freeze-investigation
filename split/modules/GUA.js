// Module: GUA
// Dependencies: z7, y4, YK, Xz, Oz, e6, Q5K, Xh6, U, oV2
//   ... and 15 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var GUA = k(() => {
  __$.z7();
  __$.y4();
  __$.YK();
  __$.Xz();
  __$.Oz();
  __$.e6();
  __$.Q5K();
  __$.Xh6 = __$.U.strictObject({
    pattern: __$.U.string().describe("The glob pattern to match files against"),
    path: __$.U.string().optional().describe('The directory to search in. If not specified, the current working directory will be used. IMPORTANT: Omit this field to use the default directory. DO NOT enter "undefined" or "null" - simply omit it for the default behavior. Must be a valid directory path if provided.')
  }), __$.oV2 = __$.U.object({
    durationMs: __$.U.number().describe("Time taken to execute the search in milliseconds"),
    numFiles: __$.U.number().describe("Total number of files found"),
    filenames: __$.U.array(__$.U.string()).describe("Array of file paths that match the pattern"),
    truncated: __$.U.boolean().describe("Whether results were truncated (limited to 100 files)")
  }), __$.ot = {
    name: __$.hH,
    maxResultSizeChars: 1e5,
    async description() {
      return __$.Qc1;
    },
    userFacingName: __$.x5K,
    getToolUseSummary: __$.Oh6,
    getActivityDescription(A) {
      let K = __$.Oh6(A);
      return K ? `Finding ${K}` : "Finding files";
    },
    isEnabled() {
      return !0;
    },
    inputSchema: __$.Xh6,
    outputSchema: __$.oV2,
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    isSearchOrReadCommand() {
      return {
        isSearch: !0,
        isRead: !1
      };
    },
    getPath({
      path: A
    }) {
      return A ? __$.x7(A) : __$.x1();
    },
    async validateInput({
      path: A
    }) {
      if (A) {
        let K = __$.BA(),
          q = __$.x7(A);
        if (!K.existsSync(q)) return {
          result: !1,
          message: `Directory does not exist: ${A}`,
          errorCode: 1
        };
        if (!K.statSync(q).isDirectory()) return {
          result: !1,
          message: `Path is not a directory: ${A}`,
          errorCode: 2
        };
      }
      return {
        result: !0
      };
    },
    async checkPermissions(A, K) {
      let q = await K.getAppState();
      return __$.rt(__$.ot, A, q.toolPermissionContext);
    },
    async prompt() {
      return __$.Qc1;
    },
    renderToolUseMessage: __$.u5K,
    renderToolUseRejectedMessage: __$.B5K,
    renderToolUseErrorMessage: __$.m5K,
    renderToolUseProgressMessage: __$.g5K,
    renderToolResultMessage: __$.F5K,
    async call(A, {
      abortController: K,
      getAppState: q,
      globLimits: Y
    }) {
      let z = Date.now(),
        w = await q(),
        H = Y?.maxResults ?? 100,
        {
          files: J,
          truncated: O
        } = await __$.U5K(A.pattern, __$.ot.getPath(A), {
          limit: H,
          offset: 0
        }, K.signal, w.toolPermissionContext);
      return {
        data: {
          filenames: J,
          durationMs: Date.now() - z,
          numFiles: J.length,
          truncated: O
        }
      };
    },
    mapToolResultToToolResultBlockParam(A, K) {
      if (A.filenames.length === 0) return {
        tool_use_id: K,
        type: "tool_result",
        content: "No files found"
      };
      return {
        tool_use_id: K,
        type: "tool_result",
        content: [...A.filenames, ...(A.truncated ? ["(Results are truncated. Consider using a more specific path or pattern.)"] : [])].join(`
`)
      };
    }
  };
});

// Register to shared state
__$.GUA = GUA;
