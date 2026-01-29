// Module: y5A
// Dependencies: Xj

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var y5A = v(FI7 => {
  var kT6, CT6, LT6;
  Object.defineProperty(FI7, "__esModule", {
    value: !0
  });
  FI7._getInstance = FI7._getStatsigGlobalFlag = FI7._getStatsigGlobal = void 0;
  var BoY = __$.Xj(),
    moY = () => {
      return __STATSIG__ ? __STATSIG__ : $W1;
    };
  FI7._getStatsigGlobal = moY;
  var goY = A => {
    return FI7._getStatsigGlobal()[A];
  };
  FI7._getStatsigGlobalFlag = goY;
  var FoY = A => {
    let K = FI7._getStatsigGlobal();
    if (!A) {
      if (K.instances && Object.keys(K.instances).length > 1) BoY.Log.warn("Call made to Statsig global instance without an SDK key but there is more than one client instance. If you are using mulitple clients, please specify the SDK key.");
      return K.firstInstance;
    }
    return K.instances && K.instances[A];
  };
  FI7._getInstance = FoY;
  var vDA = "__STATSIG__",
    BI7 = typeof window < "u" ? window : {},
    mI7 = typeof global < "u" ? global : {},
    gI7 = typeof globalThis < "u" ? globalThis : {},
    $W1 = (LT6 = (CT6 = (kT6 = BI7[vDA]) !== null && kT6 !== void 0 ? kT6 : mI7[vDA]) !== null && CT6 !== void 0 ? CT6 : gI7[vDA]) !== null && LT6 !== void 0 ? LT6 : {
      instance: FI7._getInstance
    };
  BI7[vDA] = $W1;
  mI7[vDA] = $W1;
  gI7[vDA] = $W1;
});

// Register to shared state
__$.y5A = y5A;
