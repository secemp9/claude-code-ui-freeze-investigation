// Module: $D6
// Dependencies: I2, HH, fZA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $D6 = v((_8H, G07) => {
  var NZA;
  try {
    NZA = __$.I2();
  } catch (A) {
    NZA = CA("fs");
  }
  var TX1 = __$.HH(),
    {
      stringify: $07,
      stripBom: _07
    } = __$.fZA();
  async function TPY(A, K = {}) {
    if (typeof K === "string") K = {
      encoding: K
    };
    let q = K.fs || NZA,
      Y = "throws" in K ? K.throws : !0,
      z = await TX1.fromCallback(q.readFile)(A, K);
    z = _07(z);
    let w;
    try {
      w = JSON.parse(z, K ? K.reviver : null);
    } catch (H) {
      if (Y) throw H.message = `${A}: ${H.message}`, H;else return null;
    }
    return w;
  }
  var vPY = TX1.fromPromise(TPY);
  function EPY(A, K = {}) {
    if (typeof K === "string") K = {
      encoding: K
    };
    let q = K.fs || NZA,
      Y = "throws" in K ? K.throws : !0;
    try {
      let z = q.readFileSync(A, K);
      return z = _07(z), JSON.parse(z, K.reviver);
    } catch (z) {
      if (Y) throw z.message = `${A}: ${z.message}`, z;else return null;
    }
  }
  async function kPY(A, K, q = {}) {
    let Y = q.fs || NZA,
      z = $07(K, q);
    await TX1.fromCallback(Y.writeFile)(A, z, q);
  }
  var CPY = TX1.fromPromise(kPY);
  function LPY(A, K, q = {}) {
    let Y = q.fs || NZA,
      z = $07(K, q);
    return Y.writeFileSync(A, z, q);
  }
  var RPY = {
    readFile: vPY,
    readFileSync: EPY,
    writeFile: CPY,
    writeFileSync: LPY
  };
  G07.exports = RPY;
});

// Register to shared state
__$.$D6 = $D6;
