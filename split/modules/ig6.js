// Module: ig6
// Dependencies: Fg6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ig6 = v(lQ2 => {
  var wjK = __$.Fg6(),
    QQ2 = [function () {}, function (A, K, q, Y) {
      if (Y === K.length) throw Error("Ran out of data");
      let z = K[Y];
      A[q] = z, A[q + 1] = z, A[q + 2] = z, A[q + 3] = 255;
    }, function (A, K, q, Y) {
      if (Y + 1 >= K.length) throw Error("Ran out of data");
      let z = K[Y];
      A[q] = z, A[q + 1] = z, A[q + 2] = z, A[q + 3] = K[Y + 1];
    }, function (A, K, q, Y) {
      if (Y + 2 >= K.length) throw Error("Ran out of data");
      A[q] = K[Y], A[q + 1] = K[Y + 1], A[q + 2] = K[Y + 2], A[q + 3] = 255;
    }, function (A, K, q, Y) {
      if (Y + 3 >= K.length) throw Error("Ran out of data");
      A[q] = K[Y], A[q + 1] = K[Y + 1], A[q + 2] = K[Y + 2], A[q + 3] = K[Y + 3];
    }],
    UQ2 = [function () {}, function (A, K, q, Y) {
      let z = K[0];
      A[q] = z, A[q + 1] = z, A[q + 2] = z, A[q + 3] = Y;
    }, function (A, K, q) {
      let Y = K[0];
      A[q] = Y, A[q + 1] = Y, A[q + 2] = Y, A[q + 3] = K[1];
    }, function (A, K, q, Y) {
      A[q] = K[0], A[q + 1] = K[1], A[q + 2] = K[2], A[q + 3] = Y;
    }, function (A, K, q) {
      A[q] = K[0], A[q + 1] = K[1], A[q + 2] = K[2], A[q + 3] = K[3];
    }];
  function pQ2(A, K) {
    let q = [],
      Y = 0;
    function z() {
      if (Y === A.length) throw Error("Ran out of data");
      let w = A[Y];
      Y++;
      let H, J, O, X, $, _, G, Z;
      switch (K) {
        default:
          throw Error("unrecognised depth");
        case 16:
          G = A[Y], Y++, q.push((w << 8) + G);
          break;
        case 4:
          G = w & 15, Z = w >> 4, q.push(Z, G);
          break;
        case 2:
          $ = w & 3, _ = w >> 2 & 3, G = w >> 4 & 3, Z = w >> 6 & 3, q.push(Z, G, _, $);
          break;
        case 1:
          H = w & 1, J = w >> 1 & 1, O = w >> 2 & 1, X = w >> 3 & 1, $ = w >> 4 & 1, _ = w >> 5 & 1, G = w >> 6 & 1, Z = w >> 7 & 1, q.push(Z, G, _, $, X, O, J, H);
          break;
      }
    }
    return {
      get: function (w) {
        while (q.length < w) z();
        let H = q.slice(0, w);
        return q = q.slice(w), H;
      },
      resetAfterLine: function () {
        q.length = 0;
      },
      end: function () {
        if (Y !== A.length) throw Error("extra data found");
      }
    };
  }
  function dQ2(A, K, q, Y, z, w) {
    let {
      width: H,
      height: J,
      index: O
    } = A;
    for (let X = 0; X < J; X++) for (let $ = 0; $ < H; $++) {
      let _ = q($, X, O);
      QQ2[Y](K, z, _, w), w += Y;
    }
    return w;
  }
  function cQ2(A, K, q, Y, z, w) {
    let {
      width: H,
      height: J,
      index: O
    } = A;
    for (let X = 0; X < J; X++) {
      for (let $ = 0; $ < H; $++) {
        let _ = z.get(Y),
          G = q($, X, O);
        UQ2[Y](K, _, G, w);
      }
      z.resetAfterLine();
    }
  }
  lQ2.dataToBitMap = function (A, K) {
    let {
        width: q,
        height: Y,
        depth: z,
        bpp: w,
        interlace: H
      } = K,
      J;
    if (z !== 8) J = pQ2(A, z);
    let O;
    if (z <= 8) O = Buffer.alloc(q * Y * 4);else O = new Uint16Array(q * Y * 4);
    let X = Math.pow(2, z) - 1,
      $ = 0,
      _,
      G;
    if (H) _ = wjK.getImagePasses(q, Y), G = wjK.getInterlaceIterator(q, Y);else {
      let Z = 0;
      G = function () {
        let W = Z;
        return Z += 4, W;
      }, _ = [{
        width: q,
        height: Y
      }];
    }
    for (let Z = 0; Z < _.length; Z++) if (z === 8) $ = dQ2(_[Z], O, G, w, A, $);else cQ2(_[Z], O, G, w, J, X);
    if (z === 8) {
      if ($ !== A.length) throw Error("extra data found");
    } else J.end();
    return O;
  };
});

// Register to shared state
__$.ig6 = ig6;
