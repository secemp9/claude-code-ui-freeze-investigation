// Module: F86
// Dependencies: BRA, S0A, _2, j9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var F86 = v((Zd3, g86) => {
  var {
      getResponseData: $d3,
      buildKey: _d3,
      addMockDispatch: x86
    } = __$.BRA(),
    {
      kDispatches: EK1,
      kDispatchKey: kK1,
      kDefaultHeaders: u86,
      kDefaultTrailers: B86,
      kContentLength: m86,
      kMockDispatch: CK1
    } = __$.S0A(),
    {
      InvalidArgumentError: Vx
    } = __$._2(),
    {
      buildURL: Gd3
    } = __$.j9();
  class mRA {
    constructor(A) {
      this[CK1] = A;
    }
    delay(A) {
      if (typeof A !== "number" || !Number.isInteger(A) || A <= 0) throw new Vx("waitInMs must be a valid integer > 0");
      return this[CK1].delay = A, this;
    }
    persist() {
      return this[CK1].persist = !0, this;
    }
    times(A) {
      if (typeof A !== "number" || !Number.isInteger(A) || A <= 0) throw new Vx("repeatTimes must be a valid integer > 0");
      return this[CK1].times = A, this;
    }
  }
  class MY4 {
    constructor(A, K) {
      if (typeof A !== "object") throw new Vx("opts must be an object");
      if (typeof A.path > "u") throw new Vx("opts.path must be defined");
      if (typeof A.method > "u") A.method = "GET";
      if (typeof A.path === "string") if (A.query) A.path = Gd3(A.path, A.query);else {
        let q = new URL(A.path, "data://");
        A.path = q.pathname + q.search;
      }
      if (typeof A.method === "string") A.method = A.method.toUpperCase();
      this[kK1] = _d3(A), this[EK1] = K, this[u86] = {}, this[B86] = {}, this[m86] = !1;
    }
    createMockScopeDispatchData({
      statusCode: A,
      data: K,
      responseOptions: q
    }) {
      let Y = $d3(K),
        z = this[m86] ? {
          "content-length": Y.length
        } : {},
        w = {
          ...this[u86],
          ...z,
          ...q.headers
        },
        H = {
          ...this[B86],
          ...q.trailers
        };
      return {
        statusCode: A,
        data: K,
        headers: w,
        trailers: H
      };
    }
    validateReplyParameters(A) {
      if (typeof A.statusCode > "u") throw new Vx("statusCode must be defined");
      if (typeof A.responseOptions !== "object" || A.responseOptions === null) throw new Vx("responseOptions must be an object");
    }
    reply(A) {
      if (typeof A === "function") {
        let z = H => {
            let J = A(H);
            if (typeof J !== "object" || J === null) throw new Vx("reply options callback must return an object");
            let O = {
              data: "",
              responseOptions: {},
              ...J
            };
            return this.validateReplyParameters(O), {
              ...this.createMockScopeDispatchData(O)
            };
          },
          w = x86(this[EK1], this[kK1], z);
        return new mRA(w);
      }
      let K = {
        statusCode: A,
        data: arguments[1] === void 0 ? "" : arguments[1],
        responseOptions: arguments[2] === void 0 ? {} : arguments[2]
      };
      this.validateReplyParameters(K);
      let q = this.createMockScopeDispatchData(K),
        Y = x86(this[EK1], this[kK1], q);
      return new mRA(Y);
    }
    replyWithError(A) {
      if (typeof A > "u") throw new Vx("error must be defined");
      let K = x86(this[EK1], this[kK1], {
        error: A
      });
      return new mRA(K);
    }
    defaultReplyHeaders(A) {
      if (typeof A > "u") throw new Vx("headers must be defined");
      return this[u86] = A, this;
    }
    defaultReplyTrailers(A) {
      if (typeof A > "u") throw new Vx("trailers must be defined");
      return this[B86] = A, this;
    }
    replyContentLength() {
      return this[m86] = !0, this;
    }
  }
  Zd3.MockInterceptor = MY4;
  Zd3.MockScope = mRA;
});

// Register to shared state
__$.F86 = F86;
