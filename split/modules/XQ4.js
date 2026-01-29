// Module: XQ4
// Dependencies: i26

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var XQ4 = v(Ix9 => {
  var kx9 = __$.i26(),
    Cx9 = A => {
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
    },
    Lx9 = A => {
      return {
        httpHandler: A.httpHandler()
      };
    };
  class HQ4 {
    name;
    kind;
    values;
    constructor({
      name: A,
      kind: K = kx9.FieldPosition.HEADER,
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
  }
  class JQ4 {
    entries = {};
    encoding;
    constructor({
      fields: A = [],
      encoding: K = "utf-8"
    }) {
      A.forEach(this.setField.bind(this)), this.encoding = K;
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
  }
  class x21 {
    method;
    protocol;
    hostname;
    port;
    path;
    query;
    headers;
    username;
    password;
    fragment;
    body;
    constructor(A) {
      this.method = A.method || "GET", this.hostname = A.hostname || "localhost", this.port = A.port, this.query = A.query || {}, this.headers = A.headers || {}, this.body = A.body, this.protocol = A.protocol ? A.protocol.slice(-1) !== ":" ? `${A.protocol}:` : A.protocol : "https:", this.path = A.path ? A.path.charAt(0) !== "/" ? `/${A.path}` : A.path : "/", this.username = A.username, this.password = A.password, this.fragment = A.fragment;
    }
    static clone(A) {
      let K = new x21({
        ...A,
        headers: {
          ...A.headers
        }
      });
      if (K.query) K.query = Rx9(K.query);
      return K;
    }
    static isInstance(A) {
      if (!A) return !1;
      let K = A;
      return "method" in K && "protocol" in K && "hostname" in K && "path" in K && typeof K.query === "object" && typeof K.headers === "object";
    }
    clone() {
      return x21.clone(this);
    }
  }
  function Rx9(A) {
    return Object.keys(A).reduce((K, q) => {
      let Y = A[q];
      return {
        ...K,
        [q]: Array.isArray(Y) ? [...Y] : Y
      };
    }, {});
  }
  class OQ4 {
    statusCode;
    reason;
    headers;
    body;
    constructor(A) {
      this.statusCode = A.statusCode, this.reason = A.reason, this.headers = A.headers || {}, this.body = A.body;
    }
    static isInstance(A) {
      if (!A) return !1;
      let K = A;
      return typeof K.statusCode === "number" && typeof K.headers === "object";
    }
  }
  function yx9(A) {
    return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A);
  }
  Ix9.Field = HQ4;
  Ix9.Fields = JQ4;
  Ix9.HttpRequest = x21;
  Ix9.HttpResponse = OQ4;
  Ix9.getHttpHandlerExtensionConfiguration = Cx9;
  Ix9.isValidHostname = yx9;
  Ix9.resolveHttpHandlerRuntimeConfig = Lx9;
});

// Register to shared state
__$.XQ4 = XQ4;
