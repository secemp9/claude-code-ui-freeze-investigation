// Module: oP6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oP6 = v(nyY => {
  nyY.HttpAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(nyY.HttpAuthLocation || (nyY.HttpAuthLocation = {}));
  nyY.HttpApiKeyAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(nyY.HttpApiKeyAuthLocation || (nyY.HttpApiKeyAuthLocation = {}));
  nyY.EndpointURLScheme = void 0;
  (function (A) {
    A.HTTP = "http", A.HTTPS = "https";
  })(nyY.EndpointURLScheme || (nyY.EndpointURLScheme = {}));
  nyY.AlgorithmId = void 0;
  (function (A) {
    A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256";
  })(nyY.AlgorithmId || (nyY.AlgorithmId = {}));
  var pyY = A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => nyY.AlgorithmId.SHA256,
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => nyY.AlgorithmId.MD5,
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
    dyY = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    cyY = A => {
      return pyY(A);
    },
    lyY = A => {
      return dyY(A);
    };
  nyY.FieldPosition = void 0;
  (function (A) {
    A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER";
  })(nyY.FieldPosition || (nyY.FieldPosition = {}));
  var iyY = "__smithy_context";
  nyY.IniSectionType = void 0;
  (function (A) {
    A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services";
  })(nyY.IniSectionType || (nyY.IniSectionType = {}));
  nyY.RequestHandlerProtocol = void 0;
  (function (A) {
    A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0";
  })(nyY.RequestHandlerProtocol || (nyY.RequestHandlerProtocol = {}));
  nyY.SMITHY_CONTEXT_KEY = iyY;
  nyY.getDefaultClientConfiguration = cyY;
  nyY.resolveDefaultRuntimeConfig = lyY;
});

// Register to shared state
__$.oP6 = oP6;
