// Module: Ao4
// Dependencies: SH6, W_A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ao4 = v(tr4 => {
  Object.defineProperty(tr4, "__esModule", {
    value: !0
  });
  tr4.BrowserCrypto = void 0;
  var Z_A = __$.SH6(),
    Gs9 = __$.W_A();
  class az1 {
    constructor() {
      if (typeof window > "u" || window.crypto === void 0 || window.crypto.subtle === void 0) throw Error("SubtleCrypto not found. Make sure it's an https:// website.");
    }
    async sha256DigestBase64(A) {
      let K = new TextEncoder().encode(A),
        q = await window.crypto.subtle.digest("SHA-256", K);
      return Z_A.fromByteArray(new Uint8Array(q));
    }
    randomBytesBase64(A) {
      let K = new Uint8Array(A);
      return window.crypto.getRandomValues(K), Z_A.fromByteArray(K);
    }
    static padBase64(A) {
      while (A.length % 4 !== 0) A += "=";
      return A;
    }
    async verify(A, K, q) {
      let Y = {
          name: "RSASSA-PKCS1-v1_5",
          hash: {
            name: "SHA-256"
          }
        },
        z = new TextEncoder().encode(K),
        w = Z_A.toByteArray(az1.padBase64(q)),
        H = await window.crypto.subtle.importKey("jwk", A, Y, !0, ["verify"]);
      return await window.crypto.subtle.verify(Y, H, w, z);
    }
    async sign(A, K) {
      let q = {
          name: "RSASSA-PKCS1-v1_5",
          hash: {
            name: "SHA-256"
          }
        },
        Y = new TextEncoder().encode(K),
        z = await window.crypto.subtle.importKey("jwk", A, q, !0, ["sign"]),
        w = await window.crypto.subtle.sign(q, z, Y);
      return Z_A.fromByteArray(new Uint8Array(w));
    }
    decodeBase64StringUtf8(A) {
      let K = Z_A.toByteArray(az1.padBase64(A));
      return new TextDecoder().decode(K);
    }
    encodeBase64StringUtf8(A) {
      let K = new TextEncoder().encode(A);
      return Z_A.fromByteArray(K);
    }
    async sha256DigestHex(A) {
      let K = new TextEncoder().encode(A),
        q = await window.crypto.subtle.digest("SHA-256", K);
      return (0, Gs9.fromArrayBufferToHex)(q);
    }
    async signWithHmacSha256(A, K) {
      let q = typeof A === "string" ? A : String.fromCharCode(...new Uint16Array(A)),
        Y = new TextEncoder(),
        z = await window.crypto.subtle.importKey("raw", Y.encode(q), {
          name: "HMAC",
          hash: {
            name: "SHA-256"
          }
        }, !1, ["sign"]);
      return window.crypto.subtle.sign("HMAC", z, Y.encode(K));
    }
  }
  tr4.BrowserCrypto = az1;
});

// Register to shared state
__$.Ao4 = Ao4;
