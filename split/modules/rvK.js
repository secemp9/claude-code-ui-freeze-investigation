// Module: rvK
// Dependencies: z7, S2, tN, ivK, SE1, U, ua2

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rvK = k(() => {
  __$.z7();
  __$.S2();
  __$.tN();
  __$.ivK();
  __$.SE1 = __$.U.string().superRefine((A, K) => {
    let q = __$.ua2(A);
    if (!q.valid) {
      let Y = q.error;
      if (q.suggestion) Y += `. ${q.suggestion}`;
      if (q.examples && q.examples.length > 0) Y += `. Examples: ${q.examples.join(", ")}`;
      K.addIssue({
        code: __$.U.ZodIssueCode.custom,
        message: Y,
        params: {
          received: A
        }
      });
    }
  });
});

// Register to shared state
__$.rvK = rvK;
