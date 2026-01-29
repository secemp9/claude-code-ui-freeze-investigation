// Module: QUK
// Dependencies: cA, mA, Ah, Z1, l1, I8, Vv1, z3, k9, $A
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QUK = k(() => {
  __$.cA();
  __$.mA();
  __$.mA();
  __$.Ah();
  __$.Z1();
  __$.l1();
  __$.I8();
  __$.Vv1();
  __$.z3();
  __$.k9 = o(__$.$A(), 1), __$.ElA = o(__$.$A(), 1);
  __$.FUK = {
    type: "local-jsx",
    name: "install",
    description: "Install Claude Code native build",
    argumentHint: "[options]",
    async call(A, K, q) {
      let Y = q.includes("--force"),
        w = q.filter(J => !J.startsWith("--"))[0],
        {
          unmount: H
        } = await __$.M9(__$.k9.default.createElement(__$.J3z, {
          onDone: (J, O) => {
            H(), A(J, O);
          },
          force: Y,
          target: w
        }));
    }
  };
});

// Register to shared state
__$.QUK = QUK;
