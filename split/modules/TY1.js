// Module: TY1
// Dependencies: Fh4, ph4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TY1 = v(($jw, zb4) => {
  var ch4 = CA("child_process"),
    {
      isLinux: C$A,
      getReport: lh4
    } = __$.Fh4(),
    {
      LDD_PATH: NY1,
      readFile: ih4,
      readFileSync: nh4
    } = __$.ph4(),
    ax,
    sx,
    lr = "",
    rh4 = () => {
      if (!lr) return new Promise(A => {
        ch4.exec("getconf GNU_LIBC_VERSION 2>&1 || true; ldd --version 2>&1 || true", (K, q) => {
          lr = K ? " " : q, A(lr);
        });
      });
      return lr;
    },
    oh4 = () => {
      if (!lr) try {
        lr = ch4.execSync("getconf GNU_LIBC_VERSION 2>&1 || true; ldd --version 2>&1 || true", {
          encoding: "utf8"
        });
      } catch (A) {
        lr = " ";
      }
      return lr;
    },
    ir = "glibc",
    ah4 = /LIBC[a-z0-9 \-).]*?(\d+\.\d+)/i,
    k$A = "musl",
    Ev9 = A => A.includes("libc.musl-") || A.includes("ld-musl-"),
    sh4 = () => {
      let A = lh4();
      if (A.header && A.header.glibcVersionRuntime) return ir;
      if (Array.isArray(A.sharedObjects)) {
        if (A.sharedObjects.some(Ev9)) return k$A;
      }
      return null;
    },
    th4 = A => {
      let [K, q] = A.split(/[\r\n]+/);
      if (K && K.includes(ir)) return ir;
      if (q && q.includes(k$A)) return k$A;
      return null;
    },
    eh4 = A => {
      if (A.includes("musl")) return k$A;
      if (A.includes("GNU C Library")) return ir;
      return null;
    },
    kv9 = async () => {
      if (ax !== void 0) return ax;
      ax = null;
      try {
        let A = await ih4(NY1);
        ax = eh4(A);
      } catch (A) {}
      return ax;
    },
    Cv9 = () => {
      if (ax !== void 0) return ax;
      ax = null;
      try {
        let A = nh4(NY1);
        ax = eh4(A);
      } catch (A) {}
      return ax;
    },
    Ab4 = async () => {
      let A = null;
      if (C$A()) {
        if (A = await kv9(), !A) A = sh4();
        if (!A) {
          let K = await rh4();
          A = th4(K);
        }
      }
      return A;
    },
    Kb4 = () => {
      let A = null;
      if (C$A()) {
        if (A = Cv9(), !A) A = sh4();
        if (!A) {
          let K = oh4();
          A = th4(K);
        }
      }
      return A;
    },
    Lv9 = async () => C$A() && (await Ab4()) !== ir,
    Rv9 = () => C$A() && Kb4() !== ir,
    yv9 = async () => {
      if (sx !== void 0) return sx;
      sx = null;
      try {
        let K = (await ih4(NY1)).match(ah4);
        if (K) sx = K[1];
      } catch (A) {}
      return sx;
    },
    Iv9 = () => {
      if (sx !== void 0) return sx;
      sx = null;
      try {
        let K = nh4(NY1).match(ah4);
        if (K) sx = K[1];
      } catch (A) {}
      return sx;
    },
    qb4 = () => {
      let A = lh4();
      if (A.header && A.header.glibcVersionRuntime) return A.header.glibcVersionRuntime;
      return null;
    },
    dh4 = A => A.trim().split(/\s+/)[1],
    Yb4 = A => {
      let [K, q, Y] = A.split(/[\r\n]+/);
      if (K && K.includes(ir)) return dh4(K);
      if (q && Y && q.includes(k$A)) return dh4(Y);
      return null;
    },
    Sv9 = async () => {
      let A = null;
      if (C$A()) {
        if (A = await yv9(), !A) A = qb4();
        if (!A) {
          let K = await rh4();
          A = Yb4(K);
        }
      }
      return A;
    },
    hv9 = () => {
      let A = null;
      if (C$A()) {
        if (A = Iv9(), !A) A = qb4();
        if (!A) {
          let K = oh4();
          A = Yb4(K);
        }
      }
      return A;
    };
  zb4.exports = {
    GLIBC: ir,
    MUSL: k$A,
    family: Ab4,
    familySync: Kb4,
    isNonGlibcLinux: Lv9,
    isNonGlibcLinuxSync: Rv9,
    version: Sv9,
    versionSync: hv9
  };
});

// Register to shared state
__$.TY1 = TY1;
