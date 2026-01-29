// Module: ik6
// Dependencies: Od7, zj1, Dc7, Ec7, kc7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ik6 = v(Sc7 => {
  Object.defineProperty(Sc7, "__esModule", {
    value: !0
  });
  Sc7.loadFileDescriptorSetFromObject = Sc7.loadFileDescriptorSetFromBuffer = Sc7.fromJSON = Sc7.loadSync = Sc7.load = Sc7.IdempotencyLevel = Sc7.isAnyExtension = Sc7.Long = void 0;
  var _Y2 = __$.Od7(),
    uB = __$.zj1(),
    ck6 = __$.Dc7(),
    lk6 = __$.Ec7(),
    GY2 = __$.kc7();
  Sc7.Long = GY2;
  function ZY2(A) {
    return "@type" in A && typeof A["@type"] === "string";
  }
  Sc7.isAnyExtension = ZY2;
  var Lc7;
  (function (A) {
    A.IDEMPOTENCY_UNKNOWN = "IDEMPOTENCY_UNKNOWN", A.NO_SIDE_EFFECTS = "NO_SIDE_EFFECTS", A.IDEMPOTENT = "IDEMPOTENT";
  })(Lc7 = Sc7.IdempotencyLevel || (Sc7.IdempotencyLevel = {}));
  var Rc7 = {
    longs: String,
    enums: String,
    bytes: String,
    defaults: !0,
    oneofs: !0,
    json: !0
  };
  function WY2(A, K) {
    if (A === "") return K;else return A + "." + K;
  }
  function DY2(A) {
    return A instanceof uB.Service || A instanceof uB.Type || A instanceof uB.Enum;
  }
  function jY2(A) {
    return A instanceof uB.Namespace || A instanceof uB.Root;
  }
  function yc7(A, K) {
    let q = WY2(K, A.name);
    if (DY2(A)) return [[q, A]];else if (jY2(A) && typeof A.nested < "u") return Object.keys(A.nested).map(Y => {
      return yc7(A.nested[Y], q);
    }).reduce((Y, z) => Y.concat(z), []);
    return [];
  }
  function Uk6(A, K) {
    return function (Y) {
      return A.toObject(A.decode(Y), K);
    };
  }
  function pk6(A) {
    return function (q) {
      if (Array.isArray(q)) throw Error(`Failed to serialize message: expected object with ${A.name} structure, got array instead`);
      let Y = A.fromObject(q);
      return A.encode(Y).finish();
    };
  }
  function MY2(A) {
    return (A || []).reduce((K, q) => {
      for (let [Y, z] of Object.entries(q)) switch (Y) {
        case "uninterpreted_option":
          K.uninterpreted_option.push(q.uninterpreted_option);
          break;
        default:
          K[Y] = z;
      }
      return K;
    }, {
      deprecated: !1,
      idempotency_level: Lc7.IDEMPOTENCY_UNKNOWN,
      uninterpreted_option: []
    });
  }
  function PY2(A, K, q, Y) {
    let {
      resolvedRequestType: z,
      resolvedResponseType: w
    } = A;
    return {
      path: "/" + K + "/" + A.name,
      requestStream: !!A.requestStream,
      responseStream: !!A.responseStream,
      requestSerialize: pk6(z),
      requestDeserialize: Uk6(z, q),
      responseSerialize: pk6(w),
      responseDeserialize: Uk6(w, q),
      originalName: _Y2(A.name),
      requestType: dk6(z, q, Y),
      responseType: dk6(w, q, Y),
      options: MY2(A.parsedOptions)
    };
  }
  function VY2(A, K, q, Y) {
    let z = {};
    for (let w of A.methodsArray) z[w.name] = PY2(w, K, q, Y);
    return z;
  }
  function dk6(A, K, q) {
    let Y = A.toDescriptor("proto3");
    return {
      format: "Protocol Buffer 3 DescriptorProto",
      type: Y.$type.toObject(Y, Rc7),
      fileDescriptorProtos: q,
      serialize: pk6(A),
      deserialize: Uk6(A, K)
    };
  }
  function fY2(A, K) {
    let q = A.toDescriptor("proto3");
    return {
      format: "Protocol Buffer 3 EnumDescriptorProto",
      type: q.$type.toObject(q, Rc7),
      fileDescriptorProtos: K
    };
  }
  function NY2(A, K, q, Y) {
    if (A instanceof uB.Service) return VY2(A, K, q, Y);else if (A instanceof uB.Type) return dk6(A, q, Y);else if (A instanceof uB.Enum) return fY2(A, Y);else throw Error("Type mismatch in reflection object handling");
  }
  function Jj1(A, K) {
    let q = {};
    A.resolveAll();
    let z = A.toDescriptor("proto3").file.map(w => Buffer.from(ck6.FileDescriptorProto.encode(w).finish()));
    for (let [w, H] of yc7(A, "")) q[w] = NY2(H, w, K, z);
    return q;
  }
  function Ic7(A, K) {
    K = K || {};
    let q = uB.Root.fromDescriptor(A);
    return q.resolveAll(), Jj1(q, K);
  }
  function TY2(A, K) {
    return (0, lk6.loadProtosWithOptions)(A, K).then(q => {
      return Jj1(q, K);
    });
  }
  Sc7.load = TY2;
  function vY2(A, K) {
    let q = (0, lk6.loadProtosWithOptionsSync)(A, K);
    return Jj1(q, K);
  }
  Sc7.loadSync = vY2;
  function EY2(A, K) {
    K = K || {};
    let q = uB.Root.fromJSON(A);
    return q.resolveAll(), Jj1(q, K);
  }
  Sc7.fromJSON = EY2;
  function kY2(A, K) {
    let q = ck6.FileDescriptorSet.decode(A);
    return Ic7(q, K);
  }
  Sc7.loadFileDescriptorSetFromBuffer = kY2;
  function CY2(A, K) {
    let q = ck6.FileDescriptorSet.fromObject(A);
    return Ic7(q, K);
  }
  Sc7.loadFileDescriptorSetFromObject = CY2;
  (0, lk6.addCommonProtos)();
});

// Register to shared state
__$.ik6 = ik6;
