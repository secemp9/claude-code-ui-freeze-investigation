// Module: c96
// Dependencies: r36, eIA, ASA, WY, IS4, W$A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var c96 = v(jf9 => {
  var _f9 = CA("process"),
    Gf9 = __$.r36(),
    Zf9 = __$.eIA(),
    qSA = __$.ASA(),
    SS4 = __$.WY(),
    Wf9 = __$.IS4(),
    Df9 = __$.W$A();
  function YSA(A) {
    if (typeof A === "number") return [A, A + 1];
    if (Array.isArray(A)) return A.length === 2 ? A : [A[0], A[1]];
    let {
      offset: K,
      source: q
    } = A;
    return [K, K + (typeof q === "string" ? q.length : 1)];
  }
  function hS4(A) {
    let K = "",
      q = !1,
      Y = !1;
    for (let z = 0; z < A.length; ++z) {
      let w = A[z];
      switch (w[0]) {
        case "#":
          K += (K === "" ? "" : Y ? `

` : `
`) + (w.substring(1) || " "), q = !0, Y = !1;
          break;
        case "%":
          if (A[z + 1]?.[0] !== "#") z += 1;
          q = !1;
          break;
        default:
          if (!q) Y = !0;
          q = !1;
      }
    }
    return {
      comment: K,
      afterEmptyLine: Y
    };
  }
  class bS4 {
    constructor(A = {}) {
      this.doc = null, this.atDirectives = !1, this.prelude = [], this.errors = [], this.warnings = [], this.onError = (K, q, Y, z) => {
        let w = YSA(K);
        if (z) this.warnings.push(new qSA.YAMLWarning(w, q, Y));else this.errors.push(new qSA.YAMLParseError(w, q, Y));
      }, this.directives = new Gf9.Directives({
        version: A.version || "1.2"
      }), this.options = A;
    }
    decorate(A, K) {
      let {
        comment: q,
        afterEmptyLine: Y
      } = hS4(this.prelude);
      if (q) {
        let z = A.contents;
        if (K) A.comment = A.comment ? `${A.comment}
${q}` : q;else if (Y || A.directives.docStart || !z) A.commentBefore = q;else if (SS4.isCollection(z) && !z.flow && z.items.length > 0) {
          let w = z.items[0];
          if (SS4.isPair(w)) w = w.key;
          let H = w.commentBefore;
          w.commentBefore = H ? `${q}
${H}` : q;
        } else {
          let w = z.commentBefore;
          z.commentBefore = w ? `${q}
${w}` : q;
        }
      }
      if (K) Array.prototype.push.apply(A.errors, this.errors), Array.prototype.push.apply(A.warnings, this.warnings);else A.errors = this.errors, A.warnings = this.warnings;
      this.prelude = [], this.errors = [], this.warnings = [];
    }
    streamInfo() {
      return {
        comment: hS4(this.prelude).comment,
        directives: this.directives,
        errors: this.errors,
        warnings: this.warnings
      };
    }
    *compose(A, K = !1, q = -1) {
      for (let Y of A) yield* this.next(Y);
      yield* this.end(K, q);
    }
    *next(A) {
      if (_f9.env.LOG_STREAM) console.dir(A, {
        depth: null
      });
      switch (A.type) {
        case "directive":
          this.directives.add(A.source, (K, q, Y) => {
            let z = YSA(A);
            z[0] += K, this.onError(z, "BAD_DIRECTIVE", q, Y);
          }), this.prelude.push(A.source), this.atDirectives = !0;
          break;
        case "document":
          {
            let K = Wf9.composeDoc(this.options, this.directives, A, this.onError);
            if (this.atDirectives && !K.directives.docStart) this.onError(A, "MISSING_CHAR", "Missing directives-end/doc-start indicator line");
            if (this.decorate(K, !1), this.doc) yield this.doc;
            this.doc = K, this.atDirectives = !1;
            break;
          }
        case "byte-order-mark":
        case "space":
          break;
        case "comment":
        case "newline":
          this.prelude.push(A.source);
          break;
        case "error":
          {
            let K = A.source ? `${A.message}: ${JSON.stringify(A.source)}` : A.message,
              q = new qSA.YAMLParseError(YSA(A), "UNEXPECTED_TOKEN", K);
            if (this.atDirectives || !this.doc) this.errors.push(q);else this.doc.errors.push(q);
            break;
          }
        case "doc-end":
          {
            if (!this.doc) {
              this.errors.push(new qSA.YAMLParseError(YSA(A), "UNEXPECTED_TOKEN", "Unexpected doc-end without preceding document"));
              break;
            }
            this.doc.directives.docEnd = !0;
            let K = Df9.resolveEnd(A.end, A.offset + A.source.length, this.doc.options.strict, this.onError);
            if (this.decorate(this.doc, !0), K.comment) {
              let q = this.doc.comment;
              this.doc.comment = q ? `${q}
${K.comment}` : K.comment;
            }
            this.doc.range[2] = K.offset;
            break;
          }
        default:
          this.errors.push(new qSA.YAMLParseError(YSA(A), "UNEXPECTED_TOKEN", `Unsupported token ${A.type}`));
      }
    }
    *end(A = !1, K = -1) {
      if (this.doc) this.decorate(this.doc, !0), yield this.doc, this.doc = null;else if (A) {
        let q = Object.assign({
            _directives: this.directives
          }, this.options),
          Y = new Zf9.Document(void 0, q);
        if (this.atDirectives) this.onError(K, "MISSING_CHAR", "Missing directives-end indicator line");
        Y.range = [0, K, K], this.decorate(Y, !1), yield Y;
      }
    }
  }
  jf9.Composer = bS4;
});

// Register to shared state
__$.c96 = c96;
