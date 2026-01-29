// Module: N06
// Dependencies: ho, zH, N17, P06, V06, f06

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var N06 = k(() => {
  __$.ho();
  __$.zH(); /*! @azure/msal-common v15.13.1 2025-10-29 */
  __$.N17 = {
    endpointMetadata: {
      "login.microsoftonline.com": {
        token_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/token",
        jwks_uri: "https://login.microsoftonline.com/{tenantid}/discovery/v2.0/keys",
        issuer: "https://login.microsoftonline.com/{tenantid}/v2.0",
        authorization_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/authorize",
        end_session_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/logout"
      },
      "login.chinacloudapi.cn": {
        token_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/token",
        jwks_uri: "https://login.chinacloudapi.cn/{tenantid}/discovery/v2.0/keys",
        issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0",
        authorization_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/authorize",
        end_session_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/logout"
      },
      "login.microsoftonline.us": {
        token_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/token",
        jwks_uri: "https://login.microsoftonline.us/{tenantid}/discovery/v2.0/keys",
        issuer: "https://login.microsoftonline.us/{tenantid}/v2.0",
        authorization_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/authorize",
        end_session_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/logout"
      }
    },
    instanceDiscoveryMetadata: {
      metadata: [{
        preferred_network: "login.microsoftonline.com",
        preferred_cache: "login.windows.net",
        aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"]
      }, {
        preferred_network: "login.partner.microsoftonline.cn",
        preferred_cache: "login.partner.microsoftonline.cn",
        aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"]
      }, {
        preferred_network: "login.microsoftonline.de",
        preferred_cache: "login.microsoftonline.de",
        aliases: ["login.microsoftonline.de"]
      }, {
        preferred_network: "login.microsoftonline.us",
        preferred_cache: "login.microsoftonline.us",
        aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"]
      }, {
        preferred_network: "login-us.microsoftonline.com",
        preferred_cache: "login-us.microsoftonline.com",
        aliases: ["login-us.microsoftonline.com"]
      }]
    }
  }, __$.P06 = __$.N17.endpointMetadata, __$.V06 = __$.N17.instanceDiscoveryMetadata, __$.f06 = new Set();
  __$.V06.metadata.forEach(A => {
    A.aliases.forEach(K => {
      __$.f06.add(K);
    });
  });
});

// Register to shared state
__$.N06 = N06;
