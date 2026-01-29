// Module: hWA
// Dependencies: $s

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hWA = v(oN7 => {
  Object.defineProperty(oN7, "__esModule", {
    value: !0
  });
  oN7.Emitter = oN7.Event = void 0;
  var TBY = __$.$s(),
    nN7;
  (function (A) {
    let K = {
      dispose() {}
    };
    A.None = function () {
      return K;
    };
  })(nN7 || (oN7.Event = nN7 = {}));
  class rN7 {
    add(A, K = null, q) {
      if (!this._callbacks) this._callbacks = [], this._contexts = [];
      if (this._callbacks.push(A), this._contexts.push(K), Array.isArray(q)) q.push({
        dispose: () => this.remove(A, K)
      });
    }
    remove(A, K = null) {
      if (!this._callbacks) return;
      let q = !1;
      for (let Y = 0, z = this._callbacks.length; Y < z; Y++) if (this._callbacks[Y] === A) if (this._contexts[Y] === K) {
        this._callbacks.splice(Y, 1), this._contexts.splice(Y, 1);
        return;
      } else q = !0;
      if (q) throw Error("When adding a listener with a context, you should remove it with the same context");
    }
    invoke(...A) {
      if (!this._callbacks) return [];
      let K = [],
        q = this._callbacks.slice(0),
        Y = this._contexts.slice(0);
      for (let z = 0, w = q.length; z < w; z++) try {
        K.push(q[z].apply(Y[z], A));
      } catch (H) {
        (0, TBY.default)().console.error(H);
      }
      return K;
    }
    isEmpty() {
      return !this._callbacks || this._callbacks.length === 0;
    }
    dispose() {
      this._callbacks = void 0, this._contexts = void 0;
    }
  }
  class RG1 {
    constructor(A) {
      this._options = A;
    }
    get event() {
      if (!this._event) this._event = (A, K, q) => {
        if (!this._callbacks) this._callbacks = new rN7();
        if (this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty()) this._options.onFirstListenerAdd(this);
        this._callbacks.add(A, K);
        let Y = {
          dispose: () => {
            if (!this._callbacks) return;
            if (this._callbacks.remove(A, K), Y.dispose = RG1._noop, this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty()) this._options.onLastListenerRemove(this);
          }
        };
        if (Array.isArray(q)) q.push(Y);
        return Y;
      };
      return this._event;
    }
    fire(A) {
      if (this._callbacks) this._callbacks.invoke.call(this._callbacks, A);
    }
    dispose() {
      if (this._callbacks) this._callbacks.dispose(), this._callbacks = void 0;
    }
  }
  oN7.Emitter = RG1;
  RG1._noop = function () {};
});

// Register to shared state
__$.hWA = hWA;
