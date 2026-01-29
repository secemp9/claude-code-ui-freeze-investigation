// Module: X0
// Dependencies: eN1, w$K, X$K, F$K, U$K, TT1, a$K, s$K, e$K, A_K
//   ... and 159 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var X0 = k(() => {
  __$.eN1();
  __$.w$K();
  __$.X$K();
  __$.F$K();
  __$.U$K();
  __$.TT1();
  __$.a$K();
  __$.s$K();
  __$.e$K();
  __$.A_K();
  __$.q_K();
  __$.e_K();
  __$.JGK();
  __$.XGK();
  __$.$GK();
  __$.fGK();
  __$.xGK();
  __$.QGK();
  __$.aGK();
  __$.zZK();
  __$.ZZK();
  __$.DZK();
  __$.jZK();
  __$.fZK();
  __$.AP1();
  __$.jM1();
  __$.AWK();
  __$.YWK();
  __$.aWK();
  __$.YMK();
  __$.zMK();
  __$.wMK();
  __$.JMK();
  __$.DMK();
  __$.MMK();
  __$.bPK();
  __$.SF6();
  __$.uPK();
  __$.BPK();
  __$.QPK();
  __$.pPK();
  __$.HVK();
  __$.JVK();
  __$.XVK();
  __$._VK();
  __$.R4A();
  __$.ZVK();
  __$.DVK();
  __$.MVK();
  __$.UF6();
  __$.vVK();
  __$.xVK();
  __$.BVK();
  __$.QVK();
  __$.xe();
  __$.iVK();
  __$.MfK();
  __$.VfK();
  __$.NfK();
  __$.VNK();
  __$.NNK();
  __$.vNK();
  __$.kNK();
  __$.CNK();
  __$.yNK();
  __$.INK();
  __$.SNK();
  __$.pNK();
  __$.OTK();
  __$.$TK();
  __$.C1();
  __$.Z1();
  __$.ys();
  __$.ie();
  __$.vpA();
  __$.p7();
  __$.x4();
  __$.vQ6();
  __$.NTK();
  __$.vTK();
  __$.CTK();
  __$.RTK();
  __$.xTK();
  __$.RQ6();
  __$.jQA();
  __$.mTK();
  __$.FTK();
  __$.QTK();
  __$.PvK();
  __$.fvK();
  __$.NvK();
  __$.GJ();
  __$.nQ6 = __$.z6(() => [__$.z$K, __$.PNK, __$.O$K, __$.JTK, __$.r$K, __$.o$K, __$.K_K, __$.t_K, __$.t$K, __$.wGK, __$.HGK, __$.OGK, __$.bGK, __$.ME1, __$.PfK, __$.ffK, __$.YZK, __$.GZK, __$.WZK, __$.VZK, __$.eZK, __$.qWK, __$.oWK, __$.oGK, __$.qMK, __$.TTK, __$.LTK, __$.bTK, __$.fNK, __$.HMK, __$.WMK, __$.jMK, __$.hPK, __$.xPK, __$.FPK, __$.MvK, __$.UPK, __$.gTK, __$.XTK, __$.kTK, __$.WVK, __$.OVK, __$.Q$K, __$.ov1, __$.TNK, __$.$VK, __$.L4A, __$.XcA, __$.fd, __$.BTK, __$.GVK, __$.jVK, ...(__$.TvK ? [__$.TvK] : []), __$.fVK, __$.TVK, __$.bVK, __$.uVK, __$.lVK, __$.jfK, __$.fTK, __$.UNK, ...(!__$.ak() ? [__$.Tt7, __$.Y4K()] : []), __$.wVK, ...[]]), __$.mt = __$.z6(() => new Set(__$.nQ6().map(A => A.name)));
  __$.tf = __$.z6(async A => {
    let [{
        skillDirCommands: K,
        pluginSkills: q,
        bundledSkills: Y
      }, z, w] = await Promise.all([__$.bo2(A), __$.P9A(), __$.ho2()]),
      H = __$.kC7(),
      J = [...Y, ...K, ...z, ...q, ...w, ...__$.nQ6()].filter(G => G.isEnabled());
    if (H.length === 0) return J;
    let O = new Set(J.map(G => G.name)),
      X = H.filter(G => !O.has(G.name) && G.isEnabled());
    if (X.length === 0) return J;
    let $ = new Set(__$.nQ6().map(G => G.name)),
      _ = J.findIndex(G => $.has(G.name));
    if (_ === -1) return [...J, ...X];
    return [...J.slice(0, _), ...X, ...J.slice(_)];
  });
  __$.lC = __$.z6(async A => {
    return (await __$.tf(A)).filter(q => q.type === "prompt" && !q.disableModelInvocation && q.source !== "builtin" && (q.loadedFrom === "bundled" || q.loadedFrom === "commands_DEPRECATED" || q.hasUserSpecifiedDescription || q.whenToUse));
  }), __$.Z_1 = __$.z6(async A => {
    try {
      return (await __$.tf(A)).filter(q => q.type === "prompt" && q.source !== "builtin" && (q.hasUserSpecifiedDescription || q.whenToUse) && (q.loadedFrom === "skills" || q.loadedFrom === "plugin" || q.loadedFrom === "bundled" || q.disableModelInvocation));
    } catch (K) {
      return __$.KA(K instanceof Error ? K : Error("Failed to load slash command skills")), __$.h("Returning empty skills array due to load failure"), [];
    }
  });
});

// Register to shared state
__$.X0 = X0;
