// Module: Ya6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ya6 = v((P0z, qa6) => {
  qa6.exports = Aa6;
  Aa6.sync = UaK;
  var eo6 = CA("fs");
  function Aa6(A, K, q) {
    eo6.stat(A, function (Y, z) {
      q(Y, Y ? !1 : Ka6(z, K));
    });
  }
  function UaK(A, K) {
    return Ka6(eo6.statSync(A), K);
  }
  function Ka6(A, K) {
    return A.isFile() && paK(A, K);
  }
  function paK(A, K) {
    var {
        mode: q,
        uid: Y,
        gid: z
      } = A,
      w = K.uid !== void 0 ? K.uid : process.getuid && process.getuid(),
      H = K.gid !== void 0 ? K.gid : process.getgid && process.getgid(),
      J = parseInt("100", 8),
      O = parseInt("010", 8),
      X = parseInt("001", 8),
      $ = J | O,
      _ = q & X || q & O && z === H || q & J && Y === w || q & $ && w === 0;
    return _;
  }
});

// Register to shared state
__$.Ya6 = Ya6;
