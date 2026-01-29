// Module: VuA
// Dependencies: oY7, DuA, TZ6, $27, V27, v27, B3, Hp, juA, hY
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var VuA = v(i27 => {
  Object.defineProperty(i27, "__esModule", {
    value: !0
  });
  i27.getData = i27.KeywordCxt = i27.validateFunctionCode = void 0;
  var B27 = __$.oY7(),
    h27 = __$.DuA(),
    hZ6 = __$.TZ6(),
    X01 = __$.DuA(),
    eXY = __$.$27(),
    PuA = __$.V27(),
    SZ6 = __$.v27(),
    TK = __$.B3(),
    G5 = __$.Hp(),
    A$Y = __$.juA(),
    Jp = __$.hY(),
    MuA = __$.WuA();
  function K$Y(A) {
    if (F27(A)) {
      if (Q27(A), g27(A)) {
        z$Y(A);
        return;
      }
    }
    m27(A, () => (0, B27.topBoolOrEmptySchema)(A));
  }
  i27.validateFunctionCode = K$Y;
  function m27({
    gen: A,
    validateName: K,
    schema: q,
    schemaEnv: Y,
    opts: z
  }, w) {
    if (z.code.es5) A.func(K, TK._`${G5.default.data}, ${G5.default.valCxt}`, Y.$async, () => {
      A.code(TK._`"use strict"; ${b27(q, z)}`), Y$Y(A, z), A.code(w);
    });else A.func(K, TK._`${G5.default.data}, ${q$Y(z)}`, Y.$async, () => A.code(b27(q, z)).code(w));
  }
  function q$Y(A) {
    return TK._`{${G5.default.instancePath}="", ${G5.default.parentData}, ${G5.default.parentDataProperty}, ${G5.default.rootData}=${G5.default.data}${A.dynamicRef ? TK._`, ${G5.default.dynamicAnchors}={}` : TK.nil}}={}`;
  }
  function Y$Y(A, K) {
    A.if(G5.default.valCxt, () => {
      if (A.var(G5.default.instancePath, TK._`${G5.default.valCxt}.${G5.default.instancePath}`), A.var(G5.default.parentData, TK._`${G5.default.valCxt}.${G5.default.parentData}`), A.var(G5.default.parentDataProperty, TK._`${G5.default.valCxt}.${G5.default.parentDataProperty}`), A.var(G5.default.rootData, TK._`${G5.default.valCxt}.${G5.default.rootData}`), K.dynamicRef) A.var(G5.default.dynamicAnchors, TK._`${G5.default.valCxt}.${G5.default.dynamicAnchors}`);
    }, () => {
      if (A.var(G5.default.instancePath, TK._`""`), A.var(G5.default.parentData, TK._`undefined`), A.var(G5.default.parentDataProperty, TK._`undefined`), A.var(G5.default.rootData, G5.default.data), K.dynamicRef) A.var(G5.default.dynamicAnchors, TK._`{}`);
    });
  }
  function z$Y(A) {
    let {
      schema: K,
      opts: q,
      gen: Y
    } = A;
    m27(A, () => {
      if (q.$comment && K.$comment) p27(A);
      if (X$Y(A), Y.let(G5.default.vErrors, null), Y.let(G5.default.errors, 0), q.unevaluated) w$Y(A);
      U27(A), G$Y(A);
    });
    return;
  }
  function w$Y(A) {
    let {
      gen: K,
      validateName: q
    } = A;
    A.evaluated = K.const("evaluated", TK._`${q}.evaluated`), K.if(TK._`${A.evaluated}.dynamicProps`, () => K.assign(TK._`${A.evaluated}.props`, TK._`undefined`)), K.if(TK._`${A.evaluated}.dynamicItems`, () => K.assign(TK._`${A.evaluated}.items`, TK._`undefined`));
  }
  function b27(A, K) {
    let q = typeof A == "object" && A[K.schemaId];
    return q && (K.code.source || K.code.process) ? TK._`/*# sourceURL=${q} */` : TK.nil;
  }
  function H$Y(A, K) {
    if (F27(A)) {
      if (Q27(A), g27(A)) {
        J$Y(A, K);
        return;
      }
    }
    (0, B27.boolOrEmptySchema)(A, K);
  }
  function g27({
    schema: A,
    self: K
  }) {
    if (typeof A == "boolean") return !A;
    for (let q in A) if (K.RULES.all[q]) return !0;
    return !1;
  }
  function F27(A) {
    return typeof A.schema != "boolean";
  }
  function J$Y(A, K) {
    let {
      schema: q,
      gen: Y,
      opts: z
    } = A;
    if (z.$comment && q.$comment) p27(A);
    $$Y(A), _$Y(A);
    let w = Y.const("_errs", G5.default.errors);
    U27(A, w), Y.var(K, TK._`${w} === ${G5.default.errors}`);
  }
  function Q27(A) {
    (0, Jp.checkUnknownRules)(A), O$Y(A);
  }
  function U27(A, K) {
    if (A.opts.jtd) return x27(A, [], !1, K);
    let q = (0, h27.getSchemaTypes)(A.schema),
      Y = (0, h27.coerceAndCheckDataType)(A, q);
    x27(A, q, !Y, K);
  }
  function O$Y(A) {
    let {
      schema: K,
      errSchemaPath: q,
      opts: Y,
      self: z
    } = A;
    if (K.$ref && Y.ignoreKeywordsWithRef && (0, Jp.schemaHasRulesButRef)(K, z.RULES)) z.logger.warn(`$ref: keywords ignored in schema at path "${q}"`);
  }
  function X$Y(A) {
    let {
      schema: K,
      opts: q
    } = A;
    if (K.default !== void 0 && q.useDefaults && q.strictSchema) (0, Jp.checkStrictMode)(A, "default is ignored in the schema root");
  }
  function $$Y(A) {
    let K = A.schema[A.opts.schemaId];
    if (K) A.baseId = (0, A$Y.resolveUrl)(A.opts.uriResolver, A.baseId, K);
  }
  function _$Y(A) {
    if (A.schema.$async && !A.schemaEnv.$async) throw Error("async schema in sync schema");
  }
  function p27({
    gen: A,
    schemaEnv: K,
    schema: q,
    errSchemaPath: Y,
    opts: z
  }) {
    let w = q.$comment;
    if (z.$comment === !0) A.code(TK._`${G5.default.self}.logger.log(${w})`);else if (typeof z.$comment == "function") {
      let H = TK.str`${Y}/$comment`,
        J = A.scopeValue("root", {
          ref: K.root
        });
      A.code(TK._`${G5.default.self}.opts.$comment(${w}, ${H}, ${J}.schema)`);
    }
  }
  function G$Y(A) {
    let {
      gen: K,
      schemaEnv: q,
      validateName: Y,
      ValidationError: z,
      opts: w
    } = A;
    if (q.$async) K.if(TK._`${G5.default.errors} === 0`, () => K.return(G5.default.data), () => K.throw(TK._`new ${z}(${G5.default.vErrors})`));else {
      if (K.assign(TK._`${Y}.errors`, G5.default.vErrors), w.unevaluated) Z$Y(A);
      K.return(TK._`${G5.default.errors} === 0`);
    }
  }
  function Z$Y({
    gen: A,
    evaluated: K,
    props: q,
    items: Y
  }) {
    if (q instanceof TK.Name) A.assign(TK._`${K}.props`, q);
    if (Y instanceof TK.Name) A.assign(TK._`${K}.items`, Y);
  }
  function x27(A, K, q, Y) {
    let {
        gen: z,
        schema: w,
        data: H,
        allErrors: J,
        opts: O,
        self: X
      } = A,
      {
        RULES: $
      } = X;
    if (w.$ref && (O.ignoreKeywordsWithRef || !(0, Jp.schemaHasRulesButRef)(w, $))) {
      z.block(() => c27(A, "$ref", $.all.$ref.definition));
      return;
    }
    if (!O.jtd) W$Y(A, K);
    z.block(() => {
      for (let G of $.rules) _(G);
      _($.post);
    });
    function _(G) {
      if (!(0, hZ6.shouldUseGroup)(w, G)) return;
      if (G.type) {
        if (z.if((0, X01.checkDataType)(G.type, H, O.strictNumbers)), u27(A, G), K.length === 1 && K[0] === G.type && q) z.else(), (0, X01.reportTypeError)(A);
        z.endIf();
      } else u27(A, G);
      if (!J) z.if(TK._`${G5.default.errors} === ${Y || 0}`);
    }
  }
  function u27(A, K) {
    let {
      gen: q,
      schema: Y,
      opts: {
        useDefaults: z
      }
    } = A;
    if (z) (0, eXY.assignDefaults)(A, K.type);
    q.block(() => {
      for (let w of K.rules) if ((0, hZ6.shouldUseRule)(Y, w)) c27(A, w.keyword, w.definition, K.type);
    });
  }
  function W$Y(A, K) {
    if (A.schemaEnv.meta || !A.opts.strictTypes) return;
    if (D$Y(A, K), !A.opts.allowUnionTypes) j$Y(A, K);
    M$Y(A, A.dataTypes);
  }
  function D$Y(A, K) {
    if (!K.length) return;
    if (!A.dataTypes.length) {
      A.dataTypes = K;
      return;
    }
    K.forEach(q => {
      if (!d27(A.dataTypes, q)) bZ6(A, `type "${q}" not allowed by context "${A.dataTypes.join(",")}"`);
    }), V$Y(A, K);
  }
  function j$Y(A, K) {
    if (K.length > 1 && !(K.length === 2 && K.includes("null"))) bZ6(A, "use allowUnionTypes to allow union type keyword");
  }
  function M$Y(A, K) {
    let q = A.self.RULES.all;
    for (let Y in q) {
      let z = q[Y];
      if (typeof z == "object" && (0, hZ6.shouldUseRule)(A.schema, z)) {
        let {
          type: w
        } = z.definition;
        if (w.length && !w.some(H => P$Y(K, H))) bZ6(A, `missing type "${w.join(",")}" for keyword "${Y}"`);
      }
    }
  }
  function P$Y(A, K) {
    return A.includes(K) || K === "number" && A.includes("integer");
  }
  function d27(A, K) {
    return A.includes(K) || K === "integer" && A.includes("number");
  }
  function V$Y(A, K) {
    let q = [];
    for (let Y of A.dataTypes) if (d27(K, Y)) q.push(Y);else if (K.includes("integer") && Y === "number") q.push("integer");
    A.dataTypes = q;
  }
  function bZ6(A, K) {
    let q = A.schemaEnv.baseId + A.errSchemaPath;
    K += ` at "${q}" (strictTypes)`, (0, Jp.checkStrictMode)(A, K, A.opts.strictTypes);
  }
  class xZ6 {
    constructor(A, K, q) {
      if ((0, PuA.validateKeywordUsage)(A, K, q), this.gen = A.gen, this.allErrors = A.allErrors, this.keyword = q, this.data = A.data, this.schema = A.schema[q], this.$data = K.$data && A.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, Jp.schemaRefOrVal)(A, this.schema, q, this.$data), this.schemaType = K.schemaType, this.parentSchema = A.schema, this.params = {}, this.it = A, this.def = K, this.$data) this.schemaCode = A.gen.const("vSchema", l27(this.$data, A));else if (this.schemaCode = this.schemaValue, !(0, PuA.validSchemaType)(this.schema, K.schemaType, K.allowUndefined)) throw Error(`${q} value must be ${JSON.stringify(K.schemaType)}`);
      if ("code" in K ? K.trackErrors : K.errors !== !1) this.errsCount = A.gen.const("_errs", G5.default.errors);
    }
    result(A, K, q) {
      this.failResult((0, TK.not)(A), K, q);
    }
    failResult(A, K, q) {
      if (this.gen.if(A), q) q();else this.error();
      if (K) {
        if (this.gen.else(), K(), this.allErrors) this.gen.endIf();
      } else if (this.allErrors) this.gen.endIf();else this.gen.else();
    }
    pass(A, K) {
      this.failResult((0, TK.not)(A), void 0, K);
    }
    fail(A) {
      if (A === void 0) {
        if (this.error(), !this.allErrors) this.gen.if(!1);
        return;
      }
      if (this.gen.if(A), this.error(), this.allErrors) this.gen.endIf();else this.gen.else();
    }
    fail$data(A) {
      if (!this.$data) return this.fail(A);
      let {
        schemaCode: K
      } = this;
      this.fail(TK._`${K} !== undefined && (${(0, TK.or)(this.invalid$data(), A)})`);
    }
    error(A, K, q) {
      if (K) {
        this.setParams(K), this._error(A, q), this.setParams({});
        return;
      }
      this._error(A, q);
    }
    _error(A, K) {
      (A ? MuA.reportExtraError : MuA.reportError)(this, this.def.error, K);
    }
    $dataError() {
      (0, MuA.reportError)(this, this.def.$dataError || MuA.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0) throw Error('add "trackErrors" to keyword definition');
      (0, MuA.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(A) {
      if (!this.allErrors) this.gen.if(A);
    }
    setParams(A, K) {
      if (K) Object.assign(this.params, A);else this.params = A;
    }
    block$data(A, K, q = TK.nil) {
      this.gen.block(() => {
        this.check$data(A, q), K();
      });
    }
    check$data(A = TK.nil, K = TK.nil) {
      if (!this.$data) return;
      let {
        gen: q,
        schemaCode: Y,
        schemaType: z,
        def: w
      } = this;
      if (q.if((0, TK.or)(TK._`${Y} === undefined`, K)), A !== TK.nil) q.assign(A, !0);
      if (z.length || w.validateSchema) {
        if (q.elseIf(this.invalid$data()), this.$dataError(), A !== TK.nil) q.assign(A, !1);
      }
      q.else();
    }
    invalid$data() {
      let {
        gen: A,
        schemaCode: K,
        schemaType: q,
        def: Y,
        it: z
      } = this;
      return (0, TK.or)(w(), H());
      function w() {
        if (q.length) {
          if (!(K instanceof TK.Name)) throw Error("ajv implementation error");
          let J = Array.isArray(q) ? q : [q];
          return TK._`${(0, X01.checkDataTypes)(J, K, z.opts.strictNumbers, X01.DataType.Wrong)}`;
        }
        return TK.nil;
      }
      function H() {
        if (Y.validateSchema) {
          let J = A.scopeValue("validate$data", {
            ref: Y.validateSchema
          });
          return TK._`!${J}(${K})`;
        }
        return TK.nil;
      }
    }
    subschema(A, K) {
      let q = (0, SZ6.getSubschema)(this.it, A);
      (0, SZ6.extendSubschemaData)(q, this.it, A), (0, SZ6.extendSubschemaMode)(q, A);
      let Y = {
        ...this.it,
        ...q,
        items: void 0,
        props: void 0
      };
      return H$Y(Y, K), Y;
    }
    mergeEvaluated(A, K) {
      let {
        it: q,
        gen: Y
      } = this;
      if (!q.opts.unevaluated) return;
      if (q.props !== !0 && A.props !== void 0) q.props = Jp.mergeEvaluated.props(Y, A.props, q.props, K);
      if (q.items !== !0 && A.items !== void 0) q.items = Jp.mergeEvaluated.items(Y, A.items, q.items, K);
    }
    mergeValidEvaluated(A, K) {
      let {
        it: q,
        gen: Y
      } = this;
      if (q.opts.unevaluated && (q.props !== !0 || q.items !== !0)) return Y.if(K, () => this.mergeEvaluated(A, TK.Name)), !0;
    }
  }
  i27.KeywordCxt = xZ6;
  function c27(A, K, q, Y) {
    let z = new xZ6(A, q, K);
    if ("code" in q) q.code(z, Y);else if (z.$data && q.validate) (0, PuA.funcKeywordCode)(z, q);else if ("macro" in q) (0, PuA.macroKeywordCode)(z, q);else if (q.compile || q.validate) (0, PuA.funcKeywordCode)(z, q);
  }
  var f$Y = /^\/(?:[^~]|~0|~1)*$/,
    N$Y = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function l27(A, {
    dataLevel: K,
    dataNames: q,
    dataPathArr: Y
  }) {
    let z, w;
    if (A === "") return G5.default.rootData;
    if (A[0] === "/") {
      if (!f$Y.test(A)) throw Error(`Invalid JSON-pointer: ${A}`);
      z = A, w = G5.default.rootData;
    } else {
      let X = N$Y.exec(A);
      if (!X) throw Error(`Invalid JSON-pointer: ${A}`);
      let $ = +X[1];
      if (z = X[2], z === "#") {
        if ($ >= K) throw Error(O("property/index", $));
        return Y[K - $];
      }
      if ($ > K) throw Error(O("data", $));
      if (w = q[K - $], !z) return w;
    }
    let H = w,
      J = z.split("/");
    for (let X of J) if (X) w = TK._`${w}${(0, TK.getProperty)((0, Jp.unescapeJsonPointer)(X))}`, H = TK._`${H} && ${w}`;
    return H;
    function O(X, $) {
      return `Cannot access ${X} ${$} levels up, current level is ${K}`;
    }
  }
  i27.getData = l27;
});

// Register to shared state
__$.VuA = VuA;
