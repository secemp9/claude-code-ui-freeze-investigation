// Module: QV6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QV6 = v(QN7 => {
  var gN7;
  Object.defineProperty(QN7, "__esModule", {
    value: !0
  });
  QN7.LRUCache = QN7.LinkedMap = QN7.Touch = void 0;
  var Aj;
  (function (A) {
    A.None = 0, A.First = 1, A.AsOld = A.First, A.Last = 2, A.AsNew = A.Last;
  })(Aj || (QN7.Touch = Aj = {}));
  class FV6 {
    constructor() {
      this[gN7] = "LinkedMap", this._map = new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
    }
    clear() {
      this._map.clear(), this._head = void 0, this._tail = void 0, this._size = 0, this._state++;
    }
    isEmpty() {
      return !this._head && !this._tail;
    }
    get size() {
      return this._size;
    }
    get first() {
      return this._head?.value;
    }
    get last() {
      return this._tail?.value;
    }
    has(A) {
      return this._map.has(A);
    }
    get(A, K = Aj.None) {
      let q = this._map.get(A);
      if (!q) return;
      if (K !== Aj.None) this.touch(q, K);
      return q.value;
    }
    set(A, K, q = Aj.None) {
      let Y = this._map.get(A);
      if (Y) {
        if (Y.value = K, q !== Aj.None) this.touch(Y, q);
      } else {
        switch (Y = {
          key: A,
          value: K,
          next: void 0,
          previous: void 0
        }, q) {
          case Aj.None:
            this.addItemLast(Y);
            break;
          case Aj.First:
            this.addItemFirst(Y);
            break;
          case Aj.Last:
            this.addItemLast(Y);
            break;
          default:
            this.addItemLast(Y);
            break;
        }
        this._map.set(A, Y), this._size++;
      }
      return this;
    }
    delete(A) {
      return !!this.remove(A);
    }
    remove(A) {
      let K = this._map.get(A);
      if (!K) return;
      return this._map.delete(A), this.removeItem(K), this._size--, K.value;
    }
    shift() {
      if (!this._head && !this._tail) return;
      if (!this._head || !this._tail) throw Error("Invalid list");
      let A = this._head;
      return this._map.delete(A.key), this.removeItem(A), this._size--, A.value;
    }
    forEach(A, K) {
      let q = this._state,
        Y = this._head;
      while (Y) {
        if (K) A.bind(K)(Y.value, Y.key, this);else A(Y.value, Y.key, this);
        if (this._state !== q) throw Error("LinkedMap got modified during iteration.");
        Y = Y.next;
      }
    }
    keys() {
      let A = this._state,
        K = this._head,
        q = {
          [Symbol.iterator]: () => {
            return q;
          },
          next: () => {
            if (this._state !== A) throw Error("LinkedMap got modified during iteration.");
            if (K) {
              let Y = {
                value: K.key,
                done: !1
              };
              return K = K.next, Y;
            } else return {
              value: void 0,
              done: !0
            };
          }
        };
      return q;
    }
    values() {
      let A = this._state,
        K = this._head,
        q = {
          [Symbol.iterator]: () => {
            return q;
          },
          next: () => {
            if (this._state !== A) throw Error("LinkedMap got modified during iteration.");
            if (K) {
              let Y = {
                value: K.value,
                done: !1
              };
              return K = K.next, Y;
            } else return {
              value: void 0,
              done: !0
            };
          }
        };
      return q;
    }
    entries() {
      let A = this._state,
        K = this._head,
        q = {
          [Symbol.iterator]: () => {
            return q;
          },
          next: () => {
            if (this._state !== A) throw Error("LinkedMap got modified during iteration.");
            if (K) {
              let Y = {
                value: [K.key, K.value],
                done: !1
              };
              return K = K.next, Y;
            } else return {
              value: void 0,
              done: !0
            };
          }
        };
      return q;
    }
    [(gN7 = Symbol.toStringTag, Symbol.iterator)]() {
      return this.entries();
    }
    trimOld(A) {
      if (A >= this.size) return;
      if (A === 0) {
        this.clear();
        return;
      }
      let K = this._head,
        q = this.size;
      while (K && q > A) this._map.delete(K.key), K = K.next, q--;
      if (this._head = K, this._size = q, K) K.previous = void 0;
      this._state++;
    }
    addItemFirst(A) {
      if (!this._head && !this._tail) this._tail = A;else if (!this._head) throw Error("Invalid list");else A.next = this._head, this._head.previous = A;
      this._head = A, this._state++;
    }
    addItemLast(A) {
      if (!this._head && !this._tail) this._head = A;else if (!this._tail) throw Error("Invalid list");else A.previous = this._tail, this._tail.next = A;
      this._tail = A, this._state++;
    }
    removeItem(A) {
      if (A === this._head && A === this._tail) this._head = void 0, this._tail = void 0;else if (A === this._head) {
        if (!A.next) throw Error("Invalid list");
        A.next.previous = void 0, this._head = A.next;
      } else if (A === this._tail) {
        if (!A.previous) throw Error("Invalid list");
        A.previous.next = void 0, this._tail = A.previous;
      } else {
        let {
          next: K,
          previous: q
        } = A;
        if (!K || !q) throw Error("Invalid list");
        K.previous = q, q.next = K;
      }
      A.next = void 0, A.previous = void 0, this._state++;
    }
    touch(A, K) {
      if (!this._head || !this._tail) throw Error("Invalid list");
      if (K !== Aj.First && K !== Aj.Last) return;
      if (K === Aj.First) {
        if (A === this._head) return;
        let {
          next: q,
          previous: Y
        } = A;
        if (A === this._tail) Y.next = void 0, this._tail = Y;else q.previous = Y, Y.next = q;
        A.previous = void 0, A.next = this._head, this._head.previous = A, this._head = A, this._state++;
      } else if (K === Aj.Last) {
        if (A === this._tail) return;
        let {
          next: q,
          previous: Y
        } = A;
        if (A === this._head) q.previous = void 0, this._head = q;else q.previous = Y, Y.next = q;
        A.next = void 0, A.previous = this._tail, this._tail.next = A, this._tail = A, this._state++;
      }
    }
    toJSON() {
      let A = [];
      return this.forEach((K, q) => {
        A.push([q, K]);
      }), A;
    }
    fromJSON(A) {
      this.clear();
      for (let [K, q] of A) this.set(K, q);
    }
  }
  QN7.LinkedMap = FV6;
  class FN7 extends FV6 {
    constructor(A, K = 1) {
      super();
      this._limit = A, this._ratio = Math.min(Math.max(0, K), 1);
    }
    get limit() {
      return this._limit;
    }
    set limit(A) {
      this._limit = A, this.checkTrim();
    }
    get ratio() {
      return this._ratio;
    }
    set ratio(A) {
      this._ratio = Math.min(Math.max(0, A), 1), this.checkTrim();
    }
    get(A, K = Aj.AsNew) {
      return super.get(A, K);
    }
    peek(A) {
      return super.get(A, Aj.None);
    }
    set(A, K) {
      return super.set(A, K, Aj.Last), this.checkTrim(), this;
    }
    checkTrim() {
      if (this.size > this._limit) this.trimOld(Math.round(this._limit * this._ratio));
    }
  }
  QN7.LRUCache = FN7;
});

// Register to shared state
__$.QV6 = QV6;
