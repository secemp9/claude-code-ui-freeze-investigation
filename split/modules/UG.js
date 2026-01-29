// Module: UG
// Dependencies: Lw, K9, ND1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var UG = v(OU7 => {
  Object.defineProperty(OU7, "__esModule", {
    value: !0
  });
  OU7.Metadata = void 0;
  var XK2 = __$.Lw(),
    $K2 = __$.K9(),
    _K2 = __$.ND1(),
    GK2 = /^[:0-9a-z_.-]+$/,
    ZK2 = /^[ -~]*$/;
  function WK2(A) {
    return GK2.test(A);
  }
  function DK2(A) {
    return ZK2.test(A);
  }
  function JU7(A) {
    return A.endsWith("-bin");
  }
  function jK2(A) {
    return !A.startsWith("grpc-");
  }
  function TD1(A) {
    return A.toLowerCase();
  }
  function HU7(A, K) {
    if (!WK2(A)) throw Error('Metadata key "' + A + '" contains illegal characters');
    if (K !== null && K !== void 0) if (JU7(A)) {
      if (!Buffer.isBuffer(K)) throw Error("keys that end with '-bin' must have Buffer values");
    } else {
      if (Buffer.isBuffer(K)) throw Error("keys that don't end with '-bin' must have String values");
      if (!DK2(K)) throw Error('Metadata string value "' + K + '" contains illegal characters');
    }
  }
  class vD1 {
    constructor(A = {}) {
      this.internalRepr = new Map(), this.opaqueData = new Map(), this.options = A;
    }
    set(A, K) {
      A = TD1(A), HU7(A, K), this.internalRepr.set(A, [K]);
    }
    add(A, K) {
      A = TD1(A), HU7(A, K);
      let q = this.internalRepr.get(A);
      if (q === void 0) this.internalRepr.set(A, [K]);else q.push(K);
    }
    remove(A) {
      A = TD1(A), this.internalRepr.delete(A);
    }
    get(A) {
      return A = TD1(A), this.internalRepr.get(A) || [];
    }
    getMap() {
      let A = {};
      for (let [K, q] of this.internalRepr) if (q.length > 0) {
        let Y = q[0];
        A[K] = Buffer.isBuffer(Y) ? Buffer.from(Y) : Y;
      }
      return A;
    }
    clone() {
      let A = new vD1(this.options),
        K = A.internalRepr;
      for (let [q, Y] of this.internalRepr) {
        let z = Y.map(w => {
          if (Buffer.isBuffer(w)) return Buffer.from(w);else return w;
        });
        K.set(q, z);
      }
      return A;
    }
    merge(A) {
      for (let [K, q] of A.internalRepr) {
        let Y = (this.internalRepr.get(K) || []).concat(q);
        this.internalRepr.set(K, Y);
      }
    }
    setOptions(A) {
      this.options = A;
    }
    getOptions() {
      return this.options;
    }
    toHttp2Headers() {
      let A = {};
      for (let [K, q] of this.internalRepr) {
        if (K.startsWith(":")) continue;
        A[K] = q.map(MK2);
      }
      return A;
    }
    toJSON() {
      let A = {};
      for (let [K, q] of this.internalRepr) A[K] = q;
      return A;
    }
    setOpaque(A, K) {
      this.opaqueData.set(A, K);
    }
    getOpaque(A) {
      return this.opaqueData.get(A);
    }
    static fromHttp2Headers(A) {
      let K = new vD1();
      for (let q of Object.keys(A)) {
        if (q.charAt(0) === ":") continue;
        let Y = A[q];
        try {
          if (JU7(q)) {
            if (Array.isArray(Y)) Y.forEach(z => {
              K.add(q, Buffer.from(z, "base64"));
            });else if (Y !== void 0) if (jK2(q)) Y.split(",").forEach(z => {
              K.add(q, Buffer.from(z.trim(), "base64"));
            });else K.add(q, Buffer.from(Y, "base64"));
          } else if (Array.isArray(Y)) Y.forEach(z => {
            K.add(q, z);
          });else if (Y !== void 0) K.add(q, Y);
        } catch (z) {
          let w = `Failed to add metadata entry ${q}: ${Y}. ${(0, _K2.getErrorMessage)(z)}. For more information see https://github.com/grpc/grpc-node/issues/1173`;
          (0, XK2.log)($K2.LogVerbosity.ERROR, w);
        }
      }
      return K;
    }
  }
  OU7.Metadata = vD1;
  var MK2 = A => {
    return Buffer.isBuffer(A) ? A.toString("base64") : A;
  };
});

// Register to shared state
__$.UG = UG;
