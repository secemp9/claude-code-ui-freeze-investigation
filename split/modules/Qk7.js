// Module: Qk7
// Dependencies: wTA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Qk7 = v((m_H, Fk7) => {
  var dpY = CA("os"),
    gk7 = CA("tty"),
    YL = __$.wTA(),
    {
      env: mG
    } = process,
    Cs;
  if (YL("no-color") || YL("no-colors") || YL("color=false") || YL("color=never")) Cs = 0;else if (YL("color") || YL("colors") || YL("color=true") || YL("color=always")) Cs = 1;
  if ("FORCE_COLOR" in mG) if (mG.FORCE_COLOR === "true") Cs = 1;else if (mG.FORCE_COLOR === "false") Cs = 0;else Cs = mG.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(mG.FORCE_COLOR, 10), 3);
  function nf6(A) {
    if (A === 0) return !1;
    return {
      level: A,
      hasBasic: !0,
      has256: A >= 2,
      has16m: A >= 3
    };
  }
  function rf6(A, K) {
    if (Cs === 0) return 0;
    if (YL("color=16m") || YL("color=full") || YL("color=truecolor")) return 3;
    if (YL("color=256")) return 2;
    if (A && !K && Cs === void 0) return 0;
    let q = Cs || 0;
    if (mG.TERM === "dumb") return q;
    if (process.platform === "win32") {
      let Y = dpY.release().split(".");
      if (Number(Y[0]) >= 10 && Number(Y[2]) >= 10586) return Number(Y[2]) >= 14931 ? 3 : 2;
      return 1;
    }
    if ("CI" in mG) {
      if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some(Y => Y in mG) || mG.CI_NAME === "codeship") return 1;
      return q;
    }
    if ("TEAMCITY_VERSION" in mG) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(mG.TEAMCITY_VERSION) ? 1 : 0;
    if (mG.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in mG) {
      let Y = parseInt((mG.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (mG.TERM_PROGRAM) {
        case "iTerm.app":
          return Y >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    if (/-256(color)?$/i.test(mG.TERM)) return 2;
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(mG.TERM)) return 1;
    if ("COLORTERM" in mG) return 1;
    return q;
  }
  function cpY(A) {
    let K = rf6(A, A && A.isTTY);
    return nf6(K);
  }
  Fk7.exports = {
    supportsColor: cpY,
    stdout: nf6(rf6(!0, gk7.isatty(1))),
    stderr: nf6(rf6(!0, gk7.isatty(2)))
  };
});

// Register to shared state
__$.Qk7 = Qk7;
