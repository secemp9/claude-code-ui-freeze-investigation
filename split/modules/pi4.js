// Module: pi4
// Dependencies: Qi4, rw6, Iz1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pi4 = v(wr9 => {
  var {
      URL: Yr9,
      URLSearchParams: zr9
    } = __$.Qi4(),
    ly = __$.rw6(),
    Ui4 = __$.Iz1(),
    Bz1 = {
      Array,
      Object,
      Promise,
      String,
      TypeError
    };
  Yr9.install(Bz1, ["Window"]);
  zr9.install(Bz1, ["Window"]);
  wr9.URL = Bz1.URL;
  wr9.URLSearchParams = Bz1.URLSearchParams;
  wr9.parseURL = ly.parseURL;
  wr9.basicURLParse = ly.basicURLParse;
  wr9.serializeURL = ly.serializeURL;
  wr9.serializePath = ly.serializePath;
  wr9.serializeHost = ly.serializeHost;
  wr9.serializeInteger = ly.serializeInteger;
  wr9.serializeURLOrigin = ly.serializeURLOrigin;
  wr9.setTheUsername = ly.setTheUsername;
  wr9.setThePassword = ly.setThePassword;
  wr9.cannotHaveAUsernamePasswordPort = ly.cannotHaveAUsernamePasswordPort;
  wr9.hasAnOpaquePath = ly.hasAnOpaquePath;
  wr9.percentDecodeString = Ui4.percentDecodeString;
  wr9.percentDecodeBytes = Ui4.percentDecodeBytes;
});

// Register to shared state
__$.pi4 = pi4;
