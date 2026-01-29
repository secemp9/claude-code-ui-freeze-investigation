// Module: ih6
// Dependencies: P0, RW, vUA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ih6 = v((ltH, D9K) => {
  D9K.exports = lh6;
  var G9K = __$.P0(),
    Z9K = __$.RW(),
    W9K = __$.vUA();
  function lh6(A, K) {
    W9K.call(this), this.nodeType = Z9K.TEXT_NODE, this.ownerDocument = A, this._data = K, this._index = void 0;
  }
  var EUA = {
    get: function () {
      return this._data;
    },
    set: function (A) {
      if (A === null || A === void 0) A = "";else A = String(A);
      if (A === this._data) return;
      if (this._data = A, this.rooted) this.ownerDocument.mutateValue(this);
      if (this.parentNode && this.parentNode._textchangehook) this.parentNode._textchangehook(this);
    }
  };
  lh6.prototype = Object.create(W9K.prototype, {
    nodeName: {
      value: "#text"
    },
    nodeValue: EUA,
    textContent: EUA,
    innerText: EUA,
    data: {
      get: EUA.get,
      set: function (A) {
        EUA.set.call(this, A === null ? "" : String(A));
      }
    },
    splitText: {
      value: function (K) {
        if (K > this._data.length || K < 0) G9K.IndexSizeError();
        var q = this._data.substring(K),
          Y = this.ownerDocument.createTextNode(q);
        this.data = this.data.substring(0, K);
        var z = this.parentNode;
        if (z !== null) z.insertBefore(Y, this.nextSibling);
        return Y;
      }
    },
    wholeText: {
      get: function () {
        var K = this.textContent;
        for (var q = this.nextSibling; q; q = q.nextSibling) {
          if (q.nodeType !== Z9K.TEXT_NODE) break;
          K += q.textContent;
        }
        return K;
      }
    },
    replaceWholeText: {
      value: G9K.nyi
    },
    clone: {
      value: function () {
        return new lh6(this.ownerDocument, this._data);
      }
    }
  });
});

// Register to shared state
__$.ih6 = ih6;
