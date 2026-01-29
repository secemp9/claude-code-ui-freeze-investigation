// Module: Kt4
// Dependencies: Du

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Kt4 = v(es4 => {
  Object.defineProperty(es4, "__esModule", {
    value: !0
  });
  es4.PassThroughClient = void 0;
  var TAY = __$.Du();
  class cJ6 extends TAY.AuthClient {
    async request(A) {
      return this.transporter.request(A);
    }
    async getAccessToken() {
      return {};
    }
    async getRequestHeaders() {
      return {};
    }
  }
  es4.PassThroughClient = cJ6;
  var vAY = new cJ6();
  vAY.getAccessToken();
});

// Register to shared state
__$.Kt4 = Kt4;
