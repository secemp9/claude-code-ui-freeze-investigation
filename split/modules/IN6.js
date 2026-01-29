// Module: IN6
// Dependencies: zj

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var IN6 = v((KDH, rL7) => {
  var qiY = __$.zj();
  function YiY(A) {
    if (A === null) return !0;
    var K = A.length;
    return K === 1 && A === "~" || K === 4 && (A === "null" || A === "Null" || A === "NULL");
  }
  function ziY() {
    return null;
  }
  function wiY(A) {
    return A === null;
  }
  rL7.exports = new qiY("tag:yaml.org,2002:null", {
    kind: "scalar",
    resolve: YiY,
    construct: ziY,
    predicate: wiY,
    represent: {
      canonical: function () {
        return "~";
      },
      lowercase: function () {
        return "null";
      },
      uppercase: function () {
        return "NULL";
      },
      camelcase: function () {
        return "Null";
      },
      empty: function () {
        return "";
      }
    },
    defaultStyle: "lowercase"
  });
});

// Register to shared state
__$.IN6 = IN6;
