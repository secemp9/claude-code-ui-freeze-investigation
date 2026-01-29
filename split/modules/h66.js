// Module: h66
// Dependencies: kn, SZ

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var h66 = v((_6w, X54) => {
  var {
      Blob: yg3,
      File: Ig3
    } = CA("node:buffer"),
    {
      kState: ZQ
    } = __$.kn(),
    {
      webidl: $x
    } = __$.SZ();
  class _x {
    constructor(A, K, q = {}) {
      let Y = K,
        z = q.type,
        w = q.lastModified ?? Date.now();
      this[ZQ] = {
        blobLike: A,
        name: Y,
        type: z,
        lastModified: w
      };
    }
    stream(...A) {
      return $x.brandCheck(this, _x), this[ZQ].blobLike.stream(...A);
    }
    arrayBuffer(...A) {
      return $x.brandCheck(this, _x), this[ZQ].blobLike.arrayBuffer(...A);
    }
    slice(...A) {
      return $x.brandCheck(this, _x), this[ZQ].blobLike.slice(...A);
    }
    text(...A) {
      return $x.brandCheck(this, _x), this[ZQ].blobLike.text(...A);
    }
    get size() {
      return $x.brandCheck(this, _x), this[ZQ].blobLike.size;
    }
    get type() {
      return $x.brandCheck(this, _x), this[ZQ].blobLike.type;
    }
    get name() {
      return $x.brandCheck(this, _x), this[ZQ].name;
    }
    get lastModified() {
      return $x.brandCheck(this, _x), this[ZQ].lastModified;
    }
    get [Symbol.toStringTag]() {
      return "File";
    }
  }
  $x.converters.Blob = $x.interfaceConverter(yg3);
  function Sg3(A) {
    return A instanceof Ig3 || A && (typeof A.stream === "function" || typeof A.arrayBuffer === "function") && A[Symbol.toStringTag] === "File";
  }
  X54.exports = {
    FileLike: _x,
    isFileLike: Sg3
  };
});

// Register to shared state
__$.h66 = h66;
