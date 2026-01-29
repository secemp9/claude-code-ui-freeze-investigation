// Module: ZZ6
// Dependencies: GuA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZZ6 = v(DY7 => {
  Object.defineProperty(DY7, "__esModule", {
    value: !0
  });
  DY7.ValueScope = DY7.ValueScopeName = DY7.Scope = DY7.varKinds = DY7.UsedValueState = void 0;
  var Of = __$.GuA();
  class ZY7 extends Error {
    constructor(A) {
      super(`CodeGen: "code" for ${A} not defined`);
      this.value = A.value;
    }
  }
  var tO1;
  (function (A) {
    A[A.Started = 0] = "Started", A[A.Completed = 1] = "Completed";
  })(tO1 || (DY7.UsedValueState = tO1 = {}));
  DY7.varKinds = {
    const: new Of.Name("const"),
    let: new Of.Name("let"),
    var: new Of.Name("var")
  };
  class _Z6 {
    constructor({
      prefixes: A,
      parent: K
    } = {}) {
      this._names = {}, this._prefixes = A, this._parent = K;
    }
    toName(A) {
      return A instanceof Of.Name ? A : this.name(A);
    }
    name(A) {
      return new Of.Name(this._newName(A));
    }
    _newName(A) {
      let K = this._names[A] || this._nameGroup(A);
      return `${A}${K.index++}`;
    }
    _nameGroup(A) {
      var K, q;
      if (((q = (K = this._parent) === null || K === void 0 ? void 0 : K._prefixes) === null || q === void 0 ? void 0 : q.has(A)) || this._prefixes && !this._prefixes.has(A)) throw Error(`CodeGen: prefix "${A}" is not allowed in this scope`);
      return this._names[A] = {
        prefix: A,
        index: 0
      };
    }
  }
  DY7.Scope = _Z6;
  class GZ6 extends Of.Name {
    constructor(A, K) {
      super(K);
      this.prefix = A;
    }
    setValue(A, {
      property: K,
      itemIndex: q
    }) {
      this.value = A, this.scopePath = Of._`.${new Of.Name(K)}[${q}]`;
    }
  }
  DY7.ValueScopeName = GZ6;
  var fOY = Of._`\n`;
  class WY7 extends _Z6 {
    constructor(A) {
      super(A);
      this._values = {}, this._scope = A.scope, this.opts = {
        ...A,
        _n: A.lines ? fOY : Of.nil
      };
    }
    get() {
      return this._scope;
    }
    name(A) {
      return new GZ6(A, this._newName(A));
    }
    value(A, K) {
      var q;
      if (K.ref === void 0) throw Error("CodeGen: ref must be passed in value");
      let Y = this.toName(A),
        {
          prefix: z
        } = Y,
        w = (q = K.key) !== null && q !== void 0 ? q : K.ref,
        H = this._values[z];
      if (H) {
        let X = H.get(w);
        if (X) return X;
      } else H = this._values[z] = new Map();
      H.set(w, Y);
      let J = this._scope[z] || (this._scope[z] = []),
        O = J.length;
      return J[O] = K.ref, Y.setValue(K, {
        property: z,
        itemIndex: O
      }), Y;
    }
    getValue(A, K) {
      let q = this._values[A];
      if (!q) return;
      return q.get(K);
    }
    scopeRefs(A, K = this._values) {
      return this._reduceValues(K, q => {
        if (q.scopePath === void 0) throw Error(`CodeGen: name "${q}" has no value`);
        return Of._`${A}${q.scopePath}`;
      });
    }
    scopeCode(A = this._values, K, q) {
      return this._reduceValues(A, Y => {
        if (Y.value === void 0) throw Error(`CodeGen: name "${Y}" has no value`);
        return Y.value.code;
      }, K, q);
    }
    _reduceValues(A, K, q = {}, Y) {
      let z = Of.nil;
      for (let w in A) {
        let H = A[w];
        if (!H) continue;
        let J = q[w] = q[w] || new Map();
        H.forEach(O => {
          if (J.has(O)) return;
          J.set(O, tO1.Started);
          let X = K(O);
          if (X) {
            let $ = this.opts.es5 ? DY7.varKinds.var : DY7.varKinds.const;
            z = Of._`${z}${$} ${O} = ${X};${this.opts._n}`;
          } else if (X = Y === null || Y === void 0 ? void 0 : Y(O)) z = Of._`${z}${X}${this.opts._n}`;else throw new ZY7(O);
          J.set(O, tO1.Completed);
        });
      }
      return z;
    }
  }
  DY7.ValueScope = WY7;
});

// Register to shared state
__$.ZZ6 = ZZ6;
