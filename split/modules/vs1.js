// Module: vs1
// Dependencies: s81

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vs1 = v(nb => {
  var ri5 = nb && nb.__createBinding || (Object.create ? function (A, K, q, Y) {
      if (Y === void 0) Y = q;
      var z = Object.getOwnPropertyDescriptor(K, q);
      if (!z || ("get" in z ? !K.__esModule : z.writable || z.configurable)) z = {
        enumerable: !0,
        get: function () {
          return K[q];
        }
      };
      Object.defineProperty(A, Y, z);
    } : function (A, K, q, Y) {
      if (Y === void 0) Y = q;
      A[Y] = K[q];
    }),
    oi5 = nb && nb.__setModuleDefault || (Object.create ? function (A, K) {
      Object.defineProperty(A, "default", {
        enumerable: !0,
        value: K
      });
    } : function (A, K) {
      A.default = K;
    }),
    ai5 = nb && nb.__importStar || function () {
      var A = function (K) {
        return A = Object.getOwnPropertyNames || function (q) {
          var Y = [];
          for (var z in q) if (Object.prototype.hasOwnProperty.call(q, z)) Y[Y.length] = z;
          return Y;
        }, A(K);
      };
      return function (K) {
        if (K && K.__esModule) return K;
        var q = {};
        if (K != null) {
          for (var Y = A(K), z = 0; z < Y.length; z++) if (Y[z] !== "default") ri5(q, K, Y[z]);
        }
        return oi5(q, K), q;
      };
    }();
  Object.defineProperty(nb, "__esModule", {
    value: !0
  });
  nb.fromWebToken = void 0;
  var si5 = A => async K => {
    A.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");
    let {
        roleArn: q,
        roleSessionName: Y,
        webIdentityToken: z,
        providerId: w,
        policyArns: H,
        policy: J,
        durationSeconds: O
      } = A,
      {
        roleAssumerWithWebIdentity: X
      } = A;
    if (!X) {
      let {
        getDefaultRoleAssumerWithWebIdentity: $
      } = await Promise.resolve().then(() => ai5(__$.s81()));
      X = $({
        ...A.clientConfig,
        credentialProviderLogger: A.logger,
        parentClientConfig: {
          ...K?.callerClientConfig,
          ...A.parentClientConfig
        }
      }, A.clientPlugins);
    }
    return X({
      RoleArn: q,
      RoleSessionName: Y ?? `aws-sdk-js-session-${Date.now()}`,
      WebIdentityToken: z,
      ProviderId: w,
      PolicyArns: H,
      Policy: J,
      DurationSeconds: O
    });
  };
  nb.fromWebToken = si5;
});

// Register to shared state
__$.vs1 = vs1;
