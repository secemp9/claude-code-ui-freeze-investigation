// Module: Q$7
// Dependencies: V1A, S$7, LD6, B$7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Q$7 = v(g$7 => {
  Object.defineProperty(g$7, "__esModule", {
    value: !0
  });
  g$7.Walker = void 0;
  var YNY = __$.V1A(),
    xX1 = __$.S$7(),
    La = CA("path"),
    xC = __$.LD6(),
    yD6 = __$.B$7(),
    _p = YNY("flora-colossus");
  class m$7 {
    constructor(A) {
      if (this.modules = [], this.walkHistory = new Set(), this.cache = null, !A || typeof A !== "string") throw Error("modulePath must be provided as a string");
      _p(`creating walker with rootModule=${A}`), this.rootModule = A;
    }
    relativeModule(A, K) {
      return La.resolve(A, "node_modules", K);
    }
    async loadPackageJSON(A) {
      let K = La.resolve(A, "package.json");
      if (await xX1.pathExists(K)) {
        let q = await xX1.readJson(K);
        if (!q.dependencies) q.dependencies = {};
        if (!q.devDependencies) q.devDependencies = {};
        if (!q.optionalDependencies) q.optionalDependencies = {};
        return q;
      }
      return null;
    }
    async walkDependenciesForModuleInModule(A, K, q) {
      let Y = K,
        z = null,
        w = null;
      while (!z && this.relativeModule(Y, A) !== w) if (w = this.relativeModule(Y, A), await xX1.pathExists(w)) z = w;else {
        if (La.basename(La.dirname(Y)) !== "node_modules") Y = La.dirname(Y);
        Y = La.dirname(La.dirname(Y));
      }
      if (!z && q !== xC.DepType.OPTIONAL && q !== xC.DepType.DEV_OPTIONAL) throw Error(`Failed to locate module "${A}" from "${K}"

        This normally means that either you have deleted this package already somehow (check your ignore settings if using electron-packager).  Or your module installation failed.`);
      if (z) await this.walkDependenciesForModule(z, q);
    }
    async detectNativeModuleType(A, K) {
      if (K.dependencies["prebuild-install"]) return yD6.NativeModuleType.PREBUILD;else if (await xX1.pathExists(La.join(A, "binding.gyp"))) return yD6.NativeModuleType.NODE_GYP;
      return yD6.NativeModuleType.NONE;
    }
    async walkDependenciesForModule(A, K) {
      if (_p("walk reached:", A, " Type is:", xC.DepType[K]), this.walkHistory.has(A)) {
        _p("already walked this route");
        let Y = this.modules.find(z => z.path === A);
        if ((0, xC.depTypeGreater)(K, Y.depType)) _p(`existing module has a type of "${Y.depType}", new module type would be "${K}" therefore updating`), Y.depType = K;
        return;
      }
      let q = await this.loadPackageJSON(A);
      if (!q) {
        _p("walk hit a dead end, this module is incomplete");
        return;
      }
      this.walkHistory.add(A), this.modules.push({
        depType: K,
        nativeModuleType: await this.detectNativeModuleType(A, q),
        path: A,
        name: q.name
      });
      for (let Y in q.dependencies) {
        if (Y in q.optionalDependencies) {
          _p(`found ${Y} in prod deps of ${A} but it is also marked optional`);
          continue;
        }
        await this.walkDependenciesForModuleInModule(Y, A, (0, xC.childDepType)(K, xC.DepType.PROD));
      }
      for (let Y in q.optionalDependencies) await this.walkDependenciesForModuleInModule(Y, A, (0, xC.childDepType)(K, xC.DepType.OPTIONAL));
      if (K === xC.DepType.ROOT) {
        _p("we're still at the beginning, walking down the dev route");
        for (let Y in q.devDependencies) await this.walkDependenciesForModuleInModule(Y, A, (0, xC.childDepType)(K, xC.DepType.DEV));
      }
    }
    async walkTree() {
      if (_p("starting tree walk"), !this.cache) this.cache = new Promise(async (A, K) => {
        this.modules = [];
        try {
          await this.walkDependenciesForModule(this.rootModule, xC.DepType.ROOT);
        } catch (q) {
          K(q);
          return;
        }
        A(this.modules);
      });else _p("tree walk in progress / completed already, waiting for existing walk to complete");
      return await this.cache;
    }
    getRootModule() {
      return this.rootModule;
    }
  }
  g$7.Walker = m$7;
});

// Register to shared state
__$.Q$7 = Q$7;
