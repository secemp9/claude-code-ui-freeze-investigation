// Module: fr8
// Dependencies: gb, Ky, Mr8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fr8 = v(Pr8 => {
  Object.defineProperty(Pr8, "__esModule", {
    value: !0
  });
  Pr8.defaultEndpointResolver = void 0;
  var rp5 = __$.gb(),
    ia1 = __$.Ky(),
    op5 = __$.Mr8(),
    ap5 = new ia1.EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
    }),
    sp5 = (A, K = {}) => {
      return ap5.get(A, () => (0, ia1.resolveEndpoint)(op5.ruleSet, {
        endpointParams: A,
        logger: K.logger
      }));
    };
  Pr8.defaultEndpointResolver = sp5;
  ia1.customEndpointFunctions.aws = rp5.awsEndpointFunctions;
});

// Register to shared state
__$.fr8 = fr8;
