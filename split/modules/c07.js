// Module: c07
// Dependencies: fqA, Q07

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var c07 = v((JVY, jD6) => {
  var U07 = __$.fqA(),
    {
      checkPath: p07
    } = __$.Q07(),
    d07 = A => {
      let K = {
        mode: 511
      };
      if (typeof A === "number") return A;
      return {
        ...K,
        ...A
      }.mode;
    };
  JVY.makeDir = async (A, K) => {
    return p07(A), U07.mkdir(A, {
      mode: d07(K),
      recursive: !0
    });
  };
  JVY.makeDirSync = (A, K) => {
    return p07(A), U07.mkdirSync(A, {
      mode: d07(K),
      recursive: !0
    });
  };
});

// Register to shared state
__$.c07 = c07;
