// Module: q1K
// Dependencies: DX, lR6, JQA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var q1K = v((A1K, K1K) => {
  (function () {
    var A,
      K,
      q,
      Y,
      z = {}.hasOwnProperty;
    A = __$.DX(), Y = __$.lR6(), K = __$.JQA(), K1K.exports = q = class extends Y {
      constructor(H, J) {
        super(J);
        this.stream = H;
      }
      endline(H, J, O) {
        if (H.isLastRootNode && J.state === K.CloseTag) return "";else return super.endline(H, J, O);
      }
      document(H, J) {
        var O, X, $, _, G, Z, W, D, j;
        W = H.children;
        for (X = $ = 0, G = W.length; $ < G; X = ++$) O = W[X], O.isLastRootNode = X === H.children.length - 1;
        J = this.filterOptions(J), D = H.children, j = [];
        for (_ = 0, Z = D.length; _ < Z; _++) O = D[_], j.push(this.writeChildNode(O, J, 0));
        return j;
      }
      cdata(H, J, O) {
        return this.stream.write(super.cdata(H, J, O));
      }
      comment(H, J, O) {
        return this.stream.write(super.comment(H, J, O));
      }
      declaration(H, J, O) {
        return this.stream.write(super.declaration(H, J, O));
      }
      docType(H, J, O) {
        var X, $, _, G;
        if (O || (O = 0), this.openNode(H, J, O), J.state = K.OpenTag, this.stream.write(this.indent(H, J, O)), this.stream.write("<!DOCTYPE " + H.root().name), H.pubID && H.sysID) this.stream.write(' PUBLIC "' + H.pubID + '" "' + H.sysID + '"');else if (H.sysID) this.stream.write(' SYSTEM "' + H.sysID + '"');
        if (H.children.length > 0) {
          this.stream.write(" ["), this.stream.write(this.endline(H, J, O)), J.state = K.InsideTag, G = H.children;
          for ($ = 0, _ = G.length; $ < _; $++) X = G[$], this.writeChildNode(X, J, O + 1);
          J.state = K.CloseTag, this.stream.write("]");
        }
        return J.state = K.CloseTag, this.stream.write(J.spaceBeforeSlash + ">"), this.stream.write(this.endline(H, J, O)), J.state = K.None, this.closeNode(H, J, O);
      }
      element(H, J, O) {
        var X, $, _, G, Z, W, D, j, M, P, f, N, T, C, R, x;
        if (O || (O = 0), this.openNode(H, J, O), J.state = K.OpenTag, f = this.indent(H, J, O) + "<" + H.name, J.pretty && J.width > 0) {
          D = f.length, T = H.attribs;
          for (M in T) {
            if (!z.call(T, M)) continue;
            if (X = T[M], N = this.attribute(X, J, O), $ = N.length, D + $ > J.width) x = this.indent(H, J, O + 1) + N, f += this.endline(H, J, O) + x, D = x.length;else x = " " + N, f += x, D += x.length;
          }
        } else {
          C = H.attribs;
          for (M in C) {
            if (!z.call(C, M)) continue;
            X = C[M], f += this.attribute(X, J, O);
          }
        }
        if (this.stream.write(f), G = H.children.length, Z = G === 0 ? null : H.children[0], G === 0 || H.children.every(function (y) {
          return (y.type === A.Text || y.type === A.Raw || y.type === A.CData) && y.value === "";
        })) {
          if (J.allowEmpty) this.stream.write(">"), J.state = K.CloseTag, this.stream.write("</" + H.name + ">");else J.state = K.CloseTag, this.stream.write(J.spaceBeforeSlash + "/>");
        } else if (J.pretty && G === 1 && (Z.type === A.Text || Z.type === A.Raw || Z.type === A.CData) && Z.value != null) this.stream.write(">"), J.state = K.InsideTag, J.suppressPrettyCount++, P = !0, this.writeChildNode(Z, J, O + 1), J.suppressPrettyCount--, P = !1, J.state = K.CloseTag, this.stream.write("</" + H.name + ">");else {
          this.stream.write(">" + this.endline(H, J, O)), J.state = K.InsideTag, R = H.children;
          for (W = 0, j = R.length; W < j; W++) _ = R[W], this.writeChildNode(_, J, O + 1);
          J.state = K.CloseTag, this.stream.write(this.indent(H, J, O) + "</" + H.name + ">");
        }
        return this.stream.write(this.endline(H, J, O)), J.state = K.None, this.closeNode(H, J, O);
      }
      processingInstruction(H, J, O) {
        return this.stream.write(super.processingInstruction(H, J, O));
      }
      raw(H, J, O) {
        return this.stream.write(super.raw(H, J, O));
      }
      text(H, J, O) {
        return this.stream.write(super.text(H, J, O));
      }
      dtdAttList(H, J, O) {
        return this.stream.write(super.dtdAttList(H, J, O));
      }
      dtdElement(H, J, O) {
        return this.stream.write(super.dtdElement(H, J, O));
      }
      dtdEntity(H, J, O) {
        return this.stream.write(super.dtdEntity(H, J, O));
      }
      dtdNotation(H, J, O) {
        return this.stream.write(super.dtdNotation(H, J, O));
      }
    };
  }).call(A1K);
});

// Register to shared state
__$.q1K = q1K;
