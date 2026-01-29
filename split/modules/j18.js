// Module: j18
// Dependencies: G18, VI1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var j18 = v((W18, zoA) => {
  var R6q = CA("tty"),
    YoA = CA("util");
  W18.init = u6q;
  W18.log = h6q;
  W18.formatArgs = I6q;
  W18.save = b6q;
  W18.load = x6q;
  W18.useColors = y6q;
  W18.destroy = YoA.deprecate(() => {}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  W18.colors = [6, 2, 3, 4, 5, 1];
  try {
    let A = __$.G18();
    if (A && (A.stderr || A).level >= 2) W18.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221];
  } catch (A) {}
  W18.inspectOpts = Object.keys(process.env).filter(A => {
    return /^debug_/i.test(A);
  }).reduce((A, K) => {
    let q = K.substring(6).toLowerCase().replace(/_([a-z])/g, (z, w) => {
        return w.toUpperCase();
      }),
      Y = process.env[K];
    if (/^(yes|on|true|enabled)$/i.test(Y)) Y = !0;else if (/^(no|off|false|disabled)$/i.test(Y)) Y = !1;else if (Y === "null") Y = null;else Y = Number(Y);
    return A[q] = Y, A;
  }, {});
  function y6q() {
    return "colors" in W18.inspectOpts ? Boolean(W18.inspectOpts.colors) : R6q.isatty(process.stderr.fd);
  }
  function I6q(A) {
    let {
      namespace: K,
      useColors: q
    } = this;
    if (q) {
      let Y = this.color,
        z = "\x1B[3" + (Y < 8 ? Y : "8;5;" + Y),
        w = `  ${z};1m${K} \x1B[0m`;
      A[0] = w + A[0].split(`
`).join(`
` + w), A.push(z + "m+" + zoA.exports.humanize(this.diff) + "\x1B[0m");
    } else A[0] = S6q() + K + " " + A[0];
  }
  function S6q() {
    if (W18.inspectOpts.hideDate) return "";
    return new Date().toISOString() + " ";
  }
  function h6q(...A) {
    return process.stderr.write(YoA.formatWithOptions(W18.inspectOpts, ...A) + `
`);
  }
  function b6q(A) {
    if (A) process.env.DEBUG = A;else delete process.env.DEBUG;
  }
  function x6q() {
    return process.env.DEBUG;
  }
  function u6q(A) {
    A.inspectOpts = {};
    let K = Object.keys(W18.inspectOpts);
    for (let q = 0; q < K.length; q++) A.inspectOpts[K[q]] = W18.inspectOpts[K[q]];
  }
  zoA.exports = __$.VI1()(W18);
  var {
    formatters: Z18
  } = zoA.exports;
  Z18.o = function (A) {
    return this.inspectOpts.colors = this.useColors, YoA.inspect(A, this.inspectOpts).split(`
`).map(K => K.trim()).join(" ");
  };
  Z18.O = function (A) {
    return this.inspectOpts.colors = this.useColors, YoA.inspect(A, this.inspectOpts);
  };
});

// Register to shared state
__$.j18 = j18;
