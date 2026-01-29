// Module: $vA
// Dependencies: SE, gu1, hE, OsA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $vA = v(pD8 => {
  Object.defineProperty(pD8, "__esModule", {
    value: !0
  });
  var Fu1 = __$.SE(),
    oRq = __$.gu1(),
    aRq = __$.hE(),
    sRq = __$.OsA();
  function QD8(A, K = 100, q = 1 / 0) {
    try {
      return TsA("", A, K, q);
    } catch (Y) {
      return {
        ERROR: `**non-serializable** (${Y})`
      };
    }
  }
  function UD8(A, K = 3, q = 102400) {
    let Y = QD8(A, K);
    if (Kyq(Y) > q) return UD8(A, K - 1, q);
    return Y;
  }
  function TsA(A, K, q = 1 / 0, Y = 1 / 0, z = oRq.memoBuilder()) {
    let [w, H] = z;
    if (K == null || ["number", "boolean", "string"].includes(typeof K) && !Fu1.isNaN(K)) return K;
    let J = tRq(A, K);
    if (!J.startsWith("[object ")) return J;
    if (K.__sentry_skip_normalization__) return K;
    let O = typeof K.__sentry_override_normalization_depth__ === "number" ? K.__sentry_override_normalization_depth__ : q;
    if (O === 0) return J.replace("object ", "");
    if (w(K)) return "[Circular ~]";
    let X = K;
    if (X && typeof X.toJSON === "function") try {
      let Z = X.toJSON();
      return TsA("", Z, O - 1, Y, z);
    } catch (Z) {}
    let $ = Array.isArray(K) ? [] : {},
      _ = 0,
      G = aRq.convertToPlainObject(K);
    for (let Z in G) {
      if (!Object.prototype.hasOwnProperty.call(G, Z)) continue;
      if (_ >= Y) {
        $[Z] = "[MaxProperties ~]";
        break;
      }
      let W = G[Z];
      $[Z] = TsA(Z, W, O - 1, Y, z), _++;
    }
    return H(K), $;
  }
  function tRq(A, K) {
    try {
      if (A === "domain" && K && typeof K === "object" && K._events) return "[Domain]";
      if (A === "domainEmitter") return "[DomainEmitter]";
      if (typeof global < "u" && K === global) return "[Global]";
      if (typeof window < "u" && K === window) return "[Window]";
      if (typeof document < "u" && K === document) return "[Document]";
      if (Fu1.isVueViewModel(K)) return "[VueViewModel]";
      if (Fu1.isSyntheticEvent(K)) return "[SyntheticEvent]";
      if (typeof K === "number" && K !== K) return "[NaN]";
      if (typeof K === "function") return `[Function: ${sRq.getFunctionName(K)}]`;
      if (typeof K === "symbol") return `[${String(K)}]`;
      if (typeof K === "bigint") return `[BigInt: ${String(K)}]`;
      let q = eRq(K);
      if (/^HTML(\w*)Element$/.test(q)) return `[HTMLElement: ${q}]`;
      return `[object ${q}]`;
    } catch (q) {
      return `**non-serializable** (${q})`;
    }
  }
  function eRq(A) {
    let K = Object.getPrototypeOf(A);
    return K ? K.constructor.name : "null prototype";
  }
  function Ayq(A) {
    return ~-encodeURI(A).split(/%..|./).length;
  }
  function Kyq(A) {
    return Ayq(JSON.stringify(A));
  }
  function qyq(A, K) {
    let q = K.replace(/\\/g, "/").replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"),
      Y = A;
    try {
      Y = decodeURI(A);
    } catch (z) {}
    return Y.replace(/\\/g, "/").replace(/webpack:\/?/g, "").replace(new RegExp(`(file://)?/*${q}/*`, "ig"), "app:///");
  }
  pD8.normalize = QD8;
  pD8.normalizeToSize = UD8;
  pD8.normalizeUrlToBase = qyq;
  pD8.walk = TsA;
});

// Register to shared state
__$.$vA = $vA;
