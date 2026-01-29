// Module: Rr1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Rr1 = v(_L5 => {
  _L5.HttpAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(_L5.HttpAuthLocation || (_L5.HttpAuthLocation = {}));
  _L5.HttpApiKeyAuthLocation = void 0;
  (function (A) {
    A.HEADER = "header", A.QUERY = "query";
  })(_L5.HttpApiKeyAuthLocation || (_L5.HttpApiKeyAuthLocation = {}));
  _L5.EndpointURLScheme = void 0;
  (function (A) {
    A.HTTP = "http", A.HTTPS = "https";
  })(_L5.EndpointURLScheme || (_L5.EndpointURLScheme = {}));
  _L5.AlgorithmId = void 0;
  (function (A) {
    A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256";
  })(_L5.AlgorithmId || (_L5.AlgorithmId = {}));
  var HL5 = A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => _L5.AlgorithmId.SHA256,
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => _L5.AlgorithmId.MD5,
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
    JL5 = A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    },
    OL5 = A => {
      return HL5(A);
    },
    XL5 = A => {
      return JL5(A);
    };
  _L5.FieldPosition = void 0;
  (function (A) {
    A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER";
  })(_L5.FieldPosition || (_L5.FieldPosition = {}));
  var $L5 = "__smithy_context";
  _L5.IniSectionType = void 0;
  (function (A) {
    A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services";
  })(_L5.IniSectionType || (_L5.IniSectionType = {}));
  _L5.RequestHandlerProtocol = void 0;
  (function (A) {
    A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0";
  })(_L5.RequestHandlerProtocol || (_L5.RequestHandlerProtocol = {}));
  _L5.SMITHY_CONTEXT_KEY = $L5;
  _L5.getDefaultClientConfiguration = OL5;
  _L5.resolveDefaultRuntimeConfig = XL5;
});

// Register to shared state
__$.Rr1 = Rr1;
