// Module: qd6
// Dependencies: i6, z3, y4, sz, CK, C1, p7, aTA, Jw, LIK
//   ... and 7 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qd6 = k(() => {
  __$.i6();
  __$.z3();
  __$.y4();
  __$.sz();
  __$.CK();
  __$.C1();
  __$.p7();
  __$.aTA();
  __$.Jw();
  __$.LIK = __$.z6(() => {
    let A = __$.Z2(),
      K = A.exampleFiles?.length ? __$.rg(A.exampleFiles) : "<filepath>",
      q = ["fix lint errors", "fix typecheck errors", `how does ${K} work?`, `refactor ${K}`, "how do I log an error?", `edit ${K} to...`, `write a test for ${K}`, "create a util logging.py that..."];
    return `Try "${__$.rg(q)}"`;
  }), __$.RIK = __$.z6(async () => {
    let A = __$.Z2(),
      K = Date.now(),
      q = A.exampleFilesGeneratedAt ?? 0;
    if (K - q > __$.C4z) A.exampleFiles = [];
    if (!A.exampleFiles?.length) __$.k4z().then(Y => {
      if (Y.length) __$.Pz(z => ({
        ...z,
        exampleFiles: Y,
        exampleFilesGeneratedAt: Date.now()
      }));
    });
  });
});

// Register to shared state
__$.qd6 = qd6;
