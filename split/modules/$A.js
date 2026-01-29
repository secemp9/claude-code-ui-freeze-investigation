// Module: $A
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $A = v(Oo3 => {
  var B46 = Symbol.for("react.transitional.element"),
    ir3 = Symbol.for("react.portal"),
    nr3 = Symbol.for("react.fragment"),
    rr3 = Symbol.for("react.strict_mode"),
    or3 = Symbol.for("react.profiler"),
    ar3 = Symbol.for("react.consumer"),
    sr3 = Symbol.for("react.context"),
    tr3 = Symbol.for("react.forward_ref"),
    er3 = Symbol.for("react.suspense"),
    Ao3 = Symbol.for("react.memo"),
    fH4 = Symbol.for("react.lazy"),
    Ko3 = Symbol.for("react.activity"),
    jH4 = Symbol.iterator;
  function qo3(A) {
    if (A === null || typeof A !== "object") return null;
    return A = jH4 && A[jH4] || A["@@iterator"], typeof A === "function" ? A : null;
  }
  var NH4 = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    },
    TH4 = Object.assign,
    vH4 = {};
  function s0A(A, K, q) {
    this.props = A, this.context = K, this.refs = vH4, this.updater = q || NH4;
  }
  s0A.prototype.isReactComponent = {};
  s0A.prototype.setState = function (A, K) {
    if (typeof A !== "object" && typeof A !== "function" && A != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, A, K, "setState");
  };
  s0A.prototype.forceUpdate = function (A) {
    this.updater.enqueueForceUpdate(this, A, "forceUpdate");
  };
  function EH4() {}
  EH4.prototype = s0A.prototype;
  function m46(A, K, q) {
    this.props = A, this.context = K, this.refs = vH4, this.updater = q || NH4;
  }
  var g46 = m46.prototype = new EH4();
  g46.constructor = m46;
  TH4(g46, s0A.prototype);
  g46.isPureReactComponent = !0;
  var MH4 = Array.isArray;
  function u46() {}
  var xH = {
      H: null,
      A: null,
      T: null,
      S: null
    },
    kH4 = Object.prototype.hasOwnProperty;
  function F46(A, K, q) {
    var Y = q.ref;
    return {
      $$typeof: B46,
      type: A,
      key: K,
      ref: Y !== void 0 ? Y : null,
      props: q
    };
  }
  function Yo3(A, K) {
    return F46(A.type, K, A.props);
  }
  function Q46(A) {
    return typeof A === "object" && A !== null && A.$$typeof === B46;
  }
  function zo3(A) {
    var K = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + A.replace(/[=:]/g, function (q) {
      return K[q];
    });
  }
  var PH4 = /\/+/g;
  function x46(A, K) {
    return typeof A === "object" && A !== null && A.key != null ? zo3("" + A.key) : K.toString(36);
  }
  function wo3(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (typeof A.status === "string" ? A.then(u46, u46) : (A.status = "pending", A.then(function (K) {
          A.status === "pending" && (A.status = "fulfilled", A.value = K);
        }, function (K) {
          A.status === "pending" && (A.status = "rejected", A.reason = K);
        })), A.status) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function a0A(A, K, q, Y, z) {
    var w = typeof A;
    if (w === "undefined" || w === "boolean") A = null;
    var H = !1;
    if (A === null) H = !0;else switch (w) {
      case "bigint":
      case "string":
      case "number":
        H = !0;
        break;
      case "object":
        switch (A.$$typeof) {
          case B46:
          case ir3:
            H = !0;
            break;
          case fH4:
            return H = A._init, a0A(H(A._payload), K, q, Y, z);
        }
    }
    if (H) return z = z(A), H = Y === "" ? "." + x46(A, 0) : Y, MH4(z) ? (q = "", H != null && (q = H.replace(PH4, "$&/") + "/"), a0A(z, K, q, "", function (X) {
      return X;
    })) : z != null && (Q46(z) && (z = Yo3(z, q + (z.key == null || A && A.key === z.key ? "" : ("" + z.key).replace(PH4, "$&/") + "/") + H)), K.push(z)), 1;
    H = 0;
    var J = Y === "" ? "." : Y + ":";
    if (MH4(A)) for (var O = 0; O < A.length; O++) Y = A[O], w = J + x46(Y, O), H += a0A(Y, K, q, w, z);else if (O = qo3(A), typeof O === "function") for (A = O.call(A), O = 0; !(Y = A.next()).done;) Y = Y.value, w = J + x46(Y, O++), H += a0A(Y, K, q, w, z);else if (w === "object") {
      if (typeof A.then === "function") return a0A(wo3(A), K, q, Y, z);
      throw K = String(A), Error("Objects are not valid as a React child (found: " + (K === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : K) + "). If you meant to render a collection of children, use an array instead.");
    }
    return H;
  }
  function Pq1(A, K, q) {
    if (A == null) return A;
    var Y = [],
      z = 0;
    return a0A(A, Y, "", "", function (w) {
      return K.call(q, w, z++);
    }), Y;
  }
  function Ho3(A) {
    if (A._status === -1) {
      var K = A._result;
      K = K(), K.then(function (q) {
        if (A._status === 0 || A._status === -1) A._status = 1, A._result = q;
      }, function (q) {
        if (A._status === 0 || A._status === -1) A._status = 2, A._result = q;
      }), A._status === -1 && (A._status = 0, A._result = K);
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var VH4 = typeof reportError === "function" ? reportError : function (A) {
      if (typeof window === "object" && typeof window.ErrorEvent === "function") {
        var K = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof A === "object" && A !== null && typeof A.message === "string" ? String(A.message) : String(A),
          error: A
        });
        if (!window.dispatchEvent(K)) return;
      } else if (typeof process === "object" && typeof process.emit === "function") {
        process.emit("uncaughtException", A);
        return;
      }
      console.error(A);
    },
    Jo3 = {
      map: Pq1,
      forEach: function (A, K, q) {
        Pq1(A, function () {
          K.apply(this, arguments);
        }, q);
      },
      count: function (A) {
        var K = 0;
        return Pq1(A, function () {
          K++;
        }), K;
      },
      toArray: function (A) {
        return Pq1(A, function (K) {
          return K;
        }) || [];
      },
      only: function (A) {
        if (!Q46(A)) throw Error("React.Children.only expected to receive a single React element child.");
        return A;
      }
    };
  Oo3.Activity = Ko3;
  Oo3.Children = Jo3;
  Oo3.Component = s0A;
  Oo3.Fragment = nr3;
  Oo3.Profiler = or3;
  Oo3.PureComponent = m46;
  Oo3.StrictMode = rr3;
  Oo3.Suspense = er3;
  Oo3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = xH;
  Oo3.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function (A) {
      return xH.H.useMemoCache(A);
    }
  };
  Oo3.cache = function (A) {
    return function () {
      return A.apply(null, arguments);
    };
  };
  Oo3.cacheSignal = function () {
    return null;
  };
  Oo3.cloneElement = function (A, K, q) {
    if (A === null || A === void 0) throw Error("The argument must be a React element, but you passed " + A + ".");
    var Y = TH4({}, A.props),
      z = A.key;
    if (K != null) for (w in K.key !== void 0 && (z = "" + K.key), K) !kH4.call(K, w) || w === "key" || w === "__self" || w === "__source" || w === "ref" && K.ref === void 0 || (Y[w] = K[w]);
    var w = arguments.length - 2;
    if (w === 1) Y.children = q;else if (1 < w) {
      for (var H = Array(w), J = 0; J < w; J++) H[J] = arguments[J + 2];
      Y.children = H;
    }
    return F46(A.type, z, Y);
  };
  Oo3.createContext = function (A) {
    return A = {
      $$typeof: sr3,
      _currentValue: A,
      _currentValue2: A,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, A.Provider = A, A.Consumer = {
      $$typeof: ar3,
      _context: A
    }, A;
  };
  Oo3.createElement = function (A, K, q) {
    var Y,
      z = {},
      w = null;
    if (K != null) for (Y in K.key !== void 0 && (w = "" + K.key), K) kH4.call(K, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (z[Y] = K[Y]);
    var H = arguments.length - 2;
    if (H === 1) z.children = q;else if (1 < H) {
      for (var J = Array(H), O = 0; O < H; O++) J[O] = arguments[O + 2];
      z.children = J;
    }
    if (A && A.defaultProps) for (Y in H = A.defaultProps, H) z[Y] === void 0 && (z[Y] = H[Y]);
    return F46(A, w, z);
  };
  Oo3.createRef = function () {
    return {
      current: null
    };
  };
  Oo3.forwardRef = function (A) {
    return {
      $$typeof: tr3,
      render: A
    };
  };
  Oo3.isValidElement = Q46;
  Oo3.lazy = function (A) {
    return {
      $$typeof: fH4,
      _payload: {
        _status: -1,
        _result: A
      },
      _init: Ho3
    };
  };
  Oo3.memo = function (A, K) {
    return {
      $$typeof: Ao3,
      type: A,
      compare: K === void 0 ? null : K
    };
  };
  Oo3.startTransition = function (A) {
    var K = xH.T,
      q = {};
    xH.T = q;
    try {
      var Y = A(),
        z = xH.S;
      z !== null && z(q, Y), typeof Y === "object" && Y !== null && typeof Y.then === "function" && Y.then(u46, VH4);
    } catch (w) {
      VH4(w);
    } finally {
      K !== null && q.types !== null && (K.types = q.types), xH.T = K;
    }
  };
  Oo3.unstable_useCacheRefresh = function () {
    return xH.H.useCacheRefresh();
  };
  Oo3.use = function (A) {
    return xH.H.use(A);
  };
  Oo3.useActionState = function (A, K, q) {
    return xH.H.useActionState(A, K, q);
  };
  Oo3.useCallback = function (A, K) {
    return xH.H.useCallback(A, K);
  };
  Oo3.useContext = function (A) {
    return xH.H.useContext(A);
  };
  Oo3.useDebugValue = function () {};
  Oo3.useDeferredValue = function (A, K) {
    return xH.H.useDeferredValue(A, K);
  };
  Oo3.useEffect = function (A, K) {
    return xH.H.useEffect(A, K);
  };
  Oo3.useEffectEvent = function (A) {
    return xH.H.useEffectEvent(A);
  };
  Oo3.useId = function () {
    return xH.H.useId();
  };
  Oo3.useImperativeHandle = function (A, K, q) {
    return xH.H.useImperativeHandle(A, K, q);
  };
  Oo3.useInsertionEffect = function (A, K) {
    return xH.H.useInsertionEffect(A, K);
  };
  Oo3.useLayoutEffect = function (A, K) {
    return xH.H.useLayoutEffect(A, K);
  };
  Oo3.useMemo = function (A, K) {
    return xH.H.useMemo(A, K);
  };
  Oo3.useOptimistic = function (A, K) {
    return xH.H.useOptimistic(A, K);
  };
  Oo3.useReducer = function (A, K, q) {
    return xH.H.useReducer(A, K, q);
  };
  Oo3.useRef = function (A) {
    return xH.H.useRef(A);
  };
  Oo3.useState = function (A) {
    return xH.H.useState(A);
  };
  Oo3.useSyncExternalStore = function (A, K, q) {
    return xH.H.useSyncExternalStore(A, K, q);
  };
  Oo3.useTransition = function () {
    return xH.H.useTransition();
  };
  Oo3.version = "19.2.0";
});

// Register to shared state
__$.$A = $A;
