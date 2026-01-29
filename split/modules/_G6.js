// Module: _G6
// Dependencies: uGA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _G6 = v((Gow, O97) => {
  var {
    tokenChars: ixA
  } = __$.uGA();
  function uu(A, K, q) {
    if (A[K] === void 0) A[K] = [q];else A[K].push(q);
  }
  function uwY(A) {
    let K = Object.create(null),
      q = Object.create(null),
      Y = !1,
      z = !1,
      w = !1,
      H,
      J,
      O = -1,
      X = -1,
      $ = -1,
      _ = 0;
    for (; _ < A.length; _++) if (X = A.charCodeAt(_), H === void 0) {
      if ($ === -1 && ixA[X] === 1) {
        if (O === -1) O = _;
      } else if (_ !== 0 && (X === 32 || X === 9)) {
        if ($ === -1 && O !== -1) $ = _;
      } else if (X === 59 || X === 44) {
        if (O === -1) throw SyntaxError(`Unexpected character at index ${_}`);
        if ($ === -1) $ = _;
        let Z = A.slice(O, $);
        if (X === 44) uu(K, Z, q), q = Object.create(null);else H = Z;
        O = $ = -1;
      } else throw SyntaxError(`Unexpected character at index ${_}`);
    } else if (J === void 0) {
      if ($ === -1 && ixA[X] === 1) {
        if (O === -1) O = _;
      } else if (X === 32 || X === 9) {
        if ($ === -1 && O !== -1) $ = _;
      } else if (X === 59 || X === 44) {
        if (O === -1) throw SyntaxError(`Unexpected character at index ${_}`);
        if ($ === -1) $ = _;
        if (uu(q, A.slice(O, $), !0), X === 44) uu(K, H, q), q = Object.create(null), H = void 0;
        O = $ = -1;
      } else if (X === 61 && O !== -1 && $ === -1) J = A.slice(O, _), O = $ = -1;else throw SyntaxError(`Unexpected character at index ${_}`);
    } else if (z) {
      if (ixA[X] !== 1) throw SyntaxError(`Unexpected character at index ${_}`);
      if (O === -1) O = _;else if (!Y) Y = !0;
      z = !1;
    } else if (w) {
      if (ixA[X] === 1) {
        if (O === -1) O = _;
      } else if (X === 34 && O !== -1) w = !1, $ = _;else if (X === 92) z = !0;else throw SyntaxError(`Unexpected character at index ${_}`);
    } else if (X === 34 && A.charCodeAt(_ - 1) === 61) w = !0;else if ($ === -1 && ixA[X] === 1) {
      if (O === -1) O = _;
    } else if (O !== -1 && (X === 32 || X === 9)) {
      if ($ === -1) $ = _;
    } else if (X === 59 || X === 44) {
      if (O === -1) throw SyntaxError(`Unexpected character at index ${_}`);
      if ($ === -1) $ = _;
      let Z = A.slice(O, $);
      if (Y) Z = Z.replace(/\\/g, ""), Y = !1;
      if (uu(q, J, Z), X === 44) uu(K, H, q), q = Object.create(null), H = void 0;
      J = void 0, O = $ = -1;
    } else throw SyntaxError(`Unexpected character at index ${_}`);
    if (O === -1 || w || X === 32 || X === 9) throw SyntaxError("Unexpected end of input");
    if ($ === -1) $ = _;
    let G = A.slice(O, $);
    if (H === void 0) uu(K, G, q);else {
      if (J === void 0) uu(q, G, !0);else if (Y) uu(q, J, G.replace(/\\/g, ""));else uu(q, J, G);
      uu(K, H, q);
    }
    return K;
  }
  function BwY(A) {
    return Object.keys(A).map(K => {
      let q = A[K];
      if (!Array.isArray(q)) q = [q];
      return q.map(Y => {
        return [K].concat(Object.keys(Y).map(z => {
          let w = Y[z];
          if (!Array.isArray(w)) w = [w];
          return w.map(H => H === !0 ? z : `${z}=${H}`).join("; ");
        })).join("; ");
      }).join(", ");
    }).join(", ");
  }
  O97.exports = {
    format: BwY,
    parse: uwY
  };
});

// Register to shared state
__$._G6 = _G6;
