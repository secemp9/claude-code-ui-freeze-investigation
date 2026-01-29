// Module: Nz4
// Dependencies: Mz4, X46, SZ, j9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Nz4 = v((J8w, fz4) => {
  var {
      staticPropertyDescriptors: m0A,
      readOperation: aK1,
      fireAProgressEvent: Pz4
    } = __$.Mz4(),
    {
      kState: i8A,
      kError: Vz4,
      kResult: sK1,
      kEvents: G2,
      kAborted: qi3
    } = __$.X46(),
    {
      webidl: dz
    } = __$.SZ(),
    {
      kEnumerableProperty: bV
    } = __$.j9();
  class Mz extends EventTarget {
    constructor() {
      super();
      this[i8A] = "empty", this[sK1] = null, this[Vz4] = null, this[G2] = {
        loadend: null,
        error: null,
        abort: null,
        load: null,
        progress: null,
        loadstart: null
      };
    }
    readAsArrayBuffer(A) {
      dz.brandCheck(this, Mz), dz.argumentLengthCheck(arguments, 1, "FileReader.readAsArrayBuffer"), A = dz.converters.Blob(A, {
        strict: !1
      }), aK1(this, A, "ArrayBuffer");
    }
    readAsBinaryString(A) {
      dz.brandCheck(this, Mz), dz.argumentLengthCheck(arguments, 1, "FileReader.readAsBinaryString"), A = dz.converters.Blob(A, {
        strict: !1
      }), aK1(this, A, "BinaryString");
    }
    readAsText(A, K = void 0) {
      if (dz.brandCheck(this, Mz), dz.argumentLengthCheck(arguments, 1, "FileReader.readAsText"), A = dz.converters.Blob(A, {
        strict: !1
      }), K !== void 0) K = dz.converters.DOMString(K, "FileReader.readAsText", "encoding");
      aK1(this, A, "Text", K);
    }
    readAsDataURL(A) {
      dz.brandCheck(this, Mz), dz.argumentLengthCheck(arguments, 1, "FileReader.readAsDataURL"), A = dz.converters.Blob(A, {
        strict: !1
      }), aK1(this, A, "DataURL");
    }
    abort() {
      if (this[i8A] === "empty" || this[i8A] === "done") {
        this[sK1] = null;
        return;
      }
      if (this[i8A] === "loading") this[i8A] = "done", this[sK1] = null;
      if (this[qi3] = !0, Pz4("abort", this), this[i8A] !== "loading") Pz4("loadend", this);
    }
    get readyState() {
      switch (dz.brandCheck(this, Mz), this[i8A]) {
        case "empty":
          return this.EMPTY;
        case "loading":
          return this.LOADING;
        case "done":
          return this.DONE;
      }
    }
    get result() {
      return dz.brandCheck(this, Mz), this[sK1];
    }
    get error() {
      return dz.brandCheck(this, Mz), this[Vz4];
    }
    get onloadend() {
      return dz.brandCheck(this, Mz), this[G2].loadend;
    }
    set onloadend(A) {
      if (dz.brandCheck(this, Mz), this[G2].loadend) this.removeEventListener("loadend", this[G2].loadend);
      if (typeof A === "function") this[G2].loadend = A, this.addEventListener("loadend", A);else this[G2].loadend = null;
    }
    get onerror() {
      return dz.brandCheck(this, Mz), this[G2].error;
    }
    set onerror(A) {
      if (dz.brandCheck(this, Mz), this[G2].error) this.removeEventListener("error", this[G2].error);
      if (typeof A === "function") this[G2].error = A, this.addEventListener("error", A);else this[G2].error = null;
    }
    get onloadstart() {
      return dz.brandCheck(this, Mz), this[G2].loadstart;
    }
    set onloadstart(A) {
      if (dz.brandCheck(this, Mz), this[G2].loadstart) this.removeEventListener("loadstart", this[G2].loadstart);
      if (typeof A === "function") this[G2].loadstart = A, this.addEventListener("loadstart", A);else this[G2].loadstart = null;
    }
    get onprogress() {
      return dz.brandCheck(this, Mz), this[G2].progress;
    }
    set onprogress(A) {
      if (dz.brandCheck(this, Mz), this[G2].progress) this.removeEventListener("progress", this[G2].progress);
      if (typeof A === "function") this[G2].progress = A, this.addEventListener("progress", A);else this[G2].progress = null;
    }
    get onload() {
      return dz.brandCheck(this, Mz), this[G2].load;
    }
    set onload(A) {
      if (dz.brandCheck(this, Mz), this[G2].load) this.removeEventListener("load", this[G2].load);
      if (typeof A === "function") this[G2].load = A, this.addEventListener("load", A);else this[G2].load = null;
    }
    get onabort() {
      return dz.brandCheck(this, Mz), this[G2].abort;
    }
    set onabort(A) {
      if (dz.brandCheck(this, Mz), this[G2].abort) this.removeEventListener("abort", this[G2].abort);
      if (typeof A === "function") this[G2].abort = A, this.addEventListener("abort", A);else this[G2].abort = null;
    }
  }
  Mz.EMPTY = Mz.prototype.EMPTY = 0;
  Mz.LOADING = Mz.prototype.LOADING = 1;
  Mz.DONE = Mz.prototype.DONE = 2;
  Object.defineProperties(Mz.prototype, {
    EMPTY: m0A,
    LOADING: m0A,
    DONE: m0A,
    readAsArrayBuffer: bV,
    readAsBinaryString: bV,
    readAsText: bV,
    readAsDataURL: bV,
    abort: bV,
    readyState: bV,
    result: bV,
    error: bV,
    onloadstart: bV,
    onprogress: bV,
    onload: bV,
    onabort: bV,
    onerror: bV,
    onloadend: bV,
    [Symbol.toStringTag]: {
      value: "FileReader",
      writable: !1,
      enumerable: !1,
      configurable: !0
    }
  });
  Object.defineProperties(Mz, {
    EMPTY: m0A,
    LOADING: m0A,
    DONE: m0A
  });
  fz4.exports = {
    FileReader: Mz
  };
});

// Register to shared state
__$.Nz4 = Nz4;
