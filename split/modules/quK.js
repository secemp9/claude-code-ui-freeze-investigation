// Module: quK
// Dependencies: Rc, T2, h, s, S

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var quK = k(() => {
  __$.Rc = {
    y(A, K) {
      let q = A.getFullYear(),
        Y = q > 0 ? q : 1 - q;
      return __$.T2(K === "yy" ? Y % 100 : Y, K.length);
    },
    M(A, K) {
      let q = A.getMonth();
      return K === "M" ? String(q + 1) : __$.T2(q + 1, 2);
    },
    d(A, K) {
      return __$.T2(A.getDate(), K.length);
    },
    a(A, K) {
      let q = A.getHours() / 12 >= 1 ? "pm" : "am";
      switch (K) {
        case "a":
        case "aa":
          return q.toUpperCase();
        case "aaa":
          return q;
        case "aaaaa":
          return q[0];
        case "aaaa":
        default:
          return q === "am" ? "a.m." : "p.m.";
      }
    },
    h(A, K) {
      return __$.T2(A.getHours() % 12 || 12, K.length);
    },
    H(A, K) {
      return __$.T2(A.getHours(), K.length);
    },
    m(A, K) {
      return __$.T2(A.getMinutes(), K.length);
    },
    s(A, K) {
      return __$.T2(A.getSeconds(), K.length);
    },
    S(A, K) {
      let q = K.length,
        Y = A.getMilliseconds(),
        z = Math.trunc(Y * Math.pow(10, q - 3));
      return __$.T2(z, K.length);
    }
  };
});

// Register to shared state
__$.quK = quK;
