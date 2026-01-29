// Module: IS
// Dependencies: uz, x4, n3, LT, C1, Z1, f3A, z7, b1, w4K
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var IS = k(() => {
  __$.uz();
  __$.x4();
  __$.n3();
  __$.LT();
  __$.C1();
  __$.Z1();
  __$.f3A();
  __$.z7();
  __$.b1();
  __$.w4K = [2000, 4000, 8000, 16000], __$.Ly6 = __$.w4K.length;
  __$.HD2 = __$.f7.object({
    id: __$.f7.string(),
    title: __$.f7.string(),
    description: __$.f7.string(),
    status: __$.f7.enum(["idle", "working", "waiting", "completed", "archived", "cancelled", "rejected"]),
    repo: __$.f7.object({
      name: __$.f7.string(),
      owner: __$.f7.object({
        login: __$.f7.string()
      }),
      default_branch: __$.f7.string().optional()
    }).nullable(),
    turns: __$.f7.array(__$.f7.string()),
    created_at: __$.f7.string(),
    updated_at: __$.f7.string()
  }), __$.NuH = __$.f7.array(__$.HD2);
});

// Register to shared state
__$.IS = IS;
