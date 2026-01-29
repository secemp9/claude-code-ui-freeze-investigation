// Module: o18
// Dependencies: Ow, srA, trA, irA, nrA, uN, D1A, RR, E18, lh
//   ... and 49 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var o18 = k(() => {
  __$.Ow();
  __$.srA();
  __$.trA();
  __$.irA();
  __$.nrA();
  __$.uN();
  __$.D1A();
  __$.RR();
  __$.E18();
  __$.lh();
  __$.C18();
  __$.I18();
  __$.mI1();
  __$.b18();
  __$.u18();
  __$.HoA();
  __$.l18 = o(__$.z18(), 1), __$.i18 = o(__$.v18(), 1), __$.Q18 = {
    flush: __$.Sl.constants.Z_SYNC_FLUSH,
    finishFlush: __$.Sl.constants.Z_SYNC_FLUSH
  }, __$.M8q = {
    flush: __$.Sl.constants.BROTLI_OPERATION_FLUSH,
    finishFlush: __$.Sl.constants.BROTLI_OPERATION_FLUSH
  }, __$.U18 = __$.i1.isFunction(__$.Sl.createBrotliDecompress), {
    http: __$.P8q,
    https: __$.V8q
  } = __$.i18.default, __$.f8q = /https:?/, __$.p18 = __$.cY.protocols.map(A => {
    return A + ":";
  });
  __$.T8q = typeof process < "u" && __$.i1.kindOf(process) === "process", __$.r18 = __$.T8q && function (K) {
    return __$.v8q(async function (Y, z, w) {
      let {
          data: H,
          lookup: J,
          family: O
        } = K,
        {
          responseType: X,
          responseEncoding: $
        } = K,
        _ = K.method.toUpperCase(),
        G,
        Z = !1,
        W;
      if (J) {
        let c = __$.x18(J, YA => __$.i1.isArray(YA) ? YA : [YA]);
        J = (YA, e, qA) => {
          c(YA, e, (HA, _A, a) => {
            if (HA) return qA(HA);
            let JA = __$.i1.isArray(_A) ? _A.map(jA => __$.c18(jA)) : [__$.c18(_A, a)];
            e.all ? qA(HA, JA) : qA(HA, JA[0].address, JA[0].family);
          });
        };
      }
      let D = new __$.j8q(),
        j = () => {
          if (K.cancelToken) K.cancelToken.unsubscribe(M);
          if (K.signal) K.signal.removeEventListener("abort", M);
          D.removeAllListeners();
        };
      w((c, YA) => {
        if (G = !0, YA) Z = !0, j();
      });
      function M(c) {
        D.emit("abort", !c || c.type ? new __$.BN(null, K, W) : c);
      }
      if (D.once("abort", z), K.cancelToken || K.signal) {
        if (K.cancelToken && K.cancelToken.subscribe(M), K.signal) K.signal.aborted ? M() : K.signal.addEventListener("abort", M);
      }
      let P = __$.j1A(K.baseURL, K.url, K.allowAbsoluteUrls),
        f = new URL(P, __$.cY.hasBrowserEnv ? __$.cY.origin : void 0),
        N = f.protocol || __$.p18[0];
      if (N === "data:") {
        let c;
        if (_ !== "GET") return __$.ih(Y, z, {
          status: 405,
          statusText: "method not allowed",
          headers: {},
          config: K
        });
        try {
          c = __$.xI1(K.url, X === "blob", {
            Blob: K.env && K.env.Blob
          });
        } catch (YA) {
          throw __$.a4.from(YA, __$.a4.ERR_BAD_REQUEST, K);
        }
        if (X === "text") {
          if (c = c.toString($), !$ || $ === "utf8") c = __$.i1.stripBOM(c);
        } else if (X === "stream") c = __$.izA.Readable.from(c);
        return __$.ih(Y, z, {
          data: c,
          status: 200,
          statusText: "OK",
          headers: new __$.eJ(),
          config: K
        });
      }
      if (__$.p18.indexOf(N) === -1) return z(new __$.a4("Unsupported protocol " + N, __$.a4.ERR_BAD_REQUEST, K));
      let T = __$.eJ.from(K.headers).normalize();
      T.set("User-Agent", "axios/" + __$.T1A, !1);
      let {
          onUploadProgress: C,
          onDownloadProgress: R
        } = K,
        x = K.maxRate,
        y = void 0,
        B = void 0;
      if (__$.i1.isSpecCompliantForm(H)) {
        let c = T.getContentType(/boundary=([-_\w\d]{10,70})/i);
        H = __$.y18(H, YA => {
          T.set(YA);
        }, {
          tag: `axios-${__$.T1A}-boundary`,
          boundary: c && c[1] || void 0
        });
      } else if (__$.i1.isFormData(H) && __$.i1.isFunction(H.getHeaders)) {
        if (T.set(H.getHeaders()), !T.hasContentLength()) try {
          let c = await __$.D8q.promisify(H.getLength).call(H);
          Number.isFinite(c) && c >= 0 && T.setContentLength(c);
        } catch (c) {}
      } else if (__$.i1.isBlob(H) || __$.i1.isFile(H)) H.size && T.setContentType(H.type || "application/octet-stream"), T.setContentLength(H.size || 0), H = __$.izA.Readable.from(__$.woA(H));else if (H && !__$.i1.isStream(H)) {
        if (Buffer.isBuffer(H)) ;else if (__$.i1.isArrayBuffer(H)) H = Buffer.from(new Uint8Array(H));else if (__$.i1.isString(H)) H = Buffer.from(H, "utf-8");else return z(new __$.a4("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", __$.a4.ERR_BAD_REQUEST, K));
        if (T.setContentLength(H.length, !1), K.maxBodyLength > -1 && H.length > K.maxBodyLength) return z(new __$.a4("Request body larger than maxBodyLength limit", __$.a4.ERR_BAD_REQUEST, K));
      }
      let b = __$.i1.toFiniteNumber(T.getContentLength());
      if (__$.i1.isArray(x)) y = x[0], B = x[1];else y = B = x;
      if (H && (C || y)) {
        if (!__$.i1.isStream(H)) H = __$.izA.Readable.from(H, {
          objectMode: !1
        });
        H = __$.izA.pipeline([H, new __$.BI1({
          maxRate: __$.i1.toFiniteNumber(y)
        })], __$.i1.noop), C && H.on("progress", __$.d18(H, __$.czA(b, __$.Bg(__$.lzA(C), !1, 3))));
      }
      let F = void 0;
      if (K.auth) {
        let c = K.auth.username || "",
          YA = K.auth.password || "";
        F = c + ":" + YA;
      }
      if (!F && f.username) {
        let {
          username: c,
          password: YA
        } = f;
        F = c + ":" + YA;
      }
      F && T.delete("authorization");
      let Q;
      try {
        Q = __$.W1A(f.pathname + f.search, K.params, K.paramsSerializer).replace(/^\?/, "");
      } catch (c) {
        let YA = Error(c.message);
        return YA.config = K, YA.url = K.url, YA.exists = !0, z(YA);
      }
      T.set("Accept-Encoding", "gzip, compress, deflate" + (__$.U18 ? ", br" : ""), !1);
      let u = {
        path: Q,
        method: _,
        headers: T.toJSON(),
        agents: {
          http: K.httpAgent,
          https: K.httpsAgent
        },
        auth: F,
        protocol: N,
        family: O,
        beforeRedirect: __$.N8q,
        beforeRedirects: {}
      };
      if (!__$.i1.isUndefined(J) && (u.lookup = J), K.socketPath) u.socketPath = K.socketPath;else u.hostname = f.hostname.startsWith("[") ? f.hostname.slice(1, -1) : f.hostname, u.port = f.port, __$.n18(u, K.proxy, N + "//" + f.hostname + (f.port ? ":" + f.port : "") + u.path);
      let d,
        r = __$.f8q.test(u.protocol);
      if (u.agent = r ? K.httpsAgent : K.httpAgent, K.transport) d = K.transport;else if (K.maxRedirects === 0) d = r ? __$.W8q : __$.Z8q;else {
        if (K.maxRedirects) u.maxRedirects = K.maxRedirects;
        if (K.beforeRedirect) u.beforeRedirects.config = K.beforeRedirect;
        d = r ? __$.V8q : __$.P8q;
      }
      if (K.maxBodyLength > -1) u.maxBodyLength = K.maxBodyLength;else u.maxBodyLength = 1 / 0;
      if (K.insecureHTTPParser) u.insecureHTTPParser = K.insecureHTTPParser;
      if (W = d.request(u, function (YA) {
        if (W.destroyed) return;
        let e = [YA],
          qA = +YA.headers["content-length"];
        if (R || B) {
          let jA = new __$.BI1({
            maxRate: __$.i1.toFiniteNumber(B)
          });
          R && jA.on("progress", __$.d18(jA, __$.czA(qA, __$.Bg(__$.lzA(R), !0, 3)))), e.push(jA);
        }
        let HA = YA,
          _A = YA.req || W;
        if (K.decompress !== !1 && YA.headers["content-encoding"]) {
          if (_ === "HEAD" || YA.statusCode === 204) delete YA.headers["content-encoding"];
          switch ((YA.headers["content-encoding"] || "").toLowerCase()) {
            case "gzip":
            case "x-gzip":
            case "compress":
            case "x-compress":
              e.push(__$.Sl.createUnzip(__$.Q18)), delete YA.headers["content-encoding"];
              break;
            case "deflate":
              e.push(new __$.h18()), e.push(__$.Sl.createUnzip(__$.Q18)), delete YA.headers["content-encoding"];
              break;
            case "br":
              if (__$.U18) e.push(__$.Sl.createBrotliDecompress(__$.M8q)), delete YA.headers["content-encoding"];
          }
        }
        HA = e.length > 1 ? __$.izA.pipeline(e, __$.i1.noop) : e[0];
        let a = __$.izA.finished(HA, () => {
            a(), j();
          }),
          JA = {
            status: YA.statusCode,
            statusText: YA.statusMessage,
            headers: new __$.eJ(YA.headers),
            config: K,
            request: _A
          };
        if (X === "stream") JA.data = HA, __$.ih(Y, z, JA);else {
          let jA = [],
            MA = 0;
          HA.on("data", function (yA) {
            if (jA.push(yA), MA += yA.length, K.maxContentLength > -1 && MA > K.maxContentLength) Z = !0, HA.destroy(), z(new __$.a4("maxContentLength size of " + K.maxContentLength + " exceeded", __$.a4.ERR_BAD_RESPONSE, K, _A));
          }), HA.on("aborted", function () {
            if (Z) return;
            let yA = new __$.a4("stream has been aborted", __$.a4.ERR_BAD_RESPONSE, K, _A);
            HA.destroy(yA), z(yA);
          }), HA.on("error", function (yA) {
            if (W.destroyed) return;
            z(__$.a4.from(yA, null, K, _A));
          }), HA.on("end", function () {
            try {
              let yA = jA.length === 1 ? jA[0] : Buffer.concat(jA);
              if (X !== "arraybuffer") {
                if (yA = yA.toString($), !$ || $ === "utf8") yA = __$.i1.stripBOM(yA);
              }
              JA.data = yA;
            } catch (yA) {
              return z(__$.a4.from(yA, null, K, JA.request, JA));
            }
            __$.ih(Y, z, JA);
          });
        }
        D.once("abort", jA => {
          if (!HA.destroyed) HA.emit("error", jA), HA.destroy();
        });
      }), D.once("abort", c => {
        z(c), W.destroy(c);
      }), W.on("error", function (YA) {
        z(__$.a4.from(YA, null, K, W));
      }), W.on("socket", function (YA) {
        YA.setKeepAlive(!0, 60000);
      }), K.timeout) {
        let c = parseInt(K.timeout, 10);
        if (Number.isNaN(c)) {
          z(new __$.a4("error trying to parse `config.timeout` to int", __$.a4.ERR_BAD_OPTION_VALUE, K, W));
          return;
        }
        W.setTimeout(c, function () {
          if (G) return;
          let e = K.timeout ? "timeout of " + K.timeout + "ms exceeded" : "timeout exceeded",
            qA = K.transitional || __$.gzA;
          if (K.timeoutErrorMessage) e = K.timeoutErrorMessage;
          z(new __$.a4(e, qA.clarifyTimeoutError ? __$.a4.ETIMEDOUT : __$.a4.ECONNABORTED, K, W)), M();
        });
      }
      if (__$.i1.isStream(H)) {
        let c = !1,
          YA = !1;
        H.on("end", () => {
          c = !0;
        }), H.once("error", e => {
          YA = !0, W.destroy(e);
        }), H.on("close", () => {
          if (!c && !YA) M(new __$.BN("Request stream has been aborted", K, W));
        }), H.pipe(W);
      } else W.end(H);
    });
  };
});

// Register to shared state
__$.o18 = o18;
