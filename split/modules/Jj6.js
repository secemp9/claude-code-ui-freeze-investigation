// Module: Jj6
// Dependencies: m3, bY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Jj6 = v((L4H, OG7) => {
  var LqA = __$.m3();
  __$.bY();
  LqA.mgf = LqA.mgf || {};
  var BvY = OG7.exports = LqA.mgf.mgf1 = LqA.mgf1 = LqA.mgf1 || {};
  BvY.create = function (A) {
    var K = {
      generate: function (q, Y) {
        var z = new LqA.util.ByteBuffer(),
          w = Math.ceil(Y / A.digestLength);
        for (var H = 0; H < w; H++) {
          var J = new LqA.util.ByteBuffer();
          J.putInt32(H), A.start(), A.update(q + J.getBytes()), z.putBuffer(A.digest());
        }
        return z.truncate(z.length() - Y), z.getBytes();
      }
    };
    return K;
  };
});

// Register to shared state
__$.Jj6 = Jj6;
