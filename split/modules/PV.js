// Module: PV
// Dependencies: qi1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var PV = v($g8 => {
  var tZ5 = __$.qi1(),
    eZ5 = (A, K, q = Y => Y) => A,
    AW5 = A => {
      switch (A) {
        case "true":
          return !0;
        case "false":
          return !1;
        default:
          throw Error(`Unable to parse boolean value "${A}"`);
      }
    },
    KW5 = A => {
      if (A === null || A === void 0) return;
      if (typeof A === "number") {
        if (A === 0 || A === 1) LCA.warn(T61(`Expected boolean, got ${typeof A}: ${A}`));
        if (A === 0) return !1;
        if (A === 1) return !0;
      }
      if (typeof A === "string") {
        let K = A.toLowerCase();
        if (K === "false" || K === "true") LCA.warn(T61(`Expected boolean, got ${typeof A}: ${A}`));
        if (K === "false") return !1;
        if (K === "true") return !0;
      }
      if (typeof A === "boolean") return A;
      throw TypeError(`Expected boolean, got ${typeof A}: ${A}`);
    },
    kCA = A => {
      if (A === null || A === void 0) return;
      if (typeof A === "string") {
        let K = parseFloat(A);
        if (!Number.isNaN(K)) {
          if (String(K) !== String(A)) LCA.warn(T61(`Expected number but observed string: ${A}`));
          return K;
        }
      }
      if (typeof A === "number") return A;
      throw TypeError(`Expected number, got ${typeof A}: ${A}`);
    },
    qW5 = Math.ceil(340282346638528860000000000000000000000),
    N61 = A => {
      let K = kCA(A);
      if (K !== void 0 && !Number.isNaN(K) && K !== 1 / 0 && K !== -1 / 0) {
        if (Math.abs(K) > qW5) throw TypeError(`Expected 32-bit float, got ${A}`);
      }
      return K;
    },
    CCA = A => {
      if (A === null || A === void 0) return;
      if (Number.isInteger(A) && !Number.isNaN(A)) return A;
      throw TypeError(`Expected integer, got ${typeof A}: ${A}`);
    },
    YW5 = CCA,
    zi1 = A => Ji1(A, 32),
    wi1 = A => Ji1(A, 16),
    Hi1 = A => Ji1(A, 8),
    Ji1 = (A, K) => {
      let q = CCA(A);
      if (q !== void 0 && zW5(q, K) !== q) throw TypeError(`Expected ${K}-bit integer, got ${A}`);
      return q;
    },
    zW5 = (A, K) => {
      switch (K) {
        case 32:
          return Int32Array.of(A)[0];
        case 16:
          return Int16Array.of(A)[0];
        case 8:
          return Int8Array.of(A)[0];
      }
    },
    wW5 = (A, K) => {
      if (A === null || A === void 0) {
        if (K) throw TypeError(`Expected a non-null value for ${K}`);
        throw TypeError("Expected a non-null value");
      }
      return A;
    },
    Yg8 = A => {
      if (A === null || A === void 0) return;
      if (typeof A === "object" && !Array.isArray(A)) return A;
      let K = Array.isArray(A) ? "array" : typeof A;
      throw TypeError(`Expected object, got ${K}: ${A}`);
    },
    HW5 = A => {
      if (A === null || A === void 0) return;
      if (typeof A === "string") return A;
      if (["boolean", "number", "bigint"].includes(typeof A)) return LCA.warn(T61(`Expected string, got ${typeof A}: ${A}`)), String(A);
      throw TypeError(`Expected string, got ${typeof A}: ${A}`);
    },
    JW5 = A => {
      if (A === null || A === void 0) return;
      let K = Yg8(A),
        q = Object.entries(K).filter(([, Y]) => Y != null).map(([Y]) => Y);
      if (q.length === 0) throw TypeError("Unions must have exactly one non-null member. None were found.");
      if (q.length > 1) throw TypeError(`Unions must have exactly one non-null member. Keys ${q} were not null.`);
      return K;
    },
    Oi1 = A => {
      if (typeof A == "string") return kCA(AOA(A));
      return kCA(A);
    },
    OW5 = Oi1,
    zg8 = A => {
      if (typeof A == "string") return N61(AOA(A));
      return N61(A);
    },
    XW5 = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g,
    AOA = A => {
      let K = A.match(XW5);
      if (K === null || K[0].length !== A.length) throw TypeError("Expected real number, got implicit NaN");
      return parseFloat(A);
    },
    Xi1 = A => {
      if (typeof A == "string") return wg8(A);
      return kCA(A);
    },
    $W5 = Xi1,
    _W5 = Xi1,
    GW5 = A => {
      if (typeof A == "string") return wg8(A);
      return N61(A);
    },
    wg8 = A => {
      switch (A) {
        case "NaN":
          return NaN;
        case "Infinity":
          return 1 / 0;
        case "-Infinity":
          return -1 / 0;
        default:
          throw Error(`Unable to parse float value: ${A}`);
      }
    },
    Hg8 = A => {
      if (typeof A === "string") return CCA(AOA(A));
      return CCA(A);
    },
    ZW5 = Hg8,
    WW5 = A => {
      if (typeof A === "string") return zi1(AOA(A));
      return zi1(A);
    },
    tJA = A => {
      if (typeof A === "string") return wi1(AOA(A));
      return wi1(A);
    },
    Jg8 = A => {
      if (typeof A === "string") return Hi1(AOA(A));
      return Hi1(A);
    },
    T61 = A => {
      return String(TypeError(A).stack || A).split(`
`).slice(0, 5).filter(K => !K.includes("stackTraceWarning")).join(`
`);
    },
    LCA = {
      warn: console.warn
    },
    DW5 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    $i1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function jW5(A) {
    let K = A.getUTCFullYear(),
      q = A.getUTCMonth(),
      Y = A.getUTCDay(),
      z = A.getUTCDate(),
      w = A.getUTCHours(),
      H = A.getUTCMinutes(),
      J = A.getUTCSeconds(),
      O = z < 10 ? `0${z}` : `${z}`,
      X = w < 10 ? `0${w}` : `${w}`,
      $ = H < 10 ? `0${H}` : `${H}`,
      _ = J < 10 ? `0${J}` : `${J}`;
    return `${DW5[Y]}, ${O} ${$i1[q]} ${K} ${X}:${$}:${_} GMT`;
  }
  var MW5 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/),
    PW5 = A => {
      if (A === null || A === void 0) return;
      if (typeof A !== "string") throw TypeError("RFC-3339 date-times must be expressed as strings");
      let K = MW5.exec(A);
      if (!K) throw TypeError("Invalid RFC-3339 date-time value");
      let [q, Y, z, w, H, J, O, X] = K,
        $ = tJA(eJA(Y)),
        _ = mb(z, "month", 1, 12),
        G = mb(w, "day", 1, 31);
      return ECA($, _, G, {
        hours: H,
        minutes: J,
        seconds: O,
        fractionalMilliseconds: X
      });
    },
    VW5 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/),
    fW5 = A => {
      if (A === null || A === void 0) return;
      if (typeof A !== "string") throw TypeError("RFC-3339 date-times must be expressed as strings");
      let K = VW5.exec(A);
      if (!K) throw TypeError("Invalid RFC-3339 date-time value");
      let [q, Y, z, w, H, J, O, X, $] = K,
        _ = tJA(eJA(Y)),
        G = mb(z, "month", 1, 12),
        Z = mb(w, "day", 1, 31),
        W = ECA(_, G, Z, {
          hours: H,
          minutes: J,
          seconds: O,
          fractionalMilliseconds: X
        });
      if ($.toUpperCase() != "Z") W.setTime(W.getTime() - bW5($));
      return W;
    },
    NW5 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),
    TW5 = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),
    vW5 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/),
    EW5 = A => {
      if (A === null || A === void 0) return;
      if (typeof A !== "string") throw TypeError("RFC-7231 date-times must be expressed as strings");
      let K = NW5.exec(A);
      if (K) {
        let [q, Y, z, w, H, J, O, X] = K;
        return ECA(tJA(eJA(w)), Yi1(z), mb(Y, "day", 1, 31), {
          hours: H,
          minutes: J,
          seconds: O,
          fractionalMilliseconds: X
        });
      }
      if (K = TW5.exec(A), K) {
        let [q, Y, z, w, H, J, O, X] = K;
        return RW5(ECA(CW5(w), Yi1(z), mb(Y, "day", 1, 31), {
          hours: H,
          minutes: J,
          seconds: O,
          fractionalMilliseconds: X
        }));
      }
      if (K = vW5.exec(A), K) {
        let [q, Y, z, w, H, J, O, X] = K;
        return ECA(tJA(eJA(X)), Yi1(Y), mb(z.trimLeft(), "day", 1, 31), {
          hours: w,
          minutes: H,
          seconds: J,
          fractionalMilliseconds: O
        });
      }
      throw TypeError("Invalid RFC-7231 date-time value");
    },
    kW5 = A => {
      if (A === null || A === void 0) return;
      let K;
      if (typeof A === "number") K = A;else if (typeof A === "string") K = Oi1(A);else if (typeof A === "object" && A.tag === 1) K = A.value;else throw TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
      if (Number.isNaN(K) || K === 1 / 0 || K === -1 / 0) throw TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
      return new Date(Math.round(K * 1000));
    },
    ECA = (A, K, q, Y) => {
      let z = K - 1;
      return IW5(A, z, q), new Date(Date.UTC(A, z, q, mb(Y.hours, "hour", 0, 23), mb(Y.minutes, "minute", 0, 59), mb(Y.seconds, "seconds", 0, 60), hW5(Y.fractionalMilliseconds)));
    },
    CW5 = A => {
      let K = new Date().getUTCFullYear(),
        q = Math.floor(K / 100) * 100 + tJA(eJA(A));
      if (q < K) return q + 100;
      return q;
    },
    LW5 = 1576800000000,
    RW5 = A => {
      if (A.getTime() - new Date().getTime() > LW5) return new Date(Date.UTC(A.getUTCFullYear() - 100, A.getUTCMonth(), A.getUTCDate(), A.getUTCHours(), A.getUTCMinutes(), A.getUTCSeconds(), A.getUTCMilliseconds()));
      return A;
    },
    Yi1 = A => {
      let K = $i1.indexOf(A);
      if (K < 0) throw TypeError(`Invalid month: ${A}`);
      return K + 1;
    },
    yW5 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    IW5 = (A, K, q) => {
      let Y = yW5[K];
      if (K === 1 && SW5(A)) Y = 29;
      if (q > Y) throw TypeError(`Invalid day for ${$i1[K]} in ${A}: ${q}`);
    },
    SW5 = A => {
      return A % 4 === 0 && (A % 100 !== 0 || A % 400 === 0);
    },
    mb = (A, K, q, Y) => {
      let z = Jg8(eJA(A));
      if (z < q || z > Y) throw TypeError(`${K} must be between ${q} and ${Y}, inclusive`);
      return z;
    },
    hW5 = A => {
      if (A === null || A === void 0) return 0;
      return zg8("0." + A) * 1000;
    },
    bW5 = A => {
      let K = A[0],
        q = 1;
      if (K == "+") q = 1;else if (K == "-") q = -1;else throw TypeError(`Offset direction, ${K}, must be "+" or "-"`);
      let Y = Number(A.substring(1, 3)),
        z = Number(A.substring(4, 6));
      return q * (Y * 60 + z) * 60 * 1000;
    },
    eJA = A => {
      let K = 0;
      while (K < A.length - 1 && A.charAt(K) === "0") K++;
      if (K === 0) return A;
      return A.slice(K);
    },
    i6A = function (K) {
      return Object.assign(new String(K), {
        deserializeJSON() {
          return JSON.parse(String(K));
        },
        toString() {
          return String(K);
        },
        toJSON() {
          return String(K);
        }
      });
    };
  i6A.from = A => {
    if (A && typeof A === "object" && (A instanceof i6A || "deserializeJSON" in A)) return A;else if (typeof A === "string" || Object.getPrototypeOf(A) === String.prototype) return i6A(String(A));
    return i6A(JSON.stringify(A));
  };
  i6A.fromObject = i6A.from;
  function xW5(A) {
    if (A.includes(",") || A.includes('"')) A = `"${A.replace(/"/g, "\\\"")}"`;
    return A;
  }
  var _i1 = "(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)(?:[ne|u?r]?s?day)?",
    Gi1 = "(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)",
    Zi1 = "(\\d?\\d):(\\d{2}):(\\d{2})(?:\\.(\\d+))?",
    Og8 = "(\\d?\\d)",
    Xg8 = "(\\d{4})",
    uW5 = new RegExp(/^(\d{4})-(\d\d)-(\d\d)[tT](\d\d):(\d\d):(\d\d)(\.(\d+))?(([-+]\d\d:\d\d)|[zZ])$/),
    BW5 = new RegExp(`^${_i1}, ${Og8} ${Gi1} ${Xg8} ${Zi1} GMT$`),
    mW5 = new RegExp(`^${_i1}, ${Og8}-${Gi1}-(\\d\\d) ${Zi1} GMT$`),
    gW5 = new RegExp(`^${_i1} ${Gi1} ( [1-9]|\\d\\d) ${Zi1} ${Xg8}$`),
    FW5 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    QW5 = A => {
      if (A == null) return;
      let K = NaN;
      if (typeof A === "number") K = A;else if (typeof A === "string") {
        if (!/^-?\d*\.?\d+$/.test(A)) throw TypeError("parseEpochTimestamp - numeric string invalid.");
        K = Number.parseFloat(A);
      } else if (typeof A === "object" && A.tag === 1) K = A.value;
      if (isNaN(K) || Math.abs(K) === 1 / 0) throw TypeError("Epoch timestamps must be valid finite numbers.");
      return new Date(Math.round(K * 1000));
    },
    UW5 = A => {
      if (A == null) return;
      if (typeof A !== "string") throw TypeError("RFC3339 timestamps must be strings");
      let K = uW5.exec(A);
      if (!K) throw TypeError(`Invalid RFC3339 timestamp format ${A}`);
      let [, q, Y, z, w, H, J,, O, X] = K;
      pF(Y, 1, 12), pF(z, 1, 31), pF(w, 0, 23), pF(H, 0, 59), pF(J, 0, 60);
      let $ = new Date(Date.UTC(Number(q), Number(Y) - 1, Number(z), Number(w), Number(H), Number(J), Number(O) ? Math.round(parseFloat(`0.${O}`) * 1000) : 0));
      if ($.setUTCFullYear(Number(q)), X.toUpperCase() != "Z") {
        let [, _, G, Z] = /([+-])(\d\d):(\d\d)/.exec(X) || [void 0, "+", 0, 0],
          W = _ === "-" ? 1 : -1;
        $.setTime($.getTime() + W * (Number(G) * 60 * 60 * 1000 + Number(Z) * 60 * 1000));
      }
      return $;
    },
    pW5 = A => {
      if (A == null) return;
      if (typeof A !== "string") throw TypeError("RFC7231 timestamps must be strings.");
      let K, q, Y, z, w, H, J, O;
      if (O = BW5.exec(A)) [, K, q, Y, z, w, H, J] = O;else if (O = mW5.exec(A)) [, K, q, Y, z, w, H, J] = O, Y = (Number(Y) + 1900).toString();else if (O = gW5.exec(A)) [, q, K, z, w, H, J, Y] = O;
      if (Y && H) {
        let X = Date.UTC(Number(Y), FW5.indexOf(q), Number(K), Number(z), Number(w), Number(H), J ? Math.round(parseFloat(`0.${J}`) * 1000) : 0);
        pF(K, 1, 31), pF(z, 0, 23), pF(w, 0, 59), pF(H, 0, 60);
        let $ = new Date(X);
        return $.setUTCFullYear(Number(Y)), $;
      }
      throw TypeError(`Invalid RFC7231 date-time value ${A}.`);
    };
  function pF(A, K, q) {
    let Y = Number(A);
    if (Y < K || Y > q) throw Error(`Value ${Y} out of range [${K}, ${q}]`);
  }
  function dW5(A, K, q) {
    if (q <= 0 || !Number.isInteger(q)) throw Error("Invalid number of delimiters (" + q + ") for splitEvery.");
    let Y = A.split(K);
    if (q === 1) return Y;
    let z = [],
      w = "";
    for (let H = 0; H < Y.length; H++) {
      if (w === "") w = Y[H];else w += K + Y[H];
      if ((H + 1) % q === 0) z.push(w), w = "";
    }
    if (w !== "") z.push(w);
    return z;
  }
  var cW5 = A => {
      let K = A.length,
        q = [],
        Y = !1,
        z = void 0,
        w = 0;
      for (let H = 0; H < K; ++H) {
        let J = A[H];
        switch (J) {
          case '"':
            if (z !== "\\") Y = !Y;
            break;
          case ",":
            if (!Y) q.push(A.slice(w, H)), w = H + 1;
            break;
        }
        z = J;
      }
      return q.push(A.slice(w)), q.map(H => {
        H = H.trim();
        let J = H.length;
        if (J < 2) return H;
        if (H[0] === '"' && H[J - 1] === '"') H = H.slice(1, J - 1);
        return H.replace(/\\"/g, '"');
      });
    },
    qg8 = /^-?\d*(\.\d+)?$/;
  class v61 {
    string;
    type;
    constructor(A, K) {
      if (this.string = A, this.type = K, !qg8.test(A)) throw Error('@smithy/core/serde - NumericValue must only contain [0-9], at most one decimal point ".", and an optional negation prefix "-".');
    }
    toString() {
      return this.string;
    }
    static [Symbol.hasInstance](A) {
      if (!A || typeof A !== "object") return !1;
      let K = A;
      return v61.prototype.isPrototypeOf(A) || K.type === "bigDecimal" && qg8.test(K.string);
    }
  }
  function lW5(A) {
    return new v61(String(A), "bigDecimal");
  }
  Object.defineProperty($g8, "generateIdempotencyToken", {
    enumerable: !0,
    get: function () {
      return tZ5.v4;
    }
  });
  $g8.LazyJsonString = i6A;
  $g8.NumericValue = v61;
  $g8._parseEpochTimestamp = QW5;
  $g8._parseRfc3339DateTimeWithOffset = UW5;
  $g8._parseRfc7231DateTime = pW5;
  $g8.copyDocumentWithTransform = eZ5;
  $g8.dateToUtcString = jW5;
  $g8.expectBoolean = KW5;
  $g8.expectByte = Hi1;
  $g8.expectFloat32 = N61;
  $g8.expectInt = YW5;
  $g8.expectInt32 = zi1;
  $g8.expectLong = CCA;
  $g8.expectNonNull = wW5;
  $g8.expectNumber = kCA;
  $g8.expectObject = Yg8;
  $g8.expectShort = wi1;
  $g8.expectString = HW5;
  $g8.expectUnion = JW5;
  $g8.handleFloat = $W5;
  $g8.limitedParseDouble = Xi1;
  $g8.limitedParseFloat = _W5;
  $g8.limitedParseFloat32 = GW5;
  $g8.logger = LCA;
  $g8.nv = lW5;
  $g8.parseBoolean = AW5;
  $g8.parseEpochTimestamp = kW5;
  $g8.parseRfc3339DateTime = PW5;
  $g8.parseRfc3339DateTimeWithOffset = fW5;
  $g8.parseRfc7231DateTime = EW5;
  $g8.quoteHeader = xW5;
  $g8.splitEvery = dW5;
  $g8.splitHeader = cW5;
  $g8.strictParseByte = Jg8;
  $g8.strictParseDouble = Oi1;
  $g8.strictParseFloat = OW5;
  $g8.strictParseFloat32 = zg8;
  $g8.strictParseInt = ZW5;
  $g8.strictParseInt32 = WW5;
  $g8.strictParseLong = Hg8;
  $g8.strictParseShort = tJA;
});

// Register to shared state
__$.PV = PV;
