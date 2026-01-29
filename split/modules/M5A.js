// Module: M5A
// Dependencies: l1, LG1, YK, y4, q6, vp, ON7, pqA, Xz, Oz
//   ... and 62 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var M5A = k(() => {
  __$.l1();
  __$.LG1();
  __$.YK();
  __$.y4();
  __$.q6();
  __$.vp();
  __$.ON7();
  __$.pqA();
  __$.Xz();
  __$.Oz();
  __$.e6();
  __$.QqA();
  __$.Gs();
  __$.bmA();
  __$.C1();
  __$.Z1();
  __$.Zf6();
  __$.bv7();
  __$.AP();
  __$.FWA();
  __$.zN6();
  __$.B7();
  __$.rmA();
  __$.ys();
  __$.qj = {
    name: __$.m5,
    maxResultSizeChars: 1e5,
    strict: !0,
    async description() {
      return "A tool for editing files";
    },
    async prompt() {
      return __$.JN7();
    },
    userFacingName: __$.MZ1,
    getToolUseSummary: __$.YN6,
    getActivityDescription(A) {
      let K = __$.YN6(A);
      return K ? `Editing ${K}` : "Editing file";
    },
    isEnabled() {
      return !0;
    },
    inputSchema: __$.vv7,
    outputSchema: __$.Ev7,
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
      return __$.P5A(__$.qj, A, q.toolPermissionContext);
    },
    renderToolUseMessage: __$._C7,
    renderToolUseProgressMessage: __$.GC7,
    renderToolResultMessage: __$.ZC7,
    renderToolUseRejectedMessage: __$.WC7,
    renderToolUseErrorMessage: __$.DC7,
    async validateInput({
      file_path: A,
      old_string: K,
      new_string: q,
      replace_all: Y = !1
    }, z) {
      if (K === q) return {
        result: !1,
        behavior: "ask",
        message: "No changes to make: old_string and new_string are exactly the same.",
        errorCode: 1
      };
      let w = __$.x7(A),
        H = await z.getAppState();
      if (__$.gG(w, H.toolPermissionContext, "edit", "deny") !== null) return {
        result: !1,
        behavior: "ask",
        message: "File is in a directory that is denied by your permission settings.",
        errorCode: 2
      };
      let O = __$.BA();
      if (O.existsSync(w) && K === "") {
        if (O.readFileSync(w, {
          encoding: __$.gX(w)
        }).replaceAll(`\r
`, `
`).trim() !== "") return {
          result: !1,
          behavior: "ask",
          message: "Cannot create new file - file already exists.",
          errorCode: 3
        };
        return {
          result: !0
        };
      }
      if (!O.existsSync(w) && K === "") return {
        result: !0
      };
      if (!O.existsSync(w)) {
        let W = __$.EZ1(w),
          D = "File does not exist.",
          j = __$.x1(),
          M = __$.V8();
        if (j !== M) D += ` Current working directory: ${j}`;
        if (W) D += ` Did you mean ${W}?`;
        return {
          result: !1,
          behavior: "ask",
          message: D,
          errorCode: 4
        };
      }
      if (w.endsWith(".ipynb")) return {
        result: !1,
        behavior: "ask",
        message: `File is a Jupyter Notebook. Use the ${__$.ZD} to edit this file.`,
        errorCode: 5
      };
      let X = z.readFileState.get(w);
      if (!X && !__$.G4("tengu_marble_kite", !1)) return {
        result: !1,
        behavior: "ask",
        message: "File has not been read yet. Read it first before writing to it.",
        meta: {
          isFilePathAbsolute: String(__$.XN6(A))
        },
        errorCode: 6
      };
      if (X) {
        if (__$.Kj(w) > X.timestamp) if (X.offset === void 0 && X.limit === void 0) {
          if (O.readFileSync(w, {
            encoding: __$.gX(w)
          }).replaceAll(`\r
`, `
`) === X.content) ;else return {
            result: !1,
            behavior: "ask",
            message: "File has been modified since read, either by the user or by a linter. Read it again before attempting to write it.",
            errorCode: 7
          };
        } else return {
          result: !1,
          behavior: "ask",
          message: "File has been modified since read, either by the user or by a linter. Read it again before attempting to write it.",
          errorCode: 7
        };
      }
      let $ = O.readFileSync(w, {
          encoding: __$.gX(w)
        }).replaceAll(`\r
`, `
`),
        _ = __$.UqA($, K);
      if (!_) return {
        result: !1,
        behavior: "ask",
        message: `String to replace not found in file.
String: ${K}`,
        meta: {
          isFilePathAbsolute: String(__$.XN6(A))
        },
        errorCode: 8
      };
      let G = $.split(_).length - 1;
      if (G > 1 && !Y) return {
        result: !1,
        behavior: "ask",
        message: `Found ${G} matches of the string to replace, but replace_all is false. To replace all occurrences, set replace_all to true. To replace only one occurrence, please provide more context to uniquely identify the instance.
String: ${K}`,
        meta: {
          isFilePathAbsolute: String(__$.XN6(A)),
          actualOldString: _
        },
        errorCode: 9
      };
      let Z = __$.hv7(w, $, () => {
        return Y ? $.replaceAll(_, q) : $.replace(_, q);
      });
      if (Z !== null) return Z;
      return {
        result: !0,
        meta: {
          actualOldString: _
        }
      };
    },
    inputsEquivalent(A, K) {
      return __$.Gj7({
        file_path: A.file_path,
        edits: [{
          old_string: A.old_string,
          new_string: A.new_string,
          replace_all: A.replace_all ?? !1
        }]
      }, {
        file_path: K.file_path,
        edits: [{
          old_string: K.old_string,
          new_string: K.new_string,
          replace_all: K.replace_all ?? !1
        }]
      });
    },
    async call({
      file_path: A,
      old_string: K,
      new_string: q,
      replace_all: Y = !1
    }, {
      readFileState: z,
      userModified: w,
      updateFileHistoryState: H,
      dynamicSkillDirTriggers: J
    }, O, X) {
      let $ = __$.BA(),
        _ = __$.x7(A),
        G = __$.x1(),
        Z = __$.ADA([_], G);
      if (Z.length > 0) {
        for (let x of Z) J?.add(x);
        __$.KDA(Z).catch(() => {});
      }
      await __$.Tp.beforeFileEdited(_);
      let W = $.existsSync(_) ? __$.d0(_) : "";
      if ($.existsSync(_)) {
        let x = __$.Kj(_),
          y = z.get(_);
        if (!y || x > y.timestamp) {
          if (!y && __$.G4("tengu_marble_kite", !1)) ;else if (!(y && y.offset === void 0 && y.limit === void 0 && W === y.content)) throw Error(__$.ekA);
        }
      }
      if (__$.l2()) await __$.Ds(H, _, X.uuid);
      let D = __$.UqA(W, K) || K,
        {
          patch: j,
          updatedFile: M
        } = __$.G_1({
          filePath: _,
          fileContents: W,
          oldString: D,
          newString: q,
          replaceAll: Y
        }),
        P = __$.cdY(_);
      $.mkdirSync(P);
      let f = $.existsSync(_) ? __$.Up(_) : "LF",
        N = $.existsSync(_) ? __$.gX(_) : "utf8";
      __$.Ss(_, M, N, f);
      let T = __$.mp();
      if (T) __$.UG1(`file://${_}`), T.changeFile(_, M).catch(x => {
        __$.h(`LSP: Failed to notify server of file change for ${_}: ${x.message}`), __$.KA(x);
      }), T.saveFile(_).catch(x => {
        __$.h(`LSP: Failed to notify server of file save for ${_}: ${x.message}`), __$.KA(x);
      });
      if (__$.Zs(_, W, M), z.set(_, {
        content: M,
        timestamp: __$.Kj(_),
        offset: void 0,
        limit: void 0
      }), _.endsWith(`${__$.ldY}CLAUDE.md`)) __$.n("tengu_write_claudemd", {});
      __$.qmA(j), __$.WB({
        operation: "edit",
        tool: "FileEditTool",
        filePath: _
      });
      let C;
      if (process.env.CLAUDE_CODE_ENTRYPOINT === "remote" && !0 && __$.G4("tengu_quartz_lantern", !1)) {
        let x = Date.now(),
          y = await __$.VZ1(_);
        if (y) C = y;
        __$.n("tengu_tool_use_diff_computed", {
          isEditTool: !0,
          durationMs: Date.now() - x,
          hasDiff: !!y
        });
      }
      return {
        data: {
          filePath: A,
          oldString: D,
          newString: q,
          originalFile: W,
          structuredPatch: j,
          userModified: w ?? !1,
          replaceAll: Y,
          ...(C && {
            gitDiff: C
          })
        }
      };
    },
    mapToolResultToToolResultBlockParam({
      filePath: A,
      oldString: K,
      newString: q,
      userModified: Y,
      replaceAll: z
    }, w) {
      let H = Y ? ".  The user modified your proposed changes before accepting them. " : "";
      if (z) return {
        tool_use_id: w,
        type: "tool_result",
        content: `The file ${A} has been updated${H}. All occurrences of '${K}' were successfully replaced with '${q}'.`
      };
      return {
        tool_use_id: w,
        type: "tool_result",
        content: `The file ${A} has been updated successfully${H}.`
      };
    }
  };
});

// Register to shared state
__$.M5A = M5A;
