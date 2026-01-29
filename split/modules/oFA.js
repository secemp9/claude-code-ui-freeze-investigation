// Module: oFA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oFA = v(N_2 => {
  function V_2(A, K, q) {
    if (q === void 0) q = Array.prototype;
    if (A && typeof q.find === "function") return q.find.call(A, K);
    for (var Y = 0; Y < A.length; Y++) if (Object.prototype.hasOwnProperty.call(A, Y)) {
      var z = A[Y];
      if (K.call(void 0, z, Y, A)) return z;
    }
  }
  function CR6(A, K) {
    if (K === void 0) K = Object;
    return K && typeof K.freeze === "function" ? K.freeze(A) : A;
  }
  function f_2(A, K) {
    if (A === null || typeof A !== "object") throw TypeError("target is not an object");
    for (var q in K) if (Object.prototype.hasOwnProperty.call(K, q)) A[q] = K[q];
    return A;
  }
  var ct7 = CR6({
      HTML: "text/html",
      isHTML: function (A) {
        return A === ct7.HTML;
      },
      XML_APPLICATION: "application/xml",
      XML_TEXT: "text/xml",
      XML_XHTML_APPLICATION: "application/xhtml+xml",
      XML_SVG_IMAGE: "image/svg+xml"
    }),
    lt7 = CR6({
      HTML: "http://www.w3.org/1999/xhtml",
      isHTML: function (A) {
        return A === lt7.HTML;
      },
      SVG: "http://www.w3.org/2000/svg",
      XML: "http://www.w3.org/XML/1998/namespace",
      XMLNS: "http://www.w3.org/2000/xmlns/"
    });
  N_2.assign = f_2;
  N_2.find = V_2;
  N_2.freeze = CR6;
  N_2.MIME_TYPE = ct7;
  N_2.NAMESPACE = lt7;
});

// Register to shared state
__$.oFA = oFA;
