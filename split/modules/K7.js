// Module: K7
// Dependencies: p7, i6, q6, x4, rJA, Mq1, kq1, I8, kx, n3
//   ... and 27 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var K7 = k(() => {
  __$.p7();
  __$.i6();
  __$.q6();
  __$.x4();
  __$.rJA();
  __$.Mq1();
  __$.kq1();
  __$.I8();
  __$.kx();
  __$.n3();
  __$.uz();
  __$.C1();
  __$.JG();
  __$.Iq1();
  __$.IH();
  __$.zyA();
  __$.B7();
  __$.qXA = ["sonnet", "opus", "haiku", "sonnet[1m]", "opusplan"], __$.Xa3 = __$.c6A, __$.hH4 = __$.Xa3.firstParty, __$.YXA = [...__$.qXA, "inherit"];
  __$.Ga3 = __$.z6(() => {
    return null;
  });
  __$.s46 = {
    value: "sonnet",
    label: "Sonnet",
    description: `Sonnet 4.5 · Best for everyday tasks · ${__$.cn(__$.A4A)}`,
    descriptionForModel: "Sonnet 4.5 - best for everyday tasks. Generally recommended for most coding tasks"
  }, __$.iH4 = {
    value: "sonnet[1m]",
    label: "Sonnet (1M context)",
    description: `Sonnet 4.5 for long sessions · ${__$.cn(__$.c46)}`,
    descriptionForModel: "Sonnet 4.5 with 1M context window - for long sessions with large codebases"
  }, __$.rH4 = {
    value: "haiku",
    label: "Haiku",
    description: `Haiku 4.5 · Fastest for quick answers · ${__$.cn(__$.i46)}`,
    descriptionForModel: "Haiku 4.5 - fastest for quick answers. Lower cost but less capable than Sonnet 4.5."
  }, __$.Da3 = {
    value: "haiku",
    label: "Haiku",
    description: `Haiku 3.5 for simple tasks · ${__$.cn(__$.l46)}`,
    descriptionForModel: "Haiku 3.5 - faster and lower cost, but less capable than Sonnet. Use for simple tasks."
  };
  __$.Ma3 = {
    value: "opus",
    label: "Opus",
    description: "Opus 4.5 · Most capable for complex work"
  }, __$.gH4 = {
    value: "sonnet[1m]",
    label: "Sonnet (1M context)",
    description: "Sonnet 4.5 with 1M context · Uses rate limits faster"
  }, __$.FH4 = {
    value: "sonnet",
    label: "Sonnet",
    description: "Sonnet 4.5 · Best for everyday tasks"
  }, __$.Sq1 = {
    value: "haiku",
    label: "Haiku",
    description: "Haiku 4.5 · Fastest for quick answers"
  };
});

// Register to shared state
__$.K7 = K7;
