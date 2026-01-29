// Module: Yf1
// Dependencies: RW, ch6, lV1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Yf1 = v((WeH, NYK) => {
  NYK.exports = qf1;
  var nT2 = __$.RW(),
    fYK = __$.ch6(),
    rT2 = __$.lV1();
  function qf1(A, K, q, Y) {
    fYK.call(this), this.nodeType = nT2.DOCUMENT_TYPE_NODE, this.ownerDocument = A || null, this.name = K, this.publicId = q || "", this.systemId = Y || "";
  }
  qf1.prototype = Object.create(fYK.prototype, {
    nodeName: {
      get: function () {
        return this.name;
      }
    },
    nodeValue: {
      get: function () {
        return null;
      },
      set: function () {}
    },
    clone: {
      value: function () {
        return new qf1(this.ownerDocument, this.name, this.publicId, this.systemId);
      }
    },
    isEqual: {
      value: function (K) {
        return this.name === K.name && this.publicId === K.publicId && this.systemId === K.systemId;
      }
    }
  });
  Object.defineProperties(qf1.prototype, rT2);
});

// Register to shared state
__$.Yf1 = Yf1;
