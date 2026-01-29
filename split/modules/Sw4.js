// Module: Sw4
// Dependencies: zq1, r8A, z86

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Sw4 = v((E8w, Iw4) => {
  var {
      WebsocketFrameSend: gn3
    } = __$.zq1(),
    {
      opcodes: Cw4,
      sendHints: l0A
    } = __$.r8A(),
    Fn3 = __$.z86(),
    Lw4 = Buffer[Symbol.species];
  class yw4 {
    #A = new Fn3();
    #K = !1;
    #q;
    constructor(A) {
      this.#q = A;
    }
    add(A, K, q) {
      if (q !== l0A.blob) {
        let z = Rw4(A, q);
        if (!this.#K) this.#q.write(z, K);else {
          let w = {
            promise: null,
            callback: K,
            frame: z
          };
          this.#A.push(w);
        }
        return;
      }
      let Y = {
        promise: A.arrayBuffer().then(z => {
          Y.promise = null, Y.frame = Rw4(z, q);
        }),
        callback: K,
        frame: null
      };
      if (this.#A.push(Y), !this.#K) this.#z();
    }
    async #z() {
      this.#K = !0;
      let A = this.#A;
      while (!A.isEmpty()) {
        let K = A.shift();
        if (K.promise !== null) await K.promise;
        this.#q.write(K.frame, K.callback), K.callback = K.frame = null;
      }
      this.#K = !1;
    }
  }
  function Rw4(A, K) {
    return new gn3(Qn3(A, K)).createFrame(K === l0A.string ? Cw4.TEXT : Cw4.BINARY);
  }
  function Qn3(A, K) {
    switch (K) {
      case l0A.string:
        return Buffer.from(A);
      case l0A.arrayBuffer:
      case l0A.blob:
        return new Lw4(A);
      case l0A.typedArray:
        return new Lw4(A.buffer, A.byteOffset, A.byteLength);
    }
  }
  Iw4.exports = {
    SendQueue: yw4
  };
});

// Register to shared state
__$.Sw4 = Sw4;
