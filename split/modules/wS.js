// Module: wS
// Dependencies: hs, wL

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wS = v(zlY => {
  var {
      Ono: WL7
    } = __$.hs(),
    {
      stripHash: DL7,
      toFileSystemPath: scY
    } = __$.wL(),
    bs = zlY.JSONParserError = class extends Error {
      constructor(K, q) {
        super();
        this.code = "EUNKNOWN", this.message = K, this.source = q, this.path = null, WL7.extend(this);
      }
      get footprint() {
        return `${this.path}+${this.source}+${this.code}+${this.message}`;
      }
    };
  xs(bs);
  var jL7 = zlY.JSONParserErrorGroup = class A extends Error {
    constructor(K) {
      super();
      this.files = K, this.message = `${this.errors.length} error${this.errors.length > 1 ? "s" : ""} occurred while reading '${scY(K.$refs._root$Ref.path)}'`, WL7.extend(this);
    }
    static getParserErrors(K) {
      let q = [];
      for (let Y of Object.values(K.$refs._$refs)) if (Y.errors) q.push(...Y.errors);
      return q;
    }
    get errors() {
      return A.getParserErrors(this.files);
    }
  };
  xs(jL7);
  var tcY = zlY.ParserError = class extends bs {
    constructor(K, q) {
      super(`Error parsing ${q}: ${K}`, q);
      this.code = "EPARSER";
    }
  };
  xs(tcY);
  var ecY = zlY.UnmatchedParserError = class extends bs {
    constructor(K) {
      super(`Could not find parser for "${K}"`, K);
      this.code = "EUNMATCHEDPARSER";
    }
  };
  xs(ecY);
  var AlY = zlY.ResolverError = class extends bs {
    constructor(K, q) {
      super(K.message || `Error reading file "${q}"`, q);
      if (this.code = "ERESOLVER", "code" in K) this.ioErrorCode = String(K.code);
    }
  };
  xs(AlY);
  var KlY = zlY.UnmatchedResolverError = class extends bs {
    constructor(K) {
      super(`Could not find resolver for "${K}"`, K);
      this.code = "EUNMATCHEDRESOLVER";
    }
  };
  xs(KlY);
  var qlY = zlY.MissingPointerError = class extends bs {
    constructor(K, q) {
      super(`Token "${K}" does not exist.`, DL7(q));
      this.code = "EMISSINGPOINTER";
    }
  };
  xs(qlY);
  var YlY = zlY.InvalidPointerError = class extends bs {
    constructor(K, q) {
      super(`Invalid $ref pointer "${K}". Pointers must begin with "#/"`, DL7(q));
      this.code = "EINVALIDPOINTER";
    }
  };
  xs(YlY);
  function xs(A) {
    Object.defineProperty(A.prototype, "name", {
      value: A.name,
      enumerable: !0
    });
  }
  zlY.isHandledError = function (A) {
    return A instanceof bs || A instanceof jL7;
  };
  zlY.normalizeError = function (A) {
    if (A.path === null) A.path = [];
    return A;
  };
});

// Register to shared state
__$.wS = wS;
