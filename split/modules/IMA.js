// Module: IMA
// Dependencies: z7, y4, Oz, wb, rE, Xz, e6, b5K, Jh6, U
//   ... and 21 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var IMA = k(() => {
  __$.z7();
  __$.y4();
  __$.Oz();
  __$.wb();
  __$.rE();
  __$.Xz();
  __$.e6();
  __$.b5K();
  __$.Jh6 = __$.U.strictObject({
    pattern: __$.U.string().describe("The regular expression pattern to search for in file contents"),
    path: __$.U.string().optional().describe("File or directory to search in (rg PATH). Defaults to current working directory."),
    glob: __$.U.string().optional().describe('Glob pattern to filter files (e.g. "*.js", "*.{ts,tsx}") - maps to rg --glob'),
    output_mode: __$.U.enum(["content", "files_with_matches", "count"]).optional().describe('Output mode: "content" shows matching lines (supports -A/-B/-C context, -n line numbers, head_limit), "files_with_matches" shows file paths (supports head_limit), "count" shows match counts (supports head_limit). Defaults to "files_with_matches".'),
    "-B": __$.U.number().optional().describe('Number of lines to show before each match (rg -B). Requires output_mode: "content", ignored otherwise.'),
    "-A": __$.U.number().optional().describe('Number of lines to show after each match (rg -A). Requires output_mode: "content", ignored otherwise.'),
    "-C": __$.U.number().optional().describe("Alias for context."),
    context: __$.U.number().optional().describe('Number of lines to show before and after each match (rg -C). Requires output_mode: "content", ignored otherwise.'),
    "-n": __$.U.boolean().optional().describe('Show line numbers in output (rg -n). Requires output_mode: "content", ignored otherwise. Defaults to true.'),
    "-i": __$.U.boolean().optional().describe("Case insensitive search (rg -i)"),
    type: __$.U.string().optional().describe("File type to search (rg --type). Common types: js, py, rust, go, java, etc. More efficient than include for standard file types."),
    head_limit: __$.U.number().optional().describe('Limit output to first N lines/entries, equivalent to "| head -N". Works across all output modes: content (limits output lines), files_with_matches (limits file paths), count (limits count entries). Defaults to 0 (unlimited).'),
    offset: __$.U.number().optional().describe('Skip first N lines/entries before applying head_limit, equivalent to "| tail -n +N | head -N". Works across all output modes. Defaults to 0.'),
    multiline: __$.U.boolean().optional().describe("Enable multiline mode where . matches newlines and patterns can span lines (rg -U --multiline-dotall). Default: false.")
  }), __$.nV2 = [".git", ".svn", ".hg", ".bzr"];
  __$.rV2 = __$.U.object({
    mode: __$.U.enum(["content", "files_with_matches", "count"]).optional(),
    numFiles: __$.U.number(),
    filenames: __$.U.array(__$.U.string()),
    content: __$.U.string().optional(),
    numLines: __$.U.number().optional(),
    numMatches: __$.U.number().optional(),
    appliedLimit: __$.U.number().optional(),
    appliedOffset: __$.U.number().optional()
  }), __$.hd = {
    name: __$.Fz,
    maxResultSizeChars: 20000,
    strict: !0,
    input_examples: [{
      pattern: "TODO",
      output_mode: "files_with_matches"
    }, {
      pattern: "function.*export",
      glob: "*.ts",
      output_mode: "content",
      "-n": !0
    }, {
      pattern: "error",
      "-i": !0,
      type: "js",
      output_mode: "content",
      "-B": 2,
      "-A": 5
    }, {
      pattern: "import.*from",
      path: "/Users/username/project/src",
      output_mode: "content",
      "-C": 3,
      head_limit: 20
    }],
    async description() {
      return __$.Uc1();
    },
    userFacingName() {
      return "Search";
    },
    getToolUseSummary: __$.Yh6,
    getActivityDescription(A) {
      let K = __$.Yh6(A);
      return K ? `Searching for ${K}` : "Searching";
    },
    isEnabled() {
      return !0;
    },
    inputSchema: __$.Jh6,
    outputSchema: __$.rV2,
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
      return A || __$.x1();
    },
    async validateInput({
      path: A
    }) {
      if (A) {
        let K = __$.BA(),
          q = __$.x7(A);
        if (!K.existsSync(q)) return {
          result: !1,
          message: `Path does not exist: ${A}`,
          errorCode: 1
        };
      }
      return {
        result: !0
      };
    },
    async checkPermissions(A, K) {
      let q = await K.getAppState();
      return __$.rt(__$.hd, A, q.toolPermissionContext);
    },
    async prompt() {
      return __$.Uc1();
    },
    renderToolUseMessage: __$.R5K,
    renderToolUseRejectedMessage: __$.y5K,
    renderToolUseErrorMessage: __$.I5K,
    renderToolUseProgressMessage: __$.S5K,
    renderToolResultMessage: __$.h5K,
    mapToolResultToToolResultBlockParam({
      mode: A = "files_with_matches",
      numFiles: K,
      filenames: q,
      content: Y,
      numLines: z,
      numMatches: w,
      appliedLimit: H,
      appliedOffset: J
    }, O) {
      if (A === "content") {
        let _ = __$.Hh6(H, J),
          G = Y || "No matches found",
          Z = _ ? `${G}

[Showing results with pagination = ${_}]` : G;
        return {
          tool_use_id: O,
          type: "tool_result",
          content: Z
        };
      }
      if (A === "count") {
        let _ = __$.Hh6(H, J),
          G = Y || "No matches found",
          Z = w ?? 0,
          W = K ?? 0,
          D = `

Found ${Z} total ${Z === 1 ? "occurrence" : "occurrences"} across ${W} ${W === 1 ? "file" : "files"}.${_ ? ` with pagination = ${_}` : ""}`;
        return {
          tool_use_id: O,
          type: "tool_result",
          content: G + D
        };
      }
      let X = __$.Hh6(H, J);
      if (K === 0) return {
        tool_use_id: O,
        type: "tool_result",
        content: "No files found"
      };
      let $ = `Found ${K} file${K === 1 ? "" : "s"}${X ? ` ${X}` : ""}
${q.join(`
`)}`;
      return {
        tool_use_id: O,
        type: "tool_result",
        content: $
      };
    },
    async call({
      pattern: A,
      path: K,
      glob: q,
      type: Y,
      output_mode: z = "files_with_matches",
      "-B": w,
      "-A": H,
      "-C": J,
      context: O,
      "-n": X = !0,
      "-i": $ = !1,
      head_limit: _,
      offset: G = 0,
      multiline: Z = !1
    }, {
      abortController: W,
      getAppState: D
    }) {
      let j = K ? __$.x7(K) : __$.x1(),
        M = ["--hidden"];
      for (let B of __$.nV2) M.push("--glob", `!${B}`);
      if (M.push("--max-columns", "500"), Z) M.push("-U", "--multiline-dotall");
      if ($) M.push("-i");
      if (z === "files_with_matches") M.push("-l");else if (z === "count") M.push("-c");
      if (X && z === "content") M.push("-n");
      if (z === "content") if (O !== void 0) M.push("-C", O.toString());else if (J !== void 0) M.push("-C", J.toString());else {
        if (w !== void 0) M.push("-B", w.toString());
        if (H !== void 0) M.push("-A", H.toString());
      }
      if (A.startsWith("-")) M.push("-e", A);else M.push(A);
      if (Y) M.push("--type", Y);
      if (q) {
        let B = [],
          b = q.split(/\s+/);
        for (let F of b) if (F.includes("{") && F.includes("}")) B.push(F);else B.push(...F.split(",").filter(Boolean));
        for (let F of B.filter(Boolean)) M.push("--glob", F);
      }
      let P = await D(),
        f = __$.SMA(__$.hMA(P.toolPermissionContext), __$.x1());
      for (let B of f) {
        let b = B.startsWith("/") ? `!${B}` : `!**/${B}`;
        M.push("--glob", b);
      }
      let N = await __$.zb(M, j, W.signal);
      if (z === "content") {
        let B = N.map(Q => {
            let u = Q.indexOf(":");
            if (u > 0) {
              let d = Q.substring(0, u),
                r = Q.substring(u);
              return __$.wh6(d) + r;
            }
            return Q;
          }),
          b = __$.zh6(B, _, G);
        return {
          data: {
            mode: "content",
            numFiles: 0,
            filenames: [],
            content: b.join(`
`),
            numLines: b.length,
            ...(_ !== void 0 && {
              appliedLimit: _
            }),
            ...(G > 0 && {
              appliedOffset: G
            })
          }
        };
      }
      if (z === "count") {
        let B = N.map(d => {
            let r = d.lastIndexOf(":");
            if (r > 0) {
              let c = d.substring(0, r),
                YA = d.substring(r);
              return __$.wh6(c) + YA;
            }
            return d;
          }),
          b = __$.zh6(B, _, G),
          F = 0,
          Q = 0;
        for (let d of b) {
          let r = d.lastIndexOf(":");
          if (r > 0) {
            let c = d.substring(r + 1),
              YA = parseInt(c, 10);
            if (!isNaN(YA)) F += YA, Q += 1;
          }
        }
        return {
          data: {
            mode: "count",
            numFiles: Q,
            filenames: [],
            content: b.join(`
`),
            numMatches: F,
            ...(_ !== void 0 && {
              appliedLimit: _
            }),
            ...(G > 0 && {
              appliedOffset: G
            })
          }
        };
      }
      let T = await Promise.all(N.map(B => __$.BA().stat(B))),
        C = N.map((B, b) => [B, T[b]]).sort((B, b) => {
          let F = (b[1].mtimeMs ?? 0) - (B[1].mtimeMs ?? 0);
          if (F === 0) return B[0].localeCompare(b[0]);
          return F;
        }).map(B => B[0]),
        x = __$.zh6(C, _, G).map(__$.wh6);
      return {
        data: {
          mode: "files_with_matches",
          filenames: x,
          numFiles: x.length,
          ...(_ !== void 0 && {
            appliedLimit: _
          }),
          ...(G > 0 && {
            appliedOffset: G
          })
        }
      };
    }
  };
});

// Register to shared state
__$.IMA = IMA;
