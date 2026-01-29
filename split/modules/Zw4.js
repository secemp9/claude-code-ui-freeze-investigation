// Module: Zw4
// Dependencies: aRA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Zw4 = v((T8w, Gw4) => {
  var {
      createInflateRaw: kn3,
      Z_DEFAULT_WINDOWBITS: Cn3
    } = CA("node:zlib"),
    {
      isValidClientWindowBits: Ln3
    } = __$.aRA(),
    Rn3 = Buffer.from([0, 0, 255, 255]),
    Jq1 = Symbol("kBuffer"),
    Oq1 = Symbol("kLength");
  class _w4 {
    #A;
    #K = {};
    constructor(A) {
      this.#K.serverNoContextTakeover = A.has("server_no_context_takeover"), this.#K.serverMaxWindowBits = A.get("server_max_window_bits");
    }
    decompress(A, K, q) {
      if (!this.#A) {
        let Y = Cn3;
        if (this.#K.serverMaxWindowBits) {
          if (!Ln3(this.#K.serverMaxWindowBits)) {
            q(Error("Invalid server_max_window_bits"));
            return;
          }
          Y = Number.parseInt(this.#K.serverMaxWindowBits);
        }
        this.#A = kn3({
          windowBits: Y
        }), this.#A[Jq1] = [], this.#A[Oq1] = 0, this.#A.on("data", z => {
          this.#A[Jq1].push(z), this.#A[Oq1] += z.length;
        }), this.#A.on("error", z => {
          this.#A = null, q(z);
        });
      }
      if (this.#A.write(A), K) this.#A.write(Rn3);
      this.#A.flush(() => {
        let Y = Buffer.concat(this.#A[Jq1], this.#A[Oq1]);
        this.#A[Jq1].length = 0, this.#A[Oq1] = 0, q(null, Y);
      });
    }
  }
  Gw4.exports = {
    PerMessageDeflate: _w4
  };
});

// Register to shared state
__$.Zw4 = Zw4;
