// Module: dE1
// Dependencies: ycA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dE1 = v(ts2 => {
  var {
    InvalidArgumentError: as2
  } = __$.ycA();
  class qkK {
    constructor(A, K) {
      switch (this.description = K || "", this.variadic = !1, this.parseArg = void 0, this.defaultValue = void 0, this.defaultValueDescription = void 0, this.argChoices = void 0, A[0]) {
        case "<":
          this.required = !0, this._name = A.slice(1, -1);
          break;
        case "[":
          this.required = !1, this._name = A.slice(1, -1);
          break;
        default:
          this.required = !0, this._name = A;
          break;
      }
      if (this._name.length > 3 && this._name.slice(-3) === "...") this.variadic = !0, this._name = this._name.slice(0, -3);
    }
    name() {
      return this._name;
    }
    _concatValue(A, K) {
      if (K === this.defaultValue || !Array.isArray(K)) return [A];
      return K.concat(A);
    }
    default(A, K) {
      return this.defaultValue = A, this.defaultValueDescription = K, this;
    }
    argParser(A) {
      return this.parseArg = A, this;
    }
    choices(A) {
      return this.argChoices = A.slice(), this.parseArg = (K, q) => {
        if (!this.argChoices.includes(K)) throw new as2(`Allowed choices are ${this.argChoices.join(", ")}.`);
        if (this.variadic) return this._concatValue(K, q);
        return K;
      }, this;
    }
    argRequired() {
      return this.required = !0, this;
    }
    argOptional() {
      return this.required = !1, this;
    }
  }
  function ss2(A) {
    let K = A.name() + (A.variadic === !0 ? "..." : "");
    return A.required ? "<" + K + ">" : "[" + K + "]";
  }
  ts2.Argument = qkK;
  ts2.humanReadableArgName = ss2;
});

// Register to shared state
__$.dE1 = dE1;
