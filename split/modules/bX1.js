// Module: bX1
// Dependencies: HH, I2, SI, va

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bX1 = v((U8H, _$7) => {
  var RfY = __$.HH().fromCallback,
    GBA = __$.I2(),
    X$7 = CA("path"),
    $$7 = __$.SI(),
    yfY = __$.va().pathExists;
  function IfY(A, K, q, Y) {
    if (typeof q === "function") Y = q, q = "utf8";
    let z = X$7.dirname(A);
    yfY(z, (w, H) => {
      if (w) return Y(w);
      if (H) return GBA.writeFile(A, K, q, Y);
      $$7.mkdirs(z, J => {
        if (J) return Y(J);
        GBA.writeFile(A, K, q, Y);
      });
    });
  }
  function SfY(A, ...K) {
    let q = X$7.dirname(A);
    if (GBA.existsSync(q)) return GBA.writeFileSync(A, ...K);
    $$7.mkdirsSync(q), GBA.writeFileSync(A, ...K);
  }
  _$7.exports = {
    outputFile: RfY(IfY),
    outputFileSync: SfY
  };
});

// Register to shared state
__$.bX1 = bX1;
