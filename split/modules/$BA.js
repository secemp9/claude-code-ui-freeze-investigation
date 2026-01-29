// Module: $BA
// Dependencies: I2, HH, fX7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $BA = v((h8H, TX7) => {
  var SX1 = __$.I2(),
    qfY = __$.HH().fromCallback,
    NX7 = __$.fX7();
  function YfY(A, K) {
    if (SX1.rm) return SX1.rm(A, {
      recursive: !0,
      force: !0
    }, K);
    NX7(A, K);
  }
  function zfY(A) {
    if (SX1.rmSync) return SX1.rmSync(A, {
      recursive: !0,
      force: !0
    });
    NX7.sync(A);
  }
  TX7.exports = {
    remove: qfY(YfY),
    removeSync: zfY
  };
});

// Register to shared state
__$.$BA = $BA;
