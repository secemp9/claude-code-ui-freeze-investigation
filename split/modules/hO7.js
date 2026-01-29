// Module: hO7
// Dependencies: HH, PqA, yI, KBA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hO7 = v((Y8H, SO7) => {
  var sMY = __$.HH().fromPromise,
    LO7 = __$.PqA(),
    RO7 = CA("path"),
    yO7 = __$.yI(),
    IO7 = __$.KBA(),
    kO7 = sMY(async function (K) {
      let q;
      try {
        q = await LO7.readdir(K);
      } catch {
        return yO7.mkdirs(K);
      }
      return Promise.all(q.map(Y => IO7.remove(RO7.join(K, Y))));
    });
  function CO7(A) {
    let K;
    try {
      K = LO7.readdirSync(A);
    } catch {
      return yO7.mkdirsSync(A);
    }
    K.forEach(q => {
      q = RO7.join(A, q), IO7.removeSync(q);
    });
  }
  SO7.exports = {
    emptyDirSync: CO7,
    emptydirSync: CO7,
    emptyDir: kO7,
    emptydir: kO7
  };
});

// Register to shared state
__$.hO7 = hO7;
