// Module: gD6
// Dependencies: m3, bY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gD6 = v((H4H, H_7) => {
  var LG = __$.m3();
  __$.bY();
  LG.cipher = LG.cipher || {};
  var g9 = H_7.exports = LG.cipher.modes = LG.cipher.modes || {};
  g9.ecb = function (A) {
    A = A || {}, this.name = "ECB", this.cipher = A.cipher, this.blockSize = A.blockSize || 16, this._ints = this.blockSize / 4, this._inBlock = Array(this._ints), this._outBlock = Array(this._ints);
  };
  g9.ecb.prototype.start = function (A) {};
  g9.ecb.prototype.encrypt = function (A, K, q) {
    if (A.length() < this.blockSize && !(q && A.length() > 0)) return !0;
    for (var Y = 0; Y < this._ints; ++Y) this._inBlock[Y] = A.getInt32();
    this.cipher.encrypt(this._inBlock, this._outBlock);
    for (var Y = 0; Y < this._ints; ++Y) K.putInt32(this._outBlock[Y]);
  };
  g9.ecb.prototype.decrypt = function (A, K, q) {
    if (A.length() < this.blockSize && !(q && A.length() > 0)) return !0;
    for (var Y = 0; Y < this._ints; ++Y) this._inBlock[Y] = A.getInt32();
    this.cipher.decrypt(this._inBlock, this._outBlock);
    for (var Y = 0; Y < this._ints; ++Y) K.putInt32(this._outBlock[Y]);
  };
  g9.ecb.prototype.pad = function (A, K) {
    var q = A.length() === this.blockSize ? this.blockSize : this.blockSize - A.length();
    return A.fillWithByte(q, q), !0;
  };
  g9.ecb.prototype.unpad = function (A, K) {
    if (K.overflow > 0) return !1;
    var q = A.length(),
      Y = A.at(q - 1);
    if (Y > this.blockSize << 2) return !1;
    return A.truncate(Y), !0;
  };
  g9.cbc = function (A) {
    A = A || {}, this.name = "CBC", this.cipher = A.cipher, this.blockSize = A.blockSize || 16, this._ints = this.blockSize / 4, this._inBlock = Array(this._ints), this._outBlock = Array(this._ints);
  };
  g9.cbc.prototype.start = function (A) {
    if (A.iv === null) {
      if (!this._prev) throw Error("Invalid IV parameter.");
      this._iv = this._prev.slice(0);
    } else if (!("iv" in A)) throw Error("Invalid IV parameter.");else this._iv = gX1(A.iv, this.blockSize), this._prev = this._iv.slice(0);
  };
  g9.cbc.prototype.encrypt = function (A, K, q) {
    if (A.length() < this.blockSize && !(q && A.length() > 0)) return !0;
    for (var Y = 0; Y < this._ints; ++Y) this._inBlock[Y] = this._prev[Y] ^ A.getInt32();
    this.cipher.encrypt(this._inBlock, this._outBlock);
    for (var Y = 0; Y < this._ints; ++Y) K.putInt32(this._outBlock[Y]);
    this._prev = this._outBlock;
  };
  g9.cbc.prototype.decrypt = function (A, K, q) {
    if (A.length() < this.blockSize && !(q && A.length() > 0)) return !0;
    for (var Y = 0; Y < this._ints; ++Y) this._inBlock[Y] = A.getInt32();
    this.cipher.decrypt(this._inBlock, this._outBlock);
    for (var Y = 0; Y < this._ints; ++Y) K.putInt32(this._prev[Y] ^ this._outBlock[Y]);
    this._prev = this._inBlock.slice(0);
  };
  g9.cbc.prototype.pad = function (A, K) {
    var q = A.length() === this.blockSize ? this.blockSize : this.blockSize - A.length();
    return A.fillWithByte(q, q), !0;
  };
  g9.cbc.prototype.unpad = function (A, K) {
    if (K.overflow > 0) return !1;
    var q = A.length(),
      Y = A.at(q - 1);
    if (Y > this.blockSize << 2) return !1;
    return A.truncate(Y), !0;
  };
  g9.cfb = function (A) {
    A = A || {}, this.name = "CFB", this.cipher = A.cipher, this.blockSize = A.blockSize || 16, this._ints = this.blockSize / 4, this._inBlock = null, this._outBlock = Array(this._ints), this._partialBlock = Array(this._ints), this._partialOutput = LG.util.createBuffer(), this._partialBytes = 0;
  };
  g9.cfb.prototype.start = function (A) {
    if (!("iv" in A)) throw Error("Invalid IV parameter.");
    this._iv = gX1(A.iv, this.blockSize), this._inBlock = this._iv.slice(0), this._partialBytes = 0;
  };
  g9.cfb.prototype.encrypt = function (A, K, q) {
    var Y = A.length();
    if (Y === 0) return !0;
    if (this.cipher.encrypt(this._inBlock, this._outBlock), this._partialBytes === 0 && Y >= this.blockSize) {
      for (var z = 0; z < this._ints; ++z) this._inBlock[z] = A.getInt32() ^ this._outBlock[z], K.putInt32(this._inBlock[z]);
      return;
    }
    var w = (this.blockSize - Y) % this.blockSize;
    if (w > 0) w = this.blockSize - w;
    this._partialOutput.clear();
    for (var z = 0; z < this._ints; ++z) this._partialBlock[z] = A.getInt32() ^ this._outBlock[z], this._partialOutput.putInt32(this._partialBlock[z]);
    if (w > 0) A.read -= this.blockSize;else for (var z = 0; z < this._ints; ++z) this._inBlock[z] = this._partialBlock[z];
    if (this._partialBytes > 0) this._partialOutput.getBytes(this._partialBytes);
    if (w > 0 && !q) return K.putBytes(this._partialOutput.getBytes(w - this._partialBytes)), this._partialBytes = w, !0;
    K.putBytes(this._partialOutput.getBytes(Y - this._partialBytes)), this._partialBytes = 0;
  };
  g9.cfb.prototype.decrypt = function (A, K, q) {
    var Y = A.length();
    if (Y === 0) return !0;
    if (this.cipher.encrypt(this._inBlock, this._outBlock), this._partialBytes === 0 && Y >= this.blockSize) {
      for (var z = 0; z < this._ints; ++z) this._inBlock[z] = A.getInt32(), K.putInt32(this._inBlock[z] ^ this._outBlock[z]);
      return;
    }
    var w = (this.blockSize - Y) % this.blockSize;
    if (w > 0) w = this.blockSize - w;
    this._partialOutput.clear();
    for (var z = 0; z < this._ints; ++z) this._partialBlock[z] = A.getInt32(), this._partialOutput.putInt32(this._partialBlock[z] ^ this._outBlock[z]);
    if (w > 0) A.read -= this.blockSize;else for (var z = 0; z < this._ints; ++z) this._inBlock[z] = this._partialBlock[z];
    if (this._partialBytes > 0) this._partialOutput.getBytes(this._partialBytes);
    if (w > 0 && !q) return K.putBytes(this._partialOutput.getBytes(w - this._partialBytes)), this._partialBytes = w, !0;
    K.putBytes(this._partialOutput.getBytes(Y - this._partialBytes)), this._partialBytes = 0;
  };
  g9.ofb = function (A) {
    A = A || {}, this.name = "OFB", this.cipher = A.cipher, this.blockSize = A.blockSize || 16, this._ints = this.blockSize / 4, this._inBlock = null, this._outBlock = Array(this._ints), this._partialOutput = LG.util.createBuffer(), this._partialBytes = 0;
  };
  g9.ofb.prototype.start = function (A) {
    if (!("iv" in A)) throw Error("Invalid IV parameter.");
    this._iv = gX1(A.iv, this.blockSize), this._inBlock = this._iv.slice(0), this._partialBytes = 0;
  };
  g9.ofb.prototype.encrypt = function (A, K, q) {
    var Y = A.length();
    if (A.length() === 0) return !0;
    if (this.cipher.encrypt(this._inBlock, this._outBlock), this._partialBytes === 0 && Y >= this.blockSize) {
      for (var z = 0; z < this._ints; ++z) K.putInt32(A.getInt32() ^ this._outBlock[z]), this._inBlock[z] = this._outBlock[z];
      return;
    }
    var w = (this.blockSize - Y) % this.blockSize;
    if (w > 0) w = this.blockSize - w;
    this._partialOutput.clear();
    for (var z = 0; z < this._ints; ++z) this._partialOutput.putInt32(A.getInt32() ^ this._outBlock[z]);
    if (w > 0) A.read -= this.blockSize;else for (var z = 0; z < this._ints; ++z) this._inBlock[z] = this._outBlock[z];
    if (this._partialBytes > 0) this._partialOutput.getBytes(this._partialBytes);
    if (w > 0 && !q) return K.putBytes(this._partialOutput.getBytes(w - this._partialBytes)), this._partialBytes = w, !0;
    K.putBytes(this._partialOutput.getBytes(Y - this._partialBytes)), this._partialBytes = 0;
  };
  g9.ofb.prototype.decrypt = g9.ofb.prototype.encrypt;
  g9.ctr = function (A) {
    A = A || {}, this.name = "CTR", this.cipher = A.cipher, this.blockSize = A.blockSize || 16, this._ints = this.blockSize / 4, this._inBlock = null, this._outBlock = Array(this._ints), this._partialOutput = LG.util.createBuffer(), this._partialBytes = 0;
  };
  g9.ctr.prototype.start = function (A) {
    if (!("iv" in A)) throw Error("Invalid IV parameter.");
    this._iv = gX1(A.iv, this.blockSize), this._inBlock = this._iv.slice(0), this._partialBytes = 0;
  };
  g9.ctr.prototype.encrypt = function (A, K, q) {
    var Y = A.length();
    if (Y === 0) return !0;
    if (this.cipher.encrypt(this._inBlock, this._outBlock), this._partialBytes === 0 && Y >= this.blockSize) for (var z = 0; z < this._ints; ++z) K.putInt32(A.getInt32() ^ this._outBlock[z]);else {
      var w = (this.blockSize - Y) % this.blockSize;
      if (w > 0) w = this.blockSize - w;
      this._partialOutput.clear();
      for (var z = 0; z < this._ints; ++z) this._partialOutput.putInt32(A.getInt32() ^ this._outBlock[z]);
      if (w > 0) A.read -= this.blockSize;
      if (this._partialBytes > 0) this._partialOutput.getBytes(this._partialBytes);
      if (w > 0 && !q) return K.putBytes(this._partialOutput.getBytes(w - this._partialBytes)), this._partialBytes = w, !0;
      K.putBytes(this._partialOutput.getBytes(Y - this._partialBytes)), this._partialBytes = 0;
    }
    FX1(this._inBlock);
  };
  g9.ctr.prototype.decrypt = g9.ctr.prototype.encrypt;
  g9.gcm = function (A) {
    A = A || {}, this.name = "GCM", this.cipher = A.cipher, this.blockSize = A.blockSize || 16, this._ints = this.blockSize / 4, this._inBlock = Array(this._ints), this._outBlock = Array(this._ints), this._partialOutput = LG.util.createBuffer(), this._partialBytes = 0, this._R = 3774873600;
  };
  g9.gcm.prototype.start = function (A) {
    if (!("iv" in A)) throw Error("Invalid IV parameter.");
    var K = LG.util.createBuffer(A.iv);
    this._cipherLength = 0;
    var q;
    if ("additionalData" in A) q = LG.util.createBuffer(A.additionalData);else q = LG.util.createBuffer();
    if ("tagLength" in A) this._tagLength = A.tagLength;else this._tagLength = 128;
    if (this._tag = null, A.decrypt) {
      if (this._tag = LG.util.createBuffer(A.tag).getBytes(), this._tag.length !== this._tagLength / 8) throw Error("Authentication tag does not match tag length.");
    }
    this._hashBlock = Array(this._ints), this.tag = null, this._hashSubkey = Array(this._ints), this.cipher.encrypt([0, 0, 0, 0], this._hashSubkey), this.componentBits = 4, this._m = this.generateHashTable(this._hashSubkey, this.componentBits);
    var Y = K.length();
    if (Y === 12) this._j0 = [K.getInt32(), K.getInt32(), K.getInt32(), 1];else {
      this._j0 = [0, 0, 0, 0];
      while (K.length() > 0) this._j0 = this.ghash(this._hashSubkey, this._j0, [K.getInt32(), K.getInt32(), K.getInt32(), K.getInt32()]);
      this._j0 = this.ghash(this._hashSubkey, this._j0, [0, 0].concat(mD6(Y * 8)));
    }
    this._inBlock = this._j0.slice(0), FX1(this._inBlock), this._partialBytes = 0, q = LG.util.createBuffer(q), this._aDataLength = mD6(q.length() * 8);
    var z = q.length() % this.blockSize;
    if (z) q.fillWithByte(0, this.blockSize - z);
    this._s = [0, 0, 0, 0];
    while (q.length() > 0) this._s = this.ghash(this._hashSubkey, this._s, [q.getInt32(), q.getInt32(), q.getInt32(), q.getInt32()]);
  };
  g9.gcm.prototype.encrypt = function (A, K, q) {
    var Y = A.length();
    if (Y === 0) return !0;
    if (this.cipher.encrypt(this._inBlock, this._outBlock), this._partialBytes === 0 && Y >= this.blockSize) {
      for (var z = 0; z < this._ints; ++z) K.putInt32(this._outBlock[z] ^= A.getInt32());
      this._cipherLength += this.blockSize;
    } else {
      var w = (this.blockSize - Y) % this.blockSize;
      if (w > 0) w = this.blockSize - w;
      this._partialOutput.clear();
      for (var z = 0; z < this._ints; ++z) this._partialOutput.putInt32(A.getInt32() ^ this._outBlock[z]);
      if (w <= 0 || q) {
        if (q) {
          var H = Y % this.blockSize;
          this._cipherLength += H, this._partialOutput.truncate(this.blockSize - H);
        } else this._cipherLength += this.blockSize;
        for (var z = 0; z < this._ints; ++z) this._outBlock[z] = this._partialOutput.getInt32();
        this._partialOutput.read -= this.blockSize;
      }
      if (this._partialBytes > 0) this._partialOutput.getBytes(this._partialBytes);
      if (w > 0 && !q) return A.read -= this.blockSize, K.putBytes(this._partialOutput.getBytes(w - this._partialBytes)), this._partialBytes = w, !0;
      K.putBytes(this._partialOutput.getBytes(Y - this._partialBytes)), this._partialBytes = 0;
    }
    this._s = this.ghash(this._hashSubkey, this._s, this._outBlock), FX1(this._inBlock);
  };
  g9.gcm.prototype.decrypt = function (A, K, q) {
    var Y = A.length();
    if (Y < this.blockSize && !(q && Y > 0)) return !0;
    this.cipher.encrypt(this._inBlock, this._outBlock), FX1(this._inBlock), this._hashBlock[0] = A.getInt32(), this._hashBlock[1] = A.getInt32(), this._hashBlock[2] = A.getInt32(), this._hashBlock[3] = A.getInt32(), this._s = this.ghash(this._hashSubkey, this._s, this._hashBlock);
    for (var z = 0; z < this._ints; ++z) K.putInt32(this._outBlock[z] ^ this._hashBlock[z]);
    if (Y < this.blockSize) this._cipherLength += Y % this.blockSize;else this._cipherLength += this.blockSize;
  };
  g9.gcm.prototype.afterFinish = function (A, K) {
    var q = !0;
    if (K.decrypt && K.overflow) A.truncate(this.blockSize - K.overflow);
    this.tag = LG.util.createBuffer();
    var Y = this._aDataLength.concat(mD6(this._cipherLength * 8));
    this._s = this.ghash(this._hashSubkey, this._s, Y);
    var z = [];
    this.cipher.encrypt(this._j0, z);
    for (var w = 0; w < this._ints; ++w) this.tag.putInt32(this._s[w] ^ z[w]);
    if (this.tag.truncate(this.tag.length() % (this._tagLength / 8)), K.decrypt && this.tag.bytes() !== this._tag) q = !1;
    return q;
  };
  g9.gcm.prototype.multiply = function (A, K) {
    var q = [0, 0, 0, 0],
      Y = K.slice(0);
    for (var z = 0; z < 128; ++z) {
      var w = A[z / 32 | 0] & 1 << 31 - z % 32;
      if (w) q[0] ^= Y[0], q[1] ^= Y[1], q[2] ^= Y[2], q[3] ^= Y[3];
      this.pow(Y, Y);
    }
    return q;
  };
  g9.gcm.prototype.pow = function (A, K) {
    var q = A[3] & 1;
    for (var Y = 3; Y > 0; --Y) K[Y] = A[Y] >>> 1 | (A[Y - 1] & 1) << 31;
    if (K[0] = A[0] >>> 1, q) K[0] ^= this._R;
  };
  g9.gcm.prototype.tableMultiply = function (A) {
    var K = [0, 0, 0, 0];
    for (var q = 0; q < 32; ++q) {
      var Y = q / 8 | 0,
        z = A[Y] >>> (7 - q % 8) * 4 & 15,
        w = this._m[q][z];
      K[0] ^= w[0], K[1] ^= w[1], K[2] ^= w[2], K[3] ^= w[3];
    }
    return K;
  };
  g9.gcm.prototype.ghash = function (A, K, q) {
    return K[0] ^= q[0], K[1] ^= q[1], K[2] ^= q[2], K[3] ^= q[3], this.tableMultiply(K);
  };
  g9.gcm.prototype.generateHashTable = function (A, K) {
    var q = 8 / K,
      Y = 4 * q,
      z = 16 * q,
      w = Array(z);
    for (var H = 0; H < z; ++H) {
      var J = [0, 0, 0, 0],
        O = H / Y | 0,
        X = (Y - 1 - H % Y) * K;
      J[O] = 1 << K - 1 << X, w[H] = this.generateSubHashTable(this.multiply(J, A), K);
    }
    return w;
  };
  g9.gcm.prototype.generateSubHashTable = function (A, K) {
    var q = 1 << K,
      Y = q >>> 1,
      z = Array(q);
    z[Y] = A.slice(0);
    var w = Y >>> 1;
    while (w > 0) this.pow(z[2 * w], z[w] = []), w >>= 1;
    w = 2;
    while (w < Y) {
      for (var H = 1; H < w; ++H) {
        var J = z[w],
          O = z[H];
        z[w + H] = [J[0] ^ O[0], J[1] ^ O[1], J[2] ^ O[2], J[3] ^ O[3]];
      }
      w *= 2;
    }
    z[0] = [0, 0, 0, 0];
    for (w = Y + 1; w < q; ++w) {
      var X = z[w ^ Y];
      z[w] = [A[0] ^ X[0], A[1] ^ X[1], A[2] ^ X[2], A[3] ^ X[3]];
    }
    return z;
  };
  function gX1(A, K) {
    if (typeof A === "string") A = LG.util.createBuffer(A);
    if (LG.util.isArray(A) && A.length > 4) {
      var q = A;
      A = LG.util.createBuffer();
      for (var Y = 0; Y < q.length; ++Y) A.putByte(q[Y]);
    }
    if (A.length() < K) throw Error("Invalid IV length; got " + A.length() + " bytes and expected " + K + " bytes.");
    if (!LG.util.isArray(A)) {
      var z = [],
        w = K / 4;
      for (var Y = 0; Y < w; ++Y) z.push(A.getInt32());
      A = z;
    }
    return A;
  }
  function FX1(A) {
    A[A.length - 1] = A[A.length - 1] + 1 & 4294967295;
  }
  function mD6(A) {
    return [A / 4294967296 | 0, A & 4294967295];
  }
});

// Register to shared state
__$.gD6 = gD6;
