// Module: gT6
// Dependencies: MgA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gT6 = v(JS7 => {
  Object.defineProperty(JS7, "__esModule", {
    value: !0
  });
  JS7.UrlConfiguration = void 0;
  var fW1 = __$.MgA(),
    EaY = {
      [fW1.Endpoint._initialize]: "i",
      [fW1.Endpoint._rgstr]: "e",
      [fW1.Endpoint._download_config_specs]: "d"
    };
  class HS7 {
    constructor(A, K, q, Y) {
      if (this.customUrl = null, this.fallbackUrls = null, this.endpoint = A, this.endpointDnsKey = EaY[A], K) this.customUrl = K;
      if (!K && q) this.customUrl = q.endsWith("/") ? `${q}${A}` : `${q}/${A}`;
      if (Y) this.fallbackUrls = Y;
      let z = fW1.NetworkDefault[A];
      this.defaultUrl = `${z}/${A}`;
    }
    getUrl() {
      var A;
      return (A = this.customUrl) !== null && A !== void 0 ? A : this.defaultUrl;
    }
  }
  JS7.UrlConfiguration = HS7;
});

// Register to shared state
__$.gT6 = gT6;
