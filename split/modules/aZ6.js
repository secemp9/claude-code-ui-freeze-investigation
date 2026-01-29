// Module: aZ6
// Dependencies: yC, B3, Hp, hY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aZ6 = v(gw7 => {
  Object.defineProperty(gw7, "__esModule", {
    value: !0
  });
  var C01 = __$.yC(),
    vI = __$.B3(),
    NZY = __$.Hp(),
    L01 = __$.hY(),
    TZY = {
      message: "must NOT have additional properties",
      params: ({
        params: A
      }) => vI._`{additionalProperty: ${A.additionalProperty}}`
    },
    vZY = {
      keyword: "additionalProperties",
      type: ["object"],
      schemaType: ["boolean", "object"],
      allowUndefined: !0,
      trackErrors: !0,
      error: TZY,
      code(A) {
        let {
          gen: K,
          schema: q,
          parentSchema: Y,
          data: z,
          errsCount: w,
          it: H
        } = A;
        if (!w) throw Error("ajv implementation error");
        let {
          allErrors: J,
          opts: O
        } = H;
        if (H.props = !0, O.removeAdditional !== "all" && (0, L01.alwaysValidSchema)(H, q)) return;
        let X = (0, C01.allSchemaProperties)(Y.properties),
          $ = (0, C01.allSchemaProperties)(Y.patternProperties);
        _(), A.ok(vI._`${w} === ${NZY.default.errors}`);
        function _() {
          K.forIn("key", z, j => {
            if (!X.length && !$.length) W(j);else K.if(G(j), () => W(j));
          });
        }
        function G(j) {
          let M;
          if (X.length > 8) {
            let P = (0, L01.schemaRefOrVal)(H, Y.properties, "properties");
            M = (0, C01.isOwnProperty)(K, P, j);
          } else if (X.length) M = (0, vI.or)(...X.map(P => vI._`${j} === ${P}`));else M = vI.nil;
          if ($.length) M = (0, vI.or)(M, ...$.map(P => vI._`${(0, C01.usePattern)(A, P)}.test(${j})`));
          return (0, vI.not)(M);
        }
        function Z(j) {
          K.code(vI._`delete ${z}[${j}]`);
        }
        function W(j) {
          if (O.removeAdditional === "all" || O.removeAdditional && q === !1) {
            Z(j);
            return;
          }
          if (q === !1) {
            if (A.setParams({
              additionalProperty: j
            }), A.error(), !J) K.break();
            return;
          }
          if (typeof q == "object" && !(0, L01.alwaysValidSchema)(H, q)) {
            let M = K.name("valid");
            if (O.removeAdditional === "failing") D(j, M, !1), K.if((0, vI.not)(M), () => {
              A.reset(), Z(j);
            });else if (D(j, M), !J) K.if((0, vI.not)(M), () => K.break());
          }
        }
        function D(j, M, P) {
          let f = {
            keyword: "additionalProperties",
            dataProp: j,
            dataPropType: L01.Type.Str
          };
          if (P === !1) Object.assign(f, {
            compositeRule: !0,
            createErrors: !1,
            allErrors: !1
          });
          A.subschema(f, M);
        }
      }
    };
  gw7.default = vZY;
});

// Register to shared state
__$.aZ6 = aZ6;
