// Module: U14
// Dependencies: Uz, PA6, fA6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var U14 = v(F14 => {
  Object.defineProperty(F14, "__esModule", {
    value: !0
  });
  F14.AwsCrc32 = void 0;
  var m14 = __$.Uz(),
    VA6 = __$.PA6(),
    g14 = __$.fA6(),
    UP3 = function () {
      function A() {
        this.crc32 = new g14.Crc32();
      }
      return A.prototype.update = function (K) {
        if ((0, VA6.isEmptyData)(K)) return;
        this.crc32.update((0, VA6.convertToBuffer)(K));
      }, A.prototype.digest = function () {
        return m14.__awaiter(this, void 0, void 0, function () {
          return m14.__generator(this, function (K) {
            return [2, (0, VA6.numToUint8)(this.crc32.digest())];
          });
        });
      }, A.prototype.reset = function () {
        this.crc32 = new g14.Crc32();
      }, A;
    }();
  F14.AwsCrc32 = UP3;
});

// Register to shared state
__$.U14 = U14;
