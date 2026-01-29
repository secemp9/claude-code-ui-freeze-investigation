// Module: dz8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dz8 = v((FEz, pz8) => {
  function Gjq(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function Zjq(...A) {
    return A.map(q => Gjq(q)).join("");
  }
  function Wjq(A) {
    let K = {
        ruleDeclaration: /^[a-zA-Z][a-zA-Z0-9-]*/,
        unexpectedChars: /[!@#$^&',?+~`|:]/
      },
      q = ["ALPHA", "BIT", "CHAR", "CR", "CRLF", "CTL", "DIGIT", "DQUOTE", "HEXDIG", "HTAB", "LF", "LWSP", "OCTET", "SP", "VCHAR", "WSP"],
      Y = A.COMMENT(/;/, /$/),
      z = {
        className: "symbol",
        begin: /%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/
      },
      w = {
        className: "symbol",
        begin: /%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/
      },
      H = {
        className: "symbol",
        begin: /%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/
      },
      J = {
        className: "symbol",
        begin: /%[si]/
      },
      O = {
        className: "attribute",
        begin: Zjq(K.ruleDeclaration, /(?=\s*=)/)
      };
    return {
      name: "Augmented Backus-Naur Form",
      illegal: K.unexpectedChars,
      keywords: q,
      contains: [O, Y, z, w, H, J, A.QUOTE_STRING_MODE, A.NUMBER_MODE]
    };
  }
  pz8.exports = Wjq;
});

// Register to shared state
__$.dz8 = dz8;
