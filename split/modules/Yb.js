// Module: Yb
// Dependencies: Zz8, Dz8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Yb = v((TEz, zi) => {
  var QwA = __$.Zz8(),
    {
      toPromise: JaA,
      toSync: OaA,
      toSyncOptions: sb1
    } = __$.Dz8();
  async function jz8(A, K) {
    let q = await JaA(QwA.lock)(A, K);
    return JaA(q);
  }
  function HDq(A, K) {
    let q = OaA(QwA.lock)(A, sb1(K));
    return OaA(q);
  }
  function JDq(A, K) {
    return JaA(QwA.unlock)(A, K);
  }
  function ODq(A, K) {
    return OaA(QwA.unlock)(A, sb1(K));
  }
  function XDq(A, K) {
    return JaA(QwA.check)(A, K);
  }
  function $Dq(A, K) {
    return OaA(QwA.check)(A, sb1(K));
  }
  zi.exports = jz8;
  zi.exports.lock = jz8;
  zi.exports.unlock = JDq;
  zi.exports.lockSync = HDq;
  zi.exports.unlockSync = ODq;
  zi.exports.check = XDq;
  zi.exports.checkSync = $Dq;
});

// Register to shared state
__$.Yb = Yb;
