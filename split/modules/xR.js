// Module: xR
// Dependencies: Xb, YD

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xR = v(mW8 => {
  Object.defineProperty(mW8, "__esModule", {
    value: !0
  });
  var nkq = __$.Xb(),
    Hu1 = __$.YD(),
    rkq = "Sentry Logger ",
    Ju1 = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    Ou1 = {};
  function BW8(A) {
    if (!("console" in Hu1.GLOBAL_OBJ)) return A();
    let K = Hu1.GLOBAL_OBJ.console,
      q = {},
      Y = Object.keys(Ou1);
    Y.forEach(z => {
      let w = Ou1[z];
      q[z] = K[z], K[z] = w;
    });
    try {
      return A();
    } finally {
      Y.forEach(z => {
        K[z] = q[z];
      });
    }
  }
  function okq() {
    let A = !1,
      K = {
        enable: () => {
          A = !0;
        },
        disable: () => {
          A = !1;
        },
        isEnabled: () => A
      };
    if (nkq.DEBUG_BUILD) Ju1.forEach(q => {
      K[q] = (...Y) => {
        if (A) BW8(() => {
          Hu1.GLOBAL_OBJ.console[q](`${rkq}[${q}]:`, ...Y);
        });
      };
    });else Ju1.forEach(q => {
      K[q] = () => {
        return;
      };
    });
    return K;
  }
  var akq = okq();
  mW8.CONSOLE_LEVELS = Ju1;
  mW8.consoleSandbox = BW8;
  mW8.logger = akq;
  mW8.originalConsoleMethods = Ou1;
});

// Register to shared state
__$.xR = xR;
