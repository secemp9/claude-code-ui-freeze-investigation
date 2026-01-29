// Module: BjK
// Dependencies: XVA, og6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BjK = v((oFJ, ujK) => {
  var bjK = !0,
    xjK = CA("zlib");
  if (!xjK.deflateSync) bjK = !1;
  var bU2 = __$.XVA(),
    xU2 = __$.og6();
  ujK.exports = function (A, K) {
    if (!bjK) throw Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");
    let Y = new xU2(K || {}),
      z = [];
    if (z.push(Buffer.from(bU2.PNG_SIGNATURE)), z.push(Y.packIHDR(A.width, A.height)), A.gamma) z.push(Y.packGAMA(A.gamma));
    let w = Y.filterData(A.data, A.width, A.height),
      H = xjK.deflateSync(w, Y.getDeflateOptions());
    if (w = null, !H || !H.length) throw Error("bad png - invalid compressed data response");
    return z.push(Y.packIDAT(H)), z.push(Y.packIEND()), Buffer.concat(z);
  };
});

// Register to shared state
__$.BjK = BjK;
