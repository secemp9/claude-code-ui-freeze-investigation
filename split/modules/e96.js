// Module: e96
// Dependencies: OY1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var e96 = v(YN9 => {
  var zSA = __$.OY1();
  function Fy(A) {
    switch (A) {
      case void 0:
      case " ":
      case `
`:
      case "\r":
      case "\t":
        return !0;
      default:
        return !1;
    }
  }
  var US4 = new Set("0123456789ABCDEFabcdef"),
    KN9 = new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),
    XY1 = new Set(",[]{}"),
    qN9 = new Set(` ,[]{}
\r	`),
    t96 = A => !A || qN9.has(A);
  class pS4 {
    constructor() {
      this.atEnd = !1, this.blockScalarIndent = -1, this.blockScalarKeep = !1, this.buffer = "", this.flowKey = !1, this.flowLevel = 0, this.indentNext = 0, this.indentValue = 0, this.lineEndPos = null, this.next = null, this.pos = 0;
    }
    *lex(A, K = !1) {
      if (A) {
        if (typeof A !== "string") throw TypeError("source is not a string");
        this.buffer = this.buffer ? this.buffer + A : A, this.lineEndPos = null;
      }
      this.atEnd = !K;
      let q = this.next ?? "stream";
      while (q && (K || this.hasChars(1))) q = yield* this.parseNext(q);
    }
    atLineEnd() {
      let A = this.pos,
        K = this.buffer[A];
      while (K === " " || K === "\t") K = this.buffer[++A];
      if (!K || K === "#" || K === `
`) return !0;
      if (K === "\r") return this.buffer[A + 1] === `
`;
      return !1;
    }
    charAt(A) {
      return this.buffer[this.pos + A];
    }
    continueScalar(A) {
      let K = this.buffer[A];
      if (this.indentNext > 0) {
        let q = 0;
        while (K === " ") K = this.buffer[++q + A];
        if (K === "\r") {
          let Y = this.buffer[q + A + 1];
          if (Y === `
` || !Y && !this.atEnd) return A + q + 1;
        }
        return K === `
` || q >= this.indentNext || !K && !this.atEnd ? A + q : -1;
      }
      if (K === "-" || K === ".") {
        let q = this.buffer.substr(A, 3);
        if ((q === "---" || q === "...") && Fy(this.buffer[A + 3])) return -1;
      }
      return A;
    }
    getLine() {
      let A = this.lineEndPos;
      if (typeof A !== "number" || A !== -1 && A < this.pos) A = this.buffer.indexOf(`
`, this.pos), this.lineEndPos = A;
      if (A === -1) return this.atEnd ? this.buffer.substring(this.pos) : null;
      if (this.buffer[A - 1] === "\r") A -= 1;
      return this.buffer.substring(this.pos, A);
    }
    hasChars(A) {
      return this.pos + A <= this.buffer.length;
    }
    setNext(A) {
      return this.buffer = this.buffer.substring(this.pos), this.pos = 0, this.lineEndPos = null, this.next = A, null;
    }
    peek(A) {
      return this.buffer.substr(this.pos, A);
    }
    *parseNext(A) {
      switch (A) {
        case "stream":
          return yield* this.parseStream();
        case "line-start":
          return yield* this.parseLineStart();
        case "block-start":
          return yield* this.parseBlockStart();
        case "doc":
          return yield* this.parseDocument();
        case "flow":
          return yield* this.parseFlowCollection();
        case "quoted-scalar":
          return yield* this.parseQuotedScalar();
        case "block-scalar":
          return yield* this.parseBlockScalar();
        case "plain-scalar":
          return yield* this.parsePlainScalar();
      }
    }
    *parseStream() {
      let A = this.getLine();
      if (A === null) return this.setNext("stream");
      if (A[0] === zSA.BOM) yield* this.pushCount(1), A = A.substring(1);
      if (A[0] === "%") {
        let K = A.length,
          q = A.indexOf("#");
        while (q !== -1) {
          let z = A[q - 1];
          if (z === " " || z === "\t") {
            K = q - 1;
            break;
          } else q = A.indexOf("#", q + 1);
        }
        while (!0) {
          let z = A[K - 1];
          if (z === " " || z === "\t") K -= 1;else break;
        }
        let Y = (yield* this.pushCount(K)) + (yield* this.pushSpaces(!0));
        return yield* this.pushCount(A.length - Y), this.pushNewline(), "stream";
      }
      if (this.atLineEnd()) {
        let K = yield* this.pushSpaces(!0);
        return yield* this.pushCount(A.length - K), yield* this.pushNewline(), "stream";
      }
      return yield zSA.DOCUMENT, yield* this.parseLineStart();
    }
    *parseLineStart() {
      let A = this.charAt(0);
      if (!A && !this.atEnd) return this.setNext("line-start");
      if (A === "-" || A === ".") {
        if (!this.atEnd && !this.hasChars(4)) return this.setNext("line-start");
        let K = this.peek(3);
        if ((K === "---" || K === "...") && Fy(this.charAt(3))) return yield* this.pushCount(3), this.indentValue = 0, this.indentNext = 0, K === "---" ? "doc" : "stream";
      }
      if (this.indentValue = yield* this.pushSpaces(!1), this.indentNext > this.indentValue && !Fy(this.charAt(1))) this.indentNext = this.indentValue;
      return yield* this.parseBlockStart();
    }
    *parseBlockStart() {
      let [A, K] = this.peek(2);
      if (!K && !this.atEnd) return this.setNext("block-start");
      if ((A === "-" || A === "?" || A === ":") && Fy(K)) {
        let q = (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0));
        return this.indentNext = this.indentValue + 1, this.indentValue += q, yield* this.parseBlockStart();
      }
      return "doc";
    }
    *parseDocument() {
      yield* this.pushSpaces(!0);
      let A = this.getLine();
      if (A === null) return this.setNext("doc");
      let K = yield* this.pushIndicators();
      switch (A[K]) {
        case "#":
          yield* this.pushCount(A.length - K);
        case void 0:
          return yield* this.pushNewline(), yield* this.parseLineStart();
        case "{":
        case "[":
          return yield* this.pushCount(1), this.flowKey = !1, this.flowLevel = 1, "flow";
        case "}":
        case "]":
          return yield* this.pushCount(1), "doc";
        case "*":
          return yield* this.pushUntil(t96), "doc";
        case '"':
        case "'":
          return yield* this.parseQuotedScalar();
        case "|":
        case ">":
          return K += yield* this.parseBlockScalarHeader(), K += yield* this.pushSpaces(!0), yield* this.pushCount(A.length - K), yield* this.pushNewline(), yield* this.parseBlockScalar();
        default:
          return yield* this.parsePlainScalar();
      }
    }
    *parseFlowCollection() {
      let A,
        K,
        q = -1;
      do {
        if (A = yield* this.pushNewline(), A > 0) K = yield* this.pushSpaces(!1), this.indentValue = q = K;else K = 0;
        K += yield* this.pushSpaces(!0);
      } while (A + K > 0);
      let Y = this.getLine();
      if (Y === null) return this.setNext("flow");
      if (q !== -1 && q < this.indentNext && Y[0] !== "#" || q === 0 && (Y.startsWith("---") || Y.startsWith("...")) && Fy(Y[3])) {
        if (!(q === this.indentNext - 1 && this.flowLevel === 1 && (Y[0] === "]" || Y[0] === "}"))) return this.flowLevel = 0, yield zSA.FLOW_END, yield* this.parseLineStart();
      }
      let z = 0;
      while (Y[z] === ",") z += yield* this.pushCount(1), z += yield* this.pushSpaces(!0), this.flowKey = !1;
      switch (z += yield* this.pushIndicators(), Y[z]) {
        case void 0:
          return "flow";
        case "#":
          return yield* this.pushCount(Y.length - z), "flow";
        case "{":
        case "[":
          return yield* this.pushCount(1), this.flowKey = !1, this.flowLevel += 1, "flow";
        case "}":
        case "]":
          return yield* this.pushCount(1), this.flowKey = !0, this.flowLevel -= 1, this.flowLevel ? "flow" : "doc";
        case "*":
          return yield* this.pushUntil(t96), "flow";
        case '"':
        case "'":
          return this.flowKey = !0, yield* this.parseQuotedScalar();
        case ":":
          {
            let w = this.charAt(1);
            if (this.flowKey || Fy(w) || w === ",") return this.flowKey = !1, yield* this.pushCount(1), yield* this.pushSpaces(!0), "flow";
          }
        default:
          return this.flowKey = !1, yield* this.parsePlainScalar();
      }
    }
    *parseQuotedScalar() {
      let A = this.charAt(0),
        K = this.buffer.indexOf(A, this.pos + 1);
      if (A === "'") while (K !== -1 && this.buffer[K + 1] === "'") K = this.buffer.indexOf("'", K + 2);else while (K !== -1) {
        let z = 0;
        while (this.buffer[K - 1 - z] === "\\") z += 1;
        if (z % 2 === 0) break;
        K = this.buffer.indexOf('"', K + 1);
      }
      let q = this.buffer.substring(0, K),
        Y = q.indexOf(`
`, this.pos);
      if (Y !== -1) {
        while (Y !== -1) {
          let z = this.continueScalar(Y + 1);
          if (z === -1) break;
          Y = q.indexOf(`
`, z);
        }
        if (Y !== -1) K = Y - (q[Y - 1] === "\r" ? 2 : 1);
      }
      if (K === -1) {
        if (!this.atEnd) return this.setNext("quoted-scalar");
        K = this.buffer.length;
      }
      return yield* this.pushToIndex(K + 1, !1), this.flowLevel ? "flow" : "doc";
    }
    *parseBlockScalarHeader() {
      this.blockScalarIndent = -1, this.blockScalarKeep = !1;
      let A = this.pos;
      while (!0) {
        let K = this.buffer[++A];
        if (K === "+") this.blockScalarKeep = !0;else if (K > "0" && K <= "9") this.blockScalarIndent = Number(K) - 1;else if (K !== "-") break;
      }
      return yield* this.pushUntil(K => Fy(K) || K === "#");
    }
    *parseBlockScalar() {
      let A = this.pos - 1,
        K = 0,
        q;
      A: for (let z = this.pos; q = this.buffer[z]; ++z) switch (q) {
        case " ":
          K += 1;
          break;
        case `
`:
          A = z, K = 0;
          break;
        case "\r":
          {
            let w = this.buffer[z + 1];
            if (!w && !this.atEnd) return this.setNext("block-scalar");
            if (w === `
`) break;
          }
        default:
          break A;
      }
      if (!q && !this.atEnd) return this.setNext("block-scalar");
      if (K >= this.indentNext) {
        if (this.blockScalarIndent === -1) this.indentNext = K;else this.indentNext = this.blockScalarIndent + (this.indentNext === 0 ? 1 : this.indentNext);
        do {
          let z = this.continueScalar(A + 1);
          if (z === -1) break;
          A = this.buffer.indexOf(`
`, z);
        } while (A !== -1);
        if (A === -1) {
          if (!this.atEnd) return this.setNext("block-scalar");
          A = this.buffer.length;
        }
      }
      let Y = A + 1;
      q = this.buffer[Y];
      while (q === " ") q = this.buffer[++Y];
      if (q === "\t") {
        while (q === "\t" || q === " " || q === "\r" || q === `
`) q = this.buffer[++Y];
        A = Y - 1;
      } else if (!this.blockScalarKeep) do {
        let z = A - 1,
          w = this.buffer[z];
        if (w === "\r") w = this.buffer[--z];
        let H = z;
        while (w === " ") w = this.buffer[--z];
        if (w === `
` && z >= this.pos && z + 1 + K > H) A = z;else break;
      } while (!0);
      return yield zSA.SCALAR, yield* this.pushToIndex(A + 1, !0), yield* this.parseLineStart();
    }
    *parsePlainScalar() {
      let A = this.flowLevel > 0,
        K = this.pos - 1,
        q = this.pos - 1,
        Y;
      while (Y = this.buffer[++q]) if (Y === ":") {
        let z = this.buffer[q + 1];
        if (Fy(z) || A && XY1.has(z)) break;
        K = q;
      } else if (Fy(Y)) {
        let z = this.buffer[q + 1];
        if (Y === "\r") if (z === `
`) q += 1, Y = `
`, z = this.buffer[q + 1];else K = q;
        if (z === "#" || A && XY1.has(z)) break;
        if (Y === `
`) {
          let w = this.continueScalar(q + 1);
          if (w === -1) break;
          q = Math.max(q, w - 2);
        }
      } else {
        if (A && XY1.has(Y)) break;
        K = q;
      }
      if (!Y && !this.atEnd) return this.setNext("plain-scalar");
      return yield zSA.SCALAR, yield* this.pushToIndex(K + 1, !0), A ? "flow" : "doc";
    }
    *pushCount(A) {
      if (A > 0) return yield this.buffer.substr(this.pos, A), this.pos += A, A;
      return 0;
    }
    *pushToIndex(A, K) {
      let q = this.buffer.slice(this.pos, A);
      if (q) return yield q, this.pos += q.length, q.length;else if (K) yield "";
      return 0;
    }
    *pushIndicators() {
      switch (this.charAt(0)) {
        case "!":
          return (yield* this.pushTag()) + (yield* this.pushSpaces(!0)) + (yield* this.pushIndicators());
        case "&":
          return (yield* this.pushUntil(t96)) + (yield* this.pushSpaces(!0)) + (yield* this.pushIndicators());
        case "-":
        case "?":
        case ":":
          {
            let A = this.flowLevel > 0,
              K = this.charAt(1);
            if (Fy(K) || A && XY1.has(K)) {
              if (!A) this.indentNext = this.indentValue + 1;else if (this.flowKey) this.flowKey = !1;
              return (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0)) + (yield* this.pushIndicators());
            }
          }
      }
      return 0;
    }
    *pushTag() {
      if (this.charAt(1) === "<") {
        let A = this.pos + 2,
          K = this.buffer[A];
        while (!Fy(K) && K !== ">") K = this.buffer[++A];
        return yield* this.pushToIndex(K === ">" ? A + 1 : A, !1);
      } else {
        let A = this.pos + 1,
          K = this.buffer[A];
        while (K) if (KN9.has(K)) K = this.buffer[++A];else if (K === "%" && US4.has(this.buffer[A + 1]) && US4.has(this.buffer[A + 2])) K = this.buffer[A += 3];else break;
        return yield* this.pushToIndex(A, !1);
      }
    }
    *pushNewline() {
      let A = this.buffer[this.pos];
      if (A === `
`) return yield* this.pushCount(1);else if (A === "\r" && this.charAt(1) === `
`) return yield* this.pushCount(2);else return 0;
    }
    *pushSpaces(A) {
      let K = this.pos - 1,
        q;
      do q = this.buffer[++K]; while (q === " " || A && q === "\t");
      let Y = K - this.pos;
      if (Y > 0) yield this.buffer.substr(this.pos, Y), this.pos = K;
      return Y;
    }
    *pushUntil(A) {
      let K = this.pos,
        q = this.buffer[K];
      while (!A(q)) q = this.buffer[++K];
      return yield* this.pushToIndex(K, !1);
    }
  }
  YN9.Lexer = pS4;
});

// Register to shared state
__$.e96 = e96;
