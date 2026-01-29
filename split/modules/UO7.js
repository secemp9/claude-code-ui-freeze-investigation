// Module: UO7
// Dependencies: HH, I2, yI, Va, VqA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var UO7 = v((w8H, QO7) => {
  var KPY = __$.HH().fromCallback,
    mO7 = CA("path"),
    Na = __$.I2(),
    gO7 = __$.yI(),
    qPY = __$.Va().pathExists,
    {
      areIdentical: FO7
    } = __$.VqA();
  function YPY(A, K, q) {
    function Y(z, w) {
      Na.link(z, w, H => {
        if (H) return q(H);
        q(null);
      });
    }
    Na.lstat(K, (z, w) => {
      Na.lstat(A, (H, J) => {
        if (H) return H.message = H.message.replace("lstat", "ensureLink"), q(H);
        if (w && FO7(J, w)) return q(null);
        let O = mO7.dirname(K);
        qPY(O, (X, $) => {
          if (X) return q(X);
          if ($) return Y(A, K);
          gO7.mkdirs(O, _ => {
            if (_) return q(_);
            Y(A, K);
          });
        });
      });
    });
  }
  function zPY(A, K) {
    let q;
    try {
      q = Na.lstatSync(K);
    } catch {}
    try {
      let w = Na.lstatSync(A);
      if (q && FO7(w, q)) return;
    } catch (w) {
      throw w.message = w.message.replace("lstat", "ensureLink"), w;
    }
    let Y = mO7.dirname(K);
    if (Na.existsSync(Y)) return Na.linkSync(A, K);
    return gO7.mkdirsSync(Y), Na.linkSync(A, K);
  }
  QO7.exports = {
    createLink: KPY(YPY),
    createLinkSync: zPY
  };
});

// Register to shared state
__$.UO7 = UO7;
