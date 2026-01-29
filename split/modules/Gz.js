// Module: Gz
// Dependencies: Zl1, WD, Ll1, DCA, VV

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Gz = v(Qg8 => {
  var L61 = __$.Zl1(),
    Rg8 = __$.WD(),
    Gj5 = __$.Ll1(),
    Ti1 = __$.DCA(),
    Zj5 = __$.VV(),
    Wj5 = A => A[L61.SMITHY_CONTEXT_KEY] || (A[L61.SMITHY_CONTEXT_KEY] = {}),
    Dj5 = (A, K) => {
      if (!K || K.length === 0) return A;
      let q = [];
      for (let Y of K) for (let z of A) if (z.schemeId.split("#")[1] === Y) q.push(z);
      for (let Y of A) if (!q.find(({
        schemeId: z
      }) => z === Y.schemeId)) q.push(Y);
      return q;
    };
  function jj5(A) {
    let K = new Map();
    for (let q of A) K.set(q.schemeId, q);
    return K;
  }
  var vi1 = (A, K) => (q, Y) => async z => {
      let w = A.httpAuthSchemeProvider(await K.httpAuthSchemeParametersProvider(A, Y, z.input)),
        H = A.authSchemePreference ? await A.authSchemePreference() : [],
        J = Dj5(w, H),
        O = jj5(A.httpAuthSchemes),
        X = Rg8.getSmithyContext(Y),
        $ = [];
      for (let _ of J) {
        let G = O.get(_.schemeId);
        if (!G) {
          $.push(`HttpAuthScheme \`${_.schemeId}\` was not enabled for this service.`);
          continue;
        }
        let Z = G.identityProvider(await K.identityProviderConfigProvider(A));
        if (!Z) {
          $.push(`HttpAuthScheme \`${_.schemeId}\` did not have an IdentityProvider configured.`);
          continue;
        }
        let {
          identityProperties: W = {},
          signingProperties: D = {}
        } = _.propertiesExtractor?.(A, Y) || {};
        _.identityProperties = Object.assign(_.identityProperties || {}, W), _.signingProperties = Object.assign(_.signingProperties || {}, D), X.selectedHttpAuthScheme = {
          httpAuthOption: _,
          identity: await Z(_.identityProperties),
          signer: G.signer
        };
        break;
      }
      if (!X.selectedHttpAuthScheme) throw Error($.join(`
`));
      return q(z);
    },
    yg8 = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: !0,
      relation: "before",
      toMiddleware: "endpointV2Middleware"
    },
    Mj5 = (A, {
      httpAuthSchemeParametersProvider: K,
      identityProviderConfigProvider: q
    }) => ({
      applyToStack: Y => {
        Y.addRelativeTo(vi1(A, {
          httpAuthSchemeParametersProvider: K,
          identityProviderConfigProvider: q
        }), yg8);
      }
    }),
    Ig8 = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: !0,
      relation: "before",
      toMiddleware: Gj5.serializerMiddlewareOption.name
    },
    Pj5 = (A, {
      httpAuthSchemeParametersProvider: K,
      identityProviderConfigProvider: q
    }) => ({
      applyToStack: Y => {
        Y.addRelativeTo(vi1(A, {
          httpAuthSchemeParametersProvider: K,
          identityProviderConfigProvider: q
        }), Ig8);
      }
    }),
    Vj5 = A => K => {
      throw K;
    },
    fj5 = (A, K) => {},
    Sg8 = A => (K, q) => async Y => {
      if (!Ti1.HttpRequest.isInstance(Y.request)) return K(Y);
      let w = Rg8.getSmithyContext(q).selectedHttpAuthScheme;
      if (!w) throw Error("No HttpAuthScheme was selected: unable to sign request");
      let {
          httpAuthOption: {
            signingProperties: H = {}
          },
          identity: J,
          signer: O
        } = w,
        X = await K({
          ...Y,
          request: await O.sign(Y.request, J, H)
        }).catch((O.errorHandler || Vj5)(H));
      return (O.successHandler || fj5)(X.response, H), X;
    },
    hg8 = {
      step: "finalizeRequest",
      tags: ["HTTP_SIGNING"],
      name: "httpSigningMiddleware",
      aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
      override: !0,
      relation: "after",
      toMiddleware: "retryMiddleware"
    },
    Nj5 = A => ({
      applyToStack: K => {
        K.addRelativeTo(Sg8(), hg8);
      }
    }),
    Tj5 = A => {
      if (typeof A === "function") return A;
      let K = Promise.resolve(A);
      return () => K;
    },
    vj5 = async (A, K, q, Y = w => w, ...z) => {
      let w = new A(q);
      return w = Y(w) ?? w, await K.send(w, ...z);
    };
  function Ej5(A, K, q, Y, z) {
    return async function* (H, J, ...O) {
      let X = J,
        $ = H.startingToken ?? X[q],
        _ = !0,
        G;
      while (_) {
        if (X[q] = $, z) X[z] = X[z] ?? H.pageSize;
        if (H.client instanceof A) G = await vj5(K, H.client, J, H.withCommand, ...O);else throw Error(`Invalid client, expected instance of ${A.name}`);
        yield G;
        let Z = $;
        $ = kj5(G, Y), _ = !!($ && (!H.stopOnSameToken || $ !== Z));
      }
      return;
    };
  }
  var kj5 = (A, K) => {
    let q = A,
      Y = K.split(".");
    for (let z of Y) {
      if (!q || typeof q !== "object") return;
      q = q[z];
    }
    return q;
  };
  function Cj5(A, K, q) {
    if (!A.__smithy_context) A.__smithy_context = {
      features: {}
    };else if (!A.__smithy_context.features) A.__smithy_context.features = {};
    A.__smithy_context.features[K] = q;
  }
  class bg8 {
    authSchemes = new Map();
    constructor(A) {
      for (let [K, q] of Object.entries(A)) if (q !== void 0) this.authSchemes.set(K, q);
    }
    getIdentityProvider(A) {
      return this.authSchemes.get(A);
    }
  }
  class xg8 {
    async sign(A, K, q) {
      if (!q) throw Error("request could not be signed with `apiKey` since the `name` and `in` signer properties are missing");
      if (!q.name) throw Error("request could not be signed with `apiKey` since the `name` signer property is missing");
      if (!q.in) throw Error("request could not be signed with `apiKey` since the `in` signer property is missing");
      if (!K.apiKey) throw Error("request could not be signed with `apiKey` since the `apiKey` is not defined");
      let Y = Ti1.HttpRequest.clone(A);
      if (q.in === L61.HttpApiKeyAuthLocation.QUERY) Y.query[q.name] = K.apiKey;else if (q.in === L61.HttpApiKeyAuthLocation.HEADER) Y.headers[q.name] = q.scheme ? `${q.scheme} ${K.apiKey}` : K.apiKey;else throw Error("request can only be signed with `apiKey` locations `query` or `header`, but found: `" + q.in + "`");
      return Y;
    }
  }
  class ug8 {
    async sign(A, K, q) {
      let Y = Ti1.HttpRequest.clone(A);
      if (!K.token) throw Error("request could not be signed with `token` since the `token` is not defined");
      return Y.headers.Authorization = `Bearer ${K.token}`, Y;
    }
  }
  class Bg8 {
    async sign(A, K, q) {
      return A;
    }
  }
  var mg8 = A => function (q) {
      return Fg8(q) && q.expiration.getTime() - Date.now() < A;
    },
    gg8 = 300000,
    Lj5 = mg8(gg8),
    Fg8 = A => A.expiration !== void 0,
    Rj5 = (A, K, q) => {
      if (A === void 0) return;
      let Y = typeof A !== "function" ? async () => Promise.resolve(A) : A,
        z,
        w,
        H,
        J = !1,
        O = async X => {
          if (!w) w = Y(X);
          try {
            z = await w, H = !0, J = !1;
          } finally {
            w = void 0;
          }
          return z;
        };
      if (K === void 0) return async X => {
        if (!H || X?.forceRefresh) z = await O(X);
        return z;
      };
      return async X => {
        if (!H || X?.forceRefresh) z = await O(X);
        if (J) return z;
        if (!q(z)) return J = !0, z;
        if (K(z)) return await O(X), z;
        return z;
      };
    };
  Object.defineProperty(Qg8, "requestBuilder", {
    enumerable: !0,
    get: function () {
      return Zj5.requestBuilder;
    }
  });
  Qg8.DefaultIdentityProviderConfig = bg8;
  Qg8.EXPIRATION_MS = gg8;
  Qg8.HttpApiKeyAuthSigner = xg8;
  Qg8.HttpBearerAuthSigner = ug8;
  Qg8.NoAuthSigner = Bg8;
  Qg8.createIsIdentityExpiredFunction = mg8;
  Qg8.createPaginator = Ej5;
  Qg8.doesIdentityRequireRefresh = Fg8;
  Qg8.getHttpAuthSchemeEndpointRuleSetPlugin = Mj5;
  Qg8.getHttpAuthSchemePlugin = Pj5;
  Qg8.getHttpSigningPlugin = Nj5;
  Qg8.getSmithyContext = Wj5;
  Qg8.httpAuthSchemeEndpointRuleSetMiddlewareOptions = yg8;
  Qg8.httpAuthSchemeMiddleware = vi1;
  Qg8.httpAuthSchemeMiddlewareOptions = Ig8;
  Qg8.httpSigningMiddleware = Sg8;
  Qg8.httpSigningMiddlewareOptions = hg8;
  Qg8.isIdentityExpired = Lj5;
  Qg8.memoizeIdentityProvider = Rj5;
  Qg8.normalizeProvider = Tj5;
  Qg8.setFeature = Cj5;
});

// Register to shared state
__$.Gz = Gz;
