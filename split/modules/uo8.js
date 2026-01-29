// Module: uo8
// Dependencies: gb, Ky, ho8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uo8 = v(bo8 => {
  Object.defineProperty(bo8, "__esModule", {
    value: !0
  });
  bo8.defaultEndpointResolver = void 0;
  var yc5 = __$.gb(),
    Gs1 = __$.Ky(),
    Ic5 = __$.ho8(),
    Sc5 = new Gs1.EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS", "UseGlobalEndpoint"]
    }),
    hc5 = (A, K = {}) => {
      return Sc5.get(A, () => (0, Gs1.resolveEndpoint)(Ic5.ruleSet, {
        endpointParams: A,
        logger: K.logger
      }));
    };
  bo8.defaultEndpointResolver = hc5;
  Gs1.customEndpointFunctions.aws = yc5.awsEndpointFunctions;
});

// Register to shared state
__$.uo8 = uo8;
