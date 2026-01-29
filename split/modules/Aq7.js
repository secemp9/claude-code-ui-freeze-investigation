// Module: Aq7
// Dependencies: gKA, mKA, UH, pKA, Kf, hq, K5, DO, QT, QH
//   ... and 3 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Aq7 = k(() => {
  __$.gKA();
  __$.mKA();
  __$.UH(); /*! @azure/msal-node v3.8.1 2025-10-29 */
  __$.pKA = class pKA extends __$.Kf {
    constructor(A, K, q, Y, z, w, H) {
      super(A, K, q, Y, z);
      this.identityEndpoint = w, this.identityHeader = H;
    }
    static getEnvironmentVariables() {
      let A = process.env[__$.hq.IDENTITY_ENDPOINT],
        K = process.env[__$.hq.IDENTITY_HEADER],
        q = process.env[__$.hq.IDENTITY_SERVER_THUMBPRINT];
      return [A, K, q];
    }
    static tryCreate(A, K, q, Y, z, w) {
      let [H, J, O] = __$.pKA.getEnvironmentVariables();
      if (!H || !J || !O) return A.info(`[Managed Identity] ${__$.K5.SERVICE_FABRIC} managed identity is unavailable because one or all of the '${__$.hq.IDENTITY_HEADER}', '${__$.hq.IDENTITY_ENDPOINT}' or '${__$.hq.IDENTITY_SERVER_THUMBPRINT}' environment variables are not defined.`), null;
      let X = __$.pKA.getValidatedEnvVariableUrlString(__$.hq.IDENTITY_ENDPOINT, H, __$.K5.SERVICE_FABRIC, A);
      if (A.info(`[Managed Identity] Environment variables validation passed for ${__$.K5.SERVICE_FABRIC} managed identity. Endpoint URI: ${X}. Creating ${__$.K5.SERVICE_FABRIC} managed identity.`), w.idType !== __$.DO.SYSTEM_ASSIGNED) A.warning(`[Managed Identity] ${__$.K5.SERVICE_FABRIC} user assigned managed identity is configured in the cluster, not during runtime. See also: https://learn.microsoft.com/en-us/azure/service-fabric/configure-existing-cluster-enable-managed-identity-token-service.`);
      return new __$.pKA(A, K, q, Y, z, H, J);
    }
    createRequest(A, K) {
      let q = new __$.QT(__$.QH.GET, this.identityEndpoint);
      if (q.headers[__$.tV.ML_AND_SF_SECRET_HEADER_NAME] = this.identityHeader, q.queryParameters[__$.O$.API_VERSION] = __$.BYY, q.queryParameters[__$.O$.RESOURCE] = A, K.idType !== __$.DO.SYSTEM_ASSIGNED) q.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(K.idType)] = K.id;
      return q;
    }
  };
});

// Register to shared state
__$.Aq7 = Aq7;
