// Module: TH6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TH6 = v(mr4 => {
  Object.defineProperty(mr4, "__esModule", {
    value: !0
  });
  mr4.GCE_LINUX_BIOS_PATHS = void 0;
  mr4.isGoogleCloudServerless = br4;
  mr4.isGoogleComputeEngineLinux = xr4;
  mr4.isGoogleComputeEngineMACAddress = ur4;
  mr4.isGoogleComputeEngine = Br4;
  mr4.detectGCPResidency = La9;
  var Sr4 = CA("fs"),
    hr4 = CA("os");
  mr4.GCE_LINUX_BIOS_PATHS = {
    BIOS_DATE: "/sys/class/dmi/id/bios_date",
    BIOS_VENDOR: "/sys/class/dmi/id/bios_vendor"
  };
  var Ca9 = /^42:01/;
  function br4() {
    return !!(process.env.CLOUD_RUN_JOB || process.env.FUNCTION_NAME || process.env.K_SERVICE);
  }
  function xr4() {
    if ((0, hr4.platform)() !== "linux") return !1;
    try {
      (0, Sr4.statSync)(mr4.GCE_LINUX_BIOS_PATHS.BIOS_DATE);
      let A = (0, Sr4.readFileSync)(mr4.GCE_LINUX_BIOS_PATHS.BIOS_VENDOR, "utf8");
      return /Google/.test(A);
    } catch (A) {
      return !1;
    }
  }
  function ur4() {
    let A = (0, hr4.networkInterfaces)();
    for (let K of Object.values(A)) {
      if (!K) continue;
      for (let {
        mac: q
      } of K) if (Ca9.test(q)) return !0;
    }
    return !1;
  }
  function Br4() {
    return xr4() || ur4();
  }
  function La9() {
    return br4() || Br4();
  }
});

// Register to shared state
__$.TH6 = TH6;
