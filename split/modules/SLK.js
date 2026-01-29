// Module: SLK
// Dependencies: cA, mA, V5A, yLK, YK, e6, dVA, y4, UcA, $A
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SLK = k(() => {
  __$.cA();
  __$.mA();
  __$.V5A();
  __$.yLK();
  __$.YK();
  __$.e6();
  __$.dVA();
  __$.y4();
  __$.UcA = o(__$.$A(), 1), __$.l1z = {
    getConfig: A => {
      let q = __$.BA().existsSync(A.file_path) ? __$.d0(A.file_path) : "";
      return __$.wk1(A.file_path, q, A.content, !1);
    },
    applyChanges: (A, K) => {
      let q = K[0];
      if (q) return {
        ...A,
        content: q.new_string
      };
      return A;
    }
  };
});

// Register to shared state
__$.SLK = SLK;
