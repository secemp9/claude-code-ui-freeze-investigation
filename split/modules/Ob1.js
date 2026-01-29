// Module: Ob1
// Dependencies: tP, CoA, fTA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ob1 = v(TY8 => {
  Object.defineProperty(TY8, "__esModule", {
    value: !0
  });
  TY8.timeoutWith = void 0;
  var XOq = __$.tP(),
    $Oq = __$.CoA(),
    _Oq = __$.fTA();
  function GOq(A, K, q) {
    var Y, z, w;
    if (q = q !== null && q !== void 0 ? q : XOq.async, $Oq.isValidDate(A)) Y = A;else if (typeof A === "number") z = A;
    if (K) w = function () {
      return K;
    };else throw TypeError("No observable provided to switch to");
    if (Y == null && z == null) throw TypeError("No timeout provided.");
    return _Oq.timeout({
      first: Y,
      each: z,
      scheduler: q,
      with: w
    });
  }
  TY8.timeoutWith = GOq;
});

// Register to shared state
__$.Ob1 = Ob1;
