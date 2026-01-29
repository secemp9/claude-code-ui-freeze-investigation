// Module: P31
// Dependencies: i6, y4, I8, Vz, j31, M31, yY, A$, M1, x1
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var P31 = k(() => {
  __$.i6();
  __$.y4();
  __$.I8();
  __$.Vz();
  __$.j31 = [{
    id: "quick-wins",
    name: "Quick Wins",
    description: "Try these in 30 seconds",
    order: 1
  }, {
    id: "speed",
    name: "10x Your Speed",
    description: "Efficiency boosters",
    order: 2
  }, {
    id: "code",
    name: "Level Up Your Code",
    description: "Dev workflows",
    order: 3
  }, {
    id: "collaborate",
    name: "Share & Collaborate",
    description: "Work with your team",
    order: 4
  }, {
    id: "customize",
    name: "Make It Yours",
    description: "Personalize Claude",
    order: 5
  }, {
    id: "power-user",
    name: "Power User",
    description: "Advanced features",
    order: 6
  }];
  __$.M31 = [{
    id: "image-paste",
    name: "Paste Images",
    description: "Paste screenshots for Claude to analyze",
    categoryId: "quick-wins",
    tryItPrompt: "Press Ctrl+V to paste an image from clipboard",
    hasBeenUsed: async () => __$.yY("image-paste")
  }, {
    id: "resume",
    name: "Resume Conversations",
    description: "Pick up where you left off",
    categoryId: "quick-wins",
    tryItPrompt: "Type /resume to continue a past conversation",
    hasBeenUsed: async () => __$.yY("resume")
  }, {
    id: "cost",
    name: "Track Costs",
    description: "See your session spending",
    categoryId: "quick-wins",
    tryItPrompt: "Type /cost to see session cost",
    hasBeenUsed: async () => __$.yY("cost")
  }, {
    id: "external-editor",
    name: "External Editor",
    description: "Edit prompts in VS Code or vim",
    categoryId: "quick-wins",
    get tryItPrompt() {
      return `Press ${__$.A$("chat:externalEditor", "Chat", "Ctrl+G")} to open your editor`;
    },
    hasBeenUsed: async () => __$.yY("external-editor")
  }, {
    id: "slash-commands",
    name: "Skills",
    description: "Quick actions with /skills",
    categoryId: "quick-wins",
    tryItPrompt: "Type / to see available skills",
    hasBeenUsed: async () => __$.yY("slash-commands")
  }, {
    id: "at-mentions",
    name: "@-mentions",
    description: "Reference files with @filename",
    categoryId: "quick-wins",
    tryItPrompt: "Type @ followed by a filename",
    hasBeenUsed: async () => __$.yY("at-mentions")
  }, {
    id: "clear",
    name: "Fresh Start",
    description: "Clear and start over",
    categoryId: "quick-wins",
    tryItPrompt: "Type /clear for a fresh conversation",
    hasBeenUsed: async () => __$.yY("clear")
  }, {
    id: "rewind",
    name: "Undo Changes",
    description: "Go back to a previous point",
    categoryId: "quick-wins",
    tryItPrompt: "Type /rewind to undo",
    hasBeenUsed: async () => __$.yY("rewind")
  }, {
    id: "ctrl-underscore",
    name: "Quick Undo",
    description: "Undo with keyboard shortcut",
    categoryId: "quick-wins",
    get tryItPrompt() {
      return `Press ${__$.A$("chat:undo", "Chat", "Ctrl+_")} to undo`;
    },
    hasBeenUsed: async () => __$.yY("ctrl-underscore")
  }, {
    id: "double-escape",
    name: "Clear Input",
    description: "Double-tap Escape to clear",
    categoryId: "quick-wins",
    tryItPrompt: "Press Escape twice to clear input",
    hasBeenUsed: async () => __$.yY("double-escape")
  }, {
    id: "prompt-stash",
    name: "Stash Prompt",
    description: "Save prompt for later",
    categoryId: "quick-wins",
    get tryItPrompt() {
      let A = __$.A$("chat:stash", "Chat", "Ctrl+S");
      return `Press ${A} to stash, ${A} again to restore`;
    },
    hasBeenUsed: async () => __$.yY("prompt-stash")
  }, {
    id: "vim-mode",
    name: "Vim Mode",
    description: "Vim keybindings in the prompt",
    categoryId: "speed",
    tryItPrompt: "Type /vim to toggle Vim mode",
    hasBeenUsed: async () => __$.yY("vim-mode")
  }, {
    id: "history-search",
    name: "History Search",
    description: "Search past prompts like bash",
    categoryId: "speed",
    get tryItPrompt() {
      return `Press ${__$.A$("history:search", "Global", "Ctrl+R")} to search history`;
    },
    hasBeenUsed: async () => __$.yY("history-search")
  }, {
    id: "tab-completion",
    name: "Tab Completion",
    description: "Autocomplete file paths",
    categoryId: "speed",
    tryItPrompt: "Start typing a path and press Tab",
    hasBeenUsed: async () => __$.yY("tab-completion")
  }, {
    id: "prompt-queue",
    name: "Prompt Queue",
    description: "Type while Claude works",
    categoryId: "speed",
    tryItPrompt: "Type your next prompt while Claude is responding",
    hasBeenUsed: async () => {
      return __$.M1().promptQueueUseCount > 0;
    }
  }, {
    id: "teleport",
    name: "Teleport",
    description: "Jump to any GitHub repo instantly",
    categoryId: "speed",
    tryItPrompt: "Type /teleport owner/repo to jump there",
    hasBeenUsed: async () => __$.yY("teleport")
  }, {
    id: "plan-mode",
    name: "Plan Mode",
    description: "Think before you code",
    categoryId: "speed",
    tryItPrompt: "Press Shift+Tab twice for Plan Mode",
    hasBeenUsed: async () => {
      return __$.M1().lastPlanModeUse !== void 0;
    }
  }, {
    id: "bash-mode",
    name: "Bash Mode",
    description: "Run shell commands with ! prefix",
    categoryId: "speed",
    tryItPrompt: "Type !ls to list files",
    hasBeenUsed: async () => __$.yY("bash-mode")
  }, {
    id: "compact",
    name: "Compact Context",
    description: "Summarize to free up space",
    categoryId: "speed",
    tryItPrompt: "Type /compact to summarize",
    hasBeenUsed: async () => __$.yY("compact")
  }, {
    id: "memory-mode",
    name: "Quick Memory",
    description: "Save notes with # prefix",
    categoryId: "speed",
    tryItPrompt: "Press # to add to memory",
    hasBeenUsed: async () => {
      return __$.M1().memoryUsageCount > 0;
    }
  }, {
    id: "auto-accept-mode",
    name: "Auto-Accept Edits",
    description: "Skip confirmations",
    categoryId: "speed",
    tryItPrompt: "Press Shift+Tab once for Auto-Accept",
    hasBeenUsed: async () => __$.yY("auto-accept-mode")
  }, {
    id: "context",
    name: "Context Viewer",
    description: "See what Claude sees",
    categoryId: "speed",
    tryItPrompt: "Type /context to visualize usage",
    hasBeenUsed: async () => __$.yY("context")
  }, {
    id: "backslash-return",
    name: "Multi-line Input",
    description: "Type longer prompts",
    categoryId: "speed",
    tryItPrompt: "Type \\ then Enter for a new line",
    hasBeenUsed: async () => {
      return __$.M1().hasUsedBackslashReturn === !0;
    }
  }, {
    id: "review",
    name: "Code Review",
    description: "AI-powered code review",
    categoryId: "code",
    tryItPrompt: "Type /review to review a PR",
    hasBeenUsed: async () => __$.yY("review")
  }, {
    id: "security-review",
    name: "Security Review",
    description: "Find vulnerabilities",
    categoryId: "code",
    tryItPrompt: "Ask Claude to do a security review",
    hasBeenUsed: async () => __$.yY("security-review")
  }, {
    id: "git-commits",
    name: "Git Commits",
    description: "Claude-assisted commits",
    categoryId: "code",
    tryItPrompt: "Ask Claude to commit your changes",
    hasBeenUsed: async () => __$.yY("git-commits")
  }, {
    id: "pr-creation",
    name: "PR Creation",
    description: "Create PRs with Claude",
    categoryId: "code",
    tryItPrompt: "Ask Claude to create a pull request",
    hasBeenUsed: async () => __$.yY("pr-creation")
  }, {
    id: "branch-management",
    name: "Branch Management",
    description: "Git branch operations",
    categoryId: "code",
    tryItPrompt: "Ask Claude to create a branch",
    hasBeenUsed: async () => __$.yY("branch-management")
  }, {
    id: "share",
    name: "Share Conversations",
    description: "Share a link to your session",
    categoryId: "collaborate",
    tryItPrompt: "Type /share to get a shareable link",
    hasBeenUsed: async () => __$.yY("share")
  }, {
    id: "export",
    name: "Export",
    description: "Save as markdown",
    categoryId: "collaborate",
    tryItPrompt: "Type /export to save conversation",
    hasBeenUsed: async () => __$.yY("export")
  }, {
    id: "github-app",
    name: "GitHub Integration",
    description: "Connect to GitHub Actions",
    categoryId: "collaborate",
    tryItPrompt: "Type /install-github-app to set up",
    hasBeenUsed: async () => __$.yY("github-app")
  }, {
    id: "slack-app",
    name: "Slack Notifications",
    description: "Get notified in Slack",
    categoryId: "collaborate",
    tryItPrompt: "Type /install-slack-app to connect",
    hasBeenUsed: async () => __$.yY("slack-app")
  }, {
    id: "custom-commands",
    name: "Custom Skills",
    description: "Create your own /skills",
    categoryId: "customize",
    tryItPrompt: "Create .claude/skills/myskill/SKILL.md",
    hasBeenUsed: async () => {
      let A = __$.x1(),
        K = __$.D31(A, ".claude", "skills"),
        q = __$.D31(__$.o_4(), ".claude", "skills");
      return __$.W31(K) || __$.W31(q);
    }
  }, {
    id: "hooks",
    name: "Hooks",
    description: "Auto-run scripts on events",
    categoryId: "customize",
    tryItPrompt: "Add hooks to .claude/settings.json",
    hasBeenUsed: async () => {
      let A = __$.J8();
      return Object.keys(A.hooks ?? {}).length > 0;
    }
  }, {
    id: "theme",
    name: "Themes",
    description: "Customize colors",
    categoryId: "customize",
    tryItPrompt: "Type /config to change theme",
    hasBeenUsed: async () => __$.yY("theme")
  }, {
    id: "claude-md-project",
    name: "Project Instructions",
    description: "CLAUDE.md for your project",
    categoryId: "customize",
    tryItPrompt: "Create CLAUDE.md in your project root",
    hasBeenUsed: async () => {
      let A = __$.x1(),
        K = __$.D31(A, "CLAUDE.md");
      return __$.W31(K);
    }
  }, {
    id: "claude-md-user",
    name: "Personal Instructions",
    description: "Your global CLAUDE.md",
    categoryId: "customize",
    tryItPrompt: "Create ~/.claude/CLAUDE.md",
    hasBeenUsed: async () => {
      let A = __$.D31(__$.o_4(), ".claude", "CLAUDE.md");
      return __$.W31(A);
    }
  }, {
    id: "mcp-servers",
    name: "MCP Servers",
    description: "Connect external tools",
    categoryId: "power-user",
    tryItPrompt: "Type /mcp to manage servers",
    hasBeenUsed: async () => {
      let A = __$.M1();
      return Object.keys(A.mcpServers ?? {}).length > 0;
    }
  }, {
    id: "ide-integration",
    name: "IDE Integration",
    description: "Connect to VS Code",
    categoryId: "power-user",
    tryItPrompt: "Type /ide to configure",
    hasBeenUsed: async () => __$.yY("ide-integration")
  }, {
    id: "subagents",
    name: "Subagents",
    description: "Claude spawns helper agents",
    categoryId: "power-user",
    tryItPrompt: "Ask Claude to explore the codebase",
    hasBeenUsed: async () => __$.yY("subagents")
  }, {
    id: "plugins",
    name: "Plugins",
    description: "Extend with plugins",
    categoryId: "power-user",
    tryItPrompt: "Type /plugin to manage plugins",
    hasBeenUsed: async () => __$.yY("plugins")
  }, {
    id: "multi-directory",
    name: "Multi-Directory",
    description: "Work across projects",
    categoryId: "power-user",
    tryItPrompt: "Type /add-dir to add another directory",
    hasBeenUsed: async () => __$.yY("multi-directory")
  }];
});

// Register to shared state
__$.P31 = P31;
