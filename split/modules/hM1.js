// Module: hM1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hM1 = v((YAK, zAK) => {
  (function () {
    var A;
    zAK.exports = A = function () {
      class K {
        constructor(q) {
          this.nodes = q;
        }
        clone() {
          return this.nodes = null;
        }
        getNamedItem(q) {
          return this.nodes[q];
        }
        setNamedItem(q) {
          var Y = this.nodes[q.nodeName];
          return this.nodes[q.nodeName] = q, Y || null;
        }
        removeNamedItem(q) {
          var Y = this.nodes[q];
          return delete this.nodes[q], Y || null;
        }
        item(q) {
          return this.nodes[Object.keys(this.nodes)[q]] || null;
        }
        getNamedItemNS(q, Y) {
          throw Error("This DOM method is not implemented.");
        }
        setNamedItemNS(q) {
          throw Error("This DOM method is not implemented.");
        }
        removeNamedItemNS(q, Y) {
          throw Error("This DOM method is not implemented.");
        }
      }
      return Object.defineProperty(K.prototype, "length", {
        get: function () {
          return Object.keys(this.nodes).length || 0;
        }
      }), K;
    }.call(this);
  }).call(YAK);
});

// Register to shared state
__$.hM1 = hM1;
