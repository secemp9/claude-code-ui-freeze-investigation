// Module: tF4
// Dependencies: aw, eF, Gz, gSA, tE, LF4, _z, Az6, nF4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tF4 = v(aF4 => {
  Object.defineProperty(aF4, "__esModule", {
    value: !0
  });
  aF4.getRuntimeConfig = void 0;
  var Hx9 = __$.aw(),
    Jx9 = __$.eF(),
    Ox9 = __$.Gz(),
    Xx9 = __$.gSA(),
    $x9 = __$.tE(),
    rF4 = __$.LF4(),
    oF4 = __$._z(),
    _x9 = __$.Az6(),
    Gx9 = __$.nF4(),
    Zx9 = A => {
      return {
        apiVersion: "2014-06-30",
        base64Decoder: A?.base64Decoder ?? rF4.fromBase64,
        base64Encoder: A?.base64Encoder ?? rF4.toBase64,
        disableHostPrefix: A?.disableHostPrefix ?? !1,
        endpointProvider: A?.endpointProvider ?? Gx9.defaultEndpointResolver,
        extensions: A?.extensions ?? [],
        httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? _x9.defaultCognitoIdentityHttpAuthSchemeProvider,
        httpAuthSchemes: A?.httpAuthSchemes ?? [{
          schemeId: "aws.auth#sigv4",
          identityProvider: K => K.getIdentityProvider("aws.auth#sigv4"),
          signer: new Hx9.AwsSdkSigV4Signer()
        }, {
          schemeId: "smithy.api#noAuth",
          identityProvider: K => K.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
          signer: new Ox9.NoAuthSigner()
        }],
        logger: A?.logger ?? new Xx9.NoOpLogger(),
        protocol: A?.protocol ?? new Jx9.AwsJson1_1Protocol({
          defaultNamespace: "com.amazonaws.cognitoidentity",
          serviceTarget: "AWSCognitoIdentityService",
          awsQueryCompatible: !1
        }),
        serviceId: A?.serviceId ?? "Cognito Identity",
        urlParser: A?.urlParser ?? $x9.parseUrl,
        utf8Decoder: A?.utf8Decoder ?? oF4.fromUtf8,
        utf8Encoder: A?.utf8Encoder ?? oF4.toUtf8
      };
    };
  aF4.getRuntimeConfig = Zx9;
});

// Register to shared state
__$.tF4 = tF4;
