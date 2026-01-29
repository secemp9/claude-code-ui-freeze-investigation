// Module: H$
// Dependencies: DC, zX, f5, To, i7A, vo, n7A, kM, r7A, o7A
//   ... and 40 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var H$ = k(() => {
  __$.DC();
  __$.zX(); /*! @azure/msal-common v15.13.1 2025-10-29 */
  __$.f5 = {
    [__$.To]: "The client info could not be parsed/decoded correctly",
    [__$.i7A]: "The client info was empty",
    [__$.vo]: "Token cannot be parsed",
    [__$.n7A]: "The token is null or empty",
    [__$.kM]: "Endpoints cannot be resolved",
    [__$.r7A]: "Network request failed",
    [__$.o7A]: "Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints.",
    [__$.a7A]: "The hash parameters could not be deserialized",
    [__$.HI]: "State was not the expected format",
    [__$.s7A]: "State mismatch error",
    [__$.Eo]: "State not found",
    [__$.t7A]: "Nonce mismatch error",
    [__$.EU]: "Max Age was requested and the ID token is missing the auth_time variable. auth_time is an optional claim and is not enabled by default - it must be enabled. See https://aka.ms/msaljs/optional-claims for more information.",
    [__$.e7A]: "Max Age is set to 0, or too much time has elapsed since the last end-user authentication.",
    [__$.ohA]: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements such as authority or account.",
    [__$.ahA]: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account",
    [__$.AKA]: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata",
    [__$.KKA]: "Token request cannot be made without authorization code or refresh token.",
    [__$.qKA]: "Cannot remove null or empty scope from ScopeSet",
    [__$.YKA]: "Cannot append ScopeSet",
    [__$.ko]: "Empty input ScopeSet cannot be processed",
    [__$.shA]: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true.",
    [__$.thA]: "Device code is expired.",
    [__$.ehA]: "Device code stopped polling for unknown reasons.",
    [__$.kU]: "Please pass an account object, silent flow is not supported without account information",
    [__$.zKA]: "Cache record object was null or undefined.",
    [__$.CU]: "Invalid environment when attempting to create cache entry",
    [__$.AbA]: "No account found in cache for given key.",
    [__$.Co]: "No crypto object detected.",
    [__$.KbA]: "Unexpected credential type.",
    [__$.qbA]: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515",
    [__$.YbA]: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential",
    [__$.LU]: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired.",
    [__$.zbA]: "User defined timeout for device code polling reached",
    [__$.wKA]: "Cannot generate a POP jwt if the token_claims are not populated",
    [__$.HKA]: "Server response does not contain an authorization code to proceed",
    [__$.wbA]: "Could not remove the credential's binding key from storage.",
    [__$.JKA]: "The provided authority does not support logout",
    [__$.OKA]: "A keyId value is missing from the requested bound token's cache record and is required to match the token to it's stored binding key.",
    [__$.HbA]: "No network connectivity. Check your internet connection.",
    [__$.JbA]: "User cancelled the flow.",
    [__$.ObA]: "A tenant id - not common, organizations, or consumers - must be specified when using the client_credentials flow.",
    [__$.v3]: "This method has not been implemented",
    [__$.XbA]: "The nested app auth bridge is disabled"
  }, __$._06 = {
    clientInfoDecodingError: {
      code: __$.To,
      desc: __$.f5[__$.To]
    },
    clientInfoEmptyError: {
      code: __$.i7A,
      desc: __$.f5[__$.i7A]
    },
    tokenParsingError: {
      code: __$.vo,
      desc: __$.f5[__$.vo]
    },
    nullOrEmptyToken: {
      code: __$.n7A,
      desc: __$.f5[__$.n7A]
    },
    endpointResolutionError: {
      code: __$.kM,
      desc: __$.f5[__$.kM]
    },
    networkError: {
      code: __$.r7A,
      desc: __$.f5[__$.r7A]
    },
    unableToGetOpenidConfigError: {
      code: __$.o7A,
      desc: __$.f5[__$.o7A]
    },
    hashNotDeserialized: {
      code: __$.a7A,
      desc: __$.f5[__$.a7A]
    },
    invalidStateError: {
      code: __$.HI,
      desc: __$.f5[__$.HI]
    },
    stateMismatchError: {
      code: __$.s7A,
      desc: __$.f5[__$.s7A]
    },
    stateNotFoundError: {
      code: __$.Eo,
      desc: __$.f5[__$.Eo]
    },
    nonceMismatchError: {
      code: __$.t7A,
      desc: __$.f5[__$.t7A]
    },
    authTimeNotFoundError: {
      code: __$.EU,
      desc: __$.f5[__$.EU]
    },
    maxAgeTranspired: {
      code: __$.e7A,
      desc: __$.f5[__$.e7A]
    },
    multipleMatchingTokens: {
      code: __$.ohA,
      desc: __$.f5[__$.ohA]
    },
    multipleMatchingAccounts: {
      code: __$.ahA,
      desc: __$.f5[__$.ahA]
    },
    multipleMatchingAppMetadata: {
      code: __$.AKA,
      desc: __$.f5[__$.AKA]
    },
    tokenRequestCannotBeMade: {
      code: __$.KKA,
      desc: __$.f5[__$.KKA]
    },
    removeEmptyScopeError: {
      code: __$.qKA,
      desc: __$.f5[__$.qKA]
    },
    appendScopeSetError: {
      code: __$.YKA,
      desc: __$.f5[__$.YKA]
    },
    emptyInputScopeSetError: {
      code: __$.ko,
      desc: __$.f5[__$.ko]
    },
    DeviceCodePollingCancelled: {
      code: __$.shA,
      desc: __$.f5[__$.shA]
    },
    DeviceCodeExpired: {
      code: __$.thA,
      desc: __$.f5[__$.thA]
    },
    DeviceCodeUnknownError: {
      code: __$.ehA,
      desc: __$.f5[__$.ehA]
    },
    NoAccountInSilentRequest: {
      code: __$.kU,
      desc: __$.f5[__$.kU]
    },
    invalidCacheRecord: {
      code: __$.zKA,
      desc: __$.f5[__$.zKA]
    },
    invalidCacheEnvironment: {
      code: __$.CU,
      desc: __$.f5[__$.CU]
    },
    noAccountFound: {
      code: __$.AbA,
      desc: __$.f5[__$.AbA]
    },
    noCryptoObj: {
      code: __$.Co,
      desc: __$.f5[__$.Co]
    },
    unexpectedCredentialType: {
      code: __$.KbA,
      desc: __$.f5[__$.KbA]
    },
    invalidAssertion: {
      code: __$.qbA,
      desc: __$.f5[__$.qbA]
    },
    invalidClientCredential: {
      code: __$.YbA,
      desc: __$.f5[__$.YbA]
    },
    tokenRefreshRequired: {
      code: __$.LU,
      desc: __$.f5[__$.LU]
    },
    userTimeoutReached: {
      code: __$.zbA,
      desc: __$.f5[__$.zbA]
    },
    tokenClaimsRequired: {
      code: __$.wKA,
      desc: __$.f5[__$.wKA]
    },
    noAuthorizationCodeFromServer: {
      code: __$.HKA,
      desc: __$.f5[__$.HKA]
    },
    bindingKeyNotRemovedError: {
      code: __$.wbA,
      desc: __$.f5[__$.wbA]
    },
    logoutNotSupported: {
      code: __$.JKA,
      desc: __$.f5[__$.JKA]
    },
    keyIdMissing: {
      code: __$.OKA,
      desc: __$.f5[__$.OKA]
    },
    noNetworkConnectivity: {
      code: __$.HbA,
      desc: __$.f5[__$.HbA]
    },
    userCanceledError: {
      code: __$.JbA,
      desc: __$.f5[__$.JbA]
    },
    missingTenantIdError: {
      code: __$.ObA,
      desc: __$.f5[__$.ObA]
    },
    nestedAppAuthBridgeDisabled: {
      code: __$.XbA,
      desc: __$.f5[__$.XbA]
    }
  };
  __$.Lo = class Lo extends __$.V5 {
    constructor(A, K) {
      super(A, K ? `${__$.f5[A]}: ${K}` : __$.f5[A]);
      this.name = "ClientAuthError", Object.setPrototypeOf(this, __$.Lo.prototype);
    }
  };
});

// Register to shared state
__$.H$ = H$;
