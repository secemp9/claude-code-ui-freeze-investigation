// Module: ww8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ww8 = v((lEz, zw8) => {
  function Yw8(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function Kw8(...A) {
    return A.map(q => Yw8(q)).join("");
  }
  function qw8(...A) {
    return "(" + A.map(q => Yw8(q)).join("|") + ")";
  }
  function Ejq(A) {
    let K = A.inherit(A.QUOTE_STRING_MODE, {
        illegal: null
      }),
      q = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        contains: ["self", A.C_NUMBER_MODE, K]
      },
      Y = A.COMMENT(/--/, /$/),
      z = A.COMMENT(/\(\*/, /\*\)/, {
        contains: ["self", Y]
      }),
      w = [Y, z, A.HASH_COMMENT_MODE],
      H = [/apart from/, /aside from/, /instead of/, /out of/, /greater than/, /isn't|(doesn't|does not) (equal|come before|come after|contain)/, /(greater|less) than( or equal)?/, /(starts?|ends|begins?) with/, /contained by/, /comes (before|after)/, /a (ref|reference)/, /POSIX (file|path)/, /(date|time) string/, /quoted form/],
      J = [/clipboard info/, /the clipboard/, /info for/, /list (disks|folder)/, /mount volume/, /path to/, /(close|open for) access/, /(get|set) eof/, /current date/, /do shell script/, /get volume settings/, /random number/, /set volume/, /system attribute/, /system info/, /time to GMT/, /(load|run|store) script/, /scripting components/, /ASCII (character|number)/, /localized string/, /choose (application|color|file|file name|folder|from list|remote application|URL)/, /display (alert|dialog)/];
    return {
      name: "AppleScript",
      aliases: ["osascript"],
      keywords: {
        keyword: "about above after against and around as at back before beginning behind below beneath beside between but by considering contain contains continue copy div does eighth else end equal equals error every exit fifth first for fourth from front get given global if ignoring in into is it its last local me middle mod my ninth not of on onto or over prop property put ref reference repeat returning script second set seventh since sixth some tell tenth that the|0 then third through thru timeout times to transaction try until where while whose with without",
        literal: "AppleScript false linefeed return pi quote result space tab true",
        built_in: "alias application boolean class constant date file integer list number real record string text activate beep count delay launch log offset read round run say summarize write character characters contents day frontmost id item length month name paragraph paragraphs rest reverse running time version weekday word words year"
      },
      contains: [K, A.C_NUMBER_MODE, {
        className: "built_in",
        begin: Kw8(/\b/, qw8(...J), /\b/)
      }, {
        className: "built_in",
        begin: /^\s*return\b/
      }, {
        className: "literal",
        begin: /\b(text item delimiters|current application|missing value)\b/
      }, {
        className: "keyword",
        begin: Kw8(/\b/, qw8(...H), /\b/)
      }, {
        beginKeywords: "on",
        illegal: /[${=;\n]/,
        contains: [A.UNDERSCORE_TITLE_MODE, q]
      }, ...w],
      illegal: /\/\/|->|=>|\[\[/
    };
  }
  zw8.exports = Ejq;
});

// Register to shared state
__$.ww8 = ww8;
