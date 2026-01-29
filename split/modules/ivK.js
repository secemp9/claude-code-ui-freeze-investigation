// Module: ivK
// Dependencies: KU6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ivK = k(() => {
  __$.KU6 = {
    filePatternTools: ["Read", "Write", "Edit", "Glob", "NotebookRead", "NotebookEdit"],
    bashPrefixTools: ["Bash"],
    customValidation: {
      WebSearch: A => {
        if (A.includes("*") || A.includes("?")) return {
          valid: !1,
          error: "WebSearch does not support wildcards",
          suggestion: "Use exact search terms without * or ?",
          examples: ["WebSearch(claude ai)", "WebSearch(typescript tutorial)"]
        };
        return {
          valid: !0
        };
      },
      WebFetch: A => {
        if (A.includes("://") || A.startsWith("http")) return {
          valid: !1,
          error: "WebFetch permissions use domain format, not URLs",
          suggestion: 'Use "domain:hostname" format',
          examples: ["WebFetch(domain:example.com)", "WebFetch(domain:github.com)"]
        };
        if (!A.startsWith("domain:")) return {
          valid: !1,
          error: 'WebFetch permissions must use "domain:" prefix',
          suggestion: 'Use "domain:hostname" format',
          examples: ["WebFetch(domain:example.com)", "WebFetch(domain:*.google.com)"]
        };
        return {
          valid: !0
        };
      }
    }
  };
});

// Register to shared state
__$.ivK = ivK;
