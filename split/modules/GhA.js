// Module: GhA
// Dependencies: oy, Oo4, hH6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var GhA = v($o4 => {
  Object.defineProperty($o4, "__esModule", {
    value: !0
  });
  $o4.DefaultTransporter = void 0;
  var ks9 = __$.oy(),
    Cs9 = __$.Oo4(),
    Ls9 = __$.hH6(),
    Xo4 = "google-api-nodejs-client";
  class _hA {
    constructor() {
      this.instance = new ks9.Gaxios();
    }
    configure(A = {}) {
      if (A.headers = A.headers || {}, typeof window > "u") {
        let K = A.headers["User-Agent"];
        if (!K) A.headers["User-Agent"] = _hA.USER_AGENT;else if (!K.includes(`${Xo4}/`)) A.headers["User-Agent"] = `${K} ${_hA.USER_AGENT}`;
        if (!A.headers["x-goog-api-client"]) {
          let q = process.version.replace(/^v/, "");
          A.headers["x-goog-api-client"] = `gl-node/${q}`;
        }
      }
      return A;
    }
    request(A) {
      return A = this.configure(A), (0, Cs9.validate)(A), this.instance.request(A).catch(K => {
        throw this.processError(K);
      });
    }
    get defaults() {
      return this.instance.defaults;
    }
    set defaults(A) {
      this.instance.defaults = A;
    }
    processError(A) {
      let K = A.response,
        q = A,
        Y = K ? K.data : null;
      if (K && Y && Y.error && K.status !== 200) {
        if (typeof Y.error === "string") q.message = Y.error, q.status = K.status;else if (Array.isArray(Y.error.errors)) q.message = Y.error.errors.map(z => z.message).join(`
`), q.code = Y.error.code, q.errors = Y.error.errors;else q.message = Y.error.message, q.code = Y.error.code;
      } else if (K && K.status >= 400) q.message = Y, q.status = K.status;
      return q;
    }
  }
  $o4.DefaultTransporter = _hA;
  _hA.USER_AGENT = `${Xo4}/${Ls9.version}`;
});

// Register to shared state
__$.GhA = GhA;
