// Module: lR7
// Dependencies: HDA, JDA, SZ1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lR7 = v((qrY, cR7) => {
  var gZ1 = __$.HDA(),
    zgA = __$.JDA(),
    NnY = __$.SZ1(),
    bR7 = Object.prototype.toString,
    xR7 = Object.prototype.hasOwnProperty,
    oN6 = 65279,
    TnY = 9,
    KgA = 10,
    vnY = 13,
    EnY = 32,
    knY = 33,
    CnY = 34,
    lN6 = 35,
    LnY = 37,
    RnY = 38,
    ynY = 39,
    InY = 42,
    uR7 = 44,
    SnY = 45,
    BZ1 = 58,
    hnY = 61,
    bnY = 62,
    xnY = 63,
    unY = 64,
    BR7 = 91,
    mR7 = 93,
    BnY = 96,
    gR7 = 123,
    mnY = 124,
    FR7 = 125,
    wj = {};
  wj[0] = "\\0";
  wj[7] = "\\a";
  wj[8] = "\\b";
  wj[9] = "\\t";
  wj[10] = "\\n";
  wj[11] = "\\v";
  wj[12] = "\\f";
  wj[13] = "\\r";
  wj[27] = "\\e";
  wj[34] = "\\\"";
  wj[92] = "\\\\";
  wj[133] = "\\N";
  wj[160] = "\\_";
  wj[8232] = "\\L";
  wj[8233] = "\\P";
  var gnY = ["y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF"],
    FnY = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
  function QnY(A, K) {
    var q, Y, z, w, H, J, O;
    if (K === null) return {};
    q = {}, Y = Object.keys(K);
    for (z = 0, w = Y.length; z < w; z += 1) {
      if (H = Y[z], J = String(K[H]), H.slice(0, 2) === "!!") H = "tag:yaml.org,2002:" + H.slice(2);
      if (O = A.compiledTypeMap.fallback[H], O && xR7.call(O.styleAliases, J)) J = O.styleAliases[J];
      q[H] = J;
    }
    return q;
  }
  function UnY(A) {
    var K, q, Y;
    if (K = A.toString(16).toUpperCase(), A <= 255) q = "x", Y = 2;else if (A <= 65535) q = "u", Y = 4;else if (A <= 4294967295) q = "U", Y = 8;else throw new zgA("code point within a string may not be greater than 0xFFFFFFFF");
    return "\\" + q + gZ1.repeat("0", Y - K.length) + K;
  }
  var pnY = 1,
    qgA = 2;
  function dnY(A) {
    this.schema = A.schema || NnY, this.indent = Math.max(1, A.indent || 2), this.noArrayIndent = A.noArrayIndent || !1, this.skipInvalid = A.skipInvalid || !1, this.flowLevel = gZ1.isNothing(A.flowLevel) ? -1 : A.flowLevel, this.styleMap = QnY(this.schema, A.styles || null), this.sortKeys = A.sortKeys || !1, this.lineWidth = A.lineWidth || 80, this.noRefs = A.noRefs || !1, this.noCompatMode = A.noCompatMode || !1, this.condenseFlow = A.condenseFlow || !1, this.quotingType = A.quotingType === '"' ? qgA : pnY, this.forceQuotes = A.forceQuotes || !1, this.replacer = typeof A.replacer === "function" ? A.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
  }
  function kR7(A, K) {
    var q = gZ1.repeat(" ", K),
      Y = 0,
      z = -1,
      w = "",
      H,
      J = A.length;
    while (Y < J) {
      if (z = A.indexOf(`
`, Y), z === -1) H = A.slice(Y), Y = J;else H = A.slice(Y, z + 1), Y = z + 1;
      if (H.length && H !== `
`) w += q;
      w += H;
    }
    return w;
  }
  function iN6(A, K) {
    return `
` + gZ1.repeat(" ", A.indent * K);
  }
  function cnY(A, K) {
    var q, Y, z;
    for (q = 0, Y = A.implicitTypes.length; q < Y; q += 1) if (z = A.implicitTypes[q], z.resolve(K)) return !0;
    return !1;
  }
  function mZ1(A) {
    return A === EnY || A === TnY;
  }
  function YgA(A) {
    return 32 <= A && A <= 126 || 161 <= A && A <= 55295 && A !== 8232 && A !== 8233 || 57344 <= A && A <= 65533 && A !== oN6 || 65536 <= A && A <= 1114111;
  }
  function CR7(A) {
    return YgA(A) && A !== oN6 && A !== vnY && A !== KgA;
  }
  function LR7(A, K, q) {
    var Y = CR7(A),
      z = Y && !mZ1(A);
    return (q ? Y : Y && A !== uR7 && A !== BR7 && A !== mR7 && A !== gR7 && A !== FR7) && A !== lN6 && !(K === BZ1 && !z) || CR7(K) && !mZ1(K) && A === lN6 || K === BZ1 && z;
  }
  function lnY(A) {
    return YgA(A) && A !== oN6 && !mZ1(A) && A !== SnY && A !== xnY && A !== BZ1 && A !== uR7 && A !== BR7 && A !== mR7 && A !== gR7 && A !== FR7 && A !== lN6 && A !== RnY && A !== InY && A !== knY && A !== mnY && A !== hnY && A !== bnY && A !== ynY && A !== CnY && A !== LnY && A !== unY && A !== BnY;
  }
  function inY(A) {
    return !mZ1(A) && A !== BZ1;
  }
  function AgA(A, K) {
    var q = A.charCodeAt(K),
      Y;
    if (q >= 55296 && q <= 56319 && K + 1 < A.length) {
      if (Y = A.charCodeAt(K + 1), Y >= 56320 && Y <= 57343) return (q - 55296) * 1024 + Y - 56320 + 65536;
    }
    return q;
  }
  function QR7(A) {
    var K = /^\n* /;
    return K.test(A);
  }
  var UR7 = 1,
    nN6 = 2,
    pR7 = 3,
    dR7 = 4,
    _DA = 5;
  function nnY(A, K, q, Y, z, w, H, J) {
    var O,
      X = 0,
      $ = null,
      _ = !1,
      G = !1,
      Z = Y !== -1,
      W = -1,
      D = lnY(AgA(A, 0)) && inY(AgA(A, A.length - 1));
    if (K || H) for (O = 0; O < A.length; X >= 65536 ? O += 2 : O++) {
      if (X = AgA(A, O), !YgA(X)) return _DA;
      D = D && LR7(X, $, J), $ = X;
    } else {
      for (O = 0; O < A.length; X >= 65536 ? O += 2 : O++) {
        if (X = AgA(A, O), X === KgA) {
          if (_ = !0, Z) G = G || O - W - 1 > Y && A[W + 1] !== " ", W = O;
        } else if (!YgA(X)) return _DA;
        D = D && LR7(X, $, J), $ = X;
      }
      G = G || Z && O - W - 1 > Y && A[W + 1] !== " ";
    }
    if (!_ && !G) {
      if (D && !H && !z(A)) return UR7;
      return w === qgA ? _DA : nN6;
    }
    if (q > 9 && QR7(A)) return _DA;
    if (!H) return G ? dR7 : pR7;
    return w === qgA ? _DA : nN6;
  }
  function rnY(A, K, q, Y, z) {
    A.dump = function () {
      if (K.length === 0) return A.quotingType === qgA ? '""' : "''";
      if (!A.noCompatMode) {
        if (gnY.indexOf(K) !== -1 || FnY.test(K)) return A.quotingType === qgA ? '"' + K + '"' : "'" + K + "'";
      }
      var w = A.indent * Math.max(1, q),
        H = A.lineWidth === -1 ? -1 : Math.max(Math.min(A.lineWidth, 40), A.lineWidth - w),
        J = Y || A.flowLevel > -1 && q >= A.flowLevel;
      function O(X) {
        return cnY(A, X);
      }
      switch (nnY(K, J, A.indent, H, O, A.quotingType, A.forceQuotes && !Y, z)) {
        case UR7:
          return K;
        case nN6:
          return "'" + K.replace(/'/g, "''") + "'";
        case pR7:
          return "|" + RR7(K, A.indent) + yR7(kR7(K, w));
        case dR7:
          return ">" + RR7(K, A.indent) + yR7(kR7(onY(K, H), w));
        case _DA:
          return '"' + anY(K, H) + '"';
        default:
          throw new zgA("impossible error: invalid scalar style");
      }
    }();
  }
  function RR7(A, K) {
    var q = QR7(A) ? String(K) : "",
      Y = A[A.length - 1] === `
`,
      z = Y && (A[A.length - 2] === `
` || A === `
`),
      w = z ? "+" : Y ? "" : "-";
    return q + w + `
`;
  }
  function yR7(A) {
    return A[A.length - 1] === `
` ? A.slice(0, -1) : A;
  }
  function onY(A, K) {
    var q = /(\n+)([^\n]*)/g,
      Y = function () {
        var X = A.indexOf(`
`);
        return X = X !== -1 ? X : A.length, q.lastIndex = X, IR7(A.slice(0, X), K);
      }(),
      z = A[0] === `
` || A[0] === " ",
      w,
      H;
    while (H = q.exec(A)) {
      var J = H[1],
        O = H[2];
      w = O[0] === " ", Y += J + (!z && !w && O !== "" ? `
` : "") + IR7(O, K), z = w;
    }
    return Y;
  }
  function IR7(A, K) {
    if (A === "" || A[0] === " ") return A;
    var q = / [^ ]/g,
      Y,
      z = 0,
      w,
      H = 0,
      J = 0,
      O = "";
    while (Y = q.exec(A)) {
      if (J = Y.index, J - z > K) w = H > z ? H : J, O += `
` + A.slice(z, w), z = w + 1;
      H = J;
    }
    if (O += `
`, A.length - z > K && H > z) O += A.slice(z, H) + `
` + A.slice(H + 1);else O += A.slice(z);
    return O.slice(1);
  }
  function anY(A) {
    var K = "",
      q = 0,
      Y;
    for (var z = 0; z < A.length; q >= 65536 ? z += 2 : z++) if (q = AgA(A, z), Y = wj[q], !Y && YgA(q)) {
      if (K += A[z], q >= 65536) K += A[z + 1];
    } else K += Y || UnY(q);
    return K;
  }
  function snY(A, K, q) {
    var Y = "",
      z = A.tag,
      w,
      H,
      J;
    for (w = 0, H = q.length; w < H; w += 1) {
      if (J = q[w], A.replacer) J = A.replacer.call(q, String(w), J);
      if (pp(A, K, J, !1, !1) || typeof J > "u" && pp(A, K, null, !1, !1)) {
        if (Y !== "") Y += "," + (!A.condenseFlow ? " " : "");
        Y += A.dump;
      }
    }
    A.tag = z, A.dump = "[" + Y + "]";
  }
  function SR7(A, K, q, Y) {
    var z = "",
      w = A.tag,
      H,
      J,
      O;
    for (H = 0, J = q.length; H < J; H += 1) {
      if (O = q[H], A.replacer) O = A.replacer.call(q, String(H), O);
      if (pp(A, K + 1, O, !0, !0, !1, !0) || typeof O > "u" && pp(A, K + 1, null, !0, !0, !1, !0)) {
        if (!Y || z !== "") z += iN6(A, K);
        if (A.dump && KgA === A.dump.charCodeAt(0)) z += "-";else z += "- ";
        z += A.dump;
      }
    }
    A.tag = w, A.dump = z || "[]";
  }
  function tnY(A, K, q) {
    var Y = "",
      z = A.tag,
      w = Object.keys(q),
      H,
      J,
      O,
      X,
      $;
    for (H = 0, J = w.length; H < J; H += 1) {
      if ($ = "", Y !== "") $ += ", ";
      if (A.condenseFlow) $ += '"';
      if (O = w[H], X = q[O], A.replacer) X = A.replacer.call(q, O, X);
      if (!pp(A, K, O, !1, !1)) continue;
      if (A.dump.length > 1024) $ += "? ";
      if ($ += A.dump + (A.condenseFlow ? '"' : "") + ":" + (A.condenseFlow ? "" : " "), !pp(A, K, X, !1, !1)) continue;
      $ += A.dump, Y += $;
    }
    A.tag = z, A.dump = "{" + Y + "}";
  }
  function enY(A, K, q, Y) {
    var z = "",
      w = A.tag,
      H = Object.keys(q),
      J,
      O,
      X,
      $,
      _,
      G;
    if (A.sortKeys === !0) H.sort();else if (typeof A.sortKeys === "function") H.sort(A.sortKeys);else if (A.sortKeys) throw new zgA("sortKeys must be a boolean or a function");
    for (J = 0, O = H.length; J < O; J += 1) {
      if (G = "", !Y || z !== "") G += iN6(A, K);
      if (X = H[J], $ = q[X], A.replacer) $ = A.replacer.call(q, X, $);
      if (!pp(A, K + 1, X, !0, !0, !0)) continue;
      if (_ = A.tag !== null && A.tag !== "?" || A.dump && A.dump.length > 1024, _) if (A.dump && KgA === A.dump.charCodeAt(0)) G += "?";else G += "? ";
      if (G += A.dump, _) G += iN6(A, K);
      if (!pp(A, K + 1, $, !0, _)) continue;
      if (A.dump && KgA === A.dump.charCodeAt(0)) G += ":";else G += ": ";
      G += A.dump, z += G;
    }
    A.tag = w, A.dump = z || "{}";
  }
  function hR7(A, K, q) {
    var Y, z, w, H, J, O;
    z = q ? A.explicitTypes : A.implicitTypes;
    for (w = 0, H = z.length; w < H; w += 1) if (J = z[w], (J.instanceOf || J.predicate) && (!J.instanceOf || typeof K === "object" && K instanceof J.instanceOf) && (!J.predicate || J.predicate(K))) {
      if (q) {
        if (J.multi && J.representName) A.tag = J.representName(K);else A.tag = J.tag;
      } else A.tag = "?";
      if (J.represent) {
        if (O = A.styleMap[J.tag] || J.defaultStyle, bR7.call(J.represent) === "[object Function]") Y = J.represent(K, O);else if (xR7.call(J.represent, O)) Y = J.represent[O](K, O);else throw new zgA("!<" + J.tag + '> tag resolver accepts not "' + O + '" style');
        A.dump = Y;
      }
      return !0;
    }
    return !1;
  }
  function pp(A, K, q, Y, z, w, H) {
    if (A.tag = null, A.dump = q, !hR7(A, q, !1)) hR7(A, q, !0);
    var J = bR7.call(A.dump),
      O = Y,
      X;
    if (Y) Y = A.flowLevel < 0 || A.flowLevel > K;
    var $ = J === "[object Object]" || J === "[object Array]",
      _,
      G;
    if ($) _ = A.duplicates.indexOf(q), G = _ !== -1;
    if (A.tag !== null && A.tag !== "?" || G || A.indent !== 2 && K > 0) z = !1;
    if (G && A.usedDuplicates[_]) A.dump = "*ref_" + _;else {
      if ($ && G && !A.usedDuplicates[_]) A.usedDuplicates[_] = !0;
      if (J === "[object Object]") {
        if (Y && Object.keys(A.dump).length !== 0) {
          if (enY(A, K, A.dump, z), G) A.dump = "&ref_" + _ + A.dump;
        } else if (tnY(A, K, A.dump), G) A.dump = "&ref_" + _ + " " + A.dump;
      } else if (J === "[object Array]") {
        if (Y && A.dump.length !== 0) {
          if (A.noArrayIndent && !H && K > 0) SR7(A, K - 1, A.dump, z);else SR7(A, K, A.dump, z);
          if (G) A.dump = "&ref_" + _ + A.dump;
        } else if (snY(A, K, A.dump), G) A.dump = "&ref_" + _ + " " + A.dump;
      } else if (J === "[object String]") {
        if (A.tag !== "?") rnY(A, A.dump, K, w, O);
      } else if (J === "[object Undefined]") return !1;else {
        if (A.skipInvalid) return !1;
        throw new zgA("unacceptable kind of an object to dump " + J);
      }
      if (A.tag !== null && A.tag !== "?") {
        if (X = encodeURI(A.tag[0] === "!" ? A.tag.slice(1) : A.tag).replace(/!/g, "%21"), A.tag[0] === "!") X = "!" + X;else if (X.slice(0, 18) === "tag:yaml.org,2002:") X = "!!" + X.slice(18);else X = "!<" + X + ">";
        A.dump = X + " " + A.dump;
      }
    }
    return !0;
  }
  function ArY(A, K) {
    var q = [],
      Y = [],
      z,
      w;
    rN6(A, q, Y);
    for (z = 0, w = Y.length; z < w; z += 1) K.duplicates.push(q[Y[z]]);
    K.usedDuplicates = Array(w);
  }
  function rN6(A, K, q) {
    var Y, z, w;
    if (A !== null && typeof A === "object") if (z = K.indexOf(A), z !== -1) {
      if (q.indexOf(z) === -1) q.push(z);
    } else if (K.push(A), Array.isArray(A)) for (z = 0, w = A.length; z < w; z += 1) rN6(A[z], K, q);else {
      Y = Object.keys(A);
      for (z = 0, w = Y.length; z < w; z += 1) rN6(A[Y[z]], K, q);
    }
  }
  function KrY(A, K) {
    K = K || {};
    var q = new dnY(K);
    if (!q.noRefs) ArY(A, q);
    var Y = A;
    if (q.replacer) Y = q.replacer.call({
      "": Y
    }, "", Y);
    if (pp(q, 0, Y, !0, !0)) return q.dump + `
`;
    return "";
  }
  qrY.dump = KrY;
});

// Register to shared state
__$.lR7 = lR7;
