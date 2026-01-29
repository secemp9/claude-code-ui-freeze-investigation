// Module: ym
// Dependencies: yTA, p7, Ki, Kh, z6, BB2

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ym = k(() => {
  __$.yTA();
  __$.p7();
  __$.Ki();
  __$.Kh = __$.z6(() => {
    if (process.env.VISUAL?.trim()) return process.env.VISUAL.trim();
    if (process.env.EDITOR?.trim()) return process.env.EDITOR.trim();
    if (process.platform === "win32") return "start /wait notepad";
    return ["code", "vi", "nano"].find(K => __$.BB2(K));
  });
});

// Register to shared state
__$.ym = ym;
