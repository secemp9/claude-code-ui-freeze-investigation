// Module: ys
// Dependencies: p7, C1, Z1, l1, qDA, aQ, e6, nQ, l6, I8
//   ... and 20 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ys = k(() => {
  __$.p7();
  __$.C1();
  __$.Z1();
  __$.l1();
  __$.qDA();
  __$.aQ();
  __$.e6();
  __$.nQ();
  __$.l6();
  __$.I8();
  __$.GJ();
  __$.K7();
  __$.rU();
  __$.dT();
  __$.q6();
  __$.PmA();
  __$.ON6 = __$.z6(async A => {
    let K = __$.D5A(__$.w8(), "skills"),
      q = __$.D5A(__$.yT(), ".claude", "skills"),
      Y = __$.wY6("skills", A);
    __$.h(`Loading skills from: managed=${q}, user=${K}, project=[${Y.join(", ")}]`);
    let [z, w, H] = await Promise.all([__$.fZ1(q, "policySettings"), __$.t$("userSettings") ? __$.fZ1(K, "userSettings") : Promise.resolve([]), __$.t$("projectSettings") ? Promise.all(Y.map(G => __$.fZ1(G, "projectSettings"))) : Promise.resolve([])]),
      J = await __$.ddY(A),
      O = [...z, ...w, ...H.flat(), ...J],
      X = new Map(),
      $ = [];
    for (let {
      skill: G,
      filePath: Z
    } of O) {
      if (G.type !== "prompt") continue;
      let W = __$.gdY(Z);
      if (W === null) {
        $.push(G);
        continue;
      }
      let D = X.get(W);
      if (D !== void 0) {
        __$.h(`Skipping duplicate skill '${G.name}' from ${G.source} (same inode already loaded from ${D})`);
        continue;
      }
      X.set(W, G.source), $.push(G);
    }
    let _ = O.length - $.length;
    if (_ > 0) __$.h(`Deduplicated ${_} skills (same inode)`);
    return __$.h(`Loaded ${$.length} unique skills (managed: ${z.length}, user: ${w.length}, project: ${H.flat().length}, legacy commands: ${J.length})`), $;
  });
  __$.VC7 = new Set(), __$.omA = new Map(), __$.vC7 = [];
});

// Register to shared state
__$.ys = ys;
