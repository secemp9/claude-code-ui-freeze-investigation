// Module: W68
// Dependencies: Ow, irA, cA8, _68, JoA, trA, Z68, lh, nh, GTA
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var W68 = k(() => {
  __$.Ow();
  __$.irA();
  __$.cA8();
  __$._68();
  __$.JoA();
  __$.trA();
  __$.Z68();
  __$.lh();
  __$.nh = __$.GTA.validators;
  __$.i1.forEach(["delete", "get", "head", "options"], function (K) {
    __$.ZTA.prototype[K] = function (q, Y) {
      return this.request(__$.yR(Y || {}, {
        method: K,
        url: q,
        data: (Y || {}).data
      }));
    };
  });
  __$.i1.forEach(["post", "put", "patch"], function (K) {
    function q(Y) {
      return function (w, H, J) {
        return this.request(__$.yR(J || {}, {
          method: K,
          headers: Y ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: w,
          data: H
        }));
      };
    }
    __$.ZTA.prototype[K] = q(), __$.ZTA.prototype[K + "Form"] = q(!0);
  });
  __$.WTA = __$.ZTA;
});

// Register to shared state
__$.W68 = W68;
