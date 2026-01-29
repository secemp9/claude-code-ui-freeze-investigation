// Module: jkK
// Dependencies: WkK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jkK = v((lv, DkK) => {
  var $h = __$.WkK();
  lv = DkK.exports = {};
  lv.program = new $h.Command();
  lv.Argument = $h.Argument;
  lv.Command = $h.Command;
  lv.CommanderError = $h.CommanderError;
  lv.Help = $h.Help;
  lv.InvalidArgumentError = $h.InvalidArgumentError;
  lv.InvalidOptionArgumentError = $h.InvalidArgumentError;
  lv.Option = $h.Option;
  lv.createCommand = A => new $h.Command(A);
  lv.createOption = (A, K) => new $h.Option(A, K);
  lv.createArgument = (A, K) => new $h.Argument(A, K);
});

// Register to shared state
__$.jkK = jkK;
