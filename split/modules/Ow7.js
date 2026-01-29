// Module: Ow7
// Dependencies: DuA, B3, hY, v01

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ow7 = v(Jw7 => {
  Object.defineProperty(Jw7, "__esModule", {
    value: !0
  });
  var cZ6 = __$.DuA(),
    KW = __$.B3(),
    NGY = __$.hY(),
    TGY = __$.v01(),
    vGY = {
      message: ({
        params: {
          i: A,
          j: K
        }
      }) => KW.str`must NOT have duplicate items (items ## ${K} and ${A} are identical)`,
      params: ({
        params: {
          i: A,
          j: K
        }
      }) => KW._`{i: ${A}, j: ${K}}`
    },
    EGY = {
      keyword: "uniqueItems",
      type: "array",
      schemaType: "boolean",
      $data: !0,
      error: vGY,
      code(A) {
        let {
          gen: K,
          data: q,
          $data: Y,
          schema: z,
          parentSchema: w,
          schemaCode: H,
          it: J
        } = A;
        if (!Y && !z) return;
        let O = K.let("valid"),
          X = w.items ? (0, cZ6.getSchemaTypes)(w.items) : [];
        A.block$data(O, $, KW._`${H} === false`), A.ok(O);
        function $() {
          let W = K.let("i", KW._`${q}.length`),
            D = K.let("j");
          A.setParams({
            i: W,
            j: D
          }), K.assign(O, !0), K.if(KW._`${W} > 1`, () => (_() ? G : Z)(W, D));
        }
        function _() {
          return X.length > 0 && !X.some(W => W === "object" || W === "array");
        }
        function G(W, D) {
          let j = K.name("item"),
            M = (0, cZ6.checkDataTypes)(X, j, J.opts.strictNumbers, cZ6.DataType.Wrong),
            P = K.const("indices", KW._`{}`);
          K.for(KW._`;${W}--;`, () => {
            if (K.let(j, KW._`${q}[${W}]`), K.if(M, KW._`continue`), X.length > 1) K.if(KW._`typeof ${j} == "string"`, KW._`${j} += "_"`);
            K.if(KW._`typeof ${P}[${j}] == "number"`, () => {
              K.assign(D, KW._`${P}[${j}]`), A.error(), K.assign(O, !1).break();
            }).code(KW._`${P}[${j}] = ${W}`);
          });
        }
        function Z(W, D) {
          let j = (0, NGY.useFunc)(K, TGY.default),
            M = K.name("outer");
          K.label(M).for(KW._`;${W}--;`, () => K.for(KW._`${D} = ${W}; ${D}--;`, () => K.if(KW._`${j}(${q}[${W}], ${q}[${D}])`, () => {
            A.error(), K.assign(O, !1).break(M);
          })));
        }
      }
    };
  Jw7.default = EGY;
});

// Register to shared state
__$.Ow7 = Ow7;
