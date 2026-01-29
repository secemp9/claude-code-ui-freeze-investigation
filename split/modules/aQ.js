// Module: aQ
// Dependencies: wb, nQ, Qr, Z1, Jz, l6, I8, l1, GJ, p7
//   ... and 13 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aQ = k(() => {
  __$.wb();
  __$.nQ();
  __$.Qr();
  __$.Z1();
  __$.Jz();
  __$.l6();
  __$.I8();
  __$.l1();
  __$.GJ();
  __$.p7();
  __$.Jw();
  __$.Jh4 = ["commands", "agents", "output-styles", "skills"];
  __$.oQ = __$.z6(async function (A, K) {
    let q = Date.now(),
      Y = __$.ZY1(__$.w8(), A),
      z = __$.ZY1(__$.yT(), ".claude", A),
      w = __$.wY6(A, K),
      [H, J, O] = await Promise.all([__$.YY6(z).then(D => D.map(j => ({
        ...j,
        baseDir: z,
        source: "policySettings"
      }))), __$.t$("userSettings") ? __$.YY6(Y).then(D => D.map(j => ({
        ...j,
        baseDir: Y,
        source: "userSettings"
      }))) : Promise.resolve([]), __$.t$("projectSettings") ? Promise.all(w.map(D => __$.YY6(D).then(j => j.map(M => ({
        ...M,
        baseDir: D,
        source: "projectSettings"
      }))))) : Promise.resolve([])]),
      X = O.flat(),
      $ = [...H, ...J, ...X],
      _ = await Promise.all($.map(D => __$.DT9(D.filePath))),
      G = new Map(),
      Z = [];
    for (let [D, j] of $.entries()) {
      let M = _[D] ?? null;
      if (M === null) {
        Z.push(j);
        continue;
      }
      let P = G.get(M);
      if (P !== void 0) {
        __$.h(`Skipping duplicate file '${j.filePath}' from ${j.source} (same inode already loaded from ${P})`);
        continue;
      }
      G.set(M, j.source), Z.push(j);
    }
    let W = $.length - Z.length;
    if (W > 0) __$.h(`Deduplicated ${W} files in ${A} (same inode via symlinks or hard links)`);
    return __$.n("tengu_dir_search", {
      durationMs: Date.now() - q,
      managedFilesFound: H.length,
      userFilesFound: J.length,
      projectFilesFound: X.length,
      projectDirsSearched: w.length,
      subdir: A
    }), Z;
  }, (A, K) => `${A}:${K}`);
});

// Register to shared state
__$.aQ = aQ;
