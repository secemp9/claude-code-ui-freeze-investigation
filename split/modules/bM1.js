// Module: bM1
// Dependencies: rB, Dv, DX, pR6, hM1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bM1 = v((wAK, HAK) => {
  (function () {
    var A,
      K,
      q,
      Y,
      z,
      w,
      H,
      J,
      O = {}.hasOwnProperty;
    ({
      isObject: J,
      isFunction: H,
      getValue: w
    } = __$.rB()), z = __$.Dv(), A = __$.DX(), K = __$.pR6(), Y = __$.hM1(), HAK.exports = q = function () {
      class X extends z {
        constructor($, _, G) {
          var Z, W, D, j;
          super($);
          if (_ == null) throw Error("Missing element name. " + this.debugInfo());
          if (this.name = this.stringify.name(_), this.type = A.Element, this.attribs = {}, this.schemaTypeInfo = null, G != null) this.attribute(G);
          if ($.type === A.Document) {
            if (this.isRoot = !0, this.documentObject = $, $.rootObject = this, $.children) {
              j = $.children;
              for (W = 0, D = j.length; W < D; W++) if (Z = j[W], Z.type === A.DocType) {
                Z.name = this.name;
                break;
              }
            }
          }
        }
        clone() {
          var $, _, G, Z;
          if (G = Object.create(this), G.isRoot) G.documentObject = null;
          G.attribs = {}, Z = this.attribs;
          for (_ in Z) {
            if (!O.call(Z, _)) continue;
            $ = Z[_], G.attribs[_] = $.clone();
          }
          return G.children = [], this.children.forEach(function (W) {
            var D = W.clone();
            return D.parent = G, G.children.push(D);
          }), G;
        }
        attribute($, _) {
          var G, Z;
          if ($ != null) $ = w($);
          if (J($)) for (G in $) {
            if (!O.call($, G)) continue;
            Z = $[G], this.attribute(G, Z);
          } else {
            if (H(_)) _ = _.apply();
            if (this.options.keepNullAttributes && _ == null) this.attribs[$] = new K(this, $, "");else if (_ != null) this.attribs[$] = new K(this, $, _);
          }
          return this;
        }
        removeAttribute($) {
          var _, G, Z;
          if ($ == null) throw Error("Missing attribute name. " + this.debugInfo());
          if ($ = w($), Array.isArray($)) for (G = 0, Z = $.length; G < Z; G++) _ = $[G], delete this.attribs[_];else delete this.attribs[$];
          return this;
        }
        toString($) {
          return this.options.writer.element(this, this.options.writer.filterOptions($));
        }
        att($, _) {
          return this.attribute($, _);
        }
        a($, _) {
          return this.attribute($, _);
        }
        getAttribute($) {
          if (this.attribs.hasOwnProperty($)) return this.attribs[$].value;else return null;
        }
        setAttribute($, _) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        getAttributeNode($) {
          if (this.attribs.hasOwnProperty($)) return this.attribs[$];else return null;
        }
        setAttributeNode($) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        removeAttributeNode($) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        getElementsByTagName($) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        getAttributeNS($, _) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        setAttributeNS($, _, G) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        removeAttributeNS($, _) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        getAttributeNodeNS($, _) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        setAttributeNodeNS($) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        getElementsByTagNameNS($, _) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        hasAttribute($) {
          return this.attribs.hasOwnProperty($);
        }
        hasAttributeNS($, _) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        setIdAttribute($, _) {
          if (this.attribs.hasOwnProperty($)) return this.attribs[$].isId;else return _;
        }
        setIdAttributeNS($, _, G) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        setIdAttributeNode($, _) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        getElementsByTagName($) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        getElementsByTagNameNS($, _) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        getElementsByClassName($) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        isEqualNode($) {
          var _, G, Z;
          if (!super.isEqualNode($)) return !1;
          if ($.namespaceURI !== this.namespaceURI) return !1;
          if ($.prefix !== this.prefix) return !1;
          if ($.localName !== this.localName) return !1;
          if ($.attribs.length !== this.attribs.length) return !1;
          for (_ = G = 0, Z = this.attribs.length - 1; 0 <= Z ? G <= Z : G >= Z; _ = 0 <= Z ? ++G : --G) if (!this.attribs[_].isEqualNode($.attribs[_])) return !1;
          return !0;
        }
      }
      return Object.defineProperty(X.prototype, "tagName", {
        get: function () {
          return this.name;
        }
      }), Object.defineProperty(X.prototype, "namespaceURI", {
        get: function () {
          return "";
        }
      }), Object.defineProperty(X.prototype, "prefix", {
        get: function () {
          return "";
        }
      }), Object.defineProperty(X.prototype, "localName", {
        get: function () {
          return this.name;
        }
      }), Object.defineProperty(X.prototype, "id", {
        get: function () {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
      }), Object.defineProperty(X.prototype, "className", {
        get: function () {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
      }), Object.defineProperty(X.prototype, "classList", {
        get: function () {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
      }), Object.defineProperty(X.prototype, "attributes", {
        get: function () {
          if (!this.attributeMap || !this.attributeMap.nodes) this.attributeMap = new Y(this.attribs);
          return this.attributeMap;
        }
      }), X;
    }.call(this);
  }).call(wAK);
});

// Register to shared state
__$.bM1 = bM1;
