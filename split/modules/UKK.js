// Module: UKK
// Dependencies: CM2, uI6, JK, af, Hm, iQA, gt, Ft, V6, GMA
//   ... and 44 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var UKK = k(() => {
  __$.CM2 = Object.defineProperty, __$.uI6 = 4 * __$.JK, __$.af = 5 * __$.JK, __$.Hm = 2 * __$.JK, __$.iQA = 2 * __$.JK + 2 * __$.Hm, __$.gt = {
    row: 0,
    column: 0
  }, __$.Ft = Symbol("INTERNAL");
  __$.V6(__$.GMA, "assertInternal");
  __$.V6(__$.lQA, "isPoint");
  __$.V6(__$.yKK, "setModule");
  __$.LM2 = class {
    static {
      __$.V6(this, "LookaheadIterator");
    }
    [0] = 0;
    language;
    constructor(A, K, q) {
      __$.GMA(A), this[0] = K, this.language = q;
    }
    get currentTypeId() {
      return __$._1._ts_lookahead_iterator_current_symbol(this[0]);
    }
    get currentType() {
      return this.language.types[this.currentTypeId] || "ERROR";
    }
    delete() {
      __$._1._ts_lookahead_iterator_delete(this[0]), this[0] = 0;
    }
    reset(A, K) {
      if (__$._1._ts_lookahead_iterator_reset(this[0], A[0], K)) return this.language = A, !0;
      return !1;
    }
    resetState(A) {
      return Boolean(__$._1._ts_lookahead_iterator_reset_state(this[0], A));
    }
    [Symbol.iterator]() {
      return {
        next: __$.V6(() => {
          if (__$._1._ts_lookahead_iterator_next(this[0])) return {
            done: !1,
            value: this.currentType
          };
          return {
            done: !0,
            value: ""
          };
        }, "next")
      };
    }
  };
  __$.V6(__$.FI6, "getText");
  __$.RM2 = class A {
    static {
      __$.V6(this, "Tree");
    }
    [0] = 0;
    textCallback;
    language;
    constructor(K, q, Y, z) {
      __$.GMA(K), this[0] = q, this.language = Y, this.textCallback = z;
    }
    copy() {
      let K = __$._1._ts_tree_copy(this[0]);
      return new A(__$.Ft, K, this.language, this.textCallback);
    }
    delete() {
      __$._1._ts_tree_delete(this[0]), this[0] = 0;
    }
    get rootNode() {
      return __$._1._ts_tree_root_node_wasm(this[0]), __$.uJ(this);
    }
    rootNodeWithOffset(K, q) {
      let Y = __$.Q7 + __$.af;
      return __$._1.setValue(Y, K, "i32"), __$.ML(Y + __$.JK, q), __$._1._ts_tree_root_node_with_offset_wasm(this[0]), __$.uJ(this);
    }
    edit(K) {
      __$.SKK(K), __$._1._ts_tree_edit_wasm(this[0]);
    }
    walk() {
      return this.rootNode.walk();
    }
    getChangedRanges(K) {
      if (!(K instanceof A)) throw TypeError("Argument must be a Tree");
      __$._1._ts_tree_get_changed_ranges_wasm(this[0], K[0]);
      let q = __$._1.getValue(__$.Q7, "i32"),
        Y = __$._1.getValue(__$.Q7 + __$.JK, "i32"),
        z = Array(q);
      if (q > 0) {
        let w = Y;
        for (let H = 0; H < q; H++) z[H] = __$.oP1(w), w += __$.iQA;
        __$._1._free(Y);
      }
      return z;
    }
    getIncludedRanges() {
      __$._1._ts_tree_included_ranges_wasm(this[0]);
      let K = __$._1.getValue(__$.Q7, "i32"),
        q = __$._1.getValue(__$.Q7 + __$.JK, "i32"),
        Y = Array(K);
      if (K > 0) {
        let z = q;
        for (let w = 0; w < K; w++) Y[w] = __$.oP1(z), z += __$.iQA;
        __$._1._free(q);
      }
      return Y;
    }
  }, __$.yM2 = class A {
    static {
      __$.V6(this, "TreeCursor");
    }
    [0] = 0;
    [1] = 0;
    [2] = 0;
    [3] = 0;
    tree;
    constructor(K, q) {
      __$.GMA(K), this.tree = q, __$.Tv(this);
    }
    copy() {
      let K = new A(__$.Ft, this.tree);
      return __$._1._ts_tree_cursor_copy_wasm(this.tree[0]), __$.Tv(K), K;
    }
    delete() {
      __$.bw(this), __$._1._ts_tree_cursor_delete_wasm(this.tree[0]), this[0] = this[1] = this[2] = 0;
    }
    get currentNode() {
      return __$.bw(this), __$._1._ts_tree_cursor_current_node_wasm(this.tree[0]), __$.uJ(this.tree);
    }
    get currentFieldId() {
      return __$.bw(this), __$._1._ts_tree_cursor_current_field_id_wasm(this.tree[0]);
    }
    get currentFieldName() {
      return this.tree.language.fields[this.currentFieldId];
    }
    get currentDepth() {
      return __$.bw(this), __$._1._ts_tree_cursor_current_depth_wasm(this.tree[0]);
    }
    get currentDescendantIndex() {
      return __$.bw(this), __$._1._ts_tree_cursor_current_descendant_index_wasm(this.tree[0]);
    }
    get nodeType() {
      return this.tree.language.types[this.nodeTypeId] || "ERROR";
    }
    get nodeTypeId() {
      return __$.bw(this), __$._1._ts_tree_cursor_current_node_type_id_wasm(this.tree[0]);
    }
    get nodeStateId() {
      return __$.bw(this), __$._1._ts_tree_cursor_current_node_state_id_wasm(this.tree[0]);
    }
    get nodeId() {
      return __$.bw(this), __$._1._ts_tree_cursor_current_node_id_wasm(this.tree[0]);
    }
    get nodeIsNamed() {
      return __$.bw(this), __$._1._ts_tree_cursor_current_node_is_named_wasm(this.tree[0]) === 1;
    }
    get nodeIsMissing() {
      return __$.bw(this), __$._1._ts_tree_cursor_current_node_is_missing_wasm(this.tree[0]) === 1;
    }
    get nodeText() {
      __$.bw(this);
      let K = __$._1._ts_tree_cursor_start_index_wasm(this.tree[0]),
        q = __$._1._ts_tree_cursor_end_index_wasm(this.tree[0]);
      __$._1._ts_tree_cursor_start_position_wasm(this.tree[0]);
      let Y = __$.d3A(__$.Q7);
      return __$.FI6(this.tree, K, q, Y);
    }
    get startPosition() {
      return __$.bw(this), __$._1._ts_tree_cursor_start_position_wasm(this.tree[0]), __$.d3A(__$.Q7);
    }
    get endPosition() {
      return __$.bw(this), __$._1._ts_tree_cursor_end_position_wasm(this.tree[0]), __$.d3A(__$.Q7);
    }
    get startIndex() {
      return __$.bw(this), __$._1._ts_tree_cursor_start_index_wasm(this.tree[0]);
    }
    get endIndex() {
      return __$.bw(this), __$._1._ts_tree_cursor_end_index_wasm(this.tree[0]);
    }
    gotoFirstChild() {
      __$.bw(this);
      let K = __$._1._ts_tree_cursor_goto_first_child_wasm(this.tree[0]);
      return __$.Tv(this), K === 1;
    }
    gotoLastChild() {
      __$.bw(this);
      let K = __$._1._ts_tree_cursor_goto_last_child_wasm(this.tree[0]);
      return __$.Tv(this), K === 1;
    }
    gotoParent() {
      __$.bw(this);
      let K = __$._1._ts_tree_cursor_goto_parent_wasm(this.tree[0]);
      return __$.Tv(this), K === 1;
    }
    gotoNextSibling() {
      __$.bw(this);
      let K = __$._1._ts_tree_cursor_goto_next_sibling_wasm(this.tree[0]);
      return __$.Tv(this), K === 1;
    }
    gotoPreviousSibling() {
      __$.bw(this);
      let K = __$._1._ts_tree_cursor_goto_previous_sibling_wasm(this.tree[0]);
      return __$.Tv(this), K === 1;
    }
    gotoDescendant(K) {
      __$.bw(this), __$._1._ts_tree_cursor_goto_descendant_wasm(this.tree[0], K), __$.Tv(this);
    }
    gotoFirstChildForIndex(K) {
      __$.bw(this), __$._1.setValue(__$.Q7 + __$.uI6, K, "i32");
      let q = __$._1._ts_tree_cursor_goto_first_child_for_index_wasm(this.tree[0]);
      return __$.Tv(this), q === 1;
    }
    gotoFirstChildForPosition(K) {
      __$.bw(this), __$.ML(__$.Q7 + __$.uI6, K);
      let q = __$._1._ts_tree_cursor_goto_first_child_for_position_wasm(this.tree[0]);
      return __$.Tv(this), q === 1;
    }
    reset(K) {
      __$.n5(K), __$.bw(this, __$.Q7 + __$.af), __$._1._ts_tree_cursor_reset_wasm(this.tree[0]), __$.Tv(this);
    }
    resetTo(K) {
      __$.bw(this, __$.Q7), __$.bw(K, __$.Q7 + __$.uI6), __$._1._ts_tree_cursor_reset_to_wasm(this.tree[0], K.tree[0]), __$.Tv(this);
    }
  }, __$.IM2 = class {
    static {
      __$.V6(this, "Node");
    }
    [0] = 0;
    _children;
    _namedChildren;
    constructor(A, {
      id: K,
      tree: q,
      startIndex: Y,
      startPosition: z,
      other: w
    }) {
      __$.GMA(A), this[0] = w, this.id = K, this.tree = q, this.startIndex = Y, this.startPosition = z;
    }
    id;
    startIndex;
    startPosition;
    tree;
    get typeId() {
      return __$.n5(this), __$._1._ts_node_symbol_wasm(this.tree[0]);
    }
    get grammarId() {
      return __$.n5(this), __$._1._ts_node_grammar_symbol_wasm(this.tree[0]);
    }
    get type() {
      return this.tree.language.types[this.typeId] || "ERROR";
    }
    get grammarType() {
      return this.tree.language.types[this.grammarId] || "ERROR";
    }
    get isNamed() {
      return __$.n5(this), __$._1._ts_node_is_named_wasm(this.tree[0]) === 1;
    }
    get isExtra() {
      return __$.n5(this), __$._1._ts_node_is_extra_wasm(this.tree[0]) === 1;
    }
    get isError() {
      return __$.n5(this), __$._1._ts_node_is_error_wasm(this.tree[0]) === 1;
    }
    get isMissing() {
      return __$.n5(this), __$._1._ts_node_is_missing_wasm(this.tree[0]) === 1;
    }
    get hasChanges() {
      return __$.n5(this), __$._1._ts_node_has_changes_wasm(this.tree[0]) === 1;
    }
    get hasError() {
      return __$.n5(this), __$._1._ts_node_has_error_wasm(this.tree[0]) === 1;
    }
    get endIndex() {
      return __$.n5(this), __$._1._ts_node_end_index_wasm(this.tree[0]);
    }
    get endPosition() {
      return __$.n5(this), __$._1._ts_node_end_point_wasm(this.tree[0]), __$.d3A(__$.Q7);
    }
    get text() {
      return __$.FI6(this.tree, this.startIndex, this.endIndex, this.startPosition);
    }
    get parseState() {
      return __$.n5(this), __$._1._ts_node_parse_state_wasm(this.tree[0]);
    }
    get nextParseState() {
      return __$.n5(this), __$._1._ts_node_next_parse_state_wasm(this.tree[0]);
    }
    equals(A) {
      return this.tree === A.tree && this.id === A.id;
    }
    child(A) {
      return __$.n5(this), __$._1._ts_node_child_wasm(this.tree[0], A), __$.uJ(this.tree);
    }
    namedChild(A) {
      return __$.n5(this), __$._1._ts_node_named_child_wasm(this.tree[0], A), __$.uJ(this.tree);
    }
    childForFieldId(A) {
      return __$.n5(this), __$._1._ts_node_child_by_field_id_wasm(this.tree[0], A), __$.uJ(this.tree);
    }
    childForFieldName(A) {
      let K = this.tree.language.fields.indexOf(A);
      if (K !== -1) return this.childForFieldId(K);
      return null;
    }
    fieldNameForChild(A) {
      __$.n5(this);
      let K = __$._1._ts_node_field_name_for_child_wasm(this.tree[0], A);
      if (!K) return null;
      return __$._1.AsciiToString(K);
    }
    fieldNameForNamedChild(A) {
      __$.n5(this);
      let K = __$._1._ts_node_field_name_for_named_child_wasm(this.tree[0], A);
      if (!K) return null;
      return __$._1.AsciiToString(K);
    }
    childrenForFieldName(A) {
      let K = this.tree.language.fields.indexOf(A);
      if (K !== -1 && K !== 0) return this.childrenForFieldId(K);
      return [];
    }
    childrenForFieldId(A) {
      __$.n5(this), __$._1._ts_node_children_by_field_id_wasm(this.tree[0], A);
      let K = __$._1.getValue(__$.Q7, "i32"),
        q = __$._1.getValue(__$.Q7 + __$.JK, "i32"),
        Y = Array(K);
      if (K > 0) {
        let z = q;
        for (let w = 0; w < K; w++) Y[w] = __$.uJ(this.tree, z), z += __$.af;
        __$._1._free(q);
      }
      return Y;
    }
    firstChildForIndex(A) {
      __$.n5(this);
      let K = __$.Q7 + __$.af;
      return __$._1.setValue(K, A, "i32"), __$._1._ts_node_first_child_for_byte_wasm(this.tree[0]), __$.uJ(this.tree);
    }
    firstNamedChildForIndex(A) {
      __$.n5(this);
      let K = __$.Q7 + __$.af;
      return __$._1.setValue(K, A, "i32"), __$._1._ts_node_first_named_child_for_byte_wasm(this.tree[0]), __$.uJ(this.tree);
    }
    get childCount() {
      return __$.n5(this), __$._1._ts_node_child_count_wasm(this.tree[0]);
    }
    get namedChildCount() {
      return __$.n5(this), __$._1._ts_node_named_child_count_wasm(this.tree[0]);
    }
    get firstChild() {
      return this.child(0);
    }
    get firstNamedChild() {
      return this.namedChild(0);
    }
    get lastChild() {
      return this.child(this.childCount - 1);
    }
    get lastNamedChild() {
      return this.namedChild(this.namedChildCount - 1);
    }
    get children() {
      if (!this._children) {
        __$.n5(this), __$._1._ts_node_children_wasm(this.tree[0]);
        let A = __$._1.getValue(__$.Q7, "i32"),
          K = __$._1.getValue(__$.Q7 + __$.JK, "i32");
        if (this._children = Array(A), A > 0) {
          let q = K;
          for (let Y = 0; Y < A; Y++) this._children[Y] = __$.uJ(this.tree, q), q += __$.af;
          __$._1._free(K);
        }
      }
      return this._children;
    }
    get namedChildren() {
      if (!this._namedChildren) {
        __$.n5(this), __$._1._ts_node_named_children_wasm(this.tree[0]);
        let A = __$._1.getValue(__$.Q7, "i32"),
          K = __$._1.getValue(__$.Q7 + __$.JK, "i32");
        if (this._namedChildren = Array(A), A > 0) {
          let q = K;
          for (let Y = 0; Y < A; Y++) this._namedChildren[Y] = __$.uJ(this.tree, q), q += __$.af;
          __$._1._free(K);
        }
      }
      return this._namedChildren;
    }
    descendantsOfType(A, K = __$.gt, q = __$.gt) {
      if (!Array.isArray(A)) A = [A];
      let Y = [],
        z = this.tree.language.types;
      for (let X of A) if (X == "ERROR") Y.push(65535);
      for (let X = 0, $ = z.length; X < $; X++) if (A.includes(z[X])) Y.push(X);
      let w = __$._1._malloc(__$.JK * Y.length);
      for (let X = 0, $ = Y.length; X < $; X++) __$._1.setValue(w + X * __$.JK, Y[X], "i32");
      __$.n5(this), __$._1._ts_node_descendants_of_type_wasm(this.tree[0], w, Y.length, K.row, K.column, q.row, q.column);
      let H = __$._1.getValue(__$.Q7, "i32"),
        J = __$._1.getValue(__$.Q7 + __$.JK, "i32"),
        O = Array(H);
      if (H > 0) {
        let X = J;
        for (let $ = 0; $ < H; $++) O[$] = __$.uJ(this.tree, X), X += __$.af;
      }
      return __$._1._free(J), __$._1._free(w), O;
    }
    get nextSibling() {
      return __$.n5(this), __$._1._ts_node_next_sibling_wasm(this.tree[0]), __$.uJ(this.tree);
    }
    get previousSibling() {
      return __$.n5(this), __$._1._ts_node_prev_sibling_wasm(this.tree[0]), __$.uJ(this.tree);
    }
    get nextNamedSibling() {
      return __$.n5(this), __$._1._ts_node_next_named_sibling_wasm(this.tree[0]), __$.uJ(this.tree);
    }
    get previousNamedSibling() {
      return __$.n5(this), __$._1._ts_node_prev_named_sibling_wasm(this.tree[0]), __$.uJ(this.tree);
    }
    get descendantCount() {
      return __$.n5(this), __$._1._ts_node_descendant_count_wasm(this.tree[0]);
    }
    get parent() {
      return __$.n5(this), __$._1._ts_node_parent_wasm(this.tree[0]), __$.uJ(this.tree);
    }
    childWithDescendant(A) {
      return __$.n5(this), __$.n5(A, 1), __$._1._ts_node_child_with_descendant_wasm(this.tree[0]), __$.uJ(this.tree);
    }
    descendantForIndex(A, K = A) {
      if (typeof A !== "number" || typeof K !== "number") throw Error("Arguments must be numbers");
      __$.n5(this);
      let q = __$.Q7 + __$.af;
      return __$._1.setValue(q, A, "i32"), __$._1.setValue(q + __$.JK, K, "i32"), __$._1._ts_node_descendant_for_index_wasm(this.tree[0]), __$.uJ(this.tree);
    }
    namedDescendantForIndex(A, K = A) {
      if (typeof A !== "number" || typeof K !== "number") throw Error("Arguments must be numbers");
      __$.n5(this);
      let q = __$.Q7 + __$.af;
      return __$._1.setValue(q, A, "i32"), __$._1.setValue(q + __$.JK, K, "i32"), __$._1._ts_node_named_descendant_for_index_wasm(this.tree[0]), __$.uJ(this.tree);
    }
    descendantForPosition(A, K = A) {
      if (!__$.lQA(A) || !__$.lQA(K)) throw Error("Arguments must be {row, column} objects");
      __$.n5(this);
      let q = __$.Q7 + __$.af;
      return __$.ML(q, A), __$.ML(q + __$.Hm, K), __$._1._ts_node_descendant_for_position_wasm(this.tree[0]), __$.uJ(this.tree);
    }
    namedDescendantForPosition(A, K = A) {
      if (!__$.lQA(A) || !__$.lQA(K)) throw Error("Arguments must be {row, column} objects");
      __$.n5(this);
      let q = __$.Q7 + __$.af;
      return __$.ML(q, A), __$.ML(q + __$.Hm, K), __$._1._ts_node_named_descendant_for_position_wasm(this.tree[0]), __$.uJ(this.tree);
    }
    walk() {
      return __$.n5(this), __$._1._ts_tree_cursor_new_wasm(this.tree[0]), new __$.yM2(__$.Ft, this.tree);
    }
    edit(A) {
      if (this.startIndex >= A.oldEndIndex) {
        this.startIndex = A.newEndIndex + (this.startIndex - A.oldEndIndex);
        let K, q;
        if (this.startPosition.row > A.oldEndPosition.row) K = this.startPosition.row - A.oldEndPosition.row, q = this.startPosition.column;else if (K = 0, q = this.startPosition.column, this.startPosition.column >= A.oldEndPosition.column) q = this.startPosition.column - A.oldEndPosition.column;
        if (K > 0) this.startPosition.row += K, this.startPosition.column = q;else this.startPosition.column += q;
      } else if (this.startIndex > A.startIndex) this.startIndex = A.newEndIndex, this.startPosition.row = A.newEndPosition.row, this.startPosition.column = A.newEndPosition.column;
    }
    toString() {
      __$.n5(this);
      let A = __$._1._ts_node_to_string_wasm(this.tree[0]),
        K = __$._1.AsciiToString(A);
      return __$._1._free(A), K;
    }
  };
  __$.V6(__$.gI6, "unmarshalCaptures");
  __$.V6(__$.n5, "marshalNode");
  __$.V6(__$.uJ, "unmarshalNode");
  __$.V6(__$.bw, "marshalTreeCursor");
  __$.V6(__$.Tv, "unmarshalTreeCursor");
  __$.V6(__$.ML, "marshalPoint");
  __$.V6(__$.d3A, "unmarshalPoint");
  __$.V6(__$.IKK, "marshalRange");
  __$.V6(__$.oP1, "unmarshalRange");
  __$.V6(__$.SKK, "marshalEdit");
  __$.V6(__$.hKK, "unmarshalLanguageMetadata");
  __$.bM2 = /[\w-]+/g, __$.DlH = {
    Zero: 0,
    ZeroOrOne: 1,
    ZeroOrMore: 2,
    One: 3,
    OneOrMore: 4
  }, __$.RKK = __$.V6(A => A.type === "capture", "isCaptureStep"), __$.QI6 = __$.V6(A => A.type === "string", "isStringStep"), __$.BS = {
    Syntax: 1,
    NodeName: 2,
    FieldName: 3,
    CaptureName: 4,
    PatternStructure: 5
  }, __$.cQA = class A extends Error {
    constructor(K, q, Y, z) {
      super(A.formatMessage(K, q));
      this.kind = K, this.info = q, this.index = Y, this.length = z, this.name = "QueryError";
    }
    static {
      __$.V6(this, "QueryError");
    }
    static formatMessage(K, q) {
      switch (K) {
        case __$.BS.NodeName:
          return `Bad node name '${q.word}'`;
        case __$.BS.FieldName:
          return `Bad field name '${q.word}'`;
        case __$.BS.CaptureName:
          return `Bad capture name @${q.word}`;
        case __$.BS.PatternStructure:
          return `Bad pattern structure at offset ${q.suffix}`;
        case __$.BS.Syntax:
          return `Bad syntax at offset ${q.suffix}`;
      }
    }
  };
  __$.V6(__$.bKK, "parseAnyPredicate");
  __$.V6(__$.xKK, "parseMatchPredicate");
  __$.V6(__$.uKK, "parseAnyOfPredicate");
  __$.V6(__$.BKK, "parseIsPredicate");
  __$.V6(__$.mKK, "parseSetDirective");
  __$.V6(__$.gKK, "parsePattern");
  __$.xM2 = class {
    static {
      __$.V6(this, "Query");
    }
    [0] = 0;
    exceededMatchLimit;
    textPredicates;
    captureNames;
    captureQuantifiers;
    predicates;
    setProperties;
    assertedProperties;
    refutedProperties;
    matchLimit;
    constructor(A, K) {
      let q = __$._1.lengthBytesUTF8(K),
        Y = __$._1._malloc(q + 1);
      __$._1.stringToUTF8(K, Y, q + 1);
      let z = __$._1._ts_query_new(A[0], Y, q, __$.Q7, __$.Q7 + __$.JK);
      if (!z) {
        let j = __$._1.getValue(__$.Q7 + __$.JK, "i32"),
          M = __$._1.getValue(__$.Q7, "i32"),
          P = __$._1.UTF8ToString(Y, M).length,
          f = K.slice(P, P + 100).split(`
`)[0],
          N = f.match(__$.bM2)?.[0] ?? "";
        switch (__$._1._free(Y), j) {
          case __$.BS.Syntax:
            throw new __$.cQA(__$.BS.Syntax, {
              suffix: `${P}: '${f}'...`
            }, P, 0);
          case __$.BS.NodeName:
            throw new __$.cQA(j, {
              word: N
            }, P, N.length);
          case __$.BS.FieldName:
            throw new __$.cQA(j, {
              word: N
            }, P, N.length);
          case __$.BS.CaptureName:
            throw new __$.cQA(j, {
              word: N
            }, P, N.length);
          case __$.BS.PatternStructure:
            throw new __$.cQA(j, {
              suffix: `${P}: '${f}'...`
            }, P, 0);
        }
      }
      let w = __$._1._ts_query_string_count(z),
        H = __$._1._ts_query_capture_count(z),
        J = __$._1._ts_query_pattern_count(z),
        O = Array(H),
        X = Array(J),
        $ = Array(w);
      for (let j = 0; j < H; j++) {
        let M = __$._1._ts_query_capture_name_for_id(z, j, __$.Q7),
          P = __$._1.getValue(__$.Q7, "i32");
        O[j] = __$._1.UTF8ToString(M, P);
      }
      for (let j = 0; j < J; j++) {
        let M = Array(H);
        for (let P = 0; P < H; P++) {
          let f = __$._1._ts_query_capture_quantifier_for_id(z, j, P);
          M[P] = f;
        }
        X[j] = M;
      }
      for (let j = 0; j < w; j++) {
        let M = __$._1._ts_query_string_value_for_id(z, j, __$.Q7),
          P = __$._1.getValue(__$.Q7, "i32");
        $[j] = __$._1.UTF8ToString(M, P);
      }
      let _ = Array(J),
        G = Array(J),
        Z = Array(J),
        W = Array(J),
        D = Array(J);
      for (let j = 0; j < J; j++) {
        let M = __$._1._ts_query_predicates_for_pattern(z, j, __$.Q7),
          P = __$._1.getValue(__$.Q7, "i32");
        W[j] = [], D[j] = [];
        let f = [],
          N = M;
        for (let T = 0; T < P; T++) {
          let C = __$._1.getValue(N, "i32");
          N += __$.JK;
          let R = __$._1.getValue(N, "i32");
          N += __$.JK, __$.gKK(j, C, R, O, $, f, D, W, _, G, Z);
        }
        Object.freeze(D[j]), Object.freeze(W[j]), Object.freeze(_[j]), Object.freeze(G[j]), Object.freeze(Z[j]);
      }
      __$._1._free(Y), this[0] = z, this.captureNames = O, this.captureQuantifiers = X, this.textPredicates = D, this.predicates = W, this.setProperties = _, this.assertedProperties = G, this.refutedProperties = Z, this.exceededMatchLimit = !1;
    }
    delete() {
      __$._1._ts_query_delete(this[0]), this[0] = 0;
    }
    matches(A, K = {}) {
      let q = K.startPosition ?? __$.gt,
        Y = K.endPosition ?? __$.gt,
        z = K.startIndex ?? 0,
        w = K.endIndex ?? 0,
        H = K.matchLimit ?? 4294967295,
        J = K.maxStartDepth ?? 4294967295,
        O = K.timeoutMicros ?? 0,
        X = K.progressCallback;
      if (typeof H !== "number") throw Error("Arguments must be numbers");
      if (this.matchLimit = H, w !== 0 && z > w) throw Error("`startIndex` cannot be greater than `endIndex`");
      if (Y !== __$.gt && (q.row > Y.row || q.row === Y.row && q.column > Y.column)) throw Error("`startPosition` cannot be greater than `endPosition`");
      if (X) __$._1.currentQueryProgressCallback = X;
      __$.n5(A), __$._1._ts_query_matches_wasm(this[0], A.tree[0], q.row, q.column, Y.row, Y.column, z, w, H, J, O);
      let $ = __$._1.getValue(__$.Q7, "i32"),
        _ = __$._1.getValue(__$.Q7 + __$.JK, "i32"),
        G = __$._1.getValue(__$.Q7 + 2 * __$.JK, "i32"),
        Z = Array($);
      this.exceededMatchLimit = Boolean(G);
      let W = 0,
        D = _;
      for (let j = 0; j < $; j++) {
        let M = __$._1.getValue(D, "i32");
        D += __$.JK;
        let P = __$._1.getValue(D, "i32");
        D += __$.JK;
        let f = Array(P);
        if (D = __$.gI6(this, A.tree, D, M, f), this.textPredicates[M].every(N => N(f))) {
          Z[W] = {
            pattern: M,
            patternIndex: M,
            captures: f
          };
          let N = this.setProperties[M];
          Z[W].setProperties = N;
          let T = this.assertedProperties[M];
          Z[W].assertedProperties = T;
          let C = this.refutedProperties[M];
          Z[W].refutedProperties = C, W++;
        }
      }
      return Z.length = W, __$._1._free(_), __$._1.currentQueryProgressCallback = null, Z;
    }
    captures(A, K = {}) {
      let q = K.startPosition ?? __$.gt,
        Y = K.endPosition ?? __$.gt,
        z = K.startIndex ?? 0,
        w = K.endIndex ?? 0,
        H = K.matchLimit ?? 4294967295,
        J = K.maxStartDepth ?? 4294967295,
        O = K.timeoutMicros ?? 0,
        X = K.progressCallback;
      if (typeof H !== "number") throw Error("Arguments must be numbers");
      if (this.matchLimit = H, w !== 0 && z > w) throw Error("`startIndex` cannot be greater than `endIndex`");
      if (Y !== __$.gt && (q.row > Y.row || q.row === Y.row && q.column > Y.column)) throw Error("`startPosition` cannot be greater than `endPosition`");
      if (X) __$._1.currentQueryProgressCallback = X;
      __$.n5(A), __$._1._ts_query_captures_wasm(this[0], A.tree[0], q.row, q.column, Y.row, Y.column, z, w, H, J, O);
      let $ = __$._1.getValue(__$.Q7, "i32"),
        _ = __$._1.getValue(__$.Q7 + __$.JK, "i32"),
        G = __$._1.getValue(__$.Q7 + 2 * __$.JK, "i32"),
        Z = [];
      this.exceededMatchLimit = Boolean(G);
      let W = [],
        D = _;
      for (let j = 0; j < $; j++) {
        let M = __$._1.getValue(D, "i32");
        D += __$.JK;
        let P = __$._1.getValue(D, "i32");
        D += __$.JK;
        let f = __$._1.getValue(D, "i32");
        if (D += __$.JK, W.length = P, D = __$.gI6(this, A.tree, D, M, W), this.textPredicates[M].every(N => N(W))) {
          let N = W[f],
            T = this.setProperties[M];
          N.setProperties = T;
          let C = this.assertedProperties[M];
          N.assertedProperties = C;
          let R = this.refutedProperties[M];
          N.refutedProperties = R, Z.push(N);
        }
      }
      return __$._1._free(_), __$._1.currentQueryProgressCallback = null, Z;
    }
    predicatesForPattern(A) {
      return this.predicates[A];
    }
    disableCapture(A) {
      let K = __$._1.lengthBytesUTF8(A),
        q = __$._1._malloc(K + 1);
      __$._1.stringToUTF8(A, q, K + 1), __$._1._ts_query_disable_capture(this[0], q, K), __$._1._free(q);
    }
    disablePattern(A) {
      if (A >= this.predicates.length) throw Error(`Pattern index is ${A} but the pattern count is ${this.predicates.length}`);
      __$._1._ts_query_disable_pattern(this[0], A);
    }
    didExceedMatchLimit() {
      return this.exceededMatchLimit;
    }
    startIndexForPattern(A) {
      if (A >= this.predicates.length) throw Error(`Pattern index is ${A} but the pattern count is ${this.predicates.length}`);
      return __$._1._ts_query_start_byte_for_pattern(this[0], A);
    }
    endIndexForPattern(A) {
      if (A >= this.predicates.length) throw Error(`Pattern index is ${A} but the pattern count is ${this.predicates.length}`);
      return __$._1._ts_query_end_byte_for_pattern(this[0], A);
    }
    patternCount() {
      return __$._1._ts_query_pattern_count(this[0]);
    }
    captureIndexForName(A) {
      return this.captureNames.indexOf(A);
    }
    isPatternRooted(A) {
      return __$._1._ts_query_is_pattern_rooted(this[0], A) === 1;
    }
    isPatternNonLocal(A) {
      return __$._1._ts_query_is_pattern_non_local(this[0], A) === 1;
    }
    isPatternGuaranteedAtStep(A) {
      return __$._1._ts_query_is_pattern_guaranteed_at_step(this[0], A) === 1;
    }
  }, __$.uM2 = /^tree_sitter_\w+$/, __$.aP1 = class A {
    static {
      __$.V6(this, "Language");
    }
    [0] = 0;
    types;
    fields;
    constructor(K, q) {
      __$.GMA(K), this[0] = q, this.types = Array(__$._1._ts_language_symbol_count(this[0]));
      for (let Y = 0, z = this.types.length; Y < z; Y++) if (__$._1._ts_language_symbol_type(this[0], Y) < 2) this.types[Y] = __$._1.UTF8ToString(__$._1._ts_language_symbol_name(this[0], Y));
      this.fields = Array(__$._1._ts_language_field_count(this[0]) + 1);
      for (let Y = 0, z = this.fields.length; Y < z; Y++) {
        let w = __$._1._ts_language_field_name_for_id(this[0], Y);
        if (w !== 0) this.fields[Y] = __$._1.UTF8ToString(w);else this.fields[Y] = null;
      }
    }
    get name() {
      let K = __$._1._ts_language_name(this[0]);
      if (K === 0) return null;
      return __$._1.UTF8ToString(K);
    }
    get version() {
      return __$._1._ts_language_version(this[0]);
    }
    get abiVersion() {
      return __$._1._ts_language_abi_version(this[0]);
    }
    get metadata() {
      __$._1._ts_language_metadata(this[0]);
      let K = __$._1.getValue(__$.Q7, "i32"),
        q = __$._1.getValue(__$.Q7 + __$.JK, "i32");
      if (K === 0) return null;
      return __$.hKK(q);
    }
    get fieldCount() {
      return this.fields.length - 1;
    }
    get stateCount() {
      return __$._1._ts_language_state_count(this[0]);
    }
    fieldIdForName(K) {
      let q = this.fields.indexOf(K);
      return q !== -1 ? q : null;
    }
    fieldNameForId(K) {
      return this.fields[K] ?? null;
    }
    idForNodeType(K, q) {
      let Y = __$._1.lengthBytesUTF8(K),
        z = __$._1._malloc(Y + 1);
      __$._1.stringToUTF8(K, z, Y + 1);
      let w = __$._1._ts_language_symbol_for_name(this[0], z, Y, q ? 1 : 0);
      return __$._1._free(z), w || null;
    }
    get nodeTypeCount() {
      return __$._1._ts_language_symbol_count(this[0]);
    }
    nodeTypeForId(K) {
      let q = __$._1._ts_language_symbol_name(this[0], K);
      return q ? __$._1.UTF8ToString(q) : null;
    }
    nodeTypeIsNamed(K) {
      return __$._1._ts_language_type_is_named_wasm(this[0], K) ? !0 : !1;
    }
    nodeTypeIsVisible(K) {
      return __$._1._ts_language_type_is_visible_wasm(this[0], K) ? !0 : !1;
    }
    get supertypes() {
      __$._1._ts_language_supertypes_wasm(this[0]);
      let K = __$._1.getValue(__$.Q7, "i32"),
        q = __$._1.getValue(__$.Q7 + __$.JK, "i32"),
        Y = Array(K);
      if (K > 0) {
        let z = q;
        for (let w = 0; w < K; w++) Y[w] = __$._1.getValue(z, "i16"), z += __$.LKK;
      }
      return Y;
    }
    subtypes(K) {
      __$._1._ts_language_subtypes_wasm(this[0], K);
      let q = __$._1.getValue(__$.Q7, "i32"),
        Y = __$._1.getValue(__$.Q7 + __$.JK, "i32"),
        z = Array(q);
      if (q > 0) {
        let w = Y;
        for (let H = 0; H < q; H++) z[H] = __$._1.getValue(w, "i16"), w += __$.LKK;
      }
      return z;
    }
    nextState(K, q) {
      return __$._1._ts_language_next_state(this[0], K, q);
    }
    lookaheadIterator(K) {
      let q = __$._1._ts_lookahead_iterator_new(this[0], K);
      if (q) return new __$.LM2(__$.Ft, q, this);
      return null;
    }
    query(K) {
      return console.warn("Language.query is deprecated. Use new Query(language, source) instead."), new __$.xM2(this, K);
    }
    static async load(K) {
      let q;
      if (K instanceof Uint8Array) q = Promise.resolve(K);else if (globalThis.process?.versions.node) q = (await import("fs/promises")).readFile(K);else q = fetch(K).then(J => J.arrayBuffer().then(O => {
        if (J.ok) return new Uint8Array(O);else {
          let X = new TextDecoder("utf-8").decode(O);
          throw Error(`Language.load failed with status ${J.status}.

${X}`);
        }
      }));
      let Y = await __$._1.loadWebAssemblyModule(await q, {
          loadAsync: !0
        }),
        z = Object.keys(Y),
        w = z.find(J => __$.uM2.test(J) && !J.includes("external_scanner_"));
      if (!w) throw console.log(`Couldn't find language function in WASM file. Symbols:
${JSON.stringify(z, null, 2)}`), Error("Language.load failed: no language function found in WASM file");
      let H = Y[w]();
      return new A(__$.Ft, H);
    }
  }, __$.BM2 = (() => {
    var _scriptName = import.meta.url;
    return async function (moduleArg = {}) {
      var moduleRtn,
        Module = moduleArg,
        readyPromiseResolve,
        readyPromiseReject,
        readyPromise = new Promise((A, K) => {
          readyPromiseResolve = A, readyPromiseReject = K;
        }),
        ENVIRONMENT_IS_WEB = typeof window == "object",
        ENVIRONMENT_IS_WORKER = typeof WorkerGlobalScope < "u",
        ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string" && process.type != "renderer",
        ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
      if (ENVIRONMENT_IS_NODE) {
        let {
          createRequire: A
        } = await import("module");
        var require = A(import.meta.url);
      }
      Module.currentQueryProgressCallback = null, Module.currentProgressCallback = null, Module.currentLogCallback = null, Module.currentParseCallback = null;
      var moduleOverrides = Object.assign({}, Module),
        arguments_ = [],
        thisProgram = "./this.program",
        quit_ = __$.V6((A, K) => {
          throw K;
        }, "quit_"),
        scriptDirectory = "";
      function locateFile(A) {
        if (Module.locateFile) return Module.locateFile(A, scriptDirectory);
        return scriptDirectory + A;
      }
      __$.V6(locateFile, "locateFile");
      var readAsync, readBinary;
      if (ENVIRONMENT_IS_NODE) {
        var fs = require("fs"),
          nodePath = require("path");
        if (!import.meta.url.startsWith("data:")) scriptDirectory = nodePath.dirname(require("url").fileURLToPath(import.meta.url)) + "/";
        if (readBinary = __$.V6(A => {
          A = isFileURI(A) ? new URL(A) : A;
          var K = fs.readFileSync(A);
          return K;
        }, "readBinary"), readAsync = __$.V6(async (A, K = !0) => {
          A = isFileURI(A) ? new URL(A) : A;
          var q = fs.readFileSync(A, K ? void 0 : "utf8");
          return q;
        }, "readAsync"), !Module.thisProgram && process.argv.length > 1) thisProgram = process.argv[1].replace(/\\/g, "/");
        arguments_ = process.argv.slice(2), quit_ = __$.V6((A, K) => {
          throw process.exitCode = A, K;
        }, "quit_");
      } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
        if (ENVIRONMENT_IS_WORKER) scriptDirectory = self.location.href;else if (typeof document < "u" && document.currentScript) scriptDirectory = document.currentScript.src;
        if (_scriptName) scriptDirectory = _scriptName;
        if (scriptDirectory.startsWith("blob:")) scriptDirectory = "";else scriptDirectory = scriptDirectory.slice(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
        {
          if (ENVIRONMENT_IS_WORKER) readBinary = __$.V6(A => {
            var K = new XMLHttpRequest();
            return K.open("GET", A, !1), K.responseType = "arraybuffer", K.send(null), new Uint8Array(K.response);
          }, "readBinary");
          readAsync = __$.V6(async A => {
            if (isFileURI(A)) return new Promise((q, Y) => {
              var z = new XMLHttpRequest();
              z.open("GET", A, !0), z.responseType = "arraybuffer", z.onload = () => {
                if (z.status == 200 || z.status == 0 && z.response) {
                  q(z.response);
                  return;
                }
                Y(z.status);
              }, z.onerror = Y, z.send(null);
            });
            var K = await fetch(A, {
              credentials: "same-origin"
            });
            if (K.ok) return K.arrayBuffer();
            throw Error(K.status + " : " + K.url);
          }, "readAsync");
        }
      }
      var out = Module.print || console.log.bind(console),
        err = Module.printErr || console.error.bind(console);
      if (Object.assign(Module, moduleOverrides), moduleOverrides = null, Module.arguments) arguments_ = Module.arguments;
      if (Module.thisProgram) thisProgram = Module.thisProgram;
      var dynamicLibraries = Module.dynamicLibraries || [],
        wasmBinary = Module.wasmBinary,
        wasmMemory,
        ABORT = !1,
        EXITSTATUS;
      function assert(A, K) {
        if (!A) abort(K);
      }
      __$.V6(assert, "assert");
      var HEAP,
        HEAP8,
        HEAPU8,
        HEAP16,
        HEAPU16,
        HEAP32,
        HEAPU32,
        HEAPF32,
        HEAP64,
        HEAPU64,
        HEAPF64,
        HEAP_DATA_VIEW,
        runtimeInitialized = !1,
        isFileURI = __$.V6(A => A.startsWith("file://"), "isFileURI");
      function updateMemoryViews() {
        var A = wasmMemory.buffer;
        Module.HEAP_DATA_VIEW = HEAP_DATA_VIEW = new DataView(A), Module.HEAP8 = HEAP8 = new Int8Array(A), Module.HEAP16 = HEAP16 = new Int16Array(A), Module.HEAPU8 = HEAPU8 = new Uint8Array(A), Module.HEAPU16 = HEAPU16 = new Uint16Array(A), Module.HEAP32 = HEAP32 = new Int32Array(A), Module.HEAPU32 = HEAPU32 = new Uint32Array(A), Module.HEAPF32 = HEAPF32 = new Float32Array(A), Module.HEAPF64 = HEAPF64 = new Float64Array(A), Module.HEAP64 = HEAP64 = new BigInt64Array(A), Module.HEAPU64 = HEAPU64 = new BigUint64Array(A);
      }
      if (__$.V6(updateMemoryViews, "updateMemoryViews"), Module.wasmMemory) wasmMemory = Module.wasmMemory;else {
        var INITIAL_MEMORY = Module.INITIAL_MEMORY || 33554432;
        wasmMemory = new WebAssembly.Memory({
          initial: INITIAL_MEMORY / 65536,
          maximum: 32768
        });
      }
      updateMemoryViews();
      var __RELOC_FUNCS__ = [];
      function preRun() {
        if (Module.preRun) {
          if (typeof Module.preRun == "function") Module.preRun = [Module.preRun];
          while (Module.preRun.length) addOnPreRun(Module.preRun.shift());
        }
        callRuntimeCallbacks(onPreRuns);
      }
      __$.V6(preRun, "preRun");
      function initRuntime() {
        runtimeInitialized = !0, callRuntimeCallbacks(__RELOC_FUNCS__), wasmExports.__wasm_call_ctors(), callRuntimeCallbacks(onPostCtors);
      }
      __$.V6(initRuntime, "initRuntime");
      function preMain() {}
      __$.V6(preMain, "preMain");
      function postRun() {
        if (Module.postRun) {
          if (typeof Module.postRun == "function") Module.postRun = [Module.postRun];
          while (Module.postRun.length) addOnPostRun(Module.postRun.shift());
        }
        callRuntimeCallbacks(onPostRuns);
      }
      __$.V6(postRun, "postRun");
      var runDependencies = 0,
        dependenciesFulfilled = null;
      function getUniqueRunDependency(A) {
        return A;
      }
      __$.V6(getUniqueRunDependency, "getUniqueRunDependency");
      function addRunDependency(A) {
        runDependencies++, Module.monitorRunDependencies?.(runDependencies);
      }
      __$.V6(addRunDependency, "addRunDependency");
      function removeRunDependency(A) {
        if (runDependencies--, Module.monitorRunDependencies?.(runDependencies), runDependencies == 0) {
          if (dependenciesFulfilled) {
            var K = dependenciesFulfilled;
            dependenciesFulfilled = null, K();
          }
        }
      }
      __$.V6(removeRunDependency, "removeRunDependency");
      function abort(A) {
        Module.onAbort?.(A), A = "Aborted(" + A + ")", err(A), ABORT = !0, A += ". Build with -sASSERTIONS for more info.";
        var K = new WebAssembly.RuntimeError(A);
        throw readyPromiseReject(K), K;
      }
      __$.V6(abort, "abort");
      var wasmBinaryFile;
      function findWasmBinary() {
        if (Module.locateFile) return locateFile("tree-sitter.wasm");
        return new URL("tree-sitter.wasm", import.meta.url).href;
      }
      __$.V6(findWasmBinary, "findWasmBinary");
      function getBinarySync(A) {
        if (A == wasmBinaryFile && wasmBinary) return new Uint8Array(wasmBinary);
        if (readBinary) return readBinary(A);
        throw "both async and sync fetching of the wasm failed";
      }
      __$.V6(getBinarySync, "getBinarySync");
      async function getWasmBinary(A) {
        if (!wasmBinary) try {
          var K = await readAsync(A);
          return new Uint8Array(K);
        } catch {}
        return getBinarySync(A);
      }
      __$.V6(getWasmBinary, "getWasmBinary");
      async function instantiateArrayBuffer(A, K) {
        try {
          var q = await getWasmBinary(A),
            Y = await WebAssembly.instantiate(q, K);
          return Y;
        } catch (z) {
          err(`failed to asynchronously prepare wasm: ${z}`), abort(z);
        }
      }
      __$.V6(instantiateArrayBuffer, "instantiateArrayBuffer");
      async function instantiateAsync(A, K, q) {
        if (!A && typeof WebAssembly.instantiateStreaming == "function" && !isFileURI(K) && !ENVIRONMENT_IS_NODE) try {
          var Y = fetch(K, {
              credentials: "same-origin"
            }),
            z = await WebAssembly.instantiateStreaming(Y, q);
          return z;
        } catch (w) {
          err(`wasm streaming compile failed: ${w}`), err("falling back to ArrayBuffer instantiation");
        }
        return instantiateArrayBuffer(K, q);
      }
      __$.V6(instantiateAsync, "instantiateAsync");
      function getWasmImports() {
        return {
          env: wasmImports,
          wasi_snapshot_preview1: wasmImports,
          "GOT.mem": new Proxy(wasmImports, GOTHandler),
          "GOT.func": new Proxy(wasmImports, GOTHandler)
        };
      }
      __$.V6(getWasmImports, "getWasmImports");
      async function createWasm() {
        function A(w, H) {
          wasmExports = w.exports, wasmExports = relocateExports(wasmExports, 1024);
          var J = getDylinkMetadata(H);
          if (J.neededDynlibs) dynamicLibraries = J.neededDynlibs.concat(dynamicLibraries);
          return mergeLibSymbols(wasmExports, "main"), LDSO.init(), loadDylibs(), __RELOC_FUNCS__.push(wasmExports.__wasm_apply_data_relocs), removeRunDependency("wasm-instantiate"), wasmExports;
        }
        __$.V6(A, "receiveInstance"), addRunDependency("wasm-instantiate");
        function K(w) {
          return A(w.instance, w.module);
        }
        __$.V6(K, "receiveInstantiationResult");
        var q = getWasmImports();
        if (Module.instantiateWasm) return new Promise((w, H) => {
          Module.instantiateWasm(q, (J, O) => {
            A(J, O), w(J.exports);
          });
        });
        wasmBinaryFile ??= findWasmBinary();
        try {
          var Y = await instantiateAsync(wasmBinary, wasmBinaryFile, q),
            z = K(Y);
          return z;
        } catch (w) {
          return readyPromiseReject(w), Promise.reject(w);
        }
      }
      __$.V6(createWasm, "createWasm");
      var ASM_CONSTS = {};
      class ExitStatus {
        static {
          __$.V6(this, "ExitStatus");
        }
        name = "ExitStatus";
        constructor(A) {
          this.message = `Program terminated with exit(${A})`, this.status = A;
        }
      }
      var GOT = {},
        currentModuleWeakSymbols = new Set([]),
        GOTHandler = {
          get(A, K) {
            var q = GOT[K];
            if (!q) q = GOT[K] = new WebAssembly.Global({
              value: "i32",
              mutable: !0
            });
            if (!currentModuleWeakSymbols.has(K)) q.required = !0;
            return q;
          }
        },
        LE_HEAP_LOAD_F32 = __$.V6(A => HEAP_DATA_VIEW.getFloat32(A, !0), "LE_HEAP_LOAD_F32"),
        LE_HEAP_LOAD_F64 = __$.V6(A => HEAP_DATA_VIEW.getFloat64(A, !0), "LE_HEAP_LOAD_F64"),
        LE_HEAP_LOAD_I16 = __$.V6(A => HEAP_DATA_VIEW.getInt16(A, !0), "LE_HEAP_LOAD_I16"),
        LE_HEAP_LOAD_I32 = __$.V6(A => HEAP_DATA_VIEW.getInt32(A, !0), "LE_HEAP_LOAD_I32"),
        LE_HEAP_LOAD_U16 = __$.V6(A => HEAP_DATA_VIEW.getUint16(A, !0), "LE_HEAP_LOAD_U16"),
        LE_HEAP_LOAD_U32 = __$.V6(A => HEAP_DATA_VIEW.getUint32(A, !0), "LE_HEAP_LOAD_U32"),
        LE_HEAP_STORE_F32 = __$.V6((A, K) => HEAP_DATA_VIEW.setFloat32(A, K, !0), "LE_HEAP_STORE_F32"),
        LE_HEAP_STORE_F64 = __$.V6((A, K) => HEAP_DATA_VIEW.setFloat64(A, K, !0), "LE_HEAP_STORE_F64"),
        LE_HEAP_STORE_I16 = __$.V6((A, K) => HEAP_DATA_VIEW.setInt16(A, K, !0), "LE_HEAP_STORE_I16"),
        LE_HEAP_STORE_I32 = __$.V6((A, K) => HEAP_DATA_VIEW.setInt32(A, K, !0), "LE_HEAP_STORE_I32"),
        LE_HEAP_STORE_U16 = __$.V6((A, K) => HEAP_DATA_VIEW.setUint16(A, K, !0), "LE_HEAP_STORE_U16"),
        LE_HEAP_STORE_U32 = __$.V6((A, K) => HEAP_DATA_VIEW.setUint32(A, K, !0), "LE_HEAP_STORE_U32"),
        callRuntimeCallbacks = __$.V6(A => {
          while (A.length > 0) A.shift()(Module);
        }, "callRuntimeCallbacks"),
        onPostRuns = [],
        addOnPostRun = __$.V6(A => onPostRuns.unshift(A), "addOnPostRun"),
        onPreRuns = [],
        addOnPreRun = __$.V6(A => onPreRuns.unshift(A), "addOnPreRun"),
        UTF8Decoder = typeof TextDecoder < "u" ? new TextDecoder() : void 0,
        UTF8ArrayToString = __$.V6((A, K = 0, q = NaN) => {
          var Y = K + q,
            z = K;
          while (A[z] && !(z >= Y)) ++z;
          if (z - K > 16 && A.buffer && UTF8Decoder) return UTF8Decoder.decode(A.subarray(K, z));
          var w = "";
          while (K < z) {
            var H = A[K++];
            if (!(H & 128)) {
              w += String.fromCharCode(H);
              continue;
            }
            var J = A[K++] & 63;
            if ((H & 224) == 192) {
              w += String.fromCharCode((H & 31) << 6 | J);
              continue;
            }
            var O = A[K++] & 63;
            if ((H & 240) == 224) H = (H & 15) << 12 | J << 6 | O;else H = (H & 7) << 18 | J << 12 | O << 6 | A[K++] & 63;
            if (H < 65536) w += String.fromCharCode(H);else {
              var X = H - 65536;
              w += String.fromCharCode(55296 | X >> 10, 56320 | X & 1023);
            }
          }
          return w;
        }, "UTF8ArrayToString"),
        getDylinkMetadata = __$.V6(A => {
          var K = 0,
            q = 0;
          function Y() {
            return A[K++];
          }
          __$.V6(Y, "getU8");
          function z() {
            var Q = 0,
              u = 1;
            while (!0) {
              var d = A[K++];
              if (Q += (d & 127) * u, u *= 128, !(d & 128)) break;
            }
            return Q;
          }
          __$.V6(z, "getLEB");
          function w() {
            var Q = z();
            return K += Q, UTF8ArrayToString(A, K - Q, Q);
          }
          __$.V6(w, "getString");
          function H(Q, u) {
            if (Q) throw Error(u);
          }
          __$.V6(H, "failIf");
          var J = "dylink.0";
          if (A instanceof WebAssembly.Module) {
            var O = WebAssembly.Module.customSections(A, J);
            if (O.length === 0) J = "dylink", O = WebAssembly.Module.customSections(A, J);
            H(O.length === 0, "need dylink section"), A = new Uint8Array(O[0]), q = A.length;
          } else {
            var X = new Uint32Array(new Uint8Array(A.subarray(0, 24)).buffer),
              $ = X[0] == 1836278016 || X[0] == 6386541;
            H(!$, "need to see wasm magic number"), H(A[8] !== 0, "need the dylink section to be first"), K = 9;
            var _ = z();
            q = K + _, J = w();
          }
          var G = {
            neededDynlibs: [],
            tlsExports: new Set(),
            weakImports: new Set()
          };
          if (J == "dylink") {
            G.memorySize = z(), G.memoryAlign = z(), G.tableSize = z(), G.tableAlign = z();
            var Z = z();
            for (var W = 0; W < Z; ++W) {
              var D = w();
              G.neededDynlibs.push(D);
            }
          } else {
            H(J !== "dylink.0");
            var j = 1,
              M = 2,
              P = 3,
              f = 4,
              N = 256,
              T = 3,
              C = 1;
            while (K < q) {
              var R = Y(),
                x = z();
              if (R === j) G.memorySize = z(), G.memoryAlign = z(), G.tableSize = z(), G.tableAlign = z();else if (R === M) {
                var Z = z();
                for (var W = 0; W < Z; ++W) D = w(), G.neededDynlibs.push(D);
              } else if (R === P) {
                var y = z();
                while (y--) {
                  var B = w(),
                    b = z();
                  if (b & N) G.tlsExports.add(B);
                }
              } else if (R === f) {
                var y = z();
                while (y--) {
                  var F = w(),
                    B = w(),
                    b = z();
                  if ((b & T) == C) G.weakImports.add(B);
                }
              } else K += x;
            }
          }
          return G;
        }, "getDylinkMetadata");
      function getValue(A, K = "i8") {
        if (K.endsWith("*")) K = "*";
        switch (K) {
          case "i1":
            return HEAP8[A];
          case "i8":
            return HEAP8[A];
          case "i16":
            return LE_HEAP_LOAD_I16((A >> 1) * 2);
          case "i32":
            return LE_HEAP_LOAD_I32((A >> 2) * 4);
          case "i64":
            return HEAP64[A >> 3];
          case "float":
            return LE_HEAP_LOAD_F32((A >> 2) * 4);
          case "double":
            return LE_HEAP_LOAD_F64((A >> 3) * 8);
          case "*":
            return LE_HEAP_LOAD_U32((A >> 2) * 4);
          default:
            abort(`invalid type for getValue: ${K}`);
        }
      }
      __$.V6(getValue, "getValue");
      var newDSO = __$.V6((A, K, q) => {
          var Y = {
            refcount: 1 / 0,
            name: A,
            exports: q,
            global: !0
          };
          if (LDSO.loadedLibsByName[A] = Y, K != null) LDSO.loadedLibsByHandle[K] = Y;
          return Y;
        }, "newDSO"),
        LDSO = {
          loadedLibsByName: {},
          loadedLibsByHandle: {},
          init() {
            newDSO("__main__", 0, wasmImports);
          }
        },
        ___heap_base = 78224,
        alignMemory = __$.V6((A, K) => Math.ceil(A / K) * K, "alignMemory"),
        getMemory = __$.V6(A => {
          if (runtimeInitialized) return _calloc(A, 1);
          var K = ___heap_base,
            q = K + alignMemory(A, 16);
          return ___heap_base = q, GOT.__heap_base.value = q, K;
        }, "getMemory"),
        isInternalSym = __$.V6(A => ["__cpp_exception", "__c_longjmp", "__wasm_apply_data_relocs", "__dso_handle", "__tls_size", "__tls_align", "__set_stack_limits", "_emscripten_tls_init", "__wasm_init_tls", "__wasm_call_ctors", "__start_em_asm", "__stop_em_asm", "__start_em_js", "__stop_em_js"].includes(A) || A.startsWith("__em_js__"), "isInternalSym"),
        uleb128Encode = __$.V6((A, K) => {
          if (A < 128) K.push(A);else K.push(A % 128 | 128, A >> 7);
        }, "uleb128Encode"),
        sigToWasmTypes = __$.V6(A => {
          var K = {
              i: "i32",
              j: "i64",
              f: "f32",
              d: "f64",
              e: "externref",
              p: "i32"
            },
            q = {
              parameters: [],
              results: A[0] == "v" ? [] : [K[A[0]]]
            };
          for (var Y = 1; Y < A.length; ++Y) q.parameters.push(K[A[Y]]);
          return q;
        }, "sigToWasmTypes"),
        generateFuncType = __$.V6((A, K) => {
          var q = A.slice(0, 1),
            Y = A.slice(1),
            z = {
              i: 127,
              p: 127,
              j: 126,
              f: 125,
              d: 124,
              e: 111
            };
          K.push(96), uleb128Encode(Y.length, K);
          for (var w = 0; w < Y.length; ++w) K.push(z[Y[w]]);
          if (q == "v") K.push(0);else K.push(1, z[q]);
        }, "generateFuncType"),
        convertJsFunctionToWasm = __$.V6((A, K) => {
          if (typeof WebAssembly.Function == "function") return new WebAssembly.Function(sigToWasmTypes(K), A);
          var q = [1];
          generateFuncType(K, q);
          var Y = [0, 97, 115, 109, 1, 0, 0, 0, 1];
          uleb128Encode(q.length, Y), Y.push(...q), Y.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
          var z = new WebAssembly.Module(new Uint8Array(Y)),
            w = new WebAssembly.Instance(z, {
              e: {
                f: A
              }
            }),
            H = w.exports.f;
          return H;
        }, "convertJsFunctionToWasm"),
        wasmTableMirror = [],
        wasmTable = new WebAssembly.Table({
          initial: 31,
          element: "anyfunc"
        }),
        getWasmTableEntry = __$.V6(A => {
          var K = wasmTableMirror[A];
          if (!K) {
            if (A >= wasmTableMirror.length) wasmTableMirror.length = A + 1;
            wasmTableMirror[A] = K = wasmTable.get(A);
          }
          return K;
        }, "getWasmTableEntry"),
        updateTableMap = __$.V6((A, K) => {
          if (functionsInTableMap) for (var q = A; q < A + K; q++) {
            var Y = getWasmTableEntry(q);
            if (Y) functionsInTableMap.set(Y, q);
          }
        }, "updateTableMap"),
        functionsInTableMap,
        getFunctionAddress = __$.V6(A => {
          if (!functionsInTableMap) functionsInTableMap = new WeakMap(), updateTableMap(0, wasmTable.length);
          return functionsInTableMap.get(A) || 0;
        }, "getFunctionAddress"),
        freeTableIndexes = [],
        getEmptyTableSlot = __$.V6(() => {
          if (freeTableIndexes.length) return freeTableIndexes.pop();
          try {
            wasmTable.grow(1);
          } catch (A) {
            if (!(A instanceof RangeError)) throw A;
            throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
          }
          return wasmTable.length - 1;
        }, "getEmptyTableSlot"),
        setWasmTableEntry = __$.V6((A, K) => {
          wasmTable.set(A, K), wasmTableMirror[A] = wasmTable.get(A);
        }, "setWasmTableEntry"),
        addFunction = __$.V6((A, K) => {
          var q = getFunctionAddress(A);
          if (q) return q;
          var Y = getEmptyTableSlot();
          try {
            setWasmTableEntry(Y, A);
          } catch (w) {
            if (!(w instanceof TypeError)) throw w;
            var z = convertJsFunctionToWasm(A, K);
            setWasmTableEntry(Y, z);
          }
          return functionsInTableMap.set(A, Y), Y;
        }, "addFunction"),
        updateGOT = __$.V6((A, K) => {
          for (var q in A) {
            if (isInternalSym(q)) continue;
            var Y = A[q];
            if (GOT[q] ||= new WebAssembly.Global({
              value: "i32",
              mutable: !0
            }), K || GOT[q].value == 0) if (typeof Y == "function") GOT[q].value = addFunction(Y);else if (typeof Y == "number") GOT[q].value = Y;else err(`unhandled export type for '${q}': ${typeof Y}`);
          }
        }, "updateGOT"),
        relocateExports = __$.V6((A, K, q) => {
          var Y = {};
          for (var z in A) {
            var w = A[z];
            if (typeof w == "object") w = w.value;
            if (typeof w == "number") w += K;
            Y[z] = w;
          }
          return updateGOT(Y, q), Y;
        }, "relocateExports"),
        isSymbolDefined = __$.V6(A => {
          var K = wasmImports[A];
          if (!K || K.stub) return !1;
          return !0;
        }, "isSymbolDefined"),
        dynCall = __$.V6((A, K, q = []) => {
          var Y = getWasmTableEntry(K)(...q);
          return Y;
        }, "dynCall"),
        stackSave = __$.V6(() => _emscripten_stack_get_current(), "stackSave"),
        stackRestore = __$.V6(A => __emscripten_stack_restore(A), "stackRestore"),
        createInvokeFunction = __$.V6(A => (K, ...q) => {
          var Y = stackSave();
          try {
            return dynCall(A, K, q);
          } catch (z) {
            if (stackRestore(Y), z !== z + 0) throw z;
            if (_setThrew(1, 0), A[0] == "j") return 0n;
          }
        }, "createInvokeFunction"),
        resolveGlobalSymbol = __$.V6((A, K = !1) => {
          var q;
          if (isSymbolDefined(A)) q = wasmImports[A];else if (A.startsWith("invoke_")) q = wasmImports[A] = createInvokeFunction(A.split("_")[1]);
          return {
            sym: q,
            name: A
          };
        }, "resolveGlobalSymbol"),
        onPostCtors = [],
        addOnPostCtor = __$.V6(A => onPostCtors.unshift(A), "addOnPostCtor"),
        UTF8ToString = __$.V6((A, K) => A ? UTF8ArrayToString(HEAPU8, A, K) : "", "UTF8ToString"),
        loadWebAssemblyModule = __$.V6((binary, flags, libName, localScope, handle) => {
          var metadata = getDylinkMetadata(binary);
          currentModuleWeakSymbols = metadata.weakImports;
          function loadModule() {
            var memAlign = Math.pow(2, metadata.memoryAlign),
              memoryBase = metadata.memorySize ? alignMemory(getMemory(metadata.memorySize + memAlign), memAlign) : 0,
              tableBase = metadata.tableSize ? wasmTable.length : 0;
            if (handle) HEAP8[handle + 8] = 1, LE_HEAP_STORE_U32((handle + 12 >> 2) * 4, memoryBase), LE_HEAP_STORE_I32((handle + 16 >> 2) * 4, metadata.memorySize), LE_HEAP_STORE_U32((handle + 20 >> 2) * 4, tableBase), LE_HEAP_STORE_I32((handle + 24 >> 2) * 4, metadata.tableSize);
            if (metadata.tableSize) wasmTable.grow(metadata.tableSize);
            var moduleExports;
            function resolveSymbol(A) {
              var K = resolveGlobalSymbol(A).sym;
              if (!K && localScope) K = localScope[A];
              if (!K) K = moduleExports[A];
              return K;
            }
            __$.V6(resolveSymbol, "resolveSymbol");
            var proxyHandler = {
                get(A, K) {
                  switch (K) {
                    case "__memory_base":
                      return memoryBase;
                    case "__table_base":
                      return tableBase;
                  }
                  if (K in wasmImports && !wasmImports[K].stub) {
                    var q = wasmImports[K];
                    return q;
                  }
                  if (!(K in A)) {
                    var Y;
                    A[K] = (...z) => {
                      return Y ||= resolveSymbol(K), Y(...z);
                    };
                  }
                  return A[K];
                }
              },
              proxy = new Proxy({}, proxyHandler),
              info = {
                "GOT.mem": new Proxy({}, GOTHandler),
                "GOT.func": new Proxy({}, GOTHandler),
                env: proxy,
                wasi_snapshot_preview1: proxy
              };
            function postInstantiation(module, instance) {
              if (updateTableMap(tableBase, metadata.tableSize), moduleExports = relocateExports(instance.exports, memoryBase), !flags.allowUndefined) reportUndefinedSymbols();
              function addEmAsm(addr, body) {
                var args = [],
                  arity = 0;
                for (; arity < 16; arity++) if (body.indexOf("$" + arity) != -1) args.push("$" + arity);else break;
                args = args.join(",");
                var func = `(${args}) => { ${body} };`;
                ASM_CONSTS[start] = eval(func);
              }
              if (__$.V6(addEmAsm, "addEmAsm"), "__start_em_asm" in moduleExports) {
                var {
                  __start_em_asm: start,
                  __stop_em_asm: stop
                } = moduleExports;
                while (start < stop) {
                  var jsString = UTF8ToString(start);
                  addEmAsm(start, jsString), start = HEAPU8.indexOf(0, start) + 1;
                }
              }
              function addEmJs(name, cSig, body) {
                var jsArgs = [];
                if (cSig = cSig.slice(1, -1), cSig != "void") {
                  cSig = cSig.split(",");
                  for (var i in cSig) {
                    var jsArg = cSig[i].split(" ").pop();
                    jsArgs.push(jsArg.replace("*", ""));
                  }
                }
                var func = `(${jsArgs}) => ${body};`;
                moduleExports[name] = eval(func);
              }
              __$.V6(addEmJs, "addEmJs");
              for (var name in moduleExports) if (name.startsWith("__em_js__")) {
                var start = moduleExports[name],
                  jsString = UTF8ToString(start),
                  parts = jsString.split("<::>");
                addEmJs(name.replace("__em_js__", ""), parts[0], parts[1]), delete moduleExports[name];
              }
              var applyRelocs = moduleExports.__wasm_apply_data_relocs;
              if (applyRelocs) if (runtimeInitialized) applyRelocs();else __RELOC_FUNCS__.push(applyRelocs);
              var init = moduleExports.__wasm_call_ctors;
              if (init) if (runtimeInitialized) init();else addOnPostCtor(init);
              return moduleExports;
            }
            if (__$.V6(postInstantiation, "postInstantiation"), flags.loadAsync) {
              if (binary instanceof WebAssembly.Module) {
                var instance = new WebAssembly.Instance(binary, info);
                return Promise.resolve(postInstantiation(binary, instance));
              }
              return WebAssembly.instantiate(binary, info).then(A => postInstantiation(A.module, A.instance));
            }
            var module = binary instanceof WebAssembly.Module ? binary : new WebAssembly.Module(binary),
              instance = new WebAssembly.Instance(module, info);
            return postInstantiation(module, instance);
          }
          if (__$.V6(loadModule, "loadModule"), flags.loadAsync) return metadata.neededDynlibs.reduce((A, K) => A.then(() => loadDynamicLibrary(K, flags, localScope)), Promise.resolve()).then(loadModule);
          return metadata.neededDynlibs.forEach(A => loadDynamicLibrary(A, flags, localScope)), loadModule();
        }, "loadWebAssemblyModule"),
        mergeLibSymbols = __$.V6((A, K) => {
          for (var [q, Y] of Object.entries(A)) {
            let z = __$.V6(H => {
              if (!isSymbolDefined(H)) wasmImports[H] = Y;
            }, "setImport");
            z(q);
            let w = "__main_argc_argv";
            if (q == "main") z(w);
            if (q == w) z("main");
          }
        }, "mergeLibSymbols"),
        asyncLoad = __$.V6(async A => {
          var K = await readAsync(A);
          return new Uint8Array(K);
        }, "asyncLoad");
      function loadDynamicLibrary(A, K = {
        global: !0,
        nodelete: !0
      }, q, Y) {
        var z = LDSO.loadedLibsByName[A];
        if (z) {
          if (!K.global) {
            if (q) Object.assign(q, z.exports);
          } else if (!z.global) z.global = !0, mergeLibSymbols(z.exports, A);
          if (K.nodelete && z.refcount !== 1 / 0) z.refcount = 1 / 0;
          if (z.refcount++, Y) LDSO.loadedLibsByHandle[Y] = z;
          return K.loadAsync ? Promise.resolve(!0) : !0;
        }
        z = newDSO(A, Y, "loading"), z.refcount = K.nodelete ? 1 / 0 : 1, z.global = K.global;
        function w() {
          if (Y) {
            var O = LE_HEAP_LOAD_U32((Y + 28 >> 2) * 4),
              X = LE_HEAP_LOAD_U32((Y + 32 >> 2) * 4);
            if (O && X) {
              var $ = HEAP8.slice(O, O + X);
              return K.loadAsync ? Promise.resolve($) : $;
            }
          }
          var _ = locateFile(A);
          if (K.loadAsync) return asyncLoad(_);
          if (!readBinary) throw Error(`${_}: file not found, and synchronous loading of external files is not available`);
          return readBinary(_);
        }
        __$.V6(w, "loadLibData");
        function H() {
          if (K.loadAsync) return w().then(O => loadWebAssemblyModule(O, K, A, q, Y));
          return loadWebAssemblyModule(w(), K, A, q, Y);
        }
        __$.V6(H, "getExports");
        function J(O) {
          if (z.global) mergeLibSymbols(O, A);else if (q) Object.assign(q, O);
          z.exports = O;
        }
        if (__$.V6(J, "moduleLoaded"), K.loadAsync) return H().then(O => {
          return J(O), !0;
        });
        return J(H()), !0;
      }
      __$.V6(loadDynamicLibrary, "loadDynamicLibrary");
      var reportUndefinedSymbols = __$.V6(() => {
          for (var [A, K] of Object.entries(GOT)) if (K.value == 0) {
            var q = resolveGlobalSymbol(A, !0).sym;
            if (!q && !K.required) continue;
            if (typeof q == "function") K.value = addFunction(q, q.sig);else if (typeof q == "number") K.value = q;else throw Error(`bad export type for '${A}': ${typeof q}`);
          }
        }, "reportUndefinedSymbols"),
        loadDylibs = __$.V6(() => {
          if (!dynamicLibraries.length) {
            reportUndefinedSymbols();
            return;
          }
          addRunDependency("loadDylibs"), dynamicLibraries.reduce((A, K) => A.then(() => loadDynamicLibrary(K, {
            loadAsync: !0,
            global: !0,
            nodelete: !0,
            allowUndefined: !0
          })), Promise.resolve()).then(() => {
            reportUndefinedSymbols(), removeRunDependency("loadDylibs");
          });
        }, "loadDylibs"),
        noExitRuntime = Module.noExitRuntime || !0;
      function setValue(A, K, q = "i8") {
        if (q.endsWith("*")) q = "*";
        switch (q) {
          case "i1":
            HEAP8[A] = K;
            break;
          case "i8":
            HEAP8[A] = K;
            break;
          case "i16":
            LE_HEAP_STORE_I16((A >> 1) * 2, K);
            break;
          case "i32":
            LE_HEAP_STORE_I32((A >> 2) * 4, K);
            break;
          case "i64":
            HEAP64[A >> 3] = BigInt(K);
            break;
          case "float":
            LE_HEAP_STORE_F32((A >> 2) * 4, K);
            break;
          case "double":
            LE_HEAP_STORE_F64((A >> 3) * 8, K);
            break;
          case "*":
            LE_HEAP_STORE_U32((A >> 2) * 4, K);
            break;
          default:
            abort(`invalid type for setValue: ${q}`);
        }
      }
      __$.V6(setValue, "setValue");
      var ___memory_base = new WebAssembly.Global({
          value: "i32",
          mutable: !1
        }, 1024),
        ___stack_pointer = new WebAssembly.Global({
          value: "i32",
          mutable: !0
        }, 78224),
        ___table_base = new WebAssembly.Global({
          value: "i32",
          mutable: !1
        }, 1),
        __abort_js = __$.V6(() => abort(""), "__abort_js");
      __abort_js.sig = "v";
      var _emscripten_get_now = __$.V6(() => performance.now(), "_emscripten_get_now");
      _emscripten_get_now.sig = "d";
      var _emscripten_date_now = __$.V6(() => Date.now(), "_emscripten_date_now");
      _emscripten_date_now.sig = "d";
      var nowIsMonotonic = 1,
        checkWasiClock = __$.V6(A => A >= 0 && A <= 3, "checkWasiClock"),
        INT53_MAX = 9007199254740992,
        INT53_MIN = -9007199254740992,
        bigintToI53Checked = __$.V6(A => A < INT53_MIN || A > INT53_MAX ? NaN : Number(A), "bigintToI53Checked");
      function _clock_time_get(A, K, q) {
        if (K = bigintToI53Checked(K), !checkWasiClock(A)) return 28;
        var Y;
        if (A === 0) Y = _emscripten_date_now();else if (nowIsMonotonic) Y = _emscripten_get_now();else return 52;
        var z = Math.round(Y * 1000 * 1000);
        return HEAP64[q >> 3] = BigInt(z), 0;
      }
      __$.V6(_clock_time_get, "_clock_time_get"), _clock_time_get.sig = "iijp";
      var getHeapMax = __$.V6(() => 2147483648, "getHeapMax"),
        growMemory = __$.V6(A => {
          var K = wasmMemory.buffer,
            q = (A - K.byteLength + 65535) / 65536 | 0;
          try {
            return wasmMemory.grow(q), updateMemoryViews(), 1;
          } catch (Y) {}
        }, "growMemory"),
        _emscripten_resize_heap = __$.V6(A => {
          var K = HEAPU8.length;
          A >>>= 0;
          var q = getHeapMax();
          if (A > q) return !1;
          for (var Y = 1; Y <= 4; Y *= 2) {
            var z = K * (1 + 0.2 / Y);
            z = Math.min(z, A + 100663296);
            var w = Math.min(q, alignMemory(Math.max(A, z), 65536)),
              H = growMemory(w);
            if (H) return !0;
          }
          return !1;
        }, "_emscripten_resize_heap");
      _emscripten_resize_heap.sig = "ip";
      var _fd_close = __$.V6(A => 52, "_fd_close");
      _fd_close.sig = "ii";
      function _fd_seek(A, K, q, Y) {
        return K = bigintToI53Checked(K), 70;
      }
      __$.V6(_fd_seek, "_fd_seek"), _fd_seek.sig = "iijip";
      var printCharBuffers = [null, [], []],
        printChar = __$.V6((A, K) => {
          var q = printCharBuffers[A];
          if (K === 0 || K === 10) (A === 1 ? out : err)(UTF8ArrayToString(q)), q.length = 0;else q.push(K);
        }, "printChar"),
        flush_NO_FILESYSTEM = __$.V6(() => {
          if (printCharBuffers[1].length) printChar(1, 10);
          if (printCharBuffers[2].length) printChar(2, 10);
        }, "flush_NO_FILESYSTEM"),
        SYSCALLS = {
          varargs: void 0,
          getStr(A) {
            var K = UTF8ToString(A);
            return K;
          }
        },
        _fd_write = __$.V6((A, K, q, Y) => {
          var z = 0;
          for (var w = 0; w < q; w++) {
            var H = LE_HEAP_LOAD_U32((K >> 2) * 4),
              J = LE_HEAP_LOAD_U32((K + 4 >> 2) * 4);
            K += 8;
            for (var O = 0; O < J; O++) printChar(A, HEAPU8[H + O]);
            z += J;
          }
          return LE_HEAP_STORE_U32((Y >> 2) * 4, z), 0;
        }, "_fd_write");
      _fd_write.sig = "iippp";
      function _tree_sitter_log_callback(A, K) {
        if (Module.currentLogCallback) {
          let q = UTF8ToString(K);
          Module.currentLogCallback(q, A !== 0);
        }
      }
      __$.V6(_tree_sitter_log_callback, "_tree_sitter_log_callback");
      function _tree_sitter_parse_callback(A, K, q, Y, z) {
        let H = Module.currentParseCallback(K, {
          row: q,
          column: Y
        });
        if (typeof H === "string") setValue(z, H.length, "i32"), stringToUTF16(H, A, 10240);else setValue(z, 0, "i32");
      }
      __$.V6(_tree_sitter_parse_callback, "_tree_sitter_parse_callback");
      function _tree_sitter_progress_callback(A, K) {
        if (Module.currentProgressCallback) return Module.currentProgressCallback({
          currentOffset: A,
          hasError: K
        });
        return !1;
      }
      __$.V6(_tree_sitter_progress_callback, "_tree_sitter_progress_callback");
      function _tree_sitter_query_progress_callback(A) {
        if (Module.currentQueryProgressCallback) return Module.currentQueryProgressCallback({
          currentOffset: A
        });
        return !1;
      }
      __$.V6(_tree_sitter_query_progress_callback, "_tree_sitter_query_progress_callback");
      var runtimeKeepaliveCounter = 0,
        keepRuntimeAlive = __$.V6(() => noExitRuntime || runtimeKeepaliveCounter > 0, "keepRuntimeAlive"),
        _proc_exit = __$.V6(A => {
          if (EXITSTATUS = A, !keepRuntimeAlive()) Module.onExit?.(A), ABORT = !0;
          quit_(A, new ExitStatus(A));
        }, "_proc_exit");
      _proc_exit.sig = "vi";
      var exitJS = __$.V6((A, K) => {
          EXITSTATUS = A, _proc_exit(A);
        }, "exitJS"),
        handleException = __$.V6(A => {
          if (A instanceof ExitStatus || A == "unwind") return EXITSTATUS;
          quit_(1, A);
        }, "handleException"),
        lengthBytesUTF8 = __$.V6(A => {
          var K = 0;
          for (var q = 0; q < A.length; ++q) {
            var Y = A.charCodeAt(q);
            if (Y <= 127) K++;else if (Y <= 2047) K += 2;else if (Y >= 55296 && Y <= 57343) K += 4, ++q;else K += 3;
          }
          return K;
        }, "lengthBytesUTF8"),
        stringToUTF8Array = __$.V6((A, K, q, Y) => {
          if (!(Y > 0)) return 0;
          var z = q,
            w = q + Y - 1;
          for (var H = 0; H < A.length; ++H) {
            var J = A.charCodeAt(H);
            if (J >= 55296 && J <= 57343) {
              var O = A.charCodeAt(++H);
              J = 65536 + ((J & 1023) << 10) | O & 1023;
            }
            if (J <= 127) {
              if (q >= w) break;
              K[q++] = J;
            } else if (J <= 2047) {
              if (q + 1 >= w) break;
              K[q++] = 192 | J >> 6, K[q++] = 128 | J & 63;
            } else if (J <= 65535) {
              if (q + 2 >= w) break;
              K[q++] = 224 | J >> 12, K[q++] = 128 | J >> 6 & 63, K[q++] = 128 | J & 63;
            } else {
              if (q + 3 >= w) break;
              K[q++] = 240 | J >> 18, K[q++] = 128 | J >> 12 & 63, K[q++] = 128 | J >> 6 & 63, K[q++] = 128 | J & 63;
            }
          }
          return K[q] = 0, q - z;
        }, "stringToUTF8Array"),
        stringToUTF8 = __$.V6((A, K, q) => stringToUTF8Array(A, HEAPU8, K, q), "stringToUTF8"),
        stackAlloc = __$.V6(A => __emscripten_stack_alloc(A), "stackAlloc"),
        stringToUTF8OnStack = __$.V6(A => {
          var K = lengthBytesUTF8(A) + 1,
            q = stackAlloc(K);
          return stringToUTF8(A, q, K), q;
        }, "stringToUTF8OnStack"),
        AsciiToString = __$.V6(A => {
          var K = "";
          while (!0) {
            var q = HEAPU8[A++];
            if (!q) return K;
            K += String.fromCharCode(q);
          }
        }, "AsciiToString"),
        stringToUTF16 = __$.V6((A, K, q) => {
          if (q ??= 2147483647, q < 2) return 0;
          q -= 2;
          var Y = K,
            z = q < A.length * 2 ? q / 2 : A.length;
          for (var w = 0; w < z; ++w) {
            var H = A.charCodeAt(w);
            LE_HEAP_STORE_I16((K >> 1) * 2, H), K += 2;
          }
          return LE_HEAP_STORE_I16((K >> 1) * 2, 0), K - Y;
        }, "stringToUTF16"),
        wasmImports = {
          __heap_base: ___heap_base,
          __indirect_function_table: wasmTable,
          __memory_base: ___memory_base,
          __stack_pointer: ___stack_pointer,
          __table_base: ___table_base,
          _abort_js: __abort_js,
          clock_time_get: _clock_time_get,
          emscripten_resize_heap: _emscripten_resize_heap,
          fd_close: _fd_close,
          fd_seek: _fd_seek,
          fd_write: _fd_write,
          memory: wasmMemory,
          tree_sitter_log_callback: _tree_sitter_log_callback,
          tree_sitter_parse_callback: _tree_sitter_parse_callback,
          tree_sitter_progress_callback: _tree_sitter_progress_callback,
          tree_sitter_query_progress_callback: _tree_sitter_query_progress_callback
        },
        wasmExports = await createWasm(),
        ___wasm_call_ctors = wasmExports.__wasm_call_ctors,
        _malloc = Module._malloc = wasmExports.malloc,
        _calloc = Module._calloc = wasmExports.calloc,
        _realloc = Module._realloc = wasmExports.realloc,
        _free = Module._free = wasmExports.free,
        _memcmp = Module._memcmp = wasmExports.memcmp,
        _ts_language_symbol_count = Module._ts_language_symbol_count = wasmExports.ts_language_symbol_count,
        _ts_language_state_count = Module._ts_language_state_count = wasmExports.ts_language_state_count,
        _ts_language_version = Module._ts_language_version = wasmExports.ts_language_version,
        _ts_language_abi_version = Module._ts_language_abi_version = wasmExports.ts_language_abi_version,
        _ts_language_metadata = Module._ts_language_metadata = wasmExports.ts_language_metadata,
        _ts_language_name = Module._ts_language_name = wasmExports.ts_language_name,
        _ts_language_field_count = Module._ts_language_field_count = wasmExports.ts_language_field_count,
        _ts_language_next_state = Module._ts_language_next_state = wasmExports.ts_language_next_state,
        _ts_language_symbol_name = Module._ts_language_symbol_name = wasmExports.ts_language_symbol_name,
        _ts_language_symbol_for_name = Module._ts_language_symbol_for_name = wasmExports.ts_language_symbol_for_name,
        _strncmp = Module._strncmp = wasmExports.strncmp,
        _ts_language_symbol_type = Module._ts_language_symbol_type = wasmExports.ts_language_symbol_type,
        _ts_language_field_name_for_id = Module._ts_language_field_name_for_id = wasmExports.ts_language_field_name_for_id,
        _ts_lookahead_iterator_new = Module._ts_lookahead_iterator_new = wasmExports.ts_lookahead_iterator_new,
        _ts_lookahead_iterator_delete = Module._ts_lookahead_iterator_delete = wasmExports.ts_lookahead_iterator_delete,
        _ts_lookahead_iterator_reset_state = Module._ts_lookahead_iterator_reset_state = wasmExports.ts_lookahead_iterator_reset_state,
        _ts_lookahead_iterator_reset = Module._ts_lookahead_iterator_reset = wasmExports.ts_lookahead_iterator_reset,
        _ts_lookahead_iterator_next = Module._ts_lookahead_iterator_next = wasmExports.ts_lookahead_iterator_next,
        _ts_lookahead_iterator_current_symbol = Module._ts_lookahead_iterator_current_symbol = wasmExports.ts_lookahead_iterator_current_symbol,
        _ts_parser_delete = Module._ts_parser_delete = wasmExports.ts_parser_delete,
        _ts_parser_reset = Module._ts_parser_reset = wasmExports.ts_parser_reset,
        _ts_parser_set_language = Module._ts_parser_set_language = wasmExports.ts_parser_set_language,
        _ts_parser_timeout_micros = Module._ts_parser_timeout_micros = wasmExports.ts_parser_timeout_micros,
        _ts_parser_set_timeout_micros = Module._ts_parser_set_timeout_micros = wasmExports.ts_parser_set_timeout_micros,
        _ts_parser_set_included_ranges = Module._ts_parser_set_included_ranges = wasmExports.ts_parser_set_included_ranges,
        _ts_query_new = Module._ts_query_new = wasmExports.ts_query_new,
        _ts_query_delete = Module._ts_query_delete = wasmExports.ts_query_delete,
        _iswspace = Module._iswspace = wasmExports.iswspace,
        _iswalnum = Module._iswalnum = wasmExports.iswalnum,
        _ts_query_pattern_count = Module._ts_query_pattern_count = wasmExports.ts_query_pattern_count,
        _ts_query_capture_count = Module._ts_query_capture_count = wasmExports.ts_query_capture_count,
        _ts_query_string_count = Module._ts_query_string_count = wasmExports.ts_query_string_count,
        _ts_query_capture_name_for_id = Module._ts_query_capture_name_for_id = wasmExports.ts_query_capture_name_for_id,
        _ts_query_capture_quantifier_for_id = Module._ts_query_capture_quantifier_for_id = wasmExports.ts_query_capture_quantifier_for_id,
        _ts_query_string_value_for_id = Module._ts_query_string_value_for_id = wasmExports.ts_query_string_value_for_id,
        _ts_query_predicates_for_pattern = Module._ts_query_predicates_for_pattern = wasmExports.ts_query_predicates_for_pattern,
        _ts_query_start_byte_for_pattern = Module._ts_query_start_byte_for_pattern = wasmExports.ts_query_start_byte_for_pattern,
        _ts_query_end_byte_for_pattern = Module._ts_query_end_byte_for_pattern = wasmExports.ts_query_end_byte_for_pattern,
        _ts_query_is_pattern_rooted = Module._ts_query_is_pattern_rooted = wasmExports.ts_query_is_pattern_rooted,
        _ts_query_is_pattern_non_local = Module._ts_query_is_pattern_non_local = wasmExports.ts_query_is_pattern_non_local,
        _ts_query_is_pattern_guaranteed_at_step = Module._ts_query_is_pattern_guaranteed_at_step = wasmExports.ts_query_is_pattern_guaranteed_at_step,
        _ts_query_disable_capture = Module._ts_query_disable_capture = wasmExports.ts_query_disable_capture,
        _ts_query_disable_pattern = Module._ts_query_disable_pattern = wasmExports.ts_query_disable_pattern,
        _ts_tree_copy = Module._ts_tree_copy = wasmExports.ts_tree_copy,
        _ts_tree_delete = Module._ts_tree_delete = wasmExports.ts_tree_delete,
        _ts_init = Module._ts_init = wasmExports.ts_init,
        _ts_parser_new_wasm = Module._ts_parser_new_wasm = wasmExports.ts_parser_new_wasm,
        _ts_parser_enable_logger_wasm = Module._ts_parser_enable_logger_wasm = wasmExports.ts_parser_enable_logger_wasm,
        _ts_parser_parse_wasm = Module._ts_parser_parse_wasm = wasmExports.ts_parser_parse_wasm,
        _ts_parser_included_ranges_wasm = Module._ts_parser_included_ranges_wasm = wasmExports.ts_parser_included_ranges_wasm,
        _ts_language_type_is_named_wasm = Module._ts_language_type_is_named_wasm = wasmExports.ts_language_type_is_named_wasm,
        _ts_language_type_is_visible_wasm = Module._ts_language_type_is_visible_wasm = wasmExports.ts_language_type_is_visible_wasm,
        _ts_language_supertypes_wasm = Module._ts_language_supertypes_wasm = wasmExports.ts_language_supertypes_wasm,
        _ts_language_subtypes_wasm = Module._ts_language_subtypes_wasm = wasmExports.ts_language_subtypes_wasm,
        _ts_tree_root_node_wasm = Module._ts_tree_root_node_wasm = wasmExports.ts_tree_root_node_wasm,
        _ts_tree_root_node_with_offset_wasm = Module._ts_tree_root_node_with_offset_wasm = wasmExports.ts_tree_root_node_with_offset_wasm,
        _ts_tree_edit_wasm = Module._ts_tree_edit_wasm = wasmExports.ts_tree_edit_wasm,
        _ts_tree_included_ranges_wasm = Module._ts_tree_included_ranges_wasm = wasmExports.ts_tree_included_ranges_wasm,
        _ts_tree_get_changed_ranges_wasm = Module._ts_tree_get_changed_ranges_wasm = wasmExports.ts_tree_get_changed_ranges_wasm,
        _ts_tree_cursor_new_wasm = Module._ts_tree_cursor_new_wasm = wasmExports.ts_tree_cursor_new_wasm,
        _ts_tree_cursor_copy_wasm = Module._ts_tree_cursor_copy_wasm = wasmExports.ts_tree_cursor_copy_wasm,
        _ts_tree_cursor_delete_wasm = Module._ts_tree_cursor_delete_wasm = wasmExports.ts_tree_cursor_delete_wasm,
        _ts_tree_cursor_reset_wasm = Module._ts_tree_cursor_reset_wasm = wasmExports.ts_tree_cursor_reset_wasm,
        _ts_tree_cursor_reset_to_wasm = Module._ts_tree_cursor_reset_to_wasm = wasmExports.ts_tree_cursor_reset_to_wasm,
        _ts_tree_cursor_goto_first_child_wasm = Module._ts_tree_cursor_goto_first_child_wasm = wasmExports.ts_tree_cursor_goto_first_child_wasm,
        _ts_tree_cursor_goto_last_child_wasm = Module._ts_tree_cursor_goto_last_child_wasm = wasmExports.ts_tree_cursor_goto_last_child_wasm,
        _ts_tree_cursor_goto_first_child_for_index_wasm = Module._ts_tree_cursor_goto_first_child_for_index_wasm = wasmExports.ts_tree_cursor_goto_first_child_for_index_wasm,
        _ts_tree_cursor_goto_first_child_for_position_wasm = Module._ts_tree_cursor_goto_first_child_for_position_wasm = wasmExports.ts_tree_cursor_goto_first_child_for_position_wasm,
        _ts_tree_cursor_goto_next_sibling_wasm = Module._ts_tree_cursor_goto_next_sibling_wasm = wasmExports.ts_tree_cursor_goto_next_sibling_wasm,
        _ts_tree_cursor_goto_previous_sibling_wasm = Module._ts_tree_cursor_goto_previous_sibling_wasm = wasmExports.ts_tree_cursor_goto_previous_sibling_wasm,
        _ts_tree_cursor_goto_descendant_wasm = Module._ts_tree_cursor_goto_descendant_wasm = wasmExports.ts_tree_cursor_goto_descendant_wasm,
        _ts_tree_cursor_goto_parent_wasm = Module._ts_tree_cursor_goto_parent_wasm = wasmExports.ts_tree_cursor_goto_parent_wasm,
        _ts_tree_cursor_current_node_type_id_wasm = Module._ts_tree_cursor_current_node_type_id_wasm = wasmExports.ts_tree_cursor_current_node_type_id_wasm,
        _ts_tree_cursor_current_node_state_id_wasm = Module._ts_tree_cursor_current_node_state_id_wasm = wasmExports.ts_tree_cursor_current_node_state_id_wasm,
        _ts_tree_cursor_current_node_is_named_wasm = Module._ts_tree_cursor_current_node_is_named_wasm = wasmExports.ts_tree_cursor_current_node_is_named_wasm,
        _ts_tree_cursor_current_node_is_missing_wasm = Module._ts_tree_cursor_current_node_is_missing_wasm = wasmExports.ts_tree_cursor_current_node_is_missing_wasm,
        _ts_tree_cursor_current_node_id_wasm = Module._ts_tree_cursor_current_node_id_wasm = wasmExports.ts_tree_cursor_current_node_id_wasm,
        _ts_tree_cursor_start_position_wasm = Module._ts_tree_cursor_start_position_wasm = wasmExports.ts_tree_cursor_start_position_wasm,
        _ts_tree_cursor_end_position_wasm = Module._ts_tree_cursor_end_position_wasm = wasmExports.ts_tree_cursor_end_position_wasm,
        _ts_tree_cursor_start_index_wasm = Module._ts_tree_cursor_start_index_wasm = wasmExports.ts_tree_cursor_start_index_wasm,
        _ts_tree_cursor_end_index_wasm = Module._ts_tree_cursor_end_index_wasm = wasmExports.ts_tree_cursor_end_index_wasm,
        _ts_tree_cursor_current_field_id_wasm = Module._ts_tree_cursor_current_field_id_wasm = wasmExports.ts_tree_cursor_current_field_id_wasm,
        _ts_tree_cursor_current_depth_wasm = Module._ts_tree_cursor_current_depth_wasm = wasmExports.ts_tree_cursor_current_depth_wasm,
        _ts_tree_cursor_current_descendant_index_wasm = Module._ts_tree_cursor_current_descendant_index_wasm = wasmExports.ts_tree_cursor_current_descendant_index_wasm,
        _ts_tree_cursor_current_node_wasm = Module._ts_tree_cursor_current_node_wasm = wasmExports.ts_tree_cursor_current_node_wasm,
        _ts_node_symbol_wasm = Module._ts_node_symbol_wasm = wasmExports.ts_node_symbol_wasm,
        _ts_node_field_name_for_child_wasm = Module._ts_node_field_name_for_child_wasm = wasmExports.ts_node_field_name_for_child_wasm,
        _ts_node_field_name_for_named_child_wasm = Module._ts_node_field_name_for_named_child_wasm = wasmExports.ts_node_field_name_for_named_child_wasm,
        _ts_node_children_by_field_id_wasm = Module._ts_node_children_by_field_id_wasm = wasmExports.ts_node_children_by_field_id_wasm,
        _ts_node_first_child_for_byte_wasm = Module._ts_node_first_child_for_byte_wasm = wasmExports.ts_node_first_child_for_byte_wasm,
        _ts_node_first_named_child_for_byte_wasm = Module._ts_node_first_named_child_for_byte_wasm = wasmExports.ts_node_first_named_child_for_byte_wasm,
        _ts_node_grammar_symbol_wasm = Module._ts_node_grammar_symbol_wasm = wasmExports.ts_node_grammar_symbol_wasm,
        _ts_node_child_count_wasm = Module._ts_node_child_count_wasm = wasmExports.ts_node_child_count_wasm,
        _ts_node_named_child_count_wasm = Module._ts_node_named_child_count_wasm = wasmExports.ts_node_named_child_count_wasm,
        _ts_node_child_wasm = Module._ts_node_child_wasm = wasmExports.ts_node_child_wasm,
        _ts_node_named_child_wasm = Module._ts_node_named_child_wasm = wasmExports.ts_node_named_child_wasm,
        _ts_node_child_by_field_id_wasm = Module._ts_node_child_by_field_id_wasm = wasmExports.ts_node_child_by_field_id_wasm,
        _ts_node_next_sibling_wasm = Module._ts_node_next_sibling_wasm = wasmExports.ts_node_next_sibling_wasm,
        _ts_node_prev_sibling_wasm = Module._ts_node_prev_sibling_wasm = wasmExports.ts_node_prev_sibling_wasm,
        _ts_node_next_named_sibling_wasm = Module._ts_node_next_named_sibling_wasm = wasmExports.ts_node_next_named_sibling_wasm,
        _ts_node_prev_named_sibling_wasm = Module._ts_node_prev_named_sibling_wasm = wasmExports.ts_node_prev_named_sibling_wasm,
        _ts_node_descendant_count_wasm = Module._ts_node_descendant_count_wasm = wasmExports.ts_node_descendant_count_wasm,
        _ts_node_parent_wasm = Module._ts_node_parent_wasm = wasmExports.ts_node_parent_wasm,
        _ts_node_child_with_descendant_wasm = Module._ts_node_child_with_descendant_wasm = wasmExports.ts_node_child_with_descendant_wasm,
        _ts_node_descendant_for_index_wasm = Module._ts_node_descendant_for_index_wasm = wasmExports.ts_node_descendant_for_index_wasm,
        _ts_node_named_descendant_for_index_wasm = Module._ts_node_named_descendant_for_index_wasm = wasmExports.ts_node_named_descendant_for_index_wasm,
        _ts_node_descendant_for_position_wasm = Module._ts_node_descendant_for_position_wasm = wasmExports.ts_node_descendant_for_position_wasm,
        _ts_node_named_descendant_for_position_wasm = Module._ts_node_named_descendant_for_position_wasm = wasmExports.ts_node_named_descendant_for_position_wasm,
        _ts_node_start_point_wasm = Module._ts_node_start_point_wasm = wasmExports.ts_node_start_point_wasm,
        _ts_node_end_point_wasm = Module._ts_node_end_point_wasm = wasmExports.ts_node_end_point_wasm,
        _ts_node_start_index_wasm = Module._ts_node_start_index_wasm = wasmExports.ts_node_start_index_wasm,
        _ts_node_end_index_wasm = Module._ts_node_end_index_wasm = wasmExports.ts_node_end_index_wasm,
        _ts_node_to_string_wasm = Module._ts_node_to_string_wasm = wasmExports.ts_node_to_string_wasm,
        _ts_node_children_wasm = Module._ts_node_children_wasm = wasmExports.ts_node_children_wasm,
        _ts_node_named_children_wasm = Module._ts_node_named_children_wasm = wasmExports.ts_node_named_children_wasm,
        _ts_node_descendants_of_type_wasm = Module._ts_node_descendants_of_type_wasm = wasmExports.ts_node_descendants_of_type_wasm,
        _ts_node_is_named_wasm = Module._ts_node_is_named_wasm = wasmExports.ts_node_is_named_wasm,
        _ts_node_has_changes_wasm = Module._ts_node_has_changes_wasm = wasmExports.ts_node_has_changes_wasm,
        _ts_node_has_error_wasm = Module._ts_node_has_error_wasm = wasmExports.ts_node_has_error_wasm,
        _ts_node_is_error_wasm = Module._ts_node_is_error_wasm = wasmExports.ts_node_is_error_wasm,
        _ts_node_is_missing_wasm = Module._ts_node_is_missing_wasm = wasmExports.ts_node_is_missing_wasm,
        _ts_node_is_extra_wasm = Module._ts_node_is_extra_wasm = wasmExports.ts_node_is_extra_wasm,
        _ts_node_parse_state_wasm = Module._ts_node_parse_state_wasm = wasmExports.ts_node_parse_state_wasm,
        _ts_node_next_parse_state_wasm = Module._ts_node_next_parse_state_wasm = wasmExports.ts_node_next_parse_state_wasm,
        _ts_query_matches_wasm = Module._ts_query_matches_wasm = wasmExports.ts_query_matches_wasm,
        _ts_query_captures_wasm = Module._ts_query_captures_wasm = wasmExports.ts_query_captures_wasm,
        _memset = Module._memset = wasmExports.memset,
        _memcpy = Module._memcpy = wasmExports.memcpy,
        _memmove = Module._memmove = wasmExports.memmove,
        _iswalpha = Module._iswalpha = wasmExports.iswalpha,
        _iswblank = Module._iswblank = wasmExports.iswblank,
        _iswdigit = Module._iswdigit = wasmExports.iswdigit,
        _iswlower = Module._iswlower = wasmExports.iswlower,
        _iswupper = Module._iswupper = wasmExports.iswupper,
        _iswxdigit = Module._iswxdigit = wasmExports.iswxdigit,
        _memchr = Module._memchr = wasmExports.memchr,
        _strlen = Module._strlen = wasmExports.strlen,
        _strcmp = Module._strcmp = wasmExports.strcmp,
        _strncat = Module._strncat = wasmExports.strncat,
        _strncpy = Module._strncpy = wasmExports.strncpy,
        _towlower = Module._towlower = wasmExports.towlower,
        _towupper = Module._towupper = wasmExports.towupper,
        _setThrew = wasmExports.setThrew,
        __emscripten_stack_restore = wasmExports._emscripten_stack_restore,
        __emscripten_stack_alloc = wasmExports._emscripten_stack_alloc,
        _emscripten_stack_get_current = wasmExports.emscripten_stack_get_current,
        ___wasm_apply_data_relocs = wasmExports.__wasm_apply_data_relocs;
      Module.setValue = setValue, Module.getValue = getValue, Module.UTF8ToString = UTF8ToString, Module.stringToUTF8 = stringToUTF8, Module.lengthBytesUTF8 = lengthBytesUTF8, Module.AsciiToString = AsciiToString, Module.stringToUTF16 = stringToUTF16, Module.loadWebAssemblyModule = loadWebAssemblyModule;
      function callMain(A = []) {
        var K = resolveGlobalSymbol("main").sym;
        if (!K) return;
        A.unshift(thisProgram);
        var q = A.length,
          Y = stackAlloc((q + 1) * 4),
          z = Y;
        A.forEach(H => {
          LE_HEAP_STORE_U32((z >> 2) * 4, stringToUTF8OnStack(H)), z += 4;
        }), LE_HEAP_STORE_U32((z >> 2) * 4, 0);
        try {
          var w = K(q, Y);
          return exitJS(w, !0), w;
        } catch (H) {
          return handleException(H);
        }
      }
      __$.V6(callMain, "callMain");
      function run(A = arguments_) {
        if (runDependencies > 0) {
          dependenciesFulfilled = run;
          return;
        }
        if (preRun(), runDependencies > 0) {
          dependenciesFulfilled = run;
          return;
        }
        function K() {
          if (Module.calledRun = !0, ABORT) return;
          initRuntime(), preMain(), readyPromiseResolve(Module), Module.onRuntimeInitialized?.();
          var q = Module.noInitialRun;
          if (!q) callMain(A);
          postRun();
        }
        if (__$.V6(K, "doRun"), Module.setStatus) Module.setStatus("Running..."), setTimeout(() => {
          setTimeout(() => Module.setStatus(""), 1), K();
        }, 1);else K();
      }
      if (__$.V6(run, "run"), Module.preInit) {
        if (typeof Module.preInit == "function") Module.preInit = [Module.preInit];
        while (Module.preInit.length > 0) Module.preInit.pop()();
      }
      return run(), moduleRtn = readyPromise, moduleRtn;
    };
  })(), __$.mM2 = __$.BM2;
  __$.V6(__$.FKK, "initializeBinding");
  __$.V6(__$.QKK, "checkModule");
  __$.nQA = class {
    static {
      __$.V6(this, "Parser");
    }
    [0] = 0;
    [1] = 0;
    logCallback = null;
    language = null;
    static async init(A) {
      __$.yKK(await __$.FKK(A)), __$.Q7 = __$._1._ts_init(), __$.BI6 = __$._1.getValue(__$.Q7, "i32"), __$.mI6 = __$._1.getValue(__$.Q7 + __$.JK, "i32");
    }
    constructor() {
      this.initialize();
    }
    initialize() {
      if (!__$.QKK()) throw Error("cannot construct a Parser before calling `init()`");
      __$._1._ts_parser_new_wasm(), this[0] = __$._1.getValue(__$.Q7, "i32"), this[1] = __$._1.getValue(__$.Q7 + __$.JK, "i32");
    }
    delete() {
      __$._1._ts_parser_delete(this[0]), __$._1._free(this[1]), this[0] = 0, this[1] = 0;
    }
    setLanguage(A) {
      let K;
      if (!A) K = 0, this.language = null;else if (A.constructor === __$.aP1) {
        K = A[0];
        let q = __$._1._ts_language_version(K);
        if (q < __$.mI6 || __$.BI6 < q) throw Error(`Incompatible language version ${q}. Compatibility range ${__$.mI6} through ${__$.BI6}.`);
        this.language = A;
      } else throw Error("Argument must be a Language");
      return __$._1._ts_parser_set_language(this[0], K), this;
    }
    parse(A, K, q) {
      if (typeof A === "string") __$._1.currentParseCallback = J => A.slice(J);else if (typeof A === "function") __$._1.currentParseCallback = A;else throw Error("Argument must be a string or a function");
      if (q?.progressCallback) __$._1.currentProgressCallback = q.progressCallback;else __$._1.currentProgressCallback = null;
      if (this.logCallback) __$._1.currentLogCallback = this.logCallback, __$._1._ts_parser_enable_logger_wasm(this[0], 1);else __$._1.currentLogCallback = null, __$._1._ts_parser_enable_logger_wasm(this[0], 0);
      let Y = 0,
        z = 0;
      if (q?.includedRanges) {
        Y = q.includedRanges.length, z = __$._1._calloc(Y, __$.iQA);
        let J = z;
        for (let O = 0; O < Y; O++) __$.IKK(J, q.includedRanges[O]), J += __$.iQA;
      }
      let w = __$._1._ts_parser_parse_wasm(this[0], this[1], K ? K[0] : 0, z, Y);
      if (!w) return __$._1.currentParseCallback = null, __$._1.currentLogCallback = null, __$._1.currentProgressCallback = null, null;
      if (!this.language) throw Error("Parser must have a language to parse");
      let H = new __$.RM2(__$.Ft, w, this.language, __$._1.currentParseCallback);
      return __$._1.currentParseCallback = null, __$._1.currentLogCallback = null, __$._1.currentProgressCallback = null, H;
    }
    reset() {
      __$._1._ts_parser_reset(this[0]);
    }
    getIncludedRanges() {
      __$._1._ts_parser_included_ranges_wasm(this[0]);
      let A = __$._1.getValue(__$.Q7, "i32"),
        K = __$._1.getValue(__$.Q7 + __$.JK, "i32"),
        q = Array(A);
      if (A > 0) {
        let Y = K;
        for (let z = 0; z < A; z++) q[z] = __$.oP1(Y), Y += __$.iQA;
        __$._1._free(K);
      }
      return q;
    }
    getTimeoutMicros() {
      return __$._1._ts_parser_timeout_micros(this[0]);
    }
    setTimeoutMicros(A) {
      __$._1._ts_parser_set_timeout_micros(this[0], 0, A);
    }
    setLogger(A) {
      if (!A) this.logCallback = null;else if (typeof A !== "function") throw Error("Logger callback must be a function");else this.logCallback = A;
      return this;
    }
    getLogger() {
      return this.logCallback;
    }
  };
});

// Register to shared state
__$.UKK = UKK;
