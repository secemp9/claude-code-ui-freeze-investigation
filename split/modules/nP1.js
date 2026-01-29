// Module: nP1
// Dependencies: l1, gO, xI6, JM2, GH

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nP1 = k(() => {
  __$.l1();
  __$.gO();
  __$.xI6 = /\$\(.*<</, __$.JM2 = [{
    pattern: /<\(/,
    message: "process substitution <()"
  }, {
    pattern: />\(/,
    message: "process substitution >()"
  }, {
    pattern: /\$\(/,
    message: "$() command substitution"
  }, {
    pattern: /\$\{/,
    message: "${} parameter substitution"
  }, {
    pattern: /~\[/,
    message: "Zsh-style parameter expansion"
  }, {
    pattern: /\(e:/,
    message: "Zsh-style glob qualifiers"
  }, {
    pattern: /<#/,
    message: "PowerShell comment syntax"
  }], __$.GH = {
    INCOMPLETE_COMMANDS: 1,
    JQ_SYSTEM_FUNCTION: 2,
    JQ_FILE_ARGUMENTS: 3,
    OBFUSCATED_FLAGS: 4,
    SHELL_METACHARACTERS: 5,
    DANGEROUS_VARIABLES: 6,
    NEWLINES: 7,
    DANGEROUS_PATTERNS_COMMAND_SUBSTITUTION: 8,
    DANGEROUS_PATTERNS_INPUT_REDIRECTION: 9,
    DANGEROUS_PATTERNS_OUTPUT_REDIRECTION: 10,
    IFS_INJECTION: 11,
    GIT_COMMIT_SUBSTITUTION: 12,
    PROC_ENVIRON_ACCESS: 13,
    MALFORMED_TOKEN_INJECTION: 14
  };
});

// Register to shared state
__$.nP1 = nP1;
