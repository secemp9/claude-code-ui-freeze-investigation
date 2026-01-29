// Module: lt6
// Dependencies: Qt6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lt6 = v(KAq => {
  /*!
  * mime-types
  * Copyright(c) 2014 Jonathan Ong
  * Copyright(c) 2015 Douglas Christopher Wilson
  * MIT Licensed
  */
  var BrA = __$.Qt6(),
    oeK = CA("path").extname,
    Ut6 = /^\s*([^;\s]*)(?:;|\s|$)/,
    aeK = /^text\//i;
  KAq.charset = pt6;
  KAq.charsets = {
    lookup: pt6
  };
  KAq.contentType = seK;
  KAq.extension = teK;
  KAq.extensions = Object.create(null);
  KAq.lookup = eeK;
  KAq.types = Object.create(null);
  AAq(KAq.extensions, KAq.types);
  function pt6(A) {
    if (!A || typeof A !== "string") return !1;
    var K = Ut6.exec(A),
      q = K && BrA[K[1].toLowerCase()];
    if (q && q.charset) return q.charset;
    if (K && aeK.test(K[1])) return "UTF-8";
    return !1;
  }
  function seK(A) {
    if (!A || typeof A !== "string") return !1;
    var K = A.indexOf("/") === -1 ? KAq.lookup(A) : A;
    if (!K) return !1;
    if (K.indexOf("charset") === -1) {
      var q = KAq.charset(K);
      if (q) K += "; charset=" + q.toLowerCase();
    }
    return K;
  }
  function teK(A) {
    if (!A || typeof A !== "string") return !1;
    var K = Ut6.exec(A),
      q = K && KAq.extensions[K[1].toLowerCase()];
    if (!q || !q.length) return !1;
    return q[0];
  }
  function eeK(A) {
    if (!A || typeof A !== "string") return !1;
    var K = oeK("x." + A).toLowerCase().substr(1);
    if (!K) return !1;
    return KAq.types[K] || !1;
  }
  function AAq(A, K) {
    var q = ["nginx", "apache", void 0, "iana"];
    Object.keys(BrA).forEach(function (z) {
      var w = BrA[z],
        H = w.extensions;
      if (!H || !H.length) return;
      A[z] = H;
      for (var J = 0; J < H.length; J++) {
        var O = H[J];
        if (K[O]) {
          var X = q.indexOf(BrA[K[O]].source),
            $ = q.indexOf(w.source);
          if (K[O] !== "application/octet-stream" && (X > $ || X === $ && K[O].substr(0, 12) === "application/")) continue;
        }
        K[O] = z;
      }
    });
  }
});

// Register to shared state
__$.lt6 = lt6;
