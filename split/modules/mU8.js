// Module: mU8
// Dependencies: wr1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mU8 = v(uU8 => {
  Object.defineProperty(uU8, "__esModule", {
    value: !0
  });
  uU8.getSSOTokenFromFile = uU8.tokenIntercept = void 0;
  var Xk5 = CA("fs/promises"),
    $k5 = __$.wr1();
  uU8.tokenIntercept = {};
  var _k5 = async A => {
    if (uU8.tokenIntercept[A]) return uU8.tokenIntercept[A];
    let K = (0, $k5.getSSOTokenFilepath)(A),
      q = await (0, Xk5.readFile)(K, "utf8");
    return JSON.parse(q);
  };
  uU8.getSSOTokenFromFile = _k5;
});

// Register to shared state
__$.mU8 = mU8;
