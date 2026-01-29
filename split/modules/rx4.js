// Module: rx4
// Dependencies: ox

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rx4 = v((ojw, nx4) => {
  var ex = __$.ox(),
    vC9 = {
      and: "and",
      or: "or",
      eor: "eor"
    };
  function EC9() {
    return this.options.removeAlpha = !0, this;
  }
  function kC9(A) {
    if (ex.defined(A)) {
      if (ex.number(A) && ex.inRange(A, 0, 1)) this.options.ensureAlpha = A;else throw ex.invalidParameterError("alpha", "number between 0 and 1", A);
    } else this.options.ensureAlpha = 1;
    return this;
  }
  function CC9(A) {
    let K = {
      red: 0,
      green: 1,
      blue: 2,
      alpha: 3
    };
    if (Object.keys(K).includes(A)) A = K[A];
    if (ex.integer(A) && ex.inRange(A, 0, 4)) this.options.extractChannel = A;else throw ex.invalidParameterError("channel", "integer or one of: red, green, blue, alpha", A);
    return this;
  }
  function LC9(A, K) {
    if (Array.isArray(A)) A.forEach(function (q) {
      this.options.joinChannelIn.push(this._createInputDescriptor(q, K));
    }, this);else this.options.joinChannelIn.push(this._createInputDescriptor(A, K));
    return this;
  }
  function RC9(A) {
    if (ex.string(A) && ex.inArray(A, ["and", "or", "eor"])) this.options.bandBoolOp = A;else throw ex.invalidParameterError("boolOp", "one of: and, or, eor", A);
    return this;
  }
  nx4.exports = function (A) {
    Object.assign(A.prototype, {
      removeAlpha: EC9,
      ensureAlpha: kC9,
      extractChannel: CC9,
      joinChannel: LC9,
      bandbool: RC9
    }), A.bool = vC9;
  };
});

// Register to shared state
__$.rx4 = rx4;
