// Module: FX7
// Dependencies: HH, I2, SI, va, NqA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var FX7 = v((u8H, gX7) => {
  var XfY = __$.HH().fromCallback,
    uX7 = CA("path"),
    ka = __$.I2(),
    BX7 = __$.SI(),
    $fY = __$.va().pathExists,
    {
      areIdentical: mX7
    } = __$.NqA();
  function _fY(A, K, q) {
    function Y(z, w) {
      ka.link(z, w, H => {
        if (H) return q(H);
        q(null);
      });
    }
    ka.lstat(K, (z, w) => {
      ka.lstat(A, (H, J) => {
        if (H) return H.message = H.message.replace("lstat", "ensureLink"), q(H);
        if (w && mX7(J, w)) return q(null);
        let O = uX7.dirname(K);
        $fY(O, (X, $) => {
          if (X) return q(X);
          if ($) return Y(A, K);
          BX7.mkdirs(O, _ => {
            if (_) return q(_);
            Y(A, K);
          });
        });
      });
    });
  }
  function GfY(A, K) {
    let q;
    try {
      q = ka.lstatSync(K);
    } catch {}
    try {
      let w = ka.lstatSync(A);
      if (q && mX7(w, q)) return;
    } catch (w) {
      throw w.message = w.message.replace("lstat", "ensureLink"), w;
    }
    let Y = uX7.dirname(K);
    if (ka.existsSync(Y)) return ka.linkSync(A, K);
    return BX7.mkdirsSync(Y), ka.linkSync(A, K);
  }
  gX7.exports = {
    createLink: XfY(_fY),
    createLinkSync: GfY
  };
});

// Register to shared state
__$.FX7 = FX7;
