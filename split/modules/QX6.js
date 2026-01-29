// Module: QX6
// Dependencies: p2, $67, W67, tbA, X4Y, u6, gD, RU, $4Y, FX6
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QX6 = k(() => {
  __$.p2();
  __$.$67();
  __$.W67();
  __$.tbA(); /*! @azure/msal-node v3.8.1 2025-10-29 */
  __$.X4Y = {
    clientId: __$.u6.EMPTY_STRING,
    authority: __$.u6.DEFAULT_AUTHORITY,
    clientSecret: __$.u6.EMPTY_STRING,
    clientAssertion: __$.u6.EMPTY_STRING,
    clientCertificate: {
      thumbprint: __$.u6.EMPTY_STRING,
      thumbprintSha256: __$.u6.EMPTY_STRING,
      privateKey: __$.u6.EMPTY_STRING,
      x5c: __$.u6.EMPTY_STRING
    },
    knownAuthorities: [],
    cloudDiscoveryMetadata: __$.u6.EMPTY_STRING,
    authorityMetadata: __$.u6.EMPTY_STRING,
    clientCapabilities: [],
    protocolMode: __$.gD.AAD,
    azureCloudOptions: {
      azureCloudInstance: __$.RU.None,
      tenant: __$.u6.EMPTY_STRING
    },
    skipAuthorityMetadataCache: !1,
    encodeExtraQueryParams: !1
  }, __$.$4Y = {
    claimsBasedCachingEnabled: !1
  }, __$.FX6 = {
    loggerCallback: () => {},
    piiLoggingEnabled: !1,
    logLevel: __$.WO.Info
  }, __$._4Y = {
    loggerOptions: __$.FX6,
    networkClient: new __$.abA(),
    proxyUrl: __$.u6.EMPTY_STRING,
    customAgentOptions: {},
    disableInternalRetries: !1
  }, __$.G4Y = {
    application: {
      appName: __$.u6.EMPTY_STRING,
      appVersion: __$.u6.EMPTY_STRING
    }
  };
});

// Register to shared state
__$.QX6 = QX6;
