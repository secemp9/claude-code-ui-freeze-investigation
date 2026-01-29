// Module: eL4
// Dependencies: RK, yIA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eL4 = v(sL4 => {
  Object.defineProperty(sL4, "__esModule", {
    value: !0
  });
  sL4.processDetector = void 0;
  var L_9 = __$.RK(),
    UQ = __$.yIA(),
    R_9 = CA("os");
  class aL4 {
    detect(A) {
      let K = {
        [UQ.ATTR_PROCESS_PID]: process.pid,
        [UQ.ATTR_PROCESS_EXECUTABLE_NAME]: process.title,
        [UQ.ATTR_PROCESS_EXECUTABLE_PATH]: process.execPath,
        [UQ.ATTR_PROCESS_COMMAND_ARGS]: [process.argv[0], ...process.execArgv, ...process.argv.slice(1)],
        [UQ.ATTR_PROCESS_RUNTIME_VERSION]: process.versions.node,
        [UQ.ATTR_PROCESS_RUNTIME_NAME]: "nodejs",
        [UQ.ATTR_PROCESS_RUNTIME_DESCRIPTION]: "Node.js"
      };
      if (process.argv.length > 1) K[UQ.ATTR_PROCESS_COMMAND] = process.argv[1];
      try {
        let q = R_9.userInfo();
        K[UQ.ATTR_PROCESS_OWNER] = q.username;
      } catch (q) {
        L_9.diag.debug(`error obtaining process owner: ${q}`);
      }
      return {
        attributes: K
      };
    }
  }
  sL4.processDetector = new aL4();
});

// Register to shared state
__$.eL4 = eL4;
