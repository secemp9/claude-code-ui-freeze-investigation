// Module: UE8
// Dependencies: H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var UE8 = v(QE8 => {
  Object.defineProperty(QE8, "__esModule", {
    value: !0
  });
  var FE8 = __$.H8();
  function uA5(A, K) {
    return FE8.extractRequestData(A, {
      include: K
    });
  }
  function BA5(A, K, q = {}) {
    return FE8.addRequestDataToEvent(A, K, {
      include: q
    });
  }
  QE8.extractRequestData = uA5;
  QE8.parseRequest = BA5;
});

// Register to shared state
__$.UE8 = UE8;
