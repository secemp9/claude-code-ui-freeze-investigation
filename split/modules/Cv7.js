// Module: Cv7
// Dependencies: QmY, UmY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Cv7 = k(() => {
  __$.QmY = [{
    matches: A => A.path === "permissions.defaultMode" && A.code === "invalid_value",
    tip: {
      suggestion: 'Valid modes: "acceptEdits" (ask before file changes), "plan" (analysis only), "bypassPermissions" (auto-accept all), or "default" (standard behavior)',
      docLink: "https://code.claude.com/docs/en/iam#permission-modes"
    }
  }, {
    matches: A => A.path === "apiKeyHelper" && A.code === "invalid_type",
    tip: {
      suggestion: 'Provide a shell command that outputs your API key to stdout. The script should output only the API key. Example: "/bin/generate_temp_api_key.sh"'
    }
  }, {
    matches: A => A.path === "cleanupPeriodDays" && A.code === "too_small" && A.expected === "0",
    tip: {
      suggestion: "Must be 0 or greater. Use 0 to disable automatic cleanup and keep chat transcripts forever, or set a positive number for days to retain (default is 30 days)"
    }
  }, {
    matches: A => A.path.startsWith("env.") && A.code === "invalid_type",
    tip: {
      suggestion: 'Environment variables must be strings. Wrap numbers and booleans in quotes. Example: "DEBUG": "true", "PORT": "3000"',
      docLink: "https://code.claude.com/docs/en/settings#environment-variables"
    }
  }, {
    matches: A => (A.path === "permissions.allow" || A.path === "permissions.deny") && A.code === "invalid_type" && A.expected === "array",
    tip: {
      suggestion: 'Permission rules must be in an array. Format: ["Tool(specifier)"]. Examples: ["Bash(npm run build)", "Edit(docs/**)", "Read(~/.zshrc)"]. Use * for wildcards.'
    }
  }, {
    matches: A => A.path.includes("hooks") && A.code === "invalid_type",
    tip: {
      suggestion: 'Hooks use a new format with matchers. Example: {"PostToolUse": [{"matcher": {"tools": ["BashTool"]}, "hooks": [{"type": "command", "command": "echo Done"}]}]}'
    }
  }, {
    matches: A => A.code === "invalid_type" && A.expected === "boolean",
    tip: {
      suggestion: 'Use true or false without quotes. Example: "includeCoAuthoredBy": true'
    }
  }, {
    matches: A => A.code === "unrecognized_keys",
    tip: {
      suggestion: "Check for typos or refer to the documentation for valid fields",
      docLink: "https://code.claude.com/docs/en/settings"
    }
  }, {
    matches: A => A.code === "invalid_value" && A.enumValues !== void 0,
    tip: {
      suggestion: void 0
    }
  }, {
    matches: A => A.code === "invalid_type" && A.expected === "object" && A.received === null && A.path === "",
    tip: {
      suggestion: "Check for missing commas, unmatched brackets, or trailing commas. Use a JSON validator to identify the exact syntax error."
    }
  }, {
    matches: A => A.path === "permissions.additionalDirectories" && A.code === "invalid_type",
    tip: {
      suggestion: 'Must be an array of directory paths. Example: ["~/projects", "/tmp/workspace"]. You can also use --add-dir flag or /add-dir command',
      docLink: "https://code.claude.com/docs/en/iam#working-directories"
    }
  }], __$.UmY = {
    permissions: "https://code.claude.com/docs/en/iam#configuring-permissions",
    env: "https://code.claude.com/docs/en/settings#environment-variables",
    hooks: "https://code.claude.com/docs/en/hooks"
  };
});

// Register to shared state
__$.Cv7 = Cv7;
