// Module: VqA
// Dependencies: PqA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var VqA = v((s6H, eJ7) => {
  var VZA = __$.PqA(),
    EG = CA("path"),
    OMY = CA("util");
  function XMY(A, K, q) {
    let Y = q.dereference ? z => VZA.stat(z, {
      bigint: !0
    }) : z => VZA.lstat(z, {
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
  function $MY(A, K, q) {
    let Y,
      z = q.dereference ? H => VZA.statSync(H, {
        bigint: !0
      }) : H => VZA.lstatSync(H, {
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
  function _MY(A, K, q, Y, z) {
    OMY.callbackify(XMY)(A, K, Y, (w, H) => {
      if (w) return z(w);
      let {
        srcStat: J,
        destStat: O
      } = H;
      if (O) {
        if (ouA(J, O)) {
          let X = EG.basename(A),
            $ = EG.basename(K);
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
      if (J.isDirectory() && JD6(A, K)) return z(Error(DX1(A, K, q)));
      return z(null, {
        srcStat: J,
        destStat: O
      });
    });
  }
  function GMY(A, K, q, Y) {
    let {
      srcStat: z,
      destStat: w
    } = $MY(A, K, Y);
    if (w) {
      if (ouA(z, w)) {
        let H = EG.basename(A),
          J = EG.basename(K);
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
    if (z.isDirectory() && JD6(A, K)) throw Error(DX1(A, K, q));
    return {
      srcStat: z,
      destStat: w
    };
  }
  function sJ7(A, K, q, Y, z) {
    let w = EG.resolve(EG.dirname(A)),
      H = EG.resolve(EG.dirname(q));
    if (H === w || H === EG.parse(H).root) return z();
    VZA.stat(H, {
      bigint: !0
    }, (J, O) => {
      if (J) {
        if (J.code === "ENOENT") return z();
        return z(J);
      }
      if (ouA(K, O)) return z(Error(DX1(A, q, Y)));
      return sJ7(A, K, H, Y, z);
    });
  }
  function tJ7(A, K, q, Y) {
    let z = EG.resolve(EG.dirname(A)),
      w = EG.resolve(EG.dirname(q));
    if (w === z || w === EG.parse(w).root) return;
    let H;
    try {
      H = VZA.statSync(w, {
        bigint: !0
      });
    } catch (J) {
      if (J.code === "ENOENT") return;
      throw J;
    }
    if (ouA(K, H)) throw Error(DX1(A, q, Y));
    return tJ7(A, K, w, Y);
  }
  function ouA(A, K) {
    return K.ino && K.dev && K.ino === A.ino && K.dev === A.dev;
  }
  function JD6(A, K) {
    let q = EG.resolve(A).split(EG.sep).filter(z => z),
      Y = EG.resolve(K).split(EG.sep).filter(z => z);
    return q.reduce((z, w, H) => z && Y[H] === w, !0);
  }
  function DX1(A, K, q) {
    return `Cannot ${q} '${A}' to a subdirectory of itself, '${K}'.`;
  }
  eJ7.exports = {
    checkPaths: _MY,
    checkPathsSync: GMY,
    checkParentPaths: sJ7,
    checkParentPathsSync: tJ7,
    isSrcSubdir: JD6,
    areIdentical: ouA
  };
});

// Register to shared state
__$.VqA = VqA;
