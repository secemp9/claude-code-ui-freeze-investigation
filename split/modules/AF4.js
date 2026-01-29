// Module: AF4
// Dependencies: Zg4, uSA, Ig4, xg4, R26

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var AF4 = v((wVw, eg4) => {
  var {
      defineProperty: S21,
      getOwnPropertyDescriptor: oS9,
      getOwnPropertyNames: aS9
    } = Object,
    sS9 = Object.prototype.hasOwnProperty,
    z$ = (A, K) => S21(A, "name", {
      value: K,
      configurable: !0
    }),
    tS9 = (A, K) => {
      for (var q in K) S21(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    eS9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of aS9(K)) if (!sS9.call(A, z) && z !== q) S21(A, z, {
          get: () => K[z],
          enumerable: !(Y = oS9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    Ah9 = A => eS9(S21({}, "__esModule", {
      value: !0
    }), A),
    Fg4 = {};
  tS9(Fg4, {
    SignatureV4: () => Lh9,
    clearCredentialCache: () => Mh9,
    createScope: () => y21,
    getCanonicalHeaders: () => B26,
    getCanonicalQuery: () => ng4,
    getPayloadHash: () => I21,
    getSigningKey: () => ig4,
    moveHeadersToQuery: () => sg4,
    prepareRequest: () => g26
  });
  eg4.exports = Ah9(Fg4);
  var ug4 = __$.Zg4(),
    b26 = __$.uSA(),
    Kh9 = "X-Amz-Algorithm",
    qh9 = "X-Amz-Credential",
    Qg4 = "X-Amz-Date",
    Yh9 = "X-Amz-SignedHeaders",
    zh9 = "X-Amz-Expires",
    Ug4 = "X-Amz-Signature",
    pg4 = "X-Amz-Security-Token",
    dg4 = "authorization",
    cg4 = Qg4.toLowerCase(),
    wh9 = "date",
    Hh9 = [dg4, cg4, wh9],
    Jh9 = Ug4.toLowerCase(),
    u26 = "x-amz-content-sha256",
    Oh9 = pg4.toLowerCase(),
    Xh9 = {
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
    $h9 = /^proxy-/,
    _h9 = /^sec-/,
    x26 = "AWS4-HMAC-SHA256",
    Gh9 = "AWS4-HMAC-SHA256-PAYLOAD",
    Zh9 = "UNSIGNED-PAYLOAD",
    Wh9 = 50,
    lg4 = "aws4_request",
    Dh9 = 604800,
    er = __$.Ig4(),
    jh9 = __$.uSA(),
    d$A = {},
    R21 = [],
    y21 = z$((A, K, q) => `${A}/${K}/${q}/${lg4}`, "createScope"),
    ig4 = z$(async (A, K, q, Y, z) => {
      let w = await Bg4(A, K.secretAccessKey, K.accessKeyId),
        H = `${q}:${Y}:${z}:${(0, er.toHex)(w)}:${K.sessionToken}`;
      if (H in d$A) return d$A[H];
      R21.push(H);
      while (R21.length > Wh9) delete d$A[R21.shift()];
      let J = `AWS4${K.secretAccessKey}`;
      for (let O of [q, Y, z, lg4]) J = await Bg4(A, J, O);
      return d$A[H] = J;
    }, "getSigningKey"),
    Mh9 = z$(() => {
      R21.length = 0, Object.keys(d$A).forEach(A => {
        delete d$A[A];
      });
    }, "clearCredentialCache"),
    Bg4 = z$((A, K, q) => {
      let Y = new A(K);
      return Y.update((0, jh9.toUint8Array)(q)), Y.digest();
    }, "hmac"),
    B26 = z$(({
      headers: A
    }, K, q) => {
      let Y = {};
      for (let z of Object.keys(A).sort()) {
        if (A[z] == null) continue;
        let w = z.toLowerCase();
        if (w in Xh9 || (K == null ? void 0 : K.has(w)) || $h9.test(w) || _h9.test(w)) {
          if (!q || q && !q.has(w)) continue;
        }
        Y[w] = A[z].trim().replace(/\s+/g, " ");
      }
      return Y;
    }, "getCanonicalHeaders"),
    BSA = __$.xg4(),
    ng4 = z$(({
      query: A = {}
    }) => {
      let K = [],
        q = {};
      for (let Y of Object.keys(A).sort()) {
        if (Y.toLowerCase() === Jh9) continue;
        K.push(Y);
        let z = A[Y];
        if (typeof z === "string") q[Y] = `${(0, BSA.escapeUri)(Y)}=${(0, BSA.escapeUri)(z)}`;else if (Array.isArray(z)) q[Y] = z.slice(0).reduce((w, H) => w.concat([`${(0, BSA.escapeUri)(Y)}=${(0, BSA.escapeUri)(H)}`]), []).sort().join("&");
      }
      return K.map(Y => q[Y]).filter(Y => Y).join("&");
    }, "getCanonicalQuery"),
    Ph9 = __$.R26(),
    Vh9 = __$.uSA(),
    I21 = z$(async ({
      headers: A,
      body: K
    }, q) => {
      for (let Y of Object.keys(A)) if (Y.toLowerCase() === u26) return A[Y];
      if (K == null) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";else if (typeof K === "string" || ArrayBuffer.isView(K) || (0, Ph9.isArrayBuffer)(K)) {
        let Y = new q();
        return Y.update((0, Vh9.toUint8Array)(K)), (0, er.toHex)(await Y.digest());
      }
      return Zh9;
    }, "getPayloadHash"),
    mg4 = __$.uSA(),
    rg4 = class {
      format(K) {
        let q = [];
        for (let w of Object.keys(K)) {
          let H = (0, mg4.fromUtf8)(w);
          q.push(Uint8Array.from([H.byteLength]), H, this.formatHeaderValue(K[w]));
        }
        let Y = new Uint8Array(q.reduce((w, H) => w + H.byteLength, 0)),
          z = 0;
        for (let w of q) Y.set(w, z), z += w.byteLength;
        return Y;
      }
      formatHeaderValue(K) {
        switch (K.type) {
          case "boolean":
            return Uint8Array.from([K.value ? 0 : 1]);
          case "byte":
            return Uint8Array.from([2, K.value]);
          case "short":
            let q = new DataView(new ArrayBuffer(3));
            return q.setUint8(0, 3), q.setInt16(1, K.value, !1), new Uint8Array(q.buffer);
          case "integer":
            let Y = new DataView(new ArrayBuffer(5));
            return Y.setUint8(0, 4), Y.setInt32(1, K.value, !1), new Uint8Array(Y.buffer);
          case "long":
            let z = new Uint8Array(9);
            return z[0] = 5, z.set(K.value.bytes, 1), z;
          case "binary":
            let w = new DataView(new ArrayBuffer(3 + K.value.byteLength));
            w.setUint8(0, 6), w.setUint16(1, K.value.byteLength, !1);
            let H = new Uint8Array(w.buffer);
            return H.set(K.value, 3), H;
          case "string":
            let J = (0, mg4.fromUtf8)(K.value),
              O = new DataView(new ArrayBuffer(3 + J.byteLength));
            O.setUint8(0, 7), O.setUint16(1, J.byteLength, !1);
            let X = new Uint8Array(O.buffer);
            return X.set(J, 3), X;
          case "timestamp":
            let $ = new Uint8Array(9);
            return $[0] = 8, $.set(Th9.fromNumber(K.value.valueOf()).bytes, 1), $;
          case "uuid":
            if (!Nh9.test(K.value)) throw Error(`Invalid UUID received: ${K.value}`);
            let _ = new Uint8Array(17);
            return _[0] = 9, _.set((0, er.fromHex)(K.value.replace(/\-/g, "")), 1), _;
        }
      }
    };
  z$(rg4, "HeaderFormatter");
  var fh9 = rg4,
    Nh9 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
    og4 = class A {
      constructor(K) {
        if (this.bytes = K, K.byteLength !== 8) throw Error("Int64 buffers must be exactly 8 bytes");
      }
      static fromNumber(K) {
        if (K > 9223372036854776000 || K < -9223372036854776000) throw Error(`${K} is too large (or, if negative, too small) to represent as an Int64`);
        let q = new Uint8Array(8);
        for (let Y = 7, z = Math.abs(Math.round(K)); Y > -1 && z > 0; Y--, z /= 256) q[Y] = z;
        if (K < 0) m26(q);
        return new A(q);
      }
      valueOf() {
        let K = this.bytes.slice(0),
          q = K[0] & 128;
        if (q) m26(K);
        return parseInt((0, er.toHex)(K), 16) * (q ? -1 : 1);
      }
      toString() {
        return String(this.valueOf());
      }
    };
  z$(og4, "Int64");
  var Th9 = og4;
  function m26(A) {
    for (let K = 0; K < 8; K++) A[K] ^= 255;
    for (let K = 7; K > -1; K--) if (A[K]++, A[K] !== 0) break;
  }
  z$(m26, "negate");
  var vh9 = z$((A, K) => {
      A = A.toLowerCase();
      for (let q of Object.keys(K)) if (A === q.toLowerCase()) return !0;
      return !1;
    }, "hasHeader"),
    ag4 = z$(({
      headers: A,
      query: K,
      ...q
    }) => ({
      ...q,
      headers: {
        ...A
      },
      query: K ? Eh9(K) : void 0
    }), "cloneRequest"),
    Eh9 = z$(A => Object.keys(A).reduce((K, q) => {
      let Y = A[q];
      return {
        ...K,
        [q]: Array.isArray(Y) ? [...Y] : Y
      };
    }, {}), "cloneQuery"),
    sg4 = z$((A, K = {}) => {
      var q;
      let {
        headers: Y,
        query: z = {}
      } = typeof A.clone === "function" ? A.clone() : ag4(A);
      for (let w of Object.keys(Y)) {
        let H = w.toLowerCase();
        if (H.slice(0, 6) === "x-amz-" && !((q = K.unhoistableHeaders) == null ? void 0 : q.has(H))) z[w] = Y[w], delete Y[w];
      }
      return {
        ...A,
        headers: Y,
        query: z
      };
    }, "moveHeadersToQuery"),
    g26 = z$(A => {
      A = typeof A.clone === "function" ? A.clone() : ag4(A);
      for (let K of Object.keys(A.headers)) if (Hh9.indexOf(K.toLowerCase()) > -1) delete A.headers[K];
      return A;
    }, "prepareRequest"),
    kh9 = z$(A => Ch9(A).toISOString().replace(/\.\d{3}Z$/, "Z"), "iso8601"),
    Ch9 = z$(A => {
      if (typeof A === "number") return new Date(A * 1000);
      if (typeof A === "string") {
        if (Number(A)) return new Date(Number(A) * 1000);
        return new Date(A);
      }
      return A;
    }, "toDate"),
    tg4 = class {
      constructor({
        applyChecksum: K,
        credentials: q,
        region: Y,
        service: z,
        sha256: w,
        uriEscapePath: H = !0
      }) {
        this.headerFormatter = new fh9(), this.service = z, this.sha256 = w, this.uriEscapePath = H, this.applyChecksum = typeof K === "boolean" ? K : !0, this.regionProvider = (0, ug4.normalizeProvider)(Y), this.credentialProvider = (0, ug4.normalizeProvider)(q);
      }
      async presign(K, q = {}) {
        let {
            signingDate: Y = new Date(),
            expiresIn: z = 3600,
            unsignableHeaders: w,
            unhoistableHeaders: H,
            signableHeaders: J,
            signingRegion: O,
            signingService: X
          } = q,
          $ = await this.credentialProvider();
        this.validateResolvedCredentials($);
        let _ = O ?? (await this.regionProvider()),
          {
            longDate: G,
            shortDate: Z
          } = L21(Y);
        if (z > Dh9) return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
        let W = y21(Z, _, X ?? this.service),
          D = sg4(g26(K), {
            unhoistableHeaders: H
          });
        if ($.sessionToken) D.query[pg4] = $.sessionToken;
        D.query[Kh9] = x26, D.query[qh9] = `${$.accessKeyId}/${W}`, D.query[Qg4] = G, D.query[zh9] = z.toString(10);
        let j = B26(D, w, J);
        return D.query[Yh9] = gg4(j), D.query[Ug4] = await this.getSignature(G, W, this.getSigningKey($, _, Z, X), this.createCanonicalRequest(D, j, await I21(K, this.sha256))), D;
      }
      async sign(K, q) {
        if (typeof K === "string") return this.signString(K, q);else if (K.headers && K.payload) return this.signEvent(K, q);else if (K.message) return this.signMessage(K, q);else return this.signRequest(K, q);
      }
      async signEvent({
        headers: K,
        payload: q
      }, {
        signingDate: Y = new Date(),
        priorSignature: z,
        signingRegion: w,
        signingService: H
      }) {
        let J = w ?? (await this.regionProvider()),
          {
            shortDate: O,
            longDate: X
          } = L21(Y),
          $ = y21(O, J, H ?? this.service),
          _ = await I21({
            headers: {},
            body: q
          }, this.sha256),
          G = new this.sha256();
        G.update(K);
        let Z = (0, er.toHex)(await G.digest()),
          W = [Gh9, X, $, z, Z, _].join(`
`);
        return this.signString(W, {
          signingDate: Y,
          signingRegion: J,
          signingService: H
        });
      }
      async signMessage(K, {
        signingDate: q = new Date(),
        signingRegion: Y,
        signingService: z
      }) {
        return this.signEvent({
          headers: this.headerFormatter.format(K.message.headers),
          payload: K.message.body
        }, {
          signingDate: q,
          signingRegion: Y,
          signingService: z,
          priorSignature: K.priorSignature
        }).then(H => {
          return {
            message: K.message,
            signature: H
          };
        });
      }
      async signString(K, {
        signingDate: q = new Date(),
        signingRegion: Y,
        signingService: z
      } = {}) {
        let w = await this.credentialProvider();
        this.validateResolvedCredentials(w);
        let H = Y ?? (await this.regionProvider()),
          {
            shortDate: J
          } = L21(q),
          O = new this.sha256(await this.getSigningKey(w, H, J, z));
        return O.update((0, b26.toUint8Array)(K)), (0, er.toHex)(await O.digest());
      }
      async signRequest(K, {
        signingDate: q = new Date(),
        signableHeaders: Y,
        unsignableHeaders: z,
        signingRegion: w,
        signingService: H
      } = {}) {
        let J = await this.credentialProvider();
        this.validateResolvedCredentials(J);
        let O = w ?? (await this.regionProvider()),
          X = g26(K),
          {
            longDate: $,
            shortDate: _
          } = L21(q),
          G = y21(_, O, H ?? this.service);
        if (X.headers[cg4] = $, J.sessionToken) X.headers[Oh9] = J.sessionToken;
        let Z = await I21(X, this.sha256);
        if (!vh9(u26, X.headers) && this.applyChecksum) X.headers[u26] = Z;
        let W = B26(X, z, Y),
          D = await this.getSignature($, G, this.getSigningKey(J, O, _, H), this.createCanonicalRequest(X, W, Z));
        return X.headers[dg4] = `${x26} Credential=${J.accessKeyId}/${G}, SignedHeaders=${gg4(W)}, Signature=${D}`, X;
      }
      createCanonicalRequest(K, q, Y) {
        let z = Object.keys(q).sort();
        return `${K.method}
${this.getCanonicalPath(K)}
${ng4(K)}
${z.map(w => `${w}:${q[w]}`).join(`
`)}

${z.join(";")}
${Y}`;
      }
      async createStringToSign(K, q, Y) {
        let z = new this.sha256();
        z.update((0, b26.toUint8Array)(Y));
        let w = await z.digest();
        return `${x26}
${K}
${q}
${(0, er.toHex)(w)}`;
      }
      getCanonicalPath({
        path: K
      }) {
        if (this.uriEscapePath) {
          let q = [];
          for (let w of K.split("/")) {
            if ((w == null ? void 0 : w.length) === 0) continue;
            if (w === ".") continue;
            if (w === "..") q.pop();else q.push(w);
          }
          let Y = `${(K == null ? void 0 : K.startsWith("/")) ? "/" : ""}${q.join("/")}${q.length > 0 && (K == null ? void 0 : K.endsWith("/")) ? "/" : ""}`;
          return (0, BSA.escapeUri)(Y).replace(/%2F/g, "/");
        }
        return K;
      }
      async getSignature(K, q, Y, z) {
        let w = await this.createStringToSign(K, q, z),
          H = new this.sha256(await Y);
        return H.update((0, b26.toUint8Array)(w)), (0, er.toHex)(await H.digest());
      }
      getSigningKey(K, q, Y, z) {
        return ig4(this.sha256, K, Y, q, z || this.service);
      }
      validateResolvedCredentials(K) {
        if (typeof K !== "object" || typeof K.accessKeyId !== "string" || typeof K.secretAccessKey !== "string") throw Error("Resolved credential object is not valid");
      }
    };
  z$(tg4, "SignatureV4");
  var Lh9 = tg4,
    L21 = z$(A => {
      let K = kh9(A).replace(/[\-:]/g, "");
      return {
        longDate: K,
        shortDate: K.slice(0, 8)
      };
    }, "formatDate"),
    gg4 = z$(A => Object.keys(A).sort().join(";"), "getCanonicalHeaderList");
});

// Register to shared state
__$.AF4 = AF4;
