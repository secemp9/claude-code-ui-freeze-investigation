// Module: i26
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var i26 = v(mh9 => {
  mh9.HttpAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(mh9.HttpAuthLocation || (mh9.HttpAuthLocation = {}));
  mh9.HttpApiKeyAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(mh9.HttpApiKeyAuthLocation || (mh9.HttpApiKeyAuthLocation = {}));
  mh9.EndpointURLScheme = void 0;
  (function (A) {
    A.HTTP = "http", A.HTTPS = "https";
  })(mh9.EndpointURLScheme || (mh9.EndpointURLScheme = {}));
  mh9.AlgorithmId = void 0;
  (function (A) {
    A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256";
  })(mh9.AlgorithmId || (mh9.AlgorithmId = {}));
  var hh9 = A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => mh9.AlgorithmId.SHA256,
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => mh9.AlgorithmId.MD5,
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
    bh9 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    xh9 = A => {
      return hh9(A);
    },
    uh9 = A => {
      return bh9(A);
    };
  mh9.FieldPosition = void 0;
  (function (A) {
    A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER";
  })(mh9.FieldPosition || (mh9.FieldPosition = {}));
  var Bh9 = "__smithy_context";
  mh9.IniSectionType = void 0;
  (function (A) {
    A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services";
  })(mh9.IniSectionType || (mh9.IniSectionType = {}));
  mh9.RequestHandlerProtocol = void 0;
  (function (A) {
    A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0";
  })(mh9.RequestHandlerProtocol || (mh9.RequestHandlerProtocol = {}));
  mh9.SMITHY_CONTEXT_KEY = Bh9;
  mh9.getDefaultClientConfiguration = xh9;
  mh9.resolveDefaultRuntimeConfig = uh9;
});

// Register to shared state
__$.i26 = i26;
