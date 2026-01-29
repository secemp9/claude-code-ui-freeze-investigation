// Module: du1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var du1 = v(Kj8 => {
  Object.defineProperty(Kj8, "__esModule", {
    value: !0
  });
  function Iyq(A) {
    if (!A) return {};
    let K = A.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!K) return {};
    let q = K[6] || "",
      Y = K[8] || "";
    return {
      host: K[4],
      path: K[5],
      protocol: K[2],
      search: q,
      hash: Y,
      relative: K[5] + q + Y
    };
  }
  function Syq(A) {
    return A.split(/[\?#]/, 1)[0];
  }
  function hyq(A) {
    return A.split(/\\?\//).filter(K => K.length > 0 && K !== ",").length;
  }
  function byq(A) {
    let {
        protocol: K,
        host: q,
        path: Y
      } = A,
      z = q && q.replace(/^.*@/, "[filtered]:[filtered]@").replace(/(:80)$/, "").replace(/(:443)$/, "") || "";
    return `${K ? `${K}://` : ""}${z}${Y}`;
  }
  Kj8.getNumberOfUrlSegments = hyq;
  Kj8.getSanitizedUrlString = byq;
  Kj8.parseUrl = Iyq;
  Kj8.stripUrlQueryAndFragment = Syq;
});

// Register to shared state
__$.du1 = du1;
