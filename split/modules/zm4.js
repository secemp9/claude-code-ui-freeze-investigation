// Module: zm4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zm4 = v((mPw, Ym4) => {
  var {
      defineProperty: O21,
      getOwnPropertyDescriptor: Oy9,
      getOwnPropertyNames: Xy9
    } = Object,
    $y9 = Object.prototype.hasOwnProperty,
    X21 = (A, K) => O21(A, "name", {
      value: K,
      configurable: !0
    }),
    _y9 = (A, K) => {
      for (var q in K) O21(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    Gy9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of Xy9(K)) if (!$y9.call(A, z) && z !== q) O21(A, z, {
          get: () => K[z],
          enumerable: !(Y = Oy9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    Zy9 = A => Gy9(O21({}, "__esModule", {
      value: !0
    }), A),
    oB4 = {};
  _y9(oB4, {
    AlgorithmId: () => eB4,
    EndpointURLScheme: () => tB4,
    FieldPosition: () => Am4,
    HttpApiKeyAuthLocation: () => sB4,
    HttpAuthLocation: () => aB4,
    IniSectionType: () => Km4,
    RequestHandlerProtocol: () => qm4,
    SMITHY_CONTEXT_KEY: () => Py9,
    getDefaultClientConfiguration: () => jy9,
    resolveDefaultRuntimeConfig: () => My9
  });
  Ym4.exports = Zy9(oB4);
  var aB4 = (A => {
      return A.HEADER = "header", A.QUERY = "query", A;
    })(aB4 || {}),
    sB4 = (A => {
      return A.HEADER = "header", A.QUERY = "query", A;
    })(sB4 || {}),
    tB4 = (A => {
      return A.HTTP = "http", A.HTTPS = "https", A;
    })(tB4 || {}),
    eB4 = (A => {
      return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A;
    })(eB4 || {}),
    Wy9 = X21(A => {
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
        addChecksumAlgorithm(q) {
          K.push(q);
        },
        checksumAlgorithms() {
          return K;
        }
      };
    }, "getChecksumConfiguration"),
    Dy9 = X21(A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    }, "resolveChecksumRuntimeConfig"),
    jy9 = X21(A => {
      return Wy9(A);
    }, "getDefaultClientConfiguration"),
    My9 = X21(A => {
      return Dy9(A);
    }, "resolveDefaultRuntimeConfig"),
    Am4 = (A => {
      return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A;
    })(Am4 || {}),
    Py9 = "__smithy_context",
    Km4 = (A => {
      return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A;
    })(Km4 || {}),
    qm4 = (A => {
      return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A;
    })(qm4 || {});
});

// Register to shared state
__$.zm4 = zm4;
