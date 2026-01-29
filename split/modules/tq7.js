// Module: tq7
// Dependencies: qI, YX, NGA, TM, nq7, mT, dU, tY, oq7, sq7
//   ... and 3 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tq7 = k(() => {
  __$.qI();
  __$.YX();
  __$.NGA();
  __$.TM();
  __$.nq7();
  __$.mT();
  __$.dU = __$.tY("AzurePowerShellCredential"), __$.oq7 = process.platform === "win32";
  __$.sq7 = {
    login: "Run Connect-AzAccount to login",
    installed: "The specified module 'Az.Accounts' with version '2.2.0' was not loaded because no valid module file was found in any module directory"
  }, __$.X_6 = {
    login: "Please run 'Connect-AzAccount' from PowerShell to authenticate before using this credential.",
    installed: `The 'Az.Account' module >= 2.2.0 is not installed. Install the Azure Az PowerShell module with: "Install-Module -Name Az -Scope CurrentUser -Repository PSGallery -Force".`,
    troubleshoot: "To troubleshoot, visit https://aka.ms/azsdk/js/identity/powershellcredential/troubleshoot."
  }, __$.$_6 = [__$.aq7("pwsh")];
  if (__$.oq7) __$.$_6.push(__$.aq7("powershell"));
});

// Register to shared state
__$.tq7 = tq7;
