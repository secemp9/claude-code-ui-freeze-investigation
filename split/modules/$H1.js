// Module: $H1
// Dependencies: G06, tw1, zH, AH1, KH1, E06, TbA, H$, C06, zX
//   ... and 15 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $H1 = k(() => {
  __$.G06();
  __$.tw1();
  __$.zH();
  __$.AH1();
  __$.KH1();
  __$.E06();
  __$.TbA();
  __$.H$();
  __$.C06();
  __$.zX(); /*! @azure/msal-common v15.13.1 2025-10-29 */
  __$.q8Y = {
    tokenRenewalOffsetSeconds: __$.c_A,
    preventCorsPreflight: !1
  }, __$.Y8Y = {
    loggerCallback: () => {},
    piiLoggingEnabled: !1,
    logLevel: __$.WO.Info,
    correlationId: __$.u6.EMPTY_STRING
  }, __$.z8Y = {
    claimsBasedCachingEnabled: !1
  }, __$.w8Y = {
    async sendGetRequestAsync() {
      throw __$.t6(__$.v3);
    },
    async sendPostRequestAsync() {
      throw __$.t6(__$.v3);
    }
  }, __$.H8Y = {
    sku: __$.u6.SKU,
    version: __$.n_A,
    cpu: __$.u6.EMPTY_STRING,
    os: __$.u6.EMPTY_STRING
  }, __$.J8Y = {
    clientSecret: __$.u6.EMPTY_STRING,
    clientAssertion: void 0
  }, __$.O8Y = {
    azureCloudInstance: __$.RU.None,
    tenant: `${__$.u6.DEFAULT_COMMON_TENANT}`
  }, __$.X8Y = {
    application: {
      appName: "",
      appVersion: ""
    }
  };
});

// Register to shared state
__$.$H1 = $H1;
