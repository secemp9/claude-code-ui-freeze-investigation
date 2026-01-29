// Module: sV1
// Dependencies: n9K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sV1 = v((zeH, t9K) => {
  var {
    parse: MT2
  } = __$.n9K();
  t9K.exports = function (A) {
    let K = new s9K(A);
    return new Proxy(K, {
      get: function (Y, z) {
        return z in Y ? Y[z] : Y.getPropertyValue(r9K(z));
      },
      has: function (Y, z) {
        return !0;
      },
      set: function (Y, z, w) {
        if (z in Y) Y[z] = w;else Y.setProperty(r9K(z), w ?? void 0);
        return !0;
      }
    });
  };
  function r9K(A) {
    return A.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function s9K(A) {
    this._element = A;
  }
  var o9K = "!important";
  function a9K(A) {
    let K = {
      property: {},
      priority: {}
    };
    if (!A) return K;
    let q = MT2(A);
    if (q.length < 2) return K;
    for (let Y = 0; Y < q.length; Y += 2) {
      let z = q[Y],
        w = q[Y + 1];
      if (w.endsWith(o9K)) K.priority[z] = "important", w = w.slice(0, -o9K.length).trim();
      K.property[z] = w;
    }
    return K;
  }
  var UMA = {};
  s9K.prototype = Object.create(Object.prototype, {
    _parsed: {
      get: function () {
        if (!this._parsedStyles || this.cssText !== this._lastParsedText) {
          var A = this.cssText;
          this._parsedStyles = a9K(A), this._lastParsedText = A, delete this._names;
        }
        return this._parsedStyles;
      }
    },
    _serialize: {
      value: function () {
        var A = this._parsed,
          K = "";
        for (var q in A.property) {
          if (K) K += " ";
          if (K += q + ": " + A.property[q], A.priority[q]) K += " !" + A.priority[q];
          K += ";";
        }
        this.cssText = K, this._lastParsedText = K, delete this._names;
      }
    },
    cssText: {
      get: function () {
        return this._element.getAttribute("style");
      },
      set: function (A) {
        this._element.setAttribute("style", A);
      }
    },
    length: {
      get: function () {
        if (!this._names) this._names = Object.getOwnPropertyNames(this._parsed.property);
        return this._names.length;
      }
    },
    item: {
      value: function (A) {
        if (!this._names) this._names = Object.getOwnPropertyNames(this._parsed.property);
        return this._names[A];
      }
    },
    getPropertyValue: {
      value: function (A) {
        return A = A.toLowerCase(), this._parsed.property[A] || "";
      }
    },
    getPropertyPriority: {
      value: function (A) {
        return A = A.toLowerCase(), this._parsed.priority[A] || "";
      }
    },
    setProperty: {
      value: function (A, K, q) {
        if (A = A.toLowerCase(), K === null || K === void 0) K = "";
        if (q === null || q === void 0) q = "";
        if (K !== UMA) K = "" + K;
        if (K = K.trim(), K === "") {
          this.removeProperty(A);
          return;
        }
        if (q !== "" && q !== UMA && !/^important$/i.test(q)) return;
        var Y = this._parsed;
        if (K === UMA) {
          if (!Y.property[A]) return;
          if (q !== "") Y.priority[A] = "important";else delete Y.priority[A];
        } else {
          if (K.indexOf(";") !== -1) return;
          var z = a9K(A + ":" + K);
          if (Object.getOwnPropertyNames(z.property).length === 0) return;
          if (Object.getOwnPropertyNames(z.priority).length !== 0) return;
          for (var w in z.property) if (Y.property[w] = z.property[w], q === UMA) continue;else if (q !== "") Y.priority[w] = "important";else if (Y.priority[w]) delete Y.priority[w];
        }
        this._serialize();
      }
    },
    setPropertyValue: {
      value: function (A, K) {
        return this.setProperty(A, K, UMA);
      }
    },
    setPropertyPriority: {
      value: function (A, K) {
        return this.setProperty(A, UMA, K);
      }
    },
    removeProperty: {
      value: function (A) {
        A = A.toLowerCase();
        var K = this._parsed;
        if (A in K.property) delete K.property[A], delete K.priority[A], this._serialize();
      }
    }
  });
});

// Register to shared state
__$.sV1 = sV1;
