// Module: OX4
// Dependencies: zX4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var OX4 = v((K9w, JX4) => {
  var kt3 = __$.zX4(),
    Ct3 = typeof process === "object" && process && typeof process.cwd === "function" ? process.cwd() : ".",
    HX4 = [].concat(CA("module").builtinModules, "bootstrap_node", "node").map(A => new RegExp(`(?:\\((?:node:)?${A}(?:\\.js)?:\\d+:\\d+\\)$|^\\s*at (?:node:)?${A}(?:\\.js)?:\\d+:\\d+$)`));
  HX4.push(/\((?:node:)?internal\/[^:]+:\d+:\d+\)$/, /\s*at (?:node:)?internal\/[^:]+:\d+:\d+$/, /\/\.node-spawn-wrap-\w+-\w+\/node:\d+:\d+\)?$/);
  class gK6 {
    constructor(A) {
      if (A = {
        ignoredPackages: [],
        ...A
      }, "internals" in A === !1) A.internals = gK6.nodeInternals();
      if ("cwd" in A === !1) A.cwd = Ct3;
      this._cwd = A.cwd.replace(/\\/g, "/"), this._internals = [].concat(A.internals, Lt3(A.ignoredPackages)), this._wrapCallSite = A.wrapCallSite || !1;
    }
    static nodeInternals() {
      return [...HX4];
    }
    clean(A, K = 0) {
      if (K = " ".repeat(K), !Array.isArray(A)) A = A.split(`
`);
      if (!/^\s*at /.test(A[0]) && /^\s*at /.test(A[1])) A = A.slice(1);
      let q = !1,
        Y = null,
        z = [];
      return A.forEach(w => {
        if (w = w.replace(/\\/g, "/"), this._internals.some(J => J.test(w))) return;
        let H = /^\s*at /.test(w);
        if (q) w = w.trimEnd().replace(/^(\s+)at /, "$1");else if (w = w.trim(), H) w = w.slice(3);
        if (w = w.replace(`${this._cwd}/`, ""), w) if (H) {
          if (Y) z.push(Y), Y = null;
          z.push(w);
        } else q = !0, Y = w;
      }), z.map(w => `${K}${w}
`).join("");
    }
    captureString(A, K = this.captureString) {
      if (typeof A === "function") K = A, A = 1 / 0;
      let {
        stackTraceLimit: q
      } = Error;
      if (A) Error.stackTraceLimit = A;
      let Y = {};
      Error.captureStackTrace(Y, K);
      let {
        stack: z
      } = Y;
      return Error.stackTraceLimit = q, this.clean(z);
    }
    capture(A, K = this.capture) {
      if (typeof A === "function") K = A, A = 1 / 0;
      let {
        prepareStackTrace: q,
        stackTraceLimit: Y
      } = Error;
      if (Error.prepareStackTrace = (H, J) => {
        if (this._wrapCallSite) return J.map(this._wrapCallSite);
        return J;
      }, A) Error.stackTraceLimit = A;
      let z = {};
      Error.captureStackTrace(z, K);
      let {
        stack: w
      } = z;
      return Object.assign(Error, {
        prepareStackTrace: q,
        stackTraceLimit: Y
      }), w;
    }
    at(A = this.at) {
      let [K] = this.capture(1, A);
      if (!K) return {};
      let q = {
        line: K.getLineNumber(),
        column: K.getColumnNumber()
      };
      if (wX4(q, K.getFileName(), this._cwd), K.isConstructor()) Object.defineProperty(q, "constructor", {
        value: !0,
        configurable: !0
      });
      if (K.isEval()) q.evalOrigin = K.getEvalOrigin();
      if (K.isNative()) q.native = !0;
      let Y;
      try {
        Y = K.getTypeName();
      } catch (H) {}
      if (Y && Y !== "Object" && Y !== "[object Object]") q.type = Y;
      let z = K.getFunctionName();
      if (z) q.function = z;
      let w = K.getMethodName();
      if (w && z !== w) q.method = w;
      return q;
    }
    parseLine(A) {
      let K = A && A.match(Rt3);
      if (!K) return null;
      let q = K[1] === "new",
        Y = K[2],
        z = K[3],
        w = K[4],
        H = Number(K[5]),
        J = Number(K[6]),
        O = K[7],
        X = K[8],
        $ = K[9],
        _ = K[10] === "native",
        G = K[11] === ")",
        Z,
        W = {};
      if (X) W.line = Number(X);
      if ($) W.column = Number($);
      if (G && O) {
        let D = 0;
        for (let j = O.length - 1; j > 0; j--) if (O.charAt(j) === ")") D++;else if (O.charAt(j) === "(" && O.charAt(j - 1) === " ") {
          if (D--, D === -1 && O.charAt(j - 1) === " ") {
            let M = O.slice(0, j - 1);
            O = O.slice(j + 1), Y += ` (${M}`;
            break;
          }
        }
      }
      if (Y) {
        let D = Y.match(yt3);
        if (D) Y = D[1], Z = D[2];
      }
      if (wX4(W, O, this._cwd), q) Object.defineProperty(W, "constructor", {
        value: !0,
        configurable: !0
      });
      if (z) W.evalOrigin = z, W.evalLine = H, W.evalColumn = J, W.evalFile = w && w.replace(/\\/g, "/");
      if (_) W.native = !0;
      if (Y) W.function = Y;
      if (Z && Y !== Z) W.method = Z;
      return W;
    }
  }
  function wX4(A, K, q) {
    if (K) {
      if (K = K.replace(/\\/g, "/"), K.startsWith(`${q}/`)) K = K.slice(q.length + 1);
      A.file = K;
    }
  }
  function Lt3(A) {
    if (A.length === 0) return [];
    let K = A.map(q => kt3(q));
    return new RegExp(`[/\\\\]node_modules[/\\\\](?:${K.join("|")})[/\\\\][^:]+:\\d+:\\d+`);
  }
  var Rt3 = new RegExp("^(?:\\s*at )?(?:(new) )?(?:(.*?) \\()?(?:eval at ([^ ]+) \\((.+?):(\\d+):(\\d+)\\), )?(?:(.+?):(\\d+):(\\d+)|(native))(\\)?)$"),
    yt3 = /^(.*?) \[as (.*?)\]$/;
  JX4.exports = gK6;
});

// Register to shared state
__$.OX4 = OX4;
