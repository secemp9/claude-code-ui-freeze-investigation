// Module: xl8
// Dependencies: aw, eF, Gz, ej, tE, D81, _z, go1, yl8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xl8 = v(hl8 => {
  Object.defineProperty(hl8, "__esModule", {
    value: !0
  });
  hl8.getRuntimeConfig = void 0;
  var cu5 = __$.aw(),
    lu5 = __$.eF(),
    iu5 = __$.Gz(),
    nu5 = __$.ej(),
    ru5 = __$.tE(),
    Il8 = __$.D81(),
    Sl8 = __$._z(),
    ou5 = __$.go1(),
    au5 = __$.yl8(),
    su5 = A => {
      return {
        apiVersion: "2019-06-10",
        base64Decoder: A?.base64Decoder ?? Il8.fromBase64,
        base64Encoder: A?.base64Encoder ?? Il8.toBase64,
        disableHostPrefix: A?.disableHostPrefix ?? !1,
        endpointProvider: A?.endpointProvider ?? au5.defaultEndpointResolver,
        extensions: A?.extensions ?? [],
        httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? ou5.defaultSSOOIDCHttpAuthSchemeProvider,
        httpAuthSchemes: A?.httpAuthSchemes ?? [{
          schemeId: "aws.auth#sigv4",
          identityProvider: K => K.getIdentityProvider("aws.auth#sigv4"),
          signer: new cu5.AwsSdkSigV4Signer()
        }, {
          schemeId: "smithy.api#noAuth",
          identityProvider: K => K.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
          signer: new iu5.NoAuthSigner()
        }],
        logger: A?.logger ?? new nu5.NoOpLogger(),
        protocol: A?.protocol ?? new lu5.AwsRestJsonProtocol({
          defaultNamespace: "com.amazonaws.ssooidc"
        }),
        serviceId: A?.serviceId ?? "SSO OIDC",
        urlParser: A?.urlParser ?? ru5.parseUrl,
        utf8Decoder: A?.utf8Decoder ?? Sl8.fromUtf8,
        utf8Encoder: A?.utf8Encoder ?? Sl8.toUtf8
      };
    };
  hl8.getRuntimeConfig = su5;
});

// Register to shared state
__$.xl8 = xl8;
