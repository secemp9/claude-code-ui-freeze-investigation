// Module: JS4
// Dependencies: X$A, i91, $$A, nIA, w96, J96, X96, bI4, uI4, Z96
//   ... and 6 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var JS4 = v(zP9 => {
  var KS4 = __$.X$A(),
    sM9 = __$.i91(),
    qS4 = __$.$$A(),
    tM9 = __$.nIA(),
    eM9 = __$.w96(),
    E96 = __$.J96(),
    k96 = __$.X96(),
    AP9 = __$.bI4(),
    KP9 = __$.uI4(),
    YS4 = __$.Z96(),
    sIA = __$.g91(),
    zS4 = __$.j96(),
    wS4 = __$.a91(),
    tI4 = __$.sI4(),
    HS4 = __$.V96(),
    qY1 = __$.N96(),
    eI4 = new Map([["core", AP9.schema], ["failsafe", [KS4.map, qS4.seq, tM9.string]], ["json", KP9.schema], ["yaml11", tI4.schema], ["yaml-1.1", tI4.schema]]),
    AS4 = {
      binary: YS4.binary,
      bool: eM9.boolTag,
      float: E96.float,
      floatExp: E96.floatExp,
      floatNaN: E96.floatNaN,
      floatTime: qY1.floatTime,
      int: k96.int,
      intHex: k96.intHex,
      intOct: k96.intOct,
      intTime: qY1.intTime,
      map: KS4.map,
      merge: sIA.merge,
      null: sM9.nullTag,
      omap: zS4.omap,
      pairs: wS4.pairs,
      seq: qS4.seq,
      set: HS4.set,
      timestamp: qY1.timestamp
    },
    qP9 = {
      "tag:yaml.org,2002:binary": YS4.binary,
      "tag:yaml.org,2002:merge": sIA.merge,
      "tag:yaml.org,2002:omap": zS4.omap,
      "tag:yaml.org,2002:pairs": wS4.pairs,
      "tag:yaml.org,2002:set": HS4.set,
      "tag:yaml.org,2002:timestamp": qY1.timestamp
    };
  function YP9(A, K, q) {
    let Y = eI4.get(K);
    if (Y && !A) return q && !Y.includes(sIA.merge) ? Y.concat(sIA.merge) : Y.slice();
    let z = Y;
    if (!z) if (Array.isArray(A)) z = [];else {
      let w = Array.from(eI4.keys()).filter(H => H !== "yaml11").map(H => JSON.stringify(H)).join(", ");
      throw Error(`Unknown schema "${K}"; use one of ${w} or define customTags array`);
    }
    if (Array.isArray(A)) for (let w of A) z = z.concat(w);else if (typeof A === "function") z = A(z.slice());
    if (q) z = z.concat(sIA.merge);
    return z.reduce((w, H) => {
      let J = typeof H === "string" ? AS4[H] : H;
      if (!J) {
        let O = JSON.stringify(H),
          X = Object.keys(AS4).map($ => JSON.stringify($)).join(", ");
        throw Error(`Unknown custom tag ${O}; use one of ${X}`);
      }
      if (!w.includes(J)) w.push(J);
      return w;
    }, []);
  }
  zP9.coreKnownTags = qP9;
  zP9.getTags = YP9;
});

// Register to shared state
__$.JS4 = JS4;
