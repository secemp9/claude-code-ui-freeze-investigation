// Module: dK7
// Dependencies: mKA, UH, gKA, FKA, Kf, hq, K5, QT, QH, tV
//   ... and 3 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dK7 = k(() => {
  __$.mKA();
  __$.UH();
  __$.gKA(); /*! @azure/msal-node v3.8.1 2025-10-29 */
  __$.FKA = class FKA extends __$.Kf {
    constructor(A, K, q, Y, z, w, H) {
      super(A, K, q, Y, z);
      this.identityEndpoint = w, this.identityHeader = H;
    }
    static getEnvironmentVariables() {
      let A = process.env[__$.hq.IDENTITY_ENDPOINT],
        K = process.env[__$.hq.IDENTITY_HEADER];
      return [A, K];
    }
    static tryCreate(A, K, q, Y, z) {
      let [w, H] = __$.FKA.getEnvironmentVariables();
      if (!w || !H) return A.info(`[Managed Identity] ${__$.K5.APP_SERVICE} managed identity is unavailable because one or both of the '${__$.hq.IDENTITY_HEADER}' and '${__$.hq.IDENTITY_ENDPOINT}' environment variables are not defined.`), null;
      let J = __$.FKA.getValidatedEnvVariableUrlString(__$.hq.IDENTITY_ENDPOINT, w, __$.K5.APP_SERVICE, A);
      return A.info(`[Managed Identity] Environment variables validation passed for ${__$.K5.APP_SERVICE} managed identity. Endpoint URI: ${J}. Creating ${__$.K5.APP_SERVICE} managed identity.`), new __$.FKA(A, K, q, Y, z, w, H);
    }
    createRequest(A, K) {
      let q = new __$.QT(__$.QH.GET, this.identityEndpoint);
      if (q.headers[__$.tV.APP_SERVICE_SECRET_HEADER_NAME] = this.identityHeader, q.queryParameters[__$.O$.API_VERSION] = __$.fYY, q.queryParameters[__$.O$.RESOURCE] = A, K.idType !== __$.DO.SYSTEM_ASSIGNED) q.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(K.idType)] = K.id;
      return q;
    }
  };
});

// Register to shared state
__$.dK7 = dK7;
