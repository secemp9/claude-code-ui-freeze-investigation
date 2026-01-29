// Module: ukA
// Dependencies: YS8, wS8, JS8, XS8, _S8, DJA, qS8, zS8, HS8, OS8
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ukA = k(() => {
  __$.YS8();
  __$.wS8();
  __$.JS8();
  __$.XS8();
  __$._S8();
  __$.DJA.prototype.clear = __$.qS8;
  __$.DJA.prototype.delete = __$.zS8;
  __$.DJA.prototype.get = __$.HS8;
  __$.DJA.prototype.has = __$.OS8;
  __$.DJA.prototype.set = __$.$S8;
  __$.ui = __$.DJA;
});

// Register to shared state
__$.ukA = ukA;
