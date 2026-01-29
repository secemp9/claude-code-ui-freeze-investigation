// Module: Sd6
// Dependencies: u5, i6, Jw, mZ, TJ, K7, R4A, z3, iH, B5
//   ... and 38 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Sd6 = k(() => {
  __$.u5();
  __$.i6();
  __$.Jw();
  __$.mZ();
  __$.TJ();
  __$.K7();
  __$.R4A();
  __$.z3();
  __$.iH();
  __$.B5();
  __$.gpA();
  __$.Vz();
  __$.I8();
  __$.Id6();
  __$.UK();
  __$.AP();
  __$.Z1();
  __$.W4A();
  __$.hD();
  __$.xe();
  __$.KKz = [{
    id: "new-user-warmup",
    content: async () => "Start with small features or bug fixes, tell Claude to propose a plan, and verify its suggested edits",
    cooldownSessions: 3,
    async isRelevant() {
      return __$.M1().numStartups < 10;
    }
  }, {
    id: "plan-mode-for-complex-tasks",
    content: async () => `Use Plan Mode to prepare for a complex request before making changes. Press ${__$.A$("chat:cycleMode", "Chat", "shift+tab")} twice to enable.`,
    cooldownSessions: 5,
    isRelevant: async () => {
      let A = __$.M1();
      return (A.lastPlanModeUse ? (Date.now() - A.lastPlanModeUse) / 86400000 : 1 / 0) > 7;
    }
  }, {
    id: "default-permission-mode-config",
    content: async () => "Use /config to change your default permission mode (including Plan Mode)",
    cooldownSessions: 10,
    isRelevant: async () => {
      try {
        let A = __$.M1(),
          K = __$.J8(),
          q = Boolean(A.lastPlanModeUse),
          Y = Boolean(K?.permissions?.defaultMode);
        return q && !Y;
      } catch (A) {
        return __$.h(`Failed to check default-permission-mode-config tip relevance: ${A}`, {
          level: "warn"
        }), !1;
      }
    }
  }, {
    id: "git-worktrees",
    content: async () => "Use git worktrees to run multiple Claude sessions in parallel.",
    cooldownSessions: 10,
    isRelevant: async () => {
      try {
        let A = __$.M1();
        return (await __$.iNA()) <= 1 && A.numStartups > 50;
      } catch (A) {
        return !1;
      }
    }
  }, {
    id: "terminal-setup",
    content: async () => __$.m6.terminal === "Apple_Terminal" ? "Run /terminal-setup to enable convenient terminal integration like Option + Enter for new line and more" : "Run /terminal-setup to enable convenient terminal integration like Shift + Enter for new line and more",
    cooldownSessions: 10,
    async isRelevant() {
      let A = __$.M1();
      if (__$.m6.terminal === "Apple_Terminal") return __$.L4A.isEnabled() && !A.optionAsMetaKeyInstalled;
      return __$.L4A.isEnabled() && !A.shiftEnterKeyBindingInstalled;
    }
  }, {
    id: "shift-enter",
    content: async () => __$.m6.terminal === "Apple_Terminal" ? "Press Option+Enter to send a multi-line message" : "Press Shift+Enter to send a multi-line message",
    cooldownSessions: 10,
    async isRelevant() {
      let A = __$.M1();
      return Boolean((__$.m6.terminal === "Apple_Terminal" ? A.optionAsMetaKeyInstalled : A.shiftEnterKeyBindingInstalled) && A.numStartups > 3);
    }
  }, {
    id: "shift-enter-setup",
    content: async () => __$.m6.terminal === "Apple_Terminal" ? "Run /terminal-setup to enable Option+Enter for new lines" : "Run /terminal-setup to enable Shift+Enter for new lines",
    cooldownSessions: 10,
    async isRelevant() {
      if (!__$.DIA()) return !1;
      let A = __$.M1();
      return !(__$.m6.terminal === "Apple_Terminal" ? A.optionAsMetaKeyInstalled : A.shiftEnterKeyBindingInstalled);
    }
  }, {
    id: "memory-command",
    content: async () => "Use /memory to view and manage Claude memory",
    cooldownSessions: 15,
    async isRelevant() {
      return __$.M1().memoryUsageCount <= 0;
    }
  }, {
    id: "theme-command",
    content: async () => "Use /theme to change the color theme",
    cooldownSessions: 20,
    isRelevant: async () => !0
  }, {
    id: "colorterm-truecolor",
    content: async () => "Try setting environment variable COLORTERM=truecolor for richer colors",
    cooldownSessions: 30,
    isRelevant: async () => !process.env.COLORTERM && __$.O1.level < 3
  }, {
    id: "status-line",
    content: async () => "Use /statusline to set up a custom status line that will display beneath the input box",
    cooldownSessions: 25,
    isRelevant: async () => __$.J8().statusLine === void 0
  }, {
    id: "prompt-queue",
    content: async () => "Hit Enter to queue up additional messages while Claude is working.",
    cooldownSessions: 5,
    async isRelevant() {
      return __$.M1().promptQueueUseCount <= 3;
    }
  }, {
    id: "enter-to-steer-in-relatime",
    content: async () => "Send messages to Claude while it works to steer Claude in real-time",
    cooldownSessions: 20,
    isRelevant: async () => !0
  }, {
    id: "todo-list",
    content: async () => "Ask Claude to create a todo list when working on complex tasks to track progress and remain on track",
    cooldownSessions: 20,
    isRelevant: async () => !0
  }, {
    id: "vscode-command-install",
    content: async () => `Open the Command Palette (Cmd+Shift+P) and run "Shell Command: Install '${__$.m6.terminal === "vscode" ? "code" : __$.m6.terminal}' command in PATH" to enable IDE integration`,
    cooldownSessions: 0,
    async isRelevant() {
      if (!__$.rBA()) return !1;
      if (__$.o6() !== "macos") return !1;
      switch (__$.m6.terminal) {
        case "vscode":
          return !(await __$.FD7());
        case "cursor":
          return !(await __$.mD7());
        case "windsurf":
          return !(await __$.gD7());
        default:
          return !1;
      }
    }
  }, {
    id: "ide-upsell-external-terminal",
    content: async () => "Connect Claude to your IDE · /ide",
    cooldownSessions: 4,
    async isRelevant() {
      if (__$.M$()) return !1;
      if (__$.Y_1().length !== 0) return !1;
      return (await __$.QD7()).length > 0;
    }
  }, {
    id: "install-github-app",
    content: async () => "Run /install-github-app to tag @claude right from your Github issues and PRs",
    cooldownSessions: 10,
    isRelevant: async () => !__$.M1().githubActionSetupCount
  }, {
    id: "install-slack-app",
    content: async () => "Run /install-slack-app to use Claude in Slack",
    cooldownSessions: 10,
    isRelevant: async () => !__$.M1().slackAppInstallCount
  }, {
    id: "permissions",
    content: async () => "Use /permissions to pre-approve and pre-deny bash, edit, and MCP tools",
    cooldownSessions: 10,
    async isRelevant() {
      return __$.M1().numStartups > 10;
    }
  }, {
    id: "drag-and-drop-images",
    content: async () => "Did you know you can drag and drop image files into your terminal?",
    cooldownSessions: 10,
    isRelevant: async () => !__$.m6.isSSH()
  }, {
    id: "paste-images-mac",
    content: async () => "Paste images into Claude Code using control+v (not cmd+v!)",
    cooldownSessions: 10,
    isRelevant: async () => __$.o6() === "macos"
  }, {
    id: "double-esc",
    content: async () => "Double-tap esc to rewind the conversation to a previous point in time",
    cooldownSessions: 10,
    isRelevant: async () => !__$.l2()
  }, {
    id: "double-esc-code-restore",
    content: async () => "Double-tap esc to rewind the code and/or conversation to a previous point in time",
    cooldownSessions: 10,
    isRelevant: async () => __$.l2()
  }, {
    id: "continue",
    content: async () => "Run claude --continue or claude --resume to resume a conversation",
    cooldownSessions: 10,
    isRelevant: async () => !0
  }, {
    id: "rename-conversation",
    content: async () => "Name your conversations with /rename to find them easily in /resume later",
    cooldownSessions: 15,
    isRelevant: async () => __$.rd() && __$.M1().numStartups > 10
  }, {
    id: "custom-commands",
    content: async () => "Create skills by adding .md files to .claude/skills/ in your project or ~/.claude/skills/ for skills that work in any project",
    cooldownSessions: 15,
    async isRelevant() {
      return __$.M1().numStartups > 10;
    }
  }, {
    id: "shift-tab",
    content: async () => `Hit ${__$.A$("chat:cycleMode", "Chat", "shift+tab")} to cycle between default mode, auto-accept edit mode, and plan mode`,
    cooldownSessions: 10,
    isRelevant: async () => !0
  }, {
    id: "image-paste",
    content: async () => `Use ${__$.IPA.displayText} to paste images from your clipboard`,
    cooldownSessions: 20,
    isRelevant: async () => !0
  }, {
    id: "custom-agents",
    content: async () => "Use /agents to optimize specific tasks. Eg. Software Architect, Code Writer, Code Reviewer",
    cooldownSessions: 15,
    async isRelevant() {
      return __$.M1().numStartups > 5;
    }
  }, {
    id: "agent-flag",
    content: async () => "Use --agent <agent_name> to directly start a conversation with a subagent",
    cooldownSessions: 15,
    async isRelevant() {
      return __$.M1().numStartups > 5;
    }
  }, {
    id: "desktop-app",
    content: async () => "Run Claude Code locally or remotely using the Claude desktop app: clau.de/desktop",
    cooldownSessions: 15,
    isRelevant: async () => __$.o6() !== "linux"
  }, {
    id: "web-app",
    content: async () => "Use Claude Code on the web: clau.de/web",
    cooldownSessions: 15,
    isRelevant: async () => !0
  }, {
    id: "mobile-app",
    content: async () => "Use /mobile to get Claude on your phone",
    cooldownSessions: 15,
    isRelevant: async () => !0
  }, {
    id: "opusplan-mode-reminder",
    content: async () => `Your default model setting is Opus Plan Mode. Press ${__$.A$("chat:cycleMode", "Chat", "shift+tab")} twice to activate Plan Mode and plan with Claude Opus.`,
    cooldownSessions: 2,
    async isRelevant() {
      let A = __$.M1(),
        q = __$.q4A() === "opusplan",
        Y = A.lastPlanModeUse ? (Date.now() - A.lastPlanModeUse) / 86400000 : 1 / 0;
      return q && Y > 3;
    }
  }, {
    id: "frontend-design-plugin",
    content: async A => {
      let K = await __$.AKz(),
        q = __$.h8("suggestion", A.theme);
      if (!K) return `Working with HTML/CSS? Add the frontend-design plugin:
${q("/plugin marketplace add anthropics/claude-code")}
${q("/plugin install frontend-design@claude-code-plugins")}`;
      return `Working with HTML/CSS? Install the frontend-design plugin:
${q("/plugin install frontend-design@claude-code-plugins")}`;
    },
    cooldownSessions: 3,
    async isRelevant(A) {
      if (__$.BZ("frontend-design@claude-code-plugins")) return !1;
      if (!A?.readFileState) return !1;
      return __$.py(A.readFileState).some(q => /\.(html|css|htm)$/i.test(q));
    }
  }, {
    id: "guest-passes",
    content: async A => {
      return `You have free guest passes to share · ${__$.h8("claude", A.theme)("/passes")}`;
    },
    cooldownSessions: 3,
    isRelevant: async () => {
      if (__$.M1().hasVisitedPasses) return !1;
      let {
        eligible: K
      } = __$.Uv1();
      return K;
    }
  }], __$.qKz = [];
});

// Register to shared state
__$.Sd6 = Sd6;
