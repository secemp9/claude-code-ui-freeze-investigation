// Module: eK7
// Dependencies: gKA, mKA, UH, sK7, xYY, tK7, TxA, Kf, hq, K5
//   ... and 7 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eK7 = k(() => {
  __$.gKA();
  __$.mKA();
  __$.UH();
  __$.sK7(); /*! @azure/msal-node v3.8.1 2025-10-29 */
  __$.xYY = `http://169.254.169.254${__$.tK7}`;
  __$.TxA = class TxA extends __$.Kf {
    constructor(A, K, q, Y, z, w) {
      super(A, K, q, Y, z);
      this.identityEndpoint = w;
    }
    static tryCreate(A, K, q, Y, z) {
      let w;
      if (process.env[__$.hq.AZURE_POD_IDENTITY_AUTHORITY_HOST]) A.info(`[Managed Identity] Environment variable ${__$.hq.AZURE_POD_IDENTITY_AUTHORITY_HOST} for ${__$.K5.IMDS} returned endpoint: ${process.env[__$.hq.AZURE_POD_IDENTITY_AUTHORITY_HOST]}`), w = __$.TxA.getValidatedEnvVariableUrlString(__$.hq.AZURE_POD_IDENTITY_AUTHORITY_HOST, `${process.env[__$.hq.AZURE_POD_IDENTITY_AUTHORITY_HOST]}${__$.tK7}`, __$.K5.IMDS, A);else A.info(`[Managed Identity] Unable to find ${__$.hq.AZURE_POD_IDENTITY_AUTHORITY_HOST} environment variable for ${__$.K5.IMDS}, using the default endpoint.`), w = __$.xYY;
      return new __$.TxA(A, K, q, Y, z, w);
    }
    createRequest(A, K) {
      let q = new __$.QT(__$.QH.GET, this.identityEndpoint);
      if (q.headers[__$.tV.METADATA_HEADER_NAME] = "true", q.queryParameters[__$.O$.API_VERSION] = __$.uYY, q.queryParameters[__$.O$.RESOURCE] = A, K.idType !== __$.DO.SYSTEM_ASSIGNED) q.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(K.idType, !0)] = K.id;
      return q.retryPolicy = new __$.UKA(), q;
    }
  };
});

// Register to shared state
__$.eK7 = eK7;
