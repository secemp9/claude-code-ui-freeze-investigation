// Module: HQA
// Dependencies: Dv

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var HQA = v((JAK, OAK) => {
  (function () {
    var A, K;
    K = __$.Dv(), OAK.exports = A = function () {
      class q extends K {
        constructor(Y) {
          super(Y);
          this.value = "";
        }
        clone() {
          return Object.create(this);
        }
        substringData(Y, z) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        appendData(Y) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        insertData(Y, z) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        deleteData(Y, z) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        replaceData(Y, z, w) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        isEqualNode(Y) {
          if (!super.isEqualNode(Y)) return !1;
          if (Y.data !== this.data) return !1;
          return !0;
        }
      }
      return Object.defineProperty(q.prototype, "data", {
        get: function () {
          return this.value;
        },
        set: function (Y) {
          return this.value = Y || "";
        }
      }), Object.defineProperty(q.prototype, "length", {
        get: function () {
          return this.value.length;
        }
      }), Object.defineProperty(q.prototype, "textContent", {
        get: function () {
          return this.value;
        },
        set: function (Y) {
          return this.value = Y || "";
        }
      }), q;
    }.call(this);
  }).call(JAK);
});

// Register to shared state
__$.HQA = HQA;
