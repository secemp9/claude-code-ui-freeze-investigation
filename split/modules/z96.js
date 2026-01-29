// Module: z96
// Dependencies: WY, dIA, QIA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var z96 = v(bD9 => {
  var A7A = __$.WY(),
    vI4 = __$.dIA(),
    U91 = __$.QIA();
  function ID9(A, K, q) {
    return (K.inFlow ?? A.flow ? hD9 : SD9)(A, K, q);
  }
  function SD9({
    comment: A,
    items: K
  }, q, {
    blockItemPrefix: Y,
    flowChars: z,
    itemIndent: w,
    onChompKeep: H,
    onComment: J
  }) {
    let {
        indent: O,
        options: {
          commentString: X
        }
      } = q,
      $ = Object.assign({}, q, {
        indent: w,
        type: null
      }),
      _ = !1,
      G = [];
    for (let W = 0; W < K.length; ++W) {
      let D = K[W],
        j = null;
      if (A7A.isNode(D)) {
        if (!_ && D.spaceBefore) G.push("");
        if (p91(q, G, D.commentBefore, _), D.comment) j = D.comment;
      } else if (A7A.isPair(D)) {
        let P = A7A.isNode(D.key) ? D.key : null;
        if (P) {
          if (!_ && P.spaceBefore) G.push("");
          p91(q, G, P.commentBefore, _);
        }
      }
      _ = !1;
      let M = vI4.stringify(D, $, () => j = null, () => _ = !0);
      if (j) M += U91.lineComment(M, w, X(j));
      if (_ && j) _ = !1;
      G.push(Y + M);
    }
    let Z;
    if (G.length === 0) Z = z.start + z.end;else {
      Z = G[0];
      for (let W = 1; W < G.length; ++W) {
        let D = G[W];
        Z += D ? `
${O}${D}` : `
`;
      }
    }
    if (A) {
      if (Z += `
` + U91.indentComment(X(A), O), J) J();
    } else if (_ && H) H();
    return Z;
  }
  function hD9({
    items: A
  }, K, {
    flowChars: q,
    itemIndent: Y
  }) {
    let {
      indent: z,
      indentStep: w,
      flowCollectionPadding: H,
      options: {
        commentString: J
      }
    } = K;
    Y += w;
    let O = Object.assign({}, K, {
        indent: Y,
        inFlow: !0,
        type: null
      }),
      X = !1,
      $ = 0,
      _ = [];
    for (let W = 0; W < A.length; ++W) {
      let D = A[W],
        j = null;
      if (A7A.isNode(D)) {
        if (D.spaceBefore) _.push("");
        if (p91(K, _, D.commentBefore, !1), D.comment) j = D.comment;
      } else if (A7A.isPair(D)) {
        let P = A7A.isNode(D.key) ? D.key : null;
        if (P) {
          if (P.spaceBefore) _.push("");
          if (p91(K, _, P.commentBefore, !1), P.comment) X = !0;
        }
        let f = A7A.isNode(D.value) ? D.value : null;
        if (f) {
          if (f.comment) j = f.comment;
          if (f.commentBefore) X = !0;
        } else if (D.value == null && P?.comment) j = P.comment;
      }
      if (j) X = !0;
      let M = vI4.stringify(D, O, () => j = null);
      if (W < A.length - 1) M += ",";
      if (j) M += U91.lineComment(M, Y, J(j));
      if (!X && (_.length > $ || M.includes(`
`))) X = !0;
      _.push(M), $ = _.length;
    }
    let {
      start: G,
      end: Z
    } = q;
    if (_.length === 0) return G + Z;else {
      if (!X) {
        let W = _.reduce((D, j) => D + j.length + 2, 2);
        X = K.options.lineWidth > 0 && W > K.options.lineWidth;
      }
      if (X) {
        let W = G;
        for (let D of _) W += D ? `
${w}${z}${D}` : `
`;
        return `${W}
${z}${Z}`;
      } else return `${G}${H}${_.join(" ")}${H}${Z}`;
    }
  }
  function p91({
    indent: A,
    options: {
      commentString: K
    }
  }, q, Y, z) {
    if (Y && z) Y = Y.replace(/^\n+/, "");
    if (Y) {
      let w = U91.indentComment(K(Y), A);
      q.push(w.trimStart());
    }
  }
  bD9.stringifyCollection = ID9;
});

// Register to shared state
__$.z96 = z96;
