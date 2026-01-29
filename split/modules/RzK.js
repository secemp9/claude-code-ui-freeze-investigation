// Module: RzK
// Dependencies: cA, mA, __, J0, Eq, ca, $8, YK, NzK, MX
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var RzK = k(() => {
  __$.cA();
  __$.mA();
  __$.__();
  __$.J0();
  __$.Eq();
  __$.ca();
  __$.$8();
  __$.YK();
  __$.NzK();
  __$.MX = o(__$.$A(), 1), __$.UE2 = {
    goToDefinition: {
      singular: "definition",
      plural: "definitions"
    },
    findReferences: {
      singular: "reference",
      plural: "references"
    },
    documentSymbol: {
      singular: "symbol",
      plural: "symbols"
    },
    workspaceSymbol: {
      singular: "symbol",
      plural: "symbols"
    },
    hover: {
      singular: "hover info",
      plural: "hover info",
      special: "available"
    },
    goToImplementation: {
      singular: "implementation",
      plural: "implementations"
    },
    prepareCallHierarchy: {
      singular: "call item",
      plural: "call items"
    },
    incomingCalls: {
      singular: "caller",
      plural: "callers"
    },
    outgoingCalls: {
      singular: "callee",
      plural: "callees"
    }
  };
});

// Register to shared state
__$.RzK = RzK;
