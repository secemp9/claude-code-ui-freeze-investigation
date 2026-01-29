// Module: Gd7
// Dependencies: pv6, lv6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Gd7 = v((AEH, _d7) => {
  _d7.exports = egA;
  var m32 = __$.pv6(),
    g32 = __$.lv6(),
    Jk6 = g32("fs");
  function egA(A, K, q) {
    if (typeof K === "function") q = K, K = {};else if (!K) K = {};
    if (!q) return m32(egA, this, A, K);
    if (!K.xhr && Jk6 && Jk6.readFile) return Jk6.readFile(A, function (z, w) {
      return z && typeof XMLHttpRequest < "u" ? egA.xhr(A, K, q) : z ? q(z) : q(null, K.binary ? w : w.toString("utf8"));
    });
    return egA.xhr(A, K, q);
  }
  egA.xhr = function (K, q, Y) {
    var z = new XMLHttpRequest();
    if (z.onreadystatechange = function () {
      if (z.readyState !== 4) return;
      if (z.status !== 0 && z.status !== 200) return Y(Error("status " + z.status));
      if (q.binary) {
        var H = z.response;
        if (!H) {
          H = [];
          for (var J = 0; J < z.responseText.length; ++J) H.push(z.responseText.charCodeAt(J) & 255);
        }
        return Y(null, typeof Uint8Array < "u" ? new Uint8Array(H) : H);
      }
      return Y(null, z.responseText);
    }, q.binary) {
      if ("overrideMimeType" in z) z.overrideMimeType("text/plain; charset=x-user-defined");
      z.responseType = "arraybuffer";
    }
    z.open("GET", K), z.send();
  };
});

// Register to shared state
__$.Gd7 = Gd7;
