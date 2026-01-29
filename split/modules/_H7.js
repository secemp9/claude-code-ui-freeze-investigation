// Module: _H7
// Dependencies: B3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _H7 = v($H7 => {
  Object.defineProperty($H7, "__esModule", {
    value: !0
  });
  var HX = __$.B3(),
    ZWY = {
      message: ({
        schemaCode: A
      }) => HX.str`must match format "${A}"`,
      params: ({
        schemaCode: A
      }) => HX._`{format: ${A}}`
    },
    WWY = {
      keyword: "format",
      type: ["number", "string"],
      schemaType: "string",
      $data: !0,
      error: ZWY,
      code(A, K) {
        let {
            gen: q,
            data: Y,
            $data: z,
            schema: w,
            schemaCode: H,
            it: J
          } = A,
          {
            opts: O,
            errSchemaPath: X,
            schemaEnv: $,
            self: _
          } = J;
        if (!O.validateFormats) return;
        if (z) G();else Z();
        function G() {
          let W = q.scopeValue("formats", {
              ref: _.formats,
              code: O.code.formats
            }),
            D = q.const("fDef", HX._`${W}[${H}]`),
            j = q.let("fType"),
            M = q.let("format");
          q.if(HX._`typeof ${D} == "object" && !(${D} instanceof RegExp)`, () => q.assign(j, HX._`${D}.type || "string"`).assign(M, HX._`${D}.validate`), () => q.assign(j, HX._`"string"`).assign(M, D)), A.fail$data((0, HX.or)(P(), f()));
          function P() {
            if (O.strictSchema === !1) return HX.nil;
            return HX._`${H} && !${M}`;
          }
          function f() {
            let N = $.$async ? HX._`(${D}.async ? await ${M}(${Y}) : ${M}(${Y}))` : HX._`${M}(${Y})`,
              T = HX._`(typeof ${M} == "function" ? ${N} : ${M}.test(${Y}))`;
            return HX._`${M} && ${M} !== true && ${j} === ${K} && !${T}`;
          }
        }
        function Z() {
          let W = _.formats[w];
          if (!W) {
            P();
            return;
          }
          if (W === !0) return;
          let [D, j, M] = f(W);
          if (D === K) A.pass(N());
          function P() {
            if (O.strictSchema === !1) {
              _.logger.warn(T());
              return;
            }
            throw Error(T());
            function T() {
              return `unknown format "${w}" ignored in schema at path "${X}"`;
            }
          }
          function f(T) {
            let C = T instanceof RegExp ? (0, HX.regexpCode)(T) : O.code.formats ? HX._`${O.code.formats}${(0, HX.getProperty)(w)}` : void 0,
              R = q.scopeValue("formats", {
                key: w,
                ref: T,
                code: C
              });
            if (typeof T == "object" && !(T instanceof RegExp)) return [T.type || "string", T.validate, HX._`${R}.validate`];
            return ["string", T, R];
          }
          function N() {
            if (typeof W == "object" && !(W instanceof RegExp) && W.async) {
              if (!$.$async) throw Error("async format in sync schema");
              return HX._`await ${M}(${Y})`;
            }
            return typeof j == "function" ? HX._`${M}(${Y})` : HX._`${M}.test(${Y})`;
          }
        }
      }
    };
  $H7.default = WWY;
});

// Register to shared state
__$._H7 = _H7;
