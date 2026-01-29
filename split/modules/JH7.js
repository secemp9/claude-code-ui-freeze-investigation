// Module: JH7
// Dependencies: hY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var JH7 = v(HH7 => {
  Object.defineProperty(HH7, "__esModule", {
    value: !0
  });
  var iZY = __$.hY(),
    nZY = {
      keyword: ["then", "else"],
      schemaType: ["object", "boolean"],
      code({
        keyword: A,
        parentSchema: K,
        it: q
      }) {
        if (K.if === void 0) (0, iZY.checkStrictMode)(q, `"${A}" without "if" is ignored`);
      }
    };
  HH7.default = nZY;
});

// Register to shared state
__$.JH7 = JH7;
