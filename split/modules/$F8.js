// Module: $F8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $F8 = v(YP5 => {
  YP5.HttpAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(YP5.HttpAuthLocation || (YP5.HttpAuthLocation = {}));
  YP5.HttpApiKeyAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(YP5.HttpApiKeyAuthLocation || (YP5.HttpApiKeyAuthLocation = {}));
  YP5.EndpointURLScheme = void 0;
  (function (A) {
    A.HTTP = "http", A.HTTPS = "https";
  })(YP5.EndpointURLScheme || (YP5.EndpointURLScheme = {}));
  YP5.AlgorithmId = void 0;
  (function (A) {
    A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256";
  })(YP5.AlgorithmId || (YP5.AlgorithmId = {}));
  var tM5 = A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => YP5.AlgorithmId.SHA256,
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => YP5.AlgorithmId.MD5,
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
    eM5 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    AP5 = A => {
      return tM5(A);
    },
    KP5 = A => {
      return eM5(A);
    };
  YP5.FieldPosition = void 0;
  (function (A) {
    A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER";
  })(YP5.FieldPosition || (YP5.FieldPosition = {}));
  var qP5 = "__smithy_context";
  YP5.IniSectionType = void 0;
  (function (A) {
    A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services";
  })(YP5.IniSectionType || (YP5.IniSectionType = {}));
  YP5.RequestHandlerProtocol = void 0;
  (function (A) {
    A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0";
  })(YP5.RequestHandlerProtocol || (YP5.RequestHandlerProtocol = {}));
  YP5.SMITHY_CONTEXT_KEY = qP5;
  YP5.getDefaultClientConfiguration = AP5;
  YP5.resolveDefaultRuntimeConfig = KP5;
});

// Register to shared state
__$.$F8 = $F8;
