// Module: dM1
// Dependencies: DX, HQA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dM1 = v((LAK, RAK) => {
  (function () {
    var A, K, q;
    A = __$.DX(), K = __$.HQA(), RAK.exports = q = function () {
      class Y extends K {
        constructor(z, w) {
          super(z);
          if (w == null) throw Error("Missing element text. " + this.debugInfo());
          this.name = "#text", this.type = A.Text, this.value = this.stringify.text(w);
        }
        clone() {
          return Object.create(this);
        }
        toString(z) {
          return this.options.writer.text(this, this.options.writer.filterOptions(z));
        }
        splitText(z) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        replaceWholeText(z) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
      }
      return Object.defineProperty(Y.prototype, "isElementContentWhitespace", {
        get: function () {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
      }), Object.defineProperty(Y.prototype, "wholeText", {
        get: function () {
          var z, w, H;
          H = "", w = this.previousSibling;
          while (w) H = w.data + H, w = w.previousSibling;
          H += this.data, z = this.nextSibling;
          while (z) H = H + z.data, z = z.nextSibling;
          return H;
        }
      }), Y;
    }.call(this);
  }).call(LAK);
});

// Register to shared state
__$.dM1 = dM1;
