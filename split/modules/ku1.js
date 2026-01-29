// Module: ku1
// Dependencies: hE, vu1, YD, ag

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ku1 = v(PD8 => {
  Object.defineProperty(PD8, "__esModule", {
    value: !0
  });
  var rLq = __$.hE(),
    oLq = __$.vu1(),
    DD8 = __$.YD(),
    JvA = __$.ag();
  function aLq(A) {
    JvA.addHandler("fetch", A), JvA.maybeInstrument("fetch", sLq);
  }
  function sLq() {
    if (!oLq.supportsNativeFetch()) return;
    rLq.fill(DD8.GLOBAL_OBJ, "fetch", function (A) {
      return function (...K) {
        let {
            method: q,
            url: Y
          } = MD8(K),
          z = {
            args: K,
            fetchData: {
              method: q,
              url: Y
            },
            startTimestamp: Date.now()
          };
        return JvA.triggerHandlers("fetch", {
          ...z
        }), A.apply(DD8.GLOBAL_OBJ, K).then(w => {
          let H = {
            ...z,
            endTimestamp: Date.now(),
            response: w
          };
          return JvA.triggerHandlers("fetch", H), w;
        }, w => {
          let H = {
            ...z,
            endTimestamp: Date.now(),
            error: w
          };
          throw JvA.triggerHandlers("fetch", H), w;
        });
      };
    });
  }
  function Eu1(A, K) {
    return !!A && typeof A === "object" && !!A[K];
  }
  function jD8(A) {
    if (typeof A === "string") return A;
    if (!A) return "";
    if (Eu1(A, "url")) return A.url;
    if (A.toString) return A.toString();
    return "";
  }
  function MD8(A) {
    if (A.length === 0) return {
      method: "GET",
      url: ""
    };
    if (A.length === 2) {
      let [q, Y] = A;
      return {
        url: jD8(q),
        method: Eu1(Y, "method") ? String(Y.method).toUpperCase() : "GET"
      };
    }
    let K = A[0];
    return {
      url: jD8(K),
      method: Eu1(K, "method") ? String(K.method).toUpperCase() : "GET"
    };
  }
  PD8.addFetchInstrumentationHandler = aLq;
  PD8.parseFetchArgs = MD8;
});

// Register to shared state
__$.ku1 = ku1;
