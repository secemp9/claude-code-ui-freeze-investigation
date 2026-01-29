// Module: kN6
// Dependencies: JDA, zj

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kN6 = v((aWH, dL7) => {
  var emA = __$.JDA(),
    vN6 = __$.zj();
  function pL7(A, K) {
    var q = [];
    return A[K].forEach(function (Y) {
      var z = q.length;
      q.forEach(function (w, H) {
        if (w.tag === Y.tag && w.kind === Y.kind && w.multi === Y.multi) z = H;
      }), q[z] = Y;
    }), q;
  }
  function slY() {
    var A = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {},
        multi: {
          scalar: [],
          sequence: [],
          mapping: [],
          fallback: []
        }
      },
      K,
      q;
    function Y(z) {
      if (z.multi) A.multi[z.kind].push(z), A.multi.fallback.push(z);else A[z.kind][z.tag] = A.fallback[z.tag] = z;
    }
    for (K = 0, q = arguments.length; K < q; K += 1) arguments[K].forEach(Y);
    return A;
  }
  function EN6(A) {
    return this.extend(A);
  }
  EN6.prototype.extend = function (K) {
    var q = [],
      Y = [];
    if (K instanceof vN6) Y.push(K);else if (Array.isArray(K)) Y = Y.concat(K);else if (K && (Array.isArray(K.implicit) || Array.isArray(K.explicit))) {
      if (K.implicit) q = q.concat(K.implicit);
      if (K.explicit) Y = Y.concat(K.explicit);
    } else throw new emA("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
    q.forEach(function (w) {
      if (!(w instanceof vN6)) throw new emA("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      if (w.loadKind && w.loadKind !== "scalar") throw new emA("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
      if (w.multi) throw new emA("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
    }), Y.forEach(function (w) {
      if (!(w instanceof vN6)) throw new emA("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    });
    var z = Object.create(EN6.prototype);
    return z.implicit = (this.implicit || []).concat(q), z.explicit = (this.explicit || []).concat(Y), z.compiledImplicit = pL7(z, "implicit"), z.compiledExplicit = pL7(z, "explicit"), z.compiledTypeMap = slY(z.compiledImplicit, z.compiledExplicit), z;
  };
  dL7.exports = EN6;
});

// Register to shared state
__$.kN6 = kN6;
