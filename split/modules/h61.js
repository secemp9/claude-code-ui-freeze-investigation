// Module: h61
// Dependencies: ni1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var h61 = v(xP5 => {
  var yP5 = __$.ni1(),
    IP5 = A => {
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
    SP5 = A => {
      return {
        httpHandler: A.httpHandler()
      };
    };
  class DF8 {
    name;
    kind;
    values;
    constructor({
      name: A,
      kind: K = yP5.FieldPosition.HEADER,
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
  class jF8 {
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
  class S61 {
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
      let K = new S61({
        ...A,
        headers: {
          ...A.headers
        }
      });
      if (K.query) K.query = hP5(K.query);
      return K;
    }
    static isInstance(A) {
      if (!A) return !1;
      let K = A;
      return "method" in K && "protocol" in K && "hostname" in K && "path" in K && typeof K.query === "object" && typeof K.headers === "object";
    }
    clone() {
      return S61.clone(this);
    }
  }
  function hP5(A) {
    return Object.keys(A).reduce((K, q) => {
      let Y = A[q];
      return {
        ...K,
        [q]: Array.isArray(Y) ? [...Y] : Y
      };
    }, {});
  }
  class MF8 {
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
  function bP5(A) {
    return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A);
  }
  xP5.Field = DF8;
  xP5.Fields = jF8;
  xP5.HttpRequest = S61;
  xP5.HttpResponse = MF8;
  xP5.getHttpHandlerExtensionConfiguration = IP5;
  xP5.isValidHostname = bP5;
  xP5.resolveHttpHandlerRuntimeConfig = SP5;
});

// Register to shared state
__$.h61 = h61;
