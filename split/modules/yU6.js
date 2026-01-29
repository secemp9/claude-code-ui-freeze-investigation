// Module: yU6
// Dependencies: dE1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yU6 = v(qt2 => {
  var {
    humanReadableArgName: Kt2
  } = __$.dE1();
  class YkK {
    constructor() {
      this.helpWidth = void 0, this.sortSubcommands = !1, this.sortOptions = !1, this.showGlobalOptions = !1;
    }
    visibleCommands(A) {
      let K = A.commands.filter(Y => !Y._hidden),
        q = A._getHelpCommand();
      if (q && !q._hidden) K.push(q);
      if (this.sortSubcommands) K.sort((Y, z) => {
        return Y.name().localeCompare(z.name());
      });
      return K;
    }
    compareOptions(A, K) {
      let q = Y => {
        return Y.short ? Y.short.replace(/^-/, "") : Y.long.replace(/^--/, "");
      };
      return q(A).localeCompare(q(K));
    }
    visibleOptions(A) {
      let K = A.options.filter(Y => !Y.hidden),
        q = A._getHelpOption();
      if (q && !q.hidden) {
        let Y = q.short && A._findOption(q.short),
          z = q.long && A._findOption(q.long);
        if (!Y && !z) K.push(q);else if (q.long && !z) K.push(A.createOption(q.long, q.description));else if (q.short && !Y) K.push(A.createOption(q.short, q.description));
      }
      if (this.sortOptions) K.sort(this.compareOptions);
      return K;
    }
    visibleGlobalOptions(A) {
      if (!this.showGlobalOptions) return [];
      let K = [];
      for (let q = A.parent; q; q = q.parent) {
        let Y = q.options.filter(z => !z.hidden);
        K.push(...Y);
      }
      if (this.sortOptions) K.sort(this.compareOptions);
      return K;
    }
    visibleArguments(A) {
      if (A._argsDescription) A.registeredArguments.forEach(K => {
        K.description = K.description || A._argsDescription[K.name()] || "";
      });
      if (A.registeredArguments.find(K => K.description)) return A.registeredArguments;
      return [];
    }
    subcommandTerm(A) {
      let K = A.registeredArguments.map(q => Kt2(q)).join(" ");
      return A._name + (A._aliases[0] ? "|" + A._aliases[0] : "") + (A.options.length ? " [options]" : "") + (K ? " " + K : "");
    }
    optionTerm(A) {
      return A.flags;
    }
    argumentTerm(A) {
      return A.name();
    }
    longestSubcommandTermLength(A, K) {
      return K.visibleCommands(A).reduce((q, Y) => {
        return Math.max(q, K.subcommandTerm(Y).length);
      }, 0);
    }
    longestOptionTermLength(A, K) {
      return K.visibleOptions(A).reduce((q, Y) => {
        return Math.max(q, K.optionTerm(Y).length);
      }, 0);
    }
    longestGlobalOptionTermLength(A, K) {
      return K.visibleGlobalOptions(A).reduce((q, Y) => {
        return Math.max(q, K.optionTerm(Y).length);
      }, 0);
    }
    longestArgumentTermLength(A, K) {
      return K.visibleArguments(A).reduce((q, Y) => {
        return Math.max(q, K.argumentTerm(Y).length);
      }, 0);
    }
    commandUsage(A) {
      let K = A._name;
      if (A._aliases[0]) K = K + "|" + A._aliases[0];
      let q = "";
      for (let Y = A.parent; Y; Y = Y.parent) q = Y.name() + " " + q;
      return q + K + " " + A.usage();
    }
    commandDescription(A) {
      return A.description();
    }
    subcommandDescription(A) {
      return A.summary() || A.description();
    }
    optionDescription(A) {
      let K = [];
      if (A.argChoices) K.push(`choices: ${A.argChoices.map(q => JSON.stringify(q)).join(", ")}`);
      if (A.defaultValue !== void 0) {
        if (A.required || A.optional || A.isBoolean() && typeof A.defaultValue === "boolean") K.push(`default: ${A.defaultValueDescription || JSON.stringify(A.defaultValue)}`);
      }
      if (A.presetArg !== void 0 && A.optional) K.push(`preset: ${JSON.stringify(A.presetArg)}`);
      if (A.envVar !== void 0) K.push(`env: ${A.envVar}`);
      if (K.length > 0) return `${A.description} (${K.join(", ")})`;
      return A.description;
    }
    argumentDescription(A) {
      let K = [];
      if (A.argChoices) K.push(`choices: ${A.argChoices.map(q => JSON.stringify(q)).join(", ")}`);
      if (A.defaultValue !== void 0) K.push(`default: ${A.defaultValueDescription || JSON.stringify(A.defaultValue)}`);
      if (K.length > 0) {
        let q = `(${K.join(", ")})`;
        if (A.description) return `${A.description} ${q}`;
        return q;
      }
      return A.description;
    }
    formatHelp(A, K) {
      let q = K.padWidth(A, K),
        Y = K.helpWidth || 80,
        z = 2,
        w = 2;
      function H(Z, W) {
        if (W) {
          let D = `${Z.padEnd(q + 2)}${W}`;
          return K.wrap(D, Y - 2, q + 2);
        }
        return Z;
      }
      function J(Z) {
        return Z.join(`
`).replace(/^/gm, " ".repeat(2));
      }
      let O = [`Usage: ${K.commandUsage(A)}`, ""],
        X = K.commandDescription(A);
      if (X.length > 0) O = O.concat([K.wrap(X, Y, 0), ""]);
      let $ = K.visibleArguments(A).map(Z => {
        return H(K.argumentTerm(Z), K.argumentDescription(Z));
      });
      if ($.length > 0) O = O.concat(["Arguments:", J($), ""]);
      let _ = K.visibleOptions(A).map(Z => {
        return H(K.optionTerm(Z), K.optionDescription(Z));
      });
      if (_.length > 0) O = O.concat(["Options:", J(_), ""]);
      if (this.showGlobalOptions) {
        let Z = K.visibleGlobalOptions(A).map(W => {
          return H(K.optionTerm(W), K.optionDescription(W));
        });
        if (Z.length > 0) O = O.concat(["Global Options:", J(Z), ""]);
      }
      let G = K.visibleCommands(A).map(Z => {
        return H(K.subcommandTerm(Z), K.subcommandDescription(Z));
      });
      if (G.length > 0) O = O.concat(["Commands:", J(G), ""]);
      return O.join(`
`);
    }
    padWidth(A, K) {
      return Math.max(K.longestOptionTermLength(A, K), K.longestGlobalOptionTermLength(A, K), K.longestSubcommandTermLength(A, K), K.longestArgumentTermLength(A, K));
    }
    wrap(A, K, q, Y = 40) {
      let w = new RegExp(`[\\n][${" \\f\\t\\v   -   　\uFEFF"}]+`);
      if (A.match(w)) return A;
      let H = K - q;
      if (H < Y) return A;
      let J = A.slice(0, q),
        O = A.slice(q).replace(`\r
`, `
`),
        X = " ".repeat(q),
        _ = `\\s${"​"}`,
        G = new RegExp(`
|.{1,${H - 1}}([${_}]|$)|[^${_}]+?([${_}]|$)`, "g"),
        Z = O.match(G) || [];
      return J + Z.map((W, D) => {
        if (W === `
`) return "";
        return (D > 0 ? X : "") + W.trimEnd();
      }).join(`
`);
    }
  }
  qt2.Help = YkK;
});

// Register to shared state
__$.yU6 = yU6;
