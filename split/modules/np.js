// Module: np
// Dependencies: rP, C1, B5, IoY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var np = k(() => {
  __$.rP();
  __$.C1();
  __$.B5();
  __$.IoY = {
    macos: ["pbcopy"],
    linux: ["xclip -selection clipboard", "wl-copy"],
    wsl: ["clip.exe"],
    windows: ["clip"],
    unknown: ["xclip -selection clipboard", "wl-copy"]
  };
});

// Register to shared state
__$.np = np;
