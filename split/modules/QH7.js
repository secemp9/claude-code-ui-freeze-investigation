// Module: QH7
// Dependencies: h01, B3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QH7 = v(FH7 => {
  Object.defineProperty(FH7, "__esModule", {
    value: !0
  });
  FH7.formatLimitDefinition = void 0;
  var KDY = __$.h01(),
    EI = __$.B3(),
    Wa = EI.operators,
    b01 = {
      formatMaximum: {
        okStr: "<=",
        ok: Wa.LTE,
        fail: Wa.GT
      },
      formatMinimum: {
        okStr: ">=",
        ok: Wa.GTE,
        fail: Wa.LT
      },
      formatExclusiveMaximum: {
        okStr: "<",
        ok: Wa.LT,
        fail: Wa.GTE
      },
      formatExclusiveMinimum: {
        okStr: ">",
        ok: Wa.GT,
        fail: Wa.LTE
      }
    },
    qDY = {
      message: ({
        keyword: A,
        schemaCode: K
      }) => EI.str`should be ${b01[A].okStr} ${K}`,
      params: ({
        keyword: A,
        schemaCode: K
      }) => EI._`{comparison: ${b01[A].okStr}, limit: ${K}}`
    };
  FH7.formatLimitDefinition = {
    keyword: Object.keys(b01),
    type: "string",
    schemaType: "string",
    $data: !0,
    error: qDY,
    code(A) {
      let {
          gen: K,
          data: q,
          schemaCode: Y,
          keyword: z,
          it: w
        } = A,
        {
          opts: H,
          self: J
        } = w;
      if (!H.validateFormats) return;
      let O = new KDY.KeywordCxt(w, J.RULES.all.format.definition, "format");
      if (O.$data) X();else $();
      function X() {
        let G = K.scopeValue("formats", {
            ref: J.formats,
            code: H.code.formats
          }),
          Z = K.const("fmt", EI._`${G}[${O.schemaCode}]`);
        A.fail$data((0, EI.or)(EI._`typeof ${Z} != "object"`, EI._`${Z} instanceof RegExp`, EI._`typeof ${Z}.compare != "function"`, _(Z)));
      }
      function $() {
        let G = O.schema,
          Z = J.formats[G];
        if (!Z || Z === !0) return;
        if (typeof Z != "object" || Z instanceof RegExp || typeof Z.compare != "function") throw Error(`"${z}": format "${G}" does not define "compare" function`);
        let W = K.scopeValue("formats", {
          key: G,
          ref: Z,
          code: H.code.formats ? EI._`${H.code.formats}${(0, EI.getProperty)(G)}` : void 0
        });
        A.fail$data(_(W));
      }
      function _(G) {
        return EI._`${G}.compare(${q}, ${Y}) ${b01[z].fail} 0`;
      }
    },
    dependencies: ["format"]
  };
  var YDY = A => {
    return A.addKeyword(FH7.formatLimitDefinition), A;
  };
  FH7.default = YDY;
});

// Register to shared state
__$.QH7 = QH7;
