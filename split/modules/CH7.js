// Module: CH7
// Dependencies: B3, vH7, G01, fuA, hY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var CH7 = v(kH7 => {
  Object.defineProperty(kH7, "__esModule", {
    value: !0
  });
  var tGA = __$.B3(),
    tZ6 = __$.vH7(),
    EH7 = __$.G01(),
    CWY = __$.fuA(),
    LWY = __$.hY(),
    RWY = {
      message: ({
        params: {
          discrError: A,
          tagName: K
        }
      }) => A === tZ6.DiscrError.Tag ? `tag "${K}" must be string` : `value of tag "${K}" must be in oneOf`,
      params: ({
        params: {
          discrError: A,
          tag: K,
          tagName: q
        }
      }) => tGA._`{error: ${A}, tag: ${q}, tagValue: ${K}}`
    },
    yWY = {
      keyword: "discriminator",
      type: "object",
      schemaType: "object",
      error: RWY,
      code(A) {
        let {
            gen: K,
            data: q,
            schema: Y,
            parentSchema: z,
            it: w
          } = A,
          {
            oneOf: H
          } = z;
        if (!w.opts.discriminator) throw Error("discriminator: requires discriminator option");
        let J = Y.propertyName;
        if (typeof J != "string") throw Error("discriminator: requires propertyName");
        if (Y.mapping) throw Error("discriminator: mapping is not supported");
        if (!H) throw Error("discriminator: requires oneOf keyword");
        let O = K.let("valid", !1),
          X = K.const("tag", tGA._`${q}${(0, tGA.getProperty)(J)}`);
        K.if(tGA._`typeof ${X} == "string"`, () => $(), () => A.error(!1, {
          discrError: tZ6.DiscrError.Tag,
          tag: X,
          tagName: J
        })), A.ok(O);
        function $() {
          let Z = G();
          K.if(!1);
          for (let W in Z) K.elseIf(tGA._`${X} === ${W}`), K.assign(O, _(Z[W]));
          K.else(), A.error(!1, {
            discrError: tZ6.DiscrError.Mapping,
            tag: X,
            tagName: J
          }), K.endIf();
        }
        function _(Z) {
          let W = K.name("valid"),
            D = A.subschema({
              keyword: "oneOf",
              schemaProp: Z
            }, W);
          return A.mergeEvaluated(D, tGA.Name), W;
        }
        function G() {
          var Z;
          let W = {},
            D = M(z),
            j = !0;
          for (let N = 0; N < H.length; N++) {
            let T = H[N];
            if ((T === null || T === void 0 ? void 0 : T.$ref) && !(0, LWY.schemaHasRulesButRef)(T, w.self.RULES)) {
              let R = T.$ref;
              if (T = EH7.resolveRef.call(w.self, w.schemaEnv.root, w.baseId, R), T instanceof EH7.SchemaEnv) T = T.schema;
              if (T === void 0) throw new CWY.default(w.opts.uriResolver, w.baseId, R);
            }
            let C = (Z = T === null || T === void 0 ? void 0 : T.properties) === null || Z === void 0 ? void 0 : Z[J];
            if (typeof C != "object") throw Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${J}"`);
            j = j && (D || M(T)), P(C, N);
          }
          if (!j) throw Error(`discriminator: "${J}" must be required`);
          return W;
          function M({
            required: N
          }) {
            return Array.isArray(N) && N.includes(J);
          }
          function P(N, T) {
            if (N.const) f(N.const, T);else if (N.enum) for (let C of N.enum) f(C, T);else throw Error(`discriminator: "properties/${J}" must have "const" or "enum"`);
          }
          function f(N, T) {
            if (typeof N != "string" || N in W) throw Error(`discriminator: "${J}" values must be unique strings`);
            W[N] = T;
          }
        }
      }
    };
  kH7.default = yWY;
});

// Register to shared state
__$.CH7 = CH7;
