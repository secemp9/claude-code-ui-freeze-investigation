// Module: v27
// Dependencies: B3, hY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var v27 = v(N27 => {
  Object.defineProperty(N27, "__esModule", {
    value: !0
  });
  N27.extendSubschemaMode = N27.extendSubschemaData = N27.getSubschema = void 0;
  var Qu = __$.B3(),
    f27 = __$.hY();
  function hXY(A, {
    keyword: K,
    schemaProp: q,
    schema: Y,
    schemaPath: z,
    errSchemaPath: w,
    topSchemaRef: H
  }) {
    if (K !== void 0 && Y !== void 0) throw Error('both "keyword" and "schema" passed, only one allowed');
    if (K !== void 0) {
      let J = A.schema[K];
      return q === void 0 ? {
        schema: J,
        schemaPath: Qu._`${A.schemaPath}${(0, Qu.getProperty)(K)}`,
        errSchemaPath: `${A.errSchemaPath}/${K}`
      } : {
        schema: J[q],
        schemaPath: Qu._`${A.schemaPath}${(0, Qu.getProperty)(K)}${(0, Qu.getProperty)(q)}`,
        errSchemaPath: `${A.errSchemaPath}/${K}/${(0, f27.escapeFragment)(q)}`
      };
    }
    if (Y !== void 0) {
      if (z === void 0 || w === void 0 || H === void 0) throw Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: Y,
        schemaPath: z,
        topSchemaRef: H,
        errSchemaPath: w
      };
    }
    throw Error('either "keyword" or "schema" must be passed');
  }
  N27.getSubschema = hXY;
  function bXY(A, K, {
    dataProp: q,
    dataPropType: Y,
    data: z,
    dataTypes: w,
    propertyName: H
  }) {
    if (z !== void 0 && q !== void 0) throw Error('both "data" and "dataProp" passed, only one allowed');
    let {
      gen: J
    } = K;
    if (q !== void 0) {
      let {
          errorPath: X,
          dataPathArr: $,
          opts: _
        } = K,
        G = J.let("data", Qu._`${K.data}${(0, Qu.getProperty)(q)}`, !0);
      O(G), A.errorPath = Qu.str`${X}${(0, f27.getErrorPath)(q, Y, _.jsPropertySyntax)}`, A.parentDataProperty = Qu._`${q}`, A.dataPathArr = [...$, A.parentDataProperty];
    }
    if (z !== void 0) {
      let X = z instanceof Qu.Name ? z : J.let("data", z, !0);
      if (O(X), H !== void 0) A.propertyName = H;
    }
    if (w) A.dataTypes = w;
    function O(X) {
      A.data = X, A.dataLevel = K.dataLevel + 1, A.dataTypes = [], K.definedProperties = new Set(), A.parentData = K.data, A.dataNames = [...K.dataNames, X];
    }
  }
  N27.extendSubschemaData = bXY;
  function xXY(A, {
    jtdDiscriminator: K,
    jtdMetadata: q,
    compositeRule: Y,
    createErrors: z,
    allErrors: w
  }) {
    if (Y !== void 0) A.compositeRule = Y;
    if (z !== void 0) A.createErrors = z;
    if (w !== void 0) A.allErrors = w;
    A.jtdDiscriminator = K, A.jtdMetadata = q;
  }
  N27.extendSubschemaMode = xXY;
});

// Register to shared state
__$.v27 = v27;
