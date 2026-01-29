// Module: Kq7
// Dependencies: mKA, UH, gKA, gYY, K5, dKA, Kf, hq, QT, QH
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Kq7 = k(() => {
  __$.mKA();
  __$.UH();
  __$.gKA(); /*! @azure/msal-node v3.8.1 2025-10-29 */
  __$.gYY = `Only client id is supported for user-assigned managed identity in ${__$.K5.MACHINE_LEARNING}.`;
  __$.dKA = class dKA extends __$.Kf {
    constructor(A, K, q, Y, z, w, H) {
      super(A, K, q, Y, z);
      this.msiEndpoint = w, this.secret = H;
    }
    static getEnvironmentVariables() {
      let A = process.env[__$.hq.MSI_ENDPOINT],
        K = process.env[__$.hq.MSI_SECRET];
      return [A, K];
    }
    static tryCreate(A, K, q, Y, z) {
      let [w, H] = __$.dKA.getEnvironmentVariables();
      if (!w || !H) return A.info(`[Managed Identity] ${__$.K5.MACHINE_LEARNING} managed identity is unavailable because one or both of the '${__$.hq.MSI_ENDPOINT}' and '${__$.hq.MSI_SECRET}' environment variables are not defined.`), null;
      let J = __$.dKA.getValidatedEnvVariableUrlString(__$.hq.MSI_ENDPOINT, w, __$.K5.MACHINE_LEARNING, A);
      return A.info(`[Managed Identity] Environment variables validation passed for ${__$.K5.MACHINE_LEARNING} managed identity. Endpoint URI: ${J}. Creating ${__$.K5.MACHINE_LEARNING} managed identity.`), new __$.dKA(A, K, q, Y, z, w, H);
    }
    createRequest(A, K) {
      let q = new __$.QT(__$.QH.GET, this.msiEndpoint);
      if (q.headers[__$.tV.METADATA_HEADER_NAME] = "true", q.headers[__$.tV.ML_AND_SF_SECRET_HEADER_NAME] = this.secret, q.queryParameters[__$.O$.API_VERSION] = __$.mYY, q.queryParameters[__$.O$.RESOURCE] = A, K.idType === __$.DO.SYSTEM_ASSIGNED) q.queryParameters[__$.BKA.MANAGED_IDENTITY_CLIENT_ID_2017] = process.env[__$.hq.DEFAULT_IDENTITY_CLIENT_ID];else if (K.idType === __$.DO.USER_ASSIGNED_CLIENT_ID) q.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(K.idType, !1, !0)] = K.id;else throw Error(__$.gYY);
      return q;
    }
  };
});

// Register to shared state
__$.Kq7 = Kq7;
