// Module: xI
// Dependencies: m3, bY, ba

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xI = v((X4H, Z_7) => {
  var cH = __$.m3();
  __$.bY();
  __$.ba();
  var q7 = Z_7.exports = cH.asn1 = cH.asn1 || {};
  q7.Class = {
    UNIVERSAL: 0,
    APPLICATION: 64,
    CONTEXT_SPECIFIC: 128,
    PRIVATE: 192
  };
  q7.Type = {
    NONE: 0,
    BOOLEAN: 1,
    INTEGER: 2,
    BITSTRING: 3,
    OCTETSTRING: 4,
    NULL: 5,
    OID: 6,
    ODESC: 7,
    EXTERNAL: 8,
    REAL: 9,
    ENUMERATED: 10,
    EMBEDDED: 11,
    UTF8: 12,
    ROID: 13,
    SEQUENCE: 16,
    SET: 17,
    PRINTABLESTRING: 19,
    IA5STRING: 22,
    UTCTIME: 23,
    GENERALIZEDTIME: 24,
    BMPSTRING: 30
  };
  q7.create = function (A, K, q, Y, z) {
    if (cH.util.isArray(Y)) {
      var w = [];
      for (var H = 0; H < Y.length; ++H) if (Y[H] !== void 0) w.push(Y[H]);
      Y = w;
    }
    var J = {
      tagClass: A,
      type: K,
      constructed: q,
      composed: q || cH.util.isArray(Y),
      value: Y
    };
    if (z && "bitStringContents" in z) J.bitStringContents = z.bitStringContents, J.original = q7.copy(J);
    return J;
  };
  q7.copy = function (A, K) {
    var q;
    if (cH.util.isArray(A)) {
      q = [];
      for (var Y = 0; Y < A.length; ++Y) q.push(q7.copy(A[Y], K));
      return q;
    }
    if (typeof A === "string") return A;
    if (q = {
      tagClass: A.tagClass,
      type: A.type,
      constructed: A.constructed,
      composed: A.composed,
      value: q7.copy(A.value, K)
    }, K && !K.excludeBitStringContents) q.bitStringContents = A.bitStringContents;
    return q;
  };
  q7.equals = function (A, K, q) {
    if (cH.util.isArray(A)) {
      if (!cH.util.isArray(K)) return !1;
      if (A.length !== K.length) return !1;
      for (var Y = 0; Y < A.length; ++Y) if (!q7.equals(A[Y], K[Y])) return !1;
      return !0;
    }
    if (typeof A !== typeof K) return !1;
    if (typeof A === "string") return A === K;
    var z = A.tagClass === K.tagClass && A.type === K.type && A.constructed === K.constructed && A.composed === K.composed && q7.equals(A.value, K.value);
    if (q && q.includeBitStringContents) z = z && A.bitStringContents === K.bitStringContents;
    return z;
  };
  q7.getBerValueLength = function (A) {
    var K = A.getByte();
    if (K === 128) return;
    var q,
      Y = K & 128;
    if (!Y) q = K;else q = A.getInt((K & 127) << 3);
    return q;
  };
  function DBA(A, K, q) {
    if (q > K) {
      var Y = Error("Too few bytes to parse DER.");
      throw Y.available = A.length(), Y.remaining = K, Y.requested = q, Y;
    }
  }
  var MNY = function (A, K) {
    var q = A.getByte();
    if (K--, q === 128) return;
    var Y,
      z = q & 128;
    if (!z) Y = q;else {
      var w = q & 127;
      DBA(A, K, w), Y = A.getInt(w << 3);
    }
    if (Y < 0) throw Error("Negative length: " + Y);
    return Y;
  };
  q7.fromDer = function (A, K) {
    if (K === void 0) K = {
      strict: !0,
      parseAllBytes: !0,
      decodeBitStrings: !0
    };
    if (typeof K === "boolean") K = {
      strict: K,
      parseAllBytes: !0,
      decodeBitStrings: !0
    };
    if (!("strict" in K)) K.strict = !0;
    if (!("parseAllBytes" in K)) K.parseAllBytes = !0;
    if (!("decodeBitStrings" in K)) K.decodeBitStrings = !0;
    if (typeof A === "string") A = cH.util.createBuffer(A);
    var q = A.length(),
      Y = UX1(A, A.length(), 0, K);
    if (K.parseAllBytes && A.length() !== 0) {
      var z = Error("Unparsed DER bytes remain after ASN.1 parsing.");
      throw z.byteCount = q, z.remaining = A.length(), z;
    }
    return Y;
  };
  function UX1(A, K, q, Y) {
    var z;
    DBA(A, K, 2);
    var w = A.getByte();
    K--;
    var H = w & 192,
      J = w & 31;
    z = A.length();
    var O = MNY(A, K);
    if (K -= z - A.length(), O !== void 0 && O > K) {
      if (Y.strict) {
        var X = Error("Too few bytes to read ASN.1 value.");
        throw X.available = A.length(), X.remaining = K, X.requested = O, X;
      }
      O = K;
    }
    var $,
      _,
      G = (w & 32) === 32;
    if (G) if ($ = [], O === void 0) for (;;) {
      if (DBA(A, K, 2), A.bytes(2) === String.fromCharCode(0, 0)) {
        A.getBytes(2), K -= 2;
        break;
      }
      z = A.length(), $.push(UX1(A, K, q + 1, Y)), K -= z - A.length();
    } else while (O > 0) z = A.length(), $.push(UX1(A, O, q + 1, Y)), K -= z - A.length(), O -= z - A.length();
    if ($ === void 0 && H === q7.Class.UNIVERSAL && J === q7.Type.BITSTRING) _ = A.bytes(O);
    if ($ === void 0 && Y.decodeBitStrings && H === q7.Class.UNIVERSAL && J === q7.Type.BITSTRING && O > 1) {
      var Z = A.read,
        W = K,
        D = 0;
      if (J === q7.Type.BITSTRING) DBA(A, K, 1), D = A.getByte(), K--;
      if (D === 0) try {
        z = A.length();
        var j = {
            strict: !0,
            decodeBitStrings: !0
          },
          M = UX1(A, K, q + 1, j),
          P = z - A.length();
        if (K -= P, J == q7.Type.BITSTRING) P++;
        var f = M.tagClass;
        if (P === O && (f === q7.Class.UNIVERSAL || f === q7.Class.CONTEXT_SPECIFIC)) $ = [M];
      } catch (T) {}
      if ($ === void 0) A.read = Z, K = W;
    }
    if ($ === void 0) {
      if (O === void 0) {
        if (Y.strict) throw Error("Non-constructed ASN.1 object of indefinite length.");
        O = K;
      }
      if (J === q7.Type.BMPSTRING) {
        $ = "";
        for (; O > 0; O -= 2) DBA(A, K, 2), $ += String.fromCharCode(A.getInt16()), K -= 2;
      } else $ = A.getBytes(O), K -= O;
    }
    var N = _ === void 0 ? null : {
      bitStringContents: _
    };
    return q7.create(H, J, G, $, N);
  }
  q7.toDer = function (A) {
    var K = cH.util.createBuffer(),
      q = A.tagClass | A.type,
      Y = cH.util.createBuffer(),
      z = !1;
    if ("bitStringContents" in A) {
      if (z = !0, A.original) z = q7.equals(A, A.original);
    }
    if (z) Y.putBytes(A.bitStringContents);else if (A.composed) {
      if (A.constructed) q |= 32;else Y.putByte(0);
      for (var w = 0; w < A.value.length; ++w) if (A.value[w] !== void 0) Y.putBuffer(q7.toDer(A.value[w]));
    } else if (A.type === q7.Type.BMPSTRING) for (var w = 0; w < A.value.length; ++w) Y.putInt16(A.value.charCodeAt(w));else if (A.type === q7.Type.INTEGER && A.value.length > 1 && (A.value.charCodeAt(0) === 0 && (A.value.charCodeAt(1) & 128) === 0 || A.value.charCodeAt(0) === 255 && (A.value.charCodeAt(1) & 128) === 128)) Y.putBytes(A.value.substr(1));else Y.putBytes(A.value);
    if (K.putByte(q), Y.length() <= 127) K.putByte(Y.length() & 127);else {
      var H = Y.length(),
        J = "";
      do J += String.fromCharCode(H & 255), H = H >>> 8; while (H > 0);
      K.putByte(J.length | 128);
      for (var w = J.length - 1; w >= 0; --w) K.putByte(J.charCodeAt(w));
    }
    return K.putBuffer(Y), K;
  };
  q7.oidToDer = function (A) {
    var K = A.split("."),
      q = cH.util.createBuffer();
    q.putByte(40 * parseInt(K[0], 10) + parseInt(K[1], 10));
    var Y, z, w, H;
    for (var J = 2; J < K.length; ++J) {
      Y = !0, z = [], w = parseInt(K[J], 10);
      do {
        if (H = w & 127, w = w >>> 7, !Y) H |= 128;
        z.push(H), Y = !1;
      } while (w > 0);
      for (var O = z.length - 1; O >= 0; --O) q.putByte(z[O]);
    }
    return q;
  };
  q7.derToOid = function (A) {
    var K;
    if (typeof A === "string") A = cH.util.createBuffer(A);
    var q = A.getByte();
    K = Math.floor(q / 40) + "." + q % 40;
    var Y = 0;
    while (A.length() > 0) if (q = A.getByte(), Y = Y << 7, q & 128) Y += q & 127;else K += "." + (Y + q), Y = 0;
    return K;
  };
  q7.utcTimeToDate = function (A) {
    var K = new Date(),
      q = parseInt(A.substr(0, 2), 10);
    q = q >= 50 ? 1900 + q : 2000 + q;
    var Y = parseInt(A.substr(2, 2), 10) - 1,
      z = parseInt(A.substr(4, 2), 10),
      w = parseInt(A.substr(6, 2), 10),
      H = parseInt(A.substr(8, 2), 10),
      J = 0;
    if (A.length > 11) {
      var O = A.charAt(10),
        X = 10;
      if (O !== "+" && O !== "-") J = parseInt(A.substr(10, 2), 10), X += 2;
    }
    if (K.setUTCFullYear(q, Y, z), K.setUTCHours(w, H, J, 0), X) {
      if (O = A.charAt(X), O === "+" || O === "-") {
        var $ = parseInt(A.substr(X + 1, 2), 10),
          _ = parseInt(A.substr(X + 4, 2), 10),
          G = $ * 60 + _;
        if (G *= 60000, O === "+") K.setTime(+K - G);else K.setTime(+K + G);
      }
    }
    return K;
  };
  q7.generalizedTimeToDate = function (A) {
    var K = new Date(),
      q = parseInt(A.substr(0, 4), 10),
      Y = parseInt(A.substr(4, 2), 10) - 1,
      z = parseInt(A.substr(6, 2), 10),
      w = parseInt(A.substr(8, 2), 10),
      H = parseInt(A.substr(10, 2), 10),
      J = parseInt(A.substr(12, 2), 10),
      O = 0,
      X = 0,
      $ = !1;
    if (A.charAt(A.length - 1) === "Z") $ = !0;
    var _ = A.length - 5,
      G = A.charAt(_);
    if (G === "+" || G === "-") {
      var Z = parseInt(A.substr(_ + 1, 2), 10),
        W = parseInt(A.substr(_ + 4, 2), 10);
      if (X = Z * 60 + W, X *= 60000, G === "+") X *= -1;
      $ = !0;
    }
    if (A.charAt(14) === ".") O = parseFloat(A.substr(14), 10) * 1000;
    if ($) K.setUTCFullYear(q, Y, z), K.setUTCHours(w, H, J, O), K.setTime(+K + X);else K.setFullYear(q, Y, z), K.setHours(w, H, J, O);
    return K;
  };
  q7.dateToUtcTime = function (A) {
    if (typeof A === "string") return A;
    var K = "",
      q = [];
    q.push(("" + A.getUTCFullYear()).substr(2)), q.push("" + (A.getUTCMonth() + 1)), q.push("" + A.getUTCDate()), q.push("" + A.getUTCHours()), q.push("" + A.getUTCMinutes()), q.push("" + A.getUTCSeconds());
    for (var Y = 0; Y < q.length; ++Y) {
      if (q[Y].length < 2) K += "0";
      K += q[Y];
    }
    return K += "Z", K;
  };
  q7.dateToGeneralizedTime = function (A) {
    if (typeof A === "string") return A;
    var K = "",
      q = [];
    q.push("" + A.getUTCFullYear()), q.push("" + (A.getUTCMonth() + 1)), q.push("" + A.getUTCDate()), q.push("" + A.getUTCHours()), q.push("" + A.getUTCMinutes()), q.push("" + A.getUTCSeconds());
    for (var Y = 0; Y < q.length; ++Y) {
      if (q[Y].length < 2) K += "0";
      K += q[Y];
    }
    return K += "Z", K;
  };
  q7.integerToDer = function (A) {
    var K = cH.util.createBuffer();
    if (A >= -128 && A < 128) return K.putSignedInt(A, 8);
    if (A >= -32768 && A < 32768) return K.putSignedInt(A, 16);
    if (A >= -8388608 && A < 8388608) return K.putSignedInt(A, 24);
    if (A >= -2147483648 && A < 2147483648) return K.putSignedInt(A, 32);
    var q = Error("Integer too large; max is 32-bits.");
    throw q.integer = A, q;
  };
  q7.derToInteger = function (A) {
    if (typeof A === "string") A = cH.util.createBuffer(A);
    var K = A.length() * 8;
    if (K > 32) throw Error("Integer too large; max is 32-bits.");
    return A.getSignedInt(K);
  };
  q7.validate = function (A, K, q, Y) {
    var z = !1;
    if ((A.tagClass === K.tagClass || typeof K.tagClass > "u") && (A.type === K.type || typeof K.type > "u")) {
      if (A.constructed === K.constructed || typeof K.constructed > "u") {
        if (z = !0, K.value && cH.util.isArray(K.value)) {
          var w = 0;
          for (var H = 0; z && H < K.value.length; ++H) {
            if (z = K.value[H].optional || !1, A.value[w]) {
              if (z = q7.validate(A.value[w], K.value[H], q, Y), z) ++w;else if (K.value[H].optional) z = !0;
            }
            if (!z && Y) Y.push("[" + K.name + '] Tag class "' + K.tagClass + '", type "' + K.type + '" expected value length "' + K.value.length + '", got "' + A.value.length + '"');
          }
        }
        if (z && q) {
          if (K.capture) q[K.capture] = A.value;
          if (K.captureAsn1) q[K.captureAsn1] = A;
          if (K.captureBitStringContents && "bitStringContents" in A) q[K.captureBitStringContents] = A.bitStringContents;
          if (K.captureBitStringValue && "bitStringContents" in A) {
            var J;
            if (A.bitStringContents.length < 2) q[K.captureBitStringValue] = "";else {
              var O = A.bitStringContents.charCodeAt(0);
              if (O !== 0) throw Error("captureBitStringValue only supported for zero unused bits");
              q[K.captureBitStringValue] = A.bitStringContents.slice(1);
            }
          }
        }
      } else if (Y) Y.push("[" + K.name + '] Expected constructed "' + K.constructed + '", got "' + A.constructed + '"');
    } else if (Y) {
      if (A.tagClass !== K.tagClass) Y.push("[" + K.name + '] Expected tag class "' + K.tagClass + '", got "' + A.tagClass + '"');
      if (A.type !== K.type) Y.push("[" + K.name + '] Expected type "' + K.type + '", got "' + A.type + '"');
    }
    return z;
  };
  var G_7 = /[^\\u0000-\\u00ff]/;
  q7.prettyPrint = function (A, K, q) {
    var Y = "";
    if (K = K || 0, q = q || 2, K > 0) Y += `
`;
    var z = "";
    for (var w = 0; w < K * q; ++w) z += " ";
    switch (Y += z + "Tag: ", A.tagClass) {
      case q7.Class.UNIVERSAL:
        Y += "Universal:";
        break;
      case q7.Class.APPLICATION:
        Y += "Application:";
        break;
      case q7.Class.CONTEXT_SPECIFIC:
        Y += "Context-Specific:";
        break;
      case q7.Class.PRIVATE:
        Y += "Private:";
        break;
    }
    if (A.tagClass === q7.Class.UNIVERSAL) switch (Y += A.type, A.type) {
      case q7.Type.NONE:
        Y += " (None)";
        break;
      case q7.Type.BOOLEAN:
        Y += " (Boolean)";
        break;
      case q7.Type.INTEGER:
        Y += " (Integer)";
        break;
      case q7.Type.BITSTRING:
        Y += " (Bit string)";
        break;
      case q7.Type.OCTETSTRING:
        Y += " (Octet string)";
        break;
      case q7.Type.NULL:
        Y += " (Null)";
        break;
      case q7.Type.OID:
        Y += " (Object Identifier)";
        break;
      case q7.Type.ODESC:
        Y += " (Object Descriptor)";
        break;
      case q7.Type.EXTERNAL:
        Y += " (External or Instance of)";
        break;
      case q7.Type.REAL:
        Y += " (Real)";
        break;
      case q7.Type.ENUMERATED:
        Y += " (Enumerated)";
        break;
      case q7.Type.EMBEDDED:
        Y += " (Embedded PDV)";
        break;
      case q7.Type.UTF8:
        Y += " (UTF8)";
        break;
      case q7.Type.ROID:
        Y += " (Relative Object Identifier)";
        break;
      case q7.Type.SEQUENCE:
        Y += " (Sequence)";
        break;
      case q7.Type.SET:
        Y += " (Set)";
        break;
      case q7.Type.PRINTABLESTRING:
        Y += " (Printable String)";
        break;
      case q7.Type.IA5String:
        Y += " (IA5String (ASCII))";
        break;
      case q7.Type.UTCTIME:
        Y += " (UTC time)";
        break;
      case q7.Type.GENERALIZEDTIME:
        Y += " (Generalized time)";
        break;
      case q7.Type.BMPSTRING:
        Y += " (BMP String)";
        break;
    } else Y += A.type;
    if (Y += `
`, Y += z + "Constructed: " + A.constructed + `
`, A.composed) {
      var H = 0,
        J = "";
      for (var w = 0; w < A.value.length; ++w) if (A.value[w] !== void 0) {
        if (H += 1, J += q7.prettyPrint(A.value[w], K + 1, q), w + 1 < A.value.length) J += ",";
      }
      Y += z + "Sub values: " + H + J;
    } else {
      if (Y += z + "Value: ", A.type === q7.Type.OID) {
        var O = q7.derToOid(A.value);
        if (Y += O, cH.pki && cH.pki.oids) {
          if (O in cH.pki.oids) Y += " (" + cH.pki.oids[O] + ") ";
        }
      }
      if (A.type === q7.Type.INTEGER) try {
        Y += q7.derToInteger(A.value);
      } catch ($) {
        Y += "0x" + cH.util.bytesToHex(A.value);
      } else if (A.type === q7.Type.BITSTRING) {
        if (A.value.length > 1) Y += "0x" + cH.util.bytesToHex(A.value.slice(1));else Y += "(none)";
        if (A.value.length > 0) {
          var X = A.value.charCodeAt(0);
          if (X == 1) Y += " (1 unused bit shown)";else if (X > 1) Y += " (" + X + " unused bits shown)";
        }
      } else if (A.type === q7.Type.OCTETSTRING) {
        if (!G_7.test(A.value)) Y += "(" + A.value + ") ";
        Y += "0x" + cH.util.bytesToHex(A.value);
      } else if (A.type === q7.Type.UTF8) try {
        Y += cH.util.decodeUtf8(A.value);
      } catch ($) {
        if ($.message === "URI malformed") Y += "0x" + cH.util.bytesToHex(A.value) + " (malformed UTF8)";else throw $;
      } else if (A.type === q7.Type.PRINTABLESTRING || A.type === q7.Type.IA5String) Y += A.value;else if (G_7.test(A.value)) Y += "0x" + cH.util.bytesToHex(A.value);else if (A.value.length === 0) Y += "[null]";else Y += A.value;
    }
    return Y;
  };
});

// Register to shared state
__$.xI = xI;
