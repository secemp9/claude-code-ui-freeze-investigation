// Module: kb6
// Dependencies: hUA, Dh6, aYK, P0, tYK, A2K, Eb6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kb6 = v((feH, q2K) => {
  var vv2 = __$.hUA(),
    Ev2 = __$.Dh6(),
    kv2 = __$.aYK(),
    xUA = __$.P0();
  q2K.exports = Gf1;
  function Gf1(A) {
    this.document = A || new vv2(null).createHTMLDocument(""), this.document._scripting_enabled = !0, this.document.defaultView = this, this.location = new kv2(this, this.document._address || "about:blank");
  }
  Gf1.prototype = Object.create(Ev2.prototype, {
    console: {
      value: console
    },
    history: {
      value: {
        back: xUA.nyi,
        forward: xUA.nyi,
        go: xUA.nyi
      }
    },
    navigator: {
      value: __$.tYK()
    },
    window: {
      get: function () {
        return this;
      }
    },
    self: {
      get: function () {
        return this;
      }
    },
    frames: {
      get: function () {
        return this;
      }
    },
    parent: {
      get: function () {
        return this;
      }
    },
    top: {
      get: function () {
        return this;
      }
    },
    length: {
      value: 0
    },
    frameElement: {
      value: null
    },
    opener: {
      value: null
    },
    onload: {
      get: function () {
        return this._getEventHandler("load");
      },
      set: function (A) {
        this._setEventHandler("load", A);
      }
    },
    getComputedStyle: {
      value: function (K) {
        return K.style;
      }
    }
  });
  xUA.expose(__$.A2K(), Gf1);
  xUA.expose(__$.Eb6(), Gf1);
});

// Register to shared state
__$.kb6 = kb6;
