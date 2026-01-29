// Module: Qj8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Qj8 = v(Fj8 => {
  Object.defineProperty(Fj8, "__esModule", {
    value: !0
  });
  function PSq(A) {
    let K = [],
      q = {};
    return {
      add(Y, z) {
        while (K.length >= A) {
          let w = K.shift();
          if (w !== void 0) delete q[w];
        }
        if (q[Y]) this.delete(Y);
        K.push(Y), q[Y] = z;
      },
      clear() {
        q = {}, K = [];
      },
      get(Y) {
        return q[Y];
      },
      size() {
        return K.length;
      },
      delete(Y) {
        if (!q[Y]) return !1;
        delete q[Y];
        for (let z = 0; z < K.length; z++) if (K[z] === Y) {
          K.splice(z, 1);
          break;
        }
        return !0;
      }
    };
  }
  Fj8.makeFifoCache = PSq;
});

// Register to shared state
__$.Qj8 = Qj8;
