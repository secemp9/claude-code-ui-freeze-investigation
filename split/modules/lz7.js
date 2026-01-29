// Module: lz7
// Dependencies: B3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lz7 = v(cz7 => {
  Object.defineProperty(cz7, "__esModule", {
    value: !0
  });
  var kuA = __$.B3(),
    s_Y = {
      message: ({
        schemaCode: A
      }) => kuA.str`must be multiple of ${A}`,
      params: ({
        schemaCode: A
      }) => kuA._`{multipleOf: ${A}}`
    },
    t_Y = {
      keyword: "multipleOf",
      type: "number",
      schemaType: "number",
      $data: !0,
      error: s_Y,
      code(A) {
        let {
            gen: K,
            data: q,
            schemaCode: Y,
            it: z
          } = A,
          w = z.opts.multipleOfPrecision,
          H = K.let("res"),
          J = w ? kuA._`Math.abs(Math.round(${H}) - ${H}) > 1e-${w}` : kuA._`${H} !== parseInt(${H})`;
        A.fail$data(kuA._`(${Y} === 0 || (${H} = ${q}/${Y}, ${J}))`);
      }
    };
  cz7.default = t_Y;
});

// Register to shared state
__$.lz7 = lz7;
