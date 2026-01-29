// Module: WB8
// Dependencies: $B8, ii

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var WB8 = v(GB8 => {
  Object.defineProperty(GB8, "__esModule", {
    value: !0
  });
  GB8.headStream = void 0;
  var O_5 = CA("stream"),
    X_5 = __$.$B8(),
    $_5 = __$.ii(),
    __5 = (A, K) => {
      if ((0, $_5.isReadableStream)(A)) return (0, X_5.headStream)(A, K);
      return new Promise((q, Y) => {
        let z = new _B8();
        z.limit = K, A.pipe(z), A.on("error", w => {
          z.end(), Y(w);
        }), z.on("error", Y), z.on("finish", function () {
          let w = new Uint8Array(Buffer.concat(this.buffers));
          q(w);
        });
      });
    };
  GB8.headStream = __5;
  class _B8 extends O_5.Writable {
    buffers = [];
    limit = 1 / 0;
    bytesBuffered = 0;
    _write(A, K, q) {
      if (this.buffers.push(A), this.bytesBuffered += A.byteLength ?? 0, this.bytesBuffered >= this.limit) {
        let Y = this.bytesBuffered - this.limit,
          z = this.buffers[this.buffers.length - 1];
        this.buffers[this.buffers.length - 1] = z.subarray(0, z.byteLength - Y), this.emit("finish");
      }
      q();
    }
  }
});

// Register to shared state
__$.WB8 = WB8;
