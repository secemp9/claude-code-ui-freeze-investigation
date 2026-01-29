// Module: uz6
// Dependencies: lQ4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uz6 = v(d21 => {
  var xz6 = __$.lQ4();
  Object.defineProperty(d21, "CognitoIdentityClient", {
    enumerable: !0,
    get: function () {
      return xz6.CognitoIdentityClient;
    }
  });
  Object.defineProperty(d21, "GetCredentialsForIdentityCommand", {
    enumerable: !0,
    get: function () {
      return xz6.GetCredentialsForIdentityCommand;
    }
  });
  Object.defineProperty(d21, "GetIdCommand", {
    enumerable: !0,
    get: function () {
      return xz6.GetIdCommand;
    }
  });
});

// Register to shared state
__$.uz6 = uz6;
