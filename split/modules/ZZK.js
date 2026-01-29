// Module: ZZK
// Dependencies: cA, mA, q9, XZK, iH, l1, g2, t3, oPA, y4
//   ... and 20 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZZK = k(() => {
  __$.cA();
  __$.mA();
  __$.q9();
  __$.XZK();
  __$.iH();
  __$.l1();
  __$.g2();
  __$.t3();
  __$.oPA();
  __$.y4();
  __$.CK();
  __$.u5();
  __$.C_ = o(__$.$A(), 1), __$.Q9A = o(__$.$A(), 1);
  __$.Hm2 = {
    type: "local-jsx",
    name: "ide",
    description: "Manage IDE integrations and show status",
    isEnabled: () => !0,
    isHidden: !1,
    argumentHint: "[open]",
    async call(A, K, q) {
      __$.n("tengu_ext_ide_command", {}), __$.l7("ide-integration");
      let {
          options: {
            dynamicMcpConfig: Y
          },
          onChangeDynamicMcpConfig: z
        } = K,
        w = await __$.aBA(!0);
      if (w.length === 0 && K.onInstallIDEExtension && !__$.M$()) {
        let $ = await __$.mM6(),
          _ = G => {
            if (K.onInstallIDEExtension) if (K.onInstallIDEExtension(G), __$.UI(G)) A(`Installed plugin to ${__$.O1.bold(__$.O0(G))}
Please ${__$.O1.bold("restart your IDE")} completely for it to take effect`);else A(`Installed extension to ${__$.O1.bold(__$.O0(G))}`);
          };
        if ($.length > 1) return __$.C_.default.createElement(__$.zm2, {
          runningIDEs: $,
          onSelectIDE: _,
          onDone: () => {
            A("No IDE selected.", {
              display: "system"
            });
          }
        });else if ($.length === 1) {
          let G = $[0];
          return __$.C_.default.createElement(() => {
            let W = __$.s(1),
              D;
            if (W[0] === Symbol.for("react.memo_cache_sentinel")) D = [], W[0] = D;else D = W[0];
            return __$.Q9A.useEffect(__$.Jm2, D), null;
          }, null);
        }
      }
      let H = w.filter($ => $.isValid),
        J = w.filter($ => !$.isValid),
        O = await __$.Ym2(H, Y);
      return __$.C_.default.createElement(__$.Am2, {
        availableIDEs: H,
        unavailableIDEs: J,
        selectedIDE: O,
        onClose: () => A("IDE selection cancelled", {
          display: "system"
        }),
        onSelect: async $ => {
          try {
            if (!z) {
              A("Error connecting to IDE.");
              return;
            }
            let _ = {
              ...(Y || {})
            };
            if (O) delete _.ide;
            if (!$) A(O ? `Disconnected from ${O.name}.` : "No IDE selected.");else {
              let G = $.url;
              _.ide = {
                type: G.startsWith("ws:") ? "ws-ide" : "sse-ide",
                url: G,
                ideName: $.name,
                authToken: $.authToken,
                ideRunningInWindows: $.ideRunningInWindows,
                scope: "dynamic"
              }, A(`Connected to ${$.name}.`);
            }
            z(_);
          } catch (_) {
            A("Error connecting to IDE.");
          }
        }
      });
    },
    userFacingName() {
      return "ide";
    }
  }, __$.GZK = __$.Hm2;
});

// Register to shared state
__$.ZZK = ZZK;
