// Module: bgA
// Dependencies: GS

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bgA = v(Iu7 => {
  Object.defineProperty(Iu7, "__esModule", {
    value: !0
  });
  Iu7.AttributeHashMap = Iu7.HashMap = void 0;
  var cA2 = __$.GS();
  class Lv6 {
    _hash;
    _valueMap = new Map();
    _keyMap = new Map();
    constructor(A) {
      this._hash = A;
    }
    get(A, K) {
      return K ??= this._hash(A), this._valueMap.get(K);
    }
    getOrDefault(A, K) {
      let q = this._hash(A);
      if (this._valueMap.has(q)) return this._valueMap.get(q);
      let Y = K();
      if (!this._keyMap.has(q)) this._keyMap.set(q, A);
      return this._valueMap.set(q, Y), Y;
    }
    set(A, K, q) {
      if (q ??= this._hash(A), !this._keyMap.has(q)) this._keyMap.set(q, A);
      this._valueMap.set(q, K);
    }
    has(A, K) {
      return K ??= this._hash(A), this._valueMap.has(K);
    }
    *keys() {
      let A = this._keyMap.entries(),
        K = A.next();
      while (K.done !== !0) yield [K.value[1], K.value[0]], K = A.next();
    }
    *entries() {
      let A = this._valueMap.entries(),
        K = A.next();
      while (K.done !== !0) yield [this._keyMap.get(K.value[0]), K.value[1], K.value[0]], K = A.next();
    }
    get size() {
      return this._valueMap.size;
    }
  }
  Iu7.HashMap = Lv6;
  class yu7 extends Lv6 {
    constructor() {
      super(cA2.hashAttributes);
    }
  }
  Iu7.AttributeHashMap = yu7;
});

// Register to shared state
__$.bgA = bgA;
