// Module: ZGA
// Dependencies: XxA, $xA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZGA = v((Lu, s87) => {
  var {
      MAX_SAFE_COMPONENT_LENGTH: J$6,
      MAX_SAFE_BUILD_LENGTH: XKY,
      MAX_LENGTH: $KY
    } = __$.XxA(),
    _KY = __$.$xA();
  Lu = s87.exports = {};
  var GKY = Lu.re = [],
    ZKY = Lu.safeRe = [],
    y7 = Lu.src = [],
    WKY = Lu.safeSrc = [],
    I7 = Lu.t = {},
    DKY = 0,
    O$6 = "[a-zA-Z0-9-]",
    jKY = [["\\s", 1], ["\\d", $KY], [O$6, XKY]],
    MKY = A => {
      for (let [K, q] of jKY) A = A.split(`${K}*`).join(`${K}{0,${q}}`).split(`${K}+`).join(`${K}{1,${q}}`);
      return A;
    },
    d5 = (A, K, q) => {
      let Y = MKY(K),
        z = DKY++;
      _KY(A, z, K), I7[A] = z, y7[z] = K, WKY[z] = Y, GKY[z] = new RegExp(K, q ? "g" : void 0), ZKY[z] = new RegExp(Y, q ? "g" : void 0);
    };
  d5("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  d5("NUMERICIDENTIFIERLOOSE", "\\d+");
  d5("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${O$6}*`);
  d5("MAINVERSION", `(${y7[I7.NUMERICIDENTIFIER]})\\.(${y7[I7.NUMERICIDENTIFIER]})\\.(${y7[I7.NUMERICIDENTIFIER]})`);
  d5("MAINVERSIONLOOSE", `(${y7[I7.NUMERICIDENTIFIERLOOSE]})\\.(${y7[I7.NUMERICIDENTIFIERLOOSE]})\\.(${y7[I7.NUMERICIDENTIFIERLOOSE]})`);
  d5("PRERELEASEIDENTIFIER", `(?:${y7[I7.NUMERICIDENTIFIER]}|${y7[I7.NONNUMERICIDENTIFIER]})`);
  d5("PRERELEASEIDENTIFIERLOOSE", `(?:${y7[I7.NUMERICIDENTIFIERLOOSE]}|${y7[I7.NONNUMERICIDENTIFIER]})`);
  d5("PRERELEASE", `(?:-(${y7[I7.PRERELEASEIDENTIFIER]}(?:\\.${y7[I7.PRERELEASEIDENTIFIER]})*))`);
  d5("PRERELEASELOOSE", `(?:-?(${y7[I7.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${y7[I7.PRERELEASEIDENTIFIERLOOSE]})*))`);
  d5("BUILDIDENTIFIER", `${O$6}+`);
  d5("BUILD", `(?:\\+(${y7[I7.BUILDIDENTIFIER]}(?:\\.${y7[I7.BUILDIDENTIFIER]})*))`);
  d5("FULLPLAIN", `v?${y7[I7.MAINVERSION]}${y7[I7.PRERELEASE]}?${y7[I7.BUILD]}?`);
  d5("FULL", `^${y7[I7.FULLPLAIN]}$`);
  d5("LOOSEPLAIN", `[v=\\s]*${y7[I7.MAINVERSIONLOOSE]}${y7[I7.PRERELEASELOOSE]}?${y7[I7.BUILD]}?`);
  d5("LOOSE", `^${y7[I7.LOOSEPLAIN]}$`);
  d5("GTLT", "((?:<|>)?=?)");
  d5("XRANGEIDENTIFIERLOOSE", `${y7[I7.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  d5("XRANGEIDENTIFIER", `${y7[I7.NUMERICIDENTIFIER]}|x|X|\\*`);
  d5("XRANGEPLAIN", `[v=\\s]*(${y7[I7.XRANGEIDENTIFIER]})(?:\\.(${y7[I7.XRANGEIDENTIFIER]})(?:\\.(${y7[I7.XRANGEIDENTIFIER]})(?:${y7[I7.PRERELEASE]})?${y7[I7.BUILD]}?)?)?`);
  d5("XRANGEPLAINLOOSE", `[v=\\s]*(${y7[I7.XRANGEIDENTIFIERLOOSE]})(?:\\.(${y7[I7.XRANGEIDENTIFIERLOOSE]})(?:\\.(${y7[I7.XRANGEIDENTIFIERLOOSE]})(?:${y7[I7.PRERELEASELOOSE]})?${y7[I7.BUILD]}?)?)?`);
  d5("XRANGE", `^${y7[I7.GTLT]}\\s*${y7[I7.XRANGEPLAIN]}$`);
  d5("XRANGELOOSE", `^${y7[I7.GTLT]}\\s*${y7[I7.XRANGEPLAINLOOSE]}$`);
  d5("COERCEPLAIN", `(^|[^\\d])(\\d{1,${J$6}})(?:\\.(\\d{1,${J$6}}))?(?:\\.(\\d{1,${J$6}}))?`);
  d5("COERCE", `${y7[I7.COERCEPLAIN]}(?:$|[^\\d])`);
  d5("COERCEFULL", y7[I7.COERCEPLAIN] + `(?:${y7[I7.PRERELEASE]})?(?:${y7[I7.BUILD]})?(?:$|[^\\d])`);
  d5("COERCERTL", y7[I7.COERCE], !0);
  d5("COERCERTLFULL", y7[I7.COERCEFULL], !0);
  d5("LONETILDE", "(?:~>?)");
  d5("TILDETRIM", `(\\s*)${y7[I7.LONETILDE]}\\s+`, !0);
  Lu.tildeTrimReplace = "$1~";
  d5("TILDE", `^${y7[I7.LONETILDE]}${y7[I7.XRANGEPLAIN]}$`);
  d5("TILDELOOSE", `^${y7[I7.LONETILDE]}${y7[I7.XRANGEPLAINLOOSE]}$`);
  d5("LONECARET", "(?:\\^)");
  d5("CARETTRIM", `(\\s*)${y7[I7.LONECARET]}\\s+`, !0);
  Lu.caretTrimReplace = "$1^";
  d5("CARET", `^${y7[I7.LONECARET]}${y7[I7.XRANGEPLAIN]}$`);
  d5("CARETLOOSE", `^${y7[I7.LONECARET]}${y7[I7.XRANGEPLAINLOOSE]}$`);
  d5("COMPARATORLOOSE", `^${y7[I7.GTLT]}\\s*(${y7[I7.LOOSEPLAIN]})$|^$`);
  d5("COMPARATOR", `^${y7[I7.GTLT]}\\s*(${y7[I7.FULLPLAIN]})$|^$`);
  d5("COMPARATORTRIM", `(\\s*)${y7[I7.GTLT]}\\s*(${y7[I7.LOOSEPLAIN]}|${y7[I7.XRANGEPLAIN]})`, !0);
  Lu.comparatorTrimReplace = "$1$2$3";
  d5("HYPHENRANGE", `^\\s*(${y7[I7.XRANGEPLAIN]})\\s+-\\s+(${y7[I7.XRANGEPLAIN]})\\s*$`);
  d5("HYPHENRANGELOOSE", `^\\s*(${y7[I7.XRANGEPLAINLOOSE]})\\s+-\\s+(${y7[I7.XRANGEPLAINLOOSE]})\\s*$`);
  d5("STAR", "(<|>)?=?\\s*\\*");
  d5("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  d5("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
});

// Register to shared state
__$.ZGA = ZGA;
