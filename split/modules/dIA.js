// Module: dIA
// Dependencies: y91, WY, QIA, pIA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dIA = v(qD9 => {
  var oW9 = __$.y91(),
    br = __$.WY(),
    aW9 = __$.QIA(),
    sW9 = __$.pIA();
  function tW9(A, K) {
    let q = Object.assign({
        blockQuote: !0,
        commentString: aW9.stringifyComment,
        defaultKeyType: null,
        defaultStringType: "PLAIN",
        directives: null,
        doubleQuotedAsJSON: !1,
        doubleQuotedMinMultiLineLength: 40,
        falseStr: "false",
        flowCollectionPadding: !0,
        indentSeq: !0,
        lineWidth: 80,
        minContentWidth: 20,
        nullStr: "null",
        simpleKeys: !1,
        singleQuote: null,
        trueStr: "true",
        verifyAliasOrder: !0
      }, A.schema.toStringOptions, K),
      Y;
    switch (q.collectionStyle) {
      case "block":
        Y = !1;
        break;
      case "flow":
        Y = !0;
        break;
      default:
        Y = null;
    }
    return {
      anchors: new Set(),
      doc: A,
      flowCollectionPadding: q.flowCollectionPadding ? " " : "",
      indent: "",
      indentStep: typeof q.indent === "number" ? " ".repeat(q.indent) : "  ",
      inFlow: Y,
      options: q
    };
  }
  function eW9(A, K) {
    if (K.tag) {
      let z = A.filter(w => w.tag === K.tag);
      if (z.length > 0) return z.find(w => w.format === K.format) ?? z[0];
    }
    let q = void 0,
      Y;
    if (br.isScalar(K)) {
      Y = K.value;
      let z = A.filter(w => w.identify?.(Y));
      if (z.length > 1) {
        let w = z.filter(H => H.test);
        if (w.length > 0) z = w;
      }
      q = z.find(w => w.format === K.format) ?? z.find(w => !w.format);
    } else Y = K, q = A.find(z => z.nodeClass && Y instanceof z.nodeClass);
    if (!q) {
      let z = Y?.constructor?.name ?? (Y === null ? "null" : typeof Y);
      throw Error(`Tag not resolved for ${z} value`);
    }
    return q;
  }
  function AD9(A, K, {
    anchors: q,
    doc: Y
  }) {
    if (!Y.directives) return "";
    let z = [],
      w = (br.isScalar(A) || br.isCollection(A)) && A.anchor;
    if (w && oW9.anchorIsValid(w)) q.add(w), z.push(`&${w}`);
    let H = A.tag ?? (K.default ? null : K.tag);
    if (H) z.push(Y.directives.tagString(H));
    return z.join(" ");
  }
  function KD9(A, K, q, Y) {
    if (br.isPair(A)) return A.toString(K, q, Y);
    if (br.isAlias(A)) {
      if (K.doc.directives) return A.toString(K);
      if (K.resolvedAliases?.has(A)) throw TypeError("Cannot stringify circular structure without alias nodes");else {
        if (K.resolvedAliases) K.resolvedAliases.add(A);else K.resolvedAliases = new Set([A]);
        A = A.resolve(K.doc);
      }
    }
    let z = void 0,
      w = br.isNode(A) ? A : K.doc.createNode(A, {
        onTagObj: O => z = O
      });
    z ?? (z = eW9(K.doc.schema.tags, w));
    let H = AD9(w, z, K);
    if (H.length > 0) K.indentAtStart = (K.indentAtStart ?? 0) + H.length + 1;
    let J = typeof z.stringify === "function" ? z.stringify(w, K, q, Y) : br.isScalar(w) ? sW9.stringifyString(w, K, q, Y) : w.toString(K, q, Y);
    if (!H) return J;
    return br.isScalar(w) || J[0] === "{" || J[0] === "[" ? `${H} ${J}` : `${H}
${K.indent}${J}`;
  }
  qD9.createStringifyContext = tW9;
  qD9.stringify = KD9;
});

// Register to shared state
__$.dIA = dIA;
