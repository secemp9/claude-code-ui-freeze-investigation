// Module: dxA
// Dependencies: UxA, g37, eU

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dxA = v((How, d37) => {
  var pxA = CA("zlib"),
    F37 = __$.UxA(),
    XwY = __$.g37(),
    {
      kStatusCode: Q37
    } = __$.eU(),
    $wY = Buffer[Symbol.species],
    _wY = Buffer.from([0, 0, 255, 255]),
    fO1 = Symbol("permessage-deflate"),
    Ap = Symbol("total-length"),
    bGA = Symbol("callback"),
    Ka = Symbol("buffers"),
    xGA = Symbol("error"),
    VO1;
  class U37 {
    constructor(A, K, q) {
      if (this._maxPayload = q | 0, this._options = A || {}, this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024, this._isServer = !!K, this._deflate = null, this._inflate = null, this.params = null, !VO1) {
        let Y = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
        VO1 = new XwY(Y);
      }
    }
    static get extensionName() {
      return "permessage-deflate";
    }
    offer() {
      let A = {};
      if (this._options.serverNoContextTakeover) A.server_no_context_takeover = !0;
      if (this._options.clientNoContextTakeover) A.client_no_context_takeover = !0;
      if (this._options.serverMaxWindowBits) A.server_max_window_bits = this._options.serverMaxWindowBits;
      if (this._options.clientMaxWindowBits) A.client_max_window_bits = this._options.clientMaxWindowBits;else if (this._options.clientMaxWindowBits == null) A.client_max_window_bits = !0;
      return A;
    }
    accept(A) {
      return A = this.normalizeParams(A), this.params = this._isServer ? this.acceptAsServer(A) : this.acceptAsClient(A), this.params;
    }
    cleanup() {
      if (this._inflate) this._inflate.close(), this._inflate = null;
      if (this._deflate) {
        let A = this._deflate[bGA];
        if (this._deflate.close(), this._deflate = null, A) A(Error("The deflate stream was closed while data was being processed"));
      }
    }
    acceptAsServer(A) {
      let K = this._options,
        q = A.find(Y => {
          if (K.serverNoContextTakeover === !1 && Y.server_no_context_takeover || Y.server_max_window_bits && (K.serverMaxWindowBits === !1 || typeof K.serverMaxWindowBits === "number" && K.serverMaxWindowBits > Y.server_max_window_bits) || typeof K.clientMaxWindowBits === "number" && !Y.client_max_window_bits) return !1;
          return !0;
        });
      if (!q) throw Error("None of the extension offers can be accepted");
      if (K.serverNoContextTakeover) q.server_no_context_takeover = !0;
      if (K.clientNoContextTakeover) q.client_no_context_takeover = !0;
      if (typeof K.serverMaxWindowBits === "number") q.server_max_window_bits = K.serverMaxWindowBits;
      if (typeof K.clientMaxWindowBits === "number") q.client_max_window_bits = K.clientMaxWindowBits;else if (q.client_max_window_bits === !0 || K.clientMaxWindowBits === !1) delete q.client_max_window_bits;
      return q;
    }
    acceptAsClient(A) {
      let K = A[0];
      if (this._options.clientNoContextTakeover === !1 && K.client_no_context_takeover) throw Error('Unexpected parameter "client_no_context_takeover"');
      if (!K.client_max_window_bits) {
        if (typeof this._options.clientMaxWindowBits === "number") K.client_max_window_bits = this._options.clientMaxWindowBits;
      } else if (this._options.clientMaxWindowBits === !1 || typeof this._options.clientMaxWindowBits === "number" && K.client_max_window_bits > this._options.clientMaxWindowBits) throw Error('Unexpected or invalid parameter "client_max_window_bits"');
      return K;
    }
    normalizeParams(A) {
      return A.forEach(K => {
        Object.keys(K).forEach(q => {
          let Y = K[q];
          if (Y.length > 1) throw Error(`Parameter "${q}" must have only a single value`);
          if (Y = Y[0], q === "client_max_window_bits") {
            if (Y !== !0) {
              let z = +Y;
              if (!Number.isInteger(z) || z < 8 || z > 15) throw TypeError(`Invalid value for parameter "${q}": ${Y}`);
              Y = z;
            } else if (!this._isServer) throw TypeError(`Invalid value for parameter "${q}": ${Y}`);
          } else if (q === "server_max_window_bits") {
            let z = +Y;
            if (!Number.isInteger(z) || z < 8 || z > 15) throw TypeError(`Invalid value for parameter "${q}": ${Y}`);
            Y = z;
          } else if (q === "client_no_context_takeover" || q === "server_no_context_takeover") {
            if (Y !== !0) throw TypeError(`Invalid value for parameter "${q}": ${Y}`);
          } else throw Error(`Unknown parameter "${q}"`);
          K[q] = Y;
        });
      }), A;
    }
    decompress(A, K, q) {
      VO1.add(Y => {
        this._decompress(A, K, (z, w) => {
          Y(), q(z, w);
        });
      });
    }
    compress(A, K, q) {
      VO1.add(Y => {
        this._compress(A, K, (z, w) => {
          Y(), q(z, w);
        });
      });
    }
    _decompress(A, K, q) {
      let Y = this._isServer ? "client" : "server";
      if (!this._inflate) {
        let z = `${Y}_max_window_bits`,
          w = typeof this.params[z] !== "number" ? pxA.Z_DEFAULT_WINDOWBITS : this.params[z];
        this._inflate = pxA.createInflateRaw({
          ...this._options.zlibInflateOptions,
          windowBits: w
        }), this._inflate[fO1] = this, this._inflate[Ap] = 0, this._inflate[Ka] = [], this._inflate.on("error", ZwY), this._inflate.on("data", p37);
      }
      if (this._inflate[bGA] = q, this._inflate.write(A), K) this._inflate.write(_wY);
      this._inflate.flush(() => {
        let z = this._inflate[xGA];
        if (z) {
          this._inflate.close(), this._inflate = null, q(z);
          return;
        }
        let w = F37.concat(this._inflate[Ka], this._inflate[Ap]);
        if (this._inflate._readableState.endEmitted) this._inflate.close(), this._inflate = null;else if (this._inflate[Ap] = 0, this._inflate[Ka] = [], K && this.params[`${Y}_no_context_takeover`]) this._inflate.reset();
        q(null, w);
      });
    }
    _compress(A, K, q) {
      let Y = this._isServer ? "server" : "client";
      if (!this._deflate) {
        let z = `${Y}_max_window_bits`,
          w = typeof this.params[z] !== "number" ? pxA.Z_DEFAULT_WINDOWBITS : this.params[z];
        this._deflate = pxA.createDeflateRaw({
          ...this._options.zlibDeflateOptions,
          windowBits: w
        }), this._deflate[Ap] = 0, this._deflate[Ka] = [], this._deflate.on("data", GwY);
      }
      this._deflate[bGA] = q, this._deflate.write(A), this._deflate.flush(pxA.Z_SYNC_FLUSH, () => {
        if (!this._deflate) return;
        let z = F37.concat(this._deflate[Ka], this._deflate[Ap]);
        if (K) z = new $wY(z.buffer, z.byteOffset, z.length - 4);
        if (this._deflate[bGA] = null, this._deflate[Ap] = 0, this._deflate[Ka] = [], K && this.params[`${Y}_no_context_takeover`]) this._deflate.reset();
        q(null, z);
      });
    }
  }
  d37.exports = U37;
  function GwY(A) {
    this[Ka].push(A), this[Ap] += A.length;
  }
  function p37(A) {
    if (this[Ap] += A.length, this[fO1]._maxPayload < 1 || this[Ap] <= this[fO1]._maxPayload) {
      this[Ka].push(A);
      return;
    }
    this[xGA] = RangeError("Max payload size exceeded"), this[xGA].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH", this[xGA][Q37] = 1009, this.removeListener("data", p37), this.reset();
  }
  function ZwY(A) {
    if (this[fO1]._inflate = null, this[xGA]) {
      this[bGA](this[xGA]);
      return;
    }
    A[Q37] = 1007, this[bGA](A);
  }
});

// Register to shared state
__$.dxA = dxA;
