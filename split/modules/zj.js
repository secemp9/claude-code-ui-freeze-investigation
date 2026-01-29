// Module: zj
// Dependencies: JDA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zj = v((oWH, UL7) => {
  var QL7 = __$.JDA(),
    nlY = ["kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"],
    rlY = ["scalar", "sequence", "mapping"];
  function olY(A) {
    var K = {};
    if (A !== null) Object.keys(A).forEach(function (q) {
      A[q].forEach(function (Y) {
        K[String(Y)] = q;
      });
    });
    return K;
  }
  function alY(A, K) {
    if (K = K || {}, Object.keys(K).forEach(function (q) {
      if (nlY.indexOf(q) === -1) throw new QL7('Unknown option "' + q + '" is met in definition of "' + A + '" YAML type.');
    }), this.options = K, this.tag = A, this.kind = K.kind || null, this.resolve = K.resolve || function () {
      return !0;
    }, this.construct = K.construct || function (q) {
      return q;
    }, this.instanceOf = K.instanceOf || null, this.predicate = K.predicate || null, this.represent = K.represent || null, this.representName = K.representName || null, this.defaultStyle = K.defaultStyle || null, this.multi = K.multi || !1, this.styleAliases = olY(K.styleAliases || null), rlY.indexOf(this.kind) === -1) throw new QL7('Unknown kind "' + this.kind + '" is specified for "' + A + '" YAML type.');
  }
  UL7.exports = alY;
});

// Register to shared state
__$.zj = zj;
