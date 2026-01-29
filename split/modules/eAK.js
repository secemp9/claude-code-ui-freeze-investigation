// Module: eAK
// Dependencies: rB, DX, iR6, bM1, xM1, uM1, pM1, dM1, cM1, BM1
//   ... and 10 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eAK = v((sAK, tAK) => {
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
      P,
      f,
      N,
      T,
      C,
      R = {}.hasOwnProperty;
    ({
      isObject: T,
      isFunction: N,
      isPlainObject: C,
      getValue: f
    } = __$.rB()), A = __$.DX(), _ = __$.iR6(), Z = __$.bM1(), Y = __$.xM1(), z = __$.uM1(), D = __$.pM1(), P = __$.dM1(), W = __$.cM1(), X = __$.BM1(), $ = __$.UM1(), w = __$.mM1(), J = __$.gM1(), H = __$.FM1(), O = __$.QM1(), q = __$.pR6(), M = __$.cR6(), j = __$.lM1(), K = __$.JQA(), tAK.exports = G = class {
      constructor(y, B, b) {
        var F;
        if (this.name = "?xml", this.type = A.Document, y || (y = {}), F = {}, !y.writer) y.writer = new j();else if (C(y.writer)) F = y.writer, y.writer = new j();
        this.options = y, this.writer = y.writer, this.writerOptions = this.writer.filterOptions(F), this.stringify = new M(y), this.onDataCallback = B || function () {}, this.onEndCallback = b || function () {}, this.currentNode = null, this.currentLevel = -1, this.openTags = {}, this.documentStarted = !1, this.documentCompleted = !1, this.root = null;
      }
      createChildNode(y) {
        var B, b, F, Q, u, d, r, c;
        switch (y.type) {
          case A.CData:
            this.cdata(y.value);
            break;
          case A.Comment:
            this.comment(y.value);
            break;
          case A.Element:
            F = {}, r = y.attribs;
            for (b in r) {
              if (!R.call(r, b)) continue;
              B = r[b], F[b] = B.value;
            }
            this.node(y.name, F);
            break;
          case A.Dummy:
            this.dummy();
            break;
          case A.Raw:
            this.raw(y.value);
            break;
          case A.Text:
            this.text(y.value);
            break;
          case A.ProcessingInstruction:
            this.instruction(y.target, y.value);
            break;
          default:
            throw Error("This XML node type is not supported in a JS object: " + y.constructor.name);
        }
        c = y.children;
        for (u = 0, d = c.length; u < d; u++) if (Q = c[u], this.createChildNode(Q), Q.type === A.Element) this.up();
        return this;
      }
      dummy() {
        return this;
      }
      node(y, B, b) {
        if (y == null) throw Error("Missing node name.");
        if (this.root && this.currentLevel === -1) throw Error("Document can only have one root node. " + this.debugInfo(y));
        if (this.openCurrent(), y = f(y), B == null) B = {};
        if (B = f(B), !T(B)) [b, B] = [B, b];
        if (this.currentNode = new Z(this, y, B), this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, b != null) this.text(b);
        return this;
      }
      element(y, B, b) {
        var F, Q, u, d, r, c;
        if (this.currentNode && this.currentNode.type === A.DocType) this.dtdElement(...arguments);else if (Array.isArray(y) || T(y) || N(y)) {
          d = this.options.noValidation, this.options.noValidation = !0, c = new _(this.options).element("TEMP_ROOT"), c.element(y), this.options.noValidation = d, r = c.children;
          for (Q = 0, u = r.length; Q < u; Q++) if (F = r[Q], this.createChildNode(F), F.type === A.Element) this.up();
        } else this.node(y, B, b);
        return this;
      }
      attribute(y, B) {
        var b, F;
        if (!this.currentNode || this.currentNode.children) throw Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(y));
        if (y != null) y = f(y);
        if (T(y)) for (b in y) {
          if (!R.call(y, b)) continue;
          F = y[b], this.attribute(b, F);
        } else {
          if (N(B)) B = B.apply();
          if (this.options.keepNullAttributes && B == null) this.currentNode.attribs[y] = new q(this, y, "");else if (B != null) this.currentNode.attribs[y] = new q(this, y, B);
        }
        return this;
      }
      text(y) {
        var B;
        return this.openCurrent(), B = new P(this, y), this.onData(this.writer.text(B, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }
      cdata(y) {
        var B;
        return this.openCurrent(), B = new Y(this, y), this.onData(this.writer.cdata(B, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }
      comment(y) {
        var B;
        return this.openCurrent(), B = new z(this, y), this.onData(this.writer.comment(B, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }
      raw(y) {
        var B;
        return this.openCurrent(), B = new D(this, y), this.onData(this.writer.raw(B, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }
      instruction(y, B) {
        var b, F, Q, u, d;
        if (this.openCurrent(), y != null) y = f(y);
        if (B != null) B = f(B);
        if (Array.isArray(y)) for (b = 0, u = y.length; b < u; b++) F = y[b], this.instruction(F);else if (T(y)) for (F in y) {
          if (!R.call(y, F)) continue;
          Q = y[F], this.instruction(F, Q);
        } else {
          if (N(B)) B = B.apply();
          d = new W(this, y, B), this.onData(this.writer.processingInstruction(d, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        }
        return this;
      }
      declaration(y, B, b) {
        var F;
        if (this.openCurrent(), this.documentStarted) throw Error("declaration() must be the first node.");
        return F = new X(this, y, B, b), this.onData(this.writer.declaration(F, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }
      doctype(y, B, b) {
        if (this.openCurrent(), y == null) throw Error("Missing root node name.");
        if (this.root) throw Error("dtd() must come before the root node.");
        return this.currentNode = new $(this, B, b), this.currentNode.rootNodeName = y, this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, this;
      }
      dtdElement(y, B) {
        var b;
        return this.openCurrent(), b = new H(this, y, B), this.onData(this.writer.dtdElement(b, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }
      attList(y, B, b, F, Q) {
        var u;
        return this.openCurrent(), u = new w(this, y, B, b, F, Q), this.onData(this.writer.dtdAttList(u, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }
      entity(y, B) {
        var b;
        return this.openCurrent(), b = new J(this, !1, y, B), this.onData(this.writer.dtdEntity(b, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }
      pEntity(y, B) {
        var b;
        return this.openCurrent(), b = new J(this, !0, y, B), this.onData(this.writer.dtdEntity(b, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }
      notation(y, B) {
        var b;
        return this.openCurrent(), b = new O(this, y, B), this.onData(this.writer.dtdNotation(b, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this;
      }
      up() {
        if (this.currentLevel < 0) throw Error("The document node has no parent.");
        if (this.currentNode) {
          if (this.currentNode.children) this.closeNode(this.currentNode);else this.openNode(this.currentNode);
          this.currentNode = null;
        } else this.closeNode(this.openTags[this.currentLevel]);
        return delete this.openTags[this.currentLevel], this.currentLevel--, this;
      }
      end() {
        while (this.currentLevel >= 0) this.up();
        return this.onEnd();
      }
      openCurrent() {
        if (this.currentNode) return this.currentNode.children = !0, this.openNode(this.currentNode);
      }
      openNode(y) {
        var B, b, F, Q;
        if (!y.isOpen) {
          if (!this.root && this.currentLevel === 0 && y.type === A.Element) this.root = y;
          if (b = "", y.type === A.Element) {
            this.writerOptions.state = K.OpenTag, b = this.writer.indent(y, this.writerOptions, this.currentLevel) + "<" + y.name, Q = y.attribs;
            for (F in Q) {
              if (!R.call(Q, F)) continue;
              B = Q[F], b += this.writer.attribute(B, this.writerOptions, this.currentLevel);
            }
            b += (y.children ? ">" : "/>") + this.writer.endline(y, this.writerOptions, this.currentLevel), this.writerOptions.state = K.InsideTag;
          } else {
            if (this.writerOptions.state = K.OpenTag, b = this.writer.indent(y, this.writerOptions, this.currentLevel) + "<!DOCTYPE " + y.rootNodeName, y.pubID && y.sysID) b += ' PUBLIC "' + y.pubID + '" "' + y.sysID + '"';else if (y.sysID) b += ' SYSTEM "' + y.sysID + '"';
            if (y.children) b += " [", this.writerOptions.state = K.InsideTag;else this.writerOptions.state = K.CloseTag, b += ">";
            b += this.writer.endline(y, this.writerOptions, this.currentLevel);
          }
          return this.onData(b, this.currentLevel), y.isOpen = !0;
        }
      }
      closeNode(y) {
        var B;
        if (!y.isClosed) {
          if (B = "", this.writerOptions.state = K.CloseTag, y.type === A.Element) B = this.writer.indent(y, this.writerOptions, this.currentLevel) + "</" + y.name + ">" + this.writer.endline(y, this.writerOptions, this.currentLevel);else B = this.writer.indent(y, this.writerOptions, this.currentLevel) + "]>" + this.writer.endline(y, this.writerOptions, this.currentLevel);
          return this.writerOptions.state = K.None, this.onData(B, this.currentLevel), y.isClosed = !0;
        }
      }
      onData(y, B) {
        return this.documentStarted = !0, this.onDataCallback(y, B + 1);
      }
      onEnd() {
        return this.documentCompleted = !0, this.onEndCallback();
      }
      debugInfo(y) {
        if (y == null) return "";else return "node: <" + y + ">";
      }
      ele() {
        return this.element(...arguments);
      }
      nod(y, B, b) {
        return this.node(y, B, b);
      }
      txt(y) {
        return this.text(y);
      }
      dat(y) {
        return this.cdata(y);
      }
      com(y) {
        return this.comment(y);
      }
      ins(y, B) {
        return this.instruction(y, B);
      }
      dec(y, B, b) {
        return this.declaration(y, B, b);
      }
      dtd(y, B, b) {
        return this.doctype(y, B, b);
      }
      e(y, B, b) {
        return this.element(y, B, b);
      }
      n(y, B, b) {
        return this.node(y, B, b);
      }
      t(y) {
        return this.text(y);
      }
      d(y) {
        return this.cdata(y);
      }
      c(y) {
        return this.comment(y);
      }
      r(y) {
        return this.raw(y);
      }
      i(y, B) {
        return this.instruction(y, B);
      }
      att() {
        if (this.currentNode && this.currentNode.type === A.DocType) return this.attList(...arguments);else return this.attribute(...arguments);
      }
      a() {
        if (this.currentNode && this.currentNode.type === A.DocType) return this.attList(...arguments);else return this.attribute(...arguments);
      }
      ent(y, B) {
        return this.entity(y, B);
      }
      pent(y, B) {
        return this.pEntity(y, B);
      }
      not(y, B) {
        return this.notation(y, B);
      }
    };
  }).call(sAK);
});

// Register to shared state
__$.eAK = eAK;
