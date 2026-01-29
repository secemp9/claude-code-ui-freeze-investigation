// Module: Zl1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Zl1 = v(a05 => {
  a05.HttpAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(a05.HttpAuthLocation || (a05.HttpAuthLocation = {}));
  a05.HttpApiKeyAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(a05.HttpApiKeyAuthLocation || (a05.HttpApiKeyAuthLocation = {}));
  a05.EndpointURLScheme = void 0;
  (function (A) {
    A.HTTP = "http", A.HTTPS = "https";
  })(a05.EndpointURLScheme || (a05.EndpointURLScheme = {}));
  a05.AlgorithmId = void 0;
  (function (A) {
    A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256";
  })(a05.AlgorithmId || (a05.AlgorithmId = {}));
  var l05 = A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => a05.AlgorithmId.SHA256,
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => a05.AlgorithmId.MD5,
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
    i05 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    n05 = A => {
      return l05(A);
    },
    r05 = A => {
      return i05(A);
    };
  a05.FieldPosition = void 0;
  (function (A) {
    A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER";
  })(a05.FieldPosition || (a05.FieldPosition = {}));
  var o05 = "__smithy_context";
  a05.IniSectionType = void 0;
  (function (A) {
    A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services";
  })(a05.IniSectionType || (a05.IniSectionType = {}));
  a05.RequestHandlerProtocol = void 0;
  (function (A) {
    A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0";
  })(a05.RequestHandlerProtocol || (a05.RequestHandlerProtocol = {}));
  a05.SMITHY_CONTEXT_KEY = o05;
  a05.getDefaultClientConfiguration = n05;
  a05.resolveDefaultRuntimeConfig = r05;
});

// Register to shared state
__$.Zl1 = Zl1;
