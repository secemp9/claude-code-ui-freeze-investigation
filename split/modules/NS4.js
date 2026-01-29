// Module: NS4
// Dependencies: WY, q$, Br, mr, jS4, MS4, fS4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var NS4 = v(TV9 => {
  var WV9 = __$.WY(),
    DV9 = __$.q$(),
    jV9 = __$.Br(),
    MV9 = __$.mr(),
    PV9 = __$.jS4(),
    VV9 = __$.MS4(),
    fV9 = __$.fS4();
  function g96(A, K, q, Y, z, w) {
    let H = q.type === "block-map" ? PV9.resolveBlockMap(A, K, q, Y, w) : q.type === "block-seq" ? VV9.resolveBlockSeq(A, K, q, Y, w) : fV9.resolveFlowCollection(A, K, q, Y, w),
      J = H.constructor;
    if (z === "!" || z === J.tagName) return H.tag = J.tagName, H;
    if (z) H.tag = z;
    return H;
  }
  function NV9(A, K, q, Y, z) {
    let w = Y.tag,
      H = !w ? null : K.directives.tagName(w.source, G => z(w, "TAG_RESOLVE_FAILED", G));
    if (q.type === "block-seq") {
      let {
          anchor: G,
          newlineAfterProp: Z
        } = Y,
        W = G && w ? G.offset > w.offset ? G : w : G ?? w;
      if (W && (!Z || Z.offset < W.offset)) z(W, "MISSING_CHAR", "Missing newline after block sequence props");
    }
    let J = q.type === "block-map" ? "map" : q.type === "block-seq" ? "seq" : q.start.source === "{" ? "map" : "seq";
    if (!w || !H || H === "!" || H === jV9.YAMLMap.tagName && J === "map" || H === MV9.YAMLSeq.tagName && J === "seq") return g96(A, K, q, z, H);
    let O = K.schema.tags.find(G => G.tag === H && G.collection === J);
    if (!O) {
      let G = K.schema.knownTags[H];
      if (G && G.collection === J) K.schema.tags.push(Object.assign({}, G, {
        default: !1
      })), O = G;else {
        if (G) z(w, "BAD_COLLECTION_TYPE", `${G.tag} used for ${J} collection, but expects ${G.collection ?? "scalar"}`, !0);else z(w, "TAG_RESOLVE_FAILED", `Unresolved tag: ${H}`, !0);
        return g96(A, K, q, z, H);
      }
    }
    let X = g96(A, K, q, z, H, O),
      $ = O.resolve?.(X, G => z(w, "TAG_RESOLVE_FAILED", G), K.options) ?? X,
      _ = WV9.isNode($) ? $ : new DV9.Scalar($);
    if (_.range = X.range, _.tag = H, O?.format) _.format = O.format;
    return _;
  }
  TV9.composeCollection = NV9;
});

// Register to shared state
__$.NS4 = NS4;
