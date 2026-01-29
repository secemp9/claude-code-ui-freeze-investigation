// Module: KCK
// Dependencies: e6, Ev, ekK, B3A, nUA, hD, $8, Se2, he2, Ak1
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var KCK = k(() => {
  __$.e6();
  __$.Ev();
  __$.ekK();
  __$.B3A();
  __$.nUA();
  __$.hD();
  __$.$8();
  __$.Ev();
  __$.Se2 = /^#\s*MAGIC\s+DOC:\s*(.+)$/im, __$.he2 = /^[_*](.+?)[_*]\s*$/m, __$.Ak1 = new Map();
  __$.QGO = __$.vx(async function (A) {
    let {
      messages: K,
      querySource: q
    } = A;
    if (q !== "repl_main_thread") return;
    if (__$.ypA(K)) return;
    if (__$.Ak1.size === 0) return;
    for (let w of Array.from(__$.Ak1.values())) await __$.ue2(w, A);
  });
});

// Register to shared state
__$.KCK = KCK;
