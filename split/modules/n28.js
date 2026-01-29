// Module: n28
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var n28 = v((ZEz, i28) => {
  var qi = CA("constants"),
    EWq = process.cwd,
    toA = null,
    kWq = process.env.GRACEFUL_FS_PLATFORM || process.platform;
  process.cwd = function () {
    if (!toA) toA = EWq.call(process);
    return toA;
  };
  try {
    process.cwd();
  } catch (A) {}
  if (typeof process.chdir === "function") {
    if (eoA = process.chdir, process.chdir = function (A) {
      toA = null, eoA.call(process, A);
    }, Object.setPrototypeOf) Object.setPrototypeOf(process.chdir, eoA);
  }
  var eoA;
  i28.exports = CWq;
  function CWq(A) {
    if (qi.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) K(A);
    if (!A.lutimes) q(A);
    if (A.chown = w(A.chown), A.fchown = w(A.fchown), A.lchown = w(A.lchown), A.chmod = Y(A.chmod), A.fchmod = Y(A.fchmod), A.lchmod = Y(A.lchmod), A.chownSync = H(A.chownSync), A.fchownSync = H(A.fchownSync), A.lchownSync = H(A.lchownSync), A.chmodSync = z(A.chmodSync), A.fchmodSync = z(A.fchmodSync), A.lchmodSync = z(A.lchmodSync), A.stat = J(A.stat), A.fstat = J(A.fstat), A.lstat = J(A.lstat), A.statSync = O(A.statSync), A.fstatSync = O(A.fstatSync), A.lstatSync = O(A.lstatSync), A.chmod && !A.lchmod) A.lchmod = function ($, _, G) {
      if (G) process.nextTick(G);
    }, A.lchmodSync = function () {};
    if (A.chown && !A.lchown) A.lchown = function ($, _, G, Z) {
      if (Z) process.nextTick(Z);
    }, A.lchownSync = function () {};
    if (kWq === "win32") A.rename = typeof A.rename !== "function" ? A.rename : function ($) {
      function _(G, Z, W) {
        var D = Date.now(),
          j = 0;
        $(G, Z, function M(P) {
          if (P && (P.code === "EACCES" || P.code === "EPERM" || P.code === "EBUSY") && Date.now() - D < 60000) {
            if (setTimeout(function () {
              A.stat(Z, function (f, N) {
                if (f && f.code === "ENOENT") $(G, Z, M);else W(P);
              });
            }, j), j < 100) j += 10;
            return;
          }
          if (W) W(P);
        });
      }
      if (Object.setPrototypeOf) Object.setPrototypeOf(_, $);
      return _;
    }(A.rename);
    A.read = typeof A.read !== "function" ? A.read : function ($) {
      function _(G, Z, W, D, j, M) {
        var P;
        if (M && typeof M === "function") {
          var f = 0;
          P = function (N, T, C) {
            if (N && N.code === "EAGAIN" && f < 10) return f++, $.call(A, G, Z, W, D, j, P);
            M.apply(this, arguments);
          };
        }
        return $.call(A, G, Z, W, D, j, P);
      }
      if (Object.setPrototypeOf) Object.setPrototypeOf(_, $);
      return _;
    }(A.read), A.readSync = typeof A.readSync !== "function" ? A.readSync : function ($) {
      return function (_, G, Z, W, D) {
        var j = 0;
        while (!0) try {
          return $.call(A, _, G, Z, W, D);
        } catch (M) {
          if (M.code === "EAGAIN" && j < 10) {
            j++;
            continue;
          }
          throw M;
        }
      };
    }(A.readSync);
    function K($) {
      $.lchmod = function (_, G, Z) {
        $.open(_, qi.O_WRONLY | qi.O_SYMLINK, G, function (W, D) {
          if (W) {
            if (Z) Z(W);
            return;
          }
          $.fchmod(D, G, function (j) {
            $.close(D, function (M) {
              if (Z) Z(j || M);
            });
          });
        });
      }, $.lchmodSync = function (_, G) {
        var Z = $.openSync(_, qi.O_WRONLY | qi.O_SYMLINK, G),
          W = !0,
          D;
        try {
          D = $.fchmodSync(Z, G), W = !1;
        } finally {
          if (W) try {
            $.closeSync(Z);
          } catch (j) {} else $.closeSync(Z);
        }
        return D;
      };
    }
    function q($) {
      if (qi.hasOwnProperty("O_SYMLINK") && $.futimes) $.lutimes = function (_, G, Z, W) {
        $.open(_, qi.O_SYMLINK, function (D, j) {
          if (D) {
            if (W) W(D);
            return;
          }
          $.futimes(j, G, Z, function (M) {
            $.close(j, function (P) {
              if (W) W(M || P);
            });
          });
        });
      }, $.lutimesSync = function (_, G, Z) {
        var W = $.openSync(_, qi.O_SYMLINK),
          D,
          j = !0;
        try {
          D = $.futimesSync(W, G, Z), j = !1;
        } finally {
          if (j) try {
            $.closeSync(W);
          } catch (M) {} else $.closeSync(W);
        }
        return D;
      };else if ($.futimes) $.lutimes = function (_, G, Z, W) {
        if (W) process.nextTick(W);
      }, $.lutimesSync = function () {};
    }
    function Y($) {
      if (!$) return $;
      return function (_, G, Z) {
        return $.call(A, _, G, function (W) {
          if (X(W)) W = null;
          if (Z) Z.apply(this, arguments);
        });
      };
    }
    function z($) {
      if (!$) return $;
      return function (_, G) {
        try {
          return $.call(A, _, G);
        } catch (Z) {
          if (!X(Z)) throw Z;
        }
      };
    }
    function w($) {
      if (!$) return $;
      return function (_, G, Z, W) {
        return $.call(A, _, G, Z, function (D) {
          if (X(D)) D = null;
          if (W) W.apply(this, arguments);
        });
      };
    }
    function H($) {
      if (!$) return $;
      return function (_, G, Z) {
        try {
          return $.call(A, _, G, Z);
        } catch (W) {
          if (!X(W)) throw W;
        }
      };
    }
    function J($) {
      if (!$) return $;
      return function (_, G, Z) {
        if (typeof G === "function") Z = G, G = null;
        function W(D, j) {
          if (j) {
            if (j.uid < 0) j.uid += 4294967296;
            if (j.gid < 0) j.gid += 4294967296;
          }
          if (Z) Z.apply(this, arguments);
        }
        return G ? $.call(A, _, G, W) : $.call(A, _, W);
      };
    }
    function O($) {
      if (!$) return $;
      return function (_, G) {
        var Z = G ? $.call(A, _, G) : $.call(A, _);
        if (Z) {
          if (Z.uid < 0) Z.uid += 4294967296;
          if (Z.gid < 0) Z.gid += 4294967296;
        }
        return Z;
      };
    }
    function X($) {
      if (!$) return !0;
      if ($.code === "ENOSYS") return !0;
      var _ = !process.getuid || process.getuid() !== 0;
      if (_) {
        if ($.code === "EINVAL" || $.code === "EPERM") return !0;
      }
      return !1;
    }
  }
});

// Register to shared state
__$.n28 = n28;
