// Module: ZU4
// Dependencies: fV, K8A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZU4 = v(_U4 => {
  Object.defineProperty(_U4, "__esModule", {
    value: !0
  });
  _U4.fromInstanceMetadata = void 0;
  var sF9 = __$.fV(),
    tF9 = __$.K8A(),
    eF9 = A => {
      return A?.logger?.debug("@smithy/credential-provider-imds", "fromInstanceMetadata"), async () => (0, tF9.fromInstanceMetadata)(A)().then(K => (0, sF9.setCredentialFeature)(K, "CREDENTIALS_IMDS", "0"));
    };
  _U4.fromInstanceMetadata = eF9;
});

// Register to shared state
__$.ZU4 = ZU4;
