// Module: gH8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gH8 = v((bkz, mH8) => {
  function iMq(A) {
    let K = A.COMMENT(/^\s*@?rem\b/, /$/, {
      relevance: 10
    });
    return {
      name: "Batch file (DOS)",
      aliases: ["bat", "cmd"],
      case_insensitive: !0,
      illegal: /\/\*/,
      keywords: {
        keyword: "if else goto for in do call exit not exist errorlevel defined equ neq lss leq gtr geq",
        built_in: "prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux shift cd dir echo setlocal endlocal set pause copy append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color comp compact convert date dir diskcomp diskcopy doskey erase fs find findstr format ftype graftabl help keyb label md mkdir mode more move path pause print popd pushd promt rd recover rem rename replace restore rmdir shift sort start subst time title tree type ver verify vol ping net ipconfig taskkill xcopy ren del"
      },
      contains: [{
        className: "variable",
        begin: /%%[^ ]|%[^ ]+?%|![^ ]+?!/
      }, {
        className: "function",
        begin: {
          className: "symbol",
          begin: "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)",
          relevance: 0
        }.begin,
        end: "goto:eof",
        contains: [A.inherit(A.TITLE_MODE, {
          begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"
        }), K]
      }, {
        className: "number",
        begin: "\\b\\d+",
        relevance: 0
      }, K]
    };
  }
  mH8.exports = iMq;
});

// Register to shared state
__$.gH8 = gH8;
