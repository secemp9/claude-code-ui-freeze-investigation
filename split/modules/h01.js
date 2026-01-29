// Module: h01
// Dependencies: Sz7, VH7, CH7, LH7, VuA, B3, $01, fuA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var h01 = v((_f, eZ6) => {
  Object.defineProperty(_f, "__esModule", {
    value: !0
  });
  _f.MissingRefError = _f.ValidationError = _f.CodeGen = _f.Name = _f.nil = _f.stringify = _f.str = _f._ = _f.KeywordCxt = _f.Ajv = void 0;
  var hWY = __$.Sz7(),
    bWY = __$.VH7(),
    xWY = __$.CH7(),
    RH7 = __$.LH7(),
    uWY = ["/properties"],
    S01 = "http://json-schema.org/draft-07/schema";
  class huA extends hWY.default {
    _addVocabularies() {
      if (super._addVocabularies(), bWY.default.forEach(A => this.addVocabulary(A)), this.opts.discriminator) this.addKeyword(xWY.default);
    }
    _addDefaultMetaSchema() {
      if (super._addDefaultMetaSchema(), !this.opts.meta) return;
      let A = this.opts.$data ? this.$dataMetaSchema(RH7, uWY) : RH7;
      this.addMetaSchema(A, S01, !1), this.refs["http://json-schema.org/schema"] = S01;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(S01) ? S01 : void 0);
    }
  }
  _f.Ajv = huA;
  eZ6.exports = _f = huA;
  eZ6.exports.Ajv = huA;
  Object.defineProperty(_f, "__esModule", {
    value: !0
  });
  _f.default = huA;
  var BWY = __$.VuA();
  Object.defineProperty(_f, "KeywordCxt", {
    enumerable: !0,
    get: function () {
      return BWY.KeywordCxt;
    }
  });
  var eGA = __$.B3();
  Object.defineProperty(_f, "_", {
    enumerable: !0,
    get: function () {
      return eGA._;
    }
  });
  Object.defineProperty(_f, "str", {
    enumerable: !0,
    get: function () {
      return eGA.str;
    }
  });
  Object.defineProperty(_f, "stringify", {
    enumerable: !0,
    get: function () {
      return eGA.stringify;
    }
  });
  Object.defineProperty(_f, "nil", {
    enumerable: !0,
    get: function () {
      return eGA.nil;
    }
  });
  Object.defineProperty(_f, "Name", {
    enumerable: !0,
    get: function () {
      return eGA.Name;
    }
  });
  Object.defineProperty(_f, "CodeGen", {
    enumerable: !0,
    get: function () {
      return eGA.CodeGen;
    }
  });
  var mWY = __$.$01();
  Object.defineProperty(_f, "ValidationError", {
    enumerable: !0,
    get: function () {
      return mWY.default;
    }
  });
  var gWY = __$.fuA();
  Object.defineProperty(_f, "MissingRefError", {
    enumerable: !0,
    get: function () {
      return gWY.default;
    }
  });
});

// Register to shared state
__$.h01 = h01;
