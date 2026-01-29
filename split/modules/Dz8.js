// Module: Dz8
// Dependencies: I2

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Dz8 = v((NEz, Wz8) => {
  var KDq = __$.I2();
  function qDq(A) {
    let K = ["mkdir", "realpath", "stat", "rmdir", "utimes"],
      q = {
        ...A
      };
    return K.forEach(Y => {
      q[Y] = (...z) => {
        let w = z.pop(),
          H;
        try {
          H = A[`${Y}Sync`](...z);
        } catch (J) {
          return w(J);
        }
        w(null, H);
      };
    }), q;
  }
  function YDq(A) {
    return (...K) => new Promise((q, Y) => {
      K.push((z, w) => {
        if (z) Y(z);else q(w);
      }), A(...K);
    });
  }
  function zDq(A) {
    return (...K) => {
      let q, Y;
      if (K.push((z, w) => {
        q = z, Y = w;
      }), A(...K), q) throw q;
      return Y;
    };
  }
  function wDq(A) {
    if (A = {
      ...A
    }, A.fs = qDq(A.fs || KDq), typeof A.retries === "number" && A.retries > 0 || A.retries && typeof A.retries.retries === "number" && A.retries.retries > 0) throw Object.assign(Error("Cannot use retries with the sync api"), {
      code: "ESYNC"
    });
    return A;
  }
  Wz8.exports = {
    toPromise: YDq,
    toSync: zDq,
    toSyncOptions: wDq
  };
});

// Register to shared state
__$.Dz8 = Dz8;
