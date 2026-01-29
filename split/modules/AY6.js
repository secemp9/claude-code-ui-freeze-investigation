// Module: AY6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var AY6 = v(wN9 => {
  class dS4 {
    constructor() {
      this.lineStarts = [], this.addNewLine = A => this.lineStarts.push(A), this.linePos = A => {
        let K = 0,
          q = this.lineStarts.length;
        while (K < q) {
          let z = K + q >> 1;
          if (this.lineStarts[z] < A) K = z + 1;else q = z;
        }
        if (this.lineStarts[K] === A) return {
          line: K + 1,
          col: 1
        };
        if (K === 0) return {
          line: 0,
          col: A
        };
        let Y = this.lineStarts[K - 1];
        return {
          line: K,
          col: A - Y + 1
        };
      };
    }
  }
  wN9.LineCounter = dS4;
});

// Register to shared state
__$.AY6 = AY6;
