// Module: Uf1
// Dependencies: _P, gO, nP1, $S6, B5, y4, e6, VHK, eUA, uf1
//   ... and 13 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Uf1 = k(() => {
  __$._P();
  __$.gO();
  __$.nP1();
  __$.$S6();
  __$.B5();
  __$.y4();
  __$.e6();
  __$.VHK = /^-[a-zA-Z0-9_-]/, __$.eUA = {
    "--all": "none",
    "--branches": "none",
    "--tags": "none",
    "--remotes": "none"
  }, __$.uf1 = {
    "--since": "string",
    "--after": "string",
    "--until": "string",
    "--before": "string"
  }, __$.Bf1 = {
    "--oneline": "none",
    "--graph": "none",
    "--decorate": "none",
    "--no-decorate": "none",
    "--date": "string",
    "--relative-date": "none"
  }, __$.mf1 = {
    "--max-count": "number",
    "-n": "number"
  }, __$.gf1 = {
    "--stat": "none",
    "--numstat": "none",
    "--shortstat": "none",
    "--name-only": "none",
    "--name-status": "none"
  }, __$.ApA = {
    "--color": "none",
    "--no-color": "none"
  }, __$.Ex6 = {
    "--patch": "none",
    "-p": "none",
    "--no-patch": "none",
    "--no-ext-diff": "none",
    "-s": "none"
  }, __$.kx6 = {
    "--author": "string",
    "--committer": "string",
    "--grep": "string"
  }, __$.ik2 = {
    xargs: {
      safeFlags: {
        "-I": "{}",
        "-i": "none",
        "-n": "number",
        "-P": "number",
        "-L": "number",
        "-s": "number",
        "-E": "EOF",
        "-e": "EOF",
        "-0": "none",
        "-t": "none",
        "-r": "none",
        "-x": "none",
        "-d": "char"
      }
    },
    "git diff": {
      safeFlags: {
        ...__$.gf1,
        ...__$.ApA,
        "--dirstat": "none",
        "--summary": "none",
        "--patch-with-stat": "none",
        "--word-diff": "none",
        "--word-diff-regex": "string",
        "--color-words": "none",
        "--no-renames": "none",
        "--no-ext-diff": "none",
        "--check": "none",
        "--ws-error-highlight": "string",
        "--full-index": "none",
        "--binary": "none",
        "--abbrev": "number",
        "--break-rewrites": "none",
        "--find-renames": "none",
        "--find-copies": "none",
        "--find-copies-harder": "none",
        "--irreversible-delete": "none",
        "--diff-algorithm": "string",
        "--histogram": "none",
        "--patience": "none",
        "--minimal": "none",
        "--ignore-space-at-eol": "none",
        "--ignore-space-change": "none",
        "--ignore-all-space": "none",
        "--ignore-blank-lines": "none",
        "--inter-hunk-context": "number",
        "--function-context": "none",
        "--exit-code": "none",
        "--quiet": "none",
        "--cached": "none",
        "--staged": "none",
        "--pickaxe-regex": "none",
        "--pickaxe-all": "none",
        "--no-index": "none",
        "--relative": "string",
        "--diff-filter": "string",
        "-p": "none",
        "-u": "none",
        "-s": "none",
        "-M": "none",
        "-C": "none",
        "-B": "none",
        "-D": "none",
        "-l": "none",
        "-S": "none",
        "-G": "none",
        "-O": "none",
        "-R": "none"
      }
    },
    "git log": {
      safeFlags: {
        ...__$.Bf1,
        ...__$.eUA,
        ...__$.uf1,
        ...__$.mf1,
        ...__$.gf1,
        ...__$.ApA,
        ...__$.Ex6,
        ...__$.kx6,
        "--abbrev-commit": "none",
        "--full-history": "none",
        "--dense": "none",
        "--sparse": "none",
        "--simplify-merges": "none",
        "--ancestry-path": "none",
        "--source": "none",
        "--first-parent": "none",
        "--merges": "none",
        "--no-merges": "none",
        "--reverse": "none",
        "--walk-reflogs": "none",
        "--skip": "number",
        "--max-age": "number",
        "--min-age": "number",
        "--no-min-parents": "none",
        "--no-max-parents": "none",
        "--follow": "none",
        "--pretty": "string",
        "--format": "string",
        "--diff-filter": "string",
        "-S": "string",
        "-G": "string",
        "--pickaxe-regex": "none",
        "--pickaxe-all": "none"
      }
    },
    "git show": {
      safeFlags: {
        ...__$.Bf1,
        ...__$.gf1,
        ...__$.ApA,
        ...__$.Ex6,
        "--abbrev-commit": "none",
        "--word-diff": "none",
        "--word-diff-regex": "string",
        "--color-words": "none",
        "--pretty": "string",
        "--first-parent": "none",
        "--diff-filter": "string",
        "-m": "none",
        "--quiet": "none"
      }
    },
    "git shortlog": {
      safeFlags: {
        ...__$.eUA,
        ...__$.uf1,
        "-s": "none",
        "--summary": "none",
        "-n": "none",
        "--numbered": "none",
        "-e": "none",
        "--email": "none",
        "-c": "none",
        "--committer": "none",
        "--group": "string",
        "--format": "string",
        "--no-merges": "none",
        "--author": "string"
      }
    },
    "git reflog": {
      safeFlags: {
        ...__$.Bf1,
        ...__$.eUA,
        ...__$.uf1,
        ...__$.mf1,
        ...__$.kx6
      }
    },
    "git stash list": {
      safeFlags: {
        ...__$.Bf1,
        ...__$.eUA,
        ...__$.mf1
      }
    },
    "git ls-remote": {
      safeFlags: {
        "--branches": "none",
        "-b": "none",
        "--tags": "none",
        "-t": "none",
        "--heads": "none",
        "-h": "none",
        "--refs": "none",
        "--quiet": "none",
        "-q": "none",
        "--exit-code": "none",
        "--get-url": "none",
        "--symref": "none",
        "--sort": "string",
        "--server-option": "string",
        "-o": "string"
      }
    },
    "git status": {
      safeFlags: {
        "--short": "none",
        "-s": "none",
        "--branch": "none",
        "-b": "none",
        "--porcelain": "none",
        "--long": "none",
        "--verbose": "none",
        "-v": "none",
        "--untracked-files": "string",
        "-u": "string",
        "--ignored": "none",
        "--ignore-submodules": "string",
        "--column": "none",
        "--no-column": "none",
        "--ahead-behind": "none",
        "--no-ahead-behind": "none",
        "--renames": "none",
        "--no-renames": "none",
        "--find-renames": "string",
        "-M": "string"
      }
    },
    "git blame": {
      safeFlags: {
        ...__$.ApA,
        "-L": "string",
        "--porcelain": "none",
        "-p": "none",
        "--line-porcelain": "none",
        "--incremental": "none",
        "--root": "none",
        "--show-stats": "none",
        "--show-name": "none",
        "--show-number": "none",
        "-n": "none",
        "--show-email": "none",
        "-e": "none",
        "-f": "none",
        "--date": "string",
        "-w": "none",
        "--ignore-rev": "string",
        "--ignore-revs-file": "string",
        "-M": "none",
        "-C": "none",
        "--score-debug": "none",
        "--abbrev": "number",
        "-s": "none",
        "-l": "none",
        "-t": "none"
      }
    },
    "git ls-files": {
      safeFlags: {
        "--cached": "none",
        "-c": "none",
        "--deleted": "none",
        "-d": "none",
        "--modified": "none",
        "-m": "none",
        "--others": "none",
        "-o": "none",
        "--ignored": "none",
        "-i": "none",
        "--stage": "none",
        "-s": "none",
        "--killed": "none",
        "-k": "none",
        "--unmerged": "none",
        "-u": "none",
        "--directory": "none",
        "--no-empty-directory": "none",
        "--eol": "none",
        "--full-name": "none",
        "--abbrev": "number",
        "--debug": "none",
        "-z": "none",
        "-t": "none",
        "-v": "none",
        "-f": "none",
        "--exclude": "string",
        "-x": "string",
        "--exclude-from": "string",
        "-X": "string",
        "--exclude-per-directory": "string",
        "--exclude-standard": "none",
        "--error-unmatch": "none",
        "--recurse-submodules": "none"
      }
    },
    "git config --get": {
      safeFlags: {
        "--local": "none",
        "--global": "none",
        "--system": "none",
        "--worktree": "none",
        "--default": "string",
        "--type": "string",
        "--bool": "none",
        "--int": "none",
        "--bool-or-int": "none",
        "--path": "none",
        "--expiry-date": "none",
        "-z": "none",
        "--null": "none",
        "--name-only": "none",
        "--show-origin": "none",
        "--show-scope": "none"
      }
    },
    "git remote show": {
      safeFlags: {
        "-n": "none"
      },
      regex: /^git remote show(?:\s+-n)?\s+[a-zA-Z0-9_-]+$/
    },
    "git remote": {
      safeFlags: {
        "-v": "none",
        "--verbose": "none"
      },
      regex: /^git remote(?:\s+(?:-v|--verbose))?$/
    },
    "git merge-base": {
      safeFlags: {
        "--is-ancestor": "none",
        "--fork-point": "none",
        "--octopus": "none",
        "--independent": "none",
        "--all": "none"
      }
    },
    "git rev-parse": {
      safeFlags: {
        "--verify": "none",
        "--short": "string",
        "--abbrev-ref": "none",
        "--symbolic": "none",
        "--symbolic-full-name": "none",
        "--show-toplevel": "none",
        "--show-cdup": "none",
        "--show-prefix": "none",
        "--git-dir": "none",
        "--git-common-dir": "none",
        "--absolute-git-dir": "none",
        "--show-superproject-working-tree": "none",
        "--is-inside-work-tree": "none",
        "--is-inside-git-dir": "none",
        "--is-bare-repository": "none",
        "--is-shallow-repository": "none",
        "--is-shallow-update": "none",
        "--path-prefix": "none"
      }
    },
    "git rev-list": {
      safeFlags: {
        ...__$.eUA,
        ...__$.uf1,
        ...__$.mf1,
        ...__$.kx6,
        "--count": "none",
        "--reverse": "none",
        "--first-parent": "none",
        "--ancestry-path": "none",
        "--merges": "none",
        "--no-merges": "none",
        "--min-parents": "number",
        "--max-parents": "number",
        "--no-min-parents": "none",
        "--no-max-parents": "none",
        "--skip": "number",
        "--max-age": "number",
        "--min-age": "number",
        "--walk-reflogs": "none",
        "--oneline": "none",
        "--abbrev-commit": "none",
        "--pretty": "string",
        "--format": "string",
        "--abbrev": "number",
        "--full-history": "none",
        "--dense": "none",
        "--sparse": "none",
        "--source": "none",
        "--graph": "none"
      }
    },
    "git describe": {
      safeFlags: {
        "--tags": "none",
        "--match": "string",
        "--exclude": "string",
        "--long": "none",
        "--abbrev": "number",
        "--always": "none",
        "--contains": "none",
        "--first-match": "none",
        "--exact-match": "none",
        "--candidates": "number",
        "--dirty": "none",
        "--broken": "none"
      }
    },
    "git cat-file": {
      safeFlags: {
        "-t": "none",
        "-s": "none",
        "-p": "none",
        "-e": "none",
        "--batch-check": "none",
        "--allow-undetermined-type": "none"
      }
    },
    "git for-each-ref": {
      safeFlags: {
        "--format": "string",
        "--sort": "string",
        "--count": "number",
        "--contains": "string",
        "--no-contains": "string",
        "--merged": "string",
        "--no-merged": "string",
        "--points-at": "string"
      }
    },
    "git grep": {
      safeFlags: {
        "-e": "string",
        "-E": "none",
        "--extended-regexp": "none",
        "-G": "none",
        "--basic-regexp": "none",
        "-F": "none",
        "--fixed-strings": "none",
        "-P": "none",
        "--perl-regexp": "none",
        "-i": "none",
        "--ignore-case": "none",
        "-v": "none",
        "--invert-match": "none",
        "-w": "none",
        "--word-regexp": "none",
        "-n": "none",
        "--line-number": "none",
        "-c": "none",
        "--count": "none",
        "-l": "none",
        "--files-with-matches": "none",
        "-L": "none",
        "--files-without-match": "none",
        "-h": "none",
        "-H": "none",
        "--heading": "none",
        "--break": "none",
        "--full-name": "none",
        "--color": "none",
        "--no-color": "none",
        "-o": "none",
        "--only-matching": "none",
        "-A": "number",
        "--after-context": "number",
        "-B": "number",
        "--before-context": "number",
        "-C": "number",
        "--context": "number",
        "--and": "none",
        "--or": "none",
        "--not": "none",
        "--max-depth": "number",
        "--untracked": "none",
        "--no-index": "none",
        "--recurse-submodules": "none",
        "--cached": "none",
        "--threads": "number",
        "-q": "none",
        "--quiet": "none"
      }
    },
    "git stash show": {
      safeFlags: {
        ...__$.gf1,
        ...__$.ApA,
        ...__$.Ex6,
        "--word-diff": "none",
        "--word-diff-regex": "string",
        "--diff-filter": "string",
        "--abbrev": "number"
      }
    },
    "git worktree list": {
      safeFlags: {
        "--porcelain": "none",
        "-v": "none",
        "--verbose": "none",
        "--expire": "string"
      }
    },
    "git tag": {
      safeFlags: {
        "-l": "none",
        "--list": "none",
        "-n": "number",
        "--contains": "string",
        "--no-contains": "string",
        "--merged": "string",
        "--no-merged": "string",
        "--sort": "string",
        "--format": "string",
        "--points-at": "string",
        "--column": "none",
        "--no-column": "none",
        "-i": "none",
        "--ignore-case": "none"
      }
    },
    "git branch": {
      safeFlags: {
        "-l": "none",
        "--list": "none",
        "-a": "none",
        "--all": "none",
        "-r": "none",
        "--remotes": "none",
        "-v": "none",
        "-vv": "none",
        "--verbose": "none",
        "--color": "none",
        "--no-color": "none",
        "--column": "none",
        "--no-column": "none",
        "--abbrev": "number",
        "--no-abbrev": "none",
        "--contains": "string",
        "--no-contains": "string",
        "--merged": "none",
        "--no-merged": "none",
        "--points-at": "string",
        "--sort": "string",
        "--show-current": "none",
        "-i": "none",
        "--ignore-case": "none"
      },
      additionalCommandIsDangerousCallback: A => {
        let K = A.split(/\s+/),
          q = new Set(["--contains", "--no-contains", "--points-at", "--sort", "--abbrev"]),
          Y = new Set(["--merged", "--no-merged"]),
          z = 2,
          w = "";
        while (z < K.length) {
          let H = K[z];
          if (!H) {
            z++;
            continue;
          }
          if (H.startsWith("-")) {
            if (H.includes("=")) w = H.split("=")[0] || "", z++;else if (q.has(H)) w = H, z += 2;else w = H, z++;
          } else {
            let J = K.slice(2, z),
              O = J.includes("-l") || J.includes("--list"),
              X = Y.has(w);
            if (!O && !X) return !0;
            z++;
          }
        }
        return !1;
      }
    },
    file: {
      safeFlags: {
        "--brief": "none",
        "-b": "none",
        "--mime": "none",
        "-i": "none",
        "--mime-type": "none",
        "--mime-encoding": "none",
        "--apple": "none",
        "--check-encoding": "none",
        "-c": "none",
        "--exclude": "string",
        "--exclude-quiet": "string",
        "--print0": "none",
        "-0": "none",
        "-f": "string",
        "-F": "string",
        "--separator": "string",
        "--help": "none",
        "--version": "none",
        "-v": "none",
        "--no-dereference": "none",
        "-h": "none",
        "--dereference": "none",
        "-L": "none",
        "--magic-file": "string",
        "-m": "string",
        "--keep-going": "none",
        "-k": "none",
        "--list": "none",
        "-l": "none",
        "--no-buffer": "none",
        "-n": "none",
        "--preserve-date": "none",
        "-p": "none",
        "--raw": "none",
        "-r": "none",
        "-s": "none",
        "--special-files": "none",
        "--uncompress": "none",
        "-z": "none"
      }
    },
    sed: {
      safeFlags: {
        "--expression": "string",
        "-e": "string",
        "--quiet": "none",
        "--silent": "none",
        "-n": "none",
        "--regexp-extended": "none",
        "-r": "none",
        "--posix": "none",
        "-E": "none",
        "--line-length": "number",
        "-l": "number",
        "--zero-terminated": "none",
        "-z": "none",
        "--separate": "none",
        "-s": "none",
        "--unbuffered": "none",
        "-u": "none",
        "--debug": "none",
        "--help": "none",
        "--version": "none"
      },
      additionalCommandIsDangerousCallback: A => !__$.XS6(A)
    },
    "pip list": {
      safeFlags: {
        "--outdated": "none",
        "-o": "none",
        "--uptodate": "none",
        "-u": "none",
        "--editable": "none",
        "-e": "none",
        "--local": "none",
        "-l": "none",
        "--user": "none",
        "--pre": "none",
        "--format": "string",
        "--not-required": "none",
        "--exclude-editable": "none",
        "--include-editable": "none",
        "--exclude": "string",
        "--help": "none",
        "-h": "none",
        "--version": "none",
        "-V": "none",
        "--verbose": "none",
        "-v": "none",
        "--quiet": "none",
        "-q": "none",
        "--no-color": "none",
        "--no-input": "none",
        "--disable-pip-version-check": "none",
        "--no-python-version-warning": "none"
      }
    },
    sort: {
      safeFlags: {
        "--ignore-leading-blanks": "none",
        "-b": "none",
        "--dictionary-order": "none",
        "-d": "none",
        "--ignore-case": "none",
        "-f": "none",
        "--general-numeric-sort": "none",
        "-g": "none",
        "--human-numeric-sort": "none",
        "-h": "none",
        "--ignore-nonprinting": "none",
        "-i": "none",
        "--month-sort": "none",
        "-M": "none",
        "--numeric-sort": "none",
        "-n": "none",
        "--random-sort": "none",
        "-R": "none",
        "--reverse": "none",
        "-r": "none",
        "--sort": "string",
        "--stable": "none",
        "-s": "none",
        "--unique": "none",
        "-u": "none",
        "--version-sort": "none",
        "-V": "none",
        "--zero-terminated": "none",
        "-z": "none",
        "--key": "string",
        "-k": "string",
        "--field-separator": "string",
        "-t": "string",
        "--check": "none",
        "-c": "none",
        "--check-char-order": "none",
        "-C": "none",
        "--merge": "none",
        "-m": "none",
        "--buffer-size": "string",
        "-S": "string",
        "--parallel": "number",
        "--batch-size": "number",
        "--help": "none",
        "--version": "none"
      }
    },
    man: {
      safeFlags: {
        "-a": "none",
        "--all": "none",
        "-d": "none",
        "-f": "none",
        "--whatis": "none",
        "-h": "none",
        "-k": "none",
        "--apropos": "none",
        "-l": "string",
        "-w": "none",
        "-S": "string",
        "-s": "string"
      }
    },
    help: {
      safeFlags: {
        "-d": "none",
        "-m": "none",
        "-s": "none"
      }
    },
    "npm list": {
      safeFlags: {
        "--all": "none",
        "-a": "none",
        "--json": "none",
        "--long": "none",
        "-l": "none",
        "--global": "none",
        "-g": "none",
        "--depth": "number",
        "--omit": "string",
        "--include": "string",
        "--link": "none",
        "--workspace": "string",
        "-w": "string",
        "--workspaces": "none",
        "-ws": "none"
      }
    },
    "mcp-cli servers": {
      safeFlags: {
        "--json": "none"
      }
    },
    "mcp-cli tools": {
      safeFlags: {
        "--json": "none"
      }
    },
    "mcp-cli info": {
      safeFlags: {
        "--json": "none"
      }
    },
    "mcp-cli grep": {
      safeFlags: {
        "--json": "none",
        "-i": "none",
        "--ignore-case": "none"
      }
    },
    "mcp-cli resources": {
      safeFlags: {
        "--json": "none"
      }
    },
    "mcp-cli read": {
      safeFlags: {
        "--json": "none"
      }
    },
    netstat: {
      safeFlags: {
        "-a": "none",
        "-L": "none",
        "-l": "none",
        "-n": "none",
        "-f": "string",
        "-g": "none",
        "-i": "none",
        "-I": "string",
        "-s": "none",
        "-r": "none",
        "-m": "none",
        "-v": "none"
      }
    },
    ps: {
      safeFlags: {
        "-e": "none",
        "-A": "none",
        "-a": "none",
        "-d": "none",
        "-N": "none",
        "--deselect": "none",
        "-f": "none",
        "-F": "none",
        "-l": "none",
        "-j": "none",
        "-y": "none",
        "-w": "none",
        "-ww": "none",
        "--width": "number",
        "-c": "none",
        "-H": "none",
        "--forest": "none",
        "--headers": "none",
        "--no-headers": "none",
        "-n": "string",
        "--sort": "string",
        "-L": "none",
        "-T": "none",
        "-m": "none",
        "-C": "string",
        "-G": "string",
        "-g": "string",
        "-p": "string",
        "--pid": "string",
        "-q": "string",
        "--quick-pid": "string",
        "-s": "string",
        "--sid": "string",
        "-t": "string",
        "--tty": "string",
        "-U": "string",
        "-u": "string",
        "--user": "string",
        "--help": "none",
        "--info": "none",
        "-V": "none",
        "--version": "none"
      },
      additionalCommandIsDangerousCallback: A => {
        return /\s[a-zA-Z]*e[a-zA-Z]*(?:\s|$)/.test(A);
      }
    },
    base64: {
      safeFlags: {
        "-d": "none",
        "-D": "none",
        "--decode": "none",
        "-b": "number",
        "--break": "number",
        "-w": "number",
        "--wrap": "number",
        "-i": "string",
        "--input": "string",
        "--ignore-garbage": "none",
        "-h": "none",
        "--help": "none",
        "--version": "none"
      }
    },
    grep: {
      safeFlags: {
        "-e": "string",
        "--regexp": "string",
        "-f": "string",
        "--file": "string",
        "-F": "none",
        "--fixed-strings": "none",
        "-G": "none",
        "--basic-regexp": "none",
        "-E": "none",
        "--extended-regexp": "none",
        "-P": "none",
        "--perl-regexp": "none",
        "-i": "none",
        "--ignore-case": "none",
        "--no-ignore-case": "none",
        "-v": "none",
        "--invert-match": "none",
        "-w": "none",
        "--word-regexp": "none",
        "-x": "none",
        "--line-regexp": "none",
        "-c": "none",
        "--count": "none",
        "--color": "string",
        "--colour": "string",
        "-L": "none",
        "--files-without-match": "none",
        "-l": "none",
        "--files-with-matches": "none",
        "-m": "number",
        "--max-count": "number",
        "-o": "none",
        "--only-matching": "none",
        "-q": "none",
        "--quiet": "none",
        "--silent": "none",
        "-s": "none",
        "--no-messages": "none",
        "-b": "none",
        "--byte-offset": "none",
        "-H": "none",
        "--with-filename": "none",
        "-h": "none",
        "--no-filename": "none",
        "--label": "string",
        "-n": "none",
        "--line-number": "none",
        "-T": "none",
        "--initial-tab": "none",
        "-u": "none",
        "--unix-byte-offsets": "none",
        "-Z": "none",
        "--null": "none",
        "-z": "none",
        "--null-data": "none",
        "-A": "number",
        "--after-context": "number",
        "-B": "number",
        "--before-context": "number",
        "-C": "number",
        "--context": "number",
        "--group-separator": "string",
        "--no-group-separator": "none",
        "-a": "none",
        "--text": "none",
        "--binary-files": "string",
        "-D": "string",
        "--devices": "string",
        "-d": "string",
        "--directories": "string",
        "--exclude": "string",
        "--exclude-from": "string",
        "--exclude-dir": "string",
        "--include": "string",
        "-r": "none",
        "--recursive": "none",
        "-R": "none",
        "--dereference-recursive": "none",
        "--line-buffered": "none",
        "-U": "none",
        "--binary": "none",
        "--help": "none",
        "-V": "none",
        "--version": "none"
      }
    },
    rg: {
      safeFlags: {
        "-e": "string",
        "--regexp": "string",
        "-f": "string",
        "-i": "none",
        "--ignore-case": "none",
        "-S": "none",
        "--smart-case": "none",
        "-F": "none",
        "--fixed-strings": "none",
        "-w": "none",
        "--word-regexp": "none",
        "-v": "none",
        "--invert-match": "none",
        "-c": "none",
        "--count": "none",
        "-l": "none",
        "--files-with-matches": "none",
        "--files-without-match": "none",
        "-n": "none",
        "--line-number": "none",
        "-o": "none",
        "--only-matching": "none",
        "-A": "number",
        "--after-context": "number",
        "-B": "number",
        "--before-context": "number",
        "-C": "number",
        "--context": "number",
        "-H": "none",
        "-h": "none",
        "--heading": "none",
        "--no-heading": "none",
        "-q": "none",
        "--quiet": "none",
        "--column": "none",
        "-g": "string",
        "--glob": "string",
        "-t": "string",
        "--type": "string",
        "-T": "string",
        "--type-not": "string",
        "--type-list": "none",
        "--hidden": "none",
        "--no-ignore": "none",
        "-u": "none",
        "-m": "number",
        "--max-count": "number",
        "-d": "number",
        "--max-depth": "number",
        "-a": "none",
        "--text": "none",
        "-z": "none",
        "-L": "none",
        "--follow": "none",
        "--color": "string",
        "--json": "none",
        "--stats": "none",
        "--help": "none",
        "--version": "none",
        "--debug": "none",
        "--": "none"
      }
    },
    sha256sum: {
      safeFlags: {
        "-b": "none",
        "--binary": "none",
        "-t": "none",
        "--text": "none",
        "-c": "none",
        "--check": "none",
        "--ignore-missing": "none",
        "--quiet": "none",
        "--status": "none",
        "--strict": "none",
        "-w": "none",
        "--warn": "none",
        "--tag": "none",
        "-z": "none",
        "--zero": "none",
        "--help": "none",
        "--version": "none"
      }
    },
    sha1sum: {
      safeFlags: {
        "-b": "none",
        "--binary": "none",
        "-t": "none",
        "--text": "none",
        "-c": "none",
        "--check": "none",
        "--ignore-missing": "none",
        "--quiet": "none",
        "--status": "none",
        "--strict": "none",
        "-w": "none",
        "--warn": "none",
        "--tag": "none",
        "-z": "none",
        "--zero": "none",
        "--help": "none",
        "--version": "none"
      }
    },
    md5sum: {
      safeFlags: {
        "-b": "none",
        "--binary": "none",
        "-t": "none",
        "--text": "none",
        "-c": "none",
        "--check": "none",
        "--ignore-missing": "none",
        "--quiet": "none",
        "--status": "none",
        "--strict": "none",
        "-w": "none",
        "--warn": "none",
        "--tag": "none",
        "-z": "none",
        "--zero": "none",
        "--help": "none",
        "--version": "none"
      }
    },
    date: {
      safeFlags: {
        "-d": "string",
        "--date": "string",
        "-r": "string",
        "--reference": "string",
        "-u": "none",
        "--utc": "none",
        "--universal": "none",
        "-I": "none",
        "--iso-8601": "string",
        "-R": "none",
        "--rfc-email": "none",
        "--rfc-3339": "string",
        "--debug": "none",
        "--help": "none",
        "--version": "none"
      },
      additionalCommandIsDangerousCallback: A => {
        let K = __$.Bz(A, w => `$${w}`);
        if (!K.success) return !0;
        let q = K.tokens.map(w => {
            if (typeof w === "string") return w;
            if ("pattern" in w) return w.pattern;
            return;
          }).filter(w => w !== void 0),
          Y = new Set(["-d", "--date", "-r", "--reference", "--iso-8601", "--rfc-3339"]),
          z = 1;
        while (z < q.length) {
          let w = q[z];
          if (w.startsWith("--") && w.includes("=")) z++;else if (w.startsWith("-")) {
            if (Y.has(w)) z += 2;else z++;
          } else {
            if (!w.startsWith("+")) return !0;
            z++;
          }
        }
        return !1;
      }
    },
    hostname: {
      safeFlags: {
        "-f": "none",
        "--fqdn": "none",
        "--long": "none",
        "-s": "none",
        "--short": "none",
        "-i": "none",
        "--ip-address": "none",
        "-I": "none",
        "--all-ip-addresses": "none",
        "-a": "none",
        "--alias": "none",
        "-d": "none",
        "--domain": "none",
        "-A": "none",
        "--all-fqdns": "none",
        "-v": "none",
        "--verbose": "none",
        "-h": "none",
        "--help": "none",
        "-V": "none",
        "--version": "none"
      },
      regex: /^hostname(?:\s+(?:-[a-zA-Z]|--[a-zA-Z-]+))*\s*$/
    },
    info: {
      safeFlags: {
        "-f": "string",
        "--file": "string",
        "-d": "string",
        "--directory": "string",
        "-n": "string",
        "--node": "string",
        "-a": "none",
        "--all": "none",
        "-k": "string",
        "--apropos": "string",
        "-w": "none",
        "--where": "none",
        "--location": "none",
        "--show-options": "none",
        "--vi-keys": "none",
        "--subnodes": "none",
        "-h": "none",
        "--help": "none",
        "--usage": "none",
        "--version": "none"
      }
    }
  };
  __$.rk2 = ["echo", "printf", "wc", "grep", "head", "tail"];
  __$.sk2 = ["cal", "uptime", "cat", "head", "tail", "wc", "stat", "strings", "hexdump", "od", "nl", "id", "uname", "free", "df", "du", "locale", "groups", "nproc", "docker ps", "docker images", "basename", "dirname", "realpath", "cut", "paste", "tr", "column", "diff", "true", "false", "sleep", "which", "type"], __$.tk2 = new Set([...__$.sk2.map(__$.ak2), /^echo(?:\s+(?:'[^']*'|"[^"$<>\n\r]*"|[^|;&`$(){}><#\\!"'\s]+))*(?:\s+2>&1)?\s*$/, /^claude -h$/, /^claude --help$/, /^uniq(?:\s+(?:-[a-zA-Z]+|--[a-zA-Z-]+(?:=\S+)?|-[fsw]\s+\d+))*(?:\s|$)\s*$/, /^pwd$/, /^whoami$/, /^node -v$/, /^npm -v$/, /^python --version$/, /^python3 --version$/, /^tree$/, /^history(?:\s+\d+)?\s*$/, /^alias$/, /^arch(?:\s+(?:--help|-h))?\s*$/, /^ip addr$/, /^ifconfig(?:\s+[a-zA-Z][a-zA-Z0-9_-]*)?\s*$/, /^jq(?!\s+.*(?:-f\b|--from-file|--rawfile|--slurpfile|--run-tests|-L\b|--library-path|\benv\b|\$ENV\b))(?:\s+(?:-[a-zA-Z]+|--[a-zA-Z-]+(?:=\S+)?))*(?:\s+'[^'`]*'|\s+"[^"`]*"|\s+[^-\s'"][^\s]*)+\s*$/, /^cd(?:\s+(?:'[^']*'|"[^"]*"|[^\s;|&`$(){}><#\\]+))?$/, /^ls(?:\s+[^<>()$`|{}&;\n\r]*)?$/, /^find(?:\s+(?:\\[()]|(?!-delete\b|-exec\b|-execdir\b|-ok\b|-okdir\b|-fprint0?\b|-fls\b|-fprintf\b)[^<>()$`|{}&;\n\r\s]|\s)+)?$/]);
});

// Register to shared state
__$.Uf1 = Uf1;
