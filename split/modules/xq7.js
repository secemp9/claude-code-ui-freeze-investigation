// Module: xq7
// Dependencies: Vq7, kq7, i$6, f2Y, M2Y, hq7, q_6, Sq7, j2Y, Cq7
//   ... and 8 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xq7 = k(() => {
  __$.Vq7();
  __$.kq7();
  __$.i$6();
  __$.f2Y = __$.M2Y(__$.hq7.execFile), __$.q_6 = __$.Sq7.dirname(__$.j2Y(import.meta.url)), __$.Cq7 = __$.Sq7.join(__$.q_6, "xdg-open"), {
    platform: __$.PGA,
    arch: __$.Lq7
  } = __$.K_6;
  __$.lo = {};
  __$.co(__$.lo, "chrome", () => __$.xJ1({
    darwin: "google chrome",
    win32: "chrome",
    linux: ["google-chrome", "google-chrome-stable", "chromium"]
  }, {
    wsl: {
      ia32: "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
      x64: ["/mnt/c/Program Files/Google/Chrome/Application/chrome.exe", "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe"]
    }
  }));
  __$.co(__$.lo, "brave", () => __$.xJ1({
    darwin: "brave browser",
    win32: "brave",
    linux: ["brave-browser", "brave"]
  }, {
    wsl: {
      ia32: "/mnt/c/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe",
      x64: ["/mnt/c/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe", "/mnt/c/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe"]
    }
  }));
  __$.co(__$.lo, "firefox", () => __$.xJ1({
    darwin: "firefox",
    win32: String.raw`C:\Program Files\Mozilla Firefox\firefox.exe`,
    linux: "firefox"
  }, {
    wsl: "/mnt/c/Program Files/Mozilla Firefox/firefox.exe"
  }));
  __$.co(__$.lo, "edge", () => __$.xJ1({
    darwin: "microsoft edge",
    win32: "msedge",
    linux: ["microsoft-edge", "microsoft-edge-dev"]
  }, {
    wsl: "/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
  }));
  __$.co(__$.lo, "browser", () => "browser");
  __$.co(__$.lo, "browserPrivate", () => "browserPrivate");
  __$.E2Y = __$.T2Y;
});

// Register to shared state
__$.xq7 = xq7;
