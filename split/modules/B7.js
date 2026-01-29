// Module: B7
// Dependencies: maA, VW8, YsA, kx, Z1, C1, uIA, i6, JG, q6
//   ... and 24 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var B7 = k(() => {
  __$.maA();
  __$.VW8();
  __$.YsA();
  __$.kx();
  __$.Z1();
  __$.C1();
  __$.uIA();
  __$.i6();
  __$.JG();
  __$.q6();
  __$.b1();
  __$.vcA = new Map(), __$.fcA = new Map(), __$.NcA = new Set();
  __$._U6 = __$.z6(() => {
    if (!__$.ae()) return null;
    let A = __$.MEK(),
      K = "https://api.anthropic.com/",
      Y = __$.Dw(!0) || __$.b7() ? __$.BH() : {
        headers: {},
        error: "trust not established"
      };
    __$.GU6 = !Y.error;
    let w = new __$.qsA({
      apiHost: K,
      clientKey: __$.TW8,
      attributes: A,
      remoteEval: !0,
      cacheKeyAttributes: ["id"],
      ...(Y.error ? {} : {
        apiHostRequestHeaders: Y.headers
      }),
      ...{}
    });
    __$.RVA = w;
    let H = w.init({
      timeout: 5000
    }).then(async J => {
      if (__$.RVA !== w) return;
      let O = w.getPayload();
      if (O?.features) {
        let X = {};
        for (let [$, _] of Object.entries(O.features)) {
          let G = _;
          if ("value" in G && !("defaultValue" in G)) X[$] = {
            ...G,
            defaultValue: G.value
          };else X[$] = G;
          if (G.source === "experiment" && G.experimentResult) {
            let {
              experimentResult: Z,
              experiment: W
            } = G;
            if (W?.key && Z.variationId !== void 0) __$.vcA.set($, {
              experimentId: W.key,
              variationId: Z.variationId
            });
          }
        }
        await w.setPayload({
          ...O,
          features: X
        });
        for (let [$, _] of Object.entries(X)) if ("value" in _) __$.fcA.set($, _.value);
        for (let $ of __$.NcA) __$.BE1($);
        __$.NcA.clear();
      }
    }).catch(J => {});
    return process.on("beforeExit", () => __$.RVA?.destroy()), process.on("exit", () => __$.RVA?.destroy()), {
      client: w,
      initialized: H
    };
  }), __$.hVA = __$.z6(async () => {
    let A = __$._U6();
    if (!A) return null;
    if (!__$.GU6) {
      if (__$.Dw(!0) || __$.b7()) {
        if (!__$.BH().error) {
          if (__$.mE1(), A = __$._U6(), !A) return null;
        }
      }
    }
    return await A.initialized, __$.Hs2(), A.client;
  });
  __$.yVA = __$.z6(async (A, K) => {
    let q = await __$.PEK(A, K, !1),
      Y = __$.M1();
    if (__$.Q1A(Y.cachedGrowthBookFeatures?.[A], q)) return;
    __$.D6(z => ({
      ...z,
      cachedGrowthBookFeatures: {
        ...(z.cachedGrowthBookFeatures ?? {}),
        [A]: q
      }
    }));
  });
});

// Register to shared state
__$.B7 = B7;
