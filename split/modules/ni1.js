// Module: ni1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ni1 = v(kP5 => {
  kP5.HttpAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(kP5.HttpAuthLocation || (kP5.HttpAuthLocation = {}));
  kP5.HttpApiKeyAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(kP5.HttpApiKeyAuthLocation || (kP5.HttpApiKeyAuthLocation = {}));
  kP5.EndpointURLScheme = void 0;
  (function (A) {
    A.HTTP = "http", A.HTTPS = "https";
  })(kP5.EndpointURLScheme || (kP5.EndpointURLScheme = {}));
  kP5.AlgorithmId = void 0;
  (function (A) {
    A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256";
  })(kP5.AlgorithmId || (kP5.AlgorithmId = {}));
  var fP5 = A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => kP5.AlgorithmId.SHA256,
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => kP5.AlgorithmId.MD5,
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
    NP5 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    TP5 = A => {
      return fP5(A);
    },
    vP5 = A => {
      return NP5(A);
    };
  kP5.FieldPosition = void 0;
  (function (A) {
    A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER";
  })(kP5.FieldPosition || (kP5.FieldPosition = {}));
  var EP5 = "__smithy_context";
  kP5.IniSectionType = void 0;
  (function (A) {
    A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services";
  })(kP5.IniSectionType || (kP5.IniSectionType = {}));
  kP5.RequestHandlerProtocol = void 0;
  (function (A) {
    A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0";
  })(kP5.RequestHandlerProtocol || (kP5.RequestHandlerProtocol = {}));
  kP5.SMITHY_CONTEXT_KEY = EP5;
  kP5.getDefaultClientConfiguration = TP5;
  kP5.resolveDefaultRuntimeConfig = vP5;
});

// Register to shared state
__$.ni1 = ni1;
