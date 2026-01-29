// Module: iR6
// Dependencies: rB, UR6, te7, Dv, DX, cR6, lM1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iR6 = v((oAK, aAK) => {
  (function () {
    var A, K, q, Y, z, w, H, J;
    ({
      isPlainObject: J
    } = __$.rB()), q = __$.UR6(), K = __$.te7(), z = __$.Dv(), A = __$.DX(), H = __$.cR6(), w = __$.lM1(), aAK.exports = Y = function () {
      class O extends z {
        constructor(X) {
          super(null);
          if (this.name = "#document", this.type = A.Document, this.documentURI = null, this.domConfig = new K(), X || (X = {}), !X.writer) X.writer = new w();
          this.options = X, this.stringify = new H(X);
        }
        end(X) {
          var $ = {};
          if (!X) X = this.options.writer;else if (J(X)) $ = X, X = this.options.writer;
          return X.document(this, X.filterOptions($));
        }
        toString(X) {
          return this.options.writer.document(this, this.options.writer.filterOptions(X));
        }
        createElement(X) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        createDocumentFragment() {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        createTextNode(X) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        createComment(X) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        createCDATASection(X) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        createProcessingInstruction(X, $) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        createAttribute(X) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        createEntityReference(X) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        getElementsByTagName(X) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        importNode(X, $) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        createElementNS(X, $) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        createAttributeNS(X, $) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        getElementsByTagNameNS(X, $) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        getElementById(X) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        adoptNode(X) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        normalizeDocument() {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        renameNode(X, $, _) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        getElementsByClassName(X) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        createEvent(X) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        createRange() {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        createNodeIterator(X, $, _) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
        createTreeWalker(X, $, _) {
          throw Error("This DOM method is not implemented." + this.debugInfo());
        }
      }
      return Object.defineProperty(O.prototype, "implementation", {
        value: new q()
      }), Object.defineProperty(O.prototype, "doctype", {
        get: function () {
          var X, $, _, G;
          G = this.children;
          for ($ = 0, _ = G.length; $ < _; $++) if (X = G[$], X.type === A.DocType) return X;
          return null;
        }
      }), Object.defineProperty(O.prototype, "documentElement", {
        get: function () {
          return this.rootObject || null;
        }
      }), Object.defineProperty(O.prototype, "inputEncoding", {
        get: function () {
          return null;
        }
      }), Object.defineProperty(O.prototype, "strictErrorChecking", {
        get: function () {
          return !1;
        }
      }), Object.defineProperty(O.prototype, "xmlEncoding", {
        get: function () {
          if (this.children.length !== 0 && this.children[0].type === A.Declaration) return this.children[0].encoding;else return null;
        }
      }), Object.defineProperty(O.prototype, "xmlStandalone", {
        get: function () {
          if (this.children.length !== 0 && this.children[0].type === A.Declaration) return this.children[0].standalone === "yes";else return !1;
        }
      }), Object.defineProperty(O.prototype, "xmlVersion", {
        get: function () {
          if (this.children.length !== 0 && this.children[0].type === A.Declaration) return this.children[0].version;else return "1.0";
        }
      }), Object.defineProperty(O.prototype, "URL", {
        get: function () {
          return this.documentURI;
        }
      }), Object.defineProperty(O.prototype, "origin", {
        get: function () {
          return null;
        }
      }), Object.defineProperty(O.prototype, "compatMode", {
        get: function () {
          return null;
        }
      }), Object.defineProperty(O.prototype, "characterSet", {
        get: function () {
          return null;
        }
      }), Object.defineProperty(O.prototype, "contentType", {
        get: function () {
          return null;
        }
      }), O;
    }.call(this);
  }).call(oAK);
});

// Register to shared state
__$.iR6 = iR6;
