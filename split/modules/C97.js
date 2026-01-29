// Module: C97
// Dependencies: uGA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var C97 = v((Pow, k97) => {
  var {
    tokenChars: ZHY
  } = __$.uGA();
  function WHY(A) {
    let K = new Set(),
      q = -1,
      Y = -1,
      z = 0;
    for (z; z < A.length; z++) {
      let H = A.charCodeAt(z);
      if (Y === -1 && ZHY[H] === 1) {
        if (q === -1) q = z;
      } else if (z !== 0 && (H === 32 || H === 9)) {
        if (Y === -1 && q !== -1) Y = z;
      } else if (H === 44) {
        if (q === -1) throw SyntaxError(`Unexpected character at index ${z}`);
        if (Y === -1) Y = z;
        let J = A.slice(q, Y);
        if (K.has(J)) throw SyntaxError(`The "${J}" subprotocol is duplicated`);
        K.add(J), q = Y = -1;
      } else throw SyntaxError(`Unexpected character at index ${z}`);
    }
    if (q === -1 || Y !== -1) throw SyntaxError("Unexpected end of input");
    let w = A.slice(q, z);
    if (K.has(w)) throw SyntaxError(`The "${w}" subprotocol is duplicated`);
    return K.add(w), K;
  }
  k97.exports = {
    parse: WHY
  };
});

// Register to shared state
__$.C97 = C97;
