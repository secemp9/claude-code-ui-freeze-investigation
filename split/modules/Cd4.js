// Module: Cd4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Cd4 = v((Xfw, kd4) => {
  var {
      defineProperty: Yz1,
      getOwnPropertyDescriptor: wp9,
      getOwnPropertyNames: Hp9
    } = Object,
    Jp9 = Object.prototype.hasOwnProperty,
    wC = (A, K) => Yz1(A, "name", {
      value: K,
      configurable: !0
    }),
    Op9 = (A, K) => {
      for (var q in K) Yz1(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    Xp9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of Hp9(K)) if (!Jp9.call(A, z) && z !== q) Yz1(A, z, {
          get: () => K[z],
          enumerable: !(Y = wp9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    $p9 = A => Xp9(Yz1({}, "__esModule", {
      value: !0
    }), A),
    Ed4 = {};
  Op9(Ed4, {
    constructStack: () => tz6
  });
  kd4.exports = $p9(Ed4);
  var I7A = wC((A, K) => {
      let q = [];
      if (A) q.push(A);
      if (K) for (let Y of K) q.push(Y);
      return q;
    }, "getAllAliases"),
    Ko = wC((A, K) => {
      return `${A || "anonymous"}${K && K.length > 0 ? ` (a.k.a. ${K.join(",")})` : ""}`;
    }, "getMiddlewareNameWithAliases"),
    tz6 = wC(() => {
      let A = [],
        K = [],
        q = !1,
        Y = new Set(),
        z = wC(_ => _.sort((G, Z) => Td4[Z.step] - Td4[G.step] || vd4[Z.priority || "normal"] - vd4[G.priority || "normal"]), "sort"),
        w = wC(_ => {
          let G = !1,
            Z = wC(W => {
              let D = I7A(W.name, W.aliases);
              if (D.includes(_)) {
                G = !0;
                for (let j of D) Y.delete(j);
                return !1;
              }
              return !0;
            }, "filterCb");
          return A = A.filter(Z), K = K.filter(Z), G;
        }, "removeByName"),
        H = wC(_ => {
          let G = !1,
            Z = wC(W => {
              if (W.middleware === _) {
                G = !0;
                for (let D of I7A(W.name, W.aliases)) Y.delete(D);
                return !1;
              }
              return !0;
            }, "filterCb");
          return A = A.filter(Z), K = K.filter(Z), G;
        }, "removeByReference"),
        J = wC(_ => {
          var G;
          return A.forEach(Z => {
            _.add(Z.middleware, {
              ...Z
            });
          }), K.forEach(Z => {
            _.addRelativeTo(Z.middleware, {
              ...Z
            });
          }), (G = _.identifyOnResolve) == null || G.call(_, $.identifyOnResolve()), _;
        }, "cloneTo"),
        O = wC(_ => {
          let G = [];
          return _.before.forEach(Z => {
            if (Z.before.length === 0 && Z.after.length === 0) G.push(Z);else G.push(...O(Z));
          }), G.push(_), _.after.reverse().forEach(Z => {
            if (Z.before.length === 0 && Z.after.length === 0) G.push(Z);else G.push(...O(Z));
          }), G;
        }, "expandRelativeMiddlewareList"),
        X = wC((_ = !1) => {
          let G = [],
            Z = [],
            W = {};
          return A.forEach(j => {
            let M = {
              ...j,
              before: [],
              after: []
            };
            for (let P of I7A(M.name, M.aliases)) W[P] = M;
            G.push(M);
          }), K.forEach(j => {
            let M = {
              ...j,
              before: [],
              after: []
            };
            for (let P of I7A(M.name, M.aliases)) W[P] = M;
            Z.push(M);
          }), Z.forEach(j => {
            if (j.toMiddleware) {
              let M = W[j.toMiddleware];
              if (M === void 0) {
                if (_) return;
                throw Error(`${j.toMiddleware} is not found when adding ${Ko(j.name, j.aliases)} middleware ${j.relation} ${j.toMiddleware}`);
              }
              if (j.relation === "after") M.after.push(j);
              if (j.relation === "before") M.before.push(j);
            }
          }), z(G).map(O).reduce((j, M) => {
            return j.push(...M), j;
          }, []);
        }, "getMiddlewareList"),
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
              M = I7A(Z, D);
            if (M.length > 0) {
              if (M.some(P => Y.has(P))) {
                if (!W) throw Error(`Duplicate middleware name '${Ko(Z, D)}'`);
                for (let P of M) {
                  let f = A.findIndex(T => {
                    var C;
                    return T.name === P || ((C = T.aliases) == null ? void 0 : C.some(R => R === P));
                  });
                  if (f === -1) continue;
                  let N = A[f];
                  if (N.step !== j.step || j.priority !== N.priority) throw Error(`"${Ko(N.name, N.aliases)}" middleware with ${N.priority} priority in ${N.step} step cannot be overridden by "${Ko(Z, D)}" middleware with ${j.priority} priority in ${j.step} step.`);
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
              M = I7A(Z, D);
            if (M.length > 0) {
              if (M.some(P => Y.has(P))) {
                if (!W) throw Error(`Duplicate middleware name '${Ko(Z, D)}'`);
                for (let P of M) {
                  let f = K.findIndex(T => {
                    var C;
                    return T.name === P || ((C = T.aliases) == null ? void 0 : C.some(R => R === P));
                  });
                  if (f === -1) continue;
                  let N = K[f];
                  if (N.toMiddleware !== j.toMiddleware || N.relation !== j.relation) throw Error(`"${Ko(N.name, N.aliases)}" middleware ${N.relation} "${N.toMiddleware}" middleware cannot be overridden by "${Ko(Z, D)}" middleware ${j.relation} "${j.toMiddleware}" middleware.`);
                  K.splice(f, 1);
                }
              }
              for (let P of M) Y.add(P);
            }
            K.push(j);
          },
          clone: () => J(tz6()),
          use: _ => {
            _.applyToStack($);
          },
          remove: _ => {
            if (typeof _ === "string") return w(_);else return H(_);
          },
          removeByTag: _ => {
            let G = !1,
              Z = wC(W => {
                let {
                  tags: D,
                  name: j,
                  aliases: M
                } = W;
                if (D && D.includes(_)) {
                  let P = I7A(j, M);
                  for (let f of P) Y.delete(f);
                  return G = !0, !1;
                }
                return !0;
              }, "filterCb");
            return A = A.filter(Z), K = K.filter(Z), G;
          },
          concat: _ => {
            var G;
            let Z = J(tz6());
            return Z.use(_), Z.identifyOnResolve(q || Z.identifyOnResolve() || (((G = _.identifyOnResolve) == null ? void 0 : G.call(_)) ?? !1)), Z;
          },
          applyToStack: J,
          identify: () => {
            return X(!0).map(_ => {
              let G = _.step ?? _.relation + " " + _.toMiddleware;
              return Ko(_.name, _.aliases) + " - " + G;
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
    }, "constructStack"),
    Td4 = {
      initialize: 5,
      serialize: 4,
      build: 3,
      finalizeRequest: 2,
      deserialize: 1
    },
    vd4 = {
      high: 3,
      normal: 2,
      low: 1
    };
});

// Register to shared state
__$.Cd4 = Cd4;
