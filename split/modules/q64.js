// Module: q64
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var q64 = v(SV3 => {
  SV3.HttpAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(SV3.HttpAuthLocation || (SV3.HttpAuthLocation = {}));
  SV3.HttpApiKeyAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(SV3.HttpApiKeyAuthLocation || (SV3.HttpApiKeyAuthLocation = {}));
  SV3.EndpointURLScheme = void 0;
  (function (A) {
    A.HTTP = "http", A.HTTPS = "https";
  })(SV3.EndpointURLScheme || (SV3.EndpointURLScheme = {}));
  SV3.AlgorithmId = void 0;
  (function (A) {
    A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256";
  })(SV3.AlgorithmId || (SV3.AlgorithmId = {}));
  var CV3 = A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => SV3.AlgorithmId.SHA256,
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => SV3.AlgorithmId.MD5,
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
    LV3 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    RV3 = A => {
      return CV3(A);
    },
    yV3 = A => {
      return LV3(A);
    };
  SV3.FieldPosition = void 0;
  (function (A) {
    A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER";
  })(SV3.FieldPosition || (SV3.FieldPosition = {}));
  var IV3 = "__smithy_context";
  SV3.IniSectionType = void 0;
  (function (A) {
    A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services";
  })(SV3.IniSectionType || (SV3.IniSectionType = {}));
  SV3.RequestHandlerProtocol = void 0;
  (function (A) {
    A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0";
  })(SV3.RequestHandlerProtocol || (SV3.RequestHandlerProtocol = {}));
  SV3.SMITHY_CONTEXT_KEY = IV3;
  SV3.getDefaultClientConfiguration = RV3;
  SV3.resolveDefaultRuntimeConfig = yV3;
});

// Register to shared state
__$.q64 = q64;
