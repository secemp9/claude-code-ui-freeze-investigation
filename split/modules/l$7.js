// Module: l$7
// Dependencies: m07, ID6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var l$7 = v(d$7 => {
  Object.defineProperty(d$7, "__esModule", {
    value: !0
  });
  d$7.DestroyerOfModules = void 0;
  var uX1 = __$.m07(),
    EZA = CA("path"),
    SD6 = __$.ID6();
  class p$7 {
    constructor({
      rootDirectory: A,
      walker: K,
      shouldKeepModuleTest: q
    }) {
      if (A) this.walker = new SD6.Walker(A);else if (K) this.walker = K;else throw Error("Must either provide rootDirectory or walker argument");
      if (q) this.shouldKeepFn = q;
    }
    async destroyModule(A, K) {
      if (K.get(A)) {
        let Y = EZA.resolve(A, "node_modules");
        if (!(await uX1.pathExists(Y))) return;
        for (let z of await uX1.readdir(Y)) if (z.startsWith("@")) for (let w of await uX1.readdir(EZA.resolve(Y, z))) await this.destroyModule(EZA.resolve(Y, z, w), K);else await this.destroyModule(EZA.resolve(Y, z), K);
      } else await uX1.remove(A);
    }
    async collectKeptModules({
      relativePaths: A = !1
    }) {
      let K = await this.walker.walkTree(),
        q = new Map(),
        Y = EZA.resolve(this.walker.getRootModule());
      for (let z of K) if (this.shouldKeepModule(z)) {
        let w = z.path;
        if (A) w = w.replace(`${Y}${EZA.sep}`, "");
        q.set(w, z);
      }
      return q;
    }
    async destroy() {
      await this.destroyModule(this.walker.getRootModule(), await this.collectKeptModules({
        relativePaths: !1
      }));
    }
    shouldKeepModule(A) {
      let K = A.depType === SD6.DepType.DEV || A.depType === SD6.DepType.DEV_OPTIONAL;
      return this.shouldKeepFn ? this.shouldKeepFn(A, K) : !K;
    }
  }
  d$7.DestroyerOfModules = p$7;
});

// Register to shared state
__$.l$7 = l$7;
