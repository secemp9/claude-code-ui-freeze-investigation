// Module: XJ6
// Dependencies: W_A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var XJ6 = v(da4 => {
  Object.defineProperty(da4, "__esModule", {
    value: !0
  });
  da4.OAuthClientAuthHandler = void 0;
  da4.getErrorFromOAuthErrorResponse = Je9;
  var Ua4 = CA("querystring"),
    we9 = __$.W_A(),
    He9 = ["PUT", "POST", "PATCH"];
  class pa4 {
    constructor(A) {
      this.clientAuthentication = A, this.crypto = (0, we9.createCrypto)();
    }
    applyClientAuthenticationOptions(A, K) {
      if (this.injectAuthenticatedHeaders(A, K), !K) this.injectAuthenticatedRequestBody(A);
    }
    injectAuthenticatedHeaders(A, K) {
      var q;
      if (K) A.headers = A.headers || {}, Object.assign(A.headers, {
        Authorization: `Bearer ${K}}`
      });else if (((q = this.clientAuthentication) === null || q === void 0 ? void 0 : q.confidentialClientType) === "basic") {
        A.headers = A.headers || {};
        let Y = this.clientAuthentication.clientId,
          z = this.clientAuthentication.clientSecret || "",
          w = this.crypto.encodeBase64StringUtf8(`${Y}:${z}`);
        Object.assign(A.headers, {
          Authorization: `Basic ${w}`
        });
      }
    }
    injectAuthenticatedRequestBody(A) {
      var K;
      if (((K = this.clientAuthentication) === null || K === void 0 ? void 0 : K.confidentialClientType) === "request-body") {
        let q = (A.method || "GET").toUpperCase();
        if (He9.indexOf(q) !== -1) {
          let Y,
            z = A.headers || {};
          for (let w in z) if (w.toLowerCase() === "content-type" && z[w]) {
            Y = z[w].toLowerCase();
            break;
          }
          if (Y === "application/x-www-form-urlencoded") {
            A.data = A.data || "";
            let w = Ua4.parse(A.data);
            Object.assign(w, {
              client_id: this.clientAuthentication.clientId,
              client_secret: this.clientAuthentication.clientSecret || ""
            }), A.data = Ua4.stringify(w);
          } else if (Y === "application/json") A.data = A.data || {}, Object.assign(A.data, {
            client_id: this.clientAuthentication.clientId,
            client_secret: this.clientAuthentication.clientSecret || ""
          });else throw Error(`${Y} content-types are not supported with ${this.clientAuthentication.confidentialClientType} client authentication`);
        } else throw Error(`${q} HTTP method does not support ${this.clientAuthentication.confidentialClientType} client authentication`);
      }
    }
    static get RETRY_CONFIG() {
      return {
        retry: !0,
        retryConfig: {
          httpMethodsToRetry: ["GET", "PUT", "POST", "HEAD", "OPTIONS", "DELETE"]
        }
      };
    }
  }
  da4.OAuthClientAuthHandler = pa4;
  function Je9(A, K) {
    let {
        error: q,
        error_description: Y,
        error_uri: z
      } = A,
      w = `Error code ${q}`;
    if (typeof Y < "u") w += `: ${Y}`;
    if (typeof z < "u") w += ` - ${z}`;
    let H = Error(w);
    if (K) {
      let J = Object.keys(K);
      if (K.stack) J.push("stack");
      J.forEach(O => {
        if (O !== "message") Object.defineProperty(H, O, {
          value: K[O],
          writable: !1,
          enumerable: !0
        });
      });
    }
    return H;
  }
});

// Register to shared state
__$.XJ6 = XJ6;
