// Module: wE6
// Dependencies: $D1, Zg7, GD1, Tg7, kB, YE6, zE6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wE6 = v(Rg7 => {
  var uf = Rg7;
  uf.build = "minimal";
  uf.Writer = __$.$D1();
  uf.BufferWriter = __$.Zg7();
  uf.Reader = __$.GD1();
  uf.BufferReader = __$.Tg7();
  uf.util = __$.kB();
  uf.rpc = __$.YE6();
  uf.roots = __$.zE6();
  uf.configure = Lg7;
  function Lg7() {
    uf.util._configure(), uf.Writer._configure(uf.BufferWriter), uf.Reader._configure(uf.BufferReader);
  }
  Lg7();
});

// Register to shared state
__$.wE6 = wE6;
