// Module: xv8
// Dependencies: H8, z6A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xv8 = v(bv8 => {
  var {
    _optionalChain: Nb
  } = __$.H8();
  Object.defineProperty(bv8, "__esModule", {
    value: !0
  });
  var Im1 = CA("url"),
    $tq = __$.z6A();
  function _tq(A) {
    let {
        protocol: K,
        hostname: q,
        port: Y
      } = hv8(A),
      z = A.path ? A.path : "/";
    return `${K}//${q}${Y}${z}`;
  }
  function Sv8(A) {
    let {
        protocol: K,
        hostname: q,
        port: Y
      } = hv8(A),
      z = A.pathname || "/",
      w = A.auth ? Gtq(A.auth) : "";
    return `${K}//${w}${q}${Y}${z}`;
  }
  function Gtq(A) {
    let [K, q] = A.split(":");
    return `${K ? "[Filtered]" : ""}:${q ? "[Filtered]" : ""}@`;
  }
  function Ztq(A, K, q) {
    if (!A) return A;
    let [Y, z] = A.split(" ");
    if (K.host && !K.protocol) K.protocol = Nb([q, "optionalAccess", w => w.agent, "optionalAccess", w => w.protocol]), z = Sv8(K);
    if (Nb([z, "optionalAccess", w => w.startsWith, "call", w => w("///")])) z = z.slice(2);
    return `${Y} ${z}`;
  }
  function Sm1(A) {
    let K = {
      protocol: A.protocol,
      hostname: typeof A.hostname === "string" && A.hostname.startsWith("[") ? A.hostname.slice(1, -1) : A.hostname,
      hash: A.hash,
      search: A.search,
      pathname: A.pathname,
      path: `${A.pathname || ""}${A.search || ""}`,
      href: A.href
    };
    if (A.port !== "") K.port = Number(A.port);
    if (A.username || A.password) K.auth = `${A.username}:${A.password}`;
    return K;
  }
  function Wtq(A, K) {
    let q, Y;
    if (typeof K[K.length - 1] === "function") q = K.pop();
    if (typeof K[0] === "string") Y = Sm1(new Im1.URL(K[0]));else if (K[0] instanceof Im1.URL) Y = Sm1(K[0]);else {
      Y = K[0];
      try {
        let z = new Im1.URL(Y.path || "", `${Y.protocol || "http:"}//${Y.hostname}`);
        Y = {
          pathname: z.pathname,
          search: z.search,
          hash: z.hash,
          ...Y
        };
      } catch (z) {}
    }
    if (K.length === 2) Y = {
      ...Y,
      ...K[1]
    };
    if (Y.protocol === void 0) if ($tq.NODE_VERSION.major > 8) Y.protocol = Nb([Nb([A, "optionalAccess", z => z.globalAgent]), "optionalAccess", z => z.protocol]) || Nb([Y.agent, "optionalAccess", z => z.protocol]) || Nb([Y._defaultAgent, "optionalAccess", z => z.protocol]);else Y.protocol = Nb([Y.agent, "optionalAccess", z => z.protocol]) || Nb([Y._defaultAgent, "optionalAccess", z => z.protocol]) || Nb([Nb([A, "optionalAccess", z => z.globalAgent]), "optionalAccess", z => z.protocol]);
    if (q) return [Y, q];else return [Y];
  }
  function hv8(A) {
    let K = A.protocol || "",
      q = A.hostname || A.host || "",
      Y = !A.port || A.port === 80 || A.port === 443 || /^(.*):(\d+)$/.test(q) ? "" : `:${A.port}`;
    return {
      protocol: K,
      hostname: q,
      port: Y
    };
  }
  bv8.cleanSpanDescription = Ztq;
  bv8.extractRawUrl = _tq;
  bv8.extractUrl = Sv8;
  bv8.normalizeRequestArgs = Wtq;
  bv8.urlToOptions = Sm1;
});

// Register to shared state
__$.xv8 = xv8;
