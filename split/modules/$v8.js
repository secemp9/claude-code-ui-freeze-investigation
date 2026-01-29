// Module: $v8
// Dependencies: z6A, Hv8, Ov8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $v8 = v(Xv8 => {
  Object.defineProperty(Xv8, "__esModule", {
    value: !0
  });
  var vsq = __$.z6A(),
    Esq = __$.Hv8(),
    ksq = __$.Ov8();
  function Csq() {
    if (vsq.NODE_VERSION.major >= 14) ksq.setHooksAsyncContextStrategy();else Esq.setDomainAsyncContextStrategy();
  }
  Xv8.setNodeAsyncContextStrategy = Csq;
});

// Register to shared state
__$.$v8 = $v8;
