// Module: rR7
// Dependencies: wS, sN6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rR7 = v((ZDH, nR7) => {
  var {
      ParserError: frY
    } = __$.wS(),
    NrY = __$.sN6(),
    {
      JSON_SCHEMA: TrY
    } = __$.sN6();
  nR7.exports = {
    order: 200,
    allowEmpty: !0,
    canParse: [".yaml", ".yml", ".json"],
    async parse(A) {
      let K = A.data;
      if (Buffer.isBuffer(K)) K = K.toString();
      if (typeof K === "string") try {
        return NrY.load(K, {
          schema: TrY
        });
      } catch (q) {
        throw new frY(q.message, A.url);
      } else return K;
    }
  };
});

// Register to shared state
__$.rR7 = rR7;
