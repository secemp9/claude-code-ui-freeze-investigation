// Module: yI
// Dependencies: HH, iJ7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yI = v((r6H, nJ7) => {
  var qMY = __$.HH().fromPromise,
    {
      makeDir: YMY,
      makeDirSync: zD6
    } = __$.iJ7(),
    wD6 = qMY(YMY);
  nJ7.exports = {
    mkdirs: wD6,
    mkdirsSync: zD6,
    mkdirp: wD6,
    mkdirpSync: zD6,
    ensureDir: wD6,
    ensureDirSync: zD6
  };
});

// Register to shared state
__$.yI = yI;
