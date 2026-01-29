// Module: Qr4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Qr4 = v(gr4 => {
  Object.defineProperty(gr4, "__esModule", {
    value: !0
  });
  gr4.Colours = void 0;
  class s3 {
    static isEnabled(A) {
      return A.isTTY && (typeof A.getColorDepth === "function" ? A.getColorDepth() > 2 : !0);
    }
    static refresh() {
      if (s3.enabled = s3.isEnabled(process.stderr), !this.enabled) s3.reset = "", s3.bright = "", s3.dim = "", s3.red = "", s3.green = "", s3.yellow = "", s3.blue = "", s3.magenta = "", s3.cyan = "", s3.white = "", s3.grey = "";else s3.reset = "\x1B[0m", s3.bright = "\x1B[1m", s3.dim = "\x1B[2m", s3.red = "\x1B[31m", s3.green = "\x1B[32m", s3.yellow = "\x1B[33m", s3.blue = "\x1B[34m", s3.magenta = "\x1B[35m", s3.cyan = "\x1B[36m", s3.white = "\x1B[37m", s3.grey = "\x1B[90m";
    }
  }
  gr4.Colours = s3;
  s3.enabled = !1;
  s3.reset = "";
  s3.bright = "";
  s3.dim = "";
  s3.red = "";
  s3.green = "";
  s3.yellow = "";
  s3.blue = "";
  s3.magenta = "";
  s3.cyan = "";
  s3.white = "";
  s3.grey = "";
  s3.refresh();
});

// Register to shared state
__$.Qr4 = Qr4;
