// Module: wr1
// Dependencies: zr1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wr1 = v(bU8 => {
  Object.defineProperty(bU8, "__esModule", {
    value: !0
  });
  bU8.getSSOTokenFilepath = void 0;
  var wk5 = CA("crypto"),
    Hk5 = CA("path"),
    Jk5 = __$.zr1(),
    Ok5 = A => {
      let q = (0, wk5.createHash)("sha1").update(A).digest("hex");
      return (0, Hk5.join)((0, Jk5.getHomeDir)(), ".aws", "sso", "cache", `${q}.json`);
    };
  bU8.getSSOTokenFilepath = Ok5;
});

// Register to shared state
__$.wr1 = wr1;
