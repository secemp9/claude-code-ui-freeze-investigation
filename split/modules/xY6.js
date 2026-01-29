// Module: xY6
// Dependencies: bY6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xY6 = v((Qjw, Ex4) => {
  var NSA = __$.bY6(),
    vx4 = {};
  for (let A of Object.keys(NSA)) vx4[NSA[A]] = A;
  var HK = {
    rgb: {
      channels: 3,
      labels: "rgb"
    },
    hsl: {
      channels: 3,
      labels: "hsl"
    },
    hsv: {
      channels: 3,
      labels: "hsv"
    },
    hwb: {
      channels: 3,
      labels: "hwb"
    },
    cmyk: {
      channels: 4,
      labels: "cmyk"
    },
    xyz: {
      channels: 3,
      labels: "xyz"
    },
    lab: {
      channels: 3,
      labels: "lab"
    },
    lch: {
      channels: 3,
      labels: "lch"
    },
    hex: {
      channels: 1,
      labels: ["hex"]
    },
    keyword: {
      channels: 1,
      labels: ["keyword"]
    },
    ansi16: {
      channels: 1,
      labels: ["ansi16"]
    },
    ansi256: {
      channels: 1,
      labels: ["ansi256"]
    },
    hcg: {
      channels: 3,
      labels: ["h", "c", "g"]
    },
    apple: {
      channels: 3,
      labels: ["r16", "g16", "b16"]
    },
    gray: {
      channels: 1,
      labels: ["gray"]
    }
  };
  Ex4.exports = HK;
  for (let A of Object.keys(HK)) {
    if (!("channels" in HK[A])) throw Error("missing channels property: " + A);
    if (!("labels" in HK[A])) throw Error("missing channel labels property: " + A);
    if (HK[A].labels.length !== HK[A].channels) throw Error("channel and label counts mismatch: " + A);
    let {
      channels: K,
      labels: q
    } = HK[A];
    delete HK[A].channels, delete HK[A].labels, Object.defineProperty(HK[A], "channels", {
      value: K
    }), Object.defineProperty(HK[A], "labels", {
      value: q
    });
  }
  HK.rgb.hsl = function (A) {
    let K = A[0] / 255,
      q = A[1] / 255,
      Y = A[2] / 255,
      z = Math.min(K, q, Y),
      w = Math.max(K, q, Y),
      H = w - z,
      J,
      O;
    if (w === z) J = 0;else if (K === w) J = (q - Y) / H;else if (q === w) J = 2 + (Y - K) / H;else if (Y === w) J = 4 + (K - q) / H;
    if (J = Math.min(J * 60, 360), J < 0) J += 360;
    let X = (z + w) / 2;
    if (w === z) O = 0;else if (X <= 0.5) O = H / (w + z);else O = H / (2 - w - z);
    return [J, O * 100, X * 100];
  };
  HK.rgb.hsv = function (A) {
    let K,
      q,
      Y,
      z,
      w,
      H = A[0] / 255,
      J = A[1] / 255,
      O = A[2] / 255,
      X = Math.max(H, J, O),
      $ = X - Math.min(H, J, O),
      _ = function (G) {
        return (X - G) / 6 / $ + 0.5;
      };
    if ($ === 0) z = 0, w = 0;else {
      if (w = $ / X, K = _(H), q = _(J), Y = _(O), H === X) z = Y - q;else if (J === X) z = 0.3333333333333333 + K - Y;else if (O === X) z = 0.6666666666666666 + q - K;
      if (z < 0) z += 1;else if (z > 1) z -= 1;
    }
    return [z * 360, w * 100, X * 100];
  };
  HK.rgb.hwb = function (A) {
    let K = A[0],
      q = A[1],
      Y = A[2],
      z = HK.rgb.hsl(A)[0],
      w = 0.00392156862745098 * Math.min(K, Math.min(q, Y));
    return Y = 1 - 0.00392156862745098 * Math.max(K, Math.max(q, Y)), [z, w * 100, Y * 100];
  };
  HK.rgb.cmyk = function (A) {
    let K = A[0] / 255,
      q = A[1] / 255,
      Y = A[2] / 255,
      z = Math.min(1 - K, 1 - q, 1 - Y),
      w = (1 - K - z) / (1 - z) || 0,
      H = (1 - q - z) / (1 - z) || 0,
      J = (1 - Y - z) / (1 - z) || 0;
    return [w * 100, H * 100, J * 100, z * 100];
  };
  function fk9(A, K) {
    return (A[0] - K[0]) ** 2 + (A[1] - K[1]) ** 2 + (A[2] - K[2]) ** 2;
  }
  HK.rgb.keyword = function (A) {
    let K = vx4[A];
    if (K) return K;
    let q = 1 / 0,
      Y;
    for (let z of Object.keys(NSA)) {
      let w = NSA[z],
        H = fk9(A, w);
      if (H < q) q = H, Y = z;
    }
    return Y;
  };
  HK.keyword.rgb = function (A) {
    return NSA[A];
  };
  HK.rgb.xyz = function (A) {
    let K = A[0] / 255,
      q = A[1] / 255,
      Y = A[2] / 255;
    K = K > 0.04045 ? ((K + 0.055) / 1.055) ** 2.4 : K / 12.92, q = q > 0.04045 ? ((q + 0.055) / 1.055) ** 2.4 : q / 12.92, Y = Y > 0.04045 ? ((Y + 0.055) / 1.055) ** 2.4 : Y / 12.92;
    let z = K * 0.4124 + q * 0.3576 + Y * 0.1805,
      w = K * 0.2126 + q * 0.7152 + Y * 0.0722,
      H = K * 0.0193 + q * 0.1192 + Y * 0.9505;
    return [z * 100, w * 100, H * 100];
  };
  HK.rgb.lab = function (A) {
    let K = HK.rgb.xyz(A),
      q = K[0],
      Y = K[1],
      z = K[2];
    q /= 95.047, Y /= 100, z /= 108.883, q = q > 0.008856 ? q ** 0.3333333333333333 : 7.787 * q + 0.13793103448275862, Y = Y > 0.008856 ? Y ** 0.3333333333333333 : 7.787 * Y + 0.13793103448275862, z = z > 0.008856 ? z ** 0.3333333333333333 : 7.787 * z + 0.13793103448275862;
    let w = 116 * Y - 16,
      H = 500 * (q - Y),
      J = 200 * (Y - z);
    return [w, H, J];
  };
  HK.hsl.rgb = function (A) {
    let K = A[0] / 360,
      q = A[1] / 100,
      Y = A[2] / 100,
      z,
      w,
      H;
    if (q === 0) return H = Y * 255, [H, H, H];
    if (Y < 0.5) z = Y * (1 + q);else z = Y + q - Y * q;
    let J = 2 * Y - z,
      O = [0, 0, 0];
    for (let X = 0; X < 3; X++) {
      if (w = K + 0.3333333333333333 * -(X - 1), w < 0) w++;
      if (w > 1) w--;
      if (6 * w < 1) H = J + (z - J) * 6 * w;else if (2 * w < 1) H = z;else if (3 * w < 2) H = J + (z - J) * (0.6666666666666666 - w) * 6;else H = J;
      O[X] = H * 255;
    }
    return O;
  };
  HK.hsl.hsv = function (A) {
    let K = A[0],
      q = A[1] / 100,
      Y = A[2] / 100,
      z = q,
      w = Math.max(Y, 0.01);
    Y *= 2, q *= Y <= 1 ? Y : 2 - Y, z *= w <= 1 ? w : 2 - w;
    let H = (Y + q) / 2,
      J = Y === 0 ? 2 * z / (w + z) : 2 * q / (Y + q);
    return [K, J * 100, H * 100];
  };
  HK.hsv.rgb = function (A) {
    let K = A[0] / 60,
      q = A[1] / 100,
      Y = A[2] / 100,
      z = Math.floor(K) % 6,
      w = K - Math.floor(K),
      H = 255 * Y * (1 - q),
      J = 255 * Y * (1 - q * w),
      O = 255 * Y * (1 - q * (1 - w));
    switch (Y *= 255, z) {
      case 0:
        return [Y, O, H];
      case 1:
        return [J, Y, H];
      case 2:
        return [H, Y, O];
      case 3:
        return [H, J, Y];
      case 4:
        return [O, H, Y];
      case 5:
        return [Y, H, J];
    }
  };
  HK.hsv.hsl = function (A) {
    let K = A[0],
      q = A[1] / 100,
      Y = A[2] / 100,
      z = Math.max(Y, 0.01),
      w,
      H;
    H = (2 - q) * Y;
    let J = (2 - q) * z;
    return w = q * z, w /= J <= 1 ? J : 2 - J, w = w || 0, H /= 2, [K, w * 100, H * 100];
  };
  HK.hwb.rgb = function (A) {
    let K = A[0] / 360,
      q = A[1] / 100,
      Y = A[2] / 100,
      z = q + Y,
      w;
    if (z > 1) q /= z, Y /= z;
    let H = Math.floor(6 * K),
      J = 1 - Y;
    if (w = 6 * K - H, (H & 1) !== 0) w = 1 - w;
    let O = q + w * (J - q),
      X,
      $,
      _;
    switch (H) {
      default:
      case 6:
      case 0:
        X = J, $ = O, _ = q;
        break;
      case 1:
        X = O, $ = J, _ = q;
        break;
      case 2:
        X = q, $ = J, _ = O;
        break;
      case 3:
        X = q, $ = O, _ = J;
        break;
      case 4:
        X = O, $ = q, _ = J;
        break;
      case 5:
        X = J, $ = q, _ = O;
        break;
    }
    return [X * 255, $ * 255, _ * 255];
  };
  HK.cmyk.rgb = function (A) {
    let K = A[0] / 100,
      q = A[1] / 100,
      Y = A[2] / 100,
      z = A[3] / 100,
      w = 1 - Math.min(1, K * (1 - z) + z),
      H = 1 - Math.min(1, q * (1 - z) + z),
      J = 1 - Math.min(1, Y * (1 - z) + z);
    return [w * 255, H * 255, J * 255];
  };
  HK.xyz.rgb = function (A) {
    let K = A[0] / 100,
      q = A[1] / 100,
      Y = A[2] / 100,
      z,
      w,
      H;
    return z = K * 3.2406 + q * -1.5372 + Y * -0.4986, w = K * -0.9689 + q * 1.8758 + Y * 0.0415, H = K * 0.0557 + q * -0.204 + Y * 1.057, z = z > 0.0031308 ? 1.055 * z ** 0.4166666666666667 - 0.055 : z * 12.92, w = w > 0.0031308 ? 1.055 * w ** 0.4166666666666667 - 0.055 : w * 12.92, H = H > 0.0031308 ? 1.055 * H ** 0.4166666666666667 - 0.055 : H * 12.92, z = Math.min(Math.max(0, z), 1), w = Math.min(Math.max(0, w), 1), H = Math.min(Math.max(0, H), 1), [z * 255, w * 255, H * 255];
  };
  HK.xyz.lab = function (A) {
    let K = A[0],
      q = A[1],
      Y = A[2];
    K /= 95.047, q /= 100, Y /= 108.883, K = K > 0.008856 ? K ** 0.3333333333333333 : 7.787 * K + 0.13793103448275862, q = q > 0.008856 ? q ** 0.3333333333333333 : 7.787 * q + 0.13793103448275862, Y = Y > 0.008856 ? Y ** 0.3333333333333333 : 7.787 * Y + 0.13793103448275862;
    let z = 116 * q - 16,
      w = 500 * (K - q),
      H = 200 * (q - Y);
    return [z, w, H];
  };
  HK.lab.xyz = function (A) {
    let K = A[0],
      q = A[1],
      Y = A[2],
      z,
      w,
      H;
    w = (K + 16) / 116, z = q / 500 + w, H = w - Y / 200;
    let J = w ** 3,
      O = z ** 3,
      X = H ** 3;
    return w = J > 0.008856 ? J : (w - 0.13793103448275862) / 7.787, z = O > 0.008856 ? O : (z - 0.13793103448275862) / 7.787, H = X > 0.008856 ? X : (H - 0.13793103448275862) / 7.787, z *= 95.047, w *= 100, H *= 108.883, [z, w, H];
  };
  HK.lab.lch = function (A) {
    let K = A[0],
      q = A[1],
      Y = A[2],
      z;
    if (z = Math.atan2(Y, q) * 360 / 2 / Math.PI, z < 0) z += 360;
    let H = Math.sqrt(q * q + Y * Y);
    return [K, H, z];
  };
  HK.lch.lab = function (A) {
    let K = A[0],
      q = A[1],
      z = A[2] / 360 * 2 * Math.PI,
      w = q * Math.cos(z),
      H = q * Math.sin(z);
    return [K, w, H];
  };
  HK.rgb.ansi16 = function (A, K = null) {
    let [q, Y, z] = A,
      w = K === null ? HK.rgb.hsv(A)[2] : K;
    if (w = Math.round(w / 50), w === 0) return 30;
    let H = 30 + (Math.round(z / 255) << 2 | Math.round(Y / 255) << 1 | Math.round(q / 255));
    if (w === 2) H += 60;
    return H;
  };
  HK.hsv.ansi16 = function (A) {
    return HK.rgb.ansi16(HK.hsv.rgb(A), A[2]);
  };
  HK.rgb.ansi256 = function (A) {
    let K = A[0],
      q = A[1],
      Y = A[2];
    if (K === q && q === Y) {
      if (K < 8) return 16;
      if (K > 248) return 231;
      return Math.round((K - 8) / 247 * 24) + 232;
    }
    return 16 + 36 * Math.round(K / 255 * 5) + 6 * Math.round(q / 255 * 5) + Math.round(Y / 255 * 5);
  };
  HK.ansi16.rgb = function (A) {
    let K = A % 10;
    if (K === 0 || K === 7) {
      if (A > 50) K += 3.5;
      return K = K / 10.5 * 255, [K, K, K];
    }
    let q = (~~(A > 50) + 1) * 0.5,
      Y = (K & 1) * q * 255,
      z = (K >> 1 & 1) * q * 255,
      w = (K >> 2 & 1) * q * 255;
    return [Y, z, w];
  };
  HK.ansi256.rgb = function (A) {
    if (A >= 232) {
      let w = (A - 232) * 10 + 8;
      return [w, w, w];
    }
    A -= 16;
    let K,
      q = Math.floor(A / 36) / 5 * 255,
      Y = Math.floor((K = A % 36) / 6) / 5 * 255,
      z = K % 6 / 5 * 255;
    return [q, Y, z];
  };
  HK.rgb.hex = function (A) {
    let q = (((Math.round(A[0]) & 255) << 16) + ((Math.round(A[1]) & 255) << 8) + (Math.round(A[2]) & 255)).toString(16).toUpperCase();
    return "000000".substring(q.length) + q;
  };
  HK.hex.rgb = function (A) {
    let K = A.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!K) return [0, 0, 0];
    let q = K[0];
    if (K[0].length === 3) q = q.split("").map(J => {
      return J + J;
    }).join("");
    let Y = parseInt(q, 16),
      z = Y >> 16 & 255,
      w = Y >> 8 & 255,
      H = Y & 255;
    return [z, w, H];
  };
  HK.rgb.hcg = function (A) {
    let K = A[0] / 255,
      q = A[1] / 255,
      Y = A[2] / 255,
      z = Math.max(Math.max(K, q), Y),
      w = Math.min(Math.min(K, q), Y),
      H = z - w,
      J,
      O;
    if (H < 1) J = w / (1 - H);else J = 0;
    if (H <= 0) O = 0;else if (z === K) O = (q - Y) / H % 6;else if (z === q) O = 2 + (Y - K) / H;else O = 4 + (K - q) / H;
    return O /= 6, O %= 1, [O * 360, H * 100, J * 100];
  };
  HK.hsl.hcg = function (A) {
    let K = A[1] / 100,
      q = A[2] / 100,
      Y = q < 0.5 ? 2 * K * q : 2 * K * (1 - q),
      z = 0;
    if (Y < 1) z = (q - 0.5 * Y) / (1 - Y);
    return [A[0], Y * 100, z * 100];
  };
  HK.hsv.hcg = function (A) {
    let K = A[1] / 100,
      q = A[2] / 100,
      Y = K * q,
      z = 0;
    if (Y < 1) z = (q - Y) / (1 - Y);
    return [A[0], Y * 100, z * 100];
  };
  HK.hcg.rgb = function (A) {
    let K = A[0] / 360,
      q = A[1] / 100,
      Y = A[2] / 100;
    if (q === 0) return [Y * 255, Y * 255, Y * 255];
    let z = [0, 0, 0],
      w = K % 1 * 6,
      H = w % 1,
      J = 1 - H,
      O = 0;
    switch (Math.floor(w)) {
      case 0:
        z[0] = 1, z[1] = H, z[2] = 0;
        break;
      case 1:
        z[0] = J, z[1] = 1, z[2] = 0;
        break;
      case 2:
        z[0] = 0, z[1] = 1, z[2] = H;
        break;
      case 3:
        z[0] = 0, z[1] = J, z[2] = 1;
        break;
      case 4:
        z[0] = H, z[1] = 0, z[2] = 1;
        break;
      default:
        z[0] = 1, z[1] = 0, z[2] = J;
    }
    return O = (1 - q) * Y, [(q * z[0] + O) * 255, (q * z[1] + O) * 255, (q * z[2] + O) * 255];
  };
  HK.hcg.hsv = function (A) {
    let K = A[1] / 100,
      q = A[2] / 100,
      Y = K + q * (1 - K),
      z = 0;
    if (Y > 0) z = K / Y;
    return [A[0], z * 100, Y * 100];
  };
  HK.hcg.hsl = function (A) {
    let K = A[1] / 100,
      Y = A[2] / 100 * (1 - K) + 0.5 * K,
      z = 0;
    if (Y > 0 && Y < 0.5) z = K / (2 * Y);else if (Y >= 0.5 && Y < 1) z = K / (2 * (1 - Y));
    return [A[0], z * 100, Y * 100];
  };
  HK.hcg.hwb = function (A) {
    let K = A[1] / 100,
      q = A[2] / 100,
      Y = K + q * (1 - K);
    return [A[0], (Y - K) * 100, (1 - Y) * 100];
  };
  HK.hwb.hcg = function (A) {
    let K = A[1] / 100,
      Y = 1 - A[2] / 100,
      z = Y - K,
      w = 0;
    if (z < 1) w = (Y - z) / (1 - z);
    return [A[0], z * 100, w * 100];
  };
  HK.apple.rgb = function (A) {
    return [A[0] / 65535 * 255, A[1] / 65535 * 255, A[2] / 65535 * 255];
  };
  HK.rgb.apple = function (A) {
    return [A[0] / 255 * 65535, A[1] / 255 * 65535, A[2] / 255 * 65535];
  };
  HK.gray.rgb = function (A) {
    return [A[0] / 100 * 255, A[0] / 100 * 255, A[0] / 100 * 255];
  };
  HK.gray.hsl = function (A) {
    return [0, 0, A[0]];
  };
  HK.gray.hsv = HK.gray.hsl;
  HK.gray.hwb = function (A) {
    return [0, 100, A[0]];
  };
  HK.gray.cmyk = function (A) {
    return [0, 0, 0, A[0]];
  };
  HK.gray.lab = function (A) {
    return [A[0], 0, 0];
  };
  HK.gray.hex = function (A) {
    let K = Math.round(A[0] / 100 * 255) & 255,
      Y = ((K << 16) + (K << 8) + K).toString(16).toUpperCase();
    return "000000".substring(Y.length) + Y;
  };
  HK.rgb.gray = function (A) {
    return [(A[0] + A[1] + A[2]) / 3 / 255 * 100];
  };
});

// Register to shared state
__$.xY6 = xY6;
