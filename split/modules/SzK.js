// Module: SzK
// Dependencies: z7, HzK, PzK, Gs, Oz, y4, e6, Xz, C1, Z1
//   ... and 27 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SzK = k(() => {
  __$.z7();
  __$.HzK();
  __$.PzK();
  __$.Gs();
  __$.Oz();
  __$.y4();
  __$.e6();
  __$.Xz();
  __$.C1();
  __$.Z1();
  __$.RzK();
  __$.lE2 = __$.U.strictObject({
    operation: __$.U.enum(["goToDefinition", "findReferences", "hover", "documentSymbol", "workspaceSymbol", "goToImplementation", "prepareCallHierarchy", "incomingCalls", "outgoingCalls"]).describe("The LSP operation to perform"),
    filePath: __$.U.string().describe("The absolute or relative path to the file"),
    line: __$.U.number().int().positive().describe("The line number (1-based, as shown in editors)"),
    character: __$.U.number().int().positive().describe("The character offset (1-based, as shown in editors)")
  }), __$.iE2 = __$.U.object({
    operation: __$.U.enum(["goToDefinition", "findReferences", "hover", "documentSymbol", "workspaceSymbol", "goToImplementation", "prepareCallHierarchy", "incomingCalls", "outgoingCalls"]).describe("The LSP operation that was performed"),
    result: __$.U.string().describe("The formatted result of the LSP operation"),
    filePath: __$.U.string().describe("The file path the operation was performed on"),
    resultCount: __$.U.number().int().nonnegative().optional().describe("Number of results (definitions, references, symbols)"),
    fileCount: __$.U.number().int().nonnegative().optional().describe("Number of files containing results")
  }), __$.nb6 = {
    name: __$.VzK,
    maxResultSizeChars: 1e5,
    isLsp: !0,
    async description() {
      return __$.lb6;
    },
    userFacingName: __$.TzK,
    isEnabled() {
      if (__$.w5A().status === "failed") return !1;
      let K = __$.mp();
      if (!K) return !1;
      let q = K.getAllServers();
      if (q.size === 0) return !1;
      return Array.from(q.values()).some(z => z.state !== "error");
    },
    inputSchema: __$.lE2,
    outputSchema: __$.iE2,
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    getPath({
      filePath: A
    }) {
      return __$.x7(A);
    },
    async validateInput(A) {
      let K = __$.wzK.safeParse(A);
      if (!K.success) return {
        result: !1,
        message: `Invalid input: ${K.error.message}`,
        errorCode: 3
      };
      let q = __$.BA(),
        Y = __$.x7(A.filePath);
      if (!q.existsSync(Y)) return {
        result: !1,
        message: `File does not exist: ${A.filePath}`,
        errorCode: 1
      };
      try {
        if (!q.statSync(Y).isFile()) return {
          result: !1,
          message: `Path is not a file: ${A.filePath}`,
          errorCode: 2
        };
      } catch (z) {
        let w = z instanceof Error ? z : Error(String(z));
        return __$.KA(Error(`Failed to access file stats for LSP operation on ${A.filePath}: ${w.message}`)), {
          result: !1,
          message: `Cannot access file: ${A.filePath}. ${w.message}`,
          errorCode: 4
        };
      }
      return {
        result: !0
      };
    },
    async checkPermissions(A, K) {
      let q = await K.getAppState();
      return __$.rt(__$.nb6, A, q.toolPermissionContext);
    },
    async prompt() {
      return __$.lb6;
    },
    renderToolUseMessage: __$.vzK,
    renderToolUseRejectedMessage: __$.EzK,
    renderToolUseErrorMessage: __$.kzK,
    renderToolUseProgressMessage: __$.CzK,
    renderToolResultMessage: __$.LzK,
    async call(A, K) {
      let q = __$.x7(A.filePath),
        Y = __$.x1();
      if (__$.w5A().status === "pending") await __$.fv7();
      let w = __$.mp();
      if (!w) return __$.KA(Error("LSP server manager not initialized when tool was called")), {
        data: {
          operation: A.operation,
          result: "LSP server manager not initialized. This may indicate a startup issue.",
          filePath: A.filePath
        }
      };
      let {
        method: H,
        params: J
      } = __$.nE2(A, q);
      try {
        if (!w.isFileOpen(q)) {
          let Z = await __$.dE2(q, "utf-8");
          await w.openFile(q, Z);
        }
        let O = await w.sendRequest(q, H, J);
        if (O === void 0) return __$.h(`No LSP server available for file type ${__$.ib6.extname(q)} for operation ${A.operation} on file ${A.filePath}`), {
          data: {
            operation: A.operation,
            result: `No LSP server available for file type: ${__$.ib6.extname(q)}`,
            filePath: A.filePath
          }
        };
        if (A.operation === "incomingCalls" || A.operation === "outgoingCalls") {
          let Z = O;
          if (!Z || Z.length === 0) return {
            data: {
              operation: A.operation,
              result: "No call hierarchy item found at this position",
              filePath: A.filePath,
              resultCount: 0,
              fileCount: 0
            }
          };
          let W = A.operation === "incomingCalls" ? "callHierarchy/incomingCalls" : "callHierarchy/outgoingCalls";
          if (O = await w.sendRequest(q, W, {
            item: Z[0]
          }), O === void 0) __$.h(`LSP server returned undefined for ${W} on ${A.filePath}`);
        }
        let {
          formatted: X,
          resultCount: $,
          fileCount: _
        } = __$.oE2(A.operation, O, Y);
        return {
          data: {
            operation: A.operation,
            result: X,
            filePath: A.filePath,
            resultCount: $,
            fileCount: _
          }
        };
      } catch (O) {
        let $ = (O instanceof Error ? O : Error(String(O))).message;
        return __$.KA(Error(`LSP tool request failed for ${A.operation} on ${A.filePath}: ${$}`)), {
          data: {
            operation: A.operation,
            result: `Error performing ${A.operation}: ${$}`,
            filePath: A.filePath
          }
        };
      }
    },
    mapToolResultToToolResultBlockParam(A, K) {
      return {
        tool_use_id: K,
        type: "tool_result",
        content: A.result
      };
    }
  };
});

// Register to shared state
__$.SzK = SzK;
