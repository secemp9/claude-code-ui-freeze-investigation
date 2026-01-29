// Module: NfK
// Dependencies: UK, q6, b1, Xw, g2, l1, Gi2, l7, d1, Xi2
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var NfK = k(() => {
  __$.UK();
  __$.q6();
  __$.b1();
  __$.Xw();
  __$.g2();
  __$.l1();
  __$.Gi2 = {
    type: "local-jsx",
    name: "fork",
    description: "Create a fork of the current conversation at this point",
    argumentHint: "[name]",
    isEnabled: () => !0,
    isHidden: !1,
    async call(A, K, q) {
      __$.l7("fork");
      let Y = q?.trim() || void 0,
        z = __$.d1();
      try {
        let {
            sessionId: w,
            title: H,
            forkPath: J,
            serializedMessages: O
          } = await __$.Xi2(Y),
          X = new Date(),
          $ = O.find(P => P.type === "user"),
          _ = (() => {
            let P = $?.message?.content;
            if (!P) return "Forked conversation";
            if (typeof P === "string") return P.slice(0, 100);
            return P.find(N => N.type === "text")?.text?.slice(0, 100) ?? "Forked conversation";
          })(),
          Z = await __$.$i2(H ?? _);
        await __$.kPA(w, Z, J), __$.n("tengu_conversation_forked", {
          message_count: O.length,
          has_custom_title: !!H
        });
        let W = {
            date: X.toISOString().split("T")[0],
            messages: O,
            fullPath: J,
            value: X.getTime(),
            created: X,
            modified: X,
            firstPrompt: _,
            messageCount: O.length,
            isSidechain: !1,
            sessionId: w,
            customTitle: Z
          },
          D = H ? ` "${H}"` : "",
          j = `
To resume the original: claude -r ${z}`,
          M = `Forked conversation${D}. You are now in the fork.${j}`;
        if (K.resume) await K.resume(w, W, "fork"), A(M, {
          display: "system"
        });else A(`Forked conversation${D}. Resume with: /resume ${w}`);
        return null;
      } catch (w) {
        let H = w instanceof Error ? w.message : "Unknown error occurred";
        return A(`Failed to fork conversation: ${H}`), null;
      }
    },
    userFacingName() {
      return "fork";
    }
  }, __$.ffK = __$.Gi2;
});

// Register to shared state
__$.NfK = NfK;
