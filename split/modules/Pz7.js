// Module: Pz7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Pz7 = v((KAH, Mz7) => {
  var n$Y = /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu,
    r$Y = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;
  function Zz7(A) {
    return typeof A.secure === "boolean" ? A.secure : String(A.scheme).toLowerCase() === "wss";
  }
  function Wz7(A) {
    if (!A.host) A.error = A.error || "HTTP URIs must have a host.";
    return A;
  }
  function Dz7(A) {
    let K = String(A.scheme).toLowerCase() === "https";
    if (A.port === (K ? 443 : 80) || A.port === "") A.port = void 0;
    if (!A.path) A.path = "/";
    return A;
  }
  function o$Y(A) {
    return A.secure = Zz7(A), A.resourceName = (A.path || "/") + (A.query ? "?" + A.query : ""), A.path = void 0, A.query = void 0, A;
  }
  function a$Y(A) {
    if (A.port === (Zz7(A) ? 443 : 80) || A.port === "") A.port = void 0;
    if (typeof A.secure === "boolean") A.scheme = A.secure ? "wss" : "ws", A.secure = void 0;
    if (A.resourceName) {
      let [K, q] = A.resourceName.split("?");
      A.path = K && K !== "/" ? K : void 0, A.query = q, A.resourceName = void 0;
    }
    return A.fragment = void 0, A;
  }
  function s$Y(A, K) {
    if (!A.path) return A.error = "URN can not be parsed", A;
    let q = A.path.match(r$Y);
    if (q) {
      let Y = K.scheme || A.scheme || "urn";
      A.nid = q[1].toLowerCase(), A.nss = q[2];
      let z = `${Y}:${K.nid || A.nid}`,
        w = FZ6[z];
      if (A.path = void 0, w) A = w.parse(A, K);
    } else A.error = A.error || "URN can not be parsed.";
    return A;
  }
  function t$Y(A, K) {
    let q = K.scheme || A.scheme || "urn",
      Y = A.nid.toLowerCase(),
      z = `${q}:${K.nid || Y}`,
      w = FZ6[z];
    if (w) A = w.serialize(A, K);
    let H = A,
      J = A.nss;
    return H.path = `${Y || K.nid}:${J}`, K.skipEscape = !0, H;
  }
  function e$Y(A, K) {
    let q = A;
    if (q.uuid = q.nss, q.nss = void 0, !K.tolerant && (!q.uuid || !n$Y.test(q.uuid))) q.error = q.error || "UUID is not valid.";
    return q;
  }
  function A_Y(A) {
    let K = A;
    return K.nss = (A.uuid || "").toLowerCase(), K;
  }
  var jz7 = {
      scheme: "http",
      domainHost: !0,
      parse: Wz7,
      serialize: Dz7
    },
    K_Y = {
      scheme: "https",
      domainHost: jz7.domainHost,
      parse: Wz7,
      serialize: Dz7
    },
    Z01 = {
      scheme: "ws",
      domainHost: !0,
      parse: o$Y,
      serialize: a$Y
    },
    q_Y = {
      scheme: "wss",
      domainHost: Z01.domainHost,
      parse: Z01.parse,
      serialize: Z01.serialize
    },
    Y_Y = {
      scheme: "urn",
      parse: s$Y,
      serialize: t$Y,
      skipNormalize: !0
    },
    z_Y = {
      scheme: "urn:uuid",
      parse: e$Y,
      serialize: A_Y,
      skipNormalize: !0
    },
    FZ6 = {
      http: jz7,
      https: K_Y,
      ws: Z01,
      wss: q_Y,
      urn: Y_Y,
      "urn:uuid": z_Y
    };
  Mz7.exports = FZ6;
});

// Register to shared state
__$.Pz7 = Pz7;
