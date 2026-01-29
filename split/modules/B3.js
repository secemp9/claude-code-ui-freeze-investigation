// Module: B3
// Dependencies: GuA, ZZ6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var B3 = v(Xf => {
  Object.defineProperty(Xf, "__esModule", {
    value: !0
  });
  Xf.or = Xf.and = Xf.not = Xf.CodeGen = Xf.operators = Xf.varKinds = Xf.ValueScopeName = Xf.ValueScope = Xf.Scope = Xf.Name = Xf.regexpCode = Xf.stringify = Xf.getProperty = Xf.nil = Xf.strConcat = Xf.str = Xf._ = void 0;
  var JY = __$.GuA(),
    fI = __$.ZZ6(),
    Oa = __$.GuA();
  Object.defineProperty(Xf, "_", {
    enumerable: !0,
    get: function () {
      return Oa._;
    }
  });
  Object.defineProperty(Xf, "str", {
    enumerable: !0,
    get: function () {
      return Oa.str;
    }
  });
  Object.defineProperty(Xf, "strConcat", {
    enumerable: !0,
    get: function () {
      return Oa.strConcat;
    }
  });
  Object.defineProperty(Xf, "nil", {
    enumerable: !0,
    get: function () {
      return Oa.nil;
    }
  });
  Object.defineProperty(Xf, "getProperty", {
    enumerable: !0,
    get: function () {
      return Oa.getProperty;
    }
  });
  Object.defineProperty(Xf, "stringify", {
    enumerable: !0,
    get: function () {
      return Oa.stringify;
    }
  });
  Object.defineProperty(Xf, "regexpCode", {
    enumerable: !0,
    get: function () {
      return Oa.regexpCode;
    }
  });
  Object.defineProperty(Xf, "Name", {
    enumerable: !0,
    get: function () {
      return Oa.Name;
    }
  });
  var z01 = __$.ZZ6();
  Object.defineProperty(Xf, "Scope", {
    enumerable: !0,
    get: function () {
      return z01.Scope;
    }
  });
  Object.defineProperty(Xf, "ValueScope", {
    enumerable: !0,
    get: function () {
      return z01.ValueScope;
    }
  });
  Object.defineProperty(Xf, "ValueScopeName", {
    enumerable: !0,
    get: function () {
      return z01.ValueScopeName;
    }
  });
  Object.defineProperty(Xf, "varKinds", {
    enumerable: !0,
    get: function () {
      return z01.varKinds;
    }
  });
  Xf.operators = {
    GT: new JY._Code(">"),
    GTE: new JY._Code(">="),
    LT: new JY._Code("<"),
    LTE: new JY._Code("<="),
    EQ: new JY._Code("==="),
    NEQ: new JY._Code("!=="),
    NOT: new JY._Code("!"),
    OR: new JY._Code("||"),
    AND: new JY._Code("&&"),
    ADD: new JY._Code("+")
  };
  class Xa {
    optimizeNodes() {
      return this;
    }
    optimizeNames(A, K) {
      return this;
    }
  }
  class MY7 extends Xa {
    constructor(A, K, q) {
      super();
      this.varKind = A, this.name = K, this.rhs = q;
    }
    render({
      es5: A,
      _n: K
    }) {
      let q = A ? fI.varKinds.var : this.varKind,
        Y = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${q} ${this.name}${Y};` + K;
    }
    optimizeNames(A, K) {
      if (!A[this.name.str]) return;
      if (this.rhs) this.rhs = iGA(this.rhs, A, K);
      return this;
    }
    get names() {
      return this.rhs instanceof JY._CodeOrName ? this.rhs.names : {};
    }
  }
  class jZ6 extends Xa {
    constructor(A, K, q) {
      super();
      this.lhs = A, this.rhs = K, this.sideEffects = q;
    }
    render({
      _n: A
    }) {
      return `${this.lhs} = ${this.rhs};` + A;
    }
    optimizeNames(A, K) {
      if (this.lhs instanceof JY.Name && !A[this.lhs.str] && !this.sideEffects) return;
      return this.rhs = iGA(this.rhs, A, K), this;
    }
    get names() {
      let A = this.lhs instanceof JY.Name ? {} : {
        ...this.lhs.names
      };
      return Y01(A, this.rhs);
    }
  }
  class PY7 extends jZ6 {
    constructor(A, K, q, Y) {
      super(A, q, Y);
      this.op = K;
    }
    render({
      _n: A
    }) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + A;
    }
  }
  class VY7 extends Xa {
    constructor(A) {
      super();
      this.label = A, this.names = {};
    }
    render({
      _n: A
    }) {
      return `${this.label}:` + A;
    }
  }
  class fY7 extends Xa {
    constructor(A) {
      super();
      this.label = A, this.names = {};
    }
    render({
      _n: A
    }) {
      return `break${this.label ? ` ${this.label}` : ""};` + A;
    }
  }
  class NY7 extends Xa {
    constructor(A) {
      super();
      this.error = A;
    }
    render({
      _n: A
    }) {
      return `throw ${this.error};` + A;
    }
    get names() {
      return this.error.names;
    }
  }
  class TY7 extends Xa {
    constructor(A) {
      super();
      this.code = A;
    }
    render({
      _n: A
    }) {
      return `${this.code};` + A;
    }
    optimizeNodes() {
      return `${this.code}` ? this : void 0;
    }
    optimizeNames(A, K) {
      return this.code = iGA(this.code, A, K), this;
    }
    get names() {
      return this.code instanceof JY._CodeOrName ? this.code.names : {};
    }
  }
  class w01 extends Xa {
    constructor(A = []) {
      super();
      this.nodes = A;
    }
    render(A) {
      return this.nodes.reduce((K, q) => K + q.render(A), "");
    }
    optimizeNodes() {
      let {
          nodes: A
        } = this,
        K = A.length;
      while (K--) {
        let q = A[K].optimizeNodes();
        if (Array.isArray(q)) A.splice(K, 1, ...q);else if (q) A[K] = q;else A.splice(K, 1);
      }
      return A.length > 0 ? this : void 0;
    }
    optimizeNames(A, K) {
      let {
          nodes: q
        } = this,
        Y = q.length;
      while (Y--) {
        let z = q[Y];
        if (z.optimizeNames(A, K)) continue;
        EOY(A, z.names), q.splice(Y, 1);
      }
      return q.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((A, K) => JqA(A, K.names), {});
    }
  }
  class $a extends w01 {
    render(A) {
      return "{" + A._n + super.render(A) + "}" + A._n;
    }
  }
  class vY7 extends w01 {}
  class ZuA extends $a {}
  ZuA.kind = "else";
  class wp extends $a {
    constructor(A, K) {
      super(K);
      this.condition = A;
    }
    render(A) {
      let K = `if(${this.condition})` + super.render(A);
      if (this.else) K += "else " + this.else.render(A);
      return K;
    }
    optimizeNodes() {
      super.optimizeNodes();
      let A = this.condition;
      if (A === !0) return this.nodes;
      let K = this.else;
      if (K) {
        let q = K.optimizeNodes();
        K = this.else = Array.isArray(q) ? new ZuA(q) : q;
      }
      if (K) {
        if (A === !1) return K instanceof wp ? K : K.nodes;
        if (this.nodes.length) return this;
        return new wp(RY7(A), K instanceof wp ? [K] : K.nodes);
      }
      if (A === !1 || !this.nodes.length) return;
      return this;
    }
    optimizeNames(A, K) {
      var q;
      if (this.else = (q = this.else) === null || q === void 0 ? void 0 : q.optimizeNames(A, K), !(super.optimizeNames(A, K) || this.else)) return;
      return this.condition = iGA(this.condition, A, K), this;
    }
    get names() {
      let A = super.names;
      if (Y01(A, this.condition), this.else) JqA(A, this.else.names);
      return A;
    }
  }
  wp.kind = "if";
  class lGA extends $a {}
  lGA.kind = "for";
  class EY7 extends lGA {
    constructor(A) {
      super();
      this.iteration = A;
    }
    render(A) {
      return `for(${this.iteration})` + super.render(A);
    }
    optimizeNames(A, K) {
      if (!super.optimizeNames(A, K)) return;
      return this.iteration = iGA(this.iteration, A, K), this;
    }
    get names() {
      return JqA(super.names, this.iteration.names);
    }
  }
  class kY7 extends lGA {
    constructor(A, K, q, Y) {
      super();
      this.varKind = A, this.name = K, this.from = q, this.to = Y;
    }
    render(A) {
      let K = A.es5 ? fI.varKinds.var : this.varKind,
        {
          name: q,
          from: Y,
          to: z
        } = this;
      return `for(${K} ${q}=${Y}; ${q}<${z}; ${q}++)` + super.render(A);
    }
    get names() {
      let A = Y01(super.names, this.from);
      return Y01(A, this.to);
    }
  }
  class WZ6 extends lGA {
    constructor(A, K, q, Y) {
      super();
      this.loop = A, this.varKind = K, this.name = q, this.iterable = Y;
    }
    render(A) {
      return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(A);
    }
    optimizeNames(A, K) {
      if (!super.optimizeNames(A, K)) return;
      return this.iterable = iGA(this.iterable, A, K), this;
    }
    get names() {
      return JqA(super.names, this.iterable.names);
    }
  }
  class eO1 extends $a {
    constructor(A, K, q) {
      super();
      this.name = A, this.args = K, this.async = q;
    }
    render(A) {
      return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(A);
    }
  }
  eO1.kind = "func";
  class A01 extends w01 {
    render(A) {
      return "return " + super.render(A);
    }
  }
  A01.kind = "return";
  class CY7 extends $a {
    render(A) {
      let K = "try" + super.render(A);
      if (this.catch) K += this.catch.render(A);
      if (this.finally) K += this.finally.render(A);
      return K;
    }
    optimizeNodes() {
      var A, K;
      return super.optimizeNodes(), (A = this.catch) === null || A === void 0 || A.optimizeNodes(), (K = this.finally) === null || K === void 0 || K.optimizeNodes(), this;
    }
    optimizeNames(A, K) {
      var q, Y;
      return super.optimizeNames(A, K), (q = this.catch) === null || q === void 0 || q.optimizeNames(A, K), (Y = this.finally) === null || Y === void 0 || Y.optimizeNames(A, K), this;
    }
    get names() {
      let A = super.names;
      if (this.catch) JqA(A, this.catch.names);
      if (this.finally) JqA(A, this.finally.names);
      return A;
    }
  }
  class K01 extends $a {
    constructor(A) {
      super();
      this.error = A;
    }
    render(A) {
      return `catch(${this.error})` + super.render(A);
    }
  }
  K01.kind = "catch";
  class q01 extends $a {
    render(A) {
      return "finally" + super.render(A);
    }
  }
  q01.kind = "finally";
  class LY7 {
    constructor(A, K = {}) {
      this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = {
        ...K,
        _n: K.lines ? `
` : ""
      }, this._extScope = A, this._scope = new fI.Scope({
        parent: A
      }), this._nodes = [new vY7()];
    }
    toString() {
      return this._root.render(this.opts);
    }
    name(A) {
      return this._scope.name(A);
    }
    scopeName(A) {
      return this._extScope.name(A);
    }
    scopeValue(A, K) {
      let q = this._extScope.value(A, K);
      return (this._values[q.prefix] || (this._values[q.prefix] = new Set())).add(q), q;
    }
    getScopeValue(A, K) {
      return this._extScope.getValue(A, K);
    }
    scopeRefs(A) {
      return this._extScope.scopeRefs(A, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(A, K, q, Y) {
      let z = this._scope.toName(K);
      if (q !== void 0 && Y) this._constants[z.str] = q;
      return this._leafNode(new MY7(A, z, q)), z;
    }
    const(A, K, q) {
      return this._def(fI.varKinds.const, A, K, q);
    }
    let(A, K, q) {
      return this._def(fI.varKinds.let, A, K, q);
    }
    var(A, K, q) {
      return this._def(fI.varKinds.var, A, K, q);
    }
    assign(A, K, q) {
      return this._leafNode(new jZ6(A, K, q));
    }
    add(A, K) {
      return this._leafNode(new PY7(A, Xf.operators.ADD, K));
    }
    code(A) {
      if (typeof A == "function") A();else if (A !== JY.nil) this._leafNode(new TY7(A));
      return this;
    }
    object(...A) {
      let K = ["{"];
      for (let [q, Y] of A) {
        if (K.length > 1) K.push(",");
        if (K.push(q), q !== Y || this.opts.es5) K.push(":"), (0, JY.addCodeArg)(K, Y);
      }
      return K.push("}"), new JY._Code(K);
    }
    if(A, K, q) {
      if (this._blockNode(new wp(A)), K && q) this.code(K).else().code(q).endIf();else if (K) this.code(K).endIf();else if (q) throw Error('CodeGen: "else" body without "then" body');
      return this;
    }
    elseIf(A) {
      return this._elseNode(new wp(A));
    }
    else() {
      return this._elseNode(new ZuA());
    }
    endIf() {
      return this._endBlockNode(wp, ZuA);
    }
    _for(A, K) {
      if (this._blockNode(A), K) this.code(K).endFor();
      return this;
    }
    for(A, K) {
      return this._for(new EY7(A), K);
    }
    forRange(A, K, q, Y, z = this.opts.es5 ? fI.varKinds.var : fI.varKinds.let) {
      let w = this._scope.toName(A);
      return this._for(new kY7(z, w, K, q), () => Y(w));
    }
    forOf(A, K, q, Y = fI.varKinds.const) {
      let z = this._scope.toName(A);
      if (this.opts.es5) {
        let w = K instanceof JY.Name ? K : this.var("_arr", K);
        return this.forRange("_i", 0, JY._`${w}.length`, H => {
          this.var(z, JY._`${w}[${H}]`), q(z);
        });
      }
      return this._for(new WZ6("of", Y, z, K), () => q(z));
    }
    forIn(A, K, q, Y = this.opts.es5 ? fI.varKinds.var : fI.varKinds.const) {
      if (this.opts.ownProperties) return this.forOf(A, JY._`Object.keys(${K})`, q);
      let z = this._scope.toName(A);
      return this._for(new WZ6("in", Y, z, K), () => q(z));
    }
    endFor() {
      return this._endBlockNode(lGA);
    }
    label(A) {
      return this._leafNode(new VY7(A));
    }
    break(A) {
      return this._leafNode(new fY7(A));
    }
    return(A) {
      let K = new A01();
      if (this._blockNode(K), this.code(A), K.nodes.length !== 1) throw Error('CodeGen: "return" should have one node');
      return this._endBlockNode(A01);
    }
    try(A, K, q) {
      if (!K && !q) throw Error('CodeGen: "try" without "catch" and "finally"');
      let Y = new CY7();
      if (this._blockNode(Y), this.code(A), K) {
        let z = this.name("e");
        this._currNode = Y.catch = new K01(z), K(z);
      }
      if (q) this._currNode = Y.finally = new q01(), this.code(q);
      return this._endBlockNode(K01, q01);
    }
    throw(A) {
      return this._leafNode(new NY7(A));
    }
    block(A, K) {
      if (this._blockStarts.push(this._nodes.length), A) this.code(A).endBlock(K);
      return this;
    }
    endBlock(A) {
      let K = this._blockStarts.pop();
      if (K === void 0) throw Error("CodeGen: not in self-balancing block");
      let q = this._nodes.length - K;
      if (q < 0 || A !== void 0 && q !== A) throw Error(`CodeGen: wrong number of nodes: ${q} vs ${A} expected`);
      return this._nodes.length = K, this;
    }
    func(A, K = JY.nil, q, Y) {
      if (this._blockNode(new eO1(A, K, q)), Y) this.code(Y).endFunc();
      return this;
    }
    endFunc() {
      return this._endBlockNode(eO1);
    }
    optimize(A = 1) {
      while (A-- > 0) this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
    }
    _leafNode(A) {
      return this._currNode.nodes.push(A), this;
    }
    _blockNode(A) {
      this._currNode.nodes.push(A), this._nodes.push(A);
    }
    _endBlockNode(A, K) {
      let q = this._currNode;
      if (q instanceof A || K && q instanceof K) return this._nodes.pop(), this;
      throw Error(`CodeGen: not in block "${K ? `${A.kind}/${K.kind}` : A.kind}"`);
    }
    _elseNode(A) {
      let K = this._currNode;
      if (!(K instanceof wp)) throw Error('CodeGen: "else" without "if"');
      return this._currNode = K.else = A, this;
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      let A = this._nodes;
      return A[A.length - 1];
    }
    set _currNode(A) {
      let K = this._nodes;
      K[K.length - 1] = A;
    }
  }
  Xf.CodeGen = LY7;
  function JqA(A, K) {
    for (let q in K) A[q] = (A[q] || 0) + (K[q] || 0);
    return A;
  }
  function Y01(A, K) {
    return K instanceof JY._CodeOrName ? JqA(A, K.names) : A;
  }
  function iGA(A, K, q) {
    if (A instanceof JY.Name) return Y(A);
    if (!z(A)) return A;
    return new JY._Code(A._items.reduce((w, H) => {
      if (H instanceof JY.Name) H = Y(H);
      if (H instanceof JY._Code) w.push(...H._items);else w.push(H);
      return w;
    }, []));
    function Y(w) {
      let H = q[w.str];
      if (H === void 0 || K[w.str] !== 1) return w;
      return delete K[w.str], H;
    }
    function z(w) {
      return w instanceof JY._Code && w._items.some(H => H instanceof JY.Name && K[H.str] === 1 && q[H.str] !== void 0);
    }
  }
  function EOY(A, K) {
    for (let q in K) A[q] = (A[q] || 0) - (K[q] || 0);
  }
  function RY7(A) {
    return typeof A == "boolean" || typeof A == "number" || A === null ? !A : JY._`!${DZ6(A)}`;
  }
  Xf.not = RY7;
  var kOY = yY7(Xf.operators.AND);
  function COY(...A) {
    return A.reduce(kOY);
  }
  Xf.and = COY;
  var LOY = yY7(Xf.operators.OR);
  function ROY(...A) {
    return A.reduce(LOY);
  }
  Xf.or = ROY;
  function yY7(A) {
    return (K, q) => K === JY.nil ? q : q === JY.nil ? K : JY._`${DZ6(K)} ${A} ${DZ6(q)}`;
  }
  function DZ6(A) {
    return A instanceof JY.Name ? A : JY._`(${A})`;
  }
});

// Register to shared state
__$.B3 = B3;
