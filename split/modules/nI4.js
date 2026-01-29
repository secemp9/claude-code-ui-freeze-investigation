// Module: nI4
// Dependencies: _$A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nI4 = v(vM9 => {
  var iI4 = __$._$A(),
    aIA = A => typeof A === "bigint" || Number.isInteger(A);
  function s91(A, K, q, {
    intAsBigInt: Y
  }) {
    let z = A[0];
    if (z === "-" || z === "+") K += 1;
    if (A = A.substring(K).replace(/_/g, ""), Y) {
      switch (q) {
        case 2:
          A = `0b${A}`;
          break;
        case 8:
          A = `0o${A}`;
          break;
        case 16:
          A = `0x${A}`;
          break;
      }
      let H = BigInt(A);
      return z === "-" ? BigInt(-1) * H : H;
    }
    let w = parseInt(A, q);
    return z === "-" ? -1 * w : w;
  }
  function P96(A, K, q) {
    let {
      value: Y
    } = A;
    if (aIA(Y)) {
      let z = Y.toString(K);
      return Y < 0 ? "-" + q + z.substr(1) : q + z;
    }
    return iI4.stringifyNumber(A);
  }
  var VM9 = {
      identify: aIA,
      default: !0,
      tag: "tag:yaml.org,2002:int",
      format: "BIN",
      test: /^[-+]?0b[0-1_]+$/,
      resolve: (A, K, q) => s91(A, 2, 2, q),
      stringify: A => P96(A, 2, "0b")
    },
    fM9 = {
      identify: aIA,
      default: !0,
      tag: "tag:yaml.org,2002:int",
      format: "OCT",
      test: /^[-+]?0[0-7_]+$/,
      resolve: (A, K, q) => s91(A, 1, 8, q),
      stringify: A => P96(A, 8, "0")
    },
    NM9 = {
      identify: aIA,
      default: !0,
      tag: "tag:yaml.org,2002:int",
      test: /^[-+]?[0-9][0-9_]*$/,
      resolve: (A, K, q) => s91(A, 0, 10, q),
      stringify: iI4.stringifyNumber
    },
    TM9 = {
      identify: aIA,
      default: !0,
      tag: "tag:yaml.org,2002:int",
      format: "HEX",
      test: /^[-+]?0x[0-9a-fA-F_]+$/,
      resolve: (A, K, q) => s91(A, 2, 16, q),
      stringify: A => P96(A, 16, "0x")
    };
  vM9.int = NM9;
  vM9.intBin = VM9;
  vM9.intHex = TM9;
  vM9.intOct = fM9;
});

// Register to shared state
__$.nI4 = nI4;
