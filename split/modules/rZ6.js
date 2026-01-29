// Module: rZ6
// Dependencies: B3, hY, yC

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rZ6 = v(fw7 => {
  Object.defineProperty(fw7, "__esModule", {
    value: !0
  });
  fw7.validateTuple = void 0;
  var Pw7 = __$.B3(),
    E01 = __$.hY(),
    sGY = __$.yC(),
    tGY = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "array", "boolean"],
      before: "uniqueItems",
      code(A) {
        let {
          schema: K,
          it: q
        } = A;
        if (Array.isArray(K)) return Vw7(A, "additionalItems", K);
        if (q.items = !0, (0, E01.alwaysValidSchema)(q, K)) return;
        A.ok((0, sGY.validateArray)(A));
      }
    };
  function Vw7(A, K, q = A.schema) {
    let {
      gen: Y,
      parentSchema: z,
      data: w,
      keyword: H,
      it: J
    } = A;
    if ($(z), J.opts.unevaluated && q.length && J.items !== !0) J.items = E01.mergeEvaluated.items(Y, q.length, J.items);
    let O = Y.name("valid"),
      X = Y.const("len", Pw7._`${w}.length`);
    q.forEach((_, G) => {
      if ((0, E01.alwaysValidSchema)(J, _)) return;
      Y.if(Pw7._`${X} > ${G}`, () => A.subschema({
        keyword: H,
        schemaProp: G,
        dataProp: G
      }, O)), A.ok(O);
    });
    function $(_) {
      let {
          opts: G,
          errSchemaPath: Z
        } = J,
        W = q.length,
        D = W === _.minItems && (W === _.maxItems || _[K] === !1);
      if (G.strictTuples && !D) {
        let j = `"${H}" is ${W}-tuple, but minItems or maxItems/${K} are not specified or different at path "${Z}"`;
        (0, E01.checkStrictMode)(J, j, G.strictTuples);
      }
    }
  }
  fw7.validateTuple = Vw7;
  fw7.default = tGY;
});

// Register to shared state
__$.rZ6 = rZ6;
