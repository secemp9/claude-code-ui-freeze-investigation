// Module: Ri4
// Dependencies: ow6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ri4 = v(Sn9 => {
  var aw6 = __$.ow6();
  Sn9.implementation = class {
    constructor(K, q, {
      doNotStripQMark: Y = !1
    }) {
      let z = q[0];
      if (this._list = [], this._url = null, !Y && typeof z === "string" && z[0] === "?") z = z.slice(1);
      if (Array.isArray(z)) for (let w of z) {
        if (w.length !== 2) throw TypeError("Failed to construct 'URLSearchParams': parameter 1 sequence's element does not contain exactly two elements.");
        this._list.push([w[0], w[1]]);
      } else if (typeof z === "object" && Object.getPrototypeOf(z) === null) for (let w of Object.keys(z)) {
        let H = z[w];
        this._list.push([w, H]);
      } else this._list = aw6.parseUrlencodedString(z);
    }
    _updateSteps() {
      if (this._url !== null) {
        let K = aw6.serializeUrlencoded(this._list);
        if (K === "") K = null;
        this._url._url.query = K;
      }
    }
    get size() {
      return this._list.length;
    }
    append(K, q) {
      this._list.push([K, q]), this._updateSteps();
    }
    delete(K, q) {
      let Y = 0;
      while (Y < this._list.length) if (this._list[Y][0] === K && (q === void 0 || this._list[Y][1] === q)) this._list.splice(Y, 1);else Y++;
      this._updateSteps();
    }
    get(K) {
      for (let q of this._list) if (q[0] === K) return q[1];
      return null;
    }
    getAll(K) {
      let q = [];
      for (let Y of this._list) if (Y[0] === K) q.push(Y[1]);
      return q;
    }
    has(K, q) {
      for (let Y of this._list) if (Y[0] === K && (q === void 0 || Y[1] === q)) return !0;
      return !1;
    }
    set(K, q) {
      let Y = !1,
        z = 0;
      while (z < this._list.length) if (this._list[z][0] === K) {
        if (Y) this._list.splice(z, 1);else Y = !0, this._list[z][1] = q, z++;
      } else z++;
      if (!Y) this._list.push([K, q]);
      this._updateSteps();
    }
    sort() {
      this._list.sort((K, q) => {
        if (K[0] < q[0]) return -1;
        if (K[0] > q[0]) return 1;
        return 0;
      }), this._updateSteps();
    }
    [Symbol.iterator]() {
      return this._list[Symbol.iterator]();
    }
    toString() {
      return aw6.serializeUrlencoded(this._list);
    }
  };
});

// Register to shared state
__$.Ri4 = Ri4;
