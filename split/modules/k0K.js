// Module: k0K
// Dependencies: p7, C1, aQ, QN1, Z1, E0K, z6, oQ, wS2, rQ
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var k0K = k(() => {
  __$.p7();
  __$.C1();
  __$.aQ();
  __$.QN1();
  __$.Z1();
  __$.E0K = __$.z6(async A => {
    try {
      return (await __$.oQ("output-styles", A)).map(({
        filePath: Y,
        frontmatter: z,
        content: w,
        source: H
      }) => {
        try {
          let O = __$.wS2(Y).replace(/\.md$/, ""),
            X = z.name || O,
            $ = z.description || __$.rQ(w, `Custom ${O} output style`),
            _ = z["keep-coding-instructions"],
            G = _ === !0 || _ === "true" ? !0 : _ === !1 || _ === "false" ? !1 : void 0;
          if (z["force-for-plugin"] !== void 0) __$.h(`Output style "${X}" has force-for-plugin set, but this option only applies to plugin output styles. Ignoring.`, {
            level: "warn"
          });
          return {
            name: X,
            description: $,
            prompt: w.trim(),
            source: H,
            keepCodingInstructions: G
          };
        } catch (J) {
          return __$.KA(J instanceof Error ? J : Error(String(J))), null;
        }
      }).filter(Y => Y !== null);
    } catch (K) {
      return __$.KA(K instanceof Error ? K : Error(String(K))), [];
    }
  });
});

// Register to shared state
__$.k0K = k0K;
