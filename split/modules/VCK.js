// Module: VCK
// Dependencies: z7, qp6, PCK, Yp6, XAz, U, sZO

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var VCK = k(() => {
  __$.z7();
  __$.qp6 = ["Global", "Chat", "Autocomplete", "Confirmation", "Help", "Transcript", "HistorySearch", "Task", "ThemePicker", "Settings", "Tabs", "Attachments", "Footer", "MessageSelector", "DiffDialog", "ModelPicker", "Select", "Plugin"], __$.PCK = {
    Global: "Active everywhere, regardless of focus",
    Chat: "When the chat input is focused",
    Autocomplete: "When autocomplete menu is visible",
    Confirmation: "When a confirmation/permission dialog is shown",
    Help: "When the help overlay is open",
    Transcript: "When viewing the transcript",
    HistorySearch: "When searching command history (ctrl+r)",
    Task: "When a task/agent is running in the foreground",
    ThemePicker: "When the theme picker is open",
    Settings: "When the settings menu is open",
    Tabs: "When tab navigation is active",
    Attachments: "When the attachment bar is focused",
    Footer: "When footer indicators are focused",
    MessageSelector: "When the message selector (rewind) is open",
    DiffDialog: "When the diff dialog is open",
    ModelPicker: "When the model picker is open",
    Select: "When a select/list component is focused",
    Plugin: "When the plugin dialog is open"
  }, __$.Yp6 = ["app:interrupt", "app:exit", "app:toggleTodos", "app:toggleTranscript", "app:toggleTeammatePreview", "app:toggleTerminal", "history:search", "history:previous", "history:next", "chat:cancel", "chat:cycleMode", "chat:modelPicker", "chat:thinkingToggle", "chat:submit", "chat:undo", "chat:externalEditor", "chat:stash", "chat:imagePaste", "autocomplete:accept", "autocomplete:dismiss", "autocomplete:previous", "autocomplete:next", "confirm:yes", "confirm:no", "confirm:previous", "confirm:next", "confirm:nextField", "confirm:previousField", "confirm:cycleMode", "confirm:toggleExplanation", "tabs:next", "tabs:previous", "transcript:toggleShowAll", "transcript:exit", "historySearch:next", "historySearch:accept", "historySearch:cancel", "historySearch:execute", "task:background", "theme:toggleSyntaxHighlighting", "help:dismiss", "attachments:next", "attachments:previous", "attachments:remove", "attachments:exit", "footer:next", "footer:previous", "footer:openSelected", "footer:clearSelection", "messageSelector:up", "messageSelector:down", "messageSelector:top", "messageSelector:bottom", "messageSelector:select", "diff:dismiss", "diff:previousSource", "diff:nextSource", "diff:back", "diff:viewDetails", "diff:previousFile", "diff:nextFile", "modelPicker:decreaseEffort", "modelPicker:increaseEffort", "select:next", "select:previous", "select:accept", "select:cancel", "plugin:toggle", "plugin:install", "permission:toggleDebug", "settings:search", "settings:retry"], __$.XAz = __$.U.object({
    context: __$.U.enum(__$.qp6).describe("UI context where these bindings apply. Global bindings work everywhere."),
    bindings: __$.U.record(__$.U.string().describe('Keystroke pattern (e.g., "ctrl+k", "shift+tab")'), __$.U.union([__$.U.enum(__$.Yp6), __$.U.string().regex(/^command:[a-zA-Z0-9:\-_]+$/).describe('Command binding (e.g., "command:help", "command:compact"). Executes the slash command as if typed.'), __$.U.null().describe("Set to null to unbind a default shortcut")]).describe("Action to trigger, command to invoke, or null to unbind")).describe("Map of keystroke patterns to actions")
  }).describe("A block of keybindings for a specific context"), __$.sZO = __$.U.object({
    $schema: __$.U.string().optional().describe("JSON Schema URL for editor validation"),
    $docs: __$.U.string().optional().describe("Documentation URL"),
    bindings: __$.U.array(__$.XAz).describe("Array of keybinding blocks by context")
  }).describe("Claude Code keybindings configuration. Customize keyboard shortcuts by context.");
});

// Register to shared state
__$.VCK = VCK;
