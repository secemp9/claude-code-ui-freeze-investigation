// Module: va
// Dependencies: HH, fqA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var va = v((k8H, n07) => {
  var GVY = __$.HH().fromPromise,
    i07 = __$.fqA();
  function ZVY(A) {
    return i07.access(A).then(() => !0).catch(() => !1);
  }
  n07.exports = {
    pathExists: GVY(ZVY),
    pathExistsSync: i07.existsSync
  };
});

// Register to shared state
__$.va = va;
