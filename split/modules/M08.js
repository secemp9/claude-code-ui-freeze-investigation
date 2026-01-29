// Module: M08
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var M08 = v((dCz, j08) => {
  function D08(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function lwA(...A) {
    return A.map(q => D08(q)).join("");
  }
  function W08(...A) {
    return "(" + A.map(q => D08(q)).join("|") + ")";
  }
  function aVq(A) {
    let K = ["abs", "accept", "alarm", "and", "atan2", "bind", "binmode", "bless", "break", "caller", "chdir", "chmod", "chomp", "chop", "chown", "chr", "chroot", "close", "closedir", "connect", "continue", "cos", "crypt", "dbmclose", "dbmopen", "defined", "delete", "die", "do", "dump", "each", "else", "elsif", "endgrent", "endhostent", "endnetent", "endprotoent", "endpwent", "endservent", "eof", "eval", "exec", "exists", "exit", "exp", "fcntl", "fileno", "flock", "for", "foreach", "fork", "format", "formline", "getc", "getgrent", "getgrgid", "getgrnam", "gethostbyaddr", "gethostbyname", "gethostent", "getlogin", "getnetbyaddr", "getnetbyname", "getnetent", "getpeername", "getpgrp", "getpriority", "getprotobyname", "getprotobynumber", "getprotoent", "getpwent", "getpwnam", "getpwuid", "getservbyname", "getservbyport", "getservent", "getsockname", "getsockopt", "given", "glob", "gmtime", "goto", "grep", "gt", "hex", "if", "index", "int", "ioctl", "join", "keys", "kill", "last", "lc", "lcfirst", "length", "link", "listen", "local", "localtime", "log", "lstat", "lt", "ma", "map", "mkdir", "msgctl", "msgget", "msgrcv", "msgsnd", "my", "ne", "next", "no", "not", "oct", "open", "opendir", "or", "ord", "our", "pack", "package", "pipe", "pop", "pos", "print", "printf", "prototype", "push", "q|0", "qq", "quotemeta", "qw", "qx", "rand", "read", "readdir", "readline", "readlink", "readpipe", "recv", "redo", "ref", "rename", "require", "reset", "return", "reverse", "rewinddir", "rindex", "rmdir", "say", "scalar", "seek", "seekdir", "select", "semctl", "semget", "semop", "send", "setgrent", "sethostent", "setnetent", "setpgrp", "setpriority", "setprotoent", "setpwent", "setservent", "setsockopt", "shift", "shmctl", "shmget", "shmread", "shmwrite", "shutdown", "sin", "sleep", "socket", "socketpair", "sort", "splice", "split", "sprintf", "sqrt", "srand", "stat", "state", "study", "sub", "substr", "symlink", "syscall", "sysopen", "sysread", "sysseek", "system", "syswrite", "tell", "telldir", "tie", "tied", "time", "times", "tr", "truncate", "uc", "ucfirst", "umask", "undef", "unless", "unlink", "unpack", "unshift", "untie", "until", "use", "utime", "values", "vec", "wait", "waitpid", "wantarray", "warn", "when", "while", "write", "x|0", "xor", "y|0"],
      q = /[dualxmsipngr]{0,12}/,
      Y = {
        $pattern: /[\w.]+/,
        keyword: K.join(" ")
      },
      z = {
        className: "subst",
        begin: "[$@]\\{",
        end: "\\}",
        keywords: Y
      },
      w = {
        begin: /->\{/,
        end: /\}/
      },
      H = {
        variants: [{
          begin: /\$\d/
        }, {
          begin: lwA(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/, "(?![A-Za-z])(?![@$%])")
        }, {
          begin: /[$%@][^\s\w{]/,
          relevance: 0
        }]
      },
      J = [A.BACKSLASH_ESCAPE, z, H],
      O = [/!/, /\//, /\|/, /\?/, /'/, /"/, /#/],
      X = (G, Z, W = "\\1") => {
        let D = W === "\\1" ? W : lwA(W, Z);
        return lwA(lwA("(?:", G, ")"), Z, /(?:\\.|[^\\\/])*?/, D, /(?:\\.|[^\\\/])*?/, W, q);
      },
      $ = (G, Z, W) => {
        return lwA(lwA("(?:", G, ")"), Z, /(?:\\.|[^\\\/])*?/, W, q);
      },
      _ = [H, A.HASH_COMMENT_MODE, A.COMMENT(/^=\w/, /=cut/, {
        endsWithParent: !0
      }), w, {
        className: "string",
        contains: J,
        variants: [{
          begin: "q[qwxr]?\\s*\\(",
          end: "\\)",
          relevance: 5
        }, {
          begin: "q[qwxr]?\\s*\\[",
          end: "\\]",
          relevance: 5
        }, {
          begin: "q[qwxr]?\\s*\\{",
          end: "\\}",
          relevance: 5
        }, {
          begin: "q[qwxr]?\\s*\\|",
          end: "\\|",
          relevance: 5
        }, {
          begin: "q[qwxr]?\\s*<",
          end: ">",
          relevance: 5
        }, {
          begin: "qw\\s+q",
          end: "q",
          relevance: 5
        }, {
          begin: "'",
          end: "'",
          contains: [A.BACKSLASH_ESCAPE]
        }, {
          begin: '"',
          end: '"'
        }, {
          begin: "`",
          end: "`",
          contains: [A.BACKSLASH_ESCAPE]
        }, {
          begin: /\{\w+\}/,
          relevance: 0
        }, {
          begin: "-?\\w+\\s*=>",
          relevance: 0
        }]
      }, {
        className: "number",
        begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        relevance: 0
      }, {
        begin: "(\\/\\/|" + A.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
        keywords: "split return print reverse grep",
        relevance: 0,
        contains: [A.HASH_COMMENT_MODE, {
          className: "regexp",
          variants: [{
            begin: X("s|tr|y", W08(...O))
          }, {
            begin: X("s|tr|y", "\\(", "\\)")
          }, {
            begin: X("s|tr|y", "\\[", "\\]")
          }, {
            begin: X("s|tr|y", "\\{", "\\}")
          }],
          relevance: 2
        }, {
          className: "regexp",
          variants: [{
            begin: /(m|qr)\/\//,
            relevance: 0
          }, {
            begin: $("(?:m|qr)?", /\//, /\//)
          }, {
            begin: $("m|qr", W08(...O), /\1/)
          }, {
            begin: $("m|qr", /\(/, /\)/)
          }, {
            begin: $("m|qr", /\[/, /\]/)
          }, {
            begin: $("m|qr", /\{/, /\}/)
          }]
        }]
      }, {
        className: "function",
        beginKeywords: "sub",
        end: "(\\s*\\(.*?\\))?[;{]",
        excludeEnd: !0,
        relevance: 5,
        contains: [A.TITLE_MODE]
      }, {
        begin: "-\\w\\b",
        relevance: 0
      }, {
        begin: "^__DATA__$",
        end: "^__END__$",
        subLanguage: "mojolicious",
        contains: [{
          begin: "^@@.*",
          end: "$",
          className: "comment"
        }]
      }];
    return z.contains = _, w.contains = _, {
      name: "Perl",
      aliases: ["pl", "pm"],
      keywords: Y,
      contains: _
    };
  }
  j08.exports = aVq;
});

// Register to shared state
__$.M08 = M08;
