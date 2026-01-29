// Module: s0
// Dependencies: p7, e6, q6, ID, Z1, C1, I8, TJ, pr, CK
//   ... and 13 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var s0 = k(() => {
  __$.p7();
  __$.e6();
  __$.q6();
  __$.ID();
  __$.Z1();
  __$.C1();
  __$.I8();
  __$.TJ();
  __$.pr();
  __$.CK();
  __$.l6();
  __$.$SA();
  __$.lN1();
  __$.g2();
  __$.nd();
  __$.b1();
  __$.SY = __$.z6(async () => {
    let A = await __$.AS2(),
      K = [...A.plugins],
      q = [...A.errors],
      Y = __$._zA();
    if (Y.length > 0) {
      let w = await __$.qS2(Y);
      K.push(...w.plugins), q.push(...w.errors);
    }
    __$.h(`Found ${K.length} plugins (${K.filter(w => w.enabled).length} enabled, ${K.filter(w => !w.enabled).length} disabled)`);
    let z = K.filter(w => w.enabled);
    if (z.length > 0) __$.l7("plugins");
    return {
      enabled: z,
      disabled: K.filter(w => !w.enabled),
      errors: q
    };
  });
});

// Register to shared state
__$.s0 = s0;
