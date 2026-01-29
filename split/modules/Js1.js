// Module: Js1
// Dependencies: BF, mF, gF, Ub, l0, Gz, DJ, rF, qy, kZ
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Js1 = v(Ds1 => {
  Object.defineProperty(Ds1, "__esModule", {
    value: !0
  });
  Ds1.STSClient = Ds1.__Client = void 0;
  var Ya8 = __$.BF(),
    ql5 = __$.mF(),
    Yl5 = __$.gF(),
    za8 = __$.Ub(),
    zl5 = __$.l0(),
    Ws1 = __$.Gz(),
    wl5 = __$.DJ(),
    Hl5 = __$.rF(),
    Jl5 = __$.qy(),
    wa8 = __$.kZ(),
    Ja8 = __$.ej();
  Object.defineProperty(Ds1, "__Client", {
    enumerable: !0,
    get: function () {
      return Ja8.Client;
    }
  });
  var Ha8 = __$.Hs1(),
    Ol5 = __$.Os1(),
    Xl5 = __$.io8(),
    $l5 = __$.qa8();
  class Oa8 extends Ja8.Client {
    config;
    constructor(...[A]) {
      let K = (0, Xl5.getRuntimeConfig)(A || {});
      super(K);
      this.initConfig = K;
      let q = (0, Ol5.resolveClientEndpointParameters)(K),
        Y = (0, za8.resolveUserAgentConfig)(q),
        z = (0, wa8.resolveRetryConfig)(Y),
        w = (0, zl5.resolveRegionConfig)(z),
        H = (0, Ya8.resolveHostHeaderConfig)(w),
        J = (0, Jl5.resolveEndpointConfig)(H),
        O = (0, Ha8.resolveHttpAuthSchemeConfig)(J),
        X = (0, $l5.resolveRuntimeExtensions)(O, A?.extensions || []);
      this.config = X, this.middlewareStack.use((0, wl5.getSchemaSerdePlugin)(this.config)), this.middlewareStack.use((0, za8.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, wa8.getRetryPlugin)(this.config)), this.middlewareStack.use((0, Hl5.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, Ya8.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, ql5.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, Yl5.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, Ws1.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
        httpAuthSchemeParametersProvider: Ha8.defaultSTSHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async $ => new Ws1.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": $.credentials
        })
      })), this.middlewareStack.use((0, Ws1.getHttpSigningPlugin)(this.config));
    }
    destroy() {
      super.destroy();
    }
  }
  Ds1.STSClient = Oa8;
});

// Register to shared state
__$.Js1 = Js1;
