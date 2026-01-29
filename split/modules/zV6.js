// Module: zV6
// Dependencies: BF, mF, gF, Ub, l0, Gz, DJ, rF, qy, kZ
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zV6 = v(WV6 => {
  Object.defineProperty(WV6, "__esModule", {
    value: !0
  });
  WV6.STSClient = WV6.__Client = void 0;
  var Xf7 = __$.BF(),
    qhY = __$.mF(),
    YhY = __$.gF(),
    $f7 = __$.Ub(),
    zhY = __$.l0(),
    ZV6 = __$.Gz(),
    whY = __$.DJ(),
    HhY = __$.rF(),
    JhY = __$.qy(),
    _f7 = __$.kZ(),
    Zf7 = __$.tqA();
  Object.defineProperty(WV6, "__Client", {
    enumerable: !0,
    get: function () {
      return Zf7.Client;
    }
  });
  var Gf7 = __$.YV6(),
    OhY = __$.wV6(),
    XhY = __$.rV7(),
    $hY = __$.Of7();
  class Wf7 extends Zf7.Client {
    config;
    constructor(...[A]) {
      let K = (0, XhY.getRuntimeConfig)(A || {});
      super(K);
      this.initConfig = K;
      let q = (0, OhY.resolveClientEndpointParameters)(K),
        Y = (0, $f7.resolveUserAgentConfig)(q),
        z = (0, _f7.resolveRetryConfig)(Y),
        w = (0, zhY.resolveRegionConfig)(z),
        H = (0, Xf7.resolveHostHeaderConfig)(w),
        J = (0, JhY.resolveEndpointConfig)(H),
        O = (0, Gf7.resolveHttpAuthSchemeConfig)(J),
        X = (0, $hY.resolveRuntimeExtensions)(O, A?.extensions || []);
      this.config = X, this.middlewareStack.use((0, whY.getSchemaSerdePlugin)(this.config)), this.middlewareStack.use((0, $f7.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, _f7.getRetryPlugin)(this.config)), this.middlewareStack.use((0, HhY.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, Xf7.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, qhY.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, YhY.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, ZV6.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
        httpAuthSchemeParametersProvider: Gf7.defaultSTSHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async $ => new ZV6.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": $.credentials
        })
      })), this.middlewareStack.use((0, ZV6.getHttpSigningPlugin)(this.config));
    }
    destroy() {
      super.destroy();
    }
  }
  WV6.STSClient = Wf7;
});

// Register to shared state
__$.zV6 = zV6;
