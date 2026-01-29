// Module: IU6
// Dependencies: ycA, is

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var IU6 = v(Jt2 => {
  var {
    InvalidArgumentError: zt2
  } = __$.ycA();
  class zkK {
    constructor(A, K) {
      this.flags = A, this.description = K || "", this.required = A.includes("<"), this.optional = A.includes("["), this.variadic = /\w\.\.\.[>\]]$/.test(A), this.mandatory = !1;
      let q = Ht2(A);
      if (this.short = q.shortFlag, this.long = q.longFlag, this.negate = !1, this.long) this.negate = this.long.startsWith("--no-");
      this.defaultValue = void 0, this.defaultValueDescription = void 0, this.presetArg = void 0, this.envVar = void 0, this.parseArg = void 0, this.hidden = !1, this.argChoices = void 0, this.conflictsWith = [], this.implied = void 0;
    }
    default(A, K) {
      return this.defaultValue = A, this.defaultValueDescription = K, this;
    }
    preset(A) {
      return this.presetArg = A, this;
    }
    conflicts(A) {
      return this.conflictsWith = this.conflictsWith.concat(A), this;
    }
    implies(A) {
      let K = A;
      if (typeof A === "string") K = {
        [A]: !0
      };
      return this.implied = Object.assign(this.implied || {}, K), this;
    }
    env(A) {
      return this.envVar = A, this;
    }
    argParser(A) {
      return this.parseArg = A, this;
    }
    makeOptionMandatory(A = !0) {
      return this.mandatory = !!A, this;
    }
    hideHelp(A = !0) {
      return this.hidden = !!A, this;
    }
    _concatValue(A, K) {
      if (K === this.defaultValue || !Array.isArray(K)) return [A];
      return K.concat(A);
    }
    choices(A) {
      return this.argChoices = A.slice(), this.parseArg = (K, q) => {
        if (!this.argChoices.includes(K)) throw new zt2(`Allowed choices are ${this.argChoices.join(", ")}.`);
        if (this.variadic) return this._concatValue(K, q);
        return K;
      }, this;
    }
    name() {
      if (this.long) return this.long.replace(/^--/, "");
      return this.short.replace(/^-/, "");
    }
    attributeName() {
      return wt2(this.name().replace(/^no-/, ""));
    }
    is(A) {
      return this.short === A || this.long === A;
    }
    isBoolean() {
      return !this.required && !this.optional && !this.negate;
    }
  }
  class wkK {
    constructor(A) {
      this.positiveOptions = new Map(), this.negativeOptions = new Map(), this.dualOptions = new Set(), A.forEach(K => {
        if (K.negate) this.negativeOptions.set(K.attributeName(), K);else this.positiveOptions.set(K.attributeName(), K);
      }), this.negativeOptions.forEach((K, q) => {
        if (this.positiveOptions.has(q)) this.dualOptions.add(q);
      });
    }
    valueFromOption(A, K) {
      let q = K.attributeName();
      if (!this.dualOptions.has(q)) return !0;
      let Y = this.negativeOptions.get(q).presetArg,
        z = Y !== void 0 ? Y : !1;
      return K.negate === (z === A);
    }
  }
  function wt2(A) {
    return A.split("-").reduce((K, q) => {
      return K + q[0].toUpperCase() + q.slice(1);
    });
  }
  function Ht2(A) {
    let K,
      q,
      Y = A.split(/[ |,]+/);
    if (Y.length > 1 && !/^[[<]/.test(Y[1])) K = Y.shift();
    if (q = Y.shift(), !K && /^-[^-]$/.test(q)) K = q, q = void 0;
    return {
      shortFlag: K,
      longFlag: q
    };
  }
  Jt2.Option = zkK;
  Jt2.DualOptions = wkK;
});

// Register to shared state
__$.IU6 = IU6;
