// Module: gSA
// Dependencies: Fb, VV, i26, DJ, PV, s, n, de

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gSA = v(l$A => {
  var wF4 = __$.Fb(),
    s26 = __$.VV(),
    r26 = __$.i26(),
    Uh9 = __$.DJ(),
    YF4 = __$.PV();
  class HF4 {
    config;
    middlewareStack = wF4.constructStack();
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
  var n26 = "***SensitiveInformation***";
  function o26(A, K) {
    if (K == null) return K;
    let q = Uh9.NormalizedSchema.of(A);
    if (q.getMergedTraits().sensitive) return n26;
    if (q.isListSchema()) {
      if (!!q.getValueSchema().getMergedTraits().sensitive) return n26;
    } else if (q.isMapSchema()) {
      if (!!q.getKeySchema().getMergedTraits().sensitive || !!q.getValueSchema().getMergedTraits().sensitive) return n26;
    } else if (q.isStructSchema() && typeof K === "object") {
      let Y = K,
        z = {};
      for (let [w, H] of q.structIterator()) if (Y[w] != null) z[w] = o26(H, Y[w]);
      return z;
    }
    return K;
  }
  class t26 {
    middlewareStack = wF4.constructStack();
    schema;
    static classBuilder() {
      return new JF4();
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
          [r26.SMITHY_CONTEXT_KEY]: {
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
  class JF4 {
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
      return K = class extends t26 {
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
            inputFilterSensitiveLog: A._inputFilterSensitiveLog ?? (w ? o26.bind(null, H) : O => O),
            outputFilterSensitiveLog: A._outputFilterSensitiveLog ?? (w ? o26.bind(null, J) : O => O),
            smithyContext: A._smithyContext,
            additionalContext: A._additionalContext
          });
        }
        serialize = A._serializer;
        deserialize = A._deserializer;
      };
    }
  }
  var ph9 = "***SensitiveInformation***",
    dh9 = (A, K) => {
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
  class c$A extends Error {
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
      return c$A.prototype.isPrototypeOf(K) || Boolean(K.$fault) && Boolean(K.$metadata) && (K.$fault === "client" || K.$fault === "server");
    }
    static [Symbol.hasInstance](A) {
      if (!A) return !1;
      let K = A;
      if (this === c$A) return c$A.isInstance(A);
      if (c$A.isInstance(A)) {
        if (K.name && this.name) return this.prototype.isPrototypeOf(A) || K.name === this.name;
        return this.prototype.isPrototypeOf(A);
      }
      return !1;
    }
  }
  var OF4 = (A, K = {}) => {
      Object.entries(K).filter(([, Y]) => Y !== void 0).forEach(([Y, z]) => {
        if (A[Y] == null || A[Y] === "") A[Y] = z;
      });
      let q = A.message || A.Message || "UnknownError";
      return A.message = q, delete A.Message, A;
    },
    XF4 = ({
      output: A,
      parsedBody: K,
      exceptionCtor: q,
      errorCode: Y
    }) => {
      let z = lh9(A),
        w = z.httpStatusCode ? z.httpStatusCode + "" : void 0,
        H = new q({
          name: K?.code || K?.Code || Y || w || "UnknownError",
          $fault: "client",
          $metadata: z
        });
      throw OF4(H, K);
    },
    ch9 = A => {
      return ({
        output: K,
        parsedBody: q,
        errorCode: Y
      }) => {
        XF4({
          output: K,
          parsedBody: q,
          exceptionCtor: A,
          errorCode: Y
        });
      };
    },
    lh9 = A => ({
      httpStatusCode: A.statusCode,
      requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
      extendedRequestId: A.headers["x-amz-id-2"],
      cfId: A.headers["x-amz-cf-id"]
    }),
    ih9 = A => {
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
    zF4 = !1,
    nh9 = A => {
      if (A && !zF4 && parseInt(A.substring(1, A.indexOf("."))) < 16) zF4 = !0;
    },
    rh9 = A => {
      let K = [];
      for (let q in r26.AlgorithmId) {
        let Y = r26.AlgorithmId[q];
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
    oh9 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    ah9 = A => {
      return {
        setRetryStrategy(K) {
          A.retryStrategy = K;
        },
        retryStrategy() {
          return A.retryStrategy;
        }
      };
    },
    sh9 = A => {
      let K = {};
      return K.retryStrategy = A.retryStrategy(), K;
    },
    $F4 = A => {
      return Object.assign(rh9(A), ah9(A));
    },
    th9 = $F4,
    eh9 = A => {
      return Object.assign(oh9(A), sh9(A));
    },
    Ab9 = A => Array.isArray(A) ? A : [A],
    _F4 = A => {
      for (let q in A) if (A.hasOwnProperty(q) && A[q]["#text"] !== void 0) A[q] = A[q]["#text"];else if (typeof A[q] === "object" && A[q] !== null) A[q] = _F4(A[q]);
      return A;
    },
    Kb9 = A => {
      return A != null;
    };
  class GF4 {
    trace() {}
    debug() {}
    info() {}
    warn() {}
    error() {}
  }
  function ZF4(A, K, q) {
    let Y, z, w;
    if (typeof K > "u" && typeof q > "u") Y = {}, w = A;else if (Y = A, typeof K === "function") return z = K, w = q, zb9(Y, z, w);else w = K;
    for (let H of Object.keys(w)) {
      if (!Array.isArray(w[H])) {
        Y[H] = w[H];
        continue;
      }
      WF4(Y, null, w, H);
    }
    return Y;
  }
  var qb9 = A => {
      let K = {};
      for (let [q, Y] of Object.entries(A || {})) K[q] = [, Y];
      return K;
    },
    Yb9 = (A, K) => {
      let q = {};
      for (let Y in K) WF4(q, A, K, Y);
      return q;
    },
    zb9 = (A, K, q) => {
      return ZF4(A, Object.entries(q).reduce((Y, [z, w]) => {
        if (Array.isArray(w)) Y[z] = w;else if (typeof w === "function") Y[z] = [K, w()];else Y[z] = [K, w];
        return Y;
      }, {}));
    },
    WF4 = (A, K, q, Y) => {
      if (K !== null) {
        let H = q[Y];
        if (typeof H === "function") H = [, H];
        let [J = wb9, O = Hb9, X = Y] = H;
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
    wb9 = A => A != null,
    Hb9 = A => A,
    Jb9 = A => {
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
    Ob9 = A => A.toISOString().replace(".000Z", "Z"),
    a26 = A => {
      if (A == null) return {};
      if (Array.isArray(A)) return A.filter(K => K != null).map(a26);
      if (typeof A === "object") {
        let K = {};
        for (let q of Object.keys(A)) {
          if (A[q] == null) continue;
          K[q] = a26(A[q]);
        }
        return K;
      }
      return A;
    };
  Object.defineProperty(l$A, "collectBody", {
    enumerable: !0,
    get: function () {
      return s26.collectBody;
    }
  });
  Object.defineProperty(l$A, "extendedEncodeURIComponent", {
    enumerable: !0,
    get: function () {
      return s26.extendedEncodeURIComponent;
    }
  });
  Object.defineProperty(l$A, "resolvedPath", {
    enumerable: !0,
    get: function () {
      return s26.resolvedPath;
    }
  });
  l$A.Client = HF4;
  l$A.Command = t26;
  l$A.NoOpLogger = GF4;
  l$A.SENSITIVE_STRING = ph9;
  l$A.ServiceException = c$A;
  l$A._json = a26;
  l$A.convertMap = qb9;
  l$A.createAggregatedClient = dh9;
  l$A.decorateServiceException = OF4;
  l$A.emitWarningIfUnsupportedVersion = nh9;
  l$A.getArrayIfSingleItem = Ab9;
  l$A.getDefaultClientConfiguration = th9;
  l$A.getDefaultExtensionConfiguration = $F4;
  l$A.getValueFromTextNode = _F4;
  l$A.isSerializableHeaderValue = Kb9;
  l$A.loadConfigsForDefaultMode = ih9;
  l$A.map = ZF4;
  l$A.resolveDefaultRuntimeConfig = eh9;
  l$A.serializeDateTime = Ob9;
  l$A.serializeFloat = Jb9;
  l$A.take = Yb9;
  l$A.throwDefaultError = XF4;
  l$A.withBaseException = ch9;
  Object.keys(YF4).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(l$A, A)) Object.defineProperty(l$A, A, {
      enumerable: !0,
      get: function () {
        return YF4[A];
      }
    });
  });
});

// Register to shared state
__$.gSA = gSA;
