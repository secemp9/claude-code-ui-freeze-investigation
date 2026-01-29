// Module: Rw7
// Dependencies: B3, hY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Rw7 = v(Lw7 => {
  Object.defineProperty(Lw7, "__esModule", {
    value: !0
  });
  var IC = __$.B3(),
    k01 = __$.hY(),
    XZY = {
      message: ({
        params: {
          min: A,
          max: K
        }
      }) => K === void 0 ? IC.str`must contain at least ${A} valid item(s)` : IC.str`must contain at least ${A} and no more than ${K} valid item(s)`,
      params: ({
        params: {
          min: A,
          max: K
        }
      }) => K === void 0 ? IC._`{minContains: ${A}}` : IC._`{minContains: ${A}, maxContains: ${K}}`
    },
    $ZY = {
      keyword: "contains",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      trackErrors: !0,
      error: XZY,
      code(A) {
        let {
            gen: K,
            schema: q,
            parentSchema: Y,
            data: z,
            it: w
          } = A,
          H,
          J,
          {
            minContains: O,
            maxContains: X
          } = Y;
        if (w.opts.next) H = O === void 0 ? 1 : O, J = X;else H = 1;
        let $ = K.const("len", IC._`${z}.length`);
        if (A.setParams({
          min: H,
          max: J
        }), J === void 0 && H === 0) {
          (0, k01.checkStrictMode)(w, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
          return;
        }
        if (J !== void 0 && H > J) {
          (0, k01.checkStrictMode)(w, '"minContains" > "maxContains" is always invalid'), A.fail();
          return;
        }
        if ((0, k01.alwaysValidSchema)(w, q)) {
          let D = IC._`${$} >= ${H}`;
          if (J !== void 0) D = IC._`${D} && ${$} <= ${J}`;
          A.pass(D);
          return;
        }
        w.items = !0;
        let _ = K.name("valid");
        if (J === void 0 && H === 1) Z(_, () => K.if(_, () => K.break()));else if (H === 0) {
          if (K.let(_, !0), J !== void 0) K.if(IC._`${z}.length > 0`, G);
        } else K.let(_, !1), G();
        A.result(_, () => A.reset());
        function G() {
          let D = K.name("_valid"),
            j = K.let("count", 0);
          Z(D, () => K.if(D, () => W(j)));
        }
        function Z(D, j) {
          K.forRange("i", 0, $, M => {
            A.subschema({
              keyword: "contains",
              dataProp: M,
              dataPropType: k01.Type.Num,
              compositeRule: !0
            }, D), j();
          });
        }
        function W(D) {
          if (K.code(IC._`${D}++`), J === void 0) K.if(IC._`${D} >= ${H}`, () => K.assign(_, !0).break());else if (K.if(IC._`${D} > ${J}`, () => K.assign(_, !1).break()), H === 1) K.assign(_, !0);else K.if(IC._`${D} >= ${H}`, () => K.assign(_, !0));
        }
      }
    };
  Lw7.default = $ZY;
});

// Register to shared state
__$.Rw7 = Rw7;
