// Module: Vf
// Dependencies: p7, axA, rH7, aH7, WJ7, jJ7, G_, RZ8, C1, iw
//   ... and 88 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Vf = k(() => {
  __$.p7();
  __$.axA();
  __$.rH7();
  __$.aH7();
  __$.WJ7();
  __$.jJ7();
  __$.G_();
  __$.RZ8();
  __$.C1();
  __$.iw();
  __$.JG();
  __$.l1();
  __$.iH();
  __$.q6();
  __$.x4();
  __$.uz();
  __$.R2();
  __$.ja();
  __$.wX1();
  __$.QW6();
  __$.Pa();
  __$.l6();
  __$.W$();
  __$.zM6();
  __$.FZ7();
  __$.r0A();
  __$.TQ();
  __$.Jz();
  __$.Au();
  __$.JW7();
  __$.h$1();
  __$.b$1();
  __$.dBA();
  __$.iM();
  __$.GD7();
  __$.UuA();
  __$.IG();
  __$.lu();
  __$.WD7();
  __$.b1();
  __$.o$1 = class o$1 extends Error {
    serverName;
    constructor(A, K) {
      super(K);
      this.name = "McpAuthError", this.serverName = A;
    }
  };
  __$.uLY = new Set(["image/jpeg", "image/png", "image/gif", "image/webp"]);
  __$.mLY = ["mcp__ide__executeCode", "mcp__ide__getDiagnostics"];
  __$.cC = __$.z6(async (A, K, q) => {
    let Y = Date.now();
    try {
      let z,
        w = __$.iT();
      if (K.type === "sse") {
        let y = new __$.gqA(A, K),
          B = await __$.i$1(A, K),
          b = {
            authProvider: y,
            fetch: __$.EM6(__$.WqA()),
            requestInit: {
              headers: {
                "User-Agent": __$.nn(),
                ...B
              }
            }
          };
        b.eventSourceInit = {
          fetch: async (F, Q) => {
            let u = {},
              d = await y.tokens();
            if (d) u.Authorization = `Bearer ${d.access_token}`;
            let r = __$.s8A();
            return fetch(F, {
              ...Q,
              ...r,
              headers: {
                "User-Agent": __$.nn(),
                ...u,
                ...Q?.headers,
                ...B,
                Accept: "text/event-stream"
              }
            });
          }
        }, z = new __$.KX1(new URL(K.url), b), __$.b6(A, "SSE transport initialized, awaiting connection");
      } else if (K.type === "sse-ide") {
        __$.b6(A, `Setting up SSE-IDE transport to ${K.url}`);
        let y = __$.s8A(),
          B = y.dispatcher ? {
            eventSourceInit: {
              fetch: async (b, F) => {
                return fetch(b, {
                  ...F,
                  ...y,
                  headers: {
                    "User-Agent": __$.nn(),
                    ...F?.headers
                  }
                });
              }
            }
          } : {};
        z = new __$.KX1(new URL(K.url), Object.keys(B).length > 0 ? B : void 0);
      } else if (K.type === "ws-ide") {
        let y = __$.C46(),
          B = {
            headers: {
              "User-Agent": __$.nn(),
              ...(K.authToken && {
                "X-Claude-Code-Ide-Authorization": K.authToken
              })
            },
            agent: __$.a8A(K.url),
            ...(y || {})
          },
          b = new __$.oxA.default(K.url, ["mcp"], Object.keys(B).length > 0 ? B : void 0);
        z = new __$.E$1(b);
      } else if (K.type === "ws") {
        __$.b6(A, `Initializing WebSocket transport to ${K.url}`);
        let y = await __$.i$1(A, K),
          B = __$.C46(),
          b = {
            headers: {
              "User-Agent": __$.nn(),
              ...(w && {
                Authorization: `Bearer ${w}`
              }),
              ...y
            },
            agent: __$.a8A(K.url),
            ...(B || {})
          },
          F = Object.fromEntries(Object.entries(b.headers).map(([u, d]) => u.toLowerCase() === "authorization" ? [u, "[REDACTED]"] : [u, d]));
        __$.b6(A, `WebSocket transport options: ${__$.UA({
          url: K.url,
          headers: F,
          hasSessionAuth: !!w
        })}`);
        let Q = new __$.oxA.default(K.url, ["mcp"], Object.keys(b).length > 0 ? b : void 0);
        z = new __$.E$1(Q);
      } else if (K.type === "http") {
        __$.b6(A, `Initializing HTTP transport to ${K.url}`), __$.b6(A, `Node version: ${process.version}, Platform: ${process.platform}`), __$.b6(A, `Environment: ${__$.UA({
          NODE_OPTIONS: process.env.NODE_OPTIONS || "not set",
          UV_THREADPOOL_SIZE: process.env.UV_THREADPOOL_SIZE || "default",
          HTTP_PROXY: process.env.HTTP_PROXY || "not set",
          HTTPS_PROXY: process.env.HTTPS_PROXY || "not set",
          NO_PROXY: process.env.NO_PROXY || "not set"
        })}`);
        let y = new __$.gqA(A, K),
          B = await __$.i$1(A, K),
          b = __$.s8A();
        __$.b6(A, `Proxy options: ${b.dispatcher ? "custom dispatcher" : "default"}`);
        let F = {
            authProvider: y,
            fetch: __$.EM6(__$.WqA()),
            requestInit: {
              ...b,
              headers: {
                "User-Agent": __$.nn(),
                ...(w && {
                  Authorization: `Bearer ${w}`
                }),
                ...B
              }
            }
          },
          Q = F.requestInit?.headers ? Object.fromEntries(Object.entries(F.requestInit.headers).map(([u, d]) => u.toLowerCase() === "authorization" ? [u, "[REDACTED]"] : [u, d])) : void 0;
        __$.b6(A, `HTTP transport options: ${__$.UA({
          url: K.url,
          headers: Q,
          hasAuthProvider: !!y,
          timeoutMs: __$.MD7
        })}`), z = new __$.qX1(new URL(K.url), F), __$.b6(A, "HTTP transport created successfully");
      } else if (K.type === "sdk") throw Error("SDK servers should be handled in print.ts");else if (K.type === "claudeai-proxy") {
        if (__$.b6(A, `Initializing claude.ai proxy transport for server ${K.id}`), !__$.LK()) throw Error("No claude.ai OAuth token found");
        let B = __$.E7(),
          b = `${B.MCP_PROXY_URL}${B.MCP_PROXY_PATH.replace("{server_id}", K.id)}`;
        __$.b6(A, `Using claude.ai proxy at ${b}`);
        let F = async (d, r) => {
            await __$.rZ();
            let c = __$.LK();
            if (!c) throw Error("No claude.ai OAuth token available");
            let YA = new Headers(r?.headers);
            return YA.set("Authorization", `Bearer ${c.accessToken}`), globalThis.fetch(d, {
              ...r,
              headers: YA
            });
          },
          Q = __$.s8A(),
          u = {
            fetch: __$.EM6(F),
            requestInit: {
              ...Q,
              headers: {
                "User-Agent": __$.nn(),
                "X-Mcp-Client-Session-Id": __$.d1()
              }
            }
          };
        z = new __$.qX1(new URL(b), u), __$.b6(A, "claude.ai proxy transport created successfully");
      } else if (K.type === "stdio" || !K.type) {
        let y = process.env.CLAUDE_CODE_SHELL_PREFIX || K.command,
          B = process.env.CLAUDE_CODE_SHELL_PREFIX ? [[K.command, ...K.args].join(" ")] : K.args;
        z = new __$.GW6({
          command: y,
          args: B,
          env: {
            ...process.env,
            ...K.env
          },
          stderr: "pipe"
        });
      } else throw Error(`Unsupported server type: ${K.type}. claude.ai MCP servers require ENABLE_CLAUDEAI_MCP_SERVERS=true.`);
      let H,
        J = "";
      if (K.type === "stdio" || !K.type) {
        let y = z;
        if (y.stderr) H = B => {
          J += B.toString();
        }, y.stderr.on("data", H);
      }
      let O = new __$.m01({
        name: "claude-code",
        version: {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.23",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-01-29T00:18:20Z"
        }.VERSION ?? "unknown"
      }, {
        capabilities: {
          roots: {},
          ...{}
        }
      });
      if (K.type === "http") __$.b6(A, "Client created, setting up request handler");
      if (O.setRequestHandler(__$.xG6, async () => {
        return __$.b6(A, "Received ListRoots request from server"), {
          roots: [{
            uri: `file://${__$.V8()}`
          }]
        };
      }), __$.b6(A, `Starting connection with timeout of ${__$.n$1()}ms`), K.type === "http") {
        __$.b6(A, `Testing basic HTTP connectivity to ${K.url}`);
        try {
          let y = new URL(K.url);
          if (__$.b6(A, `Parsed URL: host=${y.hostname}, port=${y.port || "default"}, protocol=${y.protocol}`), y.hostname === "127.0.0.1" || y.hostname === "localhost") __$.b6(A, `Using loopback address: ${y.hostname}`);
        } catch (y) {
          __$.b6(A, `Failed to parse URL: ${y}`);
        }
      }
      let X = O.connect(z),
        $ = new Promise((y, B) => {
          let b = setTimeout(() => {
            let F = Date.now() - Y;
            __$.b6(A, `Connection timeout triggered after ${F}ms (limit: ${__$.n$1()}ms)`), z.close().catch(() => {}), B(new __$.dg(`MCP server "${A}" connection timed out after ${__$.n$1()}ms`));
          }, __$.n$1());
          X.then(() => {
            clearTimeout(b);
          }, F => {
            clearTimeout(b);
          });
        });
      try {
        if (await Promise.race([X, $]), J) __$.O2(A, `Server stderr: ${J}`);
        let y = Date.now() - Y;
        __$.b6(A, `Successfully connected to ${K.type} server in ${y}ms`);
      } catch (y) {
        let B = Date.now() - Y;
        if (K.type === "sse" && y instanceof Error) {
          if (__$.b6(A, `SSE Connection failed after ${B}ms: ${__$.UA({
            url: K.url,
            error: y.message,
            errorType: y.constructor.name,
            stack: y.stack
          })}`), __$.O2(A, y), y instanceof __$.vG) return __$.n("tengu_mcp_server_needs_auth", {
            transportType: "sse",
            ...(__$.H0(K) ? {
              mcpServerBaseUrl: __$.H0(K)
            } : {})
          }), __$.b6(A, "Authentication required for SSE server"), {
            name: A,
            type: "needs-auth",
            config: K
          };
        } else if (K.type === "http" && y instanceof Error) {
          let b = y;
          if (__$.b6(A, `HTTP Connection failed after ${B}ms: ${y.message} (code: ${b.code || "none"}, errno: ${b.errno || "none"})`), __$.O2(A, y), y instanceof __$.vG) return __$.n("tengu_mcp_server_needs_auth", {
            transportType: "http",
            ...(__$.H0(K) ? {
              mcpServerBaseUrl: __$.H0(K)
            } : {})
          }), __$.b6(A, "Authentication required for HTTP server"), {
            name: A,
            type: "needs-auth",
            config: K
          };
        } else if (K.type === "claudeai-proxy" && y instanceof Error) {
          if (__$.b6(A, `claude.ai proxy connection failed after ${B}ms: ${y.message}`), __$.O2(A, y), y.code === 401) return __$.n("tengu_mcp_server_needs_auth", {
            transportType: "claudeai-proxy",
            ...(__$.H0(K) ? {
              mcpServerBaseUrl: __$.H0(K)
            } : {})
          }), __$.b6(A, "Authentication required for claude.ai proxy server"), {
            name: A,
            type: "needs-auth",
            config: K
          };
        } else if (K.type === "sse-ide" || K.type === "ws-ide") __$.n("tengu_mcp_ide_server_connection_failed", {
          connectionDurationMs: B
        });
        if (z.close().catch(() => {}), J) __$.O2(A, `Server stderr: ${J}`);
        throw y;
      }
      let _ = O.getServerCapabilities(),
        G = O.getServerVersion(),
        Z = O.getInstructions();
      if (__$.b6(A, `Connection established with capabilities: ${__$.UA({
        hasTools: !!_?.tools,
        hasPrompts: !!_?.prompts,
        hasResources: !!_?.resources,
        serverVersion: G || "unknown"
      })}`), K.type === "sse-ide" || K.type === "ws-ide") {
        let y = Date.now() - Y;
        __$.n("tengu_mcp_ide_server_connection_succeeded", {
          connectionDurationMs: y,
          serverVersion: G
        });
        try {
          __$.TD7(O);
        } catch (B) {
          __$.O2(A, `Failed to send ide_connected notification: ${B}`);
        }
      }
      let W = Date.now(),
        D = !1,
        j = O.onerror,
        M = O.onclose,
        P = 0,
        f = 3,
        N = y => {
          return y.includes("ECONNRESET") || y.includes("ETIMEDOUT") || y.includes("EPIPE") || y.includes("EHOSTUNREACH") || y.includes("ECONNREFUSED") || y.includes("Body Timeout Error") || y.includes("terminated");
        };
      O.onerror = y => {
        let B = Date.now() - W;
        D = !0;
        let b = K.type || "stdio";
        if (__$.b6(A, `${b.toUpperCase()} connection dropped after ${Math.floor(B / 1000)}s uptime`), y.message) if (y.message.includes("ECONNRESET")) __$.b6(A, "Connection reset - server may have crashed or restarted");else if (y.message.includes("ETIMEDOUT")) __$.b6(A, "Connection timeout - network issue or server unresponsive");else if (y.message.includes("ECONNREFUSED")) __$.b6(A, "Connection refused - server may be down");else if (y.message.includes("EPIPE")) __$.b6(A, "Broken pipe - server closed connection unexpectedly");else if (y.message.includes("EHOSTUNREACH")) __$.b6(A, "Host unreachable - network connectivity issue");else if (y.message.includes("ESRCH")) __$.b6(A, "Process not found - stdio server process terminated");else if (y.message.includes("spawn")) __$.b6(A, "Failed to spawn process - check command and permissions");else __$.b6(A, `Connection error: ${y.message}`);
        if (b === "sse" || b === "http" || b === "claudeai-proxy") if (N(y.message)) {
          if (P++, __$.b6(A, `Terminal connection error ${P}/${f}`), P >= f) __$.b6(A, "Max consecutive errors reached, triggering reconnection via onclose"), P = 0, O.onclose?.();
        } else P = 0;
        if (j) j(y);
      }, O.onclose = () => {
        let y = Date.now() - W,
          B = K.type ?? "unknown";
        __$.b6(A, `${B.toUpperCase()} connection closed after ${Math.floor(y / 1000)}s (${D ? "with errors" : "cleanly"})`);
        let b = __$.kM6(A, K);
        if (__$.cC.cache.delete(b), __$.b6(A, "Cleared connection cache for reconnection"), M) M();
      };
      let T = async () => {
          if (H && (K.type === "stdio" || !K.type)) z.stderr?.off("data", H);
          if (K.type === "stdio") try {
            let B = z.pid;
            if (B) {
              __$.b6(A, "Sending SIGINT to MCP server process");
              try {
                process.kill(B, "SIGINT");
              } catch (b) {
                __$.b6(A, `Error sending SIGINT: ${b}`);
                return;
              }
              await new Promise(async b => {
                let F = !1,
                  Q = setInterval(() => {
                    try {
                      process.kill(B, 0);
                    } catch {
                      if (!F) F = !0, clearInterval(Q), clearTimeout(u), __$.b6(A, "MCP server process exited cleanly"), b();
                    }
                  }, 50),
                  u = setTimeout(() => {
                    if (!F) F = !0, clearInterval(Q), __$.b6(A, "Cleanup timeout reached, stopping process monitoring"), b();
                  }, 600);
                try {
                  if (await new Promise(d => setTimeout(d, 100)), !F) {
                    try {
                      process.kill(B, 0), __$.b6(A, "SIGINT failed, sending SIGTERM to MCP server process");
                      try {
                        process.kill(B, "SIGTERM");
                      } catch (d) {
                        __$.b6(A, `Error sending SIGTERM: ${d}`), F = !0, clearInterval(Q), clearTimeout(u), b();
                        return;
                      }
                    } catch {
                      F = !0, clearInterval(Q), clearTimeout(u), b();
                      return;
                    }
                    if (await new Promise(d => setTimeout(d, 400)), !F) try {
                      process.kill(B, 0), __$.b6(A, "SIGTERM failed, sending SIGKILL to MCP server process");
                      try {
                        process.kill(B, "SIGKILL");
                      } catch (d) {
                        __$.b6(A, `Error sending SIGKILL: ${d}`);
                      }
                    } catch {
                      F = !0, clearInterval(Q), clearTimeout(u), b();
                    }
                  }
                  if (!F) F = !0, clearInterval(Q), clearTimeout(u), b();
                } catch {
                  if (!F) F = !0, clearInterval(Q), clearTimeout(u), b();
                }
              });
            }
          } catch (y) {
            __$.b6(A, `Error terminating process: ${y}`);
          }
          try {
            await O.close();
          } catch (y) {
            __$.b6(A, `Error closing client: ${y}`);
          }
        },
        C = __$.kK(T),
        R = async () => {
          C?.(), await T();
        },
        x = Date.now() - Y;
      return __$.n("tengu_mcp_server_connection_succeeded", {
        connectionDurationMs: x,
        transportType: K.type ?? "stdio",
        totalServers: q?.totalServers,
        stdioCount: q?.stdioCount,
        sseCount: q?.sseCount,
        httpCount: q?.httpCount,
        sseIdeCount: q?.sseIdeCount,
        wsIdeCount: q?.wsIdeCount,
        ...(__$.H0(K) ? {
          mcpServerBaseUrl: __$.H0(K)
        } : {})
      }), {
        name: A,
        client: O,
        type: "connected",
        capabilities: _ ?? {},
        serverInfo: G,
        instructions: Z,
        config: K,
        cleanup: R
      };
    } catch (z) {
      let w = Date.now() - Y;
      return __$.n("tengu_mcp_server_connection_failed", {
        connectionDurationMs: w,
        totalServers: q?.totalServers || 1,
        stdioCount: q?.stdioCount || (K.type === "stdio" ? 1 : 0),
        sseCount: q?.sseCount || (K.type === "sse" ? 1 : 0),
        httpCount: q?.httpCount || (K.type === "http" ? 1 : 0),
        sseIdeCount: q?.sseIdeCount || (K.type === "sse-ide" ? 1 : 0),
        wsIdeCount: q?.wsIdeCount || (K.type === "ws-ide" ? 1 : 0),
        transportType: K.type ?? "stdio",
        ...(__$.H0(K) ? {
          mcpServerBaseUrl: __$.H0(K)
        } : {})
      }), __$.b6(A, `Connection failed after ${w}ms: ${z instanceof Error ? z.message : String(z)}`), __$.O2(A, `Connection failed: ${z instanceof Error ? z.message : String(z)}`), {
        name: A,
        type: "failed",
        config: K,
        error: z instanceof Error ? z.message : String(z)
      };
    }
  }, __$.kM6);
  __$.QI = __$.z6(async A => {
    if (A.type !== "connected") return [];
    try {
      if (!A.capabilities?.tools) return [];
      let K = await A.client.request({
          method: "tools/list"
        }, __$.HuA),
        q = __$.Ma(K.tools),
        Y = A.config.type === "sdk" && __$.P1(process.env.CLAUDE_AGENT_SDK_MCP_NO_PREFIX);
      return q.map(z => ({
        ...__$.HW7,
        name: Y ? z.name : `mcp__${__$.w3(A.name)}__${__$.w3(z.name)}`,
        originalMcpToolName: z.name,
        isMcp: !0,
        async description() {
          return z.description ?? "";
        },
        async prompt() {
          return z.description ?? "";
        },
        isConcurrencySafe() {
          return z.annotations?.readOnlyHint ?? !1;
        },
        isReadOnly() {
          return z.annotations?.readOnlyHint ?? !1;
        },
        isDestructive() {
          return z.annotations?.destructiveHint ?? !1;
        },
        isOpenWorld() {
          return z.annotations?.openWorldHint ?? !1;
        },
        inputJSONSchema: z.inputSchema,
        async checkPermissions() {
          return {
            behavior: "passthrough",
            message: "MCPTool requires permission.",
            suggestions: [{
              type: "addRules",
              rules: [{
                toolName: Y ? z.name : `mcp__${__$.w3(A.name)}__${__$.w3(z.name)}`,
                ruleContent: void 0
              }],
              behavior: "allow",
              destination: "localSettings"
            }]
          };
        },
        async call(w, H, J, O, X) {
          let $ = __$.ULY(O),
            _ = $ ? {
              "claudecode/toolUseId": $
            } : {};
          if (X && $) X({
            toolUseID: $,
            data: {
              type: "mcp_progress",
              status: "started",
              serverName: A.name,
              toolName: z.name
            }
          });
          let G = Date.now();
          try {
            let Z = await __$.oZA(A),
              W = await __$.fD7({
                client: Z,
                tool: z.name,
                args: w,
                meta: _,
                signal: H.abortController.signal
              });
            if (X && $) X({
              toolUseID: $,
              data: {
                type: "mcp_progress",
                status: "completed",
                serverName: A.name,
                toolName: z.name,
                elapsedTimeMs: Date.now() - G
              }
            });
            return {
              data: W.content,
              ...(W._meta || W.structuredContent ? {
                mcpMeta: {
                  ...(W._meta && {
                    _meta: W._meta
                  }),
                  ...(W.structuredContent && {
                    structuredContent: W.structuredContent
                  })
                }
              } : {})
            };
          } catch (Z) {
            if (X && $) X({
              toolUseID: $,
              data: {
                type: "mcp_progress",
                status: "failed",
                serverName: A.name,
                toolName: z.name,
                elapsedTimeMs: Date.now() - G
              }
            });
            throw Z;
          }
        },
        userFacingName() {
          let w = z.annotations?.title || z.name;
          return `${A.name} - ${w} (MCP)`;
        },
        ...(__$.jZA(A.name) ? __$.ZD7(z.name) : {})
      })).filter(__$.gLY);
    } catch (K) {
      return __$.O2(A.name, `Failed to fetch tools: ${K instanceof Error ? K.message : String(K)}`), [];
    }
  }), __$.lBA = __$.z6(async A => {
    if (A.type !== "connected") return [];
    try {
      if (!A.capabilities?.resources) return [];
      let K = await A.client.request({
        method: "resources/list"
      }, __$.zqA);
      if (!K.resources) return [];
      return K.resources.map(q => ({
        ...q,
        server: A.name
      }));
    } catch (K) {
      return __$.O2(A.name, `Failed to fetch resources: ${K instanceof Error ? K.message : String(K)}`), [];
    }
  }), __$.iBA = __$.z6(async A => {
    if (A.type !== "connected") return [];
    try {
      if (!A.capabilities?.prompts) return [];
      let K = await A.client.request({
        method: "prompts/list"
      }, __$.zuA);
      if (!K.prompts) return [];
      return __$.Ma(K.prompts).map(Y => {
        let z = Object.values(Y.arguments ?? {}).map(w => w.name);
        return {
          type: "prompt",
          name: "mcp__" + __$.w3(A.name) + "__" + Y.name,
          description: Y.description ?? "",
          hasUserSpecifiedDescription: !!Y.description,
          contentLength: 0,
          isEnabled: () => !0,
          isHidden: !1,
          isMcp: !0,
          progressMessage: "running",
          userFacingName() {
            return `${A.name}:${Y.name} (MCP)`;
          },
          argNames: z,
          source: "mcp",
          async getPromptForCommand(w) {
            let H = w.split(" ");
            try {
              let J = await __$.oZA(A),
                O = await J.client.getPrompt({
                  name: Y.name,
                  arguments: __$.LZ8(z, H)
                });
              return (await Promise.all(O.messages.map($ => __$.VD7($.content, J.name)))).flat();
            } catch (J) {
              throw __$.O2(A.name, `Error running command '${Y.name}': ${J instanceof Error ? J.message : String(J)}`), J;
            }
          }
        };
      });
    } catch (K) {
      return __$.O2(A.name, `Failed to fetch commands: ${K instanceof Error ? K.message : String(K)}`), [];
    }
  });
  __$.s$1 = __$.z6(async A => {
    return new Promise(K => {
      let q = 0,
        Y = 0;
      if (q = Object.keys(A).length, q === 0) {
        K({
          clients: [],
          tools: [],
          commands: []
        });
        return;
      }
      let z = [],
        w = [],
        H = [];
      __$.a$1(J => {
        if (z.push(J.client), w.push(...J.tools), H.push(...J.commands), Y++, Y >= q) {
          let O = H.reduce((X, $) => {
            let _ = $.name.length + ($.description ?? "").length + ($.argumentHint ?? "").length;
            return X + _;
          }, 0);
          __$.n("tengu_mcp_tools_commands_loaded", {
            tools_count: w.length,
            commands_count: H.length,
            commands_metadata_length: O
          }), K({
            clients: z,
            tools: w,
            commands: H
          });
        }
      }, A).catch(J => {
        __$.O2("prefetchAllMcpResources", `Failed to get MCP resources: ${J instanceof Error ? J.message : String(J)}`), K({
          clients: [],
          tools: [],
          commands: []
        });
      });
    });
  });
});

// Register to shared state
__$.Vf = Vf;
