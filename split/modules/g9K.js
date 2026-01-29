// Module: g9K
// Dependencies: LUA, Kb6, P0

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var g9K = v((etH, m9K) => {
  m9K.exports = B9K;
  var zb6 = __$.LUA(),
    wb6 = __$.Kb6(),
    u9K = __$.P0();
  function WT2(A, K, q) {
    if (q) return wb6.next(A, K);else {
      if (A === K) return null;
      return wb6.previous(A, null);
    }
  }
  function b9K(A, K) {
    for (; K; K = K.parentNode) if (A === K) return !0;
    return !1;
  }
  function x9K(A, K) {
    var q, Y;
    q = A._referenceNode, Y = A._pointerBeforeReferenceNode;
    while (!0) {
      if (Y === K) Y = !Y;else if (q = WT2(q, A._root, K), q === null) return null;
      var z = A._internalFilter(q);
      if (z === zb6.FILTER_ACCEPT) break;
    }
    return A._referenceNode = q, A._pointerBeforeReferenceNode = Y, q;
  }
  function B9K(A, K, q) {
    if (!A || !A.nodeType) u9K.NotSupportedError();
    this._root = A, this._referenceNode = A, this._pointerBeforeReferenceNode = !0, this._whatToShow = Number(K) || 0, this._filter = q || null, this._active = !1, A.doc._attachNodeIterator(this);
  }
  Object.defineProperties(B9K.prototype, {
    root: {
      get: function () {
        return this._root;
      }
    },
    referenceNode: {
      get: function () {
        return this._referenceNode;
      }
    },
    pointerBeforeReferenceNode: {
      get: function () {
        return this._pointerBeforeReferenceNode;
      }
    },
    whatToShow: {
      get: function () {
        return this._whatToShow;
      }
    },
    filter: {
      get: function () {
        return this._filter;
      }
    },
    _internalFilter: {
      value: function (K) {
        var q, Y;
        if (this._active) u9K.InvalidStateError();
        if (!(1 << K.nodeType - 1 & this._whatToShow)) return zb6.FILTER_SKIP;
        if (Y = this._filter, Y === null) q = zb6.FILTER_ACCEPT;else {
          this._active = !0;
          try {
            if (typeof Y === "function") q = Y(K);else q = Y.acceptNode(K);
          } finally {
            this._active = !1;
          }
        }
        return +q;
      }
    },
    _preremove: {
      value: function (K) {
        if (b9K(K, this._root)) return;
        if (!b9K(K, this._referenceNode)) return;
        if (this._pointerBeforeReferenceNode) {
          var q = K;
          while (q.lastChild) q = q.lastChild;
          if (q = wb6.next(q, this.root), q) {
            this._referenceNode = q;
            return;
          }
          this._pointerBeforeReferenceNode = !1;
        }
        if (K.previousSibling === null) this._referenceNode = K.parentNode;else {
          this._referenceNode = K.previousSibling;
          var Y;
          for (Y = this._referenceNode.lastChild; Y; Y = this._referenceNode.lastChild) this._referenceNode = Y;
        }
      }
    },
    nextNode: {
      value: function () {
        return x9K(this, !0);
      }
    },
    previousNode: {
      value: function () {
        return x9K(this, !1);
      }
    },
    detach: {
      value: function () {}
    },
    toString: {
      value: function () {
        return "[object NodeIterator]";
      }
    }
  });
});

// Register to shared state
__$.g9K = g9K;
