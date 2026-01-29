// Module: LE8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var LE8 = v(CE8 => {
  Object.defineProperty(CE8, "__esModule", {
    value: !0
  });
  var atA = CA("fs"),
    Um1 = CA("path");
  function _A5(A) {
    let K = Um1.resolve(A);
    if (!atA.existsSync(K)) throw Error(`Cannot read contents of ${K}. Directory does not exist.`);
    if (!atA.statSync(K).isDirectory()) throw Error(`Cannot read contents of ${K}, because it is not a directory.`);
    let q = Y => {
      return atA.readdirSync(Y).reduce((z, w) => {
        let H = Um1.join(Y, w);
        if (atA.statSync(H).isDirectory()) return z.concat(q(H));
        return z.push(H), z;
      }, []);
    };
    return q(K).map(Y => Um1.relative(K, Y));
  }
  CE8.deepReadDirSync = _A5;
});

// Register to shared state
__$.LE8 = LE8;
