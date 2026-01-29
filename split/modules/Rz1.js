// Module: Rz1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Rz1 = v((yl4, Il4) => {
  function Vl9(A) {
    return typeof A === "object" && A !== null || typeof A === "function";
  }
  var vl4 = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
  function fl9(A, K) {
    for (let q of Reflect.ownKeys(K)) {
      let Y = Reflect.getOwnPropertyDescriptor(K, q);
      if (Y && !Reflect.defineProperty(A, q, Y)) throw TypeError(`Cannot redefine property: ${String(q)}`);
    }
  }
  function Nl9(A, K) {
    let q = Cl4(A);
    return Object.defineProperties(Object.create(q["%Object.prototype%"]), Object.getOwnPropertyDescriptors(K));
  }
  var El4 = Symbol("wrapper"),
    kl4 = Symbol("impl"),
    H_A = Symbol("SameObject caches"),
    Lz1 = Symbol.for("[webidl2js] constructor registry"),
    Tl9 = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {}).prototype);
  function Cl4(A) {
    if (vl4(A, Lz1)) return A[Lz1];
    let K = Object.create(null);
    K["%Object.prototype%"] = A.Object.prototype, K["%IteratorPrototype%"] = Object.getPrototypeOf(Object.getPrototypeOf(new A.Array()[Symbol.iterator]()));
    try {
      K["%AsyncIteratorPrototype%"] = Object.getPrototypeOf(Object.getPrototypeOf(A.eval("(async function* () {})").prototype));
    } catch {
      K["%AsyncIteratorPrototype%"] = Tl9;
    }
    return A[Lz1] = K, K;
  }
  function vl9(A, K, q) {
    if (!A[H_A]) A[H_A] = Object.create(null);
    if (K in A[H_A]) return A[H_A][K];
    return A[H_A][K] = q(), A[H_A][K];
  }
  function Ll4(A) {
    return A ? A[El4] : null;
  }
  function Rl4(A) {
    return A ? A[kl4] : null;
  }
  function El9(A) {
    let K = Ll4(A);
    return K ? K : A;
  }
  function kl9(A) {
    let K = Rl4(A);
    return K ? K : A;
  }
  var Cl9 = Symbol("internal");
  function Ll9(A) {
    if (typeof A !== "string") return !1;
    let K = A >>> 0;
    if (K === 4294967295) return !1;
    let q = `${K}`;
    if (A !== q) return !1;
    return !0;
  }
  var Rl9 = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get;
  function yl9(A) {
    try {
      return Rl9.call(A), !0;
    } catch (K) {
      return !1;
    }
  }
  function Il9([A, K], q) {
    let Y;
    switch (q) {
      case "key":
        Y = A;
        break;
      case "value":
        Y = K;
        break;
      case "key+value":
        Y = [A, K];
        break;
    }
    return {
      value: Y,
      done: !1
    };
  }
  var Sl9 = Symbol("supports property index"),
    hl9 = Symbol("supported property indices"),
    bl9 = Symbol("supports property name"),
    xl9 = Symbol("supported property names"),
    ul9 = Symbol("indexed property get"),
    Bl9 = Symbol("indexed property set new"),
    ml9 = Symbol("indexed property set existing"),
    gl9 = Symbol("named property get"),
    Fl9 = Symbol("named property set new"),
    Ql9 = Symbol("named property set existing"),
    Ul9 = Symbol("named property delete"),
    pl9 = Symbol("async iterator get the next iteration result"),
    dl9 = Symbol("async iterator return steps"),
    cl9 = Symbol("async iterator initialization steps"),
    ll9 = Symbol("async iterator end of iteration");
  Il4.exports = yl4 = {
    isObject: Vl9,
    hasOwn: vl4,
    define: fl9,
    newObjectInRealm: Nl9,
    wrapperSymbol: El4,
    implSymbol: kl4,
    getSameObject: vl9,
    ctorRegistrySymbol: Lz1,
    initCtorRegistry: Cl4,
    wrapperForImpl: Ll4,
    implForWrapper: Rl4,
    tryWrapperForImpl: El9,
    tryImplForWrapper: kl9,
    iterInternalSymbol: Cl9,
    isArrayBuffer: yl9,
    isArrayIndexPropName: Ll9,
    supportsPropertyIndex: Sl9,
    supportedPropertyIndices: hl9,
    supportsPropertyName: bl9,
    supportedPropertyNames: xl9,
    indexedGet: ul9,
    indexedSetNew: Bl9,
    indexedSetExisting: ml9,
    namedGet: gl9,
    namedSetNew: Fl9,
    namedSetExisting: Ql9,
    namedDelete: Ul9,
    asyncIteratorNext: pl9,
    asyncIteratorReturn: dl9,
    asyncIteratorInit: cl9,
    asyncIteratorEOI: ll9,
    iteratorResult: Il9
  };
});

// Register to shared state
__$.Rz1 = Rz1;
