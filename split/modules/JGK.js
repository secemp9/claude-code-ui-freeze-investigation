// Module: JGK
// Dependencies: qGK, dUA, YdA, G9A, $8, g2, q6, GJ, ym6, $A
//   ... and 10 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var JGK = k(() => {
  __$.qGK();
  __$.dUA();
  __$.YdA();
  __$.G9A();
  __$.$8();
  __$.g2();
  __$.q6();
  __$.GJ();
  __$.ym6 = o(__$.$A(), 1), __$.wGK = {
    name: "context",
    description: "Visualize current context usage as a colored grid",
    isEnabled: () => !__$.b7(),
    isHidden: !1,
    type: "local-jsx",
    userFacingName() {
      return this.name;
    },
    async call(A, K) {
      let {
        messages: q,
        getAppState: Y,
        options: {
          mainLoopModel: z,
          tools: w
        }
      } = K;
      __$.l7("context");
      let H = __$.kv(q),
        {
          messages: J
        } = await __$.gd(H),
        O = process.stdout.columns || 80,
        X = await Y(),
        $ = await __$.fu6(J, z, async () => X.toolPermissionContext, w, X.agentDefinitions, O, K, void 0, H),
        _ = await __$.Pe(__$.ym6.createElement(__$.KGK, {
          data: $
        }));
      return A(_), null;
    }
  }, __$.HGK = {
    type: "local",
    name: "context",
    supportsNonInteractive: !0,
    description: "Show current context usage",
    get isHidden() {
      return !__$.b7();
    },
    isEnabled() {
      return __$.b7();
    },
    userFacingName() {
      return "context";
    },
    async call(A, K) {
      let {
          messages: q,
          getAppState: Y,
          options: {
            mainLoopModel: z,
            tools: w,
            agentDefinitions: H
          }
        } = K,
        J = __$.kv(q),
        {
          messages: O
        } = await __$.gd(J),
        X = await Y(),
        $ = await __$.fu6(O, z, async () => X.toolPermissionContext, w, H, void 0, K, void 0, J);
      return {
        type: "text",
        value: __$.Fu2($)
      };
    }
  };
});

// Register to shared state
__$.JGK = JGK;
