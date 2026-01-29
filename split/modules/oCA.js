// Module: oCA
// Dependencies: Fb, VV, cr1, DJ, PV, s, n, de

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oCA = v(jOA => {
  var qd8 = __$.Fb(),
    or1 = __$.VV(),
    ir1 = __$.cr1(),
    Jy5 = __$.DJ(),
    Ad8 = __$.PV();
  class Yd8 {
    config;
    middlewareStack = qd8.constructStack();
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
  var lr1 = "***SensitiveInformation***";
  function nr1(A, K) {
    if (K == null) return K;
    let q = Jy5.NormalizedSchema.of(A);
    if (q.getMergedTraits().sensitive) return lr1;
    if (q.isListSchema()) {
      if (!!q.getValueSchema().getMergedTraits().sensitive) return lr1;
    } else if (q.isMapSchema()) {
      if (!!q.getKeySchema().getMergedTraits().sensitive || !!q.getValueSchema().getMergedTraits().sensitive) return lr1;
    } else if (q.isStructSchema() && typeof K === "object") {
      let Y = K,
        z = {};
      for (let [w, H] of q.structIterator()) if (Y[w] != null) z[w] = nr1(H, Y[w]);
      return z;
    }
    return K;
  }
  class ar1 {
    middlewareStack = qd8.constructStack();
    schema;
    static classBuilder() {
      return new zd8();
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
          [ir1.SMITHY_CONTEXT_KEY]: {
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
  class zd8 {
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
      return K = class extends ar1 {
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
            inputFilterSensitiveLog: A._inputFilterSensitiveLog ?? (w ? nr1.bind(null, H) : O => O),
            outputFilterSensitiveLog: A._outputFilterSensitiveLog ?? (w ? nr1.bind(null, J) : O => O),
            smithyContext: A._smithyContext,
            additionalContext: A._additionalContext
          });
        }
        serialize = A._serializer;
        deserialize = A._deserializer;
      };
    }
  }
  var Oy5 = "***SensitiveInformation***",
    Xy5 = (A, K) => {
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
  class DOA extends Error {
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
      return DOA.prototype.isPrototypeOf(K) || Boolean(K.$fault) && Boolean(K.$metadata) && (K.$fault === "client" || K.$fault === "server");
    }
    static [Symbol.hasInstance](A) {
      if (!A) return !1;
      let K = A;
      if (this === DOA) return DOA.isInstance(A);
      if (DOA.isInstance(A)) {
        if (K.name && this.name) return this.prototype.isPrototypeOf(A) || K.name === this.name;
        return this.prototype.isPrototypeOf(A);
      }
      return !1;
    }
  }
  var wd8 = (A, K = {}) => {
      Object.entries(K).filter(([, Y]) => Y !== void 0).forEach(([Y, z]) => {
        if (A[Y] == null || A[Y] === "") A[Y] = z;
      });
      let q = A.message || A.Message || "UnknownError";
      return A.message = q, delete A.Message, A;
    },
    Hd8 = ({
      output: A,
      parsedBody: K,
      exceptionCtor: q,
      errorCode: Y
    }) => {
      let z = _y5(A),
        w = z.httpStatusCode ? z.httpStatusCode + "" : void 0,
        H = new q({
          name: K?.code || K?.Code || Y || w || "UnknownError",
          $fault: "client",
          $metadata: z
        });
      throw wd8(H, K);
    },
    $y5 = A => {
      return ({
        output: K,
        parsedBody: q,
        errorCode: Y
      }) => {
        Hd8({
          output: K,
          parsedBody: q,
          exceptionCtor: A,
          errorCode: Y
        });
      };
    },
    _y5 = A => ({
      httpStatusCode: A.statusCode,
      requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
      extendedRequestId: A.headers["x-amz-id-2"],
      cfId: A.headers["x-amz-cf-id"]
    }),
    Gy5 = A => {
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
    Kd8 = !1,
    Zy5 = A => {
      if (A && !Kd8 && parseInt(A.substring(1, A.indexOf("."))) < 16) Kd8 = !0;
    },
    Wy5 = A => {
      let K = [];
      for (let q in ir1.AlgorithmId) {
        let Y = ir1.AlgorithmId[q];
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
    Dy5 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    jy5 = A => {
      return {
        setRetryStrategy(K) {
          A.retryStrategy = K;
        },
        retryStrategy() {
          return A.retryStrategy;
        }
      };
    },
    My5 = A => {
      let K = {};
      return K.retryStrategy = A.retryStrategy(), K;
    },
    Jd8 = A => {
      return Object.assign(Wy5(A), jy5(A));
    },
    Py5 = Jd8,
    Vy5 = A => {
      return Object.assign(Dy5(A), My5(A));
    },
    fy5 = A => Array.isArray(A) ? A : [A],
    Od8 = A => {
      for (let q in A) if (A.hasOwnProperty(q) && A[q]["#text"] !== void 0) A[q] = A[q]["#text"];else if (typeof A[q] === "object" && A[q] !== null) A[q] = Od8(A[q]);
      return A;
    },
    Ny5 = A => {
      return A != null;
    };
  class Xd8 {
    trace() {}
    debug() {}
    info() {}
    warn() {}
    error() {}
  }
  function $d8(A, K, q) {
    let Y, z, w;
    if (typeof K > "u" && typeof q > "u") Y = {}, w = A;else if (Y = A, typeof K === "function") return z = K, w = q, Ey5(Y, z, w);else w = K;
    for (let H of Object.keys(w)) {
      if (!Array.isArray(w[H])) {
        Y[H] = w[H];
        continue;
      }
      _d8(Y, null, w, H);
    }
    return Y;
  }
  var Ty5 = A => {
      let K = {};
      for (let [q, Y] of Object.entries(A || {})) K[q] = [, Y];
      return K;
    },
    vy5 = (A, K) => {
      let q = {};
      for (let Y in K) _d8(q, A, K, Y);
      return q;
    },
    Ey5 = (A, K, q) => {
      return $d8(A, Object.entries(q).reduce((Y, [z, w]) => {
        if (Array.isArray(w)) Y[z] = w;else if (typeof w === "function") Y[z] = [K, w()];else Y[z] = [K, w];
        return Y;
      }, {}));
    },
    _d8 = (A, K, q, Y) => {
      if (K !== null) {
        let H = q[Y];
        if (typeof H === "function") H = [, H];
        let [J = ky5, O = Cy5, X = Y] = H;
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
    ky5 = A => A != null,
    Cy5 = A => A,
    Ly5 = A => {
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
    Ry5 = A => A.toISOString().replace(".000Z", "Z"),
    rr1 = A => {
      if (A == null) return {};
      if (Array.isArray(A)) return A.filter(K => K != null).map(rr1);
      if (typeof A === "object") {
        let K = {};
        for (let q of Object.keys(A)) {
          if (A[q] == null) continue;
          K[q] = rr1(A[q]);
        }
        return K;
      }
      return A;
    };
  Object.defineProperty(jOA, "collectBody", {
    enumerable: !0,
    get: function () {
      return or1.collectBody;
    }
  });
  Object.defineProperty(jOA, "extendedEncodeURIComponent", {
    enumerable: !0,
    get: function () {
      return or1.extendedEncodeURIComponent;
    }
  });
  Object.defineProperty(jOA, "resolvedPath", {
    enumerable: !0,
    get: function () {
      return or1.resolvedPath;
    }
  });
  jOA.Client = Yd8;
  jOA.Command = ar1;
  jOA.NoOpLogger = Xd8;
  jOA.SENSITIVE_STRING = Oy5;
  jOA.ServiceException = DOA;
  jOA._json = rr1;
  jOA.convertMap = Ty5;
  jOA.createAggregatedClient = Xy5;
  jOA.decorateServiceException = wd8;
  jOA.emitWarningIfUnsupportedVersion = Zy5;
  jOA.getArrayIfSingleItem = fy5;
  jOA.getDefaultClientConfiguration = Py5;
  jOA.getDefaultExtensionConfiguration = Jd8;
  jOA.getValueFromTextNode = Od8;
  jOA.isSerializableHeaderValue = Ny5;
  jOA.loadConfigsForDefaultMode = Gy5;
  jOA.map = $d8;
  jOA.resolveDefaultRuntimeConfig = Vy5;
  jOA.serializeDateTime = Ry5;
  jOA.serializeFloat = Ly5;
  jOA.take = vy5;
  jOA.throwDefaultError = Hd8;
  jOA.withBaseException = $y5;
  Object.keys(Ad8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(jOA, A)) Object.defineProperty(jOA, A, {
      enumerable: !0,
      get: function () {
        return Ad8[A];
      }
    });
  });
});

// Register to shared state
__$.oCA = oCA;
