// Module: fz7
// Dependencies: Gz7, Pz7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fz7 = v((qAH, D01) => {
  var {
      normalizeIPv6: w_Y,
      normalizeIPv4: H_Y,
      removeDotSegments: TuA,
      recomposeAuthority: J_Y,
      normalizeComponentEncoding: W01
    } = __$.Gz7(),
    QZ6 = __$.Pz7();
  function O_Y(A, K) {
    if (typeof A === "string") A = Uu(Op(A, K), K);else if (typeof A === "object") A = Op(Uu(A, K), K);
    return A;
  }
  function X_Y(A, K, q) {
    let Y = Object.assign({
        scheme: "null"
      }, q),
      z = Vz7(Op(A, Y), Op(K, Y), Y, !0);
    return Uu(z, {
      ...Y,
      skipEscape: !0
    });
  }
  function Vz7(A, K, q, Y) {
    let z = {};
    if (!Y) A = Op(Uu(A, q), q), K = Op(Uu(K, q), q);
    if (q = q || {}, !q.tolerant && K.scheme) z.scheme = K.scheme, z.userinfo = K.userinfo, z.host = K.host, z.port = K.port, z.path = TuA(K.path || ""), z.query = K.query;else {
      if (K.userinfo !== void 0 || K.host !== void 0 || K.port !== void 0) z.userinfo = K.userinfo, z.host = K.host, z.port = K.port, z.path = TuA(K.path || ""), z.query = K.query;else {
        if (!K.path) {
          if (z.path = A.path, K.query !== void 0) z.query = K.query;else z.query = A.query;
        } else {
          if (K.path.charAt(0) === "/") z.path = TuA(K.path);else {
            if ((A.userinfo !== void 0 || A.host !== void 0 || A.port !== void 0) && !A.path) z.path = "/" + K.path;else if (!A.path) z.path = K.path;else z.path = A.path.slice(0, A.path.lastIndexOf("/") + 1) + K.path;
            z.path = TuA(z.path);
          }
          z.query = K.query;
        }
        z.userinfo = A.userinfo, z.host = A.host, z.port = A.port;
      }
      z.scheme = A.scheme;
    }
    return z.fragment = K.fragment, z;
  }
  function $_Y(A, K, q) {
    if (typeof A === "string") A = unescape(A), A = Uu(W01(Op(A, q), !0), {
      ...q,
      skipEscape: !0
    });else if (typeof A === "object") A = Uu(W01(A, !0), {
      ...q,
      skipEscape: !0
    });
    if (typeof K === "string") K = unescape(K), K = Uu(W01(Op(K, q), !0), {
      ...q,
      skipEscape: !0
    });else if (typeof K === "object") K = Uu(W01(K, !0), {
      ...q,
      skipEscape: !0
    });
    return A.toLowerCase() === K.toLowerCase();
  }
  function Uu(A, K) {
    let q = {
        host: A.host,
        scheme: A.scheme,
        userinfo: A.userinfo,
        port: A.port,
        path: A.path,
        query: A.query,
        nid: A.nid,
        nss: A.nss,
        uuid: A.uuid,
        fragment: A.fragment,
        reference: A.reference,
        resourceName: A.resourceName,
        secure: A.secure,
        error: ""
      },
      Y = Object.assign({}, K),
      z = [],
      w = QZ6[(Y.scheme || q.scheme || "").toLowerCase()];
    if (w && w.serialize) w.serialize(q, Y);
    if (q.path !== void 0) if (!Y.skipEscape) {
      if (q.path = escape(q.path), q.scheme !== void 0) q.path = q.path.split("%3A").join(":");
    } else q.path = unescape(q.path);
    if (Y.reference !== "suffix" && q.scheme) z.push(q.scheme, ":");
    let H = J_Y(q);
    if (H !== void 0) {
      if (Y.reference !== "suffix") z.push("//");
      if (z.push(H), q.path && q.path.charAt(0) !== "/") z.push("/");
    }
    if (q.path !== void 0) {
      let J = q.path;
      if (!Y.absolutePath && (!w || !w.absolutePath)) J = TuA(J);
      if (H === void 0) J = J.replace(/^\/\//u, "/%2F");
      z.push(J);
    }
    if (q.query !== void 0) z.push("?", q.query);
    if (q.fragment !== void 0) z.push("#", q.fragment);
    return z.join("");
  }
  var __Y = Array.from({
    length: 127
  }, (A, K) => /[^!"$&'()*+,\-.;=_`a-z{}~]/u.test(String.fromCharCode(K)));
  function G_Y(A) {
    let K = 0;
    for (let q = 0, Y = A.length; q < Y; ++q) if (K = A.charCodeAt(q), K > 126 || __Y[K]) return !0;
    return !1;
  }
  var Z_Y = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function Op(A, K) {
    let q = Object.assign({}, K),
      Y = {
        scheme: void 0,
        userinfo: void 0,
        host: "",
        port: void 0,
        path: "",
        query: void 0,
        fragment: void 0
      },
      z = A.indexOf("%") !== -1,
      w = !1;
    if (q.reference === "suffix") A = (q.scheme ? q.scheme + ":" : "") + "//" + A;
    let H = A.match(Z_Y);
    if (H) {
      if (Y.scheme = H[1], Y.userinfo = H[3], Y.host = H[4], Y.port = parseInt(H[5], 10), Y.path = H[6] || "", Y.query = H[7], Y.fragment = H[8], isNaN(Y.port)) Y.port = H[5];
      if (Y.host) {
        let O = H_Y(Y.host);
        if (O.isIPV4 === !1) {
          let X = w_Y(O.host);
          Y.host = X.host.toLowerCase(), w = X.isIPV6;
        } else Y.host = O.host, w = !0;
      }
      if (Y.scheme === void 0 && Y.userinfo === void 0 && Y.host === void 0 && Y.port === void 0 && Y.query === void 0 && !Y.path) Y.reference = "same-document";else if (Y.scheme === void 0) Y.reference = "relative";else if (Y.fragment === void 0) Y.reference = "absolute";else Y.reference = "uri";
      if (q.reference && q.reference !== "suffix" && q.reference !== Y.reference) Y.error = Y.error || "URI is not a " + q.reference + " reference.";
      let J = QZ6[(q.scheme || Y.scheme || "").toLowerCase()];
      if (!q.unicodeSupport && (!J || !J.unicodeSupport)) {
        if (Y.host && (q.domainHost || J && J.domainHost) && w === !1 && G_Y(Y.host)) try {
          Y.host = URL.domainToASCII(Y.host.toLowerCase());
        } catch (O) {
          Y.error = Y.error || "Host's domain name can not be converted to ASCII: " + O;
        }
      }
      if (!J || J && !J.skipNormalize) {
        if (z && Y.scheme !== void 0) Y.scheme = unescape(Y.scheme);
        if (z && Y.host !== void 0) Y.host = unescape(Y.host);
        if (Y.path) Y.path = escape(unescape(Y.path));
        if (Y.fragment) Y.fragment = encodeURI(decodeURIComponent(Y.fragment));
      }
      if (J && J.parse) J.parse(Y, q);
    } else Y.error = Y.error || "URI can not be parsed.";
    return Y;
  }
  var UZ6 = {
    SCHEMES: QZ6,
    normalize: O_Y,
    resolve: X_Y,
    resolveComponents: Vz7,
    equal: $_Y,
    serialize: Uu,
    parse: Op
  };
  D01.exports = UZ6;
  D01.exports.default = UZ6;
  D01.exports.fastUri = UZ6;
});

// Register to shared state
__$.fz7 = fz7;
