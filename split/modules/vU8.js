// Module: vU8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vU8 = v(hE5 => {
  hE5.HttpAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(hE5.HttpAuthLocation || (hE5.HttpAuthLocation = {}));
  hE5.HttpApiKeyAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(hE5.HttpApiKeyAuthLocation || (hE5.HttpApiKeyAuthLocation = {}));
  hE5.EndpointURLScheme = void 0;
  (function (A) {
    A.HTTP = "http", A.HTTPS = "https";
  })(hE5.EndpointURLScheme || (hE5.EndpointURLScheme = {}));
  hE5.AlgorithmId = void 0;
  (function (A) {
    A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256";
  })(hE5.AlgorithmId || (hE5.AlgorithmId = {}));
  var LE5 = A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => hE5.AlgorithmId.SHA256,
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => hE5.AlgorithmId.MD5,
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
    RE5 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    yE5 = A => {
      return LE5(A);
    },
    IE5 = A => {
      return RE5(A);
    };
  hE5.FieldPosition = void 0;
  (function (A) {
    A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER";
  })(hE5.FieldPosition || (hE5.FieldPosition = {}));
  var SE5 = "__smithy_context";
  hE5.IniSectionType = void 0;
  (function (A) {
    A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services";
  })(hE5.IniSectionType || (hE5.IniSectionType = {}));
  hE5.RequestHandlerProtocol = void 0;
  (function (A) {
    A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0";
  })(hE5.RequestHandlerProtocol || (hE5.RequestHandlerProtocol = {}));
  hE5.SMITHY_CONTEXT_KEY = SE5;
  hE5.getDefaultClientConfiguration = yE5;
  hE5.resolveDefaultRuntimeConfig = IE5;
});

// Register to shared state
__$.vU8 = vU8;
