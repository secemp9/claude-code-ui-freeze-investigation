// Module: zq1
// Dependencies: r8A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zq1 = v((f8w, Yw4) => {
  var {
      maxUnsigned16Bit: Hn3
    } = __$.r8A(),
    M46,
    sRA = null,
    p0A = 16386;
  try {
    M46 = CA("node:crypto");
  } catch {
    M46 = {
      randomFillSync: function (K, q, Y) {
        for (let z = 0; z < K.length; ++z) K[z] = Math.random() * 255 | 0;
        return K;
      }
    };
  }
  function Jn3() {
    if (p0A === 16386) p0A = 0, M46.randomFillSync(sRA ??= Buffer.allocUnsafe(16386), 0, 16386);
    return [sRA[p0A++], sRA[p0A++], sRA[p0A++], sRA[p0A++]];
  }
  class qw4 {
    constructor(A) {
      this.frameData = A;
    }
    createFrame(A) {
      let K = this.frameData,
        q = Jn3(),
        Y = K?.byteLength ?? 0,
        z = Y,
        w = 6;
      if (Y > Hn3) w += 8, z = 127;else if (Y > 125) w += 2, z = 126;
      let H = Buffer.allocUnsafe(Y + w);
      H[0] = H[1] = 0, H[0] |= 128, H[0] = (H[0] & 240) + A; /*! ws. MIT License. Einar Otto Stangvik <einaros@gmail.com> */
      if (H[w - 4] = q[0], H[w - 3] = q[1], H[w - 2] = q[2], H[w - 1] = q[3], H[1] = z, z === 126) H.writeUInt16BE(Y, 2);else if (z === 127) H[2] = H[3] = 0, H.writeUIntBE(Y, 4, 6);
      H[1] |= 128;
      for (let J = 0; J < Y; ++J) H[w + J] = K[J] ^ q[J & 3];
      return H;
    }
  }
  Yw4.exports = {
    WebsocketFrameSend: qw4
  };
});

// Register to shared state
__$.zq1 = zq1;
