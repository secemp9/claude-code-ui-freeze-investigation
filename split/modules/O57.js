// Module: O57
// Dependencies: Fq7, pq7, cq7, tq7, eq7, H57, z_6, YX, P_6, tY
//   ... and 9 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var O57 = k(() => {
  __$.Fq7();
  __$.pq7();
  __$.cq7();
  __$.tq7();
  __$.eq7();
  __$.H57();
  __$.z_6();
  __$.YX();
  __$.P_6 = __$.tY("DefaultAzureCredential");
  __$.gJ1 = class gJ1 extends __$.Z_6 {
    constructor(A) {
      let K = process.env.AZURE_TOKEN_CREDENTIALS ? process.env.AZURE_TOKEN_CREDENTIALS.trim().toLowerCase() : void 0,
        q = [__$.l2Y, __$.i2Y, __$.c2Y],
        Y = [__$.n2Y, __$.d2Y, __$.p2Y],
        z = [];
      if (K) switch (K) {
        case "dev":
          z = q;
          break;
        case "prod":
          z = Y;
          break;
        default:
          {
            let H = `Invalid value for AZURE_TOKEN_CREDENTIALS = ${process.env.AZURE_TOKEN_CREDENTIALS}. Valid values are 'prod' or 'dev'.`;
            throw __$.P_6.warning(H), Error(H);
          }
      } else z = [...Y, ...q];
      let w = z.map(H => {
        try {
          return H(A);
        } catch (J) {
          return __$.P_6.warning(`Skipped ${H.name} because of an error creating the credential: ${J}`), new __$.J57(H.name, J.message);
        }
      });
      super(...w);
    }
  };
});

// Register to shared state
__$.O57 = O57;
