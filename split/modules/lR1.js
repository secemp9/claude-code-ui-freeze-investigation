// Module: lR1
// Dependencies: ya6, ha6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lR1 = v((y0z, NzA) => {
  var ba6 = CA("child_process"),
    dR1 = __$.ya6(),
    cR1 = __$.ha6();
  function xa6(A, K, q) {
    let Y = dR1(A, K, q),
      z = ba6.spawn(Y.command, Y.args, Y.options);
    return cR1.hookChildProcess(z, Y), z;
  }
  function ZsK(A, K, q) {
    let Y = dR1(A, K, q),
      z = ba6.spawnSync(Y.command, Y.args, Y.options);
    return z.error = z.error || cR1.verifyENOENTSync(z.status, Y), z;
  }
  NzA.exports = xa6;
  NzA.exports.spawn = xa6;
  NzA.exports.sync = ZsK;
  NzA.exports._parse = dR1;
  NzA.exports._enoent = cR1;
});

// Register to shared state
__$.lR1 = lR1;
