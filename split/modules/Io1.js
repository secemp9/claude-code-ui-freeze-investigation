// Module: Io1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Io1 = v(Wb5 => {
  Wb5.HttpAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(Wb5.HttpAuthLocation || (Wb5.HttpAuthLocation = {}));
  Wb5.HttpApiKeyAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(Wb5.HttpApiKeyAuthLocation || (Wb5.HttpApiKeyAuthLocation = {}));
  Wb5.EndpointURLScheme = void 0;
  (function (A) {
    A.HTTP = "http", A.HTTPS = "https";
  })(Wb5.EndpointURLScheme || (Wb5.EndpointURLScheme = {}));
  Wb5.AlgorithmId = void 0;
  (function (A) {
    A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256";
  })(Wb5.AlgorithmId || (Wb5.AlgorithmId = {}));
  var Xb5 = A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => Wb5.AlgorithmId.SHA256,
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => Wb5.AlgorithmId.MD5,
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
    $b5 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    _b5 = A => {
      return Xb5(A);
    },
    Gb5 = A => {
      return $b5(A);
    };
  Wb5.FieldPosition = void 0;
  (function (A) {
    A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER";
  })(Wb5.FieldPosition || (Wb5.FieldPosition = {}));
  var Zb5 = "__smithy_context";
  Wb5.IniSectionType = void 0;
  (function (A) {
    A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services";
  })(Wb5.IniSectionType || (Wb5.IniSectionType = {}));
  Wb5.RequestHandlerProtocol = void 0;
  (function (A) {
    A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0";
  })(Wb5.RequestHandlerProtocol || (Wb5.RequestHandlerProtocol = {}));
  Wb5.SMITHY_CONTEXT_KEY = Zb5;
  Wb5.getDefaultClientConfiguration = _b5;
  Wb5.resolveDefaultRuntimeConfig = Gb5;
});

// Register to shared state
__$.Io1 = Io1;
