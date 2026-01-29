// Module: rj
// Dependencies: O7, r7, nj, iEA, nEA, E6A, rEA, k6A, oEA, aEA
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rj = k(() => {
  __$.O7 = class O7 extends Error {};
  __$.r7 = class r7 extends __$.O7 {
    constructor(A, K, q, Y) {
      super(`${__$.r7.makeMessage(A, K, q)}`);
      this.status = A, this.headers = Y, this.requestID = Y?.get("request-id"), this.error = K;
    }
    static makeMessage(A, K, q) {
      let Y = K?.message ? typeof K.message === "string" ? K.message : JSON.stringify(K.message) : K ? JSON.stringify(K) : q;
      if (A && Y) return `${A} ${Y}`;
      if (A) return `${A} status code (no body)`;
      if (Y) return Y;
      return "(no status code or body)";
    }
    static generate(A, K, q, Y) {
      if (!A || !Y) return new __$.nj({
        message: q,
        cause: __$.iEA(K)
      });
      let z = K;
      if (A === 400) return new __$.nEA(A, z, q, Y);
      if (A === 401) return new __$.E6A(A, z, q, Y);
      if (A === 403) return new __$.rEA(A, z, q, Y);
      if (A === 404) return new __$.k6A(A, z, q, Y);
      if (A === 409) return new __$.oEA(A, z, q, Y);
      if (A === 422) return new __$.aEA(A, z, q, Y);
      if (A === 429) return new __$.sEA(A, z, q, Y);
      if (A >= 500) return new __$.tEA(A, z, q, Y);
      return new __$.r7(A, z, q, Y);
    }
  };
  __$.h2 = class h2 extends __$.r7 {
    constructor({
      message: A
    } = {}) {
      super(void 0, void 0, A || "Request was aborted.", void 0);
    }
  };
  __$.nj = class nj extends __$.r7 {
    constructor({
      message: A,
      cause: K
    }) {
      super(void 0, void 0, A || "Connection error.", void 0);
      if (K) this.cause = K;
    }
  };
  __$.Rb = class Rb extends __$.nj {
    constructor({
      message: A
    } = {}) {
      super({
        message: A ?? "Request timed out."
      });
    }
  };
  __$.nEA = class nEA extends __$.r7 {};
  __$.E6A = class E6A extends __$.r7 {};
  __$.rEA = class rEA extends __$.r7 {};
  __$.k6A = class k6A extends __$.r7 {};
  __$.oEA = class oEA extends __$.r7 {};
  __$.aEA = class aEA extends __$.r7 {};
  __$.sEA = class sEA extends __$.r7 {};
  __$.tEA = class tEA extends __$.r7 {};
});

// Register to shared state
__$.rj = rj;
