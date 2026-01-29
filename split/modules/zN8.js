// Module: zN8
// Dependencies: H8, wV, Gi

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zN8 = v(YN8 => {
  var {
    _optionalChain: Jm1
  } = __$.H8();
  Object.defineProperty(YN8, "__esModule", {
    value: !0
  });
  var HD = __$.H8(),
    PtA = __$.wV(),
    xiq = __$.Gi();
  class VtA {
    static __initStatic() {
      this.id = "Apollo";
    }
    constructor(A = {
      useNestjs: !1
    }) {
      this.name = VtA.id, this._useNest = !!A.useNestjs;
    }
    loadDependency() {
      if (this._useNest) this._module = this._module || HD.loadModule("@nestjs/graphql");else this._module = this._module || HD.loadModule("apollo-server-core");
      return this._module;
    }
    setupOnce(A, K) {
      if (xiq.shouldDisableAutoInstrumentation(K)) {
        PtA.DEBUG_BUILD && HD.logger.log("Apollo Integration is skipped because of instrumenter configuration.");
        return;
      }
      if (this._useNest) {
        let q = this.loadDependency();
        if (!q) {
          PtA.DEBUG_BUILD && HD.logger.error("Apollo-NestJS Integration was unable to require @nestjs/graphql package.");
          return;
        }
        HD.fill(q.GraphQLFactory.prototype, "mergeWithSchema", function (Y) {
          return function (...z) {
            return HD.fill(this.resolversExplorerService, "explore", function (w) {
              return function () {
                let H = HD.arrayify(w.call(this));
                return qN8(H, K);
              };
            }), Y.call(this, ...z);
          };
        });
      } else {
        let q = this.loadDependency();
        if (!q) {
          PtA.DEBUG_BUILD && HD.logger.error("Apollo Integration was unable to require apollo-server-core package.");
          return;
        }
        HD.fill(q.ApolloServerBase.prototype, "constructSchema", function (Y) {
          return function () {
            if (!this.config.resolvers) {
              if (PtA.DEBUG_BUILD) {
                if (this.config.schema) HD.logger.warn("Apollo integration is not able to trace `ApolloServer` instances constructed via `schema` property.If you are using NestJS with Apollo, please use `Sentry.Integrations.Apollo({ useNestjs: true })` instead."), HD.logger.warn();else if (this.config.modules) HD.logger.warn("Apollo integration is not able to trace `ApolloServer` instances constructed via `modules` property.");
                HD.logger.error("Skipping tracing as no resolvers found on the `ApolloServer` instance.");
              }
              return Y.call(this);
            }
            let z = HD.arrayify(this.config.resolvers);
            return this.config.resolvers = qN8(z, K), Y.call(this);
          };
        });
      }
    }
  }
  VtA.__initStatic();
  function qN8(A, K) {
    return A.map(q => {
      return Object.keys(q).forEach(Y => {
        Object.keys(q[Y]).forEach(z => {
          if (typeof q[Y][z] !== "function") return;
          uiq(q, Y, z, K);
        });
      }), q;
    });
  }
  function uiq(A, K, q, Y) {
    HD.fill(A[K], q, function (z) {
      return function (...w) {
        let J = Y().getScope().getSpan(),
          O = Jm1([J, "optionalAccess", $ => $.startChild, "call", $ => $({
            description: `${K}.${q}`,
            op: "graphql.resolve",
            origin: "auto.graphql.apollo"
          })]),
          X = z.call(this, ...w);
        if (HD.isThenable(X)) return X.then($ => {
          return Jm1([O, "optionalAccess", _ => _.end, "call", _ => _()]), $;
        });
        return Jm1([O, "optionalAccess", $ => $.end, "call", $ => $()]), X;
      };
    });
  }
  YN8.Apollo = VtA;
});

// Register to shared state
__$.zN8 = zN8;
