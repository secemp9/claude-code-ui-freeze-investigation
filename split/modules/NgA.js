// Module: NgA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var NgA = v(WS7 => {
  Object.defineProperty(WS7, "__esModule", {
    value: !0
  });
  WS7.StatsigMetadataProvider = WS7.SDK_VERSION = void 0;
  WS7.SDK_VERSION = "3.12.1";
  var cT6 = {
    sdkVersion: WS7.SDK_VERSION,
    sdkType: "js-mono"
  };
  WS7.StatsigMetadataProvider = {
    get: () => cT6,
    add: A => {
      cT6 = Object.assign(Object.assign({}, cT6), A);
    }
  };
});

// Register to shared state
__$.NgA = NgA;
