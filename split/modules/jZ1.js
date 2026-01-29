// Module: jZ1
// Dependencies: Ex1, Tk7, Sk7, ef6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jZ1 = v(T$ => {
  var zC7 = T$ && T$.__createBinding || (Object.create ? function (A, K, q, Y) {
      if (Y === void 0) Y = q;
      Object.defineProperty(A, Y, {
        enumerable: !0,
        get: function () {
          return K[q];
        }
      });
    } : function (A, K, q, Y) {
      if (Y === void 0) Y = q;
      A[Y] = K[q];
    }),
    JdY = T$ && T$.__setModuleDefault || (Object.create ? function (A, K) {
      Object.defineProperty(A, "default", {
        enumerable: !0,
        value: K
      });
    } : function (A, K) {
      A.default = K;
    }),
    wC7 = T$ && T$.__importStar || function (A) {
      if (A && A.__esModule) return A;
      var K = {};
      if (A != null) {
        for (var q in A) if (q !== "default" && Object.prototype.hasOwnProperty.call(A, q)) zC7(K, A, q);
      }
      return JdY(K, A), K;
    },
    OdY = T$ && T$.__exportStar || function (A, K) {
      for (var q in A) if (q !== "default" && !Object.prototype.hasOwnProperty.call(K, q)) zC7(K, A, q);
    },
    XdY = T$ && T$.__importDefault || function (A) {
      return A && A.__esModule ? A : {
        default: A
      };
    };
  Object.defineProperty(T$, "__esModule", {
    value: !0
  });
  T$.supportsLanguage = T$.listLanguages = T$.highlight = void 0;
  var DZ1 = wC7(__$.Ex1()),
    $dY = wC7(__$.Tk7()),
    _dY = XdY(__$.Sk7()),
    WZ1 = __$.ef6();
  function AN6(A, K, q) {
    if (K === void 0) K = {};
    switch (A.type) {
      case "text":
        {
          var Y = A.data;
          if (q === void 0) return (K.default || WZ1.DEFAULT_THEME.default || WZ1.plain)(Y);
          return Y;
        }
      case "tag":
        {
          var z = /hljs-(\w+)/.exec(A.attribs.class);
          if (z) {
            var w = z[1],
              H = A.childNodes.map(function (J) {
                return AN6(J, K, w);
              }).join("");
            return (K[w] || WZ1.DEFAULT_THEME[w] || WZ1.plain)(H);
          }
          return A.childNodes.map(function (J) {
            return AN6(J, K);
          }).join("");
        }
    }
    throw Error("Invalid node type " + A.type);
  }
  function GdY(A, K) {
    if (K === void 0) K = {};
    var q = $dY.parseFragment(A, {
      treeAdapter: _dY.default
    });
    return q.childNodes.map(function (Y) {
      return AN6(Y, K);
    }).join("");
  }
  function HC7(A, K) {
    if (K === void 0) K = {};
    var q;
    if (K.language) q = DZ1.highlight(A, {
      language: K.language,
      ignoreIllegals: K.ignoreIllegals
    }).value;else q = DZ1.highlightAuto(A, K.languageSubset).value;
    return GdY(q, K.theme);
  }
  T$.highlight = HC7;
  function ZdY() {
    return DZ1.listLanguages();
  }
  T$.listLanguages = ZdY;
  function WdY(A) {
    return !!DZ1.getLanguage(A);
  }
  T$.supportsLanguage = WdY;
  T$.default = HC7;
  OdY(__$.ef6(), T$);
});

// Register to shared state
__$.jZ1 = jZ1;
