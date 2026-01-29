// Module: JG6
// Dependencies: dxA, eU, UxA, uGA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var JG6 = v((Oow, o37) => {
  var {
      Writable: PwY
    } = CA("stream"),
    l37 = __$.dxA(),
    {
      BINARY_TYPES: VwY,
      EMPTY_BUFFER: i37,
      kStatusCode: fwY,
      kWebSocket: NwY
    } = __$.eU(),
    {
      concat: HG6,
      toArrayBuffer: TwY,
      unmask: vwY
    } = __$.UxA(),
    {
      isValidStatusCode: EwY,
      isValidUTF8: n37
    } = __$.uGA(),
    TO1 = Buffer[Symbol.species];
  class r37 extends PwY {
    constructor(A = {}) {
      super();
      this._allowSynchronousEvents = A.allowSynchronousEvents !== void 0 ? A.allowSynchronousEvents : !0, this._binaryType = A.binaryType || VwY[0], this._extensions = A.extensions || {}, this._isServer = !!A.isServer, this._maxPayload = A.maxPayload | 0, this._skipUTF8Validation = !!A.skipUTF8Validation, this[NwY] = void 0, this._bufferedBytes = 0, this._buffers = [], this._compressed = !1, this._payloadLength = 0, this._mask = void 0, this._fragmented = 0, this._masked = !1, this._fin = !1, this._opcode = 0, this._totalPayloadLength = 0, this._messageLength = 0, this._fragments = [], this._errored = !1, this._loop = !1, this._state = 0;
    }
    _write(A, K, q) {
      if (this._opcode === 8 && this._state == 0) return q();
      this._bufferedBytes += A.length, this._buffers.push(A), this.startLoop(q);
    }
    consume(A) {
      if (this._bufferedBytes -= A, A === this._buffers[0].length) return this._buffers.shift();
      if (A < this._buffers[0].length) {
        let q = this._buffers[0];
        return this._buffers[0] = new TO1(q.buffer, q.byteOffset + A, q.length - A), new TO1(q.buffer, q.byteOffset, A);
      }
      let K = Buffer.allocUnsafe(A);
      do {
        let q = this._buffers[0],
          Y = K.length - A;
        if (A >= q.length) K.set(this._buffers.shift(), Y);else K.set(new Uint8Array(q.buffer, q.byteOffset, A), Y), this._buffers[0] = new TO1(q.buffer, q.byteOffset + A, q.length - A);
        A -= q.length;
      } while (A > 0);
      return K;
    }
    startLoop(A) {
      this._loop = !0;
      do switch (this._state) {
        case 0:
          this.getInfo(A);
          break;
        case 1:
          this.getPayloadLength16(A);
          break;
        case 2:
          this.getPayloadLength64(A);
          break;
        case 3:
          this.getMask();
          break;
        case 4:
          this.getData(A);
          break;
        case 5:
        case 6:
          this._loop = !1;
          return;
      } while (this._loop);
      if (!this._errored) A();
    }
    getInfo(A) {
      if (this._bufferedBytes < 2) {
        this._loop = !1;
        return;
      }
      let K = this.consume(2);
      if ((K[0] & 48) !== 0) {
        let Y = this.createError(RangeError, "RSV2 and RSV3 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_2_3");
        A(Y);
        return;
      }
      let q = (K[0] & 64) === 64;
      if (q && !this._extensions[l37.extensionName]) {
        let Y = this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1");
        A(Y);
        return;
      }
      if (this._fin = (K[0] & 128) === 128, this._opcode = K[0] & 15, this._payloadLength = K[1] & 127, this._opcode === 0) {
        if (q) {
          let Y = this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1");
          A(Y);
          return;
        }
        if (!this._fragmented) {
          let Y = this.createError(RangeError, "invalid opcode 0", !0, 1002, "WS_ERR_INVALID_OPCODE");
          A(Y);
          return;
        }
        this._opcode = this._fragmented;
      } else if (this._opcode === 1 || this._opcode === 2) {
        if (this._fragmented) {
          let Y = this.createError(RangeError, `invalid opcode ${this._opcode}`, !0, 1002, "WS_ERR_INVALID_OPCODE");
          A(Y);
          return;
        }
        this._compressed = q;
      } else if (this._opcode > 7 && this._opcode < 11) {
        if (!this._fin) {
          let Y = this.createError(RangeError, "FIN must be set", !0, 1002, "WS_ERR_EXPECTED_FIN");
          A(Y);
          return;
        }
        if (q) {
          let Y = this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1");
          A(Y);
          return;
        }
        if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
          let Y = this.createError(RangeError, `invalid payload length ${this._payloadLength}`, !0, 1002, "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH");
          A(Y);
          return;
        }
      } else {
        let Y = this.createError(RangeError, `invalid opcode ${this._opcode}`, !0, 1002, "WS_ERR_INVALID_OPCODE");
        A(Y);
        return;
      }
      if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
      if (this._masked = (K[1] & 128) === 128, this._isServer) {
        if (!this._masked) {
          let Y = this.createError(RangeError, "MASK must be set", !0, 1002, "WS_ERR_EXPECTED_MASK");
          A(Y);
          return;
        }
      } else if (this._masked) {
        let Y = this.createError(RangeError, "MASK must be clear", !0, 1002, "WS_ERR_UNEXPECTED_MASK");
        A(Y);
        return;
      }
      if (this._payloadLength === 126) this._state = 1;else if (this._payloadLength === 127) this._state = 2;else this.haveLength(A);
    }
    getPayloadLength16(A) {
      if (this._bufferedBytes < 2) {
        this._loop = !1;
        return;
      }
      this._payloadLength = this.consume(2).readUInt16BE(0), this.haveLength(A);
    }
    getPayloadLength64(A) {
      if (this._bufferedBytes < 8) {
        this._loop = !1;
        return;
      }
      let K = this.consume(8),
        q = K.readUInt32BE(0);
      if (q > Math.pow(2, 21) - 1) {
        let Y = this.createError(RangeError, "Unsupported WebSocket frame: payload length > 2^53 - 1", !1, 1009, "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH");
        A(Y);
        return;
      }
      this._payloadLength = q * Math.pow(2, 32) + K.readUInt32BE(4), this.haveLength(A);
    }
    haveLength(A) {
      if (this._payloadLength && this._opcode < 8) {
        if (this._totalPayloadLength += this._payloadLength, this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
          let K = this.createError(RangeError, "Max payload size exceeded", !1, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
          A(K);
          return;
        }
      }
      if (this._masked) this._state = 3;else this._state = 4;
    }
    getMask() {
      if (this._bufferedBytes < 4) {
        this._loop = !1;
        return;
      }
      this._mask = this.consume(4), this._state = 4;
    }
    getData(A) {
      let K = i37;
      if (this._payloadLength) {
        if (this._bufferedBytes < this._payloadLength) {
          this._loop = !1;
          return;
        }
        if (K = this.consume(this._payloadLength), this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) vwY(K, this._mask);
      }
      if (this._opcode > 7) {
        this.controlMessage(K, A);
        return;
      }
      if (this._compressed) {
        this._state = 5, this.decompress(K, A);
        return;
      }
      if (K.length) this._messageLength = this._totalPayloadLength, this._fragments.push(K);
      this.dataMessage(A);
    }
    decompress(A, K) {
      this._extensions[l37.extensionName].decompress(A, this._fin, (Y, z) => {
        if (Y) return K(Y);
        if (z.length) {
          if (this._messageLength += z.length, this._messageLength > this._maxPayload && this._maxPayload > 0) {
            let w = this.createError(RangeError, "Max payload size exceeded", !1, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
            K(w);
            return;
          }
          this._fragments.push(z);
        }
        if (this.dataMessage(K), this._state === 0) this.startLoop(K);
      });
    }
    dataMessage(A) {
      if (!this._fin) {
        this._state = 0;
        return;
      }
      let K = this._messageLength,
        q = this._fragments;
      if (this._totalPayloadLength = 0, this._messageLength = 0, this._fragmented = 0, this._fragments = [], this._opcode === 2) {
        let Y;
        if (this._binaryType === "nodebuffer") Y = HG6(q, K);else if (this._binaryType === "arraybuffer") Y = TwY(HG6(q, K));else if (this._binaryType === "blob") Y = new Blob(q);else Y = q;
        if (this._allowSynchronousEvents) this.emit("message", Y, !0), this._state = 0;else this._state = 6, setImmediate(() => {
          this.emit("message", Y, !0), this._state = 0, this.startLoop(A);
        });
      } else {
        let Y = HG6(q, K);
        if (!this._skipUTF8Validation && !n37(Y)) {
          let z = this.createError(Error, "invalid UTF-8 sequence", !0, 1007, "WS_ERR_INVALID_UTF8");
          A(z);
          return;
        }
        if (this._state === 5 || this._allowSynchronousEvents) this.emit("message", Y, !1), this._state = 0;else this._state = 6, setImmediate(() => {
          this.emit("message", Y, !1), this._state = 0, this.startLoop(A);
        });
      }
    }
    controlMessage(A, K) {
      if (this._opcode === 8) {
        if (A.length === 0) this._loop = !1, this.emit("conclude", 1005, i37), this.end();else {
          let q = A.readUInt16BE(0);
          if (!EwY(q)) {
            let z = this.createError(RangeError, `invalid status code ${q}`, !0, 1002, "WS_ERR_INVALID_CLOSE_CODE");
            K(z);
            return;
          }
          let Y = new TO1(A.buffer, A.byteOffset + 2, A.length - 2);
          if (!this._skipUTF8Validation && !n37(Y)) {
            let z = this.createError(Error, "invalid UTF-8 sequence", !0, 1007, "WS_ERR_INVALID_UTF8");
            K(z);
            return;
          }
          this._loop = !1, this.emit("conclude", q, Y), this.end();
        }
        this._state = 0;
        return;
      }
      if (this._allowSynchronousEvents) this.emit(this._opcode === 9 ? "ping" : "pong", A), this._state = 0;else this._state = 6, setImmediate(() => {
        this.emit(this._opcode === 9 ? "ping" : "pong", A), this._state = 0, this.startLoop(K);
      });
    }
    createError(A, K, q, Y, z) {
      this._loop = !1, this._errored = !0;
      let w = new A(q ? `Invalid WebSocket frame: ${K}` : K);
      return Error.captureStackTrace(w, this.createError), w.code = z, w[fwY] = Y, w;
    }
  }
  o37.exports = r37;
});

// Register to shared state
__$.JG6 = JG6;
