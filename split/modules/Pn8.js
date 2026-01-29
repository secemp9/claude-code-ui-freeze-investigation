// Module: Pn8
// Dependencies: aw, eF, Gz, JLA, tE, ni8, _z, va1, Zn8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Pn8 = v(jn8 => {
  Object.defineProperty(jn8, "__esModule", {
    value: !0
  });
  jn8.getRuntimeConfig = void 0;
  var HQ5 = __$.aw(),
    JQ5 = __$.eF(),
    OQ5 = __$.Gz(),
    XQ5 = __$.JLA(),
    $Q5 = __$.tE(),
    Wn8 = __$.ni8(),
    Dn8 = __$._z(),
    _Q5 = __$.va1(),
    GQ5 = __$.Zn8(),
    ZQ5 = A => {
      return {
        apiVersion: "2019-06-10",
        base64Decoder: A?.base64Decoder ?? Wn8.fromBase64,
        base64Encoder: A?.base64Encoder ?? Wn8.toBase64,
        disableHostPrefix: A?.disableHostPrefix ?? !1,
        endpointProvider: A?.endpointProvider ?? GQ5.defaultEndpointResolver,
        extensions: A?.extensions ?? [],
        httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? _Q5.defaultSSOHttpAuthSchemeProvider,
        httpAuthSchemes: A?.httpAuthSchemes ?? [{
          schemeId: "aws.auth#sigv4",
          identityProvider: K => K.getIdentityProvider("aws.auth#sigv4"),
          signer: new HQ5.AwsSdkSigV4Signer()
        }, {
          schemeId: "smithy.api#noAuth",
          identityProvider: K => K.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
          signer: new OQ5.NoAuthSigner()
        }],
        logger: A?.logger ?? new XQ5.NoOpLogger(),
        protocol: A?.protocol ?? new JQ5.AwsRestJsonProtocol({
          defaultNamespace: "com.amazonaws.sso"
        }),
        serviceId: A?.serviceId ?? "SSO",
        urlParser: A?.urlParser ?? $Q5.parseUrl,
        utf8Decoder: A?.utf8Decoder ?? Dn8.fromUtf8,
        utf8Encoder: A?.utf8Encoder ?? Dn8.toUtf8
      };
    };
  jn8.getRuntimeConfig = ZQ5;
});

// Register to shared state
__$.Pn8 = Pn8;
