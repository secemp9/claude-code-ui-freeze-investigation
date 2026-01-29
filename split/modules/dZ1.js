// Module: dZ1
// Dependencies: F1A, z7, n_, S2, $8, xy7, aZ, K7, iw, l6
//   ... and 97 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dZ1 = k(() => {
  __$.F1A();
  __$.z7();
  __$.n_();
  __$.S2();
  __$.$8();
  __$.xy7();
  __$.aZ();
  __$.K7();
  __$.iw();
  __$.l6();
  __$.t9();
  __$.l1();
  __$.B3A();
  __$.oZ();
  __$.$8();
  __$.vP1();
  __$.XWA();
  __$.rM();
  __$.kC();
  __$.E5A();
  __$.cO();
  __$.MI6();
  __$.OS();
  __$.UK();
  __$.fI6();
  __$.Z1();
  __$.of();
  __$.M91();
  __$.W2();
  __$.sS6();
  __$.NT();
  __$.f_();
  __$.Ah6 = o(__$.$A(), 1), __$.EV1 = __$.P1(process.env.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS), __$.RV2 = __$.U.object({
    description: __$.U.string().describe("A short (3-5 word) description of the task"),
    prompt: __$.U.string().describe("The task for the agent to perform"),
    subagent_type: __$.U.string().describe("The type of specialized agent to use for this task"),
    model: __$.U.enum(["sonnet", "opus", "haiku"]).optional().describe("Optional model to use for this agent. If not specified, inherits from parent. Prefer haiku for quick, straightforward tasks to minimize cost and latency."),
    resume: __$.U.string().optional().describe("Optional agent ID to resume from. If provided, the agent will continue from the previous execution transcript."),
    run_in_background: __$.U.boolean().optional().describe(`Set to true to run this agent in the background. The tool result will include an output_file path - use ${__$.eq} tool or ${__$.G7} tail to check on output.`),
    max_turns: __$.U.number().int().positive().optional().describe("Maximum number of agentic turns (API round-trips) before stopping. Used internally for warmup.")
  }), __$.yV2 = __$.U.object({
    name: __$.U.string().optional().describe("Name for the spawned agent"),
    team_name: __$.U.string().optional().describe("Team name for spawning. Uses current team context if omitted."),
    mode: __$.UR8.optional().describe('Permission mode for spawned teammate (e.g., "plan" to require plan approval).')
  }), __$.f5K = __$.RV2.merge(__$.yV2), __$.XI6 = __$.EV1 ? __$.f5K.omit({
    run_in_background: !0
  }) : __$.f5K, __$.IV2 = __$.U.object({
    agentId: __$.U.string(),
    content: __$.U.array(__$.U.object({
      type: __$.U.literal("text"),
      text: __$.U.string()
    })),
    totalToolUseCount: __$.U.number(),
    totalDurationMs: __$.U.number(),
    totalTokens: __$.U.number(),
    usage: __$.U.object({
      input_tokens: __$.U.number(),
      output_tokens: __$.U.number(),
      cache_creation_input_tokens: __$.U.number().nullable(),
      cache_read_input_tokens: __$.U.number().nullable(),
      server_tool_use: __$.U.object({
        web_search_requests: __$.U.number(),
        web_fetch_requests: __$.U.number()
      }).nullable(),
      service_tier: __$.U.enum(["standard", "priority", "batch"]).nullable(),
      cache_creation: __$.U.object({
        ephemeral_1h_input_tokens: __$.U.number(),
        ephemeral_5m_input_tokens: __$.U.number()
      }).nullable()
    })
  }), __$.SV2 = __$.IV2.extend({
    status: __$.U.literal("completed"),
    prompt: __$.U.string()
  }), __$.hV2 = __$.U.object({
    status: __$.U.literal("async_launched"),
    agentId: __$.U.string().describe("The ID of the async agent"),
    description: __$.U.string().describe("The description of the task"),
    prompt: __$.U.string().describe("The prompt for the agent"),
    outputFile: __$.U.string().describe("Path to the output file for checking agent progress")
  }), __$.bV2 = __$.U.union([__$.SV2, __$.hV2, __$.Qy7]);
  __$.ZDA = {
    async prompt({
      agents: A,
      tools: K,
      getToolPermissionContext: q
    }) {
      let Y = await q(),
        z = [];
      for (let J of K) if (J.name?.startsWith("mcp__")) {
        let X = J.name.split("__")[1];
        if (X && !z.includes(X)) z.push(X);
      }
      let w = __$.p57(A, z),
        H = __$.eS6(w, Y, __$.Nq);
      return await __$.by7(H);
    },
    name: __$.Nq,
    maxResultSizeChars: 1e5,
    async description() {
      return "Launch a new task";
    },
    inputSchema: __$.XI6,
    outputSchema: __$.bV2,
    async call({
      prompt: A,
      subagent_type: K,
      description: q,
      model: Y,
      resume: z,
      run_in_background: w,
      max_turns: H,
      name: J,
      team_name: O,
      mode: X
    }, $, _, G, Z) {
      let W = Date.now(),
        D = await $.getAppState(),
        j = D.toolPermissionContext.mode,
        M = __$.uV2({
          team_name: O
        }, D);
      if (__$.hZ() && M) {
        if (J) throw Error("In-process teammates cannot spawn other teammates. Only the team leader can spawn teammates.");
        if (w === !0) throw Error("In-process teammates cannot spawn background agents. Use run_in_background=false for synchronous subagents.");
      }
      if (M && J) {
        let r = await __$.V5K({
          name: J,
          prompt: A,
          team_name: M,
          use_splitpane: !0,
          plan_mode_required: X === "plan",
          model: Y
        }, $);
        return {
          data: {
            status: "teammate_spawned",
            prompt: A,
            ...r.data
          }
        };
      }
      let P = $.options.agentDefinitions.activeAgents,
        f = __$.eS6(P, D.toolPermissionContext, __$.Nq),
        N = f.find(r => r.agentType === K);
      if (!N) {
        if (P.find(c => c.agentType === K)) {
          let c = __$.Kh6(D.toolPermissionContext, __$.Nq, K);
          throw Error(`Agent type '${K}' has been denied by permission rule '${__$.Nq}(${K})' from ${c?.source ?? "settings"}.`);
        }
        throw Error(`Agent type '${K}' not found. Available agents: ${f.map(c => c.agentType).join(", ")}`);
      }
      if (N.requiredMcpServers?.length) {
        let r = [];
        for (let c of D.mcp.tools) if (c.name?.startsWith("mcp__")) {
          let e = c.name.split("__")[1];
          if (e && !r.includes(e)) r.push(e);
        }
        if (!__$.u_6(N, r)) {
          let c = N.requiredMcpServers.filter(YA => !r.some(e => e.toLowerCase().includes(YA.toLowerCase())));
          throw Error(`Agent '${K}' requires MCP servers matching: ${c.join(", ")}. MCP servers with tools: ${r.length > 0 ? r.join(", ") : "none"}. Use /mcp to configure and authenticate the required MCP servers.`);
        }
      }
      if (N.color) __$.EGA(K, N.color);
      let T = __$.Bq1(N.model, $.options.mainLoopModel, Y, j);
      __$.n("tengu_agent_tool_selected", {
        agent_type: N.agentType,
        model: T,
        source: N.source,
        color: N.color,
        is_built_in_agent: __$.UD(N)
      });
      let C;
      if (z) {
        let r = await __$.yV1(__$.oD(z));
        if (!r) throw Error(`No transcript found for agent ID: ${z}`);
        C = __$.RV1(__$.LV1(r));
      }
      let R = N?.forkContext ? $.messages : void 0,
        x;
      try {
        let r = Array.from(D.toolPermissionContext.additionalWorkingDirectories.keys()),
          c = N.getSystemPrompt({
            toolUseContext: $
          });
        x = await __$.BQA([c], T, r);
      } catch (r) {
        __$.h(`Failed to get system prompt for agent ${N.agentType}: ${r instanceof Error ? r.message : String(r)}`);
      }
      let y = N?.forkContext ? __$.Uy7(A, G) : [__$.t1({
          content: A
        })],
        B = {
          prompt: A,
          resolvedAgentModel: T,
          isBuiltInAgent: __$.UD(N),
          startTime: W
        },
        b = D.toolPermissionContext.mode === "coordinator",
        F = (w === !0 || b) && !__$.EV1,
        Q = {
          ...D.toolPermissionContext,
          mode: N.permissionMode ?? "acceptEdits"
        },
        u = __$.kV1(Q, D.mcp.tools),
        d = {
          agentDefinition: N,
          promptMessages: C ? [...C, ...y] : y,
          toolUseContext: $,
          canUseTool: _,
          forkContextMessages: R,
          isAsync: F,
          ...(b ? {
            canShowPermissionPrompts: !0
          } : {}),
          querySource: $.options.querySource ?? __$.F7K(N.agentType, __$.UD(N)),
          model: Y,
          maxTurns: H,
          override: x ? {
            systemPrompt: x
          } : void 0,
          availableTools: u
        };
      if (F) {
        let r = z || __$.HL(),
          c = __$.Uj7({
            agentId: r,
            description: q,
            prompt: A,
            selectedAgent: N,
            setAppState: $.setAppState,
            parentAbortController: $.abortController
          }),
          YA = {
            agentId: r,
            parentSessionId: __$.tn(),
            agentType: "subagent"
          };
        return __$.q$A(YA, async () => {
          try {
            let e = [],
              qA = __$.JmA(),
              HA = __$.XmA($.options.tools);
            for await (let JA of __$.DL({
              ...d,
              override: {
                ...d.override,
                agentId: __$.oD(c.agentId),
                abortController: c.abortController
              }
            })) e.push(JA), __$.OWA(qA, JA, HA, $.options.tools), __$.zP6(c.agentId, __$.OmA(qA), $.setAppState);
            let _A = __$.tS6(e, c.agentId, B),
              a = _A.content.filter(JA => JA.type === "text").map(JA => JA.text).join(`
`);
            __$.wP6(_A, $.setAppState), __$.rqA(c.agentId, q, "completed", void 0, $.setAppState, a);
          } catch (e) {
            if (e instanceof __$.y2) {
              __$.nqA(c.agentId, $.setAppState), __$.rqA(c.agentId, q, "killed", void 0, $.setAppState);
              return;
            }
            let qA = e instanceof Error ? e.message : String(e);
            __$.HP6(c.agentId, qA, $.setAppState), __$.rqA(c.agentId, q, "failed", qA, $.setAppState);
          }
        }), {
          data: {
            isAsync: !0,
            status: "async_launched",
            agentId: c.agentId,
            description: q,
            prompt: A,
            outputFile: __$.Ew(c.agentId)
          }
        };
      } else {
        let r = z ? __$.oD(z) : __$.HL(),
          c = {
            agentId: r,
            parentSessionId: __$.tn(),
            agentType: "subagent"
          };
        return __$.q$A(c, async () => {
          // Helper to yield to event loop while checking for abort
          const yieldWithAbortCheck = async () => {
            await new Promise(resolve => setTimeout(resolve, 0));
            if ($.abortController?.signal?.aborted) throw new __$.y2();
          };
          let YA = [],
            e = [],
            qA = Date.now();
          if (y[0] && y[0].type === "user") {
            let hA = __$.n2(y),
              yA = hA.find(AA => AA.type === "user");
            if (yA && yA.type === "user" && Z) Z({
              toolUseID: `agent_${G.message.id}`,
              data: {
                message: yA,
                normalizedMessages: hA,
                type: "agent_progress",
                prompt: A,
                resume: z,
                agentId: r
              }
            });
          }
          let HA, _A;
          if (!__$.EV1) {
            let hA = __$.pj7({
              agentId: r,
              description: q,
              prompt: A,
              selectedAgent: N,
              setAppState: $.setAppState
            });
            HA = hA.taskId, _A = hA.backgroundSignal;
          }
          let a = !1,
            JA = __$.DL({
              ...d,
              override: {
                ...d.override,
                agentId: r
              }
            })[Symbol.asyncIterator]();
          try {
            while (!0) {
              let hA = Date.now() - qA;
              if (!__$.EV1 && !a && hA >= __$.LV2 && $.setToolJSX) a = !0, $.setToolJSX({
                jsx: __$.Ah6.createElement(__$.xP1, null),
                shouldHidePromptInput: !1,
                shouldContinueAnimation: !0,
                showSpinner: !0
              });
              let yA = JA.next(),
                AA = _A ? await Promise.race([yA.then(t => ({
                  type: "message",
                  result: t
                })), _A.then(() => ({
                  type: "background"
                }))]) : await yA.then(t => ({
                  type: "message",
                  result: t
                }));
              if (AA.type === "background" && HA) {
                let XA = (await $.getAppState()).tasks[HA];
                if (__$.na(XA) && XA.isBackgrounded) {
                  let VA = HA;
                  return __$.q$A(c, async () => {
                    // Helper for background task - uses XA.abortController
                    const bgYieldWithAbortCheck = async () => {
                      await new Promise(resolve => setTimeout(resolve, 0));
                      if (XA.abortController?.signal?.aborted) throw new __$.y2();
                    };
                    try {
                      let vA = __$.JmA(),
                        RA = __$.XmA($.options.tools);
                      // Yield between processing accumulated messages (with abort check)
                      let bgYieldCounter = 0;
                      for (let SA of YA) {
                        __$.OWA(vA, SA, RA, $.options.tools);
                        // Batched yield every 16 iterations with abort check
                        if (++bgYieldCounter % 16 === 0) await bgYieldWithAbortCheck();
                      }
                      for await (let SA of __$.DL({
                        ...d,
                        isAsync: !0,
                        override: {
                          ...d.override,
                          agentId: __$.oD(VA),
                          abortController: XA.abortController
                        }
                      })) YA.push(SA), __$.OWA(vA, SA, RA, $.options.tools), __$.zP6(VA, __$.OmA(vA), $.setAppState);
                      let fA = __$.tS6(YA, VA, B),
                        LA = fA.content.filter(SA => SA.type === "text").map(SA => SA.text).join(`
`);
                      __$.wP6(fA, $.setAppState), __$.rqA(VA, q, "completed", void 0, $.setAppState, LA);
                    } catch (vA) {
                      if (vA instanceof __$.y2) {
                        __$.nqA(VA, $.setAppState), __$.rqA(VA, q, "killed", void 0, $.setAppState);
                        return;
                      }
                      let RA = vA instanceof Error ? vA.message : String(vA);
                      __$.HP6(VA, RA, $.setAppState), __$.rqA(VA, q, "failed", RA, $.setAppState);
                    }
                  }), {
                    data: {
                      isAsync: !0,
                      status: "async_launched",
                      agentId: VA,
                      description: q,
                      prompt: A,
                      outputFile: __$.Ew(VA)
                    }
                  };
                }
              }
              if (AA.type !== "message") {
                // Yield even when skipping non-message types (with abort check)
                await yieldWithAbortCheck();
                continue;
              }
              let {
                result: wA
              } = AA;
              if (wA.done) break;
              let GA = wA.value;
              if (YA.push(GA), GA.type !== "assistant" && GA.type !== "user") {
                // Yield even when skipping non-assistant/user messages (with abort check)
                await yieldWithAbortCheck();
                continue;
              }
              // Yield BEFORE expensive sync operations to let React render (with abort check)
              await yieldWithAbortCheck();

              if (GA.type === "assistant") {
                let t = __$.lJ1(GA);  // Can be expensive (JSON.stringify)
                if (t > 0) $.setResponseLength(XA => XA + t);
              }

              // Yield again before message normalization (with abort check)
              await yieldWithAbortCheck();

              let OA = __$.n2([GA]);  // Can be expensive (object spread/copy)
              e.push(...OA);
              let yieldCounter = 0;
              for (let t of OA) for (let XA of t.message.content) {
                if (XA.type !== "tool_use" && XA.type !== "tool_result") continue;
                if (Z) Z({
                  toolUseID: `agent_${G.message.id}`,
                  data: {
                    message: t,
                    // Create shallow copy to prevent race condition - the array `e` is mutated
                    // in subsequent iterations, but React may render during yields. Copying
                    // ensures each progress callback receives a consistent snapshot.
                    normalizedMessages: [...e],
                    type: "agent_progress",
                    prompt: A,
                    resume: z,
                    agentId: r
                  }
                });
                // Yield to event loop every 16 iterations - allows React to render without excessive latency
                // Batching reduces 100 tool_use blocks from ~100-400ms to ~6-24ms latency (with abort check)
                if (++yieldCounter % 16 === 0) await yieldWithAbortCheck();
              }
            }
            // Yield after EVERY message iteration (not just those with tool_use)
            // This ensures UI stays responsive even for text-only messages (with abort check)
            await yieldWithAbortCheck();
          } finally {
            if ($.setToolJSX) $.setToolJSX(null);
            if (HA) __$.cj7(HA, $.setAppState);
          }
          let jA = __$.KD(YA.filter(hA => hA.type !== "system" && hA.type !== "progress"));
          if (jA && __$.CV1(jA)) throw new __$.y2();
          let MA = __$.tS6(YA, r, B);
          return {
            data: {
              status: "completed",
              prompt: A,
              ...MA
            }
          };
        });
      }
    },
    isReadOnly() {
      return !0;
    },
    isConcurrencySafe() {
      return !0;
    },
    isEnabled() {
      return !0;
    },
    userFacingName: __$.JI6,
    userFacingNameBackgroundColor: __$.OI6,
    getActivityDescription(A) {
      return A?.description ?? "Running task";
    },
    async checkPermissions(A, K) {
      let q = await K.getAppState();
      return {
        behavior: "allow",
        updatedInput: A
      };
    },
    mapToolResultToToolResultBlockParam(A, K) {
      let q = A;
      if (typeof q === "object" && q !== null && "status" in q && q.status === "teammate_spawned") {
        let Y = q;
        return {
          tool_use_id: K,
          type: "tool_result",
          content: [{
            type: "text",
            text: `Spawned successfully.
agent_id: ${Y.teammate_id}
name: ${Y.name}
team_name: ${Y.team_name}
The agent is now running and will receive instructions via mailbox.`
          }]
        };
      }
      if (A.status === "async_launched") return {
        tool_use_id: K,
        type: "tool_result",
        content: [{
          type: "text",
          text: `Async agent launched successfully.
agentId: ${A.agentId} (internal ID - do not mention to user. Use to resume later if needed.)
output_file: ${A.outputFile}
The agent is working in the background. You will be notified when it completes—no need to check. Continue with other tasks.
To check progress before completion (optional), use ${__$.eq} or ${__$.G7} tail on the output file.`
        }]
      };
      if (A.status === "completed") return {
        tool_use_id: K,
        type: "tool_result",
        content: [...A.content, {
          type: "text",
          text: `agentId: ${A.agentId} (for resuming to continue this agent's work if needed)`
        }]
      };
      throw Error(`Unexpected agent tool result status: ${A.status}`);
    },
    renderToolResultMessage: __$.T7K,
    renderToolUseMessage: __$.v7K,
    renderToolUseTag: __$.E7K,
    renderToolUseProgressMessage: __$.zMA,
    renderToolUseRejectedMessage: __$.k7K,
    renderToolUseErrorMessage: __$.C7K,
    renderGroupedToolUse: __$.L7K
  };
});

// Register to shared state
__$.dZ1 = dZ1;
