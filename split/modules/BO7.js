// Module: BO7
// Dependencies: HH, I2, yI

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BO7 = v((z8H, uO7) => {
  var tMY = __$.HH().fromCallback,
    bO7 = CA("path"),
    fa = __$.I2(),
    xO7 = __$.yI();
  function eMY(A, K) {
    function q() {
      fa.writeFile(A, "", Y => {
        if (Y) return K(Y);
        K();
      });
    }
    fa.stat(A, (Y, z) => {
      if (!Y && z.isFile()) return K();
      let w = bO7.dirname(A);
      fa.stat(w, (H, J) => {
        if (H) {
          if (H.code === "ENOENT") return xO7.mkdirs(w, O => {
            if (O) return K(O);
            q();
          });
          return K(H);
        }
        if (J.isDirectory()) q();else fa.readdir(w, O => {
          if (O) return K(O);
        });
      });
    });
  }
  function APY(A) {
    let K;
    try {
      K = fa.statSync(A);
    } catch {}
    if (K && K.isFile()) return;
    let q = bO7.dirname(A);
    try {
      if (!fa.statSync(q).isDirectory()) fa.readdirSync(q);
    } catch (Y) {
      if (Y && Y.code === "ENOENT") xO7.mkdirsSync(q);else throw Y;
    }
    fa.writeFileSync(A, "");
  }
  uO7.exports = {
    createFile: tMY(eMY),
    createFileSync: APY
  };
});

// Register to shared state
__$.BO7 = BO7;
