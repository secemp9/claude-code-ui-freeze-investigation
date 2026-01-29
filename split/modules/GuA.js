// Module: GuA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var GuA = v(_Y7 => {
  Object.defineProperty(_Y7, "__esModule", {
    value: !0
  });
  _Y7.regexpCode = _Y7.getEsmExportName = _Y7.getProperty = _Y7.safeStringify = _Y7.stringify = _Y7.strConcat = _Y7.addCodeArg = _Y7.str = _Y7._ = _Y7.nil = _Y7._Code = _Y7.Name = _Y7.IDENTIFIER = _Y7._CodeOrName = void 0;
  class aO1 {}
  _Y7._CodeOrName = aO1;
  _Y7.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  class cGA extends aO1 {
    constructor(A) {
      super();
      if (!_Y7.IDENTIFIER.test(A)) throw Error("CodeGen: name must be a valid identifier");
      this.str = A;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      return !1;
    }
    get names() {
      return {
        [this.str]: 1
      };
    }
  }
  _Y7.Name = cGA;
  class VI extends aO1 {
    constructor(A) {
      super();
      this._items = typeof A === "string" ? [A] : A;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1) return !1;
      let A = this._items[0];
      return A === "" || A === '""';
    }
    get str() {
      var A;
      return (A = this._str) !== null && A !== void 0 ? A : this._str = this._items.reduce((K, q) => `${K}${q}`, "");
    }
    get names() {
      var A;
      return (A = this._names) !== null && A !== void 0 ? A : this._names = this._items.reduce((K, q) => {
        if (q instanceof cGA) K[q.str] = (K[q.str] || 0) + 1;
        return K;
      }, {});
    }
  }
  _Y7._Code = VI;
  _Y7.nil = new VI("");
  function XY7(A, ...K) {
    let q = [A[0]],
      Y = 0;
    while (Y < K.length) XZ6(q, K[Y]), q.push(A[++Y]);
    return new VI(q);
  }
  _Y7._ = XY7;
  var OZ6 = new VI("+");
  function $Y7(A, ...K) {
    let q = [_uA(A[0])],
      Y = 0;
    while (Y < K.length) q.push(OZ6), XZ6(q, K[Y]), q.push(OZ6, _uA(A[++Y]));
    return AOY(q), new VI(q);
  }
  _Y7.str = $Y7;
  function XZ6(A, K) {
    if (K instanceof VI) A.push(...K._items);else if (K instanceof cGA) A.push(K);else A.push(YOY(K));
  }
  _Y7.addCodeArg = XZ6;
  function AOY(A) {
    let K = 1;
    while (K < A.length - 1) {
      if (A[K] === OZ6) {
        let q = KOY(A[K - 1], A[K + 1]);
        if (q !== void 0) {
          A.splice(K - 1, 3, q);
          continue;
        }
        A[K++] = "+";
      }
      K++;
    }
  }
  function KOY(A, K) {
    if (K === '""') return A;
    if (A === '""') return K;
    if (typeof A == "string") {
      if (K instanceof cGA || A[A.length - 1] !== '"') return;
      if (typeof K != "string") return `${A.slice(0, -1)}${K}"`;
      if (K[0] === '"') return A.slice(0, -1) + K.slice(1);
      return;
    }
    if (typeof K == "string" && K[0] === '"' && !(A instanceof cGA)) return `"${A}${K.slice(1)}`;
    return;
  }
  function qOY(A, K) {
    return K.emptyStr() ? A : A.emptyStr() ? K : $Y7`${A}${K}`;
  }
  _Y7.strConcat = qOY;
  function YOY(A) {
    return typeof A == "number" || typeof A == "boolean" || A === null ? A : _uA(Array.isArray(A) ? A.join(",") : A);
  }
  function zOY(A) {
    return new VI(_uA(A));
  }
  _Y7.stringify = zOY;
  function _uA(A) {
    return JSON.stringify(A).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  _Y7.safeStringify = _uA;
  function wOY(A) {
    return typeof A == "string" && _Y7.IDENTIFIER.test(A) ? new VI(`.${A}`) : XY7`[${A}]`;
  }
  _Y7.getProperty = wOY;
  function HOY(A) {
    if (typeof A == "string" && _Y7.IDENTIFIER.test(A)) return new VI(`${A}`);
    throw Error(`CodeGen: invalid export name: ${A}, use explicit $id name mapping`);
  }
  _Y7.getEsmExportName = HOY;
  function JOY(A) {
    return new VI(A.toString());
  }
  _Y7.regexpCode = JOY;
});

// Register to shared state
__$.GuA = GuA;
