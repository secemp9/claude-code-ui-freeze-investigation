// Module: en8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var en8 = v(Tp5 => {
  Tp5.HttpAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(Tp5.HttpAuthLocation || (Tp5.HttpAuthLocation = {}));
  Tp5.HttpApiKeyAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(Tp5.HttpApiKeyAuthLocation || (Tp5.HttpApiKeyAuthLocation = {}));
  Tp5.EndpointURLScheme = void 0;
  (function (A) {
    A.HTTP = "http", A.HTTPS = "https";
  })(Tp5.EndpointURLScheme || (Tp5.EndpointURLScheme = {}));
  Tp5.AlgorithmId = void 0;
  (function (A) {
    A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256";
  })(Tp5.AlgorithmId || (Tp5.AlgorithmId = {}));
  var Mp5 = A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => Tp5.AlgorithmId.SHA256,
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => Tp5.AlgorithmId.MD5,
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
    Pp5 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    Vp5 = A => {
      return Mp5(A);
    },
    fp5 = A => {
      return Pp5(A);
    };
  Tp5.FieldPosition = void 0;
  (function (A) {
    A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER";
  })(Tp5.FieldPosition || (Tp5.FieldPosition = {}));
  var Np5 = "__smithy_context";
  Tp5.IniSectionType = void 0;
  (function (A) {
    A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services";
  })(Tp5.IniSectionType || (Tp5.IniSectionType = {}));
  Tp5.RequestHandlerProtocol = void 0;
  (function (A) {
    A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0";
  })(Tp5.RequestHandlerProtocol || (Tp5.RequestHandlerProtocol = {}));
  Tp5.SMITHY_CONTEXT_KEY = Np5;
  Tp5.getDefaultClientConfiguration = Vp5;
  Tp5.resolveDefaultRuntimeConfig = fp5;
});

// Register to shared state
__$.en8 = en8;
