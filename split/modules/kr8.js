// Module: kr8
// Dependencies: aw, eF, Gz, ej, tE, D81, _z, Ua1, fr8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kr8 = v(vr8 => {
  Object.defineProperty(vr8, "__esModule", {
    value: !0
  });
  vr8.getRuntimeConfig = void 0;
  var tp5 = __$.aw(),
    ep5 = __$.eF(),
    Ad5 = __$.Gz(),
    Kd5 = __$.ej(),
    qd5 = __$.tE(),
    Nr8 = __$.D81(),
    Tr8 = __$._z(),
    Yd5 = __$.Ua1(),
    zd5 = __$.fr8(),
    wd5 = A => {
      return {
        apiVersion: "2023-01-01",
        base64Decoder: A?.base64Decoder ?? Nr8.fromBase64,
        base64Encoder: A?.base64Encoder ?? Nr8.toBase64,
        disableHostPrefix: A?.disableHostPrefix ?? !1,
        endpointProvider: A?.endpointProvider ?? zd5.defaultEndpointResolver,
        extensions: A?.extensions ?? [],
        httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? Yd5.defaultSigninHttpAuthSchemeProvider,
        httpAuthSchemes: A?.httpAuthSchemes ?? [{
          schemeId: "aws.auth#sigv4",
          identityProvider: K => K.getIdentityProvider("aws.auth#sigv4"),
          signer: new tp5.AwsSdkSigV4Signer()
        }, {
          schemeId: "smithy.api#noAuth",
          identityProvider: K => K.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
          signer: new Ad5.NoAuthSigner()
        }],
        logger: A?.logger ?? new Kd5.NoOpLogger(),
        protocol: A?.protocol ?? new ep5.AwsRestJsonProtocol({
          defaultNamespace: "com.amazonaws.signin"
        }),
        serviceId: A?.serviceId ?? "Signin",
        urlParser: A?.urlParser ?? qd5.parseUrl,
        utf8Decoder: A?.utf8Decoder ?? Tr8.fromUtf8,
        utf8Encoder: A?.utf8Encoder ?? Tr8.toUtf8
      };
    };
  vr8.getRuntimeConfig = wd5;
});

// Register to shared state
__$.kr8 = kr8;
