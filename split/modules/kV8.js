// Module: kV8
// Dependencies: H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kV8 = v(EV8 => {
  Object.defineProperty(EV8, "__esModule", {
    value: !0
  });
  var oB1 = __$.H8(),
    TV8 = new Map(),
    NV8 = new Set();
  function Gpq(A) {
    if (!oB1.GLOBAL_OBJ._sentryModuleMetadata) return;
    for (let K of Object.keys(oB1.GLOBAL_OBJ._sentryModuleMetadata)) {
      let q = oB1.GLOBAL_OBJ._sentryModuleMetadata[K];
      if (NV8.has(K)) continue;
      NV8.add(K);
      let Y = A(K);
      for (let z of Y.reverse()) if (z.filename) {
        TV8.set(z.filename, q);
        break;
      }
    }
  }
  function vV8(A, K) {
    return Gpq(A), TV8.get(K);
  }
  function Zpq(A, K) {
    try {
      K.exception.values.forEach(q => {
        if (!q.stacktrace) return;
        for (let Y of q.stacktrace.frames || []) {
          if (!Y.filename) continue;
          let z = vV8(A, Y.filename);
          if (z) Y.module_metadata = z;
        }
      });
    } catch (q) {}
  }
  function Wpq(A) {
    try {
      A.exception.values.forEach(K => {
        if (!K.stacktrace) return;
        for (let q of K.stacktrace.frames || []) delete q.module_metadata;
      });
    } catch (K) {}
  }
  EV8.addMetadataToStackFrames = Zpq;
  EV8.getMetadataForUrl = vV8;
  EV8.stripMetadataFromStackFrames = Wpq;
});

// Register to shared state
__$.kV8 = kV8;
