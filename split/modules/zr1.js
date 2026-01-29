// Module: zr1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zr1 = v(SU8 => {
  Object.defineProperty(SU8, "__esModule", {
    value: !0
  });
  SU8.getHomeDir = void 0;
  var Kk5 = CA("os"),
    qk5 = CA("path"),
    Yr1 = {},
    Yk5 = () => {
      if (process && process.geteuid) return `${process.geteuid()}`;
      return "DEFAULT";
    },
    zk5 = () => {
      let {
        HOME: A,
        USERPROFILE: K,
        HOMEPATH: q,
        HOMEDRIVE: Y = `C:${qk5.sep}`
      } = process.env;
      if (A) return A;
      if (K) return K;
      if (q) return `${Y}${q}`;
      let z = Yk5();
      if (!Yr1[z]) Yr1[z] = (0, Kk5.homedir)();
      return Yr1[z];
    };
  SU8.getHomeDir = zk5;
});

// Register to shared state
__$.zr1 = zr1;
