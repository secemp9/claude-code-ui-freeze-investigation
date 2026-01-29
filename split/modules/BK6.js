// Module: BK6
// Dependencies: h51, s04, $A, t04, Zr, x51

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BK6 = k(() => {
  __$.h51();
  __$.s04 = o(__$.$A(), 1), __$.t04 = __$.s04.createContext({
    stdin: process.stdin,
    internal_eventEmitter: new __$.Zr(),
    setRawMode() {},
    isRawModeSupported: !1,
    internal_exitOnCtrlC: !0
  });
  __$.t04.displayName = "InternalStdinContext";
  __$.x51 = __$.t04;
});

// Register to shared state
__$.BK6 = BK6;
