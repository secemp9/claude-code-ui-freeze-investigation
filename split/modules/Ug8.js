// Module: Ug8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ug8 = v(KM5 => {
  KM5.HttpAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(KM5.HttpAuthLocation || (KM5.HttpAuthLocation = {}));
  KM5.HttpApiKeyAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(KM5.HttpApiKeyAuthLocation || (KM5.HttpApiKeyAuthLocation = {}));
  KM5.EndpointURLScheme = void 0;
  (function (A) {
    A.HTTP = "http", A.HTTPS = "https";
  })(KM5.EndpointURLScheme || (KM5.EndpointURLScheme = {}));
  KM5.AlgorithmId = void 0;
  (function (A) {
    A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256";
  })(KM5.AlgorithmId || (KM5.AlgorithmId = {}));
  var aj5 = A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => KM5.AlgorithmId.SHA256,
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => KM5.AlgorithmId.MD5,
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
    sj5 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    tj5 = A => {
      return aj5(A);
    },
    ej5 = A => {
      return sj5(A);
    };
  KM5.FieldPosition = void 0;
  (function (A) {
    A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER";
  })(KM5.FieldPosition || (KM5.FieldPosition = {}));
  var AM5 = "__smithy_context";
  KM5.IniSectionType = void 0;
  (function (A) {
    A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services";
  })(KM5.IniSectionType || (KM5.IniSectionType = {}));
  KM5.RequestHandlerProtocol = void 0;
  (function (A) {
    A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0";
  })(KM5.RequestHandlerProtocol || (KM5.RequestHandlerProtocol = {}));
  KM5.SMITHY_CONTEXT_KEY = AM5;
  KM5.getDefaultClientConfiguration = tj5;
  KM5.resolveDefaultRuntimeConfig = ej5;
});

// Register to shared state
__$.Ug8 = Ug8;
