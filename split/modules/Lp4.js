// Module: Lp4
// Dependencies: Uz6, pz6, o21

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Lp4 = v(kp4 => {
  Object.defineProperty(kp4, "__esModule", {
    value: !0
  });
  kp4.AwsCrc32 = void 0;
  var vp4 = __$.Uz6(),
    dz6 = __$.pz6(),
    Ep4 = __$.o21(),
    QQ9 = function () {
      function A() {
        this.crc32 = new Ep4.Crc32();
      }
      return A.prototype.update = function (K) {
        if ((0, dz6.isEmptyData)(K)) return;
        this.crc32.update((0, dz6.convertToBuffer)(K));
      }, A.prototype.digest = function () {
        return vp4.__awaiter(this, void 0, void 0, function () {
          return vp4.__generator(this, function (K) {
            return [2, (0, dz6.numToUint8)(this.crc32.digest())];
          });
        });
      }, A.prototype.reset = function () {
        this.crc32 = new Ep4.Crc32();
      }, A;
    }();
  kp4.AwsCrc32 = QQ9;
});

// Register to shared state
__$.Lp4 = Lp4;
