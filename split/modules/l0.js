// Module: l0
// Dependencies: ZU8, WD, Ky

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var l0 = v($E5 => {
  var An = __$.ZU8(),
    a61 = __$.WD(),
    nv5 = __$.Ky(),
    jU8 = "AWS_USE_DUALSTACK_ENDPOINT",
    MU8 = "use_dualstack_endpoint",
    rv5 = !1,
    ov5 = {
      environmentVariableSelector: A => An.booleanSelector(A, jU8, An.SelectorType.ENV),
      configFileSelector: A => An.booleanSelector(A, MU8, An.SelectorType.CONFIG),
      default: !1
    },
    PU8 = "AWS_USE_FIPS_ENDPOINT",
    VU8 = "use_fips_endpoint",
    av5 = !1,
    sv5 = {
      environmentVariableSelector: A => An.booleanSelector(A, PU8, An.SelectorType.ENV),
      configFileSelector: A => An.booleanSelector(A, VU8, An.SelectorType.CONFIG),
      default: !1
    },
    tv5 = A => {
      let {
        tls: K,
        endpoint: q,
        urlParser: Y,
        useDualstackEndpoint: z
      } = A;
      return Object.assign(A, {
        tls: K ?? !0,
        endpoint: a61.normalizeProvider(typeof q === "string" ? Y(q) : q),
        isCustomEndpoint: !0,
        useDualstackEndpoint: a61.normalizeProvider(z ?? !1)
      });
    },
    ev5 = async A => {
      let {
          tls: K = !0
        } = A,
        q = await A.region();
      if (!new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/).test(q)) throw Error("Invalid region in client config");
      let z = await A.useDualstackEndpoint(),
        w = await A.useFipsEndpoint(),
        {
          hostname: H
        } = (await A.regionInfoProvider(q, {
          useDualstackEndpoint: z,
          useFipsEndpoint: w
        })) ?? {};
      if (!H) throw Error("Cannot resolve hostname from client config");
      return A.urlParser(`${K ? "https:" : "http:"}//${H}`);
    },
    AE5 = A => {
      let K = a61.normalizeProvider(A.useDualstackEndpoint ?? !1),
        {
          endpoint: q,
          useFipsEndpoint: Y,
          urlParser: z,
          tls: w
        } = A;
      return Object.assign(A, {
        tls: w ?? !0,
        endpoint: q ? a61.normalizeProvider(typeof q === "string" ? z(q) : q) : () => ev5({
          ...A,
          useDualstackEndpoint: K,
          useFipsEndpoint: Y
        }),
        isCustomEndpoint: !!q,
        useDualstackEndpoint: K
      });
    },
    fU8 = "AWS_REGION",
    NU8 = "region",
    KE5 = {
      environmentVariableSelector: A => A[fU8],
      configFileSelector: A => A[NU8],
      default: () => {
        throw Error("Region is missing");
      }
    },
    qE5 = {
      preferredFile: "credentials"
    },
    WU8 = new Set(),
    YE5 = (A, K = nv5.isValidHostLabel) => {
      if (!WU8.has(A) && !K(A)) {
        if (A === "*") console.warn('@smithy/config-resolver WARN - Please use the caller region instead of "*". See "sigv4a" in https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md.');else throw Error(`Region not accepted: region="${A}" is not a valid hostname component.`);
      } else WU8.add(A);
    },
    TU8 = A => typeof A === "string" && (A.startsWith("fips-") || A.endsWith("-fips")),
    zE5 = A => TU8(A) ? ["fips-aws-global", "aws-fips"].includes(A) ? "us-east-1" : A.replace(/fips-(dkr-|prod-)?|-fips/, "") : A,
    wE5 = A => {
      let {
        region: K,
        useFipsEndpoint: q
      } = A;
      if (!K) throw Error("Region is missing");
      return Object.assign(A, {
        region: async () => {
          let Y = typeof K === "function" ? await K() : K,
            z = zE5(Y);
          return YE5(z), z;
        },
        useFipsEndpoint: async () => {
          let Y = typeof K === "string" ? K : await K();
          if (TU8(Y)) return !0;
          return typeof q !== "function" ? Promise.resolve(!!q) : q();
        }
      });
    },
    DU8 = (A = [], {
      useFipsEndpoint: K,
      useDualstackEndpoint: q
    }) => A.find(({
      tags: Y
    }) => K === Y.includes("fips") && q === Y.includes("dualstack"))?.hostname,
    HE5 = (A, {
      regionHostname: K,
      partitionHostname: q
    }) => K ? K : q ? q.replace("{region}", A) : void 0,
    JE5 = (A, {
      partitionHash: K
    }) => Object.keys(K || {}).find(q => K[q].regions.includes(A)) ?? "aws",
    OE5 = (A, {
      signingRegion: K,
      regionRegex: q,
      useFipsEndpoint: Y
    }) => {
      if (K) return K;else if (Y) {
        let z = q.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\."),
          w = A.match(z);
        if (w) return w[0].slice(1, -1);
      }
    },
    XE5 = (A, {
      useFipsEndpoint: K = !1,
      useDualstackEndpoint: q = !1,
      signingService: Y,
      regionHash: z,
      partitionHash: w
    }) => {
      let H = JE5(A, {
          partitionHash: w
        }),
        J = A in z ? A : w[H]?.endpoint ?? A,
        O = {
          useFipsEndpoint: K,
          useDualstackEndpoint: q
        },
        X = DU8(z[J]?.variants, O),
        $ = DU8(w[H]?.variants, O),
        _ = HE5(J, {
          regionHostname: X,
          partitionHostname: $
        });
      if (_ === void 0) throw Error(`Endpoint resolution failed for: ${{
        resolvedRegion: J,
        useFipsEndpoint: K,
        useDualstackEndpoint: q
      }}`);
      let G = OE5(_, {
        signingRegion: z[J]?.signingRegion,
        regionRegex: w[H].regionRegex,
        useFipsEndpoint: K
      });
      return {
        partition: H,
        signingService: Y,
        hostname: _,
        ...(G && {
          signingRegion: G
        }),
        ...(z[J]?.signingService && {
          signingService: z[J].signingService
        })
      };
    };
  $E5.CONFIG_USE_DUALSTACK_ENDPOINT = MU8;
  $E5.CONFIG_USE_FIPS_ENDPOINT = VU8;
  $E5.DEFAULT_USE_DUALSTACK_ENDPOINT = rv5;
  $E5.DEFAULT_USE_FIPS_ENDPOINT = av5;
  $E5.ENV_USE_DUALSTACK_ENDPOINT = jU8;
  $E5.ENV_USE_FIPS_ENDPOINT = PU8;
  $E5.NODE_REGION_CONFIG_FILE_OPTIONS = qE5;
  $E5.NODE_REGION_CONFIG_OPTIONS = KE5;
  $E5.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = ov5;
  $E5.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = sv5;
  $E5.REGION_ENV_NAME = fU8;
  $E5.REGION_INI_NAME = NU8;
  $E5.getRegionInfo = XE5;
  $E5.resolveCustomEndpointsConfig = tv5;
  $E5.resolveEndpointsConfig = AE5;
  $E5.resolveRegionConfig = wE5;
});

// Register to shared state
__$.l0 = l0;
