// Module: PA1
// Dependencies: NF, Fp1, L6A, MA1, YkA, _7, x6, gp1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var PA1 = k(() => {
  __$.NF();
  __$.Fp1();
  __$.L6A = class L6A extends Promise {
    constructor(A, K, q = __$.MA1) {
      super(Y => {
        Y(null);
      });
      this.responsePromise = K, this.parseResponse = q, __$.YkA.set(this, void 0), __$._7(this, __$.YkA, A, "f");
    }
    _thenUnwrap(A) {
      return new __$.L6A(__$.x6(this, __$.YkA, "f"), this.responsePromise, async (K, q) => __$.gp1(A(await this.parseResponse(K, q), q), q.response));
    }
    asResponse() {
      return this.responsePromise.then(A => A.response);
    }
    async withResponse() {
      let [A, K] = await Promise.all([this.parse(), this.asResponse()]);
      return {
        data: A,
        response: K,
        request_id: K.headers.get("request-id")
      };
    }
    parse() {
      if (!this.parsedPromise) this.parsedPromise = this.responsePromise.then(A => this.parseResponse(__$.x6(this, __$.YkA, "f"), A));
      return this.parsedPromise;
    }
    then(A, K) {
      return this.parse().then(A, K);
    }
    catch(A) {
      return this.parse().catch(A);
    }
    finally(A) {
      return this.parse().finally(A);
    }
  };
  __$.YkA = new WeakMap();
});

// Register to shared state
__$.PA1 = PA1;
