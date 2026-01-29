// Module: jI4
// Dependencies: WY, q$, dIA, QIA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jI4 = v(HD9 => {
  var iQ = __$.WY(),
    WI4 = __$.q$(),
    DI4 = __$.dIA(),
    cIA = __$.QIA();
  function wD9({
    key: A,
    value: K
  }, q, Y, z) {
    let {
        allNullValues: w,
        doc: H,
        indent: J,
        indentStep: O,
        options: {
          commentString: X,
          indentSeq: $,
          simpleKeys: _
        }
      } = q,
      G = iQ.isNode(A) && A.comment || null;
    if (_) {
      if (G) throw Error("With simple keys, key nodes cannot have comments");
      if (iQ.isCollection(A) || !iQ.isNode(A) && typeof A === "object") throw Error("With simple keys, collection cannot be used as a key value");
    }
    let Z = !_ && (!A || G && K == null && !q.inFlow || iQ.isCollection(A) || (iQ.isScalar(A) ? A.type === WI4.Scalar.BLOCK_FOLDED || A.type === WI4.Scalar.BLOCK_LITERAL : typeof A === "object"));
    q = Object.assign({}, q, {
      allNullValues: !1,
      implicitKey: !Z && (_ || !w),
      indent: J + O
    });
    let W = !1,
      D = !1,
      j = DI4.stringify(A, q, () => W = !0, () => D = !0);
    if (!Z && !q.inFlow && j.length > 1024) {
      if (_) throw Error("With simple keys, single line scalar must not span more than 1024 characters");
      Z = !0;
    }
    if (q.inFlow) {
      if (w || K == null) {
        if (W && Y) Y();
        return j === "" ? "?" : Z ? `? ${j}` : j;
      }
    } else if (w && !_ || K == null && Z) {
      if (j = `? ${j}`, G && !W) j += cIA.lineComment(j, q.indent, X(G));else if (D && z) z();
      return j;
    }
    if (W) G = null;
    if (Z) {
      if (G) j += cIA.lineComment(j, q.indent, X(G));
      j = `? ${j}
${J}:`;
    } else if (j = `${j}:`, G) j += cIA.lineComment(j, q.indent, X(G));
    let M, P, f;
    if (iQ.isNode(K)) M = !!K.spaceBefore, P = K.commentBefore, f = K.comment;else if (M = !1, P = null, f = null, K && typeof K === "object") K = H.createNode(K);
    if (q.implicitKey = !1, !Z && !G && iQ.isScalar(K)) q.indentAtStart = j.length + 1;
    if (D = !1, !$ && O.length >= 2 && !q.inFlow && !Z && iQ.isSeq(K) && !K.flow && !K.tag && !K.anchor) q.indent = q.indent.substring(2);
    let N = !1,
      T = DI4.stringify(K, q, () => N = !0, () => D = !0),
      C = " ";
    if (G || M || P) {
      if (C = M ? `
` : "", P) {
        let R = X(P);
        C += `
${cIA.indentComment(R, q.indent)}`;
      }
      if (T === "" && !q.inFlow) {
        if (C === `
`) C = `

`;
      } else C += `
${q.indent}`;
    } else if (!Z && iQ.isCollection(K)) {
      let R = T[0],
        x = T.indexOf(`
`),
        y = x !== -1,
        B = q.inFlow ?? K.flow ?? K.items.length === 0;
      if (y || !B) {
        let b = !1;
        if (y && (R === "&" || R === "!")) {
          let F = T.indexOf(" ");
          if (R === "&" && F !== -1 && F < x && T[F + 1] === "!") F = T.indexOf(" ", F + 1);
          if (F === -1 || x < F) b = !0;
        }
        if (!b) C = `
${q.indent}`;
      }
    } else if (T === "" || T[0] === `
`) C = "";
    if (j += C + T, q.inFlow) {
      if (N && Y) Y();
    } else if (f && !N) j += cIA.lineComment(j, q.indent, X(f));else if (D && z) z();
    return j;
  }
  HD9.stringifyPair = wD9;
});

// Register to shared state
__$.jI4 = jI4;
