// Module: C26
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var C26 = v((aPw, cm4) => {
  var {
      defineProperty: j21,
      getOwnPropertyDescriptor: NI9,
      getOwnPropertyNames: TI9
    } = Object,
    vI9 = Object.prototype.hasOwnProperty,
    M21 = (A, K) => j21(A, "name", {
      value: K,
      configurable: !0
    }),
    EI9 = (A, K) => {
      for (var q in K) j21(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    kI9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of TI9(K)) if (!vI9.call(A, z) && z !== q) j21(A, z, {
          get: () => K[z],
          enumerable: !(Y = NI9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    CI9 = A => kI9(j21({}, "__esModule", {
      value: !0
    }), A),
    Bm4 = {};
  EI9(Bm4, {
    AlgorithmId: () => Qm4,
    EndpointURLScheme: () => Fm4,
    FieldPosition: () => Um4,
    HttpApiKeyAuthLocation: () => gm4,
    HttpAuthLocation: () => mm4,
    IniSectionType: () => pm4,
    RequestHandlerProtocol: () => dm4,
    SMITHY_CONTEXT_KEY: () => SI9,
    getDefaultClientConfiguration: () => yI9,
    resolveDefaultRuntimeConfig: () => II9
  });
  cm4.exports = CI9(Bm4);
  var mm4 = (A => {
      return A.HEADER = "header", A.QUERY = "query", A;
    })(mm4 || {}),
    gm4 = (A => {
      return A.HEADER = "header", A.QUERY = "query", A;
    })(gm4 || {}),
    Fm4 = (A => {
      return A.HTTP = "http", A.HTTPS = "https", A;
    })(Fm4 || {}),
    Qm4 = (A => {
      return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A;
    })(Qm4 || {}),
    LI9 = M21(A => {
      let K = [];
      if (A.sha256 !== void 0) K.push({
        algorithmId: () => "sha256",
        checksumConstructor: () => A.sha256
      });
      if (A.md5 != null) K.push({
        algorithmId: () => "md5",
        checksumConstructor: () => A.md5
      });
      return {
        _checksumAlgorithms: K,
        addChecksumAlgorithm(q) {
          this._checksumAlgorithms.push(q);
        },
        checksumAlgorithms() {
          return this._checksumAlgorithms;
        }
      };
    }, "getChecksumConfiguration"),
    RI9 = M21(A => {
      let K = {};
      return A.checksumAlgorithms().forEach(q => {
        K[q.algorithmId()] = q.checksumConstructor();
      }), K;
    }, "resolveChecksumRuntimeConfig"),
    yI9 = M21(A => {
      return {
        ...LI9(A)
      };
    }, "getDefaultClientConfiguration"),
    II9 = M21(A => {
      return {
        ...RI9(A)
      };
    }, "resolveDefaultRuntimeConfig"),
    Um4 = (A => {
      return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A;
    })(Um4 || {}),
    SI9 = "__smithy_context",
    pm4 = (A => {
      return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A;
    })(pm4 || {}),
    dm4 = (A => {
      return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A;
    })(dm4 || {});
});

// Register to shared state
__$.C26 = C26;
