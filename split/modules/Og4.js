// Module: Og4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Og4 = v((tPw, Jg4) => {
  var {
      defineProperty: V21,
      getOwnPropertyDescriptor: lI9,
      getOwnPropertyNames: iI9
    } = Object,
    nI9 = Object.prototype.hasOwnProperty,
    f21 = (A, K) => V21(A, "name", {
      value: K,
      configurable: !0
    }),
    rI9 = (A, K) => {
      for (var q in K) V21(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    oI9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of iI9(K)) if (!nI9.call(A, z) && z !== q) V21(A, z, {
          get: () => K[z],
          enumerable: !(Y = lI9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    aI9 = A => oI9(V21({}, "__esModule", {
      value: !0
    }), A),
    em4 = {};
  rI9(em4, {
    AlgorithmId: () => Yg4,
    EndpointURLScheme: () => qg4,
    FieldPosition: () => zg4,
    HttpApiKeyAuthLocation: () => Kg4,
    HttpAuthLocation: () => Ag4,
    IniSectionType: () => wg4,
    RequestHandlerProtocol: () => Hg4,
    SMITHY_CONTEXT_KEY: () => KS9,
    getDefaultClientConfiguration: () => eI9,
    resolveDefaultRuntimeConfig: () => AS9
  });
  Jg4.exports = aI9(em4);
  var Ag4 = (A => {
      return A.HEADER = "header", A.QUERY = "query", A;
    })(Ag4 || {}),
    Kg4 = (A => {
      return A.HEADER = "header", A.QUERY = "query", A;
    })(Kg4 || {}),
    qg4 = (A => {
      return A.HTTP = "http", A.HTTPS = "https", A;
    })(qg4 || {}),
    Yg4 = (A => {
      return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A;
    })(Yg4 || {}),
    sI9 = f21(A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => "sha256",
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => "md5",
        checksumConstructor: () => A.md5
      });
      return {
        _checksumAlgorithms: K,
        addChecksumAlgorithm(q) {
          this._checksumAlgorithms.push(q);
        },
        checksumAlgorithms() {
          return this._checksumAlgorithms;
        }
      };
    }, "getChecksumConfiguration"),
    tI9 = f21(A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    }, "resolveChecksumRuntimeConfig"),
    eI9 = f21(A => {
      return {
        ...sI9(A)
      };
    }, "getDefaultClientConfiguration"),
    AS9 = f21(A => {
      return {
        ...tI9(A)
      };
    }, "resolveDefaultRuntimeConfig"),
    zg4 = (A => {
      return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A;
    })(zg4 || {}),
    KS9 = "__smithy_context",
    wg4 = (A => {
      return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A;
    })(wg4 || {}),
    Hg4 = (A => {
      return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A;
    })(Hg4 || {});
});

// Register to shared state
__$.Og4 = Og4;
