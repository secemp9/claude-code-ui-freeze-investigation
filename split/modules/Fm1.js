// Module: Fm1
// Dependencies: H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Fm1 = v(fE8 => {
  Object.defineProperty(fE8, "__esModule", {
    value: !0
  });
  var PE8 = CA("path"),
    meq = __$.H8();
  function VE8(A) {
    return A.replace(/^[A-Z]:/, "").replace(/\\/g, "/");
  }
  function geq(A = process.argv[1] ? meq.dirname(process.argv[1]) : process.cwd(), K = PE8.sep === "\\") {
    let q = K ? VE8(A) : A;
    return Y => {
      if (!Y) return;
      let z = K ? VE8(Y) : Y,
        {
          dir: w,
          base: H,
          ext: J
        } = PE8.posix.parse(z);
      if (J === ".js" || J === ".mjs" || J === ".cjs") H = H.slice(0, J.length * -1);
      if (!w) w = ".";
      let O = w.lastIndexOf("/node_modules");
      if (O > -1) return `${w.slice(O + 14).replace(/\//g, ".")}:${H}`;
      if (w.startsWith(q)) {
        let X = w.slice(q.length + 1).replace(/\//g, ".");
        if (X) X += ":";
        return X += H, X;
      }
      return H;
    };
  }
  fE8.createGetModuleFromFilename = geq;
});

// Register to shared state
__$.Fm1 = Fm1;
