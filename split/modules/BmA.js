// Module: BmA
// Dependencies: wE7, sG1, JE7, tG1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BmA = v((z_H, _E7) => {
  var RgY = __$.wE7(),
    ez = __$.sG1(),
    $5A = __$.JE7(),
    _8 = __$.tG1(),
    k1 = ez.CODE_POINTS,
    O5A = ez.CODE_POINT_SEQUENCES,
    ygY = {
      128: 8364,
      130: 8218,
      131: 402,
      132: 8222,
      133: 8230,
      134: 8224,
      135: 8225,
      136: 710,
      137: 8240,
      138: 352,
      139: 8249,
      140: 338,
      142: 381,
      145: 8216,
      146: 8217,
      147: 8220,
      148: 8221,
      149: 8226,
      150: 8211,
      151: 8212,
      152: 732,
      153: 8482,
      154: 353,
      155: 8250,
      156: 339,
      158: 382,
      159: 376
    };
  function rH(A) {
    return A === k1.SPACE || A === k1.LINE_FEED || A === k1.TABULATION || A === k1.FORM_FEED;
  }
  function umA(A) {
    return A >= k1.DIGIT_0 && A <= k1.DIGIT_9;
  }
  function AS(A) {
    return A >= k1.LATIN_CAPITAL_A && A <= k1.LATIN_CAPITAL_Z;
  }
  function X5A(A) {
    return A >= k1.LATIN_SMALL_A && A <= k1.LATIN_SMALL_Z;
  }
  function Ns(A) {
    return X5A(A) || AS(A);
  }
  function Lf6(A) {
    return Ns(A) || umA(A);
  }
  function XE7(A) {
    return A >= k1.LATIN_CAPITAL_A && A <= k1.LATIN_CAPITAL_F;
  }
  function $E7(A) {
    return A >= k1.LATIN_SMALL_A && A <= k1.LATIN_SMALL_F;
  }
  function IgY(A) {
    return umA(A) || XE7(A) || $E7(A);
  }
  function eG1(A) {
    return A + 32;
  }
  function _0(A) {
    if (A <= 65535) return String.fromCharCode(A);
    return A -= 65536, String.fromCharCode(A >>> 10 & 1023 | 55296) + String.fromCharCode(56320 | A & 1023);
  }
  function Vs(A) {
    return String.fromCharCode(eG1(A));
  }
  function OE7(A, K) {
    let q = $5A[++A],
      Y = ++A,
      z = Y + q - 1;
    while (Y <= z) {
      let w = Y + z >>> 1,
        H = $5A[w];
      if (H < K) Y = w + 1;else if (H > K) z = w - 1;else return $5A[w + q];
    }
    return -1;
  }
  class $H {
    constructor() {
      this.preprocessor = new RgY(), this.tokenQueue = [], this.allowCDATA = !1, this.state = "DATA_STATE", this.returnState = "", this.charRefCode = -1, this.tempBuff = [], this.lastStartTagName = "", this.consumedAfterSnapshot = -1, this.active = !1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = null;
    }
    _err() {}
    _errOnNextCodePoint(A) {
      this._consume(), this._err(A), this._unconsume();
    }
    getNextToken() {
      while (!this.tokenQueue.length && this.active) {
        this.consumedAfterSnapshot = 0;
        let A = this._consume();
        if (!this._ensureHibernation()) this[this.state](A);
      }
      return this.tokenQueue.shift();
    }
    write(A, K) {
      this.active = !0, this.preprocessor.write(A, K);
    }
    insertHtmlAtCurrentPos(A) {
      this.active = !0, this.preprocessor.insertHtmlAtCurrentPos(A);
    }
    _ensureHibernation() {
      if (this.preprocessor.endOfChunkHit) {
        for (; this.consumedAfterSnapshot > 0; this.consumedAfterSnapshot--) this.preprocessor.retreat();
        return this.active = !1, this.tokenQueue.push({
          type: $H.HIBERNATION_TOKEN
        }), !0;
      }
      return !1;
    }
    _consume() {
      return this.consumedAfterSnapshot++, this.preprocessor.advance();
    }
    _unconsume() {
      this.consumedAfterSnapshot--, this.preprocessor.retreat();
    }
    _reconsumeInState(A) {
      this.state = A, this._unconsume();
    }
    _consumeSequenceIfMatch(A, K, q) {
      let Y = 0,
        z = !0,
        w = A.length,
        H = 0,
        J = K,
        O = void 0;
      for (; H < w; H++) {
        if (H > 0) J = this._consume(), Y++;
        if (J === k1.EOF) {
          z = !1;
          break;
        }
        if (O = A[H], J !== O && (q || J !== eG1(O))) {
          z = !1;
          break;
        }
      }
      if (!z) while (Y--) this._unconsume();
      return z;
    }
    _isTempBufferEqualToScriptString() {
      if (this.tempBuff.length !== O5A.SCRIPT_STRING.length) return !1;
      for (let A = 0; A < this.tempBuff.length; A++) if (this.tempBuff[A] !== O5A.SCRIPT_STRING[A]) return !1;
      return !0;
    }
    _createStartTagToken() {
      this.currentToken = {
        type: $H.START_TAG_TOKEN,
        tagName: "",
        selfClosing: !1,
        ackSelfClosing: !1,
        attrs: []
      };
    }
    _createEndTagToken() {
      this.currentToken = {
        type: $H.END_TAG_TOKEN,
        tagName: "",
        selfClosing: !1,
        attrs: []
      };
    }
    _createCommentToken() {
      this.currentToken = {
        type: $H.COMMENT_TOKEN,
        data: ""
      };
    }
    _createDoctypeToken(A) {
      this.currentToken = {
        type: $H.DOCTYPE_TOKEN,
        name: A,
        forceQuirks: !1,
        publicId: null,
        systemId: null
      };
    }
    _createCharacterToken(A, K) {
      this.currentCharacterToken = {
        type: A,
        chars: K
      };
    }
    _createEOFToken() {
      this.currentToken = {
        type: $H.EOF_TOKEN
      };
    }
    _createAttr(A) {
      this.currentAttr = {
        name: A,
        value: ""
      };
    }
    _leaveAttrName(A) {
      if ($H.getTokenAttr(this.currentToken, this.currentAttr.name) === null) this.currentToken.attrs.push(this.currentAttr);else this._err(_8.duplicateAttribute);
      this.state = A;
    }
    _leaveAttrValue(A) {
      this.state = A;
    }
    _emitCurrentToken() {
      this._emitCurrentCharacterToken();
      let A = this.currentToken;
      if (this.currentToken = null, A.type === $H.START_TAG_TOKEN) this.lastStartTagName = A.tagName;else if (A.type === $H.END_TAG_TOKEN) {
        if (A.attrs.length > 0) this._err(_8.endTagWithAttributes);
        if (A.selfClosing) this._err(_8.endTagWithTrailingSolidus);
      }
      this.tokenQueue.push(A);
    }
    _emitCurrentCharacterToken() {
      if (this.currentCharacterToken) this.tokenQueue.push(this.currentCharacterToken), this.currentCharacterToken = null;
    }
    _emitEOFToken() {
      this._createEOFToken(), this._emitCurrentToken();
    }
    _appendCharToCurrentCharacterToken(A, K) {
      if (this.currentCharacterToken && this.currentCharacterToken.type !== A) this._emitCurrentCharacterToken();
      if (this.currentCharacterToken) this.currentCharacterToken.chars += K;else this._createCharacterToken(A, K);
    }
    _emitCodePoint(A) {
      let K = $H.CHARACTER_TOKEN;
      if (rH(A)) K = $H.WHITESPACE_CHARACTER_TOKEN;else if (A === k1.NULL) K = $H.NULL_CHARACTER_TOKEN;
      this._appendCharToCurrentCharacterToken(K, _0(A));
    }
    _emitSeveralCodePoints(A) {
      for (let K = 0; K < A.length; K++) this._emitCodePoint(A[K]);
    }
    _emitChars(A) {
      this._appendCharToCurrentCharacterToken($H.CHARACTER_TOKEN, A);
    }
    _matchNamedCharacterReference(A) {
      let K = null,
        q = 1,
        Y = OE7(0, A);
      this.tempBuff.push(A);
      while (Y > -1) {
        let z = $5A[Y],
          w = z < 7;
        if (w && z & 1) K = z & 2 ? [$5A[++Y], $5A[++Y]] : [$5A[++Y]], q = 0;
        let J = this._consume();
        if (this.tempBuff.push(J), q++, J === k1.EOF) break;
        if (w) Y = z & 4 ? OE7(Y, J) : -1;else Y = J === z ? ++Y : -1;
      }
      while (q--) this.tempBuff.pop(), this._unconsume();
      return K;
    }
    _isCharacterReferenceInAttribute() {
      return this.returnState === "ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE" || this.returnState === "ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE" || this.returnState === "ATTRIBUTE_VALUE_UNQUOTED_STATE";
    }
    _isCharacterReferenceAttributeQuirk(A) {
      if (!A && this._isCharacterReferenceInAttribute()) {
        let K = this._consume();
        return this._unconsume(), K === k1.EQUALS_SIGN || Lf6(K);
      }
      return !1;
    }
    _flushCodePointsConsumedAsCharacterReference() {
      if (this._isCharacterReferenceInAttribute()) for (let A = 0; A < this.tempBuff.length; A++) this.currentAttr.value += _0(this.tempBuff[A]);else this._emitSeveralCodePoints(this.tempBuff);
      this.tempBuff = [];
    }
    ["DATA_STATE"](A) {
      if (this.preprocessor.dropParsedChunk(), A === k1.LESS_THAN_SIGN) this.state = "TAG_OPEN_STATE";else if (A === k1.AMPERSAND) this.returnState = "DATA_STATE", this.state = "CHARACTER_REFERENCE_STATE";else if (A === k1.NULL) this._err(_8.unexpectedNullCharacter), this._emitCodePoint(A);else if (A === k1.EOF) this._emitEOFToken();else this._emitCodePoint(A);
    }
    ["RCDATA_STATE"](A) {
      if (this.preprocessor.dropParsedChunk(), A === k1.AMPERSAND) this.returnState = "RCDATA_STATE", this.state = "CHARACTER_REFERENCE_STATE";else if (A === k1.LESS_THAN_SIGN) this.state = "RCDATA_LESS_THAN_SIGN_STATE";else if (A === k1.NULL) this._err(_8.unexpectedNullCharacter), this._emitChars(ez.REPLACEMENT_CHARACTER);else if (A === k1.EOF) this._emitEOFToken();else this._emitCodePoint(A);
    }
    ["RAWTEXT_STATE"](A) {
      if (this.preprocessor.dropParsedChunk(), A === k1.LESS_THAN_SIGN) this.state = "RAWTEXT_LESS_THAN_SIGN_STATE";else if (A === k1.NULL) this._err(_8.unexpectedNullCharacter), this._emitChars(ez.REPLACEMENT_CHARACTER);else if (A === k1.EOF) this._emitEOFToken();else this._emitCodePoint(A);
    }
    ["SCRIPT_DATA_STATE"](A) {
      if (this.preprocessor.dropParsedChunk(), A === k1.LESS_THAN_SIGN) this.state = "SCRIPT_DATA_LESS_THAN_SIGN_STATE";else if (A === k1.NULL) this._err(_8.unexpectedNullCharacter), this._emitChars(ez.REPLACEMENT_CHARACTER);else if (A === k1.EOF) this._emitEOFToken();else this._emitCodePoint(A);
    }
    ["PLAINTEXT_STATE"](A) {
      if (this.preprocessor.dropParsedChunk(), A === k1.NULL) this._err(_8.unexpectedNullCharacter), this._emitChars(ez.REPLACEMENT_CHARACTER);else if (A === k1.EOF) this._emitEOFToken();else this._emitCodePoint(A);
    }
    ["TAG_OPEN_STATE"](A) {
      if (A === k1.EXCLAMATION_MARK) this.state = "MARKUP_DECLARATION_OPEN_STATE";else if (A === k1.SOLIDUS) this.state = "END_TAG_OPEN_STATE";else if (Ns(A)) this._createStartTagToken(), this._reconsumeInState("TAG_NAME_STATE");else if (A === k1.QUESTION_MARK) this._err(_8.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(), this._reconsumeInState("BOGUS_COMMENT_STATE");else if (A === k1.EOF) this._err(_8.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();else this._err(_8.invalidFirstCharacterOfTagName), this._emitChars("<"), this._reconsumeInState("DATA_STATE");
    }
    ["END_TAG_OPEN_STATE"](A) {
      if (Ns(A)) this._createEndTagToken(), this._reconsumeInState("TAG_NAME_STATE");else if (A === k1.GREATER_THAN_SIGN) this._err(_8.missingEndTagName), this.state = "DATA_STATE";else if (A === k1.EOF) this._err(_8.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();else this._err(_8.invalidFirstCharacterOfTagName), this._createCommentToken(), this._reconsumeInState("BOGUS_COMMENT_STATE");
    }
    ["TAG_NAME_STATE"](A) {
      if (rH(A)) this.state = "BEFORE_ATTRIBUTE_NAME_STATE";else if (A === k1.SOLIDUS) this.state = "SELF_CLOSING_START_TAG_STATE";else if (A === k1.GREATER_THAN_SIGN) this.state = "DATA_STATE", this._emitCurrentToken();else if (AS(A)) this.currentToken.tagName += Vs(A);else if (A === k1.NULL) this._err(_8.unexpectedNullCharacter), this.currentToken.tagName += ez.REPLACEMENT_CHARACTER;else if (A === k1.EOF) this._err(_8.eofInTag), this._emitEOFToken();else this.currentToken.tagName += _0(A);
    }
    ["RCDATA_LESS_THAN_SIGN_STATE"](A) {
      if (A === k1.SOLIDUS) this.tempBuff = [], this.state = "RCDATA_END_TAG_OPEN_STATE";else this._emitChars("<"), this._reconsumeInState("RCDATA_STATE");
    }
    ["RCDATA_END_TAG_OPEN_STATE"](A) {
      if (Ns(A)) this._createEndTagToken(), this._reconsumeInState("RCDATA_END_TAG_NAME_STATE");else this._emitChars("</"), this._reconsumeInState("RCDATA_STATE");
    }
    ["RCDATA_END_TAG_NAME_STATE"](A) {
      if (AS(A)) this.currentToken.tagName += Vs(A), this.tempBuff.push(A);else if (X5A(A)) this.currentToken.tagName += _0(A), this.tempBuff.push(A);else {
        if (this.lastStartTagName === this.currentToken.tagName) {
          if (rH(A)) {
            this.state = "BEFORE_ATTRIBUTE_NAME_STATE";
            return;
          }
          if (A === k1.SOLIDUS) {
            this.state = "SELF_CLOSING_START_TAG_STATE";
            return;
          }
          if (A === k1.GREATER_THAN_SIGN) {
            this.state = "DATA_STATE", this._emitCurrentToken();
            return;
          }
        }
        this._emitChars("</"), this._emitSeveralCodePoints(this.tempBuff), this._reconsumeInState("RCDATA_STATE");
      }
    }
    ["RAWTEXT_LESS_THAN_SIGN_STATE"](A) {
      if (A === k1.SOLIDUS) this.tempBuff = [], this.state = "RAWTEXT_END_TAG_OPEN_STATE";else this._emitChars("<"), this._reconsumeInState("RAWTEXT_STATE");
    }
    ["RAWTEXT_END_TAG_OPEN_STATE"](A) {
      if (Ns(A)) this._createEndTagToken(), this._reconsumeInState("RAWTEXT_END_TAG_NAME_STATE");else this._emitChars("</"), this._reconsumeInState("RAWTEXT_STATE");
    }
    ["RAWTEXT_END_TAG_NAME_STATE"](A) {
      if (AS(A)) this.currentToken.tagName += Vs(A), this.tempBuff.push(A);else if (X5A(A)) this.currentToken.tagName += _0(A), this.tempBuff.push(A);else {
        if (this.lastStartTagName === this.currentToken.tagName) {
          if (rH(A)) {
            this.state = "BEFORE_ATTRIBUTE_NAME_STATE";
            return;
          }
          if (A === k1.SOLIDUS) {
            this.state = "SELF_CLOSING_START_TAG_STATE";
            return;
          }
          if (A === k1.GREATER_THAN_SIGN) {
            this._emitCurrentToken(), this.state = "DATA_STATE";
            return;
          }
        }
        this._emitChars("</"), this._emitSeveralCodePoints(this.tempBuff), this._reconsumeInState("RAWTEXT_STATE");
      }
    }
    ["SCRIPT_DATA_LESS_THAN_SIGN_STATE"](A) {
      if (A === k1.SOLIDUS) this.tempBuff = [], this.state = "SCRIPT_DATA_END_TAG_OPEN_STATE";else if (A === k1.EXCLAMATION_MARK) this.state = "SCRIPT_DATA_ESCAPE_START_STATE", this._emitChars("<!");else this._emitChars("<"), this._reconsumeInState("SCRIPT_DATA_STATE");
    }
    ["SCRIPT_DATA_END_TAG_OPEN_STATE"](A) {
      if (Ns(A)) this._createEndTagToken(), this._reconsumeInState("SCRIPT_DATA_END_TAG_NAME_STATE");else this._emitChars("</"), this._reconsumeInState("SCRIPT_DATA_STATE");
    }
    ["SCRIPT_DATA_END_TAG_NAME_STATE"](A) {
      if (AS(A)) this.currentToken.tagName += Vs(A), this.tempBuff.push(A);else if (X5A(A)) this.currentToken.tagName += _0(A), this.tempBuff.push(A);else {
        if (this.lastStartTagName === this.currentToken.tagName) {
          if (rH(A)) {
            this.state = "BEFORE_ATTRIBUTE_NAME_STATE";
            return;
          } else if (A === k1.SOLIDUS) {
            this.state = "SELF_CLOSING_START_TAG_STATE";
            return;
          } else if (A === k1.GREATER_THAN_SIGN) {
            this._emitCurrentToken(), this.state = "DATA_STATE";
            return;
          }
        }
        this._emitChars("</"), this._emitSeveralCodePoints(this.tempBuff), this._reconsumeInState("SCRIPT_DATA_STATE");
      }
    }
    ["SCRIPT_DATA_ESCAPE_START_STATE"](A) {
      if (A === k1.HYPHEN_MINUS) this.state = "SCRIPT_DATA_ESCAPE_START_DASH_STATE", this._emitChars("-");else this._reconsumeInState("SCRIPT_DATA_STATE");
    }
    ["SCRIPT_DATA_ESCAPE_START_DASH_STATE"](A) {
      if (A === k1.HYPHEN_MINUS) this.state = "SCRIPT_DATA_ESCAPED_DASH_DASH_STATE", this._emitChars("-");else this._reconsumeInState("SCRIPT_DATA_STATE");
    }
    ["SCRIPT_DATA_ESCAPED_STATE"](A) {
      if (A === k1.HYPHEN_MINUS) this.state = "SCRIPT_DATA_ESCAPED_DASH_STATE", this._emitChars("-");else if (A === k1.LESS_THAN_SIGN) this.state = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE";else if (A === k1.NULL) this._err(_8.unexpectedNullCharacter), this._emitChars(ez.REPLACEMENT_CHARACTER);else if (A === k1.EOF) this._err(_8.eofInScriptHtmlCommentLikeText), this._emitEOFToken();else this._emitCodePoint(A);
    }
    ["SCRIPT_DATA_ESCAPED_DASH_STATE"](A) {
      if (A === k1.HYPHEN_MINUS) this.state = "SCRIPT_DATA_ESCAPED_DASH_DASH_STATE", this._emitChars("-");else if (A === k1.LESS_THAN_SIGN) this.state = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE";else if (A === k1.NULL) this._err(_8.unexpectedNullCharacter), this.state = "SCRIPT_DATA_ESCAPED_STATE", this._emitChars(ez.REPLACEMENT_CHARACTER);else if (A === k1.EOF) this._err(_8.eofInScriptHtmlCommentLikeText), this._emitEOFToken();else this.state = "SCRIPT_DATA_ESCAPED_STATE", this._emitCodePoint(A);
    }
    ["SCRIPT_DATA_ESCAPED_DASH_DASH_STATE"](A) {
      if (A === k1.HYPHEN_MINUS) this._emitChars("-");else if (A === k1.LESS_THAN_SIGN) this.state = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE";else if (A === k1.GREATER_THAN_SIGN) this.state = "SCRIPT_DATA_STATE", this._emitChars(">");else if (A === k1.NULL) this._err(_8.unexpectedNullCharacter), this.state = "SCRIPT_DATA_ESCAPED_STATE", this._emitChars(ez.REPLACEMENT_CHARACTER);else if (A === k1.EOF) this._err(_8.eofInScriptHtmlCommentLikeText), this._emitEOFToken();else this.state = "SCRIPT_DATA_ESCAPED_STATE", this._emitCodePoint(A);
    }
    ["SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE"](A) {
      if (A === k1.SOLIDUS) this.tempBuff = [], this.state = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE";else if (Ns(A)) this.tempBuff = [], this._emitChars("<"), this._reconsumeInState("SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE");else this._emitChars("<"), this._reconsumeInState("SCRIPT_DATA_ESCAPED_STATE");
    }
    ["SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE"](A) {
      if (Ns(A)) this._createEndTagToken(), this._reconsumeInState("SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE");else this._emitChars("</"), this._reconsumeInState("SCRIPT_DATA_ESCAPED_STATE");
    }
    ["SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE"](A) {
      if (AS(A)) this.currentToken.tagName += Vs(A), this.tempBuff.push(A);else if (X5A(A)) this.currentToken.tagName += _0(A), this.tempBuff.push(A);else {
        if (this.lastStartTagName === this.currentToken.tagName) {
          if (rH(A)) {
            this.state = "BEFORE_ATTRIBUTE_NAME_STATE";
            return;
          }
          if (A === k1.SOLIDUS) {
            this.state = "SELF_CLOSING_START_TAG_STATE";
            return;
          }
          if (A === k1.GREATER_THAN_SIGN) {
            this._emitCurrentToken(), this.state = "DATA_STATE";
            return;
          }
        }
        this._emitChars("</"), this._emitSeveralCodePoints(this.tempBuff), this._reconsumeInState("SCRIPT_DATA_ESCAPED_STATE");
      }
    }
    ["SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE"](A) {
      if (rH(A) || A === k1.SOLIDUS || A === k1.GREATER_THAN_SIGN) this.state = this._isTempBufferEqualToScriptString() ? "SCRIPT_DATA_DOUBLE_ESCAPED_STATE" : "SCRIPT_DATA_ESCAPED_STATE", this._emitCodePoint(A);else if (AS(A)) this.tempBuff.push(eG1(A)), this._emitCodePoint(A);else if (X5A(A)) this.tempBuff.push(A), this._emitCodePoint(A);else this._reconsumeInState("SCRIPT_DATA_ESCAPED_STATE");
    }
    ["SCRIPT_DATA_DOUBLE_ESCAPED_STATE"](A) {
      if (A === k1.HYPHEN_MINUS) this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE", this._emitChars("-");else if (A === k1.LESS_THAN_SIGN) this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE", this._emitChars("<");else if (A === k1.NULL) this._err(_8.unexpectedNullCharacter), this._emitChars(ez.REPLACEMENT_CHARACTER);else if (A === k1.EOF) this._err(_8.eofInScriptHtmlCommentLikeText), this._emitEOFToken();else this._emitCodePoint(A);
    }
    ["SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE"](A) {
      if (A === k1.HYPHEN_MINUS) this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE", this._emitChars("-");else if (A === k1.LESS_THAN_SIGN) this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE", this._emitChars("<");else if (A === k1.NULL) this._err(_8.unexpectedNullCharacter), this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_STATE", this._emitChars(ez.REPLACEMENT_CHARACTER);else if (A === k1.EOF) this._err(_8.eofInScriptHtmlCommentLikeText), this._emitEOFToken();else this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_STATE", this._emitCodePoint(A);
    }
    ["SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE"](A) {
      if (A === k1.HYPHEN_MINUS) this._emitChars("-");else if (A === k1.LESS_THAN_SIGN) this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE", this._emitChars("<");else if (A === k1.GREATER_THAN_SIGN) this.state = "SCRIPT_DATA_STATE", this._emitChars(">");else if (A === k1.NULL) this._err(_8.unexpectedNullCharacter), this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_STATE", this._emitChars(ez.REPLACEMENT_CHARACTER);else if (A === k1.EOF) this._err(_8.eofInScriptHtmlCommentLikeText), this._emitEOFToken();else this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_STATE", this._emitCodePoint(A);
    }
    ["SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE"](A) {
      if (A === k1.SOLIDUS) this.tempBuff = [], this.state = "SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE", this._emitChars("/");else this._reconsumeInState("SCRIPT_DATA_DOUBLE_ESCAPED_STATE");
    }
    ["SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE"](A) {
      if (rH(A) || A === k1.SOLIDUS || A === k1.GREATER_THAN_SIGN) this.state = this._isTempBufferEqualToScriptString() ? "SCRIPT_DATA_ESCAPED_STATE" : "SCRIPT_DATA_DOUBLE_ESCAPED_STATE", this._emitCodePoint(A);else if (AS(A)) this.tempBuff.push(eG1(A)), this._emitCodePoint(A);else if (X5A(A)) this.tempBuff.push(A), this._emitCodePoint(A);else this._reconsumeInState("SCRIPT_DATA_DOUBLE_ESCAPED_STATE");
    }
    ["BEFORE_ATTRIBUTE_NAME_STATE"](A) {
      if (rH(A)) return;
      if (A === k1.SOLIDUS || A === k1.GREATER_THAN_SIGN || A === k1.EOF) this._reconsumeInState("AFTER_ATTRIBUTE_NAME_STATE");else if (A === k1.EQUALS_SIGN) this._err(_8.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = "ATTRIBUTE_NAME_STATE";else this._createAttr(""), this._reconsumeInState("ATTRIBUTE_NAME_STATE");
    }
    ["ATTRIBUTE_NAME_STATE"](A) {
      if (rH(A) || A === k1.SOLIDUS || A === k1.GREATER_THAN_SIGN || A === k1.EOF) this._leaveAttrName("AFTER_ATTRIBUTE_NAME_STATE"), this._unconsume();else if (A === k1.EQUALS_SIGN) this._leaveAttrName("BEFORE_ATTRIBUTE_VALUE_STATE");else if (AS(A)) this.currentAttr.name += Vs(A);else if (A === k1.QUOTATION_MARK || A === k1.APOSTROPHE || A === k1.LESS_THAN_SIGN) this._err(_8.unexpectedCharacterInAttributeName), this.currentAttr.name += _0(A);else if (A === k1.NULL) this._err(_8.unexpectedNullCharacter), this.currentAttr.name += ez.REPLACEMENT_CHARACTER;else this.currentAttr.name += _0(A);
    }
    ["AFTER_ATTRIBUTE_NAME_STATE"](A) {
      if (rH(A)) return;
      if (A === k1.SOLIDUS) this.state = "SELF_CLOSING_START_TAG_STATE";else if (A === k1.EQUALS_SIGN) this.state = "BEFORE_ATTRIBUTE_VALUE_STATE";else if (A === k1.GREATER_THAN_SIGN) this.state = "DATA_STATE", this._emitCurrentToken();else if (A === k1.EOF) this._err(_8.eofInTag), this._emitEOFToken();else this._createAttr(""), this._reconsumeInState("ATTRIBUTE_NAME_STATE");
    }
    ["BEFORE_ATTRIBUTE_VALUE_STATE"](A) {
      if (rH(A)) return;
      if (A === k1.QUOTATION_MARK) this.state = "ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE";else if (A === k1.APOSTROPHE) this.state = "ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE";else if (A === k1.GREATER_THAN_SIGN) this._err(_8.missingAttributeValue), this.state = "DATA_STATE", this._emitCurrentToken();else this._reconsumeInState("ATTRIBUTE_VALUE_UNQUOTED_STATE");
    }
    ["ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE"](A) {
      if (A === k1.QUOTATION_MARK) this.state = "AFTER_ATTRIBUTE_VALUE_QUOTED_STATE";else if (A === k1.AMPERSAND) this.returnState = "ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE", this.state = "CHARACTER_REFERENCE_STATE";else if (A === k1.NULL) this._err(_8.unexpectedNullCharacter), this.currentAttr.value += ez.REPLACEMENT_CHARACTER;else if (A === k1.EOF) this._err(_8.eofInTag), this._emitEOFToken();else this.currentAttr.value += _0(A);
    }
    ["ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE"](A) {
      if (A === k1.APOSTROPHE) this.state = "AFTER_ATTRIBUTE_VALUE_QUOTED_STATE";else if (A === k1.AMPERSAND) this.returnState = "ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE", this.state = "CHARACTER_REFERENCE_STATE";else if (A === k1.NULL) this._err(_8.unexpectedNullCharacter), this.currentAttr.value += ez.REPLACEMENT_CHARACTER;else if (A === k1.EOF) this._err(_8.eofInTag), this._emitEOFToken();else this.currentAttr.value += _0(A);
    }
    ["ATTRIBUTE_VALUE_UNQUOTED_STATE"](A) {
      if (rH(A)) this._leaveAttrValue("BEFORE_ATTRIBUTE_NAME_STATE");else if (A === k1.AMPERSAND) this.returnState = "ATTRIBUTE_VALUE_UNQUOTED_STATE", this.state = "CHARACTER_REFERENCE_STATE";else if (A === k1.GREATER_THAN_SIGN) this._leaveAttrValue("DATA_STATE"), this._emitCurrentToken();else if (A === k1.NULL) this._err(_8.unexpectedNullCharacter), this.currentAttr.value += ez.REPLACEMENT_CHARACTER;else if (A === k1.QUOTATION_MARK || A === k1.APOSTROPHE || A === k1.LESS_THAN_SIGN || A === k1.EQUALS_SIGN || A === k1.GRAVE_ACCENT) this._err(_8.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += _0(A);else if (A === k1.EOF) this._err(_8.eofInTag), this._emitEOFToken();else this.currentAttr.value += _0(A);
    }
    ["AFTER_ATTRIBUTE_VALUE_QUOTED_STATE"](A) {
      if (rH(A)) this._leaveAttrValue("BEFORE_ATTRIBUTE_NAME_STATE");else if (A === k1.SOLIDUS) this._leaveAttrValue("SELF_CLOSING_START_TAG_STATE");else if (A === k1.GREATER_THAN_SIGN) this._leaveAttrValue("DATA_STATE"), this._emitCurrentToken();else if (A === k1.EOF) this._err(_8.eofInTag), this._emitEOFToken();else this._err(_8.missingWhitespaceBetweenAttributes), this._reconsumeInState("BEFORE_ATTRIBUTE_NAME_STATE");
    }
    ["SELF_CLOSING_START_TAG_STATE"](A) {
      if (A === k1.GREATER_THAN_SIGN) this.currentToken.selfClosing = !0, this.state = "DATA_STATE", this._emitCurrentToken();else if (A === k1.EOF) this._err(_8.eofInTag), this._emitEOFToken();else this._err(_8.unexpectedSolidusInTag), this._reconsumeInState("BEFORE_ATTRIBUTE_NAME_STATE");
    }
    ["BOGUS_COMMENT_STATE"](A) {
      if (A === k1.GREATER_THAN_SIGN) this.state = "DATA_STATE", this._emitCurrentToken();else if (A === k1.EOF) this._emitCurrentToken(), this._emitEOFToken();else if (A === k1.NULL) this._err(_8.unexpectedNullCharacter), this.currentToken.data += ez.REPLACEMENT_CHARACTER;else this.currentToken.data += _0(A);
    }
    ["MARKUP_DECLARATION_OPEN_STATE"](A) {
      if (this._consumeSequenceIfMatch(O5A.DASH_DASH_STRING, A, !0)) this._createCommentToken(), this.state = "COMMENT_START_STATE";else if (this._consumeSequenceIfMatch(O5A.DOCTYPE_STRING, A, !1)) this.state = "DOCTYPE_STATE";else if (this._consumeSequenceIfMatch(O5A.CDATA_START_STRING, A, !0)) {
        if (this.allowCDATA) this.state = "CDATA_SECTION_STATE";else this._err(_8.cdataInHtmlContent), this._createCommentToken(), this.currentToken.data = "[CDATA[", this.state = "BOGUS_COMMENT_STATE";
      } else if (!this._ensureHibernation()) this._err(_8.incorrectlyOpenedComment), this._createCommentToken(), this._reconsumeInState("BOGUS_COMMENT_STATE");
    }
    ["COMMENT_START_STATE"](A) {
      if (A === k1.HYPHEN_MINUS) this.state = "COMMENT_START_DASH_STATE";else if (A === k1.GREATER_THAN_SIGN) this._err(_8.abruptClosingOfEmptyComment), this.state = "DATA_STATE", this._emitCurrentToken();else this._reconsumeInState("COMMENT_STATE");
    }
    ["COMMENT_START_DASH_STATE"](A) {
      if (A === k1.HYPHEN_MINUS) this.state = "COMMENT_END_STATE";else if (A === k1.GREATER_THAN_SIGN) this._err(_8.abruptClosingOfEmptyComment), this.state = "DATA_STATE", this._emitCurrentToken();else if (A === k1.EOF) this._err(_8.eofInComment), this._emitCurrentToken(), this._emitEOFToken();else this.currentToken.data += "-", this._reconsumeInState("COMMENT_STATE");
    }
    ["COMMENT_STATE"](A) {
      if (A === k1.HYPHEN_MINUS) this.state = "COMMENT_END_DASH_STATE";else if (A === k1.LESS_THAN_SIGN) this.currentToken.data += "<", this.state = "COMMENT_LESS_THAN_SIGN_STATE";else if (A === k1.NULL) this._err(_8.unexpectedNullCharacter), this.currentToken.data += ez.REPLACEMENT_CHARACTER;else if (A === k1.EOF) this._err(_8.eofInComment), this._emitCurrentToken(), this._emitEOFToken();else this.currentToken.data += _0(A);
    }
    ["COMMENT_LESS_THAN_SIGN_STATE"](A) {
      if (A === k1.EXCLAMATION_MARK) this.currentToken.data += "!", this.state = "COMMENT_LESS_THAN_SIGN_BANG_STATE";else if (A === k1.LESS_THAN_SIGN) this.currentToken.data += "!";else this._reconsumeInState("COMMENT_STATE");
    }
    ["COMMENT_LESS_THAN_SIGN_BANG_STATE"](A) {
      if (A === k1.HYPHEN_MINUS) this.state = "COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE";else this._reconsumeInState("COMMENT_STATE");
    }
    ["COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE"](A) {
      if (A === k1.HYPHEN_MINUS) this.state = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE";else this._reconsumeInState("COMMENT_END_DASH_STATE");
    }
    ["COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE"](A) {
      if (A !== k1.GREATER_THAN_SIGN && A !== k1.EOF) this._err(_8.nestedComment);
      this._reconsumeInState("COMMENT_END_STATE");
    }
    ["COMMENT_END_DASH_STATE"](A) {
      if (A === k1.HYPHEN_MINUS) this.state = "COMMENT_END_STATE";else if (A === k1.EOF) this._err(_8.eofInComment), this._emitCurrentToken(), this._emitEOFToken();else this.currentToken.data += "-", this._reconsumeInState("COMMENT_STATE");
    }
    ["COMMENT_END_STATE"](A) {
      if (A === k1.GREATER_THAN_SIGN) this.state = "DATA_STATE", this._emitCurrentToken();else if (A === k1.EXCLAMATION_MARK) this.state = "COMMENT_END_BANG_STATE";else if (A === k1.HYPHEN_MINUS) this.currentToken.data += "-";else if (A === k1.EOF) this._err(_8.eofInComment), this._emitCurrentToken(), this._emitEOFToken();else this.currentToken.data += "--", this._reconsumeInState("COMMENT_STATE");
    }
    ["COMMENT_END_BANG_STATE"](A) {
      if (A === k1.HYPHEN_MINUS) this.currentToken.data += "--!", this.state = "COMMENT_END_DASH_STATE";else if (A === k1.GREATER_THAN_SIGN) this._err(_8.incorrectlyClosedComment), this.state = "DATA_STATE", this._emitCurrentToken();else if (A === k1.EOF) this._err(_8.eofInComment), this._emitCurrentToken(), this._emitEOFToken();else this.currentToken.data += "--!", this._reconsumeInState("COMMENT_STATE");
    }
    ["DOCTYPE_STATE"](A) {
      if (rH(A)) this.state = "BEFORE_DOCTYPE_NAME_STATE";else if (A === k1.GREATER_THAN_SIGN) this._reconsumeInState("BEFORE_DOCTYPE_NAME_STATE");else if (A === k1.EOF) this._err(_8.eofInDoctype), this._createDoctypeToken(null), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();else this._err(_8.missingWhitespaceBeforeDoctypeName), this._reconsumeInState("BEFORE_DOCTYPE_NAME_STATE");
    }
    ["BEFORE_DOCTYPE_NAME_STATE"](A) {
      if (rH(A)) return;
      if (AS(A)) this._createDoctypeToken(Vs(A)), this.state = "DOCTYPE_NAME_STATE";else if (A === k1.NULL) this._err(_8.unexpectedNullCharacter), this._createDoctypeToken(ez.REPLACEMENT_CHARACTER), this.state = "DOCTYPE_NAME_STATE";else if (A === k1.GREATER_THAN_SIGN) this._err(_8.missingDoctypeName), this._createDoctypeToken(null), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this.state = "DATA_STATE";else if (A === k1.EOF) this._err(_8.eofInDoctype), this._createDoctypeToken(null), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();else this._createDoctypeToken(_0(A)), this.state = "DOCTYPE_NAME_STATE";
    }
    ["DOCTYPE_NAME_STATE"](A) {
      if (rH(A)) this.state = "AFTER_DOCTYPE_NAME_STATE";else if (A === k1.GREATER_THAN_SIGN) this.state = "DATA_STATE", this._emitCurrentToken();else if (AS(A)) this.currentToken.name += Vs(A);else if (A === k1.NULL) this._err(_8.unexpectedNullCharacter), this.currentToken.name += ez.REPLACEMENT_CHARACTER;else if (A === k1.EOF) this._err(_8.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();else this.currentToken.name += _0(A);
    }
    ["AFTER_DOCTYPE_NAME_STATE"](A) {
      if (rH(A)) return;
      if (A === k1.GREATER_THAN_SIGN) this.state = "DATA_STATE", this._emitCurrentToken();else if (A === k1.EOF) this._err(_8.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();else if (this._consumeSequenceIfMatch(O5A.PUBLIC_STRING, A, !1)) this.state = "AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE";else if (this._consumeSequenceIfMatch(O5A.SYSTEM_STRING, A, !1)) this.state = "AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE";else if (!this._ensureHibernation()) this._err(_8.invalidCharacterSequenceAfterDoctypeName), this.currentToken.forceQuirks = !0, this._reconsumeInState("BOGUS_DOCTYPE_STATE");
    }
    ["AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE"](A) {
      if (rH(A)) this.state = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE";else if (A === k1.QUOTATION_MARK) this._err(_8.missingWhitespaceAfterDoctypePublicKeyword), this.currentToken.publicId = "", this.state = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE";else if (A === k1.APOSTROPHE) this._err(_8.missingWhitespaceAfterDoctypePublicKeyword), this.currentToken.publicId = "", this.state = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE";else if (A === k1.GREATER_THAN_SIGN) this._err(_8.missingDoctypePublicIdentifier), this.currentToken.forceQuirks = !0, this.state = "DATA_STATE", this._emitCurrentToken();else if (A === k1.EOF) this._err(_8.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();else this._err(_8.missingQuoteBeforeDoctypePublicIdentifier), this.currentToken.forceQuirks = !0, this._reconsumeInState("BOGUS_DOCTYPE_STATE");
    }
    ["BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE"](A) {
      if (rH(A)) return;
      if (A === k1.QUOTATION_MARK) this.currentToken.publicId = "", this.state = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE";else if (A === k1.APOSTROPHE) this.currentToken.publicId = "", this.state = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE";else if (A === k1.GREATER_THAN_SIGN) this._err(_8.missingDoctypePublicIdentifier), this.currentToken.forceQuirks = !0, this.state = "DATA_STATE", this._emitCurrentToken();else if (A === k1.EOF) this._err(_8.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();else this._err(_8.missingQuoteBeforeDoctypePublicIdentifier), this.currentToken.forceQuirks = !0, this._reconsumeInState("BOGUS_DOCTYPE_STATE");
    }
    ["DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE"](A) {
      if (A === k1.QUOTATION_MARK) this.state = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE";else if (A === k1.NULL) this._err(_8.unexpectedNullCharacter), this.currentToken.publicId += ez.REPLACEMENT_CHARACTER;else if (A === k1.GREATER_THAN_SIGN) this._err(_8.abruptDoctypePublicIdentifier), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this.state = "DATA_STATE";else if (A === k1.EOF) this._err(_8.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();else this.currentToken.publicId += _0(A);
    }
    ["DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE"](A) {
      if (A === k1.APOSTROPHE) this.state = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE";else if (A === k1.NULL) this._err(_8.unexpectedNullCharacter), this.currentToken.publicId += ez.REPLACEMENT_CHARACTER;else if (A === k1.GREATER_THAN_SIGN) this._err(_8.abruptDoctypePublicIdentifier), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this.state = "DATA_STATE";else if (A === k1.EOF) this._err(_8.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();else this.currentToken.publicId += _0(A);
    }
    ["AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE"](A) {
      if (rH(A)) this.state = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE";else if (A === k1.GREATER_THAN_SIGN) this.state = "DATA_STATE", this._emitCurrentToken();else if (A === k1.QUOTATION_MARK) this._err(_8.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), this.currentToken.systemId = "", this.state = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE";else if (A === k1.APOSTROPHE) this._err(_8.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), this.currentToken.systemId = "", this.state = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE";else if (A === k1.EOF) this._err(_8.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();else this._err(_8.missingQuoteBeforeDoctypeSystemIdentifier), this.currentToken.forceQuirks = !0, this._reconsumeInState("BOGUS_DOCTYPE_STATE");
    }
    ["BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE"](A) {
      if (rH(A)) return;
      if (A === k1.GREATER_THAN_SIGN) this._emitCurrentToken(), this.state = "DATA_STATE";else if (A === k1.QUOTATION_MARK) this.currentToken.systemId = "", this.state = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE";else if (A === k1.APOSTROPHE) this.currentToken.systemId = "", this.state = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE";else if (A === k1.EOF) this._err(_8.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();else this._err(_8.missingQuoteBeforeDoctypeSystemIdentifier), this.currentToken.forceQuirks = !0, this._reconsumeInState("BOGUS_DOCTYPE_STATE");
    }
    ["AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE"](A) {
      if (rH(A)) this.state = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE";else if (A === k1.QUOTATION_MARK) this._err(_8.missingWhitespaceAfterDoctypeSystemKeyword), this.currentToken.systemId = "", this.state = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE";else if (A === k1.APOSTROPHE) this._err(_8.missingWhitespaceAfterDoctypeSystemKeyword), this.currentToken.systemId = "", this.state = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE";else if (A === k1.GREATER_THAN_SIGN) this._err(_8.missingDoctypeSystemIdentifier), this.currentToken.forceQuirks = !0, this.state = "DATA_STATE", this._emitCurrentToken();else if (A === k1.EOF) this._err(_8.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();else this._err(_8.missingQuoteBeforeDoctypeSystemIdentifier), this.currentToken.forceQuirks = !0, this._reconsumeInState("BOGUS_DOCTYPE_STATE");
    }
    ["BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE"](A) {
      if (rH(A)) return;
      if (A === k1.QUOTATION_MARK) this.currentToken.systemId = "", this.state = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE";else if (A === k1.APOSTROPHE) this.currentToken.systemId = "", this.state = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE";else if (A === k1.GREATER_THAN_SIGN) this._err(_8.missingDoctypeSystemIdentifier), this.currentToken.forceQuirks = !0, this.state = "DATA_STATE", this._emitCurrentToken();else if (A === k1.EOF) this._err(_8.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();else this._err(_8.missingQuoteBeforeDoctypeSystemIdentifier), this.currentToken.forceQuirks = !0, this._reconsumeInState("BOGUS_DOCTYPE_STATE");
    }
    ["DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE"](A) {
      if (A === k1.QUOTATION_MARK) this.state = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE";else if (A === k1.NULL) this._err(_8.unexpectedNullCharacter), this.currentToken.systemId += ez.REPLACEMENT_CHARACTER;else if (A === k1.GREATER_THAN_SIGN) this._err(_8.abruptDoctypeSystemIdentifier), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this.state = "DATA_STATE";else if (A === k1.EOF) this._err(_8.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();else this.currentToken.systemId += _0(A);
    }
    ["DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE"](A) {
      if (A === k1.APOSTROPHE) this.state = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE";else if (A === k1.NULL) this._err(_8.unexpectedNullCharacter), this.currentToken.systemId += ez.REPLACEMENT_CHARACTER;else if (A === k1.GREATER_THAN_SIGN) this._err(_8.abruptDoctypeSystemIdentifier), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this.state = "DATA_STATE";else if (A === k1.EOF) this._err(_8.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();else this.currentToken.systemId += _0(A);
    }
    ["AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE"](A) {
      if (rH(A)) return;
      if (A === k1.GREATER_THAN_SIGN) this._emitCurrentToken(), this.state = "DATA_STATE";else if (A === k1.EOF) this._err(_8.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();else this._err(_8.unexpectedCharacterAfterDoctypeSystemIdentifier), this._reconsumeInState("BOGUS_DOCTYPE_STATE");
    }
    ["BOGUS_DOCTYPE_STATE"](A) {
      if (A === k1.GREATER_THAN_SIGN) this._emitCurrentToken(), this.state = "DATA_STATE";else if (A === k1.NULL) this._err(_8.unexpectedNullCharacter);else if (A === k1.EOF) this._emitCurrentToken(), this._emitEOFToken();
    }
    ["CDATA_SECTION_STATE"](A) {
      if (A === k1.RIGHT_SQUARE_BRACKET) this.state = "CDATA_SECTION_BRACKET_STATE";else if (A === k1.EOF) this._err(_8.eofInCdata), this._emitEOFToken();else this._emitCodePoint(A);
    }
    ["CDATA_SECTION_BRACKET_STATE"](A) {
      if (A === k1.RIGHT_SQUARE_BRACKET) this.state = "CDATA_SECTION_END_STATE";else this._emitChars("]"), this._reconsumeInState("CDATA_SECTION_STATE");
    }
    ["CDATA_SECTION_END_STATE"](A) {
      if (A === k1.GREATER_THAN_SIGN) this.state = "DATA_STATE";else if (A === k1.RIGHT_SQUARE_BRACKET) this._emitChars("]");else this._emitChars("]]"), this._reconsumeInState("CDATA_SECTION_STATE");
    }
    ["CHARACTER_REFERENCE_STATE"](A) {
      if (this.tempBuff = [k1.AMPERSAND], A === k1.NUMBER_SIGN) this.tempBuff.push(A), this.state = "NUMERIC_CHARACTER_REFERENCE_STATE";else if (Lf6(A)) this._reconsumeInState("NAMED_CHARACTER_REFERENCE_STATE");else this._flushCodePointsConsumedAsCharacterReference(), this._reconsumeInState(this.returnState);
    }
    ["NAMED_CHARACTER_REFERENCE_STATE"](A) {
      let K = this._matchNamedCharacterReference(A);
      if (this._ensureHibernation()) this.tempBuff = [k1.AMPERSAND];else if (K) {
        let q = this.tempBuff[this.tempBuff.length - 1] === k1.SEMICOLON;
        if (!this._isCharacterReferenceAttributeQuirk(q)) {
          if (!q) this._errOnNextCodePoint(_8.missingSemicolonAfterCharacterReference);
          this.tempBuff = K;
        }
        this._flushCodePointsConsumedAsCharacterReference(), this.state = this.returnState;
      } else this._flushCodePointsConsumedAsCharacterReference(), this.state = "AMBIGUOS_AMPERSAND_STATE";
    }
    ["AMBIGUOS_AMPERSAND_STATE"](A) {
      if (Lf6(A)) {
        if (this._isCharacterReferenceInAttribute()) this.currentAttr.value += _0(A);else this._emitCodePoint(A);
      } else {
        if (A === k1.SEMICOLON) this._err(_8.unknownNamedCharacterReference);
        this._reconsumeInState(this.returnState);
      }
    }
    ["NUMERIC_CHARACTER_REFERENCE_STATE"](A) {
      if (this.charRefCode = 0, A === k1.LATIN_SMALL_X || A === k1.LATIN_CAPITAL_X) this.tempBuff.push(A), this.state = "HEXADEMICAL_CHARACTER_REFERENCE_START_STATE";else this._reconsumeInState("DECIMAL_CHARACTER_REFERENCE_START_STATE");
    }
    ["HEXADEMICAL_CHARACTER_REFERENCE_START_STATE"](A) {
      if (IgY(A)) this._reconsumeInState("HEXADEMICAL_CHARACTER_REFERENCE_STATE");else this._err(_8.absenceOfDigitsInNumericCharacterReference), this._flushCodePointsConsumedAsCharacterReference(), this._reconsumeInState(this.returnState);
    }
    ["DECIMAL_CHARACTER_REFERENCE_START_STATE"](A) {
      if (umA(A)) this._reconsumeInState("DECIMAL_CHARACTER_REFERENCE_STATE");else this._err(_8.absenceOfDigitsInNumericCharacterReference), this._flushCodePointsConsumedAsCharacterReference(), this._reconsumeInState(this.returnState);
    }
    ["HEXADEMICAL_CHARACTER_REFERENCE_STATE"](A) {
      if (XE7(A)) this.charRefCode = this.charRefCode * 16 + A - 55;else if ($E7(A)) this.charRefCode = this.charRefCode * 16 + A - 87;else if (umA(A)) this.charRefCode = this.charRefCode * 16 + A - 48;else if (A === k1.SEMICOLON) this.state = "NUMERIC_CHARACTER_REFERENCE_END_STATE";else this._err(_8.missingSemicolonAfterCharacterReference), this._reconsumeInState("NUMERIC_CHARACTER_REFERENCE_END_STATE");
    }
    ["DECIMAL_CHARACTER_REFERENCE_STATE"](A) {
      if (umA(A)) this.charRefCode = this.charRefCode * 10 + A - 48;else if (A === k1.SEMICOLON) this.state = "NUMERIC_CHARACTER_REFERENCE_END_STATE";else this._err(_8.missingSemicolonAfterCharacterReference), this._reconsumeInState("NUMERIC_CHARACTER_REFERENCE_END_STATE");
    }
    ["NUMERIC_CHARACTER_REFERENCE_END_STATE"]() {
      if (this.charRefCode === k1.NULL) this._err(_8.nullCharacterReference), this.charRefCode = k1.REPLACEMENT_CHARACTER;else if (this.charRefCode > 1114111) this._err(_8.characterReferenceOutsideUnicodeRange), this.charRefCode = k1.REPLACEMENT_CHARACTER;else if (ez.isSurrogate(this.charRefCode)) this._err(_8.surrogateCharacterReference), this.charRefCode = k1.REPLACEMENT_CHARACTER;else if (ez.isUndefinedCodePoint(this.charRefCode)) this._err(_8.noncharacterCharacterReference);else if (ez.isControlCodePoint(this.charRefCode) || this.charRefCode === k1.CARRIAGE_RETURN) {
        this._err(_8.controlCharacterReference);
        let A = ygY[this.charRefCode];
        if (A) this.charRefCode = A;
      }
      this.tempBuff = [this.charRefCode], this._flushCodePointsConsumedAsCharacterReference(), this._reconsumeInState(this.returnState);
    }
  }
  $H.CHARACTER_TOKEN = "CHARACTER_TOKEN";
  $H.NULL_CHARACTER_TOKEN = "NULL_CHARACTER_TOKEN";
  $H.WHITESPACE_CHARACTER_TOKEN = "WHITESPACE_CHARACTER_TOKEN";
  $H.START_TAG_TOKEN = "START_TAG_TOKEN";
  $H.END_TAG_TOKEN = "END_TAG_TOKEN";
  $H.COMMENT_TOKEN = "COMMENT_TOKEN";
  $H.DOCTYPE_TOKEN = "DOCTYPE_TOKEN";
  $H.EOF_TOKEN = "EOF_TOKEN";
  $H.HIBERNATION_TOKEN = "HIBERNATION_TOKEN";
  $H.MODE = {
    DATA: "DATA_STATE",
    RCDATA: "RCDATA_STATE",
    RAWTEXT: "RAWTEXT_STATE",
    SCRIPT_DATA: "SCRIPT_DATA_STATE",
    PLAINTEXT: "PLAINTEXT_STATE"
  };
  $H.getTokenAttr = function (A, K) {
    for (let q = A.attrs.length - 1; q >= 0; q--) if (A.attrs[q].name === K) return A.attrs[q].value;
    return null;
  };
  _E7.exports = $H;
});

// Register to shared state
__$.BmA = BmA;
