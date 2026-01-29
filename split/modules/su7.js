// Module: su7
// Dependencies: hgA, RK, nu7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var su7 = v(ou7 => {
  Object.defineProperty(ou7, "__esModule", {
    value: !0
  });
  ou7.MetricStorageRegistry = void 0;
  var J12 = __$.hgA(),
    ru7 = __$.RK(),
    KD1 = __$.nu7();
  class Sv6 {
    _sharedRegistry = new Map();
    _perCollectorRegistry = new Map();
    static create() {
      return new Sv6();
    }
    getStorages(A) {
      let K = [];
      for (let Y of this._sharedRegistry.values()) K = K.concat(Y);
      let q = this._perCollectorRegistry.get(A);
      if (q != null) for (let Y of q.values()) K = K.concat(Y);
      return K;
    }
    register(A) {
      this._registerStorage(A, this._sharedRegistry);
    }
    registerForCollector(A, K) {
      let q = this._perCollectorRegistry.get(A);
      if (q == null) q = new Map(), this._perCollectorRegistry.set(A, q);
      this._registerStorage(K, q);
    }
    findOrUpdateCompatibleStorage(A) {
      let K = this._sharedRegistry.get(A.name);
      if (K === void 0) return null;
      return this._findOrUpdateCompatibleStorage(A, K);
    }
    findOrUpdateCompatibleCollectorStorage(A, K) {
      let q = this._perCollectorRegistry.get(A);
      if (q === void 0) return null;
      let Y = q.get(K.name);
      if (Y === void 0) return null;
      return this._findOrUpdateCompatibleStorage(K, Y);
    }
    _registerStorage(A, K) {
      let q = A.getInstrumentDescriptor(),
        Y = K.get(q.name);
      if (Y === void 0) {
        K.set(q.name, [A]);
        return;
      }
      Y.push(A);
    }
    _findOrUpdateCompatibleStorage(A, K) {
      let q = null;
      for (let Y of K) {
        let z = Y.getInstrumentDescriptor();
        if ((0, J12.isDescriptorCompatibleWith)(z, A)) {
          if (z.description !== A.description) {
            if (A.description.length > z.description.length) Y.updateDescription(A.description);
            ru7.diag.warn("A view or instrument with the name ", A.name, ` has already been registered, but has a different description and is incompatible with another registered view.
`, `Details:
`, (0, KD1.getIncompatibilityDetails)(z, A), `The longer description will be used.
To resolve the conflict:`, (0, KD1.getConflictResolutionRecipe)(z, A));
          }
          q = Y;
        } else ru7.diag.warn("A view or instrument with the name ", A.name, ` has already been registered and is incompatible with another registered view.
`, `Details:
`, (0, KD1.getIncompatibilityDetails)(z, A), `To resolve the conflict:
`, (0, KD1.getConflictResolutionRecipe)(z, A));
      }
      return q;
    }
  }
  ou7.MetricStorageRegistry = Sv6;
});

// Register to shared state
__$.su7 = su7;
