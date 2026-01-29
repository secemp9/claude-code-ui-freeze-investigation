// Module: Zf6
// Dependencies: z7, vv7, U, Gf6, Ev7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Zf6 = k(() => {
  __$.z7();
  __$.vv7 = __$.U.strictObject({
    file_path: __$.U.string().describe("The absolute path to the file to modify"),
    old_string: __$.U.string().describe("The text to replace"),
    new_string: __$.U.string().describe("The text to replace it with (must be different from old_string)"),
    replace_all: __$.U.boolean().default(!1).optional().describe("Replace all occurences of old_string (default false)")
  }), __$.Gf6 = __$.U.object({
    oldStart: __$.U.number(),
    oldLines: __$.U.number(),
    newStart: __$.U.number(),
    newLines: __$.U.number(),
    lines: __$.U.array(__$.U.string())
  }), __$.Ev7 = __$.U.object({
    filePath: __$.U.string().describe("The file path that was edited"),
    oldString: __$.U.string().describe("The original string that was replaced"),
    newString: __$.U.string().describe("The new string that replaced it"),
    originalFile: __$.U.string().describe("The original file contents before editing"),
    structuredPatch: __$.U.array(__$.Gf6).describe("Diff patch showing the changes"),
    userModified: __$.U.boolean().describe("Whether the user modified the proposed changes"),
    replaceAll: __$.U.boolean().describe("Whether all occurrences were replaced"),
    gitDiff: __$.U.object({
      filename: __$.U.string(),
      status: __$.U.enum(["modified", "added"]),
      additions: __$.U.number(),
      deletions: __$.U.number(),
      changes: __$.U.number(),
      patch: __$.U.string()
    }).optional()
  });
});

// Register to shared state
__$.Zf6 = Zf6;
