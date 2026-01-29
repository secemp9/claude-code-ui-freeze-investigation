// Module: va6
// Dependencies: Na6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var va6 = v((k0z, Ta6) => {
  var AsK = __$.Na6();
  Ta6.exports = (A = "") => {
    let K = A.match(AsK);
    if (!K) return null;
    let [q, Y] = K[0].replace(/#! ?/, "").split(" "),
      z = q.split("/").pop();
    if (z === "env") return Y;
    return Y ? `${z} ${Y}` : z;
  };
});

// Register to shared state
__$.va6 = va6;
