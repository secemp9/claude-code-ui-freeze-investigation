// Module: A24
// Dependencies: j9, _2, hK1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var A24 = v((a6w, eY4) => {
  var rd3 = __$.j9(),
    {
      InvalidArgumentError: od3,
      RequestAbortedError: ad3
    } = __$._2(),
    sd3 = __$.hK1();
  class tY4 extends sd3 {
    #A = 1048576;
    #K = null;
    #q = !1;
    #z = !1;
    #Y = 0;
    #J = null;
    #w = null;
    constructor({
      maxSize: A
    }, K) {
      super(K);
      if (A != null && (!Number.isFinite(A) || A < 1)) throw new od3("maxSize must be a number greater than 0");
      this.#A = A ?? this.#A, this.#w = K;
    }
    onConnect(A) {
      this.#K = A, this.#w.onConnect(this.#X.bind(this));
    }
    #X(A) {
      this.#z = !0, this.#J = A;
    }
    onHeaders(A, K, q, Y) {
      let w = rd3.parseHeaders(K)["content-length"];
      if (w != null && w > this.#A) throw new ad3(`Response size (${w}) larger than maxSize (${this.#A})`);
      if (this.#z) return !0;
      return this.#w.onHeaders(A, K, q, Y);
    }
    onError(A) {
      if (this.#q) return;
      A = this.#J ?? A, this.#w.onError(A);
    }
    onData(A) {
      if (this.#Y = this.#Y + A.length, this.#Y >= this.#A) if (this.#q = !0, this.#z) this.#w.onError(this.#J);else this.#w.onComplete([]);
      return !0;
    }
    onComplete(A) {
      if (this.#q) return;
      if (this.#z) {
        this.#w.onError(this.reason);
        return;
      }
      this.#w.onComplete(A);
    }
  }
  function td3({
    maxSize: A
  } = {
    maxSize: 1048576
  }) {
    return K => {
      return function (Y, z) {
        let {
            dumpMaxSize: w = A
          } = Y,
          H = new tY4({
            maxSize: w
          }, z);
        return K(Y, H);
      };
    };
  }
  eY4.exports = td3;
});

// Register to shared state
__$.A24 = A24;
