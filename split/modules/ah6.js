// Module: ah6
// Dependencies: RW, A9A, FV1, QMA, cV1, P0

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ah6 = v((ntH, f9K) => {
  f9K.exports = oh6;
  var HT2 = __$.RW(),
    JT2 = __$.A9A(),
    V9K = __$.FV1(),
    oV1 = __$.QMA(),
    OT2 = __$.cV1(),
    P9K = __$.P0();
  function oh6(A) {
    V9K.call(this), this.nodeType = HT2.DOCUMENT_FRAGMENT_NODE, this.ownerDocument = A;
  }
  oh6.prototype = Object.create(V9K.prototype, {
    nodeName: {
      value: "#document-fragment"
    },
    nodeValue: {
      get: function () {
        return null;
      },
      set: function () {}
    },
    textContent: Object.getOwnPropertyDescriptor(oV1.prototype, "textContent"),
    innerText: Object.getOwnPropertyDescriptor(oV1.prototype, "innerText"),
    querySelector: {
      value: function (A) {
        var K = this.querySelectorAll(A);
        return K.length ? K[0] : null;
      }
    },
    querySelectorAll: {
      value: function (A) {
        var K = Object.create(this);
        K.isHTML = !0, K.getElementsByTagName = oV1.prototype.getElementsByTagName, K.nextElement = Object.getOwnPropertyDescriptor(oV1.prototype, "firstElementChild").get;
        var q = OT2(A, K);
        return q.item ? q : new JT2(q);
      }
    },
    clone: {
      value: function () {
        return new oh6(this.ownerDocument);
      }
    },
    isEqual: {
      value: function (K) {
        return !0;
      }
    },
    innerHTML: {
      get: function () {
        return this.serialize();
      },
      set: P9K.nyi
    },
    outerHTML: {
      get: function () {
        return this.serialize();
      },
      set: P9K.nyi
    }
  });
});

// Register to shared state
__$.ah6 = ah6;
