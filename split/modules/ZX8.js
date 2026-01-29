// Module: ZX8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZX8 = v((WLz, GX8) => {
  function Nfq(A) {
    var K = "[ \\t\\f]*",
      q = "[ \\t\\f]+",
      Y = K + "[:=]" + K,
      z = q,
      w = "(" + Y + "|" + z + ")",
      H = "([^\\\\\\W:= \\t\\f\\n]|\\\\.)+",
      J = "([^\\\\:= \\t\\f\\n]|\\\\.)+",
      O = {
        end: w,
        relevance: 0,
        starts: {
          className: "string",
          end: /$/,
          relevance: 0,
          contains: [{
            begin: "\\\\\\\\"
          }, {
            begin: "\\\\\\n"
          }]
        }
      };
    return {
      name: ".properties",
      case_insensitive: !0,
      illegal: /\S/,
      contains: [A.COMMENT("^\\s*[!#]", "$"), {
        returnBegin: !0,
        variants: [{
          begin: H + Y,
          relevance: 1
        }, {
          begin: H + z,
          relevance: 0
        }],
        contains: [{
          className: "attr",
          begin: H,
          endsParent: !0,
          relevance: 0
        }],
        starts: O
      }, {
        begin: J + w,
        returnBegin: !0,
        relevance: 0,
        contains: [{
          className: "meta",
          begin: J,
          endsParent: !0,
          relevance: 0
        }],
        starts: O
      }, {
        className: "attr",
        relevance: 0,
        begin: J + K + "$"
      }]
    };
  }
  GX8.exports = Nfq;
});

// Register to shared state
__$.ZX8 = ZX8;
