// Module: X64
// Dependencies: O64

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var X64 = v(zf3 => {
  var qf3 = __$.O64();
  function Yf3(A) {
    let {
        port: K,
        query: q
      } = A,
      {
        protocol: Y,
        path: z,
        hostname: w
      } = A;
    if (Y && Y.slice(-1) !== ":") Y += ":";
    if (K) w += `:${K}`;
    if (z && z.charAt(0) !== "/") z = `/${z}`;
    let H = q ? qf3.buildQueryString(q) : "";
    if (H && H[0] !== "?") H = `?${H}`;
    let J = "";
    if (A.username != null || A.password != null) {
      let X = A.username ?? "",
        $ = A.password ?? "";
      J = `${X}:${$}@`;
    }
    let O = "";
    if (A.fragment) O = `#${A.fragment}`;
    return `${Y}//${J}${w}${z}${H}${O}`;
  }
  zf3.formatUrl = Yf3;
});

// Register to shared state
__$.X64 = X64;
