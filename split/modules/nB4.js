// Module: nB4
// Dependencies: Z26, W26, fB4, dB4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nB4 = v(lB4 => {
  Object.defineProperty(lB4, "__esModule", {
    value: !0
  });
  lB4.Sha256 = void 0;
  var cB4 = __$.Z26(),
    J21 = __$.W26(),
    H21 = __$.fB4(),
    j26 = __$.dB4(),
    wy9 = function () {
      function A(K) {
        this.secret = K, this.hash = new H21.RawSha256(), this.reset();
      }
      return A.prototype.update = function (K) {
        if ((0, j26.isEmptyData)(K) || this.error) return;
        try {
          this.hash.update((0, j26.convertToBuffer)(K));
        } catch (q) {
          this.error = q;
        }
      }, A.prototype.digestSync = function () {
        if (this.error) throw this.error;
        if (this.outer) {
          if (!this.outer.finished) this.outer.update(this.hash.digest());
          return this.outer.digest();
        }
        return this.hash.digest();
      }, A.prototype.digest = function () {
        return cB4.__awaiter(this, void 0, void 0, function () {
          return cB4.__generator(this, function (K) {
            return [2, this.digestSync()];
          });
        });
      }, A.prototype.reset = function () {
        if (this.hash = new H21.RawSha256(), this.secret) {
          this.outer = new H21.RawSha256();
          var K = Hy9(this.secret),
            q = new Uint8Array(J21.BLOCK_SIZE);
          q.set(K);
          for (var Y = 0; Y < J21.BLOCK_SIZE; Y++) K[Y] ^= 54, q[Y] ^= 92;
          this.hash.update(K), this.outer.update(q);
          for (var Y = 0; Y < K.byteLength; Y++) K[Y] = 0;
        }
      }, A;
    }();
  lB4.Sha256 = wy9;
  function Hy9(A) {
    var K = (0, j26.convertToBuffer)(A);
    if (K.byteLength > J21.BLOCK_SIZE) {
      var q = new H21.RawSha256();
      q.update(K), K = q.digest();
    }
    var Y = new Uint8Array(J21.BLOCK_SIZE);
    return Y.set(K), Y;
  }
});

// Register to shared state
__$.nB4 = nB4;
