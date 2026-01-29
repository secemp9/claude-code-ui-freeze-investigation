// Module: iH
// Dependencies: z3, l6, Z91, CK, rP, i6, l1, nTA, p7, q6
//   ... and 31 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iH = k(() => {
  __$.z3();
  __$.l6();
  __$.Z91();
  __$.CK();
  __$.rP();
  __$.i6();
  __$.l1();
  __$.nTA();
  __$.p7();
  __$.q6();
  __$.e6();
  __$.C1();
  __$.B5();
  __$.Vf();
  __$.yM6();
  __$.SM6();
  __$.hM6();
  __$.Z1();
  __$.Jz();
  __$.Rr();
  __$.b1();
  __$.bD7 = o(__$.hy(), 1);
  __$.KWA = {
    cursor: {
      ideKind: "vscode",
      displayName: "Cursor",
      processKeywordsMac: ["Cursor Helper", "Cursor.app"],
      processKeywordsWindows: ["cursor.exe"],
      processKeywordsLinux: ["cursor"]
    },
    windsurf: {
      ideKind: "vscode",
      displayName: "Windsurf",
      processKeywordsMac: ["Windsurf Helper", "Windsurf.app"],
      processKeywordsWindows: ["windsurf.exe"],
      processKeywordsLinux: ["windsurf"]
    },
    vscode: {
      ideKind: "vscode",
      displayName: "VS Code",
      processKeywordsMac: ["Visual Studio Code", "Code Helper"],
      processKeywordsWindows: ["code.exe"],
      processKeywordsLinux: ["code"]
    },
    intellij: {
      ideKind: "jetbrains",
      displayName: "IntelliJ IDEA",
      processKeywordsMac: ["IntelliJ IDEA"],
      processKeywordsWindows: ["idea64.exe"],
      processKeywordsLinux: ["idea", "intellij"]
    },
    pycharm: {
      ideKind: "jetbrains",
      displayName: "PyCharm",
      processKeywordsMac: ["PyCharm"],
      processKeywordsWindows: ["pycharm64.exe"],
      processKeywordsLinux: ["pycharm"]
    },
    webstorm: {
      ideKind: "jetbrains",
      displayName: "WebStorm",
      processKeywordsMac: ["WebStorm"],
      processKeywordsWindows: ["webstorm64.exe"],
      processKeywordsLinux: ["webstorm"]
    },
    phpstorm: {
      ideKind: "jetbrains",
      displayName: "PhpStorm",
      processKeywordsMac: ["PhpStorm"],
      processKeywordsWindows: ["phpstorm64.exe"],
      processKeywordsLinux: ["phpstorm"]
    },
    rubymine: {
      ideKind: "jetbrains",
      displayName: "RubyMine",
      processKeywordsMac: ["RubyMine"],
      processKeywordsWindows: ["rubymine64.exe"],
      processKeywordsLinux: ["rubymine"]
    },
    clion: {
      ideKind: "jetbrains",
      displayName: "CLion",
      processKeywordsMac: ["CLion"],
      processKeywordsWindows: ["clion64.exe"],
      processKeywordsLinux: ["clion"]
    },
    goland: {
      ideKind: "jetbrains",
      displayName: "GoLand",
      processKeywordsMac: ["GoLand"],
      processKeywordsWindows: ["goland64.exe"],
      processKeywordsLinux: ["goland"]
    },
    rider: {
      ideKind: "jetbrains",
      displayName: "Rider",
      processKeywordsMac: ["Rider"],
      processKeywordsWindows: ["rider64.exe"],
      processKeywordsLinux: ["rider"]
    },
    datagrip: {
      ideKind: "jetbrains",
      displayName: "DataGrip",
      processKeywordsMac: ["DataGrip"],
      processKeywordsWindows: ["datagrip64.exe"],
      processKeywordsLinux: ["datagrip"]
    },
    appcode: {
      ideKind: "jetbrains",
      displayName: "AppCode",
      processKeywordsMac: ["AppCode"],
      processKeywordsWindows: ["appcode.exe"],
      processKeywordsLinux: ["appcode"]
    },
    dataspell: {
      ideKind: "jetbrains",
      displayName: "DataSpell",
      processKeywordsMac: ["DataSpell"],
      processKeywordsWindows: ["dataspell64.exe"],
      processKeywordsLinux: ["dataspell"]
    },
    aqua: {
      ideKind: "jetbrains",
      displayName: "Aqua",
      processKeywordsMac: [],
      processKeywordsWindows: ["aqua64.exe"],
      processKeywordsLinux: []
    },
    gateway: {
      ideKind: "jetbrains",
      displayName: "Gateway",
      processKeywordsMac: [],
      processKeywordsWindows: ["gateway64.exe"],
      processKeywordsLinux: []
    },
    fleet: {
      ideKind: "jetbrains",
      displayName: "Fleet",
      processKeywordsMac: [],
      processKeywordsWindows: ["fleet.exe"],
      processKeywordsLinux: []
    },
    androidstudio: {
      ideKind: "jetbrains",
      displayName: "Android Studio",
      processKeywordsMac: ["Android Studio"],
      processKeywordsWindows: ["studio64.exe"],
      processKeywordsLinux: ["android-studio"]
    }
  };
  __$.rBA = __$.z6(() => {
    return __$.q_1(__$.m6.terminal);
  }), __$.oBA = __$.z6(() => {
    return __$.UI(__$.QV.terminal);
  }), __$.M$ = __$.z6(() => {
    return __$.rBA() || __$.oBA() || Boolean(process.env.FORCE_CODE_TERMINAL);
  });
  __$.qRY = __$.sLY(import.meta.url), __$.UYH = __$.K_1(__$.qRY, "../");
  __$.hD7 = {
    code: "VS Code",
    cursor: "Cursor",
    windsurf: "Windsurf",
    antigravity: "Antigravity",
    vi: "Vim",
    vim: "Vim",
    nano: "nano",
    notepad: "Notepad",
    "start /wait notepad": "Notepad",
    emacs: "Emacs",
    subl: "Sublime Text",
    atom: "Atom"
  };
  __$.dD7 = __$.z6(async (A, K) => {
    if (process.env.CLAUDE_CODE_IDE_HOST_OVERRIDE) return process.env.CLAUDE_CODE_IDE_HOST_OVERRIDE;
    if (__$.o6() !== "wsl" || !A) return "127.0.0.1";
    try {
      let q = await __$.wY("ip route show | grep -i default", {
        shell: !0,
        reject: !1
      });
      if (q.exitCode === 0 && q.stdout) {
        let Y = q.stdout.match(/default via (\d+\.\d+\.\d+\.\d+)/);
        if (Y) {
          let z = Y[1];
          if (await __$.xM6(z, K)) return z;
        }
      }
    } catch (q) {}
    return "127.0.0.1";
  });
});

// Register to shared state
__$.iH = iH;
