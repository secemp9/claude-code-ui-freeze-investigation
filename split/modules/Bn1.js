// Module: Bn1
// Dependencies: uQ8, of, n

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Bn1 = v(BQ8 => {
  var ZT5 = __$.uQ8();
  function WT5(A) {
    return A.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function DT5(A) {
    return A.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#x0D;").replace(/\n/g, "&#x0A;").replace(/\u0085/g, "&#x85;").replace(/\u2028/, "&#x2028;");
  }
  class un1 {
    value;
    constructor(A) {
      this.value = A;
    }
    toString() {
      return DT5("" + this.value);
    }
  }
  class FCA {
    name;
    children;
    attributes = {};
    static of(A, K, q) {
      let Y = new FCA(A);
      if (K !== void 0) Y.addChildNode(new un1(K));
      if (q !== void 0) Y.withName(q);
      return Y;
    }
    constructor(A, K = []) {
      this.name = A, this.children = K;
    }
    withName(A) {
      return this.name = A, this;
    }
    addAttribute(A, K) {
      return this.attributes[A] = K, this;
    }
    addChildNode(A) {
      return this.children.push(A), this;
    }
    removeAttribute(A) {
      return delete this.attributes[A], this;
    }
    n(A) {
      return this.name = A, this;
    }
    c(A) {
      return this.children.push(A), this;
    }
    a(A, K) {
      if (K != null) this.attributes[A] = K;
      return this;
    }
    cc(A, K, q = K) {
      if (A[K] != null) {
        let Y = FCA.of(K, A[K]).withName(q);
        this.c(Y);
      }
    }
    l(A, K, q, Y) {
      if (A[K] != null) Y().map(w => {
        w.withName(q), this.c(w);
      });
    }
    lc(A, K, q, Y) {
      if (A[K] != null) {
        let z = Y(),
          w = new FCA(q);
        z.map(H => {
          w.c(H);
        }), this.c(w);
      }
    }
    toString() {
      let A = Boolean(this.children.length),
        K = `<${this.name}`,
        q = this.attributes;
      for (let Y of Object.keys(q)) {
        let z = q[Y];
        if (z != null) K += ` ${Y}="${WT5("" + z)}"`;
      }
      return K += !A ? "/>" : `>${this.children.map(Y => Y.toString()).join("")}</${this.name}>`;
    }
  }
  Object.defineProperty(BQ8, "parseXML", {
    enumerable: !0,
    get: function () {
      return ZT5.parseXML;
    }
  });
  BQ8.XmlNode = FCA;
  BQ8.XmlText = un1;
});

// Register to shared state
__$.Bn1 = Bn1;
