// Module: FTK
// Dependencies: Cr2, gTK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var FTK = k(() => {
  __$.Cr2 = {
    type: "prompt",
    description: "Set up Claude Code's status line UI",
    contentLength: 0,
    aliases: [],
    isEnabled: () => !0,
    isHidden: !1,
    name: "statusline",
    progressMessage: "setting up statusLine",
    allowedTools: ["Task", "Read(~/**)", "Edit(~/.claude/settings.json)"],
    source: "builtin",
    disableNonInteractive: !0,
    async getPromptForCommand(A) {
      return [{
        type: "text",
        text: `Create a Task with subagent_type "statusline-setup" and the prompt "${A.trim() || "Configure my statusLine from my shell PS1 configuration"}"`
      }];
    },
    userFacingName() {
      return "statusline";
    }
  }, __$.gTK = __$.Cr2;
});

// Register to shared state
__$.FTK = FTK;
