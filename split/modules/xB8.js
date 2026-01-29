// Module: xB8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xB8 = v(XG5 => {
  XG5.HttpAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(XG5.HttpAuthLocation || (XG5.HttpAuthLocation = {}));
  XG5.HttpApiKeyAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(XG5.HttpApiKeyAuthLocation || (XG5.HttpApiKeyAuthLocation = {}));
  XG5.EndpointURLScheme = void 0;
  (function (A) {
    A.HTTP = "http", A.HTTPS = "https";
  })(XG5.EndpointURLScheme || (XG5.EndpointURLScheme = {}));
  XG5.AlgorithmId = void 0;
  (function (A) {
    A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256";
  })(XG5.AlgorithmId || (XG5.AlgorithmId = {}));
  var zG5 = A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => XG5.AlgorithmId.SHA256,
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => XG5.AlgorithmId.MD5,
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
    wG5 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    HG5 = A => {
      return zG5(A);
    },
    JG5 = A => {
      return wG5(A);
    };
  XG5.FieldPosition = void 0;
  (function (A) {
    A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER";
  })(XG5.FieldPosition || (XG5.FieldPosition = {}));
  var OG5 = "__smithy_context";
  XG5.IniSectionType = void 0;
  (function (A) {
    A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services";
  })(XG5.IniSectionType || (XG5.IniSectionType = {}));
  XG5.RequestHandlerProtocol = void 0;
  (function (A) {
    A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0";
  })(XG5.RequestHandlerProtocol || (XG5.RequestHandlerProtocol = {}));
  XG5.SMITHY_CONTEXT_KEY = OG5;
  XG5.getDefaultClientConfiguration = HG5;
  XG5.resolveDefaultRuntimeConfig = JG5;
});

// Register to shared state
__$.xB8 = xB8;
