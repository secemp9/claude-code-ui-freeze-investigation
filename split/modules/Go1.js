// Module: Go1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Go1 = v(ZS5 => {
  ZS5.HttpAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(ZS5.HttpAuthLocation || (ZS5.HttpAuthLocation = {}));
  ZS5.HttpApiKeyAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(ZS5.HttpApiKeyAuthLocation || (ZS5.HttpApiKeyAuthLocation = {}));
  ZS5.EndpointURLScheme = void 0;
  (function (A) {
    A.HTTP = "http", A.HTTPS = "https";
  })(ZS5.EndpointURLScheme || (ZS5.EndpointURLScheme = {}));
  ZS5.AlgorithmId = void 0;
  (function (A) {
    A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256";
  })(ZS5.AlgorithmId || (ZS5.AlgorithmId = {}));
  var OS5 = A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => ZS5.AlgorithmId.SHA256,
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => ZS5.AlgorithmId.MD5,
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
    XS5 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    $S5 = A => {
      return OS5(A);
    },
    _S5 = A => {
      return XS5(A);
    };
  ZS5.FieldPosition = void 0;
  (function (A) {
    A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER";
  })(ZS5.FieldPosition || (ZS5.FieldPosition = {}));
  var GS5 = "__smithy_context";
  ZS5.IniSectionType = void 0;
  (function (A) {
    A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services";
  })(ZS5.IniSectionType || (ZS5.IniSectionType = {}));
  ZS5.RequestHandlerProtocol = void 0;
  (function (A) {
    A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0";
  })(ZS5.RequestHandlerProtocol || (ZS5.RequestHandlerProtocol = {}));
  ZS5.SMITHY_CONTEXT_KEY = GS5;
  ZS5.getDefaultClientConfiguration = $S5;
  ZS5.resolveDefaultRuntimeConfig = _S5;
});

// Register to shared state
__$.Go1 = Go1;
