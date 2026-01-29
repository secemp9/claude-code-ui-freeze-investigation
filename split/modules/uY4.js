// Module: uY4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uY4 = v((d6w, xY4) => {
  var Rd3 = {
      pronoun: "it",
      is: "is",
      was: "was",
      this: "this"
    },
    yd3 = {
      pronoun: "they",
      is: "are",
      was: "were",
      this: "these"
    };
  xY4.exports = class {
    constructor(K, q) {
      this.singular = K, this.plural = q;
    }
    pluralize(K) {
      let q = K === 1,
        Y = q ? Rd3 : yd3,
        z = q ? this.singular : this.plural;
      return {
        ...Y,
        count: K,
        noun: z
      };
    }
  };
});

// Register to shared state
__$.uY4 = uY4;
