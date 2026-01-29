// Module: ER7
// Dependencies: HDA, JDA, FL7, SZ1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ER7 = v((PnY, cN6) => {
  var T5A = __$.HDA(),
    DR7 = __$.JDA(),
    oiY = __$.FL7(),
    aiY = __$.SZ1(),
    Qs = Object.prototype.hasOwnProperty,
    hZ1 = 1,
    jR7 = 2,
    MR7 = 3,
    bZ1 = 4,
    UN6 = 1,
    siY = 2,
    XR7 = 3,
    tiY = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
    eiY = /[\x85\u2028\u2029]/,
    AnY = /[,\[\]\{\}]/,
    PR7 = /^(?:!|!!|![a-z\-]+!)$/i,
    VR7 = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
  function $R7(A) {
    return Object.prototype.toString.call(A);
  }
  function PB(A) {
    return A === 10 || A === 13;
  }
  function v5A(A) {
    return A === 9 || A === 32;
  }
  function If(A) {
    return A === 9 || A === 32 || A === 10 || A === 13;
  }
  function ODA(A) {
    return A === 44 || A === 91 || A === 93 || A === 123 || A === 125;
  }
  function KnY(A) {
    var K;
    if (48 <= A && A <= 57) return A - 48;
    if (K = A | 32, 97 <= K && K <= 102) return K - 97 + 10;
    return -1;
  }
  function qnY(A) {
    if (A === 120) return 2;
    if (A === 117) return 4;
    if (A === 85) return 8;
    return 0;
  }
  function YnY(A) {
    if (48 <= A && A <= 57) return A - 48;
    return -1;
  }
  function _R7(A) {
    return A === 48 ? "\x00" : A === 97 ? "\x07" : A === 98 ? "\b" : A === 116 ? "\t" : A === 9 ? "\t" : A === 110 ? `
` : A === 118 ? "\v" : A === 102 ? "\f" : A === 114 ? "\r" : A === 101 ? "\x1B" : A === 32 ? " " : A === 34 ? '"' : A === 47 ? "/" : A === 92 ? "\\" : A === 78 ? "" : A === 95 ? " " : A === 76 ? "\u2028" : A === 80 ? "\u2029" : "";
  }
  function znY(A) {
    if (A <= 65535) return String.fromCharCode(A);
    return String.fromCharCode((A - 65536 >> 10) + 55296, (A - 65536 & 1023) + 56320);
  }
  var fR7 = Array(256),
    NR7 = Array(256);
  for (gs = 0; gs < 256; gs++) fR7[gs] = _R7(gs) ? 1 : 0, NR7[gs] = _R7(gs);
  var gs;
  function wnY(A, K) {
    this.input = A, this.filename = K.filename || null, this.schema = K.schema || aiY, this.onWarning = K.onWarning || null, this.legacy = K.legacy || !1, this.json = K.json || !1, this.listener = K.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = A.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
  }
  function TR7(A, K) {
    var q = {
      name: A.filename,
      buffer: A.input.slice(0, -1),
      position: A.position,
      line: A.line,
      column: A.position - A.lineStart
    };
    return q.snippet = oiY(q), new DR7(K, q);
  }
  function BK(A, K) {
    throw TR7(A, K);
  }
  function xZ1(A, K) {
    if (A.onWarning) A.onWarning.call(null, TR7(A, K));
  }
  var GR7 = {
    YAML: function (K, q, Y) {
      var z, w, H;
      if (K.version !== null) BK(K, "duplication of %YAML directive");
      if (Y.length !== 1) BK(K, "YAML directive accepts exactly one argument");
      if (z = /^([0-9]+)\.([0-9]+)$/.exec(Y[0]), z === null) BK(K, "ill-formed argument of the YAML directive");
      if (w = parseInt(z[1], 10), H = parseInt(z[2], 10), w !== 1) BK(K, "unacceptable YAML version of the document");
      if (K.version = Y[0], K.checkLineBreaks = H < 2, H !== 1 && H !== 2) xZ1(K, "unsupported YAML version of the document");
    },
    TAG: function (K, q, Y) {
      var z, w;
      if (Y.length !== 2) BK(K, "TAG directive accepts exactly two arguments");
      if (z = Y[0], w = Y[1], !PR7.test(z)) BK(K, "ill-formed tag handle (first argument) of the TAG directive");
      if (Qs.call(K.tagMap, z)) BK(K, 'there is a previously declared suffix for "' + z + '" tag handle');
      if (!VR7.test(w)) BK(K, "ill-formed tag prefix (second argument) of the TAG directive");
      try {
        w = decodeURIComponent(w);
      } catch (H) {
        BK(K, "tag prefix is malformed: " + w);
      }
      K.tagMap[z] = w;
    }
  };
  function Fs(A, K, q, Y) {
    var z, w, H, J;
    if (K < q) {
      if (J = A.input.slice(K, q), Y) {
        for (z = 0, w = J.length; z < w; z += 1) if (H = J.charCodeAt(z), !(H === 9 || 32 <= H && H <= 1114111)) BK(A, "expected valid JSON character");
      } else if (tiY.test(J)) BK(A, "the stream contains non-printable characters");
      A.result += J;
    }
  }
  function ZR7(A, K, q, Y) {
    var z, w, H, J;
    if (!T5A.isObject(q)) BK(A, "cannot merge mappings; the provided source object is unacceptable");
    z = Object.keys(q);
    for (H = 0, J = z.length; H < J; H += 1) if (w = z[H], !Qs.call(K, w)) K[w] = q[w], Y[w] = !0;
  }
  function XDA(A, K, q, Y, z, w, H, J, O) {
    var X, $;
    if (Array.isArray(z)) {
      z = Array.prototype.slice.call(z);
      for (X = 0, $ = z.length; X < $; X += 1) {
        if (Array.isArray(z[X])) BK(A, "nested arrays are not supported inside keys");
        if (typeof z === "object" && $R7(z[X]) === "[object Object]") z[X] = "[object Object]";
      }
    }
    if (typeof z === "object" && $R7(z) === "[object Object]") z = "[object Object]";
    if (z = String(z), K === null) K = {};
    if (Y === "tag:yaml.org,2002:merge") {
      if (Array.isArray(w)) for (X = 0, $ = w.length; X < $; X += 1) ZR7(A, K, w[X], q);else ZR7(A, K, w, q);
    } else {
      if (!A.json && !Qs.call(q, z) && Qs.call(K, z)) A.line = H || A.line, A.lineStart = J || A.lineStart, A.position = O || A.position, BK(A, "duplicated mapping key");
      if (z === "__proto__") Object.defineProperty(K, z, {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: w
      });else K[z] = w;
      delete q[z];
    }
    return K;
  }
  function pN6(A) {
    var K = A.input.charCodeAt(A.position);
    if (K === 10) A.position++;else if (K === 13) {
      if (A.position++, A.input.charCodeAt(A.position) === 10) A.position++;
    } else BK(A, "a line break is expected");
    A.line += 1, A.lineStart = A.position, A.firstTabInLine = -1;
  }
  function v$(A, K, q) {
    var Y = 0,
      z = A.input.charCodeAt(A.position);
    while (z !== 0) {
      while (v5A(z)) {
        if (z === 9 && A.firstTabInLine === -1) A.firstTabInLine = A.position;
        z = A.input.charCodeAt(++A.position);
      }
      if (K && z === 35) do z = A.input.charCodeAt(++A.position); while (z !== 10 && z !== 13 && z !== 0);
      if (PB(z)) {
        pN6(A), z = A.input.charCodeAt(A.position), Y++, A.lineIndent = 0;
        while (z === 32) A.lineIndent++, z = A.input.charCodeAt(++A.position);
      } else break;
    }
    if (q !== -1 && Y !== 0 && A.lineIndent < q) xZ1(A, "deficient indentation");
    return Y;
  }
  function uZ1(A) {
    var K = A.position,
      q;
    if (q = A.input.charCodeAt(K), (q === 45 || q === 46) && q === A.input.charCodeAt(K + 1) && q === A.input.charCodeAt(K + 2)) {
      if (K += 3, q = A.input.charCodeAt(K), q === 0 || If(q)) return !0;
    }
    return !1;
  }
  function dN6(A, K) {
    if (K === 1) A.result += " ";else if (K > 1) A.result += T5A.repeat(`
`, K - 1);
  }
  function HnY(A, K, q) {
    var Y,
      z,
      w,
      H,
      J,
      O,
      X,
      $,
      _ = A.kind,
      G = A.result,
      Z;
    if (Z = A.input.charCodeAt(A.position), If(Z) || ODA(Z) || Z === 35 || Z === 38 || Z === 42 || Z === 33 || Z === 124 || Z === 62 || Z === 39 || Z === 34 || Z === 37 || Z === 64 || Z === 96) return !1;
    if (Z === 63 || Z === 45) {
      if (z = A.input.charCodeAt(A.position + 1), If(z) || q && ODA(z)) return !1;
    }
    A.kind = "scalar", A.result = "", w = H = A.position, J = !1;
    while (Z !== 0) {
      if (Z === 58) {
        if (z = A.input.charCodeAt(A.position + 1), If(z) || q && ODA(z)) break;
      } else if (Z === 35) {
        if (Y = A.input.charCodeAt(A.position - 1), If(Y)) break;
      } else if (A.position === A.lineStart && uZ1(A) || q && ODA(Z)) break;else if (PB(Z)) if (O = A.line, X = A.lineStart, $ = A.lineIndent, v$(A, !1, -1), A.lineIndent >= K) {
        J = !0, Z = A.input.charCodeAt(A.position);
        continue;
      } else {
        A.position = H, A.line = O, A.lineStart = X, A.lineIndent = $;
        break;
      }
      if (J) Fs(A, w, H, !1), dN6(A, A.line - O), w = H = A.position, J = !1;
      if (!v5A(Z)) H = A.position + 1;
      Z = A.input.charCodeAt(++A.position);
    }
    if (Fs(A, w, H, !1), A.result) return !0;
    return A.kind = _, A.result = G, !1;
  }
  function JnY(A, K) {
    var q, Y, z;
    if (q = A.input.charCodeAt(A.position), q !== 39) return !1;
    A.kind = "scalar", A.result = "", A.position++, Y = z = A.position;
    while ((q = A.input.charCodeAt(A.position)) !== 0) if (q === 39) {
      if (Fs(A, Y, A.position, !0), q = A.input.charCodeAt(++A.position), q === 39) Y = A.position, A.position++, z = A.position;else return !0;
    } else if (PB(q)) Fs(A, Y, z, !0), dN6(A, v$(A, !1, K)), Y = z = A.position;else if (A.position === A.lineStart && uZ1(A)) BK(A, "unexpected end of the document within a single quoted scalar");else A.position++, z = A.position;
    BK(A, "unexpected end of the stream within a single quoted scalar");
  }
  function OnY(A, K) {
    var q, Y, z, w, H, J;
    if (J = A.input.charCodeAt(A.position), J !== 34) return !1;
    A.kind = "scalar", A.result = "", A.position++, q = Y = A.position;
    while ((J = A.input.charCodeAt(A.position)) !== 0) if (J === 34) return Fs(A, q, A.position, !0), A.position++, !0;else if (J === 92) {
      if (Fs(A, q, A.position, !0), J = A.input.charCodeAt(++A.position), PB(J)) v$(A, !1, K);else if (J < 256 && fR7[J]) A.result += NR7[J], A.position++;else if ((H = qnY(J)) > 0) {
        z = H, w = 0;
        for (; z > 0; z--) if (J = A.input.charCodeAt(++A.position), (H = KnY(J)) >= 0) w = (w << 4) + H;else BK(A, "expected hexadecimal character");
        A.result += znY(w), A.position++;
      } else BK(A, "unknown escape sequence");
      q = Y = A.position;
    } else if (PB(J)) Fs(A, q, Y, !0), dN6(A, v$(A, !1, K)), q = Y = A.position;else if (A.position === A.lineStart && uZ1(A)) BK(A, "unexpected end of the document within a double quoted scalar");else A.position++, Y = A.position;
    BK(A, "unexpected end of the stream within a double quoted scalar");
  }
  function XnY(A, K) {
    var q = !0,
      Y,
      z,
      w,
      H = A.tag,
      J,
      O = A.anchor,
      X,
      $,
      _,
      G,
      Z,
      W = Object.create(null),
      D,
      j,
      M,
      P;
    if (P = A.input.charCodeAt(A.position), P === 91) $ = 93, Z = !1, J = [];else if (P === 123) $ = 125, Z = !0, J = {};else return !1;
    if (A.anchor !== null) A.anchorMap[A.anchor] = J;
    P = A.input.charCodeAt(++A.position);
    while (P !== 0) {
      if (v$(A, !0, K), P = A.input.charCodeAt(A.position), P === $) return A.position++, A.tag = H, A.anchor = O, A.kind = Z ? "mapping" : "sequence", A.result = J, !0;else if (!q) BK(A, "missed comma between flow collection entries");else if (P === 44) BK(A, "expected the node content, but found ','");
      if (j = D = M = null, _ = G = !1, P === 63) {
        if (X = A.input.charCodeAt(A.position + 1), If(X)) _ = G = !0, A.position++, v$(A, !0, K);
      }
      if (Y = A.line, z = A.lineStart, w = A.position, $DA(A, K, hZ1, !1, !0), j = A.tag, D = A.result, v$(A, !0, K), P = A.input.charCodeAt(A.position), (G || A.line === Y) && P === 58) _ = !0, P = A.input.charCodeAt(++A.position), v$(A, !0, K), $DA(A, K, hZ1, !1, !0), M = A.result;
      if (Z) XDA(A, J, W, j, D, M, Y, z, w);else if (_) J.push(XDA(A, null, W, j, D, M, Y, z, w));else J.push(D);
      if (v$(A, !0, K), P = A.input.charCodeAt(A.position), P === 44) q = !0, P = A.input.charCodeAt(++A.position);else q = !1;
    }
    BK(A, "unexpected end of the stream within a flow collection");
  }
  function $nY(A, K) {
    var q,
      Y,
      z = UN6,
      w = !1,
      H = !1,
      J = K,
      O = 0,
      X = !1,
      $,
      _;
    if (_ = A.input.charCodeAt(A.position), _ === 124) Y = !1;else if (_ === 62) Y = !0;else return !1;
    A.kind = "scalar", A.result = "";
    while (_ !== 0) if (_ = A.input.charCodeAt(++A.position), _ === 43 || _ === 45) {
      if (UN6 === z) z = _ === 43 ? XR7 : siY;else BK(A, "repeat of a chomping mode identifier");
    } else if (($ = YnY(_)) >= 0) {
      if ($ === 0) BK(A, "bad explicit indentation width of a block scalar; it cannot be less than one");else if (!H) J = K + $ - 1, H = !0;else BK(A, "repeat of an indentation width identifier");
    } else break;
    if (v5A(_)) {
      do _ = A.input.charCodeAt(++A.position); while (v5A(_));
      if (_ === 35) do _ = A.input.charCodeAt(++A.position); while (!PB(_) && _ !== 0);
    }
    while (_ !== 0) {
      pN6(A), A.lineIndent = 0, _ = A.input.charCodeAt(A.position);
      while ((!H || A.lineIndent < J) && _ === 32) A.lineIndent++, _ = A.input.charCodeAt(++A.position);
      if (!H && A.lineIndent > J) J = A.lineIndent;
      if (PB(_)) {
        O++;
        continue;
      }
      if (A.lineIndent < J) {
        if (z === XR7) A.result += T5A.repeat(`
`, w ? 1 + O : O);else if (z === UN6) {
          if (w) A.result += `
`;
        }
        break;
      }
      if (Y) {
        if (v5A(_)) X = !0, A.result += T5A.repeat(`
`, w ? 1 + O : O);else if (X) X = !1, A.result += T5A.repeat(`
`, O + 1);else if (O === 0) {
          if (w) A.result += " ";
        } else A.result += T5A.repeat(`
`, O);
      } else A.result += T5A.repeat(`
`, w ? 1 + O : O);
      w = !0, H = !0, O = 0, q = A.position;
      while (!PB(_) && _ !== 0) _ = A.input.charCodeAt(++A.position);
      Fs(A, q, A.position, !1);
    }
    return !0;
  }
  function WR7(A, K) {
    var q,
      Y = A.tag,
      z = A.anchor,
      w = [],
      H,
      J = !1,
      O;
    if (A.firstTabInLine !== -1) return !1;
    if (A.anchor !== null) A.anchorMap[A.anchor] = w;
    O = A.input.charCodeAt(A.position);
    while (O !== 0) {
      if (A.firstTabInLine !== -1) A.position = A.firstTabInLine, BK(A, "tab characters must not be used in indentation");
      if (O !== 45) break;
      if (H = A.input.charCodeAt(A.position + 1), !If(H)) break;
      if (J = !0, A.position++, v$(A, !0, -1)) {
        if (A.lineIndent <= K) {
          w.push(null), O = A.input.charCodeAt(A.position);
          continue;
        }
      }
      if (q = A.line, $DA(A, K, MR7, !1, !0), w.push(A.result), v$(A, !0, -1), O = A.input.charCodeAt(A.position), (A.line === q || A.lineIndent > K) && O !== 0) BK(A, "bad indentation of a sequence entry");else if (A.lineIndent < K) break;
    }
    if (J) return A.tag = Y, A.anchor = z, A.kind = "sequence", A.result = w, !0;
    return !1;
  }
  function _nY(A, K, q) {
    var Y,
      z,
      w,
      H,
      J,
      O,
      X = A.tag,
      $ = A.anchor,
      _ = {},
      G = Object.create(null),
      Z = null,
      W = null,
      D = null,
      j = !1,
      M = !1,
      P;
    if (A.firstTabInLine !== -1) return !1;
    if (A.anchor !== null) A.anchorMap[A.anchor] = _;
    P = A.input.charCodeAt(A.position);
    while (P !== 0) {
      if (!j && A.firstTabInLine !== -1) A.position = A.firstTabInLine, BK(A, "tab characters must not be used in indentation");
      if (Y = A.input.charCodeAt(A.position + 1), w = A.line, (P === 63 || P === 58) && If(Y)) {
        if (P === 63) {
          if (j) XDA(A, _, G, Z, W, null, H, J, O), Z = W = D = null;
          M = !0, j = !0, z = !0;
        } else if (j) j = !1, z = !0;else BK(A, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
        A.position += 1, P = Y;
      } else {
        if (H = A.line, J = A.lineStart, O = A.position, !$DA(A, q, jR7, !1, !0)) break;
        if (A.line === w) {
          P = A.input.charCodeAt(A.position);
          while (v5A(P)) P = A.input.charCodeAt(++A.position);
          if (P === 58) {
            if (P = A.input.charCodeAt(++A.position), !If(P)) BK(A, "a whitespace character is expected after the key-value separator within a block mapping");
            if (j) XDA(A, _, G, Z, W, null, H, J, O), Z = W = D = null;
            M = !0, j = !1, z = !1, Z = A.tag, W = A.result;
          } else if (M) BK(A, "can not read an implicit mapping pair; a colon is missed");else return A.tag = X, A.anchor = $, !0;
        } else if (M) BK(A, "can not read a block mapping entry; a multiline key may not be an implicit key");else return A.tag = X, A.anchor = $, !0;
      }
      if (A.line === w || A.lineIndent > K) {
        if (j) H = A.line, J = A.lineStart, O = A.position;
        if ($DA(A, K, bZ1, !0, z)) if (j) W = A.result;else D = A.result;
        if (!j) XDA(A, _, G, Z, W, D, H, J, O), Z = W = D = null;
        v$(A, !0, -1), P = A.input.charCodeAt(A.position);
      }
      if ((A.line === w || A.lineIndent > K) && P !== 0) BK(A, "bad indentation of a mapping entry");else if (A.lineIndent < K) break;
    }
    if (j) XDA(A, _, G, Z, W, null, H, J, O);
    if (M) A.tag = X, A.anchor = $, A.kind = "mapping", A.result = _;
    return M;
  }
  function GnY(A) {
    var K,
      q = !1,
      Y = !1,
      z,
      w,
      H;
    if (H = A.input.charCodeAt(A.position), H !== 33) return !1;
    if (A.tag !== null) BK(A, "duplication of a tag property");
    if (H = A.input.charCodeAt(++A.position), H === 60) q = !0, H = A.input.charCodeAt(++A.position);else if (H === 33) Y = !0, z = "!!", H = A.input.charCodeAt(++A.position);else z = "!";
    if (K = A.position, q) {
      do H = A.input.charCodeAt(++A.position); while (H !== 0 && H !== 62);
      if (A.position < A.length) w = A.input.slice(K, A.position), H = A.input.charCodeAt(++A.position);else BK(A, "unexpected end of the stream within a verbatim tag");
    } else {
      while (H !== 0 && !If(H)) {
        if (H === 33) if (!Y) {
          if (z = A.input.slice(K - 1, A.position + 1), !PR7.test(z)) BK(A, "named tag handle cannot contain such characters");
          Y = !0, K = A.position + 1;
        } else BK(A, "tag suffix cannot contain exclamation marks");
        H = A.input.charCodeAt(++A.position);
      }
      if (w = A.input.slice(K, A.position), AnY.test(w)) BK(A, "tag suffix cannot contain flow indicator characters");
    }
    if (w && !VR7.test(w)) BK(A, "tag name cannot contain such characters: " + w);
    try {
      w = decodeURIComponent(w);
    } catch (J) {
      BK(A, "tag name is malformed: " + w);
    }
    if (q) A.tag = w;else if (Qs.call(A.tagMap, z)) A.tag = A.tagMap[z] + w;else if (z === "!") A.tag = "!" + w;else if (z === "!!") A.tag = "tag:yaml.org,2002:" + w;else BK(A, 'undeclared tag handle "' + z + '"');
    return !0;
  }
  function ZnY(A) {
    var K, q;
    if (q = A.input.charCodeAt(A.position), q !== 38) return !1;
    if (A.anchor !== null) BK(A, "duplication of an anchor property");
    q = A.input.charCodeAt(++A.position), K = A.position;
    while (q !== 0 && !If(q) && !ODA(q)) q = A.input.charCodeAt(++A.position);
    if (A.position === K) BK(A, "name of an anchor node must contain at least one character");
    return A.anchor = A.input.slice(K, A.position), !0;
  }
  function WnY(A) {
    var K, q, Y;
    if (Y = A.input.charCodeAt(A.position), Y !== 42) return !1;
    Y = A.input.charCodeAt(++A.position), K = A.position;
    while (Y !== 0 && !If(Y) && !ODA(Y)) Y = A.input.charCodeAt(++A.position);
    if (A.position === K) BK(A, "name of an alias node must contain at least one character");
    if (q = A.input.slice(K, A.position), !Qs.call(A.anchorMap, q)) BK(A, 'unidentified alias "' + q + '"');
    return A.result = A.anchorMap[q], v$(A, !0, -1), !0;
  }
  function $DA(A, K, q, Y, z) {
    var w,
      H,
      J,
      O = 1,
      X = !1,
      $ = !1,
      _,
      G,
      Z,
      W,
      D,
      j;
    if (A.listener !== null) A.listener("open", A);
    if (A.tag = null, A.anchor = null, A.kind = null, A.result = null, w = H = J = bZ1 === q || MR7 === q, Y) {
      if (v$(A, !0, -1)) {
        if (X = !0, A.lineIndent > K) O = 1;else if (A.lineIndent === K) O = 0;else if (A.lineIndent < K) O = -1;
      }
    }
    if (O === 1) while (GnY(A) || ZnY(A)) if (v$(A, !0, -1)) {
      if (X = !0, J = w, A.lineIndent > K) O = 1;else if (A.lineIndent === K) O = 0;else if (A.lineIndent < K) O = -1;
    } else J = !1;
    if (J) J = X || z;
    if (O === 1 || bZ1 === q) {
      if (hZ1 === q || jR7 === q) D = K;else D = K + 1;
      if (j = A.position - A.lineStart, O === 1) {
        if (J && (WR7(A, j) || _nY(A, j, D)) || XnY(A, D)) $ = !0;else {
          if (H && $nY(A, D) || JnY(A, D) || OnY(A, D)) $ = !0;else if (WnY(A)) {
            if ($ = !0, A.tag !== null || A.anchor !== null) BK(A, "alias node should not have any properties");
          } else if (HnY(A, D, hZ1 === q)) {
            if ($ = !0, A.tag === null) A.tag = "?";
          }
          if (A.anchor !== null) A.anchorMap[A.anchor] = A.result;
        }
      } else if (O === 0) $ = J && WR7(A, j);
    }
    if (A.tag === null) {
      if (A.anchor !== null) A.anchorMap[A.anchor] = A.result;
    } else if (A.tag === "?") {
      if (A.result !== null && A.kind !== "scalar") BK(A, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + A.kind + '"');
      for (_ = 0, G = A.implicitTypes.length; _ < G; _ += 1) if (W = A.implicitTypes[_], W.resolve(A.result)) {
        if (A.result = W.construct(A.result), A.tag = W.tag, A.anchor !== null) A.anchorMap[A.anchor] = A.result;
        break;
      }
    } else if (A.tag !== "!") {
      if (Qs.call(A.typeMap[A.kind || "fallback"], A.tag)) W = A.typeMap[A.kind || "fallback"][A.tag];else {
        W = null, Z = A.typeMap.multi[A.kind || "fallback"];
        for (_ = 0, G = Z.length; _ < G; _ += 1) if (A.tag.slice(0, Z[_].tag.length) === Z[_].tag) {
          W = Z[_];
          break;
        }
      }
      if (!W) BK(A, "unknown tag !<" + A.tag + ">");
      if (A.result !== null && W.kind !== A.kind) BK(A, "unacceptable node kind for !<" + A.tag + '> tag; it should be "' + W.kind + '", not "' + A.kind + '"');
      if (!W.resolve(A.result, A.tag)) BK(A, "cannot resolve a node with !<" + A.tag + "> explicit tag");else if (A.result = W.construct(A.result, A.tag), A.anchor !== null) A.anchorMap[A.anchor] = A.result;
    }
    if (A.listener !== null) A.listener("close", A);
    return A.tag !== null || A.anchor !== null || $;
  }
  function DnY(A) {
    var K = A.position,
      q,
      Y,
      z,
      w = !1,
      H;
    A.version = null, A.checkLineBreaks = A.legacy, A.tagMap = Object.create(null), A.anchorMap = Object.create(null);
    while ((H = A.input.charCodeAt(A.position)) !== 0) {
      if (v$(A, !0, -1), H = A.input.charCodeAt(A.position), A.lineIndent > 0 || H !== 37) break;
      w = !0, H = A.input.charCodeAt(++A.position), q = A.position;
      while (H !== 0 && !If(H)) H = A.input.charCodeAt(++A.position);
      if (Y = A.input.slice(q, A.position), z = [], Y.length < 1) BK(A, "directive name must not be less than one character in length");
      while (H !== 0) {
        while (v5A(H)) H = A.input.charCodeAt(++A.position);
        if (H === 35) {
          do H = A.input.charCodeAt(++A.position); while (H !== 0 && !PB(H));
          break;
        }
        if (PB(H)) break;
        q = A.position;
        while (H !== 0 && !If(H)) H = A.input.charCodeAt(++A.position);
        z.push(A.input.slice(q, A.position));
      }
      if (H !== 0) pN6(A);
      if (Qs.call(GR7, Y)) GR7[Y](A, Y, z);else xZ1(A, 'unknown document directive "' + Y + '"');
    }
    if (v$(A, !0, -1), A.lineIndent === 0 && A.input.charCodeAt(A.position) === 45 && A.input.charCodeAt(A.position + 1) === 45 && A.input.charCodeAt(A.position + 2) === 45) A.position += 3, v$(A, !0, -1);else if (w) BK(A, "directives end mark is expected");
    if ($DA(A, A.lineIndent - 1, bZ1, !1, !0), v$(A, !0, -1), A.checkLineBreaks && eiY.test(A.input.slice(K, A.position))) xZ1(A, "non-ASCII line breaks are interpreted as content");
    if (A.documents.push(A.result), A.position === A.lineStart && uZ1(A)) {
      if (A.input.charCodeAt(A.position) === 46) A.position += 3, v$(A, !0, -1);
      return;
    }
    if (A.position < A.length - 1) BK(A, "end of the stream or a document separator is expected");else return;
  }
  function vR7(A, K) {
    if (A = String(A), K = K || {}, A.length !== 0) {
      if (A.charCodeAt(A.length - 1) !== 10 && A.charCodeAt(A.length - 1) !== 13) A += `
`;
      if (A.charCodeAt(0) === 65279) A = A.slice(1);
    }
    var q = new wnY(A, K),
      Y = A.indexOf("\x00");
    if (Y !== -1) q.position = Y, BK(q, "null byte is not allowed in input");
    q.input += "\x00";
    while (q.input.charCodeAt(q.position) === 32) q.lineIndent += 1, q.position += 1;
    while (q.position < q.length - 1) DnY(q);
    return q.documents;
  }
  function jnY(A, K, q) {
    if (K !== null && typeof K === "object" && typeof q > "u") q = K, K = null;
    var Y = vR7(A, q);
    if (typeof K !== "function") return Y;
    for (var z = 0, w = Y.length; z < w; z += 1) K(Y[z]);
  }
  function MnY(A, K) {
    var q = vR7(A, K);
    if (q.length === 0) return;else if (q.length === 1) return q[0];
    throw new DR7("expected a single document in the stream, but found more");
  }
  PnY.loadAll = jnY;
  PnY.load = MnY;
});

// Register to shared state
__$.ER7 = ER7;
