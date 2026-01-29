// Module: YD1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var YD1 = v(mB7 => {
  Object.defineProperty(mB7, "__esModule", {
    value: !0
  });
  mB7.ExactPredicate = mB7.PatternPredicate = void 0;
  var B12 = /[\^$\\.+?()[\]{}|]/g;
  class hv6 {
    _matchAll;
    _regexp;
    constructor(A) {
      if (A === "*") this._matchAll = !0, this._regexp = /.*/;else this._matchAll = !1, this._regexp = new RegExp(hv6.escapePattern(A));
    }
    match(A) {
      if (this._matchAll) return !0;
      return this._regexp.test(A);
    }
    static escapePattern(A) {
      return `^${A.replace(B12, "\\$&").replace("*", ".*")}$`;
    }
    static hasWildcard(A) {
      return A.includes("*");
    }
  }
  mB7.PatternPredicate = hv6;
  class BB7 {
    _matchAll;
    _pattern;
    constructor(A) {
      this._matchAll = A === void 0, this._pattern = A;
    }
    match(A) {
      if (this._matchAll) return !0;
      if (A === this._pattern) return !0;
      return !1;
    }
  }
  mB7.ExactPredicate = BB7;
});

// Register to shared state
__$.YD1 = YD1;
