// Module: mY1
// Dependencies: Tx4, BY6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mY1 = v((djw, yx4) => {
  var S$A = __$.Tx4(),
    hT = __$.BY6(),
    Rx4 = ["keyword", "gray", "hex"],
    mY6 = {};
  for (let A of Object.keys(hT)) mY6[[...hT[A].labels].sort().join("")] = A;
  var BY1 = {};
  function WG(A, K) {
    if (!(this instanceof WG)) return new WG(A, K);
    if (K && K in Rx4) K = null;
    if (K && !(K in hT)) throw Error("Unknown model: " + K);
    let q, Y;
    if (A == null) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;else if (A instanceof WG) this.model = A.model, this.color = [...A.color], this.valpha = A.valpha;else if (typeof A === "string") {
      let z = S$A.get(A);
      if (z === null) throw Error("Unable to parse color from string: " + A);
      this.model = z.model, Y = hT[this.model].channels, this.color = z.value.slice(0, Y), this.valpha = typeof z.value[Y] === "number" ? z.value[Y] : 1;
    } else if (A.length > 0) {
      this.model = K || "rgb", Y = hT[this.model].channels;
      let z = Array.prototype.slice.call(A, 0, Y);
      this.color = gY6(z, Y), this.valpha = typeof A[Y] === "number" ? A[Y] : 1;
    } else if (typeof A === "number") this.model = "rgb", this.color = [A >> 16 & 255, A >> 8 & 255, A & 255], this.valpha = 1;else {
      this.valpha = 1;
      let z = Object.keys(A);
      if ("alpha" in A) z.splice(z.indexOf("alpha"), 1), this.valpha = typeof A.alpha === "number" ? A.alpha : 0;
      let w = z.sort().join("");
      if (!(w in mY6)) throw Error("Unable to parse color from object: " + JSON.stringify(A));
      this.model = mY6[w];
      let {
          labels: H
        } = hT[this.model],
        J = [];
      for (q = 0; q < H.length; q++) J.push(A[H[q]]);
      this.color = gY6(J);
    }
    if (BY1[this.model]) {
      Y = hT[this.model].channels;
      for (q = 0; q < Y; q++) {
        let z = BY1[this.model][q];
        if (z) this.color[q] = z(this.color[q]);
      }
    }
    if (this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze) Object.freeze(this);
  }
  WG.prototype = {
    toString() {
      return this.string();
    },
    toJSON() {
      return this[this.model]();
    },
    string(A) {
      let K = this.model in S$A.to ? this : this.rgb();
      K = K.round(typeof A === "number" ? A : 1);
      let q = K.valpha === 1 ? K.color : [...K.color, this.valpha];
      return S$A.to[K.model](q);
    },
    percentString(A) {
      let K = this.rgb().round(typeof A === "number" ? A : 1),
        q = K.valpha === 1 ? K.color : [...K.color, this.valpha];
      return S$A.to.rgb.percent(q);
    },
    array() {
      return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
    },
    object() {
      let A = {},
        {
          channels: K
        } = hT[this.model],
        {
          labels: q
        } = hT[this.model];
      for (let Y = 0; Y < K; Y++) A[q[Y]] = this.color[Y];
      if (this.valpha !== 1) A.alpha = this.valpha;
      return A;
    },
    unitArray() {
      let A = this.rgb().color;
      if (A[0] /= 255, A[1] /= 255, A[2] /= 255, this.valpha !== 1) A.push(this.valpha);
      return A;
    },
    unitObject() {
      let A = this.rgb().object();
      if (A.r /= 255, A.g /= 255, A.b /= 255, this.valpha !== 1) A.alpha = this.valpha;
      return A;
    },
    round(A) {
      return A = Math.max(A || 0, 0), new WG([...this.color.map(Ik9(A)), this.valpha], this.model);
    },
    alpha(A) {
      if (A !== void 0) return new WG([...this.color, Math.max(0, Math.min(1, A))], this.model);
      return this.valpha;
    },
    red: tO("rgb", 0, O_(255)),
    green: tO("rgb", 1, O_(255)),
    blue: tO("rgb", 2, O_(255)),
    hue: tO(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, A => (A % 360 + 360) % 360),
    saturationl: tO("hsl", 1, O_(100)),
    lightness: tO("hsl", 2, O_(100)),
    saturationv: tO("hsv", 1, O_(100)),
    value: tO("hsv", 2, O_(100)),
    chroma: tO("hcg", 1, O_(100)),
    gray: tO("hcg", 2, O_(100)),
    white: tO("hwb", 1, O_(100)),
    wblack: tO("hwb", 2, O_(100)),
    cyan: tO("cmyk", 0, O_(100)),
    magenta: tO("cmyk", 1, O_(100)),
    yellow: tO("cmyk", 2, O_(100)),
    black: tO("cmyk", 3, O_(100)),
    x: tO("xyz", 0, O_(95.047)),
    y: tO("xyz", 1, O_(100)),
    z: tO("xyz", 2, O_(108.833)),
    l: tO("lab", 0, O_(100)),
    a: tO("lab", 1),
    b: tO("lab", 2),
    keyword(A) {
      if (A !== void 0) return new WG(A);
      return hT[this.model].keyword(this.color);
    },
    hex(A) {
      if (A !== void 0) return new WG(A);
      return S$A.to.hex(this.rgb().round().color);
    },
    hexa(A) {
      if (A !== void 0) return new WG(A);
      let K = this.rgb().round().color,
        q = Math.round(this.valpha * 255).toString(16).toUpperCase();
      if (q.length === 1) q = "0" + q;
      return S$A.to.hex(K) + q;
    },
    rgbNumber() {
      let A = this.rgb().color;
      return (A[0] & 255) << 16 | (A[1] & 255) << 8 | A[2] & 255;
    },
    luminosity() {
      let A = this.rgb().color,
        K = [];
      for (let [q, Y] of A.entries()) {
        let z = Y / 255;
        K[q] = z <= 0.04045 ? z / 12.92 : ((z + 0.055) / 1.055) ** 2.4;
      }
      return 0.2126 * K[0] + 0.7152 * K[1] + 0.0722 * K[2];
    },
    contrast(A) {
      let K = this.luminosity(),
        q = A.luminosity();
      if (K > q) return (K + 0.05) / (q + 0.05);
      return (q + 0.05) / (K + 0.05);
    },
    level(A) {
      let K = this.contrast(A);
      if (K >= 7) return "AAA";
      return K >= 4.5 ? "AA" : "";
    },
    isDark() {
      let A = this.rgb().color;
      return (A[0] * 2126 + A[1] * 7152 + A[2] * 722) / 1e4 < 128;
    },
    isLight() {
      return !this.isDark();
    },
    negate() {
      let A = this.rgb();
      for (let K = 0; K < 3; K++) A.color[K] = 255 - A.color[K];
      return A;
    },
    lighten(A) {
      let K = this.hsl();
      return K.color[2] += K.color[2] * A, K;
    },
    darken(A) {
      let K = this.hsl();
      return K.color[2] -= K.color[2] * A, K;
    },
    saturate(A) {
      let K = this.hsl();
      return K.color[1] += K.color[1] * A, K;
    },
    desaturate(A) {
      let K = this.hsl();
      return K.color[1] -= K.color[1] * A, K;
    },
    whiten(A) {
      let K = this.hwb();
      return K.color[1] += K.color[1] * A, K;
    },
    blacken(A) {
      let K = this.hwb();
      return K.color[2] += K.color[2] * A, K;
    },
    grayscale() {
      let A = this.rgb().color,
        K = A[0] * 0.3 + A[1] * 0.59 + A[2] * 0.11;
      return WG.rgb(K, K, K);
    },
    fade(A) {
      return this.alpha(this.valpha - this.valpha * A);
    },
    opaquer(A) {
      return this.alpha(this.valpha + this.valpha * A);
    },
    rotate(A) {
      let K = this.hsl(),
        q = K.color[0];
      return q = (q + A) % 360, q = q < 0 ? 360 + q : q, K.color[0] = q, K;
    },
    mix(A, K) {
      if (!A || !A.rgb) throw Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof A);
      let q = A.rgb(),
        Y = this.rgb(),
        z = K === void 0 ? 0.5 : K,
        w = 2 * z - 1,
        H = q.alpha() - Y.alpha(),
        J = ((w * H === -1 ? w : (w + H) / (1 + w * H)) + 1) / 2,
        O = 1 - J;
      return WG.rgb(J * q.red() + O * Y.red(), J * q.green() + O * Y.green(), J * q.blue() + O * Y.blue(), q.alpha() * z + Y.alpha() * (1 - z));
    }
  };
  for (let A of Object.keys(hT)) {
    if (Rx4.includes(A)) continue;
    let {
      channels: K
    } = hT[A];
    WG.prototype[A] = function (...q) {
      if (this.model === A) return new WG(this);
      if (q.length > 0) return new WG(q, A);
      return new WG([...Sk9(hT[this.model][A].raw(this.color)), this.valpha], A);
    }, WG[A] = function (...q) {
      let Y = q[0];
      if (typeof Y === "number") Y = gY6(q, K);
      return new WG(Y, A);
    };
  }
  function yk9(A, K) {
    return Number(A.toFixed(K));
  }
  function Ik9(A) {
    return function (K) {
      return yk9(K, A);
    };
  }
  function tO(A, K, q) {
    A = Array.isArray(A) ? A : [A];
    for (let Y of A) (BY1[Y] || (BY1[Y] = []))[K] = q;
    return A = A[0], function (Y) {
      let z;
      if (Y !== void 0) {
        if (q) Y = q(Y);
        return z = this[A](), z.color[K] = Y, z;
      }
      if (z = this[A]().color[K], q) z = q(z);
      return z;
    };
  }
  function O_(A) {
    return function (K) {
      return Math.max(0, Math.min(A, K));
    };
  }
  function Sk9(A) {
    return Array.isArray(A) ? A : [A];
  }
  function gY6(A, K) {
    for (let q = 0; q < K; q++) if (typeof A[q] !== "number") A[q] = 0;
    return A;
  }
  yx4.exports = WG;
});

// Register to shared state
__$.mY1 = mY1;
