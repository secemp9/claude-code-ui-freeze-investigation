// Module: ex8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ex8 = v(f05 => {
  f05.HttpAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(f05.HttpAuthLocation || (f05.HttpAuthLocation = {}));
  f05.HttpApiKeyAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(f05.HttpApiKeyAuthLocation || (f05.HttpApiKeyAuthLocation = {}));
  f05.EndpointURLScheme = void 0;
  (function (A) {
    A.HTTP = "http", A.HTTPS = "https";
  })(f05.EndpointURLScheme || (f05.EndpointURLScheme = {}));
  f05.AlgorithmId = void 0;
  (function (A) {
    A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256";
  })(f05.AlgorithmId || (f05.AlgorithmId = {}));
  var D05 = A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => f05.AlgorithmId.SHA256,
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => f05.AlgorithmId.MD5,
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
    j05 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    M05 = A => {
      return D05(A);
    },
    P05 = A => {
      return j05(A);
    };
  f05.FieldPosition = void 0;
  (function (A) {
    A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER";
  })(f05.FieldPosition || (f05.FieldPosition = {}));
  var V05 = "__smithy_context";
  f05.IniSectionType = void 0;
  (function (A) {
    A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services";
  })(f05.IniSectionType || (f05.IniSectionType = {}));
  f05.RequestHandlerProtocol = void 0;
  (function (A) {
    A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0";
  })(f05.RequestHandlerProtocol || (f05.RequestHandlerProtocol = {}));
  f05.SMITHY_CONTEXT_KEY = V05;
  f05.getDefaultClientConfiguration = M05;
  f05.resolveDefaultRuntimeConfig = P05;
});

// Register to shared state
__$.ex8 = ex8;
