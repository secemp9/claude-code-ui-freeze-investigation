// Module: Pa6
// Dependencies: Ga6, Wa6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Pa6 = v((v0z, Ma6) => {
  var Da6 = CA("path"),
    iaK = __$.Ga6(),
    naK = __$.Wa6();
  function ja6(A, K) {
    let q = A.options.env || process.env,
      Y = process.cwd(),
      z = A.options.cwd != null,
      w = z && process.chdir !== void 0 && !process.chdir.disabled;
    if (w) try {
      process.chdir(A.options.cwd);
    } catch (J) {}
    let H;
    try {
      H = iaK.sync(A.command, {
        path: q[naK({
          env: q
        })],
        pathExt: K ? Da6.delimiter : void 0
      });
    } catch (J) {} finally {
      if (w) process.chdir(Y);
    }
    if (H) H = Da6.resolve(z ? A.options.cwd : "", H);
    return H;
  }
  function raK(A) {
    return ja6(A) || ja6(A, !0);
  }
  Ma6.exports = raK;
});

// Register to shared state
__$.Pa6 = Pa6;
