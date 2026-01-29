// Module: mh6
// Dependencies: P0

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mh6 = v((UtH, t3K) => {
  t3K.exports = s3K;
  var gMA = __$.P0();
  function s3K(A) {
    this.element = A;
  }
  Object.defineProperties(s3K.prototype, {
    length: {
      get: gMA.shouldOverride
    },
    item: {
      value: gMA.shouldOverride
    },
    getNamedItem: {
      value: function (K) {
        return this.element.getAttributeNode(K);
      }
    },
    getNamedItemNS: {
      value: function (K, q) {
        return this.element.getAttributeNodeNS(K, q);
      }
    },
    setNamedItem: {
      value: gMA.nyi
    },
    setNamedItemNS: {
      value: gMA.nyi
    },
    removeNamedItem: {
      value: function (K) {
        var q = this.element.getAttributeNode(K);
        if (q) return this.element.removeAttribute(K), q;
        gMA.NotFoundError();
      }
    },
    removeNamedItemNS: {
      value: function (K, q) {
        var Y = this.element.getAttributeNodeNS(K, q);
        if (Y) return this.element.removeAttributeNS(K, q), Y;
        gMA.NotFoundError();
      }
    }
  });
});

// Register to shared state
__$.mh6 = mh6;
