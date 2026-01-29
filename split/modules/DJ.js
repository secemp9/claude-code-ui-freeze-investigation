// Module: DJ
// Dependencies: DCA, WD, of

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var DJ = v(vZ5 => {
  var _Z5 = __$.DCA(),
    Vm8 = __$.WD(),
    Z61 = A => {
      if (typeof A === "function") return A();
      return A;
    },
    Ai1 = (A, K, q, Y, z) => ({
      name: K,
      namespace: A,
      traits: q,
      input: Y,
      output: z
    }),
    GZ5 = A => (K, q) => async Y => {
      let {
          response: z
        } = await K(Y),
        {
          operationSchema: w
        } = Vm8.getSmithyContext(q),
        [, H, J, O, X, $] = w ?? [];
      try {
        let _ = await A.protocol.deserializeResponse(Ai1(H, J, O, X, $), {
          ...A,
          ...q
        }, z);
        return {
          response: z,
          output: _
        };
      } catch (_) {
        if (Object.defineProperty(_, "$response", {
          value: z,
          enumerable: !1,
          writable: !1,
          configurable: !1
        }), !("$metadata" in _)) {
          try {
            _.message += `
  Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
          } catch (Z) {
            if (!q.logger || q.logger?.constructor?.name === "NoOpLogger") console.warn("Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.");else q.logger?.warn?.("Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.");
          }
          if (typeof _.$responseBodyText < "u") {
            if (_.$response) _.$response.body = _.$responseBodyText;
          }
          try {
            if (_Z5.HttpResponse.isInstance(z)) {
              let {
                  headers: Z = {}
                } = z,
                W = Object.entries(Z);
              _.$metadata = {
                httpStatusCode: z.statusCode,
                requestId: tl1(/^x-[\w-]+-request-?id$/, W),
                extendedRequestId: tl1(/^x-[\w-]+-id-2$/, W),
                cfId: tl1(/^x-[\w-]+-cf-id$/, W)
              };
            }
          } catch (Z) {}
        }
        throw _;
      }
    },
    tl1 = (A, K) => {
      return (K.find(([q]) => {
        return q.match(A);
      }) || [void 0, void 0])[1];
    },
    ZZ5 = A => (K, q) => async Y => {
      let {
          operationSchema: z
        } = Vm8.getSmithyContext(q),
        [, w, H, J, O, X] = z ?? [],
        $ = q.endpointV2?.url && A.urlParser ? async () => A.urlParser(q.endpointV2.url) : A.endpoint,
        _ = await A.protocol.serializeRequest(Ai1(w, H, J, O, X), Y.input, {
          ...A,
          ...q,
          endpoint: $
        });
      return K({
        ...Y,
        request: _
      });
    },
    fm8 = {
      name: "deserializerMiddleware",
      step: "deserialize",
      tags: ["DESERIALIZER"],
      override: !0
    },
    Nm8 = {
      name: "serializerMiddleware",
      step: "serialize",
      tags: ["SERIALIZER"],
      override: !0
    };
  function WZ5(A) {
    return {
      applyToStack: K => {
        K.add(ZZ5(A), Nm8), K.add(GZ5(A), fm8), A.protocol.setSerdeContext(A);
      }
    };
  }
  class MV {
    name;
    namespace;
    traits;
    static assign(A, K) {
      return Object.assign(A, K);
    }
    static [Symbol.hasInstance](A) {
      let K = this.prototype.isPrototypeOf(A);
      if (!K && typeof A === "object" && A !== null) return A.symbol === this.symbol;
      return K;
    }
    getName() {
      return this.namespace + "#" + this.name;
    }
  }
  class W61 extends MV {
    static symbol = Symbol.for("@smithy/lis");
    name;
    traits;
    valueSchema;
    symbol = W61.symbol;
  }
  var DZ5 = (A, K, q, Y) => MV.assign(new W61(), {
    name: K,
    namespace: A,
    traits: q,
    valueSchema: Y
  });
  class D61 extends MV {
    static symbol = Symbol.for("@smithy/map");
    name;
    traits;
    keySchema;
    valueSchema;
    symbol = D61.symbol;
  }
  var jZ5 = (A, K, q, Y, z) => MV.assign(new D61(), {
    name: K,
    namespace: A,
    traits: q,
    keySchema: Y,
    valueSchema: z
  });
  class j61 extends MV {
    static symbol = Symbol.for("@smithy/ope");
    name;
    traits;
    input;
    output;
    symbol = j61.symbol;
  }
  var MZ5 = (A, K, q, Y, z) => MV.assign(new j61(), {
    name: K,
    namespace: A,
    traits: q,
    input: Y,
    output: z
  });
  class TCA extends MV {
    static symbol = Symbol.for("@smithy/str");
    name;
    traits;
    memberNames;
    memberList;
    symbol = TCA.symbol;
  }
  var PZ5 = (A, K, q, Y, z) => MV.assign(new TCA(), {
    name: K,
    namespace: A,
    traits: q,
    memberNames: Y,
    memberList: z
  });
  class M61 extends TCA {
    static symbol = Symbol.for("@smithy/err");
    ctor;
    symbol = M61.symbol;
  }
  var VZ5 = (A, K, q, Y, z, w) => MV.assign(new M61(), {
    name: K,
    namespace: A,
    traits: q,
    memberNames: Y,
    memberList: z,
    ctor: null
  });
  function NCA(A) {
    if (typeof A === "object") return A;
    A = A | 0;
    let K = {},
      q = 0;
    for (let Y of ["httpLabel", "idempotent", "idempotencyToken", "sensitive", "httpPayload", "httpResponseCode", "httpQueryParams"]) if ((A >> q++ & 1) === 1) K[Y] = 1;
    return K;
  }
  class UF {
    ref;
    memberName;
    static symbol = Symbol.for("@smithy/nor");
    symbol = UF.symbol;
    name;
    schema;
    _isMemberSchema;
    traits;
    memberTraits;
    normalizedTraits;
    constructor(A, K) {
      this.ref = A, this.memberName = K;
      let q = [],
        Y = A,
        z = A;
      this._isMemberSchema = !1;
      while (el1(Y)) q.push(Y[1]), Y = Y[0], z = Z61(Y), this._isMemberSchema = !0;
      if (q.length > 0) {
        this.memberTraits = {};
        for (let w = q.length - 1; w >= 0; --w) {
          let H = q[w];
          Object.assign(this.memberTraits, NCA(H));
        }
      } else this.memberTraits = 0;
      if (z instanceof UF) {
        let w = this.memberTraits;
        Object.assign(this, z), this.memberTraits = Object.assign({}, w, z.getMemberTraits(), this.getMemberTraits()), this.normalizedTraits = void 0, this.memberName = K ?? z.memberName;
        return;
      }
      if (this.schema = Z61(z), Tm8(this.schema)) this.name = `${this.schema[1]}#${this.schema[2]}`, this.traits = this.schema[3];else this.name = this.memberName ?? String(z), this.traits = 0;
      if (this._isMemberSchema && !K) throw Error(`@smithy/core/schema - NormalizedSchema member init ${this.getName(!0)} missing member name.`);
    }
    static [Symbol.hasInstance](A) {
      let K = this.prototype.isPrototypeOf(A);
      if (!K && typeof A === "object" && A !== null) return A.symbol === this.symbol;
      return K;
    }
    static of(A) {
      let K = Z61(A);
      if (K instanceof UF) return K;
      if (el1(K)) {
        let [q, Y] = K;
        if (q instanceof UF) return Object.assign(q.getMergedTraits(), NCA(Y)), q;
        throw Error(`@smithy/core/schema - may not init unwrapped member schema=${JSON.stringify(A, null, 2)}.`);
      }
      return new UF(K);
    }
    getSchema() {
      let A = this.schema;
      if (A[0] === 0) return A[4];
      return A;
    }
    getName(A = !1) {
      let {
        name: K
      } = this;
      return !A && K && K.includes("#") ? K.split("#")[1] : K || void 0;
    }
    getMemberName() {
      return this.memberName;
    }
    isMemberSchema() {
      return this._isMemberSchema;
    }
    isListSchema() {
      let A = this.getSchema();
      return typeof A === "number" ? A >= 64 && A < 128 : A[0] === 1;
    }
    isMapSchema() {
      let A = this.getSchema();
      return typeof A === "number" ? A >= 128 && A <= 255 : A[0] === 2;
    }
    isStructSchema() {
      let A = this.getSchema();
      return A[0] === 3 || A[0] === -3;
    }
    isBlobSchema() {
      let A = this.getSchema();
      return A === 21 || A === 42;
    }
    isTimestampSchema() {
      let A = this.getSchema();
      return typeof A === "number" && A >= 4 && A <= 7;
    }
    isUnitSchema() {
      return this.getSchema() === "unit";
    }
    isDocumentSchema() {
      return this.getSchema() === 15;
    }
    isStringSchema() {
      return this.getSchema() === 0;
    }
    isBooleanSchema() {
      return this.getSchema() === 2;
    }
    isNumericSchema() {
      return this.getSchema() === 1;
    }
    isBigIntegerSchema() {
      return this.getSchema() === 17;
    }
    isBigDecimalSchema() {
      return this.getSchema() === 19;
    }
    isStreaming() {
      let {
        streaming: A
      } = this.getMergedTraits();
      return !!A || this.getSchema() === 42;
    }
    isIdempotencyToken() {
      let A = z => (z & 4) === 4 || !!z?.idempotencyToken,
        {
          normalizedTraits: K,
          traits: q,
          memberTraits: Y
        } = this;
      return A(K) || A(q) || A(Y);
    }
    getMergedTraits() {
      return this.normalizedTraits ?? (this.normalizedTraits = {
        ...this.getOwnTraits(),
        ...this.getMemberTraits()
      });
    }
    getMemberTraits() {
      return NCA(this.memberTraits);
    }
    getOwnTraits() {
      return NCA(this.traits);
    }
    getKeySchema() {
      let [A, K] = [this.isDocumentSchema(), this.isMapSchema()];
      if (!A && !K) throw Error(`@smithy/core/schema - cannot get key for non-map: ${this.getName(!0)}`);
      let q = this.getSchema(),
        Y = A ? 15 : q[4] ?? 0;
      return fCA([Y, 0], "key");
    }
    getValueSchema() {
      let A = this.getSchema(),
        [K, q, Y] = [this.isDocumentSchema(), this.isMapSchema(), this.isListSchema()],
        z = typeof A === "number" ? 63 & A : A && typeof A === "object" && (q || Y) ? A[3 + A[0]] : K ? 15 : void 0;
      if (z != null) return fCA([z, 0], q ? "value" : "member");
      throw Error(`@smithy/core/schema - ${this.getName(!0)} has no value member.`);
    }
    getMemberSchema(A) {
      let K = this.getSchema();
      if (this.isStructSchema() && K[4].includes(A)) {
        let q = K[4].indexOf(A),
          Y = K[5][q];
        return fCA(el1(Y) ? Y : [Y, 0], A);
      }
      if (this.isDocumentSchema()) return fCA([15, 0], A);
      throw Error(`@smithy/core/schema - ${this.getName(!0)} has no no member=${A}.`);
    }
    getMemberSchemas() {
      let A = {};
      try {
        for (let [K, q] of this.structIterator()) A[K] = q;
      } catch (K) {}
      return A;
    }
    getEventStreamMember() {
      if (this.isStructSchema()) {
        for (let [A, K] of this.structIterator()) if (K.isStreaming() && K.isStructSchema()) return A;
      }
      return "";
    }
    *structIterator() {
      if (this.isUnitSchema()) return;
      if (!this.isStructSchema()) throw Error("@smithy/core/schema - cannot iterate non-struct schema.");
      let A = this.getSchema();
      for (let K = 0; K < A[4].length; ++K) yield [A[4][K], fCA([A[5][K], 0], A[4][K])];
    }
  }
  function fCA(A, K) {
    if (A instanceof UF) return Object.assign(A, {
      memberName: K,
      _isMemberSchema: !0
    });
    return new UF(A, K);
  }
  var el1 = A => Array.isArray(A) && A.length === 2,
    Tm8 = A => Array.isArray(A) && A.length >= 5;
  class vCA extends MV {
    static symbol = Symbol.for("@smithy/sim");
    name;
    schemaRef;
    traits;
    symbol = vCA.symbol;
  }
  var fZ5 = (A, K, q, Y) => MV.assign(new vCA(), {
      name: K,
      namespace: A,
      traits: Y,
      schemaRef: q
    }),
    NZ5 = (A, K, q, Y) => MV.assign(new vCA(), {
      name: K,
      namespace: A,
      traits: q,
      schemaRef: Y
    }),
    TZ5 = {
      BLOB: 21,
      STREAMING_BLOB: 42,
      BOOLEAN: 2,
      STRING: 0,
      NUMERIC: 1,
      BIG_INTEGER: 17,
      BIG_DECIMAL: 19,
      DOCUMENT: 15,
      TIMESTAMP_DEFAULT: 4,
      TIMESTAMP_DATE_TIME: 5,
      TIMESTAMP_HTTP_DATE: 6,
      TIMESTAMP_EPOCH_SECONDS: 7,
      LIST_MODIFIER: 64,
      MAP_MODIFIER: 128
    };
  class QF {
    namespace;
    schemas;
    exceptions;
    static registries = new Map();
    constructor(A, K = new Map(), q = new Map()) {
      this.namespace = A, this.schemas = K, this.exceptions = q;
    }
    static for(A) {
      if (!QF.registries.has(A)) QF.registries.set(A, new QF(A));
      return QF.registries.get(A);
    }
    register(A, K) {
      let q = this.normalizeShapeId(A);
      QF.for(q.split("#")[0]).schemas.set(q, K);
    }
    getSchema(A) {
      let K = this.normalizeShapeId(A);
      if (!this.schemas.has(K)) throw Error(`@smithy/core/schema - schema not found for ${K}`);
      return this.schemas.get(K);
    }
    registerError(A, K) {
      let q = A,
        Y = QF.for(q[1]);
      Y.schemas.set(q[1] + "#" + q[2], q), Y.exceptions.set(q, K);
    }
    getErrorCtor(A) {
      let K = A;
      return QF.for(K[1]).exceptions.get(K);
    }
    getBaseException() {
      for (let A of this.exceptions.keys()) if (Array.isArray(A)) {
        let [, K, q] = A,
          Y = K + "#" + q;
        if (Y.startsWith("smithy.ts.sdk.synthetic.") && Y.endsWith("ServiceException")) return A;
      }
      return;
    }
    find(A) {
      return [...this.schemas.values()].find(A);
    }
    clear() {
      this.schemas.clear(), this.exceptions.clear();
    }
    normalizeShapeId(A) {
      if (A.includes("#")) return A;
      return this.namespace + "#" + A;
    }
  }
  vZ5.ErrorSchema = M61;
  vZ5.ListSchema = W61;
  vZ5.MapSchema = D61;
  vZ5.NormalizedSchema = UF;
  vZ5.OperationSchema = j61;
  vZ5.SCHEMA = TZ5;
  vZ5.Schema = MV;
  vZ5.SimpleSchema = vCA;
  vZ5.StructureSchema = TCA;
  vZ5.TypeRegistry = QF;
  vZ5.deref = Z61;
  vZ5.deserializerMiddlewareOption = fm8;
  vZ5.error = VZ5;
  vZ5.getSchemaSerdePlugin = WZ5;
  vZ5.isStaticSchema = Tm8;
  vZ5.list = DZ5;
  vZ5.map = jZ5;
  vZ5.op = MZ5;
  vZ5.operation = Ai1;
  vZ5.serializerMiddlewareOption = Nm8;
  vZ5.sim = fZ5;
  vZ5.simAdapter = NZ5;
  vZ5.struct = PZ5;
  vZ5.translateTraits = NCA;
});

// Register to shared state
__$.DJ = DJ;
