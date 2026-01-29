// Module: qy
// Dependencies: zp8, tE, Gz, WD, Ll1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qy = v(ZC5 => {
  var Hp8 = __$.zp8(),
    wp8 = __$.tE(),
    KC5 = __$.Gz(),
    K81 = __$.WD(),
    qC5 = __$.Ll1(),
    YC5 = async A => {
      let K = A?.Bucket || "";
      if (typeof A.Bucket === "string") A.Bucket = K.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
      if (OC5(K)) {
        if (A.ForcePathStyle === !0) throw Error("Path-style addressing cannot be used with ARN buckets");
      } else if (!JC5(K) || K.indexOf(".") !== -1 && !String(A.Endpoint).startsWith("http:") || K.toLowerCase() !== K || K.length < 3) A.ForcePathStyle = !0;
      if (A.DisableMultiRegionAccessPoints) A.disableMultiRegionAccessPoints = !0, A.DisableMRAP = !0;
      return A;
    },
    zC5 = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/,
    wC5 = /(\d+\.){3}\d+/,
    HC5 = /\.\./,
    JC5 = A => zC5.test(A) && !wC5.test(A) && !HC5.test(A),
    OC5 = A => {
      let [K, q, Y,,, z] = A.split(":"),
        w = K === "arn" && A.split(":").length >= 6,
        H = Boolean(w && q && Y && z);
      if (w && !H) throw Error(`Invalid ARN: ${A} was an invalid ARN.`);
      return H;
    },
    XC5 = (A, K, q) => {
      let Y = async () => {
        let z = q[A] ?? q[K];
        if (typeof z === "function") return z();
        return z;
      };
      if (A === "credentialScope" || K === "CredentialScope") return async () => {
        let z = typeof q.credentials === "function" ? await q.credentials() : q.credentials;
        return z?.credentialScope ?? z?.CredentialScope;
      };
      if (A === "accountId" || K === "AccountId") return async () => {
        let z = typeof q.credentials === "function" ? await q.credentials() : q.credentials;
        return z?.accountId ?? z?.AccountId;
      };
      if (A === "endpoint" || K === "endpoint") return async () => {
        if (q.isCustomEndpoint === !1) return;
        let z = await Y();
        if (z && typeof z === "object") {
          if ("url" in z) return z.url.href;
          if ("hostname" in z) {
            let {
              protocol: w,
              hostname: H,
              port: J,
              path: O
            } = z;
            return `${w}//${H}${J ? ":" + J : ""}${O}`;
          }
        }
        return z;
      };
      return Y;
    },
    jr1 = A => {
      if (typeof A === "object") {
        if ("url" in A) return wp8.parseUrl(A.url);
        return A;
      }
      return wp8.parseUrl(A);
    },
    Jp8 = async (A, K, q, Y) => {
      if (!q.isCustomEndpoint) {
        let H;
        if (q.serviceConfiguredEndpoint) H = await q.serviceConfiguredEndpoint();else H = await Hp8.getEndpointFromConfig(q.serviceId);
        if (H) q.endpoint = () => Promise.resolve(jr1(H)), q.isCustomEndpoint = !0;
      }
      let z = await Op8(A, K, q);
      if (typeof q.endpointProvider !== "function") throw Error("config.endpointProvider is not set.");
      return q.endpointProvider(z, Y);
    },
    Op8 = async (A, K, q) => {
      let Y = {},
        z = K?.getEndpointParameterInstructions?.() || {};
      for (let [w, H] of Object.entries(z)) switch (H.type) {
        case "staticContextParams":
          Y[w] = H.value;
          break;
        case "contextParams":
          Y[w] = A[H.name];
          break;
        case "clientContextParams":
        case "builtInParams":
          Y[w] = await XC5(H.name, w, q)();
          break;
        case "operationContextParams":
          Y[w] = H.get(A);
          break;
        default:
          throw Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(H));
      }
      if (Object.keys(z).length === 0) Object.assign(Y, q);
      if (String(q.serviceId).toLowerCase() === "s3") await YC5(Y);
      return Y;
    },
    Xp8 = ({
      config: A,
      instructions: K
    }) => {
      return (q, Y) => async z => {
        if (A.isCustomEndpoint) KC5.setFeature(Y, "ENDPOINT_OVERRIDE", "N");
        let w = await Jp8(z.input, {
          getEndpointParameterInstructions() {
            return K;
          }
        }, {
          ...A
        }, Y);
        Y.endpointV2 = w, Y.authSchemes = w.properties?.authSchemes;
        let H = Y.authSchemes?.[0];
        if (H) {
          Y.signing_region = H.signingRegion, Y.signing_service = H.signingName;
          let O = K81.getSmithyContext(Y)?.selectedHttpAuthScheme?.httpAuthOption;
          if (O) O.signingProperties = Object.assign(O.signingProperties || {}, {
            signing_region: H.signingRegion,
            signingRegion: H.signingRegion,
            signing_service: H.signingName,
            signingName: H.signingName,
            signingRegionSet: H.signingRegionSet
          }, H.properties);
        }
        return q({
          ...z
        });
      };
    },
    $p8 = {
      step: "serialize",
      tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
      name: "endpointV2Middleware",
      override: !0,
      relation: "before",
      toMiddleware: qC5.serializerMiddlewareOption.name
    },
    $C5 = (A, K) => ({
      applyToStack: q => {
        q.addRelativeTo(Xp8({
          config: A,
          instructions: K
        }), $p8);
      }
    }),
    _C5 = A => {
      let K = A.tls ?? !0,
        {
          endpoint: q,
          useDualstackEndpoint: Y,
          useFipsEndpoint: z
        } = A,
        w = q != null ? async () => jr1(await K81.normalizeProvider(q)()) : void 0,
        J = Object.assign(A, {
          endpoint: w,
          tls: K,
          isCustomEndpoint: !!q,
          useDualstackEndpoint: K81.normalizeProvider(Y ?? !1),
          useFipsEndpoint: K81.normalizeProvider(z ?? !1)
        }),
        O = void 0;
      return J.serviceConfiguredEndpoint = async () => {
        if (A.serviceId && !O) O = Hp8.getEndpointFromConfig(A.serviceId);
        return O;
      }, J;
    },
    GC5 = A => {
      let {
        endpoint: K
      } = A;
      if (K === void 0) A.endpoint = async () => {
        throw Error("@smithy/middleware-endpoint: (default endpointRuleSet) endpoint is not set - you must configure an endpoint.");
      };
      return A;
    };
  ZC5.endpointMiddleware = Xp8;
  ZC5.endpointMiddlewareOptions = $p8;
  ZC5.getEndpointFromInstructions = Jp8;
  ZC5.getEndpointPlugin = $C5;
  ZC5.resolveEndpointConfig = _C5;
  ZC5.resolveEndpointRequiredConfig = GC5;
  ZC5.resolveParams = Op8;
  ZC5.toEndpointV1 = jr1;
});

// Register to shared state
__$.qy = qy;
