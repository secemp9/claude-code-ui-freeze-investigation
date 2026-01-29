// Module: $kK
// Dependencies: dE1, ycA, yU6, IU6, HkK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $kK = v(Vt2 => {
  var Wt2 = CA("node:events").EventEmitter,
    SU6 = CA("node:child_process"),
    Mc = CA("node:path"),
    hU6 = CA("node:fs"),
    T0 = CA("node:process"),
    {
      Argument: Dt2,
      humanReadableArgName: jt2
    } = __$.dE1(),
    {
      CommanderError: bU6
    } = __$.ycA(),
    {
      Help: Mt2
    } = __$.yU6(),
    {
      Option: JkK,
      DualOptions: Pt2
    } = __$.IU6(),
    {
      suggestSimilar: OkK
    } = __$.HkK();
  class xU6 extends Wt2 {
    constructor(A) {
      super();
      this.commands = [], this.options = [], this.parent = null, this._allowUnknownOption = !1, this._allowExcessArguments = !0, this.registeredArguments = [], this._args = this.registeredArguments, this.args = [], this.rawArgs = [], this.processedArgs = [], this._scriptPath = null, this._name = A || "", this._optionValues = {}, this._optionValueSources = {}, this._storeOptionsAsProperties = !1, this._actionHandler = null, this._executableHandler = !1, this._executableFile = null, this._executableDir = null, this._defaultCommandName = null, this._exitCallback = null, this._aliases = [], this._combineFlagAndOptionalValue = !0, this._description = "", this._summary = "", this._argsDescription = void 0, this._enablePositionalOptions = !1, this._passThroughOptions = !1, this._lifeCycleHooks = {}, this._showHelpAfterError = !1, this._showSuggestionAfterError = !0, this._outputConfiguration = {
        writeOut: K => T0.stdout.write(K),
        writeErr: K => T0.stderr.write(K),
        getOutHelpWidth: () => T0.stdout.isTTY ? T0.stdout.columns : void 0,
        getErrHelpWidth: () => T0.stderr.isTTY ? T0.stderr.columns : void 0,
        outputError: (K, q) => q(K)
      }, this._hidden = !1, this._helpOption = void 0, this._addImplicitHelpCommand = void 0, this._helpCommand = void 0, this._helpConfiguration = {};
    }
    copyInheritedSettings(A) {
      return this._outputConfiguration = A._outputConfiguration, this._helpOption = A._helpOption, this._helpCommand = A._helpCommand, this._helpConfiguration = A._helpConfiguration, this._exitCallback = A._exitCallback, this._storeOptionsAsProperties = A._storeOptionsAsProperties, this._combineFlagAndOptionalValue = A._combineFlagAndOptionalValue, this._allowExcessArguments = A._allowExcessArguments, this._enablePositionalOptions = A._enablePositionalOptions, this._showHelpAfterError = A._showHelpAfterError, this._showSuggestionAfterError = A._showSuggestionAfterError, this;
    }
    _getCommandAndAncestors() {
      let A = [];
      for (let K = this; K; K = K.parent) A.push(K);
      return A;
    }
    command(A, K, q) {
      let Y = K,
        z = q;
      if (typeof Y === "object" && Y !== null) z = Y, Y = null;
      z = z || {};
      let [, w, H] = A.match(/([^ ]+) *(.*)/),
        J = this.createCommand(w);
      if (Y) J.description(Y), J._executableHandler = !0;
      if (z.isDefault) this._defaultCommandName = J._name;
      if (J._hidden = !!(z.noHelp || z.hidden), J._executableFile = z.executableFile || null, H) J.arguments(H);
      if (this._registerCommand(J), J.parent = this, J.copyInheritedSettings(this), Y) return this;
      return J;
    }
    createCommand(A) {
      return new xU6(A);
    }
    createHelp() {
      return Object.assign(new Mt2(), this.configureHelp());
    }
    configureHelp(A) {
      if (A === void 0) return this._helpConfiguration;
      return this._helpConfiguration = A, this;
    }
    configureOutput(A) {
      if (A === void 0) return this._outputConfiguration;
      return Object.assign(this._outputConfiguration, A), this;
    }
    showHelpAfterError(A = !0) {
      if (typeof A !== "string") A = !!A;
      return this._showHelpAfterError = A, this;
    }
    showSuggestionAfterError(A = !0) {
      return this._showSuggestionAfterError = !!A, this;
    }
    addCommand(A, K) {
      if (!A._name) throw Error(`Command passed to .addCommand() must have a name
- specify the name in Command constructor or using .name()`);
      if (K = K || {}, K.isDefault) this._defaultCommandName = A._name;
      if (K.noHelp || K.hidden) A._hidden = !0;
      return this._registerCommand(A), A.parent = this, A._checkForBrokenPassThrough(), this;
    }
    createArgument(A, K) {
      return new Dt2(A, K);
    }
    argument(A, K, q, Y) {
      let z = this.createArgument(A, K);
      if (typeof q === "function") z.default(Y).argParser(q);else z.default(q);
      return this.addArgument(z), this;
    }
    arguments(A) {
      return A.trim().split(/ +/).forEach(K => {
        this.argument(K);
      }), this;
    }
    addArgument(A) {
      let K = this.registeredArguments.slice(-1)[0];
      if (K && K.variadic) throw Error(`only the last argument can be variadic '${K.name()}'`);
      if (A.required && A.defaultValue !== void 0 && A.parseArg === void 0) throw Error(`a default value for a required argument is never used: '${A.name()}'`);
      return this.registeredArguments.push(A), this;
    }
    helpCommand(A, K) {
      if (typeof A === "boolean") return this._addImplicitHelpCommand = A, this;
      A = A ?? "help [command]";
      let [, q, Y] = A.match(/([^ ]+) *(.*)/),
        z = K ?? "display help for command",
        w = this.createCommand(q);
      if (w.helpOption(!1), Y) w.arguments(Y);
      if (z) w.description(z);
      return this._addImplicitHelpCommand = !0, this._helpCommand = w, this;
    }
    addHelpCommand(A, K) {
      if (typeof A !== "object") return this.helpCommand(A, K), this;
      return this._addImplicitHelpCommand = !0, this._helpCommand = A, this;
    }
    _getHelpCommand() {
      if (this._addImplicitHelpCommand ?? (this.commands.length && !this._actionHandler && !this._findCommand("help"))) {
        if (this._helpCommand === void 0) this.helpCommand(void 0, void 0);
        return this._helpCommand;
      }
      return null;
    }
    hook(A, K) {
      let q = ["preSubcommand", "preAction", "postAction"];
      if (!q.includes(A)) throw Error(`Unexpected value for event passed to hook : '${A}'.
Expecting one of '${q.join("', '")}'`);
      if (this._lifeCycleHooks[A]) this._lifeCycleHooks[A].push(K);else this._lifeCycleHooks[A] = [K];
      return this;
    }
    exitOverride(A) {
      if (A) this._exitCallback = A;else this._exitCallback = K => {
        if (K.code !== "commander.executeSubCommandAsync") throw K;
      };
      return this;
    }
    _exit(A, K, q) {
      if (this._exitCallback) this._exitCallback(new bU6(A, K, q));
      T0.exit(A);
    }
    action(A) {
      let K = q => {
        let Y = this.registeredArguments.length,
          z = q.slice(0, Y);
        if (this._storeOptionsAsProperties) z[Y] = this;else z[Y] = this.opts();
        return z.push(this), A.apply(this, z);
      };
      return this._actionHandler = K, this;
    }
    createOption(A, K) {
      return new JkK(A, K);
    }
    _callParseArg(A, K, q, Y) {
      try {
        return A.parseArg(K, q);
      } catch (z) {
        if (z.code === "commander.invalidArgument") {
          let w = `${Y} ${z.message}`;
          this.error(w, {
            exitCode: z.exitCode,
            code: z.code
          });
        }
        throw z;
      }
    }
    _registerOption(A) {
      let K = A.short && this._findOption(A.short) || A.long && this._findOption(A.long);
      if (K) {
        let q = A.long && this._findOption(A.long) ? A.long : A.short;
        throw Error(`Cannot add option '${A.flags}'${this._name && ` to command '${this._name}'`} due to conflicting flag '${q}'
-  already used by option '${K.flags}'`);
      }
      this.options.push(A);
    }
    _registerCommand(A) {
      let K = Y => {
          return [Y.name()].concat(Y.aliases());
        },
        q = K(A).find(Y => this._findCommand(Y));
      if (q) {
        let Y = K(this._findCommand(q)).join("|"),
          z = K(A).join("|");
        throw Error(`cannot add command '${z}' as already have command '${Y}'`);
      }
      this.commands.push(A);
    }
    addOption(A) {
      this._registerOption(A);
      let K = A.name(),
        q = A.attributeName();
      if (A.negate) {
        let z = A.long.replace(/^--no-/, "--");
        if (!this._findOption(z)) this.setOptionValueWithSource(q, A.defaultValue === void 0 ? !0 : A.defaultValue, "default");
      } else if (A.defaultValue !== void 0) this.setOptionValueWithSource(q, A.defaultValue, "default");
      let Y = (z, w, H) => {
        if (z == null && A.presetArg !== void 0) z = A.presetArg;
        let J = this.getOptionValue(q);
        if (z !== null && A.parseArg) z = this._callParseArg(A, z, J, w);else if (z !== null && A.variadic) z = A._concatValue(z, J);
        if (z == null) if (A.negate) z = !1;else if (A.isBoolean() || A.optional) z = !0;else z = "";
        this.setOptionValueWithSource(q, z, H);
      };
      if (this.on("option:" + K, z => {
        let w = `error: option '${A.flags}' argument '${z}' is invalid.`;
        Y(z, w, "cli");
      }), A.envVar) this.on("optionEnv:" + K, z => {
        let w = `error: option '${A.flags}' value '${z}' from env '${A.envVar}' is invalid.`;
        Y(z, w, "env");
      });
      return this;
    }
    _optionEx(A, K, q, Y, z) {
      if (typeof K === "object" && K instanceof JkK) throw Error("To add an Option object use addOption() instead of option() or requiredOption()");
      let w = this.createOption(K, q);
      if (w.makeOptionMandatory(!!A.mandatory), typeof Y === "function") w.default(z).argParser(Y);else if (Y instanceof RegExp) {
        let H = Y;
        Y = (J, O) => {
          let X = H.exec(J);
          return X ? X[0] : O;
        }, w.default(z).argParser(Y);
      } else w.default(Y);
      return this.addOption(w);
    }
    option(A, K, q, Y) {
      return this._optionEx({}, A, K, q, Y);
    }
    requiredOption(A, K, q, Y) {
      return this._optionEx({
        mandatory: !0
      }, A, K, q, Y);
    }
    combineFlagAndOptionalValue(A = !0) {
      return this._combineFlagAndOptionalValue = !!A, this;
    }
    allowUnknownOption(A = !0) {
      return this._allowUnknownOption = !!A, this;
    }
    allowExcessArguments(A = !0) {
      return this._allowExcessArguments = !!A, this;
    }
    enablePositionalOptions(A = !0) {
      return this._enablePositionalOptions = !!A, this;
    }
    passThroughOptions(A = !0) {
      return this._passThroughOptions = !!A, this._checkForBrokenPassThrough(), this;
    }
    _checkForBrokenPassThrough() {
      if (this.parent && this._passThroughOptions && !this.parent._enablePositionalOptions) throw Error(`passThroughOptions cannot be used for '${this._name}' without turning on enablePositionalOptions for parent command(s)`);
    }
    storeOptionsAsProperties(A = !0) {
      if (this.options.length) throw Error("call .storeOptionsAsProperties() before adding options");
      if (Object.keys(this._optionValues).length) throw Error("call .storeOptionsAsProperties() before setting option values");
      return this._storeOptionsAsProperties = !!A, this;
    }
    getOptionValue(A) {
      if (this._storeOptionsAsProperties) return this[A];
      return this._optionValues[A];
    }
    setOptionValue(A, K) {
      return this.setOptionValueWithSource(A, K, void 0);
    }
    setOptionValueWithSource(A, K, q) {
      if (this._storeOptionsAsProperties) this[A] = K;else this._optionValues[A] = K;
      return this._optionValueSources[A] = q, this;
    }
    getOptionValueSource(A) {
      return this._optionValueSources[A];
    }
    getOptionValueSourceWithGlobals(A) {
      let K;
      return this._getCommandAndAncestors().forEach(q => {
        if (q.getOptionValueSource(A) !== void 0) K = q.getOptionValueSource(A);
      }), K;
    }
    _prepareUserArgs(A, K) {
      if (A !== void 0 && !Array.isArray(A)) throw Error("first parameter to parse must be array or undefined");
      if (K = K || {}, A === void 0 && K.from === void 0) {
        if (T0.versions?.electron) K.from = "electron";
        let Y = T0.execArgv ?? [];
        if (Y.includes("-e") || Y.includes("--eval") || Y.includes("-p") || Y.includes("--print")) K.from = "eval";
      }
      if (A === void 0) A = T0.argv;
      this.rawArgs = A.slice();
      let q;
      switch (K.from) {
        case void 0:
        case "node":
          this._scriptPath = A[1], q = A.slice(2);
          break;
        case "electron":
          if (T0.defaultApp) this._scriptPath = A[1], q = A.slice(2);else q = A.slice(1);
          break;
        case "user":
          q = A.slice(0);
          break;
        case "eval":
          q = A.slice(1);
          break;
        default:
          throw Error(`unexpected parse option { from: '${K.from}' }`);
      }
      if (!this._name && this._scriptPath) this.nameFromFilename(this._scriptPath);
      return this._name = this._name || "program", q;
    }
    parse(A, K) {
      let q = this._prepareUserArgs(A, K);
      return this._parseCommand([], q), this;
    }
    async parseAsync(A, K) {
      let q = this._prepareUserArgs(A, K);
      return await this._parseCommand([], q), this;
    }
    _executeSubCommand(A, K) {
      K = K.slice();
      let q = !1,
        Y = [".js", ".ts", ".tsx", ".mjs", ".cjs"];
      function z(X, $) {
        let _ = Mc.resolve(X, $);
        if (hU6.existsSync(_)) return _;
        if (Y.includes(Mc.extname($))) return;
        let G = Y.find(Z => hU6.existsSync(`${_}${Z}`));
        if (G) return `${_}${G}`;
        return;
      }
      this._checkForMissingMandatoryOptions(), this._checkForConflictingOptions();
      let w = A._executableFile || `${this._name}-${A._name}`,
        H = this._executableDir || "";
      if (this._scriptPath) {
        let X;
        try {
          X = hU6.realpathSync(this._scriptPath);
        } catch ($) {
          X = this._scriptPath;
        }
        H = Mc.resolve(Mc.dirname(X), H);
      }
      if (H) {
        let X = z(H, w);
        if (!X && !A._executableFile && this._scriptPath) {
          let $ = Mc.basename(this._scriptPath, Mc.extname(this._scriptPath));
          if ($ !== this._name) X = z(H, `${$}-${A._name}`);
        }
        w = X || w;
      }
      q = Y.includes(Mc.extname(w));
      let J;
      if (T0.platform !== "win32") {
        if (q) K.unshift(w), K = XkK(T0.execArgv).concat(K), J = SU6.spawn(T0.argv[0], K, {
          stdio: "inherit"
        });else J = SU6.spawn(w, K, {
          stdio: "inherit"
        });
      } else K.unshift(w), K = XkK(T0.execArgv).concat(K), J = SU6.spawn(T0.execPath, K, {
        stdio: "inherit"
      });
      if (!J.killed) ["SIGUSR1", "SIGUSR2", "SIGTERM", "SIGINT", "SIGHUP"].forEach($ => {
        T0.on($, () => {
          if (J.killed === !1 && J.exitCode === null) J.kill($);
        });
      });
      let O = this._exitCallback;
      J.on("close", X => {
        if (X = X ?? 1, !O) T0.exit(X);else O(new bU6(X, "commander.executeSubCommandAsync", "(close)"));
      }), J.on("error", X => {
        if (X.code === "ENOENT") {
          let $ = H ? `searched for local subcommand relative to directory '${H}'` : "no directory for search for local subcommand, use .executableDir() to supply a custom directory",
            _ = `'${w}' does not exist
 - if '${A._name}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead
 - if the default executable name is not suitable, use the executableFile option to supply a custom name or path
 - ${$}`;
          throw Error(_);
        } else if (X.code === "EACCES") throw Error(`'${w}' not executable`);
        if (!O) T0.exit(1);else {
          let $ = new bU6(1, "commander.executeSubCommandAsync", "(error)");
          $.nestedError = X, O($);
        }
      }), this.runningCommand = J;
    }
    _dispatchSubcommand(A, K, q) {
      let Y = this._findCommand(A);
      if (!Y) this.help({
        error: !0
      });
      let z;
      return z = this._chainOrCallSubCommandHook(z, Y, "preSubcommand"), z = this._chainOrCall(z, () => {
        if (Y._executableHandler) this._executeSubCommand(Y, K.concat(q));else return Y._parseCommand(K, q);
      }), z;
    }
    _dispatchHelpCommand(A) {
      if (!A) this.help();
      let K = this._findCommand(A);
      if (K && !K._executableHandler) K.help();
      return this._dispatchSubcommand(A, [], [this._getHelpOption()?.long ?? this._getHelpOption()?.short ?? "--help"]);
    }
    _checkNumberOfArguments() {
      if (this.registeredArguments.forEach((A, K) => {
        if (A.required && this.args[K] == null) this.missingArgument(A.name());
      }), this.registeredArguments.length > 0 && this.registeredArguments[this.registeredArguments.length - 1].variadic) return;
      if (this.args.length > this.registeredArguments.length) this._excessArguments(this.args);
    }
    _processArguments() {
      let A = (q, Y, z) => {
        let w = Y;
        if (Y !== null && q.parseArg) {
          let H = `error: command-argument value '${Y}' is invalid for argument '${q.name()}'.`;
          w = this._callParseArg(q, Y, z, H);
        }
        return w;
      };
      this._checkNumberOfArguments();
      let K = [];
      this.registeredArguments.forEach((q, Y) => {
        let z = q.defaultValue;
        if (q.variadic) {
          if (Y < this.args.length) {
            if (z = this.args.slice(Y), q.parseArg) z = z.reduce((w, H) => {
              return A(q, H, w);
            }, q.defaultValue);
          } else if (z === void 0) z = [];
        } else if (Y < this.args.length) {
          if (z = this.args[Y], q.parseArg) z = A(q, z, q.defaultValue);
        }
        K[Y] = z;
      }), this.processedArgs = K;
    }
    _chainOrCall(A, K) {
      if (A && A.then && typeof A.then === "function") return A.then(() => K());
      return K();
    }
    _chainOrCallHooks(A, K) {
      let q = A,
        Y = [];
      if (this._getCommandAndAncestors().reverse().filter(z => z._lifeCycleHooks[K] !== void 0).forEach(z => {
        z._lifeCycleHooks[K].forEach(w => {
          Y.push({
            hookedCommand: z,
            callback: w
          });
        });
      }), K === "postAction") Y.reverse();
      return Y.forEach(z => {
        q = this._chainOrCall(q, () => {
          return z.callback(z.hookedCommand, this);
        });
      }), q;
    }
    _chainOrCallSubCommandHook(A, K, q) {
      let Y = A;
      if (this._lifeCycleHooks[q] !== void 0) this._lifeCycleHooks[q].forEach(z => {
        Y = this._chainOrCall(Y, () => {
          return z(this, K);
        });
      });
      return Y;
    }
    _parseCommand(A, K) {
      let q = this.parseOptions(K);
      if (this._parseOptionsEnv(), this._parseOptionsImplied(), A = A.concat(q.operands), K = q.unknown, this.args = A.concat(K), A && this._findCommand(A[0])) return this._dispatchSubcommand(A[0], A.slice(1), K);
      if (this._getHelpCommand() && A[0] === this._getHelpCommand().name()) return this._dispatchHelpCommand(A[1]);
      if (this._defaultCommandName) return this._outputHelpIfRequested(K), this._dispatchSubcommand(this._defaultCommandName, A, K);
      if (this.commands.length && this.args.length === 0 && !this._actionHandler && !this._defaultCommandName) this.help({
        error: !0
      });
      this._outputHelpIfRequested(q.unknown), this._checkForMissingMandatoryOptions(), this._checkForConflictingOptions();
      let Y = () => {
          if (q.unknown.length > 0) this.unknownOption(q.unknown[0]);
        },
        z = `command:${this.name()}`;
      if (this._actionHandler) {
        Y(), this._processArguments();
        let w;
        if (w = this._chainOrCallHooks(w, "preAction"), w = this._chainOrCall(w, () => this._actionHandler(this.processedArgs)), this.parent) w = this._chainOrCall(w, () => {
          this.parent.emit(z, A, K);
        });
        return w = this._chainOrCallHooks(w, "postAction"), w;
      }
      if (this.parent && this.parent.listenerCount(z)) Y(), this._processArguments(), this.parent.emit(z, A, K);else if (A.length) {
        if (this._findCommand("*")) return this._dispatchSubcommand("*", A, K);
        if (this.listenerCount("command:*")) this.emit("command:*", A, K);else if (this.commands.length) this.unknownCommand();else Y(), this._processArguments();
      } else if (this.commands.length) Y(), this.help({
        error: !0
      });else Y(), this._processArguments();
    }
    _findCommand(A) {
      if (!A) return;
      return this.commands.find(K => K._name === A || K._aliases.includes(A));
    }
    _findOption(A) {
      return this.options.find(K => K.is(A));
    }
    _checkForMissingMandatoryOptions() {
      this._getCommandAndAncestors().forEach(A => {
        A.options.forEach(K => {
          if (K.mandatory && A.getOptionValue(K.attributeName()) === void 0) A.missingMandatoryOptionValue(K);
        });
      });
    }
    _checkForConflictingLocalOptions() {
      let A = this.options.filter(q => {
        let Y = q.attributeName();
        if (this.getOptionValue(Y) === void 0) return !1;
        return this.getOptionValueSource(Y) !== "default";
      });
      A.filter(q => q.conflictsWith.length > 0).forEach(q => {
        let Y = A.find(z => q.conflictsWith.includes(z.attributeName()));
        if (Y) this._conflictingOption(q, Y);
      });
    }
    _checkForConflictingOptions() {
      this._getCommandAndAncestors().forEach(A => {
        A._checkForConflictingLocalOptions();
      });
    }
    parseOptions(A) {
      let K = [],
        q = [],
        Y = K,
        z = A.slice();
      function w(J) {
        return J.length > 1 && J[0] === "-";
      }
      let H = null;
      while (z.length) {
        let J = z.shift();
        if (J === "--") {
          if (Y === q) Y.push(J);
          Y.push(...z);
          break;
        }
        if (H && !w(J)) {
          this.emit(`option:${H.name()}`, J);
          continue;
        }
        if (H = null, w(J)) {
          let O = this._findOption(J);
          if (O) {
            if (O.required) {
              let X = z.shift();
              if (X === void 0) this.optionMissingArgument(O);
              this.emit(`option:${O.name()}`, X);
            } else if (O.optional) {
              let X = null;
              if (z.length > 0 && !w(z[0])) X = z.shift();
              this.emit(`option:${O.name()}`, X);
            } else this.emit(`option:${O.name()}`);
            H = O.variadic ? O : null;
            continue;
          }
        }
        if (J.length > 2 && J[0] === "-" && J[1] !== "-") {
          let O = this._findOption(`-${J[1]}`);
          if (O) {
            if (O.required || O.optional && this._combineFlagAndOptionalValue) this.emit(`option:${O.name()}`, J.slice(2));else this.emit(`option:${O.name()}`), z.unshift(`-${J.slice(2)}`);
            continue;
          }
        }
        if (/^--[^=]+=/.test(J)) {
          let O = J.indexOf("="),
            X = this._findOption(J.slice(0, O));
          if (X && (X.required || X.optional)) {
            this.emit(`option:${X.name()}`, J.slice(O + 1));
            continue;
          }
        }
        if (w(J)) Y = q;
        if ((this._enablePositionalOptions || this._passThroughOptions) && K.length === 0 && q.length === 0) {
          if (this._findCommand(J)) {
            if (K.push(J), z.length > 0) q.push(...z);
            break;
          } else if (this._getHelpCommand() && J === this._getHelpCommand().name()) {
            if (K.push(J), z.length > 0) K.push(...z);
            break;
          } else if (this._defaultCommandName) {
            if (q.push(J), z.length > 0) q.push(...z);
            break;
          }
        }
        if (this._passThroughOptions) {
          if (Y.push(J), z.length > 0) Y.push(...z);
          break;
        }
        Y.push(J);
      }
      return {
        operands: K,
        unknown: q
      };
    }
    opts() {
      if (this._storeOptionsAsProperties) {
        let A = {},
          K = this.options.length;
        for (let q = 0; q < K; q++) {
          let Y = this.options[q].attributeName();
          A[Y] = Y === this._versionOptionName ? this._version : this[Y];
        }
        return A;
      }
      return this._optionValues;
    }
    optsWithGlobals() {
      return this._getCommandAndAncestors().reduce((A, K) => Object.assign(A, K.opts()), {});
    }
    error(A, K) {
      if (this._outputConfiguration.outputError(`${A}
`, this._outputConfiguration.writeErr), typeof this._showHelpAfterError === "string") this._outputConfiguration.writeErr(`${this._showHelpAfterError}
`);else if (this._showHelpAfterError) this._outputConfiguration.writeErr(`
`), this.outputHelp({
        error: !0
      });
      let q = K || {},
        Y = q.exitCode || 1,
        z = q.code || "commander.error";
      this._exit(Y, z, A);
    }
    _parseOptionsEnv() {
      this.options.forEach(A => {
        if (A.envVar && A.envVar in T0.env) {
          let K = A.attributeName();
          if (this.getOptionValue(K) === void 0 || ["default", "config", "env"].includes(this.getOptionValueSource(K))) if (A.required || A.optional) this.emit(`optionEnv:${A.name()}`, T0.env[A.envVar]);else this.emit(`optionEnv:${A.name()}`);
        }
      });
    }
    _parseOptionsImplied() {
      let A = new Pt2(this.options),
        K = q => {
          return this.getOptionValue(q) !== void 0 && !["default", "implied"].includes(this.getOptionValueSource(q));
        };
      this.options.filter(q => q.implied !== void 0 && K(q.attributeName()) && A.valueFromOption(this.getOptionValue(q.attributeName()), q)).forEach(q => {
        Object.keys(q.implied).filter(Y => !K(Y)).forEach(Y => {
          this.setOptionValueWithSource(Y, q.implied[Y], "implied");
        });
      });
    }
    missingArgument(A) {
      let K = `error: missing required argument '${A}'`;
      this.error(K, {
        code: "commander.missingArgument"
      });
    }
    optionMissingArgument(A) {
      let K = `error: option '${A.flags}' argument missing`;
      this.error(K, {
        code: "commander.optionMissingArgument"
      });
    }
    missingMandatoryOptionValue(A) {
      let K = `error: required option '${A.flags}' not specified`;
      this.error(K, {
        code: "commander.missingMandatoryOptionValue"
      });
    }
    _conflictingOption(A, K) {
      let q = w => {
          let H = w.attributeName(),
            J = this.getOptionValue(H),
            O = this.options.find($ => $.negate && H === $.attributeName()),
            X = this.options.find($ => !$.negate && H === $.attributeName());
          if (O && (O.presetArg === void 0 && J === !1 || O.presetArg !== void 0 && J === O.presetArg)) return O;
          return X || w;
        },
        Y = w => {
          let H = q(w),
            J = H.attributeName();
          if (this.getOptionValueSource(J) === "env") return `environment variable '${H.envVar}'`;
          return `option '${H.flags}'`;
        },
        z = `error: ${Y(A)} cannot be used with ${Y(K)}`;
      this.error(z, {
        code: "commander.conflictingOption"
      });
    }
    unknownOption(A) {
      if (this._allowUnknownOption) return;
      let K = "";
      if (A.startsWith("--") && this._showSuggestionAfterError) {
        let Y = [],
          z = this;
        do {
          let w = z.createHelp().visibleOptions(z).filter(H => H.long).map(H => H.long);
          Y = Y.concat(w), z = z.parent;
        } while (z && !z._enablePositionalOptions);
        K = OkK(A, Y);
      }
      let q = `error: unknown option '${A}'${K}`;
      this.error(q, {
        code: "commander.unknownOption"
      });
    }
    _excessArguments(A) {
      if (this._allowExcessArguments) return;
      let K = this.registeredArguments.length,
        q = K === 1 ? "" : "s",
        z = `error: too many arguments${this.parent ? ` for '${this.name()}'` : ""}. Expected ${K} argument${q} but got ${A.length}.`;
      this.error(z, {
        code: "commander.excessArguments"
      });
    }
    unknownCommand() {
      let A = this.args[0],
        K = "";
      if (this._showSuggestionAfterError) {
        let Y = [];
        this.createHelp().visibleCommands(this).forEach(z => {
          if (Y.push(z.name()), z.alias()) Y.push(z.alias());
        }), K = OkK(A, Y);
      }
      let q = `error: unknown command '${A}'${K}`;
      this.error(q, {
        code: "commander.unknownCommand"
      });
    }
    version(A, K, q) {
      if (A === void 0) return this._version;
      this._version = A, K = K || "-V, --version", q = q || "output the version number";
      let Y = this.createOption(K, q);
      return this._versionOptionName = Y.attributeName(), this._registerOption(Y), this.on("option:" + Y.name(), () => {
        this._outputConfiguration.writeOut(`${A}
`), this._exit(0, "commander.version", A);
      }), this;
    }
    description(A, K) {
      if (A === void 0 && K === void 0) return this._description;
      if (this._description = A, K) this._argsDescription = K;
      return this;
    }
    summary(A) {
      if (A === void 0) return this._summary;
      return this._summary = A, this;
    }
    alias(A) {
      if (A === void 0) return this._aliases[0];
      let K = this;
      if (this.commands.length !== 0 && this.commands[this.commands.length - 1]._executableHandler) K = this.commands[this.commands.length - 1];
      if (A === K._name) throw Error("Command alias can't be the same as its name");
      let q = this.parent?._findCommand(A);
      if (q) {
        let Y = [q.name()].concat(q.aliases()).join("|");
        throw Error(`cannot add alias '${A}' to command '${this.name()}' as already have command '${Y}'`);
      }
      return K._aliases.push(A), this;
    }
    aliases(A) {
      if (A === void 0) return this._aliases;
      return A.forEach(K => this.alias(K)), this;
    }
    usage(A) {
      if (A === void 0) {
        if (this._usage) return this._usage;
        let K = this.registeredArguments.map(q => {
          return jt2(q);
        });
        return [].concat(this.options.length || this._helpOption !== null ? "[options]" : [], this.commands.length ? "[command]" : [], this.registeredArguments.length ? K : []).join(" ");
      }
      return this._usage = A, this;
    }
    name(A) {
      if (A === void 0) return this._name;
      return this._name = A, this;
    }
    nameFromFilename(A) {
      return this._name = Mc.basename(A, Mc.extname(A)), this;
    }
    executableDir(A) {
      if (A === void 0) return this._executableDir;
      return this._executableDir = A, this;
    }
    helpInformation(A) {
      let K = this.createHelp();
      if (K.helpWidth === void 0) K.helpWidth = A && A.error ? this._outputConfiguration.getErrHelpWidth() : this._outputConfiguration.getOutHelpWidth();
      return K.formatHelp(this, K);
    }
    _getHelpContext(A) {
      A = A || {};
      let K = {
          error: !!A.error
        },
        q;
      if (K.error) q = Y => this._outputConfiguration.writeErr(Y);else q = Y => this._outputConfiguration.writeOut(Y);
      return K.write = A.write || q, K.command = this, K;
    }
    outputHelp(A) {
      let K;
      if (typeof A === "function") K = A, A = void 0;
      let q = this._getHelpContext(A);
      this._getCommandAndAncestors().reverse().forEach(z => z.emit("beforeAllHelp", q)), this.emit("beforeHelp", q);
      let Y = this.helpInformation(q);
      if (K) {
        if (Y = K(Y), typeof Y !== "string" && !Buffer.isBuffer(Y)) throw Error("outputHelp callback must return a string or a Buffer");
      }
      if (q.write(Y), this._getHelpOption()?.long) this.emit(this._getHelpOption().long);
      this.emit("afterHelp", q), this._getCommandAndAncestors().forEach(z => z.emit("afterAllHelp", q));
    }
    helpOption(A, K) {
      if (typeof A === "boolean") {
        if (A) this._helpOption = this._helpOption ?? void 0;else this._helpOption = null;
        return this;
      }
      return A = A ?? "-h, --help", K = K ?? "display help for command", this._helpOption = this.createOption(A, K), this;
    }
    _getHelpOption() {
      if (this._helpOption === void 0) this.helpOption(void 0, void 0);
      return this._helpOption;
    }
    addHelpOption(A) {
      return this._helpOption = A, this;
    }
    help(A) {
      this.outputHelp(A);
      let K = T0.exitCode || 0;
      if (K === 0 && A && typeof A !== "function" && A.error) K = 1;
      this._exit(K, "commander.help", "(outputHelp)");
    }
    addHelpText(A, K) {
      let q = ["beforeAll", "before", "after", "afterAll"];
      if (!q.includes(A)) throw Error(`Unexpected value for position to addHelpText.
Expecting one of '${q.join("', '")}'`);
      let Y = `${A}Help`;
      return this.on(Y, z => {
        let w;
        if (typeof K === "function") w = K({
          error: z.error,
          command: z.command
        });else w = K;
        if (w) z.write(`${w}
`);
      }), this;
    }
    _outputHelpIfRequested(A) {
      let K = this._getHelpOption();
      if (K && A.find(Y => K.is(Y))) this.outputHelp(), this._exit(0, "commander.helpDisplayed", "(outputHelp)");
    }
  }
  function XkK(A) {
    return A.map(K => {
      if (!K.startsWith("--inspect")) return K;
      let q,
        Y = "127.0.0.1",
        z = "9229",
        w;
      if ((w = K.match(/^(--inspect(-brk)?)$/)) !== null) q = w[1];else if ((w = K.match(/^(--inspect(-brk|-port)?)=([^:]+)$/)) !== null) {
        if (q = w[1], /^\d+$/.test(w[3])) z = w[3];else Y = w[3];
      } else if ((w = K.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/)) !== null) q = w[1], Y = w[3], z = w[4];
      if (q && z !== "0") return `${q}=${Y}:${parseInt(z) + 1}`;
      return K;
    });
  }
  Vt2.Command = xU6;
});

// Register to shared state
__$.$kK = $kK;
