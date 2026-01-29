// Module: tB1
// Dependencies: H8, xE, KF

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tB1 = v(nV8 => {
  Object.defineProperty(nV8, "__esModule", {
    value: !0
  });
  var lpq = __$.H8(),
    ipq = __$.xE(),
    cV8 = __$.KF(),
    pV8,
    lV8 = "FunctionToString",
    dV8 = new WeakMap(),
    npq = () => {
      return {
        name: lV8,
        setupOnce() {
          pV8 = Function.prototype.toString;
          try {
            Function.prototype.toString = function (...A) {
              let K = lpq.getOriginalFunction(this),
                q = dV8.has(ipq.getClient()) && K !== void 0 ? K : this;
              return pV8.apply(q, A);
            };
          } catch (A) {}
        },
        setup(A) {
          dV8.set(A, !0);
        }
      };
    },
    iV8 = cV8.defineIntegration(npq),
    rpq = cV8.convertIntegrationFnToClass(lV8, iV8);
  nV8.FunctionToString = rpq;
  nV8.functionToStringIntegration = iV8;
});

// Register to shared state
__$.tB1 = tB1;
