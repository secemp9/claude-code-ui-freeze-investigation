// Module: KQ
// Dependencies: l0, NV, dX, K8A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var KQ = v($B5 => {
  var tu5 = __$.l0(),
    ul8 = __$.NV(),
    eu5 = __$.dX(),
    AB5 = "AWS_EXECUTION_ENV",
    Bl8 = "AWS_REGION",
    ml8 = "AWS_DEFAULT_REGION",
    KB5 = "AWS_EC2_METADATA_DISABLED",
    qB5 = ["in-region", "cross-region", "mobile", "standard", "legacy"],
    YB5 = "/latest/meta-data/placement/region",
    zB5 = "AWS_DEFAULTS_MODE",
    wB5 = "defaults_mode",
    HB5 = {
      environmentVariableSelector: A => {
        return A[zB5];
      },
      configFileSelector: A => {
        return A[wB5];
      },
      default: "legacy"
    },
    JB5 = ({
      region: A = ul8.loadConfig(tu5.NODE_REGION_CONFIG_OPTIONS),
      defaultsMode: K = ul8.loadConfig(HB5)
    } = {}) => eu5.memoize(async () => {
      let q = typeof K === "function" ? await K() : K;
      switch (q?.toLowerCase()) {
        case "auto":
          return OB5(A);
        case "in-region":
        case "cross-region":
        case "mobile":
        case "standard":
        case "legacy":
          return Promise.resolve(q?.toLocaleLowerCase());
        case void 0:
          return Promise.resolve("legacy");
        default:
          throw Error(`Invalid parameter for "defaultsMode", expect ${qB5.join(", ")}, got ${q}`);
      }
    }),
    OB5 = async A => {
      if (A) {
        let K = typeof A === "function" ? await A() : A,
          q = await XB5();
        if (!q) return "standard";
        if (K === q) return "in-region";else return "cross-region";
      }
      return "standard";
    },
    XB5 = async () => {
      if (process.env[AB5] && (process.env[Bl8] || process.env[ml8])) return process.env[Bl8] ?? process.env[ml8];
      if (!process.env[KB5]) try {
        let {
            getInstanceMetadataEndpoint: A,
            httpRequest: K
          } = await Promise.resolve().then(() => o(__$.K8A())),
          q = await A();
        return (await K({
          ...q,
          path: YB5
        })).toString();
      } catch (A) {}
    };
  $B5.resolveDefaultsModeConfig = JB5;
});

// Register to shared state
__$.KQ = KQ;
