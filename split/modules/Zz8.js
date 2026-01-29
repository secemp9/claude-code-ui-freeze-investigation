// Module: Zz8
// Dependencies: I2, zz8, Hz8, Oz8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Zz8 = v((aWq, UTA) => {
  var cWq = CA("path"),
    ob1 = __$.I2(),
    lWq = __$.zz8(),
    iWq = __$.Hz8(),
    Xz8 = __$.Oz8(),
    cg = {};
  function QTA(A, K) {
    return K.lockfilePath || `${A}.lock`;
  }
  function ab1(A, K, q) {
    if (!K.realpath) return q(null, cWq.resolve(A));
    K.fs.realpath(A, q);
  }
  function rb1(A, K, q) {
    let Y = QTA(A, K);
    K.fs.mkdir(Y, z => {
      if (!z) return Xz8.probe(Y, K.fs, (w, H, J) => {
        if (w) return K.fs.rmdir(Y, () => {}), q(w);
        q(null, H, J);
      });
      if (z.code !== "EEXIST") return q(z);
      if (K.stale <= 0) return q(Object.assign(Error("Lock file is already being held"), {
        code: "ELOCKED",
        file: A
      }));
      K.fs.stat(Y, (w, H) => {
        if (w) {
          if (w.code === "ENOENT") return rb1(A, {
            ...K,
            stale: 0
          }, q);
          return q(w);
        }
        if (!$z8(H, K)) return q(Object.assign(Error("Lock file is already being held"), {
          code: "ELOCKED",
          file: A
        }));
        _z8(A, K, J => {
          if (J) return q(J);
          rb1(A, {
            ...K,
            stale: 0
          }, q);
        });
      });
    });
  }
  function $z8(A, K) {
    return A.mtime.getTime() < Date.now() - K.stale;
  }
  function _z8(A, K, q) {
    K.fs.rmdir(QTA(A, K), Y => {
      if (Y && Y.code !== "ENOENT") return q(Y);
      q();
    });
  }
  function HaA(A, K) {
    let q = cg[A];
    if (q.updateTimeout) return;
    if (q.updateDelay = q.updateDelay || K.update, q.updateTimeout = setTimeout(() => {
      q.updateTimeout = null, K.fs.stat(q.lockfilePath, (Y, z) => {
        let w = q.lastUpdate + K.stale < Date.now();
        if (Y) {
          if (Y.code === "ENOENT" || w) return nb1(A, q, Object.assign(Y, {
            code: "ECOMPROMISED"
          }));
          return q.updateDelay = 1000, HaA(A, K);
        }
        if (q.mtime.getTime() !== z.mtime.getTime()) return nb1(A, q, Object.assign(Error("Unable to update lock within the stale threshold"), {
          code: "ECOMPROMISED"
        }));
        let J = Xz8.getMtime(q.mtimePrecision);
        K.fs.utimes(q.lockfilePath, J, J, O => {
          let X = q.lastUpdate + K.stale < Date.now();
          if (q.released) return;
          if (O) {
            if (O.code === "ENOENT" || X) return nb1(A, q, Object.assign(O, {
              code: "ECOMPROMISED"
            }));
            return q.updateDelay = 1000, HaA(A, K);
          }
          q.mtime = J, q.lastUpdate = Date.now(), q.updateDelay = null, HaA(A, K);
        });
      });
    }, q.updateDelay), q.updateTimeout.unref) q.updateTimeout.unref();
  }
  function nb1(A, K, q) {
    if (K.released = !0, K.updateTimeout) clearTimeout(K.updateTimeout);
    if (cg[A] === K) delete cg[A];
    K.options.onCompromised(q);
  }
  function nWq(A, K, q) {
    K = {
      stale: 1e4,
      update: null,
      realpath: !0,
      retries: 0,
      fs: ob1,
      onCompromised: Y => {
        throw Y;
      },
      ...K
    }, K.retries = K.retries || 0, K.retries = typeof K.retries === "number" ? {
      retries: K.retries
    } : K.retries, K.stale = Math.max(K.stale || 0, 2000), K.update = K.update == null ? K.stale / 2 : K.update || 0, K.update = Math.max(Math.min(K.update, K.stale / 2), 1000), ab1(A, K, (Y, z) => {
      if (Y) return q(Y);
      let w = lWq.operation(K.retries);
      w.attempt(() => {
        rb1(z, K, (H, J, O) => {
          if (w.retry(H)) return;
          if (H) return q(w.mainError());
          let X = cg[z] = {
            lockfilePath: QTA(z, K),
            mtime: J,
            mtimePrecision: O,
            options: K,
            lastUpdate: Date.now()
          };
          HaA(z, K), q(null, $ => {
            if (X.released) return $ && $(Object.assign(Error("Lock is already released"), {
              code: "ERELEASED"
            }));
            Gz8(z, {
              ...K,
              realpath: !1
            }, $);
          });
        });
      });
    });
  }
  function Gz8(A, K, q) {
    K = {
      fs: ob1,
      realpath: !0,
      ...K
    }, ab1(A, K, (Y, z) => {
      if (Y) return q(Y);
      let w = cg[z];
      if (!w) return q(Object.assign(Error("Lock is not acquired/owned by you"), {
        code: "ENOTACQUIRED"
      }));
      w.updateTimeout && clearTimeout(w.updateTimeout), w.released = !0, delete cg[z], _z8(z, K, q);
    });
  }
  function rWq(A, K, q) {
    K = {
      stale: 1e4,
      realpath: !0,
      fs: ob1,
      ...K
    }, K.stale = Math.max(K.stale || 0, 2000), ab1(A, K, (Y, z) => {
      if (Y) return q(Y);
      K.fs.stat(QTA(z, K), (w, H) => {
        if (w) return w.code === "ENOENT" ? q(null, !1) : q(w);
        return q(null, !$z8(H, K));
      });
    });
  }
  function oWq() {
    return cg;
  }
  iWq(() => {
    for (let A in cg) {
      let K = cg[A].options;
      try {
        K.fs.rmdirSync(QTA(A, K));
      } catch (q) {}
    }
  });
  aWq.lock = nWq;
  aWq.unlock = Gz8;
  aWq.check = rWq;
  aWq.getLocks = oWq;
});

// Register to shared state
__$.Zz8 = Zz8;
