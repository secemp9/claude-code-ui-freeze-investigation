// Module: gLA
// Dependencies: fA6, c14

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gLA = v(ZV3 => {
  var n14 = __$.fA6(),
    T8A = __$.c14();
  class nOA {
    bytes;
    constructor(A) {
      if (this.bytes = A, A.byteLength !== 8) throw Error("Int64 buffers must be exactly 8 bytes");
    }
    static fromNumber(A) {
      if (A > 9223372036854776000 || A < -9223372036854776000) throw Error(`${A} is too large (or, if negative, too small) to represent as an Int64`);
      let K = new Uint8Array(8);
      for (let q = 7, Y = Math.abs(Math.round(A)); q > -1 && Y > 0; q--, Y /= 256) K[q] = Y;
      if (A < 0) l14(K);
      return new nOA(K);
    }
    valueOf() {
      let A = this.bytes.slice(0),
        K = A[0] & 128;
      if (K) l14(A);
      return parseInt(T8A.toHex(A), 16) * (K ? -1 : 1);
    }
    toString() {
      return String(this.valueOf());
    }
  }
  function l14(A) {
    for (let K = 0; K < 8; K++) A[K] ^= 255;
    for (let K = 7; K > -1; K--) if (A[K]++, A[K] !== 0) break;
  }
  class vA6 {
    toUtf8;
    fromUtf8;
    constructor(A, K) {
      this.toUtf8 = A, this.fromUtf8 = K;
    }
    format(A) {
      let K = [];
      for (let z of Object.keys(A)) {
        let w = this.fromUtf8(z);
        K.push(Uint8Array.from([w.byteLength]), w, this.formatHeaderValue(A[z]));
      }
      let q = new Uint8Array(K.reduce((z, w) => z + w.byteLength, 0)),
        Y = 0;
      for (let z of K) q.set(z, Y), Y += z.byteLength;
      return q;
    }
    formatHeaderValue(A) {
      switch (A.type) {
        case "boolean":
          return Uint8Array.from([A.value ? 0 : 1]);
        case "byte":
          return Uint8Array.from([2, A.value]);
        case "short":
          let K = new DataView(new ArrayBuffer(3));
          return K.setUint8(0, 3), K.setInt16(1, A.value, !1), new Uint8Array(K.buffer);
        case "integer":
          let q = new DataView(new ArrayBuffer(5));
          return q.setUint8(0, 4), q.setInt32(1, A.value, !1), new Uint8Array(q.buffer);
        case "long":
          let Y = new Uint8Array(9);
          return Y[0] = 5, Y.set(A.value.bytes, 1), Y;
        case "binary":
          let z = new DataView(new ArrayBuffer(3 + A.value.byteLength));
          z.setUint8(0, 6), z.setUint16(1, A.value.byteLength, !1);
          let w = new Uint8Array(z.buffer);
          return w.set(A.value, 3), w;
        case "string":
          let H = this.fromUtf8(A.value),
            J = new DataView(new ArrayBuffer(3 + H.byteLength));
          J.setUint8(0, 7), J.setUint16(1, H.byteLength, !1);
          let O = new Uint8Array(J.buffer);
          return O.set(H, 3), O;
        case "timestamp":
          let X = new Uint8Array(9);
          return X[0] = 8, X.set(nOA.fromNumber(A.value.valueOf()).bytes, 1), X;
        case "uuid":
          if (!$V3.test(A.value)) throw Error(`Invalid UUID received: ${A.value}`);
          let $ = new Uint8Array(17);
          return $[0] = 9, $.set(T8A.fromHex(A.value.replace(/\-/g, "")), 1), $;
      }
    }
    parse(A) {
      let K = {},
        q = 0;
      while (q < A.byteLength) {
        let Y = A.getUint8(q++),
          z = this.toUtf8(new Uint8Array(A.buffer, A.byteOffset + q, Y));
        switch (q += Y, A.getUint8(q++)) {
          case 0:
            K[z] = {
              type: i14,
              value: !0
            };
            break;
          case 1:
            K[z] = {
              type: i14,
              value: !1
            };
            break;
          case 2:
            K[z] = {
              type: qV3,
              value: A.getInt8(q++)
            };
            break;
          case 3:
            K[z] = {
              type: YV3,
              value: A.getInt16(q, !1)
            }, q += 2;
            break;
          case 4:
            K[z] = {
              type: zV3,
              value: A.getInt32(q, !1)
            }, q += 4;
            break;
          case 5:
            K[z] = {
              type: wV3,
              value: new nOA(new Uint8Array(A.buffer, A.byteOffset + q, 8))
            }, q += 8;
            break;
          case 6:
            let w = A.getUint16(q, !1);
            q += 2, K[z] = {
              type: HV3,
              value: new Uint8Array(A.buffer, A.byteOffset + q, w)
            }, q += w;
            break;
          case 7:
            let H = A.getUint16(q, !1);
            q += 2, K[z] = {
              type: JV3,
              value: this.toUtf8(new Uint8Array(A.buffer, A.byteOffset + q, H))
            }, q += H;
            break;
          case 8:
            K[z] = {
              type: OV3,
              value: new Date(new nOA(new Uint8Array(A.buffer, A.byteOffset + q, 8)).valueOf())
            }, q += 8;
            break;
          case 9:
            let J = new Uint8Array(A.buffer, A.byteOffset + q, 16);
            q += 16, K[z] = {
              type: XV3,
              value: `${T8A.toHex(J.subarray(0, 4))}-${T8A.toHex(J.subarray(4, 6))}-${T8A.toHex(J.subarray(6, 8))}-${T8A.toHex(J.subarray(8, 10))}-${T8A.toHex(J.subarray(10))}`
            };
            break;
          default:
            throw Error("Unrecognized header type tag");
        }
      }
      return K;
    }
  }
  var i14 = "boolean",
    qV3 = "byte",
    YV3 = "short",
    zV3 = "integer",
    wV3 = "long",
    HV3 = "binary",
    JV3 = "string",
    OV3 = "timestamp",
    XV3 = "uuid",
    $V3 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
    r14 = 4,
    fn = r14 * 2,
    v8A = 4,
    _V3 = fn + v8A * 2;
  function GV3({
    byteLength: A,
    byteOffset: K,
    buffer: q
  }) {
    if (A < _V3) throw Error("Provided message too short to accommodate event stream message overhead");
    let Y = new DataView(q, K, A),
      z = Y.getUint32(0, !1);
    if (A !== z) throw Error("Reported message length does not match received message length");
    let w = Y.getUint32(r14, !1),
      H = Y.getUint32(fn, !1),
      J = Y.getUint32(A - v8A, !1),
      O = new n14.Crc32().update(new Uint8Array(q, K, fn));
    if (H !== O.digest()) throw Error(`The prelude checksum specified in the message (${H}) does not match the calculated CRC32 checksum (${O.digest()})`);
    if (O.update(new Uint8Array(q, K + fn, A - (fn + v8A))), J !== O.digest()) throw Error(`The message checksum (${O.digest()}) did not match the expected value of ${J}`);
    return {
      headers: new DataView(q, K + fn + v8A, w),
      body: new Uint8Array(q, K + fn + v8A + w, z - w - (fn + v8A + v8A))
    };
  }
  class o14 {
    headerMarshaller;
    messageBuffer;
    isEndOfStream;
    constructor(A, K) {
      this.headerMarshaller = new vA6(A, K), this.messageBuffer = [], this.isEndOfStream = !1;
    }
    feed(A) {
      this.messageBuffer.push(this.decode(A));
    }
    endOfStream() {
      this.isEndOfStream = !0;
    }
    getMessage() {
      let A = this.messageBuffer.pop(),
        K = this.isEndOfStream;
      return {
        getMessage() {
          return A;
        },
        isEndOfStream() {
          return K;
        }
      };
    }
    getAvailableMessages() {
      let A = this.messageBuffer;
      this.messageBuffer = [];
      let K = this.isEndOfStream;
      return {
        getMessages() {
          return A;
        },
        isEndOfStream() {
          return K;
        }
      };
    }
    encode({
      headers: A,
      body: K
    }) {
      let q = this.headerMarshaller.format(A),
        Y = q.byteLength + K.byteLength + 16,
        z = new Uint8Array(Y),
        w = new DataView(z.buffer, z.byteOffset, z.byteLength),
        H = new n14.Crc32();
      return w.setUint32(0, Y, !1), w.setUint32(4, q.byteLength, !1), w.setUint32(8, H.update(z.subarray(0, 8)).digest(), !1), z.set(q, 12), z.set(K, q.byteLength + 12), w.setUint32(Y - 4, H.update(z.subarray(8, Y - 4)).digest(), !1), z;
    }
    decode(A) {
      let {
        headers: K,
        body: q
      } = GV3(A);
      return {
        headers: this.headerMarshaller.parse(K),
        body: q
      };
    }
    formatHeaders(A) {
      return this.headerMarshaller.format(A);
    }
  }
  class a14 {
    options;
    constructor(A) {
      this.options = A;
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    async *asyncIterator() {
      for await (let A of this.options.inputStream) yield this.options.decoder.decode(A);
    }
  }
  class s14 {
    options;
    constructor(A) {
      this.options = A;
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    async *asyncIterator() {
      for await (let A of this.options.messageStream) yield this.options.encoder.encode(A);
      if (this.options.includeEndFrame) yield new Uint8Array(0);
    }
  }
  class t14 {
    options;
    constructor(A) {
      this.options = A;
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    async *asyncIterator() {
      for await (let A of this.options.messageStream) {
        let K = await this.options.deserializer(A);
        if (K === void 0) continue;
        yield K;
      }
    }
  }
  class e14 {
    options;
    constructor(A) {
      this.options = A;
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    async *asyncIterator() {
      for await (let A of this.options.inputStream) yield this.options.serializer(A);
    }
  }
  ZV3.EventStreamCodec = o14;
  ZV3.HeaderMarshaller = vA6;
  ZV3.Int64 = nOA;
  ZV3.MessageDecoderStream = a14;
  ZV3.MessageEncoderStream = s14;
  ZV3.SmithyMessageDecoderStream = t14;
  ZV3.SmithyMessageEncoderStream = e14;
});

// Register to shared state
__$.gLA = gLA;
