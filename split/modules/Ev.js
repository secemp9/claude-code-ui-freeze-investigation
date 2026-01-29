// Module: Ev
// Dependencies: z7, y4, q6, l6, Au, YK, Oz, hV1, C1, cO
//   ... and 65 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ev = k(() => {
  __$.z7();
  __$.y4();
  __$.q6();
  __$.l6();
  __$.Au();
  __$.YK();
  __$.Oz();
  __$.hV1();
  __$.C1();
  __$.cO();
  __$.Xz();
  __$.bc1();
  __$.$8();
  __$.dT();
  __$.e6();
  __$.UOK();
  __$.LG1();
  __$.l1();
  __$.YK();
  __$.b1();
  __$.ys();
  __$.Qy2 = String.fromCharCode(8239);
  __$.Uy2 = [];
  __$.$N1 = class $N1 extends Error {
    tokenCount;
    maxTokens;
    constructor(A, K) {
      super(`File content (${A} tokens) exceeds maximum allowed tokens (${K}). Please use offset and limit parameters to read specific portions of the file, or use the GrepTool to search for specific content.`);
      this.tokenCount = A;
      this.maxTokens = K;
      this.name = "MaxFileReadTokenExceededError";
    }
  };
  __$.bN1 = new Set(["png", "jpg", "jpeg", "gif", "webp"]), __$.dy2 = new Set(["mp3", "wav", "flac", "ogg", "aac", "m4a", "wma", "aiff", "opus", "mp4", "avi", "mov", "wmv", "flv", "mkv", "webm", "m4v", "mpeg", "mpg", "zip", "rar", "tar", "gz", "bz2", "7z", "xz", "z", "tgz", "iso", "exe", "dll", "so", "dylib", "app", "msi", "deb", "rpm", "bin", "dat", "db", "sqlite", "sqlite3", "mdb", "idx", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "odt", "ods", "odp", "ttf", "otf", "woff", "woff2", "eot", "psd", "ai", "eps", "sketch", "fig", "xd", "blend", "obj", "3ds", "max", "class", "jar", "war", "pyc", "pyo", "rlib", "swf", "fla"]);
  __$.Uu6 = __$.U.strictObject({
    file_path: __$.U.string().describe("The absolute path to the file to read"),
    offset: __$.U.number().optional().describe("The line number to start reading from. Only provide if the file is too large to read at once"),
    limit: __$.U.number().optional().describe("The number of lines to read. Only provide if the file is too large to read at once.")
  }), __$.ly2 = __$.U.enum(["image/jpeg", "image/png", "image/gif", "image/webp"]), __$.iy2 = __$.U.discriminatedUnion("type", [__$.U.object({
    type: __$.U.literal("text"),
    file: __$.U.object({
      filePath: __$.U.string().describe("The path to the file that was read"),
      content: __$.U.string().describe("The content of the file"),
      numLines: __$.U.number().describe("Number of lines in the returned content"),
      startLine: __$.U.number().describe("The starting line number"),
      totalLines: __$.U.number().describe("Total number of lines in the file")
    })
  }), __$.U.object({
    type: __$.U.literal("image"),
    file: __$.U.object({
      base64: __$.U.string().describe("Base64-encoded image data"),
      type: __$.ly2.describe("The MIME type of the image"),
      originalSize: __$.U.number().describe("Original file size in bytes"),
      dimensions: __$.U.object({
        originalWidth: __$.U.number().optional().describe("Original image width in pixels"),
        originalHeight: __$.U.number().optional().describe("Original image height in pixels"),
        displayWidth: __$.U.number().optional().describe("Displayed image width in pixels (after resizing)"),
        displayHeight: __$.U.number().optional().describe("Displayed image height in pixels (after resizing)")
      }).optional().describe("Image dimension info for coordinate mapping")
    })
  }), __$.U.object({
    type: __$.U.literal("notebook"),
    file: __$.U.object({
      filePath: __$.U.string().describe("The path to the notebook file"),
      cells: __$.U.array(__$.U.any()).describe("Array of notebook cells")
    })
  }), __$.U.object({
    type: __$.U.literal("pdf"),
    file: __$.U.object({
      filePath: __$.U.string().describe("The path to the PDF file"),
      base64: __$.U.string().describe("Base64-encoded PDF data"),
      originalSize: __$.U.number().describe("Original file size in bytes")
    })
  })]), __$.d9 = {
    name: __$.eq,
    maxResultSizeChars: 1e5,
    strict: !0,
    input_examples: [{
      file_path: "/Users/username/project/src/index.ts"
    }, {
      file_path: "/Users/username/project/README.md",
      limit: 100,
      offset: 50
    }],
    async description() {
      return __$.Cx8;
    },
    async prompt() {
      return __$.Lx8;
    },
    inputSchema: __$.Uu6,
    outputSchema: __$.iy2,
    userFacingName: __$.QOK,
    getToolUseSummary: __$.gu6,
    getActivityDescription(A) {
      let K = __$.gu6(A);
      return K ? `Reading ${K}` : "Reading file";
    },
    isEnabled() {
      return !0;
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    isSearchOrReadCommand() {
      return {
        isSearch: !1,
        isRead: !0
      };
    },
    getPath({
      file_path: A
    }) {
      return A || __$.x1();
    },
    async checkPermissions(A, K) {
      let q = await K.getAppState();
      return __$.rt(__$.d9, A, q.toolPermissionContext);
    },
    renderToolUseMessage: __$.xOK,
    renderToolUseTag: __$.uOK,
    renderToolUseProgressMessage: __$.BOK,
    renderToolResultMessage: __$.mOK,
    renderToolUseRejectedMessage: __$.gOK,
    renderToolUseErrorMessage: __$.FOK,
    async validateInput({
      file_path: A,
      offset: K,
      limit: q
    }, Y) {
      let z = __$.BA(),
        w = __$.x7(A),
        H = await Y.getAppState();
      if (__$.gG(w, H.toolPermissionContext, "read", "deny") !== null) return {
        result: !1,
        message: "File is in a directory that is denied by your permission settings.",
        errorCode: 1
      };
      if (w.startsWith("\\\\") || w.startsWith("//")) return {
        result: !0
      };
      let X = __$.pOK(w);
      if (!z.existsSync(X)) {
        let D = __$.EZ1(w),
          j = "File does not exist.",
          M = __$.x1(),
          P = __$.V8();
        if (M !== P) j += ` Current working directory: ${M}`;
        if (D) j += ` Did you mean ${D}?`;
        return {
          result: !1,
          message: j,
          errorCode: 2
        };
      }
      let $ = __$.VpA.extname(w).toLowerCase();
      if (__$.dy2.has($.slice(1)) && !(__$.iJA() && __$.t11($))) return {
        result: !1,
        message: `This tool cannot read binary files. The file appears to be a binary ${$} file. Please use appropriate tools for binary file analysis.`,
        errorCode: 4
      };
      let G = z.statSync(X).size;
      if (G === 0) {
        if (__$.bN1.has($.slice(1))) return {
          result: !1,
          message: "Empty image files cannot be processed.",
          errorCode: 5
        };
      }
      let Z = $ === ".ipynb",
        W = __$.iJA() && __$.t11($);
      if (!__$.bN1.has($.slice(1)) && !Z && !W) {
        if (!__$._N1(w) && !K && !q) return {
          result: !1,
          message: __$.Fu6(G),
          meta: {
            fileSize: G
          },
          errorCode: 6
        };
      }
      return {
        result: !0
      };
    },
    async call({
      file_path: A,
      offset: K = 1,
      limit: q = void 0
    }, Y) {
      let {
          readFileState: z,
          fileReadingLimits: w
        } = Y,
        H = w?.maxSizeBytes ?? __$.fpA,
        J = w?.maxTokens ?? __$.Qu6(),
        O = __$.VpA.extname(A).toLowerCase().slice(1),
        X = __$.x7(A),
        $ = __$.pOK(X),
        _ = __$.x1(),
        G = __$.ADA([X], _);
      if (G.length > 0) {
        for (let f of G) Y.dynamicSkillDirTriggers?.add(f);
        __$.KDA(G).catch(() => {});
      }
      if (O === "ipynb") {
        let f = __$.hOK($),
          N = __$.UA(f);
        if (N.length > H) throw Error(`Notebook content (${__$.c0(N.length)}) exceeds maximum allowed size (${__$.c0(H)}). Use ${__$.G7} with jq to read specific portions:
  cat "${A}" | jq '.cells[:20]' # First 20 cells
  cat "${A}" | jq '.cells[100:120]' # Cells 100-120
  cat "${A}" | jq '.cells | length' # Count total cells
  cat "${A}" | jq '.cells[] | select(.cell_type=="code") | .source' # All code sources`);
        await __$.dOK(N, O, {
          maxSizeBytes: H,
          maxTokens: J
        }), z.set(X, {
          content: N,
          timestamp: __$.Kj($),
          offset: K,
          limit: q
        }), Y.nestedMemoryAttachmentTriggers?.add(X);
        let T = {
          type: "notebook",
          file: {
            filePath: A,
            cells: f
          }
        };
        return __$.WB({
          operation: "read",
          tool: "FileReadTool",
          filePath: X,
          content: N
        }), {
          data: T
        };
      }
      if (__$.bN1.has(O)) {
        let f = await __$.zu6($, J, O);
        Y.nestedMemoryAttachmentTriggers?.add(X), __$.WB({
          operation: "read",
          tool: "FileReadTool",
          filePath: X,
          content: f.file.base64
        });
        let N = f.file.dimensions ? __$.B$A(f.file.dimensions) : null;
        return {
          data: f,
          ...(N && {
            newMessages: [__$.t1({
              content: N,
              isMeta: !0
            })]
          })
        };
      }
      if (__$.iJA() && __$.t11(O)) {
        let f = await __$.kx8($);
        return __$.WB({
          operation: "read",
          tool: "FileReadTool",
          filePath: X,
          content: f.file.base64
        }), {
          data: f,
          newMessages: [__$.t1({
            content: [{
              type: "document",
              source: {
                type: "base64",
                media_type: "application/pdf",
                data: f.file.base64
              }
            }],
            isMeta: !0
          })]
        };
      }
      let Z = K === 0 ? 0 : K - 1,
        {
          content: W,
          lineCount: D,
          totalLines: j
        } = __$.cOK($, Z, q);
      if (W.length > H) throw Error(__$.Fu6(W.length, H));
      await __$.dOK(W, O, {
        maxSizeBytes: H,
        maxTokens: J
      }), z.set(X, {
        content: W,
        timestamp: __$.Kj($),
        offset: K,
        limit: q
      }), Y.nestedMemoryAttachmentTriggers?.add(X);
      for (let f of __$.Uy2) f($, W);
      let M = {
        type: "text",
        file: {
          filePath: A,
          content: W,
          numLines: D,
          startLine: K,
          totalLines: j
        }
      };
      __$.WB({
        operation: "read",
        tool: "FileReadTool",
        filePath: X,
        content: W
      });
      let P = __$.cy2(X);
      if (P) __$.n("tengu_session_file_read", {
        is_session_memory: P === "session_memory",
        is_session_transcript: P === "session_transcript"
      });
      return {
        data: M
      };
    },
    mapToolResultToToolResultBlockParam(A, K) {
      switch (A.type) {
        case "image":
          return {
            tool_use_id: K,
            type: "tool_result",
            content: [{
              type: "image",
              source: {
                type: "base64",
                data: A.file.base64,
                media_type: A.file.type
              }
            }]
          };
        case "notebook":
          return __$.bOK(A.file.cells, K);
        case "pdf":
          return {
            tool_use_id: K,
            type: "tool_result",
            content: `PDF file read: ${A.file.filePath} (${__$.c0(A.file.originalSize)})`
          };
        case "text":
          {
            let q;
            if (A.file.content) q = __$.zWA(A.file) + __$.ny2;else q = A.file.totalLines === 0 ? "<system-reminder>Warning: the file exists but the contents are empty.</system-reminder>" : `<system-reminder>Warning: the file exists but is shorter than the provided offset (${A.file.startLine}). The file has ${A.file.totalLines} lines.</system-reminder>`;
            return {
              tool_use_id: K,
              type: "tool_result",
              content: q
            };
          }
      }
    }
  };
});

// Register to shared state
__$.Ev = Ev;
