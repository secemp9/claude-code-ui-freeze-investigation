// Module: CT7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var CT7 = v(ET7 => {
  Object.defineProperty(ET7, "__esModule", {
    value: !0
  });
  ET7.AbstractMessageBuffer = void 0;
  var gBY = 13,
    FBY = 10,
    QBY = `\r
`;
  class vT7 {
    constructor(A = "utf-8") {
      this._encoding = A, this._chunks = [], this._totalLength = 0;
    }
    get encoding() {
      return this._encoding;
    }
    append(A) {
      let K = typeof A === "string" ? this.fromString(A, this._encoding) : A;
      this._chunks.push(K), this._totalLength += K.byteLength;
    }
    tryReadHeaders(A = !1) {
      if (this._chunks.length === 0) return;
      let K = 0,
        q = 0,
        Y = 0,
        z = 0;
      A: while (q < this._chunks.length) {
        let O = this._chunks[q];
        Y = 0;
        K: while (Y < O.length) {
          switch (O[Y]) {
            case gBY:
              switch (K) {
                case 0:
                  K = 1;
                  break;
                case 2:
                  K = 3;
                  break;
                default:
                  K = 0;
              }
              break;
            case FBY:
              switch (K) {
                case 1:
                  K = 2;
                  break;
                case 3:
                  K = 4, Y++;
                  break A;
                default:
                  K = 0;
              }
              break;
            default:
              K = 0;
          }
          Y++;
        }
        z += O.byteLength, q++;
      }
      if (K !== 4) return;
      let w = this._read(z + Y),
        H = new Map(),
        J = this.toString(w, "ascii").split(QBY);
      if (J.length < 2) return H;
      for (let O = 0; O < J.length - 2; O++) {
        let X = J[O],
          $ = X.indexOf(":");
        if ($ === -1) throw Error(`Message header must separate key and value using ':'
${X}`);
        let _ = X.substr(0, $),
          G = X.substr($ + 1).trim();
        H.set(A ? _.toLowerCase() : _, G);
      }
      return H;
    }
    tryReadBody(A) {
      if (this._totalLength < A) return;
      return this._read(A);
    }
    get numberOfBytes() {
      return this._totalLength;
    }
    _read(A) {
      if (A === 0) return this.emptyBuffer();
      if (A > this._totalLength) throw Error("Cannot read so many bytes!");
      if (this._chunks[0].byteLength === A) {
        let z = this._chunks[0];
        return this._chunks.shift(), this._totalLength -= A, this.asNative(z);
      }
      if (this._chunks[0].byteLength > A) {
        let z = this._chunks[0],
          w = this.asNative(z, A);
        return this._chunks[0] = z.slice(A), this._totalLength -= A, w;
      }
      let K = this.allocNative(A),
        q = 0,
        Y = 0;
      while (A > 0) {
        let z = this._chunks[Y];
        if (z.byteLength > A) {
          let w = z.slice(0, A);
          K.set(w, q), q += A, this._chunks[Y] = z.slice(A), this._totalLength -= A, A -= A;
        } else K.set(z, q), q += z.byteLength, this._chunks.shift(), this._totalLength -= z.byteLength, A -= z.byteLength;
      }
      return K;
    }
  }
  ET7.AbstractMessageBuffer = vT7;
});

// Register to shared state
__$.CT7 = CT7;
