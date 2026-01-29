// Module: cr1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cr1 = v(Yy5 => {
  Yy5.HttpAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(Yy5.HttpAuthLocation || (Yy5.HttpAuthLocation = {}));
  Yy5.HttpApiKeyAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(Yy5.HttpApiKeyAuthLocation || (Yy5.HttpApiKeyAuthLocation = {}));
  Yy5.EndpointURLScheme = void 0;
  (function (A) {
    A.HTTP = "http", A.HTTPS = "https";
  })(Yy5.EndpointURLScheme || (Yy5.EndpointURLScheme = {}));
  Yy5.AlgorithmId = void 0;
  (function (A) {
    A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256";
  })(Yy5.AlgorithmId || (Yy5.AlgorithmId = {}));
  var tR5 = A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => Yy5.AlgorithmId.SHA256,
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => Yy5.AlgorithmId.MD5,
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
    eR5 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    Ay5 = A => {
      return tR5(A);
    },
    Ky5 = A => {
      return eR5(A);
    };
  Yy5.FieldPosition = void 0;
  (function (A) {
    A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER";
  })(Yy5.FieldPosition || (Yy5.FieldPosition = {}));
  var qy5 = "__smithy_context";
  Yy5.IniSectionType = void 0;
  (function (A) {
    A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services";
  })(Yy5.IniSectionType || (Yy5.IniSectionType = {}));
  Yy5.RequestHandlerProtocol = void 0;
  (function (A) {
    A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0";
  })(Yy5.RequestHandlerProtocol || (Yy5.RequestHandlerProtocol = {}));
  Yy5.SMITHY_CONTEXT_KEY = qy5;
  Yy5.getDefaultClientConfiguration = Ay5;
  Yy5.resolveDefaultRuntimeConfig = Ky5;
});

// Register to shared state
__$.cr1 = cr1;
