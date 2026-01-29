// Module: ZQ6
// Dependencies: Xz, p7, e6, b1, Ev, Xu6, eB, nUA, l1, Sd
//   ... and 30 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZQ6 = k(() => {
  __$.Xz();
  __$.p7();
  __$.e6();
  __$.b1();
  __$.Ev();
  __$.Xu6();
  __$.eB();
  __$.nUA();
  __$.l1();
  __$.Sd();
  __$.$8();
  __$.GpA();
  __$.oZ();
  __$.of();
  __$.YC();
  __$.B7();
  __$.On2 = __$.z6(() => {
    let A = __$.zn2(),
      K = {
        minimumMessageTokensToInit: A.minimumMessageTokensToInit && A.minimumMessageTokensToInit > 0 ? A.minimumMessageTokensToInit : __$._pA.minimumMessageTokensToInit,
        minimumTokensBetweenUpdate: A.minimumTokensBetweenUpdate && A.minimumTokensBetweenUpdate > 0 ? A.minimumTokensBetweenUpdate : __$._pA.minimumTokensBetweenUpdate,
        toolCallsBetweenUpdates: A.toolCallsBetweenUpdates && A.toolCallsBetweenUpdates > 0 ? A.toolCallsBetweenUpdates : __$._pA.toolCallsBetweenUpdates
      };
    __$.gJK(K);
  }), __$.Xn2 = __$.vx(async function (A) {
    let {
      messages: K,
      toolUseContext: q,
      querySource: Y
    } = A;
    if (Y !== "repl_main_thread") return;
    if (!__$.Yn2()) return;
    if (__$.On2(), !__$.Hn2(K)) return;
    __$.xJK();
    let z = __$.xQA(q),
      {
        memoryPath: w,
        currentMemory: H
      } = await __$.Jn2(z),
      J = await __$.aJK(H, w);
    await __$.bS({
      promptMessages: [__$.t1({
        content: J
      })],
      cacheSafeParams: __$.u3A(A),
      canUseTool: __$.$n2(w),
      querySource: "session_memory",
      forkLabel: "session_memory",
      overrides: {
        readFileState: z.readFileState
      }
    });
    let O = K[K.length - 1],
      X = O ? __$.ro(O) : void 0,
      $ = __$.FJK();
    __$.n("tengu_session_memory_extraction", {
      input_tokens: X?.input_tokens,
      output_tokens: X?.output_tokens,
      cache_read_input_tokens: X?.cache_read_input_tokens ?? void 0,
      cache_creation_input_tokens: X?.cache_creation_input_tokens ?? void 0,
      config_min_message_tokens_to_init: $.minimumMessageTokensToInit,
      config_min_tokens_between_update: $.minimumTokensBetweenUpdate,
      config_tool_calls_between_updates: $.toolCallsBetweenUpdates
    }), __$.QJK(__$.WI(K)), __$._n2(K), __$.uJK();
  });
});

// Register to shared state
__$.ZQ6 = ZQ6;
