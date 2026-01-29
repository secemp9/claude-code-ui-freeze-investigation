// Module: Az6
// Dependencies: aw, WD

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Az6 = v(DF4 => {
  Object.defineProperty(DF4, "__esModule", {
    value: !0
  });
  DF4.resolveHttpAuthSchemeConfig = DF4.defaultCognitoIdentityHttpAuthSchemeProvider = DF4.defaultCognitoIdentityHttpAuthSchemeParametersProvider = void 0;
  var hb9 = __$.aw(),
    e26 = __$.WD(),
    bb9 = async (A, K, q) => {
      return {
        operation: (0, e26.getSmithyContext)(K).operation,
        region: (await (0, e26.normalizeProvider)(A.region)()) || (() => {
          throw Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
  DF4.defaultCognitoIdentityHttpAuthSchemeParametersProvider = bb9;
  function xb9(A) {
    return {
      schemeId: "aws.auth#sigv4",
      signingProperties: {
        name: "cognito-identity",
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
  function h21(A) {
    return {
      schemeId: "smithy.api#noAuth"
    };
  }
  var ub9 = A => {
    let K = [];
    switch (A.operation) {
      case "GetCredentialsForIdentity":
        {
          K.push(h21(A));
          break;
        }
      case "GetId":
        {
          K.push(h21(A));
          break;
        }
      case "GetOpenIdToken":
        {
          K.push(h21(A));
          break;
        }
      case "UnlinkIdentity":
        {
          K.push(h21(A));
          break;
        }
      default:
        K.push(xb9(A));
    }
    return K;
  };
  DF4.defaultCognitoIdentityHttpAuthSchemeProvider = ub9;
  var Bb9 = A => {
    let K = (0, hb9.resolveAwsSdkSigV4Config)(A);
    return Object.assign(K, {
      authSchemePreference: (0, e26.normalizeProvider)(A.authSchemePreference ?? [])
    });
  };
  DF4.resolveHttpAuthSchemeConfig = Bb9;
});

// Register to shared state
__$.Az6 = Az6;
