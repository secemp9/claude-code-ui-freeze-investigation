// Module: ha6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ha6 = v((R0z, Sa6) => {
  var UR1 = process.platform === "win32";
  function pR1(A, K) {
    return Object.assign(Error(`${K} ${A.command} ENOENT`), {
      code: "ENOENT",
      errno: "ENOENT",
      syscall: `${K} ${A.command}`,
      path: A.command,
      spawnargs: A.args
    });
  }
  function _sK(A, K) {
    if (!UR1) return;
    let q = A.emit;
    A.emit = function (Y, z) {
      if (Y === "exit") {
        let w = Ia6(z, K);
        if (w) return q.call(A, "error", w);
      }
      return q.apply(A, arguments);
    };
  }
  function Ia6(A, K) {
    if (UR1 && A === 1 && !K.file) return pR1(K.original, "spawn");
    return null;
  }
  function GsK(A, K) {
    if (UR1 && A === 1 && !K.file) return pR1(K.original, "spawnSync");
    return null;
  }
  Sa6.exports = {
    hookChildProcess: _sK,
    verifyENOENT: Ia6,
    verifyENOENTSync: GsK,
    notFoundError: pR1
  };
});

// Register to shared state
__$.ha6 = ha6;
