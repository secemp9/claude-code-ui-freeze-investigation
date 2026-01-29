// Module: bY
// Dependencies: m3, A_7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bY = v((z4H, z_7) => {
  var K_7 = __$.m3(),
    q_7 = __$.A_7(),
    n1 = z_7.exports = K_7.util = K_7.util || {};
  (function () {
    if (typeof process < "u" && process.nextTick) {
      if (n1.nextTick = process.nextTick, typeof setImmediate === "function") n1.setImmediate = setImmediate;else n1.setImmediate = n1.nextTick;
      return;
    }
    if (typeof setImmediate === "function") {
      n1.setImmediate = function () {
        return setImmediate.apply(void 0, arguments);
      }, n1.nextTick = function (J) {
        return setImmediate(J);
      };
      return;
    }
    if (n1.setImmediate = function (J) {
      setTimeout(J, 0);
    }, typeof window < "u" && typeof window.postMessage === "function") {
      let J = function (O) {
        if (O.source === window && O.data === A) {
          O.stopPropagation();
          var X = K.slice();
          K.length = 0, X.forEach(function ($) {
            $();
          });
        }
      };
      var H = J,
        A = "forge.setImmediate",
        K = [];
      n1.setImmediate = function (O) {
        if (K.push(O), K.length === 1) window.postMessage(A, "*");
      }, window.addEventListener("message", J, !0);
    }
    if (typeof MutationObserver < "u") {
      var q = Date.now(),
        Y = !0,
        z = document.createElement("div"),
        K = [];
      new MutationObserver(function () {
        var O = K.slice();
        K.length = 0, O.forEach(function (X) {
          X();
        });
      }).observe(z, {
        attributes: !0
      });
      var w = n1.setImmediate;
      n1.setImmediate = function (O) {
        if (Date.now() - q > 15) q = Date.now(), w(O);else if (K.push(O), K.length === 1) z.setAttribute("a", Y = !Y);
      };
    }
    n1.nextTick = n1.setImmediate;
  })();
  n1.isNodejs = typeof process < "u" && process.versions && process.versions.node;
  n1.globalScope = function () {
    if (n1.isNodejs) return global;
    return typeof self > "u" ? window : self;
  }();
  n1.isArray = Array.isArray || function (A) {
    return Object.prototype.toString.call(A) === "[object Array]";
  };
  n1.isArrayBuffer = function (A) {
    return typeof ArrayBuffer < "u" && A instanceof ArrayBuffer;
  };
  n1.isArrayBufferView = function (A) {
    return A && n1.isArrayBuffer(A.buffer) && A.byteLength !== void 0;
  };
  function ZBA(A) {
    if (!(A === 8 || A === 16 || A === 24 || A === 32)) throw Error("Only 8, 16, 24, or 32 bits supported: " + A);
  }
  n1.ByteBuffer = bD6;
  function bD6(A) {
    if (this.data = "", this.read = 0, typeof A === "string") this.data = A;else if (n1.isArrayBuffer(A) || n1.isArrayBufferView(A)) {
      if (typeof Buffer < "u" && A instanceof Buffer) this.data = A.toString("binary");else {
        var K = new Uint8Array(A);
        try {
          this.data = String.fromCharCode.apply(null, K);
        } catch (Y) {
          for (var q = 0; q < K.length; ++q) this.putByte(K[q]);
        }
      }
    } else if (A instanceof bD6 || typeof A === "object" && typeof A.data === "string" && typeof A.read === "number") this.data = A.data, this.read = A.read;
    this._constructedStringLength = 0;
  }
  n1.ByteStringBuffer = bD6;
  var _NY = 4096;
  n1.ByteStringBuffer.prototype._optimizeConstructedString = function (A) {
    if (this._constructedStringLength += A, this._constructedStringLength > _NY) this.data.substr(0, 1), this._constructedStringLength = 0;
  };
  n1.ByteStringBuffer.prototype.length = function () {
    return this.data.length - this.read;
  };
  n1.ByteStringBuffer.prototype.isEmpty = function () {
    return this.length() <= 0;
  };
  n1.ByteStringBuffer.prototype.putByte = function (A) {
    return this.putBytes(String.fromCharCode(A));
  };
  n1.ByteStringBuffer.prototype.fillWithByte = function (A, K) {
    A = String.fromCharCode(A);
    var q = this.data;
    while (K > 0) {
      if (K & 1) q += A;
      if (K >>>= 1, K > 0) A += A;
    }
    return this.data = q, this._optimizeConstructedString(K), this;
  };
  n1.ByteStringBuffer.prototype.putBytes = function (A) {
    return this.data += A, this._optimizeConstructedString(A.length), this;
  };
  n1.ByteStringBuffer.prototype.putString = function (A) {
    return this.putBytes(n1.encodeUtf8(A));
  };
  n1.ByteStringBuffer.prototype.putInt16 = function (A) {
    return this.putBytes(String.fromCharCode(A >> 8 & 255) + String.fromCharCode(A & 255));
  };
  n1.ByteStringBuffer.prototype.putInt24 = function (A) {
    return this.putBytes(String.fromCharCode(A >> 16 & 255) + String.fromCharCode(A >> 8 & 255) + String.fromCharCode(A & 255));
  };
  n1.ByteStringBuffer.prototype.putInt32 = function (A) {
    return this.putBytes(String.fromCharCode(A >> 24 & 255) + String.fromCharCode(A >> 16 & 255) + String.fromCharCode(A >> 8 & 255) + String.fromCharCode(A & 255));
  };
  n1.ByteStringBuffer.prototype.putInt16Le = function (A) {
    return this.putBytes(String.fromCharCode(A & 255) + String.fromCharCode(A >> 8 & 255));
  };
  n1.ByteStringBuffer.prototype.putInt24Le = function (A) {
    return this.putBytes(String.fromCharCode(A & 255) + String.fromCharCode(A >> 8 & 255) + String.fromCharCode(A >> 16 & 255));
  };
  n1.ByteStringBuffer.prototype.putInt32Le = function (A) {
    return this.putBytes(String.fromCharCode(A & 255) + String.fromCharCode(A >> 8 & 255) + String.fromCharCode(A >> 16 & 255) + String.fromCharCode(A >> 24 & 255));
  };
  n1.ByteStringBuffer.prototype.putInt = function (A, K) {
    ZBA(K);
    var q = "";
    do K -= 8, q += String.fromCharCode(A >> K & 255); while (K > 0);
    return this.putBytes(q);
  };
  n1.ByteStringBuffer.prototype.putSignedInt = function (A, K) {
    if (A < 0) A += 2 << K - 1;
    return this.putInt(A, K);
  };
  n1.ByteStringBuffer.prototype.putBuffer = function (A) {
    return this.putBytes(A.getBytes());
  };
  n1.ByteStringBuffer.prototype.getByte = function () {
    return this.data.charCodeAt(this.read++);
  };
  n1.ByteStringBuffer.prototype.getInt16 = function () {
    var A = this.data.charCodeAt(this.read) << 8 ^ this.data.charCodeAt(this.read + 1);
    return this.read += 2, A;
  };
  n1.ByteStringBuffer.prototype.getInt24 = function () {
    var A = this.data.charCodeAt(this.read) << 16 ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2);
    return this.read += 3, A;
  };
  n1.ByteStringBuffer.prototype.getInt32 = function () {
    var A = this.data.charCodeAt(this.read) << 24 ^ this.data.charCodeAt(this.read + 1) << 16 ^ this.data.charCodeAt(this.read + 2) << 8 ^ this.data.charCodeAt(this.read + 3);
    return this.read += 4, A;
  };
  n1.ByteStringBuffer.prototype.getInt16Le = function () {
    var A = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8;
    return this.read += 2, A;
  };
  n1.ByteStringBuffer.prototype.getInt24Le = function () {
    var A = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2) << 16;
    return this.read += 3, A;
  };
  n1.ByteStringBuffer.prototype.getInt32Le = function () {
    var A = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2) << 16 ^ this.data.charCodeAt(this.read + 3) << 24;
    return this.read += 4, A;
  };
  n1.ByteStringBuffer.prototype.getInt = function (A) {
    ZBA(A);
    var K = 0;
    do K = (K << 8) + this.data.charCodeAt(this.read++), A -= 8; while (A > 0);
    return K;
  };
  n1.ByteStringBuffer.prototype.getSignedInt = function (A) {
    var K = this.getInt(A),
      q = 2 << A - 2;
    if (K >= q) K -= q << 1;
    return K;
  };
  n1.ByteStringBuffer.prototype.getBytes = function (A) {
    var K;
    if (A) A = Math.min(this.length(), A), K = this.data.slice(this.read, this.read + A), this.read += A;else if (A === 0) K = "";else K = this.read === 0 ? this.data : this.data.slice(this.read), this.clear();
    return K;
  };
  n1.ByteStringBuffer.prototype.bytes = function (A) {
    return typeof A > "u" ? this.data.slice(this.read) : this.data.slice(this.read, this.read + A);
  };
  n1.ByteStringBuffer.prototype.at = function (A) {
    return this.data.charCodeAt(this.read + A);
  };
  n1.ByteStringBuffer.prototype.setAt = function (A, K) {
    return this.data = this.data.substr(0, this.read + A) + String.fromCharCode(K) + this.data.substr(this.read + A + 1), this;
  };
  n1.ByteStringBuffer.prototype.last = function () {
    return this.data.charCodeAt(this.data.length - 1);
  };
  n1.ByteStringBuffer.prototype.copy = function () {
    var A = n1.createBuffer(this.data);
    return A.read = this.read, A;
  };
  n1.ByteStringBuffer.prototype.compact = function () {
    if (this.read > 0) this.data = this.data.slice(this.read), this.read = 0;
    return this;
  };
  n1.ByteStringBuffer.prototype.clear = function () {
    return this.data = "", this.read = 0, this;
  };
  n1.ByteStringBuffer.prototype.truncate = function (A) {
    var K = Math.max(0, this.length() - A);
    return this.data = this.data.substr(this.read, K), this.read = 0, this;
  };
  n1.ByteStringBuffer.prototype.toHex = function () {
    var A = "";
    for (var K = this.read; K < this.data.length; ++K) {
      var q = this.data.charCodeAt(K);
      if (q < 16) A += "0";
      A += q.toString(16);
    }
    return A;
  };
  n1.ByteStringBuffer.prototype.toString = function () {
    return n1.decodeUtf8(this.bytes());
  };
  function GNY(A, K) {
    K = K || {}, this.read = K.readOffset || 0, this.growSize = K.growSize || 1024;
    var q = n1.isArrayBuffer(A),
      Y = n1.isArrayBufferView(A);
    if (q || Y) {
      if (q) this.data = new DataView(A);else this.data = new DataView(A.buffer, A.byteOffset, A.byteLength);
      this.write = "writeOffset" in K ? K.writeOffset : this.data.byteLength;
      return;
    }
    if (this.data = new DataView(new ArrayBuffer(0)), this.write = 0, A !== null && A !== void 0) this.putBytes(A);
    if ("writeOffset" in K) this.write = K.writeOffset;
  }
  n1.DataBuffer = GNY;
  n1.DataBuffer.prototype.length = function () {
    return this.write - this.read;
  };
  n1.DataBuffer.prototype.isEmpty = function () {
    return this.length() <= 0;
  };
  n1.DataBuffer.prototype.accommodate = function (A, K) {
    if (this.length() >= A) return this;
    K = Math.max(K || this.growSize, A);
    var q = new Uint8Array(this.data.buffer, this.data.byteOffset, this.data.byteLength),
      Y = new Uint8Array(this.length() + K);
    return Y.set(q), this.data = new DataView(Y.buffer), this;
  };
  n1.DataBuffer.prototype.putByte = function (A) {
    return this.accommodate(1), this.data.setUint8(this.write++, A), this;
  };
  n1.DataBuffer.prototype.fillWithByte = function (A, K) {
    this.accommodate(K);
    for (var q = 0; q < K; ++q) this.data.setUint8(A);
    return this;
  };
  n1.DataBuffer.prototype.putBytes = function (A, K) {
    if (n1.isArrayBufferView(A)) {
      var q = new Uint8Array(A.buffer, A.byteOffset, A.byteLength),
        Y = q.byteLength - q.byteOffset;
      this.accommodate(Y);
      var z = new Uint8Array(this.data.buffer, this.write);
      return z.set(q), this.write += Y, this;
    }
    if (n1.isArrayBuffer(A)) {
      var q = new Uint8Array(A);
      this.accommodate(q.byteLength);
      var z = new Uint8Array(this.data.buffer);
      return z.set(q, this.write), this.write += q.byteLength, this;
    }
    if (A instanceof n1.DataBuffer || typeof A === "object" && typeof A.read === "number" && typeof A.write === "number" && n1.isArrayBufferView(A.data)) {
      var q = new Uint8Array(A.data.byteLength, A.read, A.length());
      this.accommodate(q.byteLength);
      var z = new Uint8Array(A.data.byteLength, this.write);
      return z.set(q), this.write += q.byteLength, this;
    }
    if (A instanceof n1.ByteStringBuffer) A = A.data, K = "binary";
    if (K = K || "binary", typeof A === "string") {
      var w;
      if (K === "hex") return this.accommodate(Math.ceil(A.length / 2)), w = new Uint8Array(this.data.buffer, this.write), this.write += n1.binary.hex.decode(A, w, this.write), this;
      if (K === "base64") return this.accommodate(Math.ceil(A.length / 4) * 3), w = new Uint8Array(this.data.buffer, this.write), this.write += n1.binary.base64.decode(A, w, this.write), this;
      if (K === "utf8") A = n1.encodeUtf8(A), K = "binary";
      if (K === "binary" || K === "raw") return this.accommodate(A.length), w = new Uint8Array(this.data.buffer, this.write), this.write += n1.binary.raw.decode(w), this;
      if (K === "utf16") return this.accommodate(A.length * 2), w = new Uint16Array(this.data.buffer, this.write), this.write += n1.text.utf16.encode(w), this;
      throw Error("Invalid encoding: " + K);
    }
    throw Error("Invalid parameter: " + A);
  };
  n1.DataBuffer.prototype.putBuffer = function (A) {
    return this.putBytes(A), A.clear(), this;
  };
  n1.DataBuffer.prototype.putString = function (A) {
    return this.putBytes(A, "utf16");
  };
  n1.DataBuffer.prototype.putInt16 = function (A) {
    return this.accommodate(2), this.data.setInt16(this.write, A), this.write += 2, this;
  };
  n1.DataBuffer.prototype.putInt24 = function (A) {
    return this.accommodate(3), this.data.setInt16(this.write, A >> 8 & 65535), this.data.setInt8(this.write, A >> 16 & 255), this.write += 3, this;
  };
  n1.DataBuffer.prototype.putInt32 = function (A) {
    return this.accommodate(4), this.data.setInt32(this.write, A), this.write += 4, this;
  };
  n1.DataBuffer.prototype.putInt16Le = function (A) {
    return this.accommodate(2), this.data.setInt16(this.write, A, !0), this.write += 2, this;
  };
  n1.DataBuffer.prototype.putInt24Le = function (A) {
    return this.accommodate(3), this.data.setInt8(this.write, A >> 16 & 255), this.data.setInt16(this.write, A >> 8 & 65535, !0), this.write += 3, this;
  };
  n1.DataBuffer.prototype.putInt32Le = function (A) {
    return this.accommodate(4), this.data.setInt32(this.write, A, !0), this.write += 4, this;
  };
  n1.DataBuffer.prototype.putInt = function (A, K) {
    ZBA(K), this.accommodate(K / 8);
    do K -= 8, this.data.setInt8(this.write++, A >> K & 255); while (K > 0);
    return this;
  };
  n1.DataBuffer.prototype.putSignedInt = function (A, K) {
    if (ZBA(K), this.accommodate(K / 8), A < 0) A += 2 << K - 1;
    return this.putInt(A, K);
  };
  n1.DataBuffer.prototype.getByte = function () {
    return this.data.getInt8(this.read++);
  };
  n1.DataBuffer.prototype.getInt16 = function () {
    var A = this.data.getInt16(this.read);
    return this.read += 2, A;
  };
  n1.DataBuffer.prototype.getInt24 = function () {
    var A = this.data.getInt16(this.read) << 8 ^ this.data.getInt8(this.read + 2);
    return this.read += 3, A;
  };
  n1.DataBuffer.prototype.getInt32 = function () {
    var A = this.data.getInt32(this.read);
    return this.read += 4, A;
  };
  n1.DataBuffer.prototype.getInt16Le = function () {
    var A = this.data.getInt16(this.read, !0);
    return this.read += 2, A;
  };
  n1.DataBuffer.prototype.getInt24Le = function () {
    var A = this.data.getInt8(this.read) ^ this.data.getInt16(this.read + 1, !0) << 8;
    return this.read += 3, A;
  };
  n1.DataBuffer.prototype.getInt32Le = function () {
    var A = this.data.getInt32(this.read, !0);
    return this.read += 4, A;
  };
  n1.DataBuffer.prototype.getInt = function (A) {
    ZBA(A);
    var K = 0;
    do K = (K << 8) + this.data.getInt8(this.read++), A -= 8; while (A > 0);
    return K;
  };
  n1.DataBuffer.prototype.getSignedInt = function (A) {
    var K = this.getInt(A),
      q = 2 << A - 2;
    if (K >= q) K -= q << 1;
    return K;
  };
  n1.DataBuffer.prototype.getBytes = function (A) {
    var K;
    if (A) A = Math.min(this.length(), A), K = this.data.slice(this.read, this.read + A), this.read += A;else if (A === 0) K = "";else K = this.read === 0 ? this.data : this.data.slice(this.read), this.clear();
    return K;
  };
  n1.DataBuffer.prototype.bytes = function (A) {
    return typeof A > "u" ? this.data.slice(this.read) : this.data.slice(this.read, this.read + A);
  };
  n1.DataBuffer.prototype.at = function (A) {
    return this.data.getUint8(this.read + A);
  };
  n1.DataBuffer.prototype.setAt = function (A, K) {
    return this.data.setUint8(A, K), this;
  };
  n1.DataBuffer.prototype.last = function () {
    return this.data.getUint8(this.write - 1);
  };
  n1.DataBuffer.prototype.copy = function () {
    return new n1.DataBuffer(this);
  };
  n1.DataBuffer.prototype.compact = function () {
    if (this.read > 0) {
      var A = new Uint8Array(this.data.buffer, this.read),
        K = new Uint8Array(A.byteLength);
      K.set(A), this.data = new DataView(K), this.write -= this.read, this.read = 0;
    }
    return this;
  };
  n1.DataBuffer.prototype.clear = function () {
    return this.data = new DataView(new ArrayBuffer(0)), this.read = this.write = 0, this;
  };
  n1.DataBuffer.prototype.truncate = function (A) {
    return this.write = Math.max(0, this.length() - A), this.read = Math.min(this.read, this.write), this;
  };
  n1.DataBuffer.prototype.toHex = function () {
    var A = "";
    for (var K = this.read; K < this.data.byteLength; ++K) {
      var q = this.data.getUint8(K);
      if (q < 16) A += "0";
      A += q.toString(16);
    }
    return A;
  };
  n1.DataBuffer.prototype.toString = function (A) {
    var K = new Uint8Array(this.data, this.read, this.length());
    if (A = A || "utf8", A === "binary" || A === "raw") return n1.binary.raw.encode(K);
    if (A === "hex") return n1.binary.hex.encode(K);
    if (A === "base64") return n1.binary.base64.encode(K);
    if (A === "utf8") return n1.text.utf8.decode(K);
    if (A === "utf16") return n1.text.utf16.decode(K);
    throw Error("Invalid encoding: " + A);
  };
  n1.createBuffer = function (A, K) {
    if (K = K || "raw", A !== void 0 && K === "utf8") A = n1.encodeUtf8(A);
    return new n1.ByteBuffer(A);
  };
  n1.fillString = function (A, K) {
    var q = "";
    while (K > 0) {
      if (K & 1) q += A;
      if (K >>>= 1, K > 0) A += A;
    }
    return q;
  };
  n1.xorBytes = function (A, K, q) {
    var Y = "",
      z = "",
      w = "",
      H = 0,
      J = 0;
    for (; q > 0; --q, ++H) {
      if (z = A.charCodeAt(H) ^ K.charCodeAt(H), J >= 10) Y += w, w = "", J = 0;
      w += String.fromCharCode(z), ++J;
    }
    return Y += w, Y;
  };
  n1.hexToBytes = function (A) {
    var K = "",
      q = 0;
    if (A.length & !0) q = 1, K += String.fromCharCode(parseInt(A[0], 16));
    for (; q < A.length; q += 2) K += String.fromCharCode(parseInt(A.substr(q, 2), 16));
    return K;
  };
  n1.bytesToHex = function (A) {
    return n1.createBuffer(A).toHex();
  };
  n1.int32ToBytes = function (A) {
    return String.fromCharCode(A >> 24 & 255) + String.fromCharCode(A >> 16 & 255) + String.fromCharCode(A >> 8 & 255) + String.fromCharCode(A & 255);
  };
  var Ia = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    Sa = [62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, 64, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
    Y_7 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  n1.encode64 = function (A, K) {
    var q = "",
      Y = "",
      z,
      w,
      H,
      J = 0;
    while (J < A.length) {
      if (z = A.charCodeAt(J++), w = A.charCodeAt(J++), H = A.charCodeAt(J++), q += Ia.charAt(z >> 2), q += Ia.charAt((z & 3) << 4 | w >> 4), isNaN(w)) q += "==";else q += Ia.charAt((w & 15) << 2 | H >> 6), q += isNaN(H) ? "=" : Ia.charAt(H & 63);
      if (K && q.length > K) Y += q.substr(0, K) + `\r
`, q = q.substr(K);
    }
    return Y += q, Y;
  };
  n1.decode64 = function (A) {
    A = A.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    var K = "",
      q,
      Y,
      z,
      w,
      H = 0;
    while (H < A.length) if (q = Sa[A.charCodeAt(H++) - 43], Y = Sa[A.charCodeAt(H++) - 43], z = Sa[A.charCodeAt(H++) - 43], w = Sa[A.charCodeAt(H++) - 43], K += String.fromCharCode(q << 2 | Y >> 4), z !== 64) {
      if (K += String.fromCharCode((Y & 15) << 4 | z >> 2), w !== 64) K += String.fromCharCode((z & 3) << 6 | w);
    }
    return K;
  };
  n1.encodeUtf8 = function (A) {
    return unescape(encodeURIComponent(A));
  };
  n1.decodeUtf8 = function (A) {
    return decodeURIComponent(escape(A));
  };
  n1.binary = {
    raw: {},
    hex: {},
    base64: {},
    base58: {},
    baseN: {
      encode: q_7.encode,
      decode: q_7.decode
    }
  };
  n1.binary.raw.encode = function (A) {
    return String.fromCharCode.apply(null, A);
  };
  n1.binary.raw.decode = function (A, K, q) {
    var Y = K;
    if (!Y) Y = new Uint8Array(A.length);
    q = q || 0;
    var z = q;
    for (var w = 0; w < A.length; ++w) Y[z++] = A.charCodeAt(w);
    return K ? z - q : Y;
  };
  n1.binary.hex.encode = n1.bytesToHex;
  n1.binary.hex.decode = function (A, K, q) {
    var Y = K;
    if (!Y) Y = new Uint8Array(Math.ceil(A.length / 2));
    q = q || 0;
    var z = 0,
      w = q;
    if (A.length & 1) z = 1, Y[w++] = parseInt(A[0], 16);
    for (; z < A.length; z += 2) Y[w++] = parseInt(A.substr(z, 2), 16);
    return K ? w - q : Y;
  };
  n1.binary.base64.encode = function (A, K) {
    var q = "",
      Y = "",
      z,
      w,
      H,
      J = 0;
    while (J < A.byteLength) {
      if (z = A[J++], w = A[J++], H = A[J++], q += Ia.charAt(z >> 2), q += Ia.charAt((z & 3) << 4 | w >> 4), isNaN(w)) q += "==";else q += Ia.charAt((w & 15) << 2 | H >> 6), q += isNaN(H) ? "=" : Ia.charAt(H & 63);
      if (K && q.length > K) Y += q.substr(0, K) + `\r
`, q = q.substr(K);
    }
    return Y += q, Y;
  };
  n1.binary.base64.decode = function (A, K, q) {
    var Y = K;
    if (!Y) Y = new Uint8Array(Math.ceil(A.length / 4) * 3);
    A = A.replace(/[^A-Za-z0-9\+\/\=]/g, ""), q = q || 0;
    var z,
      w,
      H,
      J,
      O = 0,
      X = q;
    while (O < A.length) if (z = Sa[A.charCodeAt(O++) - 43], w = Sa[A.charCodeAt(O++) - 43], H = Sa[A.charCodeAt(O++) - 43], J = Sa[A.charCodeAt(O++) - 43], Y[X++] = z << 2 | w >> 4, H !== 64) {
      if (Y[X++] = (w & 15) << 4 | H >> 2, J !== 64) Y[X++] = (H & 3) << 6 | J;
    }
    return K ? X - q : Y.subarray(0, X);
  };
  n1.binary.base58.encode = function (A, K) {
    return n1.binary.baseN.encode(A, Y_7, K);
  };
  n1.binary.base58.decode = function (A, K) {
    return n1.binary.baseN.decode(A, Y_7, K);
  };
  n1.text = {
    utf8: {},
    utf16: {}
  };
  n1.text.utf8.encode = function (A, K, q) {
    A = n1.encodeUtf8(A);
    var Y = K;
    if (!Y) Y = new Uint8Array(A.length);
    q = q || 0;
    var z = q;
    for (var w = 0; w < A.length; ++w) Y[z++] = A.charCodeAt(w);
    return K ? z - q : Y;
  };
  n1.text.utf8.decode = function (A) {
    return n1.decodeUtf8(String.fromCharCode.apply(null, A));
  };
  n1.text.utf16.encode = function (A, K, q) {
    var Y = K;
    if (!Y) Y = new Uint8Array(A.length * 2);
    var z = new Uint16Array(Y.buffer);
    q = q || 0;
    var w = q,
      H = q;
    for (var J = 0; J < A.length; ++J) z[H++] = A.charCodeAt(J), w += 2;
    return K ? w - q : Y;
  };
  n1.text.utf16.decode = function (A) {
    return String.fromCharCode.apply(null, new Uint16Array(A.buffer));
  };
  n1.deflate = function (A, K, q) {
    if (K = n1.decode64(A.deflate(n1.encode64(K)).rval), q) {
      var Y = 2,
        z = K.charCodeAt(1);
      if (z & 32) Y = 6;
      K = K.substring(Y, K.length - 4);
    }
    return K;
  };
  n1.inflate = function (A, K, q) {
    var Y = A.inflate(n1.encode64(K)).rval;
    return Y === null ? null : n1.decode64(Y);
  };
  var xD6 = function (A, K, q) {
      if (!A) throw Error("WebStorage not available.");
      var Y;
      if (q === null) Y = A.removeItem(K);else q = n1.encode64(JSON.stringify(q)), Y = A.setItem(K, q);
      if (typeof Y < "u" && Y.rval !== !0) {
        var z = Error(Y.error.message);
        throw z.id = Y.error.id, z.name = Y.error.name, z;
      }
    },
    uD6 = function (A, K) {
      if (!A) throw Error("WebStorage not available.");
      var q = A.getItem(K);
      if (A.init) if (q.rval === null) {
        if (q.error) {
          var Y = Error(q.error.message);
          throw Y.id = q.error.id, Y.name = q.error.name, Y;
        }
        q = null;
      } else q = q.rval;
      if (q !== null) q = JSON.parse(n1.decode64(q));
      return q;
    },
    ZNY = function (A, K, q, Y) {
      var z = uD6(A, K);
      if (z === null) z = {};
      z[q] = Y, xD6(A, K, z);
    },
    WNY = function (A, K, q) {
      var Y = uD6(A, K);
      if (Y !== null) Y = q in Y ? Y[q] : null;
      return Y;
    },
    DNY = function (A, K, q) {
      var Y = uD6(A, K);
      if (Y !== null && q in Y) {
        delete Y[q];
        var z = !0;
        for (var w in Y) {
          z = !1;
          break;
        }
        if (z) Y = null;
        xD6(A, K, Y);
      }
    },
    jNY = function (A, K) {
      xD6(A, K, null);
    },
    BX1 = function (A, K, q) {
      var Y = null;
      if (typeof q > "u") q = ["web", "flash"];
      var z,
        w = !1,
        H = null;
      for (var J in q) {
        z = q[J];
        try {
          if (z === "flash" || z === "both") {
            if (K[0] === null) throw Error("Flash local storage not available.");
            Y = A.apply(this, K), w = z === "flash";
          }
          if (z === "web" || z === "both") K[0] = localStorage, Y = A.apply(this, K), w = !0;
        } catch (O) {
          H = O;
        }
        if (w) break;
      }
      if (!w) throw H;
      return Y;
    };
  n1.setItem = function (A, K, q, Y, z) {
    BX1(ZNY, arguments, z);
  };
  n1.getItem = function (A, K, q, Y) {
    return BX1(WNY, arguments, Y);
  };
  n1.removeItem = function (A, K, q, Y) {
    BX1(DNY, arguments, Y);
  };
  n1.clearItems = function (A, K, q) {
    BX1(jNY, arguments, q);
  };
  n1.isEmpty = function (A) {
    for (var K in A) if (A.hasOwnProperty(K)) return !1;
    return !0;
  };
  n1.format = function (A) {
    var K = /%./g,
      q,
      Y,
      z = 0,
      w = [],
      H = 0;
    while (q = K.exec(A)) {
      if (Y = A.substring(H, K.lastIndex - 2), Y.length > 0) w.push(Y);
      H = K.lastIndex;
      var J = q[0][1];
      switch (J) {
        case "s":
        case "o":
          if (z < arguments.length) w.push(arguments[z++ + 1]);else w.push("<?>");
          break;
        case "%":
          w.push("%");
          break;
        default:
          w.push("<%" + J + "?>");
      }
    }
    return w.push(A.substring(H)), w.join("");
  };
  n1.formatNumber = function (A, K, q, Y) {
    var z = A,
      w = isNaN(K = Math.abs(K)) ? 2 : K,
      H = q === void 0 ? "," : q,
      J = Y === void 0 ? "." : Y,
      O = z < 0 ? "-" : "",
      X = parseInt(z = Math.abs(+z || 0).toFixed(w), 10) + "",
      $ = X.length > 3 ? X.length % 3 : 0;
    return O + ($ ? X.substr(0, $) + J : "") + X.substr($).replace(/(\d{3})(?=\d)/g, "$1" + J) + (w ? H + Math.abs(z - X).toFixed(w).slice(2) : "");
  };
  n1.formatSize = function (A) {
    if (A >= 1073741824) A = n1.formatNumber(A / 1073741824, 2, ".", "") + " GiB";else if (A >= 1048576) A = n1.formatNumber(A / 1048576, 2, ".", "") + " MiB";else if (A >= 1024) A = n1.formatNumber(A / 1024, 0) + " KiB";else A = n1.formatNumber(A, 0) + " bytes";
    return A;
  };
  n1.bytesFromIP = function (A) {
    if (A.indexOf(".") !== -1) return n1.bytesFromIPv4(A);
    if (A.indexOf(":") !== -1) return n1.bytesFromIPv6(A);
    return null;
  };
  n1.bytesFromIPv4 = function (A) {
    if (A = A.split("."), A.length !== 4) return null;
    var K = n1.createBuffer();
    for (var q = 0; q < A.length; ++q) {
      var Y = parseInt(A[q], 10);
      if (isNaN(Y)) return null;
      K.putByte(Y);
    }
    return K.getBytes();
  };
  n1.bytesFromIPv6 = function (A) {
    var K = 0;
    A = A.split(":").filter(function (H) {
      if (H.length === 0) ++K;
      return !0;
    });
    var q = (8 - A.length + K) * 2,
      Y = n1.createBuffer();
    for (var z = 0; z < 8; ++z) {
      if (!A[z] || A[z].length === 0) {
        Y.fillWithByte(0, q), q = 0;
        continue;
      }
      var w = n1.hexToBytes(A[z]);
      if (w.length < 2) Y.putByte(0);
      Y.putBytes(w);
    }
    return Y.getBytes();
  };
  n1.bytesToIP = function (A) {
    if (A.length === 4) return n1.bytesToIPv4(A);
    if (A.length === 16) return n1.bytesToIPv6(A);
    return null;
  };
  n1.bytesToIPv4 = function (A) {
    if (A.length !== 4) return null;
    var K = [];
    for (var q = 0; q < A.length; ++q) K.push(A.charCodeAt(q));
    return K.join(".");
  };
  n1.bytesToIPv6 = function (A) {
    if (A.length !== 16) return null;
    var K = [],
      q = [],
      Y = 0;
    for (var z = 0; z < A.length; z += 2) {
      var w = n1.bytesToHex(A[z] + A[z + 1]);
      while (w[0] === "0" && w !== "0") w = w.substr(1);
      if (w === "0") {
        var H = q[q.length - 1],
          J = K.length;
        if (!H || J !== H.end + 1) q.push({
          start: J,
          end: J
        });else if (H.end = J, H.end - H.start > q[Y].end - q[Y].start) Y = q.length - 1;
      }
      K.push(w);
    }
    if (q.length > 0) {
      var O = q[Y];
      if (O.end - O.start > 0) {
        if (K.splice(O.start, O.end - O.start + 1, ""), O.start === 0) K.unshift("");
        if (O.end === 7) K.push("");
      }
    }
    return K.join(":");
  };
  n1.estimateCores = function (A, K) {
    if (typeof A === "function") K = A, A = {};
    if (A = A || {}, "cores" in n1 && !A.update) return K(null, n1.cores);
    if (typeof navigator < "u" && "hardwareConcurrency" in navigator && navigator.hardwareConcurrency > 0) return n1.cores = navigator.hardwareConcurrency, K(null, n1.cores);
    if (typeof Worker > "u") return n1.cores = 1, K(null, n1.cores);
    if (typeof Blob > "u") return n1.cores = 2, K(null, n1.cores);
    var q = URL.createObjectURL(new Blob(["(", function () {
      self.addEventListener("message", function (H) {
        var J = Date.now(),
          O = J + 4;
        while (Date.now() < O);
        self.postMessage({
          st: J,
          et: O
        });
      });
    }.toString(), ")()"], {
      type: "application/javascript"
    }));
    Y([], 5, 16);
    function Y(H, J, O) {
      if (J === 0) {
        var X = Math.floor(H.reduce(function ($, _) {
          return $ + _;
        }, 0) / H.length);
        return n1.cores = Math.max(1, X), URL.revokeObjectURL(q), K(null, n1.cores);
      }
      z(O, function ($, _) {
        H.push(w(O, _)), Y(H, J - 1, O);
      });
    }
    function z(H, J) {
      var O = [],
        X = [];
      for (var $ = 0; $ < H; ++$) {
        var _ = new Worker(q);
        _.addEventListener("message", function (G) {
          if (X.push(G.data), X.length === H) {
            for (var Z = 0; Z < H; ++Z) O[Z].terminate();
            J(null, X);
          }
        }), O.push(_);
      }
      for (var $ = 0; $ < H; ++$) O[$].postMessage($);
    }
    function w(H, J) {
      var O = [];
      for (var X = 0; X < H; ++X) {
        var $ = J[X],
          _ = O[X] = [];
        for (var G = 0; G < H; ++G) {
          if (X === G) continue;
          var Z = J[G];
          if ($.st > Z.st && $.st < Z.et || Z.st > $.st && Z.st < $.et) _.push(G);
        }
      }
      return O.reduce(function (W, D) {
        return Math.max(W, D.length);
      }, 0);
    }
  };
});

// Register to shared state
__$.bY = bY;
