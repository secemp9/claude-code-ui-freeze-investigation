// Module: Z96
// Dependencies: q$, pIA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Z96 = v(rj9 => {
  var rIA = CA("buffer"),
    G96 = __$.q$(),
    ij9 = __$.pIA(),
    nj9 = {
      identify: A => A instanceof Uint8Array,
      default: !1,
      tag: "tag:yaml.org,2002:binary",
      resolve(A, K) {
        if (typeof rIA.Buffer === "function") return rIA.Buffer.from(A, "base64");else if (typeof atob === "function") {
          let q = atob(A.replace(/[\n\r]/g, "")),
            Y = new Uint8Array(q.length);
          for (let z = 0; z < q.length; ++z) Y[z] = q.charCodeAt(z);
          return Y;
        } else return K("This environment does not support reading binary tags; either Buffer or atob is required"), A;
      },
      stringify({
        comment: A,
        type: K,
        value: q
      }, Y, z, w) {
        if (!q) return "";
        let H = q,
          J;
        if (typeof rIA.Buffer === "function") J = H instanceof rIA.Buffer ? H.toString("base64") : rIA.Buffer.from(H.buffer).toString("base64");else if (typeof btoa === "function") {
          let O = "";
          for (let X = 0; X < H.length; ++X) O += String.fromCharCode(H[X]);
          J = btoa(O);
        } else throw Error("This environment does not support writing binary tags; either Buffer or btoa is required");
        if (K ?? (K = G96.Scalar.BLOCK_LITERAL), K !== G96.Scalar.QUOTE_DOUBLE) {
          let O = Math.max(Y.options.lineWidth - Y.indent.length, Y.options.minContentWidth),
            X = Math.ceil(J.length / O),
            $ = Array(X);
          for (let _ = 0, G = 0; _ < X; ++_, G += O) $[_] = J.substr(G, O);
          J = $.join(K === G96.Scalar.BLOCK_LITERAL ? `
` : " ");
        }
        return ij9.stringifyString({
          comment: A,
          type: K,
          value: J
        }, Y, z, w);
      }
    };
  rj9.binary = nj9;
});

// Register to shared state
__$.Z96 = Z96;
