// Module: njK
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var njK = v(Zp2 => {
  var $p2 = "\x1B[47m\x1B[30m",
    _p2 = "\x1B[40m\x1B[37m",
    Gp2 = function (A, K, q) {
      return {
        "00": "\x1B[0m " + A,
        "01": "\x1B[0m" + K + "▄" + A,
        "02": "\x1B[0m" + q + "▄" + A,
        10: "\x1B[0m" + K + "▀" + A,
        11: " ",
        12: "▄",
        20: "\x1B[0m" + q + "▀" + A,
        21: "▀",
        22: "█"
      };
    },
    ljK = function (A, K, q, Y) {
      let z = K + 1;
      if (q >= z || Y >= z || Y < -1 || q < -1) return "0";
      if (q >= K || Y >= K || Y < 0 || q < 0) return "1";
      let w = Y * K + q;
      return A[w] ? "2" : "1";
    },
    ijK = function (A, K, q, Y) {
      return ljK(A, K, q, Y) + ljK(A, K, q, Y + 1);
    };
  Zp2.render = function (A, K, q) {
    let Y = A.modules.size,
      z = A.modules.data,
      w = !!(K && K.inverse),
      H = K && K.inverse ? _p2 : $p2,
      X = Gp2(H, w ? "\x1B[30m" : "\x1B[37m", w ? "\x1B[37m" : "\x1B[30m"),
      $ = `\x1B[0m
` + H,
      _ = H;
    for (let G = -1; G < Y + 1; G += 2) {
      for (let Z = -1; Z < Y; Z++) _ += X[ijK(z, Y, Z, G)];
      _ += X[ijK(z, Y, Y, G)] + $;
    }
    if (_ += "\x1B[0m", typeof q === "function") q(null, _);
    return _;
  };
});

// Register to shared state
__$.njK = njK;
