// Module: AmA
// Dependencies: dI, oD7, A2H, $RY, O_1, $_1, eD7, qj7, __1, _RY
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var AmA = k(() => {
  __$.dI.prototype = {
    diff: function (K, q) {
      var Y,
        z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        w = z.callback;
      if (typeof z === "function") w = z, z = {};
      var H = this;
      function J(N) {
        if (N = H.postProcess(N, z), w) return setTimeout(function () {
          w(N);
        }, 0), !0;else return N;
      }
      K = this.castInput(K, z), q = this.castInput(q, z), K = this.removeEmpty(this.tokenize(K, z)), q = this.removeEmpty(this.tokenize(q, z));
      var O = q.length,
        X = K.length,
        $ = 1,
        _ = O + X;
      if (z.maxEditLength != null) _ = Math.min(_, z.maxEditLength);
      var G = (Y = z.timeout) !== null && Y !== void 0 ? Y : 1 / 0,
        Z = Date.now() + G,
        W = [{
          oldPos: -1,
          lastComponent: void 0
        }],
        D = this.extractCommon(W[0], q, K, 0, z);
      if (W[0].oldPos + 1 >= X && D + 1 >= O) return J(__$.oD7(H, W[0].lastComponent, q, K, H.useLongestToken));
      var j = -1 / 0,
        M = 1 / 0;
      function P() {
        for (var N = Math.max(j, -$); N <= Math.min(M, $); N += 2) {
          var T = void 0,
            C = W[N - 1],
            R = W[N + 1];
          if (C) W[N - 1] = void 0;
          var x = !1;
          if (R) {
            var y = R.oldPos - N;
            x = R && 0 <= y && y < O;
          }
          var B = C && C.oldPos + 1 < X;
          if (!x && !B) {
            W[N] = void 0;
            continue;
          }
          if (!B || x && C.oldPos < R.oldPos) T = H.addToPath(R, !0, !1, 0, z);else T = H.addToPath(C, !1, !0, 1, z);
          if (D = H.extractCommon(T, q, K, N, z), T.oldPos + 1 >= X && D + 1 >= O) return J(__$.oD7(H, T.lastComponent, q, K, H.useLongestToken));else {
            if (W[N] = T, T.oldPos + 1 >= X) M = Math.min(M, N - 1);
            if (D + 1 >= O) j = Math.max(j, N + 1);
          }
        }
        $++;
      }
      if (w) (function N() {
        setTimeout(function () {
          if ($ > _ || Date.now() > Z) return w();
          if (!P()) N();
        }, 0);
      })();else while ($ <= _ && Date.now() <= Z) {
        var f = P();
        if (f) return f;
      }
    },
    addToPath: function (K, q, Y, z, w) {
      var H = K.lastComponent;
      if (H && !w.oneChangePerToken && H.added === q && H.removed === Y) return {
        oldPos: K.oldPos + z,
        lastComponent: {
          count: H.count + 1,
          added: q,
          removed: Y,
          previousComponent: H.previousComponent
        }
      };else return {
        oldPos: K.oldPos + z,
        lastComponent: {
          count: 1,
          added: q,
          removed: Y,
          previousComponent: H
        }
      };
    },
    extractCommon: function (K, q, Y, z, w) {
      var H = q.length,
        J = Y.length,
        O = K.oldPos,
        X = O - z,
        $ = 0;
      while (X + 1 < H && O + 1 < J && this.equals(Y[O + 1], q[X + 1], w)) if (X++, O++, $++, w.oneChangePerToken) K.lastComponent = {
        count: 1,
        previousComponent: K.lastComponent,
        added: !1,
        removed: !1
      };
      if ($ && !w.oneChangePerToken) K.lastComponent = {
        count: $,
        previousComponent: K.lastComponent,
        added: !1,
        removed: !1
      };
      return K.oldPos = O, X;
    },
    equals: function (K, q, Y) {
      if (Y.comparator) return Y.comparator(K, q);else return K === q || Y.ignoreCase && K.toLowerCase() === q.toLowerCase();
    },
    removeEmpty: function (K) {
      var q = [];
      for (var Y = 0; Y < K.length; Y++) if (K[Y]) q.push(K[Y]);
      return q;
    },
    castInput: function (K) {
      return K;
    },
    tokenize: function (K) {
      return Array.from(K);
    },
    join: function (K) {
      return K.join("");
    },
    postProcess: function (K) {
      return K;
    }
  };
  __$.A2H = new __$.dI();
  __$.$RY = new RegExp("[".concat(__$.O_1, "]+|\\s+|[^").concat(__$.O_1, "]"), "ug"), __$.$_1 = new __$.dI();
  __$.$_1.equals = function (A, K, q) {
    if (q.ignoreCase) A = A.toLowerCase(), K = K.toLowerCase();
    return A.trim() === K.trim();
  };
  __$.$_1.tokenize = function (A) {
    var K = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      q;
    if (K.intlSegmenter) {
      if (K.intlSegmenter.resolvedOptions().granularity != "word") throw Error('The segmenter passed must have a granularity of "word"');
      q = Array.from(K.intlSegmenter.segment(A), function (w) {
        return w.segment;
      });
    } else q = A.match(__$.$RY) || [];
    var Y = [],
      z = null;
    return q.forEach(function (w) {
      if (/\s/.test(w)) {
        if (z == null) Y.push(w);else Y.push(Y.pop() + w);
      } else if (/\s/.test(z)) {
        if (Y[Y.length - 1] == z) Y.push(Y.pop() + w);else Y.push(z + w);
      } else Y.push(w);
      z = w;
    }), Y;
  };
  __$.$_1.join = function (A) {
    return A.map(function (K, q) {
      if (q == 0) return K;else return K.replace(/^\s+/, "");
    }).join("");
  };
  __$.$_1.postProcess = function (A, K) {
    if (!A || K.oneChangePerToken) return A;
    var q = null,
      Y = null,
      z = null;
    if (A.forEach(function (w) {
      if (w.added) Y = w;else if (w.removed) z = w;else {
        if (Y || z) __$.eD7(q, z, Y, w);
        q = w, Y = null, z = null;
      }
    }), Y || z) __$.eD7(q, z, Y, null);
    return A;
  };
  __$.qj7 = new __$.dI();
  __$.qj7.tokenize = function (A) {
    var K = new RegExp("(\\r?\\n)|[".concat(__$.O_1, "]+|[^\\S\\n\\r]+|[^").concat(__$.O_1, "]"), "ug");
    return A.match(K) || [];
  };
  __$.__1 = new __$.dI();
  __$.__1.tokenize = function (A, K) {
    if (K.stripTrailingCr) A = A.replace(/\r\n/g, `
`);
    var q = [],
      Y = A.split(/(\n|\r\n)/);
    if (!Y[Y.length - 1]) Y.pop();
    for (var z = 0; z < Y.length; z++) {
      var w = Y[z];
      if (z % 2 && !K.newlineIsToken) q[q.length - 1] += w;else q.push(w);
    }
    return q;
  };
  __$.__1.equals = function (A, K, q) {
    if (q.ignoreWhitespace) {
      if (!q.newlineIsToken || !A.includes(`
`)) A = A.trim();
      if (!q.newlineIsToken || !K.includes(`
`)) K = K.trim();
    } else if (q.ignoreNewlineAtEof && !q.newlineIsToken) {
      if (A.endsWith(`
`)) A = A.slice(0, -1);
      if (K.endsWith(`
`)) K = K.slice(0, -1);
    }
    return __$.dI.prototype.equals.call(this, A, K, q);
  };
  __$._RY = new __$.dI();
  __$._RY.tokenize = function (A) {
    return A.split(/(\S.+?[.!?])(?=\s+|$)/);
  };
  __$.GRY = new __$.dI();
  __$.GRY.tokenize = function (A) {
    return A.split(/([{}:;,]|\s+)/);
  };
  __$.tBA = new __$.dI();
  __$.tBA.useLongestToken = !0;
  __$.tBA.tokenize = __$.__1.tokenize;
  __$.tBA.castInput = function (A, K) {
    var {
        undefinedReplacement: q,
        stringifyReplacer: Y
      } = K,
      z = Y === void 0 ? function (w, H) {
        return typeof H > "u" ? q : H;
      } : Y;
    return typeof A === "string" ? A : JSON.stringify(__$.cM6(A, null, null, z), z, "  ");
  };
  __$.tBA.equals = function (A, K, q) {
    return __$.dI.prototype.equals.call(__$.tBA, A.replace(/,([\r\n])/g, "$1"), K.replace(/,([\r\n])/g, "$1"), q);
  };
  __$.lM6 = new __$.dI();
  __$.lM6.tokenize = function (A) {
    return A.slice();
  };
  __$.lM6.join = __$.lM6.removeEmpty = function (A) {
    return A;
  };
});

// Register to shared state
__$.AmA = AmA;
