// Module: bxA
// Dependencies: p7, e6, s0, Z1, nQ, aQ, rKA, z6, SY, h
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bxA = k(() => {
  __$.p7();
  __$.e6();
  __$.s0();
  __$.Z1();
  __$.nQ();
  __$.aQ();
  __$.rKA = __$.z6(async () => {
    let {
        enabled: A,
        errors: K
      } = await __$.SY(),
      q = [];
    if (K.length > 0) __$.h(`Plugin loading errors: ${K.map(Y => __$._M(Y)).join(", ")}`);
    for (let Y of A) {
      let z = new Set();
      if (Y.agentsPath) try {
        let w = __$.m57(Y.agentsPath, Y.name, Y.source, z);
        if (q.push(...w), w.length > 0) __$.h(`Loaded ${w.length} agents from plugin ${Y.name} default directory`);
      } catch (w) {
        __$.h(`Failed to load agents from plugin ${Y.name} default directory: ${w}`, {
          level: "error"
        });
      }
      if (Y.agentsPaths) for (let w of Y.agentsPaths) try {
        let J = __$.BA().statSync(w);
        if (J.isDirectory()) {
          let O = __$.m57(w, Y.name, Y.source, z);
          if (q.push(...O), O.length > 0) __$.h(`Loaded ${O.length} agents from plugin ${Y.name} custom path: ${w}`);
        } else if (J.isFile() && w.endsWith(".md")) {
          let O = __$.g57(w, Y.name, [], Y.source, z);
          if (O) q.push(O), __$.h(`Loaded agent from plugin ${Y.name} custom file: ${w}`);
        }
      } catch (H) {
        __$.h(`Failed to load agents from plugin ${Y.name} custom path ${w}: ${H}`, {
          level: "error"
        });
      }
    }
    return __$.h(`Total plugin agents loaded: ${q.length}`), q;
  });
});

// Register to shared state
__$.bxA = bxA;
