// Module: Xu8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Xu8 = v(VX5 => {
  VX5.HttpAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(VX5.HttpAuthLocation || (VX5.HttpAuthLocation = {}));
  VX5.HttpApiKeyAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(VX5.HttpApiKeyAuthLocation || (VX5.HttpApiKeyAuthLocation = {}));
  VX5.EndpointURLScheme = void 0;
  (function (A) {
    A.HTTP = "http", A.HTTPS = "https";
  })(VX5.EndpointURLScheme || (VX5.EndpointURLScheme = {}));
  VX5.AlgorithmId = void 0;
  (function (A) {
    A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256";
  })(VX5.AlgorithmId || (VX5.AlgorithmId = {}));
  var WX5 = A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => VX5.AlgorithmId.SHA256,
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => VX5.AlgorithmId.MD5,
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
    DX5 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    jX5 = A => {
      return WX5(A);
    },
    MX5 = A => {
      return DX5(A);
    };
  VX5.FieldPosition = void 0;
  (function (A) {
    A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER";
  })(VX5.FieldPosition || (VX5.FieldPosition = {}));
  var PX5 = "__smithy_context";
  VX5.IniSectionType = void 0;
  (function (A) {
    A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services";
  })(VX5.IniSectionType || (VX5.IniSectionType = {}));
  VX5.RequestHandlerProtocol = void 0;
  (function (A) {
    A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0";
  })(VX5.RequestHandlerProtocol || (VX5.RequestHandlerProtocol = {}));
  VX5.SMITHY_CONTEXT_KEY = PX5;
  VX5.getDefaultClientConfiguration = jX5;
  VX5.resolveDefaultRuntimeConfig = MX5;
});

// Register to shared state
__$.Xu8 = Xu8;
