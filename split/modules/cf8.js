// Module: cf8
// Dependencies: H8, wV, Gi

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cf8 = v(df8 => {
  var {
    _optionalChain: fHA
  } = __$.H8();
  Object.defineProperty(df8, "__esModule", {
    value: !0
  });
  var NHA = __$.H8(),
    zm1 = __$.wV(),
    Piq = __$.Gi();
  class ZtA {
    static __initStatic() {
      this.id = "Postgres";
    }
    constructor(A = {}) {
      this.name = ZtA.id, this._usePgNative = !!A.usePgNative, this._module = A.module;
    }
    loadDependency() {
      return this._module = this._module || NHA.loadModule("pg");
    }
    setupOnce(A, K) {
      if (Piq.shouldDisableAutoInstrumentation(K)) {
        zm1.DEBUG_BUILD && NHA.logger.log("Postgres Integration is skipped because of instrumenter configuration.");
        return;
      }
      let q = this.loadDependency();
      if (!q) {
        zm1.DEBUG_BUILD && NHA.logger.error("Postgres Integration was unable to require `pg` package.");
        return;
      }
      let Y = this._usePgNative ? fHA([q, "access", z => z.native, "optionalAccess", z => z.Client]) : q.Client;
      if (!Y) {
        zm1.DEBUG_BUILD && NHA.logger.error("Postgres Integration was unable to access 'pg-native' bindings.");
        return;
      }
      NHA.fill(Y.prototype, "query", function (z) {
        return function (w, H, J) {
          let X = K().getScope().getSpan(),
            $ = {
              "db.system": "postgresql"
            };
          try {
            if (this.database) $["db.name"] = this.database;
            if (this.host) $["server.address"] = this.host;
            if (this.port) $["server.port"] = this.port;
            if (this.user) $["db.user"] = this.user;
          } catch (Z) {}
          let _ = fHA([X, "optionalAccess", Z => Z.startChild, "call", Z => Z({
            description: typeof w === "string" ? w : w.text,
            op: "db",
            origin: "auto.db.postgres",
            data: $
          })]);
          if (typeof J === "function") return z.call(this, w, H, function (Z, W) {
            fHA([_, "optionalAccess", D => D.end, "call", D => D()]), J(Z, W);
          });
          if (typeof H === "function") return z.call(this, w, function (Z, W) {
            fHA([_, "optionalAccess", D => D.end, "call", D => D()]), H(Z, W);
          });
          let G = typeof H < "u" ? z.call(this, w, H) : z.call(this, w);
          if (NHA.isThenable(G)) return G.then(Z => {
            return fHA([_, "optionalAccess", W => W.end, "call", W => W()]), Z;
          });
          return fHA([_, "optionalAccess", Z => Z.end, "call", Z => Z()]), G;
        };
      });
    }
  }
  ZtA.__initStatic();
  df8.Postgres = ZtA;
});

// Register to shared state
__$.cf8 = cf8;
