// Module: KC7
// Dependencies: mk7, Qk7, pk7, nk7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var KC7 = v((Q_H, AC7) => {
  var imA = __$.mk7(),
    {
      stdout: af6,
      stderr: sf6
    } = __$.Qk7(),
    {
      stringReplaceAll: epY,
      stringEncaseCRLFWithFirstIndex: AdY
    } = __$.pk7(),
    {
      isArray: $Z1
    } = Array,
    ok7 = ["ansi", "ansi", "ansi256", "ansi16m"],
    oWA = Object.create(null),
    KdY = (A, K = {}) => {
      if (K.level && !(Number.isInteger(K.level) && K.level >= 0 && K.level <= 3)) throw Error("The `level` option should be an integer from 0 to 3");
      let q = af6 ? af6.level : 0;
      A.level = K.level === void 0 ? q : K.level;
    };
  class ak7 {
    constructor(A) {
      return sk7(A);
    }
  }
  var sk7 = A => {
    let K = {};
    return KdY(K, A), K.template = (...q) => ek7(K.template, ...q), Object.setPrototypeOf(K, _Z1.prototype), Object.setPrototypeOf(K.template, K), K.template.constructor = () => {
      throw Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
    }, K.template.Instance = ak7, K.template;
  };
  function _Z1(A) {
    return sk7(A);
  }
  for (let [A, K] of Object.entries(imA)) oWA[A] = {
    get() {
      let q = GZ1(this, tf6(K.open, K.close, this._styler), this._isEmpty);
      return Object.defineProperty(this, A, {
        value: q
      }), q;
    }
  };
  oWA.visible = {
    get() {
      let A = GZ1(this, this._styler, !0);
      return Object.defineProperty(this, "visible", {
        value: A
      }), A;
    }
  };
  var tk7 = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
  for (let A of tk7) oWA[A] = {
    get() {
      let {
        level: K
      } = this;
      return function (...q) {
        let Y = tf6(imA.color[ok7[K]][A](...q), imA.color.close, this._styler);
        return GZ1(this, Y, this._isEmpty);
      };
    }
  };
  for (let A of tk7) {
    let K = "bg" + A[0].toUpperCase() + A.slice(1);
    oWA[K] = {
      get() {
        let {
          level: q
        } = this;
        return function (...Y) {
          let z = tf6(imA.bgColor[ok7[q]][A](...Y), imA.bgColor.close, this._styler);
          return GZ1(this, z, this._isEmpty);
        };
      }
    };
  }
  var qdY = Object.defineProperties(() => {}, {
      ...oWA,
      level: {
        enumerable: !0,
        get() {
          return this._generator.level;
        },
        set(A) {
          this._generator.level = A;
        }
      }
    }),
    tf6 = (A, K, q) => {
      let Y, z;
      if (q === void 0) Y = A, z = K;else Y = q.openAll + A, z = K + q.closeAll;
      return {
        open: A,
        close: K,
        openAll: Y,
        closeAll: z,
        parent: q
      };
    },
    GZ1 = (A, K, q) => {
      let Y = (...z) => {
        if ($Z1(z[0]) && $Z1(z[0].raw)) return rk7(Y, ek7(Y, ...z));
        return rk7(Y, z.length === 1 ? "" + z[0] : z.join(" "));
      };
      return Object.setPrototypeOf(Y, qdY), Y._generator = A, Y._styler = K, Y._isEmpty = q, Y;
    },
    rk7 = (A, K) => {
      if (A.level <= 0 || !K) return A._isEmpty ? "" : K;
      let q = A._styler;
      if (q === void 0) return K;
      let {
        openAll: Y,
        closeAll: z
      } = q;
      if (K.indexOf("\x1B") !== -1) while (q !== void 0) K = epY(K, q.close, q.open), q = q.parent;
      let w = K.indexOf(`
`);
      if (w !== -1) K = AdY(K, z, Y, w);
      return Y + K + z;
    },
    of6,
    ek7 = (A, ...K) => {
      let [q] = K;
      if (!$Z1(q) || !$Z1(q.raw)) return K.join(" ");
      let Y = K.slice(1),
        z = [q.raw[0]];
      for (let w = 1; w < q.length; w++) z.push(String(Y[w - 1]).replace(/[{}\\]/g, "\\$&"), String(q.raw[w]));
      if (of6 === void 0) of6 = __$.nk7();
      return of6(A, z.join(""));
    };
  Object.defineProperties(_Z1.prototype, oWA);
  var ZZ1 = _Z1();
  ZZ1.supportsColor = af6;
  ZZ1.stderr = _Z1({
    level: sf6 ? sf6.level : 0
  });
  ZZ1.stderr.supportsColor = sf6;
  AC7.exports = ZZ1;
});

// Register to shared state
__$.KC7 = KC7;
