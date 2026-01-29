// Module: ye7
// Dependencies: oFA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ye7 = v(zG2 => {
  var zQA = __$.oFA().NAMESPACE,
    gR6 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Te7 = new RegExp("[\\-\\.0-9" + gR6.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),
    ve7 = new RegExp("^" + gR6.source + Te7.source + "*(?::" + gR6.source + Te7.source + "*)?$"),
    KQA = 0,
    Et = 1,
    cjA = 2,
    qQA = 3,
    ljA = 4,
    ijA = 5,
    YQA = 6,
    yM1 = 7;
  function njA(A, K) {
    if (this.message = A, this.locator = K, Error.captureStackTrace) Error.captureStackTrace(this, njA);
  }
  njA.prototype = Error();
  njA.prototype.name = njA.name;
  function Ce7() {}
  Ce7.prototype = {
    parse: function (A, K, q) {
      var Y = this.domBuilder;
      Y.startDocument(), Le7(K, K = {}), s_2(A, K, q, Y, this.errorHandler), Y.endDocument();
    }
  };
  function s_2(A, K, q, Y, z) {
    function w(r) {
      if (r > 65535) {
        r -= 65536;
        var c = 55296 + (r >> 10),
          YA = 56320 + (r & 1023);
        return String.fromCharCode(c, YA);
      } else return String.fromCharCode(r);
    }
    function H(r) {
      var c = r.slice(1, -1);
      if (Object.hasOwnProperty.call(q, c)) return q[c];else if (c.charAt(0) === "#") return w(parseInt(c.substr(1).replace("x", "0x")));else return z.error("entity not found:" + r), r;
    }
    function J(r) {
      if (r > D) {
        var c = A.substring(D, r).replace(/&#?\w+;/g, H);
        G && O(D), Y.characters(c, 0, r - D), D = r;
      }
    }
    function O(r, c) {
      while (r >= $ && (c = _.exec(A))) X = c.index, $ = X + c[0].length, G.lineNumber++;
      G.columnNumber = r - X + 1;
    }
    var X = 0,
      $ = 0,
      _ = /.*(?:\r\n?|\n)|.*$/g,
      G = Y.locator,
      Z = [{
        currentNSMap: K
      }],
      W = {},
      D = 0;
    while (!0) {
      try {
        var j = A.indexOf("<", D);
        if (j < 0) {
          if (!A.substr(D).match(/^\s*$/)) {
            var M = Y.doc,
              P = M.createTextNode(A.substr(D));
            M.appendChild(P), Y.currentElement = P;
          }
          return;
        }
        if (j > D) J(j);
        switch (A.charAt(j + 1)) {
          case "/":
            var b = A.indexOf(">", j + 3),
              f = A.substring(j + 2, b).replace(/[ \t\n\r]+$/g, ""),
              N = Z.pop();
            if (b < 0) f = A.substring(j + 2).replace(/[\s<].*/, ""), z.error("end tag name: " + f + " is not complete:" + N.tagName), b = j + 1 + f.length;else if (f.match(/\s</)) f = f.replace(/[\s<].*/, ""), z.error("end tag name: " + f + " maybe not complete"), b = j + 1 + f.length;
            var T = N.localNSMap,
              C = N.tagName == f,
              R = C || N.tagName && N.tagName.toLowerCase() == f.toLowerCase();
            if (R) {
              if (Y.endElement(N.uri, N.localName, f), T) {
                for (var x in T) if (Object.prototype.hasOwnProperty.call(T, x)) Y.endPrefixMapping(x);
              }
              if (!C) z.fatalError("end tag name: " + f + " is not match the current start tagName:" + N.tagName);
            } else Z.push(N);
            b++;
            break;
          case "?":
            G && O(j), b = qG2(A, j, Y);
            break;
          case "!":
            G && O(j), b = KG2(A, j, Y, z);
            break;
          default:
            G && O(j);
            var y = new Re7(),
              B = Z[Z.length - 1].currentNSMap,
              b = t_2(A, j, y, B, H, z),
              F = y.length;
            if (!y.closed && AG2(A, b, y.tagName, W)) {
              if (y.closed = !0, !q.nbsp) z.warning("unclosed xml attribute");
            }
            if (G && F) {
              var Q = Ee7(G, {});
              for (var u = 0; u < F; u++) {
                var d = y[u];
                O(d.offset), d.locator = Ee7(G, {});
              }
              if (Y.locator = Q, ke7(y, Y, B)) Z.push(y);
              Y.locator = G;
            } else if (ke7(y, Y, B)) Z.push(y);
            if (zQA.isHTML(y.uri) && !y.closed) b = e_2(A, b, y.tagName, H, Y);else b++;
        }
      } catch (r) {
        if (r instanceof njA) throw r;
        z.error("element parse error: " + r), b = -1;
      }
      if (b > D) D = b;else J(Math.max(j, D) + 1);
    }
  }
  function Ee7(A, K) {
    return K.lineNumber = A.lineNumber, K.columnNumber = A.columnNumber, K;
  }
  function t_2(A, K, q, Y, z, w) {
    function H(Z, W, D) {
      if (q.attributeNames.hasOwnProperty(Z)) w.fatalError("Attribute " + Z + " redefined");
      q.addValue(Z, W.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, z), D);
    }
    var J,
      O,
      X = ++K,
      $ = KQA;
    while (!0) {
      var _ = A.charAt(X);
      switch (_) {
        case "=":
          if ($ === Et) J = A.slice(K, X), $ = qQA;else if ($ === cjA) $ = qQA;else throw Error("attribute equal must after attrName");
          break;
        case "'":
        case '"':
          if ($ === qQA || $ === Et) {
            if ($ === Et) w.warning('attribute value must after "="'), J = A.slice(K, X);
            if (K = X + 1, X = A.indexOf(_, K), X > 0) O = A.slice(K, X), H(J, O, K - 1), $ = ijA;else throw Error("attribute value no end '" + _ + "' match");
          } else if ($ == ljA) O = A.slice(K, X), H(J, O, K), w.warning('attribute "' + J + '" missed start quot(' + _ + ")!!"), K = X + 1, $ = ijA;else throw Error('attribute value must after "="');
          break;
        case "/":
          switch ($) {
            case KQA:
              q.setTagName(A.slice(K, X));
            case ijA:
            case YQA:
            case yM1:
              $ = yM1, q.closed = !0;
            case ljA:
            case Et:
              break;
            case cjA:
              q.closed = !0;
              break;
            default:
              throw Error("attribute invalid close char('/')");
          }
          break;
        case "":
          if (w.error("unexpected end of input"), $ == KQA) q.setTagName(A.slice(K, X));
          return X;
        case ">":
          switch ($) {
            case KQA:
              q.setTagName(A.slice(K, X));
            case ijA:
            case YQA:
            case yM1:
              break;
            case ljA:
            case Et:
              if (O = A.slice(K, X), O.slice(-1) === "/") q.closed = !0, O = O.slice(0, -1);
            case cjA:
              if ($ === cjA) O = J;
              if ($ == ljA) w.warning('attribute "' + O + '" missed quot(")!'), H(J, O, K);else {
                if (!zQA.isHTML(Y[""]) || !O.match(/^(?:disabled|checked|selected)$/i)) w.warning('attribute "' + O + '" missed value!! "' + O + '" instead!!');
                H(O, O, K);
              }
              break;
            case qQA:
              throw Error("attribute value missed!!");
          }
          return X;
        case "":
          _ = " ";
        default:
          if (_ <= " ") switch ($) {
            case KQA:
              q.setTagName(A.slice(K, X)), $ = YQA;
              break;
            case Et:
              J = A.slice(K, X), $ = cjA;
              break;
            case ljA:
              var O = A.slice(K, X);
              w.warning('attribute "' + O + '" missed quot(")!!'), H(J, O, K);
            case ijA:
              $ = YQA;
              break;
          } else switch ($) {
            case cjA:
              var G = q.tagName;
              if (!zQA.isHTML(Y[""]) || !J.match(/^(?:disabled|checked|selected)$/i)) w.warning('attribute "' + J + '" missed value!! "' + J + '" instead2!!');
              H(J, J, K), K = X, $ = Et;
              break;
            case ijA:
              w.warning('attribute space is required"' + J + '"!!');
            case YQA:
              $ = Et, K = X;
              break;
            case qQA:
              $ = ljA, K = X;
              break;
            case yM1:
              throw Error("elements closed character '/' and '>' must be connected to");
          }
      }
      X++;
    }
  }
  function ke7(A, K, q) {
    var Y = A.tagName,
      z = null,
      _ = A.length;
    while (_--) {
      var w = A[_],
        H = w.qName,
        J = w.value,
        G = H.indexOf(":");
      if (G > 0) var O = w.prefix = H.slice(0, G),
        X = H.slice(G + 1),
        $ = O === "xmlns" && X;else X = H, O = null, $ = H === "xmlns" && "";
      if (w.localName = X, $ !== !1) {
        if (z == null) z = {}, Le7(q, q = {});
        q[$] = z[$] = J, w.uri = zQA.XMLNS, K.startPrefixMapping($, J);
      }
    }
    var _ = A.length;
    while (_--) {
      w = A[_];
      var O = w.prefix;
      if (O) {
        if (O === "xml") w.uri = zQA.XML;
        if (O !== "xmlns") w.uri = q[O || ""];
      }
    }
    var G = Y.indexOf(":");
    if (G > 0) O = A.prefix = Y.slice(0, G), X = A.localName = Y.slice(G + 1);else O = null, X = A.localName = Y;
    var Z = A.uri = q[O || ""];
    if (K.startElement(Z, X, Y, A), A.closed) {
      if (K.endElement(Z, X, Y), z) {
        for (O in z) if (Object.prototype.hasOwnProperty.call(z, O)) K.endPrefixMapping(O);
      }
    } else return A.currentNSMap = q, A.localNSMap = z, !0;
  }
  function e_2(A, K, q, Y, z) {
    if (/^(?:script|textarea)$/i.test(q)) {
      var w = A.indexOf("</" + q + ">", K),
        H = A.substring(K + 1, w);
      if (/[&<]/.test(H)) {
        if (/^script$/i.test(q)) return z.characters(H, 0, H.length), w;
        return H = H.replace(/&#?\w+;/g, Y), z.characters(H, 0, H.length), w;
      }
    }
    return K + 1;
  }
  function AG2(A, K, q, Y) {
    var z = Y[q];
    if (z == null) {
      if (z = A.lastIndexOf("</" + q + ">"), z < K) z = A.lastIndexOf("</" + q);
      Y[q] = z;
    }
    return z < K;
  }
  function Le7(A, K) {
    for (var q in A) if (Object.prototype.hasOwnProperty.call(A, q)) K[q] = A[q];
  }
  function KG2(A, K, q, Y) {
    var z = A.charAt(K + 2);
    switch (z) {
      case "-":
        if (A.charAt(K + 3) === "-") {
          var w = A.indexOf("-->", K + 4);
          if (w > K) return q.comment(A, K + 4, w - K - 4), w + 3;else return Y.error("Unclosed comment"), -1;
        } else return -1;
      default:
        if (A.substr(K + 3, 6) == "CDATA[") {
          var w = A.indexOf("]]>", K + 9);
          return q.startCDATA(), q.characters(A, K + 9, w - K - 9), q.endCDATA(), w + 3;
        }
        var H = YG2(A, K),
          J = H.length;
        if (J > 1 && /!doctype/i.test(H[0][0])) {
          var O = H[1][0],
            X = !1,
            $ = !1;
          if (J > 3) {
            if (/^public$/i.test(H[2][0])) X = H[3][0], $ = J > 4 && H[4][0];else if (/^system$/i.test(H[2][0])) $ = H[3][0];
          }
          var _ = H[J - 1];
          return q.startDTD(O, X, $), q.endDTD(), _.index + _[0].length;
        }
    }
    return -1;
  }
  function qG2(A, K, q) {
    var Y = A.indexOf("?>", K);
    if (Y) {
      var z = A.substring(K, Y).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
      if (z) {
        var w = z[0].length;
        return q.processingInstruction(z[1], z[2]), Y + 2;
      } else return -1;
    }
    return -1;
  }
  function Re7() {
    this.attributeNames = {};
  }
  Re7.prototype = {
    setTagName: function (A) {
      if (!ve7.test(A)) throw Error("invalid tagName:" + A);
      this.tagName = A;
    },
    addValue: function (A, K, q) {
      if (!ve7.test(A)) throw Error("invalid attribute:" + A);
      this.attributeNames[A] = this.length, this[this.length++] = {
        qName: A,
        value: K,
        offset: q
      };
    },
    length: 0,
    getLocalName: function (A) {
      return this[A].localName;
    },
    getLocator: function (A) {
      return this[A].locator;
    },
    getQName: function (A) {
      return this[A].qName;
    },
    getURI: function (A) {
      return this[A].uri;
    },
    getValue: function (A) {
      return this[A].value;
    }
  };
  function YG2(A, K) {
    var q,
      Y = [],
      z = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    z.lastIndex = K, z.exec(A);
    while (q = z.exec(A)) if (Y.push(q), q[1]) return Y;
  }
  zG2.XMLReader = Ce7;
  zG2.ParseError = njA;
});

// Register to shared state
__$.ye7 = ye7;
