// Module: Tn1
// Dependencies: PV, _z, VV, DCA, oF8, DJ, WD, ji1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Tn1 = v(pf5 => {
  var d61 = __$.PV(),
    eF8 = __$._z(),
    BCA = __$.VV(),
    ff5 = __$.DCA(),
    Nf5 = __$.oF8(),
    wOA = __$.DJ(),
    Tf5 = __$.WD(),
    AQ8 = __$.ji1(),
    U61 = 0,
    p61 = 1,
    o6A = 2,
    oi = 3,
    uCA = 4,
    F61 = 5,
    KQ8 = 6,
    Xn1 = 7,
    qQ8 = 20,
    Gn1 = 21,
    YQ8 = 22,
    vf5 = 23,
    Wn1 = 24,
    a6A = 25,
    s6A = 26,
    ai = 27,
    Dn1 = 31;
  function HOA(A) {
    return typeof Buffer < "u" ? Buffer.alloc(A) : new Uint8Array(A);
  }
  var jn1 = Symbol("@smithy/core/cbor::tagSymbol");
  function Mn1(A) {
    return A[jn1] = !0, A;
  }
  var Ef5 = typeof TextDecoder < "u",
    kf5 = typeof Buffer < "u",
    pz = HOA(0),
    lF = new DataView(pz.buffer, pz.byteOffset, pz.byteLength),
    aF8 = Ef5 ? new TextDecoder() : null,
    D9 = 0;
  function Cf5(A) {
    pz = A, lF = new DataView(pz.buffer, pz.byteOffset, pz.byteLength);
  }
  function iF(A, K) {
    if (A >= K) throw Error("unexpected end of (decode) payload.");
    let q = (pz[A] & 224) >> 5,
      Y = pz[A] & 31;
    switch (q) {
      case U61:
      case p61:
      case KQ8:
        let z, w;
        if (Y < 24) z = Y, w = 1;else switch (Y) {
          case Wn1:
          case a6A:
          case s6A:
          case ai:
            let H = wQ8[Y],
              J = H + 1;
            if (w = J, K - A < J) throw Error(`countLength ${H} greater than remaining buf len.`);
            let O = A + 1;
            if (H === 1) z = pz[O];else if (H === 2) z = lF.getUint16(O);else if (H === 4) z = lF.getUint32(O);else z = lF.getBigUint64(O);
            break;
          default:
            throw Error(`unexpected minor value ${Y}.`);
        }
        if (q === U61) return D9 = w, $n1(z);else if (q === p61) {
          let H;
          if (typeof z === "bigint") H = BigInt(-1) - z;else H = -1 - z;
          return D9 = w, $n1(H);
        } else if (Y === 2 || Y === 3) {
          let H = mCA(A + w, K),
            J = BigInt(0),
            O = A + w + D9;
          for (let X = O; X < O + H; ++X) J = J << BigInt(8) | BigInt(pz[X]);
          return D9 = w + D9 + H, Y === 3 ? -J - BigInt(1) : J;
        } else if (Y === 4) {
          let H = iF(A + w, K),
            [J, O] = H,
            X = O < 0 ? -1 : 1,
            $ = "0".repeat(Math.abs(J) + 1) + String(BigInt(X) * BigInt(O)),
            _,
            G = O < 0 ? "-" : "";
          if (_ = J === 0 ? $ : $.slice(0, $.length + J) + "." + $.slice(J), _ = _.replace(/^0+/g, ""), _ === "") _ = "0";
          if (_[0] === ".") _ = "0" + _;
          return _ = G + _, D9 = w + D9, d61.nv(_);
        } else {
          let H = iF(A + w, K);
          return D9 = w + D9, Mn1({
            tag: $n1(z),
            value: H
          });
        }
      case oi:
      case F61:
      case uCA:
      case o6A:
        if (Y === Dn1) switch (q) {
          case oi:
            return If5(A, K);
          case F61:
            return uf5(A, K);
          case uCA:
            return bf5(A, K);
          case o6A:
            return Sf5(A, K);
        } else switch (q) {
          case oi:
            return yf5(A, K);
          case F61:
            return xf5(A, K);
          case uCA:
            return hf5(A, K);
          case o6A:
            return Pn1(A, K);
        }
      default:
        return Bf5(A, K);
    }
  }
  function zQ8(A, K, q) {
    if (kf5 && A.constructor?.name === "Buffer") return A.toString("utf-8", K, q);
    if (aF8) return aF8.decode(A.subarray(K, q));
    return eF8.toUtf8(A.subarray(K, q));
  }
  function Lf5(A) {
    let K = Number(A);
    if (K < Number.MIN_SAFE_INTEGER || Number.MAX_SAFE_INTEGER < K) console.warn(Error(`@smithy/core/cbor - truncating BigInt(${A}) to ${K} with loss of precision.`));
    return K;
  }
  var wQ8 = {
    [Wn1]: 1,
    [a6A]: 2,
    [s6A]: 4,
    [ai]: 8
  };
  function Rf5(A, K) {
    let q = A >> 7,
      Y = (A & 124) >> 2,
      z = (A & 3) << 8 | K,
      w = q === 0 ? 1 : -1,
      H,
      J;
    if (Y === 0) {
      if (z === 0) return 0;else H = Math.pow(2, -14), J = 0;
    } else if (Y === 31) {
      if (z === 0) return w * (1 / 0);else return NaN;
    } else H = Math.pow(2, Y - 15), J = 1;
    return J += z / 1024, w * (H * J);
  }
  function mCA(A, K) {
    let q = pz[A] & 31;
    if (q < 24) return D9 = 1, q;
    if (q === Wn1 || q === a6A || q === s6A || q === ai) {
      let Y = wQ8[q];
      if (D9 = Y + 1, K - A < D9) throw Error(`countLength ${Y} greater than remaining buf len.`);
      let z = A + 1;
      if (Y === 1) return pz[z];else if (Y === 2) return lF.getUint16(z);else if (Y === 4) return lF.getUint32(z);
      return Lf5(lF.getBigUint64(z));
    }
    throw Error(`unexpected minor value ${q}.`);
  }
  function yf5(A, K) {
    let q = mCA(A, K),
      Y = D9;
    if (A += Y, K - A < q) throw Error(`string len ${q} greater than remaining buf len.`);
    let z = zQ8(pz, A, A + q);
    return D9 = Y + q, z;
  }
  function If5(A, K) {
    A += 1;
    let q = [];
    for (let Y = A; A < K;) {
      if (pz[A] === 255) {
        let O = HOA(q.length);
        return O.set(q, 0), D9 = A - Y + 2, zQ8(O, 0, O.length);
      }
      let z = (pz[A] & 224) >> 5,
        w = pz[A] & 31;
      if (z !== oi) throw Error(`unexpected major type ${z} in indefinite string.`);
      if (w === Dn1) throw Error("nested indefinite string.");
      let H = Pn1(A, K);
      A += D9;
      for (let O = 0; O < H.length; ++O) q.push(H[O]);
    }
    throw Error("expected break marker.");
  }
  function Pn1(A, K) {
    let q = mCA(A, K),
      Y = D9;
    if (A += Y, K - A < q) throw Error(`unstructured byte string len ${q} greater than remaining buf len.`);
    let z = pz.subarray(A, A + q);
    return D9 = Y + q, z;
  }
  function Sf5(A, K) {
    A += 1;
    let q = [];
    for (let Y = A; A < K;) {
      if (pz[A] === 255) {
        let O = HOA(q.length);
        return O.set(q, 0), D9 = A - Y + 2, O;
      }
      let z = (pz[A] & 224) >> 5,
        w = pz[A] & 31;
      if (z !== o6A) throw Error(`unexpected major type ${z} in indefinite string.`);
      if (w === Dn1) throw Error("nested indefinite string.");
      let H = Pn1(A, K);
      A += D9;
      for (let O = 0; O < H.length; ++O) q.push(H[O]);
    }
    throw Error("expected break marker.");
  }
  function hf5(A, K) {
    let q = mCA(A, K),
      Y = D9;
    A += Y;
    let z = A,
      w = Array(q);
    for (let H = 0; H < q; ++H) {
      let J = iF(A, K),
        O = D9;
      w[H] = J, A += O;
    }
    return D9 = Y + (A - z), w;
  }
  function bf5(A, K) {
    A += 1;
    let q = [];
    for (let Y = A; A < K;) {
      if (pz[A] === 255) return D9 = A - Y + 2, q;
      let z = iF(A, K);
      A += D9, q.push(z);
    }
    throw Error("expected break marker.");
  }
  function xf5(A, K) {
    let q = mCA(A, K),
      Y = D9;
    A += Y;
    let z = A,
      w = {};
    for (let H = 0; H < q; ++H) {
      if (A >= K) throw Error("unexpected end of map payload.");
      let J = (pz[A] & 224) >> 5;
      if (J !== oi) throw Error(`unexpected major type ${J} for map key at index ${A}.`);
      let O = iF(A, K);
      A += D9;
      let X = iF(A, K);
      A += D9, w[O] = X;
    }
    return D9 = Y + (A - z), w;
  }
  function uf5(A, K) {
    A += 1;
    let q = A,
      Y = {};
    for (; A < K;) {
      if (A >= K) throw Error("unexpected end of map payload.");
      if (pz[A] === 255) return D9 = A - q + 2, Y;
      let z = (pz[A] & 224) >> 5;
      if (z !== oi) throw Error(`unexpected major type ${z} for map key.`);
      let w = iF(A, K);
      A += D9;
      let H = iF(A, K);
      A += D9, Y[w] = H;
    }
    throw Error("expected break marker.");
  }
  function Bf5(A, K) {
    let q = pz[A] & 31;
    switch (q) {
      case Gn1:
      case qQ8:
        return D9 = 1, q === Gn1;
      case YQ8:
        return D9 = 1, null;
      case vf5:
        return D9 = 1, null;
      case a6A:
        if (K - A < 3) throw Error("incomplete float16 at end of buf.");
        return D9 = 3, Rf5(pz[A + 1], pz[A + 2]);
      case s6A:
        if (K - A < 5) throw Error("incomplete float32 at end of buf.");
        return D9 = 5, lF.getFloat32(A + 1);
      case ai:
        if (K - A < 9) throw Error("incomplete float64 at end of buf.");
        return D9 = 9, lF.getFloat64(A + 1);
      default:
        throw Error(`unexpected minor value ${q}.`);
    }
  }
  function $n1(A) {
    if (typeof A === "number") return A;
    let K = Number(A);
    if (Number.MIN_SAFE_INTEGER <= K && K <= Number.MAX_SAFE_INTEGER) return K;
    return A;
  }
  var sF8 = typeof Buffer < "u",
    mf5 = 2048,
    X5 = HOA(mf5),
    cF = new DataView(X5.buffer, X5.byteOffset, X5.byteLength),
    bK = 0;
  function _n1(A) {
    if (X5.byteLength - bK < A) if (bK < 16000000) Zn1(Math.max(X5.byteLength * 4, X5.byteLength + A));else Zn1(X5.byteLength + A + 16000000);
  }
  function tF8() {
    let A = HOA(bK);
    return A.set(X5.subarray(0, bK), 0), bK = 0, A;
  }
  function Zn1(A) {
    let K = X5;
    if (X5 = HOA(A), K) if (K.copy) K.copy(X5, 0, 0, K.byteLength);else X5.set(K, 0);
    cF = new DataView(X5.buffer, X5.byteOffset, X5.byteLength);
  }
  function dF(A, K) {
    if (K < 24) X5[bK++] = A << 5 | K;else if (K < 256) X5[bK++] = A << 5 | 24, X5[bK++] = K;else if (K < 65536) X5[bK++] = A << 5 | a6A, cF.setUint16(bK, K), bK += 2;else if (K < 4294967296) X5[bK++] = A << 5 | s6A, cF.setUint32(bK, K), bK += 4;else X5[bK++] = A << 5 | ai, cF.setBigUint64(bK, typeof K === "bigint" ? K : BigInt(K)), bK += 8;
  }
  function gf5(A) {
    let K = [A];
    while (K.length) {
      let q = K.pop();
      if (_n1(typeof q === "string" ? q.length * 4 : 64), typeof q === "string") {
        if (sF8) dF(oi, Buffer.byteLength(q)), bK += X5.write(q, bK);else {
          let Y = eF8.fromUtf8(q);
          dF(oi, Y.byteLength), X5.set(Y, bK), bK += Y.byteLength;
        }
        continue;
      } else if (typeof q === "number") {
        if (Number.isInteger(q)) {
          let Y = q >= 0,
            z = Y ? U61 : p61,
            w = Y ? q : -q - 1;
          if (w < 24) X5[bK++] = z << 5 | w;else if (w < 256) X5[bK++] = z << 5 | 24, X5[bK++] = w;else if (w < 65536) X5[bK++] = z << 5 | a6A, X5[bK++] = w >> 8, X5[bK++] = w;else if (w < 4294967296) X5[bK++] = z << 5 | s6A, cF.setUint32(bK, w), bK += 4;else X5[bK++] = z << 5 | ai, cF.setBigUint64(bK, BigInt(w)), bK += 8;
          continue;
        }
        X5[bK++] = Xn1 << 5 | ai, cF.setFloat64(bK, q), bK += 8;
        continue;
      } else if (typeof q === "bigint") {
        let Y = q >= 0,
          z = Y ? U61 : p61,
          w = Y ? q : -q - BigInt(1),
          H = Number(w);
        if (H < 24) X5[bK++] = z << 5 | H;else if (H < 256) X5[bK++] = z << 5 | 24, X5[bK++] = H;else if (H < 65536) X5[bK++] = z << 5 | a6A, X5[bK++] = H >> 8, X5[bK++] = H & 255;else if (H < 4294967296) X5[bK++] = z << 5 | s6A, cF.setUint32(bK, H), bK += 4;else if (w < BigInt("18446744073709551616")) X5[bK++] = z << 5 | ai, cF.setBigUint64(bK, w), bK += 8;else {
          let J = w.toString(2),
            O = new Uint8Array(Math.ceil(J.length / 8)),
            X = w,
            $ = 0;
          while (O.byteLength - ++$ >= 0) O[O.byteLength - $] = Number(X & BigInt(255)), X >>= BigInt(8);
          if (_n1(O.byteLength * 2), X5[bK++] = Y ? 194 : 195, sF8) dF(o6A, Buffer.byteLength(O));else dF(o6A, O.byteLength);
          X5.set(O, bK), bK += O.byteLength;
        }
        continue;
      } else if (q === null) {
        X5[bK++] = Xn1 << 5 | YQ8;
        continue;
      } else if (typeof q === "boolean") {
        X5[bK++] = Xn1 << 5 | (q ? Gn1 : qQ8);
        continue;
      } else if (typeof q > "u") throw Error("@smithy/core/cbor: client may not serialize undefined value.");else if (Array.isArray(q)) {
        for (let Y = q.length - 1; Y >= 0; --Y) K.push(q[Y]);
        dF(uCA, q.length);
        continue;
      } else if (typeof q.byteLength === "number") {
        _n1(q.length * 2), dF(o6A, q.length), X5.set(q, bK), bK += q.byteLength;
        continue;
      } else if (typeof q === "object") {
        if (q instanceof d61.NumericValue) {
          let z = q.string.indexOf("."),
            w = z === -1 ? 0 : z - q.string.length + 1,
            H = BigInt(q.string.replace(".", ""));
          X5[bK++] = 196, K.push(H), K.push(w), dF(uCA, 2);
          continue;
        }
        if (q[jn1]) if ("tag" in q && "value" in q) {
          K.push(q.value), dF(KQ8, q.tag);
          continue;
        } else throw Error("tag encountered with missing fields, need 'tag' and 'value', found: " + JSON.stringify(q));
        let Y = Object.keys(q);
        for (let z = Y.length - 1; z >= 0; --z) {
          let w = Y[z];
          K.push(q[w]), K.push(w);
        }
        dF(F61, Y.length);
        continue;
      }
      throw Error(`data type ${q?.constructor?.name ?? typeof q} not compatible for encoding.`);
    }
  }
  var c61 = {
      deserialize(A) {
        return Cf5(A), iF(0, A.length);
      },
      serialize(A) {
        try {
          return gf5(A), tF8();
        } catch (K) {
          throw tF8(), K;
        }
      },
      resizeEncodingBuffer(A) {
        Zn1(A);
      }
    },
    HQ8 = (A, K) => {
      return BCA.collectBody(A, K).then(async q => {
        if (q.length) try {
          return c61.deserialize(q);
        } catch (Y) {
          throw Object.defineProperty(Y, "$responseBodyText", {
            value: K.utf8Encoder(q)
          }), Y;
        }
        return {};
      });
    },
    Q61 = A => {
      return Mn1({
        tag: 1,
        value: A.getTime() / 1000
      });
    },
    Ff5 = async (A, K) => {
      let q = await HQ8(A, K);
      return q.message = q.message ?? q.Message, q;
    },
    JQ8 = (A, K) => {
      let q = z => {
        let w = z;
        if (typeof w === "number") w = w.toString();
        if (w.indexOf(",") >= 0) w = w.split(",")[0];
        if (w.indexOf(":") >= 0) w = w.split(":")[0];
        if (w.indexOf("#") >= 0) w = w.split("#")[1];
        return w;
      };
      if (K.__type !== void 0) return q(K.__type);
      let Y = Object.keys(K).find(z => z.toLowerCase() === "code");
      if (Y && K[Y] !== void 0) return q(K[Y]);
    },
    Qf5 = A => {
      if (String(A.headers["smithy-protocol"]).toLowerCase() !== "rpc-v2-cbor") throw Error("Malformed RPCv2 CBOR response, status: " + A.statusCode);
    },
    Uf5 = async (A, K, q, Y, z) => {
      let {
          hostname: w,
          protocol: H = "https",
          port: J,
          path: O
        } = await A.endpoint(),
        X = {
          protocol: H,
          hostname: w,
          port: J,
          method: "POST",
          path: O.endsWith("/") ? O.slice(0, -1) + q : O + q,
          headers: {
            ...K
          }
        };
      if (Y !== void 0) X.hostname = Y;
      if (z !== void 0) {
        X.body = z;
        try {
          X.headers["content-length"] = String(Nf5.calculateBodyLength(z));
        } catch ($) {}
      }
      return new ff5.HttpRequest(X);
    };
  class Vn1 extends BCA.SerdeContext {
    createSerializer() {
      let A = new fn1();
      return A.setSerdeContext(this.serdeContext), A;
    }
    createDeserializer() {
      let A = new Nn1();
      return A.setSerdeContext(this.serdeContext), A;
    }
  }
  class fn1 extends BCA.SerdeContext {
    value;
    write(A, K) {
      this.value = this.serialize(A, K);
    }
    serialize(A, K) {
      let q = wOA.NormalizedSchema.of(A);
      if (K == null) {
        if (q.isIdempotencyToken()) return d61.generateIdempotencyToken();
        return K;
      }
      if (q.isBlobSchema()) {
        if (typeof K === "string") return (this.serdeContext?.base64Decoder ?? AQ8.fromBase64)(K);
        return K;
      }
      if (q.isTimestampSchema()) {
        if (typeof K === "number" || typeof K === "bigint") return Q61(new Date(Number(K) / 1000 | 0));
        return Q61(K);
      }
      if (typeof K === "function" || typeof K === "object") {
        let Y = K;
        if (q.isListSchema() && Array.isArray(Y)) {
          let w = !!q.getMergedTraits().sparse,
            H = [],
            J = 0;
          for (let O of Y) {
            let X = this.serialize(q.getValueSchema(), O);
            if (X != null || w) H[J++] = X;
          }
          return H;
        }
        if (Y instanceof Date) return Q61(Y);
        let z = {};
        if (q.isMapSchema()) {
          let w = !!q.getMergedTraits().sparse;
          for (let H of Object.keys(Y)) {
            let J = this.serialize(q.getValueSchema(), Y[H]);
            if (J != null || w) z[H] = J;
          }
        } else if (q.isStructSchema()) for (let [w, H] of q.structIterator()) {
          let J = this.serialize(H, Y[w]);
          if (J != null) z[w] = J;
        } else if (q.isDocumentSchema()) for (let w of Object.keys(Y)) z[w] = this.serialize(q.getValueSchema(), Y[w]);
        return z;
      }
      return K;
    }
    flush() {
      let A = c61.serialize(this.value);
      return this.value = void 0, A;
    }
  }
  class Nn1 extends BCA.SerdeContext {
    read(A, K) {
      let q = c61.deserialize(K);
      return this.readValue(A, q);
    }
    readValue(A, K) {
      let q = wOA.NormalizedSchema.of(A);
      if (q.isTimestampSchema() && typeof K === "number") return d61._parseEpochTimestamp(K);
      if (q.isBlobSchema()) {
        if (typeof K === "string") return (this.serdeContext?.base64Decoder ?? AQ8.fromBase64)(K);
        return K;
      }
      if (typeof K > "u" || typeof K === "boolean" || typeof K === "number" || typeof K === "string" || typeof K === "bigint" || typeof K === "symbol") return K;else if (typeof K === "function" || typeof K === "object") {
        if (K === null) return null;
        if ("byteLength" in K) return K;
        if (K instanceof Date) return K;
        if (q.isDocumentSchema()) return K;
        if (q.isListSchema()) {
          let z = [],
            w = q.getValueSchema(),
            H = !!q.getMergedTraits().sparse;
          for (let J of K) {
            let O = this.readValue(w, J);
            if (O != null || H) z.push(O);
          }
          return z;
        }
        let Y = {};
        if (q.isMapSchema()) {
          let z = !!q.getMergedTraits().sparse,
            w = q.getValueSchema();
          for (let H of Object.keys(K)) {
            let J = this.readValue(w, K[H]);
            if (J != null || z) Y[H] = J;
          }
        } else if (q.isStructSchema()) for (let [z, w] of q.structIterator()) {
          let H = this.readValue(w, K[z]);
          if (H != null) Y[z] = H;
        }
        return Y;
      } else return K;
    }
  }
  class OQ8 extends BCA.RpcProtocol {
    codec = new Vn1();
    serializer = this.codec.createSerializer();
    deserializer = this.codec.createDeserializer();
    constructor({
      defaultNamespace: A
    }) {
      super({
        defaultNamespace: A
      });
    }
    getShapeId() {
      return "smithy.protocols#rpcv2Cbor";
    }
    getPayloadCodec() {
      return this.codec;
    }
    async serializeRequest(A, K, q) {
      let Y = await super.serializeRequest(A, K, q);
      if (Object.assign(Y.headers, {
        "content-type": this.getDefaultContentType(),
        "smithy-protocol": "rpc-v2-cbor",
        accept: this.getDefaultContentType()
      }), wOA.deref(A.input) === "unit") delete Y.body, delete Y.headers["content-type"];else {
        if (!Y.body) this.serializer.write(15, {}), Y.body = this.serializer.flush();
        try {
          Y.headers["content-length"] = String(Y.body.byteLength);
        } catch (J) {}
      }
      let {
          service: z,
          operation: w
        } = Tf5.getSmithyContext(q),
        H = `/service/${z}/operation/${w}`;
      if (Y.path.endsWith("/")) Y.path += H.slice(1);else Y.path += H;
      return Y;
    }
    async deserializeResponse(A, K, q) {
      return super.deserializeResponse(A, K, q);
    }
    async handleError(A, K, q, Y, z) {
      let w = JQ8(q, Y) ?? "Unknown",
        H = this.options.defaultNamespace;
      if (w.includes("#")) [H] = w.split("#");
      let J = {
          $metadata: z,
          $fault: q.statusCode <= 500 ? "client" : "server"
        },
        O = wOA.TypeRegistry.for(H),
        X;
      try {
        X = O.getSchema(w);
      } catch (D) {
        if (Y.Message) Y.message = Y.Message;
        let j = wOA.TypeRegistry.for("smithy.ts.sdk.synthetic." + H),
          M = j.getBaseException();
        if (M) {
          let P = j.getErrorCtor(M);
          throw Object.assign(new P({
            name: w
          }), J, Y);
        }
        throw Object.assign(Error(w), J, Y);
      }
      let $ = wOA.NormalizedSchema.of(X),
        _ = O.getErrorCtor(X),
        G = Y.message ?? Y.Message ?? "Unknown",
        Z = new _(G),
        W = {};
      for (let [D, j] of $.structIterator()) W[D] = this.deserializer.readValue(j, Y[D]);
      throw Object.assign(Z, J, {
        $fault: $.getMergedTraits().error,
        message: G
      }, W);
    }
    getDefaultContentType() {
      return "application/cbor";
    }
  }
  pf5.CborCodec = Vn1;
  pf5.CborShapeDeserializer = Nn1;
  pf5.CborShapeSerializer = fn1;
  pf5.SmithyRpcV2CborProtocol = OQ8;
  pf5.buildHttpRpcRequest = Uf5;
  pf5.cbor = c61;
  pf5.checkCborResponse = Qf5;
  pf5.dateToTag = Q61;
  pf5.loadSmithyRpcV2CborErrorCode = JQ8;
  pf5.parseCborBody = HQ8;
  pf5.parseCborErrorBody = Ff5;
  pf5.tag = Mn1;
  pf5.tagSymbol = jn1;
});

// Register to shared state
__$.Tn1 = Tn1;
