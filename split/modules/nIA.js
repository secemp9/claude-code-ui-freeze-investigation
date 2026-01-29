// Module: nIA
// Dependencies: pIA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nIA = v(wj9 => {
  var Yj9 = __$.pIA(),
    zj9 = {
      identify: A => typeof A === "string",
      default: !0,
      tag: "tag:yaml.org,2002:str",
      resolve: A => A,
      stringify(A, K, q, Y) {
        return K = Object.assign({
          actualString: !0
        }, K), Yj9.stringifyString(A, K, q, Y);
      }
    };
  wj9.string = zj9;
});

// Register to shared state
__$.nIA = nIA;
