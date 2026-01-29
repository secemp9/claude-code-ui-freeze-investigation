// Module: tz7
// Dependencies: yC, B3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tz7 = v(sz7 => {
  Object.defineProperty(sz7, "__esModule", {
    value: !0
  });
  var HGY = __$.yC(),
    T01 = __$.B3(),
    JGY = {
      message: ({
        schemaCode: A
      }) => T01.str`must match pattern "${A}"`,
      params: ({
        schemaCode: A
      }) => T01._`{pattern: ${A}}`
    },
    OGY = {
      keyword: "pattern",
      type: "string",
      schemaType: "string",
      $data: !0,
      error: JGY,
      code(A) {
        let {
            data: K,
            $data: q,
            schema: Y,
            schemaCode: z,
            it: w
          } = A,
          H = w.opts.unicodeRegExp ? "u" : "",
          J = q ? T01._`(new RegExp(${z}, ${H}))` : (0, HGY.usePattern)(A, Y);
        A.fail$data(T01._`!${J}.test(${K})`);
      }
    };
  sz7.default = OGY;
});

// Register to shared state
__$.tz7 = tz7;
