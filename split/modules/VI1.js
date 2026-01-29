// Module: VI1
// Dependencies: PI1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var VI1 = v((bZz, H18) => {
  function $6q(A) {
    q.debug = q, q.default = q, q.coerce = O, q.disable = H, q.enable = z, q.enabled = J, q.humanize = __$.PI1(), q.destroy = X, Object.keys(A).forEach($ => {
      q[$] = A[$];
    }), q.names = [], q.skips = [], q.formatters = {};
    function K($) {
      let _ = 0;
      for (let G = 0; G < $.length; G++) _ = (_ << 5) - _ + $.charCodeAt(G), _ |= 0;
      return q.colors[Math.abs(_) % q.colors.length];
    }
    q.selectColor = K;
    function q($) {
      let _,
        G = null,
        Z,
        W;
      function D(...j) {
        if (!D.enabled) return;
        let M = D,
          P = Number(new Date()),
          f = P - (_ || P);
        if (M.diff = f, M.prev = _, M.curr = P, _ = P, j[0] = q.coerce(j[0]), typeof j[0] !== "string") j.unshift("%O");
        let N = 0;
        j[0] = j[0].replace(/%([a-zA-Z%])/g, (C, R) => {
          if (C === "%%") return "%";
          N++;
          let x = q.formatters[R];
          if (typeof x === "function") {
            let y = j[N];
            C = x.call(M, y), j.splice(N, 1), N--;
          }
          return C;
        }), q.formatArgs.call(M, j), (M.log || q.log).apply(M, j);
      }
      if (D.namespace = $, D.useColors = q.useColors(), D.color = q.selectColor($), D.extend = Y, D.destroy = q.destroy, Object.defineProperty(D, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => {
          if (G !== null) return G;
          if (Z !== q.namespaces) Z = q.namespaces, W = q.enabled($);
          return W;
        },
        set: j => {
          G = j;
        }
      }), typeof q.init === "function") q.init(D);
      return D;
    }
    function Y($, _) {
      let G = q(this.namespace + (typeof _ > "u" ? ":" : _) + $);
      return G.log = this.log, G;
    }
    function z($) {
      q.save($), q.namespaces = $, q.names = [], q.skips = [];
      let _ = (typeof $ === "string" ? $ : "").trim().replace(" ", ",").split(",").filter(Boolean);
      for (let G of _) if (G[0] === "-") q.skips.push(G.slice(1));else q.names.push(G);
    }
    function w($, _) {
      let G = 0,
        Z = 0,
        W = -1,
        D = 0;
      while (G < $.length) if (Z < _.length && (_[Z] === $[G] || _[Z] === "*")) {
        if (_[Z] === "*") W = Z, D = G, Z++;else G++, Z++;
      } else if (W !== -1) Z = W + 1, D++, G = D;else return !1;
      while (Z < _.length && _[Z] === "*") Z++;
      return Z === _.length;
    }
    function H() {
      let $ = [...q.names, ...q.skips.map(_ => "-" + _)].join(",");
      return q.enable(""), $;
    }
    function J($) {
      for (let _ of q.skips) if (w($, _)) return !1;
      for (let _ of q.names) if (w($, _)) return !0;
      return !1;
    }
    function O($) {
      if ($ instanceof Error) return $.stack || $.message;
      return $;
    }
    function X() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return q.enable(q.load()), q;
  }
  H18.exports = $6q;
});

// Register to shared state
__$.VI1 = VI1;
