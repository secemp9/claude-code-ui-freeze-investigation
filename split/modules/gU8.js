// Module: gU8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gU8 = v(Mk5 => {
  Mk5.HttpAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(Mk5.HttpAuthLocation || (Mk5.HttpAuthLocation = {}));
  Mk5.HttpApiKeyAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(Mk5.HttpApiKeyAuthLocation || (Mk5.HttpApiKeyAuthLocation = {}));
  Mk5.EndpointURLScheme = void 0;
  (function (A) {
    A.HTTP = "http", A.HTTPS = "https";
  })(Mk5.EndpointURLScheme || (Mk5.EndpointURLScheme = {}));
  Mk5.AlgorithmId = void 0;
  (function (A) {
    A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256";
  })(Mk5.AlgorithmId || (Mk5.AlgorithmId = {}));
  var Gk5 = A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => Mk5.AlgorithmId.SHA256,
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => Mk5.AlgorithmId.MD5,
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
    Zk5 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    Wk5 = A => {
      return Gk5(A);
    },
    Dk5 = A => {
      return Zk5(A);
    };
  Mk5.FieldPosition = void 0;
  (function (A) {
    A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER";
  })(Mk5.FieldPosition || (Mk5.FieldPosition = {}));
  var jk5 = "__smithy_context";
  Mk5.IniSectionType = void 0;
  (function (A) {
    A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services";
  })(Mk5.IniSectionType || (Mk5.IniSectionType = {}));
  Mk5.RequestHandlerProtocol = void 0;
  (function (A) {
    A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0";
  })(Mk5.RequestHandlerProtocol || (Mk5.RequestHandlerProtocol = {}));
  Mk5.SMITHY_CONTEXT_KEY = jk5;
  Mk5.getDefaultClientConfiguration = Wk5;
  Mk5.resolveDefaultRuntimeConfig = Dk5;
});

// Register to shared state
__$.gU8 = gU8;
