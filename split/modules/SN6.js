// Module: SN6
// Dependencies: zj

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SN6 = v((qDH, oL7) => {
  var HiY = __$.zj();
  function JiY(A) {
    if (A === null) return !1;
    var K = A.length;
    return K === 4 && (A === "true" || A === "True" || A === "TRUE") || K === 5 && (A === "false" || A === "False" || A === "FALSE");
  }
  function OiY(A) {
    return A === "true" || A === "True" || A === "TRUE";
  }
  function XiY(A) {
    return Object.prototype.toString.call(A) === "[object Boolean]";
  }
  oL7.exports = new HiY("tag:yaml.org,2002:bool", {
    kind: "scalar",
    resolve: JiY,
    construct: OiY,
    predicate: XiY,
    represent: {
      lowercase: function (A) {
        return A ? "true" : "false";
      },
      uppercase: function (A) {
        return A ? "TRUE" : "FALSE";
      },
      camelcase: function (A) {
        return A ? "True" : "False";
      }
    },
    defaultStyle: "lowercase"
  });
});

// Register to shared state
__$.SN6 = SN6;
