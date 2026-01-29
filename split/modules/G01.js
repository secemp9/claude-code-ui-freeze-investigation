// Module: G01
// Dependencies: B3, $01, Hp, juA, hY, VuA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var G01 = v(Az7 => {
  Object.defineProperty(Az7, "__esModule", {
    value: !0
  });
  Az7.resolveSchema = Az7.getCompilingSchema = Az7.resolveRef = Az7.compileSchema = Az7.SchemaEnv = void 0;
  var NI = __$.B3(),
    C$Y = __$.$01(),
    $qA = __$.Hp(),
    TI = __$.juA(),
    t27 = __$.hY(),
    L$Y = __$.VuA();
  class NuA {
    constructor(A) {
      var K;
      this.refs = {}, this.dynamicAnchors = {};
      let q;
      if (typeof A.schema == "object") q = A.schema;
      this.schema = A.schema, this.schemaId = A.schemaId, this.root = A.root || this, this.baseId = (K = A.baseId) !== null && K !== void 0 ? K : (0, TI.normalizeId)(q === null || q === void 0 ? void 0 : q[A.schemaId || "$id"]), this.schemaPath = A.schemaPath, this.localRefs = A.localRefs, this.meta = A.meta, this.$async = q === null || q === void 0 ? void 0 : q.$async, this.refs = {};
    }
  }
  Az7.SchemaEnv = NuA;
  function mZ6(A) {
    let K = e27.call(this, A);
    if (K) return K;
    let q = (0, TI.getFullPath)(this.opts.uriResolver, A.root.baseId),
      {
        es5: Y,
        lines: z
      } = this.opts.code,
      {
        ownProperties: w
      } = this.opts,
      H = new NI.CodeGen(this.scope, {
        es5: Y,
        lines: z,
        ownProperties: w
      }),
      J;
    if (A.$async) J = H.scopeValue("Error", {
      ref: C$Y.default,
      code: NI._`require("ajv/dist/runtime/validation_error").default`
    });
    let O = H.scopeName("validate");
    A.validateName = O;
    let X = {
        gen: H,
        allErrors: this.opts.allErrors,
        data: $qA.default.data,
        parentData: $qA.default.parentData,
        parentDataProperty: $qA.default.parentDataProperty,
        dataNames: [$qA.default.data],
        dataPathArr: [NI.nil],
        dataLevel: 0,
        dataTypes: [],
        definedProperties: new Set(),
        topSchemaRef: H.scopeValue("schema", this.opts.code.source === !0 ? {
          ref: A.schema,
          code: (0, NI.stringify)(A.schema)
        } : {
          ref: A.schema
        }),
        validateName: O,
        ValidationError: J,
        schema: A.schema,
        schemaEnv: A,
        rootId: q,
        baseId: A.baseId || q,
        schemaPath: NI.nil,
        errSchemaPath: A.schemaPath || (this.opts.jtd ? "" : "#"),
        errorPath: NI._`""`,
        opts: this.opts,
        self: this
      },
      $;
    try {
      this._compilations.add(A), (0, L$Y.validateFunctionCode)(X), H.optimize(this.opts.code.optimize);
      let _ = H.toString();
      if ($ = `${H.scopeRefs($qA.default.scope)}return ${_}`, this.opts.code.process) $ = this.opts.code.process($, A);
      let Z = Function(`${$qA.default.self}`, `${$qA.default.scope}`, $)(this, this.scope.get());
      if (this.scope.value(O, {
        ref: Z
      }), Z.errors = null, Z.schema = A.schema, Z.schemaEnv = A, A.$async) Z.$async = !0;
      if (this.opts.code.source === !0) Z.source = {
        validateName: O,
        validateCode: _,
        scopeValues: H._values
      };
      if (this.opts.unevaluated) {
        let {
          props: W,
          items: D
        } = X;
        if (Z.evaluated = {
          props: W instanceof NI.Name ? void 0 : W,
          items: D instanceof NI.Name ? void 0 : D,
          dynamicProps: W instanceof NI.Name,
          dynamicItems: D instanceof NI.Name
        }, Z.source) Z.source.evaluated = (0, NI.stringify)(Z.evaluated);
      }
      return A.validate = Z, A;
    } catch (_) {
      if (delete A.validate, delete A.validateName, $) this.logger.error("Error compiling schema, function code:", $);
      throw _;
    } finally {
      this._compilations.delete(A);
    }
  }
  Az7.compileSchema = mZ6;
  function R$Y(A, K, q) {
    var Y;
    q = (0, TI.resolveUrl)(this.opts.uriResolver, K, q);
    let z = A.refs[q];
    if (z) return z;
    let w = S$Y.call(this, A, q);
    if (w === void 0) {
      let H = (Y = A.localRefs) === null || Y === void 0 ? void 0 : Y[q],
        {
          schemaId: J
        } = this.opts;
      if (H) w = new NuA({
        schema: H,
        schemaId: J,
        root: A,
        baseId: K
      });
    }
    if (w === void 0) return;
    return A.refs[q] = y$Y.call(this, w);
  }
  Az7.resolveRef = R$Y;
  function y$Y(A) {
    if ((0, TI.inlineRef)(A.schema, this.opts.inlineRefs)) return A.schema;
    return A.validate ? A : mZ6.call(this, A);
  }
  function e27(A) {
    for (let K of this._compilations) if (I$Y(K, A)) return K;
  }
  Az7.getCompilingSchema = e27;
  function I$Y(A, K) {
    return A.schema === K.schema && A.root === K.root && A.baseId === K.baseId;
  }
  function S$Y(A, K) {
    let q;
    while (typeof (q = this.refs[K]) == "string") K = q;
    return q || this.schemas[K] || _01.call(this, A, K);
  }
  function _01(A, K) {
    let q = this.opts.uriResolver.parse(K),
      Y = (0, TI._getFullPath)(this.opts.uriResolver, q),
      z = (0, TI.getFullPath)(this.opts.uriResolver, A.baseId, void 0);
    if (Object.keys(A.schema).length > 0 && Y === z) return BZ6.call(this, q, A);
    let w = (0, TI.normalizeId)(Y),
      H = this.refs[w] || this.schemas[w];
    if (typeof H == "string") {
      let J = _01.call(this, A, H);
      if (typeof (J === null || J === void 0 ? void 0 : J.schema) !== "object") return;
      return BZ6.call(this, q, J);
    }
    if (typeof (H === null || H === void 0 ? void 0 : H.schema) !== "object") return;
    if (!H.validate) mZ6.call(this, H);
    if (w === (0, TI.normalizeId)(K)) {
      let {
          schema: J
        } = H,
        {
          schemaId: O
        } = this.opts,
        X = J[O];
      if (X) z = (0, TI.resolveUrl)(this.opts.uriResolver, z, X);
      return new NuA({
        schema: J,
        schemaId: O,
        root: A,
        baseId: z
      });
    }
    return BZ6.call(this, q, H);
  }
  Az7.resolveSchema = _01;
  var h$Y = new Set(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
  function BZ6(A, {
    baseId: K,
    schema: q,
    root: Y
  }) {
    var z;
    if (((z = A.fragment) === null || z === void 0 ? void 0 : z[0]) !== "/") return;
    for (let J of A.fragment.slice(1).split("/")) {
      if (typeof q === "boolean") return;
      let O = q[(0, t27.unescapeFragment)(J)];
      if (O === void 0) return;
      q = O;
      let X = typeof q === "object" && q[this.opts.schemaId];
      if (!h$Y.has(J) && X) K = (0, TI.resolveUrl)(this.opts.uriResolver, K, X);
    }
    let w;
    if (typeof q != "boolean" && q.$ref && !(0, t27.schemaHasRulesButRef)(q, this.RULES)) {
      let J = (0, TI.resolveUrl)(this.opts.uriResolver, K, q.$ref);
      w = _01.call(this, Y, J);
    }
    let {
      schemaId: H
    } = this.opts;
    if (w = w || new NuA({
      schema: q,
      schemaId: H,
      root: Y,
      baseId: K
    }), w.schema !== w.root.schema) return w;
    return;
  }
});

// Register to shared state
__$.G01 = G01;
