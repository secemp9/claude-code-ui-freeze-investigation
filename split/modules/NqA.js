// Module: NqA
// Dependencies: fqA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var NqA = v((L8H, s07) => {
  var vZA = __$.fqA(),
    kG = CA("path"),
    jVY = CA("util");
  function MVY(A, K, q) {
    let Y = q.dereference ? z => vZA.stat(z, {
      bigint: !0
    }) : z => vZA.lstat(z, {
      bigint: !0
    });
    return Promise.all([Y(A), Y(K).catch(z => {
      if (z.code === "ENOENT") return null;
      throw z;
    })]).then(([z, w]) => ({
      srcStat: z,
      destStat: w
    }));
  }
  function PVY(A, K, q) {
    let Y,
      z = q.dereference ? H => vZA.statSync(H, {
        bigint: !0
      }) : H => vZA.lstatSync(H, {
        bigint: !0
      }),
      w = z(A);
    try {
      Y = z(K);
    } catch (H) {
      if (H.code === "ENOENT") return {
        srcStat: w,
        destStat: null
      };
      throw H;
    }
    return {
      srcStat: w,
      destStat: Y
    };
  }
  function VVY(A, K, q, Y, z) {
    jVY.callbackify(MVY)(A, K, Y, (w, H) => {
      if (w) return z(w);
      let {
        srcStat: J,
        destStat: O
      } = H;
      if (O) {
        if (zBA(J, O)) {
          let X = kG.basename(A),
            $ = kG.basename(K);
          if (q === "move" && X !== $ && X.toLowerCase() === $.toLowerCase()) return z(null, {
            srcStat: J,
            destStat: O,
            isChangingCase: !0
          });
          return z(Error("Source and destination must not be the same."));
        }
        if (J.isDirectory() && !O.isDirectory()) return z(Error(`Cannot overwrite non-directory '${K}' with directory '${A}'.`));
        if (!J.isDirectory() && O.isDirectory()) return z(Error(`Cannot overwrite directory '${K}' with non-directory '${A}'.`));
      }
      if (J.isDirectory() && fD6(A, K)) return z(Error(kX1(A, K, q)));
      return z(null, {
        srcStat: J,
        destStat: O
      });
    });
  }
  function fVY(A, K, q, Y) {
    let {
      srcStat: z,
      destStat: w
    } = PVY(A, K, Y);
    if (w) {
      if (zBA(z, w)) {
        let H = kG.basename(A),
          J = kG.basename(K);
        if (q === "move" && H !== J && H.toLowerCase() === J.toLowerCase()) return {
          srcStat: z,
          destStat: w,
          isChangingCase: !0
        };
        throw Error("Source and destination must not be the same.");
      }
      if (z.isDirectory() && !w.isDirectory()) throw Error(`Cannot overwrite non-directory '${K}' with directory '${A}'.`);
      if (!z.isDirectory() && w.isDirectory()) throw Error(`Cannot overwrite directory '${K}' with non-directory '${A}'.`);
    }
    if (z.isDirectory() && fD6(A, K)) throw Error(kX1(A, K, q));
    return {
      srcStat: z,
      destStat: w
    };
  }
  function o07(A, K, q, Y, z) {
    let w = kG.resolve(kG.dirname(A)),
      H = kG.resolve(kG.dirname(q));
    if (H === w || H === kG.parse(H).root) return z();
    vZA.stat(H, {
      bigint: !0
    }, (J, O) => {
      if (J) {
        if (J.code === "ENOENT") return z();
        return z(J);
      }
      if (zBA(K, O)) return z(Error(kX1(A, q, Y)));
      return o07(A, K, H, Y, z);
    });
  }
  function a07(A, K, q, Y) {
    let z = kG.resolve(kG.dirname(A)),
      w = kG.resolve(kG.dirname(q));
    if (w === z || w === kG.parse(w).root) return;
    let H;
    try {
      H = vZA.statSync(w, {
        bigint: !0
      });
    } catch (J) {
      if (J.code === "ENOENT") return;
      throw J;
    }
    if (zBA(K, H)) throw Error(kX1(A, q, Y));
    return a07(A, K, w, Y);
  }
  function zBA(A, K) {
    return K.ino && K.dev && K.ino === A.ino && K.dev === A.dev;
  }
  function fD6(A, K) {
    let q = kG.resolve(A).split(kG.sep).filter(z => z),
      Y = kG.resolve(K).split(kG.sep).filter(z => z);
    return q.reduce((z, w, H) => z && Y[H] === w, !0);
  }
  function kX1(A, K, q) {
    return `Cannot ${q} '${A}' to a subdirectory of itself, '${K}'.`;
  }
  s07.exports = {
    checkPaths: VVY,
    checkPathsSync: fVY,
    checkParentPaths: o07,
    checkParentPathsSync: a07,
    isSrcSubdir: fD6,
    areIdentical: zBA
  };
});

// Register to shared state
__$.NqA = NqA;
