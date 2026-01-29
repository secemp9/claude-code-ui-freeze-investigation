// Module: rh6
// Dependencies: RW, vUA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rh6 = v((itH, M9K) => {
  M9K.exports = nh6;
  var wT2 = __$.RW(),
    j9K = __$.vUA();
  function nh6(A, K) {
    j9K.call(this), this.nodeType = wT2.COMMENT_NODE, this.ownerDocument = A, this._data = K;
  }
  var kUA = {
    get: function () {
      return this._data;
    },
    set: function (A) {
      if (A === null || A === void 0) A = "";else A = String(A);
      if (this._data = A, this.rooted) this.ownerDocument.mutateValue(this);
    }
  };
  nh6.prototype = Object.create(j9K.prototype, {
    nodeName: {
      value: "#comment"
    },
    nodeValue: kUA,
    textContent: kUA,
    innerText: kUA,
    data: {
      get: kUA.get,
      set: function (A) {
        kUA.set.call(this, A === null ? "" : String(A));
      }
    },
    clone: {
      value: function () {
        return new nh6(this.ownerDocument, this._data);
      }
    }
  });
});

// Register to shared state
__$.rh6 = rh6;
