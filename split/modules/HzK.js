// Module: HzK
// Dependencies: z7, IE2, U, SE2, hE2, bE2, xE2, uE2, BE2, mE2
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var HzK = k(() => {
  __$.z7();
  __$.IE2 = __$.U.strictObject({
    operation: __$.U.literal("goToDefinition"),
    filePath: __$.U.string().describe("The absolute or relative path to the file"),
    line: __$.U.number().int().positive().describe("The line number (1-based, as shown in editors)"),
    character: __$.U.number().int().positive().describe("The character offset (1-based, as shown in editors)")
  }), __$.SE2 = __$.U.strictObject({
    operation: __$.U.literal("findReferences"),
    filePath: __$.U.string().describe("The absolute or relative path to the file"),
    line: __$.U.number().int().positive().describe("The line number (1-based, as shown in editors)"),
    character: __$.U.number().int().positive().describe("The character offset (1-based, as shown in editors)")
  }), __$.hE2 = __$.U.strictObject({
    operation: __$.U.literal("hover"),
    filePath: __$.U.string().describe("The absolute or relative path to the file"),
    line: __$.U.number().int().positive().describe("The line number (1-based, as shown in editors)"),
    character: __$.U.number().int().positive().describe("The character offset (1-based, as shown in editors)")
  }), __$.bE2 = __$.U.strictObject({
    operation: __$.U.literal("documentSymbol"),
    filePath: __$.U.string().describe("The absolute or relative path to the file"),
    line: __$.U.number().int().positive().describe("The line number (1-based, as shown in editors)"),
    character: __$.U.number().int().positive().describe("The character offset (1-based, as shown in editors)")
  }), __$.xE2 = __$.U.strictObject({
    operation: __$.U.literal("workspaceSymbol"),
    filePath: __$.U.string().describe("The absolute or relative path to the file"),
    line: __$.U.number().int().positive().describe("The line number (1-based, as shown in editors)"),
    character: __$.U.number().int().positive().describe("The character offset (1-based, as shown in editors)")
  }), __$.uE2 = __$.U.strictObject({
    operation: __$.U.literal("goToImplementation"),
    filePath: __$.U.string().describe("The absolute or relative path to the file"),
    line: __$.U.number().int().positive().describe("The line number (1-based, as shown in editors)"),
    character: __$.U.number().int().positive().describe("The character offset (1-based, as shown in editors)")
  }), __$.BE2 = __$.U.strictObject({
    operation: __$.U.literal("prepareCallHierarchy"),
    filePath: __$.U.string().describe("The absolute or relative path to the file"),
    line: __$.U.number().int().positive().describe("The line number (1-based, as shown in editors)"),
    character: __$.U.number().int().positive().describe("The character offset (1-based, as shown in editors)")
  }), __$.mE2 = __$.U.strictObject({
    operation: __$.U.literal("incomingCalls"),
    filePath: __$.U.string().describe("The absolute or relative path to the file"),
    line: __$.U.number().int().positive().describe("The line number (1-based, as shown in editors)"),
    character: __$.U.number().int().positive().describe("The character offset (1-based, as shown in editors)")
  }), __$.gE2 = __$.U.strictObject({
    operation: __$.U.literal("outgoingCalls"),
    filePath: __$.U.string().describe("The absolute or relative path to the file"),
    line: __$.U.number().int().positive().describe("The line number (1-based, as shown in editors)"),
    character: __$.U.number().int().positive().describe("The character offset (1-based, as shown in editors)")
  }), __$.wzK = __$.U.discriminatedUnion("operation", [__$.IE2, __$.SE2, __$.hE2, __$.bE2, __$.xE2, __$.uE2, __$.BE2, __$.mE2, __$.gE2]);
});

// Register to shared state
__$.HzK = HzK;
