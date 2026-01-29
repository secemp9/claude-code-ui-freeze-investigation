// Module: Sz7
// Dependencies: VuA, B3, $01, fuA, NZ6, G01, juA, DuA, hY, qz7
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Sz7 = v(Xp => {
  Object.defineProperty(Xp, "__esModule", {
    value: !0
  });
  Xp.CodeGen = Xp.Name = Xp.nil = Xp.stringify = Xp.str = Xp._ = Xp.KeywordCxt = void 0;
  var D_Y = __$.VuA();
  Object.defineProperty(Xp, "KeywordCxt", {
    enumerable: !0,
    get: function () {
      return D_Y.KeywordCxt;
    }
  });
  var aGA = __$.B3();
  Object.defineProperty(Xp, "_", {
    enumerable: !0,
    get: function () {
      return aGA._;
    }
  });
  Object.defineProperty(Xp, "str", {
    enumerable: !0,
    get: function () {
      return aGA.str;
    }
  });
  Object.defineProperty(Xp, "stringify", {
    enumerable: !0,
    get: function () {
      return aGA.stringify;
    }
  });
  Object.defineProperty(Xp, "nil", {
    enumerable: !0,
    get: function () {
      return aGA.nil;
    }
  });
  Object.defineProperty(Xp, "Name", {
    enumerable: !0,
    get: function () {
      return aGA.Name;
    }
  });
  Object.defineProperty(Xp, "CodeGen", {
    enumerable: !0,
    get: function () {
      return aGA.CodeGen;
    }
  });
  var j_Y = __$.$01(),
    Rz7 = __$.fuA(),
    M_Y = __$.NZ6(),
    vuA = __$.G01(),
    P_Y = __$.B3(),
    EuA = __$.juA(),
    j01 = __$.DuA(),
    dZ6 = __$.hY(),
    Ez7 = __$.qz7(),
    V_Y = __$.vz7(),
    yz7 = (A, K) => new RegExp(A, K);
  yz7.code = "new RegExp";
  var f_Y = ["removeAdditional", "useDefaults", "coerceTypes"],
    N_Y = new Set(["validate", "serialize", "parse", "wrapper", "root", "schema", "keyword", "pattern", "formats", "validate$data", "func", "obj", "Error"]),
    T_Y = {
      errorDataPath: "",
      format: "`validateFormats: false` can be used instead.",
      nullable: '"nullable" keyword is supported by default.',
      jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
      extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
      missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
      processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
      sourceCode: "Use option `code: {source: true}`",
      strictDefaults: "It is default now, see option `strict`.",
      strictKeywords: "It is default now, see option `strict`.",
      uniqueItems: '"uniqueItems" keyword is always validated.',
      unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
      cache: "Map is used as cache, schema object as key.",
      serialize: "Map is used as cache, schema object as key.",
      ajvErrors: "It is default now."
    },
    v_Y = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    },
    kz7 = 200;
  function E_Y(A) {
    var K, q, Y, z, w, H, J, O, X, $, _, G, Z, W, D, j, M, P, f, N, T, C, R, x, y;
    let B = A.strict,
      b = (K = A.code) === null || K === void 0 ? void 0 : K.optimize,
      F = b === !0 || b === void 0 ? 1 : b || 0,
      Q = (Y = (q = A.code) === null || q === void 0 ? void 0 : q.regExp) !== null && Y !== void 0 ? Y : yz7,
      u = (z = A.uriResolver) !== null && z !== void 0 ? z : V_Y.default;
    return {
      strictSchema: (H = (w = A.strictSchema) !== null && w !== void 0 ? w : B) !== null && H !== void 0 ? H : !0,
      strictNumbers: (O = (J = A.strictNumbers) !== null && J !== void 0 ? J : B) !== null && O !== void 0 ? O : !0,
      strictTypes: ($ = (X = A.strictTypes) !== null && X !== void 0 ? X : B) !== null && $ !== void 0 ? $ : "log",
      strictTuples: (G = (_ = A.strictTuples) !== null && _ !== void 0 ? _ : B) !== null && G !== void 0 ? G : "log",
      strictRequired: (W = (Z = A.strictRequired) !== null && Z !== void 0 ? Z : B) !== null && W !== void 0 ? W : !1,
      code: A.code ? {
        ...A.code,
        optimize: F,
        regExp: Q
      } : {
        optimize: F,
        regExp: Q
      },
      loopRequired: (D = A.loopRequired) !== null && D !== void 0 ? D : kz7,
      loopEnum: (j = A.loopEnum) !== null && j !== void 0 ? j : kz7,
      meta: (M = A.meta) !== null && M !== void 0 ? M : !0,
      messages: (P = A.messages) !== null && P !== void 0 ? P : !0,
      inlineRefs: (f = A.inlineRefs) !== null && f !== void 0 ? f : !0,
      schemaId: (N = A.schemaId) !== null && N !== void 0 ? N : "$id",
      addUsedSchema: (T = A.addUsedSchema) !== null && T !== void 0 ? T : !0,
      validateSchema: (C = A.validateSchema) !== null && C !== void 0 ? C : !0,
      validateFormats: (R = A.validateFormats) !== null && R !== void 0 ? R : !0,
      unicodeRegExp: (x = A.unicodeRegExp) !== null && x !== void 0 ? x : !0,
      int32range: (y = A.int32range) !== null && y !== void 0 ? y : !0,
      uriResolver: u
    };
  }
  class M01 {
    constructor(A = {}) {
      this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = new Set(), this._loading = {}, this._cache = new Map(), A = this.opts = {
        ...A,
        ...E_Y(A)
      };
      let {
        es5: K,
        lines: q
      } = this.opts.code;
      this.scope = new P_Y.ValueScope({
        scope: {},
        prefixes: N_Y,
        es5: K,
        lines: q
      }), this.logger = I_Y(A.logger);
      let Y = A.validateFormats;
      if (A.validateFormats = !1, this.RULES = (0, M_Y.getRules)(), Cz7.call(this, T_Y, A, "NOT SUPPORTED"), Cz7.call(this, v_Y, A, "DEPRECATED", "warn"), this._metaOpts = R_Y.call(this), A.formats) C_Y.call(this);
      if (this._addVocabularies(), this._addDefaultMetaSchema(), A.keywords) L_Y.call(this, A.keywords);
      if (typeof A.meta == "object") this.addMetaSchema(A.meta);
      k_Y.call(this), A.validateFormats = Y;
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      let {
          $data: A,
          meta: K,
          schemaId: q
        } = this.opts,
        Y = Ez7;
      if (q === "id") Y = {
        ...Ez7
      }, Y.id = Y.$id, delete Y.$id;
      if (K && A) this.addMetaSchema(Y, Y[q], !1);
    }
    defaultMeta() {
      let {
        meta: A,
        schemaId: K
      } = this.opts;
      return this.opts.defaultMeta = typeof A == "object" ? A[K] || A : void 0;
    }
    validate(A, K) {
      let q;
      if (typeof A == "string") {
        if (q = this.getSchema(A), !q) throw Error(`no schema with key or ref "${A}"`);
      } else q = this.compile(A);
      let Y = q(K);
      if (!("$async" in q)) this.errors = q.errors;
      return Y;
    }
    compile(A, K) {
      let q = this._addSchema(A, K);
      return q.validate || this._compileSchemaEnv(q);
    }
    compileAsync(A, K) {
      if (typeof this.opts.loadSchema != "function") throw Error("options.loadSchema should be a function");
      let {
        loadSchema: q
      } = this.opts;
      return Y.call(this, A, K);
      async function Y(X, $) {
        await z.call(this, X.$schema);
        let _ = this._addSchema(X, $);
        return _.validate || w.call(this, _);
      }
      async function z(X) {
        if (X && !this.getSchema(X)) await Y.call(this, {
          $ref: X
        }, !0);
      }
      async function w(X) {
        try {
          return this._compileSchemaEnv(X);
        } catch ($) {
          if (!($ instanceof Rz7.default)) throw $;
          return H.call(this, $), await J.call(this, $.missingSchema), w.call(this, X);
        }
      }
      function H({
        missingSchema: X,
        missingRef: $
      }) {
        if (this.refs[X]) throw Error(`AnySchema ${X} is loaded but ${$} cannot be resolved`);
      }
      async function J(X) {
        let $ = await O.call(this, X);
        if (!this.refs[X]) await z.call(this, $.$schema);
        if (!this.refs[X]) this.addSchema($, X, K);
      }
      async function O(X) {
        let $ = this._loading[X];
        if ($) return $;
        try {
          return await (this._loading[X] = q(X));
        } finally {
          delete this._loading[X];
        }
      }
    }
    addSchema(A, K, q, Y = this.opts.validateSchema) {
      if (Array.isArray(A)) {
        for (let w of A) this.addSchema(w, void 0, q, Y);
        return this;
      }
      let z;
      if (typeof A === "object") {
        let {
          schemaId: w
        } = this.opts;
        if (z = A[w], z !== void 0 && typeof z != "string") throw Error(`schema ${w} must be string`);
      }
      return K = (0, EuA.normalizeId)(K || z), this._checkUnique(K), this.schemas[K] = this._addSchema(A, q, K, Y, !0), this;
    }
    addMetaSchema(A, K, q = this.opts.validateSchema) {
      return this.addSchema(A, K, !0, q), this;
    }
    validateSchema(A, K) {
      if (typeof A == "boolean") return !0;
      let q;
      if (q = A.$schema, q !== void 0 && typeof q != "string") throw Error("$schema must be a string");
      if (q = q || this.opts.defaultMeta || this.defaultMeta(), !q) return this.logger.warn("meta-schema not available"), this.errors = null, !0;
      let Y = this.validate(q, A);
      if (!Y && K) {
        let z = "schema is invalid: " + this.errorsText();
        if (this.opts.validateSchema === "log") this.logger.error(z);else throw Error(z);
      }
      return Y;
    }
    getSchema(A) {
      let K;
      while (typeof (K = Lz7.call(this, A)) == "string") A = K;
      if (K === void 0) {
        let {
            schemaId: q
          } = this.opts,
          Y = new vuA.SchemaEnv({
            schema: {},
            schemaId: q
          });
        if (K = vuA.resolveSchema.call(this, Y, A), !K) return;
        this.refs[A] = K;
      }
      return K.validate || this._compileSchemaEnv(K);
    }
    removeSchema(A) {
      if (A instanceof RegExp) return this._removeAllSchemas(this.schemas, A), this._removeAllSchemas(this.refs, A), this;
      switch (typeof A) {
        case "undefined":
          return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
        case "string":
          {
            let K = Lz7.call(this, A);
            if (typeof K == "object") this._cache.delete(K.schema);
            return delete this.schemas[A], delete this.refs[A], this;
          }
        case "object":
          {
            let K = A;
            this._cache.delete(K);
            let q = A[this.opts.schemaId];
            if (q) q = (0, EuA.normalizeId)(q), delete this.schemas[q], delete this.refs[q];
            return this;
          }
        default:
          throw Error("ajv.removeSchema: invalid parameter");
      }
    }
    addVocabulary(A) {
      for (let K of A) this.addKeyword(K);
      return this;
    }
    addKeyword(A, K) {
      let q;
      if (typeof A == "string") {
        if (q = A, typeof K == "object") this.logger.warn("these parameters are deprecated, see docs for addKeyword"), K.keyword = q;
      } else if (typeof A == "object" && K === void 0) {
        if (K = A, q = K.keyword, Array.isArray(q) && !q.length) throw Error("addKeywords: keyword must be string or non-empty array");
      } else throw Error("invalid addKeywords parameters");
      if (h_Y.call(this, q, K), !K) return (0, dZ6.eachItem)(q, z => pZ6.call(this, z)), this;
      x_Y.call(this, K);
      let Y = {
        ...K,
        type: (0, j01.getJSONTypes)(K.type),
        schemaType: (0, j01.getJSONTypes)(K.schemaType)
      };
      return (0, dZ6.eachItem)(q, Y.type.length === 0 ? z => pZ6.call(this, z, Y) : z => Y.type.forEach(w => pZ6.call(this, z, Y, w))), this;
    }
    getKeyword(A) {
      let K = this.RULES.all[A];
      return typeof K == "object" ? K.definition : !!K;
    }
    removeKeyword(A) {
      let {
        RULES: K
      } = this;
      delete K.keywords[A], delete K.all[A];
      for (let q of K.rules) {
        let Y = q.rules.findIndex(z => z.keyword === A);
        if (Y >= 0) q.rules.splice(Y, 1);
      }
      return this;
    }
    addFormat(A, K) {
      if (typeof K == "string") K = new RegExp(K);
      return this.formats[A] = K, this;
    }
    errorsText(A = this.errors, {
      separator: K = ", ",
      dataVar: q = "data"
    } = {}) {
      if (!A || A.length === 0) return "No errors";
      return A.map(Y => `${q}${Y.instancePath} ${Y.message}`).reduce((Y, z) => Y + K + z);
    }
    $dataMetaSchema(A, K) {
      let q = this.RULES.all;
      A = JSON.parse(JSON.stringify(A));
      for (let Y of K) {
        let z = Y.split("/").slice(1),
          w = A;
        for (let H of z) w = w[H];
        for (let H in q) {
          let J = q[H];
          if (typeof J != "object") continue;
          let {
              $data: O
            } = J.definition,
            X = w[H];
          if (O && X) w[H] = Iz7(X);
        }
      }
      return A;
    }
    _removeAllSchemas(A, K) {
      for (let q in A) {
        let Y = A[q];
        if (!K || K.test(q)) {
          if (typeof Y == "string") delete A[q];else if (Y && !Y.meta) this._cache.delete(Y.schema), delete A[q];
        }
      }
    }
    _addSchema(A, K, q, Y = this.opts.validateSchema, z = this.opts.addUsedSchema) {
      let w,
        {
          schemaId: H
        } = this.opts;
      if (typeof A == "object") w = A[H];else if (this.opts.jtd) throw Error("schema must be object");else if (typeof A != "boolean") throw Error("schema must be object or boolean");
      let J = this._cache.get(A);
      if (J !== void 0) return J;
      q = (0, EuA.normalizeId)(w || q);
      let O = EuA.getSchemaRefs.call(this, A, q);
      if (J = new vuA.SchemaEnv({
        schema: A,
        schemaId: H,
        meta: K,
        baseId: q,
        localRefs: O
      }), this._cache.set(J.schema, J), z && !q.startsWith("#")) {
        if (q) this._checkUnique(q);
        this.refs[q] = J;
      }
      if (Y) this.validateSchema(A, !0);
      return J;
    }
    _checkUnique(A) {
      if (this.schemas[A] || this.refs[A]) throw Error(`schema with key or id "${A}" already exists`);
    }
    _compileSchemaEnv(A) {
      if (A.meta) this._compileMetaSchema(A);else vuA.compileSchema.call(this, A);
      if (!A.validate) throw Error("ajv implementation error");
      return A.validate;
    }
    _compileMetaSchema(A) {
      let K = this.opts;
      this.opts = this._metaOpts;
      try {
        vuA.compileSchema.call(this, A);
      } finally {
        this.opts = K;
      }
    }
  }
  M01.ValidationError = j_Y.default;
  M01.MissingRefError = Rz7.default;
  Xp.default = M01;
  function Cz7(A, K, q, Y = "error") {
    for (let z in A) {
      let w = z;
      if (w in K) this.logger[Y](`${q}: option ${z}. ${A[w]}`);
    }
  }
  function Lz7(A) {
    return A = (0, EuA.normalizeId)(A), this.schemas[A] || this.refs[A];
  }
  function k_Y() {
    let A = this.opts.schemas;
    if (!A) return;
    if (Array.isArray(A)) this.addSchema(A);else for (let K in A) this.addSchema(A[K], K);
  }
  function C_Y() {
    for (let A in this.opts.formats) {
      let K = this.opts.formats[A];
      if (K) this.addFormat(A, K);
    }
  }
  function L_Y(A) {
    if (Array.isArray(A)) {
      this.addVocabulary(A);
      return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (let K in A) {
      let q = A[K];
      if (!q.keyword) q.keyword = K;
      this.addKeyword(q);
    }
  }
  function R_Y() {
    let A = {
      ...this.opts
    };
    for (let K of f_Y) delete A[K];
    return A;
  }
  var y_Y = {
    log() {},
    warn() {},
    error() {}
  };
  function I_Y(A) {
    if (A === !1) return y_Y;
    if (A === void 0) return console;
    if (A.log && A.warn && A.error) return A;
    throw Error("logger must implement log, warn and error methods");
  }
  var S_Y = /^[a-z_$][a-z0-9_$:-]*$/i;
  function h_Y(A, K) {
    let {
      RULES: q
    } = this;
    if ((0, dZ6.eachItem)(A, Y => {
      if (q.keywords[Y]) throw Error(`Keyword ${Y} is already defined`);
      if (!S_Y.test(Y)) throw Error(`Keyword ${Y} has invalid name`);
    }), !K) return;
    if (K.$data && !("code" in K || "validate" in K)) throw Error('$data keyword must have "code" or "validate" function');
  }
  function pZ6(A, K, q) {
    var Y;
    let z = K === null || K === void 0 ? void 0 : K.post;
    if (q && z) throw Error('keyword with "post" flag cannot have "type"');
    let {
        RULES: w
      } = this,
      H = z ? w.post : w.rules.find(({
        type: O
      }) => O === q);
    if (!H) H = {
      type: q,
      rules: []
    }, w.rules.push(H);
    if (w.keywords[A] = !0, !K) return;
    let J = {
      keyword: A,
      definition: {
        ...K,
        type: (0, j01.getJSONTypes)(K.type),
        schemaType: (0, j01.getJSONTypes)(K.schemaType)
      }
    };
    if (K.before) b_Y.call(this, H, J, K.before);else H.rules.push(J);
    w.all[A] = J, (Y = K.implements) === null || Y === void 0 || Y.forEach(O => this.addKeyword(O));
  }
  function b_Y(A, K, q) {
    let Y = A.rules.findIndex(z => z.keyword === q);
    if (Y >= 0) A.rules.splice(Y, 0, K);else A.rules.push(K), this.logger.warn(`rule ${q} is not defined`);
  }
  function x_Y(A) {
    let {
      metaSchema: K
    } = A;
    if (K === void 0) return;
    if (A.$data && this.opts.$data) K = Iz7(K);
    A.validateSchema = this.compile(K, !0);
  }
  var u_Y = {
    $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
  };
  function Iz7(A) {
    return {
      anyOf: [A, u_Y]
    };
  }
});

// Register to shared state
__$.Sz7 = Sz7;
