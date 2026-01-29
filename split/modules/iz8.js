// Module: iz8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iz8 = v((QEz, lz8) => {
  function cz8(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function Djq(...A) {
    return A.map(q => cz8(q)).join("");
  }
  function jjq(...A) {
    return "(" + A.map(q => cz8(q)).join("|") + ")";
  }
  function Mjq(A) {
    let K = ["GET", "POST", "HEAD", "PUT", "DELETE", "CONNECT", "OPTIONS", "PATCH", "TRACE"];
    return {
      name: "Apache Access Log",
      contains: [{
        className: "number",
        begin: /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?\b/,
        relevance: 5
      }, {
        className: "number",
        begin: /\b\d+\b/,
        relevance: 0
      }, {
        className: "string",
        begin: Djq(/"/, jjq(...K)),
        end: /"/,
        keywords: K,
        illegal: /\n/,
        relevance: 5,
        contains: [{
          begin: /HTTP\/[12]\.\d'/,
          relevance: 5
        }]
      }, {
        className: "string",
        begin: /\[\d[^\]\n]{8,}\]/,
        illegal: /\n/,
        relevance: 1
      }, {
        className: "string",
        begin: /\[/,
        end: /\]/,
        illegal: /\n/,
        relevance: 0
      }, {
        className: "string",
        begin: /"Mozilla\/\d\.\d \(/,
        end: /"/,
        illegal: /\n/,
        relevance: 3
      }, {
        className: "string",
        begin: /"/,
        end: /"/,
        illegal: /\n/,
        relevance: 0
      }]
    };
  }
  lz8.exports = Mjq;
});

// Register to shared state
__$.iz8 = iz8;
