// Module: va1
// Dependencies: aw, WD

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var va1 = v(ui8 => {
  Object.defineProperty(ui8, "__esModule", {
    value: !0
  });
  ui8.resolveHttpAuthSchemeConfig = ui8.defaultSSOHttpAuthSchemeProvider = ui8.defaultSSOHttpAuthSchemeParametersProvider = void 0;
  var hF5 = __$.aw(),
    Ta1 = __$.WD(),
    bF5 = async (A, K, q) => {
      return {
        operation: (0, Ta1.getSmithyContext)(K).operation,
        region: (await (0, Ta1.normalizeProvider)(A.region)()) || (() => {
          throw Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
  ui8.defaultSSOHttpAuthSchemeParametersProvider = bF5;
  function xF5(A) {
    return {
      schemeId: "aws.auth#sigv4",
      signingProperties: {
        name: "awsssoportal",
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
  function f81(A) {
    return {
      schemeId: "smithy.api#noAuth"
    };
  }
  var uF5 = A => {
    let K = [];
    switch (A.operation) {
      case "GetRoleCredentials":
        {
          K.push(f81(A));
          break;
        }
      case "ListAccountRoles":
        {
          K.push(f81(A));
          break;
        }
      case "ListAccounts":
        {
          K.push(f81(A));
          break;
        }
      case "Logout":
        {
          K.push(f81(A));
          break;
        }
      default:
        K.push(xF5(A));
    }
    return K;
  };
  ui8.defaultSSOHttpAuthSchemeProvider = uF5;
  var BF5 = A => {
    let K = (0, hF5.resolveAwsSdkSigV4Config)(A);
    return Object.assign(K, {
      authSchemePreference: (0, Ta1.normalizeProvider)(A.authSchemePreference ?? [])
    });
  };
  ui8.resolveHttpAuthSchemeConfig = BF5;
});

// Register to shared state
__$.va1 = va1;
