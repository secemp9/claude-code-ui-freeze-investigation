// Module: zU4
// Dependencies: K8A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zU4 = v(qU4 => {
  Object.defineProperty(qU4, "__esModule", {
    value: !0
  });
  qU4.fromContainerMetadata = void 0;
  var lF9 = __$.K8A(),
    iF9 = A => {
      return A?.logger?.debug("@smithy/credential-provider-imds", "fromContainerMetadata"), (0, lF9.fromContainerMetadata)(A);
    };
  qU4.fromContainerMetadata = iF9;
});

// Register to shared state
__$.zU4 = zU4;
