// Module: cV1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cV1 = v((mMA, n3K) => {
  var UV1 = Object.create(null, {
      location: {
        get: function () {
          throw Error("window.location is not supported.");
        }
      }
    }),
    xN2 = function (A, K) {
      return A.compareDocumentPosition(K);
    },
    uN2 = function (A, K) {
      return xN2(A, K) & 2 ? 1 : -1;
    },
    dV1 = function (A) {
      while ((A = A.nextSibling) && A.nodeType !== 1);
      return A;
    },
    BMA = function (A) {
      while ((A = A.previousSibling) && A.nodeType !== 1);
      return A;
    },
    BN2 = function (A) {
      if (A = A.firstChild) while (A.nodeType !== 1 && (A = A.nextSibling));
      return A;
    },
    mN2 = function (A) {
      if (A = A.lastChild) while (A.nodeType !== 1 && (A = A.previousSibling));
      return A;
    },
    uMA = function (A) {
      if (!A.parentNode) return !1;
      var K = A.parentNode.nodeType;
      return K === 1 || K === 9;
    },
    p3K = function (A) {
      if (!A) return A;
      var K = A[0];
      if (K === '"' || K === "'") {
        if (A[A.length - 1] === K) A = A.slice(1, -1);else A = A.slice(1);
        return A.replace(Bq.str_escape, function (q) {
          var Y = /^\\(?:([0-9A-Fa-f]+)|([\r\n\f]+))/.exec(q);
          if (!Y) return q.slice(1);
          if (Y[2]) return "";
          var z = parseInt(Y[1], 16);
          return String.fromCodePoint ? String.fromCodePoint(z) : String.fromCharCode(z);
        });
      } else if (Bq.ident.test(A)) return st(A);else return A;
    },
    st = function (A) {
      return A.replace(Bq.escape, function (K) {
        var q = /^\\([0-9A-Fa-f]+)/.exec(K);
        if (!q) return K[1];
        var Y = parseInt(q[1], 16);
        return String.fromCodePoint ? String.fromCodePoint(Y) : String.fromCharCode(Y);
      });
    },
    gN2 = function () {
      if (Array.prototype.indexOf) return Array.prototype.indexOf;
      return function (A, K) {
        var q = this.length;
        while (q--) if (this[q] === K) return q;
        return -1;
      };
    }(),
    c3K = function (A, K) {
      var q = Bq.inside.source.replace(/</g, A).replace(/>/g, K);
      return new RegExp(q);
    },
    AN = function (A, K, q) {
      return A = A.source, A = A.replace(K, q.source || q), new RegExp(A);
    },
    d3K = function (A, K) {
      return A.replace(/^(?:\w+:\/\/|\/+)/, "").replace(/(?:\/+|\/*#.*?)$/, "").split("/", K).join("/");
    },
    FN2 = function (A, K) {
      var q = A.replace(/\s+/g, ""),
        Y;
      if (q === "even") q = "2n+0";else if (q === "odd") q = "2n+1";else if (q.indexOf("n") === -1) q = "0n" + q;
      return Y = /^([+-])?(\d+)?n([+-])?(\d+)?$/.exec(q), {
        group: Y[1] === "-" ? -(Y[2] || 1) : +(Y[2] || 1),
        offset: Y[4] ? Y[3] === "-" ? -Y[4] : +Y[4] : 0
      };
    },
    hh6 = function (A, K, q) {
      var Y = FN2(A),
        z = Y.group,
        w = Y.offset,
        H = !q ? BN2 : mN2,
        J = !q ? dV1 : BMA;
      return function (O) {
        if (!uMA(O)) return;
        var X = H(O.parentNode),
          $ = 0;
        while (X) {
          if (K(X, O)) $++;
          if (X === O) return $ -= w, z && $ ? $ % z === 0 && $ < 0 === z < 0 : !$;
          X = J(X);
        }
      };
    },
    rG = {
      "*": function () {
        return function () {
          return !0;
        };
      }(),
      type: function (A) {
        return A = A.toLowerCase(), function (K) {
          return K.nodeName.toLowerCase() === A;
        };
      },
      attr: function (A, K, q, Y) {
        return K = l3K[K], function (z) {
          var w;
          switch (A) {
            case "for":
              w = z.htmlFor;
              break;
            case "class":
              if (w = z.className, w === "" && z.getAttribute("class") == null) w = null;
              break;
            case "href":
            case "src":
              w = z.getAttribute(A, 2);
              break;
            case "title":
              w = z.getAttribute("title") || null;
              break;
            case "id":
            case "lang":
            case "dir":
            case "accessKey":
            case "hidden":
            case "tabIndex":
            case "style":
              if (z.getAttribute) {
                w = z.getAttribute(A);
                break;
              }
            default:
              if (z.hasAttribute && !z.hasAttribute(A)) break;
              w = z[A] != null ? z[A] : z.getAttribute && z.getAttribute(A);
              break;
          }
          if (w == null) return;
          if (w = w + "", Y) w = w.toLowerCase(), q = q.toLowerCase();
          return K(w, q);
        };
      },
      ":first-child": function (A) {
        return !BMA(A) && uMA(A);
      },
      ":last-child": function (A) {
        return !dV1(A) && uMA(A);
      },
      ":only-child": function (A) {
        return !BMA(A) && !dV1(A) && uMA(A);
      },
      ":nth-child": function (A, K) {
        return hh6(A, function () {
          return !0;
        }, K);
      },
      ":nth-last-child": function (A) {
        return rG[":nth-child"](A, !0);
      },
      ":root": function (A) {
        return A.ownerDocument.documentElement === A;
      },
      ":empty": function (A) {
        return !A.firstChild;
      },
      ":not": function (A) {
        var K = xh6(A);
        return function (q) {
          return !K(q);
        };
      },
      ":first-of-type": function (A) {
        if (!uMA(A)) return;
        var K = A.nodeName;
        while (A = BMA(A)) if (A.nodeName === K) return;
        return !0;
      },
      ":last-of-type": function (A) {
        if (!uMA(A)) return;
        var K = A.nodeName;
        while (A = dV1(A)) if (A.nodeName === K) return;
        return !0;
      },
      ":only-of-type": function (A) {
        return rG[":first-of-type"](A) && rG[":last-of-type"](A);
      },
      ":nth-of-type": function (A, K) {
        return hh6(A, function (q, Y) {
          return q.nodeName === Y.nodeName;
        }, K);
      },
      ":nth-last-of-type": function (A) {
        return rG[":nth-of-type"](A, !0);
      },
      ":checked": function (A) {
        return !!(A.checked || A.selected);
      },
      ":indeterminate": function (A) {
        return !rG[":checked"](A);
      },
      ":enabled": function (A) {
        return !A.disabled && A.type !== "hidden";
      },
      ":disabled": function (A) {
        return !!A.disabled;
      },
      ":target": function (A) {
        return A.id === UV1.location.hash.substring(1);
      },
      ":focus": function (A) {
        return A === A.ownerDocument.activeElement;
      },
      ":is": function (A) {
        return xh6(A);
      },
      ":matches": function (A) {
        return rG[":is"](A);
      },
      ":nth-match": function (A, K) {
        var q = A.split(/\s*,\s*/),
          Y = q.shift(),
          z = xh6(q.join(","));
        return hh6(Y, z, K);
      },
      ":nth-last-match": function (A) {
        return rG[":nth-match"](A, !0);
      },
      ":links-here": function (A) {
        return A + "" === UV1.location + "";
      },
      ":lang": function (A) {
        return function (K) {
          while (K) {
            if (K.lang) return K.lang.indexOf(A) === 0;
            K = K.parentNode;
          }
        };
      },
      ":dir": function (A) {
        return function (K) {
          while (K) {
            if (K.dir) return K.dir === A;
            K = K.parentNode;
          }
        };
      },
      ":scope": function (A, K) {
        var q = K || A.ownerDocument;
        if (q.nodeType === 9) return A === q.documentElement;
        return A === q;
      },
      ":any-link": function (A) {
        return typeof A.href === "string";
      },
      ":local-link": function (A) {
        if (A.nodeName) return A.href && A.host === UV1.location.host;
        var K = +A + 1;
        return function (q) {
          if (!q.href) return;
          var Y = UV1.location + "",
            z = q + "";
          return d3K(Y, K) === d3K(z, K);
        };
      },
      ":default": function (A) {
        return !!A.defaultSelected;
      },
      ":valid": function (A) {
        return A.willValidate || A.validity && A.validity.valid;
      },
      ":invalid": function (A) {
        return !rG[":valid"](A);
      },
      ":in-range": function (A) {
        return A.value > A.min && A.value <= A.max;
      },
      ":out-of-range": function (A) {
        return !rG[":in-range"](A);
      },
      ":required": function (A) {
        return !!A.required;
      },
      ":optional": function (A) {
        return !A.required;
      },
      ":read-only": function (A) {
        if (A.readOnly) return !0;
        var K = A.getAttribute("contenteditable"),
          q = A.contentEditable,
          Y = A.nodeName.toLowerCase();
        return Y = Y !== "input" && Y !== "textarea", (Y || A.disabled) && K == null && q !== "true";
      },
      ":read-write": function (A) {
        return !rG[":read-only"](A);
      },
      ":hover": function () {
        throw Error(":hover is not supported.");
      },
      ":active": function () {
        throw Error(":active is not supported.");
      },
      ":link": function () {
        throw Error(":link is not supported.");
      },
      ":visited": function () {
        throw Error(":visited is not supported.");
      },
      ":column": function () {
        throw Error(":column is not supported.");
      },
      ":nth-column": function () {
        throw Error(":nth-column is not supported.");
      },
      ":nth-last-column": function () {
        throw Error(":nth-last-column is not supported.");
      },
      ":current": function () {
        throw Error(":current is not supported.");
      },
      ":past": function () {
        throw Error(":past is not supported.");
      },
      ":future": function () {
        throw Error(":future is not supported.");
      },
      ":contains": function (A) {
        return function (K) {
          var q = K.innerText || K.textContent || K.value || "";
          return q.indexOf(A) !== -1;
        };
      },
      ":has": function (A) {
        return function (K) {
          return i3K(A, K).length > 0;
        };
      }
    },
    l3K = {
      "-": function () {
        return !0;
      },
      "=": function (A, K) {
        return A === K;
      },
      "*=": function (A, K) {
        return A.indexOf(K) !== -1;
      },
      "~=": function (A, K) {
        var q, Y, z, w;
        for (Y = 0;; Y = q + 1) {
          if (q = A.indexOf(K, Y), q === -1) return !1;
          if (z = A[q - 1], w = A[q + K.length], (!z || z === " ") && (!w || w === " ")) return !0;
        }
      },
      "|=": function (A, K) {
        var q = A.indexOf(K),
          Y;
        if (q !== 0) return;
        return Y = A[q + K.length], Y === "-" || !Y;
      },
      "^=": function (A, K) {
        return A.indexOf(K) === 0;
      },
      "$=": function (A, K) {
        var q = A.lastIndexOf(K);
        return q !== -1 && q + K.length === A.length;
      },
      "!=": function (A, K) {
        return A !== K;
      }
    },
    fUA = {
      " ": function (A) {
        return function (K) {
          while (K = K.parentNode) if (A(K)) return K;
        };
      },
      ">": function (A) {
        return function (K) {
          if (K = K.parentNode) return A(K) && K;
        };
      },
      "+": function (A) {
        return function (K) {
          if (K = BMA(K)) return A(K) && K;
        };
      },
      "~": function (A) {
        return function (K) {
          while (K = BMA(K)) if (A(K)) return K;
        };
      },
      noop: function (A) {
        return function (K) {
          return A(K) && K;
        };
      },
      ref: function (A, K) {
        var q;
        function Y(z) {
          var w = z.ownerDocument,
            H = w.getElementsByTagName("*"),
            J = H.length;
          while (J--) if (q = H[J], Y.test(z)) return q = null, !0;
          q = null;
        }
        return Y.combinator = function (z) {
          if (!q || !q.getAttribute) return;
          var w = q.getAttribute(K) || "";
          if (w[0] === "#") w = w.substring(1);
          if (w === z.id && A(q)) return q;
        }, Y;
      }
    },
    Bq = {
      escape: /\\(?:[^0-9A-Fa-f\r\n]|[0-9A-Fa-f]{1,6}[\r\n\t ]?)/g,
      str_escape: /(escape)|\\(\n|\r\n?|\f)/g,
      nonascii: /[\u00A0-\uFFFF]/,
      cssid: /(?:(?!-?[0-9])(?:escape|nonascii|[-_a-zA-Z0-9])+)/,
      qname: /^ *(cssid|\*)/,
      simple: /^(?:([.#]cssid)|pseudo|attr)/,
      ref: /^ *\/(cssid)\/ */,
      combinator: /^(?: +([^ \w*.#\\]) +|( )+|([^ \w*.#\\]))(?! *$)/,
      attr: /^\[(cssid)(?:([^\w]?=)(inside))?\]/,
      pseudo: /^(:cssid)(?:\((inside)\))?/,
      inside: /(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|<[^"'>]*>|\\["'>]|[^"'>])*/,
      ident: /^(cssid)$/
    };
  Bq.cssid = AN(Bq.cssid, "nonascii", Bq.nonascii);
  Bq.cssid = AN(Bq.cssid, "escape", Bq.escape);
  Bq.qname = AN(Bq.qname, "cssid", Bq.cssid);
  Bq.simple = AN(Bq.simple, "cssid", Bq.cssid);
  Bq.ref = AN(Bq.ref, "cssid", Bq.cssid);
  Bq.attr = AN(Bq.attr, "cssid", Bq.cssid);
  Bq.pseudo = AN(Bq.pseudo, "cssid", Bq.cssid);
  Bq.inside = AN(Bq.inside, `[^"'>]*`, Bq.inside);
  Bq.attr = AN(Bq.attr, "inside", c3K("\\[", "\\]"));
  Bq.pseudo = AN(Bq.pseudo, "inside", c3K("\\(", "\\)"));
  Bq.simple = AN(Bq.simple, "pseudo", Bq.pseudo);
  Bq.simple = AN(Bq.simple, "attr", Bq.attr);
  Bq.ident = AN(Bq.ident, "cssid", Bq.cssid);
  Bq.str_escape = AN(Bq.str_escape, "escape", Bq.escape);
  var NUA = function (A) {
      var K = A.replace(/^\s+|\s+$/g, ""),
        q,
        Y = [],
        z = [],
        w,
        H,
        J,
        O,
        X;
      while (K) {
        if (J = Bq.qname.exec(K)) K = K.substring(J[0].length), H = st(J[1]), z.push(pV1(H, !0));else if (J = Bq.simple.exec(K)) K = K.substring(J[0].length), H = "*", z.push(pV1(H, !0)), z.push(pV1(J));else throw SyntaxError("Invalid selector.");
        while (J = Bq.simple.exec(K)) K = K.substring(J[0].length), z.push(pV1(J));
        if (K[0] === "!") K = K.substring(1), w = UN2(), w.qname = H, z.push(w.simple);
        if (J = Bq.ref.exec(K)) {
          K = K.substring(J[0].length), X = fUA.ref(bh6(z), st(J[1])), Y.push(X.combinator), z = [];
          continue;
        }
        if (J = Bq.combinator.exec(K)) {
          if (K = K.substring(J[0].length), O = J[1] || J[2] || J[3], O === ",") {
            Y.push(fUA.noop(bh6(z)));
            break;
          }
        } else O = "noop";
        if (!fUA[O]) throw SyntaxError("Bad combinator.");
        Y.push(fUA[O](bh6(z))), z = [];
      }
      if (q = QN2(Y), q.qname = H, q.sel = K, w) w.lname = q.qname, w.test = q, w.qname = w.qname, w.sel = q.sel, q = w;
      if (X) X.test = q, X.qname = q.qname, X.sel = q.sel, q = X;
      return q;
    },
    pV1 = function (A, K) {
      if (K) return A === "*" ? rG["*"] : rG.type(A);
      if (A[1]) return A[1][0] === "." ? rG.attr("class", "~=", st(A[1].substring(1)), !1) : rG.attr("id", "=", st(A[1].substring(1)), !1);
      if (A[2]) return A[3] ? rG[st(A[2])](p3K(A[3])) : rG[st(A[2])];
      if (A[4]) {
        var q = A[6],
          Y = /["'\s]\s*I$/i.test(q);
        if (Y) q = q.replace(/\s*I$/i, "");
        return rG.attr(st(A[4]), A[5] || "-", p3K(q), Y);
      }
      throw SyntaxError("Unknown Selector.");
    },
    bh6 = function (A) {
      var K = A.length,
        q;
      if (K < 2) return A[0];
      return function (Y) {
        if (!Y) return;
        for (q = 0; q < K; q++) if (!A[q](Y)) return;
        return !0;
      };
    },
    QN2 = function (A) {
      if (A.length < 2) return function (K) {
        return !!A[0](K);
      };
      return function (K) {
        var q = A.length;
        while (q--) if (!(K = A[q](K))) return;
        return !0;
      };
    },
    UN2 = function () {
      var A;
      function K(q) {
        var Y = q.ownerDocument,
          z = Y.getElementsByTagName(K.lname),
          w = z.length;
        while (w--) if (K.test(z[w]) && A === q) return A = null, !0;
        A = null;
      }
      return K.simple = function (q) {
        return A = q, !0;
      }, K;
    },
    xh6 = function (A) {
      var K = NUA(A),
        q = [K];
      while (K.sel) K = NUA(K.sel), q.push(K);
      if (q.length < 2) return K;
      return function (Y) {
        var z = q.length,
          w = 0;
        for (; w < z; w++) if (q[w](Y)) return !0;
      };
    },
    i3K = function (A, K) {
      var q = [],
        Y = NUA(A),
        z = K.getElementsByTagName(Y.qname),
        w = 0,
        H;
      while (H = z[w++]) if (Y(H)) q.push(H);
      if (Y.sel) {
        while (Y.sel) {
          Y = NUA(Y.sel), z = K.getElementsByTagName(Y.qname), w = 0;
          while (H = z[w++]) if (Y(H) && gN2.call(q, H) === -1) q.push(H);
        }
        q.sort(uN2);
      }
      return q;
    };
  n3K.exports = mMA = function (A, K) {
    var q, Y;
    if (K.nodeType !== 11 && A.indexOf(" ") === -1) {
      if (A[0] === "#" && K.rooted && /^#[A-Z_][-A-Z0-9_]*$/i.test(A)) {
        if (K.doc._hasMultipleElementsWithId) {
          if (q = A.substring(1), !K.doc._hasMultipleElementsWithId(q)) return Y = K.doc.getElementById(q), Y ? [Y] : [];
        }
      }
      if (A[0] === "." && /^\.\w+$/.test(A)) return K.getElementsByClassName(A.substring(1));
      if (/^\w+$/.test(A)) return K.getElementsByTagName(A);
    }
    return i3K(A, K);
  };
  mMA.selectors = rG;
  mMA.operators = l3K;
  mMA.combinators = fUA;
  mMA.matches = function (A, K) {
    var q = {
      sel: K
    };
    do if (q = NUA(q.sel), q(A)) return !0; while (q.sel);
    return !1;
  };
});

// Register to shared state
__$.cV1 = cV1;
