// Module: Jj8
// Dependencies: Aj8, Xb, SE, xR, $vA, du1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Jj8 = v(Hj8 => {
  Object.defineProperty(Hj8, "__esModule", {
    value: !0
  });
  var gyq = __$.Aj8(),
    Fyq = __$.Xb(),
    qj8 = __$.SE(),
    Qyq = __$.xR(),
    Uyq = __$.$vA(),
    pyq = __$.du1(),
    dyq = {
      ip: !1,
      request: !0,
      transaction: !0,
      user: !0
    },
    cyq = ["cookies", "data", "headers", "method", "query_string", "url"],
    Yj8 = ["id", "username", "email"];
  function lyq(A, K, q) {
    if (!A) return;
    if (!A.metadata.source || A.metadata.source === "url") {
      let [Y, z] = vsA(K, {
        path: !0,
        method: !0
      });
      A.updateName(Y), A.setMetadata({
        source: z
      });
    }
    if (A.setAttribute("url", K.originalUrl || K.url), K.baseUrl) A.setAttribute("baseUrl", K.baseUrl);
    A.setData("query", zj8(K, q));
  }
  function vsA(A, K = {}) {
    let q = A.method && A.method.toUpperCase(),
      Y = "",
      z = "url";
    if (K.customRoute || A.route) Y = K.customRoute || `${A.baseUrl || ""}${A.route && A.route.path}`, z = "route";else if (A.originalUrl || A.url) Y = pyq.stripUrlQueryAndFragment(A.originalUrl || A.url || "");
    let w = "";
    if (K.method && q) w += q;
    if (K.method && K.path) w += " ";
    if (K.path && Y) w += Y;
    return [w, z];
  }
  function iyq(A, K) {
    switch (K) {
      case "path":
        return vsA(A, {
          path: !0
        })[0];
      case "handler":
        return A.route && A.route.stack && A.route.stack[0] && A.route.stack[0].name || "<anonymous>";
      case "methodPath":
      default:
        {
          let q = A._reconstructedRoute ? A._reconstructedRoute : void 0;
          return vsA(A, {
            path: !0,
            method: !0,
            customRoute: q
          })[0];
        }
    }
  }
  function nyq(A, K) {
    let q = {};
    return (Array.isArray(K) ? K : Yj8).forEach(z => {
      if (A && z in A) q[z] = A[z];
    }), q;
  }
  function cu1(A, K) {
    let {
        include: q = cyq,
        deps: Y
      } = K || {},
      z = {},
      w = A.headers || {},
      H = A.method,
      J = w.host || A.hostname || A.host || "<no host>",
      O = A.protocol === "https" || A.socket && A.socket.encrypted ? "https" : "http",
      X = A.originalUrl || A.url || "",
      $ = X.startsWith(O) ? X : `${O}://${J}${X}`;
    return q.forEach(_ => {
      switch (_) {
        case "headers":
          {
            if (z.headers = w, !q.includes("cookies")) delete z.headers.cookie;
            break;
          }
        case "method":
          {
            z.method = H;
            break;
          }
        case "url":
          {
            z.url = $;
            break;
          }
        case "cookies":
          {
            z.cookies = A.cookies || w.cookie && gyq.parseCookie(w.cookie) || {};
            break;
          }
        case "query_string":
          {
            z.query_string = zj8(A, Y);
            break;
          }
        case "data":
          {
            if (H === "GET" || H === "HEAD") break;
            if (A.body !== void 0) z.data = qj8.isString(A.body) ? A.body : JSON.stringify(Uyq.normalize(A.body));
            break;
          }
        default:
          if ({}.hasOwnProperty.call(A, _)) z[_] = A[_];
      }
    }), z;
  }
  function ryq(A, K, q) {
    let Y = {
      ...dyq,
      ...(q && q.include)
    };
    if (Y.request) {
      let z = Array.isArray(Y.request) ? cu1(K, {
        include: Y.request,
        deps: q && q.deps
      }) : cu1(K, {
        deps: q && q.deps
      });
      A.request = {
        ...A.request,
        ...z
      };
    }
    if (Y.user) {
      let z = K.user && qj8.isPlainObject(K.user) ? nyq(K.user, Y.user) : {};
      if (Object.keys(z).length) A.user = {
        ...A.user,
        ...z
      };
    }
    if (Y.ip) {
      let z = K.ip || K.socket && K.socket.remoteAddress;
      if (z) A.user = {
        ...A.user,
        ip_address: z
      };
    }
    if (Y.transaction && !A.transaction) A.transaction = iyq(K, Y.transaction);
    return A;
  }
  function zj8(A, K) {
    let q = A.originalUrl || A.url || "";
    if (!q) return;
    if (q.startsWith("/")) q = `http://dogs.are.great${q}`;
    try {
      return A.query || typeof URL < "u" && new URL(q).search.slice(1) || K && K.url && K.url.parse(q).query || void 0;
    } catch (Y) {
      return;
    }
  }
  function wj8(A) {
    let K = {};
    try {
      A.forEach((q, Y) => {
        if (typeof q === "string") K[Y] = q;
      });
    } catch (q) {
      Fyq.DEBUG_BUILD && Qyq.logger.warn("Sentry failed extracting headers from a request object. If you see this, please file an issue.");
    }
    return K;
  }
  function oyq(A) {
    let K = wj8(A.headers);
    return {
      method: A.method,
      url: A.url,
      headers: K
    };
  }
  Hj8.DEFAULT_USER_INCLUDES = Yj8;
  Hj8.addRequestDataToEvent = ryq;
  Hj8.addRequestDataToTransaction = lyq;
  Hj8.extractPathForTransaction = vsA;
  Hj8.extractRequestData = cu1;
  Hj8.winterCGHeadersToDict = wj8;
  Hj8.winterCGRequestToRequestData = oyq;
});

// Register to shared state
__$.Jj8 = Jj8;
