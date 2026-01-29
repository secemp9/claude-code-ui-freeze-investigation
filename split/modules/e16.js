// Module: e16
// Dependencies: m74

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var e16 = v(GT => {
  var F74 = GT && GT.__createBinding || (Object.create ? function (A, K, q, Y) {
      if (Y === void 0) Y = q;
      var z = Object.getOwnPropertyDescriptor(K, q);
      if (!z || ("get" in z ? !K.__esModule : z.writable || z.configurable)) z = {
        enumerable: !0,
        get: function () {
          return K[q];
        }
      };
      Object.defineProperty(A, Y, z);
    } : function (A, K, q, Y) {
      if (Y === void 0) Y = q;
      A[Y] = K[q];
    }),
    Ju3 = GT && GT.__setModuleDefault || (Object.create ? function (A, K) {
      Object.defineProperty(A, "default", {
        enumerable: !0,
        value: K
      });
    } : function (A, K) {
      A.default = K;
    }),
    Q74 = GT && GT.__importStar || function (A) {
      if (A && A.__esModule) return A;
      var K = {};
      if (A != null) {
        for (var q in A) if (q !== "default" && Object.prototype.hasOwnProperty.call(A, q)) F74(K, A, q);
      }
      return Ju3(K, A), K;
    },
    Ou3 = GT && GT.__exportStar || function (A, K) {
      for (var q in A) if (q !== "default" && !Object.prototype.hasOwnProperty.call(K, q)) F74(K, A, q);
    };
  Object.defineProperty(GT, "__esModule", {
    value: !0
  });
  GT.Agent = void 0;
  var Xu3 = Q74(CA("net")),
    g74 = Q74(CA("http")),
    $u3 = CA("https");
  Ou3(__$.m74(), GT);
  var Jx = Symbol("AgentBaseInternalState");
  class U74 extends g74.Agent {
    constructor(A) {
      super(A);
      this[Jx] = {};
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
    incrementSockets(A) {
      if (this.maxSockets === 1 / 0 && this.maxTotalSockets === 1 / 0) return null;
      if (!this.sockets[A]) this.sockets[A] = [];
      let K = new Xu3.Socket({
        writable: !1
      });
      return this.sockets[A].push(K), this.totalSocketCount++, K;
    }
    decrementSockets(A, K) {
      if (!this.sockets[A] || K === null) return;
      let q = this.sockets[A],
        Y = q.indexOf(K);
      if (Y !== -1) {
        if (q.splice(Y, 1), this.totalSocketCount--, q.length === 0) delete this.sockets[A];
      }
    }
    getName(A) {
      if (typeof A.secureEndpoint === "boolean" ? A.secureEndpoint : this.isSecureEndpoint(A)) return $u3.Agent.prototype.getName.call(this, A);
      return super.getName(A);
    }
    createSocket(A, K, q) {
      let Y = {
          ...K,
          secureEndpoint: this.isSecureEndpoint(K)
        },
        z = this.getName(Y),
        w = this.incrementSockets(z);
      Promise.resolve().then(() => this.connect(A, Y)).then(H => {
        if (this.decrementSockets(z, w), H instanceof g74.Agent) try {
          return H.addRequest(A, Y);
        } catch (J) {
          return q(J);
        }
        this[Jx].currentSocket = H, super.createSocket(A, K, q);
      }, H => {
        this.decrementSockets(z, w), q(H);
      });
    }
    createConnection() {
      let A = this[Jx].currentSocket;
      if (this[Jx].currentSocket = void 0, !A) throw Error("No socket was returned in the `connect()` function");
      return A;
    }
    get defaultPort() {
      return this[Jx].defaultPort ?? (this.protocol === "https:" ? 443 : 80);
    }
    set defaultPort(A) {
      if (this[Jx]) this[Jx].defaultPort = A;
    }
    get protocol() {
      return this[Jx].protocol ?? (this.isSecureEndpoint() ? "https:" : "http:");
    }
    set protocol(A) {
      if (this[Jx]) this[Jx].protocol = A;
    }
  }
  GT.Agent = U74;
});

// Register to shared state
__$.e16 = e16;
