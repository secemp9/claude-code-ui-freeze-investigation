// Module: kA8
// Dependencies: cy1, _e6, Ze6, De6, Me6, Ve6, grA, Te6, Ee6, Ce6
//   ... and 15 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kA8 = v((kGz, EA8) => {
  var y9,
    rAq = __$.cy1(),
    oAq = __$._e6(),
    aAq = __$.Ze6(),
    sAq = __$.De6(),
    tAq = __$.Me6(),
    mzA = __$.Ve6(),
    BzA = __$.grA(),
    eAq = __$.Te6(),
    A1q = __$.Ee6(),
    K1q = __$.Ce6(),
    q1q = __$.Re6(),
    Y1q = __$.Ie6(),
    z1q = __$.he6(),
    w1q = __$.xe6(),
    H1q = __$.ge6(),
    TA8 = Function,
    ty1 = function (A) {
      try {
        return TA8('"use strict"; return (' + A + ").constructor;")();
      } catch (K) {}
    },
    sNA = __$.ly1(),
    J1q = __$.de6(),
    ey1 = function () {
      throw new BzA();
    },
    O1q = sNA ? function () {
      try {
        return arguments.callee, ey1;
      } catch (A) {
        try {
          return sNA(arguments, "callee").get;
        } catch (K) {
          return ey1;
        }
      }
    }() : ey1,
    xzA = __$.ne6()(),
    p_ = __$.PA8(),
    X1q = __$.ry1(),
    $1q = __$.ny1(),
    vA8 = __$.oy1(),
    tNA = __$.UrA(),
    uzA = {},
    _1q = typeof Uint8Array > "u" || !p_ ? y9 : p_(Uint8Array),
    Z1A = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError > "u" ? y9 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer > "u" ? y9 : ArrayBuffer,
      "%ArrayIteratorPrototype%": xzA && p_ ? p_([][Symbol.iterator]()) : y9,
      "%AsyncFromSyncIteratorPrototype%": y9,
      "%AsyncFunction%": uzA,
      "%AsyncGenerator%": uzA,
      "%AsyncGeneratorFunction%": uzA,
      "%AsyncIteratorPrototype%": uzA,
      "%Atomics%": typeof Atomics > "u" ? y9 : Atomics,
      "%BigInt%": typeof BigInt > "u" ? y9 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array > "u" ? y9 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array > "u" ? y9 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView > "u" ? y9 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": oAq,
      "%eval%": eval,
      "%EvalError%": aAq,
      "%Float16Array%": typeof Float16Array > "u" ? y9 : Float16Array,
      "%Float32Array%": typeof Float32Array > "u" ? y9 : Float32Array,
      "%Float64Array%": typeof Float64Array > "u" ? y9 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? y9 : FinalizationRegistry,
      "%Function%": TA8,
      "%GeneratorFunction%": uzA,
      "%Int8Array%": typeof Int8Array > "u" ? y9 : Int8Array,
      "%Int16Array%": typeof Int16Array > "u" ? y9 : Int16Array,
      "%Int32Array%": typeof Int32Array > "u" ? y9 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": xzA && p_ ? p_(p_([][Symbol.iterator]())) : y9,
      "%JSON%": typeof JSON === "object" ? JSON : y9,
      "%Map%": typeof Map > "u" ? y9 : Map,
      "%MapIteratorPrototype%": typeof Map > "u" || !xzA || !p_ ? y9 : p_(new Map()[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": rAq,
      "%Object.getOwnPropertyDescriptor%": sNA,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise > "u" ? y9 : Promise,
      "%Proxy%": typeof Proxy > "u" ? y9 : Proxy,
      "%RangeError%": sAq,
      "%ReferenceError%": tAq,
      "%Reflect%": typeof Reflect > "u" ? y9 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set > "u" ? y9 : Set,
      "%SetIteratorPrototype%": typeof Set > "u" || !xzA || !p_ ? y9 : p_(new Set()[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? y9 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": xzA && p_ ? p_(""[Symbol.iterator]()) : y9,
      "%Symbol%": xzA ? Symbol : y9,
      "%SyntaxError%": mzA,
      "%ThrowTypeError%": O1q,
      "%TypedArray%": _1q,
      "%TypeError%": BzA,
      "%Uint8Array%": typeof Uint8Array > "u" ? y9 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? y9 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array > "u" ? y9 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array > "u" ? y9 : Uint32Array,
      "%URIError%": eAq,
      "%WeakMap%": typeof WeakMap > "u" ? y9 : WeakMap,
      "%WeakRef%": typeof WeakRef > "u" ? y9 : WeakRef,
      "%WeakSet%": typeof WeakSet > "u" ? y9 : WeakSet,
      "%Function.prototype.call%": tNA,
      "%Function.prototype.apply%": vA8,
      "%Object.defineProperty%": J1q,
      "%Object.getPrototypeOf%": X1q,
      "%Math.abs%": A1q,
      "%Math.floor%": K1q,
      "%Math.max%": q1q,
      "%Math.min%": Y1q,
      "%Math.pow%": z1q,
      "%Math.round%": w1q,
      "%Math.sign%": H1q,
      "%Reflect.getPrototypeOf%": $1q
    };
  if (p_) try {
    null.error;
  } catch (A) {
    AI1 = p_(p_(A)), Z1A["%Error.prototype%"] = AI1;
  }
  var AI1,
    G1q = function A(K) {
      var q;
      if (K === "%AsyncFunction%") q = ty1("async function () {}");else if (K === "%GeneratorFunction%") q = ty1("function* () {}");else if (K === "%AsyncGeneratorFunction%") q = ty1("async function* () {}");else if (K === "%AsyncGenerator%") {
        var Y = A("%AsyncGeneratorFunction%");
        if (Y) q = Y.prototype;
      } else if (K === "%AsyncIteratorPrototype%") {
        var z = A("%AsyncGenerator%");
        if (z && p_) q = p_(z.prototype);
      }
      return Z1A[K] = q, q;
    },
    fA8 = {
      __proto__: null,
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    },
    eNA = __$.aNA(),
    prA = __$.sy1(),
    Z1q = eNA.call(tNA, Array.prototype.concat),
    W1q = eNA.call(vA8, Array.prototype.splice),
    NA8 = eNA.call(tNA, String.prototype.replace),
    drA = eNA.call(tNA, String.prototype.slice),
    D1q = eNA.call(tNA, RegExp.prototype.exec),
    j1q = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    M1q = /\\(\\)?/g,
    P1q = function (K) {
      var q = drA(K, 0, 1),
        Y = drA(K, -1);
      if (q === "%" && Y !== "%") throw new mzA("invalid intrinsic syntax, expected closing `%`");else if (Y === "%" && q !== "%") throw new mzA("invalid intrinsic syntax, expected opening `%`");
      var z = [];
      return NA8(K, j1q, function (w, H, J, O) {
        z[z.length] = J ? NA8(O, M1q, "$1") : H || w;
      }), z;
    },
    V1q = function (K, q) {
      var Y = K,
        z;
      if (prA(fA8, Y)) z = fA8[Y], Y = "%" + z[0] + "%";
      if (prA(Z1A, Y)) {
        var w = Z1A[Y];
        if (w === uzA) w = G1q(Y);
        if (typeof w > "u" && !q) throw new BzA("intrinsic " + K + " exists, but is not available. Please file an issue!");
        return {
          alias: z,
          name: Y,
          value: w
        };
      }
      throw new mzA("intrinsic " + K + " does not exist!");
    };
  EA8.exports = function (K, q) {
    if (typeof K !== "string" || K.length === 0) throw new BzA("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof q !== "boolean") throw new BzA('"allowMissing" argument must be a boolean');
    if (D1q(/^%?[^%]*%?$/, K) === null) throw new mzA("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var Y = P1q(K),
      z = Y.length > 0 ? Y[0] : "",
      w = V1q("%" + z + "%", q),
      H = w.name,
      J = w.value,
      O = !1,
      X = w.alias;
    if (X) z = X[0], W1q(Y, Z1q([0, 1], X));
    for (var $ = 1, _ = !0; $ < Y.length; $ += 1) {
      var G = Y[$],
        Z = drA(G, 0, 1),
        W = drA(G, -1);
      if ((Z === '"' || Z === "'" || Z === "`" || W === '"' || W === "'" || W === "`") && Z !== W) throw new mzA("property names with quotes must have matching quotes");
      if (G === "constructor" || !_) O = !0;
      if (z += "." + G, H = "%" + z + "%", prA(Z1A, H)) J = Z1A[H];else if (J != null) {
        if (!(G in J)) {
          if (!q) throw new BzA("base intrinsic for " + K + " exists, but the property is not available.");
          return;
        }
        if (sNA && $ + 1 >= Y.length) {
          var D = sNA(J, G);
          if (_ = !!D, _ && "get" in D && !("originalValue" in D.get)) J = D.get;else J = J[G];
        } else _ = prA(J, G), J = J[G];
        if (_ && !O) Z1A[H] = J;
      }
    }
    return J;
  };
});

// Register to shared state
__$.kA8 = kA8;
