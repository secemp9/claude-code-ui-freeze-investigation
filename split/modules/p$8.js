// Module: p$8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var p$8 = v((sLz, U$8) => {
  function yNq(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function INq(A) {
    return Q$8("(", A, ")?");
  }
  function Q$8(...A) {
    return A.map(q => yNq(q)).join("");
  }
  function SNq(A) {
    let K = /[a-zA-Z_][a-zA-Z0-9_]*/,
      q = {
        className: "number",
        variants: [A.BINARY_NUMBER_MODE, A.C_NUMBER_MODE]
      };
    return {
      name: "Tcl",
      aliases: ["tk"],
      keywords: "after append apply array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd chan clock close concat continue dde dict encoding eof error eval exec exit expr fblocked fconfigure fcopy file fileevent filename flush for foreach format gets glob global history http if incr info interp join lappend|10 lassign|10 lindex|10 linsert|10 list llength|10 load lrange|10 lrepeat|10 lreplace|10 lreverse|10 lsearch|10 lset|10 lsort|10 mathfunc mathop memory msgcat namespace open package parray pid pkg::create pkg_mkIndex platform platform::shell proc puts pwd read refchan regexp registry regsub|10 rename return safe scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_startOfPreviousWord tcl_wordBreakAfter tcl_wordBreakBefore tcltest tclvars tell time tm trace unknown unload unset update uplevel upvar variable vwait while",
      contains: [A.COMMENT(";[ \\t]*#", "$"), A.COMMENT("^[ \\t]*#", "$"), {
        beginKeywords: "proc",
        end: "[\\{]",
        excludeEnd: !0,
        contains: [{
          className: "title",
          begin: "[ \\t\\n\\r]+(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*",
          end: "[ \\t\\n\\r]",
          endsWithParent: !0,
          excludeEnd: !0
        }]
      }, {
        className: "variable",
        variants: [{
          begin: Q$8(/\$/, INq(/::/), K, "(::", K, ")*")
        }, {
          begin: "\\$\\{(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*",
          end: "\\}",
          contains: [q]
        }]
      }, {
        className: "string",
        contains: [A.BACKSLASH_ESCAPE],
        variants: [A.inherit(A.QUOTE_STRING_MODE, {
          illegal: null
        })]
      }, q]
    };
  }
  U$8.exports = SNq;
});

// Register to shared state
__$.p$8 = p$8;
