// Module: O18
// Dependencies: VI1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var O18 = v((J18, KoA) => {
  J18.formatArgs = G6q;
  J18.save = Z6q;
  J18.load = W6q;
  J18.useColors = _6q;
  J18.storage = D6q();
  J18.destroy = (() => {
    let A = !1;
    return () => {
      if (!A) A = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    };
  })();
  J18.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
  function _6q() {
    if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return !0;
    if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
    let A;
    return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (A = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(A[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function G6q(A) {
    if (A[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + A[0] + (this.useColors ? "%c " : " ") + "+" + KoA.exports.humanize(this.diff), !this.useColors) return;
    let K = "color: " + this.color;
    A.splice(1, 0, K, "color: inherit");
    let q = 0,
      Y = 0;
    A[0].replace(/%[a-zA-Z%]/g, z => {
      if (z === "%%") return;
      if (q++, z === "%c") Y = q;
    }), A.splice(Y, 0, K);
  }
  J18.log = console.debug || console.log || (() => {});
  function Z6q(A) {
    try {
      if (A) J18.storage.setItem("debug", A);else J18.storage.removeItem("debug");
    } catch (K) {}
  }
  function W6q() {
    let A;
    try {
      A = J18.storage.getItem("debug");
    } catch (K) {}
    if (!A && typeof process < "u" && "env" in process) A = process.env.DEBUG;
    return A;
  }
  function D6q() {
    try {
      return localStorage;
    } catch (A) {}
  }
  KoA.exports = __$.VI1()(J18);
  var {
    formatters: j6q
  } = KoA.exports;
  j6q.j = function (A) {
    try {
      return JSON.stringify(A);
    } catch (K) {
      return "[UnexpectedJSONParseError]: " + K.message;
    }
  };
});

// Register to shared state
__$.O18 = O18;
