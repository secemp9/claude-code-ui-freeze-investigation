// Module: J97
// Dependencies: eU

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var J97 = v((_ow, H97) => {
  var {
      kForOnEventAttribute: cxA,
      kListener: $G6
    } = __$.eU(),
    e37 = Symbol("kCode"),
    A97 = Symbol("kData"),
    K97 = Symbol("kError"),
    q97 = Symbol("kMessage"),
    Y97 = Symbol("kReason"),
    gGA = Symbol("kTarget"),
    z97 = Symbol("kType"),
    w97 = Symbol("kWasClean");
  class Ya {
    constructor(A) {
      this[gGA] = null, this[z97] = A;
    }
    get target() {
      return this[gGA];
    }
    get type() {
      return this[z97];
    }
  }
  Object.defineProperty(Ya.prototype, "target", {
    enumerable: !0
  });
  Object.defineProperty(Ya.prototype, "type", {
    enumerable: !0
  });
  class FGA extends Ya {
    constructor(A, K = {}) {
      super(A);
      this[e37] = K.code === void 0 ? 0 : K.code, this[Y97] = K.reason === void 0 ? "" : K.reason, this[w97] = K.wasClean === void 0 ? !1 : K.wasClean;
    }
    get code() {
      return this[e37];
    }
    get reason() {
      return this[Y97];
    }
    get wasClean() {
      return this[w97];
    }
  }
  Object.defineProperty(FGA.prototype, "code", {
    enumerable: !0
  });
  Object.defineProperty(FGA.prototype, "reason", {
    enumerable: !0
  });
  Object.defineProperty(FGA.prototype, "wasClean", {
    enumerable: !0
  });
  class lxA extends Ya {
    constructor(A, K = {}) {
      super(A);
      this[K97] = K.error === void 0 ? null : K.error, this[q97] = K.message === void 0 ? "" : K.message;
    }
    get error() {
      return this[K97];
    }
    get message() {
      return this[q97];
    }
  }
  Object.defineProperty(lxA.prototype, "error", {
    enumerable: !0
  });
  Object.defineProperty(lxA.prototype, "message", {
    enumerable: !0
  });
  class EO1 extends Ya {
    constructor(A, K = {}) {
      super(A);
      this[A97] = K.data === void 0 ? null : K.data;
    }
    get data() {
      return this[A97];
    }
  }
  Object.defineProperty(EO1.prototype, "data", {
    enumerable: !0
  });
  var xwY = {
    addEventListener(A, K, q = {}) {
      for (let z of this.listeners(A)) if (!q[cxA] && z[$G6] === K && !z[cxA]) return;
      let Y;
      if (A === "message") Y = function (w, H) {
        let J = new EO1("message", {
          data: H ? w : w.toString()
        });
        J[gGA] = this, vO1(K, this, J);
      };else if (A === "close") Y = function (w, H) {
        let J = new FGA("close", {
          code: w,
          reason: H.toString(),
          wasClean: this._closeFrameReceived && this._closeFrameSent
        });
        J[gGA] = this, vO1(K, this, J);
      };else if (A === "error") Y = function (w) {
        let H = new lxA("error", {
          error: w,
          message: w.message
        });
        H[gGA] = this, vO1(K, this, H);
      };else if (A === "open") Y = function () {
        let w = new Ya("open");
        w[gGA] = this, vO1(K, this, w);
      };else return;
      if (Y[cxA] = !!q[cxA], Y[$G6] = K, q.once) this.once(A, Y);else this.on(A, Y);
    },
    removeEventListener(A, K) {
      for (let q of this.listeners(A)) if (q[$G6] === K && !q[cxA]) {
        this.removeListener(A, q);
        break;
      }
    }
  };
  H97.exports = {
    CloseEvent: FGA,
    ErrorEvent: lxA,
    Event: Ya,
    EventTarget: xwY,
    MessageEvent: EO1
  };
  function vO1(A, K, q) {
    if (typeof A === "object" && A.handleEvent) A.handleEvent.call(A, q);else A.call(K, q);
  }
});

// Register to shared state
__$.J97 = J97;
