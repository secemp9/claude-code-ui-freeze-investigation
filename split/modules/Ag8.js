// Module: Ag8
// Dependencies: Uz

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ag8 = v(tm8 => {
  Object.defineProperty(tm8, "__esModule", {
    value: !0
  });
  tm8.randomUUID = void 0;
  var rZ5 = __$.Uz(),
    sm8 = rZ5.__importDefault(CA("crypto"));
  tm8.randomUUID = sm8.default.randomUUID.bind(sm8.default);
});

// Register to shared state
__$.Ag8 = Ag8;
