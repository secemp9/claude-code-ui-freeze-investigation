// Module: YRK
// Dependencies: z7, b1, T6z

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var YRK = k(() => {
  __$.z7();
  __$.b1();
  __$.T6z = {
    email: {
      description: "email address",
      example: "user@example.com"
    },
    uri: {
      description: "URI",
      example: "https://example.com"
    },
    date: {
      description: "date",
      example: "2024-03-15"
    },
    "date-time": {
      description: "date-time",
      example: "2024-03-15T14:30:00Z"
    }
  };
});

// Register to shared state
__$.YRK = YRK;
