// Module: yb
// Dependencies: NF, rj, Fp1, PA1, C6A, Qp1, VA1, _7, O7, x6
//   ... and 6 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yb = k(() => {
  __$.NF();
  __$.rj();
  __$.Fp1();
  __$.PA1();
  __$.C6A();
  __$.Qp1 = class Qp1 {
    constructor(A, K, q, Y) {
      __$.VA1.set(this, void 0), __$._7(this, __$.VA1, A, "f"), this.options = Y, this.response = K, this.body = q;
    }
    hasNextPage() {
      if (!this.getPaginatedItems().length) return !1;
      return this.nextPageRequestOptions() != null;
    }
    async getNextPage() {
      let A = this.nextPageRequestOptions();
      if (!A) throw new __$.O7("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");
      return await __$.x6(this, __$.VA1, "f").requestAPIList(this.constructor, A);
    }
    async *iterPages() {
      let A = this;
      yield A;
      while (A.hasNextPage()) A = await A.getNextPage(), yield A;
    }
    async *[(__$.VA1 = new WeakMap(), Symbol.asyncIterator)]() {
      for await (let A of this.iterPages()) for (let K of A.getPaginatedItems()) yield K;
    }
  };
  __$.fA1 = class fA1 extends __$.L6A {
    constructor(A, K, q) {
      super(A, K, async (Y, z) => new q(Y, z.response, await __$.MA1(Y, z), z.options));
    }
    async *[Symbol.asyncIterator]() {
      let A = await this;
      for await (let K of A) yield K;
    }
  };
  __$.QR = class QR extends __$.Qp1 {
    constructor(A, K, q, Y) {
      super(A, K, q, Y);
      this.data = q.data || [], this.has_more = q.has_more || !1, this.first_id = q.first_id || null, this.last_id = q.last_id || null;
    }
    getPaginatedItems() {
      return this.data ?? [];
    }
    hasNextPage() {
      if (this.has_more === !1) return !1;
      return super.hasNextPage();
    }
    nextPageRequestOptions() {
      if (this.options.query?.before_id) {
        let K = this.first_id;
        if (!K) return null;
        return {
          ...this.options,
          query: {
            ...__$._A1(this.options.query),
            before_id: K
          }
        };
      }
      let A = this.last_id;
      if (!A) return null;
      return {
        ...this.options,
        query: {
          ...__$._A1(this.options.query),
          after_id: A
        }
      };
    }
  };
  __$.zkA = class zkA extends __$.Qp1 {
    constructor(A, K, q, Y) {
      super(A, K, q, Y);
      this.data = q.data || [], this.has_more = q.has_more || !1, this.next_page = q.next_page || null;
    }
    getPaginatedItems() {
      return this.data ?? [];
    }
    hasNextPage() {
      if (this.has_more === !1) return !1;
      return super.hasNextPage();
    }
    nextPageRequestOptions() {
      let A = this.next_page;
      if (!A) return null;
      return {
        ...this.options,
        query: {
          ...__$._A1(this.options.query),
          page: A
        }
      };
    }
  };
});

// Register to shared state
__$.yb = yb;
