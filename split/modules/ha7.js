// Module: ha7
// Dependencies: ka7, Sa7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ha7 = v(YM1 => {
  Object.defineProperty(YM1, "__esModule", {
    value: !0
  });
  YM1.RandomIdGenerator = YM1.BatchSpanProcessor = void 0;
  var $X2 = __$.ka7();
  Object.defineProperty(YM1, "BatchSpanProcessor", {
    enumerable: !0,
    get: function () {
      return $X2.BatchSpanProcessor;
    }
  });
  var _X2 = __$.Sa7();
  Object.defineProperty(YM1, "RandomIdGenerator", {
    enumerable: !0,
    get: function () {
      return _X2.RandomIdGenerator;
    }
  });
});

// Register to shared state
__$.ha7 = ha7;
