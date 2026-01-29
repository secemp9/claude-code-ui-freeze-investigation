// Module: z18
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var z18 = v(Y6q => {
  var t1q = CA("url").parse,
    e1q = {
      ftp: 21,
      gopher: 70,
      http: 80,
      https: 443,
      ws: 80,
      wss: 443
    },
    A6q = String.prototype.endsWith || function (A) {
      return A.length <= this.length && this.indexOf(A, this.length - A.length) !== -1;
    };
  function K6q(A) {
    var K = typeof A === "string" ? t1q(A) : A || {},
      q = K.protocol,
      Y = K.host,
      z = K.port;
    if (typeof Y !== "string" || !Y || typeof q !== "string") return "";
    if (q = q.split(":", 1)[0], Y = Y.replace(/:\d*$/, ""), z = parseInt(z) || e1q[q] || 0, !q6q(Y, z)) return "";
    var w = QzA("npm_config_" + q + "_proxy") || QzA(q + "_proxy") || QzA("npm_config_proxy") || QzA("all_proxy");
    if (w && w.indexOf("://") === -1) w = q + "://" + w;
    return w;
  }
  function q6q(A, K) {
    var q = (QzA("npm_config_no_proxy") || QzA("no_proxy")).toLowerCase();
    if (!q) return !0;
    if (q === "*") return !1;
    return q.split(/[,\s]/).every(function (Y) {
      if (!Y) return !0;
      var z = Y.match(/^(.+):(\d+)$/),
        w = z ? z[1] : Y,
        H = z ? parseInt(z[2]) : 0;
      if (H && H !== K) return !0;
      if (!/^[.*]/.test(w)) return A !== w;
      if (w.charAt(0) === "*") w = w.slice(1);
      return !A6q.call(A, w);
    });
  }
  function QzA(A) {
    return process.env[A.toLowerCase()] || process.env[A.toUpperCase()] || "";
  }
  Y6q.getProxyForUrl = K6q;
});

// Register to shared state
__$.z18 = z18;
