// Module: XG6
// Dependencies: dxA, eU, uGA, UxA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var XG6 = v(($ow, t37) => {
  var {
      Duplex: Xow
    } = CA("stream"),
    {
      randomFillSync: kwY
    } = CA("crypto"),
    a37 = __$.dxA(),
    {
      EMPTY_BUFFER: CwY,
      kWebSocket: LwY,
      NOOP: RwY
    } = __$.eU(),
    {
      isBlob: BGA,
      isValidStatusCode: ywY
    } = __$.uGA(),
    {
      mask: s37,
      toBuffer: tKA
    } = __$.UxA(),
    CC = Symbol("kByteLength"),
    IwY = Buffer.alloc(4),
    eKA,
    mGA = 8192,
    PI = 0,
    SwY = 1,
    hwY = 2;
  class qa {
    constructor(A, K, q) {
      if (this._extensions = K || {}, q) this._generateMask = q, this._maskBuffer = Buffer.alloc(4);
      this._socket = A, this._firstFragment = !0, this._compress = !1, this._bufferedBytes = 0, this._queue = [], this._state = PI, this.onerror = RwY, this[LwY] = void 0;
    }
    static frame(A, K) {
      let q,
        Y = !1,
        z = 2,
        w = !1;
      if (K.mask) {
        if (q = K.maskBuffer || IwY, K.generateMask) K.generateMask(q);else {
          if (mGA === 8192) {
            if (eKA === void 0) eKA = Buffer.alloc(8192);
            kwY(eKA, 0, 8192), mGA = 0;
          }
          q[0] = eKA[mGA++], q[1] = eKA[mGA++], q[2] = eKA[mGA++], q[3] = eKA[mGA++];
        }
        w = (q[0] | q[1] | q[2] | q[3]) === 0, z = 6;
      }
      let H;
      if (typeof A === "string") {
        if ((!K.mask || w) && K[CC] !== void 0) H = K[CC];else A = Buffer.from(A), H = A.length;
      } else H = A.length, Y = K.mask && K.readOnly && !w;
      let J = H;
      if (H >= 65536) z += 8, J = 127;else if (H > 125) z += 2, J = 126;
      let O = Buffer.allocUnsafe(Y ? H + z : z);
      if (O[0] = K.fin ? K.opcode | 128 : K.opcode, K.rsv1) O[0] |= 64;
      if (O[1] = J, J === 126) O.writeUInt16BE(H, 2);else if (J === 127) O[2] = O[3] = 0, O.writeUIntBE(H, 4, 6);
      if (!K.mask) return [O, A];
      if (O[1] |= 128, O[z - 4] = q[0], O[z - 3] = q[1], O[z - 2] = q[2], O[z - 1] = q[3], w) return [O, A];
      if (Y) return s37(A, q, O, z, H), [O];
      return s37(A, q, A, 0, H), [O, A];
    }
    close(A, K, q, Y) {
      let z;
      if (A === void 0) z = CwY;else if (typeof A !== "number" || !ywY(A)) throw TypeError("First argument must be a valid error code number");else if (K === void 0 || !K.length) z = Buffer.allocUnsafe(2), z.writeUInt16BE(A, 0);else {
        let H = Buffer.byteLength(K);
        if (H > 123) throw RangeError("The message must not be greater than 123 bytes");
        if (z = Buffer.allocUnsafe(2 + H), z.writeUInt16BE(A, 0), typeof K === "string") z.write(K, 2);else z.set(K, 2);
      }
      let w = {
        [CC]: z.length,
        fin: !0,
        generateMask: this._generateMask,
        mask: q,
        maskBuffer: this._maskBuffer,
        opcode: 8,
        readOnly: !1,
        rsv1: !1
      };
      if (this._state !== PI) this.enqueue([this.dispatch, z, !1, w, Y]);else this.sendFrame(qa.frame(z, w), Y);
    }
    ping(A, K, q) {
      let Y, z;
      if (typeof A === "string") Y = Buffer.byteLength(A), z = !1;else if (BGA(A)) Y = A.size, z = !1;else A = tKA(A), Y = A.length, z = tKA.readOnly;
      if (Y > 125) throw RangeError("The data size must not be greater than 125 bytes");
      let w = {
        [CC]: Y,
        fin: !0,
        generateMask: this._generateMask,
        mask: K,
        maskBuffer: this._maskBuffer,
        opcode: 9,
        readOnly: z,
        rsv1: !1
      };
      if (BGA(A)) {
        if (this._state !== PI) this.enqueue([this.getBlobData, A, !1, w, q]);else this.getBlobData(A, !1, w, q);
      } else if (this._state !== PI) this.enqueue([this.dispatch, A, !1, w, q]);else this.sendFrame(qa.frame(A, w), q);
    }
    pong(A, K, q) {
      let Y, z;
      if (typeof A === "string") Y = Buffer.byteLength(A), z = !1;else if (BGA(A)) Y = A.size, z = !1;else A = tKA(A), Y = A.length, z = tKA.readOnly;
      if (Y > 125) throw RangeError("The data size must not be greater than 125 bytes");
      let w = {
        [CC]: Y,
        fin: !0,
        generateMask: this._generateMask,
        mask: K,
        maskBuffer: this._maskBuffer,
        opcode: 10,
        readOnly: z,
        rsv1: !1
      };
      if (BGA(A)) {
        if (this._state !== PI) this.enqueue([this.getBlobData, A, !1, w, q]);else this.getBlobData(A, !1, w, q);
      } else if (this._state !== PI) this.enqueue([this.dispatch, A, !1, w, q]);else this.sendFrame(qa.frame(A, w), q);
    }
    send(A, K, q) {
      let Y = this._extensions[a37.extensionName],
        z = K.binary ? 2 : 1,
        w = K.compress,
        H,
        J;
      if (typeof A === "string") H = Buffer.byteLength(A), J = !1;else if (BGA(A)) H = A.size, J = !1;else A = tKA(A), H = A.length, J = tKA.readOnly;
      if (this._firstFragment) {
        if (this._firstFragment = !1, w && Y && Y.params[Y._isServer ? "server_no_context_takeover" : "client_no_context_takeover"]) w = H >= Y._threshold;
        this._compress = w;
      } else w = !1, z = 0;
      if (K.fin) this._firstFragment = !0;
      let O = {
        [CC]: H,
        fin: K.fin,
        generateMask: this._generateMask,
        mask: K.mask,
        maskBuffer: this._maskBuffer,
        opcode: z,
        readOnly: J,
        rsv1: w
      };
      if (BGA(A)) {
        if (this._state !== PI) this.enqueue([this.getBlobData, A, this._compress, O, q]);else this.getBlobData(A, this._compress, O, q);
      } else if (this._state !== PI) this.enqueue([this.dispatch, A, this._compress, O, q]);else this.dispatch(A, this._compress, O, q);
    }
    getBlobData(A, K, q, Y) {
      this._bufferedBytes += q[CC], this._state = hwY, A.arrayBuffer().then(z => {
        if (this._socket.destroyed) {
          let H = Error("The socket was closed while the blob was being read");
          process.nextTick(OG6, this, H, Y);
          return;
        }
        this._bufferedBytes -= q[CC];
        let w = tKA(z);
        if (!K) this._state = PI, this.sendFrame(qa.frame(w, q), Y), this.dequeue();else this.dispatch(w, K, q, Y);
      }).catch(z => {
        process.nextTick(bwY, this, z, Y);
      });
    }
    dispatch(A, K, q, Y) {
      if (!K) {
        this.sendFrame(qa.frame(A, q), Y);
        return;
      }
      let z = this._extensions[a37.extensionName];
      this._bufferedBytes += q[CC], this._state = SwY, z.compress(A, q.fin, (w, H) => {
        if (this._socket.destroyed) {
          let J = Error("The socket was closed while data was being compressed");
          OG6(this, J, Y);
          return;
        }
        this._bufferedBytes -= q[CC], this._state = PI, q.readOnly = !1, this.sendFrame(qa.frame(H, q), Y), this.dequeue();
      });
    }
    dequeue() {
      while (this._state === PI && this._queue.length) {
        let A = this._queue.shift();
        this._bufferedBytes -= A[3][CC], Reflect.apply(A[0], this, A.slice(1));
      }
    }
    enqueue(A) {
      this._bufferedBytes += A[3][CC], this._queue.push(A);
    }
    sendFrame(A, K) {
      if (A.length === 2) this._socket.cork(), this._socket.write(A[0]), this._socket.write(A[1], K), this._socket.uncork();else this._socket.write(A[0], K);
    }
  }
  t37.exports = qa;
  function OG6(A, K, q) {
    if (typeof q === "function") q(K);
    for (let Y = 0; Y < A._queue.length; Y++) {
      let z = A._queue[Y],
        w = z[z.length - 1];
      if (typeof w === "function") w(K);
    }
  }
  function bwY(A, K, q) {
    OG6(A, K, q), A.onerror(K);
  }
});

// Register to shared state
__$.XG6 = XG6;
