// Module: rw8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rw8 = v((_kz, nw8) => {
  function zMq(A) {
    let K = "assembly module package import alias class interface object given value assign void function new of extends satisfies abstracts in out return break continue throw assert dynamic if else switch case for while try catch finally then let this outer super is exists nonempty",
      q = "shared abstract formal default actual variable late native deprecated final sealed annotation suppressWarnings small",
      Y = "doc by license see throws tagged",
      z = {
        className: "subst",
        excludeBegin: !0,
        excludeEnd: !0,
        begin: /``/,
        end: /``/,
        keywords: K,
        relevance: 10
      },
      w = [{
        className: "string",
        begin: '"""',
        end: '"""',
        relevance: 10
      }, {
        className: "string",
        begin: '"',
        end: '"',
        contains: [z]
      }, {
        className: "string",
        begin: "'",
        end: "'"
      }, {
        className: "number",
        begin: "#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?",
        relevance: 0
      }];
    return z.contains = w, {
      name: "Ceylon",
      keywords: {
        keyword: K + " " + q,
        meta: "doc by license see throws tagged"
      },
      illegal: "\\$[^01]|#[^0-9a-fA-F]",
      contains: [A.C_LINE_COMMENT_MODE, A.COMMENT("/\\*", "\\*/", {
        contains: ["self"]
      }), {
        className: "meta",
        begin: '@[a-z]\\w*(?::"[^"]*")?'
      }].concat(w)
    };
  }
  nw8.exports = zMq;
});

// Register to shared state
__$.rw8 = rw8;
