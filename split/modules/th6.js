// Module: th6
// Dependencies: RW, vUA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var th6 = v((rtH, T9K) => {
  T9K.exports = sh6;
  var XT2 = __$.RW(),
    N9K = __$.vUA();
  function sh6(A, K, q) {
    N9K.call(this), this.nodeType = XT2.PROCESSING_INSTRUCTION_NODE, this.ownerDocument = A, this.target = K, this._data = q;
  }
  var CUA = {
    get: function () {
      return this._data;
    },
    set: function (A) {
      if (A === null || A === void 0) A = "";else A = String(A);
      if (this._data = A, this.rooted) this.ownerDocument.mutateValue(this);
    }
  };
  sh6.prototype = Object.create(N9K.prototype, {
    nodeName: {
      get: function () {
        return this.target;
      }
    },
    nodeValue: CUA,
    textContent: CUA,
    innerText: CUA,
    data: {
      get: CUA.get,
      set: function (A) {
        CUA.set.call(this, A === null ? "" : String(A));
      }
    },
    clone: {
      value: function () {
        return new sh6(this.ownerDocument, this.target, this._data);
      }
    },
    isEqual: {
      value: function (K) {
        return this.target === K.target && this._data === K._data;
      }
    }
  });
});

// Register to shared state
__$.th6 = th6;
