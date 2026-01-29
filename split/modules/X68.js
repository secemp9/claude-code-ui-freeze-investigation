// Module: X68
// Dependencies: RR, Ow, uN, z68, lh, HoA, gI1, srA, $oA, H68
//   ... and 19 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var X68 = k(() => {
  __$.RR();
  __$.Ow();
  __$.uN();
  __$.z68();
  __$.lh();
  __$.HoA();
  __$.gI1();
  __$.srA();
  __$.$oA = typeof fetch === "function" && typeof Request === "function" && typeof Response === "function", __$.H68 = __$.$oA && typeof ReadableStream === "function", __$.I8q = __$.$oA && (typeof TextEncoder === "function" ? (A => K => A.encode(K))(new TextEncoder()) : async A => new Uint8Array(await new Response(A).arrayBuffer())), __$.S8q = __$.H68 && __$.J68(() => {
    let A = !1,
      K = new Request(__$.cY.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return A = !0, "half";
        }
      }).headers.has("Content-Type");
    return A && !K;
  }), __$.QI1 = __$.H68 && __$.J68(() => __$.i1.isReadableStream(new Response("").body)), __$.XoA = {
    stream: __$.QI1 && (A => A.body)
  };
  __$.$oA && (A => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(K => {
      !__$.XoA[K] && (__$.XoA[K] = __$.i1.isFunction(A[K]) ? q => q[K]() : (q, Y) => {
        throw new __$.a4(`Response type '${K}' is not supported`, __$.a4.ERR_NOT_SUPPORT, Y);
      });
    });
  })(new Response());
  __$.O68 = __$.$oA && (async A => {
    let {
      url: K,
      method: q,
      data: Y,
      signal: z,
      cancelToken: w,
      timeout: H,
      onDownloadProgress: J,
      onUploadProgress: O,
      responseType: X,
      headers: $,
      withCredentials: _ = "same-origin",
      fetchOptions: G
    } = __$.OoA(A);
    X = X ? (X + "").toLowerCase() : "text";
    let Z = __$.Y68([z, w && w.toAbortSignal()], H),
      W,
      D = Z && Z.unsubscribe && (() => {
        Z.unsubscribe();
      }),
      j;
    try {
      if (O && __$.S8q && q !== "get" && q !== "head" && (j = await __$.b8q($, Y)) !== 0) {
        let T = new Request(K, {
            method: "POST",
            body: Y,
            duplex: "half"
          }),
          C;
        if (__$.i1.isFormData(Y) && (C = T.headers.get("content-type"))) $.setContentType(C);
        if (T.body) {
          let [R, x] = __$.czA(j, __$.Bg(__$.lzA(O)));
          Y = __$.FI1(T.body, __$.w68, R, x);
        }
      }
      if (!__$.i1.isString(_)) _ = _ ? "include" : "omit";
      let M = "credentials" in Request.prototype;
      W = new Request(K, {
        ...G,
        signal: Z,
        method: q.toUpperCase(),
        headers: $.normalize().toJSON(),
        body: Y,
        duplex: "half",
        credentials: M ? _ : void 0
      });
      let P = await fetch(W),
        f = __$.QI1 && (X === "stream" || X === "response");
      if (__$.QI1 && (J || f && D)) {
        let T = {};
        ["status", "statusText", "headers"].forEach(y => {
          T[y] = P[y];
        });
        let C = __$.i1.toFiniteNumber(P.headers.get("content-length")),
          [R, x] = J && __$.czA(C, __$.Bg(__$.lzA(J), !0)) || [];
        P = new Response(__$.FI1(P.body, __$.w68, R, () => {
          x && x(), D && D();
        }), T);
      }
      X = X || "text";
      let N = await __$.XoA[__$.i1.findKey(__$.XoA, X) || "text"](P, A);
      return !f && D && D(), await new Promise((T, C) => {
        __$.ih(T, C, {
          data: N,
          headers: __$.eJ.from(P.headers),
          status: P.status,
          statusText: P.statusText,
          config: A,
          request: W
        });
      });
    } catch (M) {
      if (D && D(), M && M.name === "TypeError" && /fetch/i.test(M.message)) throw Object.assign(new __$.a4("Network Error", __$.a4.ERR_NETWORK, A, W), {
        cause: M.cause || M
      });
      throw __$.a4.from(M, M && M.code, A, W);
    }
  });
});

// Register to shared state
__$.X68 = X68;
