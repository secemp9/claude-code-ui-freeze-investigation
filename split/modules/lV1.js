// Module: lV1
// Dependencies: RW, jh6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lV1 = v((FtH, r3K) => {
  var pN2 = __$.RW(),
    dN2 = __$.jh6(),
    uh6 = function (A, K) {
      var q = A.createDocumentFragment();
      for (var Y = 0; Y < K.length; Y++) {
        var z = K[Y],
          w = z instanceof pN2;
        q.appendChild(w ? z : A.createTextNode(String(z)));
      }
      return q;
    },
    cN2 = {
      after: {
        value: function () {
          var K = Array.prototype.slice.call(arguments),
            q = this.parentNode,
            Y = this.nextSibling;
          if (q === null) return;
          while (Y && K.some(function (w) {
            return w === Y;
          })) Y = Y.nextSibling;
          var z = uh6(this.doc, K);
          q.insertBefore(z, Y);
        }
      },
      before: {
        value: function () {
          var K = Array.prototype.slice.call(arguments),
            q = this.parentNode,
            Y = this.previousSibling;
          if (q === null) return;
          while (Y && K.some(function (H) {
            return H === Y;
          })) Y = Y.previousSibling;
          var z = uh6(this.doc, K),
            w = Y ? Y.nextSibling : q.firstChild;
          q.insertBefore(z, w);
        }
      },
      remove: {
        value: function () {
          if (this.parentNode === null) return;
          if (this.doc) {
            if (this.doc._preremoveNodeIterators(this), this.rooted) this.doc.mutateRemove(this);
          }
          this._remove(), this.parentNode = null;
        }
      },
      _remove: {
        value: function () {
          var K = this.parentNode;
          if (K === null) return;
          if (K._childNodes) K._childNodes.splice(this.index, 1);else if (K._firstChild === this) if (this._nextSibling === this) K._firstChild = null;else K._firstChild = this._nextSibling;
          dN2.remove(this), K.modify();
        }
      },
      replaceWith: {
        value: function () {
          var K = Array.prototype.slice.call(arguments),
            q = this.parentNode,
            Y = this.nextSibling;
          if (q === null) return;
          while (Y && K.some(function (w) {
            return w === Y;
          })) Y = Y.nextSibling;
          var z = uh6(this.doc, K);
          if (this.parentNode === q) q.replaceChild(z, this);else q.insertBefore(z, Y);
        }
      }
    };
  r3K.exports = cN2;
});

// Register to shared state
__$.lV1 = lV1;
