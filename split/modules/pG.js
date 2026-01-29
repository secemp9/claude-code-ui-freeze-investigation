// Module: pG
// Dependencies: kB, zE6, $d7, Gd7, Dd7, oD1, VS, eD1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pG = v((ZEH, Bd7) => {
  var _X = Bd7.exports = __$.kB(),
    ud7 = __$.zE6(),
    yk6,
    Ik6;
  _X.codegen = __$.$d7();
  _X.fetch = __$.Gd7();
  _X.path = __$.Dd7();
  _X.fs = _X.inquire("fs");
  _X.toArray = function (K) {
    if (K) {
      var q = Object.keys(K),
        Y = Array(q.length),
        z = 0;
      while (z < q.length) Y[z] = K[q[z++]];
      return Y;
    }
    return [];
  };
  _X.toObject = function (K) {
    var q = {},
      Y = 0;
    while (Y < K.length) {
      var z = K[Y++],
        w = K[Y++];
      if (w !== void 0) q[z] = w;
    }
    return q;
  };
  var H92 = /\\/g,
    J92 = /"/g;
  _X.isReserved = function (K) {
    return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(K);
  };
  _X.safeProp = function (K) {
    if (!/^[$\w_]+$/.test(K) || _X.isReserved(K)) return '["' + K.replace(H92, "\\\\").replace(J92, "\\\"") + '"]';
    return "." + K;
  };
  _X.ucFirst = function (K) {
    return K.charAt(0).toUpperCase() + K.substring(1);
  };
  var O92 = /_([a-z])/g;
  _X.camelCase = function (K) {
    return K.substring(0, 1) + K.substring(1).replace(O92, function (q, Y) {
      return Y.toUpperCase();
    });
  };
  _X.compareFieldsById = function (K, q) {
    return K.id - q.id;
  };
  _X.decorateType = function (K, q) {
    if (K.$type) {
      if (q && K.$type.name !== q) _X.decorateRoot.remove(K.$type), K.$type.name = q, _X.decorateRoot.add(K.$type);
      return K.$type;
    }
    if (!yk6) yk6 = __$.oD1();
    var Y = new yk6(q || K.name);
    return _X.decorateRoot.add(Y), Y.ctor = K, Object.defineProperty(K, "$type", {
      value: Y,
      enumerable: !1
    }), Object.defineProperty(K.prototype, "$type", {
      value: Y,
      enumerable: !1
    }), Y;
  };
  var X92 = 0;
  _X.decorateEnum = function (K) {
    if (K.$type) return K.$type;
    if (!Ik6) Ik6 = __$.VS();
    var q = new Ik6("Enum" + X92++, K);
    return _X.decorateRoot.add(q), Object.defineProperty(K, "$type", {
      value: q,
      enumerable: !1
    }), q;
  };
  _X.setProperty = function (K, q, Y, z) {
    function w(H, J, O) {
      var X = J.shift();
      if (X === "__proto__" || X === "prototype") return H;
      if (J.length > 0) H[X] = w(H[X] || {}, J, O);else {
        var $ = H[X];
        if ($ && z) return H;
        if ($) O = [].concat($).concat(O);
        H[X] = O;
      }
      return H;
    }
    if (typeof K !== "object") throw TypeError("dst must be an object");
    if (!q) throw TypeError("path must be specified");
    return q = q.split("."), w(K, q, Y);
  };
  Object.defineProperty(_X, "decorateRoot", {
    get: function () {
      return ud7.decorated || (ud7.decorated = new (__$.eD1())());
    }
  });
});

// Register to shared state
__$.pG = pG;
