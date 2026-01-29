// Module: kz4
// Dependencies: IV, ZT

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kz4 = v((X8w, Ez4) => {
  var Yi3 = CA("node:assert"),
    {
      URLSerializer: vz4
    } = __$.IV(),
    {
      isValidHeaderName: zi3
    } = __$.ZT();
  function wi3(A, K, q = !1) {
    let Y = vz4(A, q),
      z = vz4(K, q);
    return Y === z;
  }
  function Hi3(A) {
    Yi3(A !== null);
    let K = [];
    for (let q of A.split(",")) if (q = q.trim(), zi3(q)) K.push(q);
    return K;
  }
  Ez4.exports = {
    urlEquals: wi3,
    getFieldValues: Hi3
  };
});

// Register to shared state
__$.kz4 = kz4;
