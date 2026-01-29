// Module: W04
// Dependencies: u5, XG, W4A, G04, X04, ts3, Z04, es3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var W04 = k(() => {
  __$.u5();
  __$.XG();
  __$.W4A();
  __$.G04 = o(__$.X04(), 1), __$.ts3 = {
    dashed: {
      top: "╌",
      left: "╎",
      right: "╎",
      bottom: "╌",
      topLeft: " ",
      topRight: " ",
      bottomLeft: " ",
      bottomRight: " "
    }
  };
  __$.Z04 = __$.es3;
});

// Register to shared state
__$.W04 = W04;
