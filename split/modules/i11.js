// Module: i11
// Dependencies: wx8, Gx8, lJ5, Zx8, iJ5, nJ5, tJ5, Lc1, UJ5, l11
//   ... and 21 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var i11 = k(() => {
  __$.wx8();
  __$.Gx8(); /*! chokidar - MIT License (c) 2012 Paul Miller (paulmillr.com) */
  __$.lJ5 = /\\/g, __$.Zx8 = /\/\//, __$.iJ5 = /\..*\.(sw[px])$|~$|\.subl.*\.tmp/, __$.nJ5 = /^\.[/\\]/;
  __$.tJ5 = Object.freeze(new Set());
  __$.Lc1 = class Lc1 extends __$.UJ5 {
    constructor(A = {}) {
      super();
      this.closed = !1, this._closers = new Map(), this._ignoredPaths = new Set(), this._throttled = new Map(), this._streams = new Set(), this._symlinkPaths = new Map(), this._watched = new Map(), this._pendingWrites = new Map(), this._pendingUnlinks = new Map(), this._readyCount = 0, this._readyEmitted = !1;
      let K = A.awaitWriteFinish,
        q = {
          stabilityThreshold: 2000,
          pollInterval: 100
        },
        Y = {
          persistent: !0,
          ignoreInitial: !1,
          ignorePermissionErrors: !1,
          interval: 100,
          binaryInterval: 300,
          followSymlinks: !0,
          usePolling: !1,
          atomic: !0,
          ...A,
          ignored: A.ignored ? __$.l11(A.ignored) : __$.l11([]),
          awaitWriteFinish: K === !0 ? q : typeof K === "object" ? {
            ...q,
            ...K
          } : !1
        };
      if (__$.$x8) Y.usePolling = !0;
      if (Y.atomic === void 0) Y.atomic = !Y.usePolling;
      let z = process.env.CHOKIDAR_USEPOLLING;
      if (z !== void 0) {
        let J = z.toLowerCase();
        if (J === "false" || J === "0") Y.usePolling = !1;else if (J === "true" || J === "1") Y.usePolling = !0;else Y.usePolling = !!J;
      }
      let w = process.env.CHOKIDAR_INTERVAL;
      if (w) Y.interval = Number.parseInt(w, 10);
      let H = 0;
      this._emitReady = () => {
        if (H++, H >= this._readyCount) this._emitReady = __$.d11, this._readyEmitted = !0, process.nextTick(() => this.emit(__$.yH.READY));
      }, this._emitRaw = (...J) => this.emit(__$.yH.RAW, ...J), this._boundRemove = this._remove.bind(this), this.options = Y, this._nodeFsHandler = new __$.Ec1(this), Object.freeze(Y);
    }
    _addIgnoredPath(A) {
      if (__$.Cc1(A)) {
        for (let K of this._ignoredPaths) if (__$.Cc1(K) && K.path === A.path && K.recursive === A.recursive) return;
      }
      this._ignoredPaths.add(A);
    }
    _removeIgnoredPath(A) {
      if (this._ignoredPaths.delete(A), typeof A === "string") {
        for (let K of this._ignoredPaths) if (__$.Cc1(K) && K.path === A) this._ignoredPaths.delete(K);
      }
    }
    add(A, K, q) {
      let {
        cwd: Y
      } = this.options;
      this.closed = !1, this._closePromise = void 0;
      let z = __$.Dx8(A);
      if (Y) z = z.map(w => {
        return __$.sJ5(w, Y);
      });
      if (z.forEach(w => {
        this._removeIgnoredPath(w);
      }), this._userIgnored = void 0, !this._readyCount) this._readyCount = 0;
      return this._readyCount += z.length, Promise.all(z.map(async w => {
        let H = await this._nodeFsHandler._addToNodeFs(w, !q, void 0, 0, K);
        if (H) this._emitReady();
        return H;
      })).then(w => {
        if (this.closed) return;
        w.forEach(H => {
          if (H) this.add(__$.h9.dirname(H), __$.h9.basename(K || H));
        });
      }), this;
    }
    unwatch(A) {
      if (this.closed) return this;
      let K = __$.Dx8(A),
        {
          cwd: q
        } = this.options;
      return K.forEach(Y => {
        if (!__$.h9.isAbsolute(Y) && !this._closers.has(Y)) {
          if (q) Y = __$.h9.join(q, Y);
          Y = __$.h9.resolve(Y);
        }
        if (this._closePath(Y), this._addIgnoredPath(Y), this._watched.has(Y)) this._addIgnoredPath({
          path: Y,
          recursive: !0
        });
        this._userIgnored = void 0;
      }), this;
    }
    close() {
      if (this._closePromise) return this._closePromise;
      this.closed = !0, this.removeAllListeners();
      let A = [];
      return this._closers.forEach(K => K.forEach(q => {
        let Y = q();
        if (Y instanceof Promise) A.push(Y);
      })), this._streams.forEach(K => K.destroy()), this._userIgnored = void 0, this._readyCount = 0, this._readyEmitted = !1, this._watched.forEach(K => K.dispose()), this._closers.clear(), this._watched.clear(), this._streams.clear(), this._symlinkPaths.clear(), this._throttled.clear(), this._closePromise = A.length ? Promise.all(A).then(() => {
        return;
      }) : Promise.resolve(), this._closePromise;
    }
    getWatched() {
      let A = {};
      return this._watched.forEach((K, q) => {
        let z = (this.options.cwd ? __$.h9.relative(this.options.cwd, q) : q) || __$.Px8;
        A[z] = K.getChildren().sort();
      }), A;
    }
    emitWithAll(A, K) {
      if (this.emit(A, ...K), A !== __$.yH.ERROR) this.emit(__$.yH.ALL, A, ...K);
    }
    async _emit(A, K, q) {
      if (this.closed) return;
      let Y = this.options;
      if (__$.vc1) K = __$.h9.normalize(K);
      if (Y.cwd) K = __$.h9.relative(Y.cwd, K);
      let z = [K];
      if (q != null) z.push(q);
      let w = Y.awaitWriteFinish,
        H;
      if (w && (H = this._pendingWrites.get(K))) return H.lastChange = new Date(), this;
      if (Y.atomic) {
        if (A === __$.yH.UNLINK) return this._pendingUnlinks.set(K, [A, ...z]), setTimeout(() => {
          this._pendingUnlinks.forEach((J, O) => {
            this.emit(...J), this.emit(__$.yH.ALL, ...J), this._pendingUnlinks.delete(O);
          });
        }, typeof Y.atomic === "number" ? Y.atomic : 100), this;
        if (A === __$.yH.ADD && this._pendingUnlinks.has(K)) A = __$.yH.CHANGE, this._pendingUnlinks.delete(K);
      }
      if (w && (A === __$.yH.ADD || A === __$.yH.CHANGE) && this._readyEmitted) {
        let J = (O, X) => {
          if (O) A = __$.yH.ERROR, z[0] = O, this.emitWithAll(A, z);else if (X) {
            if (z.length > 1) z[1] = X;else z.push(X);
            this.emitWithAll(A, z);
          }
        };
        return this._awaitWriteFinish(K, w.stabilityThreshold, A, J), this;
      }
      if (A === __$.yH.CHANGE) {
        if (!this._throttle(__$.yH.CHANGE, K, 50)) return this;
      }
      if (Y.alwaysStat && q === void 0 && (A === __$.yH.ADD || A === __$.yH.ADD_DIR || A === __$.yH.CHANGE)) {
        let J = Y.cwd ? __$.h9.join(Y.cwd, K) : K,
          O;
        try {
          O = await __$.FJ5(J);
        } catch (X) {}
        if (!O || this.closed) return;
        z.push(O);
      }
      return this.emitWithAll(A, z), this;
    }
    _handleError(A) {
      let K = A && A.code;
      if (A && K !== "ENOENT" && K !== "ENOTDIR" && (!this.options.ignorePermissionErrors || K !== "EPERM" && K !== "EACCES")) this.emit(__$.yH.ERROR, A);
      return A || this.closed;
    }
    _throttle(A, K, q) {
      if (!this._throttled.has(A)) this._throttled.set(A, new Map());
      let Y = this._throttled.get(A);
      if (!Y) throw Error("invalid throttle");
      let z = Y.get(K);
      if (z) return z.count++, !1;
      let w,
        H = () => {
          let O = Y.get(K),
            X = O ? O.count : 0;
          if (Y.delete(K), clearTimeout(w), O) clearTimeout(O.timeoutObject);
          return X;
        };
      w = setTimeout(H, q);
      let J = {
        timeoutObject: w,
        clear: H,
        count: 0
      };
      return Y.set(K, J), J;
    }
    _incrReadyCount() {
      return this._readyCount++;
    }
    _awaitWriteFinish(A, K, q, Y) {
      let z = this.options.awaitWriteFinish;
      if (typeof z !== "object") return;
      let w = z.pollInterval,
        H,
        J = A;
      if (this.options.cwd && !__$.h9.isAbsolute(A)) J = __$.h9.join(this.options.cwd, A);
      let O = new Date(),
        X = this._pendingWrites;
      function $(_) {
        __$.gJ5(J, (G, Z) => {
          if (G || !X.has(A)) {
            if (G && G.code !== "ENOENT") Y(G);
            return;
          }
          let W = Number(new Date());
          if (_ && Z.size !== _.size) X.get(A).lastChange = W;
          let D = X.get(A);
          if (W - D.lastChange >= K) X.delete(A), Y(void 0, Z);else H = setTimeout($, w, Z);
        });
      }
      if (!X.has(A)) X.set(A, {
        lastChange: O,
        cancelWait: () => {
          return X.delete(A), clearTimeout(H), q;
        }
      }), H = setTimeout($, w);
    }
    _isIgnored(A, K) {
      if (this.options.atomic && __$.iJ5.test(A)) return !0;
      if (!this._userIgnored) {
        let {
            cwd: q
          } = this.options,
          z = (this.options.ignored || []).map(__$.Mx8(q)),
          H = [...[...this._ignoredPaths].map(__$.Mx8(q)), ...z];
        this._userIgnored = __$.aJ5(H, void 0);
      }
      return this._userIgnored(A, K);
    }
    _isntIgnored(A, K) {
      return !this._isIgnored(A, K);
    }
    _getWatchHelpers(A) {
      return new __$.Nx8(A, this.options.followSymlinks, this);
    }
    _getWatchedDir(A) {
      let K = __$.h9.resolve(A);
      if (!this._watched.has(K)) this._watched.set(K, new __$.fx8(K, this._boundRemove));
      return this._watched.get(K);
    }
    _hasReadPermissions(A) {
      if (this.options.ignorePermissionErrors) return !0;
      return Boolean(Number(A.mode) & 256);
    }
    _remove(A, K, q) {
      let Y = __$.h9.join(A, K),
        z = __$.h9.resolve(Y);
      if (q = q != null ? q : this._watched.has(Y) || this._watched.has(z), !this._throttle("remove", Y, 100)) return;
      if (!q && this._watched.size === 1) this.add(A, K, !0);
      this._getWatchedDir(Y).getChildren().forEach(_ => this._remove(Y, _));
      let J = this._getWatchedDir(A),
        O = J.has(K);
      if (J.remove(K), this._symlinkPaths.has(z)) this._symlinkPaths.delete(z);
      let X = Y;
      if (this.options.cwd) X = __$.h9.relative(this.options.cwd, Y);
      if (this.options.awaitWriteFinish && this._pendingWrites.has(X)) {
        if (this._pendingWrites.get(X).cancelWait() === __$.yH.ADD) return;
      }
      this._watched.delete(Y), this._watched.delete(z);
      let $ = q ? __$.yH.UNLINK_DIR : __$.yH.UNLINK;
      if (O && !this._isIgnored(Y)) this._emit($, Y);
      this._closePath(Y);
    }
    _closePath(A) {
      this._closeFile(A);
      let K = __$.h9.dirname(A);
      this._getWatchedDir(K).remove(__$.h9.basename(A));
    }
    _closeFile(A) {
      let K = this._closers.get(A);
      if (!K) return;
      K.forEach(q => q()), this._closers.delete(A);
    }
    _addPathCloser(A, K) {
      if (!K) return;
      let q = this._closers.get(A);
      if (!q) q = [], this._closers.set(A, q);
      q.push(K);
    }
    _readdirp(A, K) {
      if (this.closed) return;
      let q = {
          type: __$.yH.ALL,
          alwaysStat: !0,
          lstat: !0,
          ...K,
          depth: 0
        },
        Y = __$.zx8(A, q);
      return this._streams.add(Y), Y.once(__$.Xx8, () => {
        Y = void 0;
      }), Y.once(__$.Tc1, () => {
        if (Y) this._streams.delete(Y), Y = void 0;
      }), Y;
    }
  };
  __$.FJA = {
    watch: __$.KO5,
    FSWatcher: __$.Lc1
  };
});

// Register to shared state
__$.i11 = i11;
