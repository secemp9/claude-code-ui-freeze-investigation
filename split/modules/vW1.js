// Module: vW1
// Dependencies: I5A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vW1 = v($S7 => {
  Object.defineProperty($S7, "__esModule", {
    value: !0
  });
  $S7._notifyVisibilityChanged = $S7._subscribeToVisiblityChanged = $S7._isUnloading = $S7._isCurrentlyVisible = void 0;
  var NW1 = __$.I5A(),
    TW1 = "foreground",
    QT6 = "background",
    XS7 = [],
    FT6 = TW1,
    UT6 = !1,
    kaY = () => {
      return FT6 === TW1;
    };
  $S7._isCurrentlyVisible = kaY;
  var CaY = () => UT6;
  $S7._isUnloading = CaY;
  var LaY = A => {
    XS7.unshift(A);
  };
  $S7._subscribeToVisiblityChanged = LaY;
  var RaY = A => {
    if (A === FT6) return;
    FT6 = A, XS7.forEach(K => K(A));
  };
  $S7._notifyVisibilityChanged = RaY;
  (0, NW1._addWindowEventListenerSafe)("focus", () => {
    UT6 = !1, $S7._notifyVisibilityChanged(TW1);
  });
  (0, NW1._addWindowEventListenerSafe)("blur", () => $S7._notifyVisibilityChanged(QT6));
  (0, NW1._addWindowEventListenerSafe)("beforeunload", () => {
    UT6 = !0, $S7._notifyVisibilityChanged(QT6);
  });
  (0, NW1._addDocumentEventListenerSafe)("visibilitychange", () => {
    $S7._notifyVisibilityChanged(document.visibilityState === "visible" ? TW1 : QT6);
  });
});

// Register to shared state
__$.vW1 = vW1;
