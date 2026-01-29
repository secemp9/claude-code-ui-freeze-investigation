// Module: Hs1
// Dependencies: aw, WD, Js1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Hs1 = v(zo8 => {
  Object.defineProperty(zo8, "__esModule", {
    value: !0
  });
  zo8.resolveHttpAuthSchemeConfig = zo8.resolveStsAuthConfig = zo8.defaultSTSHttpAuthSchemeProvider = zo8.defaultSTSHttpAuthSchemeParametersProvider = void 0;
  var jc5 = __$.aw(),
    ws1 = __$.WD(),
    Mc5 = __$.Js1(),
    Pc5 = async (A, K, q) => {
      return {
        operation: (0, ws1.getSmithyContext)(K).operation,
        region: (await (0, ws1.normalizeProvider)(A.region)()) || (() => {
          throw Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
  zo8.defaultSTSHttpAuthSchemeParametersProvider = Pc5;
  function Vc5(A) {
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
  function fc5(A) {
    return {
      schemeId: "smithy.api#noAuth"
    };
  }
  var Nc5 = A => {
    let K = [];
    switch (A.operation) {
      case "AssumeRoleWithWebIdentity":
        {
          K.push(fc5(A));
          break;
        }
      default:
        K.push(Vc5(A));
    }
    return K;
  };
  zo8.defaultSTSHttpAuthSchemeProvider = Nc5;
  var Tc5 = A => Object.assign(A, {
    stsClientCtor: Mc5.STSClient
  });
  zo8.resolveStsAuthConfig = Tc5;
  var vc5 = A => {
    let K = zo8.resolveStsAuthConfig(A),
      q = (0, jc5.resolveAwsSdkSigV4Config)(K);
    return Object.assign(q, {
      authSchemePreference: (0, ws1.normalizeProvider)(A.authSchemePreference ?? [])
    });
  };
  zo8.resolveHttpAuthSchemeConfig = vc5;
});

// Register to shared state
__$.Hs1 = Hs1;
