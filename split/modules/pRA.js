// Module: pRA
// Dependencies: QRA, d8A, u0A, ZT, kn, j0A, HRA, j9, IV, SK1
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pRA = v((q8w, zz4) => {
  var {
      makeNetworkError: jz,
      makeAppropriateNetworkError: lK1,
      filterResponse: A46,
      makeResponse: iK1,
      fromInnerResponse: ac3
    } = __$.QRA(),
    {
      HeadersList: c24
    } = __$.d8A(),
    {
      Request: sc3,
      cloneRequest: tc3
    } = __$.u0A(),
    Bn = CA("node:zlib"),
    {
      bytesMatch: ec3,
      makePolicyContainer: Al3,
      clonePolicyContainer: Kl3,
      requestBadPort: ql3,
      TAOCheck: Yl3,
      appendRequestOriginHeader: zl3,
      responseLocationURL: wl3,
      requestCurrentURL: fx,
      setRequestReferrerPolicyOnRedirect: Hl3,
      tryUpgradeRequestToAPotentiallyTrustworthyURL: Jl3,
      createOpaqueTimingInfo: w46,
      appendFetchMetadata: Ol3,
      corsCheck: Xl3,
      crossOriginResourcePolicyCheck: $l3,
      determineRequestsReferrer: _l3,
      coarsenedSharedCurrentTime: URA,
      createDeferredPromise: Gl3,
      isBlobLike: Zl3,
      sameOrigin: z46,
      isCancelled: c8A,
      isAborted: l24,
      isErrorLike: Wl3,
      fullyReadBody: Dl3,
      readableStreamClose: jl3,
      isomorphicEncode: nK1,
      urlIsLocal: Ml3,
      urlIsHttpHttpsScheme: H46,
      urlHasHttpsScheme: Pl3,
      clampAndCoarsenConnectionTimingInfo: Vl3,
      simpleRangeHeaderValue: fl3,
      buildContentRange: Nl3,
      createInflate: Tl3,
      extractMimeType: vl3
    } = __$.ZT(),
    {
      kState: o24,
      kDispatcher: El3
    } = __$.kn(),
    l8A = CA("node:assert"),
    {
      safelyExtractBody: J46,
      extractBody: i24
    } = __$.j0A(),
    {
      redirectStatusSet: a24,
      nullBodyStatus: s24,
      safeMethodsSet: kl3,
      requestBodyHeader: Cl3,
      subresourceSet: Ll3
    } = __$.HRA(),
    Rl3 = CA("node:events"),
    {
      Readable: yl3,
      pipeline: Il3,
      finished: Sl3
    } = CA("node:stream"),
    {
      addAbortListener: hl3,
      isErrored: bl3,
      isReadable: rK1,
      bufferToLowerCasedHeaderName: n24
    } = __$.j9(),
    {
      dataURLProcessor: xl3,
      serializeAMimeType: ul3,
      minimizeSupportedMimeType: Bl3
    } = __$.IV(),
    {
      getGlobalDispatcher: ml3
    } = __$.SK1(),
    {
      webidl: gl3
    } = __$.SZ(),
    {
      STATUS_CODES: Fl3
    } = CA("node:http"),
    Ql3 = ["GET", "HEAD"],
    Ul3 = typeof __UNDICI_IS_NODE__ < "u" || typeof esbuildDetection < "u" ? "node" : "undici",
    K46;
  class O46 extends Rl3 {
    constructor(A) {
      super();
      this.dispatcher = A, this.connection = null, this.dump = !1, this.state = "ongoing";
    }
    terminate(A) {
      if (this.state !== "ongoing") return;
      this.state = "terminated", this.connection?.destroy(A), this.emit("terminated", A);
    }
    abort(A) {
      if (this.state !== "ongoing") return;
      if (this.state = "aborted", !A) A = new DOMException("The operation was aborted.", "AbortError");
      this.serializedAbortReason = A, this.connection?.destroy(A), this.emit("terminated", A);
    }
  }
  function pl3(A) {
    t24(A, "fetch");
  }
  function dl3(A, K = void 0) {
    gl3.argumentLengthCheck(arguments, 1, "globalThis.fetch");
    let q = Gl3(),
      Y;
    try {
      Y = new sc3(A, K);
    } catch ($) {
      return q.reject($), q.promise;
    }
    let z = Y[o24];
    if (Y.signal.aborted) return q46(q, z, null, Y.signal.reason), q.promise;
    if (z.client.globalObject?.constructor?.name === "ServiceWorkerGlobalScope") z.serviceWorkers = "none";
    let H = null,
      J = !1,
      O = null;
    return hl3(Y.signal, () => {
      J = !0, l8A(O != null), O.abort(Y.signal.reason);
      let $ = H?.deref();
      q46(q, z, $, Y.signal.reason);
    }), O = Az4({
      request: z,
      processResponseEndOfBody: pl3,
      processResponse: $ => {
        if (J) return;
        if ($.aborted) {
          q46(q, z, H, O.serializedAbortReason);
          return;
        }
        if ($.type === "error") {
          q.reject(TypeError("fetch failed", {
            cause: $.error
          }));
          return;
        }
        H = new WeakRef(ac3($, "immutable")), q.resolve(H.deref()), q = null;
      },
      dispatcher: Y[El3]
    }), q.promise;
  }
  function t24(A, K = "other") {
    if (A.type === "error" && A.aborted) return;
    if (!A.urlList?.length) return;
    let q = A.urlList[0],
      Y = A.timingInfo,
      z = A.cacheState;
    if (!H46(q)) return;
    if (Y === null) return;
    if (!A.timingAllowPassed) Y = w46({
      startTime: Y.startTime
    }), z = "";
    Y.endTime = URA(), A.timingInfo = Y, e24(Y, q.href, K, globalThis, z);
  }
  var e24 = performance.markResourceTiming;
  function q46(A, K, q, Y) {
    if (A) A.reject(Y);
    if (K.body != null && rK1(K.body?.stream)) K.body.stream.cancel(Y).catch(w => {
      if (w.code === "ERR_INVALID_STATE") return;
      throw w;
    });
    if (q == null) return;
    let z = q[o24];
    if (z.body != null && rK1(z.body?.stream)) z.body.stream.cancel(Y).catch(w => {
      if (w.code === "ERR_INVALID_STATE") return;
      throw w;
    });
  }
  function Az4({
    request: A,
    processRequestBodyChunkLength: K,
    processRequestEndOfBody: q,
    processResponse: Y,
    processResponseEndOfBody: z,
    processResponseConsumeBody: w,
    useParallelQueue: H = !1,
    dispatcher: J = ml3()
  }) {
    l8A(J);
    let O = null,
      X = !1;
    if (A.client != null) O = A.client.globalObject, X = A.client.crossOriginIsolatedCapability;
    let $ = URA(X),
      _ = w46({
        startTime: $
      }),
      G = {
        controller: new O46(J),
        request: A,
        timingInfo: _,
        processRequestBodyChunkLength: K,
        processRequestEndOfBody: q,
        processResponse: Y,
        processResponseConsumeBody: w,
        processResponseEndOfBody: z,
        taskDestination: O,
        crossOriginIsolatedCapability: X
      };
    if (l8A(!A.body || A.body.stream), A.window === "client") A.window = A.client?.globalObject?.constructor?.name === "Window" ? A.client : "no-window";
    if (A.origin === "client") A.origin = A.client.origin;
    if (A.policyContainer === "client") if (A.client != null) A.policyContainer = Kl3(A.client.policyContainer);else A.policyContainer = Al3();
    if (!A.headersList.contains("accept", !0)) A.headersList.append("accept", "*/*", !0);
    if (!A.headersList.contains("accept-language", !0)) A.headersList.append("accept-language", "*", !0);
    if (A.priority === null) ;
    if (Ll3.has(A.destination)) ;
    return Kz4(G).catch(Z => {
      G.controller.terminate(Z);
    }), G.controller;
  }
  async function Kz4(A, K = !1) {
    let q = A.request,
      Y = null;
    if (q.localURLsOnly && !Ml3(fx(q))) Y = jz("local URLs only");
    if (Jl3(q), ql3(q) === "blocked") Y = jz("bad port");
    if (q.referrerPolicy === "") q.referrerPolicy = q.policyContainer.referrerPolicy;
    if (q.referrer !== "no-referrer") q.referrer = _l3(q);
    if (Y === null) Y = await (async () => {
      let w = fx(q);
      if (z46(w, q.url) && q.responseTainting === "basic" || w.protocol === "data:" || q.mode === "navigate" || q.mode === "websocket") return q.responseTainting = "basic", await r24(A);
      if (q.mode === "same-origin") return jz('request mode cannot be "same-origin"');
      if (q.mode === "no-cors") {
        if (q.redirect !== "follow") return jz('redirect mode cannot be "follow" for "no-cors" request');
        return q.responseTainting = "opaque", await r24(A);
      }
      if (!H46(fx(q))) return jz("URL scheme must be a HTTP(S) scheme");
      return q.responseTainting = "cors", await qz4(A);
    })();
    if (K) return Y;
    if (Y.status !== 0 && !Y.internalResponse) {
      if (q.responseTainting === "cors") ;
      if (q.responseTainting === "basic") Y = A46(Y, "basic");else if (q.responseTainting === "cors") Y = A46(Y, "cors");else if (q.responseTainting === "opaque") Y = A46(Y, "opaque");else l8A(!1);
    }
    let z = Y.status === 0 ? Y : Y.internalResponse;
    if (z.urlList.length === 0) z.urlList.push(...q.urlList);
    if (!q.timingAllowFailed) Y.timingAllowPassed = !0;
    if (Y.type === "opaque" && z.status === 206 && z.rangeRequested && !q.headers.contains("range", !0)) Y = z = jz();
    if (Y.status !== 0 && (q.method === "HEAD" || q.method === "CONNECT" || s24.includes(z.status))) z.body = null, A.controller.dump = !0;
    if (q.integrity) {
      let w = J => Y46(A, jz(J));
      if (q.responseTainting === "opaque" || Y.body == null) {
        w(Y.error);
        return;
      }
      let H = J => {
        if (!ec3(J, q.integrity)) {
          w("integrity mismatch");
          return;
        }
        Y.body = J46(J)[0], Y46(A, Y);
      };
      await Dl3(Y.body, H, w);
    } else Y46(A, Y);
  }
  function r24(A) {
    if (c8A(A) && A.request.redirectCount === 0) return Promise.resolve(lK1(A));
    let {
        request: K
      } = A,
      {
        protocol: q
      } = fx(K);
    switch (q) {
      case "about:":
        return Promise.resolve(jz("about scheme is not supported"));
      case "blob:":
        {
          if (!K46) K46 = CA("node:buffer").resolveObjectURL;
          let Y = fx(K);
          if (Y.search.length !== 0) return Promise.resolve(jz("NetworkError when attempting to fetch resource."));
          let z = K46(Y.toString());
          if (K.method !== "GET" || !Zl3(z)) return Promise.resolve(jz("invalid method"));
          let w = iK1(),
            H = z.size,
            J = nK1(`${H}`),
            O = z.type;
          if (!K.headersList.contains("range", !0)) {
            let X = i24(z);
            w.statusText = "OK", w.body = X[0], w.headersList.set("content-length", J, !0), w.headersList.set("content-type", O, !0);
          } else {
            w.rangeRequested = !0;
            let X = K.headersList.get("range", !0),
              $ = fl3(X, !0);
            if ($ === "failure") return Promise.resolve(jz("failed to fetch the data URL"));
            let {
              rangeStartValue: _,
              rangeEndValue: G
            } = $;
            if (_ === null) _ = H - G, G = _ + G - 1;else {
              if (_ >= H) return Promise.resolve(jz("Range start is greater than the blob's size."));
              if (G === null || G >= H) G = H - 1;
            }
            let Z = z.slice(_, G, O),
              W = i24(Z);
            w.body = W[0];
            let D = nK1(`${Z.size}`),
              j = Nl3(_, G, H);
            w.status = 206, w.statusText = "Partial Content", w.headersList.set("content-length", D, !0), w.headersList.set("content-type", O, !0), w.headersList.set("content-range", j, !0);
          }
          return Promise.resolve(w);
        }
      case "data:":
        {
          let Y = fx(K),
            z = xl3(Y);
          if (z === "failure") return Promise.resolve(jz("failed to fetch the data URL"));
          let w = ul3(z.mimeType);
          return Promise.resolve(iK1({
            statusText: "OK",
            headersList: [["content-type", {
              name: "Content-Type",
              value: w
            }]],
            body: J46(z.body)[0]
          }));
        }
      case "file:":
        return Promise.resolve(jz("not implemented... yet..."));
      case "http:":
      case "https:":
        return qz4(A).catch(Y => jz(Y));
      default:
        return Promise.resolve(jz("unknown scheme"));
    }
  }
  function cl3(A, K) {
    if (A.request.done = !0, A.processResponseDone != null) queueMicrotask(() => A.processResponseDone(K));
  }
  function Y46(A, K) {
    let q = A.timingInfo,
      Y = () => {
        let w = Date.now();
        if (A.request.destination === "document") A.controller.fullTimingInfo = q;
        A.controller.reportTimingSteps = () => {
          if (A.request.url.protocol !== "https:") return;
          q.endTime = w;
          let {
            cacheState: J,
            bodyInfo: O
          } = K;
          if (!K.timingAllowPassed) q = w46(q), J = "";
          let X = 0;
          if (A.request.mode !== "navigator" || !K.hasCrossOriginRedirects) {
            X = K.status;
            let $ = vl3(K.headersList);
            if ($ !== "failure") O.contentType = Bl3($);
          }
          if (A.request.initiatorType != null) e24(q, A.request.url.href, A.request.initiatorType, globalThis, J, O, X);
        };
        let H = () => {
          if (A.request.done = !0, A.processResponseEndOfBody != null) queueMicrotask(() => A.processResponseEndOfBody(K));
          if (A.request.initiatorType != null) A.controller.reportTimingSteps();
        };
        queueMicrotask(() => H());
      };
    if (A.processResponse != null) queueMicrotask(() => {
      A.processResponse(K), A.processResponse = null;
    });
    let z = K.type === "error" ? K : K.internalResponse ?? K;
    if (z.body == null) Y();else Sl3(z.body.stream, () => {
      Y();
    });
  }
  async function qz4(A) {
    let K = A.request,
      q = null,
      Y = null,
      z = A.timingInfo;
    if (K.serviceWorkers === "all") ;
    if (q === null) {
      if (K.redirect === "follow") K.serviceWorkers = "none";
      if (Y = q = await Yz4(A), K.responseTainting === "cors" && Xl3(K, q) === "failure") return jz("cors failure");
      if (Yl3(K, q) === "failure") K.timingAllowFailed = !0;
    }
    if ((K.responseTainting === "opaque" || q.type === "opaque") && $l3(K.origin, K.client, K.destination, Y) === "blocked") return jz("blocked");
    if (a24.has(Y.status)) {
      if (K.redirect !== "manual") A.controller.connection.destroy(void 0, !1);
      if (K.redirect === "error") q = jz("unexpected redirect");else if (K.redirect === "manual") q = Y;else if (K.redirect === "follow") q = await ll3(A, q);else l8A(!1);
    }
    return q.timingInfo = z, q;
  }
  function ll3(A, K) {
    let q = A.request,
      Y = K.internalResponse ? K.internalResponse : K,
      z;
    try {
      if (z = wl3(Y, fx(q).hash), z == null) return K;
    } catch (H) {
      return Promise.resolve(jz(H));
    }
    if (!H46(z)) return Promise.resolve(jz("URL scheme must be a HTTP(S) scheme"));
    if (q.redirectCount === 20) return Promise.resolve(jz("redirect count exceeded"));
    if (q.redirectCount += 1, q.mode === "cors" && (z.username || z.password) && !z46(q, z)) return Promise.resolve(jz('cross origin not allowed for request mode "cors"'));
    if (q.responseTainting === "cors" && (z.username || z.password)) return Promise.resolve(jz('URL cannot contain credentials for request mode "cors"'));
    if (Y.status !== 303 && q.body != null && q.body.source == null) return Promise.resolve(jz());
    if ([301, 302].includes(Y.status) && q.method === "POST" || Y.status === 303 && !Ql3.includes(q.method)) {
      q.method = "GET", q.body = null;
      for (let H of Cl3) q.headersList.delete(H);
    }
    if (!z46(fx(q), z)) q.headersList.delete("authorization", !0), q.headersList.delete("proxy-authorization", !0), q.headersList.delete("cookie", !0), q.headersList.delete("host", !0);
    if (q.body != null) l8A(q.body.source != null), q.body = J46(q.body.source)[0];
    let w = A.timingInfo;
    if (w.redirectEndTime = w.postRedirectStartTime = URA(A.crossOriginIsolatedCapability), w.redirectStartTime === 0) w.redirectStartTime = w.startTime;
    return q.urlList.push(z), Hl3(q, Y), Kz4(A, !0);
  }
  async function Yz4(A, K = !1, q = !1) {
    let Y = A.request,
      z = null,
      w = null,
      H = null,
      J = null,
      O = !1;
    if (Y.window === "no-window" && Y.redirect === "error") z = A, w = Y;else w = tc3(Y), z = {
      ...A
    }, z.request = w;
    let X = Y.credentials === "include" || Y.credentials === "same-origin" && Y.responseTainting === "basic",
      $ = w.body ? w.body.length : null,
      _ = null;
    if (w.body == null && ["POST", "PUT"].includes(w.method)) _ = "0";
    if ($ != null) _ = nK1(`${$}`);
    if (_ != null) w.headersList.append("content-length", _, !0);
    if ($ != null && w.keepalive) ;
    if (w.referrer instanceof URL) w.headersList.append("referer", nK1(w.referrer.href), !0);
    if (zl3(w), Ol3(w), !w.headersList.contains("user-agent", !0)) w.headersList.append("user-agent", Ul3);
    if (w.cache === "default" && (w.headersList.contains("if-modified-since", !0) || w.headersList.contains("if-none-match", !0) || w.headersList.contains("if-unmodified-since", !0) || w.headersList.contains("if-match", !0) || w.headersList.contains("if-range", !0))) w.cache = "no-store";
    if (w.cache === "no-cache" && !w.preventNoCacheCacheControlHeaderModification && !w.headersList.contains("cache-control", !0)) w.headersList.append("cache-control", "max-age=0", !0);
    if (w.cache === "no-store" || w.cache === "reload") {
      if (!w.headersList.contains("pragma", !0)) w.headersList.append("pragma", "no-cache", !0);
      if (!w.headersList.contains("cache-control", !0)) w.headersList.append("cache-control", "no-cache", !0);
    }
    if (w.headersList.contains("range", !0)) w.headersList.append("accept-encoding", "identity", !0);
    if (!w.headersList.contains("accept-encoding", !0)) if (Pl3(fx(w))) w.headersList.append("accept-encoding", "br, gzip, deflate", !0);else w.headersList.append("accept-encoding", "gzip, deflate", !0);
    if (w.headersList.delete("host", !0), J == null) w.cache = "no-store";
    if (w.cache !== "no-store" && w.cache !== "reload") ;
    if (H == null) {
      if (w.cache === "only-if-cached") return jz("only if cached");
      let G = await il3(z, X, q);
      if (!kl3.has(w.method) && G.status >= 200 && G.status <= 399) ;
      if (O && G.status === 304) ;
      if (H == null) H = G;
    }
    if (H.urlList = [...w.urlList], w.headersList.contains("range", !0)) H.rangeRequested = !0;
    if (H.requestIncludesCredentials = X, H.status === 407) {
      if (Y.window === "no-window") return jz();
      if (c8A(A)) return lK1(A);
      return jz("proxy authentication required");
    }
    if (H.status === 421 && !q && (Y.body == null || Y.body.source != null)) {
      if (c8A(A)) return lK1(A);
      A.controller.connection.destroy(), H = await Yz4(A, K, !0);
    }
    return H;
  }
  async function il3(A, K = !1, q = !1) {
    l8A(!A.controller.connection || A.controller.connection.destroyed), A.controller.connection = {
      abort: null,
      destroyed: !1,
      destroy(W, D = !0) {
        if (!this.destroyed) {
          if (this.destroyed = !0, D) this.abort?.(W ?? new DOMException("The operation was aborted.", "AbortError"));
        }
      }
    };
    let Y = A.request,
      z = null,
      w = A.timingInfo;
    if (!0) Y.cache = "no-store";
    let J = q ? "yes" : "no";
    if (Y.mode === "websocket") ;
    let O = null;
    if (Y.body == null && A.processRequestEndOfBody) queueMicrotask(() => A.processRequestEndOfBody());else if (Y.body != null) {
      let W = async function* (M) {
          if (c8A(A)) return;
          yield M, A.processRequestBodyChunkLength?.(M.byteLength);
        },
        D = () => {
          if (c8A(A)) return;
          if (A.processRequestEndOfBody) A.processRequestEndOfBody();
        },
        j = M => {
          if (c8A(A)) return;
          if (M.name === "AbortError") A.controller.abort();else A.controller.terminate(M);
        };
      O = async function* () {
        try {
          for await (let M of Y.body.stream) yield* W(M);
          D();
        } catch (M) {
          j(M);
        }
      }();
    }
    try {
      let {
        body: W,
        status: D,
        statusText: j,
        headersList: M,
        socket: P
      } = await Z({
        body: O
      });
      if (P) z = iK1({
        status: D,
        statusText: j,
        headersList: M,
        socket: P
      });else {
        let f = W[Symbol.asyncIterator]();
        A.controller.next = () => f.next(), z = iK1({
          status: D,
          statusText: j,
          headersList: M
        });
      }
    } catch (W) {
      if (W.name === "AbortError") return A.controller.connection.destroy(), lK1(A, W);
      return jz(W);
    }
    let X = async () => {
        await A.controller.resume();
      },
      $ = W => {
        if (!c8A(A)) A.controller.abort(W);
      },
      _ = new ReadableStream({
        async start(W) {
          A.controller.controller = W;
        },
        async pull(W) {
          await X(W);
        },
        async cancel(W) {
          await $(W);
        },
        type: "bytes"
      });
    z.body = {
      stream: _,
      source: null,
      length: null
    }, A.controller.onAborted = G, A.controller.on("terminated", G), A.controller.resume = async () => {
      while (!0) {
        let W, D;
        try {
          let {
            done: M,
            value: P
          } = await A.controller.next();
          if (l24(A)) break;
          W = M ? void 0 : P;
        } catch (M) {
          if (A.controller.ended && !w.encodedBodySize) W = void 0;else W = M, D = !0;
        }
        if (W === void 0) {
          jl3(A.controller.controller), cl3(A, z);
          return;
        }
        if (w.decodedBodySize += W?.byteLength ?? 0, D) {
          A.controller.terminate(W);
          return;
        }
        let j = new Uint8Array(W);
        if (j.byteLength) A.controller.controller.enqueue(j);
        if (bl3(_)) {
          A.controller.terminate();
          return;
        }
        if (A.controller.controller.desiredSize <= 0) return;
      }
    };
    function G(W) {
      if (l24(A)) {
        if (z.aborted = !0, rK1(_)) A.controller.controller.error(A.controller.serializedAbortReason);
      } else if (rK1(_)) A.controller.controller.error(TypeError("terminated", {
        cause: Wl3(W) ? W : void 0
      }));
      A.controller.connection.destroy();
    }
    return z;
    function Z({
      body: W
    }) {
      let D = fx(Y),
        j = A.controller.dispatcher;
      return new Promise((M, P) => j.dispatch({
        path: D.pathname + D.search,
        origin: D.origin,
        method: Y.method,
        body: j.isMockActive ? Y.body && (Y.body.source || Y.body.stream) : W,
        headers: Y.headersList.entries,
        maxRedirections: 0,
        upgrade: Y.mode === "websocket" ? "websocket" : void 0
      }, {
        body: null,
        abort: null,
        onConnect(f) {
          let {
            connection: N
          } = A.controller;
          if (w.finalConnectionTimingInfo = Vl3(void 0, w.postRedirectStartTime, A.crossOriginIsolatedCapability), N.destroyed) f(new DOMException("The operation was aborted.", "AbortError"));else A.controller.on("terminated", f), this.abort = N.abort = f;
          w.finalNetworkRequestStartTime = URA(A.crossOriginIsolatedCapability);
        },
        onResponseStarted() {
          w.finalNetworkResponseStartTime = URA(A.crossOriginIsolatedCapability);
        },
        onHeaders(f, N, T, C) {
          if (f < 200) return;
          let R = [],
            x = "",
            y = new c24();
          for (let u = 0; u < N.length; u += 2) y.append(n24(N[u]), N[u + 1].toString("latin1"), !0);
          let B = y.get("content-encoding", !0);
          if (B) R = B.toLowerCase().split(",").map(u => u.trim());
          x = y.get("location", !0), this.body = new yl3({
            read: T
          });
          let b = [],
            F = x && Y.redirect === "follow" && a24.has(f);
          if (R.length !== 0 && Y.method !== "HEAD" && Y.method !== "CONNECT" && !s24.includes(f) && !F) for (let u = R.length - 1; u >= 0; --u) {
            let d = R[u];
            if (d === "x-gzip" || d === "gzip") b.push(Bn.createGunzip({
              flush: Bn.constants.Z_SYNC_FLUSH,
              finishFlush: Bn.constants.Z_SYNC_FLUSH
            }));else if (d === "deflate") b.push(Tl3({
              flush: Bn.constants.Z_SYNC_FLUSH,
              finishFlush: Bn.constants.Z_SYNC_FLUSH
            }));else if (d === "br") b.push(Bn.createBrotliDecompress({
              flush: Bn.constants.BROTLI_OPERATION_FLUSH,
              finishFlush: Bn.constants.BROTLI_OPERATION_FLUSH
            }));else {
              b.length = 0;
              break;
            }
          }
          let Q = this.onError.bind(this);
          return M({
            status: f,
            statusText: C,
            headersList: y,
            body: b.length ? Il3(this.body, ...b, u => {
              if (u) this.onError(u);
            }).on("error", Q) : this.body.on("error", Q)
          }), !0;
        },
        onData(f) {
          if (A.controller.dump) return;
          let N = f;
          return w.encodedBodySize += N.byteLength, this.body.push(N);
        },
        onComplete() {
          if (this.abort) A.controller.off("terminated", this.abort);
          if (A.controller.onAborted) A.controller.off("terminated", A.controller.onAborted);
          A.controller.ended = !0, this.body.push(null);
        },
        onError(f) {
          if (this.abort) A.controller.off("terminated", this.abort);
          this.body?.destroy(f), A.controller.terminate(f), P(f);
        },
        onUpgrade(f, N, T) {
          if (f !== 101) return;
          let C = new c24();
          for (let R = 0; R < N.length; R += 2) C.append(n24(N[R]), N[R + 1].toString("latin1"), !0);
          return M({
            status: f,
            statusText: Fl3[f],
            headersList: C,
            socket: T
          }), !0;
        }
      }));
    }
  }
  zz4.exports = {
    fetch: dl3,
    Fetch: O46,
    fetching: Az4,
    finalizeAndReportTiming: t24
  };
});

// Register to shared state
__$.pRA = pRA;
