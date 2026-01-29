// Module: q_K
// Dependencies: YC, gZ, St, of, AO1, G9A, fN1, PN1, GpA, C1
//   ... and 22 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var q_K = k(() => {
  __$.YC();
  __$.gZ();
  __$.St();
  __$.of();
  __$.AO1();
  __$.G9A();
  __$.fN1();
  __$.PN1();
  __$.GpA();
  __$.C1();
  __$.u5();
  __$.OW1();
  __$.l6();
  __$.g2();
  __$.Vz();
  __$.tb2 = {
    type: "local",
    name: "compact",
    description: "Clear conversation history but keep a summary in context. Optional: /compact [instructions for summarization]",
    isEnabled: () => !__$.P1(process.env.DISABLE_COMPACT),
    isHidden: !1,
    supportsNonInteractive: !0,
    argumentHint: "<optional custom summarization instructions>",
    async call(A, K) {
      __$.l7("compact");
      let {
        abortController: q,
        messages: Y
      } = K;
      if (Y.length === 0) throw Error("No messages to compact");
      let z = A.trim();
      try {
        if (!z) {
          let _ = await __$.MN1(Y, K.agentId);
          if (_) {
            __$.AX.cache.clear?.(), __$.t0.cache.clear?.(), __$.WPA();
            let G = __$.L5A("tip"),
              Z = __$.A$("app:toggleTranscript", "Global", "ctrl+o"),
              W = [...(K.options.verbose ? [] : [`(${Z} to see full summary)`]), ...(G ? [G] : [])];
            return {
              type: "compact",
              compactionResult: _,
              displayText: __$.O1.dim("Compacted " + W.join(`
`))
            };
          }
        }
        let H = (await __$.gd(Y, void 0, K)).messages,
          J = await __$.EMA(H, K, await __$.eb2(K, H), !1, z, !1);
        __$.j9A(void 0), __$.WPA(), __$.AX.cache.clear?.(), __$.t0.cache.clear?.();
        let O = __$.L5A("tip"),
          X = __$.A$("app:toggleTranscript", "Global", "ctrl+o"),
          $ = [...(K.options.verbose ? [] : [`(${X} to see full summary)`]), ...(J.userDisplayMessage ? [J.userDisplayMessage] : []), ...(O ? [O] : [])];
        return {
          type: "compact",
          compactionResult: J,
          displayText: __$.O1.dim("Compacted " + $.join(`
`))
        };
      } catch (w) {
        if (q.signal.aborted) throw Error("Compaction canceled.");else if (w instanceof Error && w.message === __$.XpA) throw Error(__$.XpA);else throw __$.KA(w instanceof Error ? w : Error(String(w))), Error(`Error during compaction: ${w}`);
      }
    },
    userFacingName() {
      return "compact";
    }
  }, __$.K_K = __$.tb2;
});

// Register to shared state
__$.q_K = q_K;
