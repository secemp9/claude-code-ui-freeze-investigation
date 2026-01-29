// Module: Qo8
// Dependencies: aw, eF, Gz, ej, tE, D81, _z, Hs1, uo8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Qo8 = v(go8 => {
  Object.defineProperty(go8, "__esModule", {
    value: !0
  });
  go8.getRuntimeConfig = void 0;
  var bc5 = __$.aw(),
    xc5 = __$.eF(),
    uc5 = __$.Gz(),
    Bc5 = __$.ej(),
    mc5 = __$.tE(),
    Bo8 = __$.D81(),
    mo8 = __$._z(),
    gc5 = __$.Hs1(),
    Fc5 = __$.uo8(),
    Qc5 = A => {
      return {
        apiVersion: "2011-06-15",
        base64Decoder: A?.base64Decoder ?? Bo8.fromBase64,
        base64Encoder: A?.base64Encoder ?? Bo8.toBase64,
        disableHostPrefix: A?.disableHostPrefix ?? !1,
        endpointProvider: A?.endpointProvider ?? Fc5.defaultEndpointResolver,
        extensions: A?.extensions ?? [],
        httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? gc5.defaultSTSHttpAuthSchemeProvider,
        httpAuthSchemes: A?.httpAuthSchemes ?? [{
          schemeId: "aws.auth#sigv4",
          identityProvider: K => K.getIdentityProvider("aws.auth#sigv4"),
          signer: new bc5.AwsSdkSigV4Signer()
        }, {
          schemeId: "smithy.api#noAuth",
          identityProvider: K => K.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
          signer: new uc5.NoAuthSigner()
        }],
        logger: A?.logger ?? new Bc5.NoOpLogger(),
        protocol: A?.protocol ?? new xc5.AwsQueryProtocol({
          defaultNamespace: "com.amazonaws.sts",
          xmlNamespace: "https://sts.amazonaws.com/doc/2011-06-15/",
          version: "2011-06-15"
        }),
        serviceId: A?.serviceId ?? "STS",
        urlParser: A?.urlParser ?? mc5.parseUrl,
        utf8Decoder: A?.utf8Decoder ?? mo8.fromUtf8,
        utf8Encoder: A?.utf8Encoder ?? mo8.toUtf8
      };
    };
  go8.getRuntimeConfig = Qc5;
});

// Register to shared state
__$.Qo8 = Qo8;
