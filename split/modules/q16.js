// Module: q16
// Dependencies: aw, Gz, WD

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var q16 = v(o64 => {
  Object.defineProperty(o64, "__esModule", {
    value: !0
  });
  o64.resolveHttpAuthSchemeConfig = o64.defaultBedrockRuntimeHttpAuthSchemeProvider = o64.defaultBedrockRuntimeHttpAuthSchemeParametersProvider = void 0;
  var ET3 = __$.aw(),
    A16 = __$.Gz(),
    K16 = __$.WD(),
    kT3 = async (A, K, q) => {
      return {
        operation: (0, K16.getSmithyContext)(K).operation,
        region: (await (0, K16.normalizeProvider)(A.region)()) || (() => {
          throw Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
  o64.defaultBedrockRuntimeHttpAuthSchemeParametersProvider = kT3;
  function CT3(A) {
    return {
      schemeId: "aws.auth#sigv4",
      signingProperties: {
        name: "bedrock",
        region: A.region
      },
      propertiesExtractor: (K, q) => ({
        signingProperties: {
          config: K,
          context: q
        }
      })
    };
  }
  function LT3(A) {
    return {
      schemeId: "smithy.api#httpBearerAuth",
      propertiesExtractor: ({
        profile: K,
        filepath: q,
        configFilepath: Y,
        ignoreCache: z
      }, w) => ({
        identityProperties: {
          profile: K,
          filepath: q,
          configFilepath: Y,
          ignoreCache: z
        }
      })
    };
  }
  var RT3 = A => {
    let K = [];
    switch (A.operation) {
      default:
        K.push(CT3(A)), K.push(LT3(A));
    }
    return K;
  };
  o64.defaultBedrockRuntimeHttpAuthSchemeProvider = RT3;
  var yT3 = A => {
    let K = (0, A16.memoizeIdentityProvider)(A.token, A16.isIdentityExpired, A16.doesIdentityRequireRefresh),
      q = (0, ET3.resolveAwsSdkSigV4Config)(A);
    return Object.assign(q, {
      authSchemePreference: (0, K16.normalizeProvider)(A.authSchemePreference ?? []),
      token: K
    });
  };
  o64.resolveHttpAuthSchemeConfig = yT3;
});

// Register to shared state
__$.q16 = q16;
