// Module: J2K
// Dependencies: hUA, $f1, kb6, Eb6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var J2K = v(Cv2 => {
  var Y2K = __$.hUA(),
    z2K = __$.$f1(),
    NeH = __$.kb6(),
    w2K = __$.Eb6();
  Cv2.createDOMImplementation = function () {
    return new Y2K(null);
  };
  Cv2.createDocument = function (A, K) {
    if (A || K) {
      var q = new z2K();
      return q.parse(A || "", !0), q.document();
    }
    return new Y2K(null).createHTMLDocument("");
  };
  Cv2.createIncrementalHTMLParser = function () {
    var A = new z2K();
    return {
      write: function (K) {
        if (K.length > 0) A.parse(K, !1, function () {
          return !0;
        });
      },
      end: function (K) {
        A.parse(K || "", !0, function () {
          return !0;
        });
      },
      process: function (K) {
        return A.parse("", !1, K);
      },
      document: function () {
        return A.document();
      }
    };
  };
  Cv2.createWindow = function (A, K) {
    var q = Cv2.createDocument(A);
    if (K !== void 0) q._address = K;
    return new w2K.Window(q);
  };
  Cv2.impl = w2K;
});

// Register to shared state
__$.J2K = J2K;
