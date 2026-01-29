// Module: jO8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jO8 = v((VCz, DO8) => {
  function XVq(A) {
    let q = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        contains: [{
          begin: /[\w-]+ *=/,
          returnBegin: !0,
          relevance: 0,
          contains: [{
            className: "attr",
            begin: /[\w-]+/
          }]
        }],
        relevance: 0
      },
      Y = {
        className: "function",
        begin: /:[\w\-.]+/,
        relevance: 0
      },
      z = {
        className: "string",
        begin: /\B([\/.])[\w\-.\/=]+/
      },
      w = {
        className: "params",
        begin: /--[\w\-=\/]+/
      };
    return {
      name: "JBoss CLI",
      aliases: ["wildfly-cli"],
      keywords: {
        $pattern: "[a-z-]+",
        keyword: "alias batch cd clear command connect connection-factory connection-info data-source deploy deployment-info deployment-overlay echo echo-dmr help history if jdbc-driver-info jms-queue|20 jms-topic|20 ls patch pwd quit read-attribute read-operation reload rollout-plan run-batch set shutdown try unalias undeploy unset version xa-data-source",
        literal: "true false"
      },
      contains: [A.HASH_COMMENT_MODE, A.QUOTE_STRING_MODE, w, Y, z, q]
    };
  }
  DO8.exports = XVq;
});

// Register to shared state
__$.jO8 = jO8;
