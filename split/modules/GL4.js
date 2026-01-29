// Module: GL4
// Dependencies: RK, Q4A, P9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var GL4 = v($L4 => {
  Object.defineProperty($L4, "__esModule", {
    value: !0
  });
  $L4.envDetector = void 0;
  var N$9 = __$.RK(),
    T$9 = __$.Q4A(),
    OL4 = __$.P9();
  class XL4 {
    _MAX_LENGTH = 255;
    _COMMA_SEPARATOR = ",";
    _LABEL_KEY_VALUE_SPLITTER = "=";
    _ERROR_MESSAGE_INVALID_CHARS = "should be a ASCII string with a length greater than 0 and not exceed " + this._MAX_LENGTH + " characters.";
    _ERROR_MESSAGE_INVALID_VALUE = "should be a ASCII string with a length not exceed " + this._MAX_LENGTH + " characters.";
    detect(A) {
      let K = {},
        q = (0, OL4.getStringFromEnv)("OTEL_RESOURCE_ATTRIBUTES"),
        Y = (0, OL4.getStringFromEnv)("OTEL_SERVICE_NAME");
      if (q) try {
        let z = this._parseResourceAttributes(q);
        Object.assign(K, z);
      } catch (z) {
        N$9.diag.debug(`EnvDetector failed: ${z.message}`);
      }
      if (Y) K[T$9.ATTR_SERVICE_NAME] = Y;
      return {
        attributes: K
      };
    }
    _parseResourceAttributes(A) {
      if (!A) return {};
      let K = {},
        q = A.split(this._COMMA_SEPARATOR, -1);
      for (let Y of q) {
        let z = Y.split(this._LABEL_KEY_VALUE_SPLITTER, -1);
        if (z.length !== 2) continue;
        let [w, H] = z;
        if (w = w.trim(), H = H.trim().split(/^"|"$/).join(""), !this._isValidAndNotEmpty(w)) throw Error(`Attribute key ${this._ERROR_MESSAGE_INVALID_CHARS}`);
        if (!this._isValid(H)) throw Error(`Attribute value ${this._ERROR_MESSAGE_INVALID_VALUE}`);
        K[w] = decodeURIComponent(H);
      }
      return K;
    }
    _isValid(A) {
      return A.length <= this._MAX_LENGTH && this._isBaggageOctetString(A);
    }
    _isBaggageOctetString(A) {
      for (let K = 0; K < A.length; K++) {
        let q = A.charCodeAt(K);
        if (q < 33 || q === 44 || q === 59 || q === 92 || q > 126) return !1;
      }
      return !0;
    }
    _isValidAndNotEmpty(A) {
      return A.length > 0 && this._isValid(A);
    }
  }
  $L4.envDetector = new XL4();
});

// Register to shared state
__$.GL4 = GL4;
