// Module: nF4
// Dependencies: gb, Ky, cF4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nF4 = v(lF4 => {
  Object.defineProperty(lF4, "__esModule", {
    value: !0
  });
  lF4.defaultEndpointResolver = void 0;
  var qx9 = __$.gb(),
    wz6 = __$.Ky(),
    Yx9 = __$.cF4(),
    zx9 = new wz6.EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
    }),
    wx9 = (A, K = {}) => {
      return zx9.get(A, () => (0, wz6.resolveEndpoint)(Yx9.ruleSet, {
        endpointParams: A,
        logger: K.logger
      }));
    };
  lF4.defaultEndpointResolver = wx9;
  wz6.customEndpointFunctions.aws = qx9.awsEndpointFunctions;
});

// Register to shared state
__$.nF4 = nF4;
