// Module: ew7
// Dependencies: B3, hY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ew7 = v(tw7 => {
  Object.defineProperty(tw7, "__esModule", {
    value: !0
  });
  var y01 = __$.B3(),
    BZY = __$.hY(),
    mZY = {
      message: "must match exactly one schema in oneOf",
      params: ({
        params: A
      }) => y01._`{passingSchemas: ${A.passing}}`
    },
    gZY = {
      keyword: "oneOf",
      schemaType: "array",
      trackErrors: !0,
      error: mZY,
      code(A) {
        let {
          gen: K,
          schema: q,
          parentSchema: Y,
          it: z
        } = A;
        if (!Array.isArray(q)) throw Error("ajv implementation error");
        if (z.opts.discriminator && Y.discriminator) return;
        let w = q,
          H = K.let("valid", !1),
          J = K.let("passing", null),
          O = K.name("_valid");
        A.setParams({
          passing: J
        }), K.block(X), A.result(H, () => A.reset(), () => A.error(!0));
        function X() {
          w.forEach(($, _) => {
            let G;
            if ((0, BZY.alwaysValidSchema)(z, $)) K.var(O, !0);else G = A.subschema({
              keyword: "oneOf",
              schemaProp: _,
              compositeRule: !0
            }, O);
            if (_ > 0) K.if(y01._`${O} && ${H}`).assign(H, !1).assign(J, y01._`[${J}, ${_}]`).else();
            K.if(O, () => {
              if (K.assign(H, !0), K.assign(J, _), G) A.mergeEvaluated(G, y01.Name);
            });
          });
        }
      }
    };
  tw7.default = gZY;
});

// Register to shared state
__$.ew7 = ew7;
