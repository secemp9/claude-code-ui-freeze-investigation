// Module: nA6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nA6 = v(yN3 => {
  yN3.HttpAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(yN3.HttpAuthLocation || (yN3.HttpAuthLocation = {}));
  yN3.HttpApiKeyAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(yN3.HttpApiKeyAuthLocation || (yN3.HttpApiKeyAuthLocation = {}));
  yN3.EndpointURLScheme = void 0;
  (function (A) {
    A.HTTP = "http", A.HTTPS = "https";
  })(yN3.EndpointURLScheme || (yN3.EndpointURLScheme = {}));
  yN3.AlgorithmId = void 0;
  (function (A) {
    A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256";
  })(yN3.AlgorithmId || (yN3.AlgorithmId = {}));
  var EN3 = A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => yN3.AlgorithmId.SHA256,
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => yN3.AlgorithmId.MD5,
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
    kN3 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    CN3 = A => {
      return EN3(A);
    },
    LN3 = A => {
      return kN3(A);
    };
  yN3.FieldPosition = void 0;
  (function (A) {
    A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER";
  })(yN3.FieldPosition || (yN3.FieldPosition = {}));
  var RN3 = "__smithy_context";
  yN3.IniSectionType = void 0;
  (function (A) {
    A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services";
  })(yN3.IniSectionType || (yN3.IniSectionType = {}));
  yN3.RequestHandlerProtocol = void 0;
  (function (A) {
    A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0";
  })(yN3.RequestHandlerProtocol || (yN3.RequestHandlerProtocol = {}));
  yN3.SMITHY_CONTEXT_KEY = RN3;
  yN3.getDefaultClientConfiguration = CN3;
  yN3.resolveDefaultRuntimeConfig = LN3;
});

// Register to shared state
__$.nA6 = nA6;
