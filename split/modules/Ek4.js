// Module: Ek4
// Dependencies: IM4, Q4A, Nk4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ek4 = v(Tk4 => {
  Object.defineProperty(Tk4, "__esModule", {
    value: !0
  });
  Tk4.SDK_INFO = void 0;
  var v09 = __$.IM4(),
    a31 = __$.Q4A(),
    E09 = __$.Nk4();
  Tk4.SDK_INFO = {
    [a31.ATTR_TELEMETRY_SDK_NAME]: "opentelemetry",
    [E09.ATTR_PROCESS_RUNTIME_NAME]: "node",
    [a31.ATTR_TELEMETRY_SDK_LANGUAGE]: a31.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS,
    [a31.ATTR_TELEMETRY_SDK_VERSION]: v09.VERSION
  };
});

// Register to shared state
__$.Ek4 = Ek4;
