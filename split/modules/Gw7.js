// Module: Gw7
// Dependencies: B3, hY, v01

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Gw7 = v(_w7 => {
  Object.defineProperty(_w7, "__esModule", {
    value: !0
  });
  var IuA = __$.B3(),
    SGY = __$.hY(),
    hGY = __$.v01(),
    bGY = {
      message: "must be equal to one of the allowed values",
      params: ({
        schemaCode: A
      }) => IuA._`{allowedValues: ${A}}`
    },
    xGY = {
      keyword: "enum",
      schemaType: "array",
      $data: !0,
      error: bGY,
      code(A) {
        let {
          gen: K,
          data: q,
          $data: Y,
          schema: z,
          schemaCode: w,
          it: H
        } = A;
        if (!Y && z.length === 0) throw Error("enum must have non-empty array");
        let J = z.length >= H.opts.loopEnum,
          O,
          X = () => O !== null && O !== void 0 ? O : O = (0, SGY.useFunc)(K, hGY.default),
          $;
        if (J || Y) $ = K.let("valid"), A.block$data($, _);else {
          if (!Array.isArray(z)) throw Error("ajv implementation error");
          let Z = K.const("vSchema", w);
          $ = (0, IuA.or)(...z.map((W, D) => G(Z, D)));
        }
        A.pass($);
        function _() {
          K.assign($, !1), K.forOf("v", w, Z => K.if(IuA._`${X()}(${q}, ${Z})`, () => K.assign($, !0).break()));
        }
        function G(Z, W) {
          let D = z[W];
          return typeof D === "object" && D !== null ? IuA._`${X()}(${q}, ${Z}[${W}])` : IuA._`${q} === ${D}`;
        }
      }
    };
  _w7.default = xGY;
});

// Register to shared state
__$.Gw7 = Gw7;
