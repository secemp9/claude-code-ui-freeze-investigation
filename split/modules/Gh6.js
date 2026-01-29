// Module: Gh6
// Dependencies: bMA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Gh6 = v((TtH, q3K) => {
  var K3K = __$.bMA();
  q3K.exports = _h6;
  function _h6() {
    K3K.call(this), this.view = null, this.detail = 0;
  }
  _h6.prototype = Object.create(K3K.prototype, {
    constructor: {
      value: _h6
    },
    initUIEvent: {
      value: function (A, K, q, Y, z) {
        this.initEvent(A, K, q), this.view = Y, this.detail = z;
      }
    }
  });
});

// Register to shared state
__$.Gh6 = Gh6;
