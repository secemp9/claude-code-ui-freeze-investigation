// Module: WkK
// Dependencies: dE1, $kK, ycA, yU6, IU6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var WkK = v(vt2 => {
  var {
      Argument: _kK
    } = __$.dE1(),
    {
      Command: uU6
    } = __$.$kK(),
    {
      CommanderError: Nt2,
      InvalidArgumentError: GkK
    } = __$.ycA(),
    {
      Help: Tt2
    } = __$.yU6(),
    {
      Option: ZkK
    } = __$.IU6();
  vt2.program = new uU6();
  vt2.createCommand = A => new uU6(A);
  vt2.createOption = (A, K) => new ZkK(A, K);
  vt2.createArgument = (A, K) => new _kK(A, K);
  vt2.Command = uU6;
  vt2.Option = ZkK;
  vt2.Argument = _kK;
  vt2.Help = Tt2;
  vt2.CommanderError = Nt2;
  vt2.InvalidArgumentError = GkK;
  vt2.InvalidOptionArgumentError = GkK;
});

// Register to shared state
__$.WkK = WkK;
