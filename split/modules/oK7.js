// Module: oK7
// Dependencies: gKA, mKA, UH, XGA, IKA, QKA, Kf, hq, K5, DO
//   ... and 6 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oK7 = k(() => {
  __$.gKA();
  __$.mKA();
  __$.UH();
  __$.XGA();
  __$.IKA(); /*! @azure/msal-node v3.8.1 2025-10-29 */
  __$.QKA = class QKA extends __$.Kf {
    constructor(A, K, q, Y, z, w) {
      super(A, K, q, Y, z);
      this.msiEndpoint = w;
    }
    static getEnvironmentVariables() {
      return [process.env[__$.hq.MSI_ENDPOINT]];
    }
    static tryCreate(A, K, q, Y, z, w) {
      let [H] = __$.QKA.getEnvironmentVariables();
      if (!H) return A.info(`[Managed Identity] ${__$.K5.CLOUD_SHELL} managed identity is unavailable because the '${__$.hq.MSI_ENDPOINT} environment variable is not defined.`), null;
      let J = __$.QKA.getValidatedEnvVariableUrlString(__$.hq.MSI_ENDPOINT, H, __$.K5.CLOUD_SHELL, A);
      if (A.info(`[Managed Identity] Environment variable validation passed for ${__$.K5.CLOUD_SHELL} managed identity. Endpoint URI: ${J}. Creating ${__$.K5.CLOUD_SHELL} managed identity.`), w.idType !== __$.DO.SYSTEM_ASSIGNED) throw __$.wX(__$.iH1);
      return new __$.QKA(A, K, q, Y, z, H);
    }
    createRequest(A) {
      let K = new __$.QT(__$.QH.POST, this.msiEndpoint);
      return K.headers[__$.tV.METADATA_HEADER_NAME] = "true", K.bodyParameters[__$.O$.RESOURCE] = A, K;
    }
  };
});

// Register to shared state
__$.oK7 = oK7;
