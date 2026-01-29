// Module: kw4
// Dependencies: r8A, nRA, Y0A, aRA, zq1, V46, Zw4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kw4 = v((v8w, Ew4) => {
  var {
      Writable: yn3
    } = CA("node:stream"),
    In3 = CA("node:assert"),
    {
      parserStates: uV,
      opcodes: c0A,
      states: Sn3,
      emptyBuffer: Ww4,
      sentCloseFrameState: Dw4
    } = __$.r8A(),
    {
      kReadyState: hn3,
      kSentClose: jw4,
      kResponse: Mw4,
      kReceivedClose: Pw4
    } = __$.nRA(),
    {
      channels: Xq1
    } = __$.Y0A(),
    {
      isValidStatusCode: bn3,
      isValidOpcode: xn3,
      failWebsocketConnection: Ek,
      websocketMessageReceived: Vw4,
      utf8Decode: un3,
      isControlFrame: fw4,
      isTextBinaryFrame: f46,
      isContinuationFrame: Bn3
    } = __$.aRA(),
    {
      WebsocketFrameSend: Nw4
    } = __$.zq1(),
    {
      closeWebSocketConnection: Tw4
    } = __$.V46(),
    {
      PerMessageDeflate: mn3
    } = __$.Zw4();
  class vw4 extends yn3 {
    #A = [];
    #K = 0;
    #q = !1;
    #z = uV.INFO;
    #Y = {};
    #J = [];
    #w;
    constructor(A, K) {
      super();
      if (this.ws = A, this.#w = K == null ? new Map() : K, this.#w.has("permessage-deflate")) this.#w.set("permessage-deflate", new mn3(K));
    }
    _write(A, K, q) {
      this.#A.push(A), this.#K += A.length, this.#q = !0, this.run(q);
    }
    run(A) {
      while (this.#q) if (this.#z === uV.INFO) {
        if (this.#K < 2) return A();
        let K = this.consume(2),
          q = (K[0] & 128) !== 0,
          Y = K[0] & 15,
          z = (K[1] & 128) === 128,
          w = !q && Y !== c0A.CONTINUATION,
          H = K[1] & 127,
          J = K[0] & 64,
          O = K[0] & 32,
          X = K[0] & 16;
        if (!xn3(Y)) return Ek(this.ws, "Invalid opcode received"), A();
        if (z) return Ek(this.ws, "Frame cannot be masked"), A();
        if (J !== 0 && !this.#w.has("permessage-deflate")) {
          Ek(this.ws, "Expected RSV1 to be clear.");
          return;
        }
        if (O !== 0 || X !== 0) {
          Ek(this.ws, "RSV1, RSV2, RSV3 must be clear");
          return;
        }
        if (w && !f46(Y)) {
          Ek(this.ws, "Invalid frame type was fragmented.");
          return;
        }
        if (f46(Y) && this.#J.length > 0) {
          Ek(this.ws, "Expected continuation frame");
          return;
        }
        if (this.#Y.fragmented && w) {
          Ek(this.ws, "Fragmented frame exceeded 125 bytes.");
          return;
        }
        if ((H > 125 || w) && fw4(Y)) {
          Ek(this.ws, "Control frame either too large or fragmented");
          return;
        }
        if (Bn3(Y) && this.#J.length === 0 && !this.#Y.compressed) {
          Ek(this.ws, "Unexpected continuation frame");
          return;
        }
        if (H <= 125) this.#Y.payloadLength = H, this.#z = uV.READ_DATA;else if (H === 126) this.#z = uV.PAYLOADLENGTH_16;else if (H === 127) this.#z = uV.PAYLOADLENGTH_64;
        if (f46(Y)) this.#Y.binaryType = Y, this.#Y.compressed = J !== 0;
        this.#Y.opcode = Y, this.#Y.masked = z, this.#Y.fin = q, this.#Y.fragmented = w;
      } else if (this.#z === uV.PAYLOADLENGTH_16) {
        if (this.#K < 2) return A();
        let K = this.consume(2);
        this.#Y.payloadLength = K.readUInt16BE(0), this.#z = uV.READ_DATA;
      } else if (this.#z === uV.PAYLOADLENGTH_64) {
        if (this.#K < 8) return A();
        let K = this.consume(8),
          q = K.readUInt32BE(0);
        if (q > 2147483647) {
          Ek(this.ws, "Received payload length > 2^31 bytes.");
          return;
        }
        let Y = K.readUInt32BE(4);
        this.#Y.payloadLength = (q << 8) + Y, this.#z = uV.READ_DATA;
      } else if (this.#z === uV.READ_DATA) {
        if (this.#K < this.#Y.payloadLength) return A();
        let K = this.consume(this.#Y.payloadLength);
        if (fw4(this.#Y.opcode)) this.#q = this.parseControlFrame(K), this.#z = uV.INFO;else if (!this.#Y.compressed) {
          if (this.#J.push(K), !this.#Y.fragmented && this.#Y.fin) {
            let q = Buffer.concat(this.#J);
            Vw4(this.ws, this.#Y.binaryType, q), this.#J.length = 0;
          }
          this.#z = uV.INFO;
        } else {
          this.#w.get("permessage-deflate").decompress(K, this.#Y.fin, (q, Y) => {
            if (q) {
              Tw4(this.ws, 1007, q.message, q.message.length);
              return;
            }
            if (this.#J.push(Y), !this.#Y.fin) {
              this.#z = uV.INFO, this.#q = !0, this.run(A);
              return;
            }
            Vw4(this.ws, this.#Y.binaryType, Buffer.concat(this.#J)), this.#q = !0, this.#z = uV.INFO, this.#J.length = 0, this.run(A);
          }), this.#q = !1;
          break;
        }
      }
    }
    consume(A) {
      if (A > this.#K) throw Error("Called consume() before buffers satiated.");else if (A === 0) return Ww4;
      if (this.#A[0].length === A) return this.#K -= this.#A[0].length, this.#A.shift();
      let K = Buffer.allocUnsafe(A),
        q = 0;
      while (q !== A) {
        let Y = this.#A[0],
          {
            length: z
          } = Y;
        if (z + q === A) {
          K.set(this.#A.shift(), q);
          break;
        } else if (z + q > A) {
          K.set(Y.subarray(0, A - q), q), this.#A[0] = Y.subarray(A - q);
          break;
        } else K.set(this.#A.shift(), q), q += Y.length;
      }
      return this.#K -= A, K;
    }
    parseCloseBody(A) {
      In3(A.length !== 1);
      let K;
      if (A.length >= 2) K = A.readUInt16BE(0);
      if (K !== void 0 && !bn3(K)) return {
        code: 1002,
        reason: "Invalid status code",
        error: !0
      };
      let q = A.subarray(2);
      if (q[0] === 239 && q[1] === 187 && q[2] === 191) q = q.subarray(3);
      try {
        q = un3(q);
      } catch {
        return {
          code: 1007,
          reason: "Invalid UTF-8",
          error: !0
        };
      }
      return {
        code: K,
        reason: q,
        error: !1
      };
    }
    parseControlFrame(A) {
      let {
        opcode: K,
        payloadLength: q
      } = this.#Y;
      if (K === c0A.CLOSE) {
        if (q === 1) return Ek(this.ws, "Received close frame with a 1-byte body."), !1;
        if (this.#Y.closeInfo = this.parseCloseBody(A), this.#Y.closeInfo.error) {
          let {
            code: Y,
            reason: z
          } = this.#Y.closeInfo;
          return Tw4(this.ws, Y, z, z.length), Ek(this.ws, z), !1;
        }
        if (this.ws[jw4] !== Dw4.SENT) {
          let Y = Ww4;
          if (this.#Y.closeInfo.code) Y = Buffer.allocUnsafe(2), Y.writeUInt16BE(this.#Y.closeInfo.code, 0);
          let z = new Nw4(Y);
          this.ws[Mw4].socket.write(z.createFrame(c0A.CLOSE), w => {
            if (!w) this.ws[jw4] = Dw4.SENT;
          });
        }
        return this.ws[hn3] = Sn3.CLOSING, this.ws[Pw4] = !0, !1;
      } else if (K === c0A.PING) {
        if (!this.ws[Pw4]) {
          let Y = new Nw4(A);
          if (this.ws[Mw4].socket.write(Y.createFrame(c0A.PONG)), Xq1.ping.hasSubscribers) Xq1.ping.publish({
            payload: A
          });
        }
      } else if (K === c0A.PONG) {
        if (Xq1.pong.hasSubscribers) Xq1.pong.publish({
          payload: A
        });
      }
      return !0;
    }
    get closingInfo() {
      return this.#Y.closeInfo;
    }
  }
  Ew4.exports = {
    ByteParser: vw4
  };
});

// Register to shared state
__$.kw4 = kw4;
