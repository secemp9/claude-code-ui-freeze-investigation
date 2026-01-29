// Module: od7
// Dependencies: wE6, kk6, Wk6, Mk6, fk6, Ot, $jA, eD1, VS, oD1
//   ... and 9 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var od7 = v((fEH, rd7) => {
  var fY = rd7.exports = __$.wE6();
  fY.build = "light";
  function V92(A, K, q) {
    if (typeof K === "function") q = K, K = new fY.Root();else if (!K) K = new fY.Root();
    return K.load(A, q);
  }
  fY.load = V92;
  function f92(A, K) {
    if (!K) K = new fY.Root();
    return K.loadSync(A);
  }
  fY.loadSync = f92;
  fY.encoder = __$.kk6();
  fY.decoder = __$.Wk6();
  fY.verifier = __$.Mk6();
  fY.converter = __$.fk6();
  fY.ReflectionObject = __$.Ot();
  fY.Namespace = __$.$jA();
  fY.Root = __$.eD1();
  fY.Enum = __$.VS();
  fY.Type = __$.oD1();
  fY.Field = __$.Jt();
  fY.OneOf = __$.s5A();
  fY.MapField = __$.dD1();
  fY.Service = __$.lD1();
  fY.Method = __$.cD1();
  fY.Message = __$.iD1();
  fY.wrappers = __$.Nk6();
  fY.types = __$.t5A();
  fY.util = __$.pG();
  fY.ReflectionObject._configure(fY.Root);
  fY.Namespace._configure(fY.Type, fY.Service, fY.Enum);
  fY.Root._configure(fY.Type);
  fY.Field._configure(fY.Type);
});

// Register to shared state
__$.od7 = od7;
