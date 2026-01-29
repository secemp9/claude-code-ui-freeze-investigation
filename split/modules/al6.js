// Module: al6
// Dependencies: p7, rl6, z6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var al6 = k(() => {
  __$.p7();
  __$.rl6 = __$.z6(A => {
    if (!A || A.trim() === "") return null;
    let K = A.split(",").map(w => w.trim()).filter(Boolean);
    if (K.length === 0) return null;
    let q = K.some(w => w.startsWith("!")),
      Y = K.some(w => !w.startsWith("!"));
    if (q && Y) return null;
    let z = K.map(w => w.replace(/^!/, "").toLowerCase());
    return {
      include: q ? [] : z,
      exclude: q ? z : [],
      isExclusive: q
    };
  });
});

// Register to shared state
__$.al6 = al6;
