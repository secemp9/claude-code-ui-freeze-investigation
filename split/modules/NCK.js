// Module: NCK
// Dependencies: ie, VCK, G31, Z31, jr, b1, WAz, DAz, jAz, MAz
//   ... and 10 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var NCK = k(() => {
  __$.ie();
  __$.VCK();
  __$.G31();
  __$.Z31();
  __$.jr();
  __$.b1();
  __$.WAz = {
    $schema: "https://platform.claude.com/docs/schemas/claude-code/keybindings.json",
    $docs: "https://code.claude.com/docs/en/keybindings",
    bindings: [{
      context: "Chat",
      bindings: {
        "ctrl+e": "chat:externalEditor"
      }
    }]
  }, __$.DAz = {
    context: "Chat",
    bindings: {
      "ctrl+s": null
    }
  }, __$.jAz = {
    context: "Chat",
    bindings: {
      "ctrl+g": null,
      "ctrl+e": "chat:externalEditor"
    }
  }, __$.MAz = {
    context: "Global",
    bindings: {
      "ctrl+k ctrl+t": "app:toggleTodos"
    }
  }, __$.PAz = ["# Keybindings Skill", "", "Create or modify `~/.claude/keybindings.json` to customize keyboard shortcuts.", "", "## CRITICAL: Read Before Write", "", "**Always read `~/.claude/keybindings.json` first** (it may not exist yet). Merge changes with existing bindings — never replace the entire file.", "", "- Use **Edit** tool for modifications to existing files", "- Use **Write** tool only if the file does not exist yet"].join(`
`), __$.VAz = ["## File Format", "", "```json", __$.UA(__$.WAz, null, 2), "```", "", "Always include the `$schema` and `$docs` fields."].join(`
`), __$.fAz = ["## Keystroke Syntax", "", "**Modifiers** (combine with `+`):", "- `ctrl` (alias: `control`)", "- `alt` (aliases: `opt`, `option`) — note: `alt` and `meta` are identical in terminals", "- `shift`", "- `meta` (aliases: `cmd`, `command`)", "", "**Special keys**: `escape`/`esc`, `enter`/`return`, `tab`, `space`, `backspace`, `delete`, `up`, `down`, `left`, `right`", "", "**Chords**: Space-separated keystrokes, e.g. `ctrl+k ctrl+s` (1-second timeout between keystrokes)", "", "**Examples**: `ctrl+shift+p`, `alt+enter`, `ctrl+k ctrl+n`"].join(`
`), __$.NAz = ["## Unbinding Default Shortcuts", "", "Set a key to `null` to remove its default binding:", "", "```json", __$.UA(__$.DAz, null, 2), "```"].join(`
`), __$.TAz = ["## How User Bindings Interact with Defaults", "", "- User bindings are **additive** — they are appended after the default bindings", "- To **move** a binding to a different key: unbind the old key (`null`) AND add the new binding", "- A context only needs to appear in the user's file if they want to change something in that context"].join(`
`), __$.vAz = ["## Common Patterns", "", "### Rebind a key", "To change the external editor shortcut from `ctrl+g` to `ctrl+e`:", "```json", __$.UA(__$.jAz, null, 2), "```", "", "### Add a chord binding", "```json", __$.UA(__$.MAz, null, 2), "```"].join(`
`), __$.EAz = ["## Behavioral Rules", "", "1. Only include contexts the user wants to change (minimal overrides)", "2. Validate that actions and contexts are from the known lists below", "3. Warn the user proactively if they choose a key that conflicts with reserved shortcuts or common tools like tmux (`ctrl+b`) and screen (`ctrl+a`)", "4. When adding a new binding for an existing action, the new binding is additive (existing default still works unless explicitly unbound)", "5. To fully replace a default binding, unbind the old key AND add the new one"].join(`
`), __$.kAz = ["## Validation with /doctor", "", 'The `/doctor` command includes a "Keybinding Configuration Issues" section that validates `~/.claude/keybindings.json`.', "", "### Common Issues and Fixes", "", __$.zp6(["Issue", "Cause", "Fix"], [['`keybindings.json must have a "bindings" array`', "Missing wrapper object", 'Wrap bindings in `{ "bindings": [...] }`'], ['`"bindings" must be an array`', "`bindings` is not an array", 'Set `"bindings"` to an array: `[{ context: ..., bindings: ... }]`'], ['`Unknown context "X"`', "Typo or invalid context name", "Use exact context names from the Available Contexts table"], ['`Duplicate key "X" in Y bindings`', "Same key defined twice in one context", "Remove the duplicate; JSON uses only the last value"], ['`"X" may not work: ...`', "Key conflicts with terminal/OS reserved shortcut", "Choose a different key (see Reserved Shortcuts section)"], ['`Could not parse keystroke "X"`', "Invalid key syntax", "Check syntax: use `+` between modifiers, valid key names"], ['`Invalid action for "X"`', "Action value is not a string or null", 'Actions must be strings like `"app:help"` or `null` to unbind']]), "", "### Example /doctor Output", "", "```", "Keybinding Configuration Issues", "Location: ~/.claude/keybindings.json", '  └ [Error] Unknown context "chat"', "    → Valid contexts: Global, Chat, Autocomplete, ...", '  └ [Warning] "ctrl+c" may not work: Terminal interrupt (SIGINT)', "```", "", "**Errors** prevent bindings from working and must be fixed. **Warnings** indicate potential conflicts but the binding may still work."].join(`
`);
});

// Register to shared state
__$.NCK = NCK;
