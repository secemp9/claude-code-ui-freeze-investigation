// Module: qi1
// Dependencies: Ag8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qi1 = v(aZ5 => {
  var Kg8 = __$.Ag8(),
    DD = Array.from({
      length: 256
    }, (A, K) => K.toString(16).padStart(2, "0")),
    oZ5 = () => {
      if (Kg8.randomUUID) return Kg8.randomUUID();
      let A = new Uint8Array(16);
      return crypto.getRandomValues(A), A[6] = A[6] & 15 | 64, A[8] = A[8] & 63 | 128, DD[A[0]] + DD[A[1]] + DD[A[2]] + DD[A[3]] + "-" + DD[A[4]] + DD[A[5]] + "-" + DD[A[6]] + DD[A[7]] + "-" + DD[A[8]] + DD[A[9]] + "-" + DD[A[10]] + DD[A[11]] + DD[A[12]] + DD[A[13]] + DD[A[14]] + DD[A[15]];
    };
  aZ5.v4 = oZ5;
});

// Register to shared state
__$.qi1 = qi1;
