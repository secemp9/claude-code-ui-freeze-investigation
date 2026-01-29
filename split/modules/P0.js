// Module: P0
// Dependencies: uV1, BV1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var P0 = v(Cf2 => {
  var M0 = __$.uV1(),
    jX = M0,
    kf2 = __$.BV1().isApiWritable;
  Cf2.NAMESPACE = {
    HTML: "http://www.w3.org/1999/xhtml",
    XML: "http://www.w3.org/XML/1998/namespace",
    XMLNS: "http://www.w3.org/2000/xmlns/",
    MATHML: "http://www.w3.org/1998/Math/MathML",
    SVG: "http://www.w3.org/2000/svg",
    XLINK: "http://www.w3.org/1999/xlink"
  };
  Cf2.IndexSizeError = function () {
    throw new M0(jX.INDEX_SIZE_ERR);
  };
  Cf2.HierarchyRequestError = function () {
    throw new M0(jX.HIERARCHY_REQUEST_ERR);
  };
  Cf2.WrongDocumentError = function () {
    throw new M0(jX.WRONG_DOCUMENT_ERR);
  };
  Cf2.InvalidCharacterError = function () {
    throw new M0(jX.INVALID_CHARACTER_ERR);
  };
  Cf2.NoModificationAllowedError = function () {
    throw new M0(jX.NO_MODIFICATION_ALLOWED_ERR);
  };
  Cf2.NotFoundError = function () {
    throw new M0(jX.NOT_FOUND_ERR);
  };
  Cf2.NotSupportedError = function () {
    throw new M0(jX.NOT_SUPPORTED_ERR);
  };
  Cf2.InvalidStateError = function () {
    throw new M0(jX.INVALID_STATE_ERR);
  };
  Cf2.SyntaxError = function () {
    throw new M0(jX.SYNTAX_ERR);
  };
  Cf2.InvalidModificationError = function () {
    throw new M0(jX.INVALID_MODIFICATION_ERR);
  };
  Cf2.NamespaceError = function () {
    throw new M0(jX.NAMESPACE_ERR);
  };
  Cf2.InvalidAccessError = function () {
    throw new M0(jX.INVALID_ACCESS_ERR);
  };
  Cf2.TypeMismatchError = function () {
    throw new M0(jX.TYPE_MISMATCH_ERR);
  };
  Cf2.SecurityError = function () {
    throw new M0(jX.SECURITY_ERR);
  };
  Cf2.NetworkError = function () {
    throw new M0(jX.NETWORK_ERR);
  };
  Cf2.AbortError = function () {
    throw new M0(jX.ABORT_ERR);
  };
  Cf2.UrlMismatchError = function () {
    throw new M0(jX.URL_MISMATCH_ERR);
  };
  Cf2.QuotaExceededError = function () {
    throw new M0(jX.QUOTA_EXCEEDED_ERR);
  };
  Cf2.TimeoutError = function () {
    throw new M0(jX.TIMEOUT_ERR);
  };
  Cf2.InvalidNodeTypeError = function () {
    throw new M0(jX.INVALID_NODE_TYPE_ERR);
  };
  Cf2.DataCloneError = function () {
    throw new M0(jX.DATA_CLONE_ERR);
  };
  Cf2.nyi = function () {
    throw Error("NotYetImplemented");
  };
  Cf2.shouldOverride = function () {
    throw Error("Abstract function; should be overriding in subclass.");
  };
  Cf2.assert = function (A, K) {
    if (!A) throw Error("Assertion failed: " + (K || "") + `
` + Error().stack);
  };
  Cf2.expose = function (A, K) {
    for (var q in A) Object.defineProperty(K.prototype, q, {
      value: A[q],
      writable: kf2
    });
  };
  Cf2.merge = function (A, K) {
    for (var q in K) A[q] = K[q];
  };
  Cf2.documentOrder = function (A, K) {
    return 3 - (A.compareDocumentPosition(K) & 6);
  };
  Cf2.toASCIILowerCase = function (A) {
    return A.replace(/[A-Z]+/g, function (K) {
      return K.toLowerCase();
    });
  };
  Cf2.toASCIIUpperCase = function (A) {
    return A.replace(/[a-z]+/g, function (K) {
      return K.toUpperCase();
    });
  };
});

// Register to shared state
__$.P0 = P0;
