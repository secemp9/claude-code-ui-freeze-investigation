// Module: IX7
// Dependencies: HH, fqA, SI, $BA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var IX7 = v((b8H, yX7) => {
  var wfY = __$.HH().fromPromise,
    kX7 = __$.fqA(),
    CX7 = CA("path"),
    LX7 = __$.SI(),
    RX7 = __$.$BA(),
    vX7 = wfY(async function (K) {
      let q;
      try {
        q = await kX7.readdir(K);
      } catch {
        return LX7.mkdirs(K);
      }
      return Promise.all(q.map(Y => RX7.remove(CX7.join(K, Y))));
    });
  function EX7(A) {
    let K;
    try {
      K = kX7.readdirSync(A);
    } catch {
      return LX7.mkdirsSync(A);
    }
    K.forEach(q => {
      q = CX7.join(A, q), RX7.removeSync(q);
    });
  }
  yX7.exports = {
    emptyDirSync: EX7,
    emptydirSync: EX7,
    emptyDir: vX7,
    emptydir: vX7
  };
});

// Register to shared state
__$.IX7 = IX7;
