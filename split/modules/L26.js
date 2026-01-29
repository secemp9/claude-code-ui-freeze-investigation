// Module: L26
// Dependencies: C26

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var L26 = v((sPw, tm4) => {
  var {
      defineProperty: P21,
      getOwnPropertyDescriptor: hI9,
      getOwnPropertyNames: bI9
    } = Object,
    xI9 = Object.prototype.hasOwnProperty,
    tr = (A, K) => P21(A, "name", {
      value: K,
      configurable: !0
    }),
    uI9 = (A, K) => {
      for (var q in K) P21(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    BI9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of bI9(K)) if (!xI9.call(A, z) && z !== q) P21(A, z, {
          get: () => K[z],
          enumerable: !(Y = hI9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    mI9 = A => BI9(P21({}, "__esModule", {
      value: !0
    }), A),
    lm4 = {};
  uI9(lm4, {
    Field: () => UI9,
    Fields: () => pI9,
    HttpRequest: () => dI9,
    HttpResponse: () => cI9,
    getHttpHandlerExtensionConfiguration: () => gI9,
    isValidHostname: () => sm4,
    resolveHttpHandlerRuntimeConfig: () => FI9
  });
  tm4.exports = mI9(lm4);
  var gI9 = tr(A => {
      let K = A.httpHandler;
      return {
        setHttpHandler(q) {
          K = q;
        },
        httpHandler() {
          return K;
        },
        updateHttpClientConfig(q, Y) {
          K.updateHttpClientConfig(q, Y);
        },
        httpHandlerConfigs() {
          return K.httpHandlerConfigs();
        }
      };
    }, "getHttpHandlerExtensionConfiguration"),
    FI9 = tr(A => {
      return {
        httpHandler: A.httpHandler()
      };
    }, "resolveHttpHandlerRuntimeConfig"),
    QI9 = __$.C26(),
    im4 = class {
      constructor({
        name: K,
        kind: q = QI9.FieldPosition.HEADER,
        values: Y = []
      }) {
        this.name = K, this.kind = q, this.values = Y;
      }
      add(K) {
        this.values.push(K);
      }
      set(K) {
        this.values = K;
      }
      remove(K) {
        this.values = this.values.filter(q => q !== K);
      }
      toString() {
        return this.values.map(K => K.includes(",") || K.includes(" ") ? `"${K}"` : K).join(", ");
      }
      get() {
        return this.values;
      }
    };
  tr(im4, "Field");
  var UI9 = im4,
    nm4 = class {
      constructor({
        fields: K = [],
        encoding: q = "utf-8"
      }) {
        this.entries = {}, K.forEach(this.setField.bind(this)), this.encoding = q;
      }
      setField(K) {
        this.entries[K.name.toLowerCase()] = K;
      }
      getField(K) {
        return this.entries[K.toLowerCase()];
      }
      removeField(K) {
        delete this.entries[K.toLowerCase()];
      }
      getByType(K) {
        return Object.values(this.entries).filter(q => q.kind === K);
      }
    };
  tr(nm4, "Fields");
  var pI9 = nm4,
    rm4 = class A {
      constructor(K) {
        this.method = K.method || "GET", this.hostname = K.hostname || "localhost", this.port = K.port, this.query = K.query || {}, this.headers = K.headers || {}, this.body = K.body, this.protocol = K.protocol ? K.protocol.slice(-1) !== ":" ? `${K.protocol}:` : K.protocol : "https:", this.path = K.path ? K.path.charAt(0) !== "/" ? `/${K.path}` : K.path : "/", this.username = K.username, this.password = K.password, this.fragment = K.fragment;
      }
      static isInstance(K) {
        if (!K) return !1;
        let q = K;
        return "method" in q && "protocol" in q && "hostname" in q && "path" in q && typeof q.query === "object" && typeof q.headers === "object";
      }
      clone() {
        let K = new A({
          ...this,
          headers: {
            ...this.headers
          }
        });
        if (K.query) K.query = om4(K.query);
        return K;
      }
    };
  tr(rm4, "HttpRequest");
  var dI9 = rm4;
  function om4(A) {
    return Object.keys(A).reduce((K, q) => {
      let Y = A[q];
      return {
        ...K,
        [q]: Array.isArray(Y) ? [...Y] : Y
      };
    }, {});
  }
  tr(om4, "cloneQuery");
  var am4 = class {
    constructor(K) {
      this.statusCode = K.statusCode, this.reason = K.reason, this.headers = K.headers || {}, this.body = K.body;
    }
    static isInstance(K) {
      if (!K) return !1;
      let q = K;
      return typeof q.statusCode === "number" && typeof q.headers === "object";
    }
  };
  tr(am4, "HttpResponse");
  var cI9 = am4;
  function sm4(A) {
    return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A);
  }
  tr(sm4, "isValidHostname");
});

// Register to shared state
__$.L26 = L26;
