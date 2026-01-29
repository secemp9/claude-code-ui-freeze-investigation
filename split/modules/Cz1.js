// Module: Cz1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Cz1 = v(Nl4 => {
  function iz(A, K, q) {
    if (q.globals) A = q.globals[A.name];
    return new A(`${q.context ? q.context : "Value"} ${K}.`);
  }
  function z_A(A, K) {
    if (typeof A === "bigint") throw iz(TypeError, "is a BigInt which cannot be converted to a number", K);
    if (!K.globals) return Number(A);
    return K.globals.Number(A);
  }
  function Vl4(A) {
    if (A > 0 && A % 1 === 0.5 && (A & 1) === 0 || A < 0 && A % 1 === -0.5 && (A & 1) === 1) return AhA(Math.floor(A));
    return AhA(Math.round(A));
  }
  function kz1(A) {
    return AhA(Math.trunc(A));
  }
  function Pl4(A) {
    return A < 0 ? -1 : 1;
  }
  function ic9(A, K) {
    let q = A % K;
    if (Pl4(K) !== Pl4(q)) return q + K;
    return q;
  }
  function AhA(A) {
    return A === 0 ? 0 : A;
  }
  function w_A(A, {
    unsigned: K
  }) {
    let q, Y;
    if (K) q = 0, Y = 2 ** A - 1;else q = -(2 ** (A - 1)), Y = 2 ** (A - 1) - 1;
    let z = 2 ** A,
      w = 2 ** (A - 1);
    return (H, J = {}) => {
      let O = z_A(H, J);
      if (O = AhA(O), J.enforceRange) {
        if (!Number.isFinite(O)) throw iz(TypeError, "is not a finite number", J);
        if (O = kz1(O), O < q || O > Y) throw iz(TypeError, `is outside the accepted range of ${q} to ${Y}, inclusive`, J);
        return O;
      }
      if (!Number.isNaN(O) && J.clamp) return O = Math.min(Math.max(O, q), Y), O = Vl4(O), O;
      if (!Number.isFinite(O) || O === 0) return 0;
      if (O = kz1(O), O >= q && O <= Y) return O;
      if (O = ic9(O, z), !K && O >= w) return O - z;
      return O;
    };
  }
  function fl4(A, {
    unsigned: K
  }) {
    let q = Number.MAX_SAFE_INTEGER,
      Y = K ? 0 : Number.MIN_SAFE_INTEGER,
      z = K ? BigInt.asUintN : BigInt.asIntN;
    return (w, H = {}) => {
      let J = z_A(w, H);
      if (J = AhA(J), H.enforceRange) {
        if (!Number.isFinite(J)) throw iz(TypeError, "is not a finite number", H);
        if (J = kz1(J), J < Y || J > q) throw iz(TypeError, `is outside the accepted range of ${Y} to ${q}, inclusive`, H);
        return J;
      }
      if (!Number.isNaN(J) && H.clamp) return J = Math.min(Math.max(J, Y), q), J = Vl4(J), J;
      if (!Number.isFinite(J) || J === 0) return 0;
      let O = BigInt(kz1(J));
      return O = z(A, O), Number(O);
    };
  }
  Nl4.any = A => {
    return A;
  };
  Nl4.undefined = () => {
    return;
  };
  Nl4.boolean = A => {
    return Boolean(A);
  };
  Nl4.byte = w_A(8, {
    unsigned: !1
  });
  Nl4.octet = w_A(8, {
    unsigned: !0
  });
  Nl4.short = w_A(16, {
    unsigned: !1
  });
  Nl4["unsigned short"] = w_A(16, {
    unsigned: !0
  });
  Nl4.long = w_A(32, {
    unsigned: !1
  });
  Nl4["unsigned long"] = w_A(32, {
    unsigned: !0
  });
  Nl4["long long"] = fl4(64, {
    unsigned: !1
  });
  Nl4["unsigned long long"] = fl4(64, {
    unsigned: !0
  });
  Nl4.double = (A, K = {}) => {
    let q = z_A(A, K);
    if (!Number.isFinite(q)) throw iz(TypeError, "is not a finite floating-point value", K);
    return q;
  };
  Nl4["unrestricted double"] = (A, K = {}) => {
    return z_A(A, K);
  };
  Nl4.float = (A, K = {}) => {
    let q = z_A(A, K);
    if (!Number.isFinite(q)) throw iz(TypeError, "is not a finite floating-point value", K);
    if (Object.is(q, -0)) return q;
    let Y = Math.fround(q);
    if (!Number.isFinite(Y)) throw iz(TypeError, "is outside the range of a single-precision floating-point value", K);
    return Y;
  };
  Nl4["unrestricted float"] = (A, K = {}) => {
    let q = z_A(A, K);
    if (isNaN(q)) return q;
    if (Object.is(q, -0)) return q;
    return Math.fround(q);
  };
  Nl4.DOMString = (A, K = {}) => {
    if (K.treatNullAsEmptyString && A === null) return "";
    if (typeof A === "symbol") throw iz(TypeError, "is a symbol, which cannot be converted to a string", K);
    return (K.globals ? K.globals.String : String)(A);
  };
  Nl4.ByteString = (A, K = {}) => {
    let q = Nl4.DOMString(A, K),
      Y;
    for (let z = 0; (Y = q.codePointAt(z)) !== void 0; ++z) if (Y > 255) throw iz(TypeError, "is not a valid ByteString", K);
    return q;
  };
  Nl4.USVString = (A, K = {}) => {
    let q = Nl4.DOMString(A, K),
      Y = q.length,
      z = [];
    for (let w = 0; w < Y; ++w) {
      let H = q.charCodeAt(w);
      if (H < 55296 || H > 57343) z.push(String.fromCodePoint(H));else if (56320 <= H && H <= 57343) z.push(String.fromCodePoint(65533));else if (w === Y - 1) z.push(String.fromCodePoint(65533));else {
        let J = q.charCodeAt(w + 1);
        if (56320 <= J && J <= 57343) {
          let O = H & 1023,
            X = J & 1023;
          z.push(String.fromCodePoint(65536 + 1024 * O + X)), ++w;
        } else z.push(String.fromCodePoint(65533));
      }
    }
    return z.join("");
  };
  Nl4.object = (A, K = {}) => {
    if (A === null || typeof A !== "object" && typeof A !== "function") throw iz(TypeError, "is not an object", K);
    return A;
  };
  var nc9 = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get,
    rc9 = typeof SharedArrayBuffer === "function" ? Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, "byteLength").get : null;
  function xw6(A) {
    try {
      return nc9.call(A), !0;
    } catch {
      return !1;
    }
  }
  function q_A(A) {
    try {
      return rc9.call(A), !0;
    } catch {
      return !1;
    }
  }
  function Y_A(A) {
    try {
      return new Uint8Array(A), !1;
    } catch {
      return !0;
    }
  }
  Nl4.ArrayBuffer = (A, K = {}) => {
    if (!xw6(A)) {
      if (K.allowShared && !q_A(A)) throw iz(TypeError, "is not an ArrayBuffer or SharedArrayBuffer", K);
      throw iz(TypeError, "is not an ArrayBuffer", K);
    }
    if (Y_A(A)) throw iz(TypeError, "is a detached ArrayBuffer", K);
    return A;
  };
  var oc9 = Object.getOwnPropertyDescriptor(DataView.prototype, "byteLength").get;
  Nl4.DataView = (A, K = {}) => {
    try {
      oc9.call(A);
    } catch (q) {
      throw iz(TypeError, "is not a DataView", K);
    }
    if (!K.allowShared && q_A(A.buffer)) throw iz(TypeError, "is backed by a SharedArrayBuffer, which is not allowed", K);
    if (Y_A(A.buffer)) throw iz(TypeError, "is backed by a detached ArrayBuffer", K);
    return A;
  };
  var ac9 = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array).prototype, Symbol.toStringTag).get;
  [Int8Array, Int16Array, Int32Array, Uint8Array, Uint16Array, Uint32Array, Uint8ClampedArray, Float32Array, Float64Array].forEach(A => {
    let {
        name: K
      } = A,
      q = /^[AEIOU]/u.test(K) ? "an" : "a";
    Nl4[K] = (Y, z = {}) => {
      if (!ArrayBuffer.isView(Y) || ac9.call(Y) !== K) throw iz(TypeError, `is not ${q} ${K} object`, z);
      if (!z.allowShared && q_A(Y.buffer)) throw iz(TypeError, "is a view on a SharedArrayBuffer, which is not allowed", z);
      if (Y_A(Y.buffer)) throw iz(TypeError, "is a view on a detached ArrayBuffer", z);
      return Y;
    };
  });
  Nl4.ArrayBufferView = (A, K = {}) => {
    if (!ArrayBuffer.isView(A)) throw iz(TypeError, "is not a view on an ArrayBuffer or SharedArrayBuffer", K);
    if (!K.allowShared && q_A(A.buffer)) throw iz(TypeError, "is a view on a SharedArrayBuffer, which is not allowed", K);
    if (Y_A(A.buffer)) throw iz(TypeError, "is a view on a detached ArrayBuffer", K);
    return A;
  };
  Nl4.BufferSource = (A, K = {}) => {
    if (ArrayBuffer.isView(A)) {
      if (!K.allowShared && q_A(A.buffer)) throw iz(TypeError, "is a view on a SharedArrayBuffer, which is not allowed", K);
      if (Y_A(A.buffer)) throw iz(TypeError, "is a view on a detached ArrayBuffer", K);
      return A;
    }
    if (!K.allowShared && !xw6(A)) throw iz(TypeError, "is not an ArrayBuffer or a view on one", K);
    if (K.allowShared && !q_A(A) && !xw6(A)) throw iz(TypeError, "is not an ArrayBuffer, SharedArrayBuffer, or a view on one", K);
    if (Y_A(A)) throw iz(TypeError, "is a detached ArrayBuffer", K);
    return A;
  };
  Nl4.DOMTimeStamp = Nl4["unsigned long long"];
});

// Register to shared state
__$.Cz1 = Cz1;
