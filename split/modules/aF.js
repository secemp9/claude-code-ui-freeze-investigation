// Module: aF
// Dependencies: mc8, _z

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aF = v(Ux5 => {
  var Uo1 = __$.mc8(),
    Fx5 = __$._z(),
    Qx5 = CA("buffer"),
    gc8 = CA("crypto");
  class Qc8 {
    algorithmIdentifier;
    secret;
    hash;
    constructor(A, K) {
      this.algorithmIdentifier = A, this.secret = K, this.reset();
    }
    update(A, K) {
      this.hash.update(Fx5.toUint8Array(Fc8(A, K)));
    }
    digest() {
      return Promise.resolve(this.hash.digest());
    }
    reset() {
      this.hash = this.secret ? gc8.createHmac(this.algorithmIdentifier, Fc8(this.secret)) : gc8.createHash(this.algorithmIdentifier);
    }
  }
  function Fc8(A, K) {
    if (Qx5.Buffer.isBuffer(A)) return A;
    if (typeof A === "string") return Uo1.fromString(A, K);
    if (ArrayBuffer.isView(A)) return Uo1.fromArrayBuffer(A.buffer, A.byteOffset, A.byteLength);
    return Uo1.fromArrayBuffer(A);
  }
  Ux5.Hash = Qc8;
});

// Register to shared state
__$.aF = aF;
