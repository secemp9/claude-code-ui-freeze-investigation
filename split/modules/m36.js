// Module: m36
// Dependencies: cQ, B36, gG9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var m36 = k(() => {
  __$.cQ = {
    fromJSON(A) {
      return {
        account_id: __$.B36(A.account_id) ? globalThis.Number(A.account_id) : 0,
        organization_uuid: __$.B36(A.organization_uuid) ? globalThis.String(A.organization_uuid) : "",
        account_uuid: __$.B36(A.account_uuid) ? globalThis.String(A.account_uuid) : ""
      };
    },
    toJSON(A) {
      let K = {};
      if (A.account_id !== void 0) K.account_id = Math.round(A.account_id);
      if (A.organization_uuid !== void 0) K.organization_uuid = A.organization_uuid;
      if (A.account_uuid !== void 0) K.account_uuid = A.account_uuid;
      return K;
    },
    create(A) {
      return __$.cQ.fromPartial(A ?? {});
    },
    fromPartial(A) {
      let K = __$.gG9();
      return K.account_id = A.account_id ?? 0, K.organization_uuid = A.organization_uuid ?? "", K.account_uuid = A.account_uuid ?? "", K;
    }
  };
});

// Register to shared state
__$.m36 = m36;
