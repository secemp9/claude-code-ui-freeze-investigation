// Module: CL4
// Dependencies: J91, RK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var CL4 = v(EL4 => {
  Object.defineProperty(EL4, "__esModule", {
    value: !0
  });
  EL4.getMachineId = void 0;
  var __9 = CA("fs"),
    G_9 = __$.J91(),
    vL4 = __$.RK();
  async function Z_9() {
    try {
      return (await __9.promises.readFile("/etc/hostid", {
        encoding: "utf8"
      })).trim();
    } catch (A) {
      vL4.diag.debug(`error reading machine id: ${A}`);
    }
    try {
      return (await (0, G_9.execAsync)("kenv -q smbios.system.uuid")).stdout.trim();
    } catch (A) {
      vL4.diag.debug(`error reading machine id: ${A}`);
    }
    return;
  }
  EL4.getMachineId = Z_9;
});

// Register to shared state
__$.CL4 = CL4;
