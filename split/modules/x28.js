// Module: x28
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var x28 = v((ivz, b28) => {
  b28.exports = function (K) {
    return K.map(function (q) {
      if (q === "") return "''";
      if (q && typeof q === "object") return q.op.replace(/(.)/g, "\\$1");
      if (/["\s\\]/.test(q) && !/'/.test(q)) return "'" + q.replace(/(['])/g, "\\$1") + "'";
      if (/["'\s]/.test(q)) return '"' + q.replace(/(["\\$`!])/g, "\\$1") + '"';
      return String(q).replace(/([A-Za-z]:)?([#!"$&'()*,:;<=>?@[\\\]^`{|}])/g, "$1\\$2");
    }).join(" ");
  };
});

// Register to shared state
__$.x28 = x28;
