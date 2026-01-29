// Module: xL7
// Dependencies: wS

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xL7 = v((iWH, bL7) => {
  var {
    ParserError: blY
  } = __$.wS();
  bL7.exports = {
    order: 100,
    allowEmpty: !0,
    canParse: ".json",
    async parse(A) {
      let K = A.data;
      if (Buffer.isBuffer(K)) K = K.toString();
      if (typeof K === "string") {
        if (K.trim().length === 0) return;else try {
          return JSON.parse(K);
        } catch (q) {
          throw new blY(q.message, A.url);
        }
      } else return K;
    }
  };
});

// Register to shared state
__$.xL7 = xL7;
