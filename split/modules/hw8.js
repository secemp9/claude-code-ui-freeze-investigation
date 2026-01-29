// Module: hw8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hw8 = v((Ykz, Sw8) => {
  function djq(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function cjq(...A) {
    return A.map(q => djq(q)).join("");
  }
  function ljq(A) {
    let K = {},
      q = {
        begin: /\$\{/,
        end: /\}/,
        contains: ["self", {
          begin: /:-/,
          contains: [K]
        }]
      };
    Object.assign(K, {
      className: "variable",
      variants: [{
        begin: cjq(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])")
      }, q]
    });
    let Y = {
        className: "subst",
        begin: /\$\(/,
        end: /\)/,
        contains: [A.BACKSLASH_ESCAPE]
      },
      z = {
        begin: /<<-?\s*(?=\w+)/,
        starts: {
          contains: [A.END_SAME_AS_BEGIN({
            begin: /(\w+)/,
            end: /(\w+)/,
            className: "string"
          })]
        }
      },
      w = {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [A.BACKSLASH_ESCAPE, K, Y]
      };
    Y.contains.push(w);
    let H = {
        className: "",
        begin: /\\"/
      },
      J = {
        className: "string",
        begin: /'/,
        end: /'/
      },
      O = {
        begin: /\$\(\(/,
        end: /\)\)/,
        contains: [{
          begin: /\d+#[0-9a-f]+/,
          className: "number"
        }, A.NUMBER_MODE, K]
      },
      X = ["fish", "bash", "zsh", "sh", "csh", "ksh", "tcsh", "dash", "scsh"],
      $ = A.SHEBANG({
        binary: `(${X.join("|")})`,
        relevance: 10
      }),
      _ = {
        className: "function",
        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        returnBegin: !0,
        contains: [A.inherit(A.TITLE_MODE, {
          begin: /\w[\w\d_]*/
        })],
        relevance: 0
      };
    return {
      name: "Bash",
      aliases: ["sh", "zsh"],
      keywords: {
        $pattern: /\b[a-z._-]+\b/,
        keyword: "if then else elif fi for while in do done case esac function",
        literal: "true false",
        built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp"
      },
      contains: [$, A.SHEBANG(), _, O, A.HASH_COMMENT_MODE, z, w, H, J, K]
    };
  }
  Sw8.exports = ljq;
});

// Register to shared state
__$.hw8 = hw8;
