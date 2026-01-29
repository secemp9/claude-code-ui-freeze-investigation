// Module: is
// Dependencies: y5A, GW1, dT6, Xj, NgA, rp, jgA, PS7, uS7, mS7
//   ... and 30 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var is = v(eK => {
  var PtY = eK && eK.__createBinding || (Object.create ? function (A, K, q, Y) {
      if (Y === void 0) Y = q;
      var z = Object.getOwnPropertyDescriptor(K, q);
      if (!z || ("get" in z ? !K.__esModule : z.writable || z.configurable)) z = {
        enumerable: !0,
        get: function () {
          return K[q];
        }
      };
      Object.defineProperty(A, Y, z);
    } : function (A, K, q, Y) {
      if (Y === void 0) Y = q;
      A[Y] = K[q];
    }),
    A9 = eK && eK.__exportStar || function (A, K) {
      for (var q in A) if (q !== "default" && !Object.prototype.hasOwnProperty.call(K, q)) PtY(K, A, q);
    };
  Object.defineProperty(eK, "__esModule", {
    value: !0
  });
  eK.Storage = eK.Log = eK.EventLogger = eK.Diagnostics = void 0;
  __$.y5A();
  var VtY = __$.GW1();
  Object.defineProperty(eK, "Diagnostics", {
    enumerable: !0,
    get: function () {
      return VtY.Diagnostics;
    }
  });
  var ftY = __$.dT6();
  Object.defineProperty(eK, "EventLogger", {
    enumerable: !0,
    get: function () {
      return ftY.EventLogger;
    }
  });
  var oh7 = __$.Xj();
  Object.defineProperty(eK, "Log", {
    enumerable: !0,
    get: function () {
      return oh7.Log;
    }
  });
  var NtY = __$.NgA(),
    TtY = __$.rp();
  Object.defineProperty(eK, "Storage", {
    enumerable: !0,
    get: function () {
      return TtY.Storage;
    }
  });
  A9(__$.y5A(), eK);
  A9(__$.jgA(), eK);
  A9(__$.PS7(), eK);
  A9(__$.uS7(), eK);
  A9(__$.GW1(), eK);
  A9(__$.mS7(), eK);
  A9(__$.rT6(), eK);
  A9(__$.lS7(), eK);
  A9(__$.nS7(), eK);
  A9(__$.CDA(), eK);
  A9(__$.oS7(), eK);
  A9(__$.Xj(), eK);
  A9(__$.oT6(), eK);
  A9(__$.MgA(), eK);
  A9(__$.Ch7(), eK);
  A9(__$.Rh7(), eK);
  A9(__$.Ih7(), eK);
  A9(__$.I5A(), eK);
  A9(__$.SW1(), eK);
  A9(__$.bW1(), eK);
  A9(__$.LW1(), eK);
  A9(__$.hh7(), eK);
  A9(__$.Av6(), eK);
  A9(__$.uh7(), eK);
  A9(__$.uT6(), eK);
  A9(__$.NgA(), eK);
  A9(__$.mh7(), eK);
  A9(__$.Fh7(), eK);
  A9(__$.dh7(), eK);
  A9(__$.lh7(), eK);
  A9(__$.lT6(), eK);
  A9(__$.rp(), eK);
  A9(__$.iT6(), eK);
  A9(__$.ZW1(), eK);
  A9(__$.gT6(), eK);
  A9(__$.kW1(), eK);
  A9(__$.vW1(), eK);
  A9(__$.rh7(), eK);
  A9(__$.tT6(), eK);
  __STATSIG__ = Object.assign(Object.assign({}, __STATSIG__ !== null && __STATSIG__ !== void 0 ? __STATSIG__ : {}), {
    Log: oh7.Log,
    SDK_VERSION: NtY.SDK_VERSION
  });
});

// Register to shared state
__$.is = is;
