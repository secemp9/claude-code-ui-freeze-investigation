// Module: pO4
// Dependencies: FO4, Yr, yyA, Y_, Ls3, _4A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pO4 = k(() => {
  __$.FO4();
  __$.Yr();
  __$.yyA = {
    all: __$.Y_.All,
    horizontal: __$.Y_.Horizontal,
    vertical: __$.Y_.Vertical,
    left: __$.Y_.Left,
    right: __$.Y_.Right,
    top: __$.Y_.Top,
    bottom: __$.Y_.Bottom,
    start: __$.Y_.Start,
    end: __$.Y_.End
  }, __$.Ls3 = {
    all: __$._4A.All,
    column: __$._4A.Column,
    row: __$._4A.Row
  };
});

// Register to shared state
__$.pO4 = pO4;
