// Module: Fc4
// Dependencies: Cd4, Dc4, C26, s, n, de

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Fc4 = v((Mfw, gc4) => {
  var {
      defineProperty: Zz1,
      getOwnPropertyDescriptor: _d9,
      getOwnPropertyNames: Gd9
    } = Object,
    Zd9 = Object.prototype.hasOwnProperty,
    Q4 = (A, K) => Zz1(A, "name", {
      value: K,
      configurable: !0
    }),
    Wd9 = (A, K) => {
      for (var q in K) Zz1(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    Dd9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of Gd9(K)) if (!Zd9.call(A, z) && z !== q) Zz1(A, z, {
          get: () => K[z],
          enumerable: !(Y = _d9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    jd9 = A => Dd9(Zz1({}, "__esModule", {
      value: !0
    }), A),
    Mc4 = {};
  Wd9(Mc4, {
    Client: () => Pd9,
    Command: () => Tc4,
    LazyJsonString: () => Wc9,
    NoOpLogger: () => Md9,
    SENSITIVE_STRING: () => Nd9,
    ServiceException: () => qc9,
    StringWrapper: () => aSA,
    _json: () => Dw6,
    collectBody: () => Vd9,
    convertMap: () => Dc9,
    createAggregatedClient: () => Td9,
    dateToUtcString: () => yc4,
    decorateServiceException: () => Sc4,
    emitWarningIfUnsupportedVersion: () => Hc9,
    expectBoolean: () => Ed9,
    expectByte: () => Ww6,
    expectFloat32: () => $z1,
    expectInt: () => Cd9,
    expectInt32: () => Gw6,
    expectLong: () => rSA,
    expectNonNull: () => Rd9,
    expectNumber: () => nSA,
    expectObject: () => Ec4,
    expectShort: () => Zw6,
    expectString: () => yd9,
    expectUnion: () => Id9,
    extendedEncodeURIComponent: () => Gz1,
    getArrayIfSingleItem: () => Zc9,
    getDefaultClientConfiguration: () => _c9,
    getDefaultExtensionConfiguration: () => bc4,
    getValueFromTextNode: () => xc4,
    handleFloat: () => bd9,
    limitedParseDouble: () => Pw6,
    limitedParseFloat: () => xd9,
    limitedParseFloat32: () => ud9,
    loadConfigsForDefaultMode: () => wc9,
    logger: () => oSA,
    map: () => fw6,
    parseBoolean: () => vd9,
    parseEpochTimestamp: () => nd9,
    parseRfc3339DateTime: () => Qd9,
    parseRfc3339DateTimeWithOffset: () => pd9,
    parseRfc7231DateTime: () => id9,
    resolveDefaultRuntimeConfig: () => Gc9,
    resolvedPath: () => fc9,
    serializeFloat: () => Nc9,
    splitEvery: () => mc4,
    strictParseByte: () => Rc4,
    strictParseDouble: () => Mw6,
    strictParseFloat: () => Sd9,
    strictParseFloat32: () => kc4,
    strictParseInt: () => Bd9,
    strictParseInt32: () => md9,
    strictParseLong: () => Lc4,
    strictParseShort: () => e$A,
    take: () => jc9,
    throwDefaultError: () => hc4,
    withBaseException: () => Yc9
  });
  gc4.exports = jd9(Mc4);
  var Pc4 = class {
    trace() {}
    debug() {}
    info() {}
    warn() {}
    error() {}
  };
  Q4(Pc4, "NoOpLogger");
  var Md9 = Pc4,
    Vc4 = __$.Cd4(),
    fc4 = class {
      constructor(K) {
        this.middlewareStack = (0, Vc4.constructStack)(), this.config = K;
      }
      send(K, q, Y) {
        let z = typeof q !== "function" ? q : void 0,
          w = typeof q === "function" ? q : Y,
          H = K.resolveMiddleware(this.middlewareStack, this.config, z);
        if (w) H(K).then(J => w(null, J.output), J => w(J)).catch(() => {});else return H(K).then(J => J.output);
      }
      destroy() {
        if (this.config.requestHandler.destroy) this.config.requestHandler.destroy();
      }
    };
  Q4(fc4, "Client");
  var Pd9 = fc4,
    Xw6 = __$.Dc4(),
    Vd9 = Q4(async (A = new Uint8Array(), K) => {
      if (A instanceof Uint8Array) return Xw6.Uint8ArrayBlobAdapter.mutate(A);
      if (!A) return Xw6.Uint8ArrayBlobAdapter.mutate(new Uint8Array());
      let q = K.streamCollector(A);
      return Xw6.Uint8ArrayBlobAdapter.mutate(await q);
    }, "collectBody"),
    _w6 = __$.C26(),
    Nc4 = class {
      constructor() {
        this.middlewareStack = (0, Vc4.constructStack)();
      }
      static classBuilder() {
        return new fd9();
      }
      resolveMiddlewareWithContext(K, q, Y, {
        middlewareFn: z,
        clientName: w,
        commandName: H,
        inputFilterSensitiveLog: J,
        outputFilterSensitiveLog: O,
        smithyContext: X,
        additionalContext: $,
        CommandCtor: _
      }) {
        for (let j of z.bind(this)(_, K, q, Y)) this.middlewareStack.use(j);
        let G = K.concat(this.middlewareStack),
          {
            logger: Z
          } = q,
          W = {
            logger: Z,
            clientName: w,
            commandName: H,
            inputFilterSensitiveLog: J,
            outputFilterSensitiveLog: O,
            [_w6.SMITHY_CONTEXT_KEY]: {
              ...X
            },
            ...$
          },
          {
            requestHandler: D
          } = q;
        return G.resolve(j => D.handle(j.request, Y || {}), W);
      }
    };
  Q4(Nc4, "Command");
  var Tc4 = Nc4,
    vc4 = class {
      constructor() {
        this._init = () => {}, this._ep = {}, this._middlewareFn = () => [], this._commandName = "", this._clientName = "", this._additionalContext = {}, this._smithyContext = {}, this._inputFilterSensitiveLog = K => K, this._outputFilterSensitiveLog = K => K, this._serializer = null, this._deserializer = null;
      }
      init(K) {
        this._init = K;
      }
      ep(K) {
        return this._ep = K, this;
      }
      m(K) {
        return this._middlewareFn = K, this;
      }
      s(K, q, Y = {}) {
        return this._smithyContext = {
          service: K,
          operation: q,
          ...Y
        }, this;
      }
      c(K = {}) {
        return this._additionalContext = K, this;
      }
      n(K, q) {
        return this._clientName = K, this._commandName = q, this;
      }
      f(K = Y => Y, q = Y => Y) {
        return this._inputFilterSensitiveLog = K, this._outputFilterSensitiveLog = q, this;
      }
      ser(K) {
        return this._serializer = K, this;
      }
      de(K) {
        return this._deserializer = K, this;
      }
      build() {
        var K;
        let q = this,
          Y;
        return Y = (K = class extends Tc4 {
          constructor(...[z]) {
            super();
            this.serialize = q._serializer, this.deserialize = q._deserializer, this.input = z ?? {}, q._init(this);
          }
          static getEndpointParameterInstructions() {
            return q._ep;
          }
          resolveMiddleware(z, w, H) {
            return this.resolveMiddlewareWithContext(z, w, H, {
              CommandCtor: Y,
              middlewareFn: q._middlewareFn,
              clientName: q._clientName,
              commandName: q._commandName,
              inputFilterSensitiveLog: q._inputFilterSensitiveLog,
              outputFilterSensitiveLog: q._outputFilterSensitiveLog,
              smithyContext: q._smithyContext,
              additionalContext: q._additionalContext
            });
          }
        }, Q4(K, "CommandRef"), K);
      }
    };
  Q4(vc4, "ClassBuilder");
  var fd9 = vc4,
    Nd9 = "***SensitiveInformation***",
    Td9 = Q4((A, K) => {
      for (let q of Object.keys(A)) {
        let Y = A[q],
          z = Q4(async function (H, J, O) {
            let X = new Y(H);
            if (typeof J === "function") this.send(X, J);else if (typeof O === "function") {
              if (typeof J !== "object") throw Error(`Expected http options but got ${typeof J}`);
              this.send(X, J || {}, O);
            } else return this.send(X, J);
          }, "methodImpl"),
          w = (q[0].toLowerCase() + q.slice(1)).replace(/Command$/, "");
        K.prototype[w] = z;
      }
    }, "createAggregatedClient"),
    vd9 = Q4(A => {
      switch (A) {
        case "true":
          return !0;
        case "false":
          return !1;
        default:
          throw Error(`Unable to parse boolean value "${A}"`);
      }
    }, "parseBoolean"),
    Ed9 = Q4(A => {
      if (A === null || A === void 0) return;
      if (typeof A === "number") {
        if (A === 0 || A === 1) oSA.warn(_z1(`Expected boolean, got ${typeof A}: ${A}`));
        if (A === 0) return !1;
        if (A === 1) return !0;
      }
      if (typeof A === "string") {
        let K = A.toLowerCase();
        if (K === "false" || K === "true") oSA.warn(_z1(`Expected boolean, got ${typeof A}: ${A}`));
        if (K === "false") return !1;
        if (K === "true") return !0;
      }
      if (typeof A === "boolean") return A;
      throw TypeError(`Expected boolean, got ${typeof A}: ${A}`);
    }, "expectBoolean"),
    nSA = Q4(A => {
      if (A === null || A === void 0) return;
      if (typeof A === "string") {
        let K = parseFloat(A);
        if (!Number.isNaN(K)) {
          if (String(K) !== String(A)) oSA.warn(_z1(`Expected number but observed string: ${A}`));
          return K;
        }
      }
      if (typeof A === "number") return A;
      throw TypeError(`Expected number, got ${typeof A}: ${A}`);
    }, "expectNumber"),
    kd9 = Math.ceil(340282346638528860000000000000000000000),
    $z1 = Q4(A => {
      let K = nSA(A);
      if (K !== void 0 && !Number.isNaN(K) && K !== 1 / 0 && K !== -1 / 0) {
        if (Math.abs(K) > kd9) throw TypeError(`Expected 32-bit float, got ${A}`);
      }
      return K;
    }, "expectFloat32"),
    rSA = Q4(A => {
      if (A === null || A === void 0) return;
      if (Number.isInteger(A) && !Number.isNaN(A)) return A;
      throw TypeError(`Expected integer, got ${typeof A}: ${A}`);
    }, "expectLong"),
    Cd9 = rSA,
    Gw6 = Q4(A => jw6(A, 32), "expectInt32"),
    Zw6 = Q4(A => jw6(A, 16), "expectShort"),
    Ww6 = Q4(A => jw6(A, 8), "expectByte"),
    jw6 = Q4((A, K) => {
      let q = rSA(A);
      if (q !== void 0 && Ld9(q, K) !== q) throw TypeError(`Expected ${K}-bit integer, got ${A}`);
      return q;
    }, "expectSizedInt"),
    Ld9 = Q4((A, K) => {
      switch (K) {
        case 32:
          return Int32Array.of(A)[0];
        case 16:
          return Int16Array.of(A)[0];
        case 8:
          return Int8Array.of(A)[0];
      }
    }, "castInt"),
    Rd9 = Q4((A, K) => {
      if (A === null || A === void 0) {
        if (K) throw TypeError(`Expected a non-null value for ${K}`);
        throw TypeError("Expected a non-null value");
      }
      return A;
    }, "expectNonNull"),
    Ec4 = Q4(A => {
      if (A === null || A === void 0) return;
      if (typeof A === "object" && !Array.isArray(A)) return A;
      let K = Array.isArray(A) ? "array" : typeof A;
      throw TypeError(`Expected object, got ${K}: ${A}`);
    }, "expectObject"),
    yd9 = Q4(A => {
      if (A === null || A === void 0) return;
      if (typeof A === "string") return A;
      if (["boolean", "number", "bigint"].includes(typeof A)) return oSA.warn(_z1(`Expected string, got ${typeof A}: ${A}`)), String(A);
      throw TypeError(`Expected string, got ${typeof A}: ${A}`);
    }, "expectString"),
    Id9 = Q4(A => {
      if (A === null || A === void 0) return;
      let K = Ec4(A),
        q = Object.entries(K).filter(([, Y]) => Y != null).map(([Y]) => Y);
      if (q.length === 0) throw TypeError("Unions must have exactly one non-null member. None were found.");
      if (q.length > 1) throw TypeError(`Unions must have exactly one non-null member. Keys ${q} were not null.`);
      return K;
    }, "expectUnion"),
    Mw6 = Q4(A => {
      if (typeof A == "string") return nSA(K_A(A));
      return nSA(A);
    }, "strictParseDouble"),
    Sd9 = Mw6,
    kc4 = Q4(A => {
      if (typeof A == "string") return $z1(K_A(A));
      return $z1(A);
    }, "strictParseFloat32"),
    hd9 = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g,
    K_A = Q4(A => {
      let K = A.match(hd9);
      if (K === null || K[0].length !== A.length) throw TypeError("Expected real number, got implicit NaN");
      return parseFloat(A);
    }, "parseNumber"),
    Pw6 = Q4(A => {
      if (typeof A == "string") return Cc4(A);
      return nSA(A);
    }, "limitedParseDouble"),
    bd9 = Pw6,
    xd9 = Pw6,
    ud9 = Q4(A => {
      if (typeof A == "string") return Cc4(A);
      return $z1(A);
    }, "limitedParseFloat32"),
    Cc4 = Q4(A => {
      switch (A) {
        case "NaN":
          return NaN;
        case "Infinity":
          return 1 / 0;
        case "-Infinity":
          return -1 / 0;
        default:
          throw Error(`Unable to parse float value: ${A}`);
      }
    }, "parseFloatString"),
    Lc4 = Q4(A => {
      if (typeof A === "string") return rSA(K_A(A));
      return rSA(A);
    }, "strictParseLong"),
    Bd9 = Lc4,
    md9 = Q4(A => {
      if (typeof A === "string") return Gw6(K_A(A));
      return Gw6(A);
    }, "strictParseInt32"),
    e$A = Q4(A => {
      if (typeof A === "string") return Zw6(K_A(A));
      return Zw6(A);
    }, "strictParseShort"),
    Rc4 = Q4(A => {
      if (typeof A === "string") return Ww6(K_A(A));
      return Ww6(A);
    }, "strictParseByte"),
    _z1 = Q4(A => {
      return String(TypeError(A).stack || A).split(`
`).slice(0, 5).filter(K => !K.includes("stackTraceWarning")).join(`
`);
    }, "stackTraceWarning"),
    oSA = {
      warn: console.warn
    },
    gd9 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    Vw6 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function yc4(A) {
    let K = A.getUTCFullYear(),
      q = A.getUTCMonth(),
      Y = A.getUTCDay(),
      z = A.getUTCDate(),
      w = A.getUTCHours(),
      H = A.getUTCMinutes(),
      J = A.getUTCSeconds(),
      O = z < 10 ? `0${z}` : `${z}`,
      X = w < 10 ? `0${w}` : `${w}`,
      $ = H < 10 ? `0${H}` : `${H}`,
      _ = J < 10 ? `0${J}` : `${J}`;
    return `${gd9[Y]}, ${O} ${Vw6[q]} ${K} ${X}:${$}:${_} GMT`;
  }
  Q4(yc4, "dateToUtcString");
  var Fd9 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/),
    Qd9 = Q4(A => {
      if (A === null || A === void 0) return;
      if (typeof A !== "string") throw TypeError("RFC-3339 date-times must be expressed as strings");
      let K = Fd9.exec(A);
      if (!K) throw TypeError("Invalid RFC-3339 date-time value");
      let [q, Y, z, w, H, J, O, X] = K,
        $ = e$A(A_A(Y)),
        _ = Ou(z, "month", 1, 12),
        G = Ou(w, "day", 1, 31);
      return iSA($, _, G, {
        hours: H,
        minutes: J,
        seconds: O,
        fractionalMilliseconds: X
      });
    }, "parseRfc3339DateTime"),
    Ud9 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/),
    pd9 = Q4(A => {
      if (A === null || A === void 0) return;
      if (typeof A !== "string") throw TypeError("RFC-3339 date-times must be expressed as strings");
      let K = Ud9.exec(A);
      if (!K) throw TypeError("Invalid RFC-3339 date-time value");
      let [q, Y, z, w, H, J, O, X, $] = K,
        _ = e$A(A_A(Y)),
        G = Ou(z, "month", 1, 12),
        Z = Ou(w, "day", 1, 31),
        W = iSA(_, G, Z, {
          hours: H,
          minutes: J,
          seconds: O,
          fractionalMilliseconds: X
        });
      if ($.toUpperCase() != "Z") W.setTime(W.getTime() - Kc9($));
      return W;
    }, "parseRfc3339DateTimeWithOffset"),
    dd9 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),
    cd9 = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),
    ld9 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/),
    id9 = Q4(A => {
      if (A === null || A === void 0) return;
      if (typeof A !== "string") throw TypeError("RFC-7231 date-times must be expressed as strings");
      let K = dd9.exec(A);
      if (K) {
        let [q, Y, z, w, H, J, O, X] = K;
        return iSA(e$A(A_A(w)), $w6(z), Ou(Y, "day", 1, 31), {
          hours: H,
          minutes: J,
          seconds: O,
          fractionalMilliseconds: X
        });
      }
      if (K = cd9.exec(A), K) {
        let [q, Y, z, w, H, J, O, X] = K;
        return ad9(iSA(rd9(w), $w6(z), Ou(Y, "day", 1, 31), {
          hours: H,
          minutes: J,
          seconds: O,
          fractionalMilliseconds: X
        }));
      }
      if (K = ld9.exec(A), K) {
        let [q, Y, z, w, H, J, O, X] = K;
        return iSA(e$A(A_A(X)), $w6(Y), Ou(z.trimLeft(), "day", 1, 31), {
          hours: w,
          minutes: H,
          seconds: J,
          fractionalMilliseconds: O
        });
      }
      throw TypeError("Invalid RFC-7231 date-time value");
    }, "parseRfc7231DateTime"),
    nd9 = Q4(A => {
      if (A === null || A === void 0) return;
      let K;
      if (typeof A === "number") K = A;else if (typeof A === "string") K = Mw6(A);else throw TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
      if (Number.isNaN(K) || K === 1 / 0 || K === -1 / 0) throw TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
      return new Date(Math.round(K * 1000));
    }, "parseEpochTimestamp"),
    iSA = Q4((A, K, q, Y) => {
      let z = K - 1;
      return td9(A, z, q), new Date(Date.UTC(A, z, q, Ou(Y.hours, "hour", 0, 23), Ou(Y.minutes, "minute", 0, 59), Ou(Y.seconds, "seconds", 0, 60), Ac9(Y.fractionalMilliseconds)));
    }, "buildDate"),
    rd9 = Q4(A => {
      let K = new Date().getUTCFullYear(),
        q = Math.floor(K / 100) * 100 + e$A(A_A(A));
      if (q < K) return q + 100;
      return q;
    }, "parseTwoDigitYear"),
    od9 = 1576800000000,
    ad9 = Q4(A => {
      if (A.getTime() - new Date().getTime() > od9) return new Date(Date.UTC(A.getUTCFullYear() - 100, A.getUTCMonth(), A.getUTCDate(), A.getUTCHours(), A.getUTCMinutes(), A.getUTCSeconds(), A.getUTCMilliseconds()));
      return A;
    }, "adjustRfc850Year"),
    $w6 = Q4(A => {
      let K = Vw6.indexOf(A);
      if (K < 0) throw TypeError(`Invalid month: ${A}`);
      return K + 1;
    }, "parseMonthByShortName"),
    sd9 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    td9 = Q4((A, K, q) => {
      let Y = sd9[K];
      if (K === 1 && ed9(A)) Y = 29;
      if (q > Y) throw TypeError(`Invalid day for ${Vw6[K]} in ${A}: ${q}`);
    }, "validateDayOfMonth"),
    ed9 = Q4(A => {
      return A % 4 === 0 && (A % 100 !== 0 || A % 400 === 0);
    }, "isLeapYear"),
    Ou = Q4((A, K, q, Y) => {
      let z = Rc4(A_A(A));
      if (z < q || z > Y) throw TypeError(`${K} must be between ${q} and ${Y}, inclusive`);
      return z;
    }, "parseDateValue"),
    Ac9 = Q4(A => {
      if (A === null || A === void 0) return 0;
      return kc4("0." + A) * 1000;
    }, "parseMilliseconds"),
    Kc9 = Q4(A => {
      let K = A[0],
        q = 1;
      if (K == "+") q = 1;else if (K == "-") q = -1;else throw TypeError(`Offset direction, ${K}, must be "+" or "-"`);
      let Y = Number(A.substring(1, 3)),
        z = Number(A.substring(4, 6));
      return q * (Y * 60 + z) * 60 * 1000;
    }, "parseOffsetToMilliseconds"),
    A_A = Q4(A => {
      let K = 0;
      while (K < A.length - 1 && A.charAt(K) === "0") K++;
      if (K === 0) return A;
      return A.slice(K);
    }, "stripLeadingZeroes"),
    Ic4 = class A extends Error {
      constructor(K) {
        super(K.message);
        Object.setPrototypeOf(this, A.prototype), this.name = K.name, this.$fault = K.$fault, this.$metadata = K.$metadata;
      }
    };
  Q4(Ic4, "ServiceException");
  var qc9 = Ic4,
    Sc4 = Q4((A, K = {}) => {
      Object.entries(K).filter(([, Y]) => Y !== void 0).forEach(([Y, z]) => {
        if (A[Y] == null || A[Y] === "") A[Y] = z;
      });
      let q = A.message || A.Message || "UnknownError";
      return A.message = q, delete A.Message, A;
    }, "decorateServiceException"),
    hc4 = Q4(({
      output: A,
      parsedBody: K,
      exceptionCtor: q,
      errorCode: Y
    }) => {
      let z = zc9(A),
        w = z.httpStatusCode ? z.httpStatusCode + "" : void 0,
        H = new q({
          name: (K == null ? void 0 : K.code) || (K == null ? void 0 : K.Code) || Y || w || "UnknownError",
          $fault: "client",
          $metadata: z
        });
      throw Sc4(H, K);
    }, "throwDefaultError"),
    Yc9 = Q4(A => {
      return ({
        output: K,
        parsedBody: q,
        errorCode: Y
      }) => {
        hc4({
          output: K,
          parsedBody: q,
          exceptionCtor: A,
          errorCode: Y
        });
      };
    }, "withBaseException"),
    zc9 = Q4(A => ({
      httpStatusCode: A.statusCode,
      requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
      extendedRequestId: A.headers["x-amz-id-2"],
      cfId: A.headers["x-amz-cf-id"]
    }), "deserializeMetadata"),
    wc9 = Q4(A => {
      switch (A) {
        case "standard":
          return {
            retryMode: "standard",
            connectionTimeout: 3100
          };
        case "in-region":
          return {
            retryMode: "standard",
            connectionTimeout: 1100
          };
        case "cross-region":
          return {
            retryMode: "standard",
            connectionTimeout: 3100
          };
        case "mobile":
          return {
            retryMode: "standard",
            connectionTimeout: 30000
          };
        default:
          return {};
      }
    }, "loadConfigsForDefaultMode"),
    jc4 = !1,
    Hc9 = Q4(A => {
      if (A && !jc4 && parseInt(A.substring(1, A.indexOf("."))) < 14) jc4 = !0;
    }, "emitWarningIfUnsupportedVersion"),
    Jc9 = Q4(A => {
      let K = [];
      for (let q in _w6.AlgorithmId) {
        let Y = _w6.AlgorithmId[q];
        if (A[Y] === void 0) continue;
        K.push({
          algorithmId: () => Y,
          checksumConstructor: () => A[Y]
        });
      }
      return {
        _checksumAlgorithms: K,
        addChecksumAlgorithm(q) {
          this._checksumAlgorithms.push(q);
        },
        checksumAlgorithms() {
          return this._checksumAlgorithms;
        }
      };
    }, "getChecksumConfiguration"),
    Oc9 = Q4(A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    }, "resolveChecksumRuntimeConfig"),
    Xc9 = Q4(A => {
      let K = A.retryStrategy;
      return {
        setRetryStrategy(q) {
          K = q;
        },
        retryStrategy() {
          return K;
        }
      };
    }, "getRetryConfiguration"),
    $c9 = Q4(A => {
      let K = {};
      return K.retryStrategy = A.retryStrategy(), K;
    }, "resolveRetryRuntimeConfig"),
    bc4 = Q4(A => {
      return {
        ...Jc9(A),
        ...Xc9(A)
      };
    }, "getDefaultExtensionConfiguration"),
    _c9 = bc4,
    Gc9 = Q4(A => {
      return {
        ...Oc9(A),
        ...$c9(A)
      };
    }, "resolveDefaultRuntimeConfig");
  function Gz1(A) {
    return encodeURIComponent(A).replace(/[!'()*]/g, function (K) {
      return "%" + K.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  Q4(Gz1, "extendedEncodeURIComponent");
  var Zc9 = Q4(A => Array.isArray(A) ? A : [A], "getArrayIfSingleItem"),
    xc4 = Q4(A => {
      for (let q in A) if (A.hasOwnProperty(q) && A[q]["#text"] !== void 0) A[q] = A[q]["#text"];else if (typeof A[q] === "object" && A[q] !== null) A[q] = xc4(A[q]);
      return A;
    }, "getValueFromTextNode"),
    aSA = Q4(function () {
      let A = Object.getPrototypeOf(this).constructor,
        q = new (Function.bind.apply(String, [null, ...arguments]))();
      return Object.setPrototypeOf(q, A.prototype), q;
    }, "StringWrapper");
  aSA.prototype = Object.create(String.prototype, {
    constructor: {
      value: aSA,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  });
  Object.setPrototypeOf(aSA, String);
  var uc4 = class A extends aSA {
    deserializeJSON() {
      return JSON.parse(super.toString());
    }
    toJSON() {
      return super.toString();
    }
    static fromObject(K) {
      if (K instanceof A) return K;else if (K instanceof String || typeof K === "string") return new A(K);
      return new A(JSON.stringify(K));
    }
  };
  Q4(uc4, "LazyJsonString");
  var Wc9 = uc4;
  function fw6(A, K, q) {
    let Y, z, w;
    if (typeof K > "u" && typeof q > "u") Y = {}, w = A;else if (Y = A, typeof K === "function") return z = K, w = q, Mc9(Y, z, w);else w = K;
    for (let H of Object.keys(w)) {
      if (!Array.isArray(w[H])) {
        Y[H] = w[H];
        continue;
      }
      Bc4(Y, null, w, H);
    }
    return Y;
  }
  Q4(fw6, "map");
  var Dc9 = Q4(A => {
      let K = {};
      for (let [q, Y] of Object.entries(A || {})) K[q] = [, Y];
      return K;
    }, "convertMap"),
    jc9 = Q4((A, K) => {
      let q = {};
      for (let Y in K) Bc4(q, A, K, Y);
      return q;
    }, "take"),
    Mc9 = Q4((A, K, q) => {
      return fw6(A, Object.entries(q).reduce((Y, [z, w]) => {
        if (Array.isArray(w)) Y[z] = w;else if (typeof w === "function") Y[z] = [K, w()];else Y[z] = [K, w];
        return Y;
      }, {}));
    }, "mapWithFilter"),
    Bc4 = Q4((A, K, q, Y) => {
      if (K !== null) {
        let H = q[Y];
        if (typeof H === "function") H = [, H];
        let [J = Pc9, O = Vc9, X = Y] = H;
        if (typeof J === "function" && J(K[X]) || typeof J !== "function" && !!J) A[Y] = O(K[X]);
        return;
      }
      let [z, w] = q[Y];
      if (typeof w === "function") {
        let H,
          J = z === void 0 && (H = w()) != null,
          O = typeof z === "function" && !!z(void 0) || typeof z !== "function" && !!z;
        if (J) A[Y] = H;else if (O) A[Y] = w();
      } else {
        let H = z === void 0 && w != null,
          J = typeof z === "function" && !!z(w) || typeof z !== "function" && !!z;
        if (H || J) A[Y] = w;
      }
    }, "applyInstruction"),
    Pc9 = Q4(A => A != null, "nonNullish"),
    Vc9 = Q4(A => A, "pass"),
    fc9 = Q4((A, K, q, Y, z, w) => {
      if (K != null && K[q] !== void 0) {
        let H = Y();
        if (H.length <= 0) throw Error("Empty value provided for input HTTP label: " + q + ".");
        A = A.replace(z, w ? H.split("/").map(J => Gz1(J)).join("/") : Gz1(H));
      } else throw Error("No value provided for input HTTP label: " + q + ".");
      return A;
    }, "resolvedPath"),
    Nc9 = Q4(A => {
      if (A !== A) return "NaN";
      switch (A) {
        case 1 / 0:
          return "Infinity";
        case -1 / 0:
          return "-Infinity";
        default:
          return A;
      }
    }, "serializeFloat"),
    Dw6 = Q4(A => {
      if (A == null) return {};
      if (Array.isArray(A)) return A.filter(K => K != null).map(Dw6);
      if (typeof A === "object") {
        let K = {};
        for (let q of Object.keys(A)) {
          if (A[q] == null) continue;
          K[q] = Dw6(A[q]);
        }
        return K;
      }
      return A;
    }, "_json");
  function mc4(A, K, q) {
    if (q <= 0 || !Number.isInteger(q)) throw Error("Invalid number of delimiters (" + q + ") for splitEvery.");
    let Y = A.split(K);
    if (q === 1) return Y;
    let z = [],
      w = "";
    for (let H = 0; H < Y.length; H++) {
      if (w === "") w = Y[H];else w += K + Y[H];
      if ((H + 1) % q === 0) z.push(w), w = "";
    }
    if (w !== "") z.push(w);
    return z;
  }
  Q4(mc4, "splitEvery");
});

// Register to shared state
__$.Fc4 = Fc4;
