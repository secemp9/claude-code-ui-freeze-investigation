// Module: hjK
// Dependencies: kjK, ag6, RjK, lg6, ig6, ng6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hjK = v((rFJ, SjK) => {
  var yjK = !0,
    IjK = CA("zlib"),
    LU2 = __$.kjK();
  if (!IjK.deflateSync) yjK = !1;
  var RU2 = __$.ag6(),
    yU2 = __$.RjK(),
    IU2 = __$.lg6(),
    SU2 = __$.ig6(),
    hU2 = __$.ng6();
  SjK.exports = function (A, K) {
    if (!yjK) throw Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");
    let q;
    function Y(N) {
      q = N;
    }
    let z;
    function w(N) {
      z = N;
    }
    function H(N) {
      z.transColor = N;
    }
    function J(N) {
      z.palette = N;
    }
    function O() {
      z.alpha = !0;
    }
    let X;
    function $(N) {
      X = N;
    }
    let _ = [];
    function G(N) {
      _.push(N);
    }
    let Z = new RU2(A);
    if (new IU2(K, {
      read: Z.read.bind(Z),
      error: Y,
      metadata: w,
      gamma: $,
      palette: J,
      transColor: H,
      inflateData: G,
      simpleTransparency: O
    }).start(), Z.process(), q) throw q;
    let D = Buffer.concat(_);
    _.length = 0;
    let j;
    if (z.interlace) j = IjK.inflateSync(D);else {
      let T = ((z.width * z.bpp * z.depth + 7 >> 3) + 1) * z.height;
      j = LU2(D, {
        chunkSize: T,
        maxLength: T
      });
    }
    if (D = null, !j || !j.length) throw Error("bad png - invalid inflate data response");
    let M = yU2.process(j, z);
    D = null;
    let P = SU2.dataToBitMap(M, z);
    M = null;
    let f = hU2(P, z);
    return z.data = f, z.gamma = X || 0, z;
  };
});

// Register to shared state
__$.hjK = hjK;
