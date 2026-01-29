// Module: eb6
// Dependencies: Z4A, sb6, tb6, K7, zk2, $04, ab6, ob6, Y4A, Cf1
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eb6 = k(() => {
  __$.Z4A();
  __$.sb6();
  __$.tb6();
  __$.K7();
  __$.zk2 = {
    theme: {
      source: "global",
      type: "string",
      description: "Color theme for the UI",
      options: __$.$04
    },
    editorMode: {
      source: "global",
      type: "string",
      description: "Key binding mode",
      options: __$.ab6
    },
    verbose: {
      source: "global",
      type: "boolean",
      description: "Show detailed debug output",
      appStateKey: "verbose"
    },
    preferredNotifChannel: {
      source: "global",
      type: "string",
      description: "Preferred notification channel",
      options: __$.ob6
    },
    autoCompactEnabled: {
      source: "global",
      type: "boolean",
      description: "Auto-compact when context is full"
    },
    fileCheckpointingEnabled: {
      source: "global",
      type: "boolean",
      description: "Enable file checkpointing for code rewind"
    },
    showTurnDuration: {
      source: "global",
      type: "boolean",
      description: 'Show turn duration message after responses (e.g., "Cooked for 1m 6s")'
    },
    todoFeatureEnabled: {
      source: "global",
      type: "boolean",
      description: "Enable todo/task tracking"
    },
    model: {
      source: "settings",
      type: "string",
      description: "Override the default model",
      appStateKey: "mainLoopModel",
      getOptions: () => {
        try {
          return __$.Y4A().filter(A => A.value !== null).map(A => A.value);
        } catch {
          return ["sonnet", "opus", "haiku"];
        }
      },
      validateOnWrite: A => __$.Cf1(String(A)),
      formatOnRead: A => A === null ? "default" : A
    },
    alwaysThinkingEnabled: {
      source: "settings",
      type: "boolean",
      description: "Enable extended thinking (false to disable)",
      appStateKey: "thinkingEnabled"
    },
    "permissions.defaultMode": {
      source: "settings",
      type: "string",
      description: "Default permission mode for tool usage",
      options: ["default", "plan", "acceptEdits", "dontAsk"]
    },
    language: {
      source: "settings",
      type: "string",
      description: 'Preferred language for Claude responses (e.g., "japanese", "spanish")'
    },
    teammateMode: {
      source: "global",
      type: "string",
      description: 'How to spawn teammates: "tmux" for traditional tmux, "in-process" for same process, "auto" to choose automatically',
      options: __$.QzK
    },
    ...{}
  };
});

// Register to shared state
__$.eb6 = eb6;
