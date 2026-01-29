// Module: v07
// Dependencies: HH, W07, V07, N07

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var v07 = v((j8H, T07) => {
  var FPY = __$.HH().fromPromise,
    QM = __$.W07();
  QM.outputJson = FPY(__$.V07());
  QM.outputJsonSync = __$.N07();
  QM.outputJSON = QM.outputJson;
  QM.outputJSONSync = QM.outputJsonSync;
  QM.writeJSON = QM.writeJson;
  QM.writeJSONSync = QM.writeJsonSync;
  QM.readJSON = QM.readJson;
  QM.readJSONSync = QM.readJsonSync;
  T07.exports = QM;
});

// Register to shared state
__$.v07 = v07;
