// Module: dh7
// Dependencies: Xj, ZW1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dh7 = v(Uh7 => {
  Object.defineProperty(Uh7, "__esModule", {
    value: !0
  });
  Uh7._makeTypedGet = Uh7._mergeOverride = Uh7._makeLayer = Uh7._makeExperiment = Uh7._makeDynamicConfig = Uh7._makeFeatureGate = void 0;
  var ztY = __$.Xj(),
    wtY = __$.ZW1(),
    HtY = "default";
  function Yv6(A, K, q, Y) {
    var z;
    return {
      name: A,
      details: K,
      ruleID: (z = q === null || q === void 0 ? void 0 : q.rule_id) !== null && z !== void 0 ? z : HtY,
      __evaluation: q,
      value: Y
    };
  }
  function JtY(A, K, q) {
    return Yv6(A, K, q, (q === null || q === void 0 ? void 0 : q.value) === !0);
  }
  Uh7._makeFeatureGate = JtY;
  function Qh7(A, K, q) {
    var Y;
    let z = (Y = q === null || q === void 0 ? void 0 : q.value) !== null && Y !== void 0 ? Y : {};
    return Object.assign(Object.assign({}, Yv6(A, K, q, z)), {
      get: uW1(A, q === null || q === void 0 ? void 0 : q.value)
    });
  }
  Uh7._makeDynamicConfig = Qh7;
  function OtY(A, K, q) {
    var Y;
    let z = Qh7(A, K, q);
    return Object.assign(Object.assign({}, z), {
      groupName: (Y = q === null || q === void 0 ? void 0 : q.group_name) !== null && Y !== void 0 ? Y : null
    });
  }
  Uh7._makeExperiment = OtY;
  function XtY(A, K, q, Y) {
    var z, w;
    return Object.assign(Object.assign({}, Yv6(A, K, q, void 0)), {
      get: uW1(A, q === null || q === void 0 ? void 0 : q.value, Y),
      groupName: (z = q === null || q === void 0 ? void 0 : q.group_name) !== null && z !== void 0 ? z : null,
      __value: (w = q === null || q === void 0 ? void 0 : q.value) !== null && w !== void 0 ? w : {}
    });
  }
  Uh7._makeLayer = XtY;
  function $tY(A, K, q, Y) {
    return Object.assign(Object.assign(Object.assign({}, A), K), {
      get: uW1(A.name, q, Y)
    });
  }
  Uh7._mergeOverride = $tY;
  function uW1(A, K, q) {
    return (Y, z) => {
      var w;
      let H = (w = K === null || K === void 0 ? void 0 : K[Y]) !== null && w !== void 0 ? w : null;
      if (H == null) return z !== null && z !== void 0 ? z : null;
      if (z != null && !(0, wtY._isTypeMatch)(H, z)) return ztY.Log.warn(`Parameter type mismatch. '${A}.${Y}' was found to be type '${typeof H}' but fallback/return type is '${typeof z}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`), z !== null && z !== void 0 ? z : null;
      return q === null || q === void 0 || q(Y), H;
    };
  }
  Uh7._makeTypedGet = uW1;
});

// Register to shared state
__$.dh7 = dh7;
