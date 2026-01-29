// Module: OS4
// Dependencies: WY, dIA, QIA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var OS4 = v(DP9 => {
  var ZP9 = __$.WY(),
    y96 = __$.dIA(),
    tIA = __$.QIA();
  function WP9(A, K) {
    let q = [],
      Y = K.directives === !0;
    if (K.directives !== !1 && A.directives) {
      let O = A.directives.toString(A);
      if (O) q.push(O), Y = !0;else if (A.directives.docStart) Y = !0;
    }
    if (Y) q.push("---");
    let z = y96.createStringifyContext(A, K),
      {
        commentString: w
      } = z.options;
    if (A.commentBefore) {
      if (q.length !== 1) q.unshift("");
      let O = w(A.commentBefore);
      q.unshift(tIA.indentComment(O, ""));
    }
    let H = !1,
      J = null;
    if (A.contents) {
      if (ZP9.isNode(A.contents)) {
        if (A.contents.spaceBefore && Y) q.push("");
        if (A.contents.commentBefore) {
          let $ = w(A.contents.commentBefore);
          q.push(tIA.indentComment($, ""));
        }
        z.forceBlockIndent = !!A.comment, J = A.contents.comment;
      }
      let O = J ? void 0 : () => H = !0,
        X = y96.stringify(A.contents, z, () => J = null, O);
      if (J) X += tIA.lineComment(X, "", w(J));
      if ((X[0] === "|" || X[0] === ">") && q[q.length - 1] === "---") q[q.length - 1] = `--- ${X}`;else q.push(X);
    } else q.push(y96.stringify(A.contents, z));
    if (A.directives?.docEnd) {
      if (A.comment) {
        let O = w(A.comment);
        if (O.includes(`
`)) q.push("..."), q.push(tIA.indentComment(O, ""));else q.push(`... ${O}`);
      } else q.push("...");
    } else {
      let O = A.comment;
      if (O && H) O = O.replace(/^\n+/, "");
      if (O) {
        if ((!H || J) && q[q.length - 1] !== "") q.push("");
        q.push(tIA.indentComment(w(O), ""));
      }
    }
    return q.join(`
`) + `
`;
  }
  DP9.stringifyDocument = WP9;
});

// Register to shared state
__$.OS4 = OS4;
