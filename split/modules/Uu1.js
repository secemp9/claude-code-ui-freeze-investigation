// Module: Uu1
// Dependencies: SE

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Uu1 = v(aD8 => {
  Object.defineProperty(aD8, "__esModule", {
    value: !0
  });
  var Vyq = __$.SE(),
    sg;
  (function (A) {
    A[A.PENDING = 0] = "PENDING";
    let q = 1;
    A[A.RESOLVED = q] = "RESOLVED";
    let Y = 2;
    A[A.REJECTED = Y] = "REJECTED";
  })(sg || (sg = {}));
  function fyq(A) {
    return new $b(K => {
      K(A);
    });
  }
  function Nyq(A) {
    return new $b((K, q) => {
      q(A);
    });
  }
  class $b {
    constructor(A) {
      $b.prototype.__init.call(this), $b.prototype.__init2.call(this), $b.prototype.__init3.call(this), $b.prototype.__init4.call(this), this._state = sg.PENDING, this._handlers = [];
      try {
        A(this._resolve, this._reject);
      } catch (K) {
        this._reject(K);
      }
    }
    then(A, K) {
      return new $b((q, Y) => {
        this._handlers.push([!1, z => {
          if (!A) q(z);else try {
            q(A(z));
          } catch (w) {
            Y(w);
          }
        }, z => {
          if (!K) Y(z);else try {
            q(K(z));
          } catch (w) {
            Y(w);
          }
        }]), this._executeHandlers();
      });
    }
    catch(A) {
      return this.then(K => K, A);
    }
    finally(A) {
      return new $b((K, q) => {
        let Y, z;
        return this.then(w => {
          if (z = !1, Y = w, A) A();
        }, w => {
          if (z = !0, Y = w, A) A();
        }).then(() => {
          if (z) {
            q(Y);
            return;
          }
          K(Y);
        });
      });
    }
    __init() {
      this._resolve = A => {
        this._setResult(sg.RESOLVED, A);
      };
    }
    __init2() {
      this._reject = A => {
        this._setResult(sg.REJECTED, A);
      };
    }
    __init3() {
      this._setResult = (A, K) => {
        if (this._state !== sg.PENDING) return;
        if (Vyq.isThenable(K)) {
          K.then(this._resolve, this._reject);
          return;
        }
        this._state = A, this._value = K, this._executeHandlers();
      };
    }
    __init4() {
      this._executeHandlers = () => {
        if (this._state === sg.PENDING) return;
        let A = this._handlers.slice();
        this._handlers = [], A.forEach(K => {
          if (K[0]) return;
          if (this._state === sg.RESOLVED) K[1](this._value);
          if (this._state === sg.REJECTED) K[2](this._value);
          K[0] = !0;
        });
      };
    }
  }
  aD8.SyncPromise = $b;
  aD8.rejectedSyncPromise = Nyq;
  aD8.resolvedSyncPromise = fyq;
});

// Register to shared state
__$.Uu1 = Uu1;
