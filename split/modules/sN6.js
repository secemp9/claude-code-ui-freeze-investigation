// Module: sN6
// Dependencies: ER7, lR7, zj, kN6, yN6, IZ1, SZ1, JDA, mN6, bN6
//   ... and 11 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sN6 = v((wrY, YP) => {
  var iR7 = __$.ER7(),
    zrY = __$.lR7();
  function aN6(A, K) {
    return function () {
      throw Error("Function yaml." + A + " is removed in js-yaml 4. Use yaml." + K + " instead, which is now safe by default.");
    };
  }
  wrY.Type = __$.zj();
  wrY.Schema = __$.kN6();
  wrY.FAILSAFE_SCHEMA = __$.yN6();
  wrY.JSON_SCHEMA = __$.IZ1();
  wrY.CORE_SCHEMA = __$.IZ1();
  wrY.DEFAULT_SCHEMA = __$.SZ1();
  wrY.load = iR7.load;
  wrY.loadAll = iR7.loadAll;
  wrY.dump = zrY.dump;
  wrY.YAMLException = __$.JDA();
  wrY.types = {
    binary: __$.mN6(),
    float: __$.bN6(),
    map: __$.RN6(),
    null: __$.IN6(),
    pairs: __$.FN6(),
    set: __$.QN6(),
    timestamp: __$.xN6(),
    bool: __$.SN6(),
    int: __$.hN6(),
    merge: __$.uN6(),
    omap: __$.gN6(),
    seq: __$.LN6(),
    str: __$.CN6()
  };
  wrY.safeLoad = aN6("safeLoad", "load");
  wrY.safeLoadAll = aN6("safeLoadAll", "loadAll");
  wrY.safeDump = aN6("safeDump", "dump");
});

// Register to shared state
__$.sN6 = sN6;
