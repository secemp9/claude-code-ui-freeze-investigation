// Module: nw7
// Dependencies: yC, B3, hY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nw7 = v(iw7 => {
  Object.defineProperty(iw7, "__esModule", {
    value: !0
  });
  var dw7 = __$.yC(),
    R01 = __$.B3(),
    cw7 = __$.hY(),
    lw7 = __$.hY(),
    RZY = {
      keyword: "patternProperties",
      type: "object",
      schemaType: "object",
      code(A) {
        let {
            gen: K,
            schema: q,
            data: Y,
            parentSchema: z,
            it: w
          } = A,
          {
            opts: H
          } = w,
          J = (0, dw7.allSchemaProperties)(q),
          O = J.filter(D => (0, cw7.alwaysValidSchema)(w, q[D]));
        if (J.length === 0 || O.length === J.length && (!w.opts.unevaluated || w.props === !0)) return;
        let X = H.strictSchema && !H.allowMatchingProperties && z.properties,
          $ = K.name("valid");
        if (w.props !== !0 && !(w.props instanceof R01.Name)) w.props = (0, lw7.evaluatedPropsToName)(K, w.props);
        let {
          props: _
        } = w;
        G();
        function G() {
          for (let D of J) {
            if (X) Z(D);
            if (w.allErrors) W(D);else K.var($, !0), W(D), K.if($);
          }
        }
        function Z(D) {
          for (let j in X) if (new RegExp(D).test(j)) (0, cw7.checkStrictMode)(w, `property ${j} matches pattern ${D} (use allowMatchingProperties)`);
        }
        function W(D) {
          K.forIn("key", Y, j => {
            K.if(R01._`${(0, dw7.usePattern)(A, D)}.test(${j})`, () => {
              let M = O.includes(D);
              if (!M) A.subschema({
                keyword: "patternProperties",
                schemaProp: D,
                dataProp: j,
                dataPropType: lw7.Type.Str
              }, $);
              if (w.opts.unevaluated && _ !== !0) K.assign(R01._`${_}[${j}]`, !0);else if (!M && !w.allErrors) K.if((0, R01.not)($), () => K.break());
            });
          });
        }
      }
    };
  iw7.default = RZY;
});

// Register to shared state
__$.nw7 = nw7;
