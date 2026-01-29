// Module: KBA
// Dependencies: I2, HH, TO7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var KBA = v((q8H, EO7) => {
  var NX1 = __$.I2(),
    rMY = __$.HH().fromCallback,
    vO7 = __$.TO7();
  function oMY(A, K) {
    if (NX1.rm) return NX1.rm(A, {
      recursive: !0,
      force: !0
    }, K);
    vO7(A, K);
  }
  function aMY(A) {
    if (NX1.rmSync) return NX1.rmSync(A, {
      recursive: !0,
      force: !0
    });
    vO7.sync(A);
  }
  EO7.exports = {
    remove: rMY(oMY),
    removeSync: aMY
  };
});

// Register to shared state
__$.KBA = KBA;
