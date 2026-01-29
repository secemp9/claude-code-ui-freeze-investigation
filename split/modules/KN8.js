// Module: KN8
// Dependencies: H8, wV, Gi

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var KN8 = v(AN8 => {
  var {
    _optionalChain: THA
  } = __$.H8();
  Object.defineProperty(AN8, "__esModule", {
    value: !0
  });
  var xvA = __$.H8(),
    ef8 = __$.wV(),
    hiq = __$.Gi();
  class MtA {
    static __initStatic() {
      this.id = "GraphQL";
    }
    constructor() {
      this.name = MtA.id;
    }
    loadDependency() {
      return this._module = this._module || xvA.loadModule("graphql/execution/execute.js");
    }
    setupOnce(A, K) {
      if (hiq.shouldDisableAutoInstrumentation(K)) {
        ef8.DEBUG_BUILD && xvA.logger.log("GraphQL Integration is skipped because of instrumenter configuration.");
        return;
      }
      let q = this.loadDependency();
      if (!q) {
        ef8.DEBUG_BUILD && xvA.logger.error("GraphQL Integration was unable to require graphql/execution package.");
        return;
      }
      xvA.fill(q, "execute", function (Y) {
        return function (...z) {
          let w = K().getScope(),
            H = w.getSpan(),
            J = THA([H, "optionalAccess", X => X.startChild, "call", X => X({
              description: "execute",
              op: "graphql.execute",
              origin: "auto.graphql.graphql"
            })]);
          THA([w, "optionalAccess", X => X.setSpan, "call", X => X(J)]);
          let O = Y.call(this, ...z);
          if (xvA.isThenable(O)) return O.then(X => {
            return THA([J, "optionalAccess", $ => $.end, "call", $ => $()]), THA([w, "optionalAccess", $ => $.setSpan, "call", $ => $(H)]), X;
          });
          return THA([J, "optionalAccess", X => X.end, "call", X => X()]), THA([w, "optionalAccess", X => X.setSpan, "call", X => X(H)]), O;
        };
      });
    }
  }
  MtA.__initStatic();
  AN8.GraphQL = MtA;
});

// Register to shared state
__$.KN8 = KN8;
