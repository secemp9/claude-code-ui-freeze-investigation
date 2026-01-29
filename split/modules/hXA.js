// Module: hXA
// Dependencies: dyA, cyA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hXA = v((ux, UX4) => {
  var {
      MAX_SAFE_COMPONENT_LENGTH: rK6,
      MAX_SAFE_BUILD_LENGTH: Ye3,
      MAX_LENGTH: ze3
    } = __$.dyA(),
    we3 = __$.cyA();
  ux = UX4.exports = {};
  var He3 = ux.re = [],
    Je3 = ux.safeRe = [],
    k7 = ux.src = [],
    Oe3 = ux.safeSrc = [],
    C7 = ux.t = {},
    Xe3 = 0,
    oK6 = "[a-zA-Z0-9-]",
    $e3 = [["\\s", 1], ["\\d", ze3], [oK6, Ye3]],
    _e3 = A => {
      for (let [K, q] of $e3) A = A.split(`${K}*`).join(`${K}{0,${q}}`).split(`${K}+`).join(`${K}{1,${q}}`);
      return A;
    },
    F5 = (A, K, q) => {
      let Y = _e3(K),
        z = Xe3++;
      we3(A, z, K), C7[A] = z, k7[z] = K, Oe3[z] = Y, He3[z] = new RegExp(K, q ? "g" : void 0), Je3[z] = new RegExp(Y, q ? "g" : void 0);
    };
  F5("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  F5("NUMERICIDENTIFIERLOOSE", "\\d+");
  F5("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${oK6}*`);
  F5("MAINVERSION", `(${k7[C7.NUMERICIDENTIFIER]})\\.(${k7[C7.NUMERICIDENTIFIER]})\\.(${k7[C7.NUMERICIDENTIFIER]})`);
  F5("MAINVERSIONLOOSE", `(${k7[C7.NUMERICIDENTIFIERLOOSE]})\\.(${k7[C7.NUMERICIDENTIFIERLOOSE]})\\.(${k7[C7.NUMERICIDENTIFIERLOOSE]})`);
  F5("PRERELEASEIDENTIFIER", `(?:${k7[C7.NONNUMERICIDENTIFIER]}|${k7[C7.NUMERICIDENTIFIER]})`);
  F5("PRERELEASEIDENTIFIERLOOSE", `(?:${k7[C7.NONNUMERICIDENTIFIER]}|${k7[C7.NUMERICIDENTIFIERLOOSE]})`);
  F5("PRERELEASE", `(?:-(${k7[C7.PRERELEASEIDENTIFIER]}(?:\\.${k7[C7.PRERELEASEIDENTIFIER]})*))`);
  F5("PRERELEASELOOSE", `(?:-?(${k7[C7.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${k7[C7.PRERELEASEIDENTIFIERLOOSE]})*))`);
  F5("BUILDIDENTIFIER", `${oK6}+`);
  F5("BUILD", `(?:\\+(${k7[C7.BUILDIDENTIFIER]}(?:\\.${k7[C7.BUILDIDENTIFIER]})*))`);
  F5("FULLPLAIN", `v?${k7[C7.MAINVERSION]}${k7[C7.PRERELEASE]}?${k7[C7.BUILD]}?`);
  F5("FULL", `^${k7[C7.FULLPLAIN]}$`);
  F5("LOOSEPLAIN", `[v=\\s]*${k7[C7.MAINVERSIONLOOSE]}${k7[C7.PRERELEASELOOSE]}?${k7[C7.BUILD]}?`);
  F5("LOOSE", `^${k7[C7.LOOSEPLAIN]}$`);
  F5("GTLT", "((?:<|>)?=?)");
  F5("XRANGEIDENTIFIERLOOSE", `${k7[C7.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  F5("XRANGEIDENTIFIER", `${k7[C7.NUMERICIDENTIFIER]}|x|X|\\*`);
  F5("XRANGEPLAIN", `[v=\\s]*(${k7[C7.XRANGEIDENTIFIER]})(?:\\.(${k7[C7.XRANGEIDENTIFIER]})(?:\\.(${k7[C7.XRANGEIDENTIFIER]})(?:${k7[C7.PRERELEASE]})?${k7[C7.BUILD]}?)?)?`);
  F5("XRANGEPLAINLOOSE", `[v=\\s]*(${k7[C7.XRANGEIDENTIFIERLOOSE]})(?:\\.(${k7[C7.XRANGEIDENTIFIERLOOSE]})(?:\\.(${k7[C7.XRANGEIDENTIFIERLOOSE]})(?:${k7[C7.PRERELEASELOOSE]})?${k7[C7.BUILD]}?)?)?`);
  F5("XRANGE", `^${k7[C7.GTLT]}\\s*${k7[C7.XRANGEPLAIN]}$`);
  F5("XRANGELOOSE", `^${k7[C7.GTLT]}\\s*${k7[C7.XRANGEPLAINLOOSE]}$`);
  F5("COERCEPLAIN", `(^|[^\\d])(\\d{1,${rK6}})(?:\\.(\\d{1,${rK6}}))?(?:\\.(\\d{1,${rK6}}))?`);
  F5("COERCE", `${k7[C7.COERCEPLAIN]}(?:$|[^\\d])`);
  F5("COERCEFULL", k7[C7.COERCEPLAIN] + `(?:${k7[C7.PRERELEASE]})?(?:${k7[C7.BUILD]})?(?:$|[^\\d])`);
  F5("COERCERTL", k7[C7.COERCE], !0);
  F5("COERCERTLFULL", k7[C7.COERCEFULL], !0);
  F5("LONETILDE", "(?:~>?)");
  F5("TILDETRIM", `(\\s*)${k7[C7.LONETILDE]}\\s+`, !0);
  ux.tildeTrimReplace = "$1~";
  F5("TILDE", `^${k7[C7.LONETILDE]}${k7[C7.XRANGEPLAIN]}$`);
  F5("TILDELOOSE", `^${k7[C7.LONETILDE]}${k7[C7.XRANGEPLAINLOOSE]}$`);
  F5("LONECARET", "(?:\\^)");
  F5("CARETTRIM", `(\\s*)${k7[C7.LONECARET]}\\s+`, !0);
  ux.caretTrimReplace = "$1^";
  F5("CARET", `^${k7[C7.LONECARET]}${k7[C7.XRANGEPLAIN]}$`);
  F5("CARETLOOSE", `^${k7[C7.LONECARET]}${k7[C7.XRANGEPLAINLOOSE]}$`);
  F5("COMPARATORLOOSE", `^${k7[C7.GTLT]}\\s*(${k7[C7.LOOSEPLAIN]})$|^$`);
  F5("COMPARATOR", `^${k7[C7.GTLT]}\\s*(${k7[C7.FULLPLAIN]})$|^$`);
  F5("COMPARATORTRIM", `(\\s*)${k7[C7.GTLT]}\\s*(${k7[C7.LOOSEPLAIN]}|${k7[C7.XRANGEPLAIN]})`, !0);
  ux.comparatorTrimReplace = "$1$2$3";
  F5("HYPHENRANGE", `^\\s*(${k7[C7.XRANGEPLAIN]})\\s+-\\s+(${k7[C7.XRANGEPLAIN]})\\s*$`);
  F5("HYPHENRANGELOOSE", `^\\s*(${k7[C7.XRANGEPLAINLOOSE]})\\s+-\\s+(${k7[C7.XRANGEPLAINLOOSE]})\\s*$`);
  F5("STAR", "(<|>)?=?\\s*\\*");
  F5("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  F5("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
});

// Register to shared state
__$.hXA = hXA;
