// Module: uJ4
// Dependencies: N76, Lx, oq1, T76, CQ, qr, IJ4, SJ4, yJ4, $XA
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uJ4 = k(() => {
  if (typeof performance === "object" && typeof performance.now === "function") __$.N76 = performance, __$.Lx = function () {
    return __$.N76.now();
  };else __$.oq1 = Date, __$.T76 = __$.oq1.now(), __$.Lx = function () {
    return __$.oq1.now() - __$.T76;
  };
  __$.CQ = [], __$.qr = [], __$.IJ4 = typeof setTimeout === "function" ? setTimeout : null, __$.SJ4 = typeof clearTimeout === "function" ? clearTimeout : null, __$.yJ4 = typeof setImmediate < "u" ? setImmediate : null;
  if (typeof __$.yJ4 === "function") __$.$XA = function () {
    __$.yJ4(__$.V76);
  };else if (typeof MessageChannel < "u") __$.sq1 = new MessageChannel(), __$.E76 = __$.sq1.port2, __$.sq1.port1.onmessage = __$.V76, __$.$XA = function () {
    __$.E76.postMessage(null);
  };else __$.$XA = function () {
    __$.IJ4(__$.V76, 0);
  };
  __$.b76 = __$.bJ4;
});

// Register to shared state
__$.uJ4 = uJ4;
