// Module: _RA
// Dependencies: ZT, kn, j9, h66, SZ

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _RA = v((G6w, W54) => {
  var {
      isBlobLike: s71,
      iteratorMixin: hg3
    } = __$.ZT(),
    {
      kState: YM
    } = __$.kn(),
    {
      kEnumerableProperty: G0A
    } = __$.j9(),
    {
      FileLike: $54,
      isFileLike: bg3
    } = __$.h66(),
    {
      webidl: tw
    } = __$.SZ(),
    {
      File: Z54
    } = CA("node:buffer"),
    _54 = CA("node:util"),
    G54 = globalThis.File ?? Z54;
  class Gx {
    constructor(A) {
      if (tw.util.markAsUncloneable(this), A !== void 0) throw tw.errors.conversionFailed({
        prefix: "FormData constructor",
        argument: "Argument 1",
        types: ["undefined"]
      });
      this[YM] = [];
    }
    append(A, K, q = void 0) {
      tw.brandCheck(this, Gx);
      let Y = "FormData.append";
      if (tw.argumentLengthCheck(arguments, 2, Y), arguments.length === 3 && !s71(K)) throw TypeError("Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'");
      A = tw.converters.USVString(A, Y, "name"), K = s71(K) ? tw.converters.Blob(K, Y, "value", {
        strict: !1
      }) : tw.converters.USVString(K, Y, "value"), q = arguments.length === 3 ? tw.converters.USVString(q, Y, "filename") : void 0;
      let z = b66(A, K, q);
      this[YM].push(z);
    }
    delete(A) {
      tw.brandCheck(this, Gx);
      let K = "FormData.delete";
      tw.argumentLengthCheck(arguments, 1, K), A = tw.converters.USVString(A, K, "name"), this[YM] = this[YM].filter(q => q.name !== A);
    }
    get(A) {
      tw.brandCheck(this, Gx);
      let K = "FormData.get";
      tw.argumentLengthCheck(arguments, 1, K), A = tw.converters.USVString(A, K, "name");
      let q = this[YM].findIndex(Y => Y.name === A);
      if (q === -1) return null;
      return this[YM][q].value;
    }
    getAll(A) {
      tw.brandCheck(this, Gx);
      let K = "FormData.getAll";
      return tw.argumentLengthCheck(arguments, 1, K), A = tw.converters.USVString(A, K, "name"), this[YM].filter(q => q.name === A).map(q => q.value);
    }
    has(A) {
      tw.brandCheck(this, Gx);
      let K = "FormData.has";
      return tw.argumentLengthCheck(arguments, 1, K), A = tw.converters.USVString(A, K, "name"), this[YM].findIndex(q => q.name === A) !== -1;
    }
    set(A, K, q = void 0) {
      tw.brandCheck(this, Gx);
      let Y = "FormData.set";
      if (tw.argumentLengthCheck(arguments, 2, Y), arguments.length === 3 && !s71(K)) throw TypeError("Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'");
      A = tw.converters.USVString(A, Y, "name"), K = s71(K) ? tw.converters.Blob(K, Y, "name", {
        strict: !1
      }) : tw.converters.USVString(K, Y, "name"), q = arguments.length === 3 ? tw.converters.USVString(q, Y, "name") : void 0;
      let z = b66(A, K, q),
        w = this[YM].findIndex(H => H.name === A);
      if (w !== -1) this[YM] = [...this[YM].slice(0, w), z, ...this[YM].slice(w + 1).filter(H => H.name !== A)];else this[YM].push(z);
    }
    [_54.inspect.custom](A, K) {
      let q = this[YM].reduce((z, w) => {
        if (z[w.name]) {
          if (Array.isArray(z[w.name])) z[w.name].push(w.value);else z[w.name] = [z[w.name], w.value];
        } else z[w.name] = w.value;
        return z;
      }, {
        __proto__: null
      });
      K.depth ??= A, K.colors ??= !0;
      let Y = _54.formatWithOptions(K, q);
      return `FormData ${Y.slice(Y.indexOf("]") + 2)}`;
    }
  }
  hg3("FormData", Gx, YM, "name", "value");
  Object.defineProperties(Gx.prototype, {
    append: G0A,
    delete: G0A,
    get: G0A,
    getAll: G0A,
    has: G0A,
    set: G0A,
    [Symbol.toStringTag]: {
      value: "FormData",
      configurable: !0
    }
  });
  function b66(A, K, q) {
    if (typeof K === "string") ;else {
      if (!bg3(K)) K = K instanceof Blob ? new G54([K], "blob", {
        type: K.type
      }) : new $54(K, "blob", {
        type: K.type
      });
      if (q !== void 0) {
        let Y = {
          type: K.type,
          lastModified: K.lastModified
        };
        K = K instanceof Z54 ? new G54([K], q, Y) : new $54(K, q, Y);
      }
    }
    return {
      name: A,
      value: K
    };
  }
  W54.exports = {
    FormData: Gx,
    makeEntry: b66
  };
});

// Register to shared state
__$._RA = _RA;
