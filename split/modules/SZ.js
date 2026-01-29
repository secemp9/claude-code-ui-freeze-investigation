// Module: SZ
// Dependencies: j9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SZ = v((O6w, cq4) => {
  var {
      types: Xx,
      inspect: km3
    } = CA("node:util"),
    {
      markAsUncloneable: Cm3
    } = CA("node:worker_threads"),
    {
      toUSVString: Lm3
    } = __$.j9(),
    O4 = {};
  O4.converters = {};
  O4.util = {};
  O4.errors = {};
  O4.errors.exception = function (A) {
    return TypeError(`${A.header}: ${A.message}`);
  };
  O4.errors.conversionFailed = function (A) {
    let K = A.types.length === 1 ? "" : " one of",
      q = `${A.argument} could not be converted to${K}: ${A.types.join(", ")}.`;
    return O4.errors.exception({
      header: A.prefix,
      message: q
    });
  };
  O4.errors.invalidArgument = function (A) {
    return O4.errors.exception({
      header: A.prefix,
      message: `"${A.value}" is an invalid ${A.type}.`
    });
  };
  O4.brandCheck = function (A, K, q) {
    if (q?.strict !== !1) {
      if (!(A instanceof K)) {
        let Y = TypeError("Illegal invocation");
        throw Y.code = "ERR_INVALID_THIS", Y;
      }
    } else if (A?.[Symbol.toStringTag] !== K.prototype[Symbol.toStringTag]) {
      let Y = TypeError("Illegal invocation");
      throw Y.code = "ERR_INVALID_THIS", Y;
    }
  };
  O4.argumentLengthCheck = function ({
    length: A
  }, K, q) {
    if (A < K) throw O4.errors.exception({
      message: `${K} argument${K !== 1 ? "s" : ""} required, but${A ? " only" : ""} ${A} found.`,
      header: q
    });
  };
  O4.illegalConstructor = function () {
    throw O4.errors.exception({
      header: "TypeError",
      message: "Illegal constructor"
    });
  };
  O4.util.Type = function (A) {
    switch (typeof A) {
      case "undefined":
        return "Undefined";
      case "boolean":
        return "Boolean";
      case "string":
        return "String";
      case "symbol":
        return "Symbol";
      case "number":
        return "Number";
      case "bigint":
        return "BigInt";
      case "function":
      case "object":
        {
          if (A === null) return "Null";
          return "Object";
        }
    }
  };
  O4.util.markAsUncloneable = Cm3 || (() => {});
  O4.util.ConvertToInt = function (A, K, q, Y) {
    let z, w;
    if (K === 64) {
      if (z = Math.pow(2, 53) - 1, q === "unsigned") w = 0;else w = Math.pow(-2, 53) + 1;
    } else if (q === "unsigned") w = 0, z = Math.pow(2, K) - 1;else w = Math.pow(-2, K) - 1, z = Math.pow(2, K - 1) - 1;
    let H = Number(A);
    if (H === 0) H = 0;
    if (Y?.enforceRange === !0) {
      if (Number.isNaN(H) || H === Number.POSITIVE_INFINITY || H === Number.NEGATIVE_INFINITY) throw O4.errors.exception({
        header: "Integer conversion",
        message: `Could not convert ${O4.util.Stringify(A)} to an integer.`
      });
      if (H = O4.util.IntegerPart(H), H < w || H > z) throw O4.errors.exception({
        header: "Integer conversion",
        message: `Value must be between ${w}-${z}, got ${H}.`
      });
      return H;
    }
    if (!Number.isNaN(H) && Y?.clamp === !0) {
      if (H = Math.min(Math.max(H, w), z), Math.floor(H) % 2 === 0) H = Math.floor(H);else H = Math.ceil(H);
      return H;
    }
    if (Number.isNaN(H) || H === 0 && Object.is(0, H) || H === Number.POSITIVE_INFINITY || H === Number.NEGATIVE_INFINITY) return 0;
    if (H = O4.util.IntegerPart(H), H = H % Math.pow(2, K), q === "signed" && H >= Math.pow(2, K) - 1) return H - Math.pow(2, K);
    return H;
  };
  O4.util.IntegerPart = function (A) {
    let K = Math.floor(Math.abs(A));
    if (A < 0) return -1 * K;
    return K;
  };
  O4.util.Stringify = function (A) {
    switch (O4.util.Type(A)) {
      case "Symbol":
        return `Symbol(${A.description})`;
      case "Object":
        return km3(A);
      case "String":
        return `"${A}"`;
      default:
        return `${A}`;
    }
  };
  O4.sequenceConverter = function (A) {
    return (K, q, Y, z) => {
      if (O4.util.Type(K) !== "Object") throw O4.errors.exception({
        header: q,
        message: `${Y} (${O4.util.Stringify(K)}) is not iterable.`
      });
      let w = typeof z === "function" ? z() : K?.[Symbol.iterator]?.(),
        H = [],
        J = 0;
      if (w === void 0 || typeof w.next !== "function") throw O4.errors.exception({
        header: q,
        message: `${Y} is not iterable.`
      });
      while (!0) {
        let {
          done: O,
          value: X
        } = w.next();
        if (O) break;
        H.push(A(X, q, `${Y}[${J++}]`));
      }
      return H;
    };
  };
  O4.recordConverter = function (A, K) {
    return (q, Y, z) => {
      if (O4.util.Type(q) !== "Object") throw O4.errors.exception({
        header: Y,
        message: `${z} ("${O4.util.Type(q)}") is not an Object.`
      });
      let w = {};
      if (!Xx.isProxy(q)) {
        let J = [...Object.getOwnPropertyNames(q), ...Object.getOwnPropertySymbols(q)];
        for (let O of J) {
          let X = A(O, Y, z),
            $ = K(q[O], Y, z);
          w[X] = $;
        }
        return w;
      }
      let H = Reflect.ownKeys(q);
      for (let J of H) if (Reflect.getOwnPropertyDescriptor(q, J)?.enumerable) {
        let X = A(J, Y, z),
          $ = K(q[J], Y, z);
        w[X] = $;
      }
      return w;
    };
  };
  O4.interfaceConverter = function (A) {
    return (K, q, Y, z) => {
      if (z?.strict !== !1 && !(K instanceof A)) throw O4.errors.exception({
        header: q,
        message: `Expected ${Y} ("${O4.util.Stringify(K)}") to be an instance of ${A.name}.`
      });
      return K;
    };
  };
  O4.dictionaryConverter = function (A) {
    return (K, q, Y) => {
      let z = O4.util.Type(K),
        w = {};
      if (z === "Null" || z === "Undefined") return w;else if (z !== "Object") throw O4.errors.exception({
        header: q,
        message: `Expected ${K} to be one of: Null, Undefined, Object.`
      });
      for (let H of A) {
        let {
          key: J,
          defaultValue: O,
          required: X,
          converter: $
        } = H;
        if (X === !0) {
          if (!Object.hasOwn(K, J)) throw O4.errors.exception({
            header: q,
            message: `Missing required key "${J}".`
          });
        }
        let _ = K[J],
          G = Object.hasOwn(H, "defaultValue");
        if (G && _ !== null) _ ??= O();
        if (X || G || _ !== void 0) {
          if (_ = $(_, q, `${Y}.${J}`), H.allowedValues && !H.allowedValues.includes(_)) throw O4.errors.exception({
            header: q,
            message: `${_} is not an accepted type. Expected one of ${H.allowedValues.join(", ")}.`
          });
          w[J] = _;
        }
      }
      return w;
    };
  };
  O4.nullableConverter = function (A) {
    return (K, q, Y) => {
      if (K === null) return K;
      return A(K, q, Y);
    };
  };
  O4.converters.DOMString = function (A, K, q, Y) {
    if (A === null && Y?.legacyNullToEmptyString) return "";
    if (typeof A === "symbol") throw O4.errors.exception({
      header: K,
      message: `${q} is a symbol, which cannot be converted to a DOMString.`
    });
    return String(A);
  };
  O4.converters.ByteString = function (A, K, q) {
    let Y = O4.converters.DOMString(A, K, q);
    for (let z = 0; z < Y.length; z++) if (Y.charCodeAt(z) > 255) throw TypeError(`Cannot convert argument to a ByteString because the character at index ${z} has a value of ${Y.charCodeAt(z)} which is greater than 255.`);
    return Y;
  };
  O4.converters.USVString = Lm3;
  O4.converters.boolean = function (A) {
    return Boolean(A);
  };
  O4.converters.any = function (A) {
    return A;
  };
  O4.converters["long long"] = function (A, K, q) {
    return O4.util.ConvertToInt(A, 64, "signed", void 0, K, q);
  };
  O4.converters["unsigned long long"] = function (A, K, q) {
    return O4.util.ConvertToInt(A, 64, "unsigned", void 0, K, q);
  };
  O4.converters["unsigned long"] = function (A, K, q) {
    return O4.util.ConvertToInt(A, 32, "unsigned", void 0, K, q);
  };
  O4.converters["unsigned short"] = function (A, K, q, Y) {
    return O4.util.ConvertToInt(A, 16, "unsigned", Y, K, q);
  };
  O4.converters.ArrayBuffer = function (A, K, q, Y) {
    if (O4.util.Type(A) !== "Object" || !Xx.isAnyArrayBuffer(A)) throw O4.errors.conversionFailed({
      prefix: K,
      argument: `${q} ("${O4.util.Stringify(A)}")`,
      types: ["ArrayBuffer"]
    });
    if (Y?.allowShared === !1 && Xx.isSharedArrayBuffer(A)) throw O4.errors.exception({
      header: "ArrayBuffer",
      message: "SharedArrayBuffer is not allowed."
    });
    if (A.resizable || A.growable) throw O4.errors.exception({
      header: "ArrayBuffer",
      message: "Received a resizable ArrayBuffer."
    });
    return A;
  };
  O4.converters.TypedArray = function (A, K, q, Y, z) {
    if (O4.util.Type(A) !== "Object" || !Xx.isTypedArray(A) || A.constructor.name !== K.name) throw O4.errors.conversionFailed({
      prefix: q,
      argument: `${Y} ("${O4.util.Stringify(A)}")`,
      types: [K.name]
    });
    if (z?.allowShared === !1 && Xx.isSharedArrayBuffer(A.buffer)) throw O4.errors.exception({
      header: "ArrayBuffer",
      message: "SharedArrayBuffer is not allowed."
    });
    if (A.buffer.resizable || A.buffer.growable) throw O4.errors.exception({
      header: "ArrayBuffer",
      message: "Received a resizable ArrayBuffer."
    });
    return A;
  };
  O4.converters.DataView = function (A, K, q, Y) {
    if (O4.util.Type(A) !== "Object" || !Xx.isDataView(A)) throw O4.errors.exception({
      header: K,
      message: `${q} is not a DataView.`
    });
    if (Y?.allowShared === !1 && Xx.isSharedArrayBuffer(A.buffer)) throw O4.errors.exception({
      header: "ArrayBuffer",
      message: "SharedArrayBuffer is not allowed."
    });
    if (A.buffer.resizable || A.buffer.growable) throw O4.errors.exception({
      header: "ArrayBuffer",
      message: "Received a resizable ArrayBuffer."
    });
    return A;
  };
  O4.converters.BufferSource = function (A, K, q, Y) {
    if (Xx.isAnyArrayBuffer(A)) return O4.converters.ArrayBuffer(A, K, q, {
      ...Y,
      allowShared: !1
    });
    if (Xx.isTypedArray(A)) return O4.converters.TypedArray(A, A.constructor, K, q, {
      ...Y,
      allowShared: !1
    });
    if (Xx.isDataView(A)) return O4.converters.DataView(A, K, q, {
      ...Y,
      allowShared: !1
    });
    throw O4.errors.conversionFailed({
      prefix: K,
      argument: `${q} ("${O4.util.Stringify(A)}")`,
      types: ["BufferSource"]
    });
  };
  O4.converters["sequence<ByteString>"] = O4.sequenceConverter(O4.converters.ByteString);
  O4.converters["sequence<sequence<ByteString>>"] = O4.sequenceConverter(O4.converters["sequence<ByteString>"]);
  O4.converters["record<ByteString, ByteString>"] = O4.recordConverter(O4.converters.ByteString, O4.converters.ByteString);
  cq4.exports = {
    webidl: O4
  };
});

// Register to shared state
__$.SZ = SZ;
