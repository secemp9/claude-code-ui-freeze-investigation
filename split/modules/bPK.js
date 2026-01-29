// Module: bPK
// Dependencies: cA, g4, u5, mA, i2, iv1, Eq, UK, OS, uK
//   ... and 25 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bPK = k(() => {
  __$.cA();
  __$.g4();
  __$.u5();
  __$.mA();
  __$.i2();
  __$.iv1();
  __$.Eq();
  __$.UK();
  __$.OS();
  __$.uK();
  __$.np();
  __$.LF6();
  __$.g2();
  __$.Jw();
  __$.q6();
  __$.rv1();
  __$.C1();
  __$.r5 = o(__$.$A(), 1);
  __$.kc2 = {
    type: "local-jsx",
    name: "resume",
    description: "Resume a conversation",
    get argumentHint() {
      return __$.rd() ? "[session-id or title]" : "[session-id]";
    },
    isEnabled: () => !0,
    isHidden: !1,
    async call(A, K, q) {
      __$.l7("resume");
      let Y = async (X, $, _) => {
          try {
            await K.resume?.(X, $, _), A(void 0, {
              display: "skip"
            });
          } catch (G) {
            __$.KA(G), A(`Failed to resume: ${G.message}`);
          }
        },
        z = q?.trim();
      if (!z) return __$.r5.createElement(__$.Ec2, {
        key: Date.now(),
        onDone: A,
        onResume: Y
      });
      let w = await __$.ch(__$.V8()),
        H = await __$.Ge(w);
      if (H.length === 0) return __$.r5.createElement(__$.IF6, {
        message: "No conversations found to resume.",
        args: z,
        onDone: () => A("No conversations found to resume.")
      });
      let J = __$.zv(z);
      if (J) {
        let X = H.filter($ => __$.ZH($) === J).sort(($, _) => _.modified.getTime() - $.modified.getTime());
        if (X.length > 0) {
          let $ = X[0],
            _ = __$.NL($) ? await __$.sS($) : $;
          return Y(J, _, "slash_command_session_id"), null;
        }
      }
      if (__$.rd()) {
        let X = await __$.od(z, {
          exact: !0
        });
        if (X.length === 1) {
          let $ = X[0],
            _ = __$.ZH($);
          if (_) {
            let G = __$.NL($) ? await __$.sS($) : $;
            return Y(_, G, "slash_command_title"), null;
          }
        }
        if (X.length > 1) {
          let $ = __$.SPK({
            resultType: "multipleMatches",
            arg: z,
            count: X.length
          });
          return __$.r5.createElement(__$.IF6, {
            message: $,
            args: z,
            onDone: () => A($)
          });
        }
      }
      let O = __$.SPK({
        resultType: "sessionNotFound",
        arg: z
      });
      return __$.r5.createElement(__$.IF6, {
        message: O,
        args: z,
        onDone: () => A(O)
      });
    },
    userFacingName() {
      return "resume";
    }
  }, __$.hPK = __$.kc2;
});

// Register to shared state
__$.bPK = bPK;
