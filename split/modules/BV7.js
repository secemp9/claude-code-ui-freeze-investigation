// Module: BV7
// Dependencies: gb, Ky, bV7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BV7 = v(xV7 => {
  Object.defineProperty(xV7, "__esModule", {
    value: !0
  });
  xV7.defaultEndpointResolver = void 0;
  var jSY = __$.gb(),
    _V6 = __$.Ky(),
    MSY = __$.bV7(),
    PSY = new _V6.EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS", "UseGlobalEndpoint"]
    }),
    VSY = (A, K = {}) => {
      return PSY.get(A, () => (0, _V6.resolveEndpoint)(MSY.ruleSet, {
        endpointParams: A,
        logger: K.logger
      }));
    };
  xV7.defaultEndpointResolver = VSY;
  _V6.customEndpointFunctions.aws = jSY.awsEndpointFunctions;
});

// Register to shared state
__$.BV7 = BV7;
