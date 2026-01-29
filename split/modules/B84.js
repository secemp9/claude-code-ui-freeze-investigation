// Module: B84
// Dependencies: aw, eF, Gz, dLA, tE, G84, _z, q16, S84

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var B84 = v(x84 => {
  Object.defineProperty(x84, "__esModule", {
    value: !0
  });
  x84.getRuntimeConfig = void 0;
  var Mv3 = __$.aw(),
    Pv3 = __$.eF(),
    Vv3 = __$.Gz(),
    fv3 = __$.dLA(),
    Nv3 = __$.tE(),
    h84 = __$.G84(),
    b84 = __$._z(),
    Tv3 = __$.q16(),
    vv3 = __$.S84(),
    Ev3 = A => {
      return {
        apiVersion: "2023-09-30",
        base64Decoder: A?.base64Decoder ?? h84.fromBase64,
        base64Encoder: A?.base64Encoder ?? h84.toBase64,
        disableHostPrefix: A?.disableHostPrefix ?? !1,
        endpointProvider: A?.endpointProvider ?? vv3.defaultEndpointResolver,
        extensions: A?.extensions ?? [],
        httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? Tv3.defaultBedrockRuntimeHttpAuthSchemeProvider,
        httpAuthSchemes: A?.httpAuthSchemes ?? [{
          schemeId: "aws.auth#sigv4",
          identityProvider: K => K.getIdentityProvider("aws.auth#sigv4"),
          signer: new Mv3.AwsSdkSigV4Signer()
        }, {
          schemeId: "smithy.api#httpBearerAuth",
          identityProvider: K => K.getIdentityProvider("smithy.api#httpBearerAuth"),
          signer: new Vv3.HttpBearerAuthSigner()
        }],
        logger: A?.logger ?? new fv3.NoOpLogger(),
        protocol: A?.protocol ?? new Pv3.AwsRestJsonProtocol({
          defaultNamespace: "com.amazonaws.bedrockruntime"
        }),
        serviceId: A?.serviceId ?? "Bedrock Runtime",
        urlParser: A?.urlParser ?? Nv3.parseUrl,
        utf8Decoder: A?.utf8Decoder ?? b84.fromUtf8,
        utf8Encoder: A?.utf8Encoder ?? b84.toUtf8
      };
    };
  x84.getRuntimeConfig = Ev3;
});

// Register to shared state
__$.B84 = B84;
