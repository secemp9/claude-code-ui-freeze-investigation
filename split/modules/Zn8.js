// Module: Zn8
// Dependencies: gb, Ky, $n8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Zn8 = v(_n8 => {
  Object.defineProperty(_n8, "__esModule", {
    value: !0
  });
  _n8.defaultEndpointResolver = void 0;
  var qQ5 = __$.gb(),
    Ra1 = __$.Ky(),
    YQ5 = __$.$n8(),
    zQ5 = new Ra1.EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
    }),
    wQ5 = (A, K = {}) => {
      return zQ5.get(A, () => (0, Ra1.resolveEndpoint)(YQ5.ruleSet, {
        endpointParams: A,
        logger: K.logger
      }));
    };
  _n8.defaultEndpointResolver = wQ5;
  Ra1.customEndpointFunctions.aws = qQ5.awsEndpointFunctions;
});

// Register to shared state
__$.Zn8 = Zn8;
