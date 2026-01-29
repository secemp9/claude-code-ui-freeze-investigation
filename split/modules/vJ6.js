// Module: vJ6
// Dependencies: W_A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vJ6 = v($s4 => {
  Object.defineProperty($s4, "__esModule", {
    value: !0
  });
  $s4.AwsRequestSigner = void 0;
  var Os4 = __$.W_A(),
    Js4 = "AWS4-HMAC-SHA256",
    Re9 = "aws4_request";
  class Xs4 {
    constructor(A, K) {
      this.getCredentials = A, this.region = K, this.crypto = (0, Os4.createCrypto)();
    }
    async getRequestOptions(A) {
      if (!A.url) throw Error('"url" is required in "amzOptions"');
      let K = typeof A.data === "object" ? JSON.stringify(A.data) : A.data,
        q = A.url,
        Y = A.method || "GET",
        z = A.body || K,
        w = A.headers,
        H = await this.getCredentials(),
        J = new URL(q),
        O = await Ie9({
          crypto: this.crypto,
          host: J.host,
          canonicalUri: J.pathname,
          canonicalQuerystring: J.search.substr(1),
          method: Y,
          region: this.region,
          securityCredentials: H,
          requestPayload: z,
          additionalAmzHeaders: w
        }),
        X = Object.assign(O.amzDate ? {
          "x-amz-date": O.amzDate
        } : {}, {
          Authorization: O.authorizationHeader,
          host: J.host
        }, w || {});
      if (H.token) Object.assign(X, {
        "x-amz-security-token": H.token
      });
      let $ = {
        url: q,
        method: Y,
        headers: X
      };
      if (typeof z < "u") $.body = z;
      return $;
    }
  }
  $s4.AwsRequestSigner = Xs4;
  async function VhA(A, K, q) {
    return await A.signWithHmacSha256(K, q);
  }
  async function ye9(A, K, q, Y, z) {
    let w = await VhA(A, `AWS4${K}`, q),
      H = await VhA(A, w, Y),
      J = await VhA(A, H, z);
    return await VhA(A, J, "aws4_request");
  }
  async function Ie9(A) {
    let K = A.additionalAmzHeaders || {},
      q = A.requestPayload || "",
      Y = A.host.split(".")[0],
      z = new Date(),
      w = z.toISOString().replace(/[-:]/g, "").replace(/\.[0-9]+/, ""),
      H = z.toISOString().replace(/[-]/g, "").replace(/T.*/, ""),
      J = {};
    if (Object.keys(K).forEach(f => {
      J[f.toLowerCase()] = K[f];
    }), A.securityCredentials.token) J["x-amz-security-token"] = A.securityCredentials.token;
    let O = Object.assign({
        host: A.host
      }, J.date ? {} : {
        "x-amz-date": w
      }, J),
      X = "",
      $ = Object.keys(O).sort();
    $.forEach(f => {
      X += `${f}:${O[f]}
`;
    });
    let _ = $.join(";"),
      G = await A.crypto.sha256DigestHex(q),
      Z = `${A.method}
${A.canonicalUri}
${A.canonicalQuerystring}
${X}
${_}
${G}`,
      W = `${H}/${A.region}/${Y}/${Re9}`,
      D = `${Js4}
${w}
${W}
` + (await A.crypto.sha256DigestHex(Z)),
      j = await ye9(A.crypto, A.securityCredentials.secretAccessKey, H, A.region, Y),
      M = await VhA(A.crypto, j, D),
      P = `${Js4} Credential=${A.securityCredentials.accessKeyId}/${W}, SignedHeaders=${_}, Signature=${(0, Os4.fromArrayBufferToHex)(M)}`;
    return {
      amzDate: J.date ? void 0 : w,
      authorizationHeader: P,
      canonicalQuerystring: A.canonicalQuerystring
    };
  }
});

// Register to shared state
__$.vJ6 = vJ6;
