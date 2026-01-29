// Module: ya6
// Dependencies: Pa6, Va6, ka6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ya6 = v((L0z, Ra6) => {
  var YsK = CA("path"),
    Ca6 = __$.Pa6(),
    La6 = __$.Va6(),
    zsK = __$.ka6(),
    wsK = process.platform === "win32",
    HsK = /\.(?:com|exe)$/i,
    JsK = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
  function OsK(A) {
    A.file = Ca6(A);
    let K = A.file && zsK(A.file);
    if (K) return A.args.unshift(A.file), A.command = K, Ca6(A);
    return A.file;
  }
  function XsK(A) {
    if (!wsK) return A;
    let K = OsK(A),
      q = !HsK.test(K);
    if (A.options.forceShell || q) {
      let Y = JsK.test(K);
      A.command = YsK.normalize(A.command), A.command = La6.command(A.command), A.args = A.args.map(w => La6.argument(w, Y));
      let z = [A.command].concat(A.args).join(" ");
      A.args = ["/d", "/s", "/c", `"${z}"`], A.command = process.env.comspec || "cmd.exe", A.options.windowsVerbatimArguments = !0;
    }
    return A;
  }
  function $sK(A, K, q) {
    if (K && !Array.isArray(K)) q = K, K = null;
    K = K ? K.slice(0) : [], q = Object.assign({}, q);
    let Y = {
      command: A,
      args: K,
      options: q,
      file: void 0,
      original: {
        command: A,
        args: K
      }
    };
    return q.shell ? Y : XsK(Y);
  }
  Ra6.exports = $sK;
});

// Register to shared state
__$.ya6 = ya6;
