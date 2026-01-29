// Module: QS4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QS4 = v(bf9 => {
  var i96 = Symbol("break visit"),
    hf9 = Symbol("skip children"),
    gS4 = Symbol("remove item");
  function z7A(A, K) {
    if ("type" in A && A.type === "document") A = {
      start: A.start,
      value: A.value
    };
    FS4(Object.freeze([]), A, K);
  }
  z7A.BREAK = i96;
  z7A.SKIP = hf9;
  z7A.REMOVE = gS4;
  z7A.itemAtPath = (A, K) => {
    let q = A;
    for (let [Y, z] of K) {
      let w = q?.[Y];
      if (w && "items" in w) q = w.items[z];else return;
    }
    return q;
  };
  z7A.parentCollection = (A, K) => {
    let q = z7A.itemAtPath(A, K.slice(0, -1)),
      Y = K[K.length - 1][0],
      z = q?.[Y];
    if (z && "items" in z) return z;
    throw Error("Parent collection not found");
  };
  function FS4(A, K, q) {
    let Y = q(K, A);
    if (typeof Y === "symbol") return Y;
    for (let z of ["key", "value"]) {
      let w = K[z];
      if (w && "items" in w) {
        for (let H = 0; H < w.items.length; ++H) {
          let J = FS4(Object.freeze(A.concat([[z, H]])), w.items[H], q);
          if (typeof J === "number") H = J - 1;else if (J === i96) return i96;else if (J === gS4) w.items.splice(H, 1), H -= 1;
        }
        if (typeof Y === "function" && z === "key") Y = Y(K, A);
      }
    }
    return typeof Y === "function" ? Y(K, A) : Y;
  }
  bf9.visit = z7A;
});

// Register to shared state
__$.QS4 = QS4;
