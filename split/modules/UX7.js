// Module: UX7
// Dependencies: I2, va

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var UX7 = v((B8H, QX7) => {
  var Ca = CA("path"),
    _BA = __$.I2(),
    ZfY = __$.va().pathExists;
  function WfY(A, K, q) {
    if (Ca.isAbsolute(A)) return _BA.lstat(A, Y => {
      if (Y) return Y.message = Y.message.replace("lstat", "ensureSymlink"), q(Y);
      return q(null, {
        toCwd: A,
        toDst: A
      });
    });else {
      let Y = Ca.dirname(K),
        z = Ca.join(Y, A);
      return ZfY(z, (w, H) => {
        if (w) return q(w);
        if (H) return q(null, {
          toCwd: z,
          toDst: A
        });else return _BA.lstat(A, J => {
          if (J) return J.message = J.message.replace("lstat", "ensureSymlink"), q(J);
          return q(null, {
            toCwd: A,
            toDst: Ca.relative(Y, A)
          });
        });
      });
    }
  }
  function DfY(A, K) {
    let q;
    if (Ca.isAbsolute(A)) {
      if (q = _BA.existsSync(A), !q) throw Error("absolute srcpath does not exist");
      return {
        toCwd: A,
        toDst: A
      };
    } else {
      let Y = Ca.dirname(K),
        z = Ca.join(Y, A);
      if (q = _BA.existsSync(z), q) return {
        toCwd: z,
        toDst: A
      };else {
        if (q = _BA.existsSync(A), !q) throw Error("relative srcpath does not exist");
        return {
          toCwd: A,
          toDst: Ca.relative(Y, A)
        };
      }
    }
  }
  QX7.exports = {
    symlinkPaths: WfY,
    symlinkPathsSync: DfY
  };
});

// Register to shared state
__$.UX7 = UX7;
