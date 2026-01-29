// Module: Es6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Es6 = v((xXz, vs6) => {
  var {
    PassThrough: _tK
  } = CA("stream");
  vs6.exports = function () {
    var A = [],
      K = new _tK({
        objectMode: !0
      });
    return K.setMaxListeners(0), K.add = q, K.isEmpty = Y, K.on("unpipe", z), Array.prototype.slice.call(arguments).forEach(q), K;
    function q(w) {
      if (Array.isArray(w)) return w.forEach(q), this;
      return A.push(w), w.once("end", z.bind(null, w)), w.once("error", K.emit.bind(K, "error")), w.pipe(K, {
        end: !1
      }), this;
    }
    function Y() {
      return A.length == 0;
    }
    function z(w) {
      if (A = A.filter(function (H) {
        return H !== w;
      }), !A.length && K.readable) K.end();
    }
  };
});

// Register to shared state
__$.Es6 = Es6;
