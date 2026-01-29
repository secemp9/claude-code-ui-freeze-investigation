// Module: nZ6
// Dependencies: B3, hY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nZ6 = v(jw7 => {
  Object.defineProperty(jw7, "__esModule", {
    value: !0
  });
  jw7.validateAdditionalItems = void 0;
  var GqA = __$.B3(),
    iZ6 = __$.hY(),
    rGY = {
      message: ({
        params: {
          len: A
        }
      }) => GqA.str`must NOT have more than ${A} items`,
      params: ({
        params: {
          len: A
        }
      }) => GqA._`{limit: ${A}}`
    },
    oGY = {
      keyword: "additionalItems",
      type: "array",
      schemaType: ["boolean", "object"],
      before: "uniqueItems",
      error: rGY,
      code(A) {
        let {
            parentSchema: K,
            it: q
          } = A,
          {
            items: Y
          } = K;
        if (!Array.isArray(Y)) {
          (0, iZ6.checkStrictMode)(q, '"additionalItems" is ignored when "items" is not an array of schemas');
          return;
        }
        Dw7(A, Y);
      }
    };
  function Dw7(A, K) {
    let {
      gen: q,
      schema: Y,
      data: z,
      keyword: w,
      it: H
    } = A;
    H.items = !0;
    let J = q.const("len", GqA._`${z}.length`);
    if (Y === !1) A.setParams({
      len: K.length
    }), A.pass(GqA._`${J} <= ${K.length}`);else if (typeof Y == "object" && !(0, iZ6.alwaysValidSchema)(H, Y)) {
      let X = q.var("valid", GqA._`${J} <= ${K.length}`);
      q.if((0, GqA.not)(X), () => O(X)), A.ok(X);
    }
    function O(X) {
      q.forRange("i", K.length, J, $ => {
        if (A.subschema({
          keyword: w,
          dataProp: $,
          dataPropType: iZ6.Type.Num
        }, X), !H.allErrors) q.if((0, GqA.not)(X), () => q.break());
      });
    }
  }
  jw7.validateAdditionalItems = Dw7;
  jw7.default = oGY;
});

// Register to shared state
__$.nZ6 = nZ6;
