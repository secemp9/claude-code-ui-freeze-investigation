// Module: Ua6
// Dependencies: ga6, OrA, Fa6, Qa6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ua6 = k(() => {
  __$.ga6();
  __$.OrA = new WeakMap();
  __$.Fa6.callCount = A => {
    if (!__$.OrA.has(A)) throw Error(`The given function \`${A.name}\` is not wrapped by the \`onetime\` package`);
    return __$.OrA.get(A);
  };
  __$.Qa6 = __$.Fa6;
});

// Register to shared state
__$.Ua6 = Ua6;
