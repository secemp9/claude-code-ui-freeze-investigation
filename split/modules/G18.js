// Module: G18
// Dependencies: wTA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var G18 = v((BZz, _18) => {
  var E6q = CA("os"),
    $18 = CA("tty"),
    EE = __$.wTA(),
    {
      env: d_
    } = process,
    qoA;
  if (EE("no-color") || EE("no-colors") || EE("color=false") || EE("color=never")) qoA = 0;else if (EE("color") || EE("colors") || EE("color=true") || EE("color=always")) qoA = 1;
  function k6q() {
    if ("FORCE_COLOR" in d_) {
      if (d_.FORCE_COLOR === "true") return 1;
      if (d_.FORCE_COLOR === "false") return 0;
      return d_.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(d_.FORCE_COLOR, 10), 3);
    }
  }
  function C6q(A) {
    if (A === 0) return !1;
    return {
      level: A,
      hasBasic: !0,
      has256: A >= 2,
      has16m: A >= 3
    };
  }
  function L6q(A, {
    streamIsTTY: K,
    sniffFlags: q = !0
  } = {}) {
    let Y = k6q();
    if (Y !== void 0) qoA = Y;
    let z = q ? qoA : Y;
    if (z === 0) return 0;
    if (q) {
      if (EE("color=16m") || EE("color=full") || EE("color=truecolor")) return 3;
      if (EE("color=256")) return 2;
    }
    if (A && !K && z === void 0) return 0;
    let w = z || 0;
    if (d_.TERM === "dumb") return w;
    if (process.platform === "win32") {
      let H = E6q.release().split(".");
      if (Number(H[0]) >= 10 && Number(H[2]) >= 10586) return Number(H[2]) >= 14931 ? 3 : 2;
      return 1;
    }
    if ("CI" in d_) {
      if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE", "DRONE"].some(H => H in d_) || d_.CI_NAME === "codeship") return 1;
      return w;
    }
    if ("TEAMCITY_VERSION" in d_) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(d_.TEAMCITY_VERSION) ? 1 : 0;
    if (d_.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in d_) {
      let H = Number.parseInt((d_.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (d_.TERM_PROGRAM) {
        case "iTerm.app":
          return H >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    if (/-256(color)?$/i.test(d_.TERM)) return 2;
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(d_.TERM)) return 1;
    if ("COLORTERM" in d_) return 1;
    return w;
  }
  function fI1(A, K = {}) {
    let q = L6q(A, {
      streamIsTTY: A && A.isTTY,
      ...K
    });
    return C6q(q);
  }
  _18.exports = {
    supportsColor: fI1,
    stdout: fI1({
      isTTY: $18.isatty(1)
    }),
    stderr: fI1({
      isTTY: $18.isatty(2)
    })
  };
});

// Register to shared state
__$.G18 = G18;
