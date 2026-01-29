// Module: fB4
// Dependencies: W26

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fB4 = v(PB4 => {
  Object.defineProperty(PB4, "__esModule", {
    value: !0
  });
  PB4.RawSha256 = void 0;
  var zC = __$.W26(),
    gR9 = function () {
      function A() {
        this.state = Int32Array.from(zC.INIT), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1;
      }
      return A.prototype.update = function (K) {
        if (this.finished) throw Error("Attempted to update an already finished hash.");
        var q = 0,
          Y = K.byteLength;
        if (this.bytesHashed += Y, this.bytesHashed * 8 > zC.MAX_HASHABLE_LENGTH) throw Error("Cannot hash more than 2^53 - 1 bits");
        while (Y > 0) if (this.buffer[this.bufferLength++] = K[q++], Y--, this.bufferLength === zC.BLOCK_SIZE) this.hashBuffer(), this.bufferLength = 0;
      }, A.prototype.digest = function () {
        if (!this.finished) {
          var K = this.bytesHashed * 8,
            q = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength),
            Y = this.bufferLength;
          if (q.setUint8(this.bufferLength++, 128), Y % zC.BLOCK_SIZE >= zC.BLOCK_SIZE - 8) {
            for (var z = this.bufferLength; z < zC.BLOCK_SIZE; z++) q.setUint8(z, 0);
            this.hashBuffer(), this.bufferLength = 0;
          }
          for (var z = this.bufferLength; z < zC.BLOCK_SIZE - 8; z++) q.setUint8(z, 0);
          q.setUint32(zC.BLOCK_SIZE - 8, Math.floor(K / 4294967296), !0), q.setUint32(zC.BLOCK_SIZE - 4, K), this.hashBuffer(), this.finished = !0;
        }
        var w = new Uint8Array(zC.DIGEST_LENGTH);
        for (var z = 0; z < 8; z++) w[z * 4] = this.state[z] >>> 24 & 255, w[z * 4 + 1] = this.state[z] >>> 16 & 255, w[z * 4 + 2] = this.state[z] >>> 8 & 255, w[z * 4 + 3] = this.state[z] >>> 0 & 255;
        return w;
      }, A.prototype.hashBuffer = function () {
        var K = this,
          q = K.buffer,
          Y = K.state,
          z = Y[0],
          w = Y[1],
          H = Y[2],
          J = Y[3],
          O = Y[4],
          X = Y[5],
          $ = Y[6],
          _ = Y[7];
        for (var G = 0; G < zC.BLOCK_SIZE; G++) {
          if (G < 16) this.temp[G] = (q[G * 4] & 255) << 24 | (q[G * 4 + 1] & 255) << 16 | (q[G * 4 + 2] & 255) << 8 | q[G * 4 + 3] & 255;else {
            var Z = this.temp[G - 2],
              W = (Z >>> 17 | Z << 15) ^ (Z >>> 19 | Z << 13) ^ Z >>> 10;
            Z = this.temp[G - 15];
            var D = (Z >>> 7 | Z << 25) ^ (Z >>> 18 | Z << 14) ^ Z >>> 3;
            this.temp[G] = (W + this.temp[G - 7] | 0) + (D + this.temp[G - 16] | 0);
          }
          var j = (((O >>> 6 | O << 26) ^ (O >>> 11 | O << 21) ^ (O >>> 25 | O << 7)) + (O & X ^ ~O & $) | 0) + (_ + (zC.KEY[G] + this.temp[G] | 0) | 0) | 0,
            M = ((z >>> 2 | z << 30) ^ (z >>> 13 | z << 19) ^ (z >>> 22 | z << 10)) + (z & w ^ z & H ^ w & H) | 0;
          _ = $, $ = X, X = O, O = J + j | 0, J = H, H = w, w = z, z = j + M | 0;
        }
        Y[0] += z, Y[1] += w, Y[2] += H, Y[3] += J, Y[4] += O, Y[5] += X, Y[6] += $, Y[7] += _;
      }, A;
    }();
  PB4.RawSha256 = gR9;
});

// Register to shared state
__$.fB4 = fB4;
