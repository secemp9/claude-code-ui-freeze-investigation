// Module: qw7
// Dependencies: yC, B3, hY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qw7 = v(Kw7 => {
  Object.defineProperty(Kw7, "__esModule", {
    value: !0
  });
  var LuA = __$.yC(),
    RuA = __$.B3(),
    ZGY = __$.hY(),
    WGY = {
      message: ({
        params: {
          missingProperty: A
        }
      }) => RuA.str`must have required property '${A}'`,
      params: ({
        params: {
          missingProperty: A
        }
      }) => RuA._`{missingProperty: ${A}}`
    },
    DGY = {
      keyword: "required",
      type: "object",
      schemaType: "array",
      $data: !0,
      error: WGY,
      code(A) {
        let {
            gen: K,
            schema: q,
            schemaCode: Y,
            data: z,
            $data: w,
            it: H
          } = A,
          {
            opts: J
          } = H;
        if (!w && q.length === 0) return;
        let O = q.length >= J.loopRequired;
        if (H.allErrors) X();else $();
        if (J.strictRequired) {
          let Z = A.parentSchema.properties,
            {
              definedProperties: W
            } = A.it;
          for (let D of q) if ((Z === null || Z === void 0 ? void 0 : Z[D]) === void 0 && !W.has(D)) {
            let j = H.schemaEnv.baseId + H.errSchemaPath,
              M = `required property "${D}" is not defined at "${j}" (strictRequired)`;
            (0, ZGY.checkStrictMode)(H, M, H.opts.strictRequired);
          }
        }
        function X() {
          if (O || w) A.block$data(RuA.nil, _);else for (let Z of q) (0, LuA.checkReportMissingProp)(A, Z);
        }
        function $() {
          let Z = K.let("missing");
          if (O || w) {
            let W = K.let("valid", !0);
            A.block$data(W, () => G(Z, W)), A.ok(W);
          } else K.if((0, LuA.checkMissingProp)(A, q, Z)), (0, LuA.reportMissingProp)(A, Z), K.else();
        }
        function _() {
          K.forOf("prop", Y, Z => {
            A.setParams({
              missingProperty: Z
            }), K.if((0, LuA.noPropertyInData)(K, z, Z, J.ownProperties), () => A.error());
          });
        }
        function G(Z, W) {
          A.setParams({
            missingProperty: Z
          }), K.forOf(Z, Y, () => {
            K.assign(W, (0, LuA.propertyInData)(K, z, Z, J.ownProperties)), K.if((0, RuA.not)(W), () => {
              A.error(), K.break();
            });
          }, RuA.nil);
        }
      }
    };
  Kw7.default = DGY;
});

// Register to shared state
__$.qw7 = qw7;
