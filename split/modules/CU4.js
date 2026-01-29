// Module: CU4
// Dependencies: s81

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var CU4 = v(l21 => {
  Object.defineProperty(l21, "__esModule", {
    value: !0
  });
  l21.STSClient = l21.AssumeRoleCommand = void 0;
  var kU4 = __$.s81();
  Object.defineProperty(l21, "AssumeRoleCommand", {
    enumerable: !0,
    get: function () {
      return kU4.AssumeRoleCommand;
    }
  });
  Object.defineProperty(l21, "STSClient", {
    enumerable: !0,
    get: function () {
      return kU4.STSClient;
    }
  });
});

// Register to shared state
__$.CU4 = CU4;
