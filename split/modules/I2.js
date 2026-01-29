// Module: I2
// Dependencies: n28, a28, t28

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var I2 = v((jEz, Ub1) => {
  var AO = CA("fs"),
    IWq = __$.n28(),
    SWq = __$.a28(),
    hWq = __$.t28(),
    AaA = CA("util"),
    fZ,
    qaA;
  if (typeof Symbol === "function" && typeof Symbol.for === "function") fZ = Symbol.for("graceful-fs.queue"), qaA = Symbol.for("graceful-fs.previous");else fZ = "___graceful-fs.queue", qaA = "___graceful-fs.previous";
  function bWq() {}
  function Az8(A, K) {
    Object.defineProperty(A, fZ, {
      get: function () {
        return K;
      }
    });
  }
  var x1A = bWq;
  if (AaA.debuglog) x1A = AaA.debuglog("gfs4");else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) x1A = function () {
    var A = AaA.format.apply(AaA, arguments);
    A = "GFS4: " + A.split(/\n/).join(`
GFS4: `), console.error(A);
  };
  if (!AO[fZ]) {
    if (gb1 = global[fZ] || [], Az8(AO, gb1), AO.close = function (A) {
      function K(q, Y) {
        return A.call(AO, q, function (z) {
          if (!z) e28();
          if (typeof Y === "function") Y.apply(this, arguments);
        });
      }
      return Object.defineProperty(K, qaA, {
        value: A
      }), K;
    }(AO.close), AO.closeSync = function (A) {
      function K(q) {
        A.apply(AO, arguments), e28();
      }
      return Object.defineProperty(K, qaA, {
        value: A
      }), K;
    }(AO.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) process.on("exit", function () {
      x1A(AO[fZ]), CA("assert").equal(AO[fZ].length, 0);
    });
  }
  var gb1;
  if (!global[fZ]) Az8(global, AO[fZ]);
  Ub1.exports = Fb1(hWq(AO));
  if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !AO.__patched) Ub1.exports = Fb1(AO), AO.__patched = !0;
  function Fb1(A) {
    IWq(A), A.gracefulify = Fb1, A.createReadStream = T, A.createWriteStream = C;
    var K = A.readFile;
    A.readFile = q;
    function q(y, B, b) {
      if (typeof B === "function") b = B, B = null;
      return F(y, B, b);
      function F(Q, u, d, r) {
        return K(Q, u, function (c) {
          if (c && (c.code === "EMFILE" || c.code === "ENFILE")) mwA([F, [Q, u, d], c, r || Date.now(), Date.now()]);else if (typeof d === "function") d.apply(this, arguments);
        });
      }
    }
    var Y = A.writeFile;
    A.writeFile = z;
    function z(y, B, b, F) {
      if (typeof b === "function") F = b, b = null;
      return Q(y, B, b, F);
      function Q(u, d, r, c, YA) {
        return Y(u, d, r, function (e) {
          if (e && (e.code === "EMFILE" || e.code === "ENFILE")) mwA([Q, [u, d, r, c], e, YA || Date.now(), Date.now()]);else if (typeof c === "function") c.apply(this, arguments);
        });
      }
    }
    var w = A.appendFile;
    if (w) A.appendFile = H;
    function H(y, B, b, F) {
      if (typeof b === "function") F = b, b = null;
      return Q(y, B, b, F);
      function Q(u, d, r, c, YA) {
        return w(u, d, r, function (e) {
          if (e && (e.code === "EMFILE" || e.code === "ENFILE")) mwA([Q, [u, d, r, c], e, YA || Date.now(), Date.now()]);else if (typeof c === "function") c.apply(this, arguments);
        });
      }
    }
    var J = A.copyFile;
    if (J) A.copyFile = O;
    function O(y, B, b, F) {
      if (typeof b === "function") F = b, b = 0;
      return Q(y, B, b, F);
      function Q(u, d, r, c, YA) {
        return J(u, d, r, function (e) {
          if (e && (e.code === "EMFILE" || e.code === "ENFILE")) mwA([Q, [u, d, r, c], e, YA || Date.now(), Date.now()]);else if (typeof c === "function") c.apply(this, arguments);
        });
      }
    }
    var X = A.readdir;
    A.readdir = _;
    var $ = /^v[0-5]\./;
    function _(y, B, b) {
      if (typeof B === "function") b = B, B = null;
      var F = $.test(process.version) ? function (d, r, c, YA) {
        return X(d, Q(d, r, c, YA));
      } : function (d, r, c, YA) {
        return X(d, r, Q(d, r, c, YA));
      };
      return F(y, B, b);
      function Q(u, d, r, c) {
        return function (YA, e) {
          if (YA && (YA.code === "EMFILE" || YA.code === "ENFILE")) mwA([F, [u, d, r], YA, c || Date.now(), Date.now()]);else {
            if (e && e.sort) e.sort();
            if (typeof r === "function") r.call(this, YA, e);
          }
        };
      }
    }
    if (process.version.substr(0, 4) === "v0.8") {
      var G = SWq(A);
      M = G.ReadStream, f = G.WriteStream;
    }
    var Z = A.ReadStream;
    if (Z) M.prototype = Object.create(Z.prototype), M.prototype.open = P;
    var W = A.WriteStream;
    if (W) f.prototype = Object.create(W.prototype), f.prototype.open = N;
    Object.defineProperty(A, "ReadStream", {
      get: function () {
        return M;
      },
      set: function (y) {
        M = y;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(A, "WriteStream", {
      get: function () {
        return f;
      },
      set: function (y) {
        f = y;
      },
      enumerable: !0,
      configurable: !0
    });
    var D = M;
    Object.defineProperty(A, "FileReadStream", {
      get: function () {
        return D;
      },
      set: function (y) {
        D = y;
      },
      enumerable: !0,
      configurable: !0
    });
    var j = f;
    Object.defineProperty(A, "FileWriteStream", {
      get: function () {
        return j;
      },
      set: function (y) {
        j = y;
      },
      enumerable: !0,
      configurable: !0
    });
    function M(y, B) {
      if (this instanceof M) return Z.apply(this, arguments), this;else return M.apply(Object.create(M.prototype), arguments);
    }
    function P() {
      var y = this;
      x(y.path, y.flags, y.mode, function (B, b) {
        if (B) {
          if (y.autoClose) y.destroy();
          y.emit("error", B);
        } else y.fd = b, y.emit("open", b), y.read();
      });
    }
    function f(y, B) {
      if (this instanceof f) return W.apply(this, arguments), this;else return f.apply(Object.create(f.prototype), arguments);
    }
    function N() {
      var y = this;
      x(y.path, y.flags, y.mode, function (B, b) {
        if (B) y.destroy(), y.emit("error", B);else y.fd = b, y.emit("open", b);
      });
    }
    function T(y, B) {
      return new A.ReadStream(y, B);
    }
    function C(y, B) {
      return new A.WriteStream(y, B);
    }
    var R = A.open;
    A.open = x;
    function x(y, B, b, F) {
      if (typeof b === "function") F = b, b = null;
      return Q(y, B, b, F);
      function Q(u, d, r, c, YA) {
        return R(u, d, r, function (e, qA) {
          if (e && (e.code === "EMFILE" || e.code === "ENFILE")) mwA([Q, [u, d, r, c], e, YA || Date.now(), Date.now()]);else if (typeof c === "function") c.apply(this, arguments);
        });
      }
    }
    return A;
  }
  function mwA(A) {
    x1A("ENQUEUE", A[0].name, A[1]), AO[fZ].push(A), Qb1();
  }
  var KaA;
  function e28() {
    var A = Date.now();
    for (var K = 0; K < AO[fZ].length; ++K) if (AO[fZ][K].length > 2) AO[fZ][K][3] = A, AO[fZ][K][4] = A;
    Qb1();
  }
  function Qb1() {
    if (clearTimeout(KaA), KaA = void 0, AO[fZ].length === 0) return;
    var A = AO[fZ].shift(),
      K = A[0],
      q = A[1],
      Y = A[2],
      z = A[3],
      w = A[4];
    if (z === void 0) x1A("RETRY", K.name, q), K.apply(null, q);else if (Date.now() - z >= 60000) {
      x1A("TIMEOUT", K.name, q);
      var H = q.pop();
      if (typeof H === "function") H.call(null, Y);
    } else {
      var J = Date.now() - w,
        O = Math.max(w - z, 1),
        X = Math.min(O * 1.2, 100);
      if (J >= X) x1A("RETRY", K.name, q), K.apply(null, q.concat([z]));else AO[fZ].push(A);
    }
    if (KaA === void 0) KaA = setTimeout(Qb1, 0);
  }
});

// Register to shared state
__$.I2 = I2;
