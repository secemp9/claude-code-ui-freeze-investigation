// Module: wJ1
// Dependencies: I87, Q87

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wJ1 = v(a7Y => {
  var U87 = __$.I87(),
    zJ1 = __$.Q87(),
    o7Y = ["HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512"];
  a7Y.ALGORITHMS = o7Y;
  a7Y.sign = U87.sign;
  a7Y.verify = zJ1.verify;
  a7Y.decode = zJ1.decode;
  a7Y.isValid = zJ1.isValid;
  a7Y.createSign = function (K) {
    return new U87(K);
  };
  a7Y.createVerify = function (K) {
    return new zJ1(K);
  };
});

// Register to shared state
__$.wJ1 = wJ1;
