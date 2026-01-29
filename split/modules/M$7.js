// Module: M$7
// Dependencies: HH, O$7, Z$7, D$7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var M$7 = v((c8H, j$7) => {
  var gfY = __$.HH().fromPromise,
    UM = __$.O$7();
  UM.outputJson = gfY(__$.Z$7());
  UM.outputJsonSync = __$.D$7();
  UM.outputJSON = UM.outputJson;
  UM.outputJSONSync = UM.outputJsonSync;
  UM.writeJSON = UM.writeJson;
  UM.writeJSONSync = UM.writeJsonSync;
  UM.readJSON = UM.readJson;
  UM.readJSONSync = UM.readJsonSync;
  j$7.exports = UM;
});

// Register to shared state
__$.M$7 = M$7;
