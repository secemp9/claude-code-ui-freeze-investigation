// Module: FV1
// Dependencies: RW, A9A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var FV1 = v((xtH, S3K) => {
  S3K.exports = I3K;
  var y3K = __$.RW(),
    jN2 = __$.A9A();
  function I3K() {
    y3K.call(this), this._firstChild = this._childNodes = null;
  }
  I3K.prototype = Object.create(y3K.prototype, {
    hasChildNodes: {
      value: function () {
        if (this._childNodes) return this._childNodes.length > 0;
        return this._firstChild !== null;
      }
    },
    childNodes: {
      get: function () {
        return this._ensureChildNodes(), this._childNodes;
      }
    },
    firstChild: {
      get: function () {
        if (this._childNodes) return this._childNodes.length === 0 ? null : this._childNodes[0];
        return this._firstChild;
      }
    },
    lastChild: {
      get: function () {
        var A = this._childNodes,
          K;
        if (A) return A.length === 0 ? null : A[A.length - 1];
        if (K = this._firstChild, K === null) return null;
        return K._previousSibling;
      }
    },
    _ensureChildNodes: {
      value: function () {
        if (this._childNodes) return;
        var A = this._firstChild,
          K = A,
          q = this._childNodes = new jN2();
        if (A) do q.push(K), K = K._nextSibling; while (K !== A);
        this._firstChild = null;
      }
    },
    removeChildren: {
      value: function () {
        var K = this.rooted ? this.ownerDocument : null,
          q = this.firstChild,
          Y;
        while (q !== null) {
          if (Y = q, q = Y.nextSibling, K) K.mutateRemove(Y);
          Y.parentNode = null;
        }
        if (this._childNodes) this._childNodes.length = 0;else this._firstChild = null;
        this.modify();
      }
    }
  });
});

// Register to shared state
__$.FV1 = FV1;
