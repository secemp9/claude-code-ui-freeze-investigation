// Module: UM1
// Dependencies: rB, Dv, DX, mM1, gM1, FM1, QM1, hM1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var UM1 = v((vAK, EAK) => {
  (function () {
    var A, K, q, Y, z, w, H, J, O;
    ({
      isObject: O
    } = __$.rB()), J = __$.Dv(), A = __$.DX(), K = __$.mM1(), Y = __$.gM1(), q = __$.FM1(), z = __$.QM1(), H = __$.hM1(), EAK.exports = w = function () {
      class X extends J {
        constructor($, _, G) {
          var Z, W, D, j;
          super($);
          if (this.type = A.DocType, $.children) {
            j = $.children;
            for (W = 0, D = j.length; W < D; W++) if (Z = j[W], Z.type === A.Element) {
              this.name = Z.name;
              break;
            }
          }
          if (this.documentObject = $, O(_)) ({
            pubID: _,
            sysID: G
          } = _);
          if (G == null) [G, _] = [_, G];
          if (_ != null) this.pubID = this.stringify.dtdPubID(_);
          if (G != null) this.sysID = this.stringify.dtdSysID(G);
        }
        element($, _) {
          var G = new q(this, $, _);
          return this.children.push(G), this;
        }
        attList($, _, G, Z, W) {
          var D = new K(this, $, _, G, Z, W);
          return this.children.push(D), this;
        }
        entity($, _) {
          var G = new Y(this, !1, $, _);
          return this.children.push(G), this;
        }
        pEntity($, _) {
          var G = new Y(this, !0, $, _);
          return this.children.push(G), this;
        }
        notation($, _) {
          var G = new z(this, $, _);
          return this.children.push(G), this;
        }
        toString($) {
          return this.options.writer.docType(this, this.options.writer.filterOptions($));
        }
        ele($, _) {
          return this.element($, _);
        }
        att($, _, G, Z, W) {
          return this.attList($, _, G, Z, W);
        }
        ent($, _) {
          return this.entity($, _);
        }
        pent($, _) {
          return this.pEntity($, _);
        }
        not($, _) {
          return this.notation($, _);
        }
        up() {
          return this.root() || this.documentObject;
        }
        isEqualNode($) {
          if (!super.isEqualNode($)) return !1;
          if ($.name !== this.name) return !1;
          if ($.publicId !== this.publicId) return !1;
          if ($.systemId !== this.systemId) return !1;
          return !0;
        }
      }
      return Object.defineProperty(X.prototype, "entities", {
        get: function () {
          var $, _, G, Z, W;
          Z = {}, W = this.children;
          for (_ = 0, G = W.length; _ < G; _++) if ($ = W[_], $.type === A.EntityDeclaration && !$.pe) Z[$.name] = $;
          return new H(Z);
        }
      }), Object.defineProperty(X.prototype, "notations", {
        get: function () {
          var $, _, G, Z, W;
          Z = {}, W = this.children;
          for (_ = 0, G = W.length; _ < G; _++) if ($ = W[_], $.type === A.NotationDeclaration) Z[$.name] = $;
          return new H(Z);
        }
      }), Object.defineProperty(X.prototype, "publicId", {
        get: function () {
          return this.pubID;
        }
      }), Object.defineProperty(X.prototype, "systemId", {
        get: function () {
          return this.sysID;
        }
      }), Object.defineProperty(X.prototype, "internalSubset", {
        get: function () {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
      }), X;
    }.call(this);
  }).call(vAK);
});

// Register to shared state
__$.UM1 = UM1;
