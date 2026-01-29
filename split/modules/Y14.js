// Module: Y14
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Y14 = v(bM3 => {
  bM3.HttpAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(bM3.HttpAuthLocation || (bM3.HttpAuthLocation = {}));
  bM3.HttpApiKeyAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(bM3.HttpApiKeyAuthLocation || (bM3.HttpApiKeyAuthLocation = {}));
  bM3.EndpointURLScheme = void 0;
  (function (A) {
    A.HTTP = "http", A.HTTPS = "https";
  })(bM3.EndpointURLScheme || (bM3.EndpointURLScheme = {}));
  bM3.AlgorithmId = void 0;
  (function (A) {
    A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256";
  })(bM3.AlgorithmId || (bM3.AlgorithmId = {}));
  var RM3 = A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => bM3.AlgorithmId.SHA256,
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => bM3.AlgorithmId.MD5,
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
    yM3 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    IM3 = A => {
      return RM3(A);
    },
    SM3 = A => {
      return yM3(A);
    };
  bM3.FieldPosition = void 0;
  (function (A) {
    A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER";
  })(bM3.FieldPosition || (bM3.FieldPosition = {}));
  var hM3 = "__smithy_context";
  bM3.IniSectionType = void 0;
  (function (A) {
    A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services";
  })(bM3.IniSectionType || (bM3.IniSectionType = {}));
  bM3.RequestHandlerProtocol = void 0;
  (function (A) {
    A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0";
  })(bM3.RequestHandlerProtocol || (bM3.RequestHandlerProtocol = {}));
  bM3.SMITHY_CONTEXT_KEY = hM3;
  bM3.getDefaultClientConfiguration = IM3;
  bM3.resolveDefaultRuntimeConfig = SM3;
});

// Register to shared state
__$.Y14 = Y14;
