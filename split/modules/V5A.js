// Module: V5A
// Dependencies: z7, l1, LG1, YK, jV, vp, Xz, Oz, e6, QqA
//   ... and 58 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var V5A = k(() => {
  __$.z7();
  __$.l1();
  __$.LG1();
  __$.YK();
  __$.jV();
  __$.vp();
  __$.Xz();
  __$.Oz();
  __$.e6();
  __$.QqA();
  __$.Gs();
  __$.bmA();
  __$.C1();
  __$.Z1();
  __$.Zf6();
  __$.AP();
  __$.FWA();
  __$.uC7();
  __$.y4();
  __$.B7();
  __$.rmA();
  __$.ys();
  __$.tdY = __$.U.strictObject({
    file_path: __$.U.string().describe("The absolute path to the file to write (must be absolute, not relative)"),
    content: __$.U.string().describe("The content to write to the file")
  }), __$.edY = __$.U.object({
    type: __$.U.enum(["create", "update"]).describe("Whether a new file was created or an existing file was updated"),
    filePath: __$.U.string().describe("The path to the file that was written"),
    content: __$.U.string().describe("The content that was written to the file"),
    structuredPatch: __$.U.array(__$.Gf6).describe("Diff patch showing the changes"),
    originalFile: __$.U.string().nullable().describe("The original file content before the write (null for new files)"),
    gitDiff: __$.U.object({
      filename: __$.U.string(),
      status: __$.U.enum(["modified", "added"]),
      additions: __$.U.number(),
      deletions: __$.U.number(),
      changes: __$.U.number(),
      patch: __$.U.string()
    }).optional()
  }), __$.Yj = {
    name: __$.Qz,
    maxResultSizeChars: 1e5,
    strict: !0,
    input_examples: [{
      file_path: "/Users/username/project/src/newFile.ts",
      content: "Hello, World!"
    }],
    async description() {
      return "Write a file to the local filesystem.";
    },
    userFacingName: __$.yC7,
    getToolUseSummary: __$.$N6,
    getActivityDescription(A) {
      let K = __$.$N6(A);
      return K ? `Writing ${K}` : "Writing file";
    },
    async prompt() {
      return __$.ux8();
    },
    isEnabled() {
      return !0;
    },
    renderToolUseMessage: __$.IC7,
    inputSchema: __$.tdY,
    outputSchema: __$.edY,
    isConcurrencySafe() {
      return !1;
    },
    isReadOnly() {
      return !1;
    },
    getPath(A) {
      return A.file_path;
    },
    async checkPermissions(A, K) {
      let q = await K.getAppState();
      return __$.P5A(__$.Yj, A, q.toolPermissionContext);
    },
    renderToolUseRejectedMessage: __$.SC7,
    renderToolUseErrorMessage: __$.hC7,
    renderToolUseProgressMessage: __$.bC7,
    renderToolResultMessage: __$.xC7,
    async validateInput({
      file_path: A
    }, K) {
      let q = __$.x7(A),
        Y = await K.getAppState();
      if (__$.gG(q, Y.toolPermissionContext, "edit", "deny") !== null) return {
        result: !1,
        message: "File is in a directory that is denied by your permission settings.",
        errorCode: 1
      };
      if (!__$.BA().existsSync(q)) return {
        result: !0
      };
      let H = K.readFileState.get(q);
      if (!H && !__$.G4("tengu_marble_kite", !1)) return {
        result: !1,
        message: "File has not been read yet. Read it first before writing to it.",
        errorCode: 2
      };
      if (H) {
        if (__$.Kj(q) > H.timestamp) return {
          result: !1,
          message: "File has been modified since read, either by the user or by a linter. Read it again before attempting to write it.",
          errorCode: 3
        };
      }
      return {
        result: !0
      };
    },
    async call({
      file_path: A,
      content: K
    }, {
      readFileState: q,
      updateFileHistoryState: Y,
      dynamicSkillDirTriggers: z
    }, w, H) {
      let J = __$.x7(A),
        O = __$.odY(J),
        X = __$.BA(),
        $ = __$.x1(),
        _ = __$.ADA([J], $);
      if (_.length > 0) {
        for (let f of _) z?.add(f);
        __$.KDA(_).catch(() => {});
      }
      await __$.Tp.beforeFileEdited(J);
      let G = X.existsSync(J);
      if (G) {
        let f = __$.Kj(J),
          N = q.get(J);
        if (!N || f > N.timestamp) if (!N && __$.G4("tengu_marble_kite", !1)) ;else if (N && N.offset === void 0 && N.limit === void 0) {
          let C = __$.gX(J);
          if (X.readFileSync(J, {
            encoding: C
          }).replaceAll(`\r
`, `
`) !== N.content) throw Error(__$.ekA);
        } else throw Error(__$.ekA);
      }
      let Z = G ? __$.gX(J) : "utf-8",
        W = G ? X.readFileSync(J, {
          encoding: Z
        }) : null;
      if (__$.l2()) await __$.Ds(Y, J, H.uuid);
      let D = G ? __$.Up(J) : await __$.mC7();
      X.mkdirSync(O), __$.Ss(J, K, Z, D);
      let j = __$.mp();
      if (j) __$.UG1(`file://${J}`), j.changeFile(J, K).catch(f => {
        __$.h(`LSP: Failed to notify server of file change for ${J}: ${f.message}`), __$.KA(f);
      }), j.saveFile(J).catch(f => {
        __$.h(`LSP: Failed to notify server of file save for ${J}: ${f.message}`), __$.KA(f);
      });
      if (__$.Zs(J, W, K), q.set(J, {
        content: K,
        timestamp: __$.Kj(J),
        offset: void 0,
        limit: void 0
      }), J.endsWith(`${__$.adY}CLAUDE.md`)) __$.n("tengu_write_claudemd", {});
      let M;
      if (process.env.CLAUDE_CODE_ENTRYPOINT === "remote" && !0 && __$.G4("tengu_quartz_lantern", !1)) {
        let f = Date.now(),
          N = await __$.VZ1(J);
        if (N) M = N;
        __$.n("tengu_tool_use_diff_computed", {
          isWriteTool: !0,
          durationMs: Date.now() - f,
          hasDiff: !!N
        });
      }
      if (W) {
        let f = __$.tT({
            filePath: A,
            fileContents: W,
            edits: [{
              old_string: W,
              new_string: K,
              replace_all: !1
            }]
          }),
          N = {
            type: "update",
            filePath: A,
            content: K,
            structuredPatch: f,
            originalFile: W,
            ...(M && {
              gitDiff: M
            })
          };
        return __$.qmA(f), __$.WB({
          operation: "write",
          tool: "FileWriteTool",
          filePath: J,
          type: "update"
        }), {
          data: N
        };
      }
      let P = {
        type: "create",
        filePath: A,
        content: K,
        structuredPatch: [],
        originalFile: null,
        ...(M && {
          gitDiff: M
        })
      };
      return __$.qmA([], K), __$.WB({
        operation: "write",
        tool: "FileWriteTool",
        filePath: J,
        type: "create"
      }), {
        data: P
      };
    },
    mapToolResultToToolResultBlockParam({
      filePath: A,
      content: K,
      type: q
    }, Y) {
      switch (q) {
        case "create":
          return {
            tool_use_id: Y,
            type: "tool_result",
            content: `File created successfully at: ${A}`
          };
        case "update":
          {
            if (__$.G4("tengu_file_write_optimization", !1)) return {
              tool_use_id: Y,
              type: "tool_result",
              content: `The file ${A} has been overwritten successfully.`
            };
            return {
              tool_use_id: Y,
              type: "tool_result",
              content: `The file ${A} has been updated. Here's the result of running \`cat -n\` on a snippet of the edited file:
${__$.zWA({
                content: K.split(/\r?\n/).length > __$.BC7 ? K.split(/\r?\n/).slice(0, __$.BC7).join(`
`) + __$.sdY : K,
                startLine: 1
              })}`
            };
          }
      }
    }
  };
});

// Register to shared state
__$.V5A = V5A;
