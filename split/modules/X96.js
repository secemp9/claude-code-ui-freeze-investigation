// Module: X96
// Dependencies: _$A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var X96 = v(Cj9 => {
  var SI4 = __$._$A(),
    n91 = A => typeof A === "bigint" || Number.isInteger(A),
    O96 = (A, K, q, {
      intAsBigInt: Y
    }) => Y ? BigInt(A) : parseInt(A.substring(K), q);
  function hI4(A, K, q) {
    let {
      value: Y
    } = A;
    if (n91(Y) && Y >= 0) return q + Y.toString(K);
    return SI4.stringifyNumber(A);
  }
  var vj9 = {
      identify: A => n91(A) && A >= 0,
      default: !0,
      tag: "tag:yaml.org,2002:int",
      format: "OCT",
      test: /^0o[0-7]+$/,
      resolve: (A, K, q) => O96(A, 2, 8, q),
      stringify: A => hI4(A, 8, "0o")
    },
    Ej9 = {
      identify: n91,
      default: !0,
      tag: "tag:yaml.org,2002:int",
      test: /^[-+]?[0-9]+$/,
      resolve: (A, K, q) => O96(A, 0, 10, q),
      stringify: SI4.stringifyNumber
    },
    kj9 = {
      identify: A => n91(A) && A >= 0,
      default: !0,
      tag: "tag:yaml.org,2002:int",
      format: "HEX",
      test: /^0x[0-9a-fA-F]+$/,
      resolve: (A, K, q) => O96(A, 2, 16, q),
      stringify: A => hI4(A, 16, "0x")
    };
  Cj9.int = Ej9;
  Cj9.intHex = kj9;
  Cj9.intOct = vj9;
});

// Register to shared state
__$.X96 = X96;
