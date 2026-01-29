// Module: YV6
// Dependencies: aw, WD, zV6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var YV6 = v(rP7 => {
  Object.defineProperty(rP7, "__esModule", {
    value: !0
  });
  rP7.resolveHttpAuthSchemeConfig = rP7.resolveStsAuthConfig = rP7.defaultSTSHttpAuthSchemeProvider = rP7.defaultSTSHttpAuthSchemeParametersProvider = void 0;
  var pIY = __$.aw(),
    qV6 = __$.WD(),
    dIY = __$.zV6(),
    cIY = async (A, K, q) => {
      return {
        operation: (0, qV6.getSmithyContext)(K).operation,
        region: (await (0, qV6.normalizeProvider)(A.region)()) || (() => {
          throw Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
  rP7.defaultSTSHttpAuthSchemeParametersProvider = cIY;
  function lIY(A) {
    return {
      schemeId: "aws.auth#sigv4",
      signingProperties: {
        name: "sts",
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
  function nP7(A) {
    return {
      schemeId: "smithy.api#noAuth"
    };
  }
  var iIY = A => {
    let K = [];
    switch (A.operation) {
      case "AssumeRoleWithSAML":
        {
          K.push(nP7(A));
          break;
        }
      case "AssumeRoleWithWebIdentity":
        {
          K.push(nP7(A));
          break;
        }
      default:
        K.push(lIY(A));
    }
    return K;
  };
  rP7.defaultSTSHttpAuthSchemeProvider = iIY;
  var nIY = A => Object.assign(A, {
    stsClientCtor: dIY.STSClient
  });
  rP7.resolveStsAuthConfig = nIY;
  var rIY = A => {
    let K = rP7.resolveStsAuthConfig(A),
      q = (0, pIY.resolveAwsSdkSigV4Config)(K);
    return Object.assign(q, {
      authSchemePreference: (0, qV6.normalizeProvider)(A.authSchemePreference ?? [])
    });
  };
  rP7.resolveHttpAuthSchemeConfig = rIY;
});

// Register to shared state
__$.YV6 = YV6;
