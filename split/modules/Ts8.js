// Module: Ts8
// Dependencies: gb, Ky, Vs8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ts8 = v(fs8 => {
  Object.defineProperty(fs8, "__esModule", {
    value: !0
  });
  fs8.defaultEndpointResolver = void 0;
  var on5 = __$.gb(),
    Ss1 = __$.Ky(),
    an5 = __$.Vs8(),
    sn5 = new Ss1.EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
    }),
    tn5 = (A, K = {}) => {
      return sn5.get(A, () => (0, Ss1.resolveEndpoint)(an5.ruleSet, {
        endpointParams: A,
        logger: K.logger
      }));
    };
  fs8.defaultEndpointResolver = tn5;
  Ss1.customEndpointFunctions.aws = on5.awsEndpointFunctions;
});

// Register to shared state
__$.Ts8 = Ts8;
