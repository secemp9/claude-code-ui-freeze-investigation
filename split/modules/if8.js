// Module: if8
// Dependencies: H8, wV, Gi

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var if8 = v(lf8 => {
  var {
    _optionalChain: fiq
  } = __$.H8();
  Object.defineProperty(lf8, "__esModule", {
    value: !0
  });
  var hvA = __$.H8(),
    wm1 = __$.wV(),
    Niq = __$.Gi();
  class WtA {
    static __initStatic() {
      this.id = "Mysql";
    }
    constructor() {
      this.name = WtA.id;
    }
    loadDependency() {
      return this._module = this._module || hvA.loadModule("mysql/lib/Connection.js");
    }
    setupOnce(A, K) {
      if (Niq.shouldDisableAutoInstrumentation(K)) {
        wm1.DEBUG_BUILD && hvA.logger.log("Mysql Integration is skipped because of instrumenter configuration.");
        return;
      }
      let q = this.loadDependency();
      if (!q) {
        wm1.DEBUG_BUILD && hvA.logger.error("Mysql Integration was unable to require `mysql` package.");
        return;
      }
      let Y = void 0;
      try {
        q.prototype.connect = new Proxy(q.prototype.connect, {
          apply(H, J, O) {
            if (!Y) Y = J.config;
            return H.apply(J, O);
          }
        });
      } catch (H) {
        wm1.DEBUG_BUILD && hvA.logger.error("Mysql Integration was unable to instrument `mysql` config.");
      }
      function z() {
        if (!Y) return {};
        return {
          "server.address": Y.host,
          "server.port": Y.port,
          "db.user": Y.user
        };
      }
      function w(H) {
        if (!H) return;
        let J = z();
        Object.keys(J).forEach(O => {
          H.setAttribute(O, J[O]);
        }), H.end();
      }
      hvA.fill(q, "createQuery", function (H) {
        return function (J, O, X) {
          let _ = K().getScope().getSpan(),
            G = fiq([_, "optionalAccess", W => W.startChild, "call", W => W({
              description: typeof J === "string" ? J : J.sql,
              op: "db",
              origin: "auto.db.mysql",
              data: {
                "db.system": "mysql"
              }
            })]);
          if (typeof X === "function") return H.call(this, J, O, function (W, D, j) {
            w(G), X(W, D, j);
          });
          if (typeof O === "function") return H.call(this, J, function (W, D, j) {
            w(G), O(W, D, j);
          });
          let Z = H.call(this, J, O);
          return Z.on("end", () => {
            w(G);
          }), Z;
        };
      });
    }
  }
  WtA.__initStatic();
  lf8.Mysql = WtA;
});

// Register to shared state
__$.if8 = if8;
