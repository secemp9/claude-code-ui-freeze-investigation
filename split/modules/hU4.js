// Module: hU4
// Dependencies: l0, NV, gz6, yU4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hU4 = v(IU4 => {
  Object.defineProperty(IU4, "__esModule", {
    value: !0
  });
  IU4.fromTemporaryCredentials = void 0;
  var DQ9 = __$.l0(),
    jQ9 = __$.NV(),
    MQ9 = __$.gz6(),
    PQ9 = __$.yU4(),
    VQ9 = A => {
      return (0, PQ9.fromTemporaryCredentials)(A, MQ9.fromNodeProviderChain, async ({
        profile: K = process.env.AWS_PROFILE
      }) => (0, jQ9.loadConfig)({
        environmentVariableSelector: q => q.AWS_REGION,
        configFileSelector: q => {
          return q.region;
        },
        default: () => {
          return;
        }
      }, {
        ...DQ9.NODE_REGION_CONFIG_FILE_OPTIONS,
        profile: K
      })());
    };
  IU4.fromTemporaryCredentials = VQ9;
});

// Register to shared state
__$.hU4 = hU4;
