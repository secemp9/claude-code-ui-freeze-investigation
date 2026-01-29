// Module: Wj1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Wj1 = v(_l7 => {
  Object.defineProperty(_l7, "__esModule", {
    value: !0
  });
  _l7.FilterStackFactory = _l7.FilterStack = void 0;
  class qC6 {
    constructor(A) {
      this.filters = A;
    }
    sendMetadata(A) {
      let K = A;
      for (let q = 0; q < this.filters.length; q++) K = this.filters[q].sendMetadata(K);
      return K;
    }
    receiveMetadata(A) {
      let K = A;
      for (let q = this.filters.length - 1; q >= 0; q--) K = this.filters[q].receiveMetadata(K);
      return K;
    }
    sendMessage(A) {
      let K = A;
      for (let q = 0; q < this.filters.length; q++) K = this.filters[q].sendMessage(K);
      return K;
    }
    receiveMessage(A) {
      let K = A;
      for (let q = this.filters.length - 1; q >= 0; q--) K = this.filters[q].receiveMessage(K);
      return K;
    }
    receiveTrailers(A) {
      let K = A;
      for (let q = this.filters.length - 1; q >= 0; q--) K = this.filters[q].receiveTrailers(K);
      return K;
    }
    push(A) {
      this.filters.unshift(...A);
    }
    getFilters() {
      return this.filters;
    }
  }
  _l7.FilterStack = qC6;
  class YC6 {
    constructor(A) {
      this.factories = A;
    }
    push(A) {
      this.factories.unshift(...A);
    }
    clone() {
      return new YC6([...this.factories]);
    }
    createFilter() {
      return new qC6(this.factories.map(A => A.createFilter()));
    }
  }
  _l7.FilterStackFactory = YC6;
});

// Register to shared state
__$.Wj1 = Wj1;
