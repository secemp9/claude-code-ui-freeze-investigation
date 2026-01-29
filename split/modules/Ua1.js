// Module: Ua1
// Dependencies: aw, WD

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ua1 = v(zr8 => {
  Object.defineProperty(zr8, "__esModule", {
    value: !0
  });
  zr8.resolveHttpAuthSchemeConfig = zr8.defaultSigninHttpAuthSchemeProvider = zr8.defaultSigninHttpAuthSchemeParametersProvider = void 0;
  var Fp5 = __$.aw(),
    Qa1 = __$.WD(),
    Qp5 = async (A, K, q) => {
      return {
        operation: (0, Qa1.getSmithyContext)(K).operation,
        region: (await (0, Qa1.normalizeProvider)(A.region)()) || (() => {
          throw Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
  zr8.defaultSigninHttpAuthSchemeParametersProvider = Qp5;
  function Up5(A) {
    return {
      schemeId: "aws.auth#sigv4",
      signingProperties: {
        name: "signin",
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
  function pp5(A) {
    return {
      schemeId: "smithy.api#noAuth"
    };
  }
  var dp5 = A => {
    let K = [];
    switch (A.operation) {
      case "CreateOAuth2Token":
        {
          K.push(pp5(A));
          break;
        }
      default:
        K.push(Up5(A));
    }
    return K;
  };
  zr8.defaultSigninHttpAuthSchemeProvider = dp5;
  var cp5 = A => {
    let K = (0, Fp5.resolveAwsSdkSigV4Config)(A);
    return Object.assign(K, {
      authSchemePreference: (0, Qa1.normalizeProvider)(A.authSchemePreference ?? [])
    });
  };
  zr8.resolveHttpAuthSchemeConfig = cp5;
});

// Register to shared state
__$.Ua1 = Ua1;
