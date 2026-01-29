// Module: xG
// Dependencies: z7, _P, C1, Jz, Au, y4, l6, Ev, _WA, rM
//   ... and 89 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xG = k(() => {
  __$.z7();
  __$._P();
  __$.C1();
  __$.Jz();
  __$.Au();
  __$.y4();
  __$.l6();
  __$.Ev();
  __$._WA();
  __$.rM();
  __$.CN1();
  __$.mQA();
  __$.zN6();
  __$.SH();
  __$.hD();
  __$.jPA();
  __$.QW6();
  __$.Pa();
  __$.n3A();
  __$.Uf1();
  __$.B7();
  __$.l1();
  __$.q6();
  __$.g2();
  __$.Vf();
  __$.wX1();
  __$.I8();
  __$.zM6();
  __$.iw();
  __$.iOK();
  __$.CN1();
  __$.fI6();
  __$.ld();
  __$.IG();
  __$.b1();
  __$.YK();
  __$.e6();
  __$.AP();
  __$.FWA();
  __$.Oz();
  __$.pu6 = o(__$.$A(), 1), __$.wI2 = new Set(["find", "grep", "rg", "ag", "ack", "locate", "which", "whereis"]), __$.HI2 = new Set(["cat", "head", "tail", "less", "more", "wc", "stat", "file", "strings", "ls", "tree", "du"]), __$.JI2 = new Set(["echo", "true", "false", ":"]);
  __$.XI2 = ["sleep"], __$.uN1 = __$.P1(process.env.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS), __$.rOK = __$.U.strictObject({
    command: __$.U.string().describe("The command to execute"),
    timeout: __$.U.number().optional().describe(`Optional timeout in milliseconds (max ${__$.kN1()})`),
    description: __$.U.string().optional().describe(`Clear, concise description of what this command does in active voice. Never use words like "complex" or "risk" in the description - just describe what it does.

For simple commands (git, npm, standard CLI tools), keep it brief (5-10 words):
- ls → "List files in current directory"
- git status → "Show working tree status"
- npm install → "Install package dependencies"

For commands that are harder to parse at a glance (piped commands, obscure flags, etc.), add enough context to clarify what it does:
- find . -name "*.tmp" -exec rm {} \\; → "Find and delete all .tmp files recursively"
- git reset --hard origin/main → "Discard all local changes and match remote main"
- curl -s url | jq '.data[]' → "Fetch JSON from URL and extract data array elements"`),
    run_in_background: __$.U.boolean().optional().describe("Set to true to run this command in the background. Use TaskOutput to read the output later."),
    dangerouslyDisableSandbox: __$.U.boolean().optional().describe("Set this to true to dangerously override sandbox mode and run commands without sandboxing."),
    _simulatedSedEdit: __$.U.object({
      filePath: __$.U.string(),
      newContent: __$.U.string()
    }).optional().describe("Internal: pre-computed sed edit result from preview")
  }), __$.oOK = __$.uN1 ? __$.rOK.omit({
    run_in_background: !0
  }) : __$.rOK, __$.$I2 = ["npm", "yarn", "pnpm", "node", "python", "python3", "go", "cargo", "make", "docker", "terraform", "webpack", "vite", "jest", "pytest", "curl", "wget", "build", "test", "serve", "watch", "dev"];
  __$._I2 = __$.U.object({
    stdout: __$.U.string().describe("The standard output of the command"),
    stderr: __$.U.string().describe("The standard error output of the command"),
    rawOutputPath: __$.U.string().optional().describe("Path to raw output file for large MCP tool outputs"),
    interrupted: __$.U.boolean().describe("Whether the command was interrupted"),
    isImage: __$.U.boolean().optional().describe("Flag to indicate if stdout contains image data"),
    backgroundTaskId: __$.U.string().optional().describe("ID of the background task if command is running in background"),
    backgroundedByUser: __$.U.boolean().optional().describe("True if the user manually backgrounded the command with Ctrl+B"),
    dangerouslyDisableSandbox: __$.U.boolean().optional().describe("Flag to indicate if sandbox mode was overridden"),
    returnCodeInterpretation: __$.U.string().optional().describe("Semantic interpretation for non-error exit codes with special meaning"),
    structuredContent: __$.U.array(__$.U.any()).optional().describe("Structured content blocks from mcp-cli commands")
  });
  __$.o7 = {
    name: __$.G7,
    maxResultSizeChars: 30000,
    strict: !0,
    async description({
      description: A
    }) {
      return A || "Run shell command";
    },
    async prompt() {
      return __$.WOK();
    },
    isConcurrencySafe(A) {
      return this.isReadOnly(A);
    },
    isReadOnly(A) {
      let K = __$.nf1(A.command);
      return __$.Qf1(A, K).behavior === "allow";
    },
    isSearchOrReadCommand(A) {
      let K = __$.oOK.safeParse(A);
      if (!K.success) return {
        isSearch: !1,
        isRead: !1
      };
      return __$.OI2(K.data.command);
    },
    inputSchema: __$.oOK,
    outputSchema: __$._I2,
    userFacingName(A) {
      if (!A) return "Bash";
      if (A.command) {
        let K = __$.JMA(A.command);
        if (K) return __$.MZ1({
          file_path: K.filePath,
          old_string: "x"
        });
      }
      return __$.vMA(A) && __$.P1(process.env.CLAUDE_CODE_BASH_SANDBOX_SHOW_INDICATOR) ? "SandboxedBash" : "Bash";
    },
    getToolUseSummary(A) {
      if (!A?.command) return null;
      let {
        command: K,
        description: q
      } = A;
      if (q) return q;
      return __$.a9(K, __$.CI);
    },
    getActivityDescription(A) {
      if (!A?.command) return "Running command";
      return `Running ${A.description ?? __$.a9(A.command, __$.CI)}`;
    },
    isEnabled() {
      return !0;
    },
    async checkPermissions(A, K) {
      return await __$.VS6(A, K);
    },
    renderToolUseMessage: __$.p7K,
    renderToolUseRejectedMessage: __$.d7K,
    renderToolUseProgressMessage: __$.c7K,
    renderToolUseQueuedMessage: __$.l7K,
    renderToolResultMessage: __$.i7K,
    mapToolResultToToolResultBlockParam({
      interrupted: A,
      stdout: K,
      stderr: q,
      isImage: Y,
      backgroundTaskId: z,
      backgroundedByUser: w,
      structuredContent: H
    }, J) {
      if (H && H.length > 0) return {
        tool_use_id: J,
        type: "tool_result",
        content: H
      };
      if (Y) {
        let _ = K.trim().match(/^data:([^;]+);base64,(.+)$/);
        if (_) {
          let G = _[1],
            Z = _[2];
          return {
            tool_use_id: J,
            type: "tool_result",
            content: [{
              type: "image",
              source: {
                type: "base64",
                media_type: G || "image/jpeg",
                data: Z || ""
              }
            }]
          };
        }
      }
      let O = K;
      if (K) O = K.replace(/^(\s*\n)+/, ""), O = O.trimEnd();
      let X = q.trim();
      if (A) {
        if (q) X += __$.NpA;
        X += "<error>Command was aborted before completion</error>";
      }
      let $ = z ? `Command ${w ? "was manually backgrounded by user" : "running in background"} with ID: ${z}. Output is being written to: ${__$.Ew(z)}` : "";
      return {
        tool_use_id: J,
        type: "tool_result",
        content: [O, X, $].filter(Boolean).join(`
`),
        is_error: A
      };
    },
    async call(A, K, q, Y, z) {
      if (A._simulatedSedEdit) return await __$.DI2(A._simulatedSedEdit, K, Y);
      let {
          abortController: w,
          readFileState: H,
          getAppState: J,
          setAppState: O,
          setToolJSX: X
        } = K,
        $ = new __$.GWA(),
        _ = new __$.GWA(),
        G,
        Z = 0,
        W = !1,
        D,
        M = !!K.agentId;
      try {
        let r = __$.jI2({
            input: A,
            abortController: w,
            setAppState: O,
            setToolJSX: X,
            preventCwdChanges: M
          }),
          c;
        do if (c = await r.next(), !c.done && z) {
          let e = c.value;
          z({
            toolUseID: `bash-progress-${Z++}`,
            data: {
              type: "bash_progress",
              output: e.output,
              fullOutput: e.fullOutput,
              elapsedTimeSeconds: e.elapsedTimeSeconds,
              totalLines: e.totalLines,
              timeoutMs: e.timeoutMs
            }
          });
        } while (!c.done);
        if (D = c.value, __$.GI2(A.command, D.code), $.append((D.stdout || "").trimEnd() + __$.NpA), G = __$.lOK(A.command, D.code, D.stdout || "", D.stderr || ""), D.stderr && D.stderr.includes(".git/index.lock': File exists")) __$.n("tengu_git_index_lock_error", {});
        if (G.isError) {
          if (_.append(D.stderr.trimEnd() + __$.NpA), D.code !== 0) _.append(`Exit code ${D.code}`);
        } else if (__$.r3A(A.command) !== null) _.append(D.stderr.trimEnd() + __$.NpA);else $.append(D.stderr.trimEnd() + __$.NpA);
        if (!M) {
          let e = await J();
          if (__$.SN1(e.toolPermissionContext)) {
            let qA = _.toString();
            _.clear(), _.append(__$.IN1(qA));
          }
        }
        let YA = __$.S8.annotateStderrWithSandboxFailures(A.command, D.stderr || "");
        if (G.isError) throw new __$.bR(D.stdout, YA, D.code, D.interrupted);
        W = D.interrupted;
      } finally {
        if (X) X(null);
      }
      let P = $.toString(),
        f = _.toString();
      if (__$.G4("tengu_bash_haiku_prefetch", !0)) {
        let r = __$.e7();
        __$.yOK(A.command, P, r.signal, K.options.isNonInteractiveSession).then(async c => {
          for (let YA of c) {
            let e = __$.KI2(YA) ? __$.qI2(YA) : __$.YI2(__$.x1(), YA);
            try {
              if (!(await __$.d9.validateInput({
                file_path: e
              }, K)).result) {
                H.delete(e);
                continue;
              }
              await __$.d9.call({
                file_path: e
              }, K);
            } catch (qA) {
              H.delete(e), __$.KA(qA);
            }
          }
          __$.n("tengu_bash_tool_haiku_file_paths_read", {
            filePathsExtracted: c.length,
            readFileStateSize: H.size,
            readFileStateValuesCharLength: __$.py(H).reduce((YA, e) => {
              let qA = H.get(e);
              return YA + (qA?.content.length || 0);
            }, 0)
          });
        }).catch(c => {
          if (c instanceof Error && c.message.includes("Request was aborted")) return;
          __$.KA(c);
        });
      }
      let N = A.command.split(" ")[0];
      __$.n("tengu_bash_tool_command_executed", {
        command_type: N,
        stdout_length: P.length,
        stderr_length: f.length,
        exit_code: D.code,
        interrupted: W
      });
      let T = __$.mZ7(A.command);
      if (T) __$.n("tengu_code_indexing_tool_used", {
        tool: T,
        source: "cli",
        success: D.code === 0
      });
      let C = __$.uu6(P),
        R = __$.uu6(f),
        x = __$.Bu6(C),
        y = void 0,
        B = C,
        b = R,
        F = void 0,
        Q = __$.r3A(A.command);
      if (Q !== null) {
        let r = await __$.MI2(P, A.command, Q);
        if (r !== null) B = r.stdout, F = r.structuredContent, y = r.rawOutputPath;
      }
      let u = B;
      if (x) {
        let r = B.trim().match(/^data:([^;]+);base64,(.+)$/);
        if (r && r[1] && r[2]) {
          let c = r[1],
            YA = r[2],
            e = Buffer.from(YA, "base64"),
            qA = await __$.P7A(e, void 0, c);
          u = `data:${qA.mediaType};base64,${qA.base64}`;
        }
      }
      return {
        data: {
          stdout: u,
          stderr: b,
          rawOutputPath: y,
          interrupted: W,
          isImage: x,
          returnCodeInterpretation: G?.message,
          backgroundTaskId: D.backgroundTaskId,
          backgroundedByUser: D.backgroundedByUser,
          structuredContent: F,
          dangerouslyDisableSandbox: "dangerouslyDisableSandbox" in A ? A.dangerouslyDisableSandbox : void 0
        }
      };
    },
    renderToolUseErrorMessage: __$.n7K
  };
});

// Register to shared state
__$.xG = xG;
