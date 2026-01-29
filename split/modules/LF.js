// Module: LF
// Dependencies: NF, C6A, hp1, rj, yb, lp1, CkA, PA1, _d1, Vd1
//   ... and 30 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var LF = k(() => {
  __$.NF();
  __$.C6A();
  __$.hp1();
  __$.rj();
  __$.yb();
  __$.lp1();
  __$.CkA();
  __$.PA1();
  __$._d1();
  __$.Vd1();
  __$.$d1();
  __$.Pd1();
  __$.hp1();
  __$.UE();
  __$.jA1();
  __$.C6A();
  __$.Nd1 = __$.$z, __$.QA1 = new WeakMap(), __$.fd1 = new WeakSet(), __$.hy8 = function () {
    return this.baseURL !== "https://api.anthropic.com";
  };
  __$.$z.Anthropic = __$.Nd1;
  __$.$z.HUMAN_PROMPT = __$.by8;
  __$.$z.AI_PROMPT = __$.xy8;
  __$.$z.DEFAULT_TIMEOUT = 600000;
  __$.$z.AnthropicError = __$.O7;
  __$.$z.APIError = __$.r7;
  __$.$z.APIConnectionError = __$.nj;
  __$.$z.APIConnectionTimeoutError = __$.Rb;
  __$.$z.APIUserAbortError = __$.h2;
  __$.$z.NotFoundError = __$.k6A;
  __$.$z.ConflictError = __$.oEA;
  __$.$z.RateLimitError = __$.sEA;
  __$.$z.BadRequestError = __$.nEA;
  __$.$z.AuthenticationError = __$.E6A;
  __$.$z.InternalServerError = __$.tEA;
  __$.$z.PermissionDeniedError = __$.rEA;
  __$.$z.UnprocessableEntityError = __$.aEA;
  __$.$z.toFile = __$.NA1;
  __$.pR = class pR extends __$.$z {
    constructor() {
      super(...arguments);
      this.completions = new __$.Ii(this), this.messages = new __$.aN(this), this.models = new __$.wJA(this), this.beta = new __$.$D(this);
    }
  };
  __$.pR.Completions = __$.Ii;
  __$.pR.Messages = __$.aN;
  __$.pR.Models = __$.wJA;
  __$.pR.Beta = __$.$D;
});

// Register to shared state
__$.LF = LF;
