// Module: iT8
// Dependencies: H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iT8 = v(lT8 => {
  var {
    _nullishCoalesce: pT8
  } = __$.H8();
  Object.defineProperty(lT8, "__esModule", {
    value: !0
  });
  var dT8 = CA("http");
  CA("https");
  var Vb = Symbol("AgentBaseInternalState");
  class cT8 extends dT8.Agent {
    constructor(A) {
      super(A);
      this[Vb] = {};
    }
    isSecureEndpoint(A) {
      if (A) {
        if (typeof A.secureEndpoint === "boolean") return A.secureEndpoint;
        if (typeof A.protocol === "string") return A.protocol === "https:";
      }
      let {
        stack: K
      } = Error();
      if (typeof K !== "string") return !1;
      return K.split(`
`).some(q => q.indexOf("(https.js:") !== -1 || q.indexOf("node:https:") !== -1);
    }
    createSocket(A, K, q) {
      let Y = {
        ...K,
        secureEndpoint: this.isSecureEndpoint(K)
      };
      Promise.resolve().then(() => this.connect(A, Y)).then(z => {
        if (z instanceof dT8.Agent) return z.addRequest(A, Y);
        this[Vb].currentSocket = z, super.createSocket(A, K, q);
      }, q);
    }
    createConnection() {
      let A = this[Vb].currentSocket;
      if (this[Vb].currentSocket = void 0, !A) throw Error("No socket was returned in the `connect()` function");
      return A;
    }
    get defaultPort() {
      return pT8(this[Vb].defaultPort, () => this.protocol === "https:" ? 443 : 80);
    }
    set defaultPort(A) {
      if (this[Vb]) this[Vb].defaultPort = A;
    }
    get protocol() {
      return pT8(this[Vb].protocol, () => this.isSecureEndpoint() ? "https:" : "http:");
    }
    set protocol(A) {
      if (this[Vb]) this[Vb].protocol = A;
    }
  }
  lT8.Agent = cT8;
});

// Register to shared state
__$.iT8 = iT8;
