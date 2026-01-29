// Module: qz7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qz7 = v((tew, m$Y) => {
  m$Y.exports = {
    $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
    description: "Meta-schema for $data reference (JSON AnySchema extension proposal)",
    type: "object",
    required: ["$data"],
    properties: {
      $data: {
        type: "string",
        anyOf: [{
          format: "relative-json-pointer"
        }, {
          format: "json-pointer"
        }]
      }
    },
    additionalProperties: !1
  };
});

// Register to shared state
__$.qz7 = qz7;
