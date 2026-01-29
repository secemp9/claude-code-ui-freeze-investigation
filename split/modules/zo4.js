// Module: zo4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zo4 = v(qo4 => {
  Object.defineProperty(qo4, "__esModule", {
    value: !0
  });
  qo4.NodeCrypto = void 0;
  var D_A = CA("crypto");
  class Ko4 {
    async sha256DigestBase64(A) {
      return D_A.createHash("sha256").update(A).digest("base64");
    }
    randomBytesBase64(A) {
      return D_A.randomBytes(A).toString("base64");
    }
    async verify(A, K, q) {
      let Y = D_A.createVerify("RSA-SHA256");
      return Y.update(K), Y.end(), Y.verify(A, q, "base64");
    }
    async sign(A, K) {
      let q = D_A.createSign("RSA-SHA256");
      return q.update(K), q.end(), q.sign(A, "base64");
    }
    decodeBase64StringUtf8(A) {
      return Buffer.from(A, "base64").toString("utf-8");
    }
    encodeBase64StringUtf8(A) {
      return Buffer.from(A, "utf-8").toString("base64");
    }
    async sha256DigestHex(A) {
      return D_A.createHash("sha256").update(A).digest("hex");
    }
    async signWithHmacSha256(A, K) {
      let q = typeof A === "string" ? A : Ws9(A);
      return Zs9(D_A.createHmac("sha256", q).update(K).digest());
    }
  }
  qo4.NodeCrypto = Ko4;
  function Zs9(A) {
    return A.buffer.slice(A.byteOffset, A.byteOffset + A.byteLength);
  }
  function Ws9(A) {
    return Buffer.from(A);
  }
});

// Register to shared state
__$.zo4 = zo4;
