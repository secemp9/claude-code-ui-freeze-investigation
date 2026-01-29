// Module: lR6
// Dependencies: rB, DX, BM1, UM1, xM1, uM1, bM1, pM1, dM1, cM1
//   ... and 6 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lR6 = v((lAK, iAK) => {
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
      M = {}.hasOwnProperty;
    ({
      assign: j
    } = __$.rB()), A = __$.DX(), O = __$.BM1(), X = __$.UM1(), q = __$.xM1(), Y = __$.uM1(), _ = __$.bM1(), Z = __$.pM1(), W = __$.dM1(), G = __$.cM1(), $ = __$.dR6(), z = __$.mM1(), w = __$.FM1(), H = __$.gM1(), J = __$.QM1(), K = __$.JQA(), iAK.exports = D = class {
      constructor(f) {
        var N, T, C;
        f || (f = {}), this.options = f, T = f.writer || {};
        for (N in T) {
          if (!M.call(T, N)) continue;
          C = T[N], this["_" + N] = this[N], this[N] = C;
        }
      }
      filterOptions(f) {
        var N, T, C, R, x, y, B, b, F;
        if (f || (f = {}), f = j({}, this.options, f), N = {
          writer: this
        }, N.pretty = f.pretty || !1, N.allowEmpty = f.allowEmpty || !1, N.indent = (T = f.indent) != null ? T : "  ", N.newline = (C = f.newline) != null ? C : `
`, N.offset = (R = f.offset) != null ? R : 0, N.width = (x = f.width) != null ? x : 0, N.dontPrettyTextNodes = (y = (B = f.dontPrettyTextNodes) != null ? B : f.dontprettytextnodes) != null ? y : 0, N.spaceBeforeSlash = (b = (F = f.spaceBeforeSlash) != null ? F : f.spacebeforeslash) != null ? b : "", N.spaceBeforeSlash === !0) N.spaceBeforeSlash = " ";
        return N.suppressPrettyCount = 0, N.user = {}, N.state = K.None, N;
      }
      indent(f, N, T) {
        var C;
        if (!N.pretty || N.suppressPrettyCount) return "";else if (N.pretty) {
          if (C = (T || 0) + N.offset + 1, C > 0) return Array(C).join(N.indent);
        }
        return "";
      }
      endline(f, N, T) {
        if (!N.pretty || N.suppressPrettyCount) return "";else return N.newline;
      }
      attribute(f, N, T) {
        var C;
        if (this.openAttribute(f, N, T), N.pretty && N.width > 0) C = f.name + '="' + f.value + '"';else C = " " + f.name + '="' + f.value + '"';
        return this.closeAttribute(f, N, T), C;
      }
      cdata(f, N, T) {
        var C;
        return this.openNode(f, N, T), N.state = K.OpenTag, C = this.indent(f, N, T) + "<![CDATA[", N.state = K.InsideTag, C += f.value, N.state = K.CloseTag, C += "]]>" + this.endline(f, N, T), N.state = K.None, this.closeNode(f, N, T), C;
      }
      comment(f, N, T) {
        var C;
        return this.openNode(f, N, T), N.state = K.OpenTag, C = this.indent(f, N, T) + "<!-- ", N.state = K.InsideTag, C += f.value, N.state = K.CloseTag, C += " -->" + this.endline(f, N, T), N.state = K.None, this.closeNode(f, N, T), C;
      }
      declaration(f, N, T) {
        var C;
        if (this.openNode(f, N, T), N.state = K.OpenTag, C = this.indent(f, N, T) + "<?xml", N.state = K.InsideTag, C += ' version="' + f.version + '"', f.encoding != null) C += ' encoding="' + f.encoding + '"';
        if (f.standalone != null) C += ' standalone="' + f.standalone + '"';
        return N.state = K.CloseTag, C += N.spaceBeforeSlash + "?>", C += this.endline(f, N, T), N.state = K.None, this.closeNode(f, N, T), C;
      }
      docType(f, N, T) {
        var C, R, x, y, B;
        if (T || (T = 0), this.openNode(f, N, T), N.state = K.OpenTag, y = this.indent(f, N, T), y += "<!DOCTYPE " + f.root().name, f.pubID && f.sysID) y += ' PUBLIC "' + f.pubID + '" "' + f.sysID + '"';else if (f.sysID) y += ' SYSTEM "' + f.sysID + '"';
        if (f.children.length > 0) {
          y += " [", y += this.endline(f, N, T), N.state = K.InsideTag, B = f.children;
          for (R = 0, x = B.length; R < x; R++) C = B[R], y += this.writeChildNode(C, N, T + 1);
          N.state = K.CloseTag, y += "]";
        }
        return N.state = K.CloseTag, y += N.spaceBeforeSlash + ">", y += this.endline(f, N, T), N.state = K.None, this.closeNode(f, N, T), y;
      }
      element(f, N, T) {
        var C, R, x, y, B, b, F, Q, u, d, r, c, YA, e, qA, HA, _A, a, JA;
        if (T || (T = 0), c = !1, this.openNode(f, N, T), N.state = K.OpenTag, YA = this.indent(f, N, T) + "<" + f.name, N.pretty && N.width > 0) {
          Q = YA.length, qA = f.attribs;
          for (r in qA) {
            if (!M.call(qA, r)) continue;
            if (C = qA[r], e = this.attribute(C, N, T), R = e.length, Q + R > N.width) JA = this.indent(f, N, T + 1) + e, YA += this.endline(f, N, T) + JA, Q = JA.length;else JA = " " + e, YA += JA, Q += JA.length;
          }
        } else {
          HA = f.attribs;
          for (r in HA) {
            if (!M.call(HA, r)) continue;
            C = HA[r], YA += this.attribute(C, N, T);
          }
        }
        if (y = f.children.length, B = y === 0 ? null : f.children[0], y === 0 || f.children.every(function (jA) {
          return (jA.type === A.Text || jA.type === A.Raw || jA.type === A.CData) && jA.value === "";
        })) {
          if (N.allowEmpty) YA += ">", N.state = K.CloseTag, YA += "</" + f.name + ">" + this.endline(f, N, T);else N.state = K.CloseTag, YA += N.spaceBeforeSlash + "/>" + this.endline(f, N, T);
        } else if (N.pretty && y === 1 && (B.type === A.Text || B.type === A.Raw || B.type === A.CData) && B.value != null) YA += ">", N.state = K.InsideTag, N.suppressPrettyCount++, c = !0, YA += this.writeChildNode(B, N, T + 1), N.suppressPrettyCount--, c = !1, N.state = K.CloseTag, YA += "</" + f.name + ">" + this.endline(f, N, T);else {
          if (N.dontPrettyTextNodes) {
            _A = f.children;
            for (b = 0, u = _A.length; b < u; b++) if (x = _A[b], (x.type === A.Text || x.type === A.Raw || x.type === A.CData) && x.value != null) {
              N.suppressPrettyCount++, c = !0;
              break;
            }
          }
          YA += ">" + this.endline(f, N, T), N.state = K.InsideTag, a = f.children;
          for (F = 0, d = a.length; F < d; F++) x = a[F], YA += this.writeChildNode(x, N, T + 1);
          if (N.state = K.CloseTag, YA += this.indent(f, N, T) + "</" + f.name + ">", c) N.suppressPrettyCount--;
          YA += this.endline(f, N, T), N.state = K.None;
        }
        return this.closeNode(f, N, T), YA;
      }
      writeChildNode(f, N, T) {
        switch (f.type) {
          case A.CData:
            return this.cdata(f, N, T);
          case A.Comment:
            return this.comment(f, N, T);
          case A.Element:
            return this.element(f, N, T);
          case A.Raw:
            return this.raw(f, N, T);
          case A.Text:
            return this.text(f, N, T);
          case A.ProcessingInstruction:
            return this.processingInstruction(f, N, T);
          case A.Dummy:
            return "";
          case A.Declaration:
            return this.declaration(f, N, T);
          case A.DocType:
            return this.docType(f, N, T);
          case A.AttributeDeclaration:
            return this.dtdAttList(f, N, T);
          case A.ElementDeclaration:
            return this.dtdElement(f, N, T);
          case A.EntityDeclaration:
            return this.dtdEntity(f, N, T);
          case A.NotationDeclaration:
            return this.dtdNotation(f, N, T);
          default:
            throw Error("Unknown XML node type: " + f.constructor.name);
        }
      }
      processingInstruction(f, N, T) {
        var C;
        if (this.openNode(f, N, T), N.state = K.OpenTag, C = this.indent(f, N, T) + "<?", N.state = K.InsideTag, C += f.target, f.value) C += " " + f.value;
        return N.state = K.CloseTag, C += N.spaceBeforeSlash + "?>", C += this.endline(f, N, T), N.state = K.None, this.closeNode(f, N, T), C;
      }
      raw(f, N, T) {
        var C;
        return this.openNode(f, N, T), N.state = K.OpenTag, C = this.indent(f, N, T), N.state = K.InsideTag, C += f.value, N.state = K.CloseTag, C += this.endline(f, N, T), N.state = K.None, this.closeNode(f, N, T), C;
      }
      text(f, N, T) {
        var C;
        return this.openNode(f, N, T), N.state = K.OpenTag, C = this.indent(f, N, T), N.state = K.InsideTag, C += f.value, N.state = K.CloseTag, C += this.endline(f, N, T), N.state = K.None, this.closeNode(f, N, T), C;
      }
      dtdAttList(f, N, T) {
        var C;
        if (this.openNode(f, N, T), N.state = K.OpenTag, C = this.indent(f, N, T) + "<!ATTLIST", N.state = K.InsideTag, C += " " + f.elementName + " " + f.attributeName + " " + f.attributeType, f.defaultValueType !== "#DEFAULT") C += " " + f.defaultValueType;
        if (f.defaultValue) C += ' "' + f.defaultValue + '"';
        return N.state = K.CloseTag, C += N.spaceBeforeSlash + ">" + this.endline(f, N, T), N.state = K.None, this.closeNode(f, N, T), C;
      }
      dtdElement(f, N, T) {
        var C;
        return this.openNode(f, N, T), N.state = K.OpenTag, C = this.indent(f, N, T) + "<!ELEMENT", N.state = K.InsideTag, C += " " + f.name + " " + f.value, N.state = K.CloseTag, C += N.spaceBeforeSlash + ">" + this.endline(f, N, T), N.state = K.None, this.closeNode(f, N, T), C;
      }
      dtdEntity(f, N, T) {
        var C;
        if (this.openNode(f, N, T), N.state = K.OpenTag, C = this.indent(f, N, T) + "<!ENTITY", N.state = K.InsideTag, f.pe) C += " %";
        if (C += " " + f.name, f.value) C += ' "' + f.value + '"';else {
          if (f.pubID && f.sysID) C += ' PUBLIC "' + f.pubID + '" "' + f.sysID + '"';else if (f.sysID) C += ' SYSTEM "' + f.sysID + '"';
          if (f.nData) C += " NDATA " + f.nData;
        }
        return N.state = K.CloseTag, C += N.spaceBeforeSlash + ">" + this.endline(f, N, T), N.state = K.None, this.closeNode(f, N, T), C;
      }
      dtdNotation(f, N, T) {
        var C;
        if (this.openNode(f, N, T), N.state = K.OpenTag, C = this.indent(f, N, T) + "<!NOTATION", N.state = K.InsideTag, C += " " + f.name, f.pubID && f.sysID) C += ' PUBLIC "' + f.pubID + '" "' + f.sysID + '"';else if (f.pubID) C += ' PUBLIC "' + f.pubID + '"';else if (f.sysID) C += ' SYSTEM "' + f.sysID + '"';
        return N.state = K.CloseTag, C += N.spaceBeforeSlash + ">" + this.endline(f, N, T), N.state = K.None, this.closeNode(f, N, T), C;
      }
      openNode(f, N, T) {}
      closeNode(f, N, T) {}
      openAttribute(f, N, T) {}
      closeAttribute(f, N, T) {}
    };
  }).call(lAK);
});

// Register to shared state
__$.lR6 = lR6;
