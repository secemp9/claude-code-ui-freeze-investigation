// Module: VV
// Dependencies: sl1, DJ, PV, DCA, ji1, _z, Tg8, bp, h

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var VV = v(sD5 => {
  var E61 = __$.sl1(),
    sE = __$.DJ(),
    aE = __$.PV(),
    yCA = __$.DCA(),
    k61 = __$.ji1(),
    Mi1 = __$._z(),
    n6A = async (A = new Uint8Array(), K) => {
      if (A instanceof Uint8Array) return E61.Uint8ArrayBlobAdapter.mutate(A);
      if (!A) return E61.Uint8ArrayBlobAdapter.mutate(new Uint8Array());
      let q = K.streamCollector(A);
      return E61.Uint8ArrayBlobAdapter.mutate(await q);
    };
  function ICA(A) {
    return encodeURIComponent(A).replace(/[!'()*]/g, function (K) {
      return "%" + K.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  class KOA {
    serdeContext;
    setSerdeContext(A) {
      this.serdeContext = A;
    }
  }
  class C61 extends KOA {
    options;
    constructor(A) {
      super();
      this.options = A;
    }
    getRequestType() {
      return yCA.HttpRequest;
    }
    getResponseType() {
      return yCA.HttpResponse;
    }
    setSerdeContext(A) {
      if (this.serdeContext = A, this.serializer.setSerdeContext(A), this.deserializer.setSerdeContext(A), this.getPayloadCodec()) this.getPayloadCodec().setSerdeContext(A);
    }
    updateServiceEndpoint(A, K) {
      if ("url" in K) {
        if (A.protocol = K.url.protocol, A.hostname = K.url.hostname, A.port = K.url.port ? Number(K.url.port) : void 0, A.path = K.url.pathname, A.fragment = K.url.hash || void 0, A.username = K.url.username || void 0, A.password = K.url.password || void 0, !A.query) A.query = {};
        for (let [q, Y] of K.url.searchParams.entries()) A.query[q] = Y;
        return A;
      } else return A.protocol = K.protocol, A.hostname = K.hostname, A.port = K.port ? Number(K.port) : void 0, A.path = K.path, A.query = {
        ...K.query
      }, A;
    }
    setHostPrefix(A, K, q) {
      let Y = sE.NormalizedSchema.of(K.input),
        z = sE.translateTraits(K.traits ?? {});
      if (z.endpoint) {
        let w = z.endpoint?.[0];
        if (typeof w === "string") {
          let H = [...Y.structIterator()].filter(([, J]) => J.getMergedTraits().hostLabel);
          for (let [J] of H) {
            let O = q[J];
            if (typeof O !== "string") throw Error(`@smithy/core/schema - ${J} in input must be a string as hostLabel.`);
            w = w.replace(`{${J}}`, O);
          }
          A.hostname = w + A.hostname;
        }
      }
    }
    deserializeMetadata(A) {
      return {
        httpStatusCode: A.statusCode,
        requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
        extendedRequestId: A.headers["x-amz-id-2"],
        cfId: A.headers["x-amz-cf-id"]
      };
    }
    async serializeEventStream({
      eventStream: A,
      requestSchema: K,
      initialRequest: q
    }) {
      return (await this.loadEventStreamCapability()).serializeEventStream({
        eventStream: A,
        requestSchema: K,
        initialRequest: q
      });
    }
    async deserializeEventStream({
      response: A,
      responseSchema: K,
      initialResponseContainer: q
    }) {
      return (await this.loadEventStreamCapability()).deserializeEventStream({
        response: A,
        responseSchema: K,
        initialResponseContainer: q
      });
    }
    async loadEventStreamCapability() {
      let {
        EventStreamSerde: A
      } = await Promise.resolve().then(() => o(__$.Tg8()));
      return new A({
        marshaller: this.getEventStreamMarshaller(),
        serializer: this.serializer,
        deserializer: this.deserializer,
        serdeContext: this.serdeContext,
        defaultContentType: this.getDefaultContentType()
      });
    }
    getDefaultContentType() {
      throw Error(`@smithy/core/protocols - ${this.constructor.name} getDefaultContentType() implementation missing.`);
    }
    async deserializeHttpMessage(A, K, q, Y, z) {
      return [];
    }
    getEventStreamMarshaller() {
      let A = this.serdeContext;
      if (!A.eventStreamMarshaller) throw Error("@smithy/core - HttpProtocol: eventStreamMarshaller missing in serdeContext.");
      return A.eventStreamMarshaller;
    }
  }
  class vg8 extends C61 {
    async serializeRequest(A, K, q) {
      let Y = {
          ...(K ?? {})
        },
        z = this.serializer,
        w = {},
        H = {},
        J = await q.endpoint(),
        O = sE.NormalizedSchema.of(A?.input),
        X = O.getSchema(),
        $ = !1,
        _,
        G = new yCA.HttpRequest({
          protocol: "",
          hostname: "",
          port: void 0,
          path: "",
          fragment: void 0,
          query: w,
          headers: H,
          body: void 0
        });
      if (J) {
        this.updateServiceEndpoint(G, J), this.setHostPrefix(G, A, Y);
        let Z = sE.translateTraits(A.traits);
        if (Z.http) {
          G.method = Z.http[0];
          let [W, D] = Z.http[1].split("?");
          if (G.path == "/") G.path = W;else G.path += W;
          let j = new URLSearchParams(D ?? "");
          Object.assign(w, Object.fromEntries(j));
        }
      }
      for (let [Z, W] of O.structIterator()) {
        let D = W.getMergedTraits() ?? {},
          j = Y[Z];
        if (j == null && !W.isIdempotencyToken()) continue;
        if (D.httpPayload) {
          if (W.isStreaming()) {
            if (W.isStructSchema()) {
              if (Y[Z]) _ = await this.serializeEventStream({
                eventStream: Y[Z],
                requestSchema: O
              });
            } else _ = j;
          } else z.write(W, j), _ = z.flush();
          delete Y[Z];
        } else if (D.httpLabel) {
          z.write(W, j);
          let M = z.flush();
          if (G.path.includes(`{${Z}+}`)) G.path = G.path.replace(`{${Z}+}`, M.split("/").map(ICA).join("/"));else if (G.path.includes(`{${Z}}`)) G.path = G.path.replace(`{${Z}}`, ICA(M));
          delete Y[Z];
        } else if (D.httpHeader) z.write(W, j), H[D.httpHeader.toLowerCase()] = String(z.flush()), delete Y[Z];else if (typeof D.httpPrefixHeaders === "string") {
          for (let [M, P] of Object.entries(j)) {
            let f = D.httpPrefixHeaders + M;
            z.write([W.getValueSchema(), {
              httpHeader: f
            }], P), H[f.toLowerCase()] = z.flush();
          }
          delete Y[Z];
        } else if (D.httpQuery || D.httpQueryParams) this.serializeQuery(W, j, w), delete Y[Z];else $ = !0;
      }
      if ($ && Y) z.write(X, Y), _ = z.flush();
      return G.headers = H, G.query = w, G.body = _, G;
    }
    serializeQuery(A, K, q) {
      let Y = this.serializer,
        z = A.getMergedTraits();
      if (z.httpQueryParams) {
        for (let [w, H] of Object.entries(K)) if (!(w in q)) {
          let J = A.getValueSchema();
          Object.assign(J.getMergedTraits(), {
            ...z,
            httpQuery: w,
            httpQueryParams: void 0
          }), this.serializeQuery(J, H, q);
        }
        return;
      }
      if (A.isListSchema()) {
        let w = !!A.getMergedTraits().sparse,
          H = [];
        for (let J of K) {
          Y.write([A.getValueSchema(), z], J);
          let O = Y.flush();
          if (w || O !== void 0) H.push(O);
        }
        q[z.httpQuery] = H;
      } else Y.write([A, z], K), q[z.httpQuery] = Y.flush();
    }
    async deserializeResponse(A, K, q) {
      let Y = this.deserializer,
        z = sE.NormalizedSchema.of(A.output),
        w = {};
      if (q.statusCode >= 300) {
        let J = await n6A(q.body, K);
        if (J.byteLength > 0) Object.assign(w, await Y.read(15, J));
        throw await this.handleError(A, K, q, w, this.deserializeMetadata(q)), Error("@smithy/core/protocols - HTTP Protocol error handler failed to throw.");
      }
      for (let J in q.headers) {
        let O = q.headers[J];
        delete q.headers[J], q.headers[J.toLowerCase()] = O;
      }
      let H = await this.deserializeHttpMessage(z, K, q, w);
      if (H.length) {
        let J = await n6A(q.body, K);
        if (J.byteLength > 0) {
          let O = await Y.read(z, J);
          for (let X of H) w[X] = O[X];
        }
      } else if (H.discardResponseBody) await n6A(q.body, K);
      return w.$metadata = this.deserializeMetadata(q), w;
    }
    async deserializeHttpMessage(A, K, q, Y, z) {
      let w;
      if (Y instanceof Set) w = z;else w = Y;
      let H = !0,
        J = this.deserializer,
        O = sE.NormalizedSchema.of(A),
        X = [];
      for (let [$, _] of O.structIterator()) {
        let G = _.getMemberTraits();
        if (G.httpPayload) {
          if (H = !1, _.isStreaming()) {
            if (_.isStructSchema()) w[$] = await this.deserializeEventStream({
              response: q,
              responseSchema: O
            });else w[$] = E61.sdkStreamMixin(q.body);
          } else if (q.body) {
            let W = await n6A(q.body, K);
            if (W.byteLength > 0) w[$] = await J.read(_, W);
          }
        } else if (G.httpHeader) {
          let Z = String(G.httpHeader).toLowerCase(),
            W = q.headers[Z];
          if (W != null) if (_.isListSchema()) {
            let D = _.getValueSchema();
            D.getMergedTraits().httpHeader = Z;
            let j;
            if (D.isTimestampSchema() && D.getSchema() === 4) j = aE.splitEvery(W, ",", 2);else j = aE.splitHeader(W);
            let M = [];
            for (let P of j) M.push(await J.read(D, P.trim()));
            w[$] = M;
          } else w[$] = await J.read(_, W);
        } else if (G.httpPrefixHeaders !== void 0) {
          w[$] = {};
          for (let [Z, W] of Object.entries(q.headers)) if (Z.startsWith(G.httpPrefixHeaders)) {
            let D = _.getValueSchema();
            D.getMergedTraits().httpHeader = Z, w[$][Z.slice(G.httpPrefixHeaders.length)] = await J.read(D, W);
          }
        } else if (G.httpResponseCode) w[$] = q.statusCode;else X.push($);
      }
      return X.discardResponseBody = H, X;
    }
  }
  class Eg8 extends C61 {
    async serializeRequest(A, K, q) {
      let Y = this.serializer,
        z = {},
        w = {},
        H = await q.endpoint(),
        J = sE.NormalizedSchema.of(A?.input),
        O = J.getSchema(),
        X,
        $ = new yCA.HttpRequest({
          protocol: "",
          hostname: "",
          port: void 0,
          path: "/",
          fragment: void 0,
          query: z,
          headers: w,
          body: void 0
        });
      if (H) this.updateServiceEndpoint($, H), this.setHostPrefix($, A, K);
      let _ = {
        ...K
      };
      if (K) {
        let G = J.getEventStreamMember();
        if (G) {
          if (_[G]) {
            let Z = {};
            for (let [W, D] of J.structIterator()) if (W !== G && _[W]) Y.write(D, _[W]), Z[W] = Y.flush();
            X = await this.serializeEventStream({
              eventStream: _[G],
              requestSchema: J,
              initialRequest: Z
            });
          }
        } else Y.write(O, _), X = Y.flush();
      }
      return $.headers = w, $.query = z, $.body = X, $.method = "POST", $;
    }
    async deserializeResponse(A, K, q) {
      let Y = this.deserializer,
        z = sE.NormalizedSchema.of(A.output),
        w = {};
      if (q.statusCode >= 300) {
        let J = await n6A(q.body, K);
        if (J.byteLength > 0) Object.assign(w, await Y.read(15, J));
        throw await this.handleError(A, K, q, w, this.deserializeMetadata(q)), Error("@smithy/core/protocols - RPC Protocol error handler failed to throw.");
      }
      for (let J in q.headers) {
        let O = q.headers[J];
        delete q.headers[J], q.headers[J.toLowerCase()] = O;
      }
      let H = z.getEventStreamMember();
      if (H) w[H] = await this.deserializeEventStream({
        response: q,
        responseSchema: z,
        initialResponseContainer: w
      });else {
        let J = await n6A(q.body, K);
        if (J.byteLength > 0) Object.assign(w, await Y.read(z, J));
      }
      return w.$metadata = this.deserializeMetadata(q), w;
    }
  }
  var kg8 = (A, K, q, Y, z, w) => {
    if (K != null && K[q] !== void 0) {
      let H = Y();
      if (H.length <= 0) throw Error("Empty value provided for input HTTP label: " + q + ".");
      A = A.replace(z, w ? H.split("/").map(J => ICA(J)).join("/") : ICA(H));
    } else throw Error("No value provided for input HTTP label: " + q + ".");
    return A;
  };
  function aD5(A, K) {
    return new Pi1(A, K);
  }
  class Pi1 {
    input;
    context;
    query = {};
    method = "";
    headers = {};
    path = "";
    body = null;
    hostname = "";
    resolvePathStack = [];
    constructor(A, K) {
      this.input = A, this.context = K;
    }
    async build() {
      let {
        hostname: A,
        protocol: K = "https",
        port: q,
        path: Y
      } = await this.context.endpoint();
      this.path = Y;
      for (let z of this.resolvePathStack) z(this.path);
      return new yCA.HttpRequest({
        protocol: K,
        hostname: this.hostname || A,
        port: q,
        method: this.method,
        path: this.path,
        query: this.query,
        body: this.body,
        headers: this.headers
      });
    }
    hn(A) {
      return this.hostname = A, this;
    }
    bp(A) {
      return this.resolvePathStack.push(K => {
        this.path = `${K?.endsWith("/") ? K.slice(0, -1) : K || ""}` + A;
      }), this;
    }
    p(A, K, q, Y) {
      return this.resolvePathStack.push(z => {
        this.path = kg8(z, this.input, A, K, q, Y);
      }), this;
    }
    h(A) {
      return this.headers = A, this;
    }
    q(A) {
      return this.query = A, this;
    }
    b(A) {
      return this.body = A, this;
    }
    m(A) {
      return this.method = A, this;
    }
  }
  function Vi1(A, K) {
    if (K.timestampFormat.useTrait) {
      if (A.isTimestampSchema() && (A.getSchema() === 5 || A.getSchema() === 6 || A.getSchema() === 7)) return A.getSchema();
    }
    let {
      httpLabel: q,
      httpPrefixHeaders: Y,
      httpHeader: z,
      httpQuery: w
    } = A.getMergedTraits();
    return (K.httpBindings ? typeof Y === "string" || Boolean(z) ? 6 : Boolean(w) || Boolean(q) ? 5 : void 0 : void 0) ?? K.timestampFormat.default;
  }
  class fi1 extends KOA {
    settings;
    constructor(A) {
      super();
      this.settings = A;
    }
    read(A, K) {
      let q = sE.NormalizedSchema.of(A);
      if (q.isListSchema()) return aE.splitHeader(K).map(Y => this.read(q.getValueSchema(), Y));
      if (q.isBlobSchema()) return (this.serdeContext?.base64Decoder ?? k61.fromBase64)(K);
      if (q.isTimestampSchema()) switch (Vi1(q, this.settings)) {
        case 5:
          return aE._parseRfc3339DateTimeWithOffset(K);
        case 6:
          return aE._parseRfc7231DateTime(K);
        case 7:
          return aE._parseEpochTimestamp(K);
        default:
          return console.warn("Missing timestamp format, parsing value with Date constructor:", K), new Date(K);
      }
      if (q.isStringSchema()) {
        let Y = q.getMergedTraits().mediaType,
          z = K;
        if (Y) {
          if (q.getMergedTraits().httpHeader) z = this.base64ToUtf8(z);
          if (Y === "application/json" || Y.endsWith("+json")) z = aE.LazyJsonString.from(z);
          return z;
        }
      }
      if (q.isNumericSchema()) return Number(K);
      if (q.isBigIntegerSchema()) return BigInt(K);
      if (q.isBigDecimalSchema()) return new aE.NumericValue(K, "bigDecimal");
      if (q.isBooleanSchema()) return String(K).toLowerCase() === "true";
      return K;
    }
    base64ToUtf8(A) {
      return (this.serdeContext?.utf8Encoder ?? Mi1.toUtf8)((this.serdeContext?.base64Decoder ?? k61.fromBase64)(A));
    }
  }
  class Cg8 extends KOA {
    codecDeserializer;
    stringDeserializer;
    constructor(A, K) {
      super();
      this.codecDeserializer = A, this.stringDeserializer = new fi1(K);
    }
    setSerdeContext(A) {
      this.stringDeserializer.setSerdeContext(A), this.codecDeserializer.setSerdeContext(A), this.serdeContext = A;
    }
    read(A, K) {
      let q = sE.NormalizedSchema.of(A),
        Y = q.getMergedTraits(),
        z = this.serdeContext?.utf8Encoder ?? Mi1.toUtf8;
      if (Y.httpHeader || Y.httpResponseCode) return this.stringDeserializer.read(q, z(K));
      if (Y.httpPayload) {
        if (q.isBlobSchema()) {
          let w = this.serdeContext?.utf8Decoder ?? Mi1.fromUtf8;
          if (typeof K === "string") return w(K);
          return K;
        } else if (q.isStringSchema()) {
          if ("byteLength" in K) return z(K);
          return K;
        }
      }
      return this.codecDeserializer.read(q, K);
    }
  }
  class Ni1 extends KOA {
    settings;
    stringBuffer = "";
    constructor(A) {
      super();
      this.settings = A;
    }
    write(A, K) {
      let q = sE.NormalizedSchema.of(A);
      switch (typeof K) {
        case "object":
          if (K === null) {
            this.stringBuffer = "null";
            return;
          }
          if (q.isTimestampSchema()) {
            if (!(K instanceof Date)) throw Error(`@smithy/core/protocols - received non-Date value ${K} when schema expected Date in ${q.getName(!0)}`);
            switch (Vi1(q, this.settings)) {
              case 5:
                this.stringBuffer = K.toISOString().replace(".000Z", "Z");
                break;
              case 6:
                this.stringBuffer = aE.dateToUtcString(K);
                break;
              case 7:
                this.stringBuffer = String(K.getTime() / 1000);
                break;
              default:
                console.warn("Missing timestamp format, using epoch seconds", K), this.stringBuffer = String(K.getTime() / 1000);
            }
            return;
          }
          if (q.isBlobSchema() && "byteLength" in K) {
            this.stringBuffer = (this.serdeContext?.base64Encoder ?? k61.toBase64)(K);
            return;
          }
          if (q.isListSchema() && Array.isArray(K)) {
            let w = "";
            for (let H of K) {
              this.write([q.getValueSchema(), q.getMergedTraits()], H);
              let J = this.flush(),
                O = q.getValueSchema().isTimestampSchema() ? J : aE.quoteHeader(J);
              if (w !== "") w += ", ";
              w += O;
            }
            this.stringBuffer = w;
            return;
          }
          this.stringBuffer = JSON.stringify(K, null, 2);
          break;
        case "string":
          let Y = q.getMergedTraits().mediaType,
            z = K;
          if (Y) {
            if (Y === "application/json" || Y.endsWith("+json")) z = aE.LazyJsonString.from(z);
            if (q.getMergedTraits().httpHeader) {
              this.stringBuffer = (this.serdeContext?.base64Encoder ?? k61.toBase64)(z.toString());
              return;
            }
          }
          this.stringBuffer = K;
          break;
        default:
          if (q.isIdempotencyToken()) this.stringBuffer = aE.generateIdempotencyToken();else this.stringBuffer = String(K);
      }
    }
    flush() {
      let A = this.stringBuffer;
      return this.stringBuffer = "", A;
    }
  }
  class Lg8 {
    codecSerializer;
    stringSerializer;
    buffer;
    constructor(A, K, q = new Ni1(K)) {
      this.codecSerializer = A, this.stringSerializer = q;
    }
    setSerdeContext(A) {
      this.codecSerializer.setSerdeContext(A), this.stringSerializer.setSerdeContext(A);
    }
    write(A, K) {
      let q = sE.NormalizedSchema.of(A),
        Y = q.getMergedTraits();
      if (Y.httpHeader || Y.httpLabel || Y.httpQuery) {
        this.stringSerializer.write(q, K), this.buffer = this.stringSerializer.flush();
        return;
      }
      return this.codecSerializer.write(q, K);
    }
    flush() {
      if (this.buffer !== void 0) {
        let A = this.buffer;
        return this.buffer = void 0, A;
      }
      return this.codecSerializer.flush();
    }
  }
  sD5.FromStringShapeDeserializer = fi1;
  sD5.HttpBindingProtocol = vg8;
  sD5.HttpInterceptingShapeDeserializer = Cg8;
  sD5.HttpInterceptingShapeSerializer = Lg8;
  sD5.HttpProtocol = C61;
  sD5.RequestBuilder = Pi1;
  sD5.RpcProtocol = Eg8;
  sD5.SerdeContext = KOA;
  sD5.ToStringShapeSerializer = Ni1;
  sD5.collectBody = n6A;
  sD5.determineTimestampFormat = Vi1;
  sD5.extendedEncodeURIComponent = ICA;
  sD5.requestBuilder = aD5;
  sD5.resolvedPath = kg8;
});

// Register to shared state
__$.VV = VV;
