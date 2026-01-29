// Module: FDK
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var FDK = v((RFJ, yg6) => {
  var CdA = {
    single_source_shortest_paths: function (A, K, q) {
      var Y = {},
        z = {};
      z[K] = 0;
      var w = CdA.PriorityQueue.make();
      w.push(K, 0);
      var H, J, O, X, $, _, G, Z, W;
      while (!w.empty()) {
        H = w.pop(), J = H.value, X = H.cost, $ = A[J] || {};
        for (O in $) if ($.hasOwnProperty(O)) {
          if (_ = $[O], G = X + _, Z = z[O], W = typeof z[O] > "u", W || Z > G) z[O] = G, w.push(O, G), Y[O] = J;
        }
      }
      if (typeof q < "u" && typeof z[q] > "u") {
        var D = ["Could not find a path from ", K, " to ", q, "."].join("");
        throw Error(D);
      }
      return Y;
    },
    extract_shortest_path_from_predecessor_list: function (A, K) {
      var q = [],
        Y = K,
        z;
      while (Y) q.push(Y), z = A[Y], Y = A[Y];
      return q.reverse(), q;
    },
    find_path: function (A, K, q) {
      var Y = CdA.single_source_shortest_paths(A, K, q);
      return CdA.extract_shortest_path_from_predecessor_list(Y, q);
    },
    PriorityQueue: {
      make: function (A) {
        var K = CdA.PriorityQueue,
          q = {},
          Y;
        A = A || {};
        for (Y in K) if (K.hasOwnProperty(Y)) q[Y] = K[Y];
        return q.queue = [], q.sorter = A.sorter || K.default_sorter, q;
      },
      default_sorter: function (A, K) {
        return A.cost - K.cost;
      },
      push: function (A, K) {
        var q = {
          value: A,
          cost: K
        };
        this.queue.push(q), this.queue.sort(this.sorter);
      },
      pop: function () {
        return this.queue.shift();
      },
      empty: function () {
        return this.queue.length === 0;
      }
    }
  };
  if (typeof yg6 < "u") yg6.exports = CdA;
});

// Register to shared state
__$.FDK = FDK;
