// Module: dLA
// Dependencies: Fb, VV, nA6, DJ, PV, s, n, de

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dLA = v(oOA => {
  var F64 = __$.Fb(),
    tA6 = __$.VV(),
    oA6 = __$.nA6(),
    bN3 = __$.DJ(),
    m64 = __$.PV();
  class Q64 {
    config;
    middlewareStack = F64.constructStack();
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
  var rA6 = "***SensitiveInformation***";
  function aA6(A, K) {
    if (K == null) return K;
    let q = bN3.NormalizedSchema.of(A);
    if (q.getMergedTraits().sensitive) return rA6;
    if (q.isListSchema()) {
      if (!!q.getValueSchema().getMergedTraits().sensitive) return rA6;
    } else if (q.isMapSchema()) {
      if (!!q.getKeySchema().getMergedTraits().sensitive || !!q.getValueSchema().getMergedTraits().sensitive) return rA6;
    } else if (q.isStructSchema() && typeof K === "object") {
      let Y = K,
        z = {};
      for (let [w, H] of q.structIterator()) if (Y[w] != null) z[w] = aA6(H, Y[w]);
      return z;
    }
    return K;
  }
  class eA6 {
    middlewareStack = F64.constructStack();
    schema;
    static classBuilder() {
      return new U64();
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
          [oA6.SMITHY_CONTEXT_KEY]: {
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
  class U64 {
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
      return K = class extends eA6 {
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
            inputFilterSensitiveLog: A._inputFilterSensitiveLog ?? (w ? aA6.bind(null, H) : O => O),
            outputFilterSensitiveLog: A._outputFilterSensitiveLog ?? (w ? aA6.bind(null, J) : O => O),
            smithyContext: A._smithyContext,
            additionalContext: A._additionalContext
          });
        }
        serialize = A._serializer;
        deserialize = A._deserializer;
      };
    }
  }
  var xN3 = "***SensitiveInformation***",
    uN3 = (A, K) => {
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
  class rOA extends Error {
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
      return rOA.prototype.isPrototypeOf(K) || Boolean(K.$fault) && Boolean(K.$metadata) && (K.$fault === "client" || K.$fault === "server");
    }
    static [Symbol.hasInstance](A) {
      if (!A) return !1;
      let K = A;
      if (this === rOA) return rOA.isInstance(A);
      if (rOA.isInstance(A)) {
        if (K.name && this.name) return this.prototype.isPrototypeOf(A) || K.name === this.name;
        return this.prototype.isPrototypeOf(A);
      }
      return !1;
    }
  }
  var p64 = (A, K = {}) => {
      Object.entries(K).filter(([, Y]) => Y !== void 0).forEach(([Y, z]) => {
        if (A[Y] == null || A[Y] === "") A[Y] = z;
      });
      let q = A.message || A.Message || "UnknownError";
      return A.message = q, delete A.Message, A;
    },
    d64 = ({
      output: A,
      parsedBody: K,
      exceptionCtor: q,
      errorCode: Y
    }) => {
      let z = mN3(A),
        w = z.httpStatusCode ? z.httpStatusCode + "" : void 0,
        H = new q({
          name: K?.code || K?.Code || Y || w || "UnknownError",
          $fault: "client",
          $metadata: z
        });
      throw p64(H, K);
    },
    BN3 = A => {
      return ({
        output: K,
        parsedBody: q,
        errorCode: Y
      }) => {
        d64({
          output: K,
          parsedBody: q,
          exceptionCtor: A,
          errorCode: Y
        });
      };
    },
    mN3 = A => ({
      httpStatusCode: A.statusCode,
      requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
      extendedRequestId: A.headers["x-amz-id-2"],
      cfId: A.headers["x-amz-cf-id"]
    }),
    gN3 = A => {
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
    g64 = !1,
    FN3 = A => {
      if (A && !g64 && parseInt(A.substring(1, A.indexOf("."))) < 16) g64 = !0;
    },
    QN3 = A => {
      let K = [];
      for (let q in oA6.AlgorithmId) {
        let Y = oA6.AlgorithmId[q];
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
    UN3 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    pN3 = A => {
      return {
        setRetryStrategy(K) {
          A.retryStrategy = K;
        },
        retryStrategy() {
          return A.retryStrategy;
        }
      };
    },
    dN3 = A => {
      let K = {};
      return K.retryStrategy = A.retryStrategy(), K;
    },
    c64 = A => {
      return Object.assign(QN3(A), pN3(A));
    },
    cN3 = c64,
    lN3 = A => {
      return Object.assign(UN3(A), dN3(A));
    },
    iN3 = A => Array.isArray(A) ? A : [A],
    l64 = A => {
      for (let q in A) if (A.hasOwnProperty(q) && A[q]["#text"] !== void 0) A[q] = A[q]["#text"];else if (typeof A[q] === "object" && A[q] !== null) A[q] = l64(A[q]);
      return A;
    },
    nN3 = A => {
      return A != null;
    };
  class i64 {
    trace() {}
    debug() {}
    info() {}
    warn() {}
    error() {}
  }
  function n64(A, K, q) {
    let Y, z, w;
    if (typeof K > "u" && typeof q > "u") Y = {}, w = A;else if (Y = A, typeof K === "function") return z = K, w = q, aN3(Y, z, w);else w = K;
    for (let H of Object.keys(w)) {
      if (!Array.isArray(w[H])) {
        Y[H] = w[H];
        continue;
      }
      r64(Y, null, w, H);
    }
    return Y;
  }
  var rN3 = A => {
      let K = {};
      for (let [q, Y] of Object.entries(A || {})) K[q] = [, Y];
      return K;
    },
    oN3 = (A, K) => {
      let q = {};
      for (let Y in K) r64(q, A, K, Y);
      return q;
    },
    aN3 = (A, K, q) => {
      return n64(A, Object.entries(q).reduce((Y, [z, w]) => {
        if (Array.isArray(w)) Y[z] = w;else if (typeof w === "function") Y[z] = [K, w()];else Y[z] = [K, w];
        return Y;
      }, {}));
    },
    r64 = (A, K, q, Y) => {
      if (K !== null) {
        let H = q[Y];
        if (typeof H === "function") H = [, H];
        let [J = sN3, O = tN3, X = Y] = H;
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
    sN3 = A => A != null,
    tN3 = A => A,
    eN3 = A => {
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
    AT3 = A => A.toISOString().replace(".000Z", "Z"),
    sA6 = A => {
      if (A == null) return {};
      if (Array.isArray(A)) return A.filter(K => K != null).map(sA6);
      if (typeof A === "object") {
        let K = {};
        for (let q of Object.keys(A)) {
          if (A[q] == null) continue;
          K[q] = sA6(A[q]);
        }
        return K;
      }
      return A;
    };
  Object.defineProperty(oOA, "collectBody", {
    enumerable: !0,
    get: function () {
      return tA6.collectBody;
    }
  });
  Object.defineProperty(oOA, "extendedEncodeURIComponent", {
    enumerable: !0,
    get: function () {
      return tA6.extendedEncodeURIComponent;
    }
  });
  Object.defineProperty(oOA, "resolvedPath", {
    enumerable: !0,
    get: function () {
      return tA6.resolvedPath;
    }
  });
  oOA.Client = Q64;
  oOA.Command = eA6;
  oOA.NoOpLogger = i64;
  oOA.SENSITIVE_STRING = xN3;
  oOA.ServiceException = rOA;
  oOA._json = sA6;
  oOA.convertMap = rN3;
  oOA.createAggregatedClient = uN3;
  oOA.decorateServiceException = p64;
  oOA.emitWarningIfUnsupportedVersion = FN3;
  oOA.getArrayIfSingleItem = iN3;
  oOA.getDefaultClientConfiguration = cN3;
  oOA.getDefaultExtensionConfiguration = c64;
  oOA.getValueFromTextNode = l64;
  oOA.isSerializableHeaderValue = nN3;
  oOA.loadConfigsForDefaultMode = gN3;
  oOA.map = n64;
  oOA.resolveDefaultRuntimeConfig = lN3;
  oOA.serializeDateTime = AT3;
  oOA.serializeFloat = eN3;
  oOA.take = oN3;
  oOA.throwDefaultError = d64;
  oOA.withBaseException = BN3;
  Object.keys(m64).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(oOA, A)) Object.defineProperty(oOA, A, {
      enumerable: !0,
      get: function () {
        return m64[A];
      }
    });
  });
});

// Register to shared state
__$.dLA = dLA;
