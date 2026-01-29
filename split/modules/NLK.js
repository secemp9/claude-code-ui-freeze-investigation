// Module: NLK
// Dependencies: l1, sO, C1, Z1, B7, i6, b1, K7, kf1, z7
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var NLK = k(() => {
  __$.l1();
  __$.sO();
  __$.C1();
  __$.Z1();
  __$.B7();
  __$.i6();
  __$.b1();
  __$.K7();
  __$.kf1();
  __$.z7();
  __$.T1z = {
    LOW: 1,
    MEDIUM: 2,
    HIGH: 3
  }, __$.L1z = {
    name: "explain_command",
    description: "Provide an explanation of a shell command",
    input_schema: {
      type: "object",
      properties: {
        explanation: {
          type: "string",
          description: "What this command does (1-2 sentences)"
        },
        reasoning: {
          type: "string",
          description: 'Why YOU are running this command. Start with "I" - e.g. "I need to check the file contents"'
        },
        risk: {
          type: "string",
          description: "What could go wrong, under 15 words"
        },
        riskLevel: {
          type: "string",
          enum: ["LOW", "MEDIUM", "HIGH"],
          description: "LOW (safe dev workflows), MEDIUM (recoverable changes), HIGH (dangerous/irreversible)"
        }
      },
      required: ["explanation", "reasoning", "risk", "riskLevel"]
    }
  }, __$.R1z = __$.U.object({
    riskLevel: __$.U.enum(["LOW", "MEDIUM", "HIGH"]),
    explanation: __$.U.string(),
    reasoning: __$.U.string(),
    risk: __$.U.string()
  });
});

// Register to shared state
__$.NLK = NLK;
