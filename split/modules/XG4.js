// Module: XG4
// Dependencies: HG4, wTA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var XG4 = v((pzw, OG4) => {
  var g69 = __$.HG4(),
    BXA = __$.wTA();
  function JG4(A) {
    if (/^\d{3,4}$/.test(A)) {
      let q = /(\d{1,2})(\d{2})/.exec(A);
      return {
        major: 0,
        minor: parseInt(q[1], 10),
        patch: parseInt(q[2], 10)
      };
    }
    let K = (A || "").split(".").map(q => parseInt(q, 10));
    return {
      major: K[0],
      minor: K[1],
      patch: K[2]
    };
  }
  function fq6(A) {
    let {
      env: K
    } = process;
    if ("FORCE_HYPERLINK" in K) return !(K.FORCE_HYPERLINK.length > 0 && parseInt(K.FORCE_HYPERLINK, 10) === 0);
    if (BXA("no-hyperlink") || BXA("no-hyperlinks") || BXA("hyperlink=false") || BXA("hyperlink=never")) return !1;
    if (BXA("hyperlink=true") || BXA("hyperlink=always")) return !0;
    if ("NETLIFY" in K) return !0;
    if (!g69.supportsColor(A)) return !1;
    if (A && !A.isTTY) return !1;
    if (process.platform === "win32") return !1;
    if ("CI" in K) return !1;
    if ("TEAMCITY_VERSION" in K) return !1;
    if ("TERM_PROGRAM" in K) {
      let q = JG4(K.TERM_PROGRAM_VERSION);
      switch (K.TERM_PROGRAM) {
        case "iTerm.app":
          if (q.major === 3) return q.minor >= 1;
          return q.major > 3;
        case "WezTerm":
          return q.major >= 20200620;
        case "vscode":
          return q.major > 1 || q.major === 1 && q.minor >= 72;
      }
    }
    if ("VTE_VERSION" in K) {
      if (K.VTE_VERSION === "0.50.0") return !1;
      let q = JG4(K.VTE_VERSION);
      return q.major > 0 || q.minor >= 50;
    }
    return !1;
  }
  OG4.exports = {
    supportsHyperlink: fq6,
    stdout: fq6(process.stdout),
    stderr: fq6(process.stderr)
  };
});

// Register to shared state
__$.XG4 = XG4;
