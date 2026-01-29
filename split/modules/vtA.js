// Module: vtA
// Dependencies: pN, kHA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vtA = v(EN8 => {
  Object.defineProperty(EN8, "__esModule", {
    value: !0
  });
  var NtA = __$.pN(),
    Dnq = __$.kHA(),
    TtA = -1,
    jnq = () => {
      if (NtA.WINDOW.document && NtA.WINDOW.document.visibilityState) TtA = NtA.WINDOW.document.visibilityState === "hidden" && !NtA.WINDOW.document.prerendering ? 0 : 1 / 0;
    },
    Mnq = () => {
      Dnq.onHidden(({
        timeStamp: A
      }) => {
        TtA = A;
      }, !0);
    },
    Pnq = () => {
      if (TtA < 0) jnq(), Mnq();
      return {
        get firstHiddenTime() {
          return TtA;
        }
      };
    };
  EN8.getVisibilityWatcher = Pnq;
});

// Register to shared state
__$.vtA = vtA;
