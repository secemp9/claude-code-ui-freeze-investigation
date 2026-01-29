// Module: WSA
// Dependencies: vY1, ZSA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var WSA = v((tx, Jb4) => {
  var {
      MAX_SAFE_COMPONENT_LENGTH: NY6,
      MAX_SAFE_BUILD_LENGTH: Bv9,
      MAX_LENGTH: mv9
    } = __$.vY1(),
    gv9 = __$.ZSA();
  tx = Jb4.exports = {};
  var Fv9 = tx.re = [],
    Qv9 = tx.safeRe = [],
    L7 = tx.src = [],
    Uv9 = tx.safeSrc = [],
    R7 = tx.t = {},
    pv9 = 0,
    TY6 = "[a-zA-Z0-9-]",
    dv9 = [["\\s", 1], ["\\d", mv9], [TY6, Bv9]],
    cv9 = A => {
      for (let [K, q] of dv9) A = A.split(`${K}*`).join(`${K}{0,${q}}`).split(`${K}+`).join(`${K}{1,${q}}`);
      return A;
    },
    Q5 = (A, K, q) => {
      let Y = cv9(K),
        z = pv9++;
      gv9(A, z, K), R7[A] = z, L7[z] = K, Uv9[z] = Y, Fv9[z] = new RegExp(K, q ? "g" : void 0), Qv9[z] = new RegExp(Y, q ? "g" : void 0);
    };
  Q5("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  Q5("NUMERICIDENTIFIERLOOSE", "\\d+");
  Q5("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${TY6}*`);
  Q5("MAINVERSION", `(${L7[R7.NUMERICIDENTIFIER]})\\.(${L7[R7.NUMERICIDENTIFIER]})\\.(${L7[R7.NUMERICIDENTIFIER]})`);
  Q5("MAINVERSIONLOOSE", `(${L7[R7.NUMERICIDENTIFIERLOOSE]})\\.(${L7[R7.NUMERICIDENTIFIERLOOSE]})\\.(${L7[R7.NUMERICIDENTIFIERLOOSE]})`);
  Q5("PRERELEASEIDENTIFIER", `(?:${L7[R7.NUMERICIDENTIFIER]}|${L7[R7.NONNUMERICIDENTIFIER]})`);
  Q5("PRERELEASEIDENTIFIERLOOSE", `(?:${L7[R7.NUMERICIDENTIFIERLOOSE]}|${L7[R7.NONNUMERICIDENTIFIER]})`);
  Q5("PRERELEASE", `(?:-(${L7[R7.PRERELEASEIDENTIFIER]}(?:\\.${L7[R7.PRERELEASEIDENTIFIER]})*))`);
  Q5("PRERELEASELOOSE", `(?:-?(${L7[R7.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${L7[R7.PRERELEASEIDENTIFIERLOOSE]})*))`);
  Q5("BUILDIDENTIFIER", `${TY6}+`);
  Q5("BUILD", `(?:\\+(${L7[R7.BUILDIDENTIFIER]}(?:\\.${L7[R7.BUILDIDENTIFIER]})*))`);
  Q5("FULLPLAIN", `v?${L7[R7.MAINVERSION]}${L7[R7.PRERELEASE]}?${L7[R7.BUILD]}?`);
  Q5("FULL", `^${L7[R7.FULLPLAIN]}$`);
  Q5("LOOSEPLAIN", `[v=\\s]*${L7[R7.MAINVERSIONLOOSE]}${L7[R7.PRERELEASELOOSE]}?${L7[R7.BUILD]}?`);
  Q5("LOOSE", `^${L7[R7.LOOSEPLAIN]}$`);
  Q5("GTLT", "((?:<|>)?=?)");
  Q5("XRANGEIDENTIFIERLOOSE", `${L7[R7.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  Q5("XRANGEIDENTIFIER", `${L7[R7.NUMERICIDENTIFIER]}|x|X|\\*`);
  Q5("XRANGEPLAIN", `[v=\\s]*(${L7[R7.XRANGEIDENTIFIER]})(?:\\.(${L7[R7.XRANGEIDENTIFIER]})(?:\\.(${L7[R7.XRANGEIDENTIFIER]})(?:${L7[R7.PRERELEASE]})?${L7[R7.BUILD]}?)?)?`);
  Q5("XRANGEPLAINLOOSE", `[v=\\s]*(${L7[R7.XRANGEIDENTIFIERLOOSE]})(?:\\.(${L7[R7.XRANGEIDENTIFIERLOOSE]})(?:\\.(${L7[R7.XRANGEIDENTIFIERLOOSE]})(?:${L7[R7.PRERELEASELOOSE]})?${L7[R7.BUILD]}?)?)?`);
  Q5("XRANGE", `^${L7[R7.GTLT]}\\s*${L7[R7.XRANGEPLAIN]}$`);
  Q5("XRANGELOOSE", `^${L7[R7.GTLT]}\\s*${L7[R7.XRANGEPLAINLOOSE]}$`);
  Q5("COERCEPLAIN", `(^|[^\\d])(\\d{1,${NY6}})(?:\\.(\\d{1,${NY6}}))?(?:\\.(\\d{1,${NY6}}))?`);
  Q5("COERCE", `${L7[R7.COERCEPLAIN]}(?:$|[^\\d])`);
  Q5("COERCEFULL", L7[R7.COERCEPLAIN] + `(?:${L7[R7.PRERELEASE]})?(?:${L7[R7.BUILD]})?(?:$|[^\\d])`);
  Q5("COERCERTL", L7[R7.COERCE], !0);
  Q5("COERCERTLFULL", L7[R7.COERCEFULL], !0);
  Q5("LONETILDE", "(?:~>?)");
  Q5("TILDETRIM", `(\\s*)${L7[R7.LONETILDE]}\\s+`, !0);
  tx.tildeTrimReplace = "$1~";
  Q5("TILDE", `^${L7[R7.LONETILDE]}${L7[R7.XRANGEPLAIN]}$`);
  Q5("TILDELOOSE", `^${L7[R7.LONETILDE]}${L7[R7.XRANGEPLAINLOOSE]}$`);
  Q5("LONECARET", "(?:\\^)");
  Q5("CARETTRIM", `(\\s*)${L7[R7.LONECARET]}\\s+`, !0);
  tx.caretTrimReplace = "$1^";
  Q5("CARET", `^${L7[R7.LONECARET]}${L7[R7.XRANGEPLAIN]}$`);
  Q5("CARETLOOSE", `^${L7[R7.LONECARET]}${L7[R7.XRANGEPLAINLOOSE]}$`);
  Q5("COMPARATORLOOSE", `^${L7[R7.GTLT]}\\s*(${L7[R7.LOOSEPLAIN]})$|^$`);
  Q5("COMPARATOR", `^${L7[R7.GTLT]}\\s*(${L7[R7.FULLPLAIN]})$|^$`);
  Q5("COMPARATORTRIM", `(\\s*)${L7[R7.GTLT]}\\s*(${L7[R7.LOOSEPLAIN]}|${L7[R7.XRANGEPLAIN]})`, !0);
  tx.comparatorTrimReplace = "$1$2$3";
  Q5("HYPHENRANGE", `^\\s*(${L7[R7.XRANGEPLAIN]})\\s+-\\s+(${L7[R7.XRANGEPLAIN]})\\s*$`);
  Q5("HYPHENRANGELOOSE", `^\\s*(${L7[R7.XRANGEPLAINLOOSE]})\\s+-\\s+(${L7[R7.XRANGEPLAINLOOSE]})\\s*$`);
  Q5("STAR", "(<|>)?=?\\s*\\*");
  Q5("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  Q5("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
});

// Register to shared state
__$.WSA = WSA;
