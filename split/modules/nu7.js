// Module: nu7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nu7 = v(lu7 => {
  Object.defineProperty(lu7, "__esModule", {
    value: !0
  });
  lu7.getConflictResolutionRecipe = lu7.getDescriptionResolutionRecipe = lu7.getTypeConflictResolutionRecipe = lu7.getUnitConflictResolutionRecipe = lu7.getValueTypeConflictResolutionRecipe = lu7.getIncompatibilityDetails = void 0;
  function A12(A, K) {
    let q = "";
    if (A.unit !== K.unit) q += `	- Unit '${A.unit}' does not match '${K.unit}'
`;
    if (A.type !== K.type) q += `	- Type '${A.type}' does not match '${K.type}'
`;
    if (A.valueType !== K.valueType) q += `	- Value Type '${A.valueType}' does not match '${K.valueType}'
`;
    if (A.description !== K.description) q += `	- Description '${A.description}' does not match '${K.description}'
`;
    return q;
  }
  lu7.getIncompatibilityDetails = A12;
  function Uu7(A, K) {
    return `	- use valueType '${A.valueType}' on instrument creation or use an instrument name other than '${K.name}'`;
  }
  lu7.getValueTypeConflictResolutionRecipe = Uu7;
  function pu7(A, K) {
    return `	- use unit '${A.unit}' on instrument creation or use an instrument name other than '${K.name}'`;
  }
  lu7.getUnitConflictResolutionRecipe = pu7;
  function du7(A, K) {
    let q = {
        name: K.name,
        type: K.type,
        unit: K.unit
      },
      Y = JSON.stringify(q);
    return `	- create a new view with a name other than '${A.name}' and InstrumentSelector '${Y}'`;
  }
  lu7.getTypeConflictResolutionRecipe = du7;
  function cu7(A, K) {
    let q = {
        name: K.name,
        type: K.type,
        unit: K.unit
      },
      Y = JSON.stringify(q);
    return `	- create a new view with a name other than '${A.name}' and InstrumentSelector '${Y}'
    	- OR - create a new view with the name ${A.name} and description '${A.description}' and InstrumentSelector ${Y}
    	- OR - create a new view with the name ${K.name} and description '${A.description}' and InstrumentSelector ${Y}`;
  }
  lu7.getDescriptionResolutionRecipe = cu7;
  function K12(A, K) {
    if (A.valueType !== K.valueType) return Uu7(A, K);
    if (A.unit !== K.unit) return pu7(A, K);
    if (A.type !== K.type) return du7(A, K);
    if (A.description !== K.description) return cu7(A, K);
    return "";
  }
  lu7.getConflictResolutionRecipe = K12;
});

// Register to shared state
__$.nu7 = nu7;
