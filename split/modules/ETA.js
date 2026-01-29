// Module: ETA
// Dependencies: PZ, Y3, $7, T58

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ETA = v(v58 => {
  Object.defineProperty(v58, "__esModule", {
    value: !0
  });
  v58.connect = void 0;
  var O2q = __$.PZ(),
    X2q = __$.Y3(),
    $2q = __$.$7(),
    _2q = __$.T58(),
    G2q = {
      connector: function () {
        return new O2q.Subject();
      }
    };
  function Z2q(A, K) {
    if (K === void 0) K = G2q;
    var q = K.connector;
    return $2q.operate(function (Y, z) {
      var w = q();
      X2q.innerFrom(A(_2q.fromSubscribable(w))).subscribe(z), z.add(Y.subscribe(w));
    });
  }
  v58.connect = Z2q;
});

// Register to shared state
__$.ETA = ETA;
