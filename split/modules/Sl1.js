// Module: Sl1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Sl1 = v(ou8 => {
  Object.defineProperty(ou8, "__esModule", {
    value: !0
  });
  ou8.ByteArrayCollector = void 0;
  class ru8 {
    allocByteArray;
    byteLength = 0;
    byteArrays = [];
    constructor(A) {
      this.allocByteArray = A;
    }
    push(A) {
      this.byteArrays.push(A), this.byteLength += A.byteLength;
    }
    flush() {
      if (this.byteArrays.length === 1) {
        let q = this.byteArrays[0];
        return this.reset(), q;
      }
      let A = this.allocByteArray(this.byteLength),
        K = 0;
      for (let q = 0; q < this.byteArrays.length; ++q) {
        let Y = this.byteArrays[q];
        A.set(Y, K), K += Y.byteLength;
      }
      return this.reset(), A;
    }
    reset() {
      this.byteArrays = [], this.byteLength = 0;
    }
  }
  ou8.ByteArrayCollector = ru8;
});

// Register to shared state
__$.Sl1 = Sl1;
