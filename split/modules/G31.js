// Module: G31
// Dependencies: B5, _q6, hy, H69, o6, J69, R1A, O69, uXA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var G31 = k(() => {
  __$.B5();
  __$._q6 = o(__$.hy(), 1), __$.H69 = __$.o6() === "windows" ? "alt+v" : "ctrl+v", __$.J69 = __$.o6() !== "windows" || (__$.R1A() ? __$._q6.default.satisfies(process.versions.bun, ">=1.2.23") : __$._q6.default.satisfies(process.versions.node, ">=22.17.0 <23.0.0 || >=24.2.0")), __$.O69 = __$.J69 ? "shift+tab" : "meta+m", __$.uXA = [{
    context: "Global",
    bindings: {
      "ctrl+c": "app:interrupt",
      "ctrl+d": "app:exit",
      "ctrl+t": "app:toggleTodos",
      "ctrl+o": "app:toggleTranscript",
      "ctrl+shift+o": "app:toggleTeammatePreview",
      "ctrl+r": "history:search",
      ...{},
      ...{}
    }
  }, {
    context: "Chat",
    bindings: {
      escape: "chat:cancel",
      [__$.O69]: "chat:cycleMode",
      "meta+p": "chat:modelPicker",
      "meta+t": "chat:thinkingToggle",
      enter: "chat:submit",
      up: "history:previous",
      down: "history:next",
      "ctrl+_": "chat:undo",
      "ctrl+shift+-": "chat:undo",
      "ctrl+g": "chat:externalEditor",
      "ctrl+s": "chat:stash",
      [__$.H69]: "chat:imagePaste"
    }
  }, {
    context: "Autocomplete",
    bindings: {
      tab: "autocomplete:accept",
      escape: "autocomplete:dismiss",
      up: "autocomplete:previous",
      down: "autocomplete:next"
    }
  }, {
    context: "Settings",
    bindings: {
      escape: "confirm:no",
      up: "select:previous",
      down: "select:next",
      k: "select:previous",
      j: "select:next",
      "ctrl+p": "select:previous",
      "ctrl+n": "select:next",
      enter: "select:accept",
      space: "select:accept",
      "/": "settings:search",
      r: "settings:retry"
    }
  }, {
    context: "Confirmation",
    bindings: {
      y: "confirm:yes",
      n: "confirm:no",
      enter: "confirm:yes",
      escape: "confirm:no",
      up: "confirm:previous",
      down: "confirm:next",
      tab: "confirm:nextField",
      "shift+tab": "confirm:cycleMode",
      "ctrl+e": "confirm:toggleExplanation",
      "ctrl+d": "permission:toggleDebug"
    }
  }, {
    context: "Tabs",
    bindings: {
      tab: "tabs:next",
      "shift+tab": "tabs:previous",
      right: "tabs:next",
      left: "tabs:previous"
    }
  }, {
    context: "Transcript",
    bindings: {
      "ctrl+e": "transcript:toggleShowAll",
      "ctrl+c": "transcript:exit",
      escape: "transcript:exit"
    }
  }, {
    context: "HistorySearch",
    bindings: {
      "ctrl+r": "historySearch:next",
      escape: "historySearch:accept",
      tab: "historySearch:accept",
      "ctrl+c": "historySearch:cancel",
      enter: "historySearch:execute"
    }
  }, {
    context: "Task",
    bindings: {
      "ctrl+b": "task:background"
    }
  }, {
    context: "ThemePicker",
    bindings: {
      "ctrl+t": "theme:toggleSyntaxHighlighting"
    }
  }, {
    context: "Help",
    bindings: {
      escape: "help:dismiss"
    }
  }, {
    context: "Attachments",
    bindings: {
      right: "attachments:next",
      left: "attachments:previous",
      backspace: "attachments:remove",
      delete: "attachments:remove",
      down: "attachments:exit",
      escape: "attachments:exit"
    }
  }, {
    context: "Footer",
    bindings: {
      right: "footer:next",
      left: "footer:previous",
      enter: "footer:openSelected",
      escape: "footer:clearSelection"
    }
  }, {
    context: "MessageSelector",
    bindings: {
      up: "messageSelector:up",
      down: "messageSelector:down",
      k: "messageSelector:up",
      j: "messageSelector:down",
      "ctrl+up": "messageSelector:top",
      "shift+up": "messageSelector:top",
      "meta+up": "messageSelector:top",
      "shift+k": "messageSelector:top",
      "ctrl+down": "messageSelector:bottom",
      "shift+down": "messageSelector:bottom",
      "meta+down": "messageSelector:bottom",
      "shift+j": "messageSelector:bottom",
      enter: "messageSelector:select"
    }
  }, {
    context: "DiffDialog",
    bindings: {
      escape: "diff:dismiss",
      left: "diff:previousSource",
      right: "diff:nextSource",
      up: "diff:previousFile",
      down: "diff:nextFile",
      enter: "diff:viewDetails"
    }
  }, {
    context: "ModelPicker",
    bindings: {
      left: "modelPicker:decreaseEffort",
      right: "modelPicker:increaseEffort"
    }
  }, {
    context: "Select",
    bindings: {
      up: "select:previous",
      down: "select:next",
      j: "select:next",
      k: "select:previous",
      "ctrl+n": "select:next",
      "ctrl+p": "select:previous",
      enter: "select:accept",
      escape: "select:cancel"
    }
  }, {
    context: "Plugin",
    bindings: {
      space: "plugin:toggle",
      i: "plugin:install"
    }
  }];
});

// Register to shared state
__$.G31 = G31;
