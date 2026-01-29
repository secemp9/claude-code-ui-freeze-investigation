// Module: ej
// Dependencies: Fb, VV, Io1, DJ, PV, s, n, de

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ej = v(NOA => {
  var Vc8 = __$.Fb(),
    uo1 = __$.VV(),
    ho1 = __$.Io1(),
    Pb5 = __$.DJ(),
    Mc8 = __$.PV();
  class fc8 {
    config;
    middlewareStack = Vc8.constructStack();
    initConfig;
    handlers;
    constructor(A) {
      this.config = A;
    }
    send(A, K, q) {
      let Y = typeof K !== "function" ? K : void 0,
        z = typeof K === "function" ? K : q,
        w = Y === void 0 && this.config.cacheMiddleware === !0,
        H;
      if (w) {
        if (!this.handlers) this.handlers = new WeakMap();
        let J = this.handlers;
        if (J.has(A.constructor)) H = J.get(A.constructor);else H = A.resolveMiddleware(this.middlewareStack, this.config, Y), J.set(A.constructor, H);
      } else delete this.handlers, H = A.resolveMiddleware(this.middlewareStack, this.config, Y);
      if (z) H(A).then(J => z(null, J.output), J => z(J)).catch(() => {});else return H(A).then(J => J.output);
    }
    destroy() {
      this.config?.requestHandler?.destroy?.(), delete this.handlers;
    }
  }
  var So1 = "***SensitiveInformation***";
  function bo1(A, K) {
    if (K == null) return K;
    let q = Pb5.NormalizedSchema.of(A);
    if (q.getMergedTraits().sensitive) return So1;
    if (q.isListSchema()) {
      if (!!q.getValueSchema().getMergedTraits().sensitive) return So1;
    } else if (q.isMapSchema()) {
      if (!!q.getKeySchema().getMergedTraits().sensitive || !!q.getValueSchema().getMergedTraits().sensitive) return So1;
    } else if (q.isStructSchema() && typeof K === "object") {
      let Y = K,
        z = {};
      for (let [w, H] of q.structIterator()) if (Y[w] != null) z[w] = bo1(H, Y[w]);
      return z;
    }
    return K;
  }
  class Bo1 {
    middlewareStack = Vc8.constructStack();
    schema;
    static classBuilder() {
      return new Nc8();
    }
    resolveMiddlewareWithContext(A, K, q, {
      middlewareFn: Y,
      clientName: z,
      commandName: w,
      inputFilterSensitiveLog: H,
      outputFilterSensitiveLog: J,
      smithyContext: O,
      additionalContext: X,
      CommandCtor: $
    }) {
      for (let D of Y.bind(this)($, A, K, q)) this.middlewareStack.use(D);
      let _ = A.concat(this.middlewareStack),
        {
          logger: G
        } = K,
        Z = {
          logger: G,
          clientName: z,
          commandName: w,
          inputFilterSensitiveLog: H,
          outputFilterSensitiveLog: J,
          [ho1.SMITHY_CONTEXT_KEY]: {
            commandInstance: this,
            ...O
          },
          ...X
        },
        {
          requestHandler: W
        } = K;
      return _.resolve(D => W.handle(D.request, q || {}), Z);
    }
  }
  class Nc8 {
    _init = () => {};
    _ep = {};
    _middlewareFn = () => [];
    _commandName = "";
    _clientName = "";
    _additionalContext = {};
    _smithyContext = {};
    _inputFilterSensitiveLog = void 0;
    _outputFilterSensitiveLog = void 0;
    _serializer = null;
    _deserializer = null;
    _operationSchema;
    init(A) {
      this._init = A;
    }
    ep(A) {
      return this._ep = A, this;
    }
    m(A) {
      return this._middlewareFn = A, this;
    }
    s(A, K, q = {}) {
      return this._smithyContext = {
        service: A,
        operation: K,
        ...q
      }, this;
    }
    c(A = {}) {
      return this._additionalContext = A, this;
    }
    n(A, K) {
      return this._clientName = A, this._commandName = K, this;
    }
    f(A = q => q, K = q => q) {
      return this._inputFilterSensitiveLog = A, this._outputFilterSensitiveLog = K, this;
    }
    ser(A) {
      return this._serializer = A, this;
    }
    de(A) {
      return this._deserializer = A, this;
    }
    sc(A) {
      return this._operationSchema = A, this._smithyContext.operationSchema = A, this;
    }
    build() {
      let A = this,
        K;
      return K = class extends Bo1 {
        input;
        static getEndpointParameterInstructions() {
          return A._ep;
        }
        constructor(...[q]) {
          super();
          this.input = q ?? {}, A._init(this), this.schema = A._operationSchema;
        }
        resolveMiddleware(q, Y, z) {
          let w = A._operationSchema,
            H = w?.[4] ?? w?.input,
            J = w?.[5] ?? w?.output;
          return this.resolveMiddlewareWithContext(q, Y, z, {
            CommandCtor: K,
            middlewareFn: A._middlewareFn,
            clientName: A._clientName,
            commandName: A._commandName,
            inputFilterSensitiveLog: A._inputFilterSensitiveLog ?? (w ? bo1.bind(null, H) : O => O),
            outputFilterSensitiveLog: A._outputFilterSensitiveLog ?? (w ? bo1.bind(null, J) : O => O),
            smithyContext: A._smithyContext,
            additionalContext: A._additionalContext
          });
        }
        serialize = A._serializer;
        deserialize = A._deserializer;
      };
    }
  }
  var Vb5 = "***SensitiveInformation***",
    fb5 = (A, K) => {
      for (let q of Object.keys(A)) {
        let Y = A[q],
          z = async function (H, J, O) {
            let X = new Y(H);
            if (typeof J === "function") this.send(X, J);else if (typeof O === "function") {
              if (typeof J !== "object") throw Error(`Expected http options but got ${typeof J}`);
              this.send(X, J || {}, O);
            } else return this.send(X, J);
          },
          w = (q[0].toLowerCase() + q.slice(1)).replace(/Command$/, "");
        K.prototype[w] = z;
      }
    };
  class fOA extends Error {
    $fault;
    $response;
    $retryable;
    $metadata;
    constructor(A) {
      super(A.message);
      Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype), this.name = A.name, this.$fault = A.$fault, this.$metadata = A.$metadata;
    }
    static isInstance(A) {
      if (!A) return !1;
      let K = A;
      return fOA.prototype.isPrototypeOf(K) || Boolean(K.$fault) && Boolean(K.$metadata) && (K.$fault === "client" || K.$fault === "server");
    }
    static [Symbol.hasInstance](A) {
      if (!A) return !1;
      let K = A;
      if (this === fOA) return fOA.isInstance(A);
      if (fOA.isInstance(A)) {
        if (K.name && this.name) return this.prototype.isPrototypeOf(A) || K.name === this.name;
        return this.prototype.isPrototypeOf(A);
      }
      return !1;
    }
  }
  var Tc8 = (A, K = {}) => {
      Object.entries(K).filter(([, Y]) => Y !== void 0).forEach(([Y, z]) => {
        if (A[Y] == null || A[Y] === "") A[Y] = z;
      });
      let q = A.message || A.Message || "UnknownError";
      return A.message = q, delete A.Message, A;
    },
    vc8 = ({
      output: A,
      parsedBody: K,
      exceptionCtor: q,
      errorCode: Y
    }) => {
      let z = Tb5(A),
        w = z.httpStatusCode ? z.httpStatusCode + "" : void 0,
        H = new q({
          name: K?.code || K?.Code || Y || w || "UnknownError",
          $fault: "client",
          $metadata: z
        });
      throw Tc8(H, K);
    },
    Nb5 = A => {
      return ({
        output: K,
        parsedBody: q,
        errorCode: Y
      }) => {
        vc8({
          output: K,
          parsedBody: q,
          exceptionCtor: A,
          errorCode: Y
        });
      };
    },
    Tb5 = A => ({
      httpStatusCode: A.statusCode,
      requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
      extendedRequestId: A.headers["x-amz-id-2"],
      cfId: A.headers["x-amz-cf-id"]
    }),
    vb5 = A => {
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
    },
    Pc8 = !1,
    Eb5 = A => {
      if (A && !Pc8 && parseInt(A.substring(1, A.indexOf("."))) < 16) Pc8 = !0;
    },
    kb5 = A => {
      let K = [];
      for (let q in ho1.AlgorithmId) {
        let Y = ho1.AlgorithmId[q];
        if (A[Y] === void 0) continue;
        K.push({
          algorithmId: () => Y,
          checksumConstructor: () => A[Y]
        });
      }
      return {
        addChecksumAlgorithm(q) {
          K.push(q);
        },
        checksumAlgorithms() {
          return K;
        }
      };
    },
    Cb5 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    Lb5 = A => {
      return {
        setRetryStrategy(K) {
          A.retryStrategy = K;
        },
        retryStrategy() {
          return A.retryStrategy;
        }
      };
    },
    Rb5 = A => {
      let K = {};
      return K.retryStrategy = A.retryStrategy(), K;
    },
    Ec8 = A => {
      return Object.assign(kb5(A), Lb5(A));
    },
    yb5 = Ec8,
    Ib5 = A => {
      return Object.assign(Cb5(A), Rb5(A));
    },
    Sb5 = A => Array.isArray(A) ? A : [A],
    kc8 = A => {
      for (let q in A) if (A.hasOwnProperty(q) && A[q]["#text"] !== void 0) A[q] = A[q]["#text"];else if (typeof A[q] === "object" && A[q] !== null) A[q] = kc8(A[q]);
      return A;
    },
    hb5 = A => {
      return A != null;
    };
  class Cc8 {
    trace() {}
    debug() {}
    info() {}
    warn() {}
    error() {}
  }
  function Lc8(A, K, q) {
    let Y, z, w;
    if (typeof K > "u" && typeof q > "u") Y = {}, w = A;else if (Y = A, typeof K === "function") return z = K, w = q, ub5(Y, z, w);else w = K;
    for (let H of Object.keys(w)) {
      if (!Array.isArray(w[H])) {
        Y[H] = w[H];
        continue;
      }
      Rc8(Y, null, w, H);
    }
    return Y;
  }
  var bb5 = A => {
      let K = {};
      for (let [q, Y] of Object.entries(A || {})) K[q] = [, Y];
      return K;
    },
    xb5 = (A, K) => {
      let q = {};
      for (let Y in K) Rc8(q, A, K, Y);
      return q;
    },
    ub5 = (A, K, q) => {
      return Lc8(A, Object.entries(q).reduce((Y, [z, w]) => {
        if (Array.isArray(w)) Y[z] = w;else if (typeof w === "function") Y[z] = [K, w()];else Y[z] = [K, w];
        return Y;
      }, {}));
    },
    Rc8 = (A, K, q, Y) => {
      if (K !== null) {
        let H = q[Y];
        if (typeof H === "function") H = [, H];
        let [J = Bb5, O = mb5, X = Y] = H;
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
    },
    Bb5 = A => A != null,
    mb5 = A => A,
    gb5 = A => {
      if (A !== A) return "NaN";
      switch (A) {
        case 1 / 0:
          return "Infinity";
        case -1 / 0:
          return "-Infinity";
        default:
          return A;
      }
    },
    Fb5 = A => A.toISOString().replace(".000Z", "Z"),
    xo1 = A => {
      if (A == null) return {};
      if (Array.isArray(A)) return A.filter(K => K != null).map(xo1);
      if (typeof A === "object") {
        let K = {};
        for (let q of Object.keys(A)) {
          if (A[q] == null) continue;
          K[q] = xo1(A[q]);
        }
        return K;
      }
      return A;
    };
  Object.defineProperty(NOA, "collectBody", {
    enumerable: !0,
    get: function () {
      return uo1.collectBody;
    }
  });
  Object.defineProperty(NOA, "extendedEncodeURIComponent", {
    enumerable: !0,
    get: function () {
      return uo1.extendedEncodeURIComponent;
    }
  });
  Object.defineProperty(NOA, "resolvedPath", {
    enumerable: !0,
    get: function () {
      return uo1.resolvedPath;
    }
  });
  NOA.Client = fc8;
  NOA.Command = Bo1;
  NOA.NoOpLogger = Cc8;
  NOA.SENSITIVE_STRING = Vb5;
  NOA.ServiceException = fOA;
  NOA._json = xo1;
  NOA.convertMap = bb5;
  NOA.createAggregatedClient = fb5;
  NOA.decorateServiceException = Tc8;
  NOA.emitWarningIfUnsupportedVersion = Eb5;
  NOA.getArrayIfSingleItem = Sb5;
  NOA.getDefaultClientConfiguration = yb5;
  NOA.getDefaultExtensionConfiguration = Ec8;
  NOA.getValueFromTextNode = kc8;
  NOA.isSerializableHeaderValue = hb5;
  NOA.loadConfigsForDefaultMode = vb5;
  NOA.map = Lc8;
  NOA.resolveDefaultRuntimeConfig = Ib5;
  NOA.serializeDateTime = Fb5;
  NOA.serializeFloat = gb5;
  NOA.take = xb5;
  NOA.throwDefaultError = vc8;
  NOA.withBaseException = Nb5;
  Object.keys(Mc8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(NOA, A)) Object.defineProperty(NOA, A, {
      enumerable: !0,
      get: function () {
        return Mc8[A];
      }
    });
  });
});

// Register to shared state
__$.ej = ej;
