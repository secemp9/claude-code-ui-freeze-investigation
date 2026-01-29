// Module: SI
// Dependencies: HH, c07

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SI = v((E8H, l07) => {
  var $VY = __$.HH().fromPromise,
    {
      makeDir: _VY,
      makeDirSync: MD6
    } = __$.c07(),
    PD6 = $VY(_VY);
  l07.exports = {
    mkdirs: PD6,
    mkdirsSync: MD6,
    mkdirp: PD6,
    mkdirpSync: MD6,
    ensureDir: PD6,
    ensureDirSync: MD6
  };
});

// Register to shared state
__$.SI = SI;
