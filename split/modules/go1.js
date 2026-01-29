// Module: go1
// Dependencies: aw, WD

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var go1 = v(yc8 => {
  Object.defineProperty(yc8, "__esModule", {
    value: !0
  });
  yc8.resolveHttpAuthSchemeConfig = yc8.defaultSSOOIDCHttpAuthSchemeProvider = yc8.defaultSSOOIDCHttpAuthSchemeParametersProvider = void 0;
  var Xx5 = __$.aw(),
    mo1 = __$.WD(),
    $x5 = async (A, K, q) => {
      return {
        operation: (0, mo1.getSmithyContext)(K).operation,
        region: (await (0, mo1.normalizeProvider)(A.region)()) || (() => {
          throw Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
  yc8.defaultSSOOIDCHttpAuthSchemeParametersProvider = $x5;
  function _x5(A) {
    return {
      schemeId: "aws.auth#sigv4",
      signingProperties: {
        name: "sso-oauth",
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
  function Gx5(A) {
    return {
      schemeId: "smithy.api#noAuth"
    };
  }
  var Zx5 = A => {
    let K = [];
    switch (A.operation) {
      case "CreateToken":
        {
          K.push(Gx5(A));
          break;
        }
      default:
        K.push(_x5(A));
    }
    return K;
  };
  yc8.defaultSSOOIDCHttpAuthSchemeProvider = Zx5;
  var Wx5 = A => {
    let K = (0, Xx5.resolveAwsSdkSigV4Config)(A);
    return Object.assign(K, {
      authSchemePreference: (0, mo1.normalizeProvider)(A.authSchemePreference ?? [])
    });
  };
  yc8.resolveHttpAuthSchemeConfig = Wx5;
});

// Register to shared state
__$.go1 = go1;
