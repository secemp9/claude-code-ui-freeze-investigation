// Module: px8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var px8 = v(mO5 => {
  mO5.HttpAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(mO5.HttpAuthLocation || (mO5.HttpAuthLocation = {}));
  mO5.HttpApiKeyAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(mO5.HttpApiKeyAuthLocation || (mO5.HttpApiKeyAuthLocation = {}));
  mO5.EndpointURLScheme = void 0;
  (function (A) {
    A.HTTP = "http", A.HTTPS = "https";
  })(mO5.EndpointURLScheme || (mO5.EndpointURLScheme = {}));
  mO5.AlgorithmId = void 0;
  (function (A) {
    A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256";
  })(mO5.AlgorithmId || (mO5.AlgorithmId = {}));
  var hO5 = A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => mO5.AlgorithmId.SHA256,
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => mO5.AlgorithmId.MD5,
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
    bO5 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    xO5 = A => {
      return hO5(A);
    },
    uO5 = A => {
      return bO5(A);
    };
  mO5.FieldPosition = void 0;
  (function (A) {
    A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER";
  })(mO5.FieldPosition || (mO5.FieldPosition = {}));
  var BO5 = "__smithy_context";
  mO5.IniSectionType = void 0;
  (function (A) {
    A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services";
  })(mO5.IniSectionType || (mO5.IniSectionType = {}));
  mO5.RequestHandlerProtocol = void 0;
  (function (A) {
    A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0";
  })(mO5.RequestHandlerProtocol || (mO5.RequestHandlerProtocol = {}));
  mO5.SMITHY_CONTEXT_KEY = BO5;
  mO5.getDefaultClientConfiguration = xO5;
  mO5.resolveDefaultRuntimeConfig = uO5;
});

// Register to shared state
__$.px8 = px8;
