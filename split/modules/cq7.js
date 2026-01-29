// Module: cq7
// Dependencies: YX, TM, qI, mT, NGA, pU, tY, dq7, S2Y

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cq7 = k(() => {
  __$.YX();
  __$.TM();
  __$.qI();
  __$.mT();
  __$.NGA();
  __$.pU = __$.tY("AzureDeveloperCliCredential"), __$.dq7 = {
    getSafeWorkingDir() {
      if (process.platform === "win32") {
        let A = process.env.SystemRoot || process.env.SYSTEMROOT;
        if (!A) __$.pU.getToken.warning("The SystemRoot environment variable is not set. This may cause issues when using the Azure Developer CLI credential."), A = "C:\\Windows";
        return A;
      } else return "/bin";
    },
    async getAzdAccessToken(A, K, q) {
      let Y = [];
      if (K) Y = ["--tenant-id", K];
      return new Promise((z, w) => {
        try {
          __$.S2Y.execFile("azd", ["auth", "token", "--output", "json", ...A.reduce((H, J) => H.concat("--scope", J), []), ...Y], {
            cwd: __$.dq7.getSafeWorkingDir(),
            timeout: q
          }, (H, J, O) => {
            z({
              stdout: J,
              stderr: O,
              error: H
            });
          });
        } catch (H) {
          w(H);
        }
      });
    }
  };
});

// Register to shared state
__$.cq7 = cq7;
