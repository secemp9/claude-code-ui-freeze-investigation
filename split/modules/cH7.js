// Module: cH7
// Dependencies: gH7, QH7, B3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cH7 = v((buA, dH7) => {
  Object.defineProperty(buA, "__esModule", {
    value: !0
  });
  var AZA = __$.gH7(),
    wDY = __$.QH7(),
    JW6 = __$.B3(),
    UH7 = new JW6.Name("fullFormats"),
    HDY = new JW6.Name("fastFormats"),
    OW6 = (A, K = {
      keywords: !0
    }) => {
      if (Array.isArray(K)) return pH7(A, K, AZA.fullFormats, UH7), A;
      let [q, Y] = K.mode === "fast" ? [AZA.fastFormats, HDY] : [AZA.fullFormats, UH7],
        z = K.formats || AZA.formatNames;
      if (pH7(A, z, q, Y), K.keywords) (0, wDY.default)(A);
      return A;
    };
  OW6.get = (A, K = "full") => {
    let Y = (K === "fast" ? AZA.fastFormats : AZA.fullFormats)[A];
    if (!Y) throw Error(`Unknown format "${A}"`);
    return Y;
  };
  function pH7(A, K, q, Y) {
    var z, w;
    (z = (w = A.opts.code).formats) !== null && z !== void 0 || (w.formats = JW6._`require("ajv-formats/dist/formats").${Y}`);
    for (let H of K) A.addFormat(H, q[H]);
  }
  dH7.exports = buA = OW6;
  Object.defineProperty(buA, "__esModule", {
    value: !0
  });
  buA.default = OW6;
});

// Register to shared state
__$.cH7 = cH7;
