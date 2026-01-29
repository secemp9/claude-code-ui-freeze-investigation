// Module: dO7
// Dependencies: I2, Va

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dO7 = v((H8H, pO7) => {
  var Ta = CA("path"),
    qBA = __$.I2(),
    wPY = __$.Va().pathExists;
  function HPY(A, K, q) {
    if (Ta.isAbsolute(A)) return qBA.lstat(A, Y => {
      if (Y) return Y.message = Y.message.replace("lstat", "ensureSymlink"), q(Y);
      return q(null, {
        toCwd: A,
        toDst: A
      });
    });else {
      let Y = Ta.dirname(K),
        z = Ta.join(Y, A);
      return wPY(z, (w, H) => {
        if (w) return q(w);
        if (H) return q(null, {
          toCwd: z,
          toDst: A
        });else return qBA.lstat(A, J => {
          if (J) return J.message = J.message.replace("lstat", "ensureSymlink"), q(J);
          return q(null, {
            toCwd: A,
            toDst: Ta.relative(Y, A)
          });
        });
      });
    }
  }
  function JPY(A, K) {
    let q;
    if (Ta.isAbsolute(A)) {
      if (q = qBA.existsSync(A), !q) throw Error("absolute srcpath does not exist");
      return {
        toCwd: A,
        toDst: A
      };
    } else {
      let Y = Ta.dirname(K),
        z = Ta.join(Y, A);
      if (q = qBA.existsSync(z), q) return {
        toCwd: z,
        toDst: A
      };else {
        if (q = qBA.existsSync(A), !q) throw Error("relative srcpath does not exist");
        return {
          toCwd: A,
          toDst: Ta.relative(Y, A)
        };
      }
    }
  }
  pO7.exports = {
    symlinkPaths: HPY,
    symlinkPathsSync: JPY
  };
});

// Register to shared state
__$.dO7 = dO7;
