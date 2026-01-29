// Module: ad6
// Dependencies: IH, Zqz

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ad6 = k(() => {
  __$.IH();
  __$.Zqz = {
    "claude-3-opus": {
      modelName: "Claude 3 Opus",
      retirementDates: {
        firstParty: "January 5, 2026",
        bedrock: "January 15, 2026",
        vertex: "January 5, 2026",
        foundry: "January 5, 2026"
      }
    },
    "claude-3-7-sonnet": {
      modelName: "Claude 3.7 Sonnet",
      retirementDates: {
        firstParty: "February 19, 2026",
        bedrock: "April 28, 2026",
        vertex: "May 11, 2026",
        foundry: "February 19, 2026"
      }
    },
    "claude-3-5-haiku": {
      modelName: "Claude 3.5 Haiku",
      retirementDates: {
        firstParty: "February 19, 2026",
        bedrock: null,
        vertex: null,
        foundry: null
      }
    }
  };
});

// Register to shared state
__$.ad6 = ad6;
