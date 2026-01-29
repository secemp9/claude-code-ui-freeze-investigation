// Module: V2K
// Dependencies: J2K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var V2K = v((veH, P2K) => {
  function Sv2(A) {
    for (var K = 1; K < arguments.length; K++) {
      var q = arguments[K];
      for (var Y in q) if (q.hasOwnProperty(Y)) A[Y] = q[Y];
    }
    return A;
  }
  function yb6(A, K) {
    return Array(K + 1).join(A);
  }
  function hv2(A) {
    return A.replace(/^\n*/, "");
  }
  function bv2(A) {
    var K = A.length;
    while (K > 0 && A[K - 1] === `
`) K--;
    return A.substring(0, K);
  }
  var xv2 = ["ADDRESS", "ARTICLE", "ASIDE", "AUDIO", "BLOCKQUOTE", "BODY", "CANVAS", "CENTER", "DD", "DIR", "DIV", "DL", "DT", "FIELDSET", "FIGCAPTION", "FIGURE", "FOOTER", "FORM", "FRAMESET", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "HGROUP", "HR", "HTML", "ISINDEX", "LI", "MAIN", "MENU", "NAV", "NOFRAMES", "NOSCRIPT", "OL", "OUTPUT", "P", "PRE", "SECTION", "TABLE", "TBODY", "TD", "TFOOT", "TH", "THEAD", "TR", "UL"];
  function Ib6(A) {
    return Sb6(A, xv2);
  }
  var $2K = ["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "META", "PARAM", "SOURCE", "TRACK", "WBR"];
  function _2K(A) {
    return Sb6(A, $2K);
  }
  function uv2(A) {
    return Z2K(A, $2K);
  }
  var G2K = ["A", "TABLE", "THEAD", "TBODY", "TFOOT", "TH", "TD", "IFRAME", "SCRIPT", "AUDIO", "VIDEO"];
  function Bv2(A) {
    return Sb6(A, G2K);
  }
  function mv2(A) {
    return Z2K(A, G2K);
  }
  function Sb6(A, K) {
    return K.indexOf(A.nodeName) >= 0;
  }
  function Z2K(A, K) {
    return A.getElementsByTagName && K.some(function (q) {
      return A.getElementsByTagName(q).length;
    });
  }
  var Vj = {};
  Vj.paragraph = {
    filter: "p",
    replacement: function (A) {
      return `

` + A + `

`;
    }
  };
  Vj.lineBreak = {
    filter: "br",
    replacement: function (A, K, q) {
      return q.br + `
`;
    }
  };
  Vj.heading = {
    filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
    replacement: function (A, K, q) {
      var Y = Number(K.nodeName.charAt(1));
      if (q.headingStyle === "setext" && Y < 3) {
        var z = yb6(Y === 1 ? "=" : "-", A.length);
        return `

` + A + `
` + z + `

`;
      } else return `

` + yb6("#", Y) + " " + A + `

`;
    }
  };
  Vj.blockquote = {
    filter: "blockquote",
    replacement: function (A) {
      return A = A.replace(/^\n+|\n+$/g, ""), A = A.replace(/^/gm, "> "), `

` + A + `

`;
    }
  };
  Vj.list = {
    filter: ["ul", "ol"],
    replacement: function (A, K) {
      var q = K.parentNode;
      if (q.nodeName === "LI" && q.lastElementChild === K) return `
` + A;else return `

` + A + `

`;
    }
  };
  Vj.listItem = {
    filter: "li",
    replacement: function (A, K, q) {
      A = A.replace(/^\n+/, "").replace(/\n+$/, `
`).replace(/\n/gm, `
    `);
      var Y = q.bulletListMarker + "   ",
        z = K.parentNode;
      if (z.nodeName === "OL") {
        var w = z.getAttribute("start"),
          H = Array.prototype.indexOf.call(z.children, K);
        Y = (w ? Number(w) + H : H + 1) + ".  ";
      }
      return Y + A + (K.nextSibling && !/\n$/.test(A) ? `
` : "");
    }
  };
  Vj.indentedCodeBlock = {
    filter: function (A, K) {
      return K.codeBlockStyle === "indented" && A.nodeName === "PRE" && A.firstChild && A.firstChild.nodeName === "CODE";
    },
    replacement: function (A, K, q) {
      return `

    ` + K.firstChild.textContent.replace(/\n/g, `
    `) + `

`;
    }
  };
  Vj.fencedCodeBlock = {
    filter: function (A, K) {
      return K.codeBlockStyle === "fenced" && A.nodeName === "PRE" && A.firstChild && A.firstChild.nodeName === "CODE";
    },
    replacement: function (A, K, q) {
      var Y = K.firstChild.getAttribute("class") || "",
        z = (Y.match(/language-(\S+)/) || [null, ""])[1],
        w = K.firstChild.textContent,
        H = q.fence.charAt(0),
        J = 3,
        O = new RegExp("^" + H + "{3,}", "gm"),
        X;
      while (X = O.exec(w)) if (X[0].length >= J) J = X[0].length + 1;
      var $ = yb6(H, J);
      return `

` + $ + z + `
` + w.replace(/\n$/, "") + `
` + $ + `

`;
    }
  };
  Vj.horizontalRule = {
    filter: "hr",
    replacement: function (A, K, q) {
      return `

` + q.hr + `

`;
    }
  };
  Vj.inlineLink = {
    filter: function (A, K) {
      return K.linkStyle === "inlined" && A.nodeName === "A" && A.getAttribute("href");
    },
    replacement: function (A, K) {
      var q = K.getAttribute("href");
      if (q) q = q.replace(/([()])/g, "\\$1");
      var Y = Zf1(K.getAttribute("title"));
      if (Y) Y = ' "' + Y.replace(/"/g, "\\\"") + '"';
      return "[" + A + "](" + q + Y + ")";
    }
  };
  Vj.referenceLink = {
    filter: function (A, K) {
      return K.linkStyle === "referenced" && A.nodeName === "A" && A.getAttribute("href");
    },
    replacement: function (A, K, q) {
      var Y = K.getAttribute("href"),
        z = Zf1(K.getAttribute("title"));
      if (z) z = ' "' + z + '"';
      var w, H;
      switch (q.linkReferenceStyle) {
        case "collapsed":
          w = "[" + A + "][]", H = "[" + A + "]: " + Y + z;
          break;
        case "shortcut":
          w = "[" + A + "]", H = "[" + A + "]: " + Y + z;
          break;
        default:
          var J = this.references.length + 1;
          w = "[" + A + "][" + J + "]", H = "[" + J + "]: " + Y + z;
      }
      return this.references.push(H), w;
    },
    references: [],
    append: function (A) {
      var K = "";
      if (this.references.length) K = `

` + this.references.join(`
`) + `

`, this.references = [];
      return K;
    }
  };
  Vj.emphasis = {
    filter: ["em", "i"],
    replacement: function (A, K, q) {
      if (!A.trim()) return "";
      return q.emDelimiter + A + q.emDelimiter;
    }
  };
  Vj.strong = {
    filter: ["strong", "b"],
    replacement: function (A, K, q) {
      if (!A.trim()) return "";
      return q.strongDelimiter + A + q.strongDelimiter;
    }
  };
  Vj.code = {
    filter: function (A) {
      var K = A.previousSibling || A.nextSibling,
        q = A.parentNode.nodeName === "PRE" && !K;
      return A.nodeName === "CODE" && !q;
    },
    replacement: function (A) {
      if (!A) return "";
      A = A.replace(/\r?\n|\r/g, " ");
      var K = /^`|^ .*?[^ ].* $|`$/.test(A) ? " " : "",
        q = "`",
        Y = A.match(/`+/gm) || [];
      while (Y.indexOf(q) !== -1) q = q + "`";
      return q + K + A + K + q;
    }
  };
  Vj.image = {
    filter: "img",
    replacement: function (A, K) {
      var q = Zf1(K.getAttribute("alt")),
        Y = K.getAttribute("src") || "",
        z = Zf1(K.getAttribute("title")),
        w = z ? ' "' + z + '"' : "";
      return Y ? "![" + q + "](" + Y + w + ")" : "";
    }
  };
  function Zf1(A) {
    return A ? A.replace(/(\n+\s*)+/g, `
`) : "";
  }
  function W2K(A) {
    this.options = A, this._keep = [], this._remove = [], this.blankRule = {
      replacement: A.blankReplacement
    }, this.keepReplacement = A.keepReplacement, this.defaultRule = {
      replacement: A.defaultReplacement
    }, this.array = [];
    for (var K in A.rules) this.array.push(A.rules[K]);
  }
  W2K.prototype = {
    add: function (A, K) {
      this.array.unshift(K);
    },
    keep: function (A) {
      this._keep.unshift({
        filter: A,
        replacement: this.keepReplacement
      });
    },
    remove: function (A) {
      this._remove.unshift({
        filter: A,
        replacement: function () {
          return "";
        }
      });
    },
    forNode: function (A) {
      if (A.isBlank) return this.blankRule;
      var K;
      if (K = Cb6(this.array, A, this.options)) return K;
      if (K = Cb6(this._keep, A, this.options)) return K;
      if (K = Cb6(this._remove, A, this.options)) return K;
      return this.defaultRule;
    },
    forEach: function (A) {
      for (var K = 0; K < this.array.length; K++) A(this.array[K], K);
    }
  };
  function Cb6(A, K, q) {
    for (var Y = 0; Y < A.length; Y++) {
      var z = A[Y];
      if (gv2(z, K, q)) return z;
    }
    return;
  }
  function gv2(A, K, q) {
    var Y = A.filter;
    if (typeof Y === "string") {
      if (Y === K.nodeName.toLowerCase()) return !0;
    } else if (Array.isArray(Y)) {
      if (Y.indexOf(K.nodeName.toLowerCase()) > -1) return !0;
    } else if (typeof Y === "function") {
      if (Y.call(A, K, q)) return !0;
    } else throw TypeError("`filter` needs to be a string, array, or function");
  }
  function Fv2(A) {
    var {
        element: K,
        isBlock: q,
        isVoid: Y
      } = A,
      z = A.isPre || function (_) {
        return _.nodeName === "PRE";
      };
    if (!K.firstChild || z(K)) return;
    var w = null,
      H = !1,
      J = null,
      O = O2K(J, K, z);
    while (O !== K) {
      if (O.nodeType === 3 || O.nodeType === 4) {
        var X = O.data.replace(/[ \r\n\t]+/g, " ");
        if ((!w || / $/.test(w.data)) && !H && X[0] === " ") X = X.substr(1);
        if (!X) {
          O = Lb6(O);
          continue;
        }
        O.data = X, w = O;
      } else if (O.nodeType === 1) {
        if (q(O) || O.nodeName === "BR") {
          if (w) w.data = w.data.replace(/ $/, "");
          w = null, H = !1;
        } else if (Y(O) || z(O)) w = null, H = !0;else if (w) H = !1;
      } else {
        O = Lb6(O);
        continue;
      }
      var $ = O2K(J, O, z);
      J = O, O = $;
    }
    if (w) {
      if (w.data = w.data.replace(/ $/, ""), !w.data) Lb6(w);
    }
  }
  function Lb6(A) {
    var K = A.nextSibling || A.parentNode;
    return A.parentNode.removeChild(A), K;
  }
  function O2K(A, K, q) {
    if (A && A.parentNode === K || q(K)) return K.nextSibling || K.parentNode;
    return K.firstChild || K.nextSibling || K.parentNode;
  }
  var D2K = typeof window < "u" ? window : {};
  function Qv2() {
    var A = D2K.DOMParser,
      K = !1;
    try {
      if (new A().parseFromString("", "text/html")) K = !0;
    } catch (q) {}
    return K;
  }
  function Uv2() {
    var A = function () {};
    {
      var K = __$.J2K();
      A.prototype.parseFromString = function (q) {
        return K.createDocument(q);
      };
    }
    return A;
  }
  var pv2 = Qv2() ? D2K.DOMParser : Uv2();
  function dv2(A, K) {
    var q;
    if (typeof A === "string") {
      var Y = cv2().parseFromString('<x-turndown id="turndown-root">' + A + "</x-turndown>", "text/html");
      q = Y.getElementById("turndown-root");
    } else q = A.cloneNode(!0);
    return Fv2({
      element: q,
      isBlock: Ib6,
      isVoid: _2K,
      isPre: K.preformattedCode ? lv2 : null
    }), q;
  }
  var Rb6;
  function cv2() {
    return Rb6 = Rb6 || new pv2(), Rb6;
  }
  function lv2(A) {
    return A.nodeName === "PRE" || A.nodeName === "CODE";
  }
  function iv2(A, K) {
    return A.isBlock = Ib6(A), A.isCode = A.nodeName === "CODE" || A.parentNode.isCode, A.isBlank = nv2(A), A.flankingWhitespace = rv2(A, K), A;
  }
  function nv2(A) {
    return !_2K(A) && !Bv2(A) && /^\s*$/i.test(A.textContent) && !uv2(A) && !mv2(A);
  }
  function rv2(A, K) {
    if (A.isBlock || K.preformattedCode && A.isCode) return {
      leading: "",
      trailing: ""
    };
    var q = ov2(A.textContent);
    if (q.leadingAscii && X2K("left", A, K)) q.leading = q.leadingNonAscii;
    if (q.trailingAscii && X2K("right", A, K)) q.trailing = q.trailingNonAscii;
    return {
      leading: q.leading,
      trailing: q.trailing
    };
  }
  function ov2(A) {
    var K = A.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);
    return {
      leading: K[1],
      leadingAscii: K[2],
      leadingNonAscii: K[3],
      trailing: K[4],
      trailingNonAscii: K[5],
      trailingAscii: K[6]
    };
  }
  function X2K(A, K, q) {
    var Y, z, w;
    if (A === "left") Y = K.previousSibling, z = / $/;else Y = K.nextSibling, z = /^ /;
    if (Y) {
      if (Y.nodeType === 3) w = z.test(Y.nodeValue);else if (q.preformattedCode && Y.nodeName === "CODE") w = !1;else if (Y.nodeType === 1 && !Ib6(Y)) w = z.test(Y.textContent);
    }
    return w;
  }
  var av2 = Array.prototype.reduce,
    sv2 = [[/\\/g, "\\\\"], [/\*/g, "\\*"], [/^-/g, "\\-"], [/^\+ /g, "\\+ "], [/^(=+)/g, "\\$1"], [/^(#{1,6}) /g, "\\$1 "], [/`/g, "\\`"], [/^~~~/g, "\\~~~"], [/\[/g, "\\["], [/\]/g, "\\]"], [/^>/g, "\\>"], [/_/g, "\\_"], [/^(\d+)\. /g, "$1\\. "]];
  function Wf1(A) {
    if (!(this instanceof Wf1)) return new Wf1(A);
    var K = {
      rules: Vj,
      headingStyle: "setext",
      hr: "* * *",
      bulletListMarker: "*",
      codeBlockStyle: "indented",
      fence: "```",
      emDelimiter: "_",
      strongDelimiter: "**",
      linkStyle: "inlined",
      linkReferenceStyle: "full",
      br: "  ",
      preformattedCode: !1,
      blankReplacement: function (q, Y) {
        return Y.isBlock ? `

` : "";
      },
      keepReplacement: function (q, Y) {
        return Y.isBlock ? `

` + Y.outerHTML + `

` : Y.outerHTML;
      },
      defaultReplacement: function (q, Y) {
        return Y.isBlock ? `

` + q + `

` : q;
      }
    };
    this.options = Sv2({}, K, A), this.rules = new W2K(this.options);
  }
  Wf1.prototype = {
    turndown: function (A) {
      if (!AE2(A)) throw TypeError(A + " is not a string, or an element/document/fragment node.");
      if (A === "") return "";
      var K = j2K.call(this, new dv2(A, this.options));
      return tv2.call(this, K);
    },
    use: function (A) {
      if (Array.isArray(A)) for (var K = 0; K < A.length; K++) this.use(A[K]);else if (typeof A === "function") A(this);else throw TypeError("plugin must be a Function or an Array of Functions");
      return this;
    },
    addRule: function (A, K) {
      return this.rules.add(A, K), this;
    },
    keep: function (A) {
      return this.rules.keep(A), this;
    },
    remove: function (A) {
      return this.rules.remove(A), this;
    },
    escape: function (A) {
      return sv2.reduce(function (K, q) {
        return K.replace(q[0], q[1]);
      }, A);
    }
  };
  function j2K(A) {
    var K = this;
    return av2.call(A.childNodes, function (q, Y) {
      Y = new iv2(Y, K.options);
      var z = "";
      if (Y.nodeType === 3) z = Y.isCode ? Y.nodeValue : K.escape(Y.nodeValue);else if (Y.nodeType === 1) z = ev2.call(K, Y);
      return M2K(q, z);
    }, "");
  }
  function tv2(A) {
    var K = this;
    return this.rules.forEach(function (q) {
      if (typeof q.append === "function") A = M2K(A, q.append(K.options));
    }), A.replace(/^[\t\r\n]+/, "").replace(/[\t\r\n\s]+$/, "");
  }
  function ev2(A) {
    var K = this.rules.forNode(A),
      q = j2K.call(this, A),
      Y = A.flankingWhitespace;
    if (Y.leading || Y.trailing) q = q.trim();
    return Y.leading + K.replacement(q, A, this.options) + Y.trailing;
  }
  function M2K(A, K) {
    var q = bv2(A),
      Y = hv2(K),
      z = Math.max(A.length - q.length, K.length - Y.length),
      w = `

`.substring(0, z);
    return q + w + Y;
  }
  function AE2(A) {
    return A != null && (typeof A === "string" || A.nodeType && (A.nodeType === 1 || A.nodeType === 9 || A.nodeType === 11));
  }
  P2K.exports = Wf1;
});

// Register to shared state
__$.V2K = V2K;
