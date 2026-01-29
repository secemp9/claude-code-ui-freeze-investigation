// Module: HG4
// Dependencies: wTA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var HG4 = v((Uzw, wG4) => {
  var B69 = CA("os"),
    zG4 = CA("tty"),
    Fk = __$.wTA(),
    {
      env: GG
    } = process,
    Mr;
  if (Fk("no-color") || Fk("no-colors") || Fk("color=false") || Fk("color=never")) Mr = 0;else if (Fk("color") || Fk("colors") || Fk("color=true") || Fk("color=always")) Mr = 1;
  if ("FORCE_COLOR" in GG) if (GG.FORCE_COLOR === "true") Mr = 1;else if (GG.FORCE_COLOR === "false") Mr = 0;else Mr = GG.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(GG.FORCE_COLOR, 10), 3);
  function Pq6(A) {
    if (A === 0) return !1;
    return {
      level: A,
      hasBasic: !0,
      has256: A >= 2,
      has16m: A >= 3
    };
  }
  function Vq6(A, K) {
    if (Mr === 0) return 0;
    if (Fk("color=16m") || Fk("color=full") || Fk("color=truecolor")) return 3;
    if (Fk("color=256")) return 2;
    if (A && !K && Mr === void 0) return 0;
    let q = Mr || 0;
    if (GG.TERM === "dumb") return q;
    if (process.platform === "win32") {
      let Y = B69.release().split(".");
      if (Number(Y[0]) >= 10 && Number(Y[2]) >= 10586) return Number(Y[2]) >= 14931 ? 3 : 2;
      return 1;
    }
    if ("CI" in GG) {
      if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some(Y => Y in GG) || GG.CI_NAME === "codeship") return 1;
      return q;
    }
    if ("TEAMCITY_VERSION" in GG) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(GG.TEAMCITY_VERSION) ? 1 : 0;
    if (GG.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in GG) {
      let Y = parseInt((GG.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (GG.TERM_PROGRAM) {
        case "iTerm.app":
          return Y >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    if (/-256(color)?$/i.test(GG.TERM)) return 2;
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(GG.TERM)) return 1;
    if ("COLORTERM" in GG) return 1;
    return q;
  }
  function m69(A) {
    let K = Vq6(A, A && A.isTTY);
    return Pq6(K);
  }
  wG4.exports = {
    supportsColor: m69,
    stdout: Pq6(Vq6(!0, zG4.isatty(1))),
    stderr: Pq6(Vq6(!0, zG4.isatty(2)))
  };
});

// Register to shared state
__$.HG4 = HG4;
