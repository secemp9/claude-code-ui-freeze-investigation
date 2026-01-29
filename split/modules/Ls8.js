// Module: Ls8
// Dependencies: aw, eF, Gz, oCA, tE, Ys8, _z, er1, Ts8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ls8 = v(ks8 => {
  Object.defineProperty(ks8, "__esModule", {
    value: !0
  });
  ks8.getRuntimeConfig = void 0;
  var en5 = __$.aw(),
    Ar5 = __$.eF(),
    Kr5 = __$.Gz(),
    qr5 = __$.oCA(),
    Yr5 = __$.tE(),
    vs8 = __$.Ys8(),
    Es8 = __$._z(),
    zr5 = __$.er1(),
    wr5 = __$.Ts8(),
    Hr5 = A => {
      return {
        apiVersion: "2023-04-20",
        base64Decoder: A?.base64Decoder ?? vs8.fromBase64,
        base64Encoder: A?.base64Encoder ?? vs8.toBase64,
        disableHostPrefix: A?.disableHostPrefix ?? !1,
        endpointProvider: A?.endpointProvider ?? wr5.defaultEndpointResolver,
        extensions: A?.extensions ?? [],
        httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? zr5.defaultBedrockHttpAuthSchemeProvider,
        httpAuthSchemes: A?.httpAuthSchemes ?? [{
          schemeId: "aws.auth#sigv4",
          identityProvider: K => K.getIdentityProvider("aws.auth#sigv4"),
          signer: new en5.AwsSdkSigV4Signer()
        }, {
          schemeId: "smithy.api#httpBearerAuth",
          identityProvider: K => K.getIdentityProvider("smithy.api#httpBearerAuth"),
          signer: new Kr5.HttpBearerAuthSigner()
        }],
        logger: A?.logger ?? new qr5.NoOpLogger(),
        protocol: A?.protocol ?? new Ar5.AwsRestJsonProtocol({
          defaultNamespace: "com.amazonaws.bedrock"
        }),
        serviceId: A?.serviceId ?? "Bedrock",
        urlParser: A?.urlParser ?? Yr5.parseUrl,
        utf8Decoder: A?.utf8Decoder ?? Es8.fromUtf8,
        utf8Encoder: A?.utf8Encoder ?? Es8.toUtf8
      };
    };
  ks8.getRuntimeConfig = Hr5;
});

// Register to shared state
__$.Ls8 = Ls8;
