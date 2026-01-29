// Module: q68
// Dependencies: Ow, srA, nrA, uN, D1A, RR, lh, HoA, gI1, k8q
//   ... and 11 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var q68 = k(() => {
  __$.Ow();
  __$.srA();
  __$.nrA();
  __$.uN();
  __$.D1A();
  __$.RR();
  __$.lh();
  __$.HoA();
  __$.gI1();
  __$.k8q = typeof XMLHttpRequest < "u", __$.K68 = __$.k8q && function (A) {
    return new Promise(function (q, Y) {
      let z = __$.OoA(A),
        w = z.data,
        H = __$.eJ.from(z.headers).normalize(),
        {
          responseType: J,
          onUploadProgress: O,
          onDownloadProgress: X
        } = z,
        $,
        _,
        G,
        Z,
        W;
      function D() {
        Z && Z(), W && W(), z.cancelToken && z.cancelToken.unsubscribe($), z.signal && z.signal.removeEventListener("abort", $);
      }
      let j = new XMLHttpRequest();
      j.open(z.method.toUpperCase(), z.url, !0), j.timeout = z.timeout;
      function M() {
        if (!j) return;
        let f = __$.eJ.from("getAllResponseHeaders" in j && j.getAllResponseHeaders()),
          T = {
            data: !J || J === "text" || J === "json" ? j.responseText : j.response,
            status: j.status,
            statusText: j.statusText,
            headers: f,
            config: A,
            request: j
          };
        __$.ih(function (R) {
          q(R), D();
        }, function (R) {
          Y(R), D();
        }, T), j = null;
      }
      if ("onloadend" in j) j.onloadend = M;else j.onreadystatechange = function () {
        if (!j || j.readyState !== 4) return;
        if (j.status === 0 && !(j.responseURL && j.responseURL.indexOf("file:") === 0)) return;
        setTimeout(M);
      };
      if (j.onabort = function () {
        if (!j) return;
        Y(new __$.a4("Request aborted", __$.a4.ECONNABORTED, A, j)), j = null;
      }, j.onerror = function () {
        Y(new __$.a4("Network Error", __$.a4.ERR_NETWORK, A, j)), j = null;
      }, j.ontimeout = function () {
        let N = z.timeout ? "timeout of " + z.timeout + "ms exceeded" : "timeout exceeded",
          T = z.transitional || __$.gzA;
        if (z.timeoutErrorMessage) N = z.timeoutErrorMessage;
        Y(new __$.a4(N, T.clarifyTimeoutError ? __$.a4.ETIMEDOUT : __$.a4.ECONNABORTED, A, j)), j = null;
      }, w === void 0 && H.setContentType(null), "setRequestHeader" in j) __$.i1.forEach(H.toJSON(), function (N, T) {
        j.setRequestHeader(T, N);
      });
      if (!__$.i1.isUndefined(z.withCredentials)) j.withCredentials = !!z.withCredentials;
      if (J && J !== "json") j.responseType = z.responseType;
      if (X) [G, W] = __$.Bg(X, !0), j.addEventListener("progress", G);
      if (O && j.upload) [_, Z] = __$.Bg(O), j.upload.addEventListener("progress", _), j.upload.addEventListener("loadend", Z);
      if (z.cancelToken || z.signal) {
        if ($ = f => {
          if (!j) return;
          Y(!f || f.type ? new __$.BN(null, A, j) : f), j.abort(), j = null;
        }, z.cancelToken && z.cancelToken.subscribe($), z.signal) z.signal.aborted ? $() : z.signal.addEventListener("abort", $);
      }
      let P = __$.$TA(z.url);
      if (P && __$.cY.protocols.indexOf(P) === -1) {
        Y(new __$.a4("Unsupported protocol " + P + ":", __$.a4.ERR_BAD_REQUEST, A));
        return;
      }
      j.send(w || null);
    });
  };
});

// Register to shared state
__$.q68 = q68;
