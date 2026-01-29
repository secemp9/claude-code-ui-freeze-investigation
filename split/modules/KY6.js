// Module: KY6
// Dependencies: OY1, e96

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var KY6 = v(XN9 => {
  var JN9 = CA("process"),
    cS4 = __$.OY1(),
    ON9 = __$.e96();
  function gr(A, K) {
    for (let q = 0; q < A.length; ++q) if (A[q].type === K) return !0;
    return !1;
  }
  function lS4(A) {
    for (let K = 0; K < A.length; ++K) switch (A[K].type) {
      case "space":
      case "comment":
      case "newline":
        break;
      default:
        return K;
    }
    return -1;
  }
  function nS4(A) {
    switch (A?.type) {
      case "alias":
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
      case "flow-collection":
        return !0;
      default:
        return !1;
    }
  }
  function $Y1(A) {
    switch (A.type) {
      case "document":
        return A.start;
      case "block-map":
        {
          let K = A.items[A.items.length - 1];
          return K.sep ?? K.start;
        }
      case "block-seq":
        return A.items[A.items.length - 1].start;
      default:
        return [];
    }
  }
  function D$A(A) {
    if (A.length === 0) return [];
    let K = A.length;
    A: while (--K >= 0) switch (A[K].type) {
      case "doc-start":
      case "explicit-key-ind":
      case "map-value-ind":
      case "seq-item-ind":
      case "newline":
        break A;
    }
    while (A[++K]?.type === "space");
    return A.splice(K, A.length);
  }
  function iS4(A) {
    if (A.start.type === "flow-seq-start") {
      for (let K of A.items) if (K.sep && !K.value && !gr(K.start, "explicit-key-ind") && !gr(K.sep, "map-value-ind")) {
        if (K.key) K.value = K.key;
        if (delete K.key, nS4(K.value)) {
          if (K.value.end) Array.prototype.push.apply(K.value.end, K.sep);else K.value.end = K.sep;
        } else Array.prototype.push.apply(K.start, K.sep);
        delete K.sep;
      }
    }
  }
  class rS4 {
    constructor(A) {
      this.atNewLine = !0, this.atScalar = !1, this.indent = 0, this.offset = 0, this.onKeyLine = !1, this.stack = [], this.source = "", this.type = "", this.lexer = new ON9.Lexer(), this.onNewLine = A;
    }
    *parse(A, K = !1) {
      if (this.onNewLine && this.offset === 0) this.onNewLine(0);
      for (let q of this.lexer.lex(A, K)) yield* this.next(q);
      if (!K) yield* this.end();
    }
    *next(A) {
      if (this.source = A, JN9.env.LOG_TOKENS) console.log("|", cS4.prettyToken(A));
      if (this.atScalar) {
        this.atScalar = !1, yield* this.step(), this.offset += A.length;
        return;
      }
      let K = cS4.tokenType(A);
      if (!K) {
        let q = `Not a YAML token: ${A}`;
        yield* this.pop({
          type: "error",
          offset: this.offset,
          message: q,
          source: A
        }), this.offset += A.length;
      } else if (K === "scalar") this.atNewLine = !1, this.atScalar = !0, this.type = "scalar";else {
        switch (this.type = K, yield* this.step(), K) {
          case "newline":
            if (this.atNewLine = !0, this.indent = 0, this.onNewLine) this.onNewLine(this.offset + A.length);
            break;
          case "space":
            if (this.atNewLine && A[0] === " ") this.indent += A.length;
            break;
          case "explicit-key-ind":
          case "map-value-ind":
          case "seq-item-ind":
            if (this.atNewLine) this.indent += A.length;
            break;
          case "doc-mode":
          case "flow-error-end":
            return;
          default:
            this.atNewLine = !1;
        }
        this.offset += A.length;
      }
    }
    *end() {
      while (this.stack.length > 0) yield* this.pop();
    }
    get sourceToken() {
      return {
        type: this.type,
        offset: this.offset,
        indent: this.indent,
        source: this.source
      };
    }
    *step() {
      let A = this.peek(1);
      if (this.type === "doc-end" && (!A || A.type !== "doc-end")) {
        while (this.stack.length > 0) yield* this.pop();
        this.stack.push({
          type: "doc-end",
          offset: this.offset,
          source: this.source
        });
        return;
      }
      if (!A) return yield* this.stream();
      switch (A.type) {
        case "document":
          return yield* this.document(A);
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar":
          return yield* this.scalar(A);
        case "block-scalar":
          return yield* this.blockScalar(A);
        case "block-map":
          return yield* this.blockMap(A);
        case "block-seq":
          return yield* this.blockSequence(A);
        case "flow-collection":
          return yield* this.flowCollection(A);
        case "doc-end":
          return yield* this.documentEnd(A);
      }
      yield* this.pop();
    }
    peek(A) {
      return this.stack[this.stack.length - A];
    }
    *pop(A) {
      let K = A ?? this.stack.pop();
      if (!K) yield {
        type: "error",
        offset: this.offset,
        source: "",
        message: "Tried to pop an empty stack"
      };else if (this.stack.length === 0) yield K;else {
        let q = this.peek(1);
        if (K.type === "block-scalar") K.indent = "indent" in q ? q.indent : 0;else if (K.type === "flow-collection" && q.type === "document") K.indent = 0;
        if (K.type === "flow-collection") iS4(K);
        switch (q.type) {
          case "document":
            q.value = K;
            break;
          case "block-scalar":
            q.props.push(K);
            break;
          case "block-map":
            {
              let Y = q.items[q.items.length - 1];
              if (Y.value) {
                q.items.push({
                  start: [],
                  key: K,
                  sep: []
                }), this.onKeyLine = !0;
                return;
              } else if (Y.sep) Y.value = K;else {
                Object.assign(Y, {
                  key: K,
                  sep: []
                }), this.onKeyLine = !Y.explicitKey;
                return;
              }
              break;
            }
          case "block-seq":
            {
              let Y = q.items[q.items.length - 1];
              if (Y.value) q.items.push({
                start: [],
                value: K
              });else Y.value = K;
              break;
            }
          case "flow-collection":
            {
              let Y = q.items[q.items.length - 1];
              if (!Y || Y.value) q.items.push({
                start: [],
                key: K,
                sep: []
              });else if (Y.sep) Y.value = K;else Object.assign(Y, {
                key: K,
                sep: []
              });
              return;
            }
          default:
            yield* this.pop(), yield* this.pop(K);
        }
        if ((q.type === "document" || q.type === "block-map" || q.type === "block-seq") && (K.type === "block-map" || K.type === "block-seq")) {
          let Y = K.items[K.items.length - 1];
          if (Y && !Y.sep && !Y.value && Y.start.length > 0 && lS4(Y.start) === -1 && (K.indent === 0 || Y.start.every(z => z.type !== "comment" || z.indent < K.indent))) {
            if (q.type === "document") q.end = Y.start;else q.items.push({
              start: Y.start
            });
            K.items.splice(-1, 1);
          }
        }
      }
    }
    *stream() {
      switch (this.type) {
        case "directive-line":
          yield {
            type: "directive",
            offset: this.offset,
            source: this.source
          };
          return;
        case "byte-order-mark":
        case "space":
        case "comment":
        case "newline":
          yield this.sourceToken;
          return;
        case "doc-mode":
        case "doc-start":
          {
            let A = {
              type: "document",
              offset: this.offset,
              start: []
            };
            if (this.type === "doc-start") A.start.push(this.sourceToken);
            this.stack.push(A);
            return;
          }
      }
      yield {
        type: "error",
        offset: this.offset,
        message: `Unexpected ${this.type} token in YAML stream`,
        source: this.source
      };
    }
    *document(A) {
      if (A.value) return yield* this.lineEnd(A);
      switch (this.type) {
        case "doc-start":
          {
            if (lS4(A.start) !== -1) yield* this.pop(), yield* this.step();else A.start.push(this.sourceToken);
            return;
          }
        case "anchor":
        case "tag":
        case "space":
        case "comment":
        case "newline":
          A.start.push(this.sourceToken);
          return;
      }
      let K = this.startBlockValue(A);
      if (K) this.stack.push(K);else yield {
        type: "error",
        offset: this.offset,
        message: `Unexpected ${this.type} token in YAML document`,
        source: this.source
      };
    }
    *scalar(A) {
      if (this.type === "map-value-ind") {
        let K = $Y1(this.peek(2)),
          q = D$A(K),
          Y;
        if (A.end) Y = A.end, Y.push(this.sourceToken), delete A.end;else Y = [this.sourceToken];
        let z = {
          type: "block-map",
          offset: A.offset,
          indent: A.indent,
          items: [{
            start: q,
            key: A,
            sep: Y
          }]
        };
        this.onKeyLine = !0, this.stack[this.stack.length - 1] = z;
      } else yield* this.lineEnd(A);
    }
    *blockScalar(A) {
      switch (this.type) {
        case "space":
        case "comment":
        case "newline":
          A.props.push(this.sourceToken);
          return;
        case "scalar":
          if (A.source = this.source, this.atNewLine = !0, this.indent = 0, this.onNewLine) {
            let K = this.source.indexOf(`
`) + 1;
            while (K !== 0) this.onNewLine(this.offset + K), K = this.source.indexOf(`
`, K) + 1;
          }
          yield* this.pop();
          break;
        default:
          yield* this.pop(), yield* this.step();
      }
    }
    *blockMap(A) {
      let K = A.items[A.items.length - 1];
      switch (this.type) {
        case "newline":
          if (this.onKeyLine = !1, K.value) {
            let q = "end" in K.value ? K.value.end : void 0;
            if ((Array.isArray(q) ? q[q.length - 1] : void 0)?.type === "comment") q?.push(this.sourceToken);else A.items.push({
              start: [this.sourceToken]
            });
          } else if (K.sep) K.sep.push(this.sourceToken);else K.start.push(this.sourceToken);
          return;
        case "space":
        case "comment":
          if (K.value) A.items.push({
            start: [this.sourceToken]
          });else if (K.sep) K.sep.push(this.sourceToken);else {
            if (this.atIndentedComment(K.start, A.indent)) {
              let Y = A.items[A.items.length - 2]?.value?.end;
              if (Array.isArray(Y)) {
                Array.prototype.push.apply(Y, K.start), Y.push(this.sourceToken), A.items.pop();
                return;
              }
            }
            K.start.push(this.sourceToken);
          }
          return;
      }
      if (this.indent >= A.indent) {
        let q = !this.onKeyLine && this.indent === A.indent,
          Y = q && (K.sep || K.explicitKey) && this.type !== "seq-item-ind",
          z = [];
        if (Y && K.sep && !K.value) {
          let w = [];
          for (let H = 0; H < K.sep.length; ++H) {
            let J = K.sep[H];
            switch (J.type) {
              case "newline":
                w.push(H);
                break;
              case "space":
                break;
              case "comment":
                if (J.indent > A.indent) w.length = 0;
                break;
              default:
                w.length = 0;
            }
          }
          if (w.length >= 2) z = K.sep.splice(w[1]);
        }
        switch (this.type) {
          case "anchor":
          case "tag":
            if (Y || K.value) z.push(this.sourceToken), A.items.push({
              start: z
            }), this.onKeyLine = !0;else if (K.sep) K.sep.push(this.sourceToken);else K.start.push(this.sourceToken);
            return;
          case "explicit-key-ind":
            if (!K.sep && !K.explicitKey) K.start.push(this.sourceToken), K.explicitKey = !0;else if (Y || K.value) z.push(this.sourceToken), A.items.push({
              start: z,
              explicitKey: !0
            });else this.stack.push({
              type: "block-map",
              offset: this.offset,
              indent: this.indent,
              items: [{
                start: [this.sourceToken],
                explicitKey: !0
              }]
            });
            this.onKeyLine = !0;
            return;
          case "map-value-ind":
            if (K.explicitKey) {
              if (!K.sep) {
                if (gr(K.start, "newline")) Object.assign(K, {
                  key: null,
                  sep: [this.sourceToken]
                });else {
                  let w = D$A(K.start);
                  this.stack.push({
                    type: "block-map",
                    offset: this.offset,
                    indent: this.indent,
                    items: [{
                      start: w,
                      key: null,
                      sep: [this.sourceToken]
                    }]
                  });
                }
              } else if (K.value) A.items.push({
                start: [],
                key: null,
                sep: [this.sourceToken]
              });else if (gr(K.sep, "map-value-ind")) this.stack.push({
                type: "block-map",
                offset: this.offset,
                indent: this.indent,
                items: [{
                  start: z,
                  key: null,
                  sep: [this.sourceToken]
                }]
              });else if (nS4(K.key) && !gr(K.sep, "newline")) {
                let w = D$A(K.start),
                  H = K.key,
                  J = K.sep;
                J.push(this.sourceToken), delete K.key, delete K.sep, this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{
                    start: w,
                    key: H,
                    sep: J
                  }]
                });
              } else if (z.length > 0) K.sep = K.sep.concat(z, this.sourceToken);else K.sep.push(this.sourceToken);
            } else if (!K.sep) Object.assign(K, {
              key: null,
              sep: [this.sourceToken]
            });else if (K.value || Y) A.items.push({
              start: z,
              key: null,
              sep: [this.sourceToken]
            });else if (gr(K.sep, "map-value-ind")) this.stack.push({
              type: "block-map",
              offset: this.offset,
              indent: this.indent,
              items: [{
                start: [],
                key: null,
                sep: [this.sourceToken]
              }]
            });else K.sep.push(this.sourceToken);
            this.onKeyLine = !0;
            return;
          case "alias":
          case "scalar":
          case "single-quoted-scalar":
          case "double-quoted-scalar":
            {
              let w = this.flowScalar(this.type);
              if (Y || K.value) A.items.push({
                start: z,
                key: w,
                sep: []
              }), this.onKeyLine = !0;else if (K.sep) this.stack.push(w);else Object.assign(K, {
                key: w,
                sep: []
              }), this.onKeyLine = !0;
              return;
            }
          default:
            {
              let w = this.startBlockValue(A);
              if (w) {
                if (w.type === "block-seq") {
                  if (!K.explicitKey && K.sep && !gr(K.sep, "newline")) {
                    yield* this.pop({
                      type: "error",
                      offset: this.offset,
                      message: "Unexpected block-seq-ind on same line with key",
                      source: this.source
                    });
                    return;
                  }
                } else if (q) A.items.push({
                  start: z
                });
                this.stack.push(w);
                return;
              }
            }
        }
      }
      yield* this.pop(), yield* this.step();
    }
    *blockSequence(A) {
      let K = A.items[A.items.length - 1];
      switch (this.type) {
        case "newline":
          if (K.value) {
            let q = "end" in K.value ? K.value.end : void 0;
            if ((Array.isArray(q) ? q[q.length - 1] : void 0)?.type === "comment") q?.push(this.sourceToken);else A.items.push({
              start: [this.sourceToken]
            });
          } else K.start.push(this.sourceToken);
          return;
        case "space":
        case "comment":
          if (K.value) A.items.push({
            start: [this.sourceToken]
          });else {
            if (this.atIndentedComment(K.start, A.indent)) {
              let Y = A.items[A.items.length - 2]?.value?.end;
              if (Array.isArray(Y)) {
                Array.prototype.push.apply(Y, K.start), Y.push(this.sourceToken), A.items.pop();
                return;
              }
            }
            K.start.push(this.sourceToken);
          }
          return;
        case "anchor":
        case "tag":
          if (K.value || this.indent <= A.indent) break;
          K.start.push(this.sourceToken);
          return;
        case "seq-item-ind":
          if (this.indent !== A.indent) break;
          if (K.value || gr(K.start, "seq-item-ind")) A.items.push({
            start: [this.sourceToken]
          });else K.start.push(this.sourceToken);
          return;
      }
      if (this.indent > A.indent) {
        let q = this.startBlockValue(A);
        if (q) {
          this.stack.push(q);
          return;
        }
      }
      yield* this.pop(), yield* this.step();
    }
    *flowCollection(A) {
      let K = A.items[A.items.length - 1];
      if (this.type === "flow-error-end") {
        let q;
        do yield* this.pop(), q = this.peek(1); while (q && q.type === "flow-collection");
      } else if (A.end.length === 0) {
        switch (this.type) {
          case "comma":
          case "explicit-key-ind":
            if (!K || K.sep) A.items.push({
              start: [this.sourceToken]
            });else K.start.push(this.sourceToken);
            return;
          case "map-value-ind":
            if (!K || K.value) A.items.push({
              start: [],
              key: null,
              sep: [this.sourceToken]
            });else if (K.sep) K.sep.push(this.sourceToken);else Object.assign(K, {
              key: null,
              sep: [this.sourceToken]
            });
            return;
          case "space":
          case "comment":
          case "newline":
          case "anchor":
          case "tag":
            if (!K || K.value) A.items.push({
              start: [this.sourceToken]
            });else if (K.sep) K.sep.push(this.sourceToken);else K.start.push(this.sourceToken);
            return;
          case "alias":
          case "scalar":
          case "single-quoted-scalar":
          case "double-quoted-scalar":
            {
              let Y = this.flowScalar(this.type);
              if (!K || K.value) A.items.push({
                start: [],
                key: Y,
                sep: []
              });else if (K.sep) this.stack.push(Y);else Object.assign(K, {
                key: Y,
                sep: []
              });
              return;
            }
          case "flow-map-end":
          case "flow-seq-end":
            A.end.push(this.sourceToken);
            return;
        }
        let q = this.startBlockValue(A);
        if (q) this.stack.push(q);else yield* this.pop(), yield* this.step();
      } else {
        let q = this.peek(2);
        if (q.type === "block-map" && (this.type === "map-value-ind" && q.indent === A.indent || this.type === "newline" && !q.items[q.items.length - 1].sep)) yield* this.pop(), yield* this.step();else if (this.type === "map-value-ind" && q.type !== "flow-collection") {
          let Y = $Y1(q),
            z = D$A(Y);
          iS4(A);
          let w = A.end.splice(1, A.end.length);
          w.push(this.sourceToken);
          let H = {
            type: "block-map",
            offset: A.offset,
            indent: A.indent,
            items: [{
              start: z,
              key: A,
              sep: w
            }]
          };
          this.onKeyLine = !0, this.stack[this.stack.length - 1] = H;
        } else yield* this.lineEnd(A);
      }
    }
    flowScalar(A) {
      if (this.onNewLine) {
        let K = this.source.indexOf(`
`) + 1;
        while (K !== 0) this.onNewLine(this.offset + K), K = this.source.indexOf(`
`, K) + 1;
      }
      return {
        type: A,
        offset: this.offset,
        indent: this.indent,
        source: this.source
      };
    }
    startBlockValue(A) {
      switch (this.type) {
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar":
          return this.flowScalar(this.type);
        case "block-scalar-header":
          return {
            type: "block-scalar",
            offset: this.offset,
            indent: this.indent,
            props: [this.sourceToken],
            source: ""
          };
        case "flow-map-start":
        case "flow-seq-start":
          return {
            type: "flow-collection",
            offset: this.offset,
            indent: this.indent,
            start: this.sourceToken,
            items: [],
            end: []
          };
        case "seq-item-ind":
          return {
            type: "block-seq",
            offset: this.offset,
            indent: this.indent,
            items: [{
              start: [this.sourceToken]
            }]
          };
        case "explicit-key-ind":
          {
            this.onKeyLine = !0;
            let K = $Y1(A),
              q = D$A(K);
            return q.push(this.sourceToken), {
              type: "block-map",
              offset: this.offset,
              indent: this.indent,
              items: [{
                start: q,
                explicitKey: !0
              }]
            };
          }
        case "map-value-ind":
          {
            this.onKeyLine = !0;
            let K = $Y1(A),
              q = D$A(K);
            return {
              type: "block-map",
              offset: this.offset,
              indent: this.indent,
              items: [{
                start: q,
                key: null,
                sep: [this.sourceToken]
              }]
            };
          }
      }
      return null;
    }
    atIndentedComment(A, K) {
      if (this.type !== "comment") return !1;
      if (this.indent <= K) return !1;
      return A.every(q => q.type === "newline" || q.type === "space");
    }
    *documentEnd(A) {
      if (this.type !== "doc-mode") {
        if (A.end) A.end.push(this.sourceToken);else A.end = [this.sourceToken];
        if (this.type === "newline") yield* this.pop();
      }
    }
    *lineEnd(A) {
      switch (this.type) {
        case "comma":
        case "doc-start":
        case "doc-end":
        case "flow-seq-end":
        case "flow-map-end":
        case "map-value-ind":
          yield* this.pop(), yield* this.step();
          break;
        case "newline":
          this.onKeyLine = !1;
        case "space":
        case "comment":
        default:
          if (A.end) A.end.push(this.sourceToken);else A.end = [this.sourceToken];
          if (this.type === "newline") yield* this.pop();
      }
    }
  }
  XN9.Parser = rS4;
});

// Register to shared state
__$.KY6 = KY6;
