// Module: zyA
// Dependencies: p7, x4, l6, C1, TQ, o0A, q14, XH4, S71, I46
//   ... and 9 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zyA = k(() => {
  __$.p7();
  __$.x4();
  __$.l6();
  __$.C1();
  __$.TQ();
  __$.o0A = o(__$.q14(), 1), __$.XH4 = o(__$.S71(), 1), __$.I46 = o(__$.Gz(), 1), __$.S46 = o(__$.zT(), 1), __$.$H4 = __$.z6(async function () {
    let A = await __$._H4(),
      K = [],
      q;
    try {
      do {
        let Y = new __$.o0A.ListInferenceProfilesCommand({
            ...(q && {
              nextToken: q
            }),
            typeEquals: "SYSTEM_DEFINED"
          }),
          z = await A.send(Y);
        if (z.inferenceProfileSummaries) K.push(...z.inferenceProfileSummaries);
        q = z.nextToken;
      } while (q);
      return K.filter(Y => Y.inferenceProfileId?.includes("anthropic")).map(Y => Y.inferenceProfileId).filter(Boolean);
    } catch (Y) {
      throw __$.KA(Y), Y;
    }
  });
  __$.jq1 = __$.z6(async function (A) {
    try {
      let K = await __$._H4(),
        q = new __$.o0A.GetInferenceProfileCommand({
          inferenceProfileIdentifier: A
        }),
        Y = await K.send(q);
      if (!Y.models || Y.models.length === 0) return null;
      let z = Y.models[0];
      if (!z?.modelArn) return null;
      let w = z.modelArn.lastIndexOf("/");
      return w >= 0 ? z.modelArn.substring(w + 1) : z.modelArn;
    } catch (K) {
      return __$.KA(K), null;
    }
  });
  __$.dr3 = ["us", "eu", "apac", "global"];
});

// Register to shared state
__$.zyA = zyA;
