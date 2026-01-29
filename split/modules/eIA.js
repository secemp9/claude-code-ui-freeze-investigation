// Module: eIA
// Dependencies: gIA, h91, WY, xr, Sr, R96, OS4, y91, o36, FIA
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eIA = v(EP9 => {
  var MP9 = __$.gIA(),
    G$A = __$.h91(),
    tk = __$.WY(),
    PP9 = __$.xr(),
    VP9 = __$.Sr(),
    fP9 = __$.R96(),
    NP9 = __$.OS4(),
    I96 = __$.y91(),
    TP9 = __$.o36(),
    vP9 = __$.FIA(),
    S96 = __$.r36();
  class h96 {
    constructor(A, K, q) {
      this.commentBefore = null, this.comment = null, this.errors = [], this.warnings = [], Object.defineProperty(this, tk.NODE_TYPE, {
        value: tk.DOC
      });
      let Y = null;
      if (typeof K === "function" || Array.isArray(K)) Y = K;else if (q === void 0 && K) q = K, K = void 0;
      let z = Object.assign({
        intAsBigInt: !1,
        keepSourceTokens: !1,
        logLevel: "warn",
        prettyErrors: !0,
        strict: !0,
        stringKeys: !1,
        uniqueKeys: !0,
        version: "1.2"
      }, q);
      this.options = z;
      let {
        version: w
      } = z;
      if (q?._directives) {
        if (this.directives = q._directives.atDocument(), this.directives.yaml.explicit) w = this.directives.yaml.version;
      } else this.directives = new S96.Directives({
        version: w
      });
      this.setSchema(w, q), this.contents = A === void 0 ? null : this.createNode(A, Y, q);
    }
    clone() {
      let A = Object.create(h96.prototype, {
        [tk.NODE_TYPE]: {
          value: tk.DOC
        }
      });
      if (A.commentBefore = this.commentBefore, A.comment = this.comment, A.errors = this.errors.slice(), A.warnings = this.warnings.slice(), A.options = Object.assign({}, this.options), this.directives) A.directives = this.directives.clone();
      if (A.schema = this.schema.clone(), A.contents = tk.isNode(this.contents) ? this.contents.clone(A.schema) : this.contents, this.range) A.range = this.range.slice();
      return A;
    }
    add(A) {
      if (Z$A(this.contents)) this.contents.add(A);
    }
    addIn(A, K) {
      if (Z$A(this.contents)) this.contents.addIn(A, K);
    }
    createAlias(A, K) {
      if (!A.anchor) {
        let q = I96.anchorNames(this);
        A.anchor = !K || q.has(K) ? I96.findNewAnchor(K || "a", q) : K;
      }
      return new MP9.Alias(A.anchor);
    }
    createNode(A, K, q) {
      let Y = void 0;
      if (typeof K === "function") A = K.call({
        "": A
      }, "", A), Y = K;else if (Array.isArray(K)) {
        let D = M => typeof M === "number" || M instanceof String || M instanceof Number,
          j = K.filter(D).map(String);
        if (j.length > 0) K = K.concat(j);
        Y = K;
      } else if (q === void 0 && K) q = K, K = void 0;
      let {
          aliasDuplicateObjects: z,
          anchorPrefix: w,
          flow: H,
          keepUndefined: J,
          onTagObj: O,
          tag: X
        } = q ?? {},
        {
          onAnchor: $,
          setAnchors: _,
          sourceObjects: G
        } = I96.createNodeAnchors(this, w || "a"),
        Z = {
          aliasDuplicateObjects: z ?? !0,
          keepUndefined: J ?? !1,
          onAnchor: $,
          onTagObj: O,
          replacer: Y,
          schema: this.schema,
          sourceObjects: G
        },
        W = vP9.createNode(A, X, Z);
      if (H && tk.isCollection(W)) W.flow = !0;
      return _(), W;
    }
    createPair(A, K, q = {}) {
      let Y = this.createNode(A, null, q),
        z = this.createNode(K, null, q);
      return new PP9.Pair(Y, z);
    }
    delete(A) {
      return Z$A(this.contents) ? this.contents.delete(A) : !1;
    }
    deleteIn(A) {
      if (G$A.isEmptyPath(A)) {
        if (this.contents == null) return !1;
        return this.contents = null, !0;
      }
      return Z$A(this.contents) ? this.contents.deleteIn(A) : !1;
    }
    get(A, K) {
      return tk.isCollection(this.contents) ? this.contents.get(A, K) : void 0;
    }
    getIn(A, K) {
      if (G$A.isEmptyPath(A)) return !K && tk.isScalar(this.contents) ? this.contents.value : this.contents;
      return tk.isCollection(this.contents) ? this.contents.getIn(A, K) : void 0;
    }
    has(A) {
      return tk.isCollection(this.contents) ? this.contents.has(A) : !1;
    }
    hasIn(A) {
      if (G$A.isEmptyPath(A)) return this.contents !== void 0;
      return tk.isCollection(this.contents) ? this.contents.hasIn(A) : !1;
    }
    set(A, K) {
      if (this.contents == null) this.contents = G$A.collectionFromPath(this.schema, [A], K);else if (Z$A(this.contents)) this.contents.set(A, K);
    }
    setIn(A, K) {
      if (G$A.isEmptyPath(A)) this.contents = K;else if (this.contents == null) this.contents = G$A.collectionFromPath(this.schema, Array.from(A), K);else if (Z$A(this.contents)) this.contents.setIn(A, K);
    }
    setSchema(A, K = {}) {
      if (typeof A === "number") A = String(A);
      let q;
      switch (A) {
        case "1.1":
          if (this.directives) this.directives.yaml.version = "1.1";else this.directives = new S96.Directives({
            version: "1.1"
          });
          q = {
            resolveKnownTags: !1,
            schema: "yaml-1.1"
          };
          break;
        case "1.2":
        case "next":
          if (this.directives) this.directives.yaml.version = A;else this.directives = new S96.Directives({
            version: A
          });
          q = {
            resolveKnownTags: !0,
            schema: "core"
          };
          break;
        case null:
          if (this.directives) delete this.directives;
          q = null;
          break;
        default:
          {
            let Y = JSON.stringify(A);
            throw Error(`Expected '1.1', '1.2' or null as first argument, but found: ${Y}`);
          }
      }
      if (K.schema instanceof Object) this.schema = K.schema;else if (q) this.schema = new fP9.Schema(Object.assign(q, K));else throw Error("With a null YAML version, the { schema: Schema } option is required");
    }
    toJS({
      json: A,
      jsonArg: K,
      mapAsMap: q,
      maxAliasCount: Y,
      onAnchor: z,
      reviver: w
    } = {}) {
      let H = {
          anchors: new Map(),
          doc: this,
          keep: !A,
          mapAsMap: q === !0,
          mapKeyWarned: !1,
          maxAliasCount: typeof Y === "number" ? Y : 100
        },
        J = VP9.toJS(this.contents, K ?? "", H);
      if (typeof z === "function") for (let {
        count: O,
        res: X
      } of H.anchors.values()) z(X, O);
      return typeof w === "function" ? TP9.applyReviver(w, {
        "": J
      }, "", J) : J;
    }
    toJSON(A, K) {
      return this.toJS({
        json: !0,
        jsonArg: A,
        mapAsMap: !1,
        onAnchor: K
      });
    }
    toString(A = {}) {
      if (this.errors.length > 0) throw Error("Document with errors cannot be stringified");
      if ("indent" in A && (!Number.isInteger(A.indent) || Number(A.indent) <= 0)) {
        let K = JSON.stringify(A.indent);
        throw Error(`"indent" option must be a positive integer, not ${K}`);
      }
      return NP9.stringifyDocument(this, A);
    }
  }
  function Z$A(A) {
    if (tk.isCollection(A)) return !0;
    throw Error("Expected a YAML collection as document contents");
  }
  EP9.Document = h96;
});

// Register to shared state
__$.eIA = eIA;
