// Module: ZqK
// Dependencies: e6, Xz, LH, Oz, _P, gO, n3A, OqK, zS6, YS6
//   ... and 6 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZqK = k(() => {
  __$.e6();
  __$.Xz();
  __$.LH();
  __$.Oz();
  __$._P();
  __$.gO();
  __$.n3A();
  __$.OqK = /[*?[\]{}]/;
  __$.zS6 = {
    cd: A => A.length === 0 ? [__$.YS6()] : [A.join(" ")],
    ls: A => {
      let K = __$.Lz(A);
      return K.length > 0 ? K : ["."];
    },
    find: A => {
      let K = [],
        q = new Set(["-newer", "-anewer", "-cnewer", "-mnewer", "-samefile", "-path", "-wholename", "-ilname", "-lname", "-ipath", "-iwholename"]),
        Y = /^-newer[acmBt][acmtB]$/,
        z = !1;
      for (let w = 0; w < A.length; w++) {
        let H = A[w];
        if (!H) continue;
        if (H.startsWith("-")) {
          if (["-H", "-L", "-P"].includes(H)) continue;
          if (z = !0, q.has(H) || Y.test(H)) {
            let J = A[w + 1];
            if (J) K.push(J), w++;
          }
          continue;
        }
        if (!z) K.push(H);
      }
      return K.length > 0 ? K : ["."];
    },
    mkdir: __$.Lz,
    touch: __$.Lz,
    rm: __$.Lz,
    rmdir: __$.Lz,
    mv: __$.Lz,
    cp: __$.Lz,
    cat: __$.Lz,
    head: __$.Lz,
    tail: __$.Lz,
    sort: __$.Lz,
    uniq: __$.Lz,
    wc: __$.Lz,
    cut: __$.Lz,
    paste: __$.Lz,
    column: __$.Lz,
    file: __$.Lz,
    stat: __$.Lz,
    diff: __$.Lz,
    awk: __$.Lz,
    strings: __$.Lz,
    hexdump: __$.Lz,
    od: __$.Lz,
    base64: __$.Lz,
    nl: __$.Lz,
    sha256sum: __$.Lz,
    sha1sum: __$.Lz,
    md5sum: __$.Lz,
    tr: A => {
      let K = A.some(Y => Y === "-d" || Y === "--delete" || Y.startsWith("-") && Y.includes("d"));
      return __$.Lz(A).slice(K ? 1 : 2);
    },
    grep: A => {
      let q = __$.JqK(A, new Set(["-e", "--regexp", "-f", "--file", "--exclude", "--include", "--exclude-dir", "--include-dir", "-m", "--max-count", "-A", "--after-context", "-B", "--before-context", "-C", "--context"]));
      if (q.length === 0 && A.some(Y => ["-r", "-R", "--recursive"].includes(Y))) return ["."];
      return q;
    },
    rg: A => {
      return __$.JqK(A, new Set(["-e", "--regexp", "-f", "--file", "-t", "--type", "-T", "--type-not", "-g", "--glob", "-m", "--max-count", "--max-depth", "-r", "--replace", "-A", "--after-context", "-B", "--before-context", "-C", "--context"]), ["."]);
    },
    sed: A => {
      let K = [],
        q = !1,
        Y = !1;
      for (let z = 0; z < A.length; z++) {
        if (q) {
          q = !1;
          continue;
        }
        let w = A[z];
        if (!w) continue;
        if (w.startsWith("-")) {
          if (["-f", "--file"].includes(w)) {
            let H = A[z + 1];
            if (H) K.push(H), q = !0;
            Y = !0;
          } else if (["-e", "--expression"].includes(w)) q = !0, Y = !0;else if (w.includes("e") || w.includes("f")) Y = !0;
          continue;
        }
        if (!Y) {
          Y = !0;
          continue;
        }
        K.push(w);
      }
      return K;
    },
    jq: A => {
      let K = [],
        q = new Set(["-e", "--expression", "-f", "--from-file", "--arg", "--argjson", "--slurpfile", "--rawfile", "--args", "--jsonargs", "-L", "--library-path", "--indent", "--tab"]),
        Y = !1;
      for (let z = 0; z < A.length; z++) {
        let w = A[z];
        if (w === void 0 || w === null) continue;
        if (w.startsWith("-")) {
          let H = w.split("=")[0];
          if (H && ["-e", "--expression"].includes(H)) Y = !0;
          if (H && q.has(H) && !w.includes("=")) z++;
          continue;
        }
        if (!Y) {
          Y = !0;
          continue;
        }
        K.push(w);
      }
      return K;
    },
    git: A => {
      if (A.length >= 1 && A[0] === "diff") {
        if (A.includes("--no-index")) return A.slice(1).filter(Y => !Y?.startsWith("-")).slice(0, 2);
      }
      return [];
    }
  }, __$.TP2 = Object.keys(__$.zS6), __$.vP2 = {
    cd: "change directories to",
    ls: "list files in",
    find: "search files in",
    mkdir: "create directories in",
    touch: "create or modify files in",
    rm: "remove files from",
    rmdir: "remove directories from",
    mv: "move files to/from",
    cp: "copy files to/from",
    cat: "concatenate files from",
    head: "read the beginning of files from",
    tail: "read the end of files from",
    sort: "sort contents of files from",
    uniq: "filter duplicate lines from files in",
    wc: "count lines/words/bytes in files from",
    cut: "extract columns from files in",
    paste: "merge files from",
    column: "format files from",
    tr: "transform text from files in",
    file: "examine file types in",
    stat: "read file stats from",
    diff: "compare files from",
    awk: "process text from files in",
    strings: "extract strings from files in",
    hexdump: "display hex dump of files from",
    od: "display octal dump of files from",
    base64: "encode/decode files from",
    nl: "number lines in files from",
    grep: "search for patterns in files from",
    rg: "search for patterns in files from",
    sed: "edit files in",
    git: "access files with git from",
    jq: "process JSON from files in",
    sha256sum: "compute SHA-256 checksums for files in",
    sha1sum: "compute SHA-1 checksums for files in",
    md5sum: "compute MD5 checksums for files in"
  }, __$.GqK = {
    cd: "read",
    ls: "read",
    find: "read",
    mkdir: "create",
    touch: "create",
    rm: "write",
    rmdir: "write",
    mv: "write",
    cp: "write",
    cat: "read",
    head: "read",
    tail: "read",
    sort: "read",
    uniq: "read",
    wc: "read",
    cut: "read",
    paste: "read",
    column: "read",
    tr: "read",
    file: "read",
    stat: "read",
    diff: "read",
    awk: "read",
    strings: "read",
    hexdump: "read",
    od: "read",
    base64: "read",
    nl: "read",
    grep: "read",
    rg: "read",
    sed: "write",
    git: "read",
    jq: "read",
    sha256sum: "read",
    sha1sum: "read",
    md5sum: "read"
  }, __$.EP2 = {
    mv: A => !A.some(K => K?.startsWith("-")),
    cp: A => !A.some(K => K?.startsWith("-"))
  };
});

// Register to shared state
__$.ZqK = ZqK;
