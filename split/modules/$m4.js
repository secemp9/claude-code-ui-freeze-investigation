// Module: $m4
// Dependencies: zm4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $m4 = v((gPw, Xm4) => {
  var {
      defineProperty: $21,
      getOwnPropertyDescriptor: Vy9,
      getOwnPropertyNames: fy9
    } = Object,
    Ny9 = Object.prototype.hasOwnProperty,
    sr = (A, K) => $21(A, "name", {
      value: K,
      configurable: !0
    }),
    Ty9 = (A, K) => {
      for (var q in K) $21(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    vy9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of fy9(K)) if (!Ny9.call(A, z) && z !== q) $21(A, z, {
          get: () => K[z],
          enumerable: !(Y = Vy9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    Ey9 = A => vy9($21({}, "__esModule", {
      value: !0
    }), A),
    wm4 = {};
  Ty9(wm4, {
    Field: () => Ly9,
    Fields: () => Ry9,
    HttpRequest: () => yy9,
    HttpResponse: () => Iy9,
    IHttpRequest: () => Hm4.HttpRequest,
    getHttpHandlerExtensionConfiguration: () => ky9,
    isValidHostname: () => Om4,
    resolveHttpHandlerRuntimeConfig: () => Cy9
  });
  Xm4.exports = Ey9(wm4);
  var ky9 = sr(A => {
      return {
        setHttpHandler(K) {
          A.httpHandler = K;
        },
        httpHandler() {
          return A.httpHandler;
        },
        updateHttpClientConfig(K, q) {
          A.httpHandler?.updateHttpClientConfig(K, q);
        },
        httpHandlerConfigs() {
          return A.httpHandler.httpHandlerConfigs();
        }
      };
    }, "getHttpHandlerExtensionConfiguration"),
    Cy9 = sr(A => {
      return {
        httpHandler: A.httpHandler()
      };
    }, "resolveHttpHandlerRuntimeConfig"),
    Hm4 = __$.zm4(),
    Ly9 = class {
      static {
        sr(this, "Field");
      }
      constructor({
        name: A,
        kind: K = Hm4.FieldPosition.HEADER,
        values: q = []
      }) {
        this.name = A, this.kind = K, this.values = q;
      }
      add(A) {
        this.values.push(A);
      }
      set(A) {
        this.values = A;
      }
      remove(A) {
        this.values = this.values.filter(K => K !== A);
      }
      toString() {
        return this.values.map(A => A.includes(",") || A.includes(" ") ? `"${A}"` : A).join(", ");
      }
      get() {
        return this.values;
      }
    },
    Ry9 = class {
      constructor({
        fields: A = [],
        encoding: K = "utf-8"
      }) {
        this.entries = {}, A.forEach(this.setField.bind(this)), this.encoding = K;
      }
      static {
        sr(this, "Fields");
      }
      setField(A) {
        this.entries[A.name.toLowerCase()] = A;
      }
      getField(A) {
        return this.entries[A.toLowerCase()];
      }
      removeField(A) {
        delete this.entries[A.toLowerCase()];
      }
      getByType(A) {
        return Object.values(this.entries).filter(K => K.kind === A);
      }
    },
    yy9 = class A {
      static {
        sr(this, "HttpRequest");
      }
      constructor(K) {
        this.method = K.method || "GET", this.hostname = K.hostname || "localhost", this.port = K.port, this.query = K.query || {}, this.headers = K.headers || {}, this.body = K.body, this.protocol = K.protocol ? K.protocol.slice(-1) !== ":" ? `${K.protocol}:` : K.protocol : "https:", this.path = K.path ? K.path.charAt(0) !== "/" ? `/${K.path}` : K.path : "/", this.username = K.username, this.password = K.password, this.fragment = K.fragment;
      }
      static clone(K) {
        let q = new A({
          ...K,
          headers: {
            ...K.headers
          }
        });
        if (q.query) q.query = Jm4(q.query);
        return q;
      }
      static isInstance(K) {
        if (!K) return !1;
        let q = K;
        return "method" in q && "protocol" in q && "hostname" in q && "path" in q && typeof q.query === "object" && typeof q.headers === "object";
      }
      clone() {
        return A.clone(this);
      }
    };
  function Jm4(A) {
    return Object.keys(A).reduce((K, q) => {
      let Y = A[q];
      return {
        ...K,
        [q]: Array.isArray(Y) ? [...Y] : Y
      };
    }, {});
  }
  sr(Jm4, "cloneQuery");
  var Iy9 = class {
    static {
      sr(this, "HttpResponse");
    }
    constructor(A) {
      this.statusCode = A.statusCode, this.reason = A.reason, this.headers = A.headers || {}, this.body = A.body;
    }
    static isInstance(A) {
      if (!A) return !1;
      let K = A;
      return typeof K.statusCode === "number" && typeof K.headers === "object";
    }
  };
  function Om4(A) {
    return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A);
  }
  sr(Om4, "isValidHostname");
});

// Register to shared state
__$.$m4 = $m4;
