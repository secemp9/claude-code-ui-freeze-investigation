// Module: yl8
// Dependencies: gb, Ky, Cl8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yl8 = v(Ll8 => {
  Object.defineProperty(Ll8, "__esModule", {
    value: !0
  });
  Ll8.defaultEndpointResolver = void 0;
  var Qu5 = __$.gb(),
    Aa1 = __$.Ky(),
    Uu5 = __$.Cl8(),
    pu5 = new Aa1.EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
    }),
    du5 = (A, K = {}) => {
      return pu5.get(A, () => (0, Aa1.resolveEndpoint)(Uu5.ruleSet, {
        endpointParams: A,
        logger: K.logger
      }));
    };
  Ll8.defaultEndpointResolver = du5;
  Aa1.customEndpointFunctions.aws = Qu5.awsEndpointFunctions;
});

// Register to shared state
__$.yl8 = yl8;
