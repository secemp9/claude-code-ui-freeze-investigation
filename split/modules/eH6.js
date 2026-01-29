// Module: eH6
// Dependencies: Xa4, Va4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eH6 = v(Bt9 => {
  var fa4 = __$.Xa4(),
    Hw1 = __$.Va4(),
    ut9 = ["HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512"];
  Bt9.ALGORITHMS = ut9;
  Bt9.sign = fa4.sign;
  Bt9.verify = Hw1.verify;
  Bt9.decode = Hw1.decode;
  Bt9.isValid = Hw1.isValid;
  Bt9.createSign = function (K) {
    return new fa4(K);
  };
  Bt9.createVerify = function (K) {
    return new Hw1(K);
  };
});

// Register to shared state
__$.eH6 = eH6;
