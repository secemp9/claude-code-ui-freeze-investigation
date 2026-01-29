// Module: tbA
// Dependencies: p2, X$, CJ, V5

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tbA = k(() => {
  __$.p2(); /*! @azure/msal-node v3.8.1 2025-10-29 */
  __$.X$ = {
    invalidLoopbackAddressType: {
      code: "invalid_loopback_server_address_type",
      desc: "Loopback server address is not type string. This is unexpected."
    },
    unableToLoadRedirectUri: {
      code: "unable_to_load_redirectUrl",
      desc: "Loopback server callback was invoked without a url. This is unexpected."
    },
    noAuthCodeInResponse: {
      code: "no_auth_code_in_response",
      desc: "No auth code found in the server response. Please check your network trace to determine what happened."
    },
    noLoopbackServerExists: {
      code: "no_loopback_server_exists",
      desc: "No loopback server exists yet."
    },
    loopbackServerAlreadyExists: {
      code: "loopback_server_already_exists",
      desc: "Loopback server already exists. Cannot create another."
    },
    loopbackServerTimeout: {
      code: "loopback_server_timeout",
      desc: "Timed out waiting for auth code listener to be registered."
    },
    stateNotFoundError: {
      code: "state_not_found",
      desc: "State not found. Please verify that the request originated from msal."
    },
    thumbprintMissing: {
      code: "thumbprint_missing_from_client_certificate",
      desc: "Client certificate does not contain a SHA-1 or SHA-256 thumbprint."
    },
    redirectUriNotSupported: {
      code: "redirect_uri_not_supported",
      desc: "RedirectUri is not supported in this scenario. Please remove redirectUri from the request."
    }
  };
  __$.CJ = class CJ extends __$.V5 {
    constructor(A, K) {
      super(A, K);
      this.name = "NodeAuthError";
    }
    static createInvalidLoopbackAddressTypeError() {
      return new __$.CJ(__$.X$.invalidLoopbackAddressType.code, `${__$.X$.invalidLoopbackAddressType.desc}`);
    }
    static createUnableToLoadRedirectUrlError() {
      return new __$.CJ(__$.X$.unableToLoadRedirectUri.code, `${__$.X$.unableToLoadRedirectUri.desc}`);
    }
    static createNoAuthCodeInResponseError() {
      return new __$.CJ(__$.X$.noAuthCodeInResponse.code, `${__$.X$.noAuthCodeInResponse.desc}`);
    }
    static createNoLoopbackServerExistsError() {
      return new __$.CJ(__$.X$.noLoopbackServerExists.code, `${__$.X$.noLoopbackServerExists.desc}`);
    }
    static createLoopbackServerAlreadyExistsError() {
      return new __$.CJ(__$.X$.loopbackServerAlreadyExists.code, `${__$.X$.loopbackServerAlreadyExists.desc}`);
    }
    static createLoopbackServerTimeoutError() {
      return new __$.CJ(__$.X$.loopbackServerTimeout.code, `${__$.X$.loopbackServerTimeout.desc}`);
    }
    static createStateNotFoundError() {
      return new __$.CJ(__$.X$.stateNotFoundError.code, __$.X$.stateNotFoundError.desc);
    }
    static createThumbprintMissingError() {
      return new __$.CJ(__$.X$.thumbprintMissing.code, __$.X$.thumbprintMissing.desc);
    }
    static createRedirectUriNotSupportedError() {
      return new __$.CJ(__$.X$.redirectUriNotSupported.code, __$.X$.redirectUriNotSupported.desc);
    }
  };
});

// Register to shared state
__$.tbA = tbA;
