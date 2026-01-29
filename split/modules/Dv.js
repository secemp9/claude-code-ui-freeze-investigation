// Module: Dv
// Dependencies: rB, bM1, xM1, uM1, BM1, UM1, pM1, dM1, cM1, dR6
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Dv = v((FAK, QAK) => {
  (function () {
    var A,
      K,
      q,
      Y,
      z,
      w,
      H,
      J,
      O,
      X,
      $,
      _,
      G,
      Z,
      W,
      D,
      j,
      M,
      P = {}.hasOwnProperty,
      f = [].splice;
    ({
      isObject: M,
      isFunction: j,
      isEmpty: D,
      getValue: W
    } = __$.rB()), J = null, q = null, Y = null, z = null, w = null, G = null, Z = null, _ = null, H = null, K = null, $ = null, O = null, A = null, QAK.exports = X = function () {
      class N {
        constructor(T) {
          if (this.parent = T, this.parent) this.options = this.parent.options, this.stringify = this.parent.stringify;
          if (this.value = null, this.children = [], this.baseURI = null, !J) J = __$.bM1(), q = __$.xM1(), Y = __$.uM1(), z = __$.BM1(), w = __$.UM1(), G = __$.pM1(), Z = __$.dM1(), _ = __$.cM1(), H = __$.dR6(), K = __$.DX(), $ = __$.uAK(), O = __$.hM1(), A = __$.gAK();
        }
        setParent(T) {
          var C, R, x, y, B;
          if (this.parent = T, T) this.options = T.options, this.stringify = T.stringify;
          y = this.children, B = [];
          for (R = 0, x = y.length; R < x; R++) C = y[R], B.push(C.setParent(this));
          return B;
        }
        element(T, C, R) {
          var x, y, B, b, F, Q, u, d, r;
          if (Q = null, C === null && R == null) [C, R] = [{}, null];
          if (C == null) C = {};
          if (C = W(C), !M(C)) [R, C] = [C, R];
          if (T != null) T = W(T);
          if (Array.isArray(T)) for (B = 0, u = T.length; B < u; B++) y = T[B], Q = this.element(y);else if (j(T)) Q = this.element(T.apply());else if (M(T)) for (F in T) {
            if (!P.call(T, F)) continue;
            if (r = T[F], j(r)) r = r.apply();
            if (!this.options.ignoreDecorators && this.stringify.convertAttKey && F.indexOf(this.stringify.convertAttKey) === 0) Q = this.attribute(F.substr(this.stringify.convertAttKey.length), r);else if (!this.options.separateArrayItems && Array.isArray(r) && D(r)) Q = this.dummy();else if (M(r) && D(r)) Q = this.element(F);else if (!this.options.keepNullNodes && r == null) Q = this.dummy();else if (!this.options.separateArrayItems && Array.isArray(r)) for (b = 0, d = r.length; b < d; b++) y = r[b], x = {}, x[F] = y, Q = this.element(x);else if (M(r)) {
              if (!this.options.ignoreDecorators && this.stringify.convertTextKey && F.indexOf(this.stringify.convertTextKey) === 0) Q = this.element(r);else Q = this.element(F), Q.element(r);
            } else Q = this.element(F, r);
          } else if (!this.options.keepNullNodes && R === null) Q = this.dummy();else if (!this.options.ignoreDecorators && this.stringify.convertTextKey && T.indexOf(this.stringify.convertTextKey) === 0) Q = this.text(R);else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && T.indexOf(this.stringify.convertCDataKey) === 0) Q = this.cdata(R);else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && T.indexOf(this.stringify.convertCommentKey) === 0) Q = this.comment(R);else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && T.indexOf(this.stringify.convertRawKey) === 0) Q = this.raw(R);else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && T.indexOf(this.stringify.convertPIKey) === 0) Q = this.instruction(T.substr(this.stringify.convertPIKey.length), R);else Q = this.node(T, C, R);
          if (Q == null) throw Error("Could not create any elements with: " + T + ". " + this.debugInfo());
          return Q;
        }
        insertBefore(T, C, R) {
          var x, y, B, b, F;
          if (T != null ? T.type : void 0) {
            if (B = T, b = C, B.setParent(this), b) y = children.indexOf(b), F = children.splice(y), children.push(B), Array.prototype.push.apply(children, F);else children.push(B);
            return B;
          } else {
            if (this.isRoot) throw Error("Cannot insert elements at root level. " + this.debugInfo(T));
            return y = this.parent.children.indexOf(this), F = this.parent.children.splice(y), x = this.parent.element(T, C, R), Array.prototype.push.apply(this.parent.children, F), x;
          }
        }
        insertAfter(T, C, R) {
          var x, y, B;
          if (this.isRoot) throw Error("Cannot insert elements at root level. " + this.debugInfo(T));
          return y = this.parent.children.indexOf(this), B = this.parent.children.splice(y + 1), x = this.parent.element(T, C, R), Array.prototype.push.apply(this.parent.children, B), x;
        }
        remove() {
          var T, C;
          if (this.isRoot) throw Error("Cannot remove the root element. " + this.debugInfo());
          return T = this.parent.children.indexOf(this), f.apply(this.parent.children, [T, T - T + 1].concat(C = [])), this.parent;
        }
        node(T, C, R) {
          var x;
          if (T != null) T = W(T);
          if (C || (C = {}), C = W(C), !M(C)) [R, C] = [C, R];
          if (x = new J(this, T, C), R != null) x.text(R);
          return this.children.push(x), x;
        }
        text(T) {
          var C;
          if (M(T)) this.element(T);
          return C = new Z(this, T), this.children.push(C), this;
        }
        cdata(T) {
          var C = new q(this, T);
          return this.children.push(C), this;
        }
        comment(T) {
          var C = new Y(this, T);
          return this.children.push(C), this;
        }
        commentBefore(T) {
          var C, R, x;
          return R = this.parent.children.indexOf(this), x = this.parent.children.splice(R), C = this.parent.comment(T), Array.prototype.push.apply(this.parent.children, x), this;
        }
        commentAfter(T) {
          var C, R, x;
          return R = this.parent.children.indexOf(this), x = this.parent.children.splice(R + 1), C = this.parent.comment(T), Array.prototype.push.apply(this.parent.children, x), this;
        }
        raw(T) {
          var C = new G(this, T);
          return this.children.push(C), this;
        }
        dummy() {
          var T = new H(this);
          return T;
        }
        instruction(T, C) {
          var R, x, y, B, b;
          if (T != null) T = W(T);
          if (C != null) C = W(C);
          if (Array.isArray(T)) for (B = 0, b = T.length; B < b; B++) R = T[B], this.instruction(R);else if (M(T)) for (R in T) {
            if (!P.call(T, R)) continue;
            x = T[R], this.instruction(R, x);
          } else {
            if (j(C)) C = C.apply();
            y = new _(this, T, C), this.children.push(y);
          }
          return this;
        }
        instructionBefore(T, C) {
          var R, x, y;
          return x = this.parent.children.indexOf(this), y = this.parent.children.splice(x), R = this.parent.instruction(T, C), Array.prototype.push.apply(this.parent.children, y), this;
        }
        instructionAfter(T, C) {
          var R, x, y;
          return x = this.parent.children.indexOf(this), y = this.parent.children.splice(x + 1), R = this.parent.instruction(T, C), Array.prototype.push.apply(this.parent.children, y), this;
        }
        declaration(T, C, R) {
          var x, y;
          if (x = this.document(), y = new z(x, T, C, R), x.children.length === 0) x.children.unshift(y);else if (x.children[0].type === K.Declaration) x.children[0] = y;else x.children.unshift(y);
          return x.root() || x;
        }
        dtd(T, C) {
          var R, x, y, B, b, F, Q, u, d, r;
          x = this.document(), y = new w(x, T, C), d = x.children;
          for (B = b = 0, Q = d.length; b < Q; B = ++b) if (R = d[B], R.type === K.DocType) return x.children[B] = y, y;
          r = x.children;
          for (B = F = 0, u = r.length; F < u; B = ++F) if (R = r[B], R.isRoot) return x.children.splice(B, 0, y), y;
          return x.children.push(y), y;
        }
        up() {
          if (this.isRoot) throw Error("The root node has no parent. Use doc() if you need to get the document object.");
          return this.parent;
        }
        root() {
          var T = this;
          while (T) if (T.type === K.Document) return T.rootObject;else if (T.isRoot) return T;else T = T.parent;
        }
        document() {
          var T = this;
          while (T) if (T.type === K.Document) return T;else T = T.parent;
        }
        end(T) {
          return this.document().end(T);
        }
        prev() {
          var T = this.parent.children.indexOf(this);
          if (T < 1) throw Error("Already at the first node. " + this.debugInfo());
          return this.parent.children[T - 1];
        }
        next() {
          var T = this.parent.children.indexOf(this);
          if (T === -1 || T === this.parent.children.length - 1) throw Error("Already at the last node. " + this.debugInfo());
          return this.parent.children[T + 1];
        }
        importDocument(T) {
          var C, R, x, y, B;
          if (R = T.root().clone(), R.parent = this, R.isRoot = !1, this.children.push(R), this.type === K.Document) {
            if (R.isRoot = !0, R.documentObject = this, this.rootObject = R, this.children) {
              B = this.children;
              for (x = 0, y = B.length; x < y; x++) if (C = B[x], C.type === K.DocType) {
                C.name = R.name;
                break;
              }
            }
          }
          return this;
        }
        debugInfo(T) {
          var C, R;
          if (T = T || this.name, T == null && !((C = this.parent) != null ? C.name : void 0)) return "";else if (T == null) return "parent: <" + this.parent.name + ">";else if (!((R = this.parent) != null ? R.name : void 0)) return "node: <" + T + ">";else return "node: <" + T + ">, parent: <" + this.parent.name + ">";
        }
        ele(T, C, R) {
          return this.element(T, C, R);
        }
        nod(T, C, R) {
          return this.node(T, C, R);
        }
        txt(T) {
          return this.text(T);
        }
        dat(T) {
          return this.cdata(T);
        }
        com(T) {
          return this.comment(T);
        }
        ins(T, C) {
          return this.instruction(T, C);
        }
        doc() {
          return this.document();
        }
        dec(T, C, R) {
          return this.declaration(T, C, R);
        }
        e(T, C, R) {
          return this.element(T, C, R);
        }
        n(T, C, R) {
          return this.node(T, C, R);
        }
        t(T) {
          return this.text(T);
        }
        d(T) {
          return this.cdata(T);
        }
        c(T) {
          return this.comment(T);
        }
        r(T) {
          return this.raw(T);
        }
        i(T, C) {
          return this.instruction(T, C);
        }
        u() {
          return this.up();
        }
        importXMLBuilder(T) {
          return this.importDocument(T);
        }
        attribute(T, C) {
          throw Error("attribute() applies to element nodes only.");
        }
        att(T, C) {
          return this.attribute(T, C);
        }
        a(T, C) {
          return this.attribute(T, C);
        }
        removeAttribute(T) {
          throw Error("attribute() applies to element nodes only.");
        }
        replaceChild(T, C) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        removeChild(T) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        appendChild(T) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        hasChildNodes() {
          return this.children.length !== 0;
        }
        cloneNode(T) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        normalize() {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        isSupported(T, C) {
          return !0;
        }
        hasAttributes() {
          return this.attribs.length !== 0;
        }
        compareDocumentPosition(T) {
          var C, R;
          if (C = this, C === T) return 0;else if (this.document() !== T.document()) {
            if (R = A.Disconnected | A.ImplementationSpecific, Math.random() < 0.5) R |= A.Preceding;else R |= A.Following;
            return R;
          } else if (C.isAncestor(T)) return A.Contains | A.Preceding;else if (C.isDescendant(T)) return A.Contains | A.Following;else if (C.isPreceding(T)) return A.Preceding;else return A.Following;
        }
        isSameNode(T) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        lookupPrefix(T) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        isDefaultNamespace(T) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        lookupNamespaceURI(T) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        isEqualNode(T) {
          var C, R, x;
          if (T.nodeType !== this.nodeType) return !1;
          if (T.children.length !== this.children.length) return !1;
          for (C = R = 0, x = this.children.length - 1; 0 <= x ? R <= x : R >= x; C = 0 <= x ? ++R : --R) if (!this.children[C].isEqualNode(T.children[C])) return !1;
          return !0;
        }
        getFeature(T, C) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        setUserData(T, C, R) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        getUserData(T) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        contains(T) {
          if (!T) return !1;
          return T === this || this.isDescendant(T);
        }
        isDescendant(T) {
          var C, R, x, y, B;
          B = this.children;
          for (x = 0, y = B.length; x < y; x++) {
            if (C = B[x], T === C) return !0;
            if (R = C.isDescendant(T), R) return !0;
          }
          return !1;
        }
        isAncestor(T) {
          return T.isDescendant(this);
        }
        isPreceding(T) {
          var C, R;
          if (C = this.treePosition(T), R = this.treePosition(this), C === -1 || R === -1) return !1;else return C < R;
        }
        isFollowing(T) {
          var C, R;
          if (C = this.treePosition(T), R = this.treePosition(this), C === -1 || R === -1) return !1;else return C > R;
        }
        treePosition(T) {
          var C, R;
          if (R = 0, C = !1, this.foreachTreeNode(this.document(), function (x) {
            if (R++, !C && x === T) return C = !0;
          }), C) return R;else return -1;
        }
        foreachTreeNode(T, C) {
          var R, x, y, B, b;
          T || (T = this.document()), B = T.children;
          for (x = 0, y = B.length; x < y; x++) if (R = B[x], b = C(R)) return b;else if (b = this.foreachTreeNode(R, C), b) return b;
        }
      }
      return Object.defineProperty(N.prototype, "nodeName", {
        get: function () {
          return this.name;
        }
      }), Object.defineProperty(N.prototype, "nodeType", {
        get: function () {
          return this.type;
        }
      }), Object.defineProperty(N.prototype, "nodeValue", {
        get: function () {
          return this.value;
        }
      }), Object.defineProperty(N.prototype, "parentNode", {
        get: function () {
          return this.parent;
        }
      }), Object.defineProperty(N.prototype, "childNodes", {
        get: function () {
          if (!this.childNodeList || !this.childNodeList.nodes) this.childNodeList = new $(this.children);
          return this.childNodeList;
        }
      }), Object.defineProperty(N.prototype, "firstChild", {
        get: function () {
          return this.children[0] || null;
        }
      }), Object.defineProperty(N.prototype, "lastChild", {
        get: function () {
          return this.children[this.children.length - 1] || null;
        }
      }), Object.defineProperty(N.prototype, "previousSibling", {
        get: function () {
          var T = this.parent.children.indexOf(this);
          return this.parent.children[T - 1] || null;
        }
      }), Object.defineProperty(N.prototype, "nextSibling", {
        get: function () {
          var T = this.parent.children.indexOf(this);
          return this.parent.children[T + 1] || null;
        }
      }), Object.defineProperty(N.prototype, "ownerDocument", {
        get: function () {
          return this.document() || null;
        }
      }), Object.defineProperty(N.prototype, "textContent", {
        get: function () {
          var T, C, R, x, y;
          if (this.nodeType === K.Element || this.nodeType === K.DocumentFragment) {
            y = "", x = this.children;
            for (C = 0, R = x.length; C < R; C++) if (T = x[C], T.textContent) y += T.textContent;
            return y;
          } else return null;
        },
        set: function (T) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
      }), N;
    }.call(this);
  }).call(FAK);
});

// Register to shared state
__$.Dv = Dv;
