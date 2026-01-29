// Module: kS8
// Dependencies: ZS8, MS8, VS8, NS8, vS8, jJA, GS8, jS8, PS8, fS8
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kS8 = k(() => {
  __$.ZS8();
  __$.MS8();
  __$.VS8();
  __$.NS8();
  __$.vS8();
  __$.jJA.prototype.clear = __$.GS8;
  __$.jJA.prototype.delete = __$.jS8;
  __$.jJA.prototype.get = __$.PS8;
  __$.jJA.prototype.has = __$.fS8;
  __$.jJA.prototype.set = __$.TS8;
  __$.ES8 = __$.jJA;
});

// Register to shared state
__$.kS8 = kS8;
