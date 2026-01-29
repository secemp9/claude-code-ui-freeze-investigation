// Module: nq6
// Dependencies: x4A, nZ4, aZ4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nq6 = v(sZ4 => {
  Object.defineProperty(sZ4, "__esModule", {
    value: !0
  });
  sZ4.baggageEntryMetadataFromString = sZ4.createBaggage = void 0;
  var E49 = __$.x4A(),
    k49 = __$.nZ4(),
    C49 = __$.aZ4(),
    L49 = E49.DiagAPI.instance();
  function R49(A = {}) {
    return new k49.BaggageImpl(new Map(Object.entries(A)));
  }
  sZ4.createBaggage = R49;
  function y49(A) {
    if (typeof A !== "string") L49.error(`Cannot create baggage metadata from unknown type: ${typeof A}`), A = "";
    return {
      __TYPE__: C49.baggageEntryMetadataSymbol,
      toString() {
        return A;
      }
    };
  }
  sZ4.baggageEntryMetadataFromString = y49;
});

// Register to shared state
__$.nq6 = nq6;
