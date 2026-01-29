// Module: rK7
// Dependencies: p2, gKA, mKA, XGA, UH, IKA, nK7, CYY, Uo, Kf
//   ... and 30 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rK7 = k(() => {
  __$.p2();
  __$.gKA();
  __$.mKA();
  __$.XGA();
  __$.UH();
  __$.IKA(); /*! @azure/msal-node v3.8.1 2025-10-29 */
  __$.nK7 = {
    win32: `${process.env.ProgramData}\\AzureConnectedMachineAgent\\Tokens\\`,
    linux: "/var/opt/azcmagent/tokens/"
  }, __$.CYY = {
    win32: `${process.env.ProgramFiles}\\AzureConnectedMachineAgent\\himds.exe`,
    linux: "/opt/azcmagent/bin/himds"
  };
  __$.Uo = class Uo extends __$.Kf {
    constructor(A, K, q, Y, z, w) {
      super(A, K, q, Y, z);
      this.identityEndpoint = w;
    }
    static getEnvironmentVariables() {
      let A = process.env[__$.hq.IDENTITY_ENDPOINT],
        K = process.env[__$.hq.IMDS_ENDPOINT];
      if (!A || !K) {
        let q = __$.CYY[process.platform];
        try {
          __$.NYY(q, __$.cK7.F_OK | __$.cK7.R_OK), A = __$.lK7, K = __$.iK7;
        } catch (Y) {}
      }
      return [A, K];
    }
    static tryCreate(A, K, q, Y, z, w) {
      let [H, J] = __$.Uo.getEnvironmentVariables();
      if (!H || !J) return A.info(`[Managed Identity] ${__$.K5.AZURE_ARC} managed identity is unavailable through environment variables because one or both of '${__$.hq.IDENTITY_ENDPOINT}' and '${__$.hq.IMDS_ENDPOINT}' are not defined. ${__$.K5.AZURE_ARC} managed identity is also unavailable through file detection.`), null;
      if (J === __$.iK7) A.info(`[Managed Identity] ${__$.K5.AZURE_ARC} managed identity is available through file detection. Defaulting to known ${__$.K5.AZURE_ARC} endpoint: ${__$.lK7}. Creating ${__$.K5.AZURE_ARC} managed identity.`);else {
        let O = __$.Uo.getValidatedEnvVariableUrlString(__$.hq.IDENTITY_ENDPOINT, H, __$.K5.AZURE_ARC, A);
        O.endsWith("/") && O.slice(0, -1), __$.Uo.getValidatedEnvVariableUrlString(__$.hq.IMDS_ENDPOINT, J, __$.K5.AZURE_ARC, A), A.info(`[Managed Identity] Environment variables validation passed for ${__$.K5.AZURE_ARC} managed identity. Endpoint URI: ${O}. Creating ${__$.K5.AZURE_ARC} managed identity.`);
      }
      if (w.idType !== __$.DO.SYSTEM_ASSIGNED) throw __$.wX(__$.lH1);
      return new __$.Uo(A, K, q, Y, z, H);
    }
    createRequest(A) {
      let K = new __$.QT(__$.QH.GET, this.identityEndpoint.replace("localhost", "127.0.0.1"));
      return K.headers[__$.tV.METADATA_HEADER_NAME] = "true", K.queryParameters[__$.O$.API_VERSION] = __$.kYY, K.queryParameters[__$.O$.RESOURCE] = A, K;
    }
    async getServerTokenResponseAsync(A, K, q, Y) {
      let z;
      if (A.status === __$.P5.UNAUTHORIZED) {
        let w = A.headers["www-authenticate"];
        if (!w) throw __$.wX(__$.rH1);
        if (!w.includes("Basic realm=")) throw __$.wX(__$.oH1);
        let H = w.split("Basic realm=")[1];
        if (!__$.nK7.hasOwnProperty(process.platform)) throw __$.wX(__$.cH1);
        let J = __$.nK7[process.platform],
          O = __$.EYY.basename(H);
        if (!O.endsWith(".key")) throw __$.wX(__$.UH1);
        if (J + O !== H) throw __$.wX(__$.pH1);
        let X;
        try {
          X = await __$.TYY(H).size;
        } catch (G) {
          throw __$.wX(__$.sbA);
        }
        if (X > __$.z67) throw __$.wX(__$.dH1);
        let $;
        try {
          $ = __$.vYY(H, __$.lZ.UTF8);
        } catch (G) {
          throw __$.wX(__$.sbA);
        }
        let _ = `Basic ${$}`;
        this.logger.info("[Managed Identity] Adding authorization header to the request."), q.headers[__$.tV.AUTHORIZATION_HEADER_NAME] = _;
        try {
          z = await K.sendGetRequestAsync(q.computeUri(), Y);
        } catch (G) {
          if (G instanceof __$.V5) throw G;else throw __$.t6(__$.oz.networkError);
        }
      }
      return this.getServerTokenResponse(z || A);
    }
  };
});

// Register to shared state
__$.rK7 = rK7;
