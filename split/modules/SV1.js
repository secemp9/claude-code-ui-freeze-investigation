// Module: SV1
// Dependencies: z7, X0, ID, q6, S2, SP1, zmA, k5K, l1, Z1
//   ... and 42 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SV1 = k(() => {
  __$.z7();
  __$.X0();
  __$.ID();
  __$.q6();
  __$.S2();
  __$.SP1();
  __$.zmA();
  __$.k5K();
  __$.l1();
  __$.Z1();
  __$.q6();
  __$.b1();
  __$.wz();
  __$.$I6();
  __$.B3A();
  __$.OS();
  __$.eB();
  __$.$8();
  __$.IP1();
  __$.FV2 = __$.U.object({
    skill: __$.U.string().describe('The skill name. E.g., "commit", "review-pr", or "pdf"'),
    args: __$.U.string().optional().describe("Optional arguments for the skill")
  }), __$.QV2 = __$.U.object({
    success: __$.U.boolean().describe("Whether the skill is valid"),
    commandName: __$.U.string().describe("The name of the skill"),
    allowedTools: __$.U.array(__$.U.string()).optional().describe("Tools allowed by this skill"),
    model: __$.U.string().optional().describe("Model override if specified"),
    status: __$.U.literal("inline").optional().describe("Execution status")
  }), __$.UV2 = __$.U.object({
    success: __$.U.boolean().describe("Whether the skill completed successfully"),
    commandName: __$.U.string().describe("The name of the skill"),
    status: __$.U.literal("forked").describe("Execution status"),
    agentId: __$.U.string().describe("The ID of the sub-agent that executed the skill"),
    result: __$.U.string().describe("The result from the forked skill execution")
  }), __$.pV2 = __$.U.union([__$.QV2, __$.UV2]), __$.nt = {
    name: __$.FG,
    maxResultSizeChars: 1e5,
    inputSchema: __$.FV2,
    outputSchema: __$.pV2,
    description: async ({
      skill: A
    }) => `Execute skill: ${A}`,
    prompt: async () => __$.oM6(__$.sW()),
    userFacingName: () => __$.FG,
    isConcurrencySafe: () => !1,
    isEnabled: () => !0,
    isReadOnly: () => !1,
    async validateInput({
      skill: A
    }, K) {
      let q = A.trim();
      if (!q) return {
        result: !1,
        message: `Invalid skill format: ${A}`,
        errorCode: 1
      };
      let Y = q.startsWith("/");
      if (Y) __$.n("tengu_skill_tool_slash_prefix", {});
      let z = Y ? q.substring(1) : q,
        w = await __$.tf(__$.sW());
      if (!__$.Cd(z, w)) return {
        result: !1,
        message: `Unknown skill: ${z}`,
        errorCode: 2
      };
      let H = __$.xS(z, w);
      if (!H) return {
        result: !1,
        message: `Could not load skill: ${z}`,
        errorCode: 3
      };
      if (H.disableModelInvocation) return {
        result: !1,
        message: `Skill ${z} cannot be used with ${__$.FG} tool due to disable-model-invocation`,
        errorCode: 4
      };
      if (H.type !== "prompt") return {
        result: !1,
        message: `Skill ${z} is not a prompt-based skill`,
        errorCode: 5
      };
      return {
        result: !0
      };
    },
    async checkPermissions({
      skill: A,
      args: K
    }, q) {
      let Y = A.trim(),
        z = Y.startsWith("/") ? Y.substring(1) : Y,
        H = (await q.getAppState()).toolPermissionContext,
        J = await __$.tf(__$.sW()),
        O = __$.xS(z, J),
        X = Z => {
          let W = Z.startsWith("/") ? Z.substring(1) : Z;
          if (W === z) return !0;
          if (W.endsWith(":*")) {
            let D = W.slice(0, -2);
            return z.startsWith(D);
          }
          return !1;
        },
        $ = __$.QS(H, __$.nt, "deny");
      for (let [Z, W] of $.entries()) if (X(Z)) return {
        behavior: "deny",
        message: "Skill execution blocked by permission rules",
        decisionReason: {
          type: "rule",
          rule: W
        }
      };
      let _ = __$.QS(H, __$.nt, "allow");
      for (let [Z, W] of _.entries()) if (X(Z)) return {
        behavior: "allow",
        updatedInput: {
          skill: A,
          args: K
        },
        decisionReason: {
          type: "rule",
          rule: W
        }
      };
      if (O?.type === "prompt" && __$.cV2(O)) return {
        behavior: "allow",
        updatedInput: {
          skill: A,
          args: K
        },
        decisionReason: void 0
      };
      let G = [{
        type: "addRules",
        rules: [{
          toolName: __$.FG,
          ruleContent: z
        }],
        behavior: "allow",
        destination: "localSettings"
      }, {
        type: "addRules",
        rules: [{
          toolName: __$.FG,
          ruleContent: `${z}:*`
        }],
        behavior: "allow",
        destination: "localSettings"
      }];
      return {
        behavior: "ask",
        message: `Execute skill: ${z}`,
        decisionReason: void 0,
        suggestions: G,
        updatedInput: {
          skill: A,
          args: K
        },
        metadata: {
          command: O
        }
      };
    },
    async call({
      skill: A,
      args: K
    }, q, Y, z, w) {
      let H = A.trim(),
        J = H.startsWith("/") ? H.substring(1) : H,
        O = await __$.tf(__$.sW()),
        X = __$.xS(J, O);
      if (__$.RP1(J), X?.type === "prompt" && X.context === "fork") return __$.gV2(X, J, K, q, Y, z, w);
      let $ = await __$.u7K(J, K || "", O, q);
      if (!$.shouldQuery) throw Error("Command processing failed");
      let _ = $.allowedTools || [],
        G = $.model,
        Z = $.maxThinkingTokens,
        W = __$.mt().has(J),
        D = X?.type === "prompt" && __$.lV2(X);
      __$.n("tengu_skill_tool_invocation", {
        command_name: W || D ? J : "custom",
        ...!1
      });
      let M = __$.L5K(z, __$.FG),
        P = __$.C5K($.messages.filter(T => {
          if (T.type === "progress") return !1;
          if (T.type === "user" && "message" in T) {
            let C = T.message.content;
            if (typeof C === "string" && C.includes(`<${__$.tW}>`)) return !1;
          }
          return !0;
        }), M);
      __$.h(`SkillTool returning ${P.length} newMessages for skill ${J}`), P.forEach((T, C) => {
        if (T.type === "user" && "message" in T) {
          let R = typeof T.message.content === "string" ? T.message.content : __$.UA(T.message.content);
          __$.h(`  newMessage ${C + 1}: ${R.substring(0, 150)}...`);
        }
      });
      let f = P.filter(T => T.type === "user" && "message" in T).map(T => {
          let C = T.message.content;
          return typeof C === "string" ? C : __$.UA(C);
        }).join(`

`),
        N = X?.type === "prompt" && X.source ? `${X.source}:${J}` : J;
      if (__$.UnA(J, N, f), X?.type === "prompt" && X.hooks) {
        let T = __$.d1();
        __$.EP1(q.setAppState, T, X.hooks, J, X.skillRoot);
      }
      return {
        data: {
          success: !0,
          commandName: J,
          allowedTools: _.length > 0 ? _ : void 0,
          model: G
        },
        newMessages: P,
        contextModifier(T) {
          let C = T;
          if (_.length > 0) {
            let R = C.getAppState;
            C = {
              ...C,
              async getAppState() {
                let x = await R();
                return {
                  ...x,
                  toolPermissionContext: {
                    ...x.toolPermissionContext,
                    alwaysAllowRules: {
                      ...x.toolPermissionContext.alwaysAllowRules,
                      command: [...new Set([...(x.toolPermissionContext.alwaysAllowRules.command || []), ..._])]
                    }
                  }
                };
              }
            };
          }
          if (G) C = {
            ...C,
            options: {
              ...C.options,
              mainLoopModel: G
            }
          };
          if (Z !== void 0) C = {
            ...C,
            options: {
              ...C.options,
              maxThinkingTokens: Z
            }
          };
          return C;
        }
      };
    },
    mapToolResultToToolResultBlockParam(A, K) {
      if ("status" in A && A.status === "forked") return {
        type: "tool_result",
        tool_use_id: K,
        content: `Skill "${A.commandName}" completed (forked execution).

Result:
${A.result}`
      };
      return {
        type: "tool_result",
        tool_use_id: K,
        content: `Launching skill: ${A.commandName}`
      };
    },
    renderToolResultMessage: __$.N5K,
    renderToolUseMessage: __$.T5K,
    renderToolUseProgressMessage: __$.IV1,
    renderToolUseRejectedMessage: __$.v5K,
    renderToolUseErrorMessage: __$.E5K
  }, __$.dV2 = new Set(["type", "progressMessage", "contentLength", "argNames", "model", "source", "pluginInfo", "disableNonInteractive", "skillRoot", "context", "agent", "getPromptForCommand", "frontmatterKeys", "name", "description", "hasUserSpecifiedDescription", "isEnabled", "isHidden", "aliases", "isMcp", "argumentHint", "whenToUse", "version", "disableModelInvocation", "userInvocable", "loadedFrom", "immediate", "userFacingName"]);
});

// Register to shared state
__$.SV1 = SV1;
