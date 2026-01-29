// Module: S84
// Dependencies: gb, Ky, R84

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var S84 = v(y84 => {
  Object.defineProperty(y84, "__esModule", {
    value: !0
  });
  y84.defaultEndpointResolver = void 0;
  var Zv3 = __$.gb(),
    O16 = __$.Ky(),
    Wv3 = __$.R84(),
    Dv3 = new O16.EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
    }),
    jv3 = (A, K = {}) => {
      return Dv3.get(A, () => (0, O16.resolveEndpoint)(Wv3.ruleSet, {
        endpointParams: A,
        logger: K.logger
      }));
    };
  y84.defaultEndpointResolver = jv3;
  O16.customEndpointFunctions.aws = Zv3.awsEndpointFunctions;
});

// Register to shared state
__$.S84 = S84;
