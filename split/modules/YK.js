// Module: YK
// Dependencies: C1, pNA, Z1, l6, Jz, l1, wb, y4, p7, e6
//   ... and 12 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var YK = k(() => {
  __$.C1();
  __$.pNA();
  __$.Z1();
  __$.l6();
  __$.Jz();
  __$.l1();
  __$.wb();
  __$.y4();
  __$.p7();
  __$.e6();
  __$.R_8();
  __$.Xz();
  __$.B5();
  __$.Oz();
  __$.xEK = o(__$.Ex1(), 1);
  __$.mC7 = __$.z6(async () => {
    let A = __$.e7();
    setTimeout(() => {
      A.abort();
    }, 1000);
    let K = await __$.Nz8(__$.x1(), A.signal, 15),
      q = 0;
    for (let Y of K) if (__$.Up(Y) === "CRLF") q++;
    return q > 3 ? "CRLF" : "LF";
  });
});

// Register to shared state
__$.YK = YK;
