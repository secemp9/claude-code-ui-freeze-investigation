// Module: gZ
// Dependencies: p7, q6, e6, Oz, l1, A21, GJ, Xz, i6, l6
//   ... and 23 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gZ = k(() => {
  __$.p7();
  __$.q6();
  __$.e6();
  __$.Oz();
  __$.l1();
  __$.A21();
  __$.GJ();
  __$.Xz();
  __$.i6();
  __$.l6();
  __$.nQ();
  __$.hD();
  __$.Z1();
  __$.dj();
  __$.du4 = o(__$.CSA(), 1), __$.IR9 = new Set([".md", ".txt", ".text", ".json", ".yaml", ".yml", ".toml", ".xml", ".csv", ".html", ".htm", ".css", ".scss", ".sass", ".less", ".js", ".ts", ".tsx", ".jsx", ".mjs", ".cjs", ".mts", ".cts", ".py", ".pyi", ".pyw", ".rb", ".erb", ".rake", ".go", ".rs", ".java", ".kt", ".kts", ".scala", ".c", ".cpp", ".cc", ".cxx", ".h", ".hpp", ".hxx", ".cs", ".swift", ".sh", ".bash", ".zsh", ".fish", ".ps1", ".bat", ".cmd", ".env", ".ini", ".cfg", ".conf", ".config", ".properties", ".sql", ".graphql", ".gql", ".proto", ".vue", ".svelte", ".astro", ".ejs", ".hbs", ".pug", ".jade", ".php", ".pl", ".pm", ".lua", ".r", ".R", ".dart", ".ex", ".exs", ".erl", ".hrl", ".clj", ".cljs", ".cljc", ".edn", ".hs", ".lhs", ".elm", ".ml", ".mli", ".f", ".f90", ".f95", ".for", ".cmake", ".make", ".makefile", ".gradle", ".sbt", ".rst", ".adoc", ".asciidoc", ".org", ".tex", ".latex", ".lock", ".log", ".diff", ".patch"]);
  __$.t0 = __$.z6((A = !1) => {
    let K = Date.now();
    __$.v8("info", "memory_files_started");
    let q = [],
      Y = new Set(),
      z = __$.Z2(),
      w = A || z.hasClaudeMdExternalIncludesApproved || !1,
      H = __$.qu("Managed");
    q.push(...__$.qC(H, "Managed", Y, w));
    let J = __$.O26();
    if (q.push(...__$.E7A({
      rulesDir: J,
      type: "Managed",
      processedPaths: Y,
      includeExternal: w,
      conditionalRule: !1
    })), __$.t$("userSettings")) {
      let $ = __$.qu("User");
      q.push(...__$.qC($, "User", Y, !0));
      let _ = __$.X26();
      q.push(...__$.E7A({
        rulesDir: _,
        type: "User",
        processedPaths: Y,
        includeExternal: !0,
        conditionalRule: !1
      }));
    }
    let O = [],
      X = __$.V8();
    while (X !== __$.kR9(X).root) O.push(X), X = __$.q21(X);
    for (let $ of O.reverse()) {
      if (__$.t$("projectSettings")) {
        let _ = __$.bT($, "CLAUDE.md");
        q.push(...__$.qC(_, "Project", Y, w));
        let G = __$.bT($, ".claude", "CLAUDE.md");
        q.push(...__$.qC(G, "Project", Y, w));
        let Z = __$.bT($, ".claude", "rules");
        q.push(...__$.E7A({
          rulesDir: Z,
          type: "Project",
          processedPaths: Y,
          includeExternal: w,
          conditionalRule: !1
        }));
      }
      if (__$.t$("localSettings")) {
        let _ = __$.bT($, "CLAUDE.local.md");
        q.push(...__$.qC(_, "Local", Y, w));
      }
    }
    if (__$.P1(process.env.CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD)) {
      let $ = __$.Qr6();
      for (let _ of $) {
        let G = __$.bT(_, "CLAUDE.md");
        q.push(...__$.qC(G, "Project", Y, w));
        let Z = __$.bT(_, ".claude", "CLAUDE.md");
        q.push(...__$.qC(Z, "Project", Y, w));
        let W = __$.bT(_, ".claude", "rules");
        q.push(...__$.E7A({
          rulesDir: W,
          type: "Project",
          processedPaths: Y,
          includeExternal: w,
          conditionalRule: !1
        }));
      }
    }
    return __$.v8("info", "memory_files_completed", {
      duration_ms: Date.now() - K,
      file_count: q.length,
      total_content_length: q.reduce(($, _) => $ + _.content.length, 0)
    }), q;
  });
});

// Register to shared state
__$.gZ = gZ;
