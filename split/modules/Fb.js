// Module: Fb
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Fb = v(qN5 => {
  var t6A = (A, K) => {
      let q = [];
      if (A) q.push(A);
      if (K) for (let Y of K) q.push(Y);
      return q;
    },
    si = (A, K) => {
      return `${A || "anonymous"}${K && K.length > 0 ? ` (a.k.a. ${K.join(",")})` : ""}`;
    },
    vn1 = () => {
      let A = [],
        K = [],
        q = !1,
        Y = new Set(),
        z = _ => _.sort((G, Z) => XQ8[Z.step] - XQ8[G.step] || $Q8[Z.priority || "normal"] - $Q8[G.priority || "normal"]),
        w = _ => {
          let G = !1,
            Z = W => {
              let D = t6A(W.name, W.aliases);
              if (D.includes(_)) {
                G = !0;
                for (let j of D) Y.delete(j);
                return !1;
              }
              return !0;
            };
          return A = A.filter(Z), K = K.filter(Z), G;
        },
        H = _ => {
          let G = !1,
            Z = W => {
              if (W.middleware === _) {
                G = !0;
                for (let D of t6A(W.name, W.aliases)) Y.delete(D);
                return !1;
              }
              return !0;
            };
          return A = A.filter(Z), K = K.filter(Z), G;
        },
        J = _ => {
          return A.forEach(G => {
            _.add(G.middleware, {
              ...G
            });
          }), K.forEach(G => {
            _.addRelativeTo(G.middleware, {
              ...G
            });
          }), _.identifyOnResolve?.($.identifyOnResolve()), _;
        },
        O = _ => {
          let G = [];
          return _.before.forEach(Z => {
            if (Z.before.length === 0 && Z.after.length === 0) G.push(Z);else G.push(...O(Z));
          }), G.push(_), _.after.reverse().forEach(Z => {
            if (Z.before.length === 0 && Z.after.length === 0) G.push(Z);else G.push(...O(Z));
          }), G;
        },
        X = (_ = !1) => {
          let G = [],
            Z = [],
            W = {};
          return A.forEach(j => {
            let M = {
              ...j,
              before: [],
              after: []
            };
            for (let P of t6A(M.name, M.aliases)) W[P] = M;
            G.push(M);
          }), K.forEach(j => {
            let M = {
              ...j,
              before: [],
              after: []
            };
            for (let P of t6A(M.name, M.aliases)) W[P] = M;
            Z.push(M);
          }), Z.forEach(j => {
            if (j.toMiddleware) {
              let M = W[j.toMiddleware];
              if (M === void 0) {
                if (_) return;
                throw Error(`${j.toMiddleware} is not found when adding ${si(j.name, j.aliases)} middleware ${j.relation} ${j.toMiddleware}`);
              }
              if (j.relation === "after") M.after.push(j);
              if (j.relation === "before") M.before.push(j);
            }
          }), z(G).map(O).reduce((j, M) => {
            return j.push(...M), j;
          }, []);
        },
        $ = {
          add: (_, G = {}) => {
            let {
                name: Z,
                override: W,
                aliases: D
              } = G,
              j = {
                step: "initialize",
                priority: "normal",
                middleware: _,
                ...G
              },
              M = t6A(Z, D);
            if (M.length > 0) {
              if (M.some(P => Y.has(P))) {
                if (!W) throw Error(`Duplicate middleware name '${si(Z, D)}'`);
                for (let P of M) {
                  let f = A.findIndex(T => T.name === P || T.aliases?.some(C => C === P));
                  if (f === -1) continue;
                  let N = A[f];
                  if (N.step !== j.step || j.priority !== N.priority) throw Error(`"${si(N.name, N.aliases)}" middleware with ${N.priority} priority in ${N.step} step cannot be overridden by "${si(Z, D)}" middleware with ${j.priority} priority in ${j.step} step.`);
                  A.splice(f, 1);
                }
              }
              for (let P of M) Y.add(P);
            }
            A.push(j);
          },
          addRelativeTo: (_, G) => {
            let {
                name: Z,
                override: W,
                aliases: D
              } = G,
              j = {
                middleware: _,
                ...G
              },
              M = t6A(Z, D);
            if (M.length > 0) {
              if (M.some(P => Y.has(P))) {
                if (!W) throw Error(`Duplicate middleware name '${si(Z, D)}'`);
                for (let P of M) {
                  let f = K.findIndex(T => T.name === P || T.aliases?.some(C => C === P));
                  if (f === -1) continue;
                  let N = K[f];
                  if (N.toMiddleware !== j.toMiddleware || N.relation !== j.relation) throw Error(`"${si(N.name, N.aliases)}" middleware ${N.relation} "${N.toMiddleware}" middleware cannot be overridden by "${si(Z, D)}" middleware ${j.relation} "${j.toMiddleware}" middleware.`);
                  K.splice(f, 1);
                }
              }
              for (let P of M) Y.add(P);
            }
            K.push(j);
          },
          clone: () => J(vn1()),
          use: _ => {
            _.applyToStack($);
          },
          remove: _ => {
            if (typeof _ === "string") return w(_);else return H(_);
          },
          removeByTag: _ => {
            let G = !1,
              Z = W => {
                let {
                  tags: D,
                  name: j,
                  aliases: M
                } = W;
                if (D && D.includes(_)) {
                  let P = t6A(j, M);
                  for (let f of P) Y.delete(f);
                  return G = !0, !1;
                }
                return !0;
              };
            return A = A.filter(Z), K = K.filter(Z), G;
          },
          concat: _ => {
            let G = J(vn1());
            return G.use(_), G.identifyOnResolve(q || G.identifyOnResolve() || (_.identifyOnResolve?.() ?? !1)), G;
          },
          applyToStack: J,
          identify: () => {
            return X(!0).map(_ => {
              let G = _.step ?? _.relation + " " + _.toMiddleware;
              return si(_.name, _.aliases) + " - " + G;
            });
          },
          identifyOnResolve(_) {
            if (typeof _ === "boolean") q = _;
            return q;
          },
          resolve: (_, G) => {
            for (let Z of X().map(W => W.middleware).reverse()) _ = Z(_, G);
            if (q) console.log($.identify());
            return _;
          }
        };
      return $;
    },
    XQ8 = {
      initialize: 5,
      serialize: 4,
      build: 3,
      finalizeRequest: 2,
      deserialize: 1
    },
    $Q8 = {
      high: 3,
      normal: 2,
      low: 1
    };
  qN5.constructStack = vn1;
});

// Register to shared state
__$.Fb = Fb;
