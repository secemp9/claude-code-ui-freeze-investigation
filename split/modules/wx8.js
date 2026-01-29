// Module: wx8
// Dependencies: YT, Pc1, jJ5, qx8, eb8, MJ5, PJ5, fJ5, Yx8, GJ5
//   ... and 10 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wx8 = k(() => {
  __$.YT = {
    FILE_TYPE: "files",
    DIR_TYPE: "directories",
    FILE_DIR_TYPE: "files_directories",
    EVERYTHING_TYPE: "all"
  }, __$.Pc1 = {
    root: ".",
    fileFilter: A => !0,
    directoryFilter: A => !0,
    type: __$.YT.FILE_TYPE,
    lstat: !1,
    depth: 2147483648,
    alwaysStat: !1,
    highWaterMark: 4096
  };
  Object.freeze(__$.Pc1);
  __$.jJ5 = new Set(["ENOENT", "EPERM", "EACCES", "ELOOP", __$.qx8]), __$.eb8 = [__$.YT.DIR_TYPE, __$.YT.EVERYTHING_TYPE, __$.YT.FILE_DIR_TYPE, __$.YT.FILE_TYPE], __$.MJ5 = new Set([__$.YT.DIR_TYPE, __$.YT.EVERYTHING_TYPE, __$.YT.FILE_DIR_TYPE]), __$.PJ5 = new Set([__$.YT.EVERYTHING_TYPE, __$.YT.FILE_DIR_TYPE, __$.YT.FILE_TYPE]), __$.fJ5 = process.platform === "win32";
  __$.Yx8 = class Yx8 extends __$.GJ5 {
    constructor(A = {}) {
      super({
        objectMode: !0,
        autoDestroy: !0,
        highWaterMark: A.highWaterMark
      });
      let K = {
          ...__$.Pc1,
          ...A
        },
        {
          root: q,
          type: Y
        } = K;
      this._fileFilter = __$.Kx8(K.fileFilter), this._directoryFilter = __$.Kx8(K.directoryFilter);
      let z = K.lstat ? __$.sb8 : __$.XJ5;
      if (__$.fJ5) this._stat = w => z(w, {
        bigint: !0
      });else this._stat = z;
      this._maxDepth = K.depth ?? __$.Pc1.depth, this._wantsDir = Y ? __$.MJ5.has(Y) : !1, this._wantsFile = Y ? __$.PJ5.has(Y) : !1, this._wantsEverything = Y === __$.YT.EVERYTHING_TYPE, this._root = __$.tb8(q), this._isDirent = !K.alwaysStat, this._statsProp = this._isDirent ? "dirent" : "stats", this._rdOptions = {
        encoding: "utf8",
        withFileTypes: this._isDirent
      }, this.parents = [this._exploreDir(q, 1)], this.reading = !1, this.parent = void 0;
    }
    async _read(A) {
      if (this.reading) return;
      this.reading = !0;
      try {
        while (!this.destroyed && A > 0) {
          let K = this.parent,
            q = K && K.files;
          if (q && q.length > 0) {
            let {
                path: Y,
                depth: z
              } = K,
              w = q.splice(0, A).map(J => this._formatEntry(J, Y)),
              H = await Promise.all(w);
            for (let J of H) {
              if (!J) continue;
              if (this.destroyed) return;
              let O = await this._getEntryType(J);
              if (O === "directory" && this._directoryFilter(J)) {
                if (z <= this._maxDepth) this.parents.push(this._exploreDir(J.fullPath, z + 1));
                if (this._wantsDir) this.push(J), A--;
              } else if ((O === "file" || this._includeAsFile(J)) && this._fileFilter(J)) {
                if (this._wantsFile) this.push(J), A--;
              }
            }
          } else {
            let Y = this.parents.pop();
            if (!Y) {
              this.push(null);
              break;
            }
            if (this.parent = await Y, this.destroyed) return;
          }
        }
      } catch (K) {
        this.destroy(K);
      } finally {
        this.reading = !1;
      }
    }
    async _exploreDir(A, K) {
      let q;
      try {
        q = await __$.$J5(A, this._rdOptions);
      } catch (Y) {
        this._onError(Y);
      }
      return {
        files: q,
        depth: K,
        path: A
      };
    }
    async _formatEntry(A, K) {
      let q,
        Y = this._isDirent ? A.name : A;
      try {
        let z = __$.tb8(__$.WJ5(K, Y));
        q = {
          path: __$.ZJ5(this._root, z),
          fullPath: z,
          basename: Y
        }, q[this._statsProp] = this._isDirent ? A : await this._stat(z);
      } catch (z) {
        this._onError(z);
        return;
      }
      return q;
    }
    _onError(A) {
      if (__$.VJ5(A) && !this.destroyed) this.emit("warn", A);else this.destroy(A);
    }
    async _getEntryType(A) {
      if (!A && this._statsProp in A) return "";
      let K = A[this._statsProp];
      if (K.isFile()) return "file";
      if (K.isDirectory()) return "directory";
      if (K && K.isSymbolicLink()) {
        let q = A.fullPath;
        try {
          let Y = await __$._J5(q),
            z = await __$.sb8(Y);
          if (z.isFile()) return "file";
          if (z.isDirectory()) {
            let w = Y.length;
            if (q.startsWith(Y) && q.substr(w, 1) === __$.DJ5) {
              let H = Error(`Circular symlink detected: "${q}" points to "${Y}"`);
              return H.code = __$.qx8, this._onError(H);
            }
            return "directory";
          }
        } catch (Y) {
          return this._onError(Y), "";
        }
      }
    }
    _includeAsFile(A) {
      let K = A && A[this._statsProp];
      return K && this._wantsEverything && !K.isDirectory();
    }
  };
});

// Register to shared state
__$.wx8 = wx8;
