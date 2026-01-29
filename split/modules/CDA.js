// Module: CDA
// Dependencies: ZW1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var CDA = v(dI7 => {
  Object.defineProperty(dI7, "__esModule", {
    value: !0
  });
  dI7._getSortedObject = dI7._DJB2Object = dI7._DJB2 = void 0;
  var ioY = __$.ZW1(),
    noY = A => {
      let K = 0;
      for (let q = 0; q < A.length; q++) {
        let Y = A.charCodeAt(q);
        K = (K << 5) - K + Y, K = K & K;
      }
      return String(K >>> 0);
    };
  dI7._DJB2 = noY;
  var roY = (A, K) => {
    return dI7._DJB2(JSON.stringify(dI7._getSortedObject(A, K)));
  };
  dI7._DJB2Object = roY;
  var ooY = (A, K) => {
    if (A == null) return null;
    let q = Object.keys(A).sort(),
      Y = {};
    return q.forEach(z => {
      let w = A[z];
      if (K === 0 || (0, ioY._typeOf)(w) !== "object") {
        Y[z] = w;
        return;
      }
      Y[z] = dI7._getSortedObject(w, K != null ? K - 1 : K);
    }), Y;
  };
  dI7._getSortedObject = ooY;
});

// Register to shared state
__$.CDA = CDA;
