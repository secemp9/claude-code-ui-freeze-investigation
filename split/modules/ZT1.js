// Module: ZT1
// Dependencies: $$K, sh2, th2, eh2, Ab2, ah2, T5, Kb2, N$K, sd
//   ... and 21 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZT1 = k(() => {
  __$.$$K = Object.prototype.hasOwnProperty;
  __$.sh2 = {
    includeMatches: !1,
    findAllMatches: !1,
    minMatchCharLength: 1
  }, __$.th2 = {
    isCaseSensitive: !1,
    includeScore: !1,
    keys: [],
    shouldSort: !0,
    sortFn: (A, K) => A.score === K.score ? A.idx < K.idx ? -1 : 1 : A.score < K.score ? -1 : 1
  }, __$.eh2 = {
    location: 0,
    threshold: 0.6,
    distance: 100
  }, __$.Ab2 = {
    useExtendedSearch: !1,
    getFn: __$.ah2,
    ignoreLocation: !1,
    ignoreFieldNorm: !1,
    fieldNormWeight: 1
  }, __$.T5 = {
    ...__$.th2,
    ...__$.sh2,
    ...__$.eh2,
    ...__$.Ab2
  }, __$.Kb2 = /[^ ]+/g;
  __$.N$K = class N$K extends __$.sd {
    constructor(A) {
      super(A);
    }
    static get type() {
      return "exact";
    }
    static get multiRegex() {
      return /^="(.*)"$/;
    }
    static get singleRegex() {
      return /^=(.*)$/;
    }
    search(A) {
      let K = A === this.pattern;
      return {
        isMatch: K,
        score: K ? 0 : 1,
        indices: [0, this.pattern.length - 1]
      };
    }
  };
  __$.T$K = class T$K extends __$.sd {
    constructor(A) {
      super(A);
    }
    static get type() {
      return "inverse-exact";
    }
    static get multiRegex() {
      return /^!"(.*)"$/;
    }
    static get singleRegex() {
      return /^!(.*)$/;
    }
    search(A) {
      let q = A.indexOf(this.pattern) === -1;
      return {
        isMatch: q,
        score: q ? 0 : 1,
        indices: [0, A.length - 1]
      };
    }
  };
  __$.v$K = class v$K extends __$.sd {
    constructor(A) {
      super(A);
    }
    static get type() {
      return "prefix-exact";
    }
    static get multiRegex() {
      return /^\^"(.*)"$/;
    }
    static get singleRegex() {
      return /^\^(.*)$/;
    }
    search(A) {
      let K = A.startsWith(this.pattern);
      return {
        isMatch: K,
        score: K ? 0 : 1,
        indices: [0, this.pattern.length - 1]
      };
    }
  };
  __$.E$K = class E$K extends __$.sd {
    constructor(A) {
      super(A);
    }
    static get type() {
      return "inverse-prefix-exact";
    }
    static get multiRegex() {
      return /^!\^"(.*)"$/;
    }
    static get singleRegex() {
      return /^!\^(.*)$/;
    }
    search(A) {
      let K = !A.startsWith(this.pattern);
      return {
        isMatch: K,
        score: K ? 0 : 1,
        indices: [0, A.length - 1]
      };
    }
  };
  __$.k$K = class k$K extends __$.sd {
    constructor(A) {
      super(A);
    }
    static get type() {
      return "suffix-exact";
    }
    static get multiRegex() {
      return /^"(.*)"\$$/;
    }
    static get singleRegex() {
      return /^(.*)\$$/;
    }
    search(A) {
      let K = A.endsWith(this.pattern);
      return {
        isMatch: K,
        score: K ? 0 : 1,
        indices: [A.length - this.pattern.length, A.length - 1]
      };
    }
  };
  __$.C$K = class C$K extends __$.sd {
    constructor(A) {
      super(A);
    }
    static get type() {
      return "inverse-suffix-exact";
    }
    static get multiRegex() {
      return /^!"(.*)"\$$/;
    }
    static get singleRegex() {
      return /^!(.*)\$$/;
    }
    search(A) {
      let K = !A.endsWith(this.pattern);
      return {
        isMatch: K,
        score: K ? 0 : 1,
        indices: [0, A.length - 1]
      };
    }
  };
  __$.oB6 = class oB6 extends __$.sd {
    constructor(A, {
      location: K = __$.T5.location,
      threshold: q = __$.T5.threshold,
      distance: Y = __$.T5.distance,
      includeMatches: z = __$.T5.includeMatches,
      findAllMatches: w = __$.T5.findAllMatches,
      minMatchCharLength: H = __$.T5.minMatchCharLength,
      isCaseSensitive: J = __$.T5.isCaseSensitive,
      ignoreLocation: O = __$.T5.ignoreLocation
    } = {}) {
      super(A);
      this._bitapSearch = new __$.rB6(A, {
        location: K,
        threshold: q,
        distance: Y,
        includeMatches: z,
        findAllMatches: w,
        minMatchCharLength: H,
        isCaseSensitive: J,
        ignoreLocation: O
      });
    }
    static get type() {
      return "fuzzy";
    }
    static get multiRegex() {
      return /^"(.*)"$/;
    }
    static get singleRegex() {
      return /^(.*)$/;
    }
    search(A) {
      return this._bitapSearch.searchIn(A);
    }
  };
  __$.aB6 = class aB6 extends __$.sd {
    constructor(A) {
      super(A);
    }
    static get type() {
      return "include";
    }
    static get multiRegex() {
      return /^'"(.*)"$/;
    }
    static get singleRegex() {
      return /^'(.*)$/;
    }
    search(A) {
      let K = 0,
        q,
        Y = [],
        z = this.pattern.length;
      while ((q = A.indexOf(this.pattern, K)) > -1) K = q + z, Y.push([q, K - 1]);
      let w = !!Y.length;
      return {
        isMatch: w,
        score: w ? 0 : 1,
        indices: Y
      };
    }
  };
  __$.dB6 = [__$.N$K, __$.aB6, __$.v$K, __$.E$K, __$.C$K, __$.k$K, __$.T$K, __$.oB6], __$.Z$K = __$.dB6.length, __$.Jb2 = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
  __$.$b2 = new Set([__$.oB6.type, __$.aB6.type]);
  __$.cB6 = [];
  __$._T1 = {
    AND: "$and",
    OR: "$or"
  }, __$.iB6 = {
    PATH: "$path",
    PATTERN: "$val"
  };
  __$.CL.version = "7.0.0";
  __$.CL.createIndex = __$.f$K;
  __$.CL.parseIndex = __$.Yb2;
  __$.CL.config = __$.T5;
  __$.CL.parseQuery = __$.R$K;
  __$._b2(__$.L$K);
});

// Register to shared state
__$.ZT1 = ZT1;
