// Module: mKA
// Dependencies: p2, UH, XGA, FK7, QK7, IKA, BKA, Kf, p5, wX
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mKA = k(() => {
  __$.p2();
  __$.UH();
  __$.XGA();
  __$.FK7();
  __$.QK7();
  __$.IKA(); /*! @azure/msal-node v3.8.1 2025-10-29 */
  __$.BKA = {
    MANAGED_IDENTITY_CLIENT_ID_2017: "clientid",
    MANAGED_IDENTITY_CLIENT_ID: "client_id",
    MANAGED_IDENTITY_OBJECT_ID: "object_id",
    MANAGED_IDENTITY_RESOURCE_ID_IMDS: "msi_res_id",
    MANAGED_IDENTITY_RESOURCE_ID_NON_IMDS: "mi_res_id"
  };
  __$.Kf.getValidatedEnvVariableUrlString = (A, K, q, Y) => {
    try {
      return new __$.p5(K).urlString;
    } catch (z) {
      throw Y.info(`[Managed Identity] ${q} managed identity is unavailable because the '${A}' environment variable is malformed.`), __$.wX(__$.yKA[A]);
    }
  };
});

// Register to shared state
__$.mKA = mKA;
