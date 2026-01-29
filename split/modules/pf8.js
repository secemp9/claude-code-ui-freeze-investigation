// Module: pf8
// Dependencies: H8, sq, wV, Gi

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pf8 = v(Uf8 => {
  var {
    _optionalChain: uR
  } = __$.H8();
  Object.defineProperty(Uf8, "__esModule", {
    value: !0
  });
  var Ym1 = __$.sq(),
    HV = __$.H8(),
    _tA = __$.wV(),
    Jiq = __$.Gi();
  class GtA {
    static __initStatic() {
      this.id = "Express";
    }
    constructor(A = {}) {
      this.name = GtA.id, this._router = A.router || A.app, this._methods = (Array.isArray(A.methods) ? A.methods : []).concat("use");
    }
    setupOnce(A, K) {
      if (!this._router) {
        _tA.DEBUG_BUILD && HV.logger.error("ExpressIntegration is missing an Express instance");
        return;
      }
      if (Jiq.shouldDisableAutoInstrumentation(K)) {
        _tA.DEBUG_BUILD && HV.logger.log("Express Integration is skipped because of instrumenter configuration.");
        return;
      }
      $iq(this._router, this._methods), _iq(this._router);
    }
  }
  GtA.__initStatic();
  function gf8(A, K) {
    let q = A.length;
    switch (q) {
      case 2:
        return function (Y, z) {
          let w = z.__sentry_transaction;
          if (w) {
            let H = w.startChild({
              description: A.name,
              op: `middleware.express.${K}`,
              origin: "auto.middleware.express"
            });
            z.once("finish", () => {
              H.end();
            });
          }
          return A.call(this, Y, z);
        };
      case 3:
        return function (Y, z, w) {
          let H = z.__sentry_transaction,
            J = uR([H, "optionalAccess", O => O.startChild, "call", O => O({
              description: A.name,
              op: `middleware.express.${K}`,
              origin: "auto.middleware.express"
            })]);
          A.call(this, Y, z, function (...O) {
            uR([J, "optionalAccess", X => X.end, "call", X => X()]), w.call(this, ...O);
          });
        };
      case 4:
        return function (Y, z, w, H) {
          let J = w.__sentry_transaction,
            O = uR([J, "optionalAccess", X => X.startChild, "call", X => X({
              description: A.name,
              op: `middleware.express.${K}`,
              origin: "auto.middleware.express"
            })]);
          A.call(this, Y, z, w, function (...X) {
            uR([O, "optionalAccess", $ => $.end, "call", $ => $()]), H.call(this, ...X);
          });
        };
      default:
        throw Error(`Express middleware takes 2-4 arguments. Got: ${q}`);
    }
  }
  function Oiq(A, K) {
    return A.map(q => {
      if (typeof q === "function") return gf8(q, K);
      if (Array.isArray(q)) return q.map(Y => {
        if (typeof Y === "function") return gf8(Y, K);
        return Y;
      });
      return q;
    });
  }
  function Xiq(A, K) {
    let q = A[K];
    return A[K] = function (...Y) {
      return q.call(this, ...Oiq(Y, K));
    }, A;
  }
  function $iq(A, K = []) {
    K.forEach(q => Xiq(A, q));
  }
  function _iq(A) {
    let K = "settings" in A;
    if (K && A._router === void 0 && A.lazyrouter) A.lazyrouter();
    let q = K ? A._router : A;
    if (!q) {
      _tA.DEBUG_BUILD && HV.logger.debug("Cannot instrument router for URL Parameterization (did not find a valid router)."), _tA.DEBUG_BUILD && HV.logger.debug("Routing instrumentation is currently only supported in Express 4.");
      return;
    }
    let Y = Object.getPrototypeOf(q),
      z = Y.process_params;
    Y.process_params = function (H, J, O, X, $) {
      if (!O._reconstructedRoute) O._reconstructedRoute = "";
      let {
        layerRoutePath: _,
        isRegex: G,
        isArray: Z,
        numExtraSegments: W
      } = Giq(H);
      if (_ || G || Z) O._hasParameters = !0;
      let D;
      if (_) D = _;else D = Qf8(O.originalUrl, O._reconstructedRoute, H.path) || "";
      let j = D.split("/").filter(f => f.length > 0 && (G || Z || !f.includes("*"))).join("/");
      if (j && j.length > 0) O._reconstructedRoute += `/${j}${G ? "/" : ""}`;
      let M = HV.getNumberOfUrlSegments(HV.stripUrlQueryAndFragment(O.originalUrl || "")) + W,
        P = HV.getNumberOfUrlSegments(O._reconstructedRoute);
      if (M === P) {
        if (!O._hasParameters) {
          if (O._reconstructedRoute !== O.originalUrl) O._reconstructedRoute = O.originalUrl ? HV.stripUrlQueryAndFragment(O.originalUrl) : O.originalUrl;
        }
        let f = X.__sentry_transaction,
          N = f && Ym1.spanToJSON(f).data || {};
        if (f && N[Ym1.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] !== "custom") {
          let T = O._reconstructedRoute || "/",
            [C, R] = HV.extractPathForTransaction(O, {
              path: !0,
              method: !0,
              customRoute: T
            });
          f.updateName(C), f.setAttribute(Ym1.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, R);
        }
      }
      return z.call(this, H, J, O, X, $);
    };
  }
  var Ff8 = (A, K, q) => {
    if (!A || !K || !q || Object.keys(q).length === 0 || uR([q, "access", X => X[0], "optionalAccess", X => X.offset]) === void 0 || uR([q, "access", X => X[0], "optionalAccess", X => X.offset]) === null) return;
    let Y = q.sort((X, $) => X.offset - $.offset),
      w = new RegExp(K, `${K.flags}d`).exec(A);
    if (!w || !w.indices) return;
    let [, ...H] = w.indices;
    if (H.length !== Y.length) return;
    let J = A,
      O = 0;
    return H.forEach((X, $) => {
      if (X) {
        let [_, G] = X,
          Z = J.substring(0, _ - O),
          W = `:${Y[$].name}`,
          D = J.substring(G - O);
        J = Z + W + D, O = O + (G - _ - W.length);
      }
    }), J;
  };
  function Giq(A) {
    let K = uR([A, "access", H => H.route, "optionalAccess", H => H.path]),
      q = HV.isRegExp(K),
      Y = Array.isArray(K);
    if (!K) {
      let [H] = HV.GLOBAL_OBJ.process.versions.node.split(".").map(Number);
      if (H >= 16) K = Ff8(A.path, A.regexp, A.keys);
    }
    if (!K) return {
      isRegex: q,
      isArray: Y,
      numExtraSegments: 0
    };
    let z = Y ? Math.max(Ziq(K) - HV.getNumberOfUrlSegments(A.path || ""), 0) : 0;
    return {
      layerRoutePath: Wiq(Y, K),
      isRegex: q,
      isArray: Y,
      numExtraSegments: z
    };
  }
  function Ziq(A) {
    return A.reduce((K, q) => {
      return K + HV.getNumberOfUrlSegments(q.toString());
    }, 0);
  }
  function Wiq(A, K) {
    if (A) return K.map(q => q.toString()).join(",");
    return K && K.toString();
  }
  function Qf8(A, K, q) {
    let Y = HV.stripUrlQueryAndFragment(A || ""),
      z = uR([Y, "optionalAccess", O => O.split, "call", O => O("/"), "access", O => O.filter, "call", O => O(X => !!X)]),
      w = 0,
      H = uR([K, "optionalAccess", O => O.split, "call", O => O("/"), "access", O => O.filter, "call", O => O(X => !!X), "access", O => O.length]) || 0;
    return uR([q, "optionalAccess", O => O.split, "call", O => O("/"), "access", O => O.filter, "call", O => O(X => {
      if (uR([z, "optionalAccess", $ => $[H + w]]) === X) return w += 1, !0;
      return !1;
    }), "access", O => O.join, "call", O => O("/")]);
  }
  Uf8.Express = GtA;
  Uf8.extractOriginalRoute = Ff8;
  Uf8.preventDuplicateSegments = Qf8;
});

// Register to shared state
__$.pf8 = pf8;
