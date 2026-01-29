// Module: h9K
// Dependencies: RW, LUA, Kb6, P0

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var h9K = v((ttH, S9K) => {
  S9K.exports = I9K;
  var ZT2 = __$.RW(),
    yW = __$.LUA(),
    C9K = __$.Kb6(),
    y9K = __$.P0(),
    qb6 = {
      first: "firstChild",
      last: "lastChild",
      next: "firstChild",
      previous: "lastChild"
    },
    Yb6 = {
      first: "nextSibling",
      last: "previousSibling",
      next: "nextSibling",
      previous: "previousSibling"
    };
  function L9K(A, K) {
    var q, Y, z, w, H;
    Y = A._currentNode[qb6[K]];
    while (Y !== null) {
      if (w = A._internalFilter(Y), w === yW.FILTER_ACCEPT) return A._currentNode = Y, Y;
      if (w === yW.FILTER_SKIP) {
        if (q = Y[qb6[K]], q !== null) {
          Y = q;
          continue;
        }
      }
      while (Y !== null) {
        if (H = Y[Yb6[K]], H !== null) {
          Y = H;
          break;
        }
        if (z = Y.parentNode, z === null || z === A.root || z === A._currentNode) return null;else Y = z;
      }
    }
    return null;
  }
  function R9K(A, K) {
    var q, Y, z;
    if (q = A._currentNode, q === A.root) return null;
    while (!0) {
      z = q[Yb6[K]];
      while (z !== null) {
        if (q = z, Y = A._internalFilter(q), Y === yW.FILTER_ACCEPT) return A._currentNode = q, q;
        if (z = q[qb6[K]], Y === yW.FILTER_REJECT || z === null) z = q[Yb6[K]];
      }
      if (q = q.parentNode, q === null || q === A.root) return null;
      if (A._internalFilter(q) === yW.FILTER_ACCEPT) return null;
    }
  }
  function I9K(A, K, q) {
    if (!A || !A.nodeType) y9K.NotSupportedError();
    this._root = A, this._whatToShow = Number(K) || 0, this._filter = q || null, this._active = !1, this._currentNode = A;
  }
  Object.defineProperties(I9K.prototype, {
    root: {
      get: function () {
        return this._root;
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
    currentNode: {
      get: function () {
        return this._currentNode;
      },
      set: function (K) {
        if (!(K instanceof ZT2)) throw TypeError("Not a Node");
        this._currentNode = K;
      }
    },
    _internalFilter: {
      value: function (K) {
        var q, Y;
        if (this._active) y9K.InvalidStateError();
        if (!(1 << K.nodeType - 1 & this._whatToShow)) return yW.FILTER_SKIP;
        if (Y = this._filter, Y === null) q = yW.FILTER_ACCEPT;else {
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
    parentNode: {
      value: function () {
        var K = this._currentNode;
        while (K !== this.root) {
          if (K = K.parentNode, K === null) return null;
          if (this._internalFilter(K) === yW.FILTER_ACCEPT) return this._currentNode = K, K;
        }
        return null;
      }
    },
    firstChild: {
      value: function () {
        return L9K(this, "first");
      }
    },
    lastChild: {
      value: function () {
        return L9K(this, "last");
      }
    },
    previousSibling: {
      value: function () {
        return R9K(this, "previous");
      }
    },
    nextSibling: {
      value: function () {
        return R9K(this, "next");
      }
    },
    previousNode: {
      value: function () {
        var K, q, Y, z;
        K = this._currentNode;
        while (K !== this._root) {
          for (Y = K.previousSibling; Y; Y = K.previousSibling) {
            if (K = Y, q = this._internalFilter(K), q === yW.FILTER_REJECT) continue;
            for (z = K.lastChild; z; z = K.lastChild) if (K = z, q = this._internalFilter(K), q === yW.FILTER_REJECT) break;
            if (q === yW.FILTER_ACCEPT) return this._currentNode = K, K;
          }
          if (K === this.root || K.parentNode === null) return null;
          if (K = K.parentNode, this._internalFilter(K) === yW.FILTER_ACCEPT) return this._currentNode = K, K;
        }
        return null;
      }
    },
    nextNode: {
      value: function () {
        var K, q, Y, z;
        K = this._currentNode, q = yW.FILTER_ACCEPT;
        A: while (!0) {
          for (Y = K.firstChild; Y; Y = K.firstChild) if (K = Y, q = this._internalFilter(K), q === yW.FILTER_ACCEPT) return this._currentNode = K, K;else if (q === yW.FILTER_REJECT) break;
          for (z = C9K.nextSkippingChildren(K, this.root); z; z = C9K.nextSkippingChildren(K, this.root)) if (K = z, q = this._internalFilter(K), q === yW.FILTER_ACCEPT) return this._currentNode = K, K;else if (q === yW.FILTER_SKIP) continue A;
          return null;
        }
      }
    },
    toString: {
      value: function () {
        return "[object TreeWalker]";
      }
    }
  });
});

// Register to shared state
__$.h9K = h9K;
