// Module: hW8
// Dependencies: SE, zvA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hW8 = v(SW8 => {
  Object.defineProperty(SW8, "__esModule", {
    value: !0
  });
  var qu1 = __$.SE(),
    Ekq = __$.zvA();
  function kkq(A, K, q = 250, Y, z, w, H) {
    if (!w.exception || !w.exception.values || !H || !qu1.isInstanceOf(H.originalException, Error)) return;
    let J = w.exception.values.length > 0 ? w.exception.values[w.exception.values.length - 1] : void 0;
    if (J) w.exception.values = Ckq(Yu1(A, K, z, H.originalException, Y, w.exception.values, J, 0), q);
  }
  function Yu1(A, K, q, Y, z, w, H, J) {
    if (w.length >= q + 1) return w;
    let O = [...w];
    if (qu1.isInstanceOf(Y[z], Error)) {
      yW8(H, J);
      let X = A(K, Y[z]),
        $ = O.length;
      IW8(X, z, $, J), O = Yu1(A, K, q, Y[z], z, [X, ...O], X, $);
    }
    if (Array.isArray(Y.errors)) Y.errors.forEach((X, $) => {
      if (qu1.isInstanceOf(X, Error)) {
        yW8(H, J);
        let _ = A(K, X),
          G = O.length;
        IW8(_, `errors[${$}]`, G, J), O = Yu1(A, K, q, X, z, [_, ...O], _, G);
      }
    });
    return O;
  }
  function yW8(A, K) {
    A.mechanism = A.mechanism || {
      type: "generic",
      handled: !0
    }, A.mechanism = {
      ...A.mechanism,
      ...(A.type === "AggregateError" && {
        is_exception_group: !0
      }),
      exception_id: K
    };
  }
  function IW8(A, K, q, Y) {
    A.mechanism = A.mechanism || {
      type: "generic",
      handled: !0
    }, A.mechanism = {
      ...A.mechanism,
      type: "chained",
      source: K,
      exception_id: q,
      parent_id: Y
    };
  }
  function Ckq(A, K) {
    return A.map(q => {
      if (q.value) q.value = Ekq.truncate(q.value, K);
      return q;
    });
  }
  SW8.applyAggregateErrorsToEvent = kkq;
});

// Register to shared state
__$.hW8 = hW8;
