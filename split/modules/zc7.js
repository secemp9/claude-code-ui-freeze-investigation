// Module: zc7
// Dependencies: Bk6, eD1, oD1, Jt, dD1, s5A, VS, lD1, cD1, Ot
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zc7 = v((TEH, Yc7) => {
  Yc7.exports = Yd;
  Yd.filename = null;
  Yd.defaults = {
    keepCase: !1
  };
  var y92 = __$.Bk6(),
    ed7 = __$.eD1(),
    Ac7 = __$.oD1(),
    Kc7 = __$.Jt(),
    I92 = __$.dD1(),
    qc7 = __$.s5A(),
    S92 = __$.VS(),
    h92 = __$.lD1(),
    b92 = __$.cD1(),
    x92 = __$.Ot(),
    u92 = __$.t5A(),
    mk6 = __$.pG(),
    B92 = /^[1-9][0-9]*$/,
    m92 = /^-?[1-9][0-9]*$/,
    g92 = /^0[x][0-9a-fA-F]+$/,
    F92 = /^-?0[x][0-9a-fA-F]+$/,
    Q92 = /^0[0-7]+$/,
    U92 = /^-?0[0-7]+$/,
    p92 = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
    hB = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
    bB = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
  function Yd(A, K, q) {
    if (!(K instanceof ed7)) q = K, K = new ed7();
    if (!q) q = Yd.defaults;
    var Y = q.preferTrailingComment || !1,
      z = y92(A, q.alternateCommentMode || !1),
      w = z.next,
      H = z.push,
      J = z.peek,
      O = z.skip,
      X = z.cmnt,
      $ = !0,
      _,
      G,
      Z,
      W = "proto2",
      D = K,
      j = [],
      M = {},
      P = q.keepCase ? function (OA) {
        return OA;
      } : mk6.camelCase;
    function f() {
      j.forEach(OA => {
        OA._edition = W, Object.keys(M).forEach(t => {
          if (OA.getOption(t) !== void 0) return;
          OA.setOption(t, M[t], !0);
        });
      });
    }
    function N(OA, t, XA) {
      var VA = Yd.filename;
      if (!XA) Yd.filename = null;
      return Error("illegal " + (t || "token") + " '" + OA + "' (" + (VA ? VA + ", " : "") + "line " + z.line + ")");
    }
    function T() {
      var OA = [],
        t;
      do {
        if ((t = w()) !== '"' && t !== "'") throw N(t);
        OA.push(w()), O(t), t = J();
      } while (t === '"' || t === "'");
      return OA.join("");
    }
    function C(OA) {
      var t = w();
      switch (t) {
        case "'":
        case '"':
          return H(t), T();
        case "true":
        case "TRUE":
          return !0;
        case "false":
        case "FALSE":
          return !1;
      }
      try {
        return x(t, !0);
      } catch (XA) {
        if (OA && bB.test(t)) return t;
        throw N(t, "value");
      }
    }
    function R(OA, t) {
      var XA, VA;
      do if (t && ((XA = J()) === '"' || XA === "'")) {
        var vA = T();
        if (OA.push(vA), W >= 2023) throw N(vA, "id");
      } else try {
        OA.push([VA = y(w()), O("to", !0) ? y(w()) : VA]);
      } catch (fA) {
        if (t && bB.test(XA) && W >= 2023) OA.push(XA);else throw fA;
      } while (O(",", !0));
      var RA = {
        options: void 0
      };
      RA.setOption = function (fA, LA) {
        if (this.options === void 0) this.options = {};
        this.options[fA] = LA;
      }, d(RA, function (LA) {
        if (LA === "option") a(RA, LA), O(";");else throw N(LA);
      }, function () {
        hA(RA);
      });
    }
    function x(OA, t) {
      var XA = 1;
      if (OA.charAt(0) === "-") XA = -1, OA = OA.substring(1);
      switch (OA) {
        case "inf":
        case "INF":
        case "Inf":
          return XA * (1 / 0);
        case "nan":
        case "NAN":
        case "Nan":
        case "NaN":
          return NaN;
        case "0":
          return 0;
      }
      if (B92.test(OA)) return XA * parseInt(OA, 10);
      if (g92.test(OA)) return XA * parseInt(OA, 16);
      if (Q92.test(OA)) return XA * parseInt(OA, 8);
      if (p92.test(OA)) return XA * parseFloat(OA);
      throw N(OA, "number", t);
    }
    function y(OA, t) {
      switch (OA) {
        case "max":
        case "MAX":
        case "Max":
          return 536870911;
        case "0":
          return 0;
      }
      if (!t && OA.charAt(0) === "-") throw N(OA, "id");
      if (m92.test(OA)) return parseInt(OA, 10);
      if (F92.test(OA)) return parseInt(OA, 16);
      if (U92.test(OA)) return parseInt(OA, 8);
      throw N(OA, "id");
    }
    function B() {
      if (_ !== void 0) throw N("package");
      if (_ = w(), !bB.test(_)) throw N(_, "name");
      D = D.define(_), O(";");
    }
    function b() {
      var OA = J(),
        t;
      switch (OA) {
        case "weak":
          t = Z || (Z = []), w();
          break;
        case "public":
          w();
        default:
          t = G || (G = []);
          break;
      }
      OA = T(), O(";"), t.push(OA);
    }
    function F() {
      if (O("="), W = T(), W < 2023) throw N(W, "syntax");
      O(";");
    }
    function Q() {
      if (O("="), W = T(), !["2023"].includes(W)) throw N(W, "edition");
      O(";");
    }
    function u(OA, t) {
      switch (t) {
        case "option":
          return a(OA, t), O(";"), !0;
        case "message":
          return r(OA, t), !0;
        case "enum":
          return HA(OA, t), !0;
        case "service":
          return yA(OA, t), !0;
        case "extend":
          return wA(OA, t), !0;
      }
      return !1;
    }
    function d(OA, t, XA) {
      var VA = z.line;
      if (OA) {
        if (typeof OA.comment !== "string") OA.comment = X();
        OA.filename = Yd.filename;
      }
      if (O("{", !0)) {
        var vA;
        while ((vA = w()) !== "}") t(vA);
        O(";", !0);
      } else {
        if (XA) XA();
        if (O(";"), OA && (typeof OA.comment !== "string" || Y)) OA.comment = X(VA) || OA.comment;
      }
    }
    function r(OA, t) {
      if (!hB.test(t = w())) throw N(t, "type name");
      var XA = new Ac7(t);
      if (d(XA, function (vA) {
        if (u(XA, vA)) return;
        switch (vA) {
          case "map":
            e(XA, vA);
            break;
          case "required":
            if (W !== "proto2") throw N(vA);
          case "repeated":
            c(XA, vA);
            break;
          case "optional":
            if (W === "proto3") c(XA, "proto3_optional");else if (W !== "proto2") throw N(vA);else c(XA, "optional");
            break;
          case "oneof":
            qA(XA, vA);
            break;
          case "extensions":
            R(XA.extensions || (XA.extensions = []));
            break;
          case "reserved":
            R(XA.reserved || (XA.reserved = []), !0);
            break;
          default:
            if (W === "proto2" || !bB.test(vA)) throw N(vA);
            H(vA), c(XA, "optional");
            break;
        }
      }), OA.add(XA), OA === D) j.push(XA);
    }
    function c(OA, t, XA) {
      var VA = w();
      if (VA === "group") {
        YA(OA, t);
        return;
      }
      while (VA.endsWith(".") || J().startsWith(".")) VA += w();
      if (!bB.test(VA)) throw N(VA, "type");
      var vA = w();
      if (!hB.test(vA)) throw N(vA, "name");
      vA = P(vA), O("=");
      var RA = new Kc7(vA, y(w()), VA, t, XA);
      if (d(RA, function (SA) {
        if (SA === "option") a(RA, SA), O(";");else throw N(SA);
      }, function () {
        hA(RA);
      }), t === "proto3_optional") {
        var fA = new qc7("_" + vA);
        RA.setOption("proto3_optional", !0), fA.add(RA), OA.add(fA);
      } else OA.add(RA);
      if (OA === D) j.push(RA);
    }
    function YA(OA, t) {
      if (W >= 2023) throw N("group");
      var XA = w();
      if (!hB.test(XA)) throw N(XA, "name");
      var VA = mk6.lcFirst(XA);
      if (XA === VA) XA = mk6.ucFirst(XA);
      O("=");
      var vA = y(w()),
        RA = new Ac7(XA);
      RA.group = !0;
      var fA = new Kc7(VA, vA, XA, t);
      fA.filename = Yd.filename, d(RA, function (SA) {
        switch (SA) {
          case "option":
            a(RA, SA), O(";");
            break;
          case "required":
          case "repeated":
            c(RA, SA);
            break;
          case "optional":
            if (W === "proto3") c(RA, "proto3_optional");else c(RA, "optional");
            break;
          case "message":
            r(RA, SA);
            break;
          case "enum":
            HA(RA, SA);
            break;
          case "reserved":
            R(RA.reserved || (RA.reserved = []), !0);
            break;
          default:
            throw N(SA);
        }
      }), OA.add(RA).add(fA);
    }
    function e(OA) {
      O("<");
      var t = w();
      if (u92.mapKey[t] === void 0) throw N(t, "type");
      O(",");
      var XA = w();
      if (!bB.test(XA)) throw N(XA, "type");
      O(">");
      var VA = w();
      if (!hB.test(VA)) throw N(VA, "name");
      O("=");
      var vA = new I92(P(VA), y(w()), t, XA);
      d(vA, function (fA) {
        if (fA === "option") a(vA, fA), O(";");else throw N(fA);
      }, function () {
        hA(vA);
      }), OA.add(vA);
    }
    function qA(OA, t) {
      if (!hB.test(t = w())) throw N(t, "name");
      var XA = new qc7(P(t));
      d(XA, function (vA) {
        if (vA === "option") a(XA, vA), O(";");else H(vA), c(XA, "optional");
      }), OA.add(XA);
    }
    function HA(OA, t) {
      if (!hB.test(t = w())) throw N(t, "name");
      var XA = new S92(t);
      if (d(XA, function (vA) {
        switch (vA) {
          case "option":
            a(XA, vA), O(";");
            break;
          case "reserved":
            if (R(XA.reserved || (XA.reserved = []), !0), XA.reserved === void 0) XA.reserved = [];
            break;
          default:
            _A(XA, vA);
        }
      }), OA.add(XA), OA === D) j.push(XA);
    }
    function _A(OA, t) {
      if (!hB.test(t)) throw N(t, "name");
      O("=");
      var XA = y(w(), !0),
        VA = {
          options: void 0
        };
      VA.getOption = function (vA) {
        return this.options[vA];
      }, VA.setOption = function (vA, RA) {
        x92.prototype.setOption.call(VA, vA, RA);
      }, VA.setParsedOption = function () {
        return;
      }, d(VA, function (RA) {
        if (RA === "option") a(VA, RA), O(";");else throw N(RA);
      }, function () {
        hA(VA);
      }), OA.add(t, XA, VA.comment, VA.parsedOptions || VA.options);
    }
    function a(OA, t) {
      var XA,
        VA,
        vA = !0;
      if (t === "option") t = w();
      while (t !== "=") {
        if (t === "(") {
          var RA = w();
          O(")"), t = "(" + RA + ")";
        }
        if (vA) {
          if (vA = !1, t.includes(".") && !t.includes("(")) {
            var fA = t.split(".");
            XA = fA[0] + ".", t = fA[1];
            continue;
          }
          XA = t;
        } else VA = VA ? VA += t : t;
        t = w();
      }
      var LA = VA ? XA.concat(VA) : XA,
        SA = JA(OA, LA);
      VA = VA && VA[0] === "." ? VA.slice(1) : VA, XA = XA && XA[XA.length - 1] === "." ? XA.slice(0, -1) : XA, MA(OA, XA, SA, VA);
    }
    function JA(OA, t) {
      if (O("{", !0)) {
        var XA = {};
        while (!O("}", !0)) {
          if (!hB.test(GA = w())) throw N(GA, "name");
          if (GA === null) throw N(GA, "end of input");
          var VA,
            vA = GA;
          if (O(":", !0), J() === "{") VA = JA(OA, t + "." + GA);else if (J() === "[") {
            VA = [];
            var RA;
            if (O("[", !0)) {
              do RA = C(!0), VA.push(RA); while (O(",", !0));
              if (O("]"), typeof RA < "u") jA(OA, t + "." + GA, RA);
            }
          } else VA = C(!0), jA(OA, t + "." + GA, VA);
          var fA = XA[vA];
          if (fA) VA = [].concat(fA).concat(VA);
          XA[vA] = VA, O(",", !0), O(";", !0);
        }
        return XA;
      }
      var LA = C(!0);
      return jA(OA, t, LA), LA;
    }
    function jA(OA, t, XA) {
      if (D === OA && /^features\./.test(t)) {
        M[t] = XA;
        return;
      }
      if (OA.setOption) OA.setOption(t, XA);
    }
    function MA(OA, t, XA, VA) {
      if (OA.setParsedOption) OA.setParsedOption(t, XA, VA);
    }
    function hA(OA) {
      if (O("[", !0)) {
        do a(OA, "option"); while (O(",", !0));
        O("]");
      }
      return OA;
    }
    function yA(OA, t) {
      if (!hB.test(t = w())) throw N(t, "service name");
      var XA = new h92(t);
      if (d(XA, function (vA) {
        if (u(XA, vA)) return;
        if (vA === "rpc") AA(XA, vA);else throw N(vA);
      }), OA.add(XA), OA === D) j.push(XA);
    }
    function AA(OA, t) {
      var XA = X(),
        VA = t;
      if (!hB.test(t = w())) throw N(t, "name");
      var vA = t,
        RA,
        fA,
        LA,
        SA;
      if (O("("), O("stream", !0)) fA = !0;
      if (!bB.test(t = w())) throw N(t);
      if (RA = t, O(")"), O("returns"), O("("), O("stream", !0)) SA = !0;
      if (!bB.test(t = w())) throw N(t);
      LA = t, O(")");
      var xA = new b92(vA, VA, RA, LA, fA, SA);
      xA.comment = XA, d(xA, function (lA) {
        if (lA === "option") a(xA, lA), O(";");else throw N(lA);
      }), OA.add(xA);
    }
    function wA(OA, t) {
      if (!bB.test(t = w())) throw N(t, "reference");
      var XA = t;
      d(null, function (vA) {
        switch (vA) {
          case "required":
          case "repeated":
            c(OA, vA, XA);
            break;
          case "optional":
            if (W === "proto3") c(OA, "proto3_optional", XA);else c(OA, "optional", XA);
            break;
          default:
            if (W === "proto2" || !bB.test(vA)) throw N(vA);
            H(vA), c(OA, "optional", XA);
            break;
        }
      });
    }
    var GA;
    while ((GA = w()) !== null) switch (GA) {
      case "package":
        if (!$) throw N(GA);
        B();
        break;
      case "import":
        if (!$) throw N(GA);
        b();
        break;
      case "syntax":
        if (!$) throw N(GA);
        F();
        break;
      case "edition":
        if (!$) throw N(GA);
        Q();
        break;
      case "option":
        a(D, GA), O(";", !0);
        break;
      default:
        if (u(D, GA)) {
          $ = !1;
          continue;
        }
        throw N(GA);
    }
    return f(), Yd.filename = null, {
      package: _,
      imports: G,
      weakImports: Z,
      root: K
    };
  }
});

// Register to shared state
__$.zc7 = zc7;
