// Module: $LK
// Dependencies: cA, mA, M5A, Xp6, YK, dVA, y4, gcA, $A, z1z
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $LK = k(() => {
  __$.cA();
  __$.mA();
  __$.M5A();
  __$.Xp6();
  __$.YK();
  __$.dVA();
  __$.y4();
  __$.gcA = o(__$.$A(), 1), __$.z1z = {
    getConfig: A => __$.wk1(A.file_path, A.old_string, A.new_string, A.replace_all),
    applyChanges: (A, K) => {
      let q = K[0];
      if (q) return {
        ...A,
        old_string: q.old_string,
        new_string: q.new_string,
        replace_all: q.replace_all
      };
      return A;
    }
  };
});

// Register to shared state
__$.$LK = $LK;
