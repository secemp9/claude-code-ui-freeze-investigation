// Module: l08
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var l08 = v((YLz, c08) => {
  function $fq(A) {
    let K = A.COMMENT(/\{/, /\}/, {
      contains: ["self"]
    });
    return {
      name: "Parser3",
      subLanguage: "xml",
      relevance: 0,
      contains: [A.COMMENT("^#", "$"), A.COMMENT(/\^rem\{/, /\}/, {
        relevance: 10,
        contains: [K]
      }), {
        className: "meta",
        begin: "^@(?:BASE|USE|CLASS|OPTIONS)$",
        relevance: 10
      }, {
        className: "title",
        begin: "@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$"
      }, {
        className: "variable",
        begin: /\$\{?[\w\-.:]+\}?/
      }, {
        className: "keyword",
        begin: /\^[\w\-.:]+/
      }, {
        className: "number",
        begin: "\\^#[0-9a-fA-F]+"
      }, A.C_NUMBER_MODE]
    };
  }
  c08.exports = $fq;
});

// Register to shared state
__$.l08 = l08;
