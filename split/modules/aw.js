// Module: aw
// Dependencies: h61, Gz, dX, fV, On1, Tn1, DJ, In1, VV, PV
//   ... and 3 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aw = v(gT5 => {
  var gn1 = __$.h61(),
    ti = __$.Gz(),
    mQ8 = __$.dX(),
    PT5 = __$.fV(),
    gQ8 = __$.On1(),
    FQ8 = __$.Tn1(),
    Zz = __$.DJ(),
    nF = __$.In1(),
    EZ = __$.VV(),
    s_ = __$.PV(),
    UCA = __$.bn1(),
    iQ8 = __$._z(),
    eE = __$.Bn1(),
    mn1 = {
      warningEmitted: !1
    },
    VT5 = A => {
      if (A && !mn1.warningEmitted && parseInt(A.substring(1, A.indexOf("."))) < 18) mn1.warningEmitted = !0, process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 16.x on January 6, 2025.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/74kJMmI`);
    };
  function fT5(A, K, q) {
    if (!A.$source) A.$source = {};
    return A.$source[K] = q, A;
  }
  function NT5(A, K, q) {
    if (!A.__aws_sdk_context) A.__aws_sdk_context = {
      features: {}
    };else if (!A.__aws_sdk_context.features) A.__aws_sdk_context.features = {};
    A.__aws_sdk_context.features[K] = q;
  }
  function TT5(A, K, q) {
    if (!A.$source) A.$source = {};
    return A.$source[K] = q, A;
  }
  var QQ8 = A => gn1.HttpResponse.isInstance(A) ? A.headers?.date ?? A.headers?.Date : void 0,
    Fn1 = A => new Date(Date.now() + A),
    vT5 = (A, K) => Math.abs(Fn1(K).getTime() - A) >= 300000,
    UQ8 = (A, K) => {
      let q = Date.parse(A);
      if (vT5(q, K)) return q - Date.now();
      return K;
    },
    QCA = (A, K) => {
      if (!K) throw Error(`Property \`${A}\` is not resolved for AWS SDK SigV4Auth`);
      return K;
    },
    Qn1 = async A => {
      let K = QCA("context", A.context),
        q = QCA("config", A.config),
        Y = K.endpointV2?.properties?.authSchemes?.[0],
        w = await QCA("signer", q.signer)(Y),
        H = A?.signingRegion,
        J = A?.signingRegionSet,
        O = A?.signingName;
      return {
        config: q,
        signer: w,
        signingRegion: H,
        signingRegionSet: J,
        signingName: O
      };
    };
  class l61 {
    async sign(A, K, q) {
      if (!gn1.HttpRequest.isInstance(A)) throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
      let Y = await Qn1(q),
        {
          config: z,
          signer: w
        } = Y,
        {
          signingRegion: H,
          signingName: J
        } = Y,
        O = q.context;
      if (O?.authSchemes?.length ?? !1) {
        let [$, _] = O.authSchemes;
        if ($?.name === "sigv4a" && _?.name === "sigv4") H = _?.signingRegion ?? H, J = _?.signingName ?? J;
      }
      return await w.sign(A, {
        signingDate: Fn1(z.systemClockOffset),
        signingRegion: H,
        signingService: J
      });
    }
    errorHandler(A) {
      return K => {
        let q = K.ServerTime ?? QQ8(K.$response);
        if (q) {
          let Y = QCA("config", A.config),
            z = Y.systemClockOffset;
          if (Y.systemClockOffset = UQ8(q, Y.systemClockOffset), Y.systemClockOffset !== z && K.$metadata) K.$metadata.clockSkewCorrected = !0;
        }
        throw K;
      };
    }
    successHandler(A, K) {
      let q = QQ8(A);
      if (q) {
        let Y = QCA("config", K.config);
        Y.systemClockOffset = UQ8(q, Y.systemClockOffset);
      }
    }
  }
  var ET5 = l61;
  class nQ8 extends l61 {
    async sign(A, K, q) {
      if (!gn1.HttpRequest.isInstance(A)) throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
      let {
          config: Y,
          signer: z,
          signingRegion: w,
          signingRegionSet: H,
          signingName: J
        } = await Qn1(q),
        X = ((await Y.sigv4aSigningRegionSet?.()) ?? H ?? [w]).join(",");
      return await z.sign(A, {
        signingDate: Fn1(Y.systemClockOffset),
        signingRegion: X,
        signingService: J
      });
    }
  }
  var pQ8 = A => typeof A === "string" && A.length > 0 ? A.split(",").map(K => K.trim()) : [],
    rQ8 = A => `AWS_BEARER_TOKEN_${A.replace(/[\s-]/g, "_").toUpperCase()}`,
    dQ8 = "AWS_AUTH_SCHEME_PREFERENCE",
    cQ8 = "auth_scheme_preference",
    kT5 = {
      environmentVariableSelector: (A, K) => {
        if (K?.signingName) {
          if (rQ8(K.signingName) in A) return ["httpBearerAuth"];
        }
        if (!(dQ8 in A)) return;
        return pQ8(A[dQ8]);
      },
      configFileSelector: A => {
        if (!(cQ8 in A)) return;
        return pQ8(A[cQ8]);
      },
      default: []
    },
    CT5 = A => {
      return A.sigv4aSigningRegionSet = ti.normalizeProvider(A.sigv4aSigningRegionSet), A;
    },
    LT5 = {
      environmentVariableSelector(A) {
        if (A.AWS_SIGV4A_SIGNING_REGION_SET) return A.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map(K => K.trim());
        throw new mQ8.ProviderError("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", {
          tryNextLink: !0
        });
      },
      configFileSelector(A) {
        if (A.sigv4a_signing_region_set) return (A.sigv4a_signing_region_set ?? "").split(",").map(K => K.trim());
        throw new mQ8.ProviderError("sigv4a_signing_region_set not set in profile.", {
          tryNextLink: !0
        });
      },
      default: void 0
    },
    oQ8 = A => {
      let K = A.credentials,
        q = !!A.credentials,
        Y = void 0;
      Object.defineProperty(A, "credentials", {
        set(X) {
          if (X && X !== K && X !== Y) q = !0;
          K = X;
          let $ = yT5(A, {
              credentials: K,
              credentialDefaultProvider: A.credentialDefaultProvider
            }),
            _ = IT5(A, $);
          if (q && !_.attributed) Y = async G => _(G).then(Z => PT5.setCredentialFeature(Z, "CREDENTIALS_CODE", "e")), Y.memoized = _.memoized, Y.configBound = _.configBound, Y.attributed = !0;else Y = _;
        },
        get() {
          return Y;
        },
        enumerable: !0,
        configurable: !0
      }), A.credentials = K;
      let {
          signingEscapePath: z = !0,
          systemClockOffset: w = A.systemClockOffset || 0,
          sha256: H
        } = A,
        J;
      if (A.signer) J = ti.normalizeProvider(A.signer);else if (A.regionInfoProvider) J = () => ti.normalizeProvider(A.region)().then(async X => [(await A.regionInfoProvider(X, {
        useFipsEndpoint: await A.useFipsEndpoint(),
        useDualstackEndpoint: await A.useDualstackEndpoint()
      })) || {}, X]).then(([X, $]) => {
        let {
          signingRegion: _,
          signingService: G
        } = X;
        A.signingRegion = A.signingRegion || _ || $, A.signingName = A.signingName || G || A.serviceId;
        let Z = {
          ...A,
          credentials: A.credentials,
          region: A.signingRegion,
          service: A.signingName,
          sha256: H,
          uriEscapePath: z
        };
        return new (A.signerConstructor || gQ8.SignatureV4)(Z);
      });else J = async X => {
        X = Object.assign({}, {
          name: "sigv4",
          signingName: A.signingName || A.defaultSigningName,
          signingRegion: await ti.normalizeProvider(A.region)(),
          properties: {}
        }, X);
        let {
          signingRegion: $,
          signingName: _
        } = X;
        A.signingRegion = A.signingRegion || $, A.signingName = A.signingName || _ || A.serviceId;
        let G = {
          ...A,
          credentials: A.credentials,
          region: A.signingRegion,
          service: A.signingName,
          sha256: H,
          uriEscapePath: z
        };
        return new (A.signerConstructor || gQ8.SignatureV4)(G);
      };
      return Object.assign(A, {
        systemClockOffset: w,
        signingEscapePath: z,
        signer: J
      });
    },
    RT5 = oQ8;
  function yT5(A, {
    credentials: K,
    credentialDefaultProvider: q
  }) {
    let Y;
    if (K) {
      if (!K?.memoized) Y = ti.memoizeIdentityProvider(K, ti.isIdentityExpired, ti.doesIdentityRequireRefresh);else Y = K;
    } else if (q) Y = ti.normalizeProvider(q(Object.assign({}, A, {
      parentClientConfig: A
    })));else Y = async () => {
      throw Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
    };
    return Y.memoized = !0, Y;
  }
  function IT5(A, K) {
    if (K.configBound) return K;
    let q = async Y => K({
      ...Y,
      callerClientConfig: A
    });
    return q.memoized = K.memoized, q.configBound = !0, q;
  }
  class XOA {
    queryCompat;
    constructor(A = !1) {
      this.queryCompat = A;
    }
    resolveRestContentType(A, K) {
      let q = K.getMemberSchemas(),
        Y = Object.values(q).find(z => {
          return !!z.getMergedTraits().httpPayload;
        });
      if (Y) {
        let z = Y.getMergedTraits().mediaType;
        if (z) return z;else if (Y.isStringSchema()) return "text/plain";else if (Y.isBlobSchema()) return "application/octet-stream";else return A;
      } else if (!K.isUnitSchema()) {
        if (Object.values(q).find(w => {
          let {
            httpQuery: H,
            httpQueryParams: J,
            httpHeader: O,
            httpLabel: X,
            httpPrefixHeaders: $
          } = w.getMergedTraits();
          return !H && !J && !O && !X && $ === void 0;
        })) return A;
      }
    }
    async getErrorSchemaOrThrowBaseException(A, K, q, Y, z, w) {
      let H = K,
        J = A;
      if (A.includes("#")) [H, J] = A.split("#");
      let O = {
          $metadata: z,
          $fault: q.statusCode < 500 ? "client" : "server"
        },
        X = Zz.TypeRegistry.for(H);
      try {
        return {
          errorSchema: w?.(X, J) ?? X.getSchema(A),
          errorMetadata: O
        };
      } catch ($) {
        Y.message = Y.message ?? Y.Message ?? "UnknownError";
        let _ = Zz.TypeRegistry.for("smithy.ts.sdk.synthetic." + H),
          G = _.getBaseException();
        if (G) {
          let Z = _.getErrorCtor(G) ?? Error;
          throw this.decorateServiceException(Object.assign(new Z({
            name: J
          }), O), Y);
        }
        throw this.decorateServiceException(Object.assign(Error(J), O), Y);
      }
    }
    decorateServiceException(A, K = {}) {
      if (this.queryCompat) {
        let q = A.Message ?? K.Message,
          Y = nF.decorateServiceException(A, K);
        if (q) Y.Message = q, Y.message = q;
        return Y;
      }
      return nF.decorateServiceException(A, K);
    }
    setQueryCompatError(A, K) {
      let q = K.headers?.["x-amzn-query-error"];
      if (A !== void 0 && q != null) {
        let [Y, z] = q.split(";"),
          w = Object.entries(A),
          H = {
            Code: Y,
            Type: z
          };
        Object.assign(A, H);
        for (let [J, O] of w) H[J] = O;
        delete H.__type, A.Error = H;
      }
    }
    queryCompatOutput(A, K) {
      if (A.Error) K.Error = A.Error;
      if (A.Type) K.Type = A.Type;
      if (A.Code) K.Code = A.Code;
    }
  }
  class aQ8 extends FQ8.SmithyRpcV2CborProtocol {
    awsQueryCompatible;
    mixin;
    constructor({
      defaultNamespace: A,
      awsQueryCompatible: K
    }) {
      super({
        defaultNamespace: A
      });
      this.awsQueryCompatible = !!K, this.mixin = new XOA(this.awsQueryCompatible);
    }
    async serializeRequest(A, K, q) {
      let Y = await super.serializeRequest(A, K, q);
      if (this.awsQueryCompatible) Y.headers["x-amzn-query-mode"] = "true";
      return Y;
    }
    async handleError(A, K, q, Y, z) {
      if (this.awsQueryCompatible) this.mixin.setQueryCompatError(Y, q);
      let w = FQ8.loadSmithyRpcV2CborErrorCode(q, Y) ?? "Unknown",
        {
          errorSchema: H,
          errorMetadata: J
        } = await this.mixin.getErrorSchemaOrThrowBaseException(w, this.options.defaultNamespace, q, Y, z),
        O = Zz.NormalizedSchema.of(H),
        X = Y.message ?? Y.Message ?? "Unknown",
        _ = new (Zz.TypeRegistry.for(H[1]).getErrorCtor(H) ?? Error)(X),
        G = {};
      for (let [Z, W] of O.structIterator()) G[Z] = this.deserializer.readValue(W, Y[Z]);
      if (this.awsQueryCompatible) this.mixin.queryCompatOutput(Y, G);
      throw this.mixin.decorateServiceException(Object.assign(_, J, {
        $fault: O.getMergedTraits().error,
        message: X
      }, G), Y);
    }
  }
  var ST5 = A => {
      if (A == null) return A;
      if (typeof A === "number" || typeof A === "bigint") {
        let K = Error(`Received number ${A} where a string was expected.`);
        return K.name = "Warning", console.warn(K), String(A);
      }
      if (typeof A === "boolean") {
        let K = Error(`Received boolean ${A} where a string was expected.`);
        return K.name = "Warning", console.warn(K), String(A);
      }
      return A;
    },
    hT5 = A => {
      if (A == null) return A;
      if (typeof A === "string") {
        let K = A.toLowerCase();
        if (A !== "" && K !== "false" && K !== "true") {
          let q = Error(`Received string "${A}" where a boolean was expected.`);
          q.name = "Warning", console.warn(q);
        }
        return A !== "" && K !== "false";
      }
      return A;
    },
    bT5 = A => {
      if (A == null) return A;
      if (typeof A === "string") {
        let K = Number(A);
        if (K.toString() !== A) {
          let q = Error(`Received string "${A}" where a number was expected.`);
          return q.name = "Warning", console.warn(q), A;
        }
        return K;
      }
      return A;
    };
  class ei {
    serdeContext;
    setSerdeContext(A) {
      this.serdeContext = A;
    }
  }
  function xT5(A, K, q) {
    if (q?.source) {
      let Y = q.source;
      if (typeof K === "number") {
        if (K > Number.MAX_SAFE_INTEGER || K < Number.MIN_SAFE_INTEGER || Y !== String(K)) if (Y.includes(".")) return new s_.NumericValue(Y, "bigDecimal");else return BigInt(Y);
      }
    }
    return K;
  }
  var sQ8 = (A, K) => nF.collectBody(A, K).then(q => (K?.utf8Encoder ?? iQ8.toUtf8)(q)),
    Un1 = (A, K) => sQ8(A, K).then(q => {
      if (q.length) try {
        return JSON.parse(q);
      } catch (Y) {
        if (Y?.name === "SyntaxError") Object.defineProperty(Y, "$responseBodyText", {
          value: q
        });
        throw Y;
      }
      return {};
    }),
    uT5 = async (A, K) => {
      let q = await Un1(A, K);
      return q.message = q.message ?? q.Message, q;
    },
    pn1 = (A, K) => {
      let q = (w, H) => Object.keys(w).find(J => J.toLowerCase() === H.toLowerCase()),
        Y = w => {
          let H = w;
          if (typeof H === "number") H = H.toString();
          if (H.indexOf(",") >= 0) H = H.split(",")[0];
          if (H.indexOf(":") >= 0) H = H.split(":")[0];
          if (H.indexOf("#") >= 0) H = H.split("#")[1];
          return H;
        },
        z = q(A.headers, "x-amzn-errortype");
      if (z !== void 0) return Y(A.headers[z]);
      if (K && typeof K === "object") {
        let w = q(K, "code");
        if (w && K[w] !== void 0) return Y(K[w]);
        if (K.__type !== void 0) return Y(K.__type);
      }
    };
  class dn1 extends ei {
    settings;
    constructor(A) {
      super();
      this.settings = A;
    }
    async read(A, K) {
      return this._read(A, typeof K === "string" ? JSON.parse(K, xT5) : await Un1(K, this.serdeContext));
    }
    readObject(A, K) {
      return this._read(A, K);
    }
    _read(A, K) {
      let q = K !== null && typeof K === "object",
        Y = Zz.NormalizedSchema.of(A);
      if (Y.isListSchema() && Array.isArray(K)) {
        let w = Y.getValueSchema(),
          H = [],
          J = !!Y.getMergedTraits().sparse;
        for (let O of K) if (J || O != null) H.push(this._read(w, O));
        return H;
      } else if (Y.isMapSchema() && q) {
        let w = Y.getValueSchema(),
          H = {},
          J = !!Y.getMergedTraits().sparse;
        for (let [O, X] of Object.entries(K)) if (J || X != null) H[O] = this._read(w, X);
        return H;
      } else if (Y.isStructSchema() && q) {
        let w = {};
        for (let [H, J] of Y.structIterator()) {
          let O = this.settings.jsonName ? J.getMergedTraits().jsonName ?? H : H,
            X = this._read(J, K[O]);
          if (X != null) w[H] = X;
        }
        return w;
      }
      if (Y.isBlobSchema() && typeof K === "string") return UCA.fromBase64(K);
      let z = Y.getMergedTraits().mediaType;
      if (Y.isStringSchema() && typeof K === "string" && z) {
        if (z === "application/json" || z.endsWith("+json")) return s_.LazyJsonString.from(K);
      }
      if (Y.isTimestampSchema() && K != null) switch (EZ.determineTimestampFormat(Y, this.settings)) {
        case 5:
          return s_.parseRfc3339DateTimeWithOffset(K);
        case 6:
          return s_.parseRfc7231DateTime(K);
        case 7:
          return s_.parseEpochTimestamp(K);
        default:
          return console.warn("Missing timestamp format, parsing value with Date constructor:", K), new Date(K);
      }
      if (Y.isBigIntegerSchema() && (typeof K === "number" || typeof K === "string")) return BigInt(K);
      if (Y.isBigDecimalSchema() && K != null) {
        if (K instanceof s_.NumericValue) return K;
        let w = K;
        if (w.type === "bigDecimal" && "string" in w) return new s_.NumericValue(w.string, w.type);
        return new s_.NumericValue(String(K), "bigDecimal");
      }
      if (Y.isNumericSchema() && typeof K === "string") switch (K) {
        case "Infinity":
          return 1 / 0;
        case "-Infinity":
          return -1 / 0;
        case "NaN":
          return NaN;
      }
      if (Y.isDocumentSchema()) if (q) {
        let w = Array.isArray(K) ? [] : {};
        for (let [H, J] of Object.entries(K)) if (J instanceof s_.NumericValue) w[H] = J;else w[H] = this._read(Y, J);
        return w;
      } else return structuredClone(K);
      return K;
    }
  }
  var lQ8 = String.fromCharCode(925);
  class tQ8 {
    values = new Map();
    counter = 0;
    stage = 0;
    createReplacer() {
      if (this.stage === 1) throw Error("@aws-sdk/core/protocols - JsonReplacer already created.");
      if (this.stage === 2) throw Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
      return this.stage = 1, (A, K) => {
        if (K instanceof s_.NumericValue) {
          let q = `${lQ8 + "nv" + this.counter++}_` + K.string;
          return this.values.set(`"${q}"`, K.string), q;
        }
        if (typeof K === "bigint") {
          let q = K.toString(),
            Y = `${lQ8 + "b" + this.counter++}_` + q;
          return this.values.set(`"${Y}"`, q), Y;
        }
        return K;
      };
    }
    replaceInJson(A) {
      if (this.stage === 0) throw Error("@aws-sdk/core/protocols - JsonReplacer not created yet.");
      if (this.stage === 2) throw Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
      if (this.stage = 2, this.counter === 0) return A;
      for (let [K, q] of this.values) A = A.replace(K, q);
      return A;
    }
  }
  class cn1 extends ei {
    settings;
    buffer;
    rootSchema;
    constructor(A) {
      super();
      this.settings = A;
    }
    write(A, K) {
      this.rootSchema = Zz.NormalizedSchema.of(A), this.buffer = this._write(this.rootSchema, K);
    }
    writeDiscriminatedDocument(A, K) {
      if (this.write(A, K), typeof this.buffer === "object") this.buffer.__type = Zz.NormalizedSchema.of(A).getName(!0);
    }
    flush() {
      let {
        rootSchema: A
      } = this;
      if (this.rootSchema = void 0, A?.isStructSchema() || A?.isDocumentSchema()) {
        let K = new tQ8();
        return K.replaceInJson(JSON.stringify(this.buffer, K.createReplacer(), 0));
      }
      return this.buffer;
    }
    _write(A, K, q) {
      let Y = K !== null && typeof K === "object",
        z = Zz.NormalizedSchema.of(A);
      if (z.isListSchema() && Array.isArray(K)) {
        let w = z.getValueSchema(),
          H = [],
          J = !!z.getMergedTraits().sparse;
        for (let O of K) if (J || O != null) H.push(this._write(w, O));
        return H;
      } else if (z.isMapSchema() && Y) {
        let w = z.getValueSchema(),
          H = {},
          J = !!z.getMergedTraits().sparse;
        for (let [O, X] of Object.entries(K)) if (J || X != null) H[O] = this._write(w, X);
        return H;
      } else if (z.isStructSchema() && Y) {
        let w = {};
        for (let [H, J] of z.structIterator()) {
          let O = this.settings.jsonName ? J.getMergedTraits().jsonName ?? H : H,
            X = this._write(J, K[H], z);
          if (X !== void 0) w[O] = X;
        }
        return w;
      }
      if (K === null && q?.isStructSchema()) return;
      if (z.isBlobSchema() && (K instanceof Uint8Array || typeof K === "string") || z.isDocumentSchema() && K instanceof Uint8Array) {
        if (z === this.rootSchema) return K;
        return (this.serdeContext?.base64Encoder ?? UCA.toBase64)(K);
      }
      if ((z.isTimestampSchema() || z.isDocumentSchema()) && K instanceof Date) switch (EZ.determineTimestampFormat(z, this.settings)) {
        case 5:
          return K.toISOString().replace(".000Z", "Z");
        case 6:
          return s_.dateToUtcString(K);
        case 7:
          return K.getTime() / 1000;
        default:
          return console.warn("Missing timestamp format, using epoch seconds", K), K.getTime() / 1000;
      }
      if (z.isNumericSchema() && typeof K === "number") {
        if (Math.abs(K) === 1 / 0 || isNaN(K)) return String(K);
      }
      if (z.isStringSchema()) {
        if (typeof K > "u" && z.isIdempotencyToken()) return s_.generateIdempotencyToken();
        let w = z.getMergedTraits().mediaType;
        if (K != null && w) {
          if (w === "application/json" || w.endsWith("+json")) return s_.LazyJsonString.from(K);
        }
      }
      if (z.isDocumentSchema()) if (Y) {
        let w = Array.isArray(K) ? [] : {};
        for (let [H, J] of Object.entries(K)) if (J instanceof s_.NumericValue) w[H] = J;else w[H] = this._write(z, J);
        return w;
      } else return structuredClone(K);
      return K;
    }
  }
  class i61 extends ei {
    settings;
    constructor(A) {
      super();
      this.settings = A;
    }
    createSerializer() {
      let A = new cn1(this.settings);
      return A.setSerdeContext(this.serdeContext), A;
    }
    createDeserializer() {
      let A = new dn1(this.settings);
      return A.setSerdeContext(this.serdeContext), A;
    }
  }
  class n61 extends EZ.RpcProtocol {
    serializer;
    deserializer;
    serviceTarget;
    codec;
    mixin;
    awsQueryCompatible;
    constructor({
      defaultNamespace: A,
      serviceTarget: K,
      awsQueryCompatible: q
    }) {
      super({
        defaultNamespace: A
      });
      this.serviceTarget = K, this.codec = new i61({
        timestampFormat: {
          useTrait: !0,
          default: 7
        },
        jsonName: !1
      }), this.serializer = this.codec.createSerializer(), this.deserializer = this.codec.createDeserializer(), this.awsQueryCompatible = !!q, this.mixin = new XOA(this.awsQueryCompatible);
    }
    async serializeRequest(A, K, q) {
      let Y = await super.serializeRequest(A, K, q);
      if (!Y.path.endsWith("/")) Y.path += "/";
      if (Object.assign(Y.headers, {
        "content-type": `application/x-amz-json-${this.getJsonRpcVersion()}`,
        "x-amz-target": `${this.serviceTarget}.${A.name}`
      }), this.awsQueryCompatible) Y.headers["x-amzn-query-mode"] = "true";
      if (Zz.deref(A.input) === "unit" || !Y.body) Y.body = "{}";
      return Y;
    }
    getPayloadCodec() {
      return this.codec;
    }
    async handleError(A, K, q, Y, z) {
      if (this.awsQueryCompatible) this.mixin.setQueryCompatError(Y, q);
      let w = pn1(q, Y) ?? "Unknown",
        {
          errorSchema: H,
          errorMetadata: J
        } = await this.mixin.getErrorSchemaOrThrowBaseException(w, this.options.defaultNamespace, q, Y, z),
        O = Zz.NormalizedSchema.of(H),
        X = Y.message ?? Y.Message ?? "Unknown",
        _ = new (Zz.TypeRegistry.for(H[1]).getErrorCtor(H) ?? Error)(X),
        G = {};
      for (let [Z, W] of O.structIterator()) {
        let D = W.getMergedTraits().jsonName ?? Z;
        G[Z] = this.codec.createDeserializer().readObject(W, Y[D]);
      }
      if (this.awsQueryCompatible) this.mixin.queryCompatOutput(Y, G);
      throw this.mixin.decorateServiceException(Object.assign(_, J, {
        $fault: O.getMergedTraits().error,
        message: X
      }, G), Y);
    }
  }
  class eQ8 extends n61 {
    constructor({
      defaultNamespace: A,
      serviceTarget: K,
      awsQueryCompatible: q
    }) {
      super({
        defaultNamespace: A,
        serviceTarget: K,
        awsQueryCompatible: q
      });
    }
    getShapeId() {
      return "aws.protocols#awsJson1_0";
    }
    getJsonRpcVersion() {
      return "1.0";
    }
    getDefaultContentType() {
      return "application/x-amz-json-1.0";
    }
  }
  class AU8 extends n61 {
    constructor({
      defaultNamespace: A,
      serviceTarget: K,
      awsQueryCompatible: q
    }) {
      super({
        defaultNamespace: A,
        serviceTarget: K,
        awsQueryCompatible: q
      });
    }
    getShapeId() {
      return "aws.protocols#awsJson1_1";
    }
    getJsonRpcVersion() {
      return "1.1";
    }
    getDefaultContentType() {
      return "application/x-amz-json-1.1";
    }
  }
  class KU8 extends EZ.HttpBindingProtocol {
    serializer;
    deserializer;
    codec;
    mixin = new XOA();
    constructor({
      defaultNamespace: A
    }) {
      super({
        defaultNamespace: A
      });
      let K = {
        timestampFormat: {
          useTrait: !0,
          default: 7
        },
        httpBindings: !0,
        jsonName: !0
      };
      this.codec = new i61(K), this.serializer = new EZ.HttpInterceptingShapeSerializer(this.codec.createSerializer(), K), this.deserializer = new EZ.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), K);
    }
    getShapeId() {
      return "aws.protocols#restJson1";
    }
    getPayloadCodec() {
      return this.codec;
    }
    setSerdeContext(A) {
      this.codec.setSerdeContext(A), super.setSerdeContext(A);
    }
    async serializeRequest(A, K, q) {
      let Y = await super.serializeRequest(A, K, q),
        z = Zz.NormalizedSchema.of(A.input);
      if (!Y.headers["content-type"]) {
        let w = this.mixin.resolveRestContentType(this.getDefaultContentType(), z);
        if (w) Y.headers["content-type"] = w;
      }
      if (Y.body == null && Y.headers["content-type"] === this.getDefaultContentType()) Y.body = "{}";
      return Y;
    }
    async deserializeResponse(A, K, q) {
      let Y = await super.deserializeResponse(A, K, q),
        z = Zz.NormalizedSchema.of(A.output);
      for (let [w, H] of z.structIterator()) if (H.getMemberTraits().httpPayload && !(w in Y)) Y[w] = null;
      return Y;
    }
    async handleError(A, K, q, Y, z) {
      let w = pn1(q, Y) ?? "Unknown",
        {
          errorSchema: H,
          errorMetadata: J
        } = await this.mixin.getErrorSchemaOrThrowBaseException(w, this.options.defaultNamespace, q, Y, z),
        O = Zz.NormalizedSchema.of(H),
        X = Y.message ?? Y.Message ?? "Unknown",
        _ = new (Zz.TypeRegistry.for(H[1]).getErrorCtor(H) ?? Error)(X);
      await this.deserializeHttpMessage(H, K, q, Y);
      let G = {};
      for (let [Z, W] of O.structIterator()) {
        let D = W.getMergedTraits().jsonName ?? Z;
        G[Z] = this.codec.createDeserializer().readObject(W, Y[D]);
      }
      throw this.mixin.decorateServiceException(Object.assign(_, J, {
        $fault: O.getMergedTraits().error,
        message: X
      }, G), Y);
    }
    getDefaultContentType() {
      return "application/json";
    }
  }
  var BT5 = A => {
    if (A == null) return;
    if (typeof A === "object" && "__type" in A) delete A.__type;
    return nF.expectUnion(A);
  };
  class r61 extends ei {
    settings;
    stringDeserializer;
    constructor(A) {
      super();
      this.settings = A, this.stringDeserializer = new EZ.FromStringShapeDeserializer(A);
    }
    setSerdeContext(A) {
      this.serdeContext = A, this.stringDeserializer.setSerdeContext(A);
    }
    read(A, K, q) {
      let Y = Zz.NormalizedSchema.of(A),
        z = Y.getMemberSchemas();
      if (Y.isStructSchema() && Y.isMemberSchema() && !!Object.values(z).find(O => {
        return !!O.getMemberTraits().eventPayload;
      })) {
        let O = {},
          X = Object.keys(z)[0];
        if (z[X].isBlobSchema()) O[X] = K;else O[X] = this.read(z[X], K);
        return O;
      }
      let H = (this.serdeContext?.utf8Encoder ?? iQ8.toUtf8)(K),
        J = this.parseXml(H);
      return this.readSchema(A, q ? J[q] : J);
    }
    readSchema(A, K) {
      let q = Zz.NormalizedSchema.of(A);
      if (q.isUnitSchema()) return;
      let Y = q.getMergedTraits();
      if (q.isListSchema() && !Array.isArray(K)) return this.readSchema(q, [K]);
      if (K == null) return K;
      if (typeof K === "object") {
        let z = !!Y.sparse,
          w = !!Y.xmlFlattened;
        if (q.isListSchema()) {
          let J = q.getValueSchema(),
            O = [],
            X = J.getMergedTraits().xmlName ?? "member",
            $ = w ? K : (K[0] ?? K)[X],
            _ = Array.isArray($) ? $ : [$];
          for (let G of _) if (G != null || z) O.push(this.readSchema(J, G));
          return O;
        }
        let H = {};
        if (q.isMapSchema()) {
          let J = q.getKeySchema(),
            O = q.getValueSchema(),
            X;
          if (w) X = Array.isArray(K) ? K : [K];else X = Array.isArray(K.entry) ? K.entry : [K.entry];
          let $ = J.getMergedTraits().xmlName ?? "key",
            _ = O.getMergedTraits().xmlName ?? "value";
          for (let G of X) {
            let Z = G[$],
              W = G[_];
            if (W != null || z) H[Z] = this.readSchema(O, W);
          }
          return H;
        }
        if (q.isStructSchema()) {
          for (let [J, O] of q.structIterator()) {
            let X = O.getMergedTraits(),
              $ = !X.httpPayload ? O.getMemberTraits().xmlName ?? J : X.xmlName ?? O.getName();
            if (K[$] != null) H[J] = this.readSchema(O, K[$]);
          }
          return H;
        }
        if (q.isDocumentSchema()) return K;
        throw Error(`@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${q.getName(!0)}`);
      }
      if (q.isListSchema()) return [];
      if (q.isMapSchema() || q.isStructSchema()) return {};
      return this.stringDeserializer.read(q, K);
    }
    parseXml(A) {
      if (A.length) {
        let K;
        try {
          K = eE.parseXML(A);
        } catch (w) {
          if (w && typeof w === "object") Object.defineProperty(w, "$responseBodyText", {
            value: A
          });
          throw w;
        }
        let q = "#text",
          Y = Object.keys(K)[0],
          z = K[Y];
        if (z[q]) z[Y] = z[q], delete z[q];
        return nF.getValueFromTextNode(z);
      }
      return {};
    }
  }
  class qU8 extends ei {
    settings;
    buffer;
    constructor(A) {
      super();
      this.settings = A;
    }
    write(A, K, q = "") {
      if (this.buffer === void 0) this.buffer = "";
      let Y = Zz.NormalizedSchema.of(A);
      if (q && !q.endsWith(".")) q += ".";
      if (Y.isBlobSchema()) {
        if (typeof K === "string" || K instanceof Uint8Array) this.writeKey(q), this.writeValue((this.serdeContext?.base64Encoder ?? UCA.toBase64)(K));
      } else if (Y.isBooleanSchema() || Y.isNumericSchema() || Y.isStringSchema()) {
        if (K != null) this.writeKey(q), this.writeValue(String(K));else if (Y.isIdempotencyToken()) this.writeKey(q), this.writeValue(s_.generateIdempotencyToken());
      } else if (Y.isBigIntegerSchema()) {
        if (K != null) this.writeKey(q), this.writeValue(String(K));
      } else if (Y.isBigDecimalSchema()) {
        if (K != null) this.writeKey(q), this.writeValue(K instanceof s_.NumericValue ? K.string : String(K));
      } else if (Y.isTimestampSchema()) {
        if (K instanceof Date) switch (this.writeKey(q), EZ.determineTimestampFormat(Y, this.settings)) {
          case 5:
            this.writeValue(K.toISOString().replace(".000Z", "Z"));
            break;
          case 6:
            this.writeValue(nF.dateToUtcString(K));
            break;
          case 7:
            this.writeValue(String(K.getTime() / 1000));
            break;
        }
      } else if (Y.isDocumentSchema()) throw Error(`@aws-sdk/core/protocols - QuerySerializer unsupported document type ${Y.getName(!0)}`);else if (Y.isListSchema()) {
        if (Array.isArray(K)) if (K.length === 0) {
          if (this.settings.serializeEmptyLists) this.writeKey(q), this.writeValue("");
        } else {
          let z = Y.getValueSchema(),
            w = this.settings.flattenLists || Y.getMergedTraits().xmlFlattened,
            H = 1;
          for (let J of K) {
            if (J == null) continue;
            let O = this.getKey("member", z.getMergedTraits().xmlName),
              X = w ? `${q}${H}` : `${q}${O}.${H}`;
            this.write(z, J, X), ++H;
          }
        }
      } else if (Y.isMapSchema()) {
        if (K && typeof K === "object") {
          let z = Y.getKeySchema(),
            w = Y.getValueSchema(),
            H = Y.getMergedTraits().xmlFlattened,
            J = 1;
          for (let [O, X] of Object.entries(K)) {
            if (X == null) continue;
            let $ = this.getKey("key", z.getMergedTraits().xmlName),
              _ = H ? `${q}${J}.${$}` : `${q}entry.${J}.${$}`,
              G = this.getKey("value", w.getMergedTraits().xmlName),
              Z = H ? `${q}${J}.${G}` : `${q}entry.${J}.${G}`;
            this.write(z, O, _), this.write(w, X, Z), ++J;
          }
        }
      } else if (Y.isStructSchema()) {
        if (K && typeof K === "object") for (let [z, w] of Y.structIterator()) {
          if (K[z] == null && !w.isIdempotencyToken()) continue;
          let H = this.getKey(z, w.getMergedTraits().xmlName),
            J = `${q}${H}`;
          this.write(w, K[z], J);
        }
      } else if (Y.isUnitSchema()) ;else throw Error(`@aws-sdk/core/protocols - QuerySerializer unrecognized schema type ${Y.getName(!0)}`);
    }
    flush() {
      if (this.buffer === void 0) throw Error("@aws-sdk/core/protocols - QuerySerializer cannot flush with nothing written to buffer.");
      let A = this.buffer;
      return delete this.buffer, A;
    }
    getKey(A, K) {
      let q = K ?? A;
      if (this.settings.capitalizeKeys) return q[0].toUpperCase() + q.slice(1);
      return q;
    }
    writeKey(A) {
      if (A.endsWith(".")) A = A.slice(0, A.length - 1);
      this.buffer += `&${EZ.extendedEncodeURIComponent(A)}=`;
    }
    writeValue(A) {
      this.buffer += EZ.extendedEncodeURIComponent(A);
    }
  }
  class ln1 extends EZ.RpcProtocol {
    options;
    serializer;
    deserializer;
    mixin = new XOA();
    constructor(A) {
      super({
        defaultNamespace: A.defaultNamespace
      });
      this.options = A;
      let K = {
        timestampFormat: {
          useTrait: !0,
          default: 5
        },
        httpBindings: !1,
        xmlNamespace: A.xmlNamespace,
        serviceNamespace: A.defaultNamespace,
        serializeEmptyLists: !0
      };
      this.serializer = new qU8(K), this.deserializer = new r61(K);
    }
    getShapeId() {
      return "aws.protocols#awsQuery";
    }
    setSerdeContext(A) {
      this.serializer.setSerdeContext(A), this.deserializer.setSerdeContext(A);
    }
    getPayloadCodec() {
      throw Error("AWSQuery protocol has no payload codec.");
    }
    async serializeRequest(A, K, q) {
      let Y = await super.serializeRequest(A, K, q);
      if (!Y.path.endsWith("/")) Y.path += "/";
      if (Object.assign(Y.headers, {
        "content-type": "application/x-www-form-urlencoded"
      }), Zz.deref(A.input) === "unit" || !Y.body) Y.body = "";
      let z = A.name.split("#")[1] ?? A.name;
      if (Y.body = `Action=${z}&Version=${this.options.version}` + Y.body, Y.body.endsWith("&")) Y.body = Y.body.slice(-1);
      return Y;
    }
    async deserializeResponse(A, K, q) {
      let Y = this.deserializer,
        z = Zz.NormalizedSchema.of(A.output),
        w = {};
      if (q.statusCode >= 300) {
        let $ = await EZ.collectBody(q.body, K);
        if ($.byteLength > 0) Object.assign(w, await Y.read(15, $));
        await this.handleError(A, K, q, w, this.deserializeMetadata(q));
      }
      for (let $ in q.headers) {
        let _ = q.headers[$];
        delete q.headers[$], q.headers[$.toLowerCase()] = _;
      }
      let H = A.name.split("#")[1] ?? A.name,
        J = z.isStructSchema() && this.useNestedResult() ? H + "Result" : void 0,
        O = await EZ.collectBody(q.body, K);
      if (O.byteLength > 0) Object.assign(w, await Y.read(z, O, J));
      return {
        $metadata: this.deserializeMetadata(q),
        ...w
      };
    }
    useNestedResult() {
      return !0;
    }
    async handleError(A, K, q, Y, z) {
      let w = this.loadQueryErrorCode(q, Y) ?? "Unknown",
        H = this.loadQueryError(Y),
        J = this.loadQueryErrorMessage(Y);
      H.message = J, H.Error = {
        Type: H.Type,
        Code: H.Code,
        Message: J
      };
      let {
          errorSchema: O,
          errorMetadata: X
        } = await this.mixin.getErrorSchemaOrThrowBaseException(w, this.options.defaultNamespace, q, H, z, (W, D) => {
          try {
            return W.getSchema(D);
          } catch (j) {
            return W.find(M => Zz.NormalizedSchema.of(M).getMergedTraits().awsQueryError?.[0] === D);
          }
        }),
        $ = Zz.NormalizedSchema.of(O),
        G = new (Zz.TypeRegistry.for(O[1]).getErrorCtor(O) ?? Error)(J),
        Z = {
          Error: H.Error
        };
      for (let [W, D] of $.structIterator()) {
        let j = D.getMergedTraits().xmlName ?? W,
          M = H[j] ?? Y[j];
        Z[W] = this.deserializer.readSchema(D, M);
      }
      throw this.mixin.decorateServiceException(Object.assign(G, X, {
        $fault: $.getMergedTraits().error,
        message: J
      }, Z), Y);
    }
    loadQueryErrorCode(A, K) {
      let q = (K.Errors?.[0]?.Error ?? K.Errors?.Error ?? K.Error)?.Code;
      if (q !== void 0) return q;
      if (A.statusCode == 404) return "NotFound";
    }
    loadQueryError(A) {
      return A.Errors?.[0]?.Error ?? A.Errors?.Error ?? A.Error;
    }
    loadQueryErrorMessage(A) {
      let K = this.loadQueryError(A);
      return K?.message ?? K?.Message ?? A.message ?? A.Message ?? "Unknown";
    }
    getDefaultContentType() {
      return "application/x-www-form-urlencoded";
    }
  }
  class YU8 extends ln1 {
    options;
    constructor(A) {
      super(A);
      this.options = A;
      let K = {
        capitalizeKeys: !0,
        flattenLists: !0,
        serializeEmptyLists: !1
      };
      Object.assign(this.serializer.settings, K);
    }
    useNestedResult() {
      return !1;
    }
  }
  var zU8 = (A, K) => sQ8(A, K).then(q => {
      if (q.length) {
        let Y;
        try {
          Y = eE.parseXML(q);
        } catch (J) {
          if (J && typeof J === "object") Object.defineProperty(J, "$responseBodyText", {
            value: q
          });
          throw J;
        }
        let z = "#text",
          w = Object.keys(Y)[0],
          H = Y[w];
        if (H[z]) H[w] = H[z], delete H[z];
        return nF.getValueFromTextNode(H);
      }
      return {};
    }),
    mT5 = async (A, K) => {
      let q = await zU8(A, K);
      if (q.Error) q.Error.message = q.Error.message ?? q.Error.Message;
      return q;
    },
    wU8 = (A, K) => {
      if (K?.Error?.Code !== void 0) return K.Error.Code;
      if (K?.Code !== void 0) return K.Code;
      if (A.statusCode == 404) return "NotFound";
    };
  class in1 extends ei {
    settings;
    stringBuffer;
    byteBuffer;
    buffer;
    constructor(A) {
      super();
      this.settings = A;
    }
    write(A, K) {
      let q = Zz.NormalizedSchema.of(A);
      if (q.isStringSchema() && typeof K === "string") this.stringBuffer = K;else if (q.isBlobSchema()) this.byteBuffer = "byteLength" in K ? K : (this.serdeContext?.base64Decoder ?? UCA.fromBase64)(K);else {
        this.buffer = this.writeStruct(q, K, void 0);
        let Y = q.getMergedTraits();
        if (Y.httpPayload && !Y.xmlName) this.buffer.withName(q.getName());
      }
    }
    flush() {
      if (this.byteBuffer !== void 0) {
        let K = this.byteBuffer;
        return delete this.byteBuffer, K;
      }
      if (this.stringBuffer !== void 0) {
        let K = this.stringBuffer;
        return delete this.stringBuffer, K;
      }
      let A = this.buffer;
      if (this.settings.xmlNamespace) {
        if (!A?.attributes?.xmlns) A.addAttribute("xmlns", this.settings.xmlNamespace);
      }
      return delete this.buffer, A.toString();
    }
    writeStruct(A, K, q) {
      let Y = A.getMergedTraits(),
        z = A.isMemberSchema() && !Y.httpPayload ? A.getMemberTraits().xmlName ?? A.getMemberName() : Y.xmlName ?? A.getName();
      if (!z || !A.isStructSchema()) throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write struct with empty name or non-struct, schema=${A.getName(!0)}.`);
      let w = eE.XmlNode.of(z),
        [H, J] = this.getXmlnsAttribute(A, q);
      for (let [O, X] of A.structIterator()) {
        let $ = K[O];
        if ($ != null || X.isIdempotencyToken()) {
          if (X.getMergedTraits().xmlAttribute) {
            w.addAttribute(X.getMergedTraits().xmlName ?? O, this.writeSimple(X, $));
            continue;
          }
          if (X.isListSchema()) this.writeList(X, $, w, J);else if (X.isMapSchema()) this.writeMap(X, $, w, J);else if (X.isStructSchema()) w.addChildNode(this.writeStruct(X, $, J));else {
            let _ = eE.XmlNode.of(X.getMergedTraits().xmlName ?? X.getMemberName());
            this.writeSimpleInto(X, $, _, J), w.addChildNode(_);
          }
        }
      }
      if (J) w.addAttribute(H, J);
      return w;
    }
    writeList(A, K, q, Y) {
      if (!A.isMemberSchema()) throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member list: ${A.getName(!0)}`);
      let z = A.getMergedTraits(),
        w = A.getValueSchema(),
        H = w.getMergedTraits(),
        J = !!H.sparse,
        O = !!z.xmlFlattened,
        [X, $] = this.getXmlnsAttribute(A, Y),
        _ = (G, Z) => {
          if (w.isListSchema()) this.writeList(w, Array.isArray(Z) ? Z : [Z], G, $);else if (w.isMapSchema()) this.writeMap(w, Z, G, $);else if (w.isStructSchema()) {
            let W = this.writeStruct(w, Z, $);
            G.addChildNode(W.withName(O ? z.xmlName ?? A.getMemberName() : H.xmlName ?? "member"));
          } else {
            let W = eE.XmlNode.of(O ? z.xmlName ?? A.getMemberName() : H.xmlName ?? "member");
            this.writeSimpleInto(w, Z, W, $), G.addChildNode(W);
          }
        };
      if (O) {
        for (let G of K) if (J || G != null) _(q, G);
      } else {
        let G = eE.XmlNode.of(z.xmlName ?? A.getMemberName());
        if ($) G.addAttribute(X, $);
        for (let Z of K) if (J || Z != null) _(G, Z);
        q.addChildNode(G);
      }
    }
    writeMap(A, K, q, Y, z = !1) {
      if (!A.isMemberSchema()) throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member map: ${A.getName(!0)}`);
      let w = A.getMergedTraits(),
        H = A.getKeySchema(),
        O = H.getMergedTraits().xmlName ?? "key",
        X = A.getValueSchema(),
        $ = X.getMergedTraits(),
        _ = $.xmlName ?? "value",
        G = !!$.sparse,
        Z = !!w.xmlFlattened,
        [W, D] = this.getXmlnsAttribute(A, Y),
        j = (M, P, f) => {
          let N = eE.XmlNode.of(O, P),
            [T, C] = this.getXmlnsAttribute(H, D);
          if (C) N.addAttribute(T, C);
          M.addChildNode(N);
          let R = eE.XmlNode.of(_);
          if (X.isListSchema()) this.writeList(X, f, R, D);else if (X.isMapSchema()) this.writeMap(X, f, R, D, !0);else if (X.isStructSchema()) R = this.writeStruct(X, f, D);else this.writeSimpleInto(X, f, R, D);
          M.addChildNode(R);
        };
      if (Z) {
        for (let [M, P] of Object.entries(K)) if (G || P != null) {
          let f = eE.XmlNode.of(w.xmlName ?? A.getMemberName());
          j(f, M, P), q.addChildNode(f);
        }
      } else {
        let M;
        if (!z) {
          if (M = eE.XmlNode.of(w.xmlName ?? A.getMemberName()), D) M.addAttribute(W, D);
          q.addChildNode(M);
        }
        for (let [P, f] of Object.entries(K)) if (G || f != null) {
          let N = eE.XmlNode.of("entry");
          j(N, P, f), (z ? q : M).addChildNode(N);
        }
      }
    }
    writeSimple(A, K) {
      if (K === null) throw Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value.");
      let q = Zz.NormalizedSchema.of(A),
        Y = null;
      if (K && typeof K === "object") if (q.isBlobSchema()) Y = (this.serdeContext?.base64Encoder ?? UCA.toBase64)(K);else if (q.isTimestampSchema() && K instanceof Date) switch (EZ.determineTimestampFormat(q, this.settings)) {
        case 5:
          Y = K.toISOString().replace(".000Z", "Z");
          break;
        case 6:
          Y = nF.dateToUtcString(K);
          break;
        case 7:
          Y = String(K.getTime() / 1000);
          break;
        default:
          console.warn("Missing timestamp format, using http date", K), Y = nF.dateToUtcString(K);
          break;
      } else if (q.isBigDecimalSchema() && K) {
        if (K instanceof s_.NumericValue) return K.string;
        return String(K);
      } else if (q.isMapSchema() || q.isListSchema()) throw Error("@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead.");else throw Error(`@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${q.getName(!0)}`);
      if (q.isBooleanSchema() || q.isNumericSchema() || q.isBigIntegerSchema() || q.isBigDecimalSchema()) Y = String(K);
      if (q.isStringSchema()) if (K === void 0 && q.isIdempotencyToken()) Y = s_.generateIdempotencyToken();else Y = String(K);
      if (Y === null) throw Error(`Unhandled schema-value pair ${q.getName(!0)}=${K}`);
      return Y;
    }
    writeSimpleInto(A, K, q, Y) {
      let z = this.writeSimple(A, K),
        w = Zz.NormalizedSchema.of(A),
        H = new eE.XmlText(z),
        [J, O] = this.getXmlnsAttribute(w, Y);
      if (O) q.addAttribute(J, O);
      q.addChildNode(H);
    }
    getXmlnsAttribute(A, K) {
      let q = A.getMergedTraits(),
        [Y, z] = q.xmlNamespace ?? [];
      if (z && z !== K) return [Y ? `xmlns:${Y}` : "xmlns", z];
      return [void 0, void 0];
    }
  }
  class nn1 extends ei {
    settings;
    constructor(A) {
      super();
      this.settings = A;
    }
    createSerializer() {
      let A = new in1(this.settings);
      return A.setSerdeContext(this.serdeContext), A;
    }
    createDeserializer() {
      let A = new r61(this.settings);
      return A.setSerdeContext(this.serdeContext), A;
    }
  }
  class HU8 extends EZ.HttpBindingProtocol {
    codec;
    serializer;
    deserializer;
    mixin = new XOA();
    constructor(A) {
      super(A);
      let K = {
        timestampFormat: {
          useTrait: !0,
          default: 5
        },
        httpBindings: !0,
        xmlNamespace: A.xmlNamespace,
        serviceNamespace: A.defaultNamespace
      };
      this.codec = new nn1(K), this.serializer = new EZ.HttpInterceptingShapeSerializer(this.codec.createSerializer(), K), this.deserializer = new EZ.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), K);
    }
    getPayloadCodec() {
      return this.codec;
    }
    getShapeId() {
      return "aws.protocols#restXml";
    }
    async serializeRequest(A, K, q) {
      let Y = await super.serializeRequest(A, K, q),
        z = Zz.NormalizedSchema.of(A.input);
      if (!Y.headers["content-type"]) {
        let w = this.mixin.resolveRestContentType(this.getDefaultContentType(), z);
        if (w) Y.headers["content-type"] = w;
      }
      if (Y.headers["content-type"] === this.getDefaultContentType()) {
        if (typeof Y.body === "string") Y.body = '<?xml version="1.0" encoding="UTF-8"?>' + Y.body;
      }
      return Y;
    }
    async deserializeResponse(A, K, q) {
      return super.deserializeResponse(A, K, q);
    }
    async handleError(A, K, q, Y, z) {
      let w = wU8(q, Y) ?? "Unknown",
        {
          errorSchema: H,
          errorMetadata: J
        } = await this.mixin.getErrorSchemaOrThrowBaseException(w, this.options.defaultNamespace, q, Y, z),
        O = Zz.NormalizedSchema.of(H),
        X = Y.Error?.message ?? Y.Error?.Message ?? Y.message ?? Y.Message ?? "Unknown",
        _ = new (Zz.TypeRegistry.for(H[1]).getErrorCtor(H) ?? Error)(X);
      await this.deserializeHttpMessage(H, K, q, Y);
      let G = {};
      for (let [Z, W] of O.structIterator()) {
        let D = W.getMergedTraits().xmlName ?? Z,
          j = Y.Error?.[D] ?? Y[D];
        G[Z] = this.codec.createDeserializer().readSchema(W, j);
      }
      throw this.mixin.decorateServiceException(Object.assign(_, J, {
        $fault: O.getMergedTraits().error,
        message: X
      }, G), Y);
    }
    getDefaultContentType() {
      return "application/xml";
    }
  }
  gT5.AWSSDKSigV4Signer = ET5;
  gT5.AwsEc2QueryProtocol = YU8;
  gT5.AwsJson1_0Protocol = eQ8;
  gT5.AwsJson1_1Protocol = AU8;
  gT5.AwsJsonRpcProtocol = n61;
  gT5.AwsQueryProtocol = ln1;
  gT5.AwsRestJsonProtocol = KU8;
  gT5.AwsRestXmlProtocol = HU8;
  gT5.AwsSdkSigV4ASigner = nQ8;
  gT5.AwsSdkSigV4Signer = l61;
  gT5.AwsSmithyRpcV2CborProtocol = aQ8;
  gT5.JsonCodec = i61;
  gT5.JsonShapeDeserializer = dn1;
  gT5.JsonShapeSerializer = cn1;
  gT5.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = kT5;
  gT5.NODE_SIGV4A_CONFIG_OPTIONS = LT5;
  gT5.XmlCodec = nn1;
  gT5.XmlShapeDeserializer = r61;
  gT5.XmlShapeSerializer = in1;
  gT5._toBool = hT5;
  gT5._toNum = bT5;
  gT5._toStr = ST5;
  gT5.awsExpectUnion = BT5;
  gT5.emitWarningIfUnsupportedVersion = VT5;
  gT5.getBearerTokenEnvKey = rQ8;
  gT5.loadRestJsonErrorCode = pn1;
  gT5.loadRestXmlErrorCode = wU8;
  gT5.parseJsonBody = Un1;
  gT5.parseJsonErrorBody = uT5;
  gT5.parseXmlBody = zU8;
  gT5.parseXmlErrorBody = mT5;
  gT5.resolveAWSSDKSigV4Config = RT5;
  gT5.resolveAwsSdkSigV4AConfig = CT5;
  gT5.resolveAwsSdkSigV4Config = oQ8;
  gT5.setCredentialFeature = fT5;
  gT5.setFeature = NT5;
  gT5.setTokenFeature = TT5;
  gT5.state = mn1;
  gT5.validateSigningProperties = Qn1;
});

// Register to shared state
__$.aw = aw;
