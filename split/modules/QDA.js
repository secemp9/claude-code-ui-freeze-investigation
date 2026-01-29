// Module: QDA
// Dependencies: n3, JG, C1, uz, Z1, l1, x4, i6, p7, os
//   ... and 7 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QDA = k(() => {
  __$.n3();
  __$.JG();
  __$.C1();
  __$.uz();
  __$.Z1();
  __$.l1();
  __$.x4();
  __$.i6();
  __$.p7();
  __$.os = __$.z6(async () => {
    try {
      let A = await __$.UW1(() => {
          let w = __$.BH();
          if (w.error) throw Error(`Failed to get auth headers: ${w.error}`);
          return __$.A8.get(`${__$.E7().BASE_API_URL}/api/claude_code_grove`, {
            headers: {
              ...w.headers,
              "User-Agent": __$.ln()
            },
            timeout: 3000
          });
        }),
        {
          grove_enabled: K,
          domain_excluded: q,
          notice_is_grace_period: Y,
          notice_reminder_frequency: z
        } = A.data;
      return {
        success: !0,
        data: {
          grove_enabled: K,
          domain_excluded: q ?? !1,
          notice_is_grace_period: Y ?? !0,
          notice_reminder_frequency: z
        }
      };
    } catch (A) {
      return __$.h(`Failed to fetch Grove notice config: ${A}`), {
        success: !1
      };
    }
  });
});

// Register to shared state
__$.QDA = QDA;
