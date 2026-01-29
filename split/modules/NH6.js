// Module: NH6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var NH6 = v((Nr4, cz1) => {
  (function (A) {
    var K,
      q = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
      Y = Math.ceil,
      z = Math.floor,
      w = "[BigNumber Error] ",
      H = w + "Number primitive has more than 15 significant digits: ",
      J = 100000000000000,
      O = 14,
      X = 9007199254740991,
      $ = [1, 10, 100, 1000, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 10000000000, 100000000000, 1000000000000, 10000000000000],
      _ = 1e7,
      G = 1e9;
    function Z(T) {
      var C,
        R,
        x,
        y = a.prototype = {
          constructor: a,
          toString: null,
          valueOf: null
        },
        B = new a(1),
        b = 20,
        F = 4,
        Q = -7,
        u = 21,
        d = -1e7,
        r = 1e7,
        c = !1,
        YA = 1,
        e = 0,
        qA = {
          prefix: "",
          groupSize: 3,
          secondaryGroupSize: 0,
          groupSeparator: ",",
          decimalSeparator: ".",
          fractionGroupSize: 0,
          fractionGroupSeparator: " ",
          suffix: ""
        },
        HA = "0123456789abcdefghijklmnopqrstuvwxyz",
        _A = !0;
      function a(AA, wA) {
        var GA,
          OA,
          t,
          XA,
          VA,
          vA,
          RA,
          fA,
          LA = this;
        if (!(LA instanceof a)) return new a(AA, wA);
        if (wA == null) {
          if (AA && AA._isBigNumber === !0) {
            if (LA.s = AA.s, !AA.c || AA.e > r) LA.c = LA.e = null;else if (AA.e < d) LA.c = [LA.e = 0];else LA.e = AA.e, LA.c = AA.c.slice();
            return;
          }
          if ((vA = typeof AA == "number") && AA * 0 == 0) {
            if (LA.s = 1 / AA < 0 ? (AA = -AA, -1) : 1, AA === ~~AA) {
              for (XA = 0, VA = AA; VA >= 10; VA /= 10, XA++);
              if (XA > r) LA.c = LA.e = null;else LA.e = XA, LA.c = [AA];
              return;
            }
            fA = String(AA);
          } else {
            if (!q.test(fA = String(AA))) return x(LA, fA, vA);
            LA.s = fA.charCodeAt(0) == 45 ? (fA = fA.slice(1), -1) : 1;
          }
          if ((XA = fA.indexOf(".")) > -1) fA = fA.replace(".", "");
          if ((VA = fA.search(/e/i)) > 0) {
            if (XA < 0) XA = VA;
            XA += +fA.slice(VA + 1), fA = fA.substring(0, VA);
          } else if (XA < 0) XA = fA.length;
        } else {
          if (M(wA, 2, HA.length, "Base"), wA == 10 && _A) return LA = new a(AA), hA(LA, b + LA.e + 1, F);
          if (fA = String(AA), vA = typeof AA == "number") {
            if (AA * 0 != 0) return x(LA, fA, vA, wA);
            if (LA.s = 1 / AA < 0 ? (fA = fA.slice(1), -1) : 1, a.DEBUG && fA.replace(/^0\.0*|\./, "").length > 15) throw Error(H + AA);
          } else LA.s = fA.charCodeAt(0) === 45 ? (fA = fA.slice(1), -1) : 1;
          GA = HA.slice(0, wA), XA = VA = 0;
          for (RA = fA.length; VA < RA; VA++) if (GA.indexOf(OA = fA.charAt(VA)) < 0) {
            if (OA == ".") {
              if (VA > XA) {
                XA = RA;
                continue;
              }
            } else if (!t) {
              if (fA == fA.toUpperCase() && (fA = fA.toLowerCase()) || fA == fA.toLowerCase() && (fA = fA.toUpperCase())) {
                t = !0, VA = -1, XA = 0;
                continue;
              }
            }
            return x(LA, String(AA), vA, wA);
          }
          if (vA = !1, fA = R(fA, wA, 10, LA.s), (XA = fA.indexOf(".")) > -1) fA = fA.replace(".", "");else XA = fA.length;
        }
        for (VA = 0; fA.charCodeAt(VA) === 48; VA++);
        for (RA = fA.length; fA.charCodeAt(--RA) === 48;);
        if (fA = fA.slice(VA, ++RA)) {
          if (RA -= VA, vA && a.DEBUG && RA > 15 && (AA > X || AA !== z(AA))) throw Error(H + LA.s * AA);
          if ((XA = XA - VA - 1) > r) LA.c = LA.e = null;else if (XA < d) LA.c = [LA.e = 0];else {
            if (LA.e = XA, LA.c = [], VA = (XA + 1) % O, XA < 0) VA += O;
            if (VA < RA) {
              if (VA) LA.c.push(+fA.slice(0, VA));
              for (RA -= O; VA < RA;) LA.c.push(+fA.slice(VA, VA += O));
              VA = O - (fA = fA.slice(VA)).length;
            } else VA -= RA;
            for (; VA--; fA += "0");
            LA.c.push(+fA);
          }
        } else LA.c = [LA.e = 0];
      }
      a.clone = Z, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.EUCLID = 9, a.config = a.set = function (AA) {
        var wA, GA;
        if (AA != null) if (typeof AA == "object") {
          if (AA.hasOwnProperty(wA = "DECIMAL_PLACES")) GA = AA[wA], M(GA, 0, G, wA), b = GA;
          if (AA.hasOwnProperty(wA = "ROUNDING_MODE")) GA = AA[wA], M(GA, 0, 8, wA), F = GA;
          if (AA.hasOwnProperty(wA = "EXPONENTIAL_AT")) if (GA = AA[wA], GA && GA.pop) M(GA[0], -G, 0, wA), M(GA[1], 0, G, wA), Q = GA[0], u = GA[1];else M(GA, -G, G, wA), Q = -(u = GA < 0 ? -GA : GA);
          if (AA.hasOwnProperty(wA = "RANGE")) if (GA = AA[wA], GA && GA.pop) M(GA[0], -G, -1, wA), M(GA[1], 1, G, wA), d = GA[0], r = GA[1];else if (M(GA, -G, G, wA), GA) d = -(r = GA < 0 ? -GA : GA);else throw Error(w + wA + " cannot be zero: " + GA);
          if (AA.hasOwnProperty(wA = "CRYPTO")) if (GA = AA[wA], GA === !!GA) {
            if (GA) {
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) c = GA;else throw c = !GA, Error(w + "crypto unavailable");
            } else c = GA;
          } else throw Error(w + wA + " not true or false: " + GA);
          if (AA.hasOwnProperty(wA = "MODULO_MODE")) GA = AA[wA], M(GA, 0, 9, wA), YA = GA;
          if (AA.hasOwnProperty(wA = "POW_PRECISION")) GA = AA[wA], M(GA, 0, G, wA), e = GA;
          if (AA.hasOwnProperty(wA = "FORMAT")) if (GA = AA[wA], typeof GA == "object") qA = GA;else throw Error(w + wA + " not an object: " + GA);
          if (AA.hasOwnProperty(wA = "ALPHABET")) if (GA = AA[wA], typeof GA == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(GA)) _A = GA.slice(0, 10) == "0123456789", HA = GA;else throw Error(w + wA + " invalid: " + GA);
        } else throw Error(w + "Object expected: " + AA);
        return {
          DECIMAL_PLACES: b,
          ROUNDING_MODE: F,
          EXPONENTIAL_AT: [Q, u],
          RANGE: [d, r],
          CRYPTO: c,
          MODULO_MODE: YA,
          POW_PRECISION: e,
          FORMAT: qA,
          ALPHABET: HA
        };
      }, a.isBigNumber = function (AA) {
        if (!AA || AA._isBigNumber !== !0) return !1;
        if (!a.DEBUG) return !0;
        var wA,
          GA,
          OA = AA.c,
          t = AA.e,
          XA = AA.s;
        A: if ({}.toString.call(OA) == "[object Array]") {
          if ((XA === 1 || XA === -1) && t >= -G && t <= G && t === z(t)) {
            if (OA[0] === 0) {
              if (t === 0 && OA.length === 1) return !0;
              break A;
            }
            if (wA = (t + 1) % O, wA < 1) wA += O;
            if (String(OA[0]).length == wA) {
              for (wA = 0; wA < OA.length; wA++) if (GA = OA[wA], GA < 0 || GA >= J || GA !== z(GA)) break A;
              if (GA !== 0) return !0;
            }
          }
        } else if (OA === null && t === null && (XA === null || XA === 1 || XA === -1)) return !0;
        throw Error(w + "Invalid BigNumber: " + AA);
      }, a.maximum = a.max = function () {
        return jA(arguments, -1);
      }, a.minimum = a.min = function () {
        return jA(arguments, 1);
      }, a.random = function () {
        var AA = 9007199254740992,
          wA = Math.random() * AA & 2097151 ? function () {
            return z(Math.random() * AA);
          } : function () {
            return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
          };
        return function (GA) {
          var OA,
            t,
            XA,
            VA,
            vA,
            RA = 0,
            fA = [],
            LA = new a(B);
          if (GA == null) GA = b;else M(GA, 0, G);
          if (VA = Y(GA / O), c) if (crypto.getRandomValues) {
            OA = crypto.getRandomValues(new Uint32Array(VA *= 2));
            for (; RA < VA;) if (vA = OA[RA] * 131072 + (OA[RA + 1] >>> 11), vA >= 9000000000000000) t = crypto.getRandomValues(new Uint32Array(2)), OA[RA] = t[0], OA[RA + 1] = t[1];else fA.push(vA % 100000000000000), RA += 2;
            RA = VA / 2;
          } else if (crypto.randomBytes) {
            OA = crypto.randomBytes(VA *= 7);
            for (; RA < VA;) if (vA = (OA[RA] & 31) * 281474976710656 + OA[RA + 1] * 1099511627776 + OA[RA + 2] * 4294967296 + OA[RA + 3] * 16777216 + (OA[RA + 4] << 16) + (OA[RA + 5] << 8) + OA[RA + 6], vA >= 9000000000000000) crypto.randomBytes(7).copy(OA, RA);else fA.push(vA % 100000000000000), RA += 7;
            RA = VA / 7;
          } else throw c = !1, Error(w + "crypto unavailable");
          if (!c) {
            for (; RA < VA;) if (vA = wA(), vA < 9000000000000000) fA[RA++] = vA % 100000000000000;
          }
          if (VA = fA[--RA], GA %= O, VA && GA) vA = $[O - GA], fA[RA] = z(VA / vA) * vA;
          for (; fA[RA] === 0; fA.pop(), RA--);
          if (RA < 0) fA = [XA = 0];else {
            for (XA = -1; fA[0] === 0; fA.splice(0, 1), XA -= O);
            for (RA = 1, vA = fA[0]; vA >= 10; vA /= 10, RA++);
            if (RA < O) XA -= O - RA;
          }
          return LA.e = XA, LA.c = fA, LA;
        };
      }(), a.sum = function () {
        var AA = 1,
          wA = arguments,
          GA = new a(wA[0]);
        for (; AA < wA.length;) GA = GA.plus(wA[AA++]);
        return GA;
      }, R = function () {
        var AA = "0123456789";
        function wA(GA, OA, t, XA) {
          var VA,
            vA = [0],
            RA,
            fA = 0,
            LA = GA.length;
          for (; fA < LA;) {
            for (RA = vA.length; RA--; vA[RA] *= OA);
            vA[0] += XA.indexOf(GA.charAt(fA++));
            for (VA = 0; VA < vA.length; VA++) if (vA[VA] > t - 1) {
              if (vA[VA + 1] == null) vA[VA + 1] = 0;
              vA[VA + 1] += vA[VA] / t | 0, vA[VA] %= t;
            }
          }
          return vA.reverse();
        }
        return function (GA, OA, t, XA, VA) {
          var vA,
            RA,
            fA,
            LA,
            SA,
            xA,
            iA,
            lA,
            v1 = GA.indexOf("."),
            I1 = b,
            Q1 = F;
          if (v1 >= 0) LA = e, e = 0, GA = GA.replace(".", ""), lA = new a(OA), xA = lA.pow(GA.length - v1), e = LA, lA.c = wA(N(D(xA.c), xA.e, "0"), 10, t, AA), lA.e = lA.c.length;
          iA = wA(GA, OA, t, VA ? (vA = HA, AA) : (vA = AA, HA)), fA = LA = iA.length;
          for (; iA[--LA] == 0; iA.pop());
          if (!iA[0]) return vA.charAt(0);
          if (v1 < 0) --fA;else xA.c = iA, xA.e = fA, xA.s = XA, xA = C(xA, lA, I1, Q1, t), iA = xA.c, SA = xA.r, fA = xA.e;
          if (RA = fA + I1 + 1, v1 = iA[RA], LA = t / 2, SA = SA || RA < 0 || iA[RA + 1] != null, SA = Q1 < 4 ? (v1 != null || SA) && (Q1 == 0 || Q1 == (xA.s < 0 ? 3 : 2)) : v1 > LA || v1 == LA && (Q1 == 4 || SA || Q1 == 6 && iA[RA - 1] & 1 || Q1 == (xA.s < 0 ? 8 : 7)), RA < 1 || !iA[0]) GA = SA ? N(vA.charAt(1), -I1, vA.charAt(0)) : vA.charAt(0);else {
            if (iA.length = RA, SA) {
              for (--t; ++iA[--RA] > t;) if (iA[RA] = 0, !RA) ++fA, iA = [1].concat(iA);
            }
            for (LA = iA.length; !iA[--LA];);
            for (v1 = 0, GA = ""; v1 <= LA; GA += vA.charAt(iA[v1++]));
            GA = N(GA, fA, vA.charAt(0));
          }
          return GA;
        };
      }(), C = function () {
        function AA(OA, t, XA) {
          var VA,
            vA,
            RA,
            fA,
            LA = 0,
            SA = OA.length,
            xA = t % _,
            iA = t / _ | 0;
          for (OA = OA.slice(); SA--;) RA = OA[SA] % _, fA = OA[SA] / _ | 0, VA = iA * RA + fA * xA, vA = xA * RA + VA % _ * _ + LA, LA = (vA / XA | 0) + (VA / _ | 0) + iA * fA, OA[SA] = vA % XA;
          if (LA) OA = [LA].concat(OA);
          return OA;
        }
        function wA(OA, t, XA, VA) {
          var vA, RA;
          if (XA != VA) RA = XA > VA ? 1 : -1;else for (vA = RA = 0; vA < XA; vA++) if (OA[vA] != t[vA]) {
            RA = OA[vA] > t[vA] ? 1 : -1;
            break;
          }
          return RA;
        }
        function GA(OA, t, XA, VA) {
          var vA = 0;
          for (; XA--;) OA[XA] -= vA, vA = OA[XA] < t[XA] ? 1 : 0, OA[XA] = vA * VA + OA[XA] - t[XA];
          for (; !OA[0] && OA.length > 1; OA.splice(0, 1));
        }
        return function (OA, t, XA, VA, vA) {
          var RA,
            fA,
            LA,
            SA,
            xA,
            iA,
            lA,
            v1,
            I1,
            Q1,
            B1,
            C6,
            w1,
            $1,
            N1,
            A6,
            c1,
            w6 = OA.s == t.s ? 1 : -1,
            DA = OA.c,
            EA = t.c;
          if (!DA || !DA[0] || !EA || !EA[0]) return new a(!OA.s || !t.s || (DA ? EA && DA[0] == EA[0] : !EA) ? NaN : DA && DA[0] == 0 || !EA ? w6 * 0 : w6 / 0);
          if (v1 = new a(w6), I1 = v1.c = [], fA = OA.e - t.e, w6 = XA + fA + 1, !vA) vA = J, fA = W(OA.e / O) - W(t.e / O), w6 = w6 / O | 0;
          for (LA = 0; EA[LA] == (DA[LA] || 0); LA++);
          if (EA[LA] > (DA[LA] || 0)) fA--;
          if (w6 < 0) I1.push(1), SA = !0;else {
            if ($1 = DA.length, A6 = EA.length, LA = 0, w6 += 2, xA = z(vA / (EA[0] + 1)), xA > 1) EA = AA(EA, xA, vA), DA = AA(DA, xA, vA), A6 = EA.length, $1 = DA.length;
            w1 = A6, Q1 = DA.slice(0, A6), B1 = Q1.length;
            for (; B1 < A6; Q1[B1++] = 0);
            if (c1 = EA.slice(), c1 = [0].concat(c1), N1 = EA[0], EA[1] >= vA / 2) N1++;
            do {
              if (xA = 0, RA = wA(EA, Q1, A6, B1), RA < 0) {
                if (C6 = Q1[0], A6 != B1) C6 = C6 * vA + (Q1[1] || 0);
                if (xA = z(C6 / N1), xA > 1) {
                  if (xA >= vA) xA = vA - 1;
                  iA = AA(EA, xA, vA), lA = iA.length, B1 = Q1.length;
                  while (wA(iA, Q1, lA, B1) == 1) xA--, GA(iA, A6 < lA ? c1 : EA, lA, vA), lA = iA.length, RA = 1;
                } else {
                  if (xA == 0) RA = xA = 1;
                  iA = EA.slice(), lA = iA.length;
                }
                if (lA < B1) iA = [0].concat(iA);
                if (GA(Q1, iA, B1, vA), B1 = Q1.length, RA == -1) while (wA(EA, Q1, A6, B1) < 1) xA++, GA(Q1, A6 < B1 ? c1 : EA, B1, vA), B1 = Q1.length;
              } else if (RA === 0) xA++, Q1 = [0];
              if (I1[LA++] = xA, Q1[0]) Q1[B1++] = DA[w1] || 0;else Q1 = [DA[w1]], B1 = 1;
            } while ((w1++ < $1 || Q1[0] != null) && w6--);
            if (SA = Q1[0] != null, !I1[0]) I1.splice(0, 1);
          }
          if (vA == J) {
            for (LA = 1, w6 = I1[0]; w6 >= 10; w6 /= 10, LA++);
            hA(v1, XA + (v1.e = LA + fA * O - 1) + 1, VA, SA);
          } else v1.e = fA, v1.r = +SA;
          return v1;
        };
      }();
      function JA(AA, wA, GA, OA) {
        var t, XA, VA, vA, RA;
        if (GA == null) GA = F;else M(GA, 0, 8);
        if (!AA.c) return AA.toString();
        if (t = AA.c[0], VA = AA.e, wA == null) RA = D(AA.c), RA = OA == 1 || OA == 2 && (VA <= Q || VA >= u) ? f(RA, VA) : N(RA, VA, "0");else if (AA = hA(new a(AA), wA, GA), XA = AA.e, RA = D(AA.c), vA = RA.length, OA == 1 || OA == 2 && (wA <= XA || XA <= Q)) {
          for (; vA < wA; RA += "0", vA++);
          RA = f(RA, XA);
        } else if (wA -= VA, RA = N(RA, XA, "0"), XA + 1 > vA) {
          if (--wA > 0) for (RA += "."; wA--; RA += "0");
        } else if (wA += XA - vA, wA > 0) {
          if (XA + 1 == vA) RA += ".";
          for (; wA--; RA += "0");
        }
        return AA.s < 0 && t ? "-" + RA : RA;
      }
      function jA(AA, wA) {
        var GA,
          OA,
          t = 1,
          XA = new a(AA[0]);
        for (; t < AA.length; t++) if (OA = new a(AA[t]), !OA.s || (GA = j(XA, OA)) === wA || GA === 0 && XA.s === wA) XA = OA;
        return XA;
      }
      function MA(AA, wA, GA) {
        var OA = 1,
          t = wA.length;
        for (; !wA[--t]; wA.pop());
        for (t = wA[0]; t >= 10; t /= 10, OA++);
        if ((GA = OA + GA * O - 1) > r) AA.c = AA.e = null;else if (GA < d) AA.c = [AA.e = 0];else AA.e = GA, AA.c = wA;
        return AA;
      }
      x = function () {
        var AA = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
          wA = /^([^.]+)\.$/,
          GA = /^\.([^.]+)$/,
          OA = /^-?(Infinity|NaN)$/,
          t = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function (XA, VA, vA, RA) {
          var fA,
            LA = vA ? VA : VA.replace(t, "");
          if (OA.test(LA)) XA.s = isNaN(LA) ? null : LA < 0 ? -1 : 1;else {
            if (!vA) {
              if (LA = LA.replace(AA, function (SA, xA, iA) {
                return fA = (iA = iA.toLowerCase()) == "x" ? 16 : iA == "b" ? 2 : 8, !RA || RA == fA ? xA : SA;
              }), RA) fA = RA, LA = LA.replace(wA, "$1").replace(GA, "0.$1");
              if (VA != LA) return new a(LA, fA);
            }
            if (a.DEBUG) throw Error(w + "Not a" + (RA ? " base " + RA : "") + " number: " + VA);
            XA.s = null;
          }
          XA.c = XA.e = null;
        };
      }();
      function hA(AA, wA, GA, OA) {
        var t,
          XA,
          VA,
          vA,
          RA,
          fA,
          LA,
          SA = AA.c,
          xA = $;
        if (SA) {
          A: {
            for (t = 1, vA = SA[0]; vA >= 10; vA /= 10, t++);
            if (XA = wA - t, XA < 0) XA += O, VA = wA, RA = SA[fA = 0], LA = z(RA / xA[t - VA - 1] % 10);else if (fA = Y((XA + 1) / O), fA >= SA.length) {
              if (OA) {
                for (; SA.length <= fA; SA.push(0));
                RA = LA = 0, t = 1, XA %= O, VA = XA - O + 1;
              } else break A;
            } else {
              RA = vA = SA[fA];
              for (t = 1; vA >= 10; vA /= 10, t++);
              XA %= O, VA = XA - O + t, LA = VA < 0 ? 0 : z(RA / xA[t - VA - 1] % 10);
            }
            if (OA = OA || wA < 0 || SA[fA + 1] != null || (VA < 0 ? RA : RA % xA[t - VA - 1]), OA = GA < 4 ? (LA || OA) && (GA == 0 || GA == (AA.s < 0 ? 3 : 2)) : LA > 5 || LA == 5 && (GA == 4 || OA || GA == 6 && (XA > 0 ? VA > 0 ? RA / xA[t - VA] : 0 : SA[fA - 1]) % 10 & 1 || GA == (AA.s < 0 ? 8 : 7)), wA < 1 || !SA[0]) {
              if (SA.length = 0, OA) wA -= AA.e + 1, SA[0] = xA[(O - wA % O) % O], AA.e = -wA || 0;else SA[0] = AA.e = 0;
              return AA;
            }
            if (XA == 0) SA.length = fA, vA = 1, fA--;else SA.length = fA + 1, vA = xA[O - XA], SA[fA] = VA > 0 ? z(RA / xA[t - VA] % xA[VA]) * vA : 0;
            if (OA) for (;;) if (fA == 0) {
              for (XA = 1, VA = SA[0]; VA >= 10; VA /= 10, XA++);
              VA = SA[0] += vA;
              for (vA = 1; VA >= 10; VA /= 10, vA++);
              if (XA != vA) {
                if (AA.e++, SA[0] == J) SA[0] = 1;
              }
              break;
            } else {
              if (SA[fA] += vA, SA[fA] != J) break;
              SA[fA--] = 0, vA = 1;
            }
            for (XA = SA.length; SA[--XA] === 0; SA.pop());
          }
          if (AA.e > r) AA.c = AA.e = null;else if (AA.e < d) AA.c = [AA.e = 0];
        }
        return AA;
      }
      function yA(AA) {
        var wA,
          GA = AA.e;
        if (GA === null) return AA.toString();
        return wA = D(AA.c), wA = GA <= Q || GA >= u ? f(wA, GA) : N(wA, GA, "0"), AA.s < 0 ? "-" + wA : wA;
      }
      if (y.absoluteValue = y.abs = function () {
        var AA = new a(this);
        if (AA.s < 0) AA.s = 1;
        return AA;
      }, y.comparedTo = function (AA, wA) {
        return j(this, new a(AA, wA));
      }, y.decimalPlaces = y.dp = function (AA, wA) {
        var GA,
          OA,
          t,
          XA = this;
        if (AA != null) {
          if (M(AA, 0, G), wA == null) wA = F;else M(wA, 0, 8);
          return hA(new a(XA), AA + XA.e + 1, wA);
        }
        if (!(GA = XA.c)) return null;
        if (OA = ((t = GA.length - 1) - W(this.e / O)) * O, t = GA[t]) for (; t % 10 == 0; t /= 10, OA--);
        if (OA < 0) OA = 0;
        return OA;
      }, y.dividedBy = y.div = function (AA, wA) {
        return C(this, new a(AA, wA), b, F);
      }, y.dividedToIntegerBy = y.idiv = function (AA, wA) {
        return C(this, new a(AA, wA), 0, 1);
      }, y.exponentiatedBy = y.pow = function (AA, wA) {
        var GA,
          OA,
          t,
          XA,
          VA,
          vA,
          RA,
          fA,
          LA,
          SA = this;
        if (AA = new a(AA), AA.c && !AA.isInteger()) throw Error(w + "Exponent not an integer: " + yA(AA));
        if (wA != null) wA = new a(wA);
        if (vA = AA.e > 14, !SA.c || !SA.c[0] || SA.c[0] == 1 && !SA.e && SA.c.length == 1 || !AA.c || !AA.c[0]) return LA = new a(Math.pow(+yA(SA), vA ? AA.s * (2 - P(AA)) : +yA(AA))), wA ? LA.mod(wA) : LA;
        if (RA = AA.s < 0, wA) {
          if (wA.c ? !wA.c[0] : !wA.s) return new a(NaN);
          if (OA = !RA && SA.isInteger() && wA.isInteger(), OA) SA = SA.mod(wA);
        } else if (AA.e > 9 && (SA.e > 0 || SA.e < -1 || (SA.e == 0 ? SA.c[0] > 1 || vA && SA.c[1] >= 240000000 : SA.c[0] < 80000000000000 || vA && SA.c[0] <= 99999750000000))) {
          if (XA = SA.s < 0 && P(AA) ? -0 : 0, SA.e > -1) XA = 1 / XA;
          return new a(RA ? 1 / XA : XA);
        } else if (e) XA = Y(e / O + 2);
        if (vA) {
          if (GA = new a(0.5), RA) AA.s = 1;
          fA = P(AA);
        } else t = Math.abs(+yA(AA)), fA = t % 2;
        LA = new a(B);
        for (;;) {
          if (fA) {
            if (LA = LA.times(SA), !LA.c) break;
            if (XA) {
              if (LA.c.length > XA) LA.c.length = XA;
            } else if (OA) LA = LA.mod(wA);
          }
          if (t) {
            if (t = z(t / 2), t === 0) break;
            fA = t % 2;
          } else if (AA = AA.times(GA), hA(AA, AA.e + 1, 1), AA.e > 14) fA = P(AA);else {
            if (t = +yA(AA), t === 0) break;
            fA = t % 2;
          }
          if (SA = SA.times(SA), XA) {
            if (SA.c && SA.c.length > XA) SA.c.length = XA;
          } else if (OA) SA = SA.mod(wA);
        }
        if (OA) return LA;
        if (RA) LA = B.div(LA);
        return wA ? LA.mod(wA) : XA ? hA(LA, e, F, VA) : LA;
      }, y.integerValue = function (AA) {
        var wA = new a(this);
        if (AA == null) AA = F;else M(AA, 0, 8);
        return hA(wA, wA.e + 1, AA);
      }, y.isEqualTo = y.eq = function (AA, wA) {
        return j(this, new a(AA, wA)) === 0;
      }, y.isFinite = function () {
        return !!this.c;
      }, y.isGreaterThan = y.gt = function (AA, wA) {
        return j(this, new a(AA, wA)) > 0;
      }, y.isGreaterThanOrEqualTo = y.gte = function (AA, wA) {
        return (wA = j(this, new a(AA, wA))) === 1 || wA === 0;
      }, y.isInteger = function () {
        return !!this.c && W(this.e / O) > this.c.length - 2;
      }, y.isLessThan = y.lt = function (AA, wA) {
        return j(this, new a(AA, wA)) < 0;
      }, y.isLessThanOrEqualTo = y.lte = function (AA, wA) {
        return (wA = j(this, new a(AA, wA))) === -1 || wA === 0;
      }, y.isNaN = function () {
        return !this.s;
      }, y.isNegative = function () {
        return this.s < 0;
      }, y.isPositive = function () {
        return this.s > 0;
      }, y.isZero = function () {
        return !!this.c && this.c[0] == 0;
      }, y.minus = function (AA, wA) {
        var GA,
          OA,
          t,
          XA,
          VA = this,
          vA = VA.s;
        if (AA = new a(AA, wA), wA = AA.s, !vA || !wA) return new a(NaN);
        if (vA != wA) return AA.s = -wA, VA.plus(AA);
        var RA = VA.e / O,
          fA = AA.e / O,
          LA = VA.c,
          SA = AA.c;
        if (!RA || !fA) {
          if (!LA || !SA) return LA ? (AA.s = -wA, AA) : new a(SA ? VA : NaN);
          if (!LA[0] || !SA[0]) return SA[0] ? (AA.s = -wA, AA) : new a(LA[0] ? VA : F == 3 ? -0 : 0);
        }
        if (RA = W(RA), fA = W(fA), LA = LA.slice(), vA = RA - fA) {
          if (XA = vA < 0) vA = -vA, t = LA;else fA = RA, t = SA;
          t.reverse();
          for (wA = vA; wA--; t.push(0));
          t.reverse();
        } else {
          OA = (XA = (vA = LA.length) < (wA = SA.length)) ? vA : wA;
          for (vA = wA = 0; wA < OA; wA++) if (LA[wA] != SA[wA]) {
            XA = LA[wA] < SA[wA];
            break;
          }
        }
        if (XA) t = LA, LA = SA, SA = t, AA.s = -AA.s;
        if (wA = (OA = SA.length) - (GA = LA.length), wA > 0) for (; wA--; LA[GA++] = 0);
        wA = J - 1;
        for (; OA > vA;) {
          if (LA[--OA] < SA[OA]) {
            for (GA = OA; GA && !LA[--GA]; LA[GA] = wA);
            --LA[GA], LA[OA] += J;
          }
          LA[OA] -= SA[OA];
        }
        for (; LA[0] == 0; LA.splice(0, 1), --fA);
        if (!LA[0]) return AA.s = F == 3 ? -1 : 1, AA.c = [AA.e = 0], AA;
        return MA(AA, LA, fA);
      }, y.modulo = y.mod = function (AA, wA) {
        var GA,
          OA,
          t = this;
        if (AA = new a(AA, wA), !t.c || !AA.s || AA.c && !AA.c[0]) return new a(NaN);else if (!AA.c || t.c && !t.c[0]) return new a(t);
        if (YA == 9) OA = AA.s, AA.s = 1, GA = C(t, AA, 0, 3), AA.s = OA, GA.s *= OA;else GA = C(t, AA, 0, YA);
        if (AA = t.minus(GA.times(AA)), !AA.c[0] && YA == 1) AA.s = t.s;
        return AA;
      }, y.multipliedBy = y.times = function (AA, wA) {
        var GA,
          OA,
          t,
          XA,
          VA,
          vA,
          RA,
          fA,
          LA,
          SA,
          xA,
          iA,
          lA,
          v1,
          I1,
          Q1 = this,
          B1 = Q1.c,
          C6 = (AA = new a(AA, wA)).c;
        if (!B1 || !C6 || !B1[0] || !C6[0]) {
          if (!Q1.s || !AA.s || B1 && !B1[0] && !C6 || C6 && !C6[0] && !B1) AA.c = AA.e = AA.s = null;else if (AA.s *= Q1.s, !B1 || !C6) AA.c = AA.e = null;else AA.c = [0], AA.e = 0;
          return AA;
        }
        if (OA = W(Q1.e / O) + W(AA.e / O), AA.s *= Q1.s, RA = B1.length, SA = C6.length, RA < SA) lA = B1, B1 = C6, C6 = lA, t = RA, RA = SA, SA = t;
        for (t = RA + SA, lA = []; t--; lA.push(0));
        v1 = J, I1 = _;
        for (t = SA; --t >= 0;) {
          GA = 0, xA = C6[t] % I1, iA = C6[t] / I1 | 0;
          for (VA = RA, XA = t + VA; XA > t;) fA = B1[--VA] % I1, LA = B1[VA] / I1 | 0, vA = iA * fA + LA * xA, fA = xA * fA + vA % I1 * I1 + lA[XA] + GA, GA = (fA / v1 | 0) + (vA / I1 | 0) + iA * LA, lA[XA--] = fA % v1;
          lA[XA] = GA;
        }
        if (GA) ++OA;else lA.splice(0, 1);
        return MA(AA, lA, OA);
      }, y.negated = function () {
        var AA = new a(this);
        return AA.s = -AA.s || null, AA;
      }, y.plus = function (AA, wA) {
        var GA,
          OA = this,
          t = OA.s;
        if (AA = new a(AA, wA), wA = AA.s, !t || !wA) return new a(NaN);
        if (t != wA) return AA.s = -wA, OA.minus(AA);
        var XA = OA.e / O,
          VA = AA.e / O,
          vA = OA.c,
          RA = AA.c;
        if (!XA || !VA) {
          if (!vA || !RA) return new a(t / 0);
          if (!vA[0] || !RA[0]) return RA[0] ? AA : new a(vA[0] ? OA : t * 0);
        }
        if (XA = W(XA), VA = W(VA), vA = vA.slice(), t = XA - VA) {
          if (t > 0) VA = XA, GA = RA;else t = -t, GA = vA;
          GA.reverse();
          for (; t--; GA.push(0));
          GA.reverse();
        }
        if (t = vA.length, wA = RA.length, t - wA < 0) GA = RA, RA = vA, vA = GA, wA = t;
        for (t = 0; wA;) t = (vA[--wA] = vA[wA] + RA[wA] + t) / J | 0, vA[wA] = J === vA[wA] ? 0 : vA[wA] % J;
        if (t) vA = [t].concat(vA), ++VA;
        return MA(AA, vA, VA);
      }, y.precision = y.sd = function (AA, wA) {
        var GA,
          OA,
          t,
          XA = this;
        if (AA != null && AA !== !!AA) {
          if (M(AA, 1, G), wA == null) wA = F;else M(wA, 0, 8);
          return hA(new a(XA), AA, wA);
        }
        if (!(GA = XA.c)) return null;
        if (t = GA.length - 1, OA = t * O + 1, t = GA[t]) {
          for (; t % 10 == 0; t /= 10, OA--);
          for (t = GA[0]; t >= 10; t /= 10, OA++);
        }
        if (AA && XA.e + 1 > OA) OA = XA.e + 1;
        return OA;
      }, y.shiftedBy = function (AA) {
        return M(AA, -X, X), this.times("1e" + AA);
      }, y.squareRoot = y.sqrt = function () {
        var AA,
          wA,
          GA,
          OA,
          t,
          XA = this,
          VA = XA.c,
          vA = XA.s,
          RA = XA.e,
          fA = b + 4,
          LA = new a("0.5");
        if (vA !== 1 || !VA || !VA[0]) return new a(!vA || vA < 0 && (!VA || VA[0]) ? NaN : VA ? XA : 1 / 0);
        if (vA = Math.sqrt(+yA(XA)), vA == 0 || vA == 1 / 0) {
          if (wA = D(VA), (wA.length + RA) % 2 == 0) wA += "0";
          if (vA = Math.sqrt(+wA), RA = W((RA + 1) / 2) - (RA < 0 || RA % 2), vA == 1 / 0) wA = "5e" + RA;else wA = vA.toExponential(), wA = wA.slice(0, wA.indexOf("e") + 1) + RA;
          GA = new a(wA);
        } else GA = new a(vA + "");
        if (GA.c[0]) {
          if (RA = GA.e, vA = RA + fA, vA < 3) vA = 0;
          for (;;) if (t = GA, GA = LA.times(t.plus(C(XA, t, fA, 1))), D(t.c).slice(0, vA) === (wA = D(GA.c)).slice(0, vA)) {
            if (GA.e < RA) --vA;
            if (wA = wA.slice(vA - 3, vA + 1), wA == "9999" || !OA && wA == "4999") {
              if (!OA) {
                if (hA(t, t.e + b + 2, 0), t.times(t).eq(XA)) {
                  GA = t;
                  break;
                }
              }
              fA += 4, vA += 4, OA = 1;
            } else {
              if (!+wA || !+wA.slice(1) && wA.charAt(0) == "5") hA(GA, GA.e + b + 2, 1), AA = !GA.times(GA).eq(XA);
              break;
            }
          }
        }
        return hA(GA, GA.e + b + 1, F, AA);
      }, y.toExponential = function (AA, wA) {
        if (AA != null) M(AA, 0, G), AA++;
        return JA(this, AA, wA, 1);
      }, y.toFixed = function (AA, wA) {
        if (AA != null) M(AA, 0, G), AA = AA + this.e + 1;
        return JA(this, AA, wA);
      }, y.toFormat = function (AA, wA, GA) {
        var OA,
          t = this;
        if (GA == null) {
          if (AA != null && wA && typeof wA == "object") GA = wA, wA = null;else if (AA && typeof AA == "object") GA = AA, AA = wA = null;else GA = qA;
        } else if (typeof GA != "object") throw Error(w + "Argument not an object: " + GA);
        if (OA = t.toFixed(AA, wA), t.c) {
          var XA,
            VA = OA.split("."),
            vA = +GA.groupSize,
            RA = +GA.secondaryGroupSize,
            fA = GA.groupSeparator || "",
            LA = VA[0],
            SA = VA[1],
            xA = t.s < 0,
            iA = xA ? LA.slice(1) : LA,
            lA = iA.length;
          if (RA) XA = vA, vA = RA, RA = XA, lA -= XA;
          if (vA > 0 && lA > 0) {
            XA = lA % vA || vA, LA = iA.substr(0, XA);
            for (; XA < lA; XA += vA) LA += fA + iA.substr(XA, vA);
            if (RA > 0) LA += fA + iA.slice(XA);
            if (xA) LA = "-" + LA;
          }
          OA = SA ? LA + (GA.decimalSeparator || "") + ((RA = +GA.fractionGroupSize) ? SA.replace(new RegExp("\\d{" + RA + "}\\B", "g"), "$&" + (GA.fractionGroupSeparator || "")) : SA) : LA;
        }
        return (GA.prefix || "") + OA + (GA.suffix || "");
      }, y.toFraction = function (AA) {
        var wA,
          GA,
          OA,
          t,
          XA,
          VA,
          vA,
          RA,
          fA,
          LA,
          SA,
          xA,
          iA = this,
          lA = iA.c;
        if (AA != null) {
          if (vA = new a(AA), !vA.isInteger() && (vA.c || vA.s !== 1) || vA.lt(B)) throw Error(w + "Argument " + (vA.isInteger() ? "out of range: " : "not an integer: ") + yA(vA));
        }
        if (!lA) return new a(iA);
        wA = new a(B), fA = GA = new a(B), OA = RA = new a(B), xA = D(lA), XA = wA.e = xA.length - iA.e - 1, wA.c[0] = $[(VA = XA % O) < 0 ? O + VA : VA], AA = !AA || vA.comparedTo(wA) > 0 ? XA > 0 ? wA : fA : vA, VA = r, r = 1 / 0, vA = new a(xA), RA.c[0] = 0;
        for (;;) {
          if (LA = C(vA, wA, 0, 1), t = GA.plus(LA.times(OA)), t.comparedTo(AA) == 1) break;
          GA = OA, OA = t, fA = RA.plus(LA.times(t = fA)), RA = t, wA = vA.minus(LA.times(t = wA)), vA = t;
        }
        return t = C(AA.minus(GA), OA, 0, 1), RA = RA.plus(t.times(fA)), GA = GA.plus(t.times(OA)), RA.s = fA.s = iA.s, XA = XA * 2, SA = C(fA, OA, XA, F).minus(iA).abs().comparedTo(C(RA, GA, XA, F).minus(iA).abs()) < 1 ? [fA, OA] : [RA, GA], r = VA, SA;
      }, y.toNumber = function () {
        return +yA(this);
      }, y.toPrecision = function (AA, wA) {
        if (AA != null) M(AA, 1, G);
        return JA(this, AA, wA, 2);
      }, y.toString = function (AA) {
        var wA,
          GA = this,
          OA = GA.s,
          t = GA.e;
        if (t === null) {
          if (OA) {
            if (wA = "Infinity", OA < 0) wA = "-" + wA;
          } else wA = "NaN";
        } else {
          if (AA == null) wA = t <= Q || t >= u ? f(D(GA.c), t) : N(D(GA.c), t, "0");else if (AA === 10 && _A) GA = hA(new a(GA), b + t + 1, F), wA = N(D(GA.c), GA.e, "0");else M(AA, 2, HA.length, "Base"), wA = R(N(D(GA.c), t, "0"), 10, AA, OA, !0);
          if (OA < 0 && GA.c[0]) wA = "-" + wA;
        }
        return wA;
      }, y.valueOf = y.toJSON = function () {
        return yA(this);
      }, y._isBigNumber = !0, T != null) a.set(T);
      return a;
    }
    function W(T) {
      var C = T | 0;
      return T > 0 || T === C ? C : C - 1;
    }
    function D(T) {
      var C,
        R,
        x = 1,
        y = T.length,
        B = T[0] + "";
      for (; x < y;) {
        C = T[x++] + "", R = O - C.length;
        for (; R--; C = "0" + C);
        B += C;
      }
      for (y = B.length; B.charCodeAt(--y) === 48;);
      return B.slice(0, y + 1 || 1);
    }
    function j(T, C) {
      var R,
        x,
        y = T.c,
        B = C.c,
        b = T.s,
        F = C.s,
        Q = T.e,
        u = C.e;
      if (!b || !F) return null;
      if (R = y && !y[0], x = B && !B[0], R || x) return R ? x ? 0 : -F : b;
      if (b != F) return b;
      if (R = b < 0, x = Q == u, !y || !B) return x ? 0 : !y ^ R ? 1 : -1;
      if (!x) return Q > u ^ R ? 1 : -1;
      F = (Q = y.length) < (u = B.length) ? Q : u;
      for (b = 0; b < F; b++) if (y[b] != B[b]) return y[b] > B[b] ^ R ? 1 : -1;
      return Q == u ? 0 : Q > u ^ R ? 1 : -1;
    }
    function M(T, C, R, x) {
      if (T < C || T > R || T !== z(T)) throw Error(w + (x || "Argument") + (typeof T == "number" ? T < C || T > R ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(T));
    }
    function P(T) {
      var C = T.c.length - 1;
      return W(T.e / O) == C && T.c[C] % 2 != 0;
    }
    function f(T, C) {
      return (T.length > 1 ? T.charAt(0) + "." + T.slice(1) : T) + (C < 0 ? "e" : "e+") + C;
    }
    function N(T, C, R) {
      var x, y;
      if (C < 0) {
        for (y = R + "."; ++C; y += R);
        T = y + T;
      } else if (x = T.length, ++C > x) {
        for (y = R, C -= x; --C; y += R);
        T += y;
      } else if (C < x) T = T.slice(0, C) + "." + T.slice(C);
      return T;
    }
    if (K = Z(), K.default = K.BigNumber = K, typeof define == "function" && define.amd) define(function () {
      return K;
    });else if (typeof cz1 < "u" && cz1.exports) cz1.exports = K;else {
      if (!A) A = typeof self < "u" && self ? self : window;
      A.BigNumber = K;
    }
  })(Nr4);
});

// Register to shared state
__$.NH6 = NH6;
