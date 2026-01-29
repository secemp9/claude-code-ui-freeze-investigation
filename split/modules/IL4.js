// Module: IL4
// Dependencies: J91, RK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var IL4 = v(RL4 => {
  Object.defineProperty(RL4, "__esModule", {
    value: !0
  });
  RL4.getMachineId = void 0;
  var LL4 = CA("process"),
    W_9 = __$.J91(),
    D_9 = __$.RK();
  async function j_9() {
    let K = "%windir%\\System32\\REG.exe";
    if (LL4.arch === "ia32" && "PROCESSOR_ARCHITEW6432" in LL4.env) K = "%windir%\\sysnative\\cmd.exe /c " + K;
    try {
      let Y = (await (0, W_9.execAsync)(`${K} QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid`)).stdout.split("REG_SZ");
      if (Y.length === 2) return Y[1].trim();
    } catch (q) {
      D_9.diag.debug(`error reading machine id: ${q}`);
    }
    return;
  }
  RL4.getMachineId = j_9;
});

// Register to shared state
__$.IL4 = IL4;
