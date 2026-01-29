// Module: Fz7
// Dependencies: fuA, yC, B3, Hp, G01, hY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Fz7 = v(mz7 => {
  Object.defineProperty(mz7, "__esModule", {
    value: !0
  });
  mz7.callRef = mz7.getValidate = void 0;
  var Q_Y = __$.fuA(),
    xz7 = __$.yC(),
    $f = __$.B3(),
    sGA = __$.Hp(),
    uz7 = __$.G01(),
    P01 = __$.hY(),
    U_Y = {
      keyword: "$ref",
      schemaType: "string",
      code(A) {
        let {
            gen: K,
            schema: q,
            it: Y
          } = A,
          {
            baseId: z,
            schemaEnv: w,
            validateName: H,
            opts: J,
            self: O
          } = Y,
          {
            root: X
          } = w;
        if ((q === "#" || q === "#/") && z === X.baseId) return _();
        let $ = uz7.resolveRef.call(O, X, z, q);
        if ($ === void 0) throw new Q_Y.default(Y.opts.uriResolver, z, q);
        if ($ instanceof uz7.SchemaEnv) return G($);
        return Z($);
        function _() {
          if (w === X) return V01(A, H, w, w.$async);
          let W = K.scopeValue("root", {
            ref: X
          });
          return V01(A, $f._`${W}.validate`, X, X.$async);
        }
        function G(W) {
          let D = Bz7(A, W);
          V01(A, D, W, W.$async);
        }
        function Z(W) {
          let D = K.scopeValue("schema", J.code.source === !0 ? {
              ref: W,
              code: (0, $f.stringify)(W)
            } : {
              ref: W
            }),
            j = K.name("valid"),
            M = A.subschema({
              schema: W,
              dataTypes: [],
              schemaPath: $f.nil,
              topSchemaRef: D,
              errSchemaPath: q
            }, j);
          A.mergeEvaluated(M), A.ok(j);
        }
      }
    };
  function Bz7(A, K) {
    let {
      gen: q
    } = A;
    return K.validate ? q.scopeValue("validate", {
      ref: K.validate
    }) : $f._`${q.scopeValue("wrapper", {
      ref: K
    })}.validate`;
  }
  mz7.getValidate = Bz7;
  function V01(A, K, q, Y) {
    let {
        gen: z,
        it: w
      } = A,
      {
        allErrors: H,
        schemaEnv: J,
        opts: O
      } = w,
      X = O.passContext ? sGA.default.this : $f.nil;
    if (Y) $();else _();
    function $() {
      if (!J.$async) throw Error("async schema referenced by sync schema");
      let W = z.let("valid");
      z.try(() => {
        if (z.code($f._`await ${(0, xz7.callValidateCode)(A, K, X)}`), Z(K), !H) z.assign(W, !0);
      }, D => {
        if (z.if($f._`!(${D} instanceof ${w.ValidationError})`, () => z.throw(D)), G(D), !H) z.assign(W, !1);
      }), A.ok(W);
    }
    function _() {
      A.result((0, xz7.callValidateCode)(A, K, X), () => Z(K), () => G(K));
    }
    function G(W) {
      let D = $f._`${W}.errors`;
      z.assign(sGA.default.vErrors, $f._`${sGA.default.vErrors} === null ? ${D} : ${sGA.default.vErrors}.concat(${D})`), z.assign(sGA.default.errors, $f._`${sGA.default.vErrors}.length`);
    }
    function Z(W) {
      var D;
      if (!w.opts.unevaluated) return;
      let j = (D = q === null || q === void 0 ? void 0 : q.validate) === null || D === void 0 ? void 0 : D.evaluated;
      if (w.props !== !0) if (j && !j.dynamicProps) {
        if (j.props !== void 0) w.props = P01.mergeEvaluated.props(z, j.props, w.props);
      } else {
        let M = z.var("props", $f._`${W}.evaluated.props`);
        w.props = P01.mergeEvaluated.props(z, M, w.props, $f.Name);
      }
      if (w.items !== !0) if (j && !j.dynamicItems) {
        if (j.items !== void 0) w.items = P01.mergeEvaluated.items(z, j.items, w.items);
      } else {
        let M = z.var("items", $f._`${W}.evaluated.items`);
        w.items = P01.mergeEvaluated.items(z, M, w.items, $f.Name);
      }
    }
  }
  mz7.callRef = V01;
  mz7.default = U_Y;
});

// Register to shared state
__$.Fz7 = Fz7;
