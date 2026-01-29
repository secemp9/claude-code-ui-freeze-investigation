// Module: V28
// Dependencies: FN, Cb1, P28

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var V28 = k(() => {
  __$.FN = Array(20).fill(0).map((A, K) => {
    return " ".repeat(K);
  }), __$.Cb1 = {
    " ": {
      "\n": Array(200).fill(0).map((A, K) => {
        return `
` + " ".repeat(K);
      }),
      "\r": Array(200).fill(0).map((A, K) => {
        return "\r" + " ".repeat(K);
      }),
      "\r\n": Array(200).fill(0).map((A, K) => {
        return `\r
` + " ".repeat(K);
      })
    },
    "\t": {
      "\n": Array(200).fill(0).map((A, K) => {
        return `
` + "\t".repeat(K);
      }),
      "\r": Array(200).fill(0).map((A, K) => {
        return "\r" + "\t".repeat(K);
      }),
      "\r\n": Array(200).fill(0).map((A, K) => {
        return `\r
` + "\t".repeat(K);
      })
    }
  }, __$.P28 = [`
`, "\r", `\r
`];
});

// Register to shared state
__$.V28 = V28;
