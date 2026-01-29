// Module: r36
// Dependencies: WY, BIA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var r36 = v(pZ9 => {
  var KI4 = __$.WY(),
    FZ9 = __$.BIA(),
    QZ9 = {
      "!": "%21",
      ",": "%2C",
      "[": "%5B",
      "]": "%5D",
      "{": "%7B",
      "}": "%7D"
    },
    UZ9 = A => A.replace(/[!,[\]{}]/g, K => QZ9[K]);
  class sk {
    constructor(A, K) {
      this.docStart = null, this.docEnd = !1, this.yaml = Object.assign({}, sk.defaultYaml, A), this.tags = Object.assign({}, sk.defaultTags, K);
    }
    clone() {
      let A = new sk(this.yaml, this.tags);
      return A.docStart = this.docStart, A;
    }
    atDocument() {
      let A = new sk(this.yaml, this.tags);
      switch (this.yaml.version) {
        case "1.1":
          this.atNextDocument = !0;
          break;
        case "1.2":
          this.atNextDocument = !1, this.yaml = {
            explicit: sk.defaultYaml.explicit,
            version: "1.2"
          }, this.tags = Object.assign({}, sk.defaultTags);
          break;
      }
      return A;
    }
    add(A, K) {
      if (this.atNextDocument) this.yaml = {
        explicit: sk.defaultYaml.explicit,
        version: "1.1"
      }, this.tags = Object.assign({}, sk.defaultTags), this.atNextDocument = !1;
      let q = A.trim().split(/[ \t]+/),
        Y = q.shift();
      switch (Y) {
        case "%TAG":
          {
            if (q.length !== 2) {
              if (K(0, "%TAG directive should contain exactly two parts"), q.length < 2) return !1;
            }
            let [z, w] = q;
            return this.tags[z] = w, !0;
          }
        case "%YAML":
          {
            if (this.yaml.explicit = !0, q.length !== 1) return K(0, "%YAML directive should contain exactly one part"), !1;
            let [z] = q;
            if (z === "1.1" || z === "1.2") return this.yaml.version = z, !0;else {
              let w = /^\d+\.\d+$/.test(z);
              return K(6, `Unsupported YAML version ${z}`, w), !1;
            }
          }
        default:
          return K(0, `Unknown directive ${Y}`, !0), !1;
      }
    }
    tagName(A, K) {
      if (A === "!") return "!";
      if (A[0] !== "!") return K(`Not a valid tag: ${A}`), null;
      if (A[1] === "<") {
        let w = A.slice(2, -1);
        if (w === "!" || w === "!!") return K(`Verbatim tags aren't resolved, so ${A} is invalid.`), null;
        if (A[A.length - 1] !== ">") K("Verbatim tags must end with a >");
        return w;
      }
      let [, q, Y] = A.match(/^(.*!)([^!]*)$/s);
      if (!Y) K(`The ${A} tag has no suffix`);
      let z = this.tags[q];
      if (z) try {
        return z + decodeURIComponent(Y);
      } catch (w) {
        return K(String(w)), null;
      }
      if (q === "!") return A;
      return K(`Could not resolve tag: ${A}`), null;
    }
    tagString(A) {
      for (let [K, q] of Object.entries(this.tags)) if (A.startsWith(q)) return K + UZ9(A.substring(q.length));
      return A[0] === "!" ? A : `!<${A}>`;
    }
    toString(A) {
      let K = this.yaml.explicit ? [`%YAML ${this.yaml.version || "1.2"}`] : [],
        q = Object.entries(this.tags),
        Y;
      if (A && q.length > 0 && KI4.isNode(A.contents)) {
        let z = {};
        FZ9.visit(A.contents, (w, H) => {
          if (KI4.isNode(H) && H.tag) z[H.tag] = !0;
        }), Y = Object.keys(z);
      } else Y = [];
      for (let [z, w] of q) {
        if (z === "!!" && w === "tag:yaml.org,2002:") continue;
        if (!A || Y.some(H => H.startsWith(w))) K.push(`%TAG ${z} ${w}`);
      }
      return K.join(`
`);
    }
  }
  sk.defaultYaml = {
    explicit: !1,
    version: "1.2"
  };
  sk.defaultTags = {
    "!!": "tag:yaml.org,2002:"
  };
  pZ9.Directives = sk;
});

// Register to shared state
__$.r36 = r36;
