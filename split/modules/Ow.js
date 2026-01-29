// Module: Ow
// Dependencies: OeK, uy1, brA, hzA, rNA, xrA, vt6, CR, _eK, xN
//   ... and 48 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ow = k(() => {
  ({
    toString: __$.OeK
  } = Object.prototype), {
    getPrototypeOf: __$.uy1
  } = Object, __$.brA = (A => K => {
    let q = __$.OeK.call(K);
    return A[q] || (A[q] = q.slice(8, -1).toLowerCase());
  })(Object.create(null)), {
    isArray: __$.hzA
  } = Array, __$.rNA = __$.xrA("undefined");
  __$.vt6 = __$.CR("ArrayBuffer");
  __$._eK = __$.xrA("string"), __$.xN = __$.xrA("function"), __$.Et6 = __$.xrA("number"), __$.ZeK = __$.CR("Date"), __$.WeK = __$.CR("File"), __$.DeK = __$.CR("Blob"), __$.jeK = __$.CR("FileList"), __$.VeK = __$.CR("URLSearchParams"), [__$.feK, __$.NeK, __$.TeK, __$.veK] = ["ReadableStream", "Request", "Response", "Headers"].map(__$.CR);
  __$.G1A = (() => {
    if (typeof globalThis < "u") return globalThis;
    return typeof self < "u" ? self : typeof window < "u" ? window : global;
  })();
  __$.SeK = (A => {
    return K => {
      return A && K instanceof A;
    };
  })(typeof Uint8Array < "u" && __$.uy1(Uint8Array)), __$.xeK = __$.CR("HTMLFormElement"), __$.Tt6 = (({
    hasOwnProperty: A
  }) => (K, q) => A.call(K, q))(Object.prototype), __$.BeK = __$.CR("RegExp");
  __$.deK = __$.CR("AsyncFunction"), __$.Rt6 = ((A, K) => {
    if (A) return setImmediate;
    return K ? ((q, Y) => {
      return __$.G1A.addEventListener("message", ({
        source: z,
        data: w
      }) => {
        if (z === __$.G1A && w === q) Y.length && Y.shift()();
      }, !1), z => {
        Y.push(z), __$.G1A.postMessage(q, "*");
      };
    })(`axios@${Math.random()}`, []) : q => setTimeout(q);
  })(typeof setImmediate === "function", __$.xN(__$.G1A.postMessage)), __$.leK = typeof queueMicrotask < "u" ? queueMicrotask.bind(__$.G1A) : typeof process < "u" && process.nextTick || __$.Rt6, __$.i1 = {
    isArray: __$.hzA,
    isArrayBuffer: __$.vt6,
    isBuffer: __$.XeK,
    isFormData: __$.PeK,
    isArrayBufferView: __$.$eK,
    isString: __$._eK,
    isNumber: __$.Et6,
    isBoolean: __$.GeK,
    isObject: __$.urA,
    isPlainObject: __$.hrA,
    isReadableStream: __$.feK,
    isRequest: __$.NeK,
    isResponse: __$.TeK,
    isHeaders: __$.veK,
    isUndefined: __$.rNA,
    isDate: __$.ZeK,
    isFile: __$.WeK,
    isBlob: __$.DeK,
    isRegExp: __$.BeK,
    isFunction: __$.xN,
    isStream: __$.MeK,
    isURLSearchParams: __$.VeK,
    isTypedArray: __$.SeK,
    isFileList: __$.jeK,
    forEach: __$.oNA,
    merge: __$.xy1,
    extend: __$.keK,
    trim: __$.EeK,
    stripBOM: __$.CeK,
    inherits: __$.LeK,
    toFlatObject: __$.ReK,
    kindOf: __$.brA,
    kindOfTest: __$.CR,
    endsWith: __$.yeK,
    toArray: __$.IeK,
    forEachEntry: __$.heK,
    matchAll: __$.beK,
    isHTMLForm: __$.xeK,
    hasOwnProperty: __$.Tt6,
    hasOwnProp: __$.Tt6,
    reduceDescriptors: __$.Lt6,
    freezeMethods: __$.meK,
    toObjectSet: __$.geK,
    toCamelCase: __$.ueK,
    noop: __$.FeK,
    toFiniteNumber: __$.QeK,
    findKey: __$.kt6,
    global: __$.G1A,
    isContextDefined: __$.Ct6,
    isSpecCompliantForm: __$.UeK,
    toJSONObject: __$.peK,
    isAsyncFn: __$.deK,
    isThenable: __$.ceK,
    setImmediate: __$.Rt6,
    asap: __$.leK
  };
});

// Register to shared state
__$.Ow = Ow;
