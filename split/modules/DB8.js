// Module: DB8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var DB8 = v(M_5 => {
  M_5.HttpAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(M_5.HttpAuthLocation || (M_5.HttpAuthLocation = {}));
  M_5.HttpApiKeyAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(M_5.HttpApiKeyAuthLocation || (M_5.HttpApiKeyAuthLocation = {}));
  M_5.EndpointURLScheme = void 0;
  (function (A) {
    A.HTTP = "http", A.HTTPS = "https";
  })(M_5.EndpointURLScheme || (M_5.EndpointURLScheme = {}));
  M_5.AlgorithmId = void 0;
  (function (A) {
    A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256";
  })(M_5.AlgorithmId || (M_5.AlgorithmId = {}));
  var G_5 = A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => M_5.AlgorithmId.SHA256,
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => M_5.AlgorithmId.MD5,
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
    },
    Z_5 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    W_5 = A => {
      return G_5(A);
    },
    D_5 = A => {
      return Z_5(A);
    };
  M_5.FieldPosition = void 0;
  (function (A) {
    A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER";
  })(M_5.FieldPosition || (M_5.FieldPosition = {}));
  var j_5 = "__smithy_context";
  M_5.IniSectionType = void 0;
  (function (A) {
    A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services";
  })(M_5.IniSectionType || (M_5.IniSectionType = {}));
  M_5.RequestHandlerProtocol = void 0;
  (function (A) {
    A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0";
  })(M_5.RequestHandlerProtocol || (M_5.RequestHandlerProtocol = {}));
  M_5.SMITHY_CONTEXT_KEY = j_5;
  M_5.getDefaultClientConfiguration = W_5;
  M_5.resolveDefaultRuntimeConfig = D_5;
});

// Register to shared state
__$.DB8 = DB8;
