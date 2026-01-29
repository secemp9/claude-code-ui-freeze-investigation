// Module: tqA
// Dependencies: Fb, VV, oP6, DJ, PV, s, n, de

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tqA = v(RWA => {
  var mP7 = __$.Fb(),
    AV6 = __$.VV(),
    sP6 = __$.oP6(),
    syY = __$.DJ(),
    uP7 = __$.PV();
  class gP7 {
    config;
    middlewareStack = mP7.constructStack();
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
  var aP6 = "***SensitiveInformation***";
  function tP6(A, K) {
    if (K == null) return K;
    let q = syY.NormalizedSchema.of(A);
    if (q.getMergedTraits().sensitive) return aP6;
    if (q.isListSchema()) {
      if (!!q.getValueSchema().getMergedTraits().sensitive) return aP6;
    } else if (q.isMapSchema()) {
      if (!!q.getKeySchema().getMergedTraits().sensitive || !!q.getValueSchema().getMergedTraits().sensitive) return aP6;
    } else if (q.isStructSchema() && typeof K === "object") {
      let Y = K,
        z = {};
      for (let [w, H] of q.structIterator()) if (Y[w] != null) z[w] = tP6(H, Y[w]);
      return z;
    }
    return K;
  }
  class KV6 {
    middlewareStack = mP7.constructStack();
    schema;
    static classBuilder() {
      return new FP7();
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
          [sP6.SMITHY_CONTEXT_KEY]: {
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
  class FP7 {
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
      return K = class extends KV6 {
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
            inputFilterSensitiveLog: A._inputFilterSensitiveLog ?? (w ? tP6.bind(null, H) : O => O),
            outputFilterSensitiveLog: A._outputFilterSensitiveLog ?? (w ? tP6.bind(null, J) : O => O),
            smithyContext: A._smithyContext,
            additionalContext: A._additionalContext
          });
        }
        serialize = A._serializer;
        deserialize = A._deserializer;
      };
    }
  }
  var tyY = "***SensitiveInformation***",
    eyY = (A, K) => {
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
  class LWA extends Error {
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
      return LWA.prototype.isPrototypeOf(K) || Boolean(K.$fault) && Boolean(K.$metadata) && (K.$fault === "client" || K.$fault === "server");
    }
    static [Symbol.hasInstance](A) {
      if (!A) return !1;
      let K = A;
      if (this === LWA) return LWA.isInstance(A);
      if (LWA.isInstance(A)) {
        if (K.name && this.name) return this.prototype.isPrototypeOf(A) || K.name === this.name;
        return this.prototype.isPrototypeOf(A);
      }
      return !1;
    }
  }
  var QP7 = (A, K = {}) => {
      Object.entries(K).filter(([, Y]) => Y !== void 0).forEach(([Y, z]) => {
        if (A[Y] == null || A[Y] === "") A[Y] = z;
      });
      let q = A.message || A.Message || "UnknownError";
      return A.message = q, delete A.Message, A;
    },
    UP7 = ({
      output: A,
      parsedBody: K,
      exceptionCtor: q,
      errorCode: Y
    }) => {
      let z = KIY(A),
        w = z.httpStatusCode ? z.httpStatusCode + "" : void 0,
        H = new q({
          name: K?.code || K?.Code || Y || w || "UnknownError",
          $fault: "client",
          $metadata: z
        });
      throw QP7(H, K);
    },
    AIY = A => {
      return ({
        output: K,
        parsedBody: q,
        errorCode: Y
      }) => {
        UP7({
          output: K,
          parsedBody: q,
          exceptionCtor: A,
          errorCode: Y
        });
      };
    },
    KIY = A => ({
      httpStatusCode: A.statusCode,
      requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
      extendedRequestId: A.headers["x-amz-id-2"],
      cfId: A.headers["x-amz-cf-id"]
    }),
    qIY = A => {
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
    BP7 = !1,
    YIY = A => {
      if (A && !BP7 && parseInt(A.substring(1, A.indexOf("."))) < 16) BP7 = !0;
    },
    zIY = A => {
      let K = [];
      for (let q in sP6.AlgorithmId) {
        let Y = sP6.AlgorithmId[q];
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
    wIY = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    HIY = A => {
      return {
        setRetryStrategy(K) {
          A.retryStrategy = K;
        },
        retryStrategy() {
          return A.retryStrategy;
        }
      };
    },
    JIY = A => {
      let K = {};
      return K.retryStrategy = A.retryStrategy(), K;
    },
    pP7 = A => {
      return Object.assign(zIY(A), HIY(A));
    },
    OIY = pP7,
    XIY = A => {
      return Object.assign(wIY(A), JIY(A));
    },
    $IY = A => Array.isArray(A) ? A : [A],
    dP7 = A => {
      for (let q in A) if (A.hasOwnProperty(q) && A[q]["#text"] !== void 0) A[q] = A[q]["#text"];else if (typeof A[q] === "object" && A[q] !== null) A[q] = dP7(A[q]);
      return A;
    },
    _IY = A => {
      return A != null;
    };
  class cP7 {
    trace() {}
    debug() {}
    info() {}
    warn() {}
    error() {}
  }
  function lP7(A, K, q) {
    let Y, z, w;
    if (typeof K > "u" && typeof q > "u") Y = {}, w = A;else if (Y = A, typeof K === "function") return z = K, w = q, WIY(Y, z, w);else w = K;
    for (let H of Object.keys(w)) {
      if (!Array.isArray(w[H])) {
        Y[H] = w[H];
        continue;
      }
      iP7(Y, null, w, H);
    }
    return Y;
  }
  var GIY = A => {
      let K = {};
      for (let [q, Y] of Object.entries(A || {})) K[q] = [, Y];
      return K;
    },
    ZIY = (A, K) => {
      let q = {};
      for (let Y in K) iP7(q, A, K, Y);
      return q;
    },
    WIY = (A, K, q) => {
      return lP7(A, Object.entries(q).reduce((Y, [z, w]) => {
        if (Array.isArray(w)) Y[z] = w;else if (typeof w === "function") Y[z] = [K, w()];else Y[z] = [K, w];
        return Y;
      }, {}));
    },
    iP7 = (A, K, q, Y) => {
      if (K !== null) {
        let H = q[Y];
        if (typeof H === "function") H = [, H];
        let [J = DIY, O = jIY, X = Y] = H;
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
    DIY = A => A != null,
    jIY = A => A,
    MIY = A => {
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
    PIY = A => A.toISOString().replace(".000Z", "Z"),
    eP6 = A => {
      if (A == null) return {};
      if (Array.isArray(A)) return A.filter(K => K != null).map(eP6);
      if (typeof A === "object") {
        let K = {};
        for (let q of Object.keys(A)) {
          if (A[q] == null) continue;
          K[q] = eP6(A[q]);
        }
        return K;
      }
      return A;
    };
  Object.defineProperty(RWA, "collectBody", {
    enumerable: !0,
    get: function () {
      return AV6.collectBody;
    }
  });
  Object.defineProperty(RWA, "extendedEncodeURIComponent", {
    enumerable: !0,
    get: function () {
      return AV6.extendedEncodeURIComponent;
    }
  });
  Object.defineProperty(RWA, "resolvedPath", {
    enumerable: !0,
    get: function () {
      return AV6.resolvedPath;
    }
  });
  RWA.Client = gP7;
  RWA.Command = KV6;
  RWA.NoOpLogger = cP7;
  RWA.SENSITIVE_STRING = tyY;
  RWA.ServiceException = LWA;
  RWA._json = eP6;
  RWA.convertMap = GIY;
  RWA.createAggregatedClient = eyY;
  RWA.decorateServiceException = QP7;
  RWA.emitWarningIfUnsupportedVersion = YIY;
  RWA.getArrayIfSingleItem = $IY;
  RWA.getDefaultClientConfiguration = OIY;
  RWA.getDefaultExtensionConfiguration = pP7;
  RWA.getValueFromTextNode = dP7;
  RWA.isSerializableHeaderValue = _IY;
  RWA.loadConfigsForDefaultMode = qIY;
  RWA.map = lP7;
  RWA.resolveDefaultRuntimeConfig = XIY;
  RWA.serializeDateTime = PIY;
  RWA.serializeFloat = MIY;
  RWA.take = ZIY;
  RWA.throwDefaultError = UP7;
  RWA.withBaseException = AIY;
  Object.keys(uP7).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(RWA, A)) Object.defineProperty(RWA, A, {
      enumerable: !0,
      get: function () {
        return uP7[A];
      }
    });
  });
});

// Register to shared state
__$.tqA = tqA;
