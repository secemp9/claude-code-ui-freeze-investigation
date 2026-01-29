// Module: EX1
// Dependencies: HH, I2, yI, Va

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var EX1 = v((Z8H, M07) => {
  var yPY = __$.HH().fromCallback,
    YBA = __$.I2(),
    D07 = CA("path"),
    j07 = __$.yI(),
    IPY = __$.Va().pathExists;
  function SPY(A, K, q, Y) {
    if (typeof q === "function") Y = q, q = "utf8";
    let z = D07.dirname(A);
    IPY(z, (w, H) => {
      if (w) return Y(w);
      if (H) return YBA.writeFile(A, K, q, Y);
      j07.mkdirs(z, J => {
        if (J) return Y(J);
        YBA.writeFile(A, K, q, Y);
      });
    });
  }
  function hPY(A, ...K) {
    let q = D07.dirname(A);
    if (YBA.existsSync(q)) return YBA.writeFileSync(A, ...K);
    j07.mkdirsSync(q), YBA.writeFileSync(A, ...K);
  }
  M07.exports = {
    outputFile: yPY(SPY),
    outputFileSync: hPY
  };
});

// Register to shared state
__$.EX1 = EX1;
