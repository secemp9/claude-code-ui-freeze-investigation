// Module: YqK
// Dependencies: p7, _P, WP2, z6, eI6, tI6, JV1, GP2, ZP2, qqK
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var YqK = k(() => {
  __$.p7();
  __$._P();
  __$.WP2 = __$.z6(async () => {
    try {
      let {
          parseCommand: A
        } = await Promise.resolve().then(() => (__$.eI6(), __$.tI6)),
        K = await A("echo test");
      if (!K) return !1;
      return K.tree.delete(), !0;
    } catch {
      return !1;
    }
  }), __$.JV1 = {
    async parse(A) {
      if (!A) return null;
      if (await __$.WP2()) try {
        let {
            parseCommand: q
          } = await Promise.resolve().then(() => (__$.eI6(), __$.tI6)),
          Y = await q(A);
        if (Y) {
          let z = __$.GP2(Y.rootNode),
            w = __$.ZP2(Y.rootNode);
          return Y.tree.delete(), new __$.qqK(A, z, w);
        }
      } catch {}
      return new __$.KqK(A);
    }
  };
});

// Register to shared state
__$.YqK = YqK;
