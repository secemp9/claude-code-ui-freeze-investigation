// Module: P81
// Dependencies: Io1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var P81 = v(xB5 => {
  var yB5 = __$.Io1(),
    IB5 = A => {
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
    SB5 = A => {
      return {
        httpHandler: A.httpHandler()
      };
    };
  class ol8 {
    name;
    kind;
    values;
    constructor({
      name: A,
      kind: K = yB5.FieldPosition.HEADER,
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
  class al8 {
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
  class M81 {
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
      let K = new M81({
        ...A,
        headers: {
          ...A.headers
        }
      });
      if (K.query) K.query = hB5(K.query);
      return K;
    }
    static isInstance(A) {
      if (!A) return !1;
      let K = A;
      return "method" in K && "protocol" in K && "hostname" in K && "path" in K && typeof K.query === "object" && typeof K.headers === "object";
    }
    clone() {
      return M81.clone(this);
    }
  }
  function hB5(A) {
    return Object.keys(A).reduce((K, q) => {
      let Y = A[q];
      return {
        ...K,
        [q]: Array.isArray(Y) ? [...Y] : Y
      };
    }, {});
  }
  class sl8 {
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
  function bB5(A) {
    return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A);
  }
  xB5.Field = ol8;
  xB5.Fields = al8;
  xB5.HttpRequest = M81;
  xB5.HttpResponse = sl8;
  xB5.getHttpHandlerExtensionConfiguration = IB5;
  xB5.isValidHostname = bB5;
  xB5.resolveHttpHandlerRuntimeConfig = SB5;
});

// Register to shared state
__$.P81 = P81;
