// Module: itA
// Dependencies: sq, H8, gm1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var itA = v(_E8 => {
  Object.defineProperty(_E8, "__esModule", {
    value: !0
  });
  var ltA = __$.sq(),
    JE8 = __$.H8(),
    Zeq = __$.gm1(),
    OE8 = "OnUnhandledRejection",
    Weq = (A = {}) => {
      let K = A.mode || "warn";
      return {
        name: OE8,
        setupOnce() {},
        setup(q) {
          global.process.on("unhandledRejection", $E8(q, {
            mode: K
          }));
        }
      };
    },
    XE8 = ltA.defineIntegration(Weq),
    Deq = ltA.convertIntegrationFnToClass(OE8, XE8);
  function $E8(A, K) {
    return function (Y, z) {
      if (ltA.getClient() !== A) return;
      ltA.captureException(Y, {
        originalException: z,
        captureContext: {
          extra: {
            unhandledPromiseRejection: !0
          }
        },
        mechanism: {
          handled: !1,
          type: "onunhandledrejection"
        }
      }), jeq(Y, K);
    };
  }
  function jeq(A, K) {
    let q = "This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason:";
    if (K.mode === "warn") JE8.consoleSandbox(() => {
      console.warn(q), console.error(A && A.stack ? A.stack : A);
    });else if (K.mode === "strict") JE8.consoleSandbox(() => {
      console.warn(q);
    }), Zeq.logAndExitProcess(A);
  }
  _E8.OnUnhandledRejection = Deq;
  _E8.makeUnhandledPromiseHandler = $E8;
  _E8.onUnhandledRejectionIntegration = XE8;
});

// Register to shared state
__$.itA = itA;
