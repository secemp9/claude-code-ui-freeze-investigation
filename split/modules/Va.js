// Module: Va
// Dependencies: HH, PqA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Va = v((o6H, oJ7) => {
  var zMY = __$.HH().fromPromise,
    rJ7 = __$.PqA();
  function wMY(A) {
    return rJ7.access(A).then(() => !0).catch(() => !1);
  }
  oJ7.exports = {
    pathExists: zMY(wMY),
    pathExistsSync: rJ7.existsSync
  };
});

// Register to shared state
__$.Va = Va;
