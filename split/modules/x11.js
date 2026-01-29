// Module: x11
// Dependencies: pkA, d8, S9, DV

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var x11 = k(() => {
  __$.pkA();
  __$.d8 = __$.S9.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
  __$.DV = class DV extends Error {
    get errors() {
      return this.issues;
    }
    constructor(A) {
      super();
      this.issues = [], this.addIssue = q => {
        this.issues = [...this.issues, q];
      }, this.addIssues = (q = []) => {
        this.issues = [...this.issues, ...q];
      };
      let K = new.target.prototype;
      if (Object.setPrototypeOf) Object.setPrototypeOf(this, K);else this.__proto__ = K;
      this.name = "ZodError", this.issues = A;
    }
    format(A) {
      let K = A || function (z) {
          return z.message;
        },
        q = {
          _errors: []
        },
        Y = z => {
          for (let w of z.issues) if (w.code === "invalid_union") w.unionErrors.map(Y);else if (w.code === "invalid_return_type") Y(w.returnTypeError);else if (w.code === "invalid_arguments") Y(w.argumentsError);else if (w.path.length === 0) q._errors.push(K(w));else {
            let H = q,
              J = 0;
            while (J < w.path.length) {
              let O = w.path[J];
              if (J !== w.path.length - 1) H[O] = H[O] || {
                _errors: []
              };else H[O] = H[O] || {
                _errors: []
              }, H[O]._errors.push(K(w));
              H = H[O], J++;
            }
          }
        };
      return Y(this), q;
    }
    static assert(A) {
      if (!(A instanceof __$.DV)) throw Error(`Not a ZodError: ${A}`);
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, __$.S9.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(A = K => K.message) {
      let K = {},
        q = [];
      for (let Y of this.issues) if (Y.path.length > 0) {
        let z = Y.path[0];
        K[z] = K[z] || [], K[z].push(A(Y));
      } else q.push(A(Y));
      return {
        formErrors: q,
        fieldErrors: K
      };
    }
    get formErrors() {
      return this.flatten();
    }
  };
  __$.DV.create = A => {
    return new __$.DV(A);
  };
});

// Register to shared state
__$.x11 = x11;
