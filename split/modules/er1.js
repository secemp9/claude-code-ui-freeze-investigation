// Module: er1
// Dependencies: aw, Gz, WD

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var er1 = v(Gd8 => {
  Object.defineProperty(Gd8, "__esModule", {
    value: !0
  });
  Gd8.resolveHttpAuthSchemeConfig = Gd8.defaultBedrockHttpAuthSchemeProvider = Gd8.defaultBedrockHttpAuthSchemeParametersProvider = void 0;
  var ty5 = __$.aw(),
    sr1 = __$.Gz(),
    tr1 = __$.WD(),
    ey5 = async (A, K, q) => {
      return {
        operation: (0, tr1.getSmithyContext)(K).operation,
        region: (await (0, tr1.normalizeProvider)(A.region)()) || (() => {
          throw Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
  Gd8.defaultBedrockHttpAuthSchemeParametersProvider = ey5;
  function AI5(A) {
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
  function KI5(A) {
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
  var qI5 = A => {
    let K = [];
    switch (A.operation) {
      default:
        K.push(AI5(A)), K.push(KI5(A));
    }
    return K;
  };
  Gd8.defaultBedrockHttpAuthSchemeProvider = qI5;
  var YI5 = A => {
    let K = (0, sr1.memoizeIdentityProvider)(A.token, sr1.isIdentityExpired, sr1.doesIdentityRequireRefresh),
      q = (0, ty5.resolveAwsSdkSigV4Config)(A);
    return Object.assign(q, {
      authSchemePreference: (0, tr1.normalizeProvider)(A.authSchemePreference ?? []),
      token: K
    });
  };
  Gd8.resolveHttpAuthSchemeConfig = YI5;
});

// Register to shared state
__$.er1 = er1;
