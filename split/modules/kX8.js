// Module: kX8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kX8 = v((fLz, EX8) => {
  function Ifq(A) {
    return {
      name: "Q",
      aliases: ["k", "kdb"],
      keywords: {
        $pattern: /(`?)[A-Za-z0-9_]+\b/,
        keyword: "do while select delete by update from",
        literal: "0b 1b",
        built_in: "neg not null string reciprocal floor ceiling signum mod xbar xlog and or each scan over prior mmu lsq inv md5 ltime gtime count first var dev med cov cor all any rand sums prds mins maxs fills deltas ratios avgs differ prev next rank reverse iasc idesc asc desc msum mcount mavg mdev xrank mmin mmax xprev rotate distinct group where flip type key til get value attr cut set upsert raze union inter except cross sv vs sublist enlist read0 read1 hopen hclose hdel hsym hcount peach system ltrim rtrim trim lower upper ssr view tables views cols xcols keys xkey xcol xasc xdesc fkeys meta lj aj aj0 ij pj asof uj ww wj wj1 fby xgroup ungroup ej save load rsave rload show csv parse eval min max avg wavg wsum sin cos tan sum",
        type: "`float `double int `timestamp `timespan `datetime `time `boolean `symbol `char `byte `short `long `real `month `date `minute `second `guid"
      },
      contains: [A.C_LINE_COMMENT_MODE, A.QUOTE_STRING_MODE, A.C_NUMBER_MODE]
    };
  }
  EX8.exports = Ifq;
});

// Register to shared state
__$.kX8 = kX8;
