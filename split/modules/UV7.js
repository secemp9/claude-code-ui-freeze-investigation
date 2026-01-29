// Module: UV7
// Dependencies: aw, eF, Gz, tqA, tE, XV7, _z, YV6, BV7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var UV7 = v(FV7 => {
  Object.defineProperty(FV7, "__esModule", {
    value: !0
  });
  FV7.getRuntimeConfig = void 0;
  var fSY = __$.aw(),
    NSY = __$.eF(),
    TSY = __$.Gz(),
    vSY = __$.tqA(),
    ESY = __$.tE(),
    mV7 = __$.XV7(),
    gV7 = __$._z(),
    kSY = __$.YV6(),
    CSY = __$.BV7(),
    LSY = A => {
      return {
        apiVersion: "2011-06-15",
        base64Decoder: A?.base64Decoder ?? mV7.fromBase64,
        base64Encoder: A?.base64Encoder ?? mV7.toBase64,
        disableHostPrefix: A?.disableHostPrefix ?? !1,
        endpointProvider: A?.endpointProvider ?? CSY.defaultEndpointResolver,
        extensions: A?.extensions ?? [],
        httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? kSY.defaultSTSHttpAuthSchemeProvider,
        httpAuthSchemes: A?.httpAuthSchemes ?? [{
          schemeId: "aws.auth#sigv4",
          identityProvider: K => K.getIdentityProvider("aws.auth#sigv4"),
          signer: new fSY.AwsSdkSigV4Signer()
        }, {
          schemeId: "smithy.api#noAuth",
          identityProvider: K => K.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
          signer: new TSY.NoAuthSigner()
        }],
        logger: A?.logger ?? new vSY.NoOpLogger(),
        protocol: A?.protocol ?? new NSY.AwsQueryProtocol({
          defaultNamespace: "com.amazonaws.sts",
          xmlNamespace: "https://sts.amazonaws.com/doc/2011-06-15/",
          version: "2011-06-15"
        }),
        serviceId: A?.serviceId ?? "STS",
        urlParser: A?.urlParser ?? ESY.parseUrl,
        utf8Decoder: A?.utf8Decoder ?? gV7.fromUtf8,
        utf8Encoder: A?.utf8Encoder ?? gV7.toUtf8
      };
    };
  FV7.getRuntimeConfig = LSY;
});

// Register to shared state
__$.UV7 = UV7;
