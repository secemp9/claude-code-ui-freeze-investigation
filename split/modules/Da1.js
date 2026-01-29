// Module: Da1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Da1 = v(mg5 => {
  mg5.HttpAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(mg5.HttpAuthLocation || (mg5.HttpAuthLocation = {}));
  mg5.HttpApiKeyAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(mg5.HttpApiKeyAuthLocation || (mg5.HttpApiKeyAuthLocation = {}));
  mg5.EndpointURLScheme = void 0;
  (function (A) {
    A.HTTP = "http", A.HTTPS = "https";
  })(mg5.EndpointURLScheme || (mg5.EndpointURLScheme = {}));
  mg5.AlgorithmId = void 0;
  (function (A) {
    A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256";
  })(mg5.AlgorithmId || (mg5.AlgorithmId = {}));
  var hg5 = A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => mg5.AlgorithmId.SHA256,
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => mg5.AlgorithmId.MD5,
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
    bg5 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    xg5 = A => {
      return hg5(A);
    },
    ug5 = A => {
      return bg5(A);
    };
  mg5.FieldPosition = void 0;
  (function (A) {
    A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER";
  })(mg5.FieldPosition || (mg5.FieldPosition = {}));
  var Bg5 = "__smithy_context";
  mg5.IniSectionType = void 0;
  (function (A) {
    A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services";
  })(mg5.IniSectionType || (mg5.IniSectionType = {}));
  mg5.RequestHandlerProtocol = void 0;
  (function (A) {
    A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0";
  })(mg5.RequestHandlerProtocol || (mg5.RequestHandlerProtocol = {}));
  mg5.SMITHY_CONTEXT_KEY = Bg5;
  mg5.getDefaultClientConfiguration = xg5;
  mg5.resolveDefaultRuntimeConfig = ug5;
});

// Register to shared state
__$.Da1 = Da1;
