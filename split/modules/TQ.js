// Module: TQ
// Dependencies: n3, p7, k46, r0A, l6, zH4, W8A, wH4, zT, R46
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TQ = k(() => {
  __$.n3();
  __$.p7();
  __$.k46();
  __$.r0A();
  __$.l6();
  __$.zH4 = o(__$.W8A(), 1), __$.wH4 = o(__$.zT(), 1), __$.R46 = o(__$.KRA(), 1);
  __$.JH4 = __$.z6(A => {
    let K = __$.Ny(),
      q = {
        httpProxy: A,
        httpsProxy: A,
        noProxy: process.env.NO_PROXY || process.env.no_proxy
      };
    if (K) q.connect = {
      cert: K.cert,
      key: K.key,
      passphrase: K.passphrase
    };
    return new __$.E46(q);
  });
});

// Register to shared state
__$.TQ = TQ;
