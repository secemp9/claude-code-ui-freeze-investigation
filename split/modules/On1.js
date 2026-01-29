// Module: On1
// Dependencies: VF8, _z, fF8, h61, WD, TF8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var On1 = v(SV5 => {
  var ri = __$.VF8(),
    r6A = __$._z(),
    NV5 = __$.fF8(),
    CF8 = __$.h61(),
    vF8 = __$.WD(),
    b61 = __$.TF8(),
    LF8 = "X-Amz-Algorithm",
    RF8 = "X-Amz-Credential",
    An1 = "X-Amz-Date",
    yF8 = "X-Amz-SignedHeaders",
    IF8 = "X-Amz-Expires",
    Kn1 = "X-Amz-Signature",
    qn1 = "X-Amz-Security-Token",
    TV5 = "X-Amz-Region-Set",
    Yn1 = "authorization",
    zn1 = An1.toLowerCase(),
    SF8 = "date",
    hF8 = [Yn1, zn1, SF8],
    bF8 = Kn1.toLowerCase(),
    g61 = "x-amz-content-sha256",
    xF8 = qn1.toLowerCase(),
    vV5 = "host",
    uF8 = {
      authorization: !0,
      "cache-control": !0,
      connection: !0,
      expect: !0,
      from: !0,
      "keep-alive": !0,
      "max-forwards": !0,
      pragma: !0,
      referer: !0,
      te: !0,
      trailer: !0,
      "transfer-encoding": !0,
      upgrade: !0,
      "user-agent": !0,
      "x-amzn-trace-id": !0
    },
    BF8 = /^proxy-/,
    mF8 = /^sec-/,
    EV5 = [/^proxy-/i, /^sec-/i],
    x61 = "AWS4-HMAC-SHA256",
    kV5 = "AWS4-ECDSA-P256-SHA256",
    gF8 = "AWS4-HMAC-SHA256-PAYLOAD",
    FF8 = "UNSIGNED-PAYLOAD",
    QF8 = 50,
    wn1 = "aws4_request",
    UF8 = 604800,
    zOA = {},
    u61 = [],
    B61 = (A, K, q) => `${A}/${K}/${q}/${wn1}`,
    pF8 = async (A, K, q, Y, z) => {
      let w = await EF8(A, K.secretAccessKey, K.accessKeyId),
        H = `${q}:${Y}:${z}:${ri.toHex(w)}:${K.sessionToken}`;
      if (H in zOA) return zOA[H];
      u61.push(H);
      while (u61.length > QF8) delete zOA[u61.shift()];
      let J = `AWS4${K.secretAccessKey}`;
      for (let O of [q, Y, z, wn1]) J = await EF8(A, J, O);
      return zOA[H] = J;
    },
    CV5 = () => {
      u61.length = 0, Object.keys(zOA).forEach(A => {
        delete zOA[A];
      });
    },
    EF8 = (A, K, q) => {
      let Y = new A(K);
      return Y.update(r6A.toUint8Array(q)), Y.digest();
    },
    ti1 = ({
      headers: A
    }, K, q) => {
      let Y = {};
      for (let z of Object.keys(A).sort()) {
        if (A[z] == null) continue;
        let w = z.toLowerCase();
        if (w in uF8 || K?.has(w) || BF8.test(w) || mF8.test(w)) {
          if (!q || q && !q.has(w)) continue;
        }
        Y[w] = A[z].trim().replace(/\s+/g, " ");
      }
      return Y;
    },
    m61 = async ({
      headers: A,
      body: K
    }, q) => {
      for (let Y of Object.keys(A)) if (Y.toLowerCase() === g61) return A[Y];
      if (K == null) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";else if (typeof K === "string" || ArrayBuffer.isView(K) || NV5.isArrayBuffer(K)) {
        let Y = new q();
        return Y.update(r6A.toUint8Array(K)), ri.toHex(await Y.digest());
      }
      return FF8;
    };
  class dF8 {
    format(A) {
      let K = [];
      for (let z of Object.keys(A)) {
        let w = r6A.fromUtf8(z);
        K.push(Uint8Array.from([w.byteLength]), w, this.formatHeaderValue(A[z]));
      }
      let q = new Uint8Array(K.reduce((z, w) => z + w.byteLength, 0)),
        Y = 0;
      for (let z of K) q.set(z, Y), Y += z.byteLength;
      return q;
    }
    formatHeaderValue(A) {
      switch (A.type) {
        case "boolean":
          return Uint8Array.from([A.value ? 0 : 1]);
        case "byte":
          return Uint8Array.from([2, A.value]);
        case "short":
          let K = new DataView(new ArrayBuffer(3));
          return K.setUint8(0, 3), K.setInt16(1, A.value, !1), new Uint8Array(K.buffer);
        case "integer":
          let q = new DataView(new ArrayBuffer(5));
          return q.setUint8(0, 4), q.setInt32(1, A.value, !1), new Uint8Array(q.buffer);
        case "long":
          let Y = new Uint8Array(9);
          return Y[0] = 5, Y.set(A.value.bytes, 1), Y;
        case "binary":
          let z = new DataView(new ArrayBuffer(3 + A.value.byteLength));
          z.setUint8(0, 6), z.setUint16(1, A.value.byteLength, !1);
          let w = new Uint8Array(z.buffer);
          return w.set(A.value, 3), w;
        case "string":
          let H = r6A.fromUtf8(A.value),
            J = new DataView(new ArrayBuffer(3 + H.byteLength));
          J.setUint8(0, 7), J.setUint16(1, H.byteLength, !1);
          let O = new Uint8Array(J.buffer);
          return O.set(H, 3), O;
        case "timestamp":
          let X = new Uint8Array(9);
          return X[0] = 8, X.set(Hn1.fromNumber(A.value.valueOf()).bytes, 1), X;
        case "uuid":
          if (!LV5.test(A.value)) throw Error(`Invalid UUID received: ${A.value}`);
          let $ = new Uint8Array(17);
          return $[0] = 9, $.set(ri.fromHex(A.value.replace(/\-/g, "")), 1), $;
      }
    }
  }
  var LV5 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
  class Hn1 {
    bytes;
    constructor(A) {
      if (this.bytes = A, A.byteLength !== 8) throw Error("Int64 buffers must be exactly 8 bytes");
    }
    static fromNumber(A) {
      if (A > 9223372036854776000 || A < -9223372036854776000) throw Error(`${A} is too large (or, if negative, too small) to represent as an Int64`);
      let K = new Uint8Array(8);
      for (let q = 7, Y = Math.abs(Math.round(A)); q > -1 && Y > 0; q--, Y /= 256) K[q] = Y;
      if (A < 0) kF8(K);
      return new Hn1(K);
    }
    valueOf() {
      let A = this.bytes.slice(0),
        K = A[0] & 128;
      if (K) kF8(A);
      return parseInt(ri.toHex(A), 16) * (K ? -1 : 1);
    }
    toString() {
      return String(this.valueOf());
    }
  }
  function kF8(A) {
    for (let K = 0; K < 8; K++) A[K] ^= 255;
    for (let K = 7; K > -1; K--) if (A[K]++, A[K] !== 0) break;
  }
  var cF8 = (A, K) => {
      A = A.toLowerCase();
      for (let q of Object.keys(K)) if (A === q.toLowerCase()) return !0;
      return !1;
    },
    lF8 = (A, K = {}) => {
      let {
        headers: q,
        query: Y = {}
      } = CF8.HttpRequest.clone(A);
      for (let z of Object.keys(q)) {
        let w = z.toLowerCase();
        if (w.slice(0, 6) === "x-amz-" && !K.unhoistableHeaders?.has(w) || K.hoistableHeaders?.has(w)) Y[z] = q[z], delete q[z];
      }
      return {
        ...A,
        headers: q,
        query: Y
      };
    },
    ei1 = A => {
      A = CF8.HttpRequest.clone(A);
      for (let K of Object.keys(A.headers)) if (hF8.indexOf(K.toLowerCase()) > -1) delete A.headers[K];
      return A;
    },
    iF8 = ({
      query: A = {}
    }) => {
      let K = [],
        q = {};
      for (let Y of Object.keys(A)) {
        if (Y.toLowerCase() === bF8) continue;
        let z = b61.escapeUri(Y);
        K.push(z);
        let w = A[Y];
        if (typeof w === "string") q[z] = `${z}=${b61.escapeUri(w)}`;else if (Array.isArray(w)) q[z] = w.slice(0).reduce((H, J) => H.concat([`${z}=${b61.escapeUri(J)}`]), []).sort().join("&");
      }
      return K.sort().map(Y => q[Y]).filter(Y => Y).join("&");
    },
    RV5 = A => yV5(A).toISOString().replace(/\.\d{3}Z$/, "Z"),
    yV5 = A => {
      if (typeof A === "number") return new Date(A * 1000);
      if (typeof A === "string") {
        if (Number(A)) return new Date(Number(A) * 1000);
        return new Date(A);
      }
      return A;
    };
  class Jn1 {
    service;
    regionProvider;
    credentialProvider;
    sha256;
    uriEscapePath;
    applyChecksum;
    constructor({
      applyChecksum: A,
      credentials: K,
      region: q,
      service: Y,
      sha256: z,
      uriEscapePath: w = !0
    }) {
      this.service = Y, this.sha256 = z, this.uriEscapePath = w, this.applyChecksum = typeof A === "boolean" ? A : !0, this.regionProvider = vF8.normalizeProvider(q), this.credentialProvider = vF8.normalizeProvider(K);
    }
    createCanonicalRequest(A, K, q) {
      let Y = Object.keys(K).sort();
      return `${A.method}
${this.getCanonicalPath(A)}
${iF8(A)}
${Y.map(z => `${z}:${K[z]}`).join(`
`)}

${Y.join(";")}
${q}`;
    }
    async createStringToSign(A, K, q, Y) {
      let z = new this.sha256();
      z.update(r6A.toUint8Array(q));
      let w = await z.digest();
      return `${Y}
${A}
${K}
${ri.toHex(w)}`;
    }
    getCanonicalPath({
      path: A
    }) {
      if (this.uriEscapePath) {
        let K = [];
        for (let z of A.split("/")) {
          if (z?.length === 0) continue;
          if (z === ".") continue;
          if (z === "..") K.pop();else K.push(z);
        }
        let q = `${A?.startsWith("/") ? "/" : ""}${K.join("/")}${K.length > 0 && A?.endsWith("/") ? "/" : ""}`;
        return b61.escapeUri(q).replace(/%2F/g, "/");
      }
      return A;
    }
    validateResolvedCredentials(A) {
      if (typeof A !== "object" || typeof A.accessKeyId !== "string" || typeof A.secretAccessKey !== "string") throw Error("Resolved credential object is not valid");
    }
    formatDate(A) {
      let K = RV5(A).replace(/[\-:]/g, "");
      return {
        longDate: K,
        shortDate: K.slice(0, 8)
      };
    }
    getCanonicalHeaderList(A) {
      return Object.keys(A).sort().join(";");
    }
  }
  class nF8 extends Jn1 {
    headerFormatter = new dF8();
    constructor({
      applyChecksum: A,
      credentials: K,
      region: q,
      service: Y,
      sha256: z,
      uriEscapePath: w = !0
    }) {
      super({
        applyChecksum: A,
        credentials: K,
        region: q,
        service: Y,
        sha256: z,
        uriEscapePath: w
      });
    }
    async presign(A, K = {}) {
      let {
          signingDate: q = new Date(),
          expiresIn: Y = 3600,
          unsignableHeaders: z,
          unhoistableHeaders: w,
          signableHeaders: H,
          hoistableHeaders: J,
          signingRegion: O,
          signingService: X
        } = K,
        $ = await this.credentialProvider();
      this.validateResolvedCredentials($);
      let _ = O ?? (await this.regionProvider()),
        {
          longDate: G,
          shortDate: Z
        } = this.formatDate(q);
      if (Y > UF8) return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
      let W = B61(Z, _, X ?? this.service),
        D = lF8(ei1(A), {
          unhoistableHeaders: w,
          hoistableHeaders: J
        });
      if ($.sessionToken) D.query[qn1] = $.sessionToken;
      D.query[LF8] = x61, D.query[RF8] = `${$.accessKeyId}/${W}`, D.query[An1] = G, D.query[IF8] = Y.toString(10);
      let j = ti1(D, z, H);
      return D.query[yF8] = this.getCanonicalHeaderList(j), D.query[Kn1] = await this.getSignature(G, W, this.getSigningKey($, _, Z, X), this.createCanonicalRequest(D, j, await m61(A, this.sha256))), D;
    }
    async sign(A, K) {
      if (typeof A === "string") return this.signString(A, K);else if (A.headers && A.payload) return this.signEvent(A, K);else if (A.message) return this.signMessage(A, K);else return this.signRequest(A, K);
    }
    async signEvent({
      headers: A,
      payload: K
    }, {
      signingDate: q = new Date(),
      priorSignature: Y,
      signingRegion: z,
      signingService: w
    }) {
      let H = z ?? (await this.regionProvider()),
        {
          shortDate: J,
          longDate: O
        } = this.formatDate(q),
        X = B61(J, H, w ?? this.service),
        $ = await m61({
          headers: {},
          body: K
        }, this.sha256),
        _ = new this.sha256();
      _.update(A);
      let G = ri.toHex(await _.digest()),
        Z = [gF8, O, X, Y, G, $].join(`
`);
      return this.signString(Z, {
        signingDate: q,
        signingRegion: H,
        signingService: w
      });
    }
    async signMessage(A, {
      signingDate: K = new Date(),
      signingRegion: q,
      signingService: Y
    }) {
      return this.signEvent({
        headers: this.headerFormatter.format(A.message.headers),
        payload: A.message.body
      }, {
        signingDate: K,
        signingRegion: q,
        signingService: Y,
        priorSignature: A.priorSignature
      }).then(w => {
        return {
          message: A.message,
          signature: w
        };
      });
    }
    async signString(A, {
      signingDate: K = new Date(),
      signingRegion: q,
      signingService: Y
    } = {}) {
      let z = await this.credentialProvider();
      this.validateResolvedCredentials(z);
      let w = q ?? (await this.regionProvider()),
        {
          shortDate: H
        } = this.formatDate(K),
        J = new this.sha256(await this.getSigningKey(z, w, H, Y));
      return J.update(r6A.toUint8Array(A)), ri.toHex(await J.digest());
    }
    async signRequest(A, {
      signingDate: K = new Date(),
      signableHeaders: q,
      unsignableHeaders: Y,
      signingRegion: z,
      signingService: w
    } = {}) {
      let H = await this.credentialProvider();
      this.validateResolvedCredentials(H);
      let J = z ?? (await this.regionProvider()),
        O = ei1(A),
        {
          longDate: X,
          shortDate: $
        } = this.formatDate(K),
        _ = B61($, J, w ?? this.service);
      if (O.headers[zn1] = X, H.sessionToken) O.headers[xF8] = H.sessionToken;
      let G = await m61(O, this.sha256);
      if (!cF8(g61, O.headers) && this.applyChecksum) O.headers[g61] = G;
      let Z = ti1(O, Y, q),
        W = await this.getSignature(X, _, this.getSigningKey(H, J, $, w), this.createCanonicalRequest(O, Z, G));
      return O.headers[Yn1] = `${x61} Credential=${H.accessKeyId}/${_}, SignedHeaders=${this.getCanonicalHeaderList(Z)}, Signature=${W}`, O;
    }
    async getSignature(A, K, q, Y) {
      let z = await this.createStringToSign(A, K, Y, x61),
        w = new this.sha256(await q);
      return w.update(r6A.toUint8Array(z)), ri.toHex(await w.digest());
    }
    getSigningKey(A, K, q, Y) {
      return pF8(this.sha256, A, q, K, Y || this.service);
    }
  }
  var IV5 = {
    SignatureV4a: null
  };
  SV5.ALGORITHM_IDENTIFIER = x61;
  SV5.ALGORITHM_IDENTIFIER_V4A = kV5;
  SV5.ALGORITHM_QUERY_PARAM = LF8;
  SV5.ALWAYS_UNSIGNABLE_HEADERS = uF8;
  SV5.AMZ_DATE_HEADER = zn1;
  SV5.AMZ_DATE_QUERY_PARAM = An1;
  SV5.AUTH_HEADER = Yn1;
  SV5.CREDENTIAL_QUERY_PARAM = RF8;
  SV5.DATE_HEADER = SF8;
  SV5.EVENT_ALGORITHM_IDENTIFIER = gF8;
  SV5.EXPIRES_QUERY_PARAM = IF8;
  SV5.GENERATED_HEADERS = hF8;
  SV5.HOST_HEADER = vV5;
  SV5.KEY_TYPE_IDENTIFIER = wn1;
  SV5.MAX_CACHE_SIZE = QF8;
  SV5.MAX_PRESIGNED_TTL = UF8;
  SV5.PROXY_HEADER_PATTERN = BF8;
  SV5.REGION_SET_PARAM = TV5;
  SV5.SEC_HEADER_PATTERN = mF8;
  SV5.SHA256_HEADER = g61;
  SV5.SIGNATURE_HEADER = bF8;
  SV5.SIGNATURE_QUERY_PARAM = Kn1;
  SV5.SIGNED_HEADERS_QUERY_PARAM = yF8;
  SV5.SignatureV4 = nF8;
  SV5.SignatureV4Base = Jn1;
  SV5.TOKEN_HEADER = xF8;
  SV5.TOKEN_QUERY_PARAM = qn1;
  SV5.UNSIGNABLE_PATTERNS = EV5;
  SV5.UNSIGNED_PAYLOAD = FF8;
  SV5.clearCredentialCache = CV5;
  SV5.createScope = B61;
  SV5.getCanonicalHeaders = ti1;
  SV5.getCanonicalQuery = iF8;
  SV5.getPayloadHash = m61;
  SV5.getSigningKey = pF8;
  SV5.hasHeader = cF8;
  SV5.moveHeadersToQuery = lF8;
  SV5.prepareRequest = ei1;
  SV5.signatureV4aContainer = IV5;
});

// Register to shared state
__$.On1 = On1;
