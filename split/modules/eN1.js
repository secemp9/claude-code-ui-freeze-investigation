// Module: eN1
// Dependencies: cA, g4, u5, mA, Xz, e6, Oz, FB6, Eq, LH
//   ... and 14 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eN1 = k(() => {
  __$.cA();
  __$.g4();
  __$.u5();
  __$.mA();
  __$.Xz();
  __$.e6();
  __$.Oz();
  __$.FB6();
  __$.Eq();
  __$.LH();
  __$.g2();
  __$.We = o(__$.$A(), 1), __$.Y$K = o(__$.$A(), 1);
  __$.uh2 = {
    type: "local-jsx",
    name: "add-dir",
    description: "Add a new working directory",
    argumentHint: "<path>",
    isEnabled: () => !0,
    isHidden: !1,
    async call(A, K, q) {
      __$.l7("multi-directory");
      let Y = q.trim(),
        z = await K.getAppState(),
        w = async (J, O = !1) => {
          let $ = {
              type: "addDirectories",
              directories: [J],
              destination: O ? "localSettings" : "session"
            },
            _ = await K.getAppState(),
            G = __$.nY(_.toolPermissionContext, $);
          K.setAppState(D => ({
            ...D,
            toolPermissionContext: G
          }));
          let Z;
          if (O) try {
            __$.Lb($), Z = `Added ${__$.O1.bold(J)} as a working directory and saved to local settings`;
          } catch (D) {
            Z = `Added ${__$.O1.bold(J)} as a working directory. Failed to save to local settings: ${D instanceof Error ? D.message : "Unknown error"}`;
          } else Z = `Added ${__$.O1.bold(J)} as a working directory for this session`;
          let W = `${Z} ${__$.O1.dim("· /permissions to manage")}`;
          A(W);
        };
      if (!Y) return __$.We.default.createElement(__$.QpA, {
        permissionContext: z.toolPermissionContext,
        onAddDirectory: w,
        onCancel: () => {
          A("Did not add a working directory.");
        }
      });
      let H = __$.upA(Y, z.toolPermissionContext);
      if (H.resultType !== "success") {
        let J = __$.BpA(H);
        return __$.We.default.createElement(__$.xh2, {
          message: J,
          args: q,
          onDone: () => A(J)
        });
      }
      return __$.We.default.createElement(__$.QpA, {
        directoryPath: H.absolutePath,
        permissionContext: z.toolPermissionContext,
        onAddDirectory: w,
        onCancel: () => {
          A(`Did not add ${__$.O1.bold(H.absolutePath)} as a working directory.`);
        }
      });
    },
    userFacingName() {
      return "add-dir";
    }
  }, __$.z$K = __$.uh2;
});

// Register to shared state
__$.eN1 = eN1;
