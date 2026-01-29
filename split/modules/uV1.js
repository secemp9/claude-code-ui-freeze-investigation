// Module: uV1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uV1 = v((EtH, H3K) => {
  H3K.exports = xV1;
  var Af2 = 1,
    Kf2 = 3,
    qf2 = 4,
    Yf2 = 5,
    zf2 = 7,
    wf2 = 8,
    Hf2 = 9,
    Jf2 = 11,
    Of2 = 12,
    Xf2 = 13,
    $f2 = 14,
    _f2 = 15,
    Gf2 = 17,
    Zf2 = 18,
    Wf2 = 19,
    Df2 = 20,
    jf2 = 21,
    Mf2 = 22,
    Pf2 = 23,
    Vf2 = 24,
    ff2 = 25,
    Nf2 = [null, "INDEX_SIZE_ERR", null, "HIERARCHY_REQUEST_ERR", "WRONG_DOCUMENT_ERR", "INVALID_CHARACTER_ERR", null, "NO_MODIFICATION_ALLOWED_ERR", "NOT_FOUND_ERR", "NOT_SUPPORTED_ERR", "INUSE_ATTRIBUTE_ERR", "INVALID_STATE_ERR", "SYNTAX_ERR", "INVALID_MODIFICATION_ERR", "NAMESPACE_ERR", "INVALID_ACCESS_ERR", null, "TYPE_MISMATCH_ERR", "SECURITY_ERR", "NETWORK_ERR", "ABORT_ERR", "URL_MISMATCH_ERR", "QUOTA_EXCEEDED_ERR", "TIMEOUT_ERR", "INVALID_NODE_TYPE_ERR", "DATA_CLONE_ERR"],
    Tf2 = [null, "INDEX_SIZE_ERR (1): the index is not in the allowed range", null, "HIERARCHY_REQUEST_ERR (3): the operation would yield an incorrect nodes model", "WRONG_DOCUMENT_ERR (4): the object is in the wrong Document, a call to importNode is required", "INVALID_CHARACTER_ERR (5): the string contains invalid characters", null, "NO_MODIFICATION_ALLOWED_ERR (7): the object can not be modified", "NOT_FOUND_ERR (8): the object can not be found here", "NOT_SUPPORTED_ERR (9): this operation is not supported", "INUSE_ATTRIBUTE_ERR (10): setAttributeNode called on owned Attribute", "INVALID_STATE_ERR (11): the object is in an invalid state", "SYNTAX_ERR (12): the string did not match the expected pattern", "INVALID_MODIFICATION_ERR (13): the object can not be modified in this way", "NAMESPACE_ERR (14): the operation is not allowed by Namespaces in XML", "INVALID_ACCESS_ERR (15): the object does not support the operation or argument", null, "TYPE_MISMATCH_ERR (17): the type of the object does not match the expected type", "SECURITY_ERR (18): the operation is insecure", "NETWORK_ERR (19): a network error occurred", "ABORT_ERR (20): the user aborted an operation", "URL_MISMATCH_ERR (21): the given URL does not match another URL", "QUOTA_EXCEEDED_ERR (22): the quota has been exceeded", "TIMEOUT_ERR (23): a timeout occurred", "INVALID_NODE_TYPE_ERR (24): the supplied node is invalid or has an invalid ancestor for this operation", "DATA_CLONE_ERR (25): the object can not be cloned."],
    w3K = {
      INDEX_SIZE_ERR: Af2,
      DOMSTRING_SIZE_ERR: 2,
      HIERARCHY_REQUEST_ERR: Kf2,
      WRONG_DOCUMENT_ERR: qf2,
      INVALID_CHARACTER_ERR: Yf2,
      NO_DATA_ALLOWED_ERR: 6,
      NO_MODIFICATION_ALLOWED_ERR: zf2,
      NOT_FOUND_ERR: wf2,
      NOT_SUPPORTED_ERR: Hf2,
      INUSE_ATTRIBUTE_ERR: 10,
      INVALID_STATE_ERR: Jf2,
      SYNTAX_ERR: Of2,
      INVALID_MODIFICATION_ERR: Xf2,
      NAMESPACE_ERR: $f2,
      INVALID_ACCESS_ERR: _f2,
      VALIDATION_ERR: 16,
      TYPE_MISMATCH_ERR: Gf2,
      SECURITY_ERR: Zf2,
      NETWORK_ERR: Wf2,
      ABORT_ERR: Df2,
      URL_MISMATCH_ERR: jf2,
      QUOTA_EXCEEDED_ERR: Mf2,
      TIMEOUT_ERR: Pf2,
      INVALID_NODE_TYPE_ERR: Vf2,
      DATA_CLONE_ERR: ff2
    };
  function xV1(A) {
    Error.call(this), Error.captureStackTrace(this, this.constructor), this.code = A, this.message = Tf2[A], this.name = Nf2[A];
  }
  xV1.prototype.__proto__ = Error.prototype;
  for (DUA in w3K) bV1 = {
    value: w3K[DUA]
  }, Object.defineProperty(xV1, DUA, bV1), Object.defineProperty(xV1.prototype, DUA, bV1);
  var bV1, DUA;
});

// Register to shared state
__$.uV1 = uV1;
