// Module: pR6
// Dependencies: DX, Dv

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pR6 = v((KAK, qAK) => {
  (function () {
    var A, K, q;
    A = __$.DX(), q = __$.Dv(), qAK.exports = K = function () {
      class Y {
        constructor(z, w, H) {
          if (this.parent = z, this.parent) this.options = this.parent.options, this.stringify = this.parent.stringify;
          if (w == null) throw Error("Missing attribute name. " + this.debugInfo(w));
          this.name = this.stringify.name(w), this.value = this.stringify.attValue(H), this.type = A.Attribute, this.isId = !1, this.schemaTypeInfo = null;
        }
        clone() {
          return Object.create(this);
        }
        toString(z) {
          return this.options.writer.attribute(this, this.options.writer.filterOptions(z));
        }
        debugInfo(z) {
          if (z = z || this.name, z == null) return "parent: <" + this.parent.name + ">";else return "attribute: {" + z + "}, parent: <" + this.parent.name + ">";
        }
        isEqualNode(z) {
          if (z.namespaceURI !== this.namespaceURI) return !1;
          if (z.prefix !== this.prefix) return !1;
          if (z.localName !== this.localName) return !1;
          if (z.value !== this.value) return !1;
          return !0;
        }
      }
      return Object.defineProperty(Y.prototype, "nodeType", {
        get: function () {
          return this.type;
        }
      }), Object.defineProperty(Y.prototype, "ownerElement", {
        get: function () {
          return this.parent;
        }
      }), Object.defineProperty(Y.prototype, "textContent", {
        get: function () {
          return this.value;
        },
        set: function (z) {
          return this.value = z || "";
        }
      }), Object.defineProperty(Y.prototype, "namespaceURI", {
        get: function () {
          return "";
        }
      }), Object.defineProperty(Y.prototype, "prefix", {
        get: function () {
          return "";
        }
      }), Object.defineProperty(Y.prototype, "localName", {
        get: function () {
          return this.name;
        }
      }), Object.defineProperty(Y.prototype, "specified", {
        get: function () {
          return !0;
        }
      }), Y;
    }.call(this);
  }).call(KAK);
});

// Register to shared state
__$.pR6 = pR6;
