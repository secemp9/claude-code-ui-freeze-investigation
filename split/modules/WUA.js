// Module: WUA
// Dependencies: z7, hV1, YK, Xw, y4, Xz, e6, AP, s5K, b1
//   ... and 28 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var WUA = k(() => {
  __$.z7();
  __$.hV1();
  __$.YK();
  __$.Xw();
  __$.y4();
  __$.Xz();
  __$.e6();
  __$.AP();
  __$.s5K();
  __$.b1();
  __$.tV2 = __$.U.strictObject({
    notebook_path: __$.U.string().describe("The absolute path to the Jupyter notebook file to edit (must be absolute, not relative)"),
    cell_id: __$.U.string().optional().describe("The ID of the cell to edit. When inserting a new cell, the new cell will be inserted after the cell with this ID, or at the beginning if not specified."),
    new_source: __$.U.string().describe("The new source for the cell"),
    cell_type: __$.U.enum(["code", "markdown"]).optional().describe("The type of the cell (code or markdown). If not specified, it defaults to the current cell type. If using edit_mode=insert, this is required."),
    edit_mode: __$.U.enum(["replace", "insert", "delete"]).optional().describe("The type of edit to make (replace, insert, delete). Defaults to replace.")
  }), __$.eV2 = __$.U.object({
    new_source: __$.U.string().describe("The new source code that was written to the cell"),
    cell_id: __$.U.string().optional().describe("The ID of the cell that was edited"),
    cell_type: __$.U.enum(["code", "markdown"]).describe("The type of the cell"),
    language: __$.U.string().describe("The programming language of the notebook"),
    edit_mode: __$.U.string().describe("The edit mode that was used"),
    error: __$.U.string().optional().describe("Error message if the operation failed"),
    notebook_path: __$.U.string().describe("The path to the notebook file"),
    original_file: __$.U.string().describe("The original notebook content before modification"),
    updated_file: __$.U.string().describe("The updated notebook content after modification")
  }), __$.bd = {
    name: __$.ZD,
    maxResultSizeChars: 1e5,
    shouldDefer: !0,
    async description() {
      return __$.p5K;
    },
    async prompt() {
      return __$.d5K;
    },
    userFacingName() {
      return "Edit Notebook";
    },
    getToolUseSummary: __$.$h6,
    getActivityDescription(A) {
      let K = __$.$h6(A);
      return K ? `Editing notebook ${K}` : "Editing notebook";
    },
    isEnabled() {
      return !0;
    },
    inputSchema: __$.tV2,
    outputSchema: __$.eV2,
    isConcurrencySafe() {
      return !1;
    },
    isReadOnly() {
      return !1;
    },
    getPath(A) {
      return A.notebook_path;
    },
    async checkPermissions(A, K) {
      let q = await K.getAppState();
      return __$.P5A(__$.bd, A, q.toolPermissionContext);
    },
    mapToolResultToToolResultBlockParam({
      cell_id: A,
      edit_mode: K,
      new_source: q,
      error: Y
    }, z) {
      if (Y) return {
        tool_use_id: z,
        type: "tool_result",
        content: Y,
        is_error: !0
      };
      switch (K) {
        case "replace":
          return {
            tool_use_id: z,
            type: "tool_result",
            content: `Updated cell ${A} with ${q}`
          };
        case "insert":
          return {
            tool_use_id: z,
            type: "tool_result",
            content: `Inserted cell ${A} with ${q}`
          };
        case "delete":
          return {
            tool_use_id: z,
            type: "tool_result",
            content: `Deleted cell ${A}`
          };
        default:
          return {
            tool_use_id: z,
            type: "tool_result",
            content: "Unknown edit mode"
          };
      }
    },
    renderToolUseMessage: __$.i5K,
    renderToolUseRejectedMessage: __$.n5K,
    renderToolUseErrorMessage: __$.r5K,
    renderToolUseProgressMessage: __$.o5K,
    renderToolResultMessage: __$.a5K,
    async validateInput({
      notebook_path: A,
      cell_type: K,
      cell_id: q,
      edit_mode: Y = "replace"
    }) {
      let z = __$.t5K(A) ? A : __$.e5K(__$.x1(), A),
        w = __$.BA();
      if (!w.existsSync(z)) return {
        result: !1,
        message: "Notebook file does not exist.",
        errorCode: 1
      };
      if (__$.sV2(z) !== ".ipynb") return {
        result: !1,
        message: "File must be a Jupyter notebook (.ipynb file). For editing other file types, use the FileEdit tool.",
        errorCode: 2
      };
      if (Y !== "replace" && Y !== "insert" && Y !== "delete") return {
        result: !1,
        message: "Edit mode must be replace, insert, or delete.",
        errorCode: 4
      };
      if (Y === "insert" && !K) return {
        result: !1,
        message: "Cell type is required when using edit_mode=insert.",
        errorCode: 5
      };
      let H = __$.gX(z),
        J = w.readFileSync(z, {
          encoding: H
        }),
        O = __$.P3(J);
      if (!O) return {
        result: !1,
        message: "Notebook is not valid JSON.",
        errorCode: 6
      };
      if (!q) {
        if (Y !== "insert") return {
          result: !1,
          message: "Cell ID must be specified when not inserting a new cell.",
          errorCode: 7
        };
      } else if (O.cells.findIndex($ => $.id === q) === -1) {
        let $ = __$.ZUA(q);
        if ($ !== void 0) {
          if (!O.cells[$]) return {
            result: !1,
            message: `Cell with index ${$} does not exist in notebook.`,
            errorCode: 7
          };
        } else return {
          result: !1,
          message: `Cell with ID "${q}" not found in notebook.`,
          errorCode: 8
        };
      }
      return {
        result: !0
      };
    },
    async call({
      notebook_path: A,
      new_source: K,
      cell_id: q,
      cell_type: Y,
      edit_mode: z
    }, {
      updateFileHistoryState: w
    }, H, J) {
      let O = __$.t5K(A) ? A : __$.e5K(__$.x1(), A);
      if (__$.l2()) await __$.Ds(w, O, J.uuid);
      try {
        let X = __$.gX(O),
          $ = __$.BA().readFileSync(O, {
            encoding: X
          }),
          _ = __$.G6($),
          G;
        if (!q) G = 0;else {
          if (G = _.cells.findIndex(f => f.id === q), G === -1) {
            let f = __$.ZUA(q);
            if (f !== void 0) G = f;
          }
          if (z === "insert") G += 1;
        }
        let Z = z;
        if (Z === "replace" && G === _.cells.length) {
          if (Z = "insert", !Y) Y = "code";
        }
        let W = _.metadata.language_info?.name ?? "python",
          D = void 0;
        if (_.nbformat > 4 || _.nbformat === 4 && _.nbformat_minor >= 5) {
          if (Z === "insert") D = Math.random().toString(36).substring(2, 15);else if (q !== null) D = q;
        }
        if (Z === "delete") _.cells.splice(G, 1);else if (Z === "insert") {
          let f;
          if (Y === "markdown") f = {
            cell_type: "markdown",
            id: D,
            source: K,
            metadata: {}
          };else f = {
            cell_type: "code",
            id: D,
            source: K,
            metadata: {},
            execution_count: null,
            outputs: []
          };
          _.cells.splice(G, 0, f);
        } else {
          let f = _.cells[G];
          if (f.source = K, f.cell_type === "code") f.execution_count = null, f.outputs = [];
          if (Y && Y !== f.cell_type) f.cell_type = Y;
        }
        let j = __$.Up(O),
          M = __$.UA(_, null, 1);
        return __$.Ss(O, M, X, j), {
          data: {
            new_source: K,
            cell_type: Y ?? "code",
            language: W,
            edit_mode: Z ?? "replace",
            cell_id: D || void 0,
            error: "",
            notebook_path: O,
            original_file: $,
            updated_file: M
          }
        };
      } catch (X) {
        if (X instanceof Error) return {
          data: {
            new_source: K,
            cell_type: Y ?? "code",
            language: "python",
            edit_mode: "replace",
            error: X.message,
            cell_id: q,
            notebook_path: O,
            original_file: "",
            updated_file: ""
          }
        };
        return {
          data: {
            new_source: K,
            cell_type: Y ?? "code",
            language: "python",
            edit_mode: "replace",
            error: "Unknown error occurred while editing notebook",
            cell_id: q,
            notebook_path: O,
            original_file: "",
            updated_file: ""
          }
        };
      }
    }
  };
});

// Register to shared state
__$.WUA = WUA;
