// Module: dB4
// Dependencies: bB4, BB4, FB4, pB4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dB4 = v(p$A => {
  Object.defineProperty(p$A, "__esModule", {
    value: !0
  });
  p$A.uint32ArrayFrom = p$A.numToUint8 = p$A.isEmptyData = p$A.convertToBuffer = void 0;
  var Ay9 = __$.bB4();
  Object.defineProperty(p$A, "convertToBuffer", {
    enumerable: !0,
    get: function () {
      return Ay9.convertToBuffer;
    }
  });
  var Ky9 = __$.BB4();
  Object.defineProperty(p$A, "isEmptyData", {
    enumerable: !0,
    get: function () {
      return Ky9.isEmptyData;
    }
  });
  var qy9 = __$.FB4();
  Object.defineProperty(p$A, "numToUint8", {
    enumerable: !0,
    get: function () {
      return qy9.numToUint8;
    }
  });
  var Yy9 = __$.pB4();
  Object.defineProperty(p$A, "uint32ArrayFrom", {
    enumerable: !0,
    get: function () {
      return Yy9.uint32ArrayFrom;
    }
  });
});

// Register to shared state
__$.dB4 = dB4;
