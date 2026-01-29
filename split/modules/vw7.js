// Module: vw7
// Dependencies: rZ6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vw7 = v(Tw7 => {
  Object.defineProperty(Tw7, "__esModule", {
    value: !0
  });
  var AZY = __$.rZ6(),
    KZY = {
      keyword: "prefixItems",
      type: "array",
      schemaType: ["array"],
      before: "uniqueItems",
      code: A => (0, AZY.validateTuple)(A, "items")
    };
  Tw7.default = KZY;
});

// Register to shared state
__$.vw7 = vw7;
