// Module: QN1
// Dependencies: p7, e6, s0, Z1, nQ, aQ, AB6, z6, SY, h
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QN1 = k(() => {
  __$.p7();
  __$.e6();
  __$.s0();
  __$.Z1();
  __$.nQ();
  __$.aQ();
  __$.AB6 = __$.z6(async () => {
    let {
        enabled: A,
        errors: K
      } = await __$.SY(),
      q = [];
    if (K.length > 0) __$.h(`Plugin loading errors: ${K.map(Y => __$._M(Y)).join(", ")}`);
    for (let Y of A) {
      let z = new Set();
      if (Y.outputStylesPath) try {
        let w = __$.T0K(Y.outputStylesPath, Y.name, z);
        if (q.push(...w), w.length > 0) __$.h(`Loaded ${w.length} output styles from plugin ${Y.name} default directory`);
      } catch (w) {
        __$.h(`Failed to load output styles from plugin ${Y.name} default directory: ${w}`, {
          level: "error"
        });
      }
      if (Y.outputStylesPaths) for (let w of Y.outputStylesPaths) try {
        let J = __$.BA().statSync(w);
        if (J.isDirectory()) {
          let O = __$.T0K(w, Y.name, z);
          if (q.push(...O), O.length > 0) __$.h(`Loaded ${O.length} output styles from plugin ${Y.name} custom path: ${w}`);
        } else if (J.isFile() && w.endsWith(".md")) {
          let O = __$.v0K(w, Y.name, z);
          if (O) q.push(O), __$.h(`Loaded output style from plugin ${Y.name} custom file: ${w}`);
        }
      } catch (H) {
        __$.h(`Failed to load output styles from plugin ${Y.name} custom path ${w}: ${H}`, {
          level: "error"
        });
      }
    }
    return __$.h(`Total plugin output styles loaded: ${q.length}`), q;
  });
});

// Register to shared state
__$.QN1 = QN1;
