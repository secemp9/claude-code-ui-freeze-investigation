// Module: XGA
// Dependencies: p2, IKA, UH, O4Y, UH1, pH1, Fo, dH1, cH1, _67
//   ... and 12 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var XGA = k(() => {
  __$.p2();
  __$.IKA();
  __$.UH(); /*! @azure/msal-node v3.8.1 2025-10-29 */
  __$.O4Y = {
    [__$.UH1]: "The file path in the WWW-Authenticate header does not contain a .key file.",
    [__$.pH1]: "The file path in the WWW-Authenticate header is not in a valid Windows or Linux Format.",
    [__$.Fo]: "More than one ManagedIdentityIdType was provided.",
    [__$.dH1]: "The secret in the file on the file path in the WWW-Authenticate header is greater than 4096 bytes.",
    [__$.cH1]: "The platform is not supported by Azure Arc. Azure Arc only supports Windows and Linux.",
    [__$._67]: "A ManagedIdentityId id was not provided.",
    [__$.yKA.AZURE_POD_IDENTITY_AUTHORITY_HOST]: `The Managed Identity's '${__$.hq.AZURE_POD_IDENTITY_AUTHORITY_HOST}' environment variable is malformed.`,
    [__$.yKA.IDENTITY_ENDPOINT]: `The Managed Identity's '${__$.hq.IDENTITY_ENDPOINT}' environment variable is malformed.`,
    [__$.yKA.IMDS_ENDPOINT]: `The Managed Identity's '${__$.hq.IMDS_ENDPOINT}' environment variable is malformed.`,
    [__$.yKA.MSI_ENDPOINT]: `The Managed Identity's '${__$.hq.MSI_ENDPOINT}' environment variable is malformed.`,
    [__$.G67]: "Authentication unavailable. The request to the managed identity endpoint timed out.",
    [__$.lH1]: "Azure Arc Managed Identities can only be system assigned.",
    [__$.iH1]: "Cloud Shell Managed Identities can only be system assigned.",
    [__$.nH1]: "Unable to create a Managed Identity source based on environment variables.",
    [__$.sbA]: "Unable to read the secret file.",
    [__$.Z67]: "Service Fabric user assigned managed identity ClientId or ResourceId is not configurable at runtime.",
    [__$.rH1]: "A 401 response was received form the Azure Arc Managed Identity, but the www-authenticate header is missing.",
    [__$.oH1]: "A 401 response was received form the Azure Arc Managed Identity, but the www-authenticate header is in an unsupported format."
  };
  __$.mX6 = class mX6 extends __$.V5 {
    constructor(A) {
      super(A, __$.O4Y[A]);
      this.name = "ManagedIdentityError", Object.setPrototypeOf(this, __$.mX6.prototype);
    }
  };
});

// Register to shared state
__$.XGA = XGA;
