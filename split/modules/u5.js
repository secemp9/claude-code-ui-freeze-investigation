// Module: u5
// Dependencies: qt6, Ht6, Xt6, $t6, wt6, Ly1, IzA, dNA, _t6, SzA
//   ... and 10 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var u5 = k(() => {
  __$.qt6();
  __$.Ht6();
  ({
    stdout: __$.Xt6,
    stderr: __$.$t6
  } = __$.wt6), __$.Ly1 = Symbol("GENERATOR"), __$.IzA = Symbol("STYLER"), __$.dNA = Symbol("IS_EMPTY"), __$._t6 = ["ansi", "ansi", "ansi256", "ansi16m"], __$.SzA = Object.create(null);
  Object.setPrototypeOf(__$.cNA.prototype, Function.prototype);
  for (let [A, K] of Object.entries(__$.kR)) __$.SzA[A] = {
    get() {
      let q = __$.LrA(this, __$.yy1(K.open, K.close, this[__$.IzA]), this[__$.dNA]);
      return Object.defineProperty(this, A, {
        value: q
      }), q;
    }
  };
  __$.SzA.visible = {
    get() {
      let A = __$.LrA(this, this[__$.IzA], !0);
      return Object.defineProperty(this, "visible", {
        value: A
      }), A;
    }
  };
  __$.atK = ["rgb", "hex", "ansi256"];
  for (let A of __$.atK) {
    __$.SzA[A] = {
      get() {
        let {
          level: q
        } = this;
        return function (...Y) {
          let z = __$.yy1(__$.Ry1(A, __$._t6[q], "color", ...Y), __$.kR.color.close, this[__$.IzA]);
          return __$.LrA(this, z, this[__$.dNA]);
        };
      }
    };
    let K = "bg" + A[0].toUpperCase() + A.slice(1);
    __$.SzA[K] = {
      get() {
        let {
          level: q
        } = this;
        return function (...Y) {
          let z = __$.yy1(__$.Ry1(A, __$._t6[q], "bgColor", ...Y), __$.kR.bgColor.close, this[__$.IzA]);
          return __$.LrA(this, z, this[__$.dNA]);
        };
      }
    };
  }
  __$.stK = Object.defineProperties(() => {}, {
    ...__$.SzA,
    level: {
      enumerable: !0,
      get() {
        return this[__$.Ly1].level;
      },
      set(A) {
        this[__$.Ly1].level = A;
      }
    }
  });
  Object.defineProperties(__$.cNA.prototype, __$.SzA);
  __$.etK = __$.cNA(), __$.H_z = __$.cNA({
    level: __$.$t6 ? __$.$t6.level : 0
  }), __$.O1 = __$.etK;
});

// Register to shared state
__$.u5 = u5;
