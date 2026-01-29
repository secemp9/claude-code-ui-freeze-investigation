// Module: tx8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tx8 = v(Z05 => {
  var $CA = {
      REQUEST_ID: Symbol.for("_AWS_LAMBDA_REQUEST_ID"),
      X_RAY_TRACE_ID: Symbol.for("_AWS_LAMBDA_X_RAY_TRACE_ID"),
      TENANT_ID: Symbol.for("_AWS_LAMBDA_TENANT_ID")
    },
    oc1 = ["true", "1"].includes(process.env?.AWS_LAMBDA_NODEJS_NO_GLOBAL_AWSLAMBDA ?? "");
  if (!oc1) globalThis.awslambda = globalThis.awslambda || {};
  class K61 {
    static PROTECTED_KEYS = $CA;
    isProtectedKey(A) {
      return Object.values($CA).includes(A);
    }
    getRequestId() {
      return this.get($CA.REQUEST_ID) ?? "-";
    }
    getXRayTraceId() {
      return this.get($CA.X_RAY_TRACE_ID);
    }
    getTenantId() {
      return this.get($CA.TENANT_ID);
    }
  }
  class sx8 extends K61 {
    currentContext;
    getContext() {
      return this.currentContext;
    }
    hasContext() {
      return this.currentContext !== void 0;
    }
    get(A) {
      return this.currentContext?.[A];
    }
    set(A, K) {
      if (this.isProtectedKey(A)) throw Error(`Cannot modify protected Lambda context field: ${String(A)}`);
      this.currentContext = this.currentContext || {}, this.currentContext[A] = K;
    }
    run(A, K) {
      this.currentContext = A;
      try {
        return K();
      } finally {
        this.currentContext = void 0;
      }
    }
  }
  class sc1 extends K61 {
    als;
    static async create() {
      let A = new sc1(),
        K = await import("node:async_hooks");
      return A.als = new K.AsyncLocalStorage(), A;
    }
    getContext() {
      return this.als.getStore();
    }
    hasContext() {
      return this.als.getStore() !== void 0;
    }
    get(A) {
      return this.als.getStore()?.[A];
    }
    set(A, K) {
      if (this.isProtectedKey(A)) throw Error(`Cannot modify protected Lambda context field: ${String(A)}`);
      let q = this.als.getStore();
      if (!q) throw Error("No context available");
      q[A] = K;
    }
    run(A, K) {
      return this.als.run(A, K);
    }
  }
  Z05.InvokeStore = void 0;
  (function (A) {
    let K = null;
    async function q() {
      if (!K) K = (async () => {
        let z = "AWS_LAMBDA_MAX_CONCURRENCY" in process.env ? await sc1.create() : new sx8();
        if (!oc1 && globalThis.awslambda?.InvokeStore) return globalThis.awslambda.InvokeStore;else if (!oc1 && globalThis.awslambda) return globalThis.awslambda.InvokeStore = z, z;else return z;
      })();
      return K;
    }
    A.getInstanceAsync = q, A._testing = process.env.AWS_LAMBDA_BENCHMARK_MODE === "1" ? {
      reset: () => {
        if (K = null, globalThis.awslambda?.InvokeStore) delete globalThis.awslambda.InvokeStore;
        globalThis.awslambda = {};
      }
    } : void 0;
  })(Z05.InvokeStore || (Z05.InvokeStore = {}));
  Z05.InvokeStoreBase = K61;
});

// Register to shared state
__$.tx8 = tx8;
