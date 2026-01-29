// Module: op4
// Dependencies: o21, up4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var op4 = v((qfw, rp4) => {
  var {
      defineProperty: t21,
      getOwnPropertyDescriptor: qU9,
      getOwnPropertyNames: YU9
    } = Object,
    zU9 = Object.prototype.hasOwnProperty,
    OU = (A, K) => t21(A, "name", {
      value: K,
      configurable: !0
    }),
    wU9 = (A, K) => {
      for (var q in K) t21(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    HU9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of YU9(K)) if (!zU9.call(A, z) && z !== q) t21(A, z, {
          get: () => K[z],
          enumerable: !(Y = qU9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    JU9 = A => HU9(t21({}, "__esModule", {
      value: !0
    }), A),
    mp4 = {};
  wU9(mp4, {
    EventStreamCodec: () => fU9,
    HeaderMarshaller: () => Qp4,
    Int64: () => s21,
    MessageDecoderStream: () => NU9,
    MessageEncoderStream: () => TU9,
    SmithyMessageDecoderStream: () => vU9,
    SmithyMessageEncoderStream: () => EU9
  });
  rp4.exports = JU9(mp4);
  var OU9 = __$.o21(),
    R7A = __$.up4(),
    gp4 = class A {
      constructor(K) {
        if (this.bytes = K, K.byteLength !== 8) throw Error("Int64 buffers must be exactly 8 bytes");
      }
      static fromNumber(K) {
        if (K > 9223372036854776000 || K < -9223372036854776000) throw Error(`${K} is too large (or, if negative, too small) to represent as an Int64`);
        let q = new Uint8Array(8);
        for (let Y = 7, z = Math.abs(Math.round(K)); Y > -1 && z > 0; Y--, z /= 256) q[Y] = z;
        if (K < 0) iz6(q);
        return new A(q);
      }
      valueOf() {
        let K = this.bytes.slice(0),
          q = K[0] & 128;
        if (q) iz6(K);
        return parseInt((0, R7A.toHex)(K), 16) * (q ? -1 : 1);
      }
      toString() {
        return String(this.valueOf());
      }
    };
  OU(gp4, "Int64");
  var s21 = gp4;
  function iz6(A) {
    for (let K = 0; K < 8; K++) A[K] ^= 255;
    for (let K = 7; K > -1; K--) if (A[K]++, A[K] !== 0) break;
  }
  OU(iz6, "negate");
  var Fp4 = class {
    constructor(K, q) {
      this.toUtf8 = K, this.fromUtf8 = q;
    }
    format(K) {
      let q = [];
      for (let w of Object.keys(K)) {
        let H = this.fromUtf8(w);
        q.push(Uint8Array.from([H.byteLength]), H, this.formatHeaderValue(K[w]));
      }
      let Y = new Uint8Array(q.reduce((w, H) => w + H.byteLength, 0)),
        z = 0;
      for (let w of q) Y.set(w, z), z += w.byteLength;
      return Y;
    }
    formatHeaderValue(K) {
      switch (K.type) {
        case "boolean":
          return Uint8Array.from([K.value ? 0 : 1]);
        case "byte":
          return Uint8Array.from([2, K.value]);
        case "short":
          let q = new DataView(new ArrayBuffer(3));
          return q.setUint8(0, 3), q.setInt16(1, K.value, !1), new Uint8Array(q.buffer);
        case "integer":
          let Y = new DataView(new ArrayBuffer(5));
          return Y.setUint8(0, 4), Y.setInt32(1, K.value, !1), new Uint8Array(Y.buffer);
        case "long":
          let z = new Uint8Array(9);
          return z[0] = 5, z.set(K.value.bytes, 1), z;
        case "binary":
          let w = new DataView(new ArrayBuffer(3 + K.value.byteLength));
          w.setUint8(0, 6), w.setUint16(1, K.value.byteLength, !1);
          let H = new Uint8Array(w.buffer);
          return H.set(K.value, 3), H;
        case "string":
          let J = this.fromUtf8(K.value),
            O = new DataView(new ArrayBuffer(3 + J.byteLength));
          O.setUint8(0, 7), O.setUint16(1, J.byteLength, !1);
          let X = new Uint8Array(O.buffer);
          return X.set(J, 3), X;
        case "timestamp":
          let $ = new Uint8Array(9);
          return $[0] = 8, $.set(s21.fromNumber(K.value.valueOf()).bytes, 1), $;
        case "uuid":
          if (!MU9.test(K.value)) throw Error(`Invalid UUID received: ${K.value}`);
          let _ = new Uint8Array(17);
          return _[0] = 9, _.set((0, R7A.fromHex)(K.value.replace(/\-/g, "")), 1), _;
      }
    }
    parse(K) {
      let q = {},
        Y = 0;
      while (Y < K.byteLength) {
        let z = K.getUint8(Y++),
          w = this.toUtf8(new Uint8Array(K.buffer, K.byteOffset + Y, z));
        switch (Y += z, K.getUint8(Y++)) {
          case 0:
            q[w] = {
              type: Bp4,
              value: !0
            };
            break;
          case 1:
            q[w] = {
              type: Bp4,
              value: !1
            };
            break;
          case 2:
            q[w] = {
              type: XU9,
              value: K.getInt8(Y++)
            };
            break;
          case 3:
            q[w] = {
              type: $U9,
              value: K.getInt16(Y, !1)
            }, Y += 2;
            break;
          case 4:
            q[w] = {
              type: _U9,
              value: K.getInt32(Y, !1)
            }, Y += 4;
            break;
          case 5:
            q[w] = {
              type: GU9,
              value: new s21(new Uint8Array(K.buffer, K.byteOffset + Y, 8))
            }, Y += 8;
            break;
          case 6:
            let H = K.getUint16(Y, !1);
            Y += 2, q[w] = {
              type: ZU9,
              value: new Uint8Array(K.buffer, K.byteOffset + Y, H)
            }, Y += H;
            break;
          case 7:
            let J = K.getUint16(Y, !1);
            Y += 2, q[w] = {
              type: WU9,
              value: this.toUtf8(new Uint8Array(K.buffer, K.byteOffset + Y, J))
            }, Y += J;
            break;
          case 8:
            q[w] = {
              type: DU9,
              value: new Date(new s21(new Uint8Array(K.buffer, K.byteOffset + Y, 8)).valueOf())
            }, Y += 8;
            break;
          case 9:
            let O = new Uint8Array(K.buffer, K.byteOffset + Y, 16);
            Y += 16, q[w] = {
              type: jU9,
              value: `${(0, R7A.toHex)(O.subarray(0, 4))}-${(0, R7A.toHex)(O.subarray(4, 6))}-${(0, R7A.toHex)(O.subarray(6, 8))}-${(0, R7A.toHex)(O.subarray(8, 10))}-${(0, R7A.toHex)(O.subarray(10))}`
            };
            break;
          default:
            throw Error("Unrecognized header type tag");
        }
      }
      return q;
    }
  };
  OU(Fp4, "HeaderMarshaller");
  var Qp4 = Fp4,
    Bp4 = "boolean",
    XU9 = "byte",
    $U9 = "short",
    _U9 = "integer",
    GU9 = "long",
    ZU9 = "binary",
    WU9 = "string",
    DU9 = "timestamp",
    jU9 = "uuid",
    MU9 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
    PU9 = __$.o21(),
    Up4 = 4,
    Ao = Up4 * 2,
    y7A = 4,
    VU9 = Ao + y7A * 2;
  function pp4({
    byteLength: A,
    byteOffset: K,
    buffer: q
  }) {
    if (A < VU9) throw Error("Provided message too short to accommodate event stream message overhead");
    let Y = new DataView(q, K, A),
      z = Y.getUint32(0, !1);
    if (A !== z) throw Error("Reported message length does not match received message length");
    let w = Y.getUint32(Up4, !1),
      H = Y.getUint32(Ao, !1),
      J = Y.getUint32(A - y7A, !1),
      O = new PU9.Crc32().update(new Uint8Array(q, K, Ao));
    if (H !== O.digest()) throw Error(`The prelude checksum specified in the message (${H}) does not match the calculated CRC32 checksum (${O.digest()})`);
    if (O.update(new Uint8Array(q, K + Ao, A - (Ao + y7A))), J !== O.digest()) throw Error(`The message checksum (${O.digest()}) did not match the expected value of ${J}`);
    return {
      headers: new DataView(q, K + Ao + y7A, w),
      body: new Uint8Array(q, K + Ao + y7A + w, z - w - (Ao + y7A + y7A))
    };
  }
  OU(pp4, "splitMessage");
  var dp4 = class {
    constructor(K, q) {
      this.headerMarshaller = new Qp4(K, q), this.messageBuffer = [], this.isEndOfStream = !1;
    }
    feed(K) {
      this.messageBuffer.push(this.decode(K));
    }
    endOfStream() {
      this.isEndOfStream = !0;
    }
    getMessage() {
      let K = this.messageBuffer.pop(),
        q = this.isEndOfStream;
      return {
        getMessage() {
          return K;
        },
        isEndOfStream() {
          return q;
        }
      };
    }
    getAvailableMessages() {
      let K = this.messageBuffer;
      this.messageBuffer = [];
      let q = this.isEndOfStream;
      return {
        getMessages() {
          return K;
        },
        isEndOfStream() {
          return q;
        }
      };
    }
    encode({
      headers: K,
      body: q
    }) {
      let Y = this.headerMarshaller.format(K),
        z = Y.byteLength + q.byteLength + 16,
        w = new Uint8Array(z),
        H = new DataView(w.buffer, w.byteOffset, w.byteLength),
        J = new OU9.Crc32();
      return H.setUint32(0, z, !1), H.setUint32(4, Y.byteLength, !1), H.setUint32(8, J.update(w.subarray(0, 8)).digest(), !1), w.set(Y, 12), w.set(q, Y.byteLength + 12), H.setUint32(z - 4, J.update(w.subarray(8, z - 4)).digest(), !1), w;
    }
    decode(K) {
      let {
        headers: q,
        body: Y
      } = pp4(K);
      return {
        headers: this.headerMarshaller.parse(q),
        body: Y
      };
    }
    formatHeaders(K) {
      return this.headerMarshaller.format(K);
    }
  };
  OU(dp4, "EventStreamCodec");
  var fU9 = dp4,
    cp4 = class {
      constructor(K) {
        this.options = K;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (let K of this.options.inputStream) yield this.options.decoder.decode(K);
      }
    };
  OU(cp4, "MessageDecoderStream");
  var NU9 = cp4,
    lp4 = class {
      constructor(K) {
        this.options = K;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (let K of this.options.messageStream) yield this.options.encoder.encode(K);
        if (this.options.includeEndFrame) yield new Uint8Array(0);
      }
    };
  OU(lp4, "MessageEncoderStream");
  var TU9 = lp4,
    ip4 = class {
      constructor(K) {
        this.options = K;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (let K of this.options.messageStream) {
          let q = await this.options.deserializer(K);
          if (q === void 0) continue;
          yield q;
        }
      }
    };
  OU(ip4, "SmithyMessageDecoderStream");
  var vU9 = ip4,
    np4 = class {
      constructor(K) {
        this.options = K;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (let K of this.options.inputStream) yield this.options.serializer(K);
      }
    };
  OU(np4, "SmithyMessageEncoderStream");
  var EU9 = np4;
});

// Register to shared state
__$.op4 = op4;
