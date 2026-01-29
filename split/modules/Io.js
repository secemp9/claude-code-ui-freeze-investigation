// Module: Io
// Dependencies: DC, IU, kJ, XKA, $bA, $KA, Tu, _KA, GKA, Ro
//   ... and 19 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Io = k(() => {
  __$.DC();
  __$.IU(); /*! @azure/msal-common v15.13.1 2025-10-29 */
  __$.kJ = {
    [__$.XKA]: "A redirect URI is required for all calls, and none has been set.",
    [__$.$bA]: "Could not parse the given claims request object.",
    [__$.$KA]: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options",
    [__$.Tu]: "URL could not be parsed into appropriate segments.",
    [__$._KA]: "URL was empty or null.",
    [__$.GKA]: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token.",
    [__$.Ro]: "Given claims parameter must be a stringified JSON object.",
    [__$.ZKA]: "Token request was empty and not found in cache.",
    [__$.WKA]: "The logout request was null or undefined.",
    [__$._bA]: 'code_challenge_method passed is invalid. Valid values are "plain" and "S256".',
    [__$.DKA]: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request",
    [__$.yo]: "Invalid cloudDiscoveryMetadata provided. Must be a stringified JSON object containing tenant_discovery_endpoint and metadata fields",
    [__$.jKA]: "Invalid authorityMetadata provided. Must by a stringified JSON object containing authorization_endpoint, token_endpoint, issuer fields.",
    [__$.MKA]: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter.",
    [__$.yU]: "Missing sshJwk in SSH certificate request. A stringified JSON Web Key is required when using the SSH authentication scheme.",
    [__$.GbA]: "Missing sshKid in SSH certificate request. A string that uniquely identifies the public SSH key is required when using the SSH authentication scheme.",
    [__$.ZbA]: "Unable to find an authentication header containing server nonce. Either the Authentication-Info or WWW-Authenticate headers must be present in order to obtain a server nonce.",
    [__$.WbA]: "Invalid authentication header provided",
    [__$.DbA]: "Cannot set OIDCOptions parameter. Please change the protocol mode to OIDC or use a non-Microsoft authority.",
    [__$.jbA]: "Cannot set allowPlatformBroker parameter to true when not in AAD protocol mode.",
    [__$.MbA]: "Authority mismatch error. Authority provided in login request or PublicClientApplication config does not match the environment of the provided account. Please use a matching account or make an interactive request to login to this authority.",
    [__$.VbA]: "Invalid authorize post body parameters provided. If you are using authorizePostBodyParameters, the request method must be POST. Please check the request method and parameters.",
    [__$.PbA]: "Invalid request method for EAR protocol mode. The request method cannot be GET when using EAR protocol mode. Please change the request method to POST."
  }, __$.Z06 = {
    redirectUriNotSet: {
      code: __$.XKA,
      desc: __$.kJ[__$.XKA]
    },
    claimsRequestParsingError: {
      code: __$.$bA,
      desc: __$.kJ[__$.$bA]
    },
    authorityUriInsecure: {
      code: __$.$KA,
      desc: __$.kJ[__$.$KA]
    },
    urlParseError: {
      code: __$.Tu,
      desc: __$.kJ[__$.Tu]
    },
    urlEmptyError: {
      code: __$._KA,
      desc: __$.kJ[__$._KA]
    },
    emptyScopesError: {
      code: __$.GKA,
      desc: __$.kJ[__$.GKA]
    },
    invalidClaimsRequest: {
      code: __$.Ro,
      desc: __$.kJ[__$.Ro]
    },
    tokenRequestEmptyError: {
      code: __$.ZKA,
      desc: __$.kJ[__$.ZKA]
    },
    logoutRequestEmptyError: {
      code: __$.WKA,
      desc: __$.kJ[__$.WKA]
    },
    invalidCodeChallengeMethod: {
      code: __$._bA,
      desc: __$.kJ[__$._bA]
    },
    invalidCodeChallengeParams: {
      code: __$.DKA,
      desc: __$.kJ[__$.DKA]
    },
    invalidCloudDiscoveryMetadata: {
      code: __$.yo,
      desc: __$.kJ[__$.yo]
    },
    invalidAuthorityMetadata: {
      code: __$.jKA,
      desc: __$.kJ[__$.jKA]
    },
    untrustedAuthority: {
      code: __$.MKA,
      desc: __$.kJ[__$.MKA]
    },
    missingSshJwk: {
      code: __$.yU,
      desc: __$.kJ[__$.yU]
    },
    missingSshKid: {
      code: __$.GbA,
      desc: __$.kJ[__$.GbA]
    },
    missingNonceAuthenticationHeader: {
      code: __$.ZbA,
      desc: __$.kJ[__$.ZbA]
    },
    invalidAuthenticationHeader: {
      code: __$.WbA,
      desc: __$.kJ[__$.WbA]
    },
    cannotSetOIDCOptions: {
      code: __$.DbA,
      desc: __$.kJ[__$.DbA]
    },
    cannotAllowPlatformBroker: {
      code: __$.jbA,
      desc: __$.kJ[__$.jbA]
    },
    authorityMismatch: {
      code: __$.MbA,
      desc: __$.kJ[__$.MbA]
    },
    invalidAuthorizePostBodyParameters: {
      code: __$.VbA,
      desc: __$.kJ[__$.VbA]
    },
    invalidRequestMethodForEAR: {
      code: __$.PbA,
      desc: __$.kJ[__$.PbA]
    }
  };
  __$.o_A = class o_A extends __$.V5 {
    constructor(A) {
      super(A, __$.kJ[A]);
      this.name = "ClientConfigurationError", Object.setPrototypeOf(this, __$.o_A.prototype);
    }
  };
});

// Register to shared state
__$.Io = Io;
