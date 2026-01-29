// Module: ir4
// Dependencies: Qr4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ir4 = v(rz => {
  var ba9 = rz && rz.__createBinding || (Object.create ? function (A, K, q, Y) {
      if (Y === void 0) Y = q;
      var z = Object.getOwnPropertyDescriptor(K, q);
      if (!z || ("get" in z ? !K.__esModule : z.writable || z.configurable)) z = {
        enumerable: !0,
        get: function () {
          return K[q];
        }
      };
      Object.defineProperty(A, Y, z);
    } : function (A, K, q, Y) {
      if (Y === void 0) Y = q;
      A[Y] = K[q];
    }),
    xa9 = rz && rz.__setModuleDefault || (Object.create ? function (A, K) {
      Object.defineProperty(A, "default", {
        enumerable: !0,
        value: K
      });
    } : function (A, K) {
      A.default = K;
    }),
    Ur4 = rz && rz.__importStar || function (A) {
      if (A && A.__esModule) return A;
      var K = {};
      if (A != null) {
        for (var q in A) if (q !== "default" && Object.prototype.hasOwnProperty.call(A, q)) ba9(K, A, q);
      }
      return xa9(K, A), K;
    };
  Object.defineProperty(rz, "__esModule", {
    value: !0
  });
  rz.env = rz.DebugLogBackendBase = rz.placeholder = rz.AdhocDebugLogger = rz.LogSeverity = void 0;
  rz.getNodeBackend = vH6;
  rz.getDebugBackend = Ba9;
  rz.getStructuredBackend = ma9;
  rz.setBackend = ga9;
  rz.log = lr4;
  var ua9 = CA("node:events"),
    JhA = Ur4(CA("node:process")),
    pr4 = Ur4(CA("node:util")),
    BT = __$.Qr4(),
    ay;
  (function (A) {
    A.DEFAULT = "DEFAULT", A.DEBUG = "DEBUG", A.INFO = "INFO", A.WARNING = "WARNING", A.ERROR = "ERROR";
  })(ay || (rz.LogSeverity = ay = {}));
  class rz1 extends ua9.EventEmitter {
    constructor(A, K) {
      super();
      this.namespace = A, this.upstream = K, this.func = Object.assign(this.invoke.bind(this), {
        instance: this,
        on: (q, Y) => this.on(q, Y)
      }), this.func.debug = (...q) => this.invokeSeverity(ay.DEBUG, ...q), this.func.info = (...q) => this.invokeSeverity(ay.INFO, ...q), this.func.warn = (...q) => this.invokeSeverity(ay.WARNING, ...q), this.func.error = (...q) => this.invokeSeverity(ay.ERROR, ...q), this.func.sublog = q => lr4(q, this.func);
    }
    invoke(A, ...K) {
      if (this.upstream) this.upstream(A, ...K);
      this.emit("log", A, K);
    }
    invokeSeverity(A, ...K) {
      this.invoke({
        severity: A
      }, ...K);
    }
  }
  rz.AdhocDebugLogger = rz1;
  rz.placeholder = new rz1("", () => {}).func;
  class OhA {
    constructor() {
      var A;
      this.cached = new Map(), this.filters = [], this.filtersSet = !1;
      let K = (A = JhA.env[rz.env.nodeEnables]) !== null && A !== void 0 ? A : "*";
      if (K === "all") K = "*";
      this.filters = K.split(",");
    }
    log(A, K, ...q) {
      try {
        if (!this.filtersSet) this.setFilters(), this.filtersSet = !0;
        let Y = this.cached.get(A);
        if (!Y) Y = this.makeLogger(A), this.cached.set(A, Y);
        Y(K, ...q);
      } catch (Y) {
        console.error(Y);
      }
    }
  }
  rz.DebugLogBackendBase = OhA;
  class kH6 extends OhA {
    constructor() {
      super(...arguments);
      this.enabledRegexp = /.*/g;
    }
    isEnabled(A) {
      return this.enabledRegexp.test(A);
    }
    makeLogger(A) {
      if (!this.enabledRegexp.test(A)) return () => {};
      return (K, ...q) => {
        var Y;
        let z = `${BT.Colours.green}${A}${BT.Colours.reset}`,
          w = `${BT.Colours.yellow}${JhA.pid}${BT.Colours.reset}`,
          H;
        switch (K.severity) {
          case ay.ERROR:
            H = `${BT.Colours.red}${K.severity}${BT.Colours.reset}`;
            break;
          case ay.INFO:
            H = `${BT.Colours.magenta}${K.severity}${BT.Colours.reset}`;
            break;
          case ay.WARNING:
            H = `${BT.Colours.yellow}${K.severity}${BT.Colours.reset}`;
            break;
          default:
            H = (Y = K.severity) !== null && Y !== void 0 ? Y : ay.DEFAULT;
            break;
        }
        let J = pr4.formatWithOptions({
            colors: BT.Colours.enabled
          }, ...q),
          O = Object.assign({}, K);
        delete O.severity;
        let X = Object.getOwnPropertyNames(O).length ? JSON.stringify(O) : "",
          $ = X ? `${BT.Colours.grey}${X}${BT.Colours.reset}` : "";
        console.error("%s [%s|%s] %s%s", w, z, H, J, X ? ` ${$}` : "");
      };
    }
    setFilters() {
      let K = this.filters.join(",").replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^");
      this.enabledRegexp = new RegExp(`^${K}$`, "i");
    }
  }
  function vH6() {
    return new kH6();
  }
  class dr4 extends OhA {
    constructor(A) {
      super();
      this.debugPkg = A;
    }
    makeLogger(A) {
      let K = this.debugPkg(A);
      return (q, ...Y) => {
        K(Y[0], ...Y.slice(1));
      };
    }
    setFilters() {
      var A;
      let K = (A = JhA.env.NODE_DEBUG) !== null && A !== void 0 ? A : "";
      JhA.env.NODE_DEBUG = `${K}${K ? "," : ""}${this.filters.join(",")}`;
    }
  }
  function Ba9(A) {
    return new dr4(A);
  }
  class cr4 extends OhA {
    constructor(A) {
      var K;
      super();
      this.upstream = (K = A) !== null && K !== void 0 ? K : new kH6();
    }
    makeLogger(A) {
      let K = this.upstream.makeLogger(A);
      return (q, ...Y) => {
        var z;
        let w = (z = q.severity) !== null && z !== void 0 ? z : ay.INFO,
          H = Object.assign({
            severity: w,
            message: pr4.format(...Y)
          }, q),
          J = JSON.stringify(H);
        K(q, J);
      };
    }
    setFilters() {
      this.upstream.setFilters();
    }
  }
  function ma9(A) {
    return new cr4(A);
  }
  rz.env = {
    nodeEnables: "GOOGLE_SDK_NODE_LOGGING"
  };
  var EH6 = new Map(),
    $C = void 0;
  function ga9(A) {
    $C = A, EH6.clear();
  }
  function lr4(A, K) {
    if (!JhA.env[rz.env.nodeEnables]) return rz.placeholder;
    if (!A) return rz.placeholder;
    if (K) A = `${K.instance.namespace}:${A}`;
    let Y = EH6.get(A);
    if (Y) return Y.func;
    if ($C === null) return rz.placeholder;else if ($C === void 0) $C = vH6();
    let z = (() => {
      let w = void 0;
      return new rz1(A, (J, ...O) => {
        if (w !== $C) {
          if ($C === null) return;else if ($C === void 0) $C = vH6();
          w = $C;
        }
        $C === null || $C === void 0 || $C.log(A, J, ...O);
      });
    })();
    return EH6.set(A, z), z.func;
  }
});

// Register to shared state
__$.ir4 = ir4;
