// Module: hgA
// Dependencies: RK, GS

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hgA = v(_u7 => {
  Object.defineProperty(_u7, "__esModule", {
    value: !0
  });
  _u7.isValidName = _u7.isDescriptorCompatibleWith = _u7.createInstrumentDescriptorWithView = _u7.createInstrumentDescriptor = void 0;
  var Xu7 = __$.RK(),
    EA2 = __$.GS();
  function kA2(A, K, q) {
    if (!$u7(A)) Xu7.diag.warn(`Invalid metric name: "${A}". The metric name should be a ASCII string with a length no greater than 255 characters.`);
    return {
      name: A,
      type: K,
      description: q?.description ?? "",
      unit: q?.unit ?? "",
      valueType: q?.valueType ?? Xu7.ValueType.DOUBLE,
      advice: q?.advice ?? {}
    };
  }
  _u7.createInstrumentDescriptor = kA2;
  function CA2(A, K) {
    return {
      name: A.name ?? K.name,
      description: A.description ?? K.description,
      type: K.type,
      unit: K.unit,
      valueType: K.valueType,
      advice: K.advice
    };
  }
  _u7.createInstrumentDescriptorWithView = CA2;
  function LA2(A, K) {
    return (0, EA2.equalsCaseInsensitive)(A.name, K.name) && A.unit === K.unit && A.type === K.type && A.valueType === K.valueType;
  }
  _u7.isDescriptorCompatibleWith = LA2;
  var RA2 = /^[a-z][a-z0-9_.\-/]{0,254}$/i;
  function $u7(A) {
    return A.match(RA2) != null;
  }
  _u7.isValidName = $u7;
});

// Register to shared state
__$.hgA = hgA;
