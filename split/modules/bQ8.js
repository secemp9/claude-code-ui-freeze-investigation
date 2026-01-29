// Module: bQ8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bQ8 = v((Ntz, hQ8) => {
  (() => {
    var A = {
        d: (DA, EA) => {
          for (var rA in EA) A.o(EA, rA) && !A.o(DA, rA) && Object.defineProperty(DA, rA, {
            enumerable: !0,
            get: EA[rA]
          });
        },
        o: (DA, EA) => Object.prototype.hasOwnProperty.call(DA, EA),
        r: DA => {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(DA, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(DA, "__esModule", {
            value: !0
          });
        }
      },
      K = {};
    A.r(K), A.d(K, {
      XMLBuilder: () => $1,
      XMLParser: () => iA,
      XMLValidator: () => w6
    });
    let q = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
      Y = new RegExp("^[" + q + "][" + q + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
    function z(DA, EA) {
      let rA = [],
        J1 = EA.exec(DA);
      for (; J1;) {
        let aA = [];
        aA.startIndex = EA.lastIndex - J1[0].length;
        let z1 = J1.length;
        for (let f1 = 0; f1 < z1; f1++) aA.push(J1[f1]);
        rA.push(aA), J1 = EA.exec(DA);
      }
      return rA;
    }
    let w = function (DA) {
        return Y.exec(DA) != null;
      },
      H = {
        allowBooleanAttributes: !1,
        unpairedTags: []
      };
    function J(DA, EA) {
      EA = Object.assign({}, H, EA);
      let rA = [],
        J1 = !1,
        aA = !1;
      DA[0] === "\uFEFF" && (DA = DA.substr(1));
      for (let z1 = 0; z1 < DA.length; z1++) if (DA[z1] === "<" && DA[z1 + 1] === "?") {
        if (z1 += 2, z1 = X(DA, z1), z1.err) return z1;
      } else {
        if (DA[z1] !== "<") {
          if (O(DA[z1])) continue;
          return M("InvalidChar", "char '" + DA[z1] + "' is not expected.", f(DA, z1));
        }
        {
          let f1 = z1;
          if (z1++, DA[z1] === "!") {
            z1 = $(DA, z1);
            continue;
          }
          {
            let T1 = !1;
            DA[z1] === "/" && (T1 = !0, z1++);
            let K6 = "";
            for (; z1 < DA.length && DA[z1] !== ">" && DA[z1] !== " " && DA[z1] !== "\t" && DA[z1] !== `
` && DA[z1] !== "\r"; z1++) K6 += DA[z1];
            if (K6 = K6.trim(), K6[K6.length - 1] === "/" && (K6 = K6.substring(0, K6.length - 1), z1--), !w(K6)) {
              let D8;
              return D8 = K6.trim().length === 0 ? "Invalid space after '<'." : "Tag '" + K6 + "' is an invalid name.", M("InvalidTag", D8, f(DA, z1));
            }
            let U6 = Z(DA, z1);
            if (U6 === !1) return M("InvalidAttr", "Attributes for '" + K6 + "' have open quote.", f(DA, z1));
            let e8 = U6.value;
            if (z1 = U6.index, e8[e8.length - 1] === "/") {
              let D8 = z1 - e8.length;
              e8 = e8.substring(0, e8.length - 1);
              let Y7 = D(e8, EA);
              if (Y7 !== !0) return M(Y7.err.code, Y7.err.msg, f(DA, D8 + Y7.err.line));
              J1 = !0;
            } else if (T1) {
              if (!U6.tagClosed) return M("InvalidTag", "Closing tag '" + K6 + "' doesn't have proper closing.", f(DA, z1));
              if (e8.trim().length > 0) return M("InvalidTag", "Closing tag '" + K6 + "' can't have attributes or invalid starting.", f(DA, f1));
              if (rA.length === 0) return M("InvalidTag", "Closing tag '" + K6 + "' has not been opened.", f(DA, f1));
              {
                let D8 = rA.pop();
                if (K6 !== D8.tagName) {
                  let Y7 = f(DA, D8.tagStartPos);
                  return M("InvalidTag", "Expected closing tag '" + D8.tagName + "' (opened in line " + Y7.line + ", col " + Y7.col + ") instead of closing tag '" + K6 + "'.", f(DA, f1));
                }
                rA.length == 0 && (aA = !0);
              }
            } else {
              let D8 = D(e8, EA);
              if (D8 !== !0) return M(D8.err.code, D8.err.msg, f(DA, z1 - e8.length + D8.err.line));
              if (aA === !0) return M("InvalidXml", "Multiple possible root nodes found.", f(DA, z1));
              EA.unpairedTags.indexOf(K6) !== -1 || rA.push({
                tagName: K6,
                tagStartPos: f1
              }), J1 = !0;
            }
            for (z1++; z1 < DA.length; z1++) if (DA[z1] === "<") {
              if (DA[z1 + 1] === "!") {
                z1++, z1 = $(DA, z1);
                continue;
              }
              if (DA[z1 + 1] !== "?") break;
              if (z1 = X(DA, ++z1), z1.err) return z1;
            } else if (DA[z1] === "&") {
              let D8 = j(DA, z1);
              if (D8 == -1) return M("InvalidChar", "char '&' is not expected.", f(DA, z1));
              z1 = D8;
            } else if (aA === !0 && !O(DA[z1])) return M("InvalidXml", "Extra text at the end", f(DA, z1));
            DA[z1] === "<" && z1--;
          }
        }
      }
      return J1 ? rA.length == 1 ? M("InvalidTag", "Unclosed tag '" + rA[0].tagName + "'.", f(DA, rA[0].tagStartPos)) : !(rA.length > 0) || M("InvalidXml", "Invalid '" + JSON.stringify(rA.map(z1 => z1.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", {
        line: 1,
        col: 1
      }) : M("InvalidXml", "Start tag expected.", 1);
    }
    function O(DA) {
      return DA === " " || DA === "\t" || DA === `
` || DA === "\r";
    }
    function X(DA, EA) {
      let rA = EA;
      for (; EA < DA.length; EA++) if (DA[EA] != "?" && DA[EA] != " ") ;else {
        let J1 = DA.substr(rA, EA - rA);
        if (EA > 5 && J1 === "xml") return M("InvalidXml", "XML declaration allowed only at the start of the document.", f(DA, EA));
        if (DA[EA] == "?" && DA[EA + 1] == ">") {
          EA++;
          break;
        }
      }
      return EA;
    }
    function $(DA, EA) {
      if (DA.length > EA + 5 && DA[EA + 1] === "-" && DA[EA + 2] === "-") {
        for (EA += 3; EA < DA.length; EA++) if (DA[EA] === "-" && DA[EA + 1] === "-" && DA[EA + 2] === ">") {
          EA += 2;
          break;
        }
      } else if (DA.length > EA + 8 && DA[EA + 1] === "D" && DA[EA + 2] === "O" && DA[EA + 3] === "C" && DA[EA + 4] === "T" && DA[EA + 5] === "Y" && DA[EA + 6] === "P" && DA[EA + 7] === "E") {
        let rA = 1;
        for (EA += 8; EA < DA.length; EA++) if (DA[EA] === "<") rA++;else if (DA[EA] === ">" && (rA--, rA === 0)) break;
      } else if (DA.length > EA + 9 && DA[EA + 1] === "[" && DA[EA + 2] === "C" && DA[EA + 3] === "D" && DA[EA + 4] === "A" && DA[EA + 5] === "T" && DA[EA + 6] === "A" && DA[EA + 7] === "[") {
        for (EA += 8; EA < DA.length; EA++) if (DA[EA] === "]" && DA[EA + 1] === "]" && DA[EA + 2] === ">") {
          EA += 2;
          break;
        }
      }
      return EA;
    }
    let _ = '"',
      G = "'";
    function Z(DA, EA) {
      let rA = "",
        J1 = "",
        aA = !1;
      for (; EA < DA.length; EA++) {
        if (DA[EA] === _ || DA[EA] === G) J1 === "" ? J1 = DA[EA] : J1 !== DA[EA] || (J1 = "");else if (DA[EA] === ">" && J1 === "") {
          aA = !0;
          break;
        }
        rA += DA[EA];
      }
      return J1 === "" && {
        value: rA,
        index: EA,
        tagClosed: aA
      };
    }
    let W = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
    function D(DA, EA) {
      let rA = z(DA, W),
        J1 = {};
      for (let aA = 0; aA < rA.length; aA++) {
        if (rA[aA][1].length === 0) return M("InvalidAttr", "Attribute '" + rA[aA][2] + "' has no space in starting.", N(rA[aA]));
        if (rA[aA][3] !== void 0 && rA[aA][4] === void 0) return M("InvalidAttr", "Attribute '" + rA[aA][2] + "' is without value.", N(rA[aA]));
        if (rA[aA][3] === void 0 && !EA.allowBooleanAttributes) return M("InvalidAttr", "boolean attribute '" + rA[aA][2] + "' is not allowed.", N(rA[aA]));
        let z1 = rA[aA][2];
        if (!P(z1)) return M("InvalidAttr", "Attribute '" + z1 + "' is an invalid name.", N(rA[aA]));
        if (J1.hasOwnProperty(z1)) return M("InvalidAttr", "Attribute '" + z1 + "' is repeated.", N(rA[aA]));
        J1[z1] = 1;
      }
      return !0;
    }
    function j(DA, EA) {
      if (DA[++EA] === ";") return -1;
      if (DA[EA] === "#") return function (J1, aA) {
        let z1 = /\d/;
        for (J1[aA] === "x" && (aA++, z1 = /[\da-fA-F]/); aA < J1.length; aA++) {
          if (J1[aA] === ";") return aA;
          if (!J1[aA].match(z1)) break;
        }
        return -1;
      }(DA, ++EA);
      let rA = 0;
      for (; EA < DA.length; EA++, rA++) if (!(DA[EA].match(/\w/) && rA < 20)) {
        if (DA[EA] === ";") break;
        return -1;
      }
      return EA;
    }
    function M(DA, EA, rA) {
      return {
        err: {
          code: DA,
          msg: EA,
          line: rA.line || rA,
          col: rA.col
        }
      };
    }
    function P(DA) {
      return w(DA);
    }
    function f(DA, EA) {
      let rA = DA.substring(0, EA).split(/\r?\n/);
      return {
        line: rA.length,
        col: rA[rA.length - 1].length + 1
      };
    }
    function N(DA) {
      return DA.startIndex + DA[1].length;
    }
    let T = {
        preserveOrder: !1,
        attributeNamePrefix: "@_",
        attributesGroupName: !1,
        textNodeName: "#text",
        ignoreAttributes: !0,
        removeNSPrefix: !1,
        allowBooleanAttributes: !1,
        parseTagValue: !0,
        parseAttributeValue: !1,
        trimValues: !0,
        cdataPropName: !1,
        numberParseOptions: {
          hex: !0,
          leadingZeros: !0,
          eNotation: !0
        },
        tagValueProcessor: function (DA, EA) {
          return EA;
        },
        attributeValueProcessor: function (DA, EA) {
          return EA;
        },
        stopNodes: [],
        alwaysCreateTextNode: !1,
        isArray: () => !1,
        commentPropName: !1,
        unpairedTags: [],
        processEntities: !0,
        htmlEntities: !1,
        ignoreDeclaration: !1,
        ignorePiTags: !1,
        transformTagName: !1,
        transformAttributeName: !1,
        updateTag: function (DA, EA, rA) {
          return DA;
        },
        captureMetaData: !1
      },
      C;
    C = typeof Symbol != "function" ? "@@xmlMetadata" : Symbol("XML Node Metadata");
    class R {
      constructor(DA) {
        this.tagname = DA, this.child = [], this[":@"] = {};
      }
      add(DA, EA) {
        DA === "__proto__" && (DA = "#__proto__"), this.child.push({
          [DA]: EA
        });
      }
      addChild(DA, EA) {
        DA.tagname === "__proto__" && (DA.tagname = "#__proto__"), DA[":@"] && Object.keys(DA[":@"]).length > 0 ? this.child.push({
          [DA.tagname]: DA.child,
          ":@": DA[":@"]
        }) : this.child.push({
          [DA.tagname]: DA.child
        }), EA !== void 0 && (this.child[this.child.length - 1][C] = {
          startIndex: EA
        });
      }
      static getMetaDataSymbol() {
        return C;
      }
    }
    function x(DA, EA) {
      let rA = {};
      if (DA[EA + 3] !== "O" || DA[EA + 4] !== "C" || DA[EA + 5] !== "T" || DA[EA + 6] !== "Y" || DA[EA + 7] !== "P" || DA[EA + 8] !== "E") throw Error("Invalid Tag instead of DOCTYPE");
      {
        EA += 9;
        let J1 = 1,
          aA = !1,
          z1 = !1,
          f1 = "";
        for (; EA < DA.length; EA++) if (DA[EA] !== "<" || z1) {
          if (DA[EA] === ">") {
            if (z1 ? DA[EA - 1] === "-" && DA[EA - 2] === "-" && (z1 = !1, J1--) : J1--, J1 === 0) break;
          } else DA[EA] === "[" ? aA = !0 : f1 += DA[EA];
        } else {
          if (aA && u(DA, "!ENTITY", EA)) {
            let T1, K6;
            EA += 7, [T1, K6, EA] = B(DA, EA + 1), K6.indexOf("&") === -1 && (rA[T1] = {
              regx: RegExp(`&${T1};`, "g"),
              val: K6
            });
          } else if (aA && u(DA, "!ELEMENT", EA)) {
            EA += 8;
            let {
              index: T1
            } = Q(DA, EA + 1);
            EA = T1;
          } else if (aA && u(DA, "!ATTLIST", EA)) EA += 8;else if (aA && u(DA, "!NOTATION", EA)) {
            EA += 9;
            let {
              index: T1
            } = b(DA, EA + 1);
            EA = T1;
          } else {
            if (!u(DA, "!--", EA)) throw Error("Invalid DOCTYPE");
            z1 = !0;
          }
          J1++, f1 = "";
        }
        if (J1 !== 0) throw Error("Unclosed DOCTYPE");
      }
      return {
        entities: rA,
        i: EA
      };
    }
    let y = (DA, EA) => {
      for (; EA < DA.length && /\s/.test(DA[EA]);) EA++;
      return EA;
    };
    function B(DA, EA) {
      EA = y(DA, EA);
      let rA = "";
      for (; EA < DA.length && !/\s/.test(DA[EA]) && DA[EA] !== '"' && DA[EA] !== "'";) rA += DA[EA], EA++;
      if (d(rA), EA = y(DA, EA), DA.substring(EA, EA + 6).toUpperCase() === "SYSTEM") throw Error("External entities are not supported");
      if (DA[EA] === "%") throw Error("Parameter entities are not supported");
      let J1 = "";
      return [EA, J1] = F(DA, EA, "entity"), [rA, J1, --EA];
    }
    function b(DA, EA) {
      EA = y(DA, EA);
      let rA = "";
      for (; EA < DA.length && !/\s/.test(DA[EA]);) rA += DA[EA], EA++;
      d(rA), EA = y(DA, EA);
      let J1 = DA.substring(EA, EA + 6).toUpperCase();
      if (J1 !== "SYSTEM" && J1 !== "PUBLIC") throw Error(`Expected SYSTEM or PUBLIC, found "${J1}"`);
      EA += J1.length, EA = y(DA, EA);
      let aA = null,
        z1 = null;
      if (J1 === "PUBLIC") [EA, aA] = F(DA, EA, "publicIdentifier"), DA[EA = y(DA, EA)] !== '"' && DA[EA] !== "'" || ([EA, z1] = F(DA, EA, "systemIdentifier"));else if (J1 === "SYSTEM" && ([EA, z1] = F(DA, EA, "systemIdentifier"), !z1)) throw Error("Missing mandatory system identifier for SYSTEM notation");
      return {
        notationName: rA,
        publicIdentifier: aA,
        systemIdentifier: z1,
        index: --EA
      };
    }
    function F(DA, EA, rA) {
      let J1 = "",
        aA = DA[EA];
      if (aA !== '"' && aA !== "'") throw Error(`Expected quoted string, found "${aA}"`);
      for (EA++; EA < DA.length && DA[EA] !== aA;) J1 += DA[EA], EA++;
      if (DA[EA] !== aA) throw Error(`Unterminated ${rA} value`);
      return [++EA, J1];
    }
    function Q(DA, EA) {
      EA = y(DA, EA);
      let rA = "";
      for (; EA < DA.length && !/\s/.test(DA[EA]);) rA += DA[EA], EA++;
      if (!d(rA)) throw Error(`Invalid element name: "${rA}"`);
      let J1 = "";
      if (DA[EA = y(DA, EA)] === "E" && u(DA, "MPTY", EA)) EA += 4;else if (DA[EA] === "A" && u(DA, "NY", EA)) EA += 2;else {
        if (DA[EA] !== "(") throw Error(`Invalid Element Expression, found "${DA[EA]}"`);
        for (EA++; EA < DA.length && DA[EA] !== ")";) J1 += DA[EA], EA++;
        if (DA[EA] !== ")") throw Error("Unterminated content model");
      }
      return {
        elementName: rA,
        contentModel: J1.trim(),
        index: EA
      };
    }
    function u(DA, EA, rA) {
      for (let J1 = 0; J1 < EA.length; J1++) if (EA[J1] !== DA[rA + J1 + 1]) return !1;
      return !0;
    }
    function d(DA) {
      if (w(DA)) return DA;
      throw Error(`Invalid entity name ${DA}`);
    }
    let r = /^[-+]?0x[a-fA-F0-9]+$/,
      c = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/,
      YA = {
        hex: !0,
        leadingZeros: !0,
        decimalPoint: ".",
        eNotation: !0
      },
      e = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
    function qA(DA) {
      return typeof DA == "function" ? DA : Array.isArray(DA) ? EA => {
        for (let rA of DA) {
          if (typeof rA == "string" && EA === rA) return !0;
          if (rA instanceof RegExp && rA.test(EA)) return !0;
        }
      } : () => !1;
    }
    class HA {
      constructor(DA) {
        this.options = DA, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
          apos: {
            regex: /&(apos|#39|#x27);/g,
            val: "'"
          },
          gt: {
            regex: /&(gt|#62|#x3E);/g,
            val: ">"
          },
          lt: {
            regex: /&(lt|#60|#x3C);/g,
            val: "<"
          },
          quot: {
            regex: /&(quot|#34|#x22);/g,
            val: '"'
          }
        }, this.ampEntity = {
          regex: /&(amp|#38|#x26);/g,
          val: "&"
        }, this.htmlEntities = {
          space: {
            regex: /&(nbsp|#160);/g,
            val: " "
          },
          cent: {
            regex: /&(cent|#162);/g,
            val: "¢"
          },
          pound: {
            regex: /&(pound|#163);/g,
            val: "£"
          },
          yen: {
            regex: /&(yen|#165);/g,
            val: "¥"
          },
          euro: {
            regex: /&(euro|#8364);/g,
            val: "€"
          },
          copyright: {
            regex: /&(copy|#169);/g,
            val: "©"
          },
          reg: {
            regex: /&(reg|#174);/g,
            val: "®"
          },
          inr: {
            regex: /&(inr|#8377);/g,
            val: "₹"
          },
          num_dec: {
            regex: /&#([0-9]{1,7});/g,
            val: (EA, rA) => String.fromCodePoint(Number.parseInt(rA, 10))
          },
          num_hex: {
            regex: /&#x([0-9a-fA-F]{1,6});/g,
            val: (EA, rA) => String.fromCodePoint(Number.parseInt(rA, 16))
          }
        }, this.addExternalEntities = _A, this.parseXml = hA, this.parseTextData = a, this.resolveNameSpace = JA, this.buildAttributesMap = MA, this.isItStopNode = GA, this.replaceEntitiesValue = AA, this.readStopNodeData = XA, this.saveTextToParentTag = wA, this.addChild = yA, this.ignoreAttributesFn = qA(this.options.ignoreAttributes);
      }
    }
    function _A(DA) {
      let EA = Object.keys(DA);
      for (let rA = 0; rA < EA.length; rA++) {
        let J1 = EA[rA];
        this.lastEntities[J1] = {
          regex: new RegExp("&" + J1 + ";", "g"),
          val: DA[J1]
        };
      }
    }
    function a(DA, EA, rA, J1, aA, z1, f1) {
      if (DA !== void 0 && (this.options.trimValues && !J1 && (DA = DA.trim()), DA.length > 0)) {
        f1 || (DA = this.replaceEntitiesValue(DA));
        let T1 = this.options.tagValueProcessor(EA, DA, rA, aA, z1);
        return T1 == null ? DA : typeof T1 != typeof DA || T1 !== DA ? T1 : this.options.trimValues || DA.trim() === DA ? VA(DA, this.options.parseTagValue, this.options.numberParseOptions) : DA;
      }
    }
    function JA(DA) {
      if (this.options.removeNSPrefix) {
        let EA = DA.split(":"),
          rA = DA.charAt(0) === "/" ? "/" : "";
        if (EA[0] === "xmlns") return "";
        EA.length === 2 && (DA = rA + EA[1]);
      }
      return DA;
    }
    let jA = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
    function MA(DA, EA, rA) {
      if (this.options.ignoreAttributes !== !0 && typeof DA == "string") {
        let J1 = z(DA, jA),
          aA = J1.length,
          z1 = {};
        for (let f1 = 0; f1 < aA; f1++) {
          let T1 = this.resolveNameSpace(J1[f1][1]);
          if (this.ignoreAttributesFn(T1, EA)) continue;
          let K6 = J1[f1][4],
            U6 = this.options.attributeNamePrefix + T1;
          if (T1.length) if (this.options.transformAttributeName && (U6 = this.options.transformAttributeName(U6)), U6 === "__proto__" && (U6 = "#__proto__"), K6 !== void 0) {
            this.options.trimValues && (K6 = K6.trim()), K6 = this.replaceEntitiesValue(K6);
            let e8 = this.options.attributeValueProcessor(T1, K6, EA);
            z1[U6] = e8 == null ? K6 : typeof e8 != typeof K6 || e8 !== K6 ? e8 : VA(K6, this.options.parseAttributeValue, this.options.numberParseOptions);
          } else this.options.allowBooleanAttributes && (z1[U6] = !0);
        }
        if (!Object.keys(z1).length) return;
        if (this.options.attributesGroupName) {
          let f1 = {};
          return f1[this.options.attributesGroupName] = z1, f1;
        }
        return z1;
      }
    }
    let hA = function (DA) {
      DA = DA.replace(/\r\n?/g, `
`);
      let EA = new R("!xml"),
        rA = EA,
        J1 = "",
        aA = "";
      for (let z1 = 0; z1 < DA.length; z1++) if (DA[z1] === "<") {
        if (DA[z1 + 1] === "/") {
          let f1 = OA(DA, ">", z1, "Closing Tag is not closed."),
            T1 = DA.substring(z1 + 2, f1).trim();
          if (this.options.removeNSPrefix) {
            let e8 = T1.indexOf(":");
            e8 !== -1 && (T1 = T1.substr(e8 + 1));
          }
          this.options.transformTagName && (T1 = this.options.transformTagName(T1)), rA && (J1 = this.saveTextToParentTag(J1, rA, aA));
          let K6 = aA.substring(aA.lastIndexOf(".") + 1);
          if (T1 && this.options.unpairedTags.indexOf(T1) !== -1) throw Error(`Unpaired tag can not be used as closing tag: </${T1}>`);
          let U6 = 0;
          K6 && this.options.unpairedTags.indexOf(K6) !== -1 ? (U6 = aA.lastIndexOf(".", aA.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : U6 = aA.lastIndexOf("."), aA = aA.substring(0, U6), rA = this.tagsNodeStack.pop(), J1 = "", z1 = f1;
        } else if (DA[z1 + 1] === "?") {
          let f1 = t(DA, z1, !1, "?>");
          if (!f1) throw Error("Pi Tag is not closed.");
          if (J1 = this.saveTextToParentTag(J1, rA, aA), this.options.ignoreDeclaration && f1.tagName === "?xml" || this.options.ignorePiTags) ;else {
            let T1 = new R(f1.tagName);
            T1.add(this.options.textNodeName, ""), f1.tagName !== f1.tagExp && f1.attrExpPresent && (T1[":@"] = this.buildAttributesMap(f1.tagExp, aA, f1.tagName)), this.addChild(rA, T1, aA, z1);
          }
          z1 = f1.closeIndex + 1;
        } else if (DA.substr(z1 + 1, 3) === "!--") {
          let f1 = OA(DA, "-->", z1 + 4, "Comment is not closed.");
          if (this.options.commentPropName) {
            let T1 = DA.substring(z1 + 4, f1 - 2);
            J1 = this.saveTextToParentTag(J1, rA, aA), rA.add(this.options.commentPropName, [{
              [this.options.textNodeName]: T1
            }]);
          }
          z1 = f1;
        } else if (DA.substr(z1 + 1, 2) === "!D") {
          let f1 = x(DA, z1);
          this.docTypeEntities = f1.entities, z1 = f1.i;
        } else if (DA.substr(z1 + 1, 2) === "![") {
          let f1 = OA(DA, "]]>", z1, "CDATA is not closed.") - 2,
            T1 = DA.substring(z1 + 9, f1);
          J1 = this.saveTextToParentTag(J1, rA, aA);
          let K6 = this.parseTextData(T1, rA.tagname, aA, !0, !1, !0, !0);
          K6 == null && (K6 = ""), this.options.cdataPropName ? rA.add(this.options.cdataPropName, [{
            [this.options.textNodeName]: T1
          }]) : rA.add(this.options.textNodeName, K6), z1 = f1 + 2;
        } else {
          let f1 = t(DA, z1, this.options.removeNSPrefix),
            T1 = f1.tagName,
            K6 = f1.rawTagName,
            U6 = f1.tagExp,
            e8 = f1.attrExpPresent,
            D8 = f1.closeIndex;
          this.options.transformTagName && (T1 = this.options.transformTagName(T1)), rA && J1 && rA.tagname !== "!xml" && (J1 = this.saveTextToParentTag(J1, rA, aA, !1));
          let Y7 = rA;
          Y7 && this.options.unpairedTags.indexOf(Y7.tagname) !== -1 && (rA = this.tagsNodeStack.pop(), aA = aA.substring(0, aA.lastIndexOf("."))), T1 !== EA.tagname && (aA += aA ? "." + T1 : T1);
          let T7 = z1;
          if (this.isItStopNode(this.options.stopNodes, aA, T1)) {
            let H4 = "";
            if (U6.length > 0 && U6.lastIndexOf("/") === U6.length - 1) T1[T1.length - 1] === "/" ? (T1 = T1.substr(0, T1.length - 1), aA = aA.substr(0, aA.length - 1), U6 = T1) : U6 = U6.substr(0, U6.length - 1), z1 = f1.closeIndex;else if (this.options.unpairedTags.indexOf(T1) !== -1) z1 = f1.closeIndex;else {
              let s7 = this.readStopNodeData(DA, K6, D8 + 1);
              if (!s7) throw Error(`Unexpected end of ${K6}`);
              z1 = s7.i, H4 = s7.tagContent;
            }
            let u7 = new R(T1);
            T1 !== U6 && e8 && (u7[":@"] = this.buildAttributesMap(U6, aA, T1)), H4 && (H4 = this.parseTextData(H4, T1, aA, !0, e8, !0, !0)), aA = aA.substr(0, aA.lastIndexOf(".")), u7.add(this.options.textNodeName, H4), this.addChild(rA, u7, aA, T7);
          } else {
            if (U6.length > 0 && U6.lastIndexOf("/") === U6.length - 1) {
              T1[T1.length - 1] === "/" ? (T1 = T1.substr(0, T1.length - 1), aA = aA.substr(0, aA.length - 1), U6 = T1) : U6 = U6.substr(0, U6.length - 1), this.options.transformTagName && (T1 = this.options.transformTagName(T1));
              let H4 = new R(T1);
              T1 !== U6 && e8 && (H4[":@"] = this.buildAttributesMap(U6, aA, T1)), this.addChild(rA, H4, aA, T7), aA = aA.substr(0, aA.lastIndexOf("."));
            } else {
              let H4 = new R(T1);
              this.tagsNodeStack.push(rA), T1 !== U6 && e8 && (H4[":@"] = this.buildAttributesMap(U6, aA, T1)), this.addChild(rA, H4, aA, T7), rA = H4;
            }
            J1 = "", z1 = D8;
          }
        }
      } else J1 += DA[z1];
      return EA.child;
    };
    function yA(DA, EA, rA, J1) {
      this.options.captureMetaData || (J1 = void 0);
      let aA = this.options.updateTag(EA.tagname, rA, EA[":@"]);
      aA === !1 || (typeof aA == "string" ? (EA.tagname = aA, DA.addChild(EA, J1)) : DA.addChild(EA, J1));
    }
    let AA = function (DA) {
      if (this.options.processEntities) {
        for (let EA in this.docTypeEntities) {
          let rA = this.docTypeEntities[EA];
          DA = DA.replace(rA.regx, rA.val);
        }
        for (let EA in this.lastEntities) {
          let rA = this.lastEntities[EA];
          DA = DA.replace(rA.regex, rA.val);
        }
        if (this.options.htmlEntities) for (let EA in this.htmlEntities) {
          let rA = this.htmlEntities[EA];
          DA = DA.replace(rA.regex, rA.val);
        }
        DA = DA.replace(this.ampEntity.regex, this.ampEntity.val);
      }
      return DA;
    };
    function wA(DA, EA, rA, J1) {
      return DA && (J1 === void 0 && (J1 = EA.child.length === 0), (DA = this.parseTextData(DA, EA.tagname, rA, !1, !!EA[":@"] && Object.keys(EA[":@"]).length !== 0, J1)) !== void 0 && DA !== "" && EA.add(this.options.textNodeName, DA), DA = ""), DA;
    }
    function GA(DA, EA, rA) {
      let J1 = "*." + rA;
      for (let aA in DA) {
        let z1 = DA[aA];
        if (J1 === z1 || EA === z1) return !0;
      }
      return !1;
    }
    function OA(DA, EA, rA, J1) {
      let aA = DA.indexOf(EA, rA);
      if (aA === -1) throw Error(J1);
      return aA + EA.length - 1;
    }
    function t(DA, EA, rA, J1 = ">") {
      let aA = function (D8, Y7, T7 = ">") {
        let H4,
          u7 = "";
        for (let s7 = Y7; s7 < D8.length; s7++) {
          let k5 = D8[s7];
          if (H4) k5 === H4 && (H4 = "");else if (k5 === '"' || k5 === "'") H4 = k5;else if (k5 === T7[0]) {
            if (!T7[1]) return {
              data: u7,
              index: s7
            };
            if (D8[s7 + 1] === T7[1]) return {
              data: u7,
              index: s7
            };
          } else k5 === "\t" && (k5 = " ");
          u7 += k5;
        }
      }(DA, EA + 1, J1);
      if (!aA) return;
      let {
          data: z1,
          index: f1
        } = aA,
        T1 = z1.search(/\s/),
        K6 = z1,
        U6 = !0;
      T1 !== -1 && (K6 = z1.substring(0, T1), z1 = z1.substring(T1 + 1).trimStart());
      let e8 = K6;
      if (rA) {
        let D8 = K6.indexOf(":");
        D8 !== -1 && (K6 = K6.substr(D8 + 1), U6 = K6 !== aA.data.substr(D8 + 1));
      }
      return {
        tagName: K6,
        tagExp: z1,
        closeIndex: f1,
        attrExpPresent: U6,
        rawTagName: e8
      };
    }
    function XA(DA, EA, rA) {
      let J1 = rA,
        aA = 1;
      for (; rA < DA.length; rA++) if (DA[rA] === "<") if (DA[rA + 1] === "/") {
        let z1 = OA(DA, ">", rA, `${EA} is not closed`);
        if (DA.substring(rA + 2, z1).trim() === EA && (aA--, aA === 0)) return {
          tagContent: DA.substring(J1, rA),
          i: z1
        };
        rA = z1;
      } else if (DA[rA + 1] === "?") rA = OA(DA, "?>", rA + 1, "StopNode is not closed.");else if (DA.substr(rA + 1, 3) === "!--") rA = OA(DA, "-->", rA + 3, "StopNode is not closed.");else if (DA.substr(rA + 1, 2) === "![") rA = OA(DA, "]]>", rA, "StopNode is not closed.") - 2;else {
        let z1 = t(DA, rA, ">");
        z1 && ((z1 && z1.tagName) === EA && z1.tagExp[z1.tagExp.length - 1] !== "/" && aA++, rA = z1.closeIndex);
      }
    }
    function VA(DA, EA, rA) {
      if (EA && typeof DA == "string") {
        let J1 = DA.trim();
        return J1 === "true" || J1 !== "false" && function (aA, z1 = {}) {
          if (z1 = Object.assign({}, YA, z1), !aA || typeof aA != "string") return aA;
          let f1 = aA.trim();
          if (z1.skipLike !== void 0 && z1.skipLike.test(f1)) return aA;
          if (aA === "0") return 0;
          if (z1.hex && r.test(f1)) return function (K6) {
            if (parseInt) return parseInt(K6, 16);
            if (Number.parseInt) return Number.parseInt(K6, 16);
            if (window && window.parseInt) return window.parseInt(K6, 16);
            throw Error("parseInt, Number.parseInt, window.parseInt are not supported");
          }(f1);
          if (f1.search(/.+[eE].+/) !== -1) return function (K6, U6, e8) {
            if (!e8.eNotation) return K6;
            let D8 = U6.match(e);
            if (D8) {
              let Y7 = D8[1] || "",
                T7 = D8[3].indexOf("e") === -1 ? "E" : "e",
                H4 = D8[2],
                u7 = Y7 ? K6[H4.length + 1] === T7 : K6[H4.length] === T7;
              return H4.length > 1 && u7 ? K6 : H4.length !== 1 || !D8[3].startsWith(`.${T7}`) && D8[3][0] !== T7 ? e8.leadingZeros && !u7 ? (U6 = (D8[1] || "") + D8[3], Number(U6)) : K6 : Number(U6);
            }
            return K6;
          }(aA, f1, z1);
          {
            let K6 = c.exec(f1);
            if (K6) {
              let U6 = K6[1] || "",
                e8 = K6[2],
                D8 = (T1 = K6[3]) && T1.indexOf(".") !== -1 ? ((T1 = T1.replace(/0+$/, "")) === "." ? T1 = "0" : T1[0] === "." ? T1 = "0" + T1 : T1[T1.length - 1] === "." && (T1 = T1.substring(0, T1.length - 1)), T1) : T1,
                Y7 = U6 ? aA[e8.length + 1] === "." : aA[e8.length] === ".";
              if (!z1.leadingZeros && (e8.length > 1 || e8.length === 1 && !Y7)) return aA;
              {
                let T7 = Number(f1),
                  H4 = String(T7);
                if (T7 === 0 || T7 === -0) return T7;
                if (H4.search(/[eE]/) !== -1) return z1.eNotation ? T7 : aA;
                if (f1.indexOf(".") !== -1) return H4 === "0" || H4 === D8 || H4 === `${U6}${D8}` ? T7 : aA;
                let u7 = e8 ? D8 : f1;
                return e8 ? u7 === H4 || U6 + u7 === H4 ? T7 : aA : u7 === H4 || u7 === U6 + H4 ? T7 : aA;
              }
            }
            return aA;
          }
          var T1;
        }(DA, rA);
      }
      return DA !== void 0 ? DA : "";
    }
    let vA = R.getMetaDataSymbol();
    function RA(DA, EA) {
      return fA(DA, EA);
    }
    function fA(DA, EA, rA) {
      let J1,
        aA = {};
      for (let z1 = 0; z1 < DA.length; z1++) {
        let f1 = DA[z1],
          T1 = LA(f1),
          K6 = "";
        if (K6 = rA === void 0 ? T1 : rA + "." + T1, T1 === EA.textNodeName) J1 === void 0 ? J1 = f1[T1] : J1 += "" + f1[T1];else {
          if (T1 === void 0) continue;
          if (f1[T1]) {
            let U6 = fA(f1[T1], EA, K6),
              e8 = xA(U6, EA);
            f1[vA] !== void 0 && (U6[vA] = f1[vA]), f1[":@"] ? SA(U6, f1[":@"], K6, EA) : Object.keys(U6).length !== 1 || U6[EA.textNodeName] === void 0 || EA.alwaysCreateTextNode ? Object.keys(U6).length === 0 && (EA.alwaysCreateTextNode ? U6[EA.textNodeName] = "" : U6 = "") : U6 = U6[EA.textNodeName], aA[T1] !== void 0 && aA.hasOwnProperty(T1) ? (Array.isArray(aA[T1]) || (aA[T1] = [aA[T1]]), aA[T1].push(U6)) : EA.isArray(T1, K6, e8) ? aA[T1] = [U6] : aA[T1] = U6;
          }
        }
      }
      return typeof J1 == "string" ? J1.length > 0 && (aA[EA.textNodeName] = J1) : J1 !== void 0 && (aA[EA.textNodeName] = J1), aA;
    }
    function LA(DA) {
      let EA = Object.keys(DA);
      for (let rA = 0; rA < EA.length; rA++) {
        let J1 = EA[rA];
        if (J1 !== ":@") return J1;
      }
    }
    function SA(DA, EA, rA, J1) {
      if (EA) {
        let aA = Object.keys(EA),
          z1 = aA.length;
        for (let f1 = 0; f1 < z1; f1++) {
          let T1 = aA[f1];
          J1.isArray(T1, rA + "." + T1, !0, !0) ? DA[T1] = [EA[T1]] : DA[T1] = EA[T1];
        }
      }
    }
    function xA(DA, EA) {
      let {
          textNodeName: rA
        } = EA,
        J1 = Object.keys(DA).length;
      return J1 === 0 || !(J1 !== 1 || !DA[rA] && typeof DA[rA] != "boolean" && DA[rA] !== 0);
    }
    class iA {
      constructor(DA) {
        this.externalEntities = {}, this.options = function (EA) {
          return Object.assign({}, T, EA);
        }(DA);
      }
      parse(DA, EA) {
        if (typeof DA == "string") ;else {
          if (!DA.toString) throw Error("XML data is accepted in String or Bytes[] form.");
          DA = DA.toString();
        }
        if (EA) {
          EA === !0 && (EA = {});
          let aA = J(DA, EA);
          if (aA !== !0) throw Error(`${aA.err.msg}:${aA.err.line}:${aA.err.col}`);
        }
        let rA = new HA(this.options);
        rA.addExternalEntities(this.externalEntities);
        let J1 = rA.parseXml(DA);
        return this.options.preserveOrder || J1 === void 0 ? J1 : RA(J1, this.options);
      }
      addEntity(DA, EA) {
        if (EA.indexOf("&") !== -1) throw Error("Entity value can't have '&'");
        if (DA.indexOf("&") !== -1 || DA.indexOf(";") !== -1) throw Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        if (EA === "&") throw Error("An entity with value '&' is not permitted");
        this.externalEntities[DA] = EA;
      }
      static getMetaDataSymbol() {
        return R.getMetaDataSymbol();
      }
    }
    function lA(DA, EA) {
      let rA = "";
      return EA.format && EA.indentBy.length > 0 && (rA = `
`), v1(DA, EA, "", rA);
    }
    function v1(DA, EA, rA, J1) {
      let aA = "",
        z1 = !1;
      for (let f1 = 0; f1 < DA.length; f1++) {
        let T1 = DA[f1],
          K6 = I1(T1);
        if (K6 === void 0) continue;
        let U6 = "";
        if (U6 = rA.length === 0 ? K6 : `${rA}.${K6}`, K6 === EA.textNodeName) {
          let T7 = T1[K6];
          B1(U6, EA) || (T7 = EA.tagValueProcessor(K6, T7), T7 = C6(T7, EA)), z1 && (aA += J1), aA += T7, z1 = !1;
          continue;
        }
        if (K6 === EA.cdataPropName) {
          z1 && (aA += J1), aA += `<![CDATA[${T1[K6][0][EA.textNodeName]}]]>`, z1 = !1;
          continue;
        }
        if (K6 === EA.commentPropName) {
          aA += J1 + `<!--${T1[K6][0][EA.textNodeName]}-->`, z1 = !0;
          continue;
        }
        if (K6[0] === "?") {
          let T7 = Q1(T1[":@"], EA),
            H4 = K6 === "?xml" ? "" : J1,
            u7 = T1[K6][0][EA.textNodeName];
          u7 = u7.length !== 0 ? " " + u7 : "", aA += H4 + `<${K6}${u7}${T7}?>`, z1 = !0;
          continue;
        }
        let e8 = J1;
        e8 !== "" && (e8 += EA.indentBy);
        let D8 = J1 + `<${K6}${Q1(T1[":@"], EA)}`,
          Y7 = v1(T1[K6], EA, U6, e8);
        EA.unpairedTags.indexOf(K6) !== -1 ? EA.suppressUnpairedNode ? aA += D8 + ">" : aA += D8 + "/>" : Y7 && Y7.length !== 0 || !EA.suppressEmptyNode ? Y7 && Y7.endsWith(">") ? aA += D8 + `>${Y7}${J1}</${K6}>` : (aA += D8 + ">", Y7 && J1 !== "" && (Y7.includes("/>") || Y7.includes("</")) ? aA += J1 + EA.indentBy + Y7 + J1 : aA += Y7, aA += `</${K6}>`) : aA += D8 + "/>", z1 = !0;
      }
      return aA;
    }
    function I1(DA) {
      let EA = Object.keys(DA);
      for (let rA = 0; rA < EA.length; rA++) {
        let J1 = EA[rA];
        if (DA.hasOwnProperty(J1) && J1 !== ":@") return J1;
      }
    }
    function Q1(DA, EA) {
      let rA = "";
      if (DA && !EA.ignoreAttributes) for (let J1 in DA) {
        if (!DA.hasOwnProperty(J1)) continue;
        let aA = EA.attributeValueProcessor(J1, DA[J1]);
        aA = C6(aA, EA), aA === !0 && EA.suppressBooleanAttributes ? rA += ` ${J1.substr(EA.attributeNamePrefix.length)}` : rA += ` ${J1.substr(EA.attributeNamePrefix.length)}="${aA}"`;
      }
      return rA;
    }
    function B1(DA, EA) {
      let rA = (DA = DA.substr(0, DA.length - EA.textNodeName.length - 1)).substr(DA.lastIndexOf(".") + 1);
      for (let J1 in EA.stopNodes) if (EA.stopNodes[J1] === DA || EA.stopNodes[J1] === "*." + rA) return !0;
      return !1;
    }
    function C6(DA, EA) {
      if (DA && DA.length > 0 && EA.processEntities) for (let rA = 0; rA < EA.entities.length; rA++) {
        let J1 = EA.entities[rA];
        DA = DA.replace(J1.regex, J1.val);
      }
      return DA;
    }
    let w1 = {
      attributeNamePrefix: "@_",
      attributesGroupName: !1,
      textNodeName: "#text",
      ignoreAttributes: !0,
      cdataPropName: !1,
      format: !1,
      indentBy: "  ",
      suppressEmptyNode: !1,
      suppressUnpairedNode: !0,
      suppressBooleanAttributes: !0,
      tagValueProcessor: function (DA, EA) {
        return EA;
      },
      attributeValueProcessor: function (DA, EA) {
        return EA;
      },
      preserveOrder: !1,
      commentPropName: !1,
      unpairedTags: [],
      entities: [{
        regex: new RegExp("&", "g"),
        val: "&amp;"
      }, {
        regex: new RegExp(">", "g"),
        val: "&gt;"
      }, {
        regex: new RegExp("<", "g"),
        val: "&lt;"
      }, {
        regex: new RegExp("'", "g"),
        val: "&apos;"
      }, {
        regex: new RegExp('"', "g"),
        val: "&quot;"
      }],
      processEntities: !0,
      stopNodes: [],
      oneListGroup: !1
    };
    function $1(DA) {
      this.options = Object.assign({}, w1, DA), this.options.ignoreAttributes === !0 || this.options.attributesGroupName ? this.isAttribute = function () {
        return !1;
      } : (this.ignoreAttributesFn = qA(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = c1), this.processTextOrObjNode = N1, this.options.format ? (this.indentate = A6, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function () {
        return "";
      }, this.tagEndChar = ">", this.newLine = "");
    }
    function N1(DA, EA, rA, J1) {
      let aA = this.j2x(DA, rA + 1, J1.concat(EA));
      return DA[this.options.textNodeName] !== void 0 && Object.keys(DA).length === 1 ? this.buildTextValNode(DA[this.options.textNodeName], EA, aA.attrStr, rA) : this.buildObjectNode(aA.val, EA, aA.attrStr, rA);
    }
    function A6(DA) {
      return this.options.indentBy.repeat(DA);
    }
    function c1(DA) {
      return !(!DA.startsWith(this.options.attributeNamePrefix) || DA === this.options.textNodeName) && DA.substr(this.attrPrefixLen);
    }
    $1.prototype.build = function (DA) {
      return this.options.preserveOrder ? lA(DA, this.options) : (Array.isArray(DA) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (DA = {
        [this.options.arrayNodeName]: DA
      }), this.j2x(DA, 0, []).val);
    }, $1.prototype.j2x = function (DA, EA, rA) {
      let J1 = "",
        aA = "",
        z1 = rA.join(".");
      for (let f1 in DA) if (Object.prototype.hasOwnProperty.call(DA, f1)) if (DA[f1] === void 0) this.isAttribute(f1) && (aA += "");else if (DA[f1] === null) this.isAttribute(f1) || f1 === this.options.cdataPropName ? aA += "" : f1[0] === "?" ? aA += this.indentate(EA) + "<" + f1 + "?" + this.tagEndChar : aA += this.indentate(EA) + "<" + f1 + "/" + this.tagEndChar;else if (DA[f1] instanceof Date) aA += this.buildTextValNode(DA[f1], f1, "", EA);else if (typeof DA[f1] != "object") {
        let T1 = this.isAttribute(f1);
        if (T1 && !this.ignoreAttributesFn(T1, z1)) J1 += this.buildAttrPairStr(T1, "" + DA[f1]);else if (!T1) if (f1 === this.options.textNodeName) {
          let K6 = this.options.tagValueProcessor(f1, "" + DA[f1]);
          aA += this.replaceEntitiesValue(K6);
        } else aA += this.buildTextValNode(DA[f1], f1, "", EA);
      } else if (Array.isArray(DA[f1])) {
        let T1 = DA[f1].length,
          K6 = "",
          U6 = "";
        for (let e8 = 0; e8 < T1; e8++) {
          let D8 = DA[f1][e8];
          if (D8 === void 0) ;else if (D8 === null) f1[0] === "?" ? aA += this.indentate(EA) + "<" + f1 + "?" + this.tagEndChar : aA += this.indentate(EA) + "<" + f1 + "/" + this.tagEndChar;else if (typeof D8 == "object") {
            if (this.options.oneListGroup) {
              let Y7 = this.j2x(D8, EA + 1, rA.concat(f1));
              K6 += Y7.val, this.options.attributesGroupName && D8.hasOwnProperty(this.options.attributesGroupName) && (U6 += Y7.attrStr);
            } else K6 += this.processTextOrObjNode(D8, f1, EA, rA);
          } else if (this.options.oneListGroup) {
            let Y7 = this.options.tagValueProcessor(f1, D8);
            Y7 = this.replaceEntitiesValue(Y7), K6 += Y7;
          } else K6 += this.buildTextValNode(D8, f1, "", EA);
        }
        this.options.oneListGroup && (K6 = this.buildObjectNode(K6, f1, U6, EA)), aA += K6;
      } else if (this.options.attributesGroupName && f1 === this.options.attributesGroupName) {
        let T1 = Object.keys(DA[f1]),
          K6 = T1.length;
        for (let U6 = 0; U6 < K6; U6++) J1 += this.buildAttrPairStr(T1[U6], "" + DA[f1][T1[U6]]);
      } else aA += this.processTextOrObjNode(DA[f1], f1, EA, rA);
      return {
        attrStr: J1,
        val: aA
      };
    }, $1.prototype.buildAttrPairStr = function (DA, EA) {
      return EA = this.options.attributeValueProcessor(DA, "" + EA), EA = this.replaceEntitiesValue(EA), this.options.suppressBooleanAttributes && EA === "true" ? " " + DA : " " + DA + '="' + EA + '"';
    }, $1.prototype.buildObjectNode = function (DA, EA, rA, J1) {
      if (DA === "") return EA[0] === "?" ? this.indentate(J1) + "<" + EA + rA + "?" + this.tagEndChar : this.indentate(J1) + "<" + EA + rA + this.closeTag(EA) + this.tagEndChar;
      {
        let aA = "</" + EA + this.tagEndChar,
          z1 = "";
        return EA[0] === "?" && (z1 = "?", aA = ""), !rA && rA !== "" || DA.indexOf("<") !== -1 ? this.options.commentPropName !== !1 && EA === this.options.commentPropName && z1.length === 0 ? this.indentate(J1) + `<!--${DA}-->` + this.newLine : this.indentate(J1) + "<" + EA + rA + z1 + this.tagEndChar + DA + this.indentate(J1) + aA : this.indentate(J1) + "<" + EA + rA + z1 + ">" + DA + aA;
      }
    }, $1.prototype.closeTag = function (DA) {
      let EA = "";
      return this.options.unpairedTags.indexOf(DA) !== -1 ? this.options.suppressUnpairedNode || (EA = "/") : EA = this.options.suppressEmptyNode ? "/" : `></${DA}`, EA;
    }, $1.prototype.buildTextValNode = function (DA, EA, rA, J1) {
      if (this.options.cdataPropName !== !1 && EA === this.options.cdataPropName) return this.indentate(J1) + `<![CDATA[${DA}]]>` + this.newLine;
      if (this.options.commentPropName !== !1 && EA === this.options.commentPropName) return this.indentate(J1) + `<!--${DA}-->` + this.newLine;
      if (EA[0] === "?") return this.indentate(J1) + "<" + EA + rA + "?" + this.tagEndChar;
      {
        let aA = this.options.tagValueProcessor(EA, DA);
        return aA = this.replaceEntitiesValue(aA), aA === "" ? this.indentate(J1) + "<" + EA + rA + this.closeTag(EA) + this.tagEndChar : this.indentate(J1) + "<" + EA + rA + ">" + aA + "</" + EA + this.tagEndChar;
      }
    }, $1.prototype.replaceEntitiesValue = function (DA) {
      if (DA && DA.length > 0 && this.options.processEntities) for (let EA = 0; EA < this.options.entities.length; EA++) {
        let rA = this.options.entities[EA];
        DA = DA.replace(rA.regex, rA.val);
      }
      return DA;
    };
    let w6 = {
      validate: J
    };
    hQ8.exports = K;
  })();
});

// Register to shared state
__$.bQ8 = bQ8;
