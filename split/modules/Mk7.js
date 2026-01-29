// Module: Mk7
// Dependencies: BmA, jE7, PE7, SE7, dE7, DB, uf6, Bf6, mf6, tE7
//   ... and 3 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Mk7 = v((C_H, jk7) => {
  var h1 = __$.BmA(),
    sFY = __$.jE7(),
    eE7 = __$.PE7(),
    tFY = __$.SE7(),
    eFY = __$.dE7(),
    Ak7 = __$.DB(),
    AQY = __$.uf6(),
    KQY = __$.Bf6(),
    Kk7 = __$.mf6(),
    jB = __$.tE7(),
    WW = __$.tG1(),
    qQY = __$.sG1(),
    G5A = __$.Ts(),
    kA = G5A.TAG_NAMES,
    g7 = G5A.NAMESPACES,
    _k7 = G5A.ATTRS,
    YQY = {
      scriptingEnabled: !0,
      sourceCodeLocationInfo: !1,
      onParseError: null,
      treeAdapter: AQY
    },
    zQY = {
      [kA.TR]: "IN_ROW_MODE",
      [kA.TBODY]: "IN_TABLE_BODY_MODE",
      [kA.THEAD]: "IN_TABLE_BODY_MODE",
      [kA.TFOOT]: "IN_TABLE_BODY_MODE",
      [kA.CAPTION]: "IN_CAPTION_MODE",
      [kA.COLGROUP]: "IN_COLUMN_GROUP_MODE",
      [kA.TABLE]: "IN_TABLE_MODE",
      [kA.BODY]: "IN_BODY_MODE",
      [kA.FRAMESET]: "IN_FRAMESET_MODE"
    },
    wQY = {
      [kA.CAPTION]: "IN_TABLE_MODE",
      [kA.COLGROUP]: "IN_TABLE_MODE",
      [kA.TBODY]: "IN_TABLE_MODE",
      [kA.TFOOT]: "IN_TABLE_MODE",
      [kA.THEAD]: "IN_TABLE_MODE",
      [kA.COL]: "IN_COLUMN_GROUP_MODE",
      [kA.TR]: "IN_TABLE_BODY_MODE",
      [kA.TD]: "IN_ROW_MODE",
      [kA.TH]: "IN_ROW_MODE"
    },
    qk7 = {
      ["INITIAL_MODE"]: {
        [h1.CHARACTER_TOKEN]: gmA,
        [h1.NULL_CHARACTER_TOKEN]: gmA,
        [h1.WHITESPACE_CHARACTER_TOKEN]: KY,
        [h1.COMMENT_TOKEN]: D_,
        [h1.DOCTYPE_TOKEN]: ZQY,
        [h1.START_TAG_TOKEN]: gmA,
        [h1.END_TAG_TOKEN]: gmA,
        [h1.EOF_TOKEN]: gmA
      },
      ["BEFORE_HTML_MODE"]: {
        [h1.CHARACTER_TOKEN]: QmA,
        [h1.NULL_CHARACTER_TOKEN]: QmA,
        [h1.WHITESPACE_CHARACTER_TOKEN]: KY,
        [h1.COMMENT_TOKEN]: D_,
        [h1.DOCTYPE_TOKEN]: KY,
        [h1.START_TAG_TOKEN]: WQY,
        [h1.END_TAG_TOKEN]: DQY,
        [h1.EOF_TOKEN]: QmA
      },
      ["BEFORE_HEAD_MODE"]: {
        [h1.CHARACTER_TOKEN]: UmA,
        [h1.NULL_CHARACTER_TOKEN]: UmA,
        [h1.WHITESPACE_CHARACTER_TOKEN]: KY,
        [h1.COMMENT_TOKEN]: D_,
        [h1.DOCTYPE_TOKEN]: YZ1,
        [h1.START_TAG_TOKEN]: jQY,
        [h1.END_TAG_TOKEN]: MQY,
        [h1.EOF_TOKEN]: UmA
      },
      ["IN_HEAD_MODE"]: {
        [h1.CHARACTER_TOKEN]: pmA,
        [h1.NULL_CHARACTER_TOKEN]: pmA,
        [h1.WHITESPACE_CHARACTER_TOKEN]: Lf,
        [h1.COMMENT_TOKEN]: D_,
        [h1.DOCTYPE_TOKEN]: YZ1,
        [h1.START_TAG_TOKEN]: BG,
        [h1.END_TAG_TOKEN]: Z5A,
        [h1.EOF_TOKEN]: pmA
      },
      ["IN_HEAD_NO_SCRIPT_MODE"]: {
        [h1.CHARACTER_TOKEN]: dmA,
        [h1.NULL_CHARACTER_TOKEN]: dmA,
        [h1.WHITESPACE_CHARACTER_TOKEN]: Lf,
        [h1.COMMENT_TOKEN]: D_,
        [h1.DOCTYPE_TOKEN]: YZ1,
        [h1.START_TAG_TOKEN]: PQY,
        [h1.END_TAG_TOKEN]: VQY,
        [h1.EOF_TOKEN]: dmA
      },
      ["AFTER_HEAD_MODE"]: {
        [h1.CHARACTER_TOKEN]: cmA,
        [h1.NULL_CHARACTER_TOKEN]: cmA,
        [h1.WHITESPACE_CHARACTER_TOKEN]: Lf,
        [h1.COMMENT_TOKEN]: D_,
        [h1.DOCTYPE_TOKEN]: YZ1,
        [h1.START_TAG_TOKEN]: fQY,
        [h1.END_TAG_TOKEN]: NQY,
        [h1.EOF_TOKEN]: cmA
      },
      ["IN_BODY_MODE"]: {
        [h1.CHARACTER_TOKEN]: zZ1,
        [h1.NULL_CHARACTER_TOKEN]: KY,
        [h1.WHITESPACE_CHARACTER_TOKEN]: _5A,
        [h1.COMMENT_TOKEN]: D_,
        [h1.DOCTYPE_TOKEN]: KY,
        [h1.START_TAG_TOKEN]: Rf,
        [h1.END_TAG_TOKEN]: Qf6,
        [h1.EOF_TOKEN]: Fp
      },
      ["TEXT_MODE"]: {
        [h1.CHARACTER_TOKEN]: Lf,
        [h1.NULL_CHARACTER_TOKEN]: Lf,
        [h1.WHITESPACE_CHARACTER_TOKEN]: Lf,
        [h1.COMMENT_TOKEN]: KY,
        [h1.DOCTYPE_TOKEN]: KY,
        [h1.START_TAG_TOKEN]: KY,
        [h1.END_TAG_TOKEN]: tQY,
        [h1.EOF_TOKEN]: eQY
      },
      ["IN_TABLE_MODE"]: {
        [h1.CHARACTER_TOKEN]: Qp,
        [h1.NULL_CHARACTER_TOKEN]: Qp,
        [h1.WHITESPACE_CHARACTER_TOKEN]: Qp,
        [h1.COMMENT_TOKEN]: D_,
        [h1.DOCTYPE_TOKEN]: KY,
        [h1.START_TAG_TOKEN]: Uf6,
        [h1.END_TAG_TOKEN]: pf6,
        [h1.EOF_TOKEN]: Fp
      },
      ["IN_TABLE_TEXT_MODE"]: {
        [h1.CHARACTER_TOKEN]: XUY,
        [h1.NULL_CHARACTER_TOKEN]: KY,
        [h1.WHITESPACE_CHARACTER_TOKEN]: OUY,
        [h1.COMMENT_TOKEN]: FmA,
        [h1.DOCTYPE_TOKEN]: FmA,
        [h1.START_TAG_TOKEN]: FmA,
        [h1.END_TAG_TOKEN]: FmA,
        [h1.EOF_TOKEN]: FmA
      },
      ["IN_CAPTION_MODE"]: {
        [h1.CHARACTER_TOKEN]: zZ1,
        [h1.NULL_CHARACTER_TOKEN]: KY,
        [h1.WHITESPACE_CHARACTER_TOKEN]: _5A,
        [h1.COMMENT_TOKEN]: D_,
        [h1.DOCTYPE_TOKEN]: KY,
        [h1.START_TAG_TOKEN]: $UY,
        [h1.END_TAG_TOKEN]: _UY,
        [h1.EOF_TOKEN]: Fp
      },
      ["IN_COLUMN_GROUP_MODE"]: {
        [h1.CHARACTER_TOKEN]: HZ1,
        [h1.NULL_CHARACTER_TOKEN]: HZ1,
        [h1.WHITESPACE_CHARACTER_TOKEN]: Lf,
        [h1.COMMENT_TOKEN]: D_,
        [h1.DOCTYPE_TOKEN]: KY,
        [h1.START_TAG_TOKEN]: GUY,
        [h1.END_TAG_TOKEN]: ZUY,
        [h1.EOF_TOKEN]: Fp
      },
      ["IN_TABLE_BODY_MODE"]: {
        [h1.CHARACTER_TOKEN]: Qp,
        [h1.NULL_CHARACTER_TOKEN]: Qp,
        [h1.WHITESPACE_CHARACTER_TOKEN]: Qp,
        [h1.COMMENT_TOKEN]: D_,
        [h1.DOCTYPE_TOKEN]: KY,
        [h1.START_TAG_TOKEN]: WUY,
        [h1.END_TAG_TOKEN]: DUY,
        [h1.EOF_TOKEN]: Fp
      },
      ["IN_ROW_MODE"]: {
        [h1.CHARACTER_TOKEN]: Qp,
        [h1.NULL_CHARACTER_TOKEN]: Qp,
        [h1.WHITESPACE_CHARACTER_TOKEN]: Qp,
        [h1.COMMENT_TOKEN]: D_,
        [h1.DOCTYPE_TOKEN]: KY,
        [h1.START_TAG_TOKEN]: jUY,
        [h1.END_TAG_TOKEN]: MUY,
        [h1.EOF_TOKEN]: Fp
      },
      ["IN_CELL_MODE"]: {
        [h1.CHARACTER_TOKEN]: zZ1,
        [h1.NULL_CHARACTER_TOKEN]: KY,
        [h1.WHITESPACE_CHARACTER_TOKEN]: _5A,
        [h1.COMMENT_TOKEN]: D_,
        [h1.DOCTYPE_TOKEN]: KY,
        [h1.START_TAG_TOKEN]: PUY,
        [h1.END_TAG_TOKEN]: VUY,
        [h1.EOF_TOKEN]: Fp
      },
      ["IN_SELECT_MODE"]: {
        [h1.CHARACTER_TOKEN]: Lf,
        [h1.NULL_CHARACTER_TOKEN]: KY,
        [h1.WHITESPACE_CHARACTER_TOKEN]: Lf,
        [h1.COMMENT_TOKEN]: D_,
        [h1.DOCTYPE_TOKEN]: KY,
        [h1.START_TAG_TOKEN]: Zk7,
        [h1.END_TAG_TOKEN]: Wk7,
        [h1.EOF_TOKEN]: Fp
      },
      ["IN_SELECT_IN_TABLE_MODE"]: {
        [h1.CHARACTER_TOKEN]: Lf,
        [h1.NULL_CHARACTER_TOKEN]: KY,
        [h1.WHITESPACE_CHARACTER_TOKEN]: Lf,
        [h1.COMMENT_TOKEN]: D_,
        [h1.DOCTYPE_TOKEN]: KY,
        [h1.START_TAG_TOKEN]: fUY,
        [h1.END_TAG_TOKEN]: NUY,
        [h1.EOF_TOKEN]: Fp
      },
      ["IN_TEMPLATE_MODE"]: {
        [h1.CHARACTER_TOKEN]: zZ1,
        [h1.NULL_CHARACTER_TOKEN]: KY,
        [h1.WHITESPACE_CHARACTER_TOKEN]: _5A,
        [h1.COMMENT_TOKEN]: D_,
        [h1.DOCTYPE_TOKEN]: KY,
        [h1.START_TAG_TOKEN]: TUY,
        [h1.END_TAG_TOKEN]: vUY,
        [h1.EOF_TOKEN]: Dk7
      },
      ["AFTER_BODY_MODE"]: {
        [h1.CHARACTER_TOKEN]: JZ1,
        [h1.NULL_CHARACTER_TOKEN]: JZ1,
        [h1.WHITESPACE_CHARACTER_TOKEN]: _5A,
        [h1.COMMENT_TOKEN]: GQY,
        [h1.DOCTYPE_TOKEN]: KY,
        [h1.START_TAG_TOKEN]: EUY,
        [h1.END_TAG_TOKEN]: kUY,
        [h1.EOF_TOKEN]: mmA
      },
      ["IN_FRAMESET_MODE"]: {
        [h1.CHARACTER_TOKEN]: KY,
        [h1.NULL_CHARACTER_TOKEN]: KY,
        [h1.WHITESPACE_CHARACTER_TOKEN]: Lf,
        [h1.COMMENT_TOKEN]: D_,
        [h1.DOCTYPE_TOKEN]: KY,
        [h1.START_TAG_TOKEN]: CUY,
        [h1.END_TAG_TOKEN]: LUY,
        [h1.EOF_TOKEN]: mmA
      },
      ["AFTER_FRAMESET_MODE"]: {
        [h1.CHARACTER_TOKEN]: KY,
        [h1.NULL_CHARACTER_TOKEN]: KY,
        [h1.WHITESPACE_CHARACTER_TOKEN]: Lf,
        [h1.COMMENT_TOKEN]: D_,
        [h1.DOCTYPE_TOKEN]: KY,
        [h1.START_TAG_TOKEN]: RUY,
        [h1.END_TAG_TOKEN]: yUY,
        [h1.EOF_TOKEN]: mmA
      },
      ["AFTER_AFTER_BODY_MODE"]: {
        [h1.CHARACTER_TOKEN]: wZ1,
        [h1.NULL_CHARACTER_TOKEN]: wZ1,
        [h1.WHITESPACE_CHARACTER_TOKEN]: _5A,
        [h1.COMMENT_TOKEN]: Yk7,
        [h1.DOCTYPE_TOKEN]: KY,
        [h1.START_TAG_TOKEN]: IUY,
        [h1.END_TAG_TOKEN]: wZ1,
        [h1.EOF_TOKEN]: mmA
      },
      ["AFTER_AFTER_FRAMESET_MODE"]: {
        [h1.CHARACTER_TOKEN]: KY,
        [h1.NULL_CHARACTER_TOKEN]: KY,
        [h1.WHITESPACE_CHARACTER_TOKEN]: _5A,
        [h1.COMMENT_TOKEN]: Yk7,
        [h1.DOCTYPE_TOKEN]: KY,
        [h1.START_TAG_TOKEN]: SUY,
        [h1.END_TAG_TOKEN]: KY,
        [h1.EOF_TOKEN]: mmA
      }
    };
  class Gk7 {
    constructor(A) {
      if (this.options = KQY(YQY, A), this.treeAdapter = this.options.treeAdapter, this.pendingScript = null, this.options.sourceCodeLocationInfo) Ak7.install(this, tFY);
      if (this.options.onParseError) Ak7.install(this, eFY, {
        onParseError: this.options.onParseError
      });
    }
    parse(A) {
      let K = this.treeAdapter.createDocument();
      return this._bootstrap(K, null), this.tokenizer.write(A, !0), this._runParsingLoop(null), K;
    }
    parseFragment(A, K) {
      if (!K) K = this.treeAdapter.createElement(kA.TEMPLATE, g7.HTML, []);
      let q = this.treeAdapter.createElement("documentmock", g7.HTML, []);
      if (this._bootstrap(q, K), this.treeAdapter.getTagName(K) === kA.TEMPLATE) this._pushTmplInsertionMode("IN_TEMPLATE_MODE");
      this._initTokenizerForFragmentParsing(), this._insertFakeRootElement(), this._resetInsertionMode(), this._findFormInFragmentContext(), this.tokenizer.write(A, !0), this._runParsingLoop(null);
      let Y = this.treeAdapter.getFirstChild(q),
        z = this.treeAdapter.createDocumentFragment();
      return this._adoptNodes(Y, z), z;
    }
    _bootstrap(A, K) {
      this.tokenizer = new h1(this.options), this.stopped = !1, this.insertionMode = "INITIAL_MODE", this.originalInsertionMode = "", this.document = A, this.fragmentContext = K, this.headElement = null, this.formElement = null, this.openElements = new sFY(this.document, this.treeAdapter), this.activeFormattingElements = new eE7(this.treeAdapter), this.tmplInsertionModeStack = [], this.tmplInsertionModeStackTop = -1, this.currentTmplInsertionMode = null, this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1;
    }
    _err() {}
    _runParsingLoop(A) {
      while (!this.stopped) {
        this._setupTokenizerCDATAMode();
        let K = this.tokenizer.getNextToken();
        if (K.type === h1.HIBERNATION_TOKEN) break;
        if (this.skipNextNewLine) {
          if (this.skipNextNewLine = !1, K.type === h1.WHITESPACE_CHARACTER_TOKEN && K.chars[0] === `
`) {
            if (K.chars.length === 1) continue;
            K.chars = K.chars.substr(1);
          }
        }
        if (this._processInputToken(K), A && this.pendingScript) break;
      }
    }
    runParsingLoopForCurrentChunk(A, K) {
      if (this._runParsingLoop(K), K && this.pendingScript) {
        let q = this.pendingScript;
        this.pendingScript = null, K(q);
        return;
      }
      if (A) A();
    }
    _setupTokenizerCDATAMode() {
      let A = this._getAdjustedCurrentElement();
      this.tokenizer.allowCDATA = A && A !== this.document && this.treeAdapter.getNamespaceURI(A) !== g7.HTML && !this._isIntegrationPoint(A);
    }
    _switchToTextParsing(A, K) {
      this._insertElement(A, g7.HTML), this.tokenizer.state = K, this.originalInsertionMode = this.insertionMode, this.insertionMode = "TEXT_MODE";
    }
    switchToPlaintextParsing() {
      this.insertionMode = "TEXT_MODE", this.originalInsertionMode = "IN_BODY_MODE", this.tokenizer.state = h1.MODE.PLAINTEXT;
    }
    _getAdjustedCurrentElement() {
      return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
    }
    _findFormInFragmentContext() {
      let A = this.fragmentContext;
      do {
        if (this.treeAdapter.getTagName(A) === kA.FORM) {
          this.formElement = A;
          break;
        }
        A = this.treeAdapter.getParentNode(A);
      } while (A);
    }
    _initTokenizerForFragmentParsing() {
      if (this.treeAdapter.getNamespaceURI(this.fragmentContext) === g7.HTML) {
        let A = this.treeAdapter.getTagName(this.fragmentContext);
        if (A === kA.TITLE || A === kA.TEXTAREA) this.tokenizer.state = h1.MODE.RCDATA;else if (A === kA.STYLE || A === kA.XMP || A === kA.IFRAME || A === kA.NOEMBED || A === kA.NOFRAMES || A === kA.NOSCRIPT) this.tokenizer.state = h1.MODE.RAWTEXT;else if (A === kA.SCRIPT) this.tokenizer.state = h1.MODE.SCRIPT_DATA;else if (A === kA.PLAINTEXT) this.tokenizer.state = h1.MODE.PLAINTEXT;
      }
    }
    _setDocumentType(A) {
      let K = A.name || "",
        q = A.publicId || "",
        Y = A.systemId || "";
      this.treeAdapter.setDocumentType(this.document, K, q, Y);
    }
    _attachElementToTree(A) {
      if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(A);else {
        let K = this.openElements.currentTmplContent || this.openElements.current;
        this.treeAdapter.appendChild(K, A);
      }
    }
    _appendElement(A, K) {
      let q = this.treeAdapter.createElement(A.tagName, K, A.attrs);
      this._attachElementToTree(q);
    }
    _insertElement(A, K) {
      let q = this.treeAdapter.createElement(A.tagName, K, A.attrs);
      this._attachElementToTree(q), this.openElements.push(q);
    }
    _insertFakeElement(A) {
      let K = this.treeAdapter.createElement(A, g7.HTML, []);
      this._attachElementToTree(K), this.openElements.push(K);
    }
    _insertTemplate(A) {
      let K = this.treeAdapter.createElement(A.tagName, g7.HTML, A.attrs),
        q = this.treeAdapter.createDocumentFragment();
      this.treeAdapter.setTemplateContent(K, q), this._attachElementToTree(K), this.openElements.push(K);
    }
    _insertFakeRootElement() {
      let A = this.treeAdapter.createElement(kA.HTML, g7.HTML, []);
      this.treeAdapter.appendChild(this.openElements.current, A), this.openElements.push(A);
    }
    _appendCommentNode(A, K) {
      let q = this.treeAdapter.createCommentNode(A.data);
      this.treeAdapter.appendChild(K, q);
    }
    _insertCharacters(A) {
      if (this._shouldFosterParentOnInsertion()) this._fosterParentText(A.chars);else {
        let K = this.openElements.currentTmplContent || this.openElements.current;
        this.treeAdapter.insertText(K, A.chars);
      }
    }
    _adoptNodes(A, K) {
      for (let q = this.treeAdapter.getFirstChild(A); q; q = this.treeAdapter.getFirstChild(A)) this.treeAdapter.detachNode(q), this.treeAdapter.appendChild(K, q);
    }
    _shouldProcessTokenInForeignContent(A) {
      let K = this._getAdjustedCurrentElement();
      if (!K || K === this.document) return !1;
      let q = this.treeAdapter.getNamespaceURI(K);
      if (q === g7.HTML) return !1;
      if (this.treeAdapter.getTagName(K) === kA.ANNOTATION_XML && q === g7.MATHML && A.type === h1.START_TAG_TOKEN && A.tagName === kA.SVG) return !1;
      let Y = A.type === h1.CHARACTER_TOKEN || A.type === h1.NULL_CHARACTER_TOKEN || A.type === h1.WHITESPACE_CHARACTER_TOKEN;
      if ((A.type === h1.START_TAG_TOKEN && A.tagName !== kA.MGLYPH && A.tagName !== kA.MALIGNMARK || Y) && this._isIntegrationPoint(K, g7.MATHML)) return !1;
      if ((A.type === h1.START_TAG_TOKEN || Y) && this._isIntegrationPoint(K, g7.HTML)) return !1;
      return A.type !== h1.EOF_TOKEN;
    }
    _processToken(A) {
      qk7[this.insertionMode][A.type](this, A);
    }
    _processTokenInBodyMode(A) {
      qk7.IN_BODY_MODE[A.type](this, A);
    }
    _processTokenInForeignContent(A) {
      if (A.type === h1.CHARACTER_TOKEN) bUY(this, A);else if (A.type === h1.NULL_CHARACTER_TOKEN) hUY(this, A);else if (A.type === h1.WHITESPACE_CHARACTER_TOKEN) Lf(this, A);else if (A.type === h1.COMMENT_TOKEN) D_(this, A);else if (A.type === h1.START_TAG_TOKEN) xUY(this, A);else if (A.type === h1.END_TAG_TOKEN) uUY(this, A);
    }
    _processInputToken(A) {
      if (this._shouldProcessTokenInForeignContent(A)) this._processTokenInForeignContent(A);else this._processToken(A);
      if (A.type === h1.START_TAG_TOKEN && A.selfClosing && !A.ackSelfClosing) this._err(WW.nonVoidHtmlElementStartTagWithTrailingSolidus);
    }
    _isIntegrationPoint(A, K) {
      let q = this.treeAdapter.getTagName(A),
        Y = this.treeAdapter.getNamespaceURI(A),
        z = this.treeAdapter.getAttrList(A);
      return jB.isIntegrationPoint(q, Y, z, K);
    }
    _reconstructActiveFormattingElements() {
      let A = this.activeFormattingElements.length;
      if (A) {
        let K = A,
          q = null;
        do if (K--, q = this.activeFormattingElements.entries[K], q.type === eE7.MARKER_ENTRY || this.openElements.contains(q.element)) {
          K++;
          break;
        } while (K > 0);
        for (let Y = K; Y < A; Y++) q = this.activeFormattingElements.entries[Y], this._insertElement(q.token, this.treeAdapter.getNamespaceURI(q.element)), q.element = this.openElements.current;
      }
    }
    _closeTableCell() {
      this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = "IN_ROW_MODE";
    }
    _closePElement() {
      this.openElements.generateImpliedEndTagsWithExclusion(kA.P), this.openElements.popUntilTagNamePopped(kA.P);
    }
    _resetInsertionMode() {
      for (let A = this.openElements.stackTop, K = !1; A >= 0; A--) {
        let q = this.openElements.items[A];
        if (A === 0) {
          if (K = !0, this.fragmentContext) q = this.fragmentContext;
        }
        let Y = this.treeAdapter.getTagName(q),
          z = zQY[Y];
        if (z) {
          this.insertionMode = z;
          break;
        } else if (!K && (Y === kA.TD || Y === kA.TH)) {
          this.insertionMode = "IN_CELL_MODE";
          break;
        } else if (!K && Y === kA.HEAD) {
          this.insertionMode = "IN_HEAD_MODE";
          break;
        } else if (Y === kA.SELECT) {
          this._resetInsertionModeForSelect(A);
          break;
        } else if (Y === kA.TEMPLATE) {
          this.insertionMode = this.currentTmplInsertionMode;
          break;
        } else if (Y === kA.HTML) {
          this.insertionMode = this.headElement ? "AFTER_HEAD_MODE" : "BEFORE_HEAD_MODE";
          break;
        } else if (K) {
          this.insertionMode = "IN_BODY_MODE";
          break;
        }
      }
    }
    _resetInsertionModeForSelect(A) {
      if (A > 0) for (let K = A - 1; K > 0; K--) {
        let q = this.openElements.items[K],
          Y = this.treeAdapter.getTagName(q);
        if (Y === kA.TEMPLATE) break;else if (Y === kA.TABLE) {
          this.insertionMode = "IN_SELECT_IN_TABLE_MODE";
          return;
        }
      }
      this.insertionMode = "IN_SELECT_MODE";
    }
    _pushTmplInsertionMode(A) {
      this.tmplInsertionModeStack.push(A), this.tmplInsertionModeStackTop++, this.currentTmplInsertionMode = A;
    }
    _popTmplInsertionMode() {
      this.tmplInsertionModeStack.pop(), this.tmplInsertionModeStackTop--, this.currentTmplInsertionMode = this.tmplInsertionModeStack[this.tmplInsertionModeStackTop];
    }
    _isElementCausesFosterParenting(A) {
      let K = this.treeAdapter.getTagName(A);
      return K === kA.TABLE || K === kA.TBODY || K === kA.TFOOT || K === kA.THEAD || K === kA.TR;
    }
    _shouldFosterParentOnInsertion() {
      return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.current);
    }
    _findFosterParentingLocation() {
      let A = {
        parent: null,
        beforeElement: null
      };
      for (let K = this.openElements.stackTop; K >= 0; K--) {
        let q = this.openElements.items[K],
          Y = this.treeAdapter.getTagName(q),
          z = this.treeAdapter.getNamespaceURI(q);
        if (Y === kA.TEMPLATE && z === g7.HTML) {
          A.parent = this.treeAdapter.getTemplateContent(q);
          break;
        } else if (Y === kA.TABLE) {
          if (A.parent = this.treeAdapter.getParentNode(q), A.parent) A.beforeElement = q;else A.parent = this.openElements.items[K - 1];
          break;
        }
      }
      if (!A.parent) A.parent = this.openElements.items[0];
      return A;
    }
    _fosterParentElement(A) {
      let K = this._findFosterParentingLocation();
      if (K.beforeElement) this.treeAdapter.insertBefore(K.parent, A, K.beforeElement);else this.treeAdapter.appendChild(K.parent, A);
    }
    _fosterParentText(A) {
      let K = this._findFosterParentingLocation();
      if (K.beforeElement) this.treeAdapter.insertTextBefore(K.parent, A, K.beforeElement);else this.treeAdapter.insertText(K.parent, A);
    }
    _isSpecialElement(A) {
      let K = this.treeAdapter.getTagName(A),
        q = this.treeAdapter.getNamespaceURI(A);
      return G5A.SPECIAL_ELEMENTS[q][K];
    }
  }
  jk7.exports = Gk7;
  function HQY(A, K) {
    let q = A.activeFormattingElements.getElementEntryInScopeWithTagName(K.tagName);
    if (q) {
      if (!A.openElements.contains(q.element)) A.activeFormattingElements.removeEntry(q), q = null;else if (!A.openElements.hasInScope(K.tagName)) q = null;
    } else qS(A, K);
    return q;
  }
  function JQY(A, K) {
    let q = null;
    for (let Y = A.openElements.stackTop; Y >= 0; Y--) {
      let z = A.openElements.items[Y];
      if (z === K.element) break;
      if (A._isSpecialElement(z)) q = z;
    }
    if (!q) A.openElements.popUntilElementPopped(K.element), A.activeFormattingElements.removeEntry(K);
    return q;
  }
  function OQY(A, K, q) {
    let Y = K,
      z = A.openElements.getCommonAncestor(K);
    for (let w = 0, H = z; H !== q; w++, H = z) {
      z = A.openElements.getCommonAncestor(H);
      let J = A.activeFormattingElements.getElementEntry(H),
        O = J && w >= 3;
      if (!J || O) {
        if (O) A.activeFormattingElements.removeEntry(J);
        A.openElements.remove(H);
      } else {
        if (H = XQY(A, J), Y === K) A.activeFormattingElements.bookmark = J;
        A.treeAdapter.detachNode(Y), A.treeAdapter.appendChild(H, Y), Y = H;
      }
    }
    return Y;
  }
  function XQY(A, K) {
    let q = A.treeAdapter.getNamespaceURI(K.element),
      Y = A.treeAdapter.createElement(K.token.tagName, q, K.token.attrs);
    return A.openElements.replace(K.element, Y), K.element = Y, Y;
  }
  function $QY(A, K, q) {
    if (A._isElementCausesFosterParenting(K)) A._fosterParentElement(q);else {
      let Y = A.treeAdapter.getTagName(K),
        z = A.treeAdapter.getNamespaceURI(K);
      if (Y === kA.TEMPLATE && z === g7.HTML) K = A.treeAdapter.getTemplateContent(K);
      A.treeAdapter.appendChild(K, q);
    }
  }
  function _QY(A, K, q) {
    let Y = A.treeAdapter.getNamespaceURI(q.element),
      z = q.token,
      w = A.treeAdapter.createElement(z.tagName, Y, z.attrs);
    A._adoptNodes(K, w), A.treeAdapter.appendChild(K, w), A.activeFormattingElements.insertElementAfterBookmark(w, q.token), A.activeFormattingElements.removeEntry(q), A.openElements.remove(q.element), A.openElements.insertAfter(K, w);
  }
  function Es(A, K) {
    let q;
    for (let Y = 0; Y < 8; Y++) {
      if (q = HQY(A, K, q), !q) break;
      let z = JQY(A, q);
      if (!z) break;
      A.activeFormattingElements.bookmark = q;
      let w = OQY(A, z, q.element),
        H = A.openElements.getCommonAncestor(q.element);
      A.treeAdapter.detachNode(w), $QY(A, H, w), _QY(A, z, q);
    }
  }
  function KY() {}
  function YZ1(A) {
    A._err(WW.misplacedDoctype);
  }
  function D_(A, K) {
    A._appendCommentNode(K, A.openElements.currentTmplContent || A.openElements.current);
  }
  function GQY(A, K) {
    A._appendCommentNode(K, A.openElements.items[0]);
  }
  function Yk7(A, K) {
    A._appendCommentNode(K, A.document);
  }
  function Lf(A, K) {
    A._insertCharacters(K);
  }
  function mmA(A) {
    A.stopped = !0;
  }
  function ZQY(A, K) {
    A._setDocumentType(K);
    let q = K.forceQuirks ? G5A.DOCUMENT_MODE.QUIRKS : Kk7.getDocumentMode(K);
    if (!Kk7.isConforming(K)) A._err(WW.nonConformingDoctype);
    A.treeAdapter.setDocumentMode(A.document, q), A.insertionMode = "BEFORE_HTML_MODE";
  }
  function gmA(A, K) {
    A._err(WW.missingDoctype, {
      beforeToken: !0
    }), A.treeAdapter.setDocumentMode(A.document, G5A.DOCUMENT_MODE.QUIRKS), A.insertionMode = "BEFORE_HTML_MODE", A._processToken(K);
  }
  function WQY(A, K) {
    if (K.tagName === kA.HTML) A._insertElement(K, g7.HTML), A.insertionMode = "BEFORE_HEAD_MODE";else QmA(A, K);
  }
  function DQY(A, K) {
    let q = K.tagName;
    if (q === kA.HTML || q === kA.HEAD || q === kA.BODY || q === kA.BR) QmA(A, K);
  }
  function QmA(A, K) {
    A._insertFakeRootElement(), A.insertionMode = "BEFORE_HEAD_MODE", A._processToken(K);
  }
  function jQY(A, K) {
    let q = K.tagName;
    if (q === kA.HTML) Rf(A, K);else if (q === kA.HEAD) A._insertElement(K, g7.HTML), A.headElement = A.openElements.current, A.insertionMode = "IN_HEAD_MODE";else UmA(A, K);
  }
  function MQY(A, K) {
    let q = K.tagName;
    if (q === kA.HEAD || q === kA.BODY || q === kA.HTML || q === kA.BR) UmA(A, K);else A._err(WW.endTagWithoutMatchingOpenElement);
  }
  function UmA(A, K) {
    A._insertFakeElement(kA.HEAD), A.headElement = A.openElements.current, A.insertionMode = "IN_HEAD_MODE", A._processToken(K);
  }
  function BG(A, K) {
    let q = K.tagName;
    if (q === kA.HTML) Rf(A, K);else if (q === kA.BASE || q === kA.BASEFONT || q === kA.BGSOUND || q === kA.LINK || q === kA.META) A._appendElement(K, g7.HTML), K.ackSelfClosing = !0;else if (q === kA.TITLE) A._switchToTextParsing(K, h1.MODE.RCDATA);else if (q === kA.NOSCRIPT) {
      if (A.options.scriptingEnabled) A._switchToTextParsing(K, h1.MODE.RAWTEXT);else A._insertElement(K, g7.HTML), A.insertionMode = "IN_HEAD_NO_SCRIPT_MODE";
    } else if (q === kA.NOFRAMES || q === kA.STYLE) A._switchToTextParsing(K, h1.MODE.RAWTEXT);else if (q === kA.SCRIPT) A._switchToTextParsing(K, h1.MODE.SCRIPT_DATA);else if (q === kA.TEMPLATE) A._insertTemplate(K, g7.HTML), A.activeFormattingElements.insertMarker(), A.framesetOk = !1, A.insertionMode = "IN_TEMPLATE_MODE", A._pushTmplInsertionMode("IN_TEMPLATE_MODE");else if (q === kA.HEAD) A._err(WW.misplacedStartTagForHeadElement);else pmA(A, K);
  }
  function Z5A(A, K) {
    let q = K.tagName;
    if (q === kA.HEAD) A.openElements.pop(), A.insertionMode = "AFTER_HEAD_MODE";else if (q === kA.BODY || q === kA.BR || q === kA.HTML) pmA(A, K);else if (q === kA.TEMPLATE) {
      if (A.openElements.tmplCount > 0) {
        if (A.openElements.generateImpliedEndTagsThoroughly(), A.openElements.currentTagName !== kA.TEMPLATE) A._err(WW.closingOfElementWithOpenChildElements);
        A.openElements.popUntilTagNamePopped(kA.TEMPLATE), A.activeFormattingElements.clearToLastMarker(), A._popTmplInsertionMode(), A._resetInsertionMode();
      } else A._err(WW.endTagWithoutMatchingOpenElement);
    } else A._err(WW.endTagWithoutMatchingOpenElement);
  }
  function pmA(A, K) {
    A.openElements.pop(), A.insertionMode = "AFTER_HEAD_MODE", A._processToken(K);
  }
  function PQY(A, K) {
    let q = K.tagName;
    if (q === kA.HTML) Rf(A, K);else if (q === kA.BASEFONT || q === kA.BGSOUND || q === kA.HEAD || q === kA.LINK || q === kA.META || q === kA.NOFRAMES || q === kA.STYLE) BG(A, K);else if (q === kA.NOSCRIPT) A._err(WW.nestedNoscriptInHead);else dmA(A, K);
  }
  function VQY(A, K) {
    let q = K.tagName;
    if (q === kA.NOSCRIPT) A.openElements.pop(), A.insertionMode = "IN_HEAD_MODE";else if (q === kA.BR) dmA(A, K);else A._err(WW.endTagWithoutMatchingOpenElement);
  }
  function dmA(A, K) {
    let q = K.type === h1.EOF_TOKEN ? WW.openElementsLeftAfterEof : WW.disallowedContentInNoscriptInHead;
    A._err(q), A.openElements.pop(), A.insertionMode = "IN_HEAD_MODE", A._processToken(K);
  }
  function fQY(A, K) {
    let q = K.tagName;
    if (q === kA.HTML) Rf(A, K);else if (q === kA.BODY) A._insertElement(K, g7.HTML), A.framesetOk = !1, A.insertionMode = "IN_BODY_MODE";else if (q === kA.FRAMESET) A._insertElement(K, g7.HTML), A.insertionMode = "IN_FRAMESET_MODE";else if (q === kA.BASE || q === kA.BASEFONT || q === kA.BGSOUND || q === kA.LINK || q === kA.META || q === kA.NOFRAMES || q === kA.SCRIPT || q === kA.STYLE || q === kA.TEMPLATE || q === kA.TITLE) A._err(WW.abandonedHeadElementChild), A.openElements.push(A.headElement), BG(A, K), A.openElements.remove(A.headElement);else if (q === kA.HEAD) A._err(WW.misplacedStartTagForHeadElement);else cmA(A, K);
  }
  function NQY(A, K) {
    let q = K.tagName;
    if (q === kA.BODY || q === kA.HTML || q === kA.BR) cmA(A, K);else if (q === kA.TEMPLATE) Z5A(A, K);else A._err(WW.endTagWithoutMatchingOpenElement);
  }
  function cmA(A, K) {
    A._insertFakeElement(kA.BODY), A.insertionMode = "IN_BODY_MODE", A._processToken(K);
  }
  function _5A(A, K) {
    A._reconstructActiveFormattingElements(), A._insertCharacters(K);
  }
  function zZ1(A, K) {
    A._reconstructActiveFormattingElements(), A._insertCharacters(K), A.framesetOk = !1;
  }
  function TQY(A, K) {
    if (A.openElements.tmplCount === 0) A.treeAdapter.adoptAttributes(A.openElements.items[0], K.attrs);
  }
  function vQY(A, K) {
    let q = A.openElements.tryPeekProperlyNestedBodyElement();
    if (q && A.openElements.tmplCount === 0) A.framesetOk = !1, A.treeAdapter.adoptAttributes(q, K.attrs);
  }
  function EQY(A, K) {
    let q = A.openElements.tryPeekProperlyNestedBodyElement();
    if (A.framesetOk && q) A.treeAdapter.detachNode(q), A.openElements.popAllUpToHtmlElement(), A._insertElement(K, g7.HTML), A.insertionMode = "IN_FRAMESET_MODE";
  }
  function gp(A, K) {
    if (A.openElements.hasInButtonScope(kA.P)) A._closePElement();
    A._insertElement(K, g7.HTML);
  }
  function kQY(A, K) {
    if (A.openElements.hasInButtonScope(kA.P)) A._closePElement();
    let q = A.openElements.currentTagName;
    if (q === kA.H1 || q === kA.H2 || q === kA.H3 || q === kA.H4 || q === kA.H5 || q === kA.H6) A.openElements.pop();
    A._insertElement(K, g7.HTML);
  }
  function zk7(A, K) {
    if (A.openElements.hasInButtonScope(kA.P)) A._closePElement();
    A._insertElement(K, g7.HTML), A.skipNextNewLine = !0, A.framesetOk = !1;
  }
  function CQY(A, K) {
    let q = A.openElements.tmplCount > 0;
    if (!A.formElement || q) {
      if (A.openElements.hasInButtonScope(kA.P)) A._closePElement();
      if (A._insertElement(K, g7.HTML), !q) A.formElement = A.openElements.current;
    }
  }
  function LQY(A, K) {
    A.framesetOk = !1;
    let q = K.tagName;
    for (let Y = A.openElements.stackTop; Y >= 0; Y--) {
      let z = A.openElements.items[Y],
        w = A.treeAdapter.getTagName(z),
        H = null;
      if (q === kA.LI && w === kA.LI) H = kA.LI;else if ((q === kA.DD || q === kA.DT) && (w === kA.DD || w === kA.DT)) H = w;
      if (H) {
        A.openElements.generateImpliedEndTagsWithExclusion(H), A.openElements.popUntilTagNamePopped(H);
        break;
      }
      if (w !== kA.ADDRESS && w !== kA.DIV && w !== kA.P && A._isSpecialElement(z)) break;
    }
    if (A.openElements.hasInButtonScope(kA.P)) A._closePElement();
    A._insertElement(K, g7.HTML);
  }
  function RQY(A, K) {
    if (A.openElements.hasInButtonScope(kA.P)) A._closePElement();
    A._insertElement(K, g7.HTML), A.tokenizer.state = h1.MODE.PLAINTEXT;
  }
  function yQY(A, K) {
    if (A.openElements.hasInScope(kA.BUTTON)) A.openElements.generateImpliedEndTags(), A.openElements.popUntilTagNamePopped(kA.BUTTON);
    A._reconstructActiveFormattingElements(), A._insertElement(K, g7.HTML), A.framesetOk = !1;
  }
  function IQY(A, K) {
    let q = A.activeFormattingElements.getElementEntryInScopeWithTagName(kA.A);
    if (q) Es(A, K), A.openElements.remove(q.element), A.activeFormattingElements.removeEntry(q);
    A._reconstructActiveFormattingElements(), A._insertElement(K, g7.HTML), A.activeFormattingElements.pushElement(A.openElements.current, K);
  }
  function cWA(A, K) {
    A._reconstructActiveFormattingElements(), A._insertElement(K, g7.HTML), A.activeFormattingElements.pushElement(A.openElements.current, K);
  }
  function SQY(A, K) {
    if (A._reconstructActiveFormattingElements(), A.openElements.hasInScope(kA.NOBR)) Es(A, K), A._reconstructActiveFormattingElements();
    A._insertElement(K, g7.HTML), A.activeFormattingElements.pushElement(A.openElements.current, K);
  }
  function wk7(A, K) {
    A._reconstructActiveFormattingElements(), A._insertElement(K, g7.HTML), A.activeFormattingElements.insertMarker(), A.framesetOk = !1;
  }
  function hQY(A, K) {
    if (A.treeAdapter.getDocumentMode(A.document) !== G5A.DOCUMENT_MODE.QUIRKS && A.openElements.hasInButtonScope(kA.P)) A._closePElement();
    A._insertElement(K, g7.HTML), A.framesetOk = !1, A.insertionMode = "IN_TABLE_MODE";
  }
  function lWA(A, K) {
    A._reconstructActiveFormattingElements(), A._appendElement(K, g7.HTML), A.framesetOk = !1, K.ackSelfClosing = !0;
  }
  function bQY(A, K) {
    A._reconstructActiveFormattingElements(), A._appendElement(K, g7.HTML);
    let q = h1.getTokenAttr(K, _k7.TYPE);
    if (!q || q.toLowerCase() !== "hidden") A.framesetOk = !1;
    K.ackSelfClosing = !0;
  }
  function Hk7(A, K) {
    A._appendElement(K, g7.HTML), K.ackSelfClosing = !0;
  }
  function xQY(A, K) {
    if (A.openElements.hasInButtonScope(kA.P)) A._closePElement();
    A._appendElement(K, g7.HTML), A.framesetOk = !1, A.ackSelfClosing = !0;
  }
  function uQY(A, K) {
    K.tagName = kA.IMG, lWA(A, K);
  }
  function BQY(A, K) {
    A._insertElement(K, g7.HTML), A.skipNextNewLine = !0, A.tokenizer.state = h1.MODE.RCDATA, A.originalInsertionMode = A.insertionMode, A.framesetOk = !1, A.insertionMode = "TEXT_MODE";
  }
  function mQY(A, K) {
    if (A.openElements.hasInButtonScope(kA.P)) A._closePElement();
    A._reconstructActiveFormattingElements(), A.framesetOk = !1, A._switchToTextParsing(K, h1.MODE.RAWTEXT);
  }
  function gQY(A, K) {
    A.framesetOk = !1, A._switchToTextParsing(K, h1.MODE.RAWTEXT);
  }
  function Jk7(A, K) {
    A._switchToTextParsing(K, h1.MODE.RAWTEXT);
  }
  function FQY(A, K) {
    if (A._reconstructActiveFormattingElements(), A._insertElement(K, g7.HTML), A.framesetOk = !1, A.insertionMode === "IN_TABLE_MODE" || A.insertionMode === "IN_CAPTION_MODE" || A.insertionMode === "IN_TABLE_BODY_MODE" || A.insertionMode === "IN_ROW_MODE" || A.insertionMode === "IN_CELL_MODE") A.insertionMode = "IN_SELECT_IN_TABLE_MODE";else A.insertionMode = "IN_SELECT_MODE";
  }
  function Ok7(A, K) {
    if (A.openElements.currentTagName === kA.OPTION) A.openElements.pop();
    A._reconstructActiveFormattingElements(), A._insertElement(K, g7.HTML);
  }
  function Xk7(A, K) {
    if (A.openElements.hasInScope(kA.RUBY)) A.openElements.generateImpliedEndTags();
    A._insertElement(K, g7.HTML);
  }
  function QQY(A, K) {
    if (A.openElements.hasInScope(kA.RUBY)) A.openElements.generateImpliedEndTagsWithExclusion(kA.RTC);
    A._insertElement(K, g7.HTML);
  }
  function UQY(A, K) {
    if (A.openElements.hasInButtonScope(kA.P)) A._closePElement();
    A._insertElement(K, g7.HTML);
  }
  function pQY(A, K) {
    if (A._reconstructActiveFormattingElements(), jB.adjustTokenMathMLAttrs(K), jB.adjustTokenXMLAttrs(K), K.selfClosing) A._appendElement(K, g7.MATHML);else A._insertElement(K, g7.MATHML);
    K.ackSelfClosing = !0;
  }
  function dQY(A, K) {
    if (A._reconstructActiveFormattingElements(), jB.adjustTokenSVGAttrs(K), jB.adjustTokenXMLAttrs(K), K.selfClosing) A._appendElement(K, g7.SVG);else A._insertElement(K, g7.SVG);
    K.ackSelfClosing = !0;
  }
  function KL(A, K) {
    A._reconstructActiveFormattingElements(), A._insertElement(K, g7.HTML);
  }
  function Rf(A, K) {
    let q = K.tagName;
    switch (q.length) {
      case 1:
        if (q === kA.I || q === kA.S || q === kA.B || q === kA.U) cWA(A, K);else if (q === kA.P) gp(A, K);else if (q === kA.A) IQY(A, K);else KL(A, K);
        break;
      case 2:
        if (q === kA.DL || q === kA.OL || q === kA.UL) gp(A, K);else if (q === kA.H1 || q === kA.H2 || q === kA.H3 || q === kA.H4 || q === kA.H5 || q === kA.H6) kQY(A, K);else if (q === kA.LI || q === kA.DD || q === kA.DT) LQY(A, K);else if (q === kA.EM || q === kA.TT) cWA(A, K);else if (q === kA.BR) lWA(A, K);else if (q === kA.HR) xQY(A, K);else if (q === kA.RB) Xk7(A, K);else if (q === kA.RT || q === kA.RP) QQY(A, K);else if (q !== kA.TH && q !== kA.TD && q !== kA.TR) KL(A, K);
        break;
      case 3:
        if (q === kA.DIV || q === kA.DIR || q === kA.NAV) gp(A, K);else if (q === kA.PRE) zk7(A, K);else if (q === kA.BIG) cWA(A, K);else if (q === kA.IMG || q === kA.WBR) lWA(A, K);else if (q === kA.XMP) mQY(A, K);else if (q === kA.SVG) dQY(A, K);else if (q === kA.RTC) Xk7(A, K);else if (q !== kA.COL) KL(A, K);
        break;
      case 4:
        if (q === kA.HTML) TQY(A, K);else if (q === kA.BASE || q === kA.LINK || q === kA.META) BG(A, K);else if (q === kA.BODY) vQY(A, K);else if (q === kA.MAIN || q === kA.MENU) gp(A, K);else if (q === kA.FORM) CQY(A, K);else if (q === kA.CODE || q === kA.FONT) cWA(A, K);else if (q === kA.NOBR) SQY(A, K);else if (q === kA.AREA) lWA(A, K);else if (q === kA.MATH) pQY(A, K);else if (q === kA.MENU) UQY(A, K);else if (q !== kA.HEAD) KL(A, K);
        break;
      case 5:
        if (q === kA.STYLE || q === kA.TITLE) BG(A, K);else if (q === kA.ASIDE) gp(A, K);else if (q === kA.SMALL) cWA(A, K);else if (q === kA.TABLE) hQY(A, K);else if (q === kA.EMBED) lWA(A, K);else if (q === kA.INPUT) bQY(A, K);else if (q === kA.PARAM || q === kA.TRACK) Hk7(A, K);else if (q === kA.IMAGE) uQY(A, K);else if (q !== kA.FRAME && q !== kA.TBODY && q !== kA.TFOOT && q !== kA.THEAD) KL(A, K);
        break;
      case 6:
        if (q === kA.SCRIPT) BG(A, K);else if (q === kA.CENTER || q === kA.FIGURE || q === kA.FOOTER || q === kA.HEADER || q === kA.HGROUP || q === kA.DIALOG) gp(A, K);else if (q === kA.BUTTON) yQY(A, K);else if (q === kA.STRIKE || q === kA.STRONG) cWA(A, K);else if (q === kA.APPLET || q === kA.OBJECT) wk7(A, K);else if (q === kA.KEYGEN) lWA(A, K);else if (q === kA.SOURCE) Hk7(A, K);else if (q === kA.IFRAME) gQY(A, K);else if (q === kA.SELECT) FQY(A, K);else if (q === kA.OPTION) Ok7(A, K);else KL(A, K);
        break;
      case 7:
        if (q === kA.BGSOUND) BG(A, K);else if (q === kA.DETAILS || q === kA.ADDRESS || q === kA.ARTICLE || q === kA.SECTION || q === kA.SUMMARY) gp(A, K);else if (q === kA.LISTING) zk7(A, K);else if (q === kA.MARQUEE) wk7(A, K);else if (q === kA.NOEMBED) Jk7(A, K);else if (q !== kA.CAPTION) KL(A, K);
        break;
      case 8:
        if (q === kA.BASEFONT) BG(A, K);else if (q === kA.FRAMESET) EQY(A, K);else if (q === kA.FIELDSET) gp(A, K);else if (q === kA.TEXTAREA) BQY(A, K);else if (q === kA.TEMPLATE) BG(A, K);else if (q === kA.NOSCRIPT) {
          if (A.options.scriptingEnabled) Jk7(A, K);else KL(A, K);
        } else if (q === kA.OPTGROUP) Ok7(A, K);else if (q !== kA.COLGROUP) KL(A, K);
        break;
      case 9:
        if (q === kA.PLAINTEXT) RQY(A, K);else KL(A, K);
        break;
      case 10:
        if (q === kA.BLOCKQUOTE || q === kA.FIGCAPTION) gp(A, K);else KL(A, K);
        break;
      default:
        KL(A, K);
    }
  }
  function cQY(A) {
    if (A.openElements.hasInScope(kA.BODY)) A.insertionMode = "AFTER_BODY_MODE";
  }
  function lQY(A, K) {
    if (A.openElements.hasInScope(kA.BODY)) A.insertionMode = "AFTER_BODY_MODE", A._processToken(K);
  }
  function vs(A, K) {
    let q = K.tagName;
    if (A.openElements.hasInScope(q)) A.openElements.generateImpliedEndTags(), A.openElements.popUntilTagNamePopped(q);
  }
  function iQY(A) {
    let K = A.openElements.tmplCount > 0,
      q = A.formElement;
    if (!K) A.formElement = null;
    if ((q || K) && A.openElements.hasInScope(kA.FORM)) if (A.openElements.generateImpliedEndTags(), K) A.openElements.popUntilTagNamePopped(kA.FORM);else A.openElements.remove(q);
  }
  function nQY(A) {
    if (!A.openElements.hasInButtonScope(kA.P)) A._insertFakeElement(kA.P);
    A._closePElement();
  }
  function rQY(A) {
    if (A.openElements.hasInListItemScope(kA.LI)) A.openElements.generateImpliedEndTagsWithExclusion(kA.LI), A.openElements.popUntilTagNamePopped(kA.LI);
  }
  function oQY(A, K) {
    let q = K.tagName;
    if (A.openElements.hasInScope(q)) A.openElements.generateImpliedEndTagsWithExclusion(q), A.openElements.popUntilTagNamePopped(q);
  }
  function aQY(A) {
    if (A.openElements.hasNumberedHeaderInScope()) A.openElements.generateImpliedEndTags(), A.openElements.popUntilNumberedHeaderPopped();
  }
  function $k7(A, K) {
    let q = K.tagName;
    if (A.openElements.hasInScope(q)) A.openElements.generateImpliedEndTags(), A.openElements.popUntilTagNamePopped(q), A.activeFormattingElements.clearToLastMarker();
  }
  function sQY(A) {
    A._reconstructActiveFormattingElements(), A._insertFakeElement(kA.BR), A.openElements.pop(), A.framesetOk = !1;
  }
  function qS(A, K) {
    let q = K.tagName;
    for (let Y = A.openElements.stackTop; Y > 0; Y--) {
      let z = A.openElements.items[Y];
      if (A.treeAdapter.getTagName(z) === q) {
        A.openElements.generateImpliedEndTagsWithExclusion(q), A.openElements.popUntilElementPopped(z);
        break;
      }
      if (A._isSpecialElement(z)) break;
    }
  }
  function Qf6(A, K) {
    let q = K.tagName;
    switch (q.length) {
      case 1:
        if (q === kA.A || q === kA.B || q === kA.I || q === kA.S || q === kA.U) Es(A, K);else if (q === kA.P) nQY(A, K);else qS(A, K);
        break;
      case 2:
        if (q === kA.DL || q === kA.UL || q === kA.OL) vs(A, K);else if (q === kA.LI) rQY(A, K);else if (q === kA.DD || q === kA.DT) oQY(A, K);else if (q === kA.H1 || q === kA.H2 || q === kA.H3 || q === kA.H4 || q === kA.H5 || q === kA.H6) aQY(A, K);else if (q === kA.BR) sQY(A, K);else if (q === kA.EM || q === kA.TT) Es(A, K);else qS(A, K);
        break;
      case 3:
        if (q === kA.BIG) Es(A, K);else if (q === kA.DIR || q === kA.DIV || q === kA.NAV || q === kA.PRE) vs(A, K);else qS(A, K);
        break;
      case 4:
        if (q === kA.BODY) cQY(A, K);else if (q === kA.HTML) lQY(A, K);else if (q === kA.FORM) iQY(A, K);else if (q === kA.CODE || q === kA.FONT || q === kA.NOBR) Es(A, K);else if (q === kA.MAIN || q === kA.MENU) vs(A, K);else qS(A, K);
        break;
      case 5:
        if (q === kA.ASIDE) vs(A, K);else if (q === kA.SMALL) Es(A, K);else qS(A, K);
        break;
      case 6:
        if (q === kA.CENTER || q === kA.FIGURE || q === kA.FOOTER || q === kA.HEADER || q === kA.HGROUP || q === kA.DIALOG) vs(A, K);else if (q === kA.APPLET || q === kA.OBJECT) $k7(A, K);else if (q === kA.STRIKE || q === kA.STRONG) Es(A, K);else qS(A, K);
        break;
      case 7:
        if (q === kA.ADDRESS || q === kA.ARTICLE || q === kA.DETAILS || q === kA.SECTION || q === kA.SUMMARY || q === kA.LISTING) vs(A, K);else if (q === kA.MARQUEE) $k7(A, K);else qS(A, K);
        break;
      case 8:
        if (q === kA.FIELDSET) vs(A, K);else if (q === kA.TEMPLATE) Z5A(A, K);else qS(A, K);
        break;
      case 10:
        if (q === kA.BLOCKQUOTE || q === kA.FIGCAPTION) vs(A, K);else qS(A, K);
        break;
      default:
        qS(A, K);
    }
  }
  function Fp(A, K) {
    if (A.tmplInsertionModeStackTop > -1) Dk7(A, K);else A.stopped = !0;
  }
  function tQY(A, K) {
    if (K.tagName === kA.SCRIPT) A.pendingScript = A.openElements.current;
    A.openElements.pop(), A.insertionMode = A.originalInsertionMode;
  }
  function eQY(A, K) {
    A._err(WW.eofInElementThatCanContainOnlyText), A.openElements.pop(), A.insertionMode = A.originalInsertionMode, A._processToken(K);
  }
  function Qp(A, K) {
    let q = A.openElements.currentTagName;
    if (q === kA.TABLE || q === kA.TBODY || q === kA.TFOOT || q === kA.THEAD || q === kA.TR) A.pendingCharacterTokens = [], A.hasNonWhitespacePendingCharacterToken = !1, A.originalInsertionMode = A.insertionMode, A.insertionMode = "IN_TABLE_TEXT_MODE", A._processToken(K);else qL(A, K);
  }
  function AUY(A, K) {
    A.openElements.clearBackToTableContext(), A.activeFormattingElements.insertMarker(), A._insertElement(K, g7.HTML), A.insertionMode = "IN_CAPTION_MODE";
  }
  function KUY(A, K) {
    A.openElements.clearBackToTableContext(), A._insertElement(K, g7.HTML), A.insertionMode = "IN_COLUMN_GROUP_MODE";
  }
  function qUY(A, K) {
    A.openElements.clearBackToTableContext(), A._insertFakeElement(kA.COLGROUP), A.insertionMode = "IN_COLUMN_GROUP_MODE", A._processToken(K);
  }
  function YUY(A, K) {
    A.openElements.clearBackToTableContext(), A._insertElement(K, g7.HTML), A.insertionMode = "IN_TABLE_BODY_MODE";
  }
  function zUY(A, K) {
    A.openElements.clearBackToTableContext(), A._insertFakeElement(kA.TBODY), A.insertionMode = "IN_TABLE_BODY_MODE", A._processToken(K);
  }
  function wUY(A, K) {
    if (A.openElements.hasInTableScope(kA.TABLE)) A.openElements.popUntilTagNamePopped(kA.TABLE), A._resetInsertionMode(), A._processToken(K);
  }
  function HUY(A, K) {
    let q = h1.getTokenAttr(K, _k7.TYPE);
    if (q && q.toLowerCase() === "hidden") A._appendElement(K, g7.HTML);else qL(A, K);
    K.ackSelfClosing = !0;
  }
  function JUY(A, K) {
    if (!A.formElement && A.openElements.tmplCount === 0) A._insertElement(K, g7.HTML), A.formElement = A.openElements.current, A.openElements.pop();
  }
  function Uf6(A, K) {
    let q = K.tagName;
    switch (q.length) {
      case 2:
        if (q === kA.TD || q === kA.TH || q === kA.TR) zUY(A, K);else qL(A, K);
        break;
      case 3:
        if (q === kA.COL) qUY(A, K);else qL(A, K);
        break;
      case 4:
        if (q === kA.FORM) JUY(A, K);else qL(A, K);
        break;
      case 5:
        if (q === kA.TABLE) wUY(A, K);else if (q === kA.STYLE) BG(A, K);else if (q === kA.TBODY || q === kA.TFOOT || q === kA.THEAD) YUY(A, K);else if (q === kA.INPUT) HUY(A, K);else qL(A, K);
        break;
      case 6:
        if (q === kA.SCRIPT) BG(A, K);else qL(A, K);
        break;
      case 7:
        if (q === kA.CAPTION) AUY(A, K);else qL(A, K);
        break;
      case 8:
        if (q === kA.COLGROUP) KUY(A, K);else if (q === kA.TEMPLATE) BG(A, K);else qL(A, K);
        break;
      default:
        qL(A, K);
    }
  }
  function pf6(A, K) {
    let q = K.tagName;
    if (q === kA.TABLE) {
      if (A.openElements.hasInTableScope(kA.TABLE)) A.openElements.popUntilTagNamePopped(kA.TABLE), A._resetInsertionMode();
    } else if (q === kA.TEMPLATE) Z5A(A, K);else if (q !== kA.BODY && q !== kA.CAPTION && q !== kA.COL && q !== kA.COLGROUP && q !== kA.HTML && q !== kA.TBODY && q !== kA.TD && q !== kA.TFOOT && q !== kA.TH && q !== kA.THEAD && q !== kA.TR) qL(A, K);
  }
  function qL(A, K) {
    let q = A.fosterParentingEnabled;
    A.fosterParentingEnabled = !0, A._processTokenInBodyMode(K), A.fosterParentingEnabled = q;
  }
  function OUY(A, K) {
    A.pendingCharacterTokens.push(K);
  }
  function XUY(A, K) {
    A.pendingCharacterTokens.push(K), A.hasNonWhitespacePendingCharacterToken = !0;
  }
  function FmA(A, K) {
    let q = 0;
    if (A.hasNonWhitespacePendingCharacterToken) for (; q < A.pendingCharacterTokens.length; q++) qL(A, A.pendingCharacterTokens[q]);else for (; q < A.pendingCharacterTokens.length; q++) A._insertCharacters(A.pendingCharacterTokens[q]);
    A.insertionMode = A.originalInsertionMode, A._processToken(K);
  }
  function $UY(A, K) {
    let q = K.tagName;
    if (q === kA.CAPTION || q === kA.COL || q === kA.COLGROUP || q === kA.TBODY || q === kA.TD || q === kA.TFOOT || q === kA.TH || q === kA.THEAD || q === kA.TR) {
      if (A.openElements.hasInTableScope(kA.CAPTION)) A.openElements.generateImpliedEndTags(), A.openElements.popUntilTagNamePopped(kA.CAPTION), A.activeFormattingElements.clearToLastMarker(), A.insertionMode = "IN_TABLE_MODE", A._processToken(K);
    } else Rf(A, K);
  }
  function _UY(A, K) {
    let q = K.tagName;
    if (q === kA.CAPTION || q === kA.TABLE) {
      if (A.openElements.hasInTableScope(kA.CAPTION)) {
        if (A.openElements.generateImpliedEndTags(), A.openElements.popUntilTagNamePopped(kA.CAPTION), A.activeFormattingElements.clearToLastMarker(), A.insertionMode = "IN_TABLE_MODE", q === kA.TABLE) A._processToken(K);
      }
    } else if (q !== kA.BODY && q !== kA.COL && q !== kA.COLGROUP && q !== kA.HTML && q !== kA.TBODY && q !== kA.TD && q !== kA.TFOOT && q !== kA.TH && q !== kA.THEAD && q !== kA.TR) Qf6(A, K);
  }
  function GUY(A, K) {
    let q = K.tagName;
    if (q === kA.HTML) Rf(A, K);else if (q === kA.COL) A._appendElement(K, g7.HTML), K.ackSelfClosing = !0;else if (q === kA.TEMPLATE) BG(A, K);else HZ1(A, K);
  }
  function ZUY(A, K) {
    let q = K.tagName;
    if (q === kA.COLGROUP) {
      if (A.openElements.currentTagName === kA.COLGROUP) A.openElements.pop(), A.insertionMode = "IN_TABLE_MODE";
    } else if (q === kA.TEMPLATE) Z5A(A, K);else if (q !== kA.COL) HZ1(A, K);
  }
  function HZ1(A, K) {
    if (A.openElements.currentTagName === kA.COLGROUP) A.openElements.pop(), A.insertionMode = "IN_TABLE_MODE", A._processToken(K);
  }
  function WUY(A, K) {
    let q = K.tagName;
    if (q === kA.TR) A.openElements.clearBackToTableBodyContext(), A._insertElement(K, g7.HTML), A.insertionMode = "IN_ROW_MODE";else if (q === kA.TH || q === kA.TD) A.openElements.clearBackToTableBodyContext(), A._insertFakeElement(kA.TR), A.insertionMode = "IN_ROW_MODE", A._processToken(K);else if (q === kA.CAPTION || q === kA.COL || q === kA.COLGROUP || q === kA.TBODY || q === kA.TFOOT || q === kA.THEAD) {
      if (A.openElements.hasTableBodyContextInTableScope()) A.openElements.clearBackToTableBodyContext(), A.openElements.pop(), A.insertionMode = "IN_TABLE_MODE", A._processToken(K);
    } else Uf6(A, K);
  }
  function DUY(A, K) {
    let q = K.tagName;
    if (q === kA.TBODY || q === kA.TFOOT || q === kA.THEAD) {
      if (A.openElements.hasInTableScope(q)) A.openElements.clearBackToTableBodyContext(), A.openElements.pop(), A.insertionMode = "IN_TABLE_MODE";
    } else if (q === kA.TABLE) {
      if (A.openElements.hasTableBodyContextInTableScope()) A.openElements.clearBackToTableBodyContext(), A.openElements.pop(), A.insertionMode = "IN_TABLE_MODE", A._processToken(K);
    } else if (q !== kA.BODY && q !== kA.CAPTION && q !== kA.COL && q !== kA.COLGROUP || q !== kA.HTML && q !== kA.TD && q !== kA.TH && q !== kA.TR) pf6(A, K);
  }
  function jUY(A, K) {
    let q = K.tagName;
    if (q === kA.TH || q === kA.TD) A.openElements.clearBackToTableRowContext(), A._insertElement(K, g7.HTML), A.insertionMode = "IN_CELL_MODE", A.activeFormattingElements.insertMarker();else if (q === kA.CAPTION || q === kA.COL || q === kA.COLGROUP || q === kA.TBODY || q === kA.TFOOT || q === kA.THEAD || q === kA.TR) {
      if (A.openElements.hasInTableScope(kA.TR)) A.openElements.clearBackToTableRowContext(), A.openElements.pop(), A.insertionMode = "IN_TABLE_BODY_MODE", A._processToken(K);
    } else Uf6(A, K);
  }
  function MUY(A, K) {
    let q = K.tagName;
    if (q === kA.TR) {
      if (A.openElements.hasInTableScope(kA.TR)) A.openElements.clearBackToTableRowContext(), A.openElements.pop(), A.insertionMode = "IN_TABLE_BODY_MODE";
    } else if (q === kA.TABLE) {
      if (A.openElements.hasInTableScope(kA.TR)) A.openElements.clearBackToTableRowContext(), A.openElements.pop(), A.insertionMode = "IN_TABLE_BODY_MODE", A._processToken(K);
    } else if (q === kA.TBODY || q === kA.TFOOT || q === kA.THEAD) {
      if (A.openElements.hasInTableScope(q) || A.openElements.hasInTableScope(kA.TR)) A.openElements.clearBackToTableRowContext(), A.openElements.pop(), A.insertionMode = "IN_TABLE_BODY_MODE", A._processToken(K);
    } else if (q !== kA.BODY && q !== kA.CAPTION && q !== kA.COL && q !== kA.COLGROUP || q !== kA.HTML && q !== kA.TD && q !== kA.TH) pf6(A, K);
  }
  function PUY(A, K) {
    let q = K.tagName;
    if (q === kA.CAPTION || q === kA.COL || q === kA.COLGROUP || q === kA.TBODY || q === kA.TD || q === kA.TFOOT || q === kA.TH || q === kA.THEAD || q === kA.TR) {
      if (A.openElements.hasInTableScope(kA.TD) || A.openElements.hasInTableScope(kA.TH)) A._closeTableCell(), A._processToken(K);
    } else Rf(A, K);
  }
  function VUY(A, K) {
    let q = K.tagName;
    if (q === kA.TD || q === kA.TH) {
      if (A.openElements.hasInTableScope(q)) A.openElements.generateImpliedEndTags(), A.openElements.popUntilTagNamePopped(q), A.activeFormattingElements.clearToLastMarker(), A.insertionMode = "IN_ROW_MODE";
    } else if (q === kA.TABLE || q === kA.TBODY || q === kA.TFOOT || q === kA.THEAD || q === kA.TR) {
      if (A.openElements.hasInTableScope(q)) A._closeTableCell(), A._processToken(K);
    } else if (q !== kA.BODY && q !== kA.CAPTION && q !== kA.COL && q !== kA.COLGROUP && q !== kA.HTML) Qf6(A, K);
  }
  function Zk7(A, K) {
    let q = K.tagName;
    if (q === kA.HTML) Rf(A, K);else if (q === kA.OPTION) {
      if (A.openElements.currentTagName === kA.OPTION) A.openElements.pop();
      A._insertElement(K, g7.HTML);
    } else if (q === kA.OPTGROUP) {
      if (A.openElements.currentTagName === kA.OPTION) A.openElements.pop();
      if (A.openElements.currentTagName === kA.OPTGROUP) A.openElements.pop();
      A._insertElement(K, g7.HTML);
    } else if (q === kA.INPUT || q === kA.KEYGEN || q === kA.TEXTAREA || q === kA.SELECT) {
      if (A.openElements.hasInSelectScope(kA.SELECT)) {
        if (A.openElements.popUntilTagNamePopped(kA.SELECT), A._resetInsertionMode(), q !== kA.SELECT) A._processToken(K);
      }
    } else if (q === kA.SCRIPT || q === kA.TEMPLATE) BG(A, K);
  }
  function Wk7(A, K) {
    let q = K.tagName;
    if (q === kA.OPTGROUP) {
      let Y = A.openElements.items[A.openElements.stackTop - 1],
        z = Y && A.treeAdapter.getTagName(Y);
      if (A.openElements.currentTagName === kA.OPTION && z === kA.OPTGROUP) A.openElements.pop();
      if (A.openElements.currentTagName === kA.OPTGROUP) A.openElements.pop();
    } else if (q === kA.OPTION) {
      if (A.openElements.currentTagName === kA.OPTION) A.openElements.pop();
    } else if (q === kA.SELECT && A.openElements.hasInSelectScope(kA.SELECT)) A.openElements.popUntilTagNamePopped(kA.SELECT), A._resetInsertionMode();else if (q === kA.TEMPLATE) Z5A(A, K);
  }
  function fUY(A, K) {
    let q = K.tagName;
    if (q === kA.CAPTION || q === kA.TABLE || q === kA.TBODY || q === kA.TFOOT || q === kA.THEAD || q === kA.TR || q === kA.TD || q === kA.TH) A.openElements.popUntilTagNamePopped(kA.SELECT), A._resetInsertionMode(), A._processToken(K);else Zk7(A, K);
  }
  function NUY(A, K) {
    let q = K.tagName;
    if (q === kA.CAPTION || q === kA.TABLE || q === kA.TBODY || q === kA.TFOOT || q === kA.THEAD || q === kA.TR || q === kA.TD || q === kA.TH) {
      if (A.openElements.hasInTableScope(q)) A.openElements.popUntilTagNamePopped(kA.SELECT), A._resetInsertionMode(), A._processToken(K);
    } else Wk7(A, K);
  }
  function TUY(A, K) {
    let q = K.tagName;
    if (q === kA.BASE || q === kA.BASEFONT || q === kA.BGSOUND || q === kA.LINK || q === kA.META || q === kA.NOFRAMES || q === kA.SCRIPT || q === kA.STYLE || q === kA.TEMPLATE || q === kA.TITLE) BG(A, K);else {
      let Y = wQY[q] || "IN_BODY_MODE";
      A._popTmplInsertionMode(), A._pushTmplInsertionMode(Y), A.insertionMode = Y, A._processToken(K);
    }
  }
  function vUY(A, K) {
    if (K.tagName === kA.TEMPLATE) Z5A(A, K);
  }
  function Dk7(A, K) {
    if (A.openElements.tmplCount > 0) A.openElements.popUntilTagNamePopped(kA.TEMPLATE), A.activeFormattingElements.clearToLastMarker(), A._popTmplInsertionMode(), A._resetInsertionMode(), A._processToken(K);else A.stopped = !0;
  }
  function EUY(A, K) {
    if (K.tagName === kA.HTML) Rf(A, K);else JZ1(A, K);
  }
  function kUY(A, K) {
    if (K.tagName === kA.HTML) {
      if (!A.fragmentContext) A.insertionMode = "AFTER_AFTER_BODY_MODE";
    } else JZ1(A, K);
  }
  function JZ1(A, K) {
    A.insertionMode = "IN_BODY_MODE", A._processToken(K);
  }
  function CUY(A, K) {
    let q = K.tagName;
    if (q === kA.HTML) Rf(A, K);else if (q === kA.FRAMESET) A._insertElement(K, g7.HTML);else if (q === kA.FRAME) A._appendElement(K, g7.HTML), K.ackSelfClosing = !0;else if (q === kA.NOFRAMES) BG(A, K);
  }
  function LUY(A, K) {
    if (K.tagName === kA.FRAMESET && !A.openElements.isRootHtmlElementCurrent()) {
      if (A.openElements.pop(), !A.fragmentContext && A.openElements.currentTagName !== kA.FRAMESET) A.insertionMode = "AFTER_FRAMESET_MODE";
    }
  }
  function RUY(A, K) {
    let q = K.tagName;
    if (q === kA.HTML) Rf(A, K);else if (q === kA.NOFRAMES) BG(A, K);
  }
  function yUY(A, K) {
    if (K.tagName === kA.HTML) A.insertionMode = "AFTER_AFTER_FRAMESET_MODE";
  }
  function IUY(A, K) {
    if (K.tagName === kA.HTML) Rf(A, K);else wZ1(A, K);
  }
  function wZ1(A, K) {
    A.insertionMode = "IN_BODY_MODE", A._processToken(K);
  }
  function SUY(A, K) {
    let q = K.tagName;
    if (q === kA.HTML) Rf(A, K);else if (q === kA.NOFRAMES) BG(A, K);
  }
  function hUY(A, K) {
    K.chars = qQY.REPLACEMENT_CHARACTER, A._insertCharacters(K);
  }
  function bUY(A, K) {
    A._insertCharacters(K), A.framesetOk = !1;
  }
  function xUY(A, K) {
    if (jB.causesExit(K) && !A.fragmentContext) {
      while (A.treeAdapter.getNamespaceURI(A.openElements.current) !== g7.HTML && !A._isIntegrationPoint(A.openElements.current)) A.openElements.pop();
      A._processToken(K);
    } else {
      let q = A._getAdjustedCurrentElement(),
        Y = A.treeAdapter.getNamespaceURI(q);
      if (Y === g7.MATHML) jB.adjustTokenMathMLAttrs(K);else if (Y === g7.SVG) jB.adjustTokenSVGTagName(K), jB.adjustTokenSVGAttrs(K);
      if (jB.adjustTokenXMLAttrs(K), K.selfClosing) A._appendElement(K, Y);else A._insertElement(K, Y);
      K.ackSelfClosing = !0;
    }
  }
  function uUY(A, K) {
    for (let q = A.openElements.stackTop; q > 0; q--) {
      let Y = A.openElements.items[q];
      if (A.treeAdapter.getNamespaceURI(Y) === g7.HTML) {
        A._processToken(K);
        break;
      }
      if (A.treeAdapter.getTagName(Y).toLowerCase() === K.tagName) {
        A.openElements.popUntilElementPopped(Y);
        break;
      }
    }
  }
});

// Register to shared state
__$.Mk7 = Mk7;
