// Module: yU4
// Dependencies: Gz, dX, CU4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yU4 = v(Ju => {
  var XQ9 = Ju && Ju.__createBinding || (Object.create ? function (A, K, q, Y) {
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
    $Q9 = Ju && Ju.__setModuleDefault || (Object.create ? function (A, K) {
      Object.defineProperty(A, "default", {
        enumerable: !0,
        value: K
      });
    } : function (A, K) {
      A.default = K;
    }),
    _Q9 = Ju && Ju.__importStar || function () {
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
          for (var Y = A(K), z = 0; z < Y.length; z++) if (Y[z] !== "default") XQ9(q, K, Y[z]);
        }
        return $Q9(q, K), q;
      };
    }();
  Object.defineProperty(Ju, "__esModule", {
    value: !0
  });
  Ju.fromTemporaryCredentials = void 0;
  var GQ9 = __$.Gz(),
    LU4 = __$.dX(),
    ZQ9 = "us-east-1",
    WQ9 = (A, K, q) => {
      let Y;
      return async (z = {}) => {
        let {
            callerClientConfig: w
          } = z,
          H = A.clientConfig?.profile ?? w?.profile,
          J = A.logger ?? w?.logger;
        J?.debug("@aws-sdk/credential-providers - fromTemporaryCredentials (STS)");
        let O = {
          ...A.params,
          RoleSessionName: A.params.RoleSessionName ?? "aws-sdk-js-" + Date.now()
        };
        if (O?.SerialNumber) {
          if (!A.mfaCodeProvider) throw new LU4.CredentialsProviderError("Temporary credential requires multi-factor authentication, but no MFA code callback was provided.", {
            tryNextLink: !1,
            logger: J
          });
          O.TokenCode = await A.mfaCodeProvider(O?.SerialNumber);
        }
        let {
          AssumeRoleCommand: X,
          STSClient: $
        } = await Promise.resolve().then(() => _Q9(__$.CU4()));
        if (!Y) {
          let G = typeof K === "function" ? K() : void 0,
            Z = [A.masterCredentials, A.clientConfig?.credentials, void w?.credentials, w?.credentialDefaultProvider?.(), G],
            W = "STS client default credentials";
          if (Z[0]) W = "options.masterCredentials";else if (Z[1]) W = "options.clientConfig.credentials";else if (Z[2]) throw W = "caller client's credentials", Error("fromTemporaryCredentials recursion in callerClientConfig.credentials");else if (Z[3]) W = "caller client's credentialDefaultProvider";else if (Z[4]) W = "AWS SDK default credentials";
          let D = [A.clientConfig?.region, w?.region, await q?.({
              profile: H
            }), ZQ9],
            j = "default partition's default region";
          if (D[0]) j = "options.clientConfig.region";else if (D[1]) j = "caller client's region";else if (D[2]) j = "file or env region";
          let M = [RU4(A.clientConfig?.requestHandler), RU4(w?.requestHandler)],
            P = "STS default requestHandler";
          if (M[0]) P = "options.clientConfig.requestHandler";else if (M[1]) P = "caller client's requestHandler";
          J?.debug?.(`@aws-sdk/credential-providers - fromTemporaryCredentials STS client init with ${j}=${await (0, GQ9.normalizeProvider)(i21(D))()}, ${W}, ${P}.`), Y = new $({
            userAgentAppId: w?.userAgentAppId,
            ...A.clientConfig,
            credentials: i21(Z),
            logger: J,
            profile: H,
            region: i21(D),
            requestHandler: i21(M)
          });
        }
        if (A.clientPlugins) for (let G of A.clientPlugins) Y.middlewareStack.use(G);
        let {
          Credentials: _
        } = await Y.send(new X(O));
        if (!_ || !_.AccessKeyId || !_.SecretAccessKey) throw new LU4.CredentialsProviderError(`Invalid response from STS.assumeRole call with role ${O.RoleArn}`, {
          logger: J
        });
        return {
          accessKeyId: _.AccessKeyId,
          secretAccessKey: _.SecretAccessKey,
          sessionToken: _.SessionToken,
          expiration: _.Expiration,
          credentialScope: _.CredentialScope
        };
      };
    };
  Ju.fromTemporaryCredentials = WQ9;
  var RU4 = A => {
      return A?.metadata?.handlerProtocol === "h2" ? void 0 : A;
    },
    i21 = A => {
      for (let K of A) if (K !== void 0) return K;
    };
});

// Register to shared state
__$.yU4 = yU4;
