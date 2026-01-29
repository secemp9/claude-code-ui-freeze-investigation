// Module: xX7
// Dependencies: HH, I2, SI

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xX7 = v((x8H, bX7) => {
  var HfY = __$.HH().fromCallback,
    SX7 = CA("path"),
    Ea = __$.I2(),
    hX7 = __$.SI();
  function JfY(A, K) {
    function q() {
      Ea.writeFile(A, "", Y => {
        if (Y) return K(Y);
        K();
      });
    }
    Ea.stat(A, (Y, z) => {
      if (!Y && z.isFile()) return K();
      let w = SX7.dirname(A);
      Ea.stat(w, (H, J) => {
        if (H) {
          if (H.code === "ENOENT") return hX7.mkdirs(w, O => {
            if (O) return K(O);
            q();
          });
          return K(H);
        }
        if (J.isDirectory()) q();else Ea.readdir(w, O => {
          if (O) return K(O);
        });
      });
    });
  }
  function OfY(A) {
    let K;
    try {
      K = Ea.statSync(A);
    } catch {}
    if (K && K.isFile()) return;
    let q = SX7.dirname(A);
    try {
      if (!Ea.statSync(q).isDirectory()) Ea.readdirSync(q);
    } catch (Y) {
      if (Y && Y.code === "ENOENT") hX7.mkdirsSync(q);else throw Y;
    }
    Ea.writeFileSync(A, "");
  }
  bX7.exports = {
    createFile: HfY(JfY),
    createFileSync: OfY
  };
});

// Register to shared state
__$.xX7 = xX7;
