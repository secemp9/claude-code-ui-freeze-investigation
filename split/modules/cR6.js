// Module: cR6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cR6 = v((UAK, pAK) => {
  (function () {
    var A,
      K = {}.hasOwnProperty;
    pAK.exports = A = function () {
      class q {
        constructor(Y) {
          var z, w, H;
          if (this.assertLegalChar = this.assertLegalChar.bind(this), this.assertLegalName = this.assertLegalName.bind(this), Y || (Y = {}), this.options = Y, !this.options.version) this.options.version = "1.0";
          w = Y.stringify || {};
          for (z in w) {
            if (!K.call(w, z)) continue;
            H = w[z], this[z] = H;
          }
        }
        name(Y) {
          if (this.options.noValidation) return Y;
          return this.assertLegalName("" + Y || "");
        }
        text(Y) {
          if (this.options.noValidation) return Y;
          return this.assertLegalChar(this.textEscape("" + Y || ""));
        }
        cdata(Y) {
          if (this.options.noValidation) return Y;
          return Y = "" + Y || "", Y = Y.replace("]]>", "]]]]><![CDATA[>"), this.assertLegalChar(Y);
        }
        comment(Y) {
          if (this.options.noValidation) return Y;
          if (Y = "" + Y || "", Y.match(/--/)) throw Error("Comment text cannot contain double-hypen: " + Y);
          return this.assertLegalChar(Y);
        }
        raw(Y) {
          if (this.options.noValidation) return Y;
          return "" + Y || "";
        }
        attValue(Y) {
          if (this.options.noValidation) return Y;
          return this.assertLegalChar(this.attEscape(Y = "" + Y || ""));
        }
        insTarget(Y) {
          if (this.options.noValidation) return Y;
          return this.assertLegalChar("" + Y || "");
        }
        insValue(Y) {
          if (this.options.noValidation) return Y;
          if (Y = "" + Y || "", Y.match(/\?>/)) throw Error("Invalid processing instruction value: " + Y);
          return this.assertLegalChar(Y);
        }
        xmlVersion(Y) {
          if (this.options.noValidation) return Y;
          if (Y = "" + Y || "", !Y.match(/1\.[0-9]+/)) throw Error("Invalid version number: " + Y);
          return Y;
        }
        xmlEncoding(Y) {
          if (this.options.noValidation) return Y;
          if (Y = "" + Y || "", !Y.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) throw Error("Invalid encoding: " + Y);
          return this.assertLegalChar(Y);
        }
        xmlStandalone(Y) {
          if (this.options.noValidation) return Y;
          if (Y) return "yes";else return "no";
        }
        dtdPubID(Y) {
          if (this.options.noValidation) return Y;
          return this.assertLegalChar("" + Y || "");
        }
        dtdSysID(Y) {
          if (this.options.noValidation) return Y;
          return this.assertLegalChar("" + Y || "");
        }
        dtdElementValue(Y) {
          if (this.options.noValidation) return Y;
          return this.assertLegalChar("" + Y || "");
        }
        dtdAttType(Y) {
          if (this.options.noValidation) return Y;
          return this.assertLegalChar("" + Y || "");
        }
        dtdAttDefault(Y) {
          if (this.options.noValidation) return Y;
          return this.assertLegalChar("" + Y || "");
        }
        dtdEntityValue(Y) {
          if (this.options.noValidation) return Y;
          return this.assertLegalChar("" + Y || "");
        }
        dtdNData(Y) {
          if (this.options.noValidation) return Y;
          return this.assertLegalChar("" + Y || "");
        }
        assertLegalChar(Y) {
          var z, w;
          if (this.options.noValidation) return Y;
          if (this.options.version === "1.0") {
            if (z = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g, this.options.invalidCharReplacement !== void 0) Y = Y.replace(z, this.options.invalidCharReplacement);else if (w = Y.match(z)) throw Error(`Invalid character in string: ${Y} at index ${w.index}`);
          } else if (this.options.version === "1.1") {
            if (z = /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g, this.options.invalidCharReplacement !== void 0) Y = Y.replace(z, this.options.invalidCharReplacement);else if (w = Y.match(z)) throw Error(`Invalid character in string: ${Y} at index ${w.index}`);
          }
          return Y;
        }
        assertLegalName(Y) {
          var z;
          if (this.options.noValidation) return Y;
          if (Y = this.assertLegalChar(Y), z = /^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/, !Y.match(z)) throw Error(`Invalid character in name: ${Y}`);
          return Y;
        }
        textEscape(Y) {
          var z;
          if (this.options.noValidation) return Y;
          return z = this.options.noDoubleEncoding ? /(?!&(lt|gt|amp|apos|quot);)&/g : /&/g, Y.replace(z, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;");
        }
        attEscape(Y) {
          var z;
          if (this.options.noValidation) return Y;
          return z = this.options.noDoubleEncoding ? /(?!&(lt|gt|amp|apos|quot);)&/g : /&/g, Y.replace(z, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;");
        }
      }
      return q.prototype.convertAttKey = "@", q.prototype.convertPIKey = "?", q.prototype.convertTextKey = "#text", q.prototype.convertCDataKey = "#cdata", q.prototype.convertCommentKey = "#comment", q.prototype.convertRawKey = "#raw", q;
    }.call(this);
  }).call(UAK);
});

// Register to shared state
__$.cR6 = cR6;
