// Module: pq7
// Dependencies: qI, YX, NGA, TM, mT, Qq7, TC, tY, Uq7, I2Y

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pq7 = k(() => {
  __$.qI();
  __$.YX();
  __$.NGA();
  __$.TM();
  __$.mT();
  __$.Qq7();
  __$.TC = __$.tY("AzureCliCredential"), __$.Uq7 = {
    getSafeWorkingDir() {
      if (process.platform === "win32") {
        let A = process.env.SystemRoot || process.env.SYSTEMROOT;
        if (!A) __$.TC.getToken.warning("The SystemRoot environment variable is not set. This may cause issues when using the Azure CLI credential."), A = "C:\\Windows";
        return A;
      } else return "/bin";
    },
    async getAzureCliAccessToken(A, K, q, Y) {
      let z = [],
        w = [];
      if (K) z = ["--tenant", K];
      if (q) w = ["--subscription", `"${q}"`];
      return new Promise((H, J) => {
        try {
          __$.I2Y.execFile("az", ["account", "get-access-token", "--output", "json", "--resource", A, ...z, ...w], {
            cwd: __$.Uq7.getSafeWorkingDir(),
            shell: !0,
            timeout: Y
          }, (O, X, $) => {
            H({
              stdout: X,
              stderr: $,
              error: O
            });
          });
        } catch (O) {
          J(O);
        }
      });
    }
  };
});

// Register to shared state
__$.pq7 = pq7;
