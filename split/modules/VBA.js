// Module: VBA
// Dependencies: m3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var VBA = v((f4H, U_7) => {
  var aD6 = __$.m3();
  U_7.exports = aD6.jsbn = aD6.jsbn || {};
  var Wp,
    uNY = 244837814094590,
    x_7 = (uNY & 16777215) == 15715070;
  function L8(A, K, q) {
    if (this.data = [], A != null) if (typeof A == "number") this.fromNumber(A, K, q);else if (K == null && typeof A != "string") this.fromString(A, 256);else this.fromString(A, K);
  }
  aD6.jsbn.BigInteger = L8;
  function xY() {
    return new L8(null);
  }
  function BNY(A, K, q, Y, z, w) {
    while (--w >= 0) {
      var H = K * this.data[A++] + q.data[Y] + z;
      z = Math.floor(H / 67108864), q.data[Y++] = H & 67108863;
    }
    return z;
  }
  function mNY(A, K, q, Y, z, w) {
    var H = K & 32767,
      J = K >> 15;
    while (--w >= 0) {
      var O = this.data[A] & 32767,
        X = this.data[A++] >> 15,
        $ = J * O + X * H;
      O = H * O + (($ & 32767) << 15) + q.data[Y] + (z & 1073741823), z = (O >>> 30) + ($ >>> 15) + J * X + (z >>> 30), q.data[Y++] = O & 1073741823;
    }
    return z;
  }
  function u_7(A, K, q, Y, z, w) {
    var H = K & 16383,
      J = K >> 14;
    while (--w >= 0) {
      var O = this.data[A] & 16383,
        X = this.data[A++] >> 14,
        $ = J * O + X * H;
      O = H * O + (($ & 16383) << 14) + q.data[Y] + z, z = (O >> 28) + ($ >> 14) + J * X, q.data[Y++] = O & 268435455;
    }
    return z;
  }
  if (typeof navigator > "u") L8.prototype.am = u_7, Wp = 28;else if (x_7 && navigator.appName == "Microsoft Internet Explorer") L8.prototype.am = mNY, Wp = 30;else if (x_7 && navigator.appName != "Netscape") L8.prototype.am = BNY, Wp = 26;else L8.prototype.am = u_7, Wp = 28;
  L8.prototype.DB = Wp;
  L8.prototype.DM = (1 << Wp) - 1;
  L8.prototype.DV = 1 << Wp;
  var sD6 = 52;
  L8.prototype.FV = Math.pow(2, sD6);
  L8.prototype.F1 = sD6 - Wp;
  L8.prototype.F2 = 2 * Wp - sD6;
  var gNY = "0123456789abcdefghijklmnopqrstuvwxyz",
    aX1 = [],
    yZA,
    BC;
  yZA = 48;
  for (BC = 0; BC <= 9; ++BC) aX1[yZA++] = BC;
  yZA = 97;
  for (BC = 10; BC < 36; ++BC) aX1[yZA++] = BC;
  yZA = 65;
  for (BC = 10; BC < 36; ++BC) aX1[yZA++] = BC;
  function B_7(A) {
    return gNY.charAt(A);
  }
  function m_7(A, K) {
    var q = aX1[A.charCodeAt(K)];
    return q == null ? -1 : q;
  }
  function FNY(A) {
    for (var K = this.t - 1; K >= 0; --K) A.data[K] = this.data[K];
    A.t = this.t, A.s = this.s;
  }
  function QNY(A) {
    if (this.t = 1, this.s = A < 0 ? -1 : 0, A > 0) this.data[0] = A;else if (A < -1) this.data[0] = A + this.DV;else this.t = 0;
  }
  function xa(A) {
    var K = xY();
    return K.fromInt(A), K;
  }
  function UNY(A, K) {
    var q;
    if (K == 16) q = 4;else if (K == 8) q = 3;else if (K == 256) q = 8;else if (K == 2) q = 1;else if (K == 32) q = 5;else if (K == 4) q = 2;else {
      this.fromRadix(A, K);
      return;
    }
    this.t = 0, this.s = 0;
    var Y = A.length,
      z = !1,
      w = 0;
    while (--Y >= 0) {
      var H = q == 8 ? A[Y] & 255 : m_7(A, Y);
      if (H < 0) {
        if (A.charAt(Y) == "-") z = !0;
        continue;
      }
      if (z = !1, w == 0) this.data[this.t++] = H;else if (w + q > this.DB) this.data[this.t - 1] |= (H & (1 << this.DB - w) - 1) << w, this.data[this.t++] = H >> this.DB - w;else this.data[this.t - 1] |= H << w;
      if (w += q, w >= this.DB) w -= this.DB;
    }
    if (q == 8 && (A[0] & 128) != 0) {
      if (this.s = -1, w > 0) this.data[this.t - 1] |= (1 << this.DB - w) - 1 << w;
    }
    if (this.clamp(), z) L8.ZERO.subTo(this, this);
  }
  function pNY() {
    var A = this.s & this.DM;
    while (this.t > 0 && this.data[this.t - 1] == A) --this.t;
  }
  function dNY(A) {
    if (this.s < 0) return "-" + this.negate().toString(A);
    var K;
    if (A == 16) K = 4;else if (A == 8) K = 3;else if (A == 2) K = 1;else if (A == 32) K = 5;else if (A == 4) K = 2;else return this.toRadix(A);
    var q = (1 << K) - 1,
      Y,
      z = !1,
      w = "",
      H = this.t,
      J = this.DB - H * this.DB % K;
    if (H-- > 0) {
      if (J < this.DB && (Y = this.data[H] >> J) > 0) z = !0, w = B_7(Y);
      while (H >= 0) {
        if (J < K) Y = (this.data[H] & (1 << J) - 1) << K - J, Y |= this.data[--H] >> (J += this.DB - K);else if (Y = this.data[H] >> (J -= K) & q, J <= 0) J += this.DB, --H;
        if (Y > 0) z = !0;
        if (z) w += B_7(Y);
      }
    }
    return z ? w : "0";
  }
  function cNY() {
    var A = xY();
    return L8.ZERO.subTo(this, A), A;
  }
  function lNY() {
    return this.s < 0 ? this.negate() : this;
  }
  function iNY(A) {
    var K = this.s - A.s;
    if (K != 0) return K;
    var q = this.t;
    if (K = q - A.t, K != 0) return this.s < 0 ? -K : K;
    while (--q >= 0) if ((K = this.data[q] - A.data[q]) != 0) return K;
    return 0;
  }
  function sX1(A) {
    var K = 1,
      q;
    if ((q = A >>> 16) != 0) A = q, K += 16;
    if ((q = A >> 8) != 0) A = q, K += 8;
    if ((q = A >> 4) != 0) A = q, K += 4;
    if ((q = A >> 2) != 0) A = q, K += 2;
    if ((q = A >> 1) != 0) A = q, K += 1;
    return K;
  }
  function nNY() {
    if (this.t <= 0) return 0;
    return this.DB * (this.t - 1) + sX1(this.data[this.t - 1] ^ this.s & this.DM);
  }
  function rNY(A, K) {
    var q;
    for (q = this.t - 1; q >= 0; --q) K.data[q + A] = this.data[q];
    for (q = A - 1; q >= 0; --q) K.data[q] = 0;
    K.t = this.t + A, K.s = this.s;
  }
  function oNY(A, K) {
    for (var q = A; q < this.t; ++q) K.data[q - A] = this.data[q];
    K.t = Math.max(this.t - A, 0), K.s = this.s;
  }
  function aNY(A, K) {
    var q = A % this.DB,
      Y = this.DB - q,
      z = (1 << Y) - 1,
      w = Math.floor(A / this.DB),
      H = this.s << q & this.DM,
      J;
    for (J = this.t - 1; J >= 0; --J) K.data[J + w + 1] = this.data[J] >> Y | H, H = (this.data[J] & z) << q;
    for (J = w - 1; J >= 0; --J) K.data[J] = 0;
    K.data[w] = H, K.t = this.t + w + 1, K.s = this.s, K.clamp();
  }
  function sNY(A, K) {
    K.s = this.s;
    var q = Math.floor(A / this.DB);
    if (q >= this.t) {
      K.t = 0;
      return;
    }
    var Y = A % this.DB,
      z = this.DB - Y,
      w = (1 << Y) - 1;
    K.data[0] = this.data[q] >> Y;
    for (var H = q + 1; H < this.t; ++H) K.data[H - q - 1] |= (this.data[H] & w) << z, K.data[H - q] = this.data[H] >> Y;
    if (Y > 0) K.data[this.t - q - 1] |= (this.s & w) << z;
    K.t = this.t - q, K.clamp();
  }
  function tNY(A, K) {
    var q = 0,
      Y = 0,
      z = Math.min(A.t, this.t);
    while (q < z) Y += this.data[q] - A.data[q], K.data[q++] = Y & this.DM, Y >>= this.DB;
    if (A.t < this.t) {
      Y -= A.s;
      while (q < this.t) Y += this.data[q], K.data[q++] = Y & this.DM, Y >>= this.DB;
      Y += this.s;
    } else {
      Y += this.s;
      while (q < A.t) Y -= A.data[q], K.data[q++] = Y & this.DM, Y >>= this.DB;
      Y -= A.s;
    }
    if (K.s = Y < 0 ? -1 : 0, Y < -1) K.data[q++] = this.DV + Y;else if (Y > 0) K.data[q++] = Y;
    K.t = q, K.clamp();
  }
  function eNY(A, K) {
    var q = this.abs(),
      Y = A.abs(),
      z = q.t;
    K.t = z + Y.t;
    while (--z >= 0) K.data[z] = 0;
    for (z = 0; z < Y.t; ++z) K.data[z + q.t] = q.am(0, Y.data[z], K, z, 0, q.t);
    if (K.s = 0, K.clamp(), this.s != A.s) L8.ZERO.subTo(K, K);
  }
  function ATY(A) {
    var K = this.abs(),
      q = A.t = 2 * K.t;
    while (--q >= 0) A.data[q] = 0;
    for (q = 0; q < K.t - 1; ++q) {
      var Y = K.am(q, K.data[q], A, 2 * q, 0, 1);
      if ((A.data[q + K.t] += K.am(q + 1, 2 * K.data[q], A, 2 * q + 1, Y, K.t - q - 1)) >= K.DV) A.data[q + K.t] -= K.DV, A.data[q + K.t + 1] = 1;
    }
    if (A.t > 0) A.data[A.t - 1] += K.am(q, K.data[q], A, 2 * q, 0, 1);
    A.s = 0, A.clamp();
  }
  function KTY(A, K, q) {
    var Y = A.abs();
    if (Y.t <= 0) return;
    var z = this.abs();
    if (z.t < Y.t) {
      if (K != null) K.fromInt(0);
      if (q != null) this.copyTo(q);
      return;
    }
    if (q == null) q = xY();
    var w = xY(),
      H = this.s,
      J = A.s,
      O = this.DB - sX1(Y.data[Y.t - 1]);
    if (O > 0) Y.lShiftTo(O, w), z.lShiftTo(O, q);else Y.copyTo(w), z.copyTo(q);
    var X = w.t,
      $ = w.data[X - 1];
    if ($ == 0) return;
    var _ = $ * (1 << this.F1) + (X > 1 ? w.data[X - 2] >> this.F2 : 0),
      G = this.FV / _,
      Z = (1 << this.F1) / _,
      W = 1 << this.F2,
      D = q.t,
      j = D - X,
      M = K == null ? xY() : K;
    if (w.dlShiftTo(j, M), q.compareTo(M) >= 0) q.data[q.t++] = 1, q.subTo(M, q);
    L8.ONE.dlShiftTo(X, M), M.subTo(w, w);
    while (w.t < X) w.data[w.t++] = 0;
    while (--j >= 0) {
      var P = q.data[--D] == $ ? this.DM : Math.floor(q.data[D] * G + (q.data[D - 1] + W) * Z);
      if ((q.data[D] += w.am(0, P, q, j, 0, X)) < P) {
        w.dlShiftTo(j, M), q.subTo(M, q);
        while (q.data[D] < --P) q.subTo(M, q);
      }
    }
    if (K != null) {
      if (q.drShiftTo(X, K), H != J) L8.ZERO.subTo(K, K);
    }
    if (q.t = X, q.clamp(), O > 0) q.rShiftTo(O, q);
    if (H < 0) L8.ZERO.subTo(q, q);
  }
  function qTY(A) {
    var K = xY();
    if (this.abs().divRemTo(A, null, K), this.s < 0 && K.compareTo(L8.ZERO) > 0) A.subTo(K, K);
    return K;
  }
  function EqA(A) {
    this.m = A;
  }
  function YTY(A) {
    if (A.s < 0 || A.compareTo(this.m) >= 0) return A.mod(this.m);else return A;
  }
  function zTY(A) {
    return A;
  }
  function wTY(A) {
    A.divRemTo(this.m, null, A);
  }
  function HTY(A, K, q) {
    A.multiplyTo(K, q), this.reduce(q);
  }
  function JTY(A, K) {
    A.squareTo(K), this.reduce(K);
  }
  EqA.prototype.convert = YTY;
  EqA.prototype.revert = zTY;
  EqA.prototype.reduce = wTY;
  EqA.prototype.mulTo = HTY;
  EqA.prototype.sqrTo = JTY;
  function OTY() {
    if (this.t < 1) return 0;
    var A = this.data[0];
    if ((A & 1) == 0) return 0;
    var K = A & 3;
    return K = K * (2 - (A & 15) * K) & 15, K = K * (2 - (A & 255) * K) & 255, K = K * (2 - ((A & 65535) * K & 65535)) & 65535, K = K * (2 - A * K % this.DV) % this.DV, K > 0 ? this.DV - K : -K;
  }
  function kqA(A) {
    this.m = A, this.mp = A.invDigit(), this.mpl = this.mp & 32767, this.mph = this.mp >> 15, this.um = (1 << A.DB - 15) - 1, this.mt2 = 2 * A.t;
  }
  function XTY(A) {
    var K = xY();
    if (A.abs().dlShiftTo(this.m.t, K), K.divRemTo(this.m, null, K), A.s < 0 && K.compareTo(L8.ZERO) > 0) this.m.subTo(K, K);
    return K;
  }
  function $TY(A) {
    var K = xY();
    return A.copyTo(K), this.reduce(K), K;
  }
  function _TY(A) {
    while (A.t <= this.mt2) A.data[A.t++] = 0;
    for (var K = 0; K < this.m.t; ++K) {
      var q = A.data[K] & 32767,
        Y = q * this.mpl + ((q * this.mph + (A.data[K] >> 15) * this.mpl & this.um) << 15) & A.DM;
      q = K + this.m.t, A.data[q] += this.m.am(0, Y, A, K, 0, this.m.t);
      while (A.data[q] >= A.DV) A.data[q] -= A.DV, A.data[++q]++;
    }
    if (A.clamp(), A.drShiftTo(this.m.t, A), A.compareTo(this.m) >= 0) A.subTo(this.m, A);
  }
  function GTY(A, K) {
    A.squareTo(K), this.reduce(K);
  }
  function ZTY(A, K, q) {
    A.multiplyTo(K, q), this.reduce(q);
  }
  kqA.prototype.convert = XTY;
  kqA.prototype.revert = $TY;
  kqA.prototype.reduce = _TY;
  kqA.prototype.mulTo = ZTY;
  kqA.prototype.sqrTo = GTY;
  function WTY() {
    return (this.t > 0 ? this.data[0] & 1 : this.s) == 0;
  }
  function DTY(A, K) {
    if (A > 4294967295 || A < 1) return L8.ONE;
    var q = xY(),
      Y = xY(),
      z = K.convert(this),
      w = sX1(A) - 1;
    z.copyTo(q);
    while (--w >= 0) if (K.sqrTo(q, Y), (A & 1 << w) > 0) K.mulTo(Y, z, q);else {
      var H = q;
      q = Y, Y = H;
    }
    return K.revert(q);
  }
  function jTY(A, K) {
    var q;
    if (A < 256 || K.isEven()) q = new EqA(K);else q = new kqA(K);
    return this.exp(A, q);
  }
  L8.prototype.copyTo = FNY;
  L8.prototype.fromInt = QNY;
  L8.prototype.fromString = UNY;
  L8.prototype.clamp = pNY;
  L8.prototype.dlShiftTo = rNY;
  L8.prototype.drShiftTo = oNY;
  L8.prototype.lShiftTo = aNY;
  L8.prototype.rShiftTo = sNY;
  L8.prototype.subTo = tNY;
  L8.prototype.multiplyTo = eNY;
  L8.prototype.squareTo = ATY;
  L8.prototype.divRemTo = KTY;
  L8.prototype.invDigit = OTY;
  L8.prototype.isEven = WTY;
  L8.prototype.exp = DTY;
  L8.prototype.toString = dNY;
  L8.prototype.negate = cNY;
  L8.prototype.abs = lNY;
  L8.prototype.compareTo = iNY;
  L8.prototype.bitLength = nNY;
  L8.prototype.mod = qTY;
  L8.prototype.modPowInt = jTY;
  L8.ZERO = xa(0);
  L8.ONE = xa(1);
  function MTY() {
    var A = xY();
    return this.copyTo(A), A;
  }
  function PTY() {
    if (this.s < 0) {
      if (this.t == 1) return this.data[0] - this.DV;else if (this.t == 0) return -1;
    } else if (this.t == 1) return this.data[0];else if (this.t == 0) return 0;
    return (this.data[1] & (1 << 32 - this.DB) - 1) << this.DB | this.data[0];
  }
  function VTY() {
    return this.t == 0 ? this.s : this.data[0] << 24 >> 24;
  }
  function fTY() {
    return this.t == 0 ? this.s : this.data[0] << 16 >> 16;
  }
  function NTY(A) {
    return Math.floor(Math.LN2 * this.DB / Math.log(A));
  }
  function TTY() {
    if (this.s < 0) return -1;else if (this.t <= 0 || this.t == 1 && this.data[0] <= 0) return 0;else return 1;
  }
  function vTY(A) {
    if (A == null) A = 10;
    if (this.signum() == 0 || A < 2 || A > 36) return "0";
    var K = this.chunkSize(A),
      q = Math.pow(A, K),
      Y = xa(q),
      z = xY(),
      w = xY(),
      H = "";
    this.divRemTo(Y, z, w);
    while (z.signum() > 0) H = (q + w.intValue()).toString(A).substr(1) + H, z.divRemTo(Y, z, w);
    return w.intValue().toString(A) + H;
  }
  function ETY(A, K) {
    if (this.fromInt(0), K == null) K = 10;
    var q = this.chunkSize(K),
      Y = Math.pow(K, q),
      z = !1,
      w = 0,
      H = 0;
    for (var J = 0; J < A.length; ++J) {
      var O = m_7(A, J);
      if (O < 0) {
        if (A.charAt(J) == "-" && this.signum() == 0) z = !0;
        continue;
      }
      if (H = K * H + O, ++w >= q) this.dMultiply(Y), this.dAddOffset(H, 0), w = 0, H = 0;
    }
    if (w > 0) this.dMultiply(Math.pow(K, w)), this.dAddOffset(H, 0);
    if (z) L8.ZERO.subTo(this, this);
  }
  function kTY(A, K, q) {
    if (typeof K == "number") {
      if (A < 2) this.fromInt(1);else {
        if (this.fromNumber(A, q), !this.testBit(A - 1)) this.bitwiseTo(L8.ONE.shiftLeft(A - 1), tD6, this);
        if (this.isEven()) this.dAddOffset(1, 0);
        while (!this.isProbablePrime(K)) if (this.dAddOffset(2, 0), this.bitLength() > A) this.subTo(L8.ONE.shiftLeft(A - 1), this);
      }
    } else {
      var Y = [],
        z = A & 7;
      if (Y.length = (A >> 3) + 1, K.nextBytes(Y), z > 0) Y[0] &= (1 << z) - 1;else Y[0] = 0;
      this.fromString(Y, 256);
    }
  }
  function CTY() {
    var A = this.t,
      K = [];
    K[0] = this.s;
    var q = this.DB - A * this.DB % 8,
      Y,
      z = 0;
    if (A-- > 0) {
      if (q < this.DB && (Y = this.data[A] >> q) != (this.s & this.DM) >> q) K[z++] = Y | this.s << this.DB - q;
      while (A >= 0) {
        if (q < 8) Y = (this.data[A] & (1 << q) - 1) << 8 - q, Y |= this.data[--A] >> (q += this.DB - 8);else if (Y = this.data[A] >> (q -= 8) & 255, q <= 0) q += this.DB, --A;
        if ((Y & 128) != 0) Y |= -256;
        if (z == 0 && (this.s & 128) != (Y & 128)) ++z;
        if (z > 0 || Y != this.s) K[z++] = Y;
      }
    }
    return K;
  }
  function LTY(A) {
    return this.compareTo(A) == 0;
  }
  function RTY(A) {
    return this.compareTo(A) < 0 ? this : A;
  }
  function yTY(A) {
    return this.compareTo(A) > 0 ? this : A;
  }
  function ITY(A, K, q) {
    var Y,
      z,
      w = Math.min(A.t, this.t);
    for (Y = 0; Y < w; ++Y) q.data[Y] = K(this.data[Y], A.data[Y]);
    if (A.t < this.t) {
      z = A.s & this.DM;
      for (Y = w; Y < this.t; ++Y) q.data[Y] = K(this.data[Y], z);
      q.t = this.t;
    } else {
      z = this.s & this.DM;
      for (Y = w; Y < A.t; ++Y) q.data[Y] = K(z, A.data[Y]);
      q.t = A.t;
    }
    q.s = K(this.s, A.s), q.clamp();
  }
  function STY(A, K) {
    return A & K;
  }
  function hTY(A) {
    var K = xY();
    return this.bitwiseTo(A, STY, K), K;
  }
  function tD6(A, K) {
    return A | K;
  }
  function bTY(A) {
    var K = xY();
    return this.bitwiseTo(A, tD6, K), K;
  }
  function g_7(A, K) {
    return A ^ K;
  }
  function xTY(A) {
    var K = xY();
    return this.bitwiseTo(A, g_7, K), K;
  }
  function F_7(A, K) {
    return A & ~K;
  }
  function uTY(A) {
    var K = xY();
    return this.bitwiseTo(A, F_7, K), K;
  }
  function BTY() {
    var A = xY();
    for (var K = 0; K < this.t; ++K) A.data[K] = this.DM & ~this.data[K];
    return A.t = this.t, A.s = ~this.s, A;
  }
  function mTY(A) {
    var K = xY();
    if (A < 0) this.rShiftTo(-A, K);else this.lShiftTo(A, K);
    return K;
  }
  function gTY(A) {
    var K = xY();
    if (A < 0) this.lShiftTo(-A, K);else this.rShiftTo(A, K);
    return K;
  }
  function FTY(A) {
    if (A == 0) return -1;
    var K = 0;
    if ((A & 65535) == 0) A >>= 16, K += 16;
    if ((A & 255) == 0) A >>= 8, K += 8;
    if ((A & 15) == 0) A >>= 4, K += 4;
    if ((A & 3) == 0) A >>= 2, K += 2;
    if ((A & 1) == 0) ++K;
    return K;
  }
  function QTY() {
    for (var A = 0; A < this.t; ++A) if (this.data[A] != 0) return A * this.DB + FTY(this.data[A]);
    if (this.s < 0) return this.t * this.DB;
    return -1;
  }
  function UTY(A) {
    var K = 0;
    while (A != 0) A &= A - 1, ++K;
    return K;
  }
  function pTY() {
    var A = 0,
      K = this.s & this.DM;
    for (var q = 0; q < this.t; ++q) A += UTY(this.data[q] ^ K);
    return A;
  }
  function dTY(A) {
    var K = Math.floor(A / this.DB);
    if (K >= this.t) return this.s != 0;
    return (this.data[K] & 1 << A % this.DB) != 0;
  }
  function cTY(A, K) {
    var q = L8.ONE.shiftLeft(A);
    return this.bitwiseTo(q, K, q), q;
  }
  function lTY(A) {
    return this.changeBit(A, tD6);
  }
  function iTY(A) {
    return this.changeBit(A, F_7);
  }
  function nTY(A) {
    return this.changeBit(A, g_7);
  }
  function rTY(A, K) {
    var q = 0,
      Y = 0,
      z = Math.min(A.t, this.t);
    while (q < z) Y += this.data[q] + A.data[q], K.data[q++] = Y & this.DM, Y >>= this.DB;
    if (A.t < this.t) {
      Y += A.s;
      while (q < this.t) Y += this.data[q], K.data[q++] = Y & this.DM, Y >>= this.DB;
      Y += this.s;
    } else {
      Y += this.s;
      while (q < A.t) Y += A.data[q], K.data[q++] = Y & this.DM, Y >>= this.DB;
      Y += A.s;
    }
    if (K.s = Y < 0 ? -1 : 0, Y > 0) K.data[q++] = Y;else if (Y < -1) K.data[q++] = this.DV + Y;
    K.t = q, K.clamp();
  }
  function oTY(A) {
    var K = xY();
    return this.addTo(A, K), K;
  }
  function aTY(A) {
    var K = xY();
    return this.subTo(A, K), K;
  }
  function sTY(A) {
    var K = xY();
    return this.multiplyTo(A, K), K;
  }
  function tTY(A) {
    var K = xY();
    return this.divRemTo(A, K, null), K;
  }
  function eTY(A) {
    var K = xY();
    return this.divRemTo(A, null, K), K;
  }
  function AvY(A) {
    var K = xY(),
      q = xY();
    return this.divRemTo(A, K, q), [K, q];
  }
  function KvY(A) {
    this.data[this.t] = this.am(0, A - 1, this, 0, 0, this.t), ++this.t, this.clamp();
  }
  function qvY(A, K) {
    if (A == 0) return;
    while (this.t <= K) this.data[this.t++] = 0;
    this.data[K] += A;
    while (this.data[K] >= this.DV) {
      if (this.data[K] -= this.DV, ++K >= this.t) this.data[this.t++] = 0;
      ++this.data[K];
    }
  }
  function PBA() {}
  function Q_7(A) {
    return A;
  }
  function YvY(A, K, q) {
    A.multiplyTo(K, q);
  }
  function zvY(A, K) {
    A.squareTo(K);
  }
  PBA.prototype.convert = Q_7;
  PBA.prototype.revert = Q_7;
  PBA.prototype.mulTo = YvY;
  PBA.prototype.sqrTo = zvY;
  function wvY(A) {
    return this.exp(A, new PBA());
  }
  function HvY(A, K, q) {
    var Y = Math.min(this.t + A.t, K);
    q.s = 0, q.t = Y;
    while (Y > 0) q.data[--Y] = 0;
    var z;
    for (z = q.t - this.t; Y < z; ++Y) q.data[Y + this.t] = this.am(0, A.data[Y], q, Y, 0, this.t);
    for (z = Math.min(A.t, K); Y < z; ++Y) this.am(0, A.data[Y], q, Y, 0, K - Y);
    q.clamp();
  }
  function JvY(A, K, q) {
    --K;
    var Y = q.t = this.t + A.t - K;
    q.s = 0;
    while (--Y >= 0) q.data[Y] = 0;
    for (Y = Math.max(K - this.t, 0); Y < A.t; ++Y) q.data[this.t + Y - K] = this.am(K - Y, A.data[Y], q, 0, 0, this.t + Y - K);
    q.clamp(), q.drShiftTo(1, q);
  }
  function IZA(A) {
    this.r2 = xY(), this.q3 = xY(), L8.ONE.dlShiftTo(2 * A.t, this.r2), this.mu = this.r2.divide(A), this.m = A;
  }
  function OvY(A) {
    if (A.s < 0 || A.t > 2 * this.m.t) return A.mod(this.m);else if (A.compareTo(this.m) < 0) return A;else {
      var K = xY();
      return A.copyTo(K), this.reduce(K), K;
    }
  }
  function XvY(A) {
    return A;
  }
  function $vY(A) {
    if (A.drShiftTo(this.m.t - 1, this.r2), A.t > this.m.t + 1) A.t = this.m.t + 1, A.clamp();
    this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
    while (A.compareTo(this.r2) < 0) A.dAddOffset(1, this.m.t + 1);
    A.subTo(this.r2, A);
    while (A.compareTo(this.m) >= 0) A.subTo(this.m, A);
  }
  function _vY(A, K) {
    A.squareTo(K), this.reduce(K);
  }
  function GvY(A, K, q) {
    A.multiplyTo(K, q), this.reduce(q);
  }
  IZA.prototype.convert = OvY;
  IZA.prototype.revert = XvY;
  IZA.prototype.reduce = $vY;
  IZA.prototype.mulTo = GvY;
  IZA.prototype.sqrTo = _vY;
  function ZvY(A, K) {
    var q = A.bitLength(),
      Y,
      z = xa(1),
      w;
    if (q <= 0) return z;else if (q < 18) Y = 1;else if (q < 48) Y = 3;else if (q < 144) Y = 4;else if (q < 768) Y = 5;else Y = 6;
    if (q < 8) w = new EqA(K);else if (K.isEven()) w = new IZA(K);else w = new kqA(K);
    var H = [],
      J = 3,
      O = Y - 1,
      X = (1 << Y) - 1;
    if (H[1] = w.convert(this), Y > 1) {
      var $ = xY();
      w.sqrTo(H[1], $);
      while (J <= X) H[J] = xY(), w.mulTo($, H[J - 2], H[J]), J += 2;
    }
    var _ = A.t - 1,
      G,
      Z = !0,
      W = xY(),
      D;
    q = sX1(A.data[_]) - 1;
    while (_ >= 0) {
      if (q >= O) G = A.data[_] >> q - O & X;else if (G = (A.data[_] & (1 << q + 1) - 1) << O - q, _ > 0) G |= A.data[_ - 1] >> this.DB + q - O;
      J = Y;
      while ((G & 1) == 0) G >>= 1, --J;
      if ((q -= J) < 0) q += this.DB, --_;
      if (Z) H[G].copyTo(z), Z = !1;else {
        while (J > 1) w.sqrTo(z, W), w.sqrTo(W, z), J -= 2;
        if (J > 0) w.sqrTo(z, W);else D = z, z = W, W = D;
        w.mulTo(W, H[G], z);
      }
      while (_ >= 0 && (A.data[_] & 1 << q) == 0) if (w.sqrTo(z, W), D = z, z = W, W = D, --q < 0) q = this.DB - 1, --_;
    }
    return w.revert(z);
  }
  function WvY(A) {
    var K = this.s < 0 ? this.negate() : this.clone(),
      q = A.s < 0 ? A.negate() : A.clone();
    if (K.compareTo(q) < 0) {
      var Y = K;
      K = q, q = Y;
    }
    var z = K.getLowestSetBit(),
      w = q.getLowestSetBit();
    if (w < 0) return K;
    if (z < w) w = z;
    if (w > 0) K.rShiftTo(w, K), q.rShiftTo(w, q);
    while (K.signum() > 0) {
      if ((z = K.getLowestSetBit()) > 0) K.rShiftTo(z, K);
      if ((z = q.getLowestSetBit()) > 0) q.rShiftTo(z, q);
      if (K.compareTo(q) >= 0) K.subTo(q, K), K.rShiftTo(1, K);else q.subTo(K, q), q.rShiftTo(1, q);
    }
    if (w > 0) q.lShiftTo(w, q);
    return q;
  }
  function DvY(A) {
    if (A <= 0) return 0;
    var K = this.DV % A,
      q = this.s < 0 ? A - 1 : 0;
    if (this.t > 0) if (K == 0) q = this.data[0] % A;else for (var Y = this.t - 1; Y >= 0; --Y) q = (K * q + this.data[Y]) % A;
    return q;
  }
  function jvY(A) {
    var K = A.isEven();
    if (this.isEven() && K || A.signum() == 0) return L8.ZERO;
    var q = A.clone(),
      Y = this.clone(),
      z = xa(1),
      w = xa(0),
      H = xa(0),
      J = xa(1);
    while (q.signum() != 0) {
      while (q.isEven()) {
        if (q.rShiftTo(1, q), K) {
          if (!z.isEven() || !w.isEven()) z.addTo(this, z), w.subTo(A, w);
          z.rShiftTo(1, z);
        } else if (!w.isEven()) w.subTo(A, w);
        w.rShiftTo(1, w);
      }
      while (Y.isEven()) {
        if (Y.rShiftTo(1, Y), K) {
          if (!H.isEven() || !J.isEven()) H.addTo(this, H), J.subTo(A, J);
          H.rShiftTo(1, H);
        } else if (!J.isEven()) J.subTo(A, J);
        J.rShiftTo(1, J);
      }
      if (q.compareTo(Y) >= 0) {
        if (q.subTo(Y, q), K) z.subTo(H, z);
        w.subTo(J, w);
      } else {
        if (Y.subTo(q, Y), K) H.subTo(z, H);
        J.subTo(w, J);
      }
    }
    if (Y.compareTo(L8.ONE) != 0) return L8.ZERO;
    if (J.compareTo(A) >= 0) return J.subtract(A);
    if (J.signum() < 0) J.addTo(A, J);else return J;
    if (J.signum() < 0) return J.add(A);else return J;
  }
  var uI = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509],
    MvY = 67108864 / uI[uI.length - 1];
  function PvY(A) {
    var K,
      q = this.abs();
    if (q.t == 1 && q.data[0] <= uI[uI.length - 1]) {
      for (K = 0; K < uI.length; ++K) if (q.data[0] == uI[K]) return !0;
      return !1;
    }
    if (q.isEven()) return !1;
    K = 1;
    while (K < uI.length) {
      var Y = uI[K],
        z = K + 1;
      while (z < uI.length && Y < MvY) Y *= uI[z++];
      Y = q.modInt(Y);
      while (K < z) if (Y % uI[K++] == 0) return !1;
    }
    return q.millerRabin(A);
  }
  function VvY(A) {
    var K = this.subtract(L8.ONE),
      q = K.getLowestSetBit();
    if (q <= 0) return !1;
    var Y = K.shiftRight(q),
      z = fvY(),
      w;
    for (var H = 0; H < A; ++H) {
      do w = new L8(this.bitLength(), z); while (w.compareTo(L8.ONE) <= 0 || w.compareTo(K) >= 0);
      var J = w.modPow(Y, this);
      if (J.compareTo(L8.ONE) != 0 && J.compareTo(K) != 0) {
        var O = 1;
        while (O++ < q && J.compareTo(K) != 0) if (J = J.modPowInt(2, this), J.compareTo(L8.ONE) == 0) return !1;
        if (J.compareTo(K) != 0) return !1;
      }
    }
    return !0;
  }
  function fvY() {
    return {
      nextBytes: function (A) {
        for (var K = 0; K < A.length; ++K) A[K] = Math.floor(Math.random() * 256);
      }
    };
  }
  L8.prototype.chunkSize = NTY;
  L8.prototype.toRadix = vTY;
  L8.prototype.fromRadix = ETY;
  L8.prototype.fromNumber = kTY;
  L8.prototype.bitwiseTo = ITY;
  L8.prototype.changeBit = cTY;
  L8.prototype.addTo = rTY;
  L8.prototype.dMultiply = KvY;
  L8.prototype.dAddOffset = qvY;
  L8.prototype.multiplyLowerTo = HvY;
  L8.prototype.multiplyUpperTo = JvY;
  L8.prototype.modInt = DvY;
  L8.prototype.millerRabin = VvY;
  L8.prototype.clone = MTY;
  L8.prototype.intValue = PTY;
  L8.prototype.byteValue = VTY;
  L8.prototype.shortValue = fTY;
  L8.prototype.signum = TTY;
  L8.prototype.toByteArray = CTY;
  L8.prototype.equals = LTY;
  L8.prototype.min = RTY;
  L8.prototype.max = yTY;
  L8.prototype.and = hTY;
  L8.prototype.or = bTY;
  L8.prototype.xor = xTY;
  L8.prototype.andNot = uTY;
  L8.prototype.not = BTY;
  L8.prototype.shiftLeft = mTY;
  L8.prototype.shiftRight = gTY;
  L8.prototype.getLowestSetBit = QTY;
  L8.prototype.bitCount = pTY;
  L8.prototype.testBit = dTY;
  L8.prototype.setBit = lTY;
  L8.prototype.clearBit = iTY;
  L8.prototype.flipBit = nTY;
  L8.prototype.add = oTY;
  L8.prototype.subtract = aTY;
  L8.prototype.multiply = sTY;
  L8.prototype.divide = tTY;
  L8.prototype.remainder = eTY;
  L8.prototype.divideAndRemainder = AvY;
  L8.prototype.modPow = ZvY;
  L8.prototype.modInverse = jvY;
  L8.prototype.pow = wvY;
  L8.prototype.gcd = WvY;
  L8.prototype.isProbablePrime = PvY;
});

// Register to shared state
__$.VBA = VBA;
