// Module: vUA
// Dependencies: ch6, P0, lV1, Bh6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vUA = v((ctH, _9K) => {
  _9K.exports = rV1;
  var $9K = __$.ch6(),
    X9K = __$.P0(),
    YT2 = __$.lV1(),
    zT2 = __$.Bh6();
  function rV1() {
    $9K.call(this);
  }
  rV1.prototype = Object.create($9K.prototype, {
    substringData: {
      value: function (K, q) {
        if (arguments.length < 2) throw TypeError("Not enough arguments");
        if (K = K >>> 0, q = q >>> 0, K > this.data.length || K < 0 || q < 0) X9K.IndexSizeError();
        return this.data.substring(K, K + q);
      }
    },
    appendData: {
      value: function (K) {
        if (arguments.length < 1) throw TypeError("Not enough arguments");
        this.data += String(K);
      }
    },
    insertData: {
      value: function (K, q) {
        return this.replaceData(K, 0, q);
      }
    },
    deleteData: {
      value: function (K, q) {
        return this.replaceData(K, q, "");
      }
    },
    replaceData: {
      value: function (K, q, Y) {
        var z = this.data,
          w = z.length;
        if (K = K >>> 0, q = q >>> 0, Y = String(Y), K > w || K < 0) X9K.IndexSizeError();
        if (K + q > w) q = w - K;
        var H = z.substring(0, K),
          J = z.substring(K + q);
        this.data = H + Y + J;
      }
    },
    isEqual: {
      value: function (K) {
        return this._data === K._data;
      }
    },
    length: {
      get: function () {
        return this.data.length;
      }
    }
  });
  Object.defineProperties(rV1.prototype, YT2);
  Object.defineProperties(rV1.prototype, zT2);
});

// Register to shared state
__$.vUA = vUA;
