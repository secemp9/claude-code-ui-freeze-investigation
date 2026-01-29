// Module: TL4
// Dependencies: RK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TL4 = v(fL4 => {
  Object.defineProperty(fL4, "__esModule", {
    value: !0
  });
  fL4.getMachineId = void 0;
  var O_9 = CA("fs"),
    X_9 = __$.RK();
  async function $_9() {
    let A = ["/etc/machine-id", "/var/lib/dbus/machine-id"];
    for (let K of A) try {
      return (await O_9.promises.readFile(K, {
        encoding: "utf8"
      })).trim();
    } catch (q) {
      X_9.diag.debug(`error reading machine id: ${q}`);
    }
    return;
  }
  fL4.getMachineId = $_9;
});

// Register to shared state
__$.TL4 = TL4;
