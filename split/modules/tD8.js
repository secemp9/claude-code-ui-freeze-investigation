// Module: tD8
// Dependencies: $u1, Uu1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tD8 = v(sD8 => {
  Object.defineProperty(sD8, "__esModule", {
    value: !0
  });
  var kyq = __$.$u1(),
    pu1 = __$.Uu1();
  function Cyq(A) {
    let K = [];
    function q() {
      return A === void 0 || K.length < A;
    }
    function Y(H) {
      return K.splice(K.indexOf(H), 1)[0];
    }
    function z(H) {
      if (!q()) return pu1.rejectedSyncPromise(new kyq.SentryError("Not adding Promise because buffer limit was reached."));
      let J = H();
      if (K.indexOf(J) === -1) K.push(J);
      return J.then(() => Y(J)).then(null, () => Y(J).then(null, () => {})), J;
    }
    function w(H) {
      return new pu1.SyncPromise((J, O) => {
        let X = K.length;
        if (!X) return J(!0);
        let $ = setTimeout(() => {
          if (H && H > 0) J(!1);
        }, H);
        K.forEach(_ => {
          pu1.resolvedSyncPromise(_).then(() => {
            if (! --X) clearTimeout($), J(!0);
          }, O);
        });
      });
    }
    return {
      $: K,
      add: z,
      drain: w
    };
  }
  sD8.makePromiseBuffer = Cyq;
});

// Register to shared state
__$.tD8 = tD8;
