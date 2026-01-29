// Module: ch6
// Dependencies: RW, A9A, P0

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ch6 = v((dtH, O9K) => {
  O9K.exports = J9K;
  var w9K = __$.RW(),
    KT2 = __$.A9A(),
    H9K = __$.P0(),
    z9K = H9K.HierarchyRequestError,
    qT2 = H9K.NotFoundError;
  function J9K() {
    w9K.call(this);
  }
  J9K.prototype = Object.create(w9K.prototype, {
    hasChildNodes: {
      value: function () {
        return !1;
      }
    },
    firstChild: {
      value: null
    },
    lastChild: {
      value: null
    },
    insertBefore: {
      value: function (A, K) {
        if (!A.nodeType) throw TypeError("not a node");
        z9K();
      }
    },
    replaceChild: {
      value: function (A, K) {
        if (!A.nodeType) throw TypeError("not a node");
        z9K();
      }
    },
    removeChild: {
      value: function (A) {
        if (!A.nodeType) throw TypeError("not a node");
        qT2();
      }
    },
    removeChildren: {
      value: function () {}
    },
    childNodes: {
      get: function () {
        if (!this._childNodes) this._childNodes = new KT2();
        return this._childNodes;
      }
    }
  });
});

// Register to shared state
__$.ch6 = ch6;
