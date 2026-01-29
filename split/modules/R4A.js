// Module: R4A
// Dependencies: u5, Pr, _IA, hq6, i6, z3, CK, e6, b1, Xw
//   ... and 13 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var R4A = k(() => {
  __$.u5();
  __$.Pr();
  __$._IA();
  __$.hq6();
  __$.i6();
  __$.z3();
  __$.CK();
  __$.e6();
  __$.b1();
  __$.Xw();
  __$.C1();
  __$.mA();
  __$.B5();
  __$.b1();
  __$.xq6();
  __$.WIA = {
    ghostty: "Ghostty",
    kitty: "Kitty",
    "iTerm.app": "iTerm2",
    WezTerm: "WezTerm"
  };
  __$.F89 = {
    type: "local-jsx",
    name: "terminal-setup",
    userFacingName() {
      return "terminal-setup";
    },
    description: __$.m6.terminal === "Apple_Terminal" ? "Enable Option+Enter key binding for newlines and visual bell" : "Install Shift+Enter key binding for newlines",
    isEnabled: () => !0,
    isHidden: __$.g89(),
    async call(A, K) {
      if (__$.m6.terminal && __$.m6.terminal in __$.WIA) {
        let Y = `Shift+Enter is natively supported in ${__$.WIA[__$.m6.terminal]}.

No configuration needed. Just use Shift+Enter to add newlines.`;
        return A(Y), null;
      }
      if (!__$.DIA()) {
        let Y = __$.m6.terminal || "your current terminal",
          z = __$.o6(),
          w = "";
        if (z === "macos") w = `   • macOS: Apple Terminal
`;else if (z === "windows") w = `   • Windows: Windows Terminal
`;
        let H = `Terminal setup cannot be run from ${Y}.

This command configures a convenient Shift+Enter shortcut for multi-line prompts.
${__$.O1.dim("Note: You can already use backslash (\\\\) + return to add newlines.")}

To set up the shortcut (optional):
1. Exit tmux/screen temporarily
2. Run /terminal-setup directly in one of these terminals:
${w}   • IDE: VSCode, Cursor, Windsurf, Zed
   • Other: Alacritty, Warp
3. Return to tmux/screen - settings will persist

${__$.O1.dim("Note: iTerm2, WezTerm, Ghostty, and Kitty support Shift+Enter natively.")}`;
        return A(H), null;
      }
      let q = await __$.gq6(K.options.theme);
      return A(q), null;
    }
  };
  __$.L4A = __$.F89;
});

// Register to shared state
__$.R4A = R4A;
