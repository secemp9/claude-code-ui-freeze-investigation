// Module: Ec7
// Dependencies: zj1, jc7, gk6, Mc7, Pc7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ec7 = v(Tc7 => {
  Object.defineProperty(Tc7, "__esModule", {
    value: !0
  });
  Tc7.addCommonProtos = Tc7.loadProtosWithOptionsSync = Tc7.loadProtosWithOptions = void 0;
  var Vc7 = CA("fs"),
    fc7 = CA("path"),
    WjA = __$.zj1();
  function Nc7(A, K) {
    let q = A.resolvePath;
    A.resolvePath = (Y, z) => {
      if (fc7.isAbsolute(z)) return z;
      for (let w of K) {
        let H = fc7.join(w, z);
        try {
          return Vc7.accessSync(H, Vc7.constants.R_OK), H;
        } catch (J) {
          continue;
        }
      }
      return process.emitWarning(`${z} not found in any of the include paths ${K}`), q(Y, z);
    };
  }
  async function HY2(A, K) {
    let q = new WjA.Root();
    if (K = K || {}, K.includeDirs) {
      if (!Array.isArray(K.includeDirs)) return Promise.reject(Error("The includeDirs option must be an array"));
      Nc7(q, K.includeDirs);
    }
    let Y = await q.load(A, K);
    return Y.resolveAll(), Y;
  }
  Tc7.loadProtosWithOptions = HY2;
  function JY2(A, K) {
    let q = new WjA.Root();
    if (K = K || {}, K.includeDirs) {
      if (!Array.isArray(K.includeDirs)) throw Error("The includeDirs option must be an array");
      Nc7(q, K.includeDirs);
    }
    let Y = q.loadSync(A, K);
    return Y.resolveAll(), Y;
  }
  Tc7.loadProtosWithOptionsSync = JY2;
  function OY2() {
    let A = __$.jc7(),
      K = __$.gk6(),
      q = __$.Mc7(),
      Y = __$.Pc7();
    WjA.common("api", A.nested.google.nested.protobuf.nested), WjA.common("descriptor", K.nested.google.nested.protobuf.nested), WjA.common("source_context", q.nested.google.nested.protobuf.nested), WjA.common("type", Y.nested.google.nested.protobuf.nested);
  }
  Tc7.addCommonProtos = OY2;
});

// Register to shared state
__$.Ec7 = Ec7;
