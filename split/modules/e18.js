// Module: e18
// Dependencies: Ow, RR, t18, cY, i1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var e18 = k(() => {
  __$.Ow();
  __$.RR();
  __$.t18 = __$.cY.hasStandardBrowserEnv ? {
    write(A, K, q, Y, z, w) {
      let H = [A + "=" + encodeURIComponent(K)];
      __$.i1.isNumber(q) && H.push("expires=" + new Date(q).toGMTString()), __$.i1.isString(Y) && H.push("path=" + Y), __$.i1.isString(z) && H.push("domain=" + z), w === !0 && H.push("secure"), document.cookie = H.join("; ");
    },
    read(A) {
      let K = document.cookie.match(new RegExp("(^|;\\s*)(" + A + ")=([^;]*)"));
      return K ? decodeURIComponent(K[3]) : null;
    },
    remove(A) {
      this.write(A, "", Date.now() - 86400000);
    }
  } : {
    write() {},
    read() {
      return null;
    },
    remove() {}
  };
});

// Register to shared state
__$.e18 = e18;
