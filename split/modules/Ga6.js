// Module: Ga6
// Dependencies: wa6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ga6 = v((N0z, _a6) => {
  var fzA = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys",
    Ha6 = CA("path"),
    caK = fzA ? ";" : ":",
    Ja6 = __$.wa6(),
    Oa6 = A => Object.assign(Error(`not found: ${A}`), {
      code: "ENOENT"
    }),
    Xa6 = (A, K) => {
      let q = K.colon || caK,
        Y = A.match(/\//) || fzA && A.match(/\\/) ? [""] : [...(fzA ? [process.cwd()] : []), ...(K.path || process.env.PATH || "").split(q)],
        z = fzA ? K.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "",
        w = fzA ? z.split(q) : [""];
      if (fzA) {
        if (A.indexOf(".") !== -1 && w[0] !== "") w.unshift("");
      }
      return {
        pathEnv: Y,
        pathExt: w,
        pathExtExe: z
      };
    },
    $a6 = (A, K, q) => {
      if (typeof K === "function") q = K, K = {};
      if (!K) K = {};
      let {
          pathEnv: Y,
          pathExt: z,
          pathExtExe: w
        } = Xa6(A, K),
        H = [],
        J = X => new Promise(($, _) => {
          if (X === Y.length) return K.all && H.length ? $(H) : _(Oa6(A));
          let G = Y[X],
            Z = /^".*"$/.test(G) ? G.slice(1, -1) : G,
            W = Ha6.join(Z, A),
            D = !Z && /^\.[\\\/]/.test(A) ? A.slice(0, 2) + W : W;
          $(O(D, X, 0));
        }),
        O = (X, $, _) => new Promise((G, Z) => {
          if (_ === z.length) return G(J($ + 1));
          let W = z[_];
          Ja6(X + W, {
            pathExt: w
          }, (D, j) => {
            if (!D && j) if (K.all) H.push(X + W);else return G(X + W);
            return G(O(X, $, _ + 1));
          });
        });
      return q ? J(0).then(X => q(null, X), q) : J(0);
    },
    laK = (A, K) => {
      K = K || {};
      let {
          pathEnv: q,
          pathExt: Y,
          pathExtExe: z
        } = Xa6(A, K),
        w = [];
      for (let H = 0; H < q.length; H++) {
        let J = q[H],
          O = /^".*"$/.test(J) ? J.slice(1, -1) : J,
          X = Ha6.join(O, A),
          $ = !O && /^\.[\\\/]/.test(A) ? A.slice(0, 2) + X : X;
        for (let _ = 0; _ < Y.length; _++) {
          let G = $ + Y[_];
          try {
            if (Ja6.sync(G, {
              pathExt: z
            })) if (K.all) w.push(G);else return G;
          } catch (Z) {}
        }
      }
      if (K.all && w.length) return w;
      if (K.nothrow) return null;
      throw Oa6(A);
    };
  _a6.exports = $a6;
  $a6.sync = laK;
});

// Register to shared state
__$.Ga6 = Ga6;
