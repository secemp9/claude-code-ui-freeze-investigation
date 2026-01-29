// Module: Wh6
// Dependencies: Gh6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Wh6 = v((vtH, z3K) => {
  var Y3K = __$.Gh6();
  z3K.exports = Zh6;
  function Zh6() {
    Y3K.call(this), this.screenX = this.screenY = this.clientX = this.clientY = 0, this.ctrlKey = this.altKey = this.shiftKey = this.metaKey = !1, this.button = 0, this.buttons = 1, this.relatedTarget = null;
  }
  Zh6.prototype = Object.create(Y3K.prototype, {
    constructor: {
      value: Zh6
    },
    initMouseEvent: {
      value: function (A, K, q, Y, z, w, H, J, O, X, $, _, G, Z, W) {
        switch (this.initEvent(A, K, q, Y, z), this.screenX = w, this.screenY = H, this.clientX = J, this.clientY = O, this.ctrlKey = X, this.altKey = $, this.shiftKey = _, this.metaKey = G, this.button = Z, Z) {
          case 0:
            this.buttons = 1;
            break;
          case 1:
            this.buttons = 4;
            break;
          case 2:
            this.buttons = 2;
            break;
          default:
            this.buttons = 0;
            break;
        }
        this.relatedTarget = W;
      }
    },
    getModifierState: {
      value: function (A) {
        switch (A) {
          case "Alt":
            return this.altKey;
          case "Control":
            return this.ctrlKey;
          case "Shift":
            return this.shiftKey;
          case "Meta":
            return this.metaKey;
          default:
            return !1;
        }
      }
    }
  });
});

// Register to shared state
__$.Wh6 = Wh6;
