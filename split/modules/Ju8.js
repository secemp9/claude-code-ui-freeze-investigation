// Module: Ju8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ju8 = v(wX5 => {
  wX5.HttpAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(wX5.HttpAuthLocation || (wX5.HttpAuthLocation = {}));
  wX5.HttpApiKeyAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(wX5.HttpApiKeyAuthLocation || (wX5.HttpApiKeyAuthLocation = {}));
  wX5.EndpointURLScheme = void 0;
  (function (A) {
    A.HTTP = "http", A.HTTPS = "https";
  })(wX5.EndpointURLScheme || (wX5.EndpointURLScheme = {}));
  wX5.AlgorithmId = void 0;
  (function (A) {
    A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256";
  })(wX5.AlgorithmId || (wX5.AlgorithmId = {}));
  var AX5 = A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => wX5.AlgorithmId.SHA256,
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => wX5.AlgorithmId.MD5,
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
    KX5 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    qX5 = A => {
      return AX5(A);
    },
    YX5 = A => {
      return KX5(A);
    };
  wX5.FieldPosition = void 0;
  (function (A) {
    A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER";
  })(wX5.FieldPosition || (wX5.FieldPosition = {}));
  var zX5 = "__smithy_context";
  wX5.IniSectionType = void 0;
  (function (A) {
    A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services";
  })(wX5.IniSectionType || (wX5.IniSectionType = {}));
  wX5.RequestHandlerProtocol = void 0;
  (function (A) {
    A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0";
  })(wX5.RequestHandlerProtocol || (wX5.RequestHandlerProtocol = {}));
  wX5.SMITHY_CONTEXT_KEY = zX5;
  wX5.getDefaultClientConfiguration = qX5;
  wX5.resolveDefaultRuntimeConfig = YX5;
});

// Register to shared state
__$.Ju8 = Ju8;
