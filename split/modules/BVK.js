// Module: BVK
// Dependencies: cA, mA, NG, ym, iH, YdA, LH, q6, EX, $A
//   ... and 11 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BVK = k(() => {
  __$.cA();
  __$.mA();
  __$.NG();
  __$.ym();
  __$.iH();
  __$.YdA();
  __$.LH();
  __$.q6();
  __$.EX = o(__$.$A(), 1);
  __$.ul2 = {
    type: "local-jsx",
    name: "plan",
    description: "Enable plan mode or view the current session plan",
    argumentHint: "[open]",
    isEnabled: () => !0,
    isHidden: !1,
    async call(A, K, q) {
      let {
          getAppState: Y,
          setAppState: z
        } = K,
        H = (await Y()).toolPermissionContext.mode;
      if (H !== "plan") return __$.Qh(H, "plan"), z(W => ({
        ...W,
        toolPermissionContext: __$.nY(W.toolPermissionContext, {
          type: "setMode",
          mode: "plan",
          destination: "session"
        })
      })), A("Enabled plan mode"), null;
      let J = __$.fG(),
        O = __$.uM();
      if (!J) return A("Already in plan mode. No plan written yet."), null;
      if (q.trim().split(/\s+/)[0] === "open") try {
        return await __$.Rm(O), A(`Opened plan in editor: ${O}`), null;
      } catch (W) {
        return A(`Failed to open plan in editor: ${W}`), null;
      }
      let $ = __$.Kh(),
        _ = $ ? __$.O0($) : void 0,
        Z = await __$.Pe(__$.EX.createElement(__$.xl2, {
          planContent: J,
          planPath: O,
          editorName: _
        }));
      return A(Z), null;
    },
    userFacingName() {
      return "plan";
    }
  }, __$.uVK = __$.ul2;
});

// Register to shared state
__$.BVK = BVK;
