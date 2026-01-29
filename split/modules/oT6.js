// Module: oT6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oT6 = v(aS7 => {
  Object.defineProperty(aS7, "__esModule", {
    value: !0
  });
  aS7.createMemoKey = aS7.MemoPrefix = void 0;
  aS7.MemoPrefix = {
    _gate: "g",
    _dynamicConfig: "c",
    _experiment: "e",
    _layer: "l",
    _paramStore: "p"
  };
  var HsY = new Set([]),
    JsY = new Set(["userPersistedValues"]);
  function OsY(A, K, q) {
    let Y = `${A}|${K}`;
    if (!q) return Y;
    for (let z of Object.keys(q)) {
      if (JsY.has(z)) return;
      if (HsY.has(z)) Y += `|${z}=true`;else Y += `|${z}=${q[z]}`;
    }
    return Y;
  }
  aS7.createMemoKey = OsY;
});

// Register to shared state
__$.oT6 = oT6;
