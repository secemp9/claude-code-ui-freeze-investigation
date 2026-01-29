// Module: zj1
// Dependencies: od7, Bk6, zc7, Jc7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zj1 = v((EEH, Oc7) => {
  var $t = Oc7.exports = __$.od7();
  $t.build = "full";
  $t.tokenize = __$.Bk6();
  $t.parse = __$.zc7();
  $t.common = __$.Jc7();
  $t.Root._configure($t.Type, $t.parse, $t.common);
});

// Register to shared state
__$.zj1 = zj1;
