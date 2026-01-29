// Module: OQ7
// Dependencies: zQ7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var OQ7 = v(HQ7 => {
  Object.defineProperty(HQ7, "__esModule", {
    value: !0
  });
  HQ7.createHttpExporterTransport = void 0;
  var S42 = __$.zQ7();
  class wQ7 {
    _parameters;
    _utils = null;
    constructor(A) {
      this._parameters = A;
    }
    async send(A, K) {
      let {
          agent: q,
          request: Y
        } = await this._loadUtils(),
        z = await this._parameters.headers();
      return new Promise(w => {
        (0, S42.sendWithHttp)(Y, this._parameters.url, z, this._parameters.compression, this._parameters.userAgent, q, A, H => {
          w(H);
        }, K);
      });
    }
    shutdown() {}
    async _loadUtils() {
      let A = this._utils;
      if (A === null) {
        let K = new URL(this._parameters.url).protocol,
          [q, Y] = await Promise.all([this._parameters.agentFactory(K), h42(K)]);
        A = this._utils = {
          agent: q,
          request: Y
        };
      }
      return A;
    }
  }
  async function h42(A) {
    let K = A === "http:" ? import("http") : import("https"),
      {
        request: q
      } = await K;
    return q;
  }
  function b42(A) {
    return new wQ7(A);
  }
  HQ7.createHttpExporterTransport = b42;
});

// Register to shared state
__$.OQ7 = OQ7;
