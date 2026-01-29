// Module: sI4
// Dependencies: X$A, i91, $$A, nIA, Z96, cI4, lI4, nI4, g91, j96
//   ... and 3 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sI4 = v(oM9 => {
  var FM9 = __$.X$A(),
    QM9 = __$.i91(),
    UM9 = __$.$$A(),
    pM9 = __$.nIA(),
    dM9 = __$.Z96(),
    aI4 = __$.cI4(),
    T96 = __$.lI4(),
    KY1 = __$.nI4(),
    cM9 = __$.g91(),
    lM9 = __$.j96(),
    iM9 = __$.a91(),
    nM9 = __$.V96(),
    v96 = __$.N96(),
    rM9 = [FM9.map, UM9.seq, pM9.string, QM9.nullTag, aI4.trueTag, aI4.falseTag, KY1.intBin, KY1.intOct, KY1.int, KY1.intHex, T96.floatNaN, T96.floatExp, T96.float, dM9.binary, cM9.merge, lM9.omap, iM9.pairs, nM9.set, v96.intTime, v96.floatTime, v96.timestamp];
  oM9.schema = rM9;
});

// Register to shared state
__$.sI4 = sI4;
