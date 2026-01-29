// Module: uX4
// Dependencies: h51, uK6, BK6, B51, mK6, fX4, cK6, QyA, lK6, iK6
//   ... and 39 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uX4 = k(() => {
  __$.h51();
  __$.uK6();
  __$.BK6();
  __$.B51();
  __$.mK6();
  __$.fX4();
  __$.cK6();
  __$.QyA();
  __$.lK6();
  __$.iK6();
  __$.Q51();
  __$.ZK6();
  __$.P4A();
  __$.Ix();
  __$.z3();
  __$.l6();
  __$.bX4();
  __$.xx = o(__$.$A(), 1), __$.xX4 = ["iTerm.app", "kitty", "WezTerm", "ghostty"], __$.st3 = process.platform !== "win32";
  __$.d51 = class d51 extends __$.xx.PureComponent {
    static displayName = "InternalApp";
    static getDerivedStateFromError(A) {
      return {
        error: A
      };
    }
    state = {
      isFocusEnabled: !0,
      activeFocusId: void 0,
      focusables: [],
      error: void 0,
      isTerminalFocused: !0
    };
    rawModeEnabledCount = 0;
    internal_eventEmitter = new __$.Zr();
    keyParseState = __$.vX4;
    incompleteEscapeTimer = null;
    NORMAL_TIMEOUT = 50;
    PASTE_TIMEOUT = 500;
    isRawModeSupported() {
      return this.props.stdin.isTTY;
    }
    render() {
      return __$.xx.default.createElement(__$.yXA.Provider, {
        value: {
          columns: this.props.terminalColumns,
          rows: this.props.terminalRows
        }
      }, __$.xx.default.createElement(__$.b51.Provider, {
        value: {
          exit: this.handleExit
        }
      }, __$.xx.default.createElement(__$.QK6, {
        initialState: this.props.initialTheme,
        onThemeChange: this.props.onThemeChange,
        onThemeSave: this.props.onThemeSave
      }, __$.xx.default.createElement(__$.x51.Provider, {
        value: {
          stdin: this.props.stdin,
          setRawMode: this.handleSetRawMode,
          isRawModeSupported: this.isRawModeSupported(),
          internal_exitOnCtrlC: this.props.exitOnCtrlC,
          internal_eventEmitter: this.internal_eventEmitter
        }
      }, __$.xx.default.createElement(__$.u51.Provider, {
        value: {
          activeId: this.state.activeFocusId,
          add: this.addFocusable,
          remove: this.removeFocusable,
          activate: this.activateFocusable,
          deactivate: this.deactivateFocusable,
          enableFocus: this.enableFocus,
          disableFocus: this.disableFocus,
          focusNext: this.focusNext,
          focusPrevious: this.focusPrevious,
          focus: this.focus
        }
      }, __$.xx.default.createElement(__$.m51.Provider, {
        value: {
          isTerminalFocused: this.state.isTerminalFocused
        }
      }, this.state.error ? __$.xx.default.createElement(__$.dK6, {
        error: this.state.error
      }) : this.props.children))))));
    }
    componentDidMount() {
      if (this.props.stdout.isTTY && !__$.P1(process.env.CLAUDE_CODE_ACCESSIBILITY)) this.props.stdout.write(__$.pyA);
    }
    componentWillUnmount() {
      if (this.props.stdout.isTTY) this.props.stdout.write(__$.Iy);
      if (this.incompleteEscapeTimer) clearTimeout(this.incompleteEscapeTimer), this.incompleteEscapeTimer = null;
      if (this.isRawModeSupported()) this.handleSetRawMode(!1);
    }
    componentDidCatch(A) {
      this.handleExit(A);
    }
    handleSetRawMode = A => {
      let {
        stdin: K
      } = this.props;
      if (!this.isRawModeSupported()) if (K === process.stdin) throw Error(`Raw mode is not supported on the current process.stdin, which Ink uses as input stream by default.
Read about how to prevent this error on https://github.com/vadimdemedes/ink/#israwmodesupported`);else throw Error(`Raw mode is not supported on the stdin provided to Ink.
Read about how to prevent this error on https://github.com/vadimdemedes/ink/#israwmodesupported`);
      if (K.setEncoding("utf8"), A) {
        if (this.rawModeEnabledCount === 0) {
          if (K.ref(), K.setRawMode(!0), K.addListener("readable", this.handleReadable), this.props.stdout.write(__$.IX4), this.props.stdout.write(__$.nK6), __$.xX4.includes(__$.m6.terminal ?? "")) this.props.stdout.write(__$.LO4);
        }
        this.rawModeEnabledCount++;
        return;
      }
      if (--this.rawModeEnabledCount === 0) {
        if (__$.xX4.includes(__$.m6.terminal ?? "")) this.props.stdout.write(__$.DXA);
        this.props.stdout.write(__$.M4A), this.props.stdout.write(__$.IXA), K.setRawMode(!1), K.removeListener("readable", this.handleReadable), K.unref();
      }
    };
    flushIncomplete = () => {
      if (this.incompleteEscapeTimer = null, !this.keyParseState.incomplete) return;
      this.processInput(null);
    };
    processInput = A => {
      let [K, q] = __$.EX4(this.keyParseState, A);
      if (this.keyParseState = q, K.length > 0) __$.$r.discreteUpdates(__$.tt3, this, K, void 0, void 0);
      if (this.keyParseState.incomplete) {
        if (this.incompleteEscapeTimer) clearTimeout(this.incompleteEscapeTimer);
        this.incompleteEscapeTimer = setTimeout(this.flushIncomplete, this.keyParseState.mode === "IN_PASTE" ? this.PASTE_TIMEOUT : this.NORMAL_TIMEOUT);
      }
    };
    handleReadable = () => {
      let A;
      while ((A = this.props.stdin.read()) !== null) this.processInput(A);
    };
    handleInput = A => {
      if (A === "\x03" && this.props.exitOnCtrlC) this.handleExit();
      if (A === __$.at3 && this.state.activeFocusId) this.setState({
        activeFocusId: void 0
      });
      if (this.state.isFocusEnabled && this.state.focusables.length > 0) {
        if (A === __$.rt3) this.focusNext();
        if (A === __$.ot3) this.focusPrevious();
      }
    };
    handleExit = A => {
      if (this.isRawModeSupported()) this.handleSetRawMode(!1);
      this.props.onExit(A);
    };
    handleTerminalFocus = A => {
      __$.hX4(A), this.setState(K => {
        if (K.isTerminalFocused === A) return K;
        return {
          ...K,
          isTerminalFocused: A
        };
      });
    };
    handleSuspend = () => {
      if (!this.isRawModeSupported()) return;
      let A = this.rawModeEnabledCount;
      while (this.rawModeEnabledCount > 0) this.handleSetRawMode(!1);
      if (this.props.stdout.isTTY) this.props.stdout.write(__$.Iy), this.props.stdout.write(__$.M4A);
      this.internal_eventEmitter.emit("suspend");
      let K = () => {
        for (let q = 0; q < A; q++) if (this.isRawModeSupported()) this.handleSetRawMode(!0);
        if (this.props.stdout.isTTY) {
          if (!__$.P1(process.env.CLAUDE_CODE_ACCESSIBILITY)) this.props.stdout.write(__$.pyA);
          this.props.stdout.write(__$.nK6);
        }
        this.internal_eventEmitter.emit("resume"), process.removeListener("SIGCONT", K);
      };
      process.on("SIGCONT", K), process.kill(process.pid, "SIGSTOP");
    };
    enableFocus = () => {
      this.setState({
        isFocusEnabled: !0
      });
    };
    disableFocus = () => {
      this.setState({
        isFocusEnabled: !1
      });
    };
    focus = A => {
      this.setState(K => {
        if (!K.focusables.some(Y => Y?.id === A)) return K;
        return {
          activeFocusId: A
        };
      });
    };
    focusNext = () => {
      this.setState(A => {
        let K = A.focusables.find(Y => Y.isActive)?.id;
        return {
          activeFocusId: this.findNextFocusable(A) ?? K
        };
      });
    };
    focusPrevious = () => {
      this.setState(A => {
        let K = A.focusables.findLast(Y => Y.isActive)?.id;
        return {
          activeFocusId: this.findPreviousFocusable(A) ?? K
        };
      });
    };
    addFocusable = (A, {
      autoFocus: K
    }) => {
      this.setState(q => {
        let Y = q.activeFocusId;
        if (!Y && K) Y = A;
        return {
          activeFocusId: Y,
          focusables: [...q.focusables, {
            id: A,
            isActive: !0
          }]
        };
      });
    };
    removeFocusable = A => {
      this.setState(K => ({
        activeFocusId: K.activeFocusId === A ? void 0 : K.activeFocusId,
        focusables: K.focusables.filter(q => {
          return q.id !== A;
        })
      }));
    };
    activateFocusable = A => {
      this.setState(K => ({
        focusables: K.focusables.map(q => {
          if (q.id !== A) return q;
          return {
            id: A,
            isActive: !0
          };
        })
      }));
    };
    deactivateFocusable = A => {
      this.setState(K => ({
        activeFocusId: K.activeFocusId === A ? void 0 : K.activeFocusId,
        focusables: K.focusables.map(q => {
          if (q.id !== A) return q;
          return {
            id: A,
            isActive: !1
          };
        })
      }));
    };
    findNextFocusable = A => {
      let K = A.focusables.findIndex(q => {
        return q.id === A.activeFocusId;
      });
      for (let q = K + 1; q < A.focusables.length; q++) {
        let Y = A.focusables[q];
        if (Y?.isActive) return Y.id;
      }
      return;
    };
    findPreviousFocusable = A => {
      let K = A.focusables.findIndex(q => {
        return q.id === A.activeFocusId;
      });
      for (let q = K - 1; q >= 0; q--) {
        let Y = A.focusables[q];
        if (Y?.isActive) return Y.id;
      }
      return;
    };
  };
});

// Register to shared state
__$.uX4 = uX4;
