// Module: Kp8
// Dependencies: pb

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Kp8 = v(eU8 => {
  Object.defineProperty(eU8, "__esModule", {
    value: !0
  });
  eU8.getEndpointUrlConfig = void 0;
  var aU8 = __$.pb(),
    sU8 = "AWS_ENDPOINT_URL",
    tU8 = "endpoint_url",
    sk5 = A => ({
      environmentVariableSelector: K => {
        let q = A.split(" ").map(w => w.toUpperCase()),
          Y = K[[sU8, ...q].join("_")];
        if (Y) return Y;
        let z = K[sU8];
        if (z) return z;
        return;
      },
      configFileSelector: (K, q) => {
        if (q && K.services) {
          let z = q[["services", K.services].join(aU8.CONFIG_PREFIX_SEPARATOR)];
          if (z) {
            let w = A.split(" ").map(J => J.toLowerCase()),
              H = z[[w.join("_"), tU8].join(aU8.CONFIG_PREFIX_SEPARATOR)];
            if (H) return H;
          }
        }
        let Y = K[tU8];
        if (Y) return Y;
        return;
      },
      default: void 0
    });
  eU8.getEndpointUrlConfig = sk5;
});

// Register to shared state
__$.Kp8 = Kp8;
